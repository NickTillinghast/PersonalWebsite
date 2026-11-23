# Hosting on AWS

The site is static files in a private S3 bucket behind CloudFront, for about $0.50 a month (the Route 53 zone; the rest fits in the free tier). Every push to `main` deploys it automatically, using [.github/workflows/deploy.yml](../.github/workflows/deploy.yml). Same layout as nickshouseofhorrors and amethystandash, minus the Lambda server.

```
Browser ─▶ CloudFront (nicktillinghast.com, www redirects to it)
             └─ S3 bucket (dist/ from the Astro build)
```

| Stack                       | File            | When it's deployed                      |
| --------------------------- | --------------- | --------------------------------------- |
| `nicktillinghast-bootstrap` | `bootstrap.yml` | Once, by you                            |
| `nicktillinghast-dns-zone`  | `dns-zone.yml`  | Once, by you                            |
| `nicktillinghast-dns-cert`  | `dns-cert.yml`  | Once, by you, after the GoDaddy switch  |
| `nicktillinghast-app`       | `app.yml`       | Every push to `main`, by GitHub Actions |

The stack names matter, because the workflow and templates look them up by name.

## One-time setup

All commands run from the repo root, in **us-east-1**, after `aws sso login`.

### 1. Bootstrap

Creates the site bucket and the GitHub deploy role. It reuses the GitHub sign-in provider that the nickshouseofhorrors setup already created in this account.

```bash
aws cloudformation deploy \
  --stack-name nicktillinghast-bootstrap \
  --template-file infra/bootstrap.yml \
  --capabilities CAPABILITY_IAM
```

### 2. Move DNS from GoDaddy to Route 53

The domain stays registered at GoDaddy (renewals keep happening there). Only its DNS moves to AWS.

**Before switching**, in GoDaddy (My Products → nicktillinghast.com → DNS):

- Check for any records you want to keep. Right now there are only GoDaddy's defaults: parking/forwarding `A` records (replaced by this setup) and `MX` records for GoDaddy email (dropped unless you use it).
- Turn off DNSSEC if it's on, and remove any domain forwarding.

Create the hosted zone and print its nameservers. For email forwarding through ImprovMX, add `--parameter-overrides EmailForwarding=improvmx` (and add the domain in ImprovMX).

```bash
aws cloudformation deploy \
  --stack-name nicktillinghast-dns-zone \
  --template-file infra/dns-zone.yml

aws cloudformation describe-stacks --stack-name nicktillinghast-dns-zone \
  --query "Stacks[0].Outputs[?OutputKey=='NameServers'].OutputValue" --output text
```

In GoDaddy: **DNS → Nameservers → Change nameservers → I'll use my own nameservers**, and paste the 4 values (without trailing dots).

Usually live within an hour, up to 48 hours. Check with:

```bash
dig NS nicktillinghast.com +short   # should list the awsdns servers from the output above
```

### 3. HTTPS certificate

Once `dig` shows the AWS nameservers:

```bash
aws cloudformation deploy \
  --stack-name nicktillinghast-dns-cert \
  --template-file infra/dns-cert.yml
```

This waits until AWS issues the certificate, usually a few minutes. If it times out, run it again.

### 4. GitHub setting

GitHub → repo → **Settings → Secrets and variables → Actions → Variables**:

| Name                  | Value                                                |
| --------------------- | ---------------------------------------------------- |
| `AWS_DEPLOY_ROLE_ARN` | the bootstrap output `DeployRoleArn` (command below) |

```bash
aws cloudformation describe-stacks --stack-name nicktillinghast-bootstrap \
  --query "Stacks[0].Outputs[?OutputKey=='DeployRoleArn'].OutputValue" --output text
```

Until this variable exists, pushes still run the checks but skip the deploy. No secrets are needed.

### 5. First deploy

Push to `main`, or click **Actions → Deploy → Run workflow**. The first run creates the app stack; CloudFront takes 5–15 minutes the first time.

### 6. After it's live

- Add the site to **Google Search Console** (Domain property) and put the verification value in Route 53:

  ```bash
  aws cloudformation deploy \
    --stack-name nicktillinghast-dns-zone \
    --template-file infra/dns-zone.yml \
    --parameter-overrides "GoogleSiteVerification=google-site-verification=..."
  ```

  Keep passing `EmailForwarding=improvmx` too if you turned it on, or the MX records are removed.

## Everyday use

- **Deploy:** push to `main`. If lint, the Playwright tests or the template check fail, nothing ships. Pull requests run the same checks without deploying.
- **Roll back:** `git revert` the bad commit and push, or re-run an older successful run from the Actions tab.

## When something goes wrong

- **The first deploy failed and the app stack shows `ROLLBACK_COMPLETE`.** Delete it, then run the workflow again:
  ```bash
  aws cloudformation delete-stack --stack-name nicktillinghast-app
  ```
- **Every page is the 404 page.** The bucket policy or the upload didn't happen. Check the "Upload pages" step in the Actions log.
- **The certificate stack hangs.** The nameservers haven't switched yet. Check `dig NS` and try again later.

# Portfolio: "Midnight Matinee"

Static site built with [Astro](https://astro.build). No client JavaScript except the phone menu toggle.

```sh
npm run dev        # http://localhost:3000
npm run build      # static output in dist/
npm test           # Playwright: pages load, nav works, no sideways scroll at 360px
npm run og-image   # regenerate public/og.png (social share image)
```

- **Copy:** everything lives in `src/content.ts`. Anything in `[BRACKETS]` is a placeholder.
- **Hosting:** AWS (S3 + CloudFront), deployed on every push to `main`. Setup steps are in [infra/README.md](infra/README.md).
- **Tests locally** use the installed Google Chrome, because Playwright's bundled browsers don't run on macOS 13. CI uses bundled Chromium.

// Renders public/og.png (1200x630 social share image) with Playwright.
// Run `npm run og-image` again after changing the name or tagline.
import { chromium } from '@playwright/test'

const name = 'Nick [LAST NAME]' // TODO: real last name

const html = `<!doctype html><html><head>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=IBM+Plex+Mono:wght@500&display=swap" rel="stylesheet">
<style>
  body{margin:0;width:1200px;height:630px;background:#0b0b0d;color:#ece8e1;font-family:Anton,Impact,sans-serif;
    display:flex;flex-direction:column;justify-content:space-between;padding:72px 80px;box-sizing:border-box;
    border-bottom:12px solid #e0393e}
  .label{font:500 22px 'IBM Plex Mono',monospace;letter-spacing:.2em;color:#ff6b6f;text-transform:uppercase}
  h1{margin:0;font-weight:400;font-size:96px;line-height:.95;text-transform:uppercase}
  span{color:#e0393e}
  .name{font-size:34px;letter-spacing:.06em;text-transform:uppercase}
</style></head><body>
  <div class="label">Now showing</div>
  <h1>Full-stack developer.<br>Horror fan.<br><span>Ships things that go bump.</span></h1>
  <div class="name">${name}</div>
</body></html>`

const browser = await chromium.launch({ channel: process.env.CI ? undefined : 'chrome' })
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } })
await page.setContent(html, { waitUntil: 'networkidle' })
await page.evaluate(() => document.fonts.ready)
await page.screenshot({ path: 'public/og.png' })
await browser.close()
console.log('Wrote public/og.png')

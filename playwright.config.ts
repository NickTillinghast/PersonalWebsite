import { defineConfig, devices } from '@playwright/test'

// Locally this uses the installed Google Chrome (Playwright's bundled
// browsers don't support macOS 13). CI uses the bundled Chromium.
const channel = process.env.CI ? undefined : 'chrome'

export default defineConfig({
  testDir: 'tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  use: { baseURL: 'http://localhost:4321' },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'], channel } },
    { name: 'phone', use: { ...devices['Pixel 7'], viewport: { width: 360, height: 780 }, channel } },
  ],
  webServer: {
    command: 'npm run build && npx astro preview --port 4321 --ignore-lock',
    url: 'http://localhost:4321',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
})

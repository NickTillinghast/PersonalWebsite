import { expect, test } from '@playwright/test'

// Add new pages here so they get the same checks.
const pages = ['/', '/404.html']

for (const path of pages) {
  test(`${path} loads with a title, description and h1`, async ({ page }) => {
    const response = await page.goto(path)
    expect(response?.status()).toBe(200)
    await expect(page).toHaveTitle(/\S/)
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /\S/)
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /og\.png$/)
    await expect(page.locator('h1')).toHaveCount(1)
  })

  test(`${path} has no sideways scroll`, async ({ page }) => {
    await page.goto(path)
    await page.evaluate(() => document.fonts.ready)
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    )
    expect(overflow).toBeLessThanOrEqual(0)
  })
}

test('nav links scroll to their sections', async ({ page, isMobile }) => {
  await page.goto('/')
  const nav = page.getByRole('navigation', { name: 'Main' })
  const menu = page.getByRole('button', { name: 'Menu' })

  for (const [label, id] of [
    ['Work', 'work'],
    ['About', 'about'],
    ['Off the clock', 'off'],
    ['Contact', 'contact'],
  ]) {
    if (isMobile) {
      await menu.click()
      await expect(menu).toHaveAttribute('aria-expanded', 'true')
    }
    await nav.getByRole('link', { name: label }).click()
    await expect(page).toHaveURL(new RegExp(`#${id}$`))
    await expect(page.locator(`#${id}`)).toBeInViewport()
    if (isMobile) await expect(nav).toBeHidden()
  }
})

test('hero buttons point at real sections', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: 'See the work' }).click()
  await expect(page.locator('#work')).toBeInViewport()
})

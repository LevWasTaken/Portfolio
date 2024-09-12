import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('have title', async ({ page }) => {
  await expect(page.locator('h1')).toHaveText(`TWN's Vue Starter`)
})

test('submit name and get greeting', async ({ page }) => {
  await page.locator('#input').fill('Julien')
  await page.getByRole('button', { name: 'Submit' }).click()

  await expect(page.getByText('Hello Julien !')).toBeVisible()
})

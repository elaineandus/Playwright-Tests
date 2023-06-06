import { test, expect } from '@playwright/test';

test('seller should be able to respond to the operations message', async ({ page }) => {

  await page.goto('https://stag.carbids.ph/');

  await page.getByRole('link', { name: 'Sign in' }).click();

  await page.locator('#signin-email').fill('elaine.andus@iainnovations.com');
  await page.locator('#signin-password').fill('password');

  await page.getByRole('button', { name: 'Sign in' }).click();

  await page.getByRole('link', { name: 'Inbox' }).click();

  await page.locator('[data-href*="/messages/thread/"]').first().click();

  await page.locator('#id_content').fill('youtube');

  await page.getByRole('button', { name: 'Send' }).click();

  await expect(page).toHaveURL('https://stag.carbids.ph/messages/inbox/');

  await page.locator('[data-href*="/messages/thread/"]').first().click();

  await expect(page.getByText('youtube')).toBeVisible();

});
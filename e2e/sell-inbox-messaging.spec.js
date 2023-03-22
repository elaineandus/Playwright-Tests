import { test, expect } from '@playwright/test';

test('Messaging - Inbox, Reply Message', async ({ page }) => {
  await page.goto('https://stag.carbids.ph/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('elaine.andus@iainnovations.com');
  await page.getByPlaceholder('Enter password').fill('password');
  await page.getByRole('button', { name: 'Sign in' }).click();

  await page.getByRole('link', { name: 'Inbox' }).click();

  await page.getByRole('link', { name: 'New Message' }).click();
  await page.locator('#id_to_user').selectOption('8');
  await page.locator('#id_subject').fill('anongsayo');
  await page.locator('#id_content').click();
  await page.locator('#id_content').fill('anongsayo');
  await page.getByRole('button', { name: 'Send' }).click();

  const successMessage = await page.locator('text=anongsayo');
  await expect(successMessage).toContainText('anongsayo');
});
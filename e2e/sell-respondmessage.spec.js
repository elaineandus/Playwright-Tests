/* PASSED 3 BROWSERS */
import { test, expect } from '@playwright/test';

test('Follow Up From Workflow - Respond to Message, Click Submit', async ({ page }) => {
  await page.goto('https://stag.carbids.ph/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('elaine.andus@iainnovations.com');
  await page.getByPlaceholder('Enter password').fill('password');
  await page.getByRole('button', { name: 'Sign in' }).click();

  await page.getByRole('link', { name: 'Inbox' }).click();
  await page.setDefaultTimeout(60000);
  await page.click('[data-href*="/messages/thread/"]');

  await page.locator('#id_content').click();
  await page.locator('#id_content').fill('abasushi');

  await page.getByRole('button', { name: 'Send' }).click();
});
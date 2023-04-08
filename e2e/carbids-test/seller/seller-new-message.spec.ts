import { test, expect } from '@playwright/test';

test('seller should be able to message or respond to the buyers message', async ({ page }) => {

  await page.goto('https://stag.carbids.ph/');
  
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('elaine.andus@iainnovations.com');
  await page.getByPlaceholder('Enter password').fill('password');
  await page.getByRole('button', { name: 'Sign in' }).click();

  await page.getByRole('link', { name: 'Inbox' }).click();

  await page.getByRole('link', { name: 'New Message' }).click();

  await page.locator('#id_to_user').selectOption('2');

  await page.locator('#id_subject').fill('Input subject');
  await page.locator('#id_content').fill('Hello im lainey');
  
  await page.getByRole('button', { name: 'Send' }).click();

  await expect(page.getByText('lainey')).toBeVisible();

});
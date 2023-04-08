import { test, expect } from '@playwright/test';

test('seller should be able to go to Question & Answer Section', async ({ page }) => {
  await page.goto('https://stag.carbids.ph/');
 /*  await page.setDefaultTimeout(60000); */

  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('elaine.andus@iainnovations.com');
  await page.getByPlaceholder('Enter password').fill('password');
  await page.getByRole('button', { name: 'Sign in' }).click();

  await page.getByRole('link', { name: 'Question & Answer' }).click();

  await expect(page.url()).toContain('/users/account/questions');
});
import { test, expect } from '@playwright/test';

test('seller should be able to go to Votes Section', async ({ page }) => {

  await page.goto('https://stag.carbids.ph/');

  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('elaine.andus@iainnovations.com');
  await page.getByPlaceholder('Enter password').fill('password');
  await page.getByRole('button', { name: 'Sign in' }).click();

  await page.getByRole('link', { name: 'Votes' }).click();

  await expect(page.url()).toContain('/users/account/votes');
  
});
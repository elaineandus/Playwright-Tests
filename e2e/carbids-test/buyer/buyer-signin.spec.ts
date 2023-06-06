import { test, expect } from '@playwright/test';

test('buyer should be able to sign in successfully', async ({ page }) => {

  await page.goto('https://stag.carbids.ph/');

  await page.getByRole('link', { name: 'Sign in' }).click();

  await page.locator('#signin-email').fill('elaine.andus@iainnovations.com');
  await page.locator('#signin-password').fill('password');

  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page).toHaveTitle('Carbids.ph | Dashboard');
  
});
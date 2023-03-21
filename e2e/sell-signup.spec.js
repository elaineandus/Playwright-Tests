import { test, expect } from '@playwright/test';

test('seller should be able to sign up successfully', async ({ page }) => {
  await page.goto('https://stag.carbids.ph/');
  await page.getByRole('link', { name: 'Sign in' }).click();

  await page.getByRole('link', { name: 'Sign up here' }).click();

  await page.getByPlaceholder('Enter your first name').fill('elena');
  await page.getByPlaceholder('Enter your last name').fill('churva');
  await page.getByRole('textbox', { name: 'Email address' }).fill('tt@gmail.com');

  await page.type('input[id="signup-password"]', 'password');
  await page.type('input[id="signup-password-confirm"]', 'password');

  await page.getByLabel('By joining, I agree to the Terms of use and Privacy policy').check();

  await page.getByRole('button', { name: 'Sign up' }).click();

  await expect(page).toHaveTitle('Carbids.ph | Home');
});
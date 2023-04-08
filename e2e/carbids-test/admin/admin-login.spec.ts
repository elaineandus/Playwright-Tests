import { test, expect } from '@playwright/test';

test('admin should be able to log in successfully', async ({ page }) => {

  await page.goto('https://stag.carbids.ph/admin/');

  await page.getByPlaceholder('Username').fill('operations@carbids');
  await page.getByPlaceholder('Password').fill('password');

  await page.getByRole('button', { name: 'Log in' }).click();

  await expect(page).toHaveTitle('Welcome to Carbids.ph | Carbids Admin');

});
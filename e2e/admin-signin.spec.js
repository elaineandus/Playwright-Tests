import { test } from '@playwright/test';

test('Admin - Sign In', async ({ page }) => {
  await page.goto('https://stag.carbids.ph/admin/');
  await page.getByPlaceholder('Username').fill('operations@carbids');
  await page.getByPlaceholder('Password').fill('password')

  await page.getByRole('button', { name: 'Log in' }).click();

});
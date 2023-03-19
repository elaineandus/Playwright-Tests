import { test, expect } from '@playwright/test';

test('Car List - Delete, Click Yes', async ({ page }) => {
  await page.goto('https://stag.carbids.ph/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('elaine.andus@iainnovations.com');
  await page.getByPlaceholder('Enter password').fill('password');
  await page.getByRole('button', { name: 'Sign in' }).click();

  await page.getByRole('link', { name: 'My Cars' }).click();
  await page.getByRole('button', { name: '' }).nth(1).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
});
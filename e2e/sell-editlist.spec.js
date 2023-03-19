import { test, expect } from '@playwright/test';

test('Car List - Edit, Save and Continue', async ({ page }) => {
  await page.goto('https://stag.carbids.ph/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('elaine.andus@iainnovations.com');
  await page.getByPlaceholder('Enter password').fill('password');
  await page.getByRole('button', { name: 'Sign in' }).click();

  await page.getByRole('link', { name: 'My Cars' }).click();
  await page.getByRole('button', { name: '' }).first().click();
  await page.getByRole('link', { name: 'Edit' }).click();
  await page.getByLabel('Title *').click();
  await page.getByLabel('Title *').fill('FORDAYedit');

  await page.getByRole('button', { name: 'Save and continue' }).click();
});
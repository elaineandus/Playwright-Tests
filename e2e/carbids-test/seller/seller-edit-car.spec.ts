import { test, expect } from '@playwright/test';

test('seller should be able to edit a car in a list', async ({ page }) => {

  await page.goto('https://stag.carbids.ph/');

  await page.getByRole('link', { name: 'Sign in' }).click();

  await page.locator('#signin-email').fill('elaine.andus@iainnovations.com');
  await page.locator('#signin-password').fill('password');

  await page.getByRole('button', { name: 'Sign in' }).click();

  await page.getByRole('link', { name: 'My Cars' }).click();

  await page.locator('#contextMenu1').first().click();
  await page.getByRole('link', { name: 'Edit' }).click();

  await page.getByLabel('Title').fill('not brook car');
  await page.getByRole('button', { name: 'Save and continue' }).click();

  await expect(page.locator('.alert-message')).toContainText('Success:');

});
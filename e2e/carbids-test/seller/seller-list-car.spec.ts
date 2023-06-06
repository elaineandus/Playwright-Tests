import { test, expect } from '@playwright/test';

test('seller should be able to list a car', async ({ page }) => {

  await page.goto('https://stag.carbids.ph/');

  await page.getByRole('link', { name: 'Sign in' }).click();

  await page.locator('#signin-email').fill('elaine.andus@iainnovations.com');
  await page.locator('#signin-password').fill('password');

  await page.getByRole('button', { name: 'Sign in' }).click();

  await page.getByRole('banner').getByRole('link', { name: 'Sell car' }).click();
 
  await page.getByLabel('Title').fill('Anon11 car');
  await page.getByLabel('Auction Start').fill('2024-04-22T10:40');
  await page.getByLabel('Auction End').fill('2024-04-23T22:40');
 
  await page.getByLabel('Is reserved price').check();
  await page.getByLabel('Current Biding Amount').fill('100001');
  await page.getByRole('combobox', { name: 'Make' }).selectOption('1');
  await page.getByLabel('Model').fill('n/a');
  await page.locator('#id_year').fill('1');
  await page.getByLabel('Year').fill('1');

  await page.getByRole('combobox', { name: 'Body Style' }).selectOption('Compact');
  await page.getByRole('combobox', { name: 'Fuel Type' }).selectOption('Gasoline');
  await page.getByLabel('Engine').fill('n/a');
  await page.locator('#id_transmission').selectOption('Automatic');
  await page.locator('#id_drivetrain').selectOption('AWD');
  await page.getByLabel('Exterior Color').fill('n/a');
  await page.getByLabel('Interior Color').fill('n/a');

  await page.frameLocator('iframe[title="Rich Text Editor\\, id_highlights"]').locator('body').fill('n/a');
  await page.frameLocator('iframe[title="Rich Text Editor\\, id_known_flaws"]').locator('body').fill('n/a');
  await page.frameLocator('iframe[title="Rich Text Editor\\, id_equipment"]').locator('body').fill('n/a');
  await page.frameLocator('iframe[title="Rich Text Editor\\, id_modifications"]').locator('body').fill('n/a');
  await page.frameLocator('iframe[title="Rich Text Editor\\, id_recent_service_history"]').locator('body').fill('n/a');
  await page.frameLocator('iframe[title="Rich Text Editor\\, id_other_items"]').locator('body').fill('n/a');
  await page.frameLocator('iframe[title="Rich Text Editor\\, id_ownership_history"]').locator('body').fill('n/a');
  await page.frameLocator('iframe[title="Rich Text Editor\\, id_seller_notes"]').locator('body').fill('buy now');
  
  await page.getByRole('button', { name: 'Save and continue' }).click();

  await expect(page.getByText('Success')).toBeVisible();
  
});
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://stag.carbids.ph/', { timeout: 60000 });

  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('elaine.andus@iainnovations.com');
  await page.getByPlaceholder('Enter password').fill('password');
  await page.getByRole('button', { name: 'Sign in' }).click();

  await page.getByRole('banner').getByRole('link', { name: 'Sell car' }).click();

  // Basic Info
  await page.getByLabel('Title').fill('Farmer');
  await page.getByLabel('Auction Start').fill('2023-04-23T10:40');
  await page.getByLabel('Auction End').fill('2023-04-24T10:40');
  await page.getByRole('combobox', { name: 'Make' }).selectOption('1');
  
  // Vehicle Information
  await page.getByLabel('Model *').fill('n/a');
  await page.locator('#id_year').fill('1');
  await page.getByLabel('Year *').fill('1');
  await page.getByRole('combobox', { name: 'Body Style' }).selectOption('Compact')
  await page.getByRole('combobox', { name: 'Fuel Type' }).selectOption('Gasoline');
  await page.getByLabel('Engine').fill('n/a');
  await page.locator('#id_transmission').selectOption('Automatic');
  await page.locator('#id_drivetrain').selectOption('AWD');
  await page.getByLabel('Exterior Color').fill('n/a');
  await page.getByLabel('Interior Color').fill('n/a');

  // Highlights
  await page.frameLocator('iframe[title="Rich Text Editor\\, id_highlights"]').locator('body').fill('n/a');
  await page.frameLocator('iframe[title="Rich Text Editor\\, id_known_flaws"]').locator('body').fill('n/a');
  await page.frameLocator('iframe[title="Rich Text Editor\\, id_equipment"]').locator('body').fill('n/a');
  await page.frameLocator('iframe[title="Rich Text Editor\\, id_modifications"]').locator('body').fill('n/a');
  await page.frameLocator('iframe[title="Rich Text Editor\\, id_recent_service_history"]').locator('body').fill('n/a');
  await page.frameLocator('iframe[title="Rich Text Editor\\, id_other_items"]').locator('body').fill('n/a');
  await page.frameLocator('iframe[title="Rich Text Editor\\, id_ownership_history"]').locator('body').fill('n/a');
  await page.frameLocator('iframe[title="Rich Text Editor\\, id_seller_notes"]').locator('body').fill('n/a');

  const path = require('path');
  
  const exteriorFiles = [
    path.join(__dirname, 'carext1.jpeg'),
    path.join(__dirname, 'carext2.jpeg'),
    path.join(__dirname, 'carext3.jpeg'),
  ];

  const interiorFiles = [
    path.join(__dirname, 'carint1.jpeg'),
    path.join(__dirname, 'carint2.jpeg'),
    path.join(__dirname, 'carint3.jpeg'),
  ];

  const otherFiles = [
    path.join(__dirname, 'carothers1.jpeg'),
    path.join(__dirname, 'carothers2.jpeg'),
  ];

  // Exterior Photos
  await page.setInputFiles('#exterior input[type="file"]', exteriorFiles);
  await new Promise(resolve => setTimeout(resolve, 5000));

  // Interior Photos
  await page.setInputFiles('#interior input[type="file"]', interiorFiles);
  await new Promise(resolve => setTimeout(resolve, 5000));
  
  // Others Photos
  await page.setInputFiles('#others input[type="file"]', otherFiles);
  await new Promise(resolve => setTimeout(resolve, 7000));


  const completeUpload = await page.getByText('Upload complete', { exact: true });
  await expect(completeUpload).toContainText('Upload complete', { timeout: 10000 });

  await page.getByRole('button', { name: 'Save and continue' }).click();

  /* const successUpload = await page.getByText('Success', { exact: true });
  await expect(successUpload).toContainText('Success', { timeout: 10000 }); */
});
import { test, expect } from '@playwright/test';

test('seller should be able to upload photos', async ({ page }) => {
  /* await page.setDefaultTimeout(60000); */
  await page.goto('https://stag.carbids.ph/');
  
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('elaine.andus@iainnovations.com');
  await page.getByPlaceholder('Enter password').fill('password');
  await page.getByRole('button', { name: 'Sign in' }).click();

  await page.getByRole('banner').getByRole('link', { name: 'Sell car' }).click();
 
  await page.getByLabel('Title').fill('car pics');
  await page.getByLabel('Auction Start').fill('2023-03-22T10:40');
  await page.getByLabel('Auction End').fill('2023-03-23T22:40');
 
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

  const path = require('path');

  const exteriorFiles = [
    path.join(__dirname, 'carext1.jpeg'),
    path.join(__dirname, 'carext2.jpeg'),
  ];

  const interiorFiles = [
    path.join(__dirname, 'carint1.jpeg'),
    path.join(__dirname, 'carint2.jpeg'),
  ];

  const otherFiles = [
    path.join(__dirname, 'carothers1.jpeg'),
    path.join(__dirname, 'carothers2.jpeg'),
  ];

  await page.setInputFiles('#exterior input[type="file"]', exteriorFiles);
  await new Promise(resolve => setTimeout(resolve, 7000));

  /* await page.waitForSelector('#exterior .dropzone'); // Wait for element to appear

const exteriorDropzone = await page.$('#exterior .dropzone');
for (const file of exteriorFiles) {
  await exteriorDropzone.setInputFiles(file);
} */

  /* const exteriorDropzone = await page.$('#exterior .dropzone');
    for (const file of exteriorFiles) {
    await exteriorDropzone.setInputFiles(file);
  } */

  await page.setInputFiles('#interior input[type="file"]', interiorFiles);
  await new Promise(resolve => setTimeout(resolve, 7000));

  /* const interiorDropzone = await page.$('#interior .dropzone');
    for (const file of interiorFiles) {
    await interiorDropzone.setInputFiles(file);
  } */

  await page.setInputFiles('#others input[type="file"]', otherFiles);


  
  /* await page.locator('#filepond--drop-label-go8utazx7').getByText('Upload photos').click();
  await page.locator('#filepond--browser-go8utazx7').setInputFiles('pexels-ingo-joseph-13781.jpg');
  await page.locator('#filepond--drop-label-jujufjmmz').getByText('Upload photos').click();
  await page.locator('#filepond--browser-jujufjmmz').setInputFiles('pexels-ingo-joseph-13781.jpg');
  await page.locator('#filepond--drop-label-cajt81kj9 i').click();
  await page.locator('#filepond--browser-cajt81kj9').setInputFiles('pexels-ingo-joseph-13781.jpg'); */

 /*  await page.setInputFiles('#exterior input[type="file"]', {
    files: ['car1.jpg'],
  }); */

  /* const path = require('path');

  const filePath = path.join(__dirname, 'car1.jpg');
  await page.setInputFiles('#exterior input[type="file"]', filePath);
  await page.setInputFiles('#interior input[type="file"]', filePath);
  await page.setInputFiles('#others input[type="file"]', filePath); */

  /* const path = require('path');

  const car1FilePath = path.join(__dirname, 'car1.jpg');
  const car2FilePath = path.join(__dirname, 'car2.jpg');
  const car3FilePath = path.join(__dirname, 'car3.jpg');

  await page.setInputFiles('#exterior input[type="file"]', car1FilePath);
  await page.setInputFiles('#interior input[type="file"]', car2FilePath);
  await page.setInputFiles('#others input[type="file"]', car3FilePath); */

  /* const path = require('path');

    const filePath = path.join(__dirname, 'PLAYWRIGHT-TESTS', 'fixtures', 'images', 'car1.jpg.jpg');
    await page.setInputFiles('#exterior input[type="file"]', filePath); */


  await page.getByRole('button', { name: 'Save and continue' }).click();

  /* const uploadComplete = await page.locator('text=Upload complete');
  await expect(uploadComplete).toContainText('Upload complete'); */
});
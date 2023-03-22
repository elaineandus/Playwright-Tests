import { test, expect } from '@playwright/test';

test('seller should be able to upload photos completely', async ({ page }) => {
  await page.goto('https://stag.carbids.ph/');
  
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('elaine.andus@iainnovations.com');
  await page.getByPlaceholder('Enter password').fill('password');
  await page.getByRole('button', { name: 'Sign in' }).click();

  await page.getByRole('banner').getByRole('link', { name: 'Sell car' }).click();
 
  await page.getByLabel('Title').fill('ice cream');
  await page.getByLabel('Auction Start').fill('2023-04-23T10:40');
  await page.getByLabel('Auction End').fill('2023-04-24T10:40');
 
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

  const exteriorInputSelector = '#exterior input[type="file"]';
  await page.setInputFiles(exteriorInputSelector, ['C:\\Users\\IA-Trainee\\Documents\\GitHub\\Playwright-Tests\\e2e\\carint1.jpeg']);
  await page.setInputFiles(exteriorInputSelector, ['C:\\Users\\IA-Trainee\\Documents\\GitHub\\Playwright-Tests\\e2e\\carint1.jpeg']);
  await page.setInputFiles(exteriorInputSelector, ['C:\\Users\\IA-Trainee\\Documents\\GitHub\\Playwright-Tests\\e2e\\carint1.jpeg']);
  await page.setInputFiles(exteriorInputSelector, ['C:\\Users\\IA-Trainee\\Documents\\GitHub\\Playwright-Tests\\e2e\\carint1.jpeg']);
  

  const exteriorCompleteSelector = '#exterior:has-text("Uploading")';
await page.waitForSelector(exteriorCompleteSelector, { timeout: 10000 });
await expect(await page.$(exteriorCompleteSelector)).not.toBeNull();

/* const exteriorIncompleteSelector = '#exterior:has-no-text("Uploading")';
await page.waitForSelector(exteriorIncompleteSelector, { timeout: 10000 }); */

  const interiorInputSelector = '#interior input[type="file"]';
await page.setInputFiles(interiorInputSelector, ['C:\\Users\\IA-Trainee\\Documents\\GitHub\\Playwright-Tests\\e2e\\carint1.jpeg']);

const interiorCompleteSelector = '#interior:has-text("Uploading")';
await page.waitForSelector(interiorCompleteSelector, { timeout: 100000 });
await expect(await page.$(interiorCompleteSelector)).not.toBeNull();

/* const interiorIncompleteSelector = '#interior:has-no-text("Uploading")';
await page.waitForSelector(interiorIncompleteSelector, { timeout: 10000 }); */

const othersInputSelector = '#others input[type="file"]';
await page.setInputFiles(othersInputSelector, ['C:\\Users\\IA-Trainee\\Documents\\GitHub\\Playwright-Tests\\e2e\\carint1.jpeg']);
await new Promise(resolve => setTimeout(resolve, 10000));

/* const othersCompleteSelector = '#others:has-text("Uploading")';
await page.waitForSelector(othersCompleteSelector, { timeout: 10000 });
await expect(await page.$(othersCompleteSelector)).not.toBeNull(); */

/* const othersIncompleteSelector = '#others:has-no-text("Uploading")';
await page.waitForSelector(othersIncompleteSelector, { timeout: 10000 }); */

  await page.getByRole('button', { name: 'Save and continue' }).click();

  const successCreate = await page.locator('text=Success');
  await expect(successCreate).toContainText('Success');
});



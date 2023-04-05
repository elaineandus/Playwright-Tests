const { test, expect } = require('@playwright/test');

test('seller should be able to sign in successfully, create a car list and edit a car list', async ({ page }) => {

// test 1 - sign in
await page.goto('https://stag.carbids.ph/', { timeout: 60000 });
await page.click('a[href*="signin-modal"]');
await page.fill('input[id="signin-email"]', 'elaine.andus@iainnovations.com');
await page.fill('input[id="signin-password"]', 'password');
await page.click('//button[@type="submit"]');
await expect(page).toHaveTitle('Carbids.ph | Dashboard');

// test 2 - create a car list
await page.goto('https://stag.carbids.ph/', { timeout: 60000 });
await page.getByRole('banner').getByRole('link', { name: 'Sell car' }).click();

await page.getByLabel('Title').fill('monica car');
await page.getByLabel('Auction Start').fill('2023-04-22T10:40');
await page.getByLabel('Auction End').fill('2023-04-23T22:40');
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
await page.frameLocator('iframe[title="Rich Text Editor\, id_highlights"]').locator('body').fill('n/a');
await page.frameLocator('iframe[title="Rich Text Editor\, id_known_flaws"]').locator('body').fill('n/a');
await page.frameLocator('iframe[title="Rich Text Editor\, id_equipment"]').locator('body').fill('n/a');
await page.frameLocator('iframe[title="Rich Text Editor\, id_modifications"]').locator('body').fill('n/a');
await page.frameLocator('iframe[title="Rich Text Editor\, id_recent_service_history"]').locator('body').fill('n/a');
await page.frameLocator('iframe[title="Rich Text Editor\, id_other_items"]').locator('body').fill('n/a');
await page.frameLocator('iframe[title="Rich Text Editor\, id_ownership_history"]').locator('body').fill('n/a');
await page.frameLocator('iframe[title="Rich Text Editor\, id_seller_notes"]').locator('body').fill('buy now');
await page.getByRole('button', { name: 'Save and continue' }).click();
const successCreate = await page.locator('text=Success');
await expect(successCreate).toContainText('Success');

// test 3 - edit car list
await page.goto('https://stag.carbids.ph/', { timeout: 60000 });
await page.getByRole('link', { name: 'Dashboard' }).click();

await page.getByRole('link', { name: 'My Cars' }).click();
await page.getByRole('button', { name: '' }).first().click();
await page.getByRole('link', { name: ' Edit' }).click();
await page.getByLabel('Title').fill('geller Car');
  
await page.getByRole('button', { name: 'Save and continue' }).click();
  
const successEdit = await page.locator('text=Success');
await expect(successEdit).toContainText('Success');

});


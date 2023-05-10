import { test, expect } from '@playwright/test';

test('seller should be able to upload photos completely', async ({ page }) => {
  
  await page.goto('https://stag.carbids.ph/');

  await page.getByRole('link', { name: 'Sign in' }).click();

  await page.locator('#signin-email').fill('elaine.andus@iainnovations.com');
  await page.locator('#signin-password').fill('password');

  await page.getByRole('button', { name: 'Sign in' }).click();

  await page.getByRole('banner').getByRole('link', { name: 'Sell car' }).click();
 
  await page.getByLabel('Title').fill('Anon10 Rolls-Royce Sweptail');
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

  // Drag and drop #exterior input field
  const exteriorInputSelector = '#exterior input[type="file"]';
  const exteriorInputElement = await page.$(exteriorInputSelector);
  const exteriorFilePath = 
  [
    './e2e/img/carext1.jpeg',
    './e2e/img/carext2.jpeg',
    './e2e/img/carext3.jpeg',
  ];

  // Retrieves the bounding box of the file input element and calculates its center point
  const exteriorInputBox = await exteriorInputElement.boundingBox(); //this line finds the bounding box of the exteriorInputElement, which is the input field where the user can upload files.
  const exteriorInputCenter = {
    x: exteriorInputBox.x + exteriorInputBox.width / 2,
    y: exteriorInputBox.y + exteriorInputBox.height / 2,
  }; //this line calculates the center of the bounding box found in the previous line. It does this by taking the x-coordinate of the top-left corner of the bounding box and adding half of its width to get the x-coordinate of its center. Similarly, it takes the y-coordinate of the top-left corner of the bounding box and adds half of its height to get the y-coordinate of its center. The result is stored in an object called exteriorInputCenter.

  // NOTE: This code is useful for the later code below that simulates a user dragging and dropping files onto the input field. By finding the center of the input field, it allows the mouse to move to that position and initiate the drag and drop action at the correct location, rather than on another element on the page

  // Simulates a mouse click on the file input element by moving the mouse to its center, clicking, moving the mouse a bit, and releasing the click:
  await page.mouse.move(exteriorInputCenter.x, exteriorInputCenter.y); //moves the mouse pointer to the center of the file input element
  await page.mouse.down(); //simulates a mouse click and holds down the left mouse button
  await page.mouse.move(exteriorInputCenter.x + 10, exteriorInputCenter.y + 10); //moves the mouse pointer slightly to the right and down from the center of the file input element
  await page.mouse.up(); //simulates releasing the left mouse button.
  await exteriorInputElement.setInputFiles(exteriorFilePath); //sets the file paths of the files to be uploaded to the file input element

  // Upload #interior input field manually
  const interiorInputSelector = '#interior input[type="file"]';
  const interiorFilePath = 
  [
    './e2e/img/carint1.jpeg',
    './e2e/img/carint2.jpeg',
    './e2e/img/carint3.jpeg',
  ];

  await page.setInputFiles(interiorInputSelector, interiorFilePath);

  // Upload #others input field manually
  const othersInputSelector = '#others input[type="file"]';
  const othersFilePath = 
  [
    './e2e/img/carothers1.jpeg',
    './e2e/img/carothers2.jpeg',
    './e2e/img/car1.jpg',
    './e2e/img/car2.jpg',
  ];

  await page.setInputFiles(othersInputSelector, othersFilePath);

  // wait for all files to be "Uploaded Completely" and make sure that there is no "Uploading" text present
  const uploadComplete = 'text=Upload complete'; //defines a string variable to represent the text "Upload complete 
  const uploadingText = 'text=Uploading'; //defines a string variable to represent the text "Uploading 

  await page.waitForSelector(uploadComplete, { state: 'attached', timeout: 10000 }); //waits for the element that matches the selector "text=Upload complete" to be attached to the DOM within 10 seconds. If the element is not found within the given time frame, a timeout error will be thrown.

  await page.waitForSelector(uploadingText, { state: 'detached', timeout: 10000 }); //waits for the element that matches the selector "text=Uploading" to be detached from the DOM within 10 seconds. If the element is still present in the page within the given time frame, a timeout error will be thrown.
  
  await expect(await page.$(uploadComplete)).not.toBeNull(); //checks if the element that matches the selector "text=Upload complete" exists in the page. If it exists, the test passes, otherwise it fails.

  await page.getByRole('button', { name: 'Save and continue' }).click();

  await expect(page.getByText('Success')).toBeVisible(); 

});
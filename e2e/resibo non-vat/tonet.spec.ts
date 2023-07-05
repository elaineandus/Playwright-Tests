import { test, expect } from '@playwright/test';

test('test from user sign up to create new client and such', async ({ page }) => {

  await page.goto('https://resibo-stag2.zennerslab.com/');
  expect(page).toHaveTitle('Resibo.ph - Home');

  // sign up
  await page.locator('#navbarSupportedContent').getByRole('link', { name: 'Sign Up' }).click();
  expect(page).toHaveTitle('Resibo.ph - Signup');

  await page.locator('#id_login').fill('feb2@gmail.com');
  await page.locator('#first_name').fill('feb');
  await page.locator('#last_name').fill('one');
  await page.locator('#mobile_number').fill('09123456789');
  await page.locator('#tin_number').fill('188888888');
  await page.locator('#branch_code').fill('00000');

  await page.locator('#tax_payer').check();
  await page.locator('#non_vat').check();

  await page.type('#password1','password');
  await page.type('#confirm_password','password');

  await page.getByRole('button', { name: 'Sign up' }).click();

  // sign up assertion
  await expect(page.locator('.alert')).toContainText('successfully');

  // login
  await page.getByRole('link', { name: 'Login' }).click();
  expect(page).toHaveTitle('Resibo.ph - Login');

  await page.getByPlaceholder('Email').fill('feb2@gmail.com');
  await page.getByPlaceholder('Password').fill('password');

  await page.getByRole('button', { name: 'Sign in' }).click();

  // login assertion
  await expect(page).toHaveTitle('Resibo.ph - Dashboard');
  await expect(page.locator('.alert')).toContainText('Successfully');

  // create item
  await page.getByRole('link', { name: 'Items' }).click();
  await page.getByRole('link', { name: 'Create Item' }).click();
  await page.getByLabel('Name:').fill('Alcohol Bottle');
  await page.getByLabel('Price:').fill('12.00');
  await page.getByRole('combobox', { name: 'Unit:' }).selectOption('11');
  await page.getByRole('button', { name: 'Save' }).click();

  // create item assertion
  await expect(page.getByText('Item was successfully created!')).toBeVisible();

  // create invoice
  await page.getByRole('link', { name: 'Invoice' }).click();
  await page.getByRole('link', { name: 'Create invoice' }).click();
  await page.getByRole('textbox', { name: '---------' }).click();
  // create client
  await page.getByText('Add New Client').click();
  await page.locator('#id_clientName').fill('Client 1');
  await page.getByPlaceholder('e.g. 123-456-789').fill('111111111');
  await page.getByPlaceholder('e.g. 0000-000-0000').fill('09563261493');
  await page.getByPlaceholder('e.g. 00000').fill('00000');
  await page.locator('#id_emailAddress').fill('jonee@gmail.com');
  await page.locator('#region_all').selectOption('1');
  await page.locator('#city_all').selectOption('1602');
  await page.getByRole('button', { name: 'Save' }).click();

  // create client assertion
  await expect(page.locator('.alert')).toContainText('successfully');  
  
  // enter invoice client
  await page.getByRole('textbox', { name: '---------' }).click();
  await page.getByRole('searchbox').nth(1).fill('Jone');
  await page.getByRole('option', { name: 'Jone TIN - 888-888-888' }).click();
  await page.locator('#id_title').fill('Mr');

  // add item
  await page.getByText('Add item').click();
  await page.getByRole('row', { name: '---- 0 ---- 0 0 0 ' }).getByRole('combobox').first().click();
  await page.getByRole('searchbox').nth(1).fill('A');
  await page.getByRole('option', { name: 'Alcohol Bottle' }).locator('div').click();
  await page.getByRole('textbox', { name: '----' }).click();
  await page.getByRole('searchbox').nth(1).fill('');
  await page.getByRole('textbox', { name: '----' }).click();

  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Invoice was successfully created!')).toBeVisible();

});
import { test, expect } from '@playwright/test';

test('test from user sign up to create new client and such', async ({ page }) => {

  await page.goto('https://resibo-stag2.zennerslab.com/');
  expect(page).toHaveTitle('Resibo.ph - Home');

  await page.locator('#navbarSupportedContent').getByRole('link', { name: 'Sign Up' }).click();
  expect(page).toHaveTitle('Resibo.ph - Signup');

  await page.locator('#id_login').fill('jan1@gmail.com');
  await page.locator('#first_name').fill('jane');
  await page.locator('#last_name').fill('doe');
  await page.locator('#mobile_number').fill('09123456789');
  await page.locator('#tin_number').fill('345678901');
  await page.locator('#branch_code').fill('00000');

  await page.locator('#tax_payer').check();
  await page.locator('#vat').check();

  await page.type('#password1','password');
  await page.type('#confirm_password','password');

  await page.getByRole('button', { name: 'Sign up' }).click();

  // assertion
  await expect(page.locator('.alert')).toContainText('successfully');

  // login
  await page.getByRole('link', { name: 'Login' }).click();
  expect(page).toHaveTitle('Resibo.ph - Login');

  await page.getByPlaceholder('Email').fill('jan1@gmail.com');
  await page.getByPlaceholder('Password').fill('password');

  await page.getByRole('button', { name: 'Sign in' }).click();

  // assertion
  await expect(page).toHaveTitle('Resibo.ph - Dashboard');
  await expect(page.locator('.alert')).toContainText('Successfully');

  // create item
  await page.getByRole('link', { name: 'Items' }).click();
  await page.getByRole('link', { name: 'Create Item' }).click();
  await page.getByLabel('Name:').fill('Alcohol Bottle');
  await page.getByLabel('Price:').fill('12.00');
  await page.getByRole('button', { name: 'Save' }).click();

  // create invoice
  await page.getByRole('link', { name: 'Invoice' }).click();
  await page.getByRole('link', { name: 'Create invoice' }).click();
  await page.getByRole('textbox', { name: '---------' }).click();
  // create client
  await page.getByText('Add New Client').click();
  await page.locator('#id_clientName').fill('Jone');
  await page.getByPlaceholder('e.g. 123-456-789').fill('345678901');
  await page.getByPlaceholder('e.g. 0000-000-0000').fill('09563261493');
  await page.getByPlaceholder('e.g. 00000').fill('00000');
  await page.locator('#id_emailAddress').fill('jonee@gmail.com');
  await page.locator('#region_all').selectOption('1');
  await page.locator('#city_all').selectOption('1602');
  await page.getByRole('button', { name: 'Save' }).click();

  // assertion
  await expect(page.locator('.alert')).toContainText('successfully');

});
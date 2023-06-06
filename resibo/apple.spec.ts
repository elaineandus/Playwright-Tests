import { test, expect } from '@playwright/test';

test('item apple', async ({ page }) => {

  await page.goto('https://resibo-stag2.zennerslab.com/');
  await page.getByRole('link', { name: 'Login' }).click();
  
  await page.getByPlaceholder('Email').fill('dackalacbayo@gmail.com');
  await page.getByPlaceholder('Password').fill('password');

  await page.getByRole('button', { name: 'Sign in' }).click();

  await page.getByRole('link', { name: 'Invoice' }).click();
  await page.getByRole('link', { name: 'Create invoice' }).click();
  await page.locator('Add item').click();

  await page.getByRole('row', { name: '---- ---- 0 0 0 ' }).getByRole('combobox').first().click();
  await page.getByRole('searchbox').nth(1).fill('Uniqlo Basic T-Shirt');
  await page.getByText('Uniqlo Basic T-Shirt').click();

  await page.locator('#id_items-1-unit_price').fill('112');
  await page.getByRole('textbox', { name: '----', exact: true }).click();
  await page.locator('#select2-id_items-1-discount_type-result-bcc4-16').click();

});
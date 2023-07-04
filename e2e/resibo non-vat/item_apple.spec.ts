import { test, expect } from '@playwright/test';

test('item vat apple', async ({ page }) => {

  await page.goto('https://resibo-stag2.zennerslab.com/');
  expect(page).toHaveTitle('Resibo.ph - Home');

  await page.locator('#navbarSupportedContent').getByRole('link', { name: 'Login' }).click();

  await page.getByPlaceholder('Email').fill('bailey.shin@gmail.com');
  await page.getByPlaceholder('Password').fill('password');
  await page.getByRole('button', { name: 'Sign in' }).click();
  
  await page.goto('https://resibo-stag2.zennerslab.com/invoices/create/');
  /* await page.click('#addRow:has-text("Add Item")');

  await page.click('#addRow:has-text("Add Item")'); */
  await page.locator('#addRow').click();
  await page.locator('#formset_table > tbody > tr:nth-child(1) > td.sorting_1 > span > span.selection > span').click();
  // Name
  await page.getByRole('searchbox').nth(1).fill('apple');
  await page.getByText('Apple').click();
  // Quantity
  await page.locator('#id_items-1-quantity').fill('1');
  // Price
  try {
  const priceCell = await page.locator('#id_items-1-unit_price');
  await expect(priceCell).toHaveText('10.00');
  } catch (error) {
    await test.fail();
  }
  // Discount
  /* await page.locator('#select2-id_items-1-discount_type-container').click();
  await page.getByRole('option', { name: 'Senior Citizen (Single)' }).click(); */
  await page.locator('#select2-id_items-1-discount_type-container').click();
  await page.locator(`.select2-results__option:has-text("Senior Citizen (Single)")`).click();

  // Amount
  try {
  const amountCell = await page.locator('#formset_table > tbody > tr:nth-child(1) > td:nth-child(7)');
  await expect(amountCell).toHaveText('20%');
  } catch (error) {
    await test.fail();
  }

  // (-)Discount (Discount Total)
  try {
  const discountCell = await page.locator('#formset_table > tbody > tr:nth-child(1) > td:nth-child(8)');
  await expect(discountCell).toHaveText('2.00');
  } catch (error) {
    await test.fail();
  }

  // Item VAT Type (VAT Type)
  try {
  const typeCell = await page.locator('#id-1-vat_type');
  await expect(typeCell).toHaveValue('VATEX');
  } catch (error) {
    await test.fail();
  }
 
  // Subtotal
  try {
  const subtotalCell = await page.locator('#formset_table > tbody > tr:nth-child(1) > td:nth-child(9)');
  await expect(subtotalCell).toHaveText('10.00');
  } catch (error) {
    await test.fail();
  }
  
  // (Total) Amount Payable
  try {
  const totalCell = await page.locator('#formset_table > tbody > tr:nth-child(1) > td:nth-child(10)');
  await expect(totalCell).toHaveText('8.00');
  } catch (error) {
    await test.fail();
  }
  
});
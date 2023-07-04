import { test, expect } from '@playwright/test';

test('item vat nike air', async ({ page }) => {

  await page.goto('https://resibo-stag2.zennerslab.com/');
  expect(page).toHaveTitle('Resibo.ph - Home');

  await page.locator('#navbarSupportedContent').getByRole('link', { name: 'Login' }).click();

  await page.getByPlaceholder('Email').fill('bailey.shin@gmail.com');
  await page.getByPlaceholder('Password').fill('password');
  await page.getByRole('button', { name: 'Sign in' }).click();
  
  await page.goto('https://resibo-stag2.zennerslab.com/invoices/create/');
  
  await page.locator('#addRow').click();
  await page.locator('#formset_table > tbody > tr:nth-child(1) > td.sorting_1 > span > span.selection > span').click();
  // Name
  await page.getByRole('searchbox').nth(1).fill('nike');
  await page.getByText('Nike Air Jordan 1 Retro High').click();
  // Quantity
  await page.locator('#id_items-1-quantity').fill('2');
  await page.locator('#select2-id_items-1-discount_type-container').press('Tab');
  // Price
  try {
  const priceCell = await page.locator('#id_items-1-unit_price');/* #formset_table > tbody > tr > td:nth-child(5) */
  await expect(priceCell).toHaveText('8,000.00');
  } catch (error) {
    await test.fail();
  }
  // Discount
  await page.locator('#select2-id_items-1-discount_type-container').click();
  await page.locator(`.select2-results__option:has-text("PWD (All)")`).click();

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
  await expect(discountCell).toHaveText('3,200.00');
  } catch (error) {
    await test.fail();
  }

  // Item VAT Type (VAT Type)
  try {
  const typeCell = await page.locator('#id-1-vat_type');
  await expect(typeCell).toHaveValue('VAT');
  } catch (error) {
    await test.fail();
  }
 
  // Subtotal
  try {
  const subtotalCell = await page.locator('#formset_table > tbody > tr:nth-child(1) > td:nth-child(9)');
  await expect(subtotalCell).toHaveText('16,000.00');
  } catch (error) {
    await test.fail();
  }
  
  // (Total) Amount Payable
  try {
  const totalCell = await page.locator('#formset_table > tbody > tr:nth-child(1) > td:nth-child(10)');
  await expect(totalCell).toHaveText('12,800.00');
  } catch (error) {
    await test.fail();
  }
  
});
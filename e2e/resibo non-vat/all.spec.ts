import { test, expect } from '@playwright/test';

test('test all', async ({ page }) => {
  await page.goto('https://resibo-stag2.zennerslab.com/');
  expect(page).toHaveTitle('Resibo.ph - Home');

  await page.locator('#navbarSupportedContent').getByRole('link', { name: 'Login' }).click();

  await page.getByPlaceholder('Email').fill('bailey.shin@gmail.com');
  await page.getByPlaceholder('Password').fill('password');
  await page.getByRole('button', { name: 'Sign in' }).click();
  
  await page.goto('https://resibo-stag2.zennerslab.com/invoices/create/');

  await page.locator('#select2-id_client-container').click();
  await page.getByRole('searchbox').nth(1).fill('Client 1');
  await page.getByRole('option', { name: 'Client 1 TIN - 123456788' }).click();
  await page.locator('#id_title').click();
  await page.locator('#id_title').fill('Title');

  await page.locator('#addRow').click(); // 1 item_uniqlo
  await page.locator('#formset_table > tbody > tr:nth-child(1) > td.sorting_1 > span > span.selection > span').click();
  // Name
  await page.getByRole('searchbox').nth(1).fill('uniq');
  await page.getByText('Uniqlo Basic T-Shirt').click();
  // Quantity
  await page.locator('#id_items-1-quantity').fill('1');
  // Discount
  await page.locator('#select2-id_items-1-discount_type-container').click();
  await page.locator(`.select2-results__option:has-text("Senior Citizen (Single)")`).click();

  await page.locator('#addRow').click(); // 2 item_hnm
  await page.locator('#formset_table > tbody > tr:nth-child(2) > td.sorting_1 > span > span.selection > span').click();
  // Name
  await page.getByRole('searchbox').nth(1).fill('h&m');
  await page.getByText('H&M Basic T-Shirt').click();
  // Quantity
  await page.locator('#id_items-2-quantity').fill('1');
  // Discount
  await page.locator('#select2-id_items-2-discount_type-container').click();
  await page.locator(`.select2-results__option:has-text("Senior Citizen (Single)")`).click();

  await page.locator('#addRow').click(); // 3 item_banana
  await page.locator('#formset_table > tbody > tr:nth-child(3) > td.sorting_1 > span > span.selection > span').click();
  // Name
  await page.getByRole('searchbox').nth(1).fill('banana');
  await page.getByText('Banana').click();
  // Quantity
  await page.locator('#id_items-3-quantity').fill('1');
  // Discount
  await page.locator('#select2-id_items-3-discount_type-container').click();
  await page.locator(`.select2-results__option:has-text("----")`).click();

  await page.locator('#addRow').click(); // 4 item_nike
  await page.locator('#formset_table > tbody > tr:nth-child(4) > td.sorting_1 > span > span.selection > span').click();
  // Name
  await page.getByRole('searchbox').nth(1).fill('nike');
  await page.getByText('Nike Air Jordan 1 Retro High').click();
  // Quantity
  await page.locator('#id_items-4-quantity').fill('2');
  await page.locator('#select2-id_items-4-discount_type-container').press('Tab');
  // Discount
  await page.locator('#select2-id_items-4-discount_type-container').click();
  await page.locator(`.select2-results__option:has-text("PWD (All)")`).click();

  await page.locator('#addRow').click(); // 5 item_ikea
  await page.locator('#formset_table > tbody > tr:nth-child(5) > td.sorting_1 > span > span.selection > span').click();
  // Name
  await page.getByRole('searchbox').nth(1).fill('ikea');
  await page.getByText('IKEA LACK Side Table').click();
  // Quantity
  await page.locator('#id_items-5-quantity').fill('3');
  await page.locator('#select2-id_items-5-discount_type-container').press('Tab');
  // Discount
  await page.locator('#select2-id_items-5-discount_type-container').click();
  await page.locator(`.select2-results__option:has-text("PWD (Single)")`).click();

  await page.locator('#addRow').click(); // 6 item_apple
  await page.locator('#formset_table > tbody > tr:nth-child(6) > td.sorting_1 > span > span.selection > span').click();
  // Name
  await page.getByRole('searchbox').nth(1).fill('apple');
  await page.getByText('Apple').click();
  // Quantity
  await page.locator('#id_items-6-quantity').fill('1');
  await page.locator('#select2-id_items-6-discount_type-container').press('Tab');
  // Discount
  await page.locator('#select2-id_items-6-discount_type-container').click();
  await page.locator(`.select2-results__option:has-text("Senior Citizen (Single)")`).click();

  await page.locator('#addRow').click(); // 7 item_tomatoes
  await page.locator('#formset_table > tbody > tr:nth-child(7) > td.sorting_1 > span > span.selection > span').click();
  // Name
  await page.getByRole('searchbox').nth(1).fill('Tomatoes');
  await page.getByText('Tomatoes').click();
  // Quantity
  await page.locator('#id_items-7-quantity').fill('3');
  await page.locator('#select2-id_items-7-discount_type-container').press('Tab');
  // Discount
  await page.locator('#select2-id_items-7-discount_type-container').click();
  await page.locator(`.select2-results__option:has-text("Senior Citizen (Single)")`).click();

  // (-)Discount (Discount Total) 
  try {
  const discountTotal = await page.locator('#formset_table > tfoot > tr > th:nth-child(8)');
  await expect(discountTotal).toHaveText('3,653.91');
  } catch (error) {
    await test.fail();
  }

  // Subtotal
  try {
  const subTotal = await page.locator('#formset_table > tfoot > tr > th:nth-child(9)');
  await expect(subTotal).toHaveText('20,797.55');
  } catch (error) {
    await test.fail();
  }

  // (Total) Amount Payable
  try {
  const totalCell = await page.locator('#formset_table > tfoot > tr > th:nth-child(10)');
  await expect(totalCell).toHaveText('17,143.64');
  } catch (error) {
    await test.fail();
  }

  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Invoice was successfully created!')).toBeVisible();

});
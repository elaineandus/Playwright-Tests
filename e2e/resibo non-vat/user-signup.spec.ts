import { test, expect } from '@playwright/test';

test('user should be able to sign up successfully', async ({ page }) => {

  await page.goto('https://resibo-stag2.zennerslab.com/');
  expect(page).toHaveTitle('Resibo.ph - Home');

  await page.locator('#navbarSupportedContent').getByRole('link', { name: 'Sign Up' }).click();
  expect(page).toHaveTitle('Resibo.ph - Signup');

  /* await page.locator('#id_login').fill('anon29@gmail.com');
  await page.locator('#first_name').fill('anon');
  await page.locator('#last_name').fill('surname');
  await page.locator('#mobile_number').fill('09123456789');
  await page.locator('#tin_number').fill('9');
  await page.locator('#branch_code').fill('5');

  await page.locator('#tax_payer').check();
  await page.locator('#vat').check();

  await page.type('#password1','password');
  await page.type('#confirm_password','password');

  await page.getByRole('button', { name: 'Sign up' }).click();

  // assertion
  await expect(page.locator('.alert')).toContainText('successfully'); */
});
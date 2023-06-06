import { test, expect } from '@playwright/test';

test('user should be able to sign in successfully', async ({ page }) => {

  await page.goto('https://resibo-stag2.zennerslab.com/');
  expect(page).toHaveTitle('Resibo.ph - Home');

  page.getByRole('link', { name: 'Login' }).click();
  expect(page).toHaveTitle('Resibo.ph - Login');

  await page.getByPlaceholder('Email').fill('dackalacbayo@gmail.com');
  await page.getByPlaceholder('Password').fill('password');

  await page.getByRole('button', { name: 'Sign in' }).click();

  // assertion
  await expect(page).toHaveTitle('Resibo.ph - Dashboard');
  await expect(page.locator('.alert')).toContainText('Successfully');
});
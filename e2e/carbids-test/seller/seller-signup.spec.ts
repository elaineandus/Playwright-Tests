import { test, expect } from '@playwright/test';

test('seller should be able to sign up successfully', async ({ page }) => {
  
  await page.goto('https://stag.carbids.ph/');

  await page.getByRole('link', { name: 'Sign in' }).click();

  await page.getByRole('link', { name: 'Sign up here' }).click();

  await page.getByPlaceholder('Enter your first name').fill('ariana');
  await page.getByPlaceholder('Enter your last name').fill('grande');
  await page.getByRole('textbox', { name: 'Email address' }).fill('fakeperson@gmail.com');
  
  await page.type('input[id="signup-password"]', 'password');
  await page.type('input[id="signup-password-confirm"]', 'password');  
 
  await page.locator('#agree-to-terms').click();

  /* can be 
  await page.getByLabel('By joining, I agree to the Terms of use and Privacy policy').check();
  */
  await page.getByRole('button', { name: 'Sign up' }).click();

  await expect(page.getByText('Success')).toBeVisible();

  /* await expect(page.locator('.alert-message')).toContainText('Success:'); */

});
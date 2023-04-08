import { test, expect } from '@playwright/test';

test('buyer should be able to sign up successfully', async ({ page }) => {

  await page.goto('https://stag.carbids.ph/');
  
  await page.getByRole('link', { name: 'Sign in' }).click();

  await page.getByRole('link', { name: 'Sign up here' }).click();

  await page.getByPlaceholder('Enter your first name').fill('ariana');
  await page.getByPlaceholder('Enter your last name').fill('grande');
  await page.getByRole('textbox', { name: 'Email address' }).fill('fakeperson01@gmail.com');
  
  await page.type('input[id="signup-password"]', 'password');
  await page.type('input[id="signup-password-confirm"]', 'password');  
 
  await page.locator('#agree-to-terms').click();

  await page.getByRole('button', { name: 'Sign up' }).click();

  await expect(page.getByText('Success')).toBeVisible();  

});
import { test, expect } from '@playwright/test';

test('seller should be able to sign in successfully', async ({ page }) => {
  await page.goto('https://stag.carbids.ph/');

  /* await expect(page.url()).toMatch(/stag.carbids.ph/); */
  
  /* await page.goto('https://stag.carbids.ph/', { timeout: 60000 }); */
  await page.getByRole('link', { name: 'Sign in' }).click();
  
  /* can be
  /* await page.click('a[href*="signin-modal"]'); 
  */

  await page.locator('#signin-email').fill('elaine.andus@iainnovations.com');
  await page.locator('#signin-password').fill('password');

  /* can be
  await page.fill('input[id="signin-email"]', 'elaine.andus@iainnovations.com');
  await page.fill('input[id="signin-password"]', 'password'); 
  */

  await page.getByRole('button', { name: 'Sign in' }).click();

  /* can be
  await page.click('//button[@type="submit"]'); 
  */

  await expect(page).toHaveTitle('Carbids.ph | Dashboard');
});
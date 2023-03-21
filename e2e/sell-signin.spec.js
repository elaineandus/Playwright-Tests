import { test, expect } from '@playwright/test';

test('seller should be able to sign in successfully', async ({ page }) => {
    await page.goto('https://stag.carbids.ph/');
    await page.click('a[href*="signin-modal"]');
    
    await page.fill('input[id="signin-email"]', 'elaine.andus@iainnovations.com');
    await page.fill('input[id="signin-password"]', 'password');
    await page.setDefaultTimeout(60000);
    await page.click('//button[@type="submit"]');

    await expect(page).toHaveTitle('Carbids.ph | Dashboard');
});
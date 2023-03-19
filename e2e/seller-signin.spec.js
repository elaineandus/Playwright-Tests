import { test, expect } from '@playwright/test';

test('Carbids Signin Test', async ({ page }) => {
    await page.goto('https://stag.carbids.ph/');
    await page.click('a[href*="signin-modal"]');
    await page.setDefaultTimeout(60000);

    await page.fill('input[id="signin-email"]', 'elaine.andus@iainnovations.com');
    await page.fill('input[id="signin-password"]', 'password');
    await page.setDefaultTimeout(60000);
    await page.click('//button[@type="submit"]');

    await expect(page).toHaveURL('https://stag.carbids.ph/dashboard/');
});
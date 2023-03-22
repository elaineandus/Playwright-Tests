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

/* import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/index.html');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: ' PLAY NOW' }).click();
  const page1 = await page1Promise;

  await expect(page).toHaveURL('http://127.0.0.1:5500/game.html');
}); */
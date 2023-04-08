import { test } from '@playwright/test';

test('Messaging - Message the Seller, Send', async ({ page }) => {
    await page.goto('https://stag.carbids.ph/');
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('elaine.andus@iainnovations.com');
    await page.getByPlaceholder('Enter password').fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();

    await page.getByRole('button', { name: 'Cars' }).click();
    await page.getByRole('link', { name: 'Car Marketplace' }).click();

    await page.getByRole('button', { name: 'Make' }).click();
    await page.getByRole('link', { name: 'Chevrolet', exact: true }).click();
    await page.getByRole('button', { name: 'Trans' }).click();
    await page.getByRole('link', { name: 'Manual' }).click();
    await page.getByRole('button', { name: 'Body Type' }).click();
    await page.getByRole('link', { name: 'All' }).click();
    await page.locator('form').filter({ hasText: 'Chevrolet All Abarth AC Acura Aixam Alfa Romeo ALPINA Artega Asia Motors Aston M' }).getByRole('button', { name: 'Search' }).click();

    /* await page.locator('.img-overlay').first().click(); */
    await page.click('[href*="/listings/single-car/97"]');
  
    await page.getByRole('link', { name: 'Message the Seller' }).click();
    await page.locator('#id_subject').click();
    await page.locator('#id_subject').fill('subject ito');
    await page.locator('#id_content').fill('message ito');

    await page.getByRole('button', { name: 'Send' }).click();
});

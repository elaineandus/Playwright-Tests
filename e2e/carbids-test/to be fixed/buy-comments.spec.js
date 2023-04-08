import { test } from '@playwright/test';

test('Comments - Add Comment, Submit', async ({ page }) => {
    await page.goto('https://stag.carbids.ph/');
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('elaine.andus@iainnovations.com');
    await page.getByPlaceholder('Enter password').fill('password');
    await page.getByRole('button', { name: 'Sign in' }).click();

    await page.getByRole('button', { name: 'Cars' }).click();
    await page.getByRole('link', { name: 'Car Marketplace' }).click();

   /*  await page.getByRole('button', { name: ' Make' }).click();
    await page.getByRole('link', { name: 'Chevrolet', exact: true }).click(); */
    await page.getByRole('button', { name: ' Make' }, { timeout: 600000 }).click();
await page.getByRole('link', { name: 'Chevrolet', exact: true }, { timeout: 10000 }).click();

    await page.getByRole('button', { name: ' Trans' }).click();
    await page.getByRole('link', { name: 'Manual' }).click();
    await page.getByRole('button', { name: ' Body Type' }).click();
    await page.getByRole('link', { name: 'All' }).click();
    await page.locator('form').filter({ hasText: 'Chevrolet All Abarth AC Acura Aixam Alfa Romeo ALPINA Artega Asia Motors Aston M' }).getByRole('button', { name: 'Search' }).click();

    /* await page.locator('.img-overlay').first().click(); */
    /* await page.click('[href*="/listings/single-car/97"]'); */
    await page.locator('.card').first().click();
  
    await page.getByRole('link', { name: 'Add comment' }).click();
    await page.getByLabel('Add comment:').fill('Elaine added another comment');
    await page.getByRole('button', { name: 'Submit' }).click();
});
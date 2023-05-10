import { test, expect } from '@playwright/test';

test('should check correct rate for 2023', async ({ page }) => {

  await page.goto('http://ptfstag2.zennerslab.com/');

  await page.getByRole('link', { name: 'Search' }).nth(1).click();

  await page.getByRole('main').locator('[id="9"]').check();
  
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('ex2 0901.22.20.200');
  await page.getByRole('textbox', { name: 'Search' }).press('Enter');
  await page.locator('a').filter({ hasText: 'ex2 0901.22.20.200 Other' }).first().click();
  await page.getByRole('button', { name: 'Search' }).click();

  await page.getByRole('link', { name: 'Contains Extraction' }).click();

  /* await page.getByRole('row', { name: 'ex2 0901.22.20.200 Other X Manufacture in which the value of all non-originating materials used does not exceed 65% of the ex-works price of the product' }).getByRole('cell', { name: '40', exact: true }).click();
 */

  /* const cell = await page.getByRole('cell', { name: '40', exact: true }); */

  /* await expect(cell).toExist(); */
 /*  await expect(cell.isVisible()).toBeTruthy(); */

  const assertion = await page.getByRole('cell', { name: 'X', exact: true });
  await expect(assertion).toContainText('40', { timeout: 10000 });

});
 



  


  
// DONE (passed)

import { test, expect } from '@playwright/test';

test('should check correct rate for 2023', async ({ page }) => {

  await page.goto('http://staging.tariffcommission.gov.ph/');

  await page.getByRole('link', { name: 'Search' }).nth(1).click();

  await page.getByRole('main').locator('[id="9"]').check();
  
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('ex2 0901.22.20.200');
  await page.locator('a').filter({ hasText: 'ex2 0901.22.20.200 Other (NOR)' }).click();
  
  await page.getByRole('button', { name: 'Search' }).click();

  await page.getByRole('link', { name: 'Contains Extraction' }).click();

  // Select the table cell with the code "ex2 0901.22.20.200"
  const cell = await page.locator('#tblinputYear1ConcessionNOREOModal tr:nth-child(2) > td:nth-child(1)');
  await expect(cell).toContainText('ex2 0901.22.20.200');

  // Select the third cell in the same row (the "Rate" column)
  const rateCell = await page.locator('#tblinputYear1ConcessionNOREOModal tr:nth-child(2) > td:nth-child(3)');

  // Assertion
  const rateCellValue = await rateCell.innerText();
  await expect(rateCellValue).toBe('40');

});

// Before code that also works:
/* const rateCell = await page.locator('#tblinputYear1ConcessionNOREOModal tr:nth-child(2) > td:nth-child(3)');
if (rateCell) {
  const rateCellValue = await rateCell.innerText();
  await expect(rateCellValue.trim()).toBe('40');
} */

  

  
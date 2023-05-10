// TEST DONE

import { test, expect } from '@playwright/test';

test('should check correct tariff reduction schedule', async ({ page }) => {

  await page.goto('http://ptfstag2.zennerslab.com/');

  await page.getByRole('link', { name: 'Search' }).nth(1).click();

  await page.getByRole('main').locator('[id="13"]').check();
  
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('ex1 6201.90.90');
  await page.locator('a').filter({ hasText: 'ex1 6201.90.90 Overcoats, raincoats, car-coats, cloaks, capes, ponchos, three-qu' }).click();

  await page.getByRole('button', { name: 'Search' }).click();

  const assertion = await page.locator('#rate th:nth-child(2)');
  await expect(assertion).toContainText('Contains Extraction');
  
  // ------------------ AFTER PASSED ------------------------ //

  await page.getByRole('link', { name: 'Contains Extraction' }).click();
  await page.getByRole('cell', { name: 'ex1 6201.90.90' }).getByText('ex1 6201.90.90').click();

  // Check if these years are existing
  const exConcessionYear = await page.locator('tr#exConcessionYear');
  await expect(exConcessionYear).toContainText('20232024202520262027');

  // Select the table cell with the code
  const cell = await page.locator('#exConcessionRate td:nth-child(1)');
  await expect(cell).toContainText('ex1 6201.90.90');

  // Select the second cell in the same row (the "2023" column)
  const k23Cell = await page.locator('#exConcessionRate td:nth-child(2)');
  await expect(k23Cell).toContainText('0');

  // Select the second cell in the same row (the "2023" column)
  const k24Cell = await page.locator('#exConcessionRate td:nth-child(3)');
  await expect(k24Cell).toContainText('0');

  // Select the second cell in the same row (the "2023" column)
  const k25Cell = await page.locator('#exConcessionRate td:nth-child(4)');
  await expect(k25Cell).toContainText('0');

  // Select the second cell in the same row (the "2023" column)
  const k26Cell = await page.locator('#exConcessionRate td:nth-child(5)');
  await expect(k26Cell).toContainText('0');

  // Select the second cell in the same row (the "2023" column)
  const k27Cell = await page.locator('#exConcessionRate td:nth-child(6)');
  await expect(k27Cell).toContainText('0');
  
});
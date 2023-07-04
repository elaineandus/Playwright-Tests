// DONE (failed), 2024 = Expect 5, received 3

import { test, expect } from '@playwright/test';

test('should check correct tariff reduction schedule', async ({ page }) => {

  await page.goto('http://finder.tariffcommission.gov.ph/');

  await page.getByRole('link', { name: 'Search' }).nth(1).click();

  await page.getByRole('main').locator('[id="10"]').check();
  
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('7614.10.90');
  await page.locator('a').filter({ hasText: '7614.10.90- - Other' }).click();

  await page.getByRole('button', { name: 'Search' }).click();

  await page.getByRole('link', { name: 'PH-EFTA FTA (CHE/LIE)' }).click();

    // Select the second cell in the same row (the "2022" column)
  try {
  const k22Cell = await page.locator('#concessionRateCHELIE td:nth-child(2)');
  await expect(k22Cell).toContainText('5');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2023" column)
  try {
  const k23Cell = await page.locator('#concessionRateCHELIE td:nth-child(3)');
  await expect(k23Cell).toContainText('5');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2024" column)
  try {
  const k24Cell = await page.locator('#concessionRateCHELIE td:nth-child(4)');
  await expect(k24Cell).toContainText('5');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2025" column)
  try {
  const k25Cell = await page.locator('#concessionRateCHELIE td:nth-child(5)');
  await expect(k25Cell).toContainText('3');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2026" column)
  try {
  const k26Cell = await page.locator('#concessionRateCHELIE td:nth-child(6)');
  await expect(k26Cell).toContainText('3');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2027" column)
  try {
  const k27Cell = await page.locator('#concessionRateCHELIE td:nth-child(7)');
  await expect(k27Cell).toContainText('0');
  } catch (error) {
    await test.fail();
  }
  
});


 
  
 
 
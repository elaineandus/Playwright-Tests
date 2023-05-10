// TEST DONE

import { test, expect } from '@playwright/test';

test('should check correct tariff reduction schedule', async ({ page }) => {

  await page.goto('http://ptfstag2.zennerslab.com/');

  await page.getByRole('link', { name: 'Search' }).nth(1).click();

  await page.getByRole('main').locator('[id="13"]').check();
  
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('ex1 1517.90.67');
  await page.locator('a').filter({ hasText: 'ex1 1517.90.67In which soya-bean oil predominates' }).click();
  
  await page.getByRole('button', { name: 'Search' }).click();

  const assertion = await page.locator('#rate th:nth-child(2)');
  await expect(assertion).toContainText('Contains Extraction');

  // ------------------ AFTER PASSED ------------------------ //

  await page.getByRole('link', { name: 'Contains Extraction' }).click();
  await page.getByRole('cell', { name: 'ex1 1517.90.67' }).getByText('ex1 1517.90.67').click();

  // Check if these years are existing (Tariff Concession)
  const exConcessionYearAll = await page.locator('tr#exConcessionYearAll');
  await expect(exConcessionYearAll).toContainText('20232024202520262027');

  // Select the table cell with the code
  const cell = await page.locator('#exConcessionRateAll td:nth-child(1)');
  await expect(cell).toContainText('ex1 1517.90.67');

  // Select the second cell in the same row (the "2023" column)
  const k23Cell = await page.locator('#exConcessionRateAll td:nth-child(2)');
  await expect(k23Cell).toContainText('15');

  // Select the second cell in the same row (the "2024" column)
  const k24Cell = await page.locator('#exConcessionRateAll td:nth-child(3)');
  await expect(k24Cell).toContainText('15');

  // Select the second cell in the same row (the "2025" column)
  const k25Cell = await page.locator('#exConcessionRateAll td:nth-child(4)');
  await expect(k25Cell).toContainText('15');

  // Select the second cell in the same row (the "2026" column)
  const k26Cell = await page.locator('#exConcessionRateAll td:nth-child(5)');
  await expect(k26Cell).toContainText('15');

  // Select the second cell in the same row (the "2027" column)
  const k27Cell = await page.locator('#exConcessionRateAll td:nth-child(6)');
  await expect(k27Cell).toContainText('15');

  /*--- Except for South Korea Link ---*/

  await page.getByText('Applied for ASEAN, AU, CN, JP, and NZ. For KR, refer to Section E.').click();

  // Check if the content in the table for Korea is existing
  const tableExAnnex = await page.locator('#tableExAnnex');
  await expect(tableExAnnex).toContainText('Country');

  try {
  const koreaCell = await page.locator('#tableExAnnex > table > tbody > tr > td:nth-child(3)');
  await expect(koreaCell).toContainText('15');
  } catch (error) {
    await test.fail();
  }

  /*----- Tariff Concession (South Korea) ------*/
  // Check if these years are existing (Common Concession)
  const exConcessionYearSouthKorea = await page.locator('tr#exConcessionYearSouthKorea');
  await expect(exConcessionYearSouthKorea).toContainText('20232024202520262027');

  // Select the second cell in the same row (the "2023" column)
  try {
  const sk23Cell = await page.locator('#exConcessionRateSouthKorea > td:nth-child(2)');
  await expect(sk23Cell).toContainText('U');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2024" column)
  try {
  const sk24Cell = await page.locator('#exConcessionRateSouthKorea > td:nth-child(3)');
  await expect(sk24Cell).toContainText('U');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2025" column)
  try {
  const sk25Cell = await page.locator('#exConcessionRateSouthKorea > td:nth-child(4)');
  await expect(sk25Cell).toContainText('U');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2026" column)
  try {
  const sk26Cell = await page.locator('#exConcessionRateSouthKorea > td:nth-child(5)');
  await expect(sk26Cell).toContainText('U');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2027" column)
  try {
  const sk27Cell = await page.locator('#exConcessionRateSouthKorea > td:nth-child(6)');
  await expect(sk27Cell).toContainText('U');
  } catch (error) {
    await test.fail();
  }

});
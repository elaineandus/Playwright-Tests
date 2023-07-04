// DONE (failed), tariff conc japan 2023 expected = U, received = 5
// 2024-2027 expected = U, received = EO 20 (s.2017)

import { test, expect } from '@playwright/test';

test('should check correct tariff reduction schedule', async ({ page }) => {

  await page.goto('http://finder.tariffcommission.gov.ph/');

  await page.getByRole('link', { name: 'Search' }).nth(1).click();

  await page.getByRole('main').locator('[id="13"]').check();
  
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('3506.99.0');
  await page.locator('a').filter({ hasText: '3506.99.00- - Other' }).click();
  
  await page.getByRole('button', { name: 'Search' }).click();

  await page.getByRole('link', { name: 'RCEP' }).click();

  // Check if these years are existing
  try {
  const concessionYearRCEP = await page.locator('#concessionYearRCEPAll');
  await expect(concessionYearRCEP).toContainText('202220232024202520262027');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2022" column)
try {
  const k22Cell = await page.locator('#concessionRateRCEPAll td:nth-child(2)');
  await expect(k22Cell).toContainText('No Data');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2023" column)
  try {
  const k23Cell = await page.locator('#concessionRateRCEPAll td:nth-child(3)');
  await expect(k23Cell).toContainText('0');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2024" column)
  try {
  const k24Cell = await page.locator('#concessionRateRCEPAll td:nth-child(4)');
  await expect(k24Cell).toContainText('0');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2025" column)
  try {
  const k25Cell = await page.locator('#concessionRateRCEPAll td:nth-child(5)');
  await expect(k25Cell).toContainText('0');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2026" column)
  try {
  const k26Cell = await page.locator('#concessionRateRCEPAll td:nth-child(6)');
  await expect(k26Cell).toContainText('0');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2027" column)
  try {
  const k27Cell = await page.locator('#concessionRateRCEPAll td:nth-child(7)');
  await expect(k27Cell).toContainText('0');
  } catch (error) {
    await test.fail();
  }

    /*--- Except for Japan Link ---*/

  await page.getByText('Except for Japan').click();

  // Check if the content in the table for Japan is existing
  const tableExAnnex = await page.locator('#tblinputYear1ConcessionRCEPRCEPModal > tbody > tr > td:nth-child(1)');
  await expect(tableExAnnex).toContainText('Japan');

  try {
  const yearCell = await page.locator('#tblinputYear1ConcessionRCEPRCEPModal > tbody > tr > td:nth-child(2)');
  await expect(yearCell).toContainText('2023');
  } catch (error) {
    await test.fail();
  }

  try {
  const rateCell = await page.locator('#tblinputYear1ConcessionRCEPRCEPModal > tbody > tr > td:nth-child(3)');
  await expect(rateCell).toContainText('5');
  } catch (error) {
    await test.fail();
  }

  /*----- Tariff Concession (Japan) ------*/
  // Check if these years are existing (Common Concession)
  const concessionYearRCEPJapan = await page.locator('#concessionYearRCEPJapan');
  await expect(concessionYearRCEPJapan).toContainText('20232024202520262027');

     // Select the second cell in the same row (the "2022" column)
try {
  const jp22Cell = await page.locator('#concessionRateRCEPJapan > td:nth-child(2)');
  await expect(jp22Cell).toContainText('No Data');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2023" column)
  try {
  const jp23Cell = await page.locator('#concessionRateRCEPJapan td:nth-child(3)');
  await expect(jp23Cell).toContainText('U');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2024" column)
  try {
  const jp24Cell = await page.locator('#concessionRateRCEPJapan td:nth-child(4)');
  await expect(jp24Cell).toContainText('U');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2025" column)
  try {
  const jp25Cell = await page.locator('#concessionRateRCEPJapan td:nth-child(5)');
  await expect(jp25Cell).toContainText('U');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2026" column)
  try {
  const jp26Cell = await page.locator('#concessionRateRCEPJapan td:nth-child(6)');
  await expect(jp26Cell).toContainText('U');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2027" column)
  try {
  const jp27Cell = await page.locator('#concessionRateRCEPJapan td:nth-child(7)');
  await expect(jp27Cell).toContainText('U');
  } catch (error) {
    await test.fail();
  }

});
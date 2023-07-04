// DONE (failed), tariff conc australia also new zealand 2026-2027 expected = 3, received = 2

import { test, expect } from '@playwright/test';

test('should check correct tariff reduction schedule', async ({ page }) => {

  await page.goto('http://finder.tariffcommission.gov.ph/');

  await page.getByRole('link', { name: 'Search' }).nth(1).click();

  await page.getByRole('main').locator('[id="13"]').check();
  
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('7312.10.10');
  await page.locator('a').filter({ hasText: '7312.10.10- - Locked coils, flattened strands and non-rotating wire ropes' }).click();
  
  await page.getByRole('button', { name: 'Search' }).click();

  await page.getByRole('link', { name: 'RCEP' }).click();

  // Check if these years are existing for Common Concession
  try {
  const concessionYearRCEP = await page.locator('#concessionYearRCEPAll');
  await expect(concessionYearRCEP).toContainText('202220232024202520262027');
  } catch (error) {
    await test.fail();
  }

    // Select the second cell in the same row (the "2022" column)
  try {
  const k22Cell = await page.locator('#concessionRateRCEPAll > td:nth-child(2)');
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

  // Check if these years are existing for Australia
  try {
  const concessionYearRCEP = await page.locator('#concessionYearRCEPAustralia');
  await expect(concessionYearRCEP).toContainText('202220232024202520262027');
  } catch (error) {
    await test.fail();
  }

    // Select the second cell in the same row (the "2022" column)
try {
  const auk22Cell = await page.locator('#concessionRateRCEPAustralia > td:nth-child(2)');
  await expect(auk22Cell).toContainText('No Data');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2023" column)
  try {
  const auk23Cell = await page.locator('#concessionRateRCEPAustralia td:nth-child(3)');
  await expect(auk23Cell).toContainText('3');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2024" column)
  try {
  const auk24Cell = await page.locator('#concessionRateRCEPAustralia td:nth-child(4)');
  await expect(auk24Cell).toContainText('3');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2025" column)
  try {
  const auk25Cell = await page.locator('#concessionRateRCEPAustralia td:nth-child(5)');
  await expect(auk25Cell).toContainText('3');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2026" column)
  try {
  const auk26Cell = await page.locator('#concessionRateRCEPAustralia td:nth-child(6)');
  await expect(auk26Cell).toContainText('3');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2027" column)
  try {
  const auk27Cell = await page.locator('#concessionRateRCEPAustralia td:nth-child(7)');
  await expect(auk27Cell).toContainText('3');
  } catch (error) {
    await test.fail();
  }

  // Check if these years are existing for New Zealand
  try {
  const concessionYearRCEP = await page.locator('#concessionYearRCEPNewZealand');
  await expect(concessionYearRCEP).toContainText('202220232024202520262027');
  } catch (error) {
    await test.fail();
  }

    // Select the second cell in the same row (the "2022" column)
try {
  const nzk22Cell = await page.locator('#concessionRateRCEPNewZealand > td:nth-child(2)');
  await expect(nzk22Cell).toContainText('No Data');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2023" column)
  try {
  const nzk23Cell = await page.locator('#concessionRateRCEPNewZealand td:nth-child(3)');
  await expect(nzk23Cell).toContainText('3');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2024" column)
  try {
  const nzk24Cell = await page.locator('#concessionRateRCEPNewZealand td:nth-child(4)');
  await expect(nzk24Cell).toContainText('3');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2025" column)
  try {
  const nzk25Cell = await page.locator('#concessionRateRCEPNewZealand td:nth-child(5)');
  await expect(nzk25Cell).toContainText('3');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2026" column)
  try {
  const nzk26Cell = await page.locator('#concessionRateRCEPNewZealand td:nth-child(6)');
  await expect(nzk26Cell).toContainText('3');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2027" column)
  try {
  const nzk27Cell = await page.locator('#concessionRateRCEPNewZealand td:nth-child(7)');
  await expect(nzk27Cell).toContainText('3');
  } catch (error) {
    await test.fail();
  }

  await page.getByRole('link', { name: 'Except for Australia and New Zealand' }).click();

  // Check if the content in the table for Australia is existing
  const autableExAnnex = await page.locator('#tblinputYear1ConcessionRCEPRCEPModal > tbody > tr:nth-child(1) > td:nth-child(1)');
  await expect(autableExAnnex).toContainText('Australia');

  try {
  const auyearCell = await page.locator('#tblinputYear1ConcessionRCEPRCEPModal > tbody > tr:nth-child(1) > td:nth-child(2)');
  await expect(auyearCell).toContainText('2023');
  } catch (error) {
    await test.fail();
  }

  try {
  const aurateCell = await page.locator('#tblinputYear1ConcessionRCEPRCEPModal > tbody > tr:nth-child(1) > td:nth-child(2)');
  await expect(aurateCell).toContainText('3');
  } catch (error) {
    await test.fail();
  }

  // Check if the content in the table for New Zealand is existing
  const nztableExAnnex = await page.locator('#tblinputYear1ConcessionRCEPRCEPModal > tbody > tr:nth-child(2) > td:nth-child(1)');
  await expect(nztableExAnnex).toContainText('New Zealand');

  try {
  const nzyearCell = await page.locator('#tblinputYear1ConcessionRCEPRCEPModal > tbody > tr:nth-child(2) > td:nth-child(2)');
  await expect(nzyearCell).toContainText('2023');
  } catch (error) {
    await test.fail();
  }

  try {
  const nzrateCell = await page.locator('#tblinputYear1ConcessionRCEPRCEPModal > tbody > tr:nth-child(2) > td:nth-child(3)');
  await expect(nzrateCell).toContainText('3');
  } catch (error) {
    await test.fail();
  }

});
// DONE (failed), rate expected = 0.3, received = 0%3
// tariff conce china 2023-2025 expected = 33, received = 3%3
// tariff conce china 2026-2027 expected = 33, received = 2%3

import { test, expect } from '@playwright/test';

test('should check correct tariff reduction schedule', async ({ page }) => {

  await page.goto('http://staging.tariffcommission.gov.ph/');

  await page.getByRole('link', { name: 'Search' }).nth(1).click();

  await page.getByRole('main').locator('[id="13"]').check();
  
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('8704.32.41');
  await page.locator('a').filter({ hasText: '8704.32.41- - - - - Refrigerated lorries (trucks)' }).click();
  
  await page.getByRole('button', { name: 'Search' }).click();

  await page.getByRole('link', { name: 'RCEP' }).click();

  try {
  const rate = await page.locator('tr#rate > th:nth-child(2)');
  await expect(rate).toContainText('0.3');
  } catch (error) {
    await test.fail();
  }

  // Check if these years are existing for common concession
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

  // Check if these years are existing for China
  try {
  const concessionYearRCEP = await page.locator('#concessionYearRCEPChina');
  await expect(concessionYearRCEP).toContainText('202220232024202520262027');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2022" column)
try {
  const ch22Cell = await page.locator('#concessionRateRCEPChina > td:nth-child(2)');
  await expect(ch22Cell).toContainText('No Data');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2023" column)
  try {
  const ch23Cell = await page.locator('#concessionRateRCEPChina td:nth-child(3)');
  await expect(ch23Cell).toContainText('33');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2024" column)
  try {
  const ch24Cell = await page.locator('#concessionRateRCEPChina td:nth-child(4)');
  await expect(ch24Cell).toContainText('33');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2025" column)
  try {
  const ch25Cell = await page.locator('#concessionRateRCEPChina td:nth-child(5)');
  await expect(ch25Cell).toContainText('33');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2026" column)
  try {
  const ch26Cell = await page.locator('#concessionRateRCEPChina td:nth-child(6)');
  await expect(ch26Cell).toContainText('33');
  } catch (error) {
    await test.fail();
  }

  // Select the second cell in the same row (the "2027" column)
  try {
  const ch27Cell = await page.locator('#concessionRateRCEPChina td:nth-child(7)');
  await expect(ch27Cell).toContainText('33');
  } catch (error) {
    await test.fail();
  }

});
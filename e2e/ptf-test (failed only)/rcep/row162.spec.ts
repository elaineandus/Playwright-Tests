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
  
});
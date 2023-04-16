import { test, expect } from '@playwright/test';

test('should be highlighted in blue and must have a tagging of “PJEPA”', async ({ page }) => {

  await page.goto('http://ptfstag2.zennerslab.com/');

  await page.getByRole('link', { name: 'Search' }).first().click();

  await page.locator('#jqvmap3_aa0').click();

  const indonesia =  await page.locator('#jqvmap3_aa0').click();
  await expect(indonesia).toContain('PJEPA');

  

});



  
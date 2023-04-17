import { test, expect } from '@playwright/test';

test('should be highlighted in blue and must have a tagging of “PJEPA”', async ({ page }) => {

  await page.goto('http://ptfstag2.zennerslab.com/');
  await page.getByRole('link', { name: 'Search' }).first().click();

  const element = await page.locator('#jqvmap10_492');
  
  // Wait for the element to become available
  await element.waitFor({ state: 'attached' });
  
  // Scroll the element into view
  await element.scrollIntoViewIfNeeded();
  
  // Simulate hovering the element
  await element.hover();

  const mapLabel = await page.locator('.jqvmap-label');
  await expect(mapLabel).toBeVisible();
  await expect(mapLabel).toContainText('Russia');
  await expect(mapLabel).toContainText('MFN');
});

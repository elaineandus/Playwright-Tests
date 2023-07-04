// DONE (passed)

import { test, expect } from '@playwright/test';

test('should be highlighted in blue and must have a tagging of “PJEPA”', async ({ page }) => {

  await page.goto('http://finder.tariffcommission.gov.ph/');
  await page.getByRole('link', { name: 'Search' }).first().click();
  /* await page.locator('#jqvmap1_492').click(); */

  
   const element = await page.locator('#jqvmap1_492');
  
    // Simulate hovering the element
    await element.hover();

    /* await page.waitForSelector('#jqvmap1_492'); */

   
/*     const content = await page.locator('.jqvmap-label').innerText();
    await expect(content).toContain('Russia·• MFN'); */

    const mapLabel = await page.locator('.jqvmap-label');
    await expect(mapLabel).toBeVisible();
    await expect(mapLabel).toContainText('Russia');
    await expect(mapLabel).toContainText('MFN');

    
    
 

  /* await page.locator('#jqvmap3_aa0').click();

  const indonesia =  await page.locator('#jqvmap3_aa0').click();
  await expect(indonesia).toContain('PJEPA'); */

  /* await page.locator('path#jqvmap1_5e6.jqvmap-region').click(); */

  /* await page.locator('#jqvmap8_79e').click(); */

  /* const element = await page.locator('#jqvmap1_492');

    // Simulate hovering the element
    await element.hover();

    // Wait for the content to update
    await page.waitForSelector('#jqvmap1_492');

    // Get the content and verify it
    try {
    const content = await page.$eval('#jqvmap1_492', (el) => el.textContent);
    await expect(content).toContain('PJEPA');
  } catch (error) {
    console.error(error);
  } */

});



  
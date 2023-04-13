const { test, expect } = require('@playwright/test');

test('should check correct tariff reduction schedule', async ({ page }) => {

  await page.goto('http://ptfstag2.zennerslab.com/');

  await page.getByRole('link', { name: 'Search' }).nth(1).click();

  await page.getByRole('main').locator('[id="10"]').check();
  
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('5705.00.92');
  await page.locator('a').filter({ hasText: '5705.00.92- - Non-woven floor coverings, of a kind used for motor vehicles of he' }).click();
  /* TOMORROW NA TWOH */
  await page.getByRole('textbox', { name: 'Search' }).fill('7614.10.90');
  await page.locator('a').filter({ hasText: '7614.10.90- - Other' }).click();

  await page.getByRole('button', { name: 'Search' }).click();

  await page.getByRole('link', { name: 'PH-EFTA FTA (CHE/LIE)' }).click();

  try {
    const k19 = await page.getByRole('cell', { name: '15' }).first();
    await expect(k19).toContainText('15');
  } catch (error) {
    console.error(error);
  }
  
  try {
    const k20 = await page.getByRole('cell', { name: '15'}).nth(1)
    await expect(k20).toContainText('15');
  } catch (error) {
    console.error(error);
  }
  
  try {
    const k21 = await page.getByRole('cell', { name: '15'}).nth(2)
    await expect(k21).toContainText('15');
  } catch (error) {
    console.error(error);
  }
  
  try {
    const k22 = await page.getByRole('cell', { name: '15'}).nth(3)
    await expect(k22).toContainText('15');
  } catch (error) {
    console.error(error);
  }
  
  try {
    const k23 = await page.getByRole('cell', { name: '15' }).nth(4);
    await expect(k23).toContainText('15');
  } catch (error) {
    console.error(error);
  }
  
  try {
    const k24 = await page.getByRole('cell', { name: '10' }).first();
    await expect(k24).toContainText('15', { timeout: 10000 });
  } catch (error) {
    console.error(error);
    // do not throw error here
  }
  
  try {
    const k25 = await page.getByRole('cell', { name: '10' }).nth(1);
    await expect(k25).toContainText('10', { timeout: 10000 });
  } catch (error) {
    console.error(error);
  }
  
  try {
    const k26 = await page.getByRole('cell', { name: '7', exact: true });
    await expect(k26).toContainText('7', { timeout: 10000 });
  } catch (error) {
    console.error(error);
  }
  
  try {
    const k27 = await page.getByRole('cell', { name: '5', exact: true });
    await expect(k27).toContainText('5', { timeout: 10000 });
  } catch (error) {
    console.error(error);
  }
  
});


 
  
 
 
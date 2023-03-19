import { test, expect } from '@playwright/test';

test('Seller Create List Test', async ({ page }) => {
    await page.setDefaultTimeout(60000);
    await page.goto('https://stag.carbids.ph/');
    await page.click('a[href*="signin-modal"]');
    await page.setDefaultTimeout(60000);

    await page.fill('input[id="signin-email"]', 'elaine.andus@iainnovations.com');
    await page.fill('input[id="signin-password"]', 'password');
    await page.setDefaultTimeout(60000);
    await page.click('//button[@type="submit"]');
    await page.setDefaultTimeout(60000);

    await page.click('a[href*="/listings/sell-car/"]');
    
    await page.fill('input[id="id_title"]', 'KOTSE');
    await page.selectOption('#id_seller_type', 'COMPANY');
    await page.waitForSelector('#id_auction_start');
    await page.fill('#id_auction_start', '2023-03-18T10:30');
    await page.fill('#id_auction_end', '2023-03-19T10:30');

    await page.click('input[id="id_is_reserved_price"]');
    await page.fill('input[id="id_starting_bid_amount"]', '100001');
    await page.fill('input[id="id_current_bid_amount"]', '100002');
    await page.fill('input[id="id_increment_next_by"]', '100003');

    await page.selectOption('#id_make', 'Toyota');
    await page.fill('input[id="id_model"]', 'Sedan');
    await page.fill('input[id="id_year"]', '1');
    await page.fill('input[id="id_mileage"]', '1');

    await page.selectOption('#id_body_style', 'Sedan');
    await page.selectOption('#id_fuel_type', 'Gasoline');
    await page.fill('input[id="id_engine"]', 'The engine displacement ranges from 1.3 to 1.5 liters');
    await page.selectOption('#id_transmission', 'Automatic');
    await page.selectOption('#id_drivetrain', 'FWD');
    await page.fill('#id_exterior_color', 'Black');
    await page.fill('#id_interior_color', 'Gray');

    await page.frameLocator('iframe[title="Rich Text Editor\\, id_highlights"]').locator('body').fill('Reliability, Fuel Efficiency, and Practicality');

    await page.frameLocator('iframe[title="Rich Text Editor\\, id_known_flaws"]').locator('body').fill('Basic Interior Design');

    await page.frameLocator('iframe[title="Rich Text Editor\\, id_equipment"]').locator('body').fill('Air Conditioning, Power Windows and Mirrors, Audio System');

    await page.frameLocator('iframe[title="Rich Text Editor\\, id_modifications"]').locator('body').fill('Mofification of Interior Design');

    await page.frameLocator('iframe[title="Rich Text Editor\\, id_recent_service_history"]').locator('body').fill('N/A');

    await page.frameLocator('iframe[title="Rich Text Editor\\, id_other_items"]').locator('body').fill('N/A');

    await page.frameLocator('iframe[title="Rich Text Editor\\, id_ownership_history"]').locator('body').fill('N/A');

    await page.frameLocator('iframe[title="Rich Text Editor\\, id_seller_notes"]').locator('body').fill('Buy Now');

    await page.getByRole('button', { name: 'Save and continue' }).click();
});
import { test, expect } from '@playwright/test';

test('test scenario 1', async ({ page }) => {

   await page.goto('http://192.168.11.6:3005/');

   // login
   await page.locator('#Username').fill('admin');
   await page.locator('#Password').fill('1@adminPass');
   await page.getByRole('button', { name: 'Login' }).click();

   // policies page
   await page.goto('http://192.168.11.6:3005/EmployeePolicies', { timeout: 60000 }); 

   // finding joana
   await page.getByLabel('Find:').fill('adan joana', { timeout: 60000 });
   await page.getByRole('link', { name: 'Edit' }).click();

   // modify policies
   await page.getByLabel('Allow Night Diff (NDF)').uncheck();
   await page.getByLabel('Allow Overtime (OT)').uncheck();
   await page.getByLabel('Absent If Tardiness Reached (Mins)').fill('120');

   await page.getByRole('button', { name: 'Save' }).click();
   
   // timekeeping and payroll - processing page
   await page.goto('http://192.168.11.6:3005/TimeSheet', { timeout: 60000 }); 

   // input employee details
   await page.locator('#button-search').click();
   await page.locator('#ddCompany').selectOption('3');
   await page.locator('#ddBranch').selectOption('6');
   await page.locator('#accordion div').filter({ hasText: 'Employee Details' }).nth(1).click();
   await page.locator('#txtName').fill('adan');
   await page.locator('#accordion div').filter({ hasText: 'Period Dates' }).nth(1).click();
   await page.locator('#txtYear').fill('2022');   
   await page.locator('#ddCoveredPeriod').selectOption('75');
   await page.getByRole('button', { name: 'Search'}).click({ timeout: 60000 });
   await page.getByRole('link', { name: 'Adan, Joana Joy Llarena' }).click({ timeout: 60000 });

   try { 
         const Statuscell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(1) > td.sticky-col.fourth-col`);
         await expect(Statuscell).toContainText('Absent');
   } catch (error) {
         await test.fail();
   };
   
   try {
         const Workhrscell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(1) > td:nth-child(7)`);
         await expect(Workhrscell).toContainText('0');
   } catch (error) {
         await test.fail();
   };
   
   try {
         const Latecell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(1) > td:nth-child(8)`);
         await expect(Latecell).toContainText('0');
   } catch (error) {
         await test.fail();
   };
   
   try {
         const UTcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(1) > td:nth-child(9)`);
         await expect(UTcell).toContainText('0');
   } catch (error) {
         await test.fail();
   };
   
   try {
         const Breakminscell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(1) > td:nth-child(10)`);
         await expect(Breakminscell).toContainText('0');
   } catch (error) {
         await test.fail();
   };
   
   try {
         const Overbreakcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(1) > td:nth-child(11)`);
         await expect(Overbreakcell).toContainText('0');
   } catch (error) {
         await test.fail();
   };
   
   try {
         const OTcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(1) > td:nth-child(12)`);
         await expect(OTcell).toContainText('0');
   } catch (error) {
         await test.fail();
   };
   
   try {
         const NDFcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(1) > td:nth-child(13)`);
         await expect(NDFcell).toContainText('0');
   } catch (error) {
         await test.fail();
   };
   
   try {
         const NDFOTcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(1) > td:nth-child(14)`);
         await expect(NDFOTcell).toContainText('0');
   } catch (error) {
         await test.fail();
   };
   
   try {
         const RDcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(1) > td:nth-child(15)`);
         await expect(RDcell).toContainText('0');
   } catch (error) {
         await test.fail();
   };
   
   try {
         const RDOTcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(1) > td:nth-child(16)`);
         await expect(RDOTcell).toContainText('0');
   } catch (error) {
         await test.fail();
   };
   
   try {
         const RDNDFcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(1) > td:nth-child(17)`);
         await expect(RDNDFcell).toContainText('0');
   } catch (error) {
         await test.fail();
   };
   
   try {
         const RDNDFOTcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(1) > td:nth-child(18)`);
         await expect(RDNDFOTcell).toContainText('0');
   } catch (error) {
         await test.fail();
   };
   
   try {
         const RHcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(1) > td:nth-child(19)`);
         await expect(RHcell).toContainText('0');
   } catch (error) {
         await test.fail();
   };
  
   try { 
         const RHOTcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(1) > td:nth-child(20)`);
         await expect(RHOTcell).toContainText('0');
   } catch (error) {
         await test.fail();
   };    
   
   try { 
         const RHNDFcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(1) > td:nth-child(21)`);
         await expect(RHNDFcell).toContainText('0');
   } catch (error) {
         await test.fail();
   };    
   
   try { 
         const RHNDFOTcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(1) > td:nth-child(22)`);
         await expect(RHNDFOTcell).toContainText('0');
   } catch (error) {
         await test.fail();
   };    
   
   try { 
         const RHRDcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(1) > td:nth-child(23)`);
         await expect(RHRDcell).toContainText('0');
   } catch (error) {
         await test.fail();
   };    
   
   try { 
         const RHRDNDFcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(1) > td:nth-child(24)`);
         await expect(RHRDNDFcell).toContainText('0');
   } catch (error) {
         await test.fail();
   };    
   
   try { 
         const RHRDOTcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(1) > td:nth-child(25)`);
         await expect(RHRDOTcell).toContainText('0');
   } catch (error) {
         await test.fail();
   };    
   
   try { 
         const RHRDNDFOTcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(1) > td:nth-child(26)`);
         await expect(RHRDNDFOTcell).toContainText('0');
   } catch (error) {
         await test.fail();
   };    
   
   try { 
         const SHcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(1) > td:nth-child(27)`);
         await expect(SHcell).toContainText('0');
   } catch (error) {
         await test.fail();
   };    
   
   try { 
         const SHOTcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(1) > td:nth-child(28)`);
         await expect(SHOTcell).toContainText('0');
   } catch (error) {
         await test.fail();
   };    
   
   try { 
         const SHNDFcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(1) > td:nth-child(29)`);
         await expect(SHNDFcell).toContainText('0');
   } catch (error) {
         await test.fail();
   };    
   
   try { 
         const SHNDFOTcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(1) > td:nth-child(30)`);
         await expect(SHNDFOTcell).toContainText('0');
   } catch (error) {
         await test.fail();
   };    
   
   try { 
         const SHRDcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(1) > td:nth-child(31)`);
         await expect(SHRDcell).toContainText('0');
   } catch (error) {
         await test.fail();
   };  
    
   try{ 
        const SHRDNDFcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(1) > td:nth-child(32)`);
        await expect(SHRDNDFcell).toContainText('0');
   } catch (error) {
        await test.fail();
   };  

   try{ 
        const SHRDOTcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(1) > td:nth-child(33)`);
        await expect(SHRDOTcell).toContainText('0');
   } catch (error) {
        await test.fail();
   };
    
   try{ 
        const SHRDNDFOTcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(1) > td:nth-child(34)`);
        await expect(SHRDNDFOTcell).toContainText('0');
   } catch (error) {
        await test.fail();
   };  

});
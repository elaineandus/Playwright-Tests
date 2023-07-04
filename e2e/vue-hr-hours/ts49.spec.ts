import { test, expect } from '@playwright/test';

test('test scenario 9', async ({ page }) => {

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
   await page.getByLabel('Auto Calculate Overtime').check();
   await page.locator('#LateGracePeriod').fill('15');

   // Work Hours
   await page.getByLabel('Required Hours Per Week').fill('48.00');
   await page.getByLabel('Required Hours Per Day').fill('8.00');
   await page.getByLabel('Calculate by Required Hours per Month').uncheck();
   await page.getByLabel('Is Compressed Work Week').uncheck();
   await page.getByLabel('Calculate By Total Work Hours').uncheck();

   // Flexible:
   await page.getByLabel('Is Flexible').uncheck();
   await page.getByLabel('(Flexible) Meet Required Daily Hours').uncheck();
   await page.getByLabel('(Flexible) Start Computing Late After').fill('');

   // Lates, Undertime and Absences:
   await page.getByLabel('Start Late Count After Grace Period').uncheck();
   await page.getByLabel('No Lates or Undertime').uncheck();
   await page.getByLabel('No Absent').uncheck();
   await page.locator('#HalfDayIfTardinessReached').fill('0');
   await page.getByLabel('Absent If Tardiness Reached (Mins)').fill('0');

   // Entitlements:
   await page.getByLabel('Allow Overtime (OT)').check();
   await page.getByLabel('Allow Restday Work (RD)').check();
   await page.getByLabel('Allow Night Diff (NDF)').check();
   await page.getByLabel('Allow Night Diff OT (NDFOT)').check();
   await page.getByLabel('Allow Regular Holiday (RH)').check();
   await page.getByLabel('Allow Special Holiday (SH)').check();
   await page.getByLabel('Allow Restday Regular Holiday(RHRD)').check();
   await page.getByLabel('Allow Restday Special Holiday(SHRD)').check();

   // Break:
   await page.getByLabel('Paid Break').check();
   await page.getByLabel('Calculate Overbreak').check();
   await page.getByLabel('Follow Break Schedule').uncheck();

   // Overtime:
   await page.locator('div').filter({ hasText: 'OT Based on Schedule' }).locator('#NoOvertimeIfNotOvertheSchedule').nth(1).check();
   await page.getByLabel('Over Schedule OT Requires Approval').check();
   await page.getByLabel('Overtime On Restday Requires Approval').uncheck();
   await page.locator('#MinimumOt').fill('15');

   // Restday and Holiday:
   await page.getByLabel('Restday Work Requires Approval').check();
   await page.getByLabel('Holiday Work Requires Approval').check();
   await page.getByLabel('No Pay When Absent Before or After Holiday').uncheck();
   
   await page.getByRole('button', { name: 'Save' }).click();

   // modify time in and time out
   await page.goto('http://192.168.11.6:3005/Attendances?employeeId=&startTime=&endTime=&all=yes', { timeout: 60000 });

   await page.locator('td:nth-child(3) > .form-control').first().fill('2022-10-27T08:27');
   await page.locator('td:nth-child(3) > .form-control').last().fill('2022-10-27T18:15');

   await page.locator('#btnSaveLogs').click();
   
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
         const Statuscell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(2) > td.sticky-col.fourth-col`);
         await expect(Statuscell).toHaveText('Pending OT');
   } catch (error) {
         await test.fail();
   };
   
   try {
         const Workhrscell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(2) > td:nth-child(7)`);
         await expect(Workhrscell).toHaveText('9.55');
   } catch (error) {
         await test.fail();
   };
   
   try {
         const Latecell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(2) > td:nth-child(8)`);
         await expect(Latecell).toHaveText('27');
   } catch (error) {
         await test.fail();
   };
   
   try {
         const UTcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(2) > td:nth-child(9)`);
         await expect(UTcell).toHaveText('0');
   } catch (error) {
         await test.fail();
   };
   
   try {
         const Breakminscell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(2) > td:nth-child(10)`);
         await expect(Breakminscell).toHaveText('0');
   } catch (error) {
         await test.fail();
   };
   
   try {
         const Overbreakcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(2) > td:nth-child(11)`);
         await expect(Overbreakcell).toHaveText('0');
   } catch (error) {
         await test.fail();
   };
   
   try {
         const OTcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(2) > td:nth-child(12)`);
         await expect(OTcell).toHaveText('15');
   } catch (error) {
         await test.fail();
   };
   
   try {
         const NDFcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(2) > td:nth-child(13)`);
         await expect(NDFcell).toHaveText('0');
   } catch (error) {
         await test.fail();
   };
   
   try {
         const NDFOTcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(2) > td:nth-child(14)`);
         await expect(NDFOTcell).toHaveText('0');
   } catch (error) {
         await test.fail();
   };
   
   try {
         const RDcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(2) > td:nth-child(15)`);
         await expect(RDcell).toHaveText('0');
   } catch (error) {
         await test.fail();
   };
   
   try {
         const RDOTcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(2) > td:nth-child(16)`);
         await expect(RDOTcell).toHaveText('0');
   } catch (error) {
         await test.fail();
   };
   
   try {
         const RDNDFcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(2) > td:nth-child(17)`);
         await expect(RDNDFcell).toHaveText('0');
   } catch (error) {
         await test.fail();
   };
   
   try {
         const RDNDFOTcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(2) > td:nth-child(18)`);
         await expect(RDNDFOTcell).toHaveText('0');
   } catch (error) {
         await test.fail();
   };
   
   try {
         const RHcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(2) > td:nth-child(19)`);
         await expect(RHcell).toHaveText('0');
   } catch (error) {
         await test.fail();
   };
  
   try { 
         const RHOTcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(2) > td:nth-child(20)`);
         await expect(RHOTcell).toHaveText('0');
   } catch (error) {
         await test.fail();
   };    
   
   try { 
         const RHNDFcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(2) > td:nth-child(21)`);
         await expect(RHNDFcell).toHaveText('0');
   } catch (error) {
         await test.fail();
   };    
   
   try { 
         const RHNDFOTcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(2) > td:nth-child(22)`);
         await expect(RHNDFOTcell).toHaveText('0');
   } catch (error) {
         await test.fail();
   };    
   
   try { 
         const RHRDcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(2) > td:nth-child(23)`);
         await expect(RHRDcell).toHaveText('0');
   } catch (error) {
         await test.fail();
   };    
   
   try { 
         const RHRDNDFcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(2) > td:nth-child(24)`);
         await expect(RHRDNDFcell).toHaveText('0');
   } catch (error) {
         await test.fail();
   };    
   
   try { 
         const RHRDOTcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(2) > td:nth-child(25)`);
         await expect(RHRDOTcell).toHaveText('0');
   } catch (error) {
         await test.fail();
   };    
   
   try { 
         const RHRDNDFOTcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(2) > td:nth-child(26)`);
         await expect(RHRDNDFOTcell).toHaveText('0');
   } catch (error) {
         await test.fail();
   };    
   
   try { 
         const SHcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(2) > td:nth-child(27)`);
         await expect(SHcell).toHaveText('0');
   } catch (error) {
         await test.fail();
   };    
   
   try { 
         const SHOTcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(2) > td:nth-child(28)`);
         await expect(SHOTcell).toHaveText('0');
   } catch (error) {
         await test.fail();
   };    
   
   try { 
         const SHNDFcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(2) > td:nth-child(29)`);
         await expect(SHNDFcell).toHaveText('0');
   } catch (error) {
         await test.fail();
   };    
   
   try { 
         const SHNDFOTcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(2) > td:nth-child(30)`);
         await expect(SHNDFOTcell).toHaveText('0');
   } catch (error) {
         await test.fail();
   };    
   
   try { 
         const SHRDcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(2) > td:nth-child(31)`);
         await expect(SHRDcell).toHaveText('0');
   } catch (error) {
         await test.fail();
   };  
    
   try{ 
        const SHRDNDFcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(2) > td:nth-child(32)`);
        await expect(SHRDNDFcell).toHaveText('0');
   } catch (error) {
        await test.fail();
   };  

   try{ 
        const SHRDOTcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(2) > td:nth-child(33)`);
        await expect(SHRDOTcell).toHaveText('0');
   } catch (error) {
        await test.fail();
   };
    
   try{ 
        const SHRDNDFOTcell = page.locator(`#tblDTRFixed > tbody > tr:nth-child(2) > td:nth-child(34)`);
        await expect(SHRDNDFOTcell).toHaveText('0');
   } catch (error) {
        await test.fail();
   };  
   
});
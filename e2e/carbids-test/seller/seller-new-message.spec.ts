import { test, expect } from '@playwright/test';

test('seller should be able to message to the buyers message', async ({ page }) => {
  await page.goto('https://stag.carbids.ph/', { timeout: 60000 });
  
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('elaine.andus@iainnovations.com');
  await page.getByPlaceholder('Enter password').fill('password');
  await page.getByRole('button', { name: 'Sign in' }).click();

  await page.getByRole('link', { name: 'Inbox' }).click();

  await page.getByRole('link', { name: 'New Message' }).click();

  await page.locator('#id_to_user').selectOption('2');

  await page.locator('#id_subject').fill('Input subject');
  /* await page.locator('#id_content').click(); */
  await page.locator('#id_content').fill('Hello im lainey');
  
  await page.getByRole('button', { name: 'Send' }).click();

  await expect(page.getByText('lainey')).toBeVisible();

  /* const successMessage = await page.getByText('anongsayo', { exact: true });
  await expect(successMessage).toContainText('anongsayo'); */
});

/* // create a todo count locator
    const todoCount = page.getByTestId('todo-count')
  
    // Check test using different methods.
    await expect(page.getByText('3 items left')).toBeVisible();
    await expect(todoCount).toHaveText('3 items left');
    await expect(todoCount).toContainText('3');
    await expect(todoCount).toHaveText(/3/); */
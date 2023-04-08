# My Notes for Playwright Tests
Run tests using Playwright

## Install using npm
- npm init playwright@latest

## Install in VS Code
- install `Playwright Test for VSCode`
- once installed, open the command panel and type: `Install Playwright`
- select `Test: Install Playwright` and choose browsers

## Run Playwright
- by: npx playwright test
- by: clicking the green triangle

### Others (Not important, just want to note)
#### Assertions
- `toBeVisible`: check that the element is visible
Example: await expect(page.getByText('Success')).toBeVisible();
- `toHaveText`: check if the element has the exact text. 
Example: await expect(page.locator('.alert-message')).toHaveText('Success: User was successfully created!'); 
- `toContainText`: check if the element contains the provided text. 
Example: await expect(page.locator('.alert-message')).toContainText('Success:');
- `toHaveTitle` checks if the current page has the expected title
Example: await expect(page).toHaveTitle('Title of Page');

#### Functions
- `page.type` - simulate user input
Example: 
// Types text into the input field with selector '#email'
await page.type('#email', 'elaine@gmail.com');

// Types text into the input field with selector 'input[type="password"]'
await page.type('input[type="password"]', 'password', { delay: 100 });

- `.fill()` - sets the value of an input field directly
Example: 
// Fills the input field with selector '#search' with the value 'Playwright'
await page.fill('#search', 'Playwright');

// Fills the input field with selector 'input[type="date"]' with the value '2022-01-01'
await page.fill('input[type="date"]', '2022-01-01');

- `page.locator('.class')` - would select all elements with a class of "class"

- `.toContain()` - used to test if a string or an array contains a specific substring or element

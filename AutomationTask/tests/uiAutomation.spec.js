import { test, expect } from '@playwright/test';

test('Buttons test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
  await page.getByRole('button', { name: 'Add Element' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
});

test('Checkboxes test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');
  await expect(page.getByRole('checkbox').first()).not.toBeChecked();
  await expect(page.getByRole('checkbox').nth(1)).toBeChecked();
  await page.getByRole('checkbox').first().check();
  await page.getByRole('checkbox').first().uncheck();
  await page.getByRole('checkbox').nth(1).uncheck();
  await page.getByRole('checkbox').nth(1).check();
});

test('Dropdown test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dropdown');
  await page.locator('#dropdown').selectOption('1');
  await expect(page.locator('#dropdown')).toHaveValue('1');
});

test('Input test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/inputs');
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('23');
  await expect(page.getByRole('spinbutton')).toHaveValue('23');
});

test('Login test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.locator('#username').click();
  await page.locator('#username').fill('tomsmith');
  await page.locator('#password').click();
  await page.locator('#password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: /login/i }).click();
  await expect(page.locator('#flash')).toContainText(/You logged into a secure area!/);
  await expect(page.locator('h4.subheader')).toContainText(/Welcome to the Secure Area. When you are done click logout below./);
  });

 test('Upload and Download test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/upload');
  await page.getByRole('button', { name: 'Choose File' }).click();
  await page.getByRole('button', { name: 'Choose File' }).setInputFiles('txt_file.txt');
  await page.getByRole('button', { name: 'Upload' }).click();
  await expect(page.getByRole('heading')).toContainText('File Uploaded!');
  await page.goto('https://the-internet.herokuapp.com/download');
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'txt_file.txt' }).click();
  const download = await downloadPromise;
 });
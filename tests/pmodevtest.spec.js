import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://itpmodev.indomaret.co.id/pmowebws/login.xhtml');
  await page.getByRole('textbox', { name: 'NIK' }).click();
  await page.getByRole('textbox', { name: 'NIK' }).fill('0993000380');
  await page.getByRole('textbox', { name: 'NIK' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password ESS' }).fill('123');
  await page.getByRole('button', { name: 'LOGIN' }).click();
});
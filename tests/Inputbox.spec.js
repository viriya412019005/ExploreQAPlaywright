import { test, expect } from "@playwright/test";

test("handle inputbox", async ({ page }) => {
  page.goto("https://itpmodev.indomaret.co.id/pmowebws/login.xhtml");

  // Input Box Firstname
  await expect(
    await page.locator("//input[@id='j_idt14:username']")
  ).toBeVisible();
  await expect(
    await page.locator("//input[@id='j_idt14:username']")
  ).toBeEmpty();
  await expect(
    await page.locator("//input[@id='j_idt14:username']")
  ).toBeEditable();
  await expect(
    await page.locator("//input[@id='j_idt14:username']")
  ).toBeEnabled();

  await page.locator("//input[@id='j_idt14:username']").fill("2015615663");
  //   page.fill("//input[@id='name']", "John");

  await page.waitForTimeout(5000);
});

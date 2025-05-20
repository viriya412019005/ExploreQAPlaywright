const { test, expect } = require("@playwright/test");

test("MouseDoubleClick", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const btnCopy = await page.locator("//button[normalize-space()='Copy Text']");

  //double click action
  await btnCopy.dblclick();

  const f2 = await page.locator("//input[@id='field2']");
  await expect(f2).toHaveValue("Hello World!");
  await page.waitForTimeout(3000);
});

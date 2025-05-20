const { test, expect } = require("@playwright/test");

test("Single Test", async ({ page }) => {
  await page.goto("https://www.foundit.in/");

  await page.waitForSelector(".mqfihd-upload");
  await page.locator(".mqfihd-upload").click();

  await page.locator("#file-upload").setInputFiles("/tests/testpdf/lalala.pdf");

  await page.waitForTimeout(3000);
});

// test("Multiple Test", async ({ page }) => {
//   await page.goto("https://www.foundit.in/");
// });

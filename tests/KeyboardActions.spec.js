const { test, expect } = require("@playwright/test");

test("KeyboardActions", async ({ page }) => {
  await page.goto("https://gotranscript.com/text-compare");

  // await page.locator('name="text1"').fill("Hello World!");

  await page.type('[name="text1"]', "Hello World!");

  // CTRL + a
  await page.keyboard.press("Control+A");

  // CTRL + c
  await page.keyboard.press("Control+C");

  // Tab
  await page.keyboard.down("Tab");
  await page.keyboard.up("Tab");

  // CTRL + v

  await page.keyboard.press("Control+V");

  await page.waitForTimeout(3000);
});

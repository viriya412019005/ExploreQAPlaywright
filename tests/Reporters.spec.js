import { test, expect } from "@playwright/test";

test("Test Reporter", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");
  await expect(page).toHaveTitle("STORE");
});
test("Test Reporter 2", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(page).toHaveTitle(
    "Fast and reliable end-to-end testing for modern web apps | Playwright"
  );
});
test("Test Reporter 3", async ({ page }) => {
  await page.goto("https://itpmodev.indomaret.co.id/pmowebws/login.xhtml");
  await expect(page).toHaveTitle("PMO | Login");
});

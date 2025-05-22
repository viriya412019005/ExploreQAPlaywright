import { test, expect } from "@playwright/test";

test("Soft Assertion", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  //   Hard Assertion
  //   await expect(page).toHaveURL("https://www.demoblaze.com/index.html");
  //   await expect(page).toHaveTitle("STORE");
  //   await expect(page.locator(".navbar-brand")).toBeVisible();

  //   soft Assertion
  await expect.soft(page).toHaveTitle("STORE123");
  await expect.soft(page).toHaveURL("https://www.demoblaze.com/index.html");
  await expect.soft(page.locator(".navbar-brand")).toBeVisible();
});

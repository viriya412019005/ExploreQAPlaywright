import { test, expect } from "@playwright/test";

test("Home Page", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  const pageTitle = await page.title();
  console.log("Page title is: " + pageTitle);

  await expect(page).toHaveTitle(/Playwright/);

  const pageURL = page.url();
  console.log("Page URL is: " + pageURL);

  await expect(page).toHaveURL("https://playwright.dev/");
  await page.close();
});

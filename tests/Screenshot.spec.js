import { test, expect } from "@playwright/test";

test("Page Screenshot", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.screenshot({
    path: "tests/screenshots/HomePage_" + Date.now() + "HomePage.png",
  });
});

test("Full Page Screenshot", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.screenshot({
    path: "tests/screenshots/HomePage_" + Date.now() + "Full Screenshots.png",
    fullpage: true,
  });
});

test.only("Element Screenshot", async ({ page }) => {
  page.goto("https://playwright.dev/");
  await page
    .locator(
      "//body/main/div[@id='common-home']/div[@class='row']/div[@id='content']/div[@class='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4']/div[1]/div[1]"
    )
    .screenshot({
      path: "tests/screenshots/HomePage_" + Date.now() + "Macbook.png",
    });
});

import { test, expect } from "@playwright/test";

// // Only (Hanya menjalakan test yang ditandai dengan deskripsi only)
// test.only("test1", async ({ page }) => {
//   console.log("test1");
// });

// // Skip (Melewatkan test yang ditandai dengan deskripsi skip)
// test.skip("test2", async ({ page }) => {
//   console.log("test2");
// });

// test("test3", async ({ page }) => {
//   console.log("test3");
//   if (browserName === "chromium") {
//     test.skip();
//   }
// });

// // Fail
// test("test5", async ({ page }) => {
//   test.fail();
//   console.log("test");
//   expect(1).toBe(2); //if both exp & actual is failed then test pass
// });

// test("test6", async ({ page }) => {
//   console.log("test6");
//   if (browserName === "firefox") {
//     test.fail();
//   }
// });

test("test7", async ({ page }) => {
  //   test.slow();
  test.setTimeout(5000); //Menambahkan timeout 5 detik
  await page.goto("https://playwright.dev/");
  console.log("test7");
});

const { test, expect } = require("@playwright/test");

let page;

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();
  //Open the page
  await page.goto("https://www.demoblaze.com/index.html");

  //Login
  await page.locator("#login2").click();
  await page.locator("#loginusername").fill("pavanol");
  await page.locator("#loginpassword").fill("test@123");
  await page.locator("//button[normalize-space()='Log in']").click();
});

test.afterEach(async () => {
  // Close the page
  //Logout
  await page.locator("#logout2").click();
});

test("Home Page Test", async () => {
  //Home Page
  const products = await page.$$(".hrefch");
  expect(products).toHaveLength(9);
});

test("Add product to cart test", async () => {
  // add product to cart
  await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
  await page.locator("//a[normalize-space()='Add to cart']").click();

  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toBe("Product added");
    await dialog.accept();
  });
});

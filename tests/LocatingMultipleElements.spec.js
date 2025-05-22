import { test, expect } from "@playwright/test";

test("LocationMultipleElements", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  // const links = await page.$$("a");

  // for (const link of links) {
  //   const linkText = await link.textContent();
  //   console.log(linkText);
  // }

  //Locate all the product displayed on home page
  await page.waitForSelector("//div[@id='tbodyid']//div//h4/a");

  const products = await page.$$("//div[@id='tbodyid']//div//h4/a");

  for (const product of products) {
    const productText = await product.textContent();
    console.log(productText);
  }
});

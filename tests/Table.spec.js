import { test, expect } from "@playwright/test";

test("Table", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const table = await page.locator("#productTable");

  //1 Total number of rows & columns
  const totalColumns = await table.locator("thead tr th");
  console.log("Total number of columns:", await totalColumns.count());
  expect(await totalColumns.count()).toBe(4);

  // Total number of rows
  const totalRows = await table.locator("tbody tr");
  console.log("Total number of rows:", await totalRows.count());
  expect(await totalRows.count()).toBe(5);

  //2 Select check box for product 4
  const matchedRow = totalRows.filter({
    has: page.locator("td"),
    hasText: "Smartwatch",
  });

  //3 select multiple products by re-usable function
  // await selectProduct(page, "Smartwatch");
  // await selectProduct(page, "Laptop");
  // await selectProduct(page, "Tablet");

  //4 print all product details using loop
  // for (let i = 0; i < (await totalRows.count()); i++) {
  //   const row = totalRows.nth(i);
  //   const tds = row.locator("td");

  //   for (let j = 0; j < (await tds.count()) - 1; j++) {
  //     console.log(await tds.nth(j).textContent());
  //   }
  // }

  // await matchedRow.locator("input").check();

  //5 read data from all pages in the table

  const pages = await page.locator(".pagination li a");
  console.log("Number of pages in the table:", await pages.count());

  for (let p = 0; p < (await pages.count()); p++) {
    if (p > 0) {
      await pages.nth(p).click();
    }
    for (let i = 0; i < (await totalRows.count()); i++) {
      const row = totalRows.nth(i);
      const tds = row.locator("td");

      for (let j = 0; j < (await tds.count()) - 1; j++) {
        console.log(await tds.nth(j).textContent());
      }
    }
    await page.waitForTimeout(2000);
  }

  await page.waitForTimeout(5000);
});

const { test, expect } = require("@playwright/test");

test("Handle Dropdowns", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Select multiple options from multi select dropdown
  // await page.selectOption("#colors", ["red", "green", "blue"]);

  // Assertions
  //1) check number of options in dropdown
  // const options = await page.$$("#colors option");
  // await expect(option).toHaveCount(5);

  //2) check number of the options in dropdowns using JS array
  // const option = await page.$$("#colors option");
  // // console.log("Number of options: ", option.length);
  // await expect(option.length).toBe(5);

  //3) Check presence of value in the dropdown
  const content = await page.locator("#colors").textContent();
  // await expect(content.includes("Red")).toBeTruthy();
  await expect(content.includes("Black")).toBeFalsy();
  await page.waitForTimeout(5000);
});

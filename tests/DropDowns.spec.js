import { test, expect } from "@playwright/test";

test("Handle Dropdowns", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Multiple ways to select option from the dropdown
  //   await page.locator("#country").selectOption({ label: "INDIA" }); //label /visible text
  //   await page.locator("#country").selectOption("India"); //visible text
  //   await page.locator("#country").selectOption({ value: "uk" }); //by using value
  //   await page.locator("#country").selectOption({ index: 5 }); //by using index
  // await page.selectOption("#country", "Australia");

  // Assertions
  //1) Check number of the options in dropdown - Approach
  // const options = await page.locator("#country option");
  // await expect(options).toHaveCount(5);

  //2) check number of options in dropdown - Approach 2
  //   const options = await page.$$("#country option");
  //   console.log("Number of options:", options.length);
  //   await expect(options.length).toBe(10);

  //3) check presence of value in the dropdown - Approach 1
  //   const content = await page.locator("#country").textContent();
  //   await expect(content.includes("Australia")).toBeTruthy();

  //4) check presence of value in the dropdown - approach 2 - using looping
  //   const options = await page.$$("#country option");
  //   let status = false;
  //   for (const option of options) {
  //     // console.log(await option.textContent());
  //     let value = await option.textContent();
  //     if (value.includes("France")) {
  //       status = true;
  //       break;
  //     }
  //   }
  //   expect(status).toBeTruthy();

  //5) select option from dropdown using loop
  const options = await page.$$("#country option");
  let status = false;
  for (const option of options) {
    // console.log(await option.textContent());
    let value = await option.textContent();
    if (value.includes("France")) {
      await page.selectOption("#country", value);
      break;
    }
  }
  expect(status).toBeTruthy();

  await page.waitForTimeout(5000);
});

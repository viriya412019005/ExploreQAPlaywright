const { test, expect } = require("@playwright/test");

test("Assertions", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register");

  //1. expect(page) toHaveURL() Page Has URL
  await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

  //2. expect(page) toHaveTitle() Page has title
  await expect(page).toHaveTitle("nopCommerce demo store. Register");

  //3. expect(locator).toBeVisible() Element is visible
  const logoElement = await page.locator(".header-logo");
  await expect(logoElement).toBeVisible();

  //4. expect(locator).toBeEnable() Element it enabled
  const searchStoreBox = await page.locator("#small-searchterms");
  await expect(searchStoreBox).toBeEnabled();

  //5. expect(locator).toBeChecked() Element is checked
  // Radio Button
  const maleRadioButton = await page.locator("#gender-male");
  await maleRadioButton.click();
  await expect(maleRadioButton).toBeChecked();

  // checkbox
  const newsletterCheckbox = await page.locator("#Newsletter");
  await expect(newsletterCheckbox).toBeChecked();

  //6) expect(locator).toHaveAttribute() Element has attribute
  // bebas ini atributenya mau apa, type, name id atau apa aja
  const regButton = await page.locator("#register-button");
  await expect(regButton).toHaveAttribute("name", "register-button");

  //7) expect(locator).toHaveText() Element has text
  // full text
  await expect(await page.locator(".page-title h1")).toHaveText("Register");

  //8) expect(locator).toContainText() Element contains text
  // partial text
  await expect(await page.locator(".page-title h1")).toContainText("Reg");

  //9) expect(locator).toHaveValue(value) Input has a value
  const emailInput = await page.locator("#Email");
  await emailInput.fill("test123@gmail.com");
  await expect(emailInput).toHaveValue("test123@gmail.com");

  //10) expect(locator).toHaveCount() List of elements has given length
  const option = await page.locator("#customerCurrency option");
  await expect(option).toHaveCount(2);
});

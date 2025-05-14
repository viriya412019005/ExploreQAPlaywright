// page.getByAltText() - to locate an element, usually Image, but its text alternative.
// page.getByPlaceholder() - to locate an input by placeholder.
// page.getByRole() - to locate by explicit and implicit accesibility roles.
// page.getByText() to locate by text content.

// page.getByLabel() to locate a form control by associated label's text
// page.getByTitle() to locate an element by its title attribute
// page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be )

const { test, expect } = require("@playwright/test");

test("Build-in Locator", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  // page.getByAltText() - to locate an element, usually Image, but its text alternative.
  const logo = await page.getByAltText("company-branding");
  await expect(logo).toBeVisible();

  // page.getByPlaceholder() - to locate an input by placeholder.
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");

  // page.getByRole() - to locate by explicit and implicit accesibility roles.
  await page.getByRole("button", { type: "submit" }).click();

  // page.getByText() to locate by text content.

  const name = await page
    .locator('//p[@class="oxd-userdropdown-name"]')
    .textContent();
  await expect(page.getByText(name)).toBeVisible();
});

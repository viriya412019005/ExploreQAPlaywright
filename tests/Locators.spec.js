// const {test, expect} = require('@playwright/test');
import { test, expect } from "@playwright/test";

test("Locator", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/inde`x.html");

  //click on login button --property
  //await page.locator('id=login2').click();
  await page.click("id=login2");

  //provide username - css
  await page.locator("#loginusername").fill("pavanol");
  //await page.type("#loginusername", "pavanol");

  //provide password -- CSS
  await page.fill("input[id='loginpassword']", "test@123");

  // click on login button -- X Path
  await page.click("//button[normalize-space()='Log in']");

  //verify logout link presence -- X Path
  const logoutlink = await page.locator("//normalize-space()='Log out']");

  await expect(logoutlink).toBeVisible();

  await page.close();
});

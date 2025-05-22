import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { CartPage } from "../pages/CartPage";

test("Login Test", async ({ page }) => {
  // Login
  const login = new LoginPage(page);
  await login.goToLoginPage();
  await login.login("pavanol", "test@123");
  await page.waitForTimeout(3000);

  // Home
  const home = new HomePage(page);
  await home.addProductToCart("Samsung galaxy s6");
  await page.waitForTimeout(3000);
  await home.gotoCart();

  // Cart
  const cart = new CartPage(page);
  await page.waitForTimeout(3000);
  const status = await cart.checkProductInCart("Samsung galaxy s6");
  expect(await status).toBe(true);
});

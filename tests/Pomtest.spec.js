import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("Login Test", async ({ page }) => {
  // Login
  const login = new LoginPage(page);
  await login.goToLoginPage();
  await login.login("testuser", "testpassword");
  // Home
  // Cart
});

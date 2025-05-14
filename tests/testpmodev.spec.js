import { test, expect } from "@playwright/test";

test("Valid Login", async ({ page }) => {
  // 1. Kunjungi halaman login
  await page.goto("https://itpmodev.indomaret.co.id/pmowebws/login.xhtml");

  // 2. Isi NIK dan password
  await page.getByRole("textbox", { name: "NIK" }).fill("2015615663");
  await page.getByRole("textbox", { name: "Password ESS" }).fill("Clarista24");

  // 3. Klik tombol login
  await page.getByRole("button", { name: "LOGIN" }).click();

  // 4. Tunggu sampai masuk ke dashboard (validasi)
  await expect(page).toHaveURL(
    "https://itpmodev.indomaret.co.id/pmowebws/dashboard/dashboard.xhtml"
  );
});

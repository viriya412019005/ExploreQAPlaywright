import { test, expect } from "@playwright/test";

test("Login gagal dengan password salah", async ({ page }) => {
  await page.goto(
    "https://itpmodev.indomaret.co.id/pmowebws/faces/login.xhtml"
  );

  // Isi NIK dan password salah
  await page.getByRole("textbox", { name: "NIK" }).fill("2015615663");
  await page.getByRole("textbox", { name: "Password ESS" }).fill("casdasdasda");

  // Klik tombol login
  await page.getByRole("button", { name: "LOGIN" }).click();

  // Tunggu dan validasi error alert muncul
  const errorMessage = page.locator("div").filter({
    hasText: /^ErrorIncorrect Username \/ Password\.$/,
  });

  await expect(errorMessage).toBeVisible(); // <-- assertion penting

  // Atau kamu bisa validasi sebagian teks saja
  // await expect(page.locator('div')).toContainText('Incorrect Username');
});

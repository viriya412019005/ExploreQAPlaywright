export class HomePage {
  constructor(page) {
    this.page = page;
    this.productsList = page.locator("//*[@id='tbodyid']/div/div/div/h4/a");
    this.addToCartButton = page.locator("//a[normalize-space()='Add to cart']");
    this.cart = page.locator("#cartur"); // perbaikan kecil juga
  }

  async addProductToCart(productName) {
    const count = await this.productsList.count();
    for (let i = 0; i < count; i++) {
      const product = this.productsList.nth(i);
      const text = await product.textContent();
      if (text.trim() === productName) {
        await product.click();
        break;
      }
    }

    // Tunggu dan handle pop-up dialog hanya sekali
    this.page.once("dialog", async (dialog) => {
      if (dialog.message().includes("added")) {
        await dialog.accept();
      }
    });

    await this.addToCartButton.click();
  }

  async gotoCart() {
    await this.cart.click();
  }
}

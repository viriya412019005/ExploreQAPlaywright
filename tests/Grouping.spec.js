const { test, expect } = require("@playwright/test");
test.beforeAll(async () => {
  console.log("Before all tests");
});

test.afterAll(async () => {
  console.log("After all tests");
});

test.beforeEach(async () => {
  console.log("Before each test");
});

test.afterEach(async () => {
  console.log("After each test");
});

test.describe("Grouping 1", () => {
  test("Test1", async ({ page }) => {
    console.log("Test1");
  });
  test("Test2", async ({ page }) => {
    console.log("Test1");
  });
});

test.describe("Grouping 2", () => {
  test("Test3", async ({ page }) => {
    console.log("Test1");
  });
  test("Test4", async ({ page }) => {
    console.log("Test1");
  });
});

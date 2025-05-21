const { test, expect } = require("@playwright/test");

test("test1@sanity", async ({ page }) => {
  console.log("test1");
});

test("test2@sanity", async ({ page }) => {
  console.log("test2");
});

test("test3@reg", async ({ page }) => {
  console.log("test3");
});

test("test4@reg", async ({ page }) => {
  console.log("test4");
});

test("test5@sanity@reg", async ({ page }) => {
  console.log("test5");
});

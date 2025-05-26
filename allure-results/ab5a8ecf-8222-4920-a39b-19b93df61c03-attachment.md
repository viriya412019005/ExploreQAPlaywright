# Test info

- Name: Create Users
- Location: D:\Indomaret Group - Viriya Dhika\Development\playwrightAutomation\ExploreQAPlaywright\tests\APITests.spec.js:11:6

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 401
    at D:\Indomaret Group - Viriya Dhika\Development\playwrightAutomation\ExploreQAPlaywright\tests\APITests.spec.js:21:29
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 |
   3 | var userid;
   4 |
   5 | test("Get Users", async ({ request }) => {
   6 |   const response = await request.get("https://reqres.in/api/users?page=2");
   7 |   console.log(await response.json());
   8 |   expect(response.status()).toBe(200);
   9 | });
  10 |
  11 | test.only("Create Users", async ({ request }) => {
  12 |   const response = await request.post("https://reqres.in/api/users", {
  13 |     data: {
  14 |       name: "lalala",
  15 |       job: "leader",
  16 |     },
  17 |     headers: { Accept: "application/json" },
  18 |   });
  19 |
  20 |   console.log(await response.json());
> 21 |   expect(response.status()).toBe(201);
     |                             ^ Error: expect(received).toBe(expected) // Object.is equality
  22 |
  23 |   var res = await response.json();
  24 |   userid = res.id;
  25 | });
  26 |
  27 | test("Update Users", async ({ request }) => {
  28 |   const response = await request.put("https://reqres.in/api/users/" + userid, {
  29 |     data: { name: "lalala", job: "engineer" },
  30 |     headers: { Accept: "application/json" },
  31 |   });
  32 |   console.log(await response.json());
  33 |   expect(response.status()).toBe(200);
  34 | });
  35 |
  36 | test("Delete Users", async ({ request }) => {
  37 |   await request.delete("https://reqres.in/api/users/" + userid);
  38 |   expect(response.status()).toBe(204);
  39 | });
  40 |
```
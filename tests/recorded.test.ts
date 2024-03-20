import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io/");
  await page.hover(
    "//a[@data-toggle='dropdown']//span[contains(.,'My account')]"
  );
  await page.getByRole("link", { name: "Login" }).click();
  await page.getByPlaceholder("E-Mail Address").click();
  await page
    .getByPlaceholder("E-Mail Address")
    .fill("rens.vandendriessche@be-sure.be");
  await page.getByPlaceholder("E-Mail Address").press("Tab");
  await page.getByPlaceholder("Password").fill("BeSure2024!");
  await page.getByPlaceholder("Password").press("Enter");
  await page.getByRole("link", { name: " Edit your account" }).click();
  await page.getByPlaceholder("First Name").click();
  await page.getByPlaceholder("First Name").fill("Rens");
  await page.getByRole("button", { name: "Continue" }).click();
  await page.hover(
    "//a[@data-toggle='dropdown']//span[contains(.,'My account')]"
  );
  await page.getByRole("link", { name: "Logout", exact: true }).click();
});

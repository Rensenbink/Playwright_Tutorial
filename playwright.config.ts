import { defineConfig } from "@playwright/test";

export default defineConfig({
  testMatch: ["tests/basicInteractions.test.ts"],
  use: {
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  retries: 0,
  reporter: [
    ["dot"],
    [
      "json",
      {
        outputFile: "jsonReports/jsonReport.json",
      },
    ],
    [
      "html",
      {
        open: "on-failure",
      },
    ],
  ],
});

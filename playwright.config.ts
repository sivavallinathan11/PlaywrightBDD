import { defineConfig, devices } from "@playwright/test";
import { defineBddConfig ,cucumberReporter } from "playwright-bdd";

const testDir = defineBddConfig({
  features: "features/*.feature",
  steps: "features/steps/*.ts",
});

export default defineConfig({
  testDir,
  reporter: [
    cucumberReporter("html", { outputFile: "cucumber-report/report.html" }),
    ['html',{ outputFolder: 'my-report' }]
  ],
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      }
    }
    ,
    {
      name: 'Mobile Safari',
       use: {
         ...devices['iPhone 14']
    }
  }
  ]
});

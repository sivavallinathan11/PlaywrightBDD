import { Page,expect } from "@playwright/test";
import { Given, When, Then } from "./fixtures";
import { searchpage } from "../models/searchpage";



Given('I have to login into the PHI core Application', async ({page}) => {
  await page.goto('https://hambssystemsltd-dev.outsystemsenterprise.com/SandboxLogin/Login');
  await page.getByLabel('Select Tenant').selectOption({label:'FundBeta'})
  await page.getByLabel('Username').fill('fundadminbeta@fundbeta.com.io');
  await page.getByLabel('Password').fill('Password123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(1000);
});


Then('I have to navigate to searchstakeholder page', async ({page}) => {
//  await page.waitForTimeout(1000);
  await page.locator('//*[@id="b2-Form1"]/div/div/div[2]/a').click();
  expect(page.url().includes('PHICore/Search'));
});


Then('I have to search for Stakeholder using parameter {string} and value {string}', async ({page}, param: string, value: string) => {
//  await page.waitForTimeout(1000);
 await new searchpage(page).searchwithsingleparam(param,value);
  
});


Then('Validate if they are searchstakeholder results are populated', async ({page}) => {
   await page.isVisible("text='param'")

   await expect(page.locator('.my-table-row').nth(2)).toContainText('Steve');
});

Then('Validate if they are searchstakeholder results are populated with {string}', async ({page}, value: string) => {
  await page.waitForTimeout(1000);
  await new searchpage(page).validateresults(value);
  
});
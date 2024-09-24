import { errors, expect, Page } from "@playwright/test";
import { Common } from "./Common";

export class searchpage extends Common{
    // Set object variable.
    readonly page: Page;
  

    // Set a sub routine that will access the functions from parent and sibling class.
    constructor(page: Page){
        super(page);
        this.page = page;
     }

    // Set XPaths, Element IDs and other attributes.
    // Label
    public lbl_stakeholdername = "//*[@id='Input_Name']";
    public lbl_StakeholderDob = "//*[@id='Input_DateOfBirth']";
    public lbl_stakeholderAdderss = "//*[@id='Input_Address']";
    public lbl_stakeholdertype = "//*[@id='Dropdown_Status2']";
    public lbl_stakeholderPhone="//*[@id='Input_Phone']";
    public lbl_stakeholderemail="//*[@id='Input_Email']";
    public lbl_stakeholdersearchbtn= "//*[@id='b8-Column1']/div/button[1]";
    public lbl_stakeholderclrbtn="//*[@id='b8-Column1']/div/button[2]";
    public lbl_resulttable ="//*[@id='$b12']/div[1]/table"

   
    async searchwithsingleparam(param:string,value:string){
        try  {

           switch(param.toLowerCase().trim()){
            case "name":
                await this.FillUpValue(this.lbl_stakeholdername,value,"stakeholdername");
               //await this.page.locator(this.lbl_stakeholdername).fill(value);
               break;

            case "dob":
                await this.FillUpValue(this.lbl_StakeholderDob,value ,"stakeholderDOB");
                //await this.page.locator(this.lbl_StakeholderDob).fill("1992-11-11")
              
               break;

            case "email":
                await this.FillUpValue(this.lbl_stakeholderemail,value,"stakeholderEmail");
               // await this.page.locator(this.lbl_stakeholderemail).fill(value) 
                break;
        }

        await this.page.locator(this.lbl_stakeholdersearchbtn).click();

    }
    catch(e){
        await this.ScreenShot("Failed", false, e.stack);
        if(e instanceof errors.TimeoutError){
            throw new Error(e.stack);
        }
        else{
            throw new Error(e.stack);
        }
    }
    

}

async validateresults(value:string){
    await this.Sleep(1000);
//     await this.page.locator('.my-table-row').nth(1).toContainText(value);
// await expect this.page.locator('.my-table-row').

//  // Find the table and check if a specific text is present in any row
 const table = await this.page.$('table'); 

 const rows = await table.$$('tr');
 for (let row of rows) {
   const rowText = await row.textContent(); 
   var s = rowText?.toString();

   if (s?.includes("Amanda")) { 
     break;
   }
 }

await this.elementExist(this.lbl_resulttable);
}  
}
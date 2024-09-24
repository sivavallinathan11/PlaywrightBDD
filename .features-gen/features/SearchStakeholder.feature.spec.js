/** Generated from: features\SearchStakeholder.feature */
import { test } from "../../features/steps/fixtures.ts";

test.describe("HAMBS SearchStakeholder", () => {

  test.describe("Search Stakeholder with valid data", () => {

    test("Example #1", async ({ Given, page, When, Then }) => {
      await Given("I have to login into the PHI core Application", null, { page });
      await When("I have to navigate to searchstakeholder page", null, { page });
      await When("I have to search for Stakeholder using parameter \"name\" and value \"amanda\"", null, { page });
      await Then("Validate if they are searchstakeholder results are populated with \"amanda\"", null, { page });
    });

    test("Example #2", async ({ Given, page, When, Then }) => {
      await Given("I have to login into the PHI core Application", null, { page });
      await When("I have to navigate to searchstakeholder page", null, { page });
      await When("I have to search for Stakeholder using parameter \"dob\" and value \"1992-11-11\"", null, { page });
      await Then("Validate if they are searchstakeholder results are populated with \"1992-11-11\"", null, { page });
    });

    test("Example #3", async ({ Given, page, When, Then }) => {
      await Given("I have to login into the PHI core Application", null, { page });
      await When("I have to navigate to searchstakeholder page", null, { page });
      await When("I have to search for Stakeholder using parameter \"email\" and value \"scramble-default@dev.hambs.com.au\"", null, { page });
      await Then("Validate if they are searchstakeholder results are populated with \"scramble-default@dev.hambs.com.au\"", null, { page });
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("features\\SearchStakeholder.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Search Stakeholder with valid data|Example #1": {"pickleLocation":"10:7"},
  "Search Stakeholder with valid data|Example #2": {"pickleLocation":"11:7"},
  "Search Stakeholder with valid data|Example #3": {"pickleLocation":"12:7"},
};
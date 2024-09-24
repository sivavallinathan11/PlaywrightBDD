Feature: HAMBS SearchStakeholder
    Scenario Outline: Search Stakeholder with valid data
       Given I have to login into the PHI core Application
       When  I have to navigate to searchstakeholder page
       When I have to search for Stakeholder using parameter "<param>" and value "<value>"
       Then Validate if they are searchstakeholder results are populated with "<value>"

  Examples:
      | param | value  |
      | name  | amanda |
      | dob   | 1992-11-11 |
      | email | scramble-default@dev.hambs.com.au |

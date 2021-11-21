@datatable01 @smoketest
Feature: Single Data Table

  Scenario Outline: TC01_google search test
    Given user is in the google page
    And user search "<value>"
    Then verify result has "<value>"
    Examples: Test Data
    |value|
    |Selenium|
    |Cucumber|
    |Ankara  |
    |Automation Tester|
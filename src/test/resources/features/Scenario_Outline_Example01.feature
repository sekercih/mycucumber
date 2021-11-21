@datatable001 @third
Feature: scenario outline example

  Scenario: testing the data tables web page
    Given User is on the datatables homepage
    When User clicks on new button
    And User enters first name "AAYSE"
    And User enters last name "TURHAN"
    And User enters position "APPLE DEVELOPER"
    And User enters office "ATHENA"
    And User enters extension "222"
    And User enters start date "2020-08-11"
    And User enters salary "125000"
    And User clicks Create button
    And User enters first name "AAYSE" to the searchbox
    Then verify that user see the first name "AAYSE" in the searchbox
@datatable002
Feature: scenario outline example

  Scenario Outline: testing the data tables web page

    Given User is on the datatables homepage
    When User clicks on new button
    And User enters first name "<first name>"
    And User enters last name "<last name>"
    And User enters position "<position>"
    And User enters office "<office>"
    And User enters extension "<extension>"
    And User enters start date "<start date>"
    And User enters salary "<salary>"
    And User clicks Create button
    And User enters first name "<first name>" to the searchbox
    Then verify that user see the first name "<first name>" in the searchbox

    Examples: Test Data
      |first name|last name|position|office|extension|start date|salary|
      |Fatih     |Kasap    |Developer   |Ankara  |111      |2020-10-15|150000  |
      |Selim|Togas|Sdet|Koln|8456      |2020-09-01|866496|
      |Pinar     |CANKAYA  |SDET    |Paris |111      |2020-11-01|200000|
    |Mahmut    |Kamel    |Developer|Sinop|1113     |2020-09-11|250000|


@googlesearch @smoketest
Feature: Google search
  Background: user is 0n the google page
    Given user is in the google page


  @iphone
  Scenario: user search iphone in gogggle
    And user search iphone
    Then verify result has iphone
@nokia
  Scenario: user search nokia in gogggle
    And user search nokia
    Then verify result has nokia


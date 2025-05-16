Feature: Login
  Background: Navigation
    Given Go to the saucedemo website

  Scenario: Successful login - user is authorired and redirected to the products page when passing propper login and password
    When Login as "standard_user" with password "secret_sauce"
    Then Products list is presented


  Scenario: Faild login - user not authorired because is locked out
    When Login as "locked_out_user" with password "secret_sauce"
    Then Error message 'Sorry, this user has been locked out.' is presented
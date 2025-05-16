Feature: Inventory
  Background: Navigation
    Given Go to the saucedemo website

  Scenario: Add product to cart and start checkout
    When Login as "standard_user" with password "secret_sauce"
    And Products list is presented
    And I am adding product "Sauce Labs Backpack" to the cart
    Then 1 product is presented in shopping cart badge
    And I am opening to the shooping cart
    And I am checkout shopping cart
import { ICustomWorld } from '../support/custom-world';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Then('Products list is presented', async function (this: ICustomWorld) {
  expect(await this.pagesObj?.inventoryPage.shopping_cart_icon.isVisible()).toBeTruthy();
  //await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
});

When(
  'I am adding product {string} to the cart',
  async function (this: ICustomWorld, productName: string) {
    const page = this.page!;
    const productLocator = page.locator(`xpath=//div[text() = '${productName}']/../../..//button`);
    await productLocator.click();
  },
);

When(
  '{int} product is presented in shopping cart badge',
  async function (this: ICustomWorld, numberOfProducts: number) {
    expect(await this.pagesObj?.inventoryPage.shopping_cart_badge.textContent()).toEqual(
      numberOfProducts.toString(),
    );
  },
);

Then('I am opening to the shooping cart', async function (this: ICustomWorld) {
  await this.pagesObj?.inventoryPage.shopping_cart_icon.click();
});

Then('I am checkout shopping cart', async function (this: ICustomWorld) {
  await this.pagesObj?.cartPage.checkout_button.click();
  expect(
    await this.pagesObj?.checkoutStepOnePage.checkoutStepOneHeader.isVisible({ timeout: 15000 }),
  ).toBeTruthy();
});

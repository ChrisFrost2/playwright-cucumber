import { BasePage } from './base-page';
export class CheckoutStepOnePage extends BasePage {
  checkoutStepOneHeader = this.page.locator(`xpath=//span[text() = "Checkout: Your Information"]`);
}

import { BasePage } from './base-page';
export class CartPage extends BasePage {
  checkout_button = this.page.locator('#checkout');
}

import { Locator } from '@playwright/test';
import { BasePage } from './base-page';

export class InventoryPage extends BasePage {
  shopping_cart_badge: Locator = this.page.locator('[data-test="shopping-cart-badge"]');
  shopping_cart_icon: Locator = this.page.locator('[data-test="shopping-cart-link"]');
}

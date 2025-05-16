import { BasePage } from './base-page';
import { LoginPage } from './login-page';
import { InventoryPage } from './inventory-page';
import { Page, BrowserContext } from 'playwright';
import { CartPage } from './cart-page';
import { CheckoutStepOnePage } from './checkout-step-one-page';

export class AllPagesObjects {
  basePage: BasePage;
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutStepOnePage: CheckoutStepOnePage;

  constructor(
    public page: Page,
    public context: BrowserContext,
  ) {
    this.basePage = new BasePage(page, context);
    this.loginPage = new LoginPage(page, context);
    this.inventoryPage = new InventoryPage(page, context);
    this.cartPage = new CartPage(page, context);
    this.checkoutStepOnePage = new CheckoutStepOnePage(page, context);
  }
}

import { Page, BrowserContext } from 'playwright';
import { join } from 'path';

export class BasePage {
  page: Page;
  context: BrowserContext;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
  }
}

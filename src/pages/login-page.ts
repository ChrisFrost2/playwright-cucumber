import { BasePage } from './base-page';
export class LoginPage extends BasePage {
  username_input = this.page.locator('#user-name');
  password_input = this.page.locator('#password');
  login_button = this.page.locator('#login-button');
  error_message_container = this.page.locator('[data-test="error"]');
}

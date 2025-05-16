import { ICustomWorld } from '../support/custom-world';
import { config } from '../support/config';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('Go to the saucedemo website', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto(config.BASE_URL);
  await this.pagesObj?.loginPage.login_button.waitFor();
});

When(
  'Login as {string} with password {string}',
  async function (this: ICustomWorld, userName: string, password: string) {
    await this.pagesObj?.loginPage.username_input.fill(userName);
    await this.pagesObj?.loginPage.password_input.fill(password);
    await this.pagesObj?.loginPage.login_button.click();
  },
);

Then('Error message {string} is presented', async function (this: ICustomWorld, message: string) {
  expect(await this.pagesObj?.loginPage.error_message_container.isVisible()).toBeTruthy();
  expect(await this.pagesObj?.loginPage.error_message_container.textContent()).toContain(message);
});

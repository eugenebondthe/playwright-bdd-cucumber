import { Given, When, Then, defineStep } from '@cucumber/cucumber'

Given('I visit a login page', async function () {
  await this.page.goto('https://www.saucedemo.com/')
})

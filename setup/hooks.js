import { Before, After, BeforeAll, AfterAll } from '@cucumber/cucumber'
import { playwright } from 'playwright'

BeforeAll(async () => {
  console.log('Launching Browser')
  global.browser = await playwright.chromium.launch({ headless: false })
})

AfterAll(async () => {
  console.log('Close Browser')
  await global.browser.close()
})

Before(async function () {
  console.log('Creating new context and page')
  this.context = await global.browser.newContext()
  this.page = await this.context.newPage()
})

After(async function () {
  console.log('Close context and page')
  await this.page.close()
  await this.context.close()
})

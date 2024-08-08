import { Page } from '@playwright/test'

export abstract class BasePage {
  private readonly PAGE_URL

  protected constructor(
    protected readonly page: Page,
    private readonly pageUrl: string,
  ) {
    this.PAGE_URL = pageUrl
  }

  async open() {
    console.log(`Opening page: ${this.PAGE_URL}`)
    await this.page.goto(this.PAGE_URL)
    await this.page.waitForLoadState()
  }
}

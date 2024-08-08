import { Page } from '@playwright/test';

export abstract class BasePage {
    
    protected constructor(protected readonly page: Page, private readonly pageUrl: string) {
       // what do we need here?
    }

    async open() {
      // ToDo: add some logic which will re-use domain
        await this.page.goto('ToDo');
        await this.page.waitForLoadState();
    }
}

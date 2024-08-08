import { type Locator, type Page } from '@playwright/test';

export class RegistrationFormPage {
    private readonly page: Page;
    private readonly nameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly emailInput: Locator;
    private readonly maleRadioButton: Locator;
    private readonly femaleRadioButton: Locator;
    private readonly dateOfBirthInput: Locator;
    private readonly subjectsInput: Locator;
    private readonly sportsCheckbox: Locator;
    private readonly readingCheckbox: Locator;
    private readonly musicCheckbox: Locator;
    private readonly chooseFileButton: Locator;
    private readonly currentAddressInput: Locator;
    private readonly stateDropdown: Locator;
    private readonly cityDropdown: Locator;

    private readonly URL: string = 'https://demoqa.com/automation-practice-form';

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto(URL);
    }

    async setName(name: string) {
        console.log(`Setting name: ${name}`);
        await this.nameInput.fill(name);
    }

    async setLastName(lastName: string) {
        console.log(`Setting last name: ${lastName}`);
        await this.lastNameInput.fill(lastName);
    }

    async setEmail(email: string) {
        console.log(`Setting name: ${email}`);
        await this.emailInput.fill(email);
    }

}
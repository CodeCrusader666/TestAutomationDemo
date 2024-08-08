import { type Locator, type Page } from '@playwright/test';

export class RegistrationFormPage {
    private readonly page: Page;
    private readonly nameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly emailInput: Locator;
    private readonly maleRadioButton: Locator;
    private readonly femaleRadioButton: Locator;
    private readonly otherRadioButton: Locator;
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
        this.nameInput = page.locator('ToDo');
        this.lastNameInput = page.locator('ToDo');
        this.emailInput = page.locator('ToDo');
        this.maleRadioButton = page.locator('ToDo');
        this.femaleRadioButton = page.locator('ToDo');
        this.otherRadioButton = page.locator('ToDo');
        this.dateOfBirthInput = page.locator('ToDo');
        this.subjectsInput = page.locator('ToDo');
        this.sportsCheckbox = page.locator('ToDo');
        this.readingCheckbox = page.locator('ToDo');
        this.musicCheckbox = page.locator('ToDo');
        this.chooseFileButton = page.locator('ToDo');
        this.currentAddressInput = page.locator('ToDo');
        this.stateDropdown = page.locator('ToDo');
        this.cityDropdown = page.locator('ToDo');
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
        console.log(`Setting email: ${email}`);
        await this.emailInput.fill(email);
    }

    async setGender(gender: string) {
        console.log(`Setting gender: ${gender}`);
    }

    async setDateOfBirth(dateOfBirth: string) {
        console.log(`Setting date of birth: ${email}`);
    }

    async setHobbies(hobbies: string) {
        console.log(`Setting hobbies: ${hobbies}`);
    }

    async uploadFile(fileName: string) {
        console.log(`Uploading file: ${fileName}`);
    }

    async setCurrentAddress(currentAddress: string) {
        console.log(`Setting current address: ${currentAddress}`);
    }

    async setState(state: string) {
        console.log(`Setting state: ${state}`);
    }

    async setCity(city: string) {
        console.log(`Setting city: ${city}`);
    }

}

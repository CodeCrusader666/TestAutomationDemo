import { type Locator, type Page } from '@playwright/test';
import {BasePage} from './base_page';

export class RegistrationFormPage extends BasePage {
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
    private readonly submitButton: Locator;

    private readonly PAGE_URL: string = 'automation-practice-form';

    constructor(page: Page) {
        super(page, PAGE_URL);
        this.page = page;
        this.nameInput = page.locator('#firstName');
        this.lastNameInput = page.locator('#lastName');
        this.emailInput = page.locator('#userEmail');
        this.maleRadioButton = page.locator('#gender-radio-1');
        this.femaleRadioButton = page.locator('#gender-radio-2');
        this.otherRadioButton = page.locator('#gender-radio-3');
        this.dateOfBirthInput = page.locator('#userNumber');
        this.subjectsInput = page.locator('#subjectsInput');
        this.sportsCheckbox = page.locator('#hobbies-checkbox-1');
        this.readingCheckbox = page.locator('#hobbies-checkbox-2');
        this.musicCheckbox = page.locator('#hobbies-checkbox-3');
        this.chooseFileButton = page.locator('#uploadPicture');
        this.currentAddressInput = page.locator('#currentAddress');
        this.stateDropdown = page.locator('#react-select-3-input');
        this.cityDropdown = page.locator('#react-select-4-input');
        this.submitButton = page.locator('#submit');
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

    async submitForm() {
        console.log('Submitting registration form');
        await this.submitButton.click();
    }
}

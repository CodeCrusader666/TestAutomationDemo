import { test, expect } from '@playwright/test';
import { RegistrationFormPage } from '../../page_objects/registration_form_page';

let registrationFormPage: RegistrationFormPage;

test.beforeEach(async ({ page }) => {
  registrationFormPage = new RegistrationFormPage(page);
  await registrationFormPage.open();
});

test('Form should display an error if required fields are missing', async ({ page }) => {
  await registrationFormPage.setName('Ihor');
  await registrationFormPage.setSecondName('Hoffman');
  await registrationFormPage.submitForm();
});

test('Form should successfully save date if optional fields are missing', async ({ page }) => {
});

test('Filling all fields', async ({ page }) => {
});

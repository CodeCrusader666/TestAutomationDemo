import { test, expect } from '@playwright/test';
import {LoginPage} from '../page_objects/registration_form_page';

test('Form should display an error if required fields are missing', async ({ page }) => {
  const registrationFormPage = new RegistrationFormPage(page);
  await registrationFormPage.open();
  await registrationFormPage.setName('Ihor');
  await registrationFormPage.setSecondName('Hoffman');
});

test('Form should successfully save date if optional fields are missing', async ({ page }) => {
});

test('Filling all fields', async ({ page }) => {
});

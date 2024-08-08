import { test, expect } from '@playwright/test';

test('Template', async ({ page }) => {
  await page.goto('https://playwright.dev/');
});

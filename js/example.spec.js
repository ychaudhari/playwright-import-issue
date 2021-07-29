// example.spec.js
import { test } from '@playwright/test';
// const { Map } = require('ol');
import { Map } from 'ol';

test.describe('headed block', () => {
    // Run tests in this describe block in headed mode.
    test.use({ headless: false });

    test('my headed test', async ({ page }) => {
        await page.goto('http://www.google.com');
    });
});

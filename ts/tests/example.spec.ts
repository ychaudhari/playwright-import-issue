// example.spec.js
import { test } from '@playwright/test';
import { TestPage } from '../models/TestPage';

test.describe('headed block', () => {
    test('my headed test', async ({ page }) => {
        const testPage = new TestPage(page);
        await testPage.navigate();
    });
});

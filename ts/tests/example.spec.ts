// example.spec.js
import { test } from '@playwright/test';
import { TestPage } from '../models/TestPage';

test.describe('test block', () => {
    test('my ts test', async ({ page }) => {
        const testPage = new TestPage(page);
        await testPage.navigate();
    });
});

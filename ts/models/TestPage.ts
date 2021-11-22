import { Page } from "@playwright/test";
import { Map } from "ol";

/**
 * Models a Test Page.
 */
export class TestPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async navigate(
  ): Promise<TestPage> {
    await this.page.goto(`http://www.google.com`);
    return this;
  }
}

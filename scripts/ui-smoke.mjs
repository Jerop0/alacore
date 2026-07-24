import assert from 'node:assert/strict';
import { chromium } from 'playwright';

const baseUrl = process.env.UI_SMOKE_BASE_URL ?? `http://127.0.0.1:${process.env.PORT ?? '8443'}`;
const routes = ['/', '/solutions', '/products', '/about', '/careers', '/contact'];
const viewports = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'desktop', width: 1440, height: 900 },
];

async function visitRoutes(browser) {
  for (const viewport of viewports) {
    const page = await browser.newPage({ viewport });
    for (const route of routes) {
      await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle' });
      await page.waitForSelector('h1');
      assert.equal(await page.locator('h1').count(), 1, `${viewport.name} ${route} must have exactly one h1`);
      const dimensions = await page.evaluate(() => ({ scrollWidth: document.documentElement.scrollWidth, innerWidth: window.innerWidth }));
      assert.equal(dimensions.scrollWidth, dimensions.innerWidth, `${viewport.name} ${route} must not overflow horizontally`);
    }
    await page.close();
  }
}

async function verifyInteractions(browser) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' });

  await page.locator('nav a[href="/contact"]').first().click();
  await page.waitForURL(/\/contact$/);
  await page.getByRole('button', { name: /open email draft/i }).click();
  for (const id of ['name', 'company', 'preferred', 'description']) {
    const field = page.locator(`#${id}`);
    assert.equal(await field.getAttribute('aria-invalid'), 'true', `${id} should be marked invalid`);
    assert.ok(await page.locator(`#${id}-error`).count(), `${id} should expose an inline error`);
  }

  await page.goto(`${baseUrl}/`, { waitUntil: 'networkidle' });
  const launcher = page.getByRole('button', { name: 'Open AI Assistant' });
  await launcher.click();
  await page.getByRole('dialog', { name: /ALA AI Assistant/i }).waitFor();
  await page.keyboard.press('Escape');
  await page.getByRole('dialog').waitFor({ state: 'detached' });
  assert.equal(await page.evaluate(() => document.activeElement?.getAttribute('aria-label')), 'Open AI Assistant', 'AI launcher should regain focus after Escape');

  await page.locator('button[aria-controls="language-menu"]').click();
  await page.locator('#language-menu').getByRole('button', { name: 'DE' }).click();
  await page.getByRole('navigation', { name: 'Hauptnavigation' }).waitFor();

  await page.close();
}

const browser = await chromium.launch({ headless: true });
try {
  await visitRoutes(browser);
  await verifyInteractions(browser);
  console.log('UI smoke passed');
} finally {
  await browser.close();
}

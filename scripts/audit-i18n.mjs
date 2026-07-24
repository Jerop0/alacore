import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const contentDir = new URL('../src/content', import.meta.url).pathname;
const localeKeys = ['en', 'de', 'tr'];

function collectKeys(obj, prefix = '') {
  const keys = new Set();
  if (obj && typeof obj === 'object') {
    if (Array.isArray(obj)) {
      obj.forEach((item, index) => {
        collectKeys(item, `${prefix}[${index}]`).forEach((k) => keys.add(k));
      });
    } else {
      Object.keys(obj).forEach((key) => {
        const full = prefix ? `${prefix}.${key}` : key;
        keys.add(full);
        collectKeys(obj[key], full).forEach((k) => keys.add(k));
      });
    }
  }
  return keys;
}

function stripArrayIndices(key) {
  return key.replace(/\[\d+\]/g, '[]');
}

const files = readdirSync(contentDir).filter((f) => f.endsWith('.json'));
let exitCode = 0;

for (const file of files) {
  const data = JSON.parse(readFileSync(join(contentDir, file), 'utf8'));
  const locales = localeKeys.filter((l) => data[l]);
  if (locales.length < 2) continue;

  const allKeys = new Set();
  const perLocale = new Map();

  for (const locale of locales) {
    const keys = collectKeys(data[locale]);
    const normalized = new Set([...keys].map(stripArrayIndices));
    perLocale.set(locale, normalized);
    normalized.forEach((k) => allKeys.add(k));
  }

  const missing = [];
  for (const key of allKeys) {
    for (const locale of locales) {
      if (!perLocale.get(locale).has(key)) {
        missing.push(`${locale} missing: ${key}`);
      }
    }
  }

  if (missing.length > 0) {
    console.error(`❌ ${file}`);
    missing.forEach((m) => console.error(`   ${m}`));
    exitCode = 1;
  } else {
    console.log(`✅ ${file}`);
  }
}

if (exitCode === 0) {
  console.log('All i18n content files have matching keys across en/de/tr.');
}

process.exit(exitCode);

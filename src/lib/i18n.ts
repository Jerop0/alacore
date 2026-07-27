import { DEFAULT_LOCALE, LOCALES, type Locale } from './config';

export type CopyLeaf = string | string[];
export type CopyNode = { [key: string]: CopyNode | CopyLeaf };
export type SiteCopy = Record<Locale, CopyNode>;

export function localizePath(path: string, targetLocale: Locale, currentLocale?: Locale | undefined): string {
  const normalized = path.replace(/\/$/, '') || '/';
  const sourcePrefix = currentLocale && currentLocale !== DEFAULT_LOCALE ? `/${currentLocale}` : '';
  const targetPrefix = targetLocale !== DEFAULT_LOCALE ? `/${targetLocale}` : '';

  let withoutLocale = normalized;
  if (currentLocale && currentLocale !== DEFAULT_LOCALE && normalized.startsWith(`/${currentLocale}`)) {
    withoutLocale = normalized.slice(currentLocale.length + 1) || '/';
  }

  return targetPrefix + withoutLocale || '/';
}

export function getLocaleFromPath(path: string): Locale {
  const segments = path.split('/').filter(Boolean);
  const first = segments[0];
  if (first && LOCALES.includes(first as Locale)) return first as Locale;
  return DEFAULT_LOCALE;
}

export function t(copy: CopyNode, key: string, fallback = ''): string {
  const parts = key.split('.');
  let value: CopyNode | CopyLeaf | undefined = copy;
  for (const part of parts) {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      value = value[part];
    } else {
      return fallback;
    }
  }
  if (typeof value === 'string') return value;
  return fallback;
}

export function tArr(copy: CopyNode, key: string, fallback: string[] = []): string[] {
  const parts = key.split('.');
  let value: CopyNode | CopyLeaf | undefined = copy;
  for (const part of parts) {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      value = value[part];
    } else {
      return fallback;
    }
  }
  return Array.isArray(value) ? (value as string[]) : fallback;
}

export function tObj<T extends CopyNode>(copy: CopyNode, key: string): T | undefined {
  const parts = key.split('.');
  let value: CopyNode | CopyLeaf | undefined = copy;
  for (const part of parts) {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      value = value[part];
    } else {
      return undefined;
    }
  }
  if (value && typeof value === 'object' && !Array.isArray(value)) return value as T;
  return undefined;
}

export function assertLocale(locale: string): Locale {
  if (LOCALES.includes(locale as Locale)) return locale as Locale;
  return DEFAULT_LOCALE;
}

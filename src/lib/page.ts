import { DEFAULT_LOCALE, type Locale } from './config';
import type { CopyNode } from './i18n';

import siteCopy from '../content/site-copy.json';
import solutionsCopy from '../content/solutions.json';
import industriesCopy from '../content/industries.json';
import techCopy from '../content/tech.json';
import aboutCopy from '../content/about.json';
import contactCopy from '../content/contact.json';
import seoCopy from '../content/seo.json';

const contentMap = {
  site: siteCopy as Record<string, CopyNode>,
  solutions: solutionsCopy as Record<string, CopyNode>,
  industries: industriesCopy as Record<string, CopyNode>,
  tech: techCopy as Record<string, CopyNode>,
  about: aboutCopy as Record<string, CopyNode>,
  contact: contactCopy as Record<string, CopyNode>,
  seo: seoCopy as Record<string, CopyNode>,
};

export function getCopy(locale: Locale, key: keyof typeof contentMap): CopyNode {
  return contentMap[key][locale] ?? contentMap[key][DEFAULT_LOCALE];
}

export function getSeo(locale: Locale, page: string): { title: string; description: string } {
  const seo = contentMap.seo[locale] ?? contentMap.seo[DEFAULT_LOCALE];
  const pageData = seo?.[page] as { title?: string; description?: string } | undefined;
  return {
    title: pageData?.title ?? 'ALA CORE',
    description: pageData?.description ?? '',
  };
}

export function getLocaleFromAstro(): Locale {
  // In Astro components, this must be called at runtime with Astro.currentLocale
  // For utility functions, pass Astro.currentLocale directly.
  return DEFAULT_LOCALE;
}

import type { Page } from './types';

const PATHS: Record<Page, string> = {
  home: '/',
  solutions: '/solutions',
  products: '/products',
  about: '/about',
  careers: '/careers',
  contact: '/contact',
};

const PAGES_BY_PATH = new Map<string, Page>(
  Object.entries(PATHS).map(([page, path]) => [path, page as Page]),
);

function normalisePath(pathname: string): string {
  const trimmedPath = pathname.replace(/\/+$/, '');
  return trimmedPath || '/';
}

export function readPage(pathname: string): Page {
  return PAGES_BY_PATH.get(normalisePath(pathname)) ?? 'home';
}

export function pagePath(page: Page): string {
  return PATHS[page];
}

export function navigateTo(page: Page): void {
  window.history.pushState({}, '', pagePath(page));
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export const SITE = 'https://alacore.net';
export const EMAIL = 'support@alacore.net';
export const WHATSAPP_NUMBER = '4917621812212';
export const LOCALES = ['en', 'de', 'tr'] as const;
export const DEFAULT_LOCALE = 'en';
export const LOCALES_WITH_LABELS: Record<string, string> = {
  en: 'EN',
  de: 'DE',
  tr: 'TR',
};
export const NAV_ROUTES = [
  { labelKey: 'nav.home', path: '/' },
  { labelKey: 'nav.solutions', path: '/solutions' },
  { labelKey: 'nav.industries', path: '/industries' },
  { labelKey: 'nav.about', path: '/about' },
  { labelKey: 'nav.contact', path: '/contact' },
] as const;
export const ROUTES_WITH_INDEX = ['/', '/solutions', '/industries', '/about', '/contact'] as const;
export const INDUSTRIES = [
  {
    slug: 'restaurants-cafes',
    iconKey: 'UtensilsCrossed',
  },
  {
    slug: 'hospitals-clinics',
    iconKey: 'HeartPulse',
  },
  {
    slug: 'schools-training',
    iconKey: 'GraduationCap',
  },
  {
    slug: 'companies-offices',
    iconKey: 'Building2',
  },
  {
    slug: 'warehouses-logistics',
    iconKey: 'Truck',
  },
  {
    slug: 'retail-ecommerce',
    iconKey: 'ShoppingCart',
  },
  {
    slug: 'factories-manufacturing',
    iconKey: 'Factory',
  },
] as const;
export type Locale = (typeof LOCALES)[number];
export type NavRoute = (typeof NAV_ROUTES)[number];
export type Industry = (typeof INDUSTRIES)[number];

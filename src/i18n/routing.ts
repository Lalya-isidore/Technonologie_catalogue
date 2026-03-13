import { defineRouting } from 'next-intl/routing';

export const locales = ['fr', 'en', 'es', 'it', 'ar', 'ru'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: 'always',
});

import type { Locale } from './types';

export function formatPrice(price: number, locale: Locale = 'fr'): string {
  const formatters: Record<Locale, Intl.NumberFormat> = {
    fr: new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'USD' }),
    en: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }),
    es: new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'USD' }),
    it: new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'USD' }),
    ar: new Intl.NumberFormat('ar-SA', { style: 'currency', currency: 'USD' }),
    ru: new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'USD' }),
  };
  return formatters[locale].format(price);
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function getLocalePath(locale: Locale, path: string): string {
  if (locale === 'fr') return path;
  return `/${locale}${path}`;
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + '...';
}

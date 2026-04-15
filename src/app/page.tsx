'use client';

import { useEffect } from 'react';

const LOCALES = ['fr', 'en', 'es', 'it', 'ar', 'ru'] as const;
const DEFAULT_LOCALE = 'fr';

export default function RootPage() {
  useEffect(() => {
    const browserLang = navigator.language.split('-')[0];
    const locale = (LOCALES as readonly string[]).includes(browserLang) ? browserLang : DEFAULT_LOCALE;
    window.location.replace(`/${locale}`);
  }, []);

  return null;
}

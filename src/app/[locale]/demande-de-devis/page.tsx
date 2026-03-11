import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { ContactForm } from '@/components/sections/ContactForm';
import { generateMetadata as generateSeoMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/types';

const pathForAllLocales = (p: string) => ({ fr: p, en: p, es: p, it: p, ar: p, ru: p });

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generateSeoMetadata({
    title: 'Demande de Devis Gratuit | TSF Technology',
    description: 'Obtenez un devis personnalisé pour vos switches Ethernet industriels. 102 produits, prix compétitifs, livraison Europe. Réponse sous 24h.',
    path: pathForAllLocales('/demande-de-devis'),
    locale: locale as Locale,
  });
}

export default async function QuotePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <ContactForm isQuote />
    </main>
  );
}

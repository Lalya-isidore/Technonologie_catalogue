import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { ContactForm } from '@/components/sections/ContactForm';
import { generateMetadata as generateSeoMetadata, generateFaqJsonLd } from '@/lib/seo';
import { getFaqsByPage } from '@/data/faq';
import { FAQSection } from '@/components/sections/FAQSection';
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

  const loc = locale as Locale;
  const faqs = getFaqsByPage('demande-de-devis');

  return (
    <main>
      <ContactForm isQuote />
      {faqs.length > 0 && (
        <>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(faqs, loc)) }} />
          <FAQSection faqs={faqs} locale={loc} title="Questions fréquentes — Devis" />
        </>
      )}
    </main>
  );
}

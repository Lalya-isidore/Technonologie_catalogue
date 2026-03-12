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
    title: 'Contactez-nous | TSF Technology — Support 24/7',
    description: 'Contactez l\'équipe TSF Technology par email ou WhatsApp. Support technique 24/7 pour vos projets réseau industriel. Réponse garantie sous 2 heures.',
    path: pathForAllLocales('/contact'),
    locale: locale as Locale,
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const loc = locale as Locale;
  const faqs = getFaqsByPage('contact');

  return (
    <main>
      <ContactForm />
      {faqs.length > 0 && (
        <>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(faqs, loc)) }} />
          <FAQSection faqs={faqs} locale={loc} title="Questions fréquentes — Contact" />
        </>
      )}
    </main>
  );
}

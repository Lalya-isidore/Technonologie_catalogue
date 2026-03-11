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
    title: 'Contactez-nous | TSF Technology — Support 24/7',
    description: 'Contactez l\'équipe TSF Technology par email ou WhatsApp. Support technique 24/7 pour vos projets réseau industriel. Réponse garantie sous 2 heures.',
    path: pathForAllLocales('/contact'),
    locale: locale as Locale,
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <ContactForm />
    </main>
  );
}

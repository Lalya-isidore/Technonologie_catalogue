import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getAllGlossaryTerms } from '@/data/glossary';
import type { Locale } from '@/lib/types';
import { BookOpen } from 'lucide-react';
import { generateMetadata as generateSeoMetadata } from '@/lib/seo';

const pathForAllLocales = (p: string) => ({ fr: p, en: p, es: p, it: p, ar: p, ru: p });

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generateSeoMetadata({
    title: 'Glossaire Ethernet Industriel — Termes et Définitions | TSF Technology',
    description: 'Glossaire complet des termes du réseau industriel : Ethernet, Layer 2, Layer 3, PoE, TSN, VLAN, RSTP, SFP, PTP IEEE 1588 et plus.',
    path: pathForAllLocales('/ressources/glossaire'),
    locale: locale as Locale,
  });
}

export default async function GlossaryPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;
  const terms = getAllGlossaryTerms();

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <div className="flex items-center gap-3 mb-3">
        <BookOpen size={28} className="text-primary-500" />
        <h1 className="text-3xl font-bold text-dark">Glossaire Ethernet Industriel</h1>
      </div>
      <p className="text-medium mb-12">
        {terms.length} termes essentiels pour comprendre les réseaux industriels.
      </p>

      <div className="space-y-6">
        {terms.map((term) => (
          <div key={term.id} id={term.id} className="p-6 bg-white rounded-xl border border-gray-200 scroll-mt-32">
            <h2 className="text-lg font-bold text-primary-600 mb-2">
              {term.term[loc]}
            </h2>
            <p className="text-sm text-medium leading-relaxed">
              {term.definition[loc]}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

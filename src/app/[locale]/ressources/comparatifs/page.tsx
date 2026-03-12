import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { BarChart3 } from 'lucide-react';
import { generateMetadata as generateSeoMetadata, generateFaqJsonLd } from '@/lib/seo';
import { getFaqsByPage } from '@/data/faq';
import { FAQSection } from '@/components/sections/FAQSection';
import type { Locale } from '@/lib/types';

const pathForAllLocales = (p: string) => ({ fr: p, en: p, es: p, it: p, ar: p, ru: p });

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generateSeoMetadata({
    title: 'Comparatifs Switches Ethernet Industriels | TSF Technology',
    description: 'Comparez les switches Ethernet industriels TSF Technology : Layer 2 vs Layer 3, managed vs unmanaged, PoE vs standard. TSF vs concurrence.',
    path: pathForAllLocales('/ressources/comparatifs'),
    locale: locale as Locale,
  });
}

export default async function ComparisonsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex items-center gap-3 mb-3">
        <BarChart3 size={28} className="text-primary-500" />
        <h1 className="text-3xl font-bold text-dark">Comparatifs Switches</h1>
      </div>
      <p className="text-medium mb-12 max-w-2xl">
        Comparez nos switches par catégorie pour trouver le modèle adapté à votre projet.
      </p>

      {/* Comparison Table: TSF vs Competitors */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-dark mb-6">TSF Technology vs Concurrence</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary-500 text-white">
                <th className="px-5 py-3 text-left font-semibold">Critère</th>
                <th className="px-5 py-3 text-left font-semibold">TSF Technology</th>
                <th className="px-5 py-3 text-left font-semibold">Concurrence standard</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Protection', 'IP40', 'IP30'],
                ['Température', '-40°C à +75°C', '-10°C à +60°C'],
                ['Alimentation', 'DC 9~60V', 'DC 12~48V'],
                ['Boîtier', 'Aluminium haute résistance', 'Métal standard'],
                ['Garantie', '3 ans', '1-2 ans'],
                ['Support', '24/7 WhatsApp + Email', 'Email bureau heures'],
                ['Certifications', 'CE, FCC, UL', 'CE, FCC'],
                ['Catalogue', '102 produits, 9 catégories', '30-50 produits'],
              ].map(([critere, tsf, concurrent]) => (
                <tr key={critere} className="border-b border-gray-200">
                  <td className="px-5 py-3 font-medium text-dark bg-gray-50">{critere}</td>
                  <td className="px-5 py-3 text-accent-600 font-medium">{tsf}</td>
                  <td className="px-5 py-3 text-medium">{concurrent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Quick links to categories */}
      <section>
        <h2 className="text-2xl font-bold text-dark mb-6">Comparer par catégorie</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { name: 'Layer 3 (DIN-Rail vs Rack)', href: '/produits/switches-ethernet/layer-3-din-rail' },
            { name: 'Managed vs Unmanaged', href: '/produits' },
            { name: 'PoE vs Standard', href: '/produits/switches-ethernet/poe' },
            { name: 'TSN vs PTP', href: '/produits/switches-ethernet/tsn-ptp' },
            { name: 'Compact (PROFINET vs EtherCAT)', href: '/produits/switches-ethernet/compact' },
            { name: 'Tous les 102 produits', href: '/produits' },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all text-sm font-medium text-dark hover:text-primary-500"
            >
              {item.name} →
            </Link>
          ))}
        </div>
      </section>

      {(() => {
        const loc = locale as Locale;
        const faqs = getFaqsByPage('comparatifs');
        if (!faqs.length) return null;
        return (
          <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(faqs, loc)) }} />
            <FAQSection faqs={faqs} locale={loc} title="Questions fréquentes — Comparatifs" />
          </>
        );
      })()}
    </main>
  );
}

import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getAllProducts } from '@/data/products';
import { CatalogPage } from '@/components/products/CatalogPage';
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
    title: 'Catalogue Switches Ethernet Industriels — 102 Produits | TSF Technology',
    description: 'Découvrez nos 102 switches Ethernet industriels : Layer 2, Layer 3, PoE, TSN, compacts. IP40, -40°C à +75°C. Filtrez par catégorie et trouvez le switch adapté.',
    path: pathForAllLocales('/produits'),
    locale: locale as Locale,
  });
}

export default async function ProductsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const loc = locale as Locale;
  const products = getAllProducts();
  const faqs = getFaqsByPage('produits');

  return (
    <main>
      <CatalogPage products={products} />
      {faqs.length > 0 && (
        <>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(faqs, loc)) }} />
          <FAQSection faqs={faqs} locale={loc} title="Questions fréquentes — Catalogue" showSidebar />
        </>
      )}
    </main>
  );
}

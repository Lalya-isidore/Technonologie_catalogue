import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getAllProducts, getRelatedProducts } from '@/data/products';
import type { Locale } from '@/lib/types';
import { ProductDetail } from '@/components/products/ProductDetail';
import { ProductGrid } from '@/components/products/ProductGrid';
import { generateProductJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const products = getAllProducts();
  const locales = ['fr', 'en', 'es', 'it', 'ar', 'ru'];
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    for (const product of products) {
      params.push({ locale, slug: product.slug[locale as Locale] });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const products = getAllProducts();
  const product = products.find((p) => p.slug[locale as Locale] === slug);

  if (!product) return {};

  const loc = locale as Locale;
  return {
    title: product.seo.title[loc],
    description: product.seo.description[loc],
    keywords: product.seo.keywords[loc],
    openGraph: {
      title: product.seo.title[loc],
      description: product.seo.description[loc],
      type: 'website',
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const products = getAllProducts();
  const product = products.find((p) => p.slug[locale as Locale] === slug);

  if (!product) notFound();

  const related = getRelatedProducts(product, 4);
  const loc = locale as Locale;

  const productJsonLd = generateProductJsonLd(product, loc);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Accueil', url: '/' },
    { name: 'Produits', url: '/produits' },
    { name: product.name[loc], url: `/produits/${slug}` },
  ]);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <ProductDetail product={product} />

      {related.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-dark mb-8">Produits similaires</h2>
            <ProductGrid products={related} />
          </div>
        </section>
      )}
    </main>
  );
}

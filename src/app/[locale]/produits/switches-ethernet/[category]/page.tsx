import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/lib/types';
import { CategoryLandingPage } from '@/components/products/CategoryLandingPage';
import { InternalLinks } from '@/components/sections/InternalLinks';
import { CrossCategoryRecommendation } from '@/components/products/CrossCategoryRecommendation';
import { getRelatedCategoryLinks, getRelatedSolutionLinks, getCrossSellingLinks, getResourceLinks } from '@/lib/internal-links';
import { generateMetadata as generateSeoMetadata } from '@/lib/seo';
import { CATEGORY_MAP, getProductsByCategory } from '@/data/categories';

const pathForAllLocales = (p: string) => ({ fr: p, en: p, es: p, it: p, ar: p, ru: p });

/* ═══════ Page Component ═══════ */

type Props = {
  params: Promise<{ locale: string; category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, category } = await params;
  const config = CATEGORY_MAP[category];
  if (!config) return {};

  return generateSeoMetadata({
    title: config.seo.title,
    description: config.seo.description,
    path: pathForAllLocales(`/produits/switches-ethernet/${category}`),
    locale: locale as Locale,
  });
}

export function generateStaticParams() {
  const categories = Object.keys(CATEGORY_MAP);
  const locales = ['fr', 'en', 'es', 'it', 'ar', 'ru'];
  return locales.flatMap((locale) =>
    categories.map((category) => ({ locale, category }))
  );
}

export default async function CategoryPage({ params }: Props) {
  const { locale, category } = await params;
  setRequestLocale(locale);

  const config = CATEGORY_MAP[category];
  if (!config) notFound();

  const products = getProductsByCategory(category);

  const landingBase = config.landing[locale] || config.landing['en'];
  const landing = { ...landingBase, bannerImage: config.bannerImage, heroImages: config.heroImages };

  const categoryLinksData = getRelatedCategoryLinks(category, locale as Locale);
  const solutionLinksData = getRelatedSolutionLinks();
  const crossSellingData = getCrossSellingLinks(category);
  const resourceLinksData = getResourceLinks();

  return (
    <>
      <CategoryLandingPage
        products={products}
        category={landing}
        faqs={config.faqs}
        locale={locale as Locale}
      />
      <CrossCategoryRecommendation links={crossSellingData} />
      <InternalLinks
        categoryLinks={categoryLinksData}
        solutionLinks={solutionLinksData}
        resourceLinks={resourceLinksData}
      />
    </>
  );
}

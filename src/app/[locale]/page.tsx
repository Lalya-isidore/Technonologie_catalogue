import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { setRequestLocale } from 'next-intl/server';
import { HeroSection } from '@/components/sections/HeroSection';
import { CategoriesOverview } from '@/components/sections/CategoriesOverview';
import { SectionSkeleton } from '@/components/ui/SectionSkeleton';
import { generateOrganizationJsonLd, generateWebSiteJsonLd, generateLocalBusinessJsonLd, generateMetadata as generateSeoMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/types';

const FeaturedProducts = dynamic(() => import('@/components/sections/FeaturedProducts').then(m => ({ default: m.FeaturedProducts })), { ssr: true, loading: () => <SectionSkeleton /> });
const AdvantagesSection = dynamic(() => import('@/components/sections/AdvantagesSection').then(m => ({ default: m.AdvantagesSection })), { ssr: true, loading: () => <SectionSkeleton /> });
const CtaSection = dynamic(() => import('@/components/sections/CtaSection').then(m => ({ default: m.CtaSection })), { ssr: true, loading: () => <SectionSkeleton /> });

const pathForAllLocales = (p: string) => ({ fr: p, en: p, es: p, it: p, ar: p, ru: p });

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generateSeoMetadata({
    title: 'TSF Technology \u2014 Switches Ethernet Industriels | 102 Produits IP40',
    description: 'Expert en communication r\u00e9seau industrielle fiable. 102 switches Ethernet industriels IP40, -40\u00b0C \u00e0 +75\u00b0C. Layer 2, Layer 3, PoE, TSN. Livraison Europe.',
    path: pathForAllLocales(''),
    locale: locale as Locale,
  });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const schemas = [
    generateOrganizationJsonLd(),
    generateWebSiteJsonLd(),
    generateLocalBusinessJsonLd(),
  ];

  // @graph aggregation for rich snippets
  const graphJsonLd = {
    '@context': 'https://schema.org',
    '@graph': schemas.map(({ '@context': _, ...rest }) => rest),
  };

  return (
    <main className="-mt-[64px] lg:-mt-[96px]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graphJsonLd) }} />
      <HeroSection />
      <CategoriesOverview />
      <FeaturedProducts />
      <AdvantagesSection />
      <CtaSection />
    </main>
  );
}

import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { setRequestLocale } from 'next-intl/server';
import { HeroSection } from '@/components/sections/HeroSection';
import { CategoriesOverview } from '@/components/sections/CategoriesOverview';
import { SectionSkeleton } from '@/components/ui/SectionSkeleton';
import { generateOrganizationJsonLd, generateWebSiteJsonLd, generateLocalBusinessJsonLd, generateFaqJsonLd, generateMetadata as generateSeoMetadata } from '@/lib/seo';
import { getFaqsByPage } from '@/data/faq';
import { FAQSection } from '@/components/sections/FAQSection';
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
    title: 'TSF Technology — Switches Ethernet Industriels | 102 Produits IP40',
    description: 'Expert en communication réseau industrielle fiable. 102 switches Ethernet industriels IP40, -40°C à +75°C. Layer 2, Layer 3, PoE, TSN. Livraison Europe.',
    path: pathForAllLocales(''),
    locale: locale as Locale,
  });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const loc = locale as Locale;
  const homeFaqs = getFaqsByPage('home');

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
      {homeFaqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(homeFaqs, loc)) }} />
      )}
      <HeroSection />
      <CategoriesOverview />
      <FeaturedProducts />
      <AdvantagesSection />
      <FAQSection faqs={homeFaqs} locale={loc} title="Questions fréquentes" />
      <CtaSection />
    </main>
  );
}

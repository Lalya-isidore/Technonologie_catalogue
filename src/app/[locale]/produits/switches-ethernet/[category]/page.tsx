import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getProductsByLayer } from '@/data/products';
import type { Product, Locale } from '@/lib/types';
import { CatalogPage } from '@/components/products/CatalogPage';
import { InternalLinks } from '@/components/sections/InternalLinks';
import { CrossCategoryRecommendation } from '@/components/products/CrossCategoryRecommendation';
import { getRelatedCategoryLinks, getRelatedSolutionLinks, getCrossSellingLinks, getResourceLinks } from '@/lib/internal-links';
import { generateMetadata as generateSeoMetadata } from '@/lib/seo';

const pathForAllLocales = (p: string) => ({ fr: p, en: p, es: p, it: p, ar: p, ru: p });

const CATEGORY_MAP: Record<string, { layer: Product['layer']; title: string; description: string }> = {
  'layer-3-din-rail': { layer: 'layer-3', title: 'Switches Layer-3 DIN Rail', description: 'Switches Ethernet industriels Layer 3 montage DIN Rail. Routage IP, OSPF, VRRP. IP40, -40°C à +75°C.' },
  'layer-3-rack': { layer: 'layer-3', title: 'Switches Layer-3 Rack 19"', description: 'Switches Ethernet industriels Layer 3 montage Rack 19 pouces. Routage IP avancé, haute densité de ports.' },
  'layer-2-managed-rack': { layer: 'layer-2-managed', title: 'Switches Layer-2 Managed Rack 19"', description: 'Switches Ethernet managés Layer 2 Rack 19". VLAN, QoS, RSTP, IGMP. Pour salles serveurs industrielles.' },
  'layer-2-managed-din-rail': { layer: 'layer-2-managed', title: 'Switches Layer-2 Managed DIN Rail', description: 'Switches Ethernet managés Layer 2 DIN Rail. VLAN, QoS, redondance réseau. Pour armoires industrielles.' },
  'unmanaged-rack': { layer: 'layer-2-unmanaged', title: 'Switches Non-Manageable Rack 19"', description: 'Switches Ethernet non-managés Rack 19". Plug-and-play, fiables, IP40. Installation rapide sans configuration.' },
  'unmanaged-din-rail': { layer: 'layer-2-unmanaged', title: 'Switches Non-Manageable DIN Rail', description: 'Switches Ethernet non-managés DIN Rail. Plug-and-play, compacts, IP40. Idéals pour petites installations.' },
  'poe': { layer: 'poe', title: 'Switches PoE Industriels', description: 'Switches PoE industriels IEEE 802.3af/at. Alimentation caméras IP, capteurs et points d\'accès Wi-Fi via Ethernet.' },
  'tsn-ptp': { layer: 'tsn-ptp', title: 'Switches TSN & PTP IEEE 1588', description: 'Switches TSN temps-réel et PTP IEEE 1588. Latence déterministe < 1 microseconde pour Industrie 4.0 et automatisation.' },
  'compact': { layer: 'compact', title: 'Switches Compacts Industriels', description: 'Switches Ethernet compacts industriels. PROFINET, EtherCAT. Format ultra-compact pour espaces restreints.' },
};

type Props = {
  params: Promise<{ locale: string; category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, category } = await params;
  const config = CATEGORY_MAP[category];
  if (!config) return {};

  return generateSeoMetadata({
    title: `${config.title} | TSF Technology`,
    description: config.description,
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

  // Filter by both layer and mounting when applicable
  let products = getProductsByLayer(config.layer);

  // Further filter by mounting for layer-3 and layer-2-managed and unmanaged
  if (category.includes('din-rail')) {
    products = products.filter((p) => p.mounting === 'din-rail');
  } else if (category.includes('rack')) {
    products = products.filter((p) => p.mounting === 'rack-19');
  }

  const categoryLinksData = getRelatedCategoryLinks(category, locale as Locale);
  const solutionLinksData = getRelatedSolutionLinks();
  const crossSellingData = getCrossSellingLinks(category);
  const resourceLinksData = getResourceLinks();

  return (
    <main>
      <CatalogPage products={products} title={config.title} />
      <CrossCategoryRecommendation links={crossSellingData} />
      <InternalLinks
        categoryLinks={categoryLinksData}
        solutionLinks={solutionLinksData}
        resourceLinks={resourceLinksData}
      />
    </main>
  );
}

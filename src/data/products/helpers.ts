import type { Product, LocalizedString } from '@/lib/types';

const COMMON_CASING: LocalizedString = {
  fr: 'Alliage aluminium haute résistance',
  en: 'High-strength aluminum alloy',
  es: 'Aleación de aluminio de alta resistencia',
  it: 'Lega di alluminio ad alta resistenza',
  ar: 'سبيكة ألومنيوم عالية المقاومة',
  ru: 'Высокопрочный алюминиевый сплав',
};

type SpeedKey = '100M' | '1G' | 'GbE Up' | '10G' | 'TSN' | 'PTP';

const SPEED_MAP: Record<SpeedKey, Product['speed']> = {
  '100M': 'Fast Ethernet (100M)',
  '1G': 'Gigabit (1G)',
  'GbE Up': 'Gigabit Uplink',
  '10G': '10 Gigabit (10G)',
  'TSN': 'TSN',
  'PTP': 'PTP',
};

export interface ProductSpec {
  sku: string;
  speed: SpeedKey;
  portConfig: string;
  totalPorts: number;
  priceUSD: number;
  mounting: Product['mounting'];
  layer: Product['layer'];
  subcategory: string;
  isNew?: boolean;
  isBestseller?: boolean;
  certifications?: string[];
  name: LocalizedString;
  slug: LocalizedString;
  shortDescription: LocalizedString;
  description: LocalizedString;
}

export function createProduct(spec: ProductSpec): Product {
  const id = spec.sku.toLowerCase().replace(/\//g, '-');
  return {
    id,
    sku: spec.sku,
    name: spec.name,
    slug: spec.slug,
    category: 'switches-ethernet-industriels',
    subcategory: spec.subcategory,
    description: spec.description,
    shortDescription: spec.shortDescription,
    portConfig: spec.portConfig,
    totalPorts: spec.totalPorts,
    speed: SPEED_MAP[spec.speed],
    mounting: spec.mounting,
    layer: spec.layer,
    priceUSD: spec.priceUSD,
    temperatureRange: '-40°C to +75°C',
    ipRating: 'IP40',
    powerInput: 'DC 9~60V',
    casingMaterial: COMMON_CASING,
    certifications: spec.certifications || ['CE', 'FCC', 'UL'],
    features: [],
    applications: [],
    faq: [],
    relatedProductIds: [],
    seo: {
      title: spec.name,
      description: spec.shortDescription,
      keywords: {
        fr: `switch industriel ${spec.sku}, switch ethernet ${spec.subcategory}`,
        en: `industrial switch ${spec.sku}, ethernet switch ${spec.subcategory}`,
        es: `switch industrial ${spec.sku}, switch ethernet ${spec.subcategory}`,
        it: `switch industriale ${spec.sku}, switch ethernet ${spec.subcategory}`,
        ar: `محول صناعي ${spec.sku}`,
        ru: `промышленный коммутатор ${spec.sku}`,
      },
    },
    isNew: spec.isNew || false,
    isBestseller: spec.isBestseller || false,
    images: getProductImages(spec),
  };
}

function getProductImages(spec: ProductSpec): string[] {
  const { sku, subcategory, totalPorts } = spec;
  const P = '/images/products';

  // ── Compact PROFINET Gigabit ──
  if (sku.includes('C3') && sku.includes('PN')) {
    if (totalPorts >= 8) return [`${P}/compact-profinet-gbe-8-ports-1.jpg`, `${P}/compact-profinet-gbe-8-ports-2.jpg`, `${P}/compact-profinet-gbe-8-ports-3.webp`];
    return [`${P}/compact-profinet-gbe-5-ports-1.jpg`, `${P}/compact-profinet-gbe-5-ports-2.jpg`, `${P}/compact-profinet-gbe-5-ports-3.jpg`, `${P}/compact-profinet-gbe-5-ports-4.jpg`];
  }

  // ── Compact PROFINET FE ──
  if (sku.includes('C2') && sku.includes('PN')) {
    if (totalPorts >= 8) return [`${P}/compact-profinet-8-ports-1.jpg`, `${P}/compact-profinet-8-ports-2.jpg`, `${P}/compact-profinet-8-ports-3.jpg`, `${P}/compact-profinet-8-ports-4.webp`];
    return [`${P}/compact-profinet-5-ports-1.jpg`, `${P}/compact-profinet-5-ports-2.jpg`, `${P}/compact-profinet-5-ports-3.jpg`, `${P}/compact-profinet-5-ports-4.webp`];
  }

  // ── Compact generic (FE, GbE, EtherCAT) ──
  if (subcategory === 'compacts') {
    return [`${P}/compact-5-ports-1.jpg`, `${P}/compact-5-ports-2.jpg`, `${P}/compact-5-ports-3.webp`];
  }

  // ── Layer 3 Rack ──
  if (subcategory === 'layer-3-rack') {
    if (totalPorts >= 48) return [`${P}/layer3-rack-52-ports-1.jpg`, `${P}/layer3-rack-52-ports-2.jpg`, `${P}/layer3-rack-52-ports-3.jpg`];
    return [`${P}/layer3-rack-28-ports-1.jpg`, `${P}/layer3-rack-28-ports-2.jpg`, `${P}/layer3-rack-28-ports-3.jpg`, `${P}/layer3-rack-28-ports-4.jpg`];
  }

  // ── Layer 3 DIN-Rail ──
  if (subcategory === 'layer-3-din-rail') {
    return [`${P}/compact-profinet-gbe-8-ports-1.jpg`, `${P}/compact-profinet-gbe-8-ports-2.jpg`, `${P}/compact-profinet-gbe-8-ports-3.webp`];
  }

  // ── Layer 2 Managed Rack ──
  if (subcategory === 'layer-2-managed-rack') {
    return [`${P}/category-layer3.webp`, `${P}/layer3-rack-28-ports-1.jpg`, `${P}/layer3-rack-28-ports-2.jpg`];
  }

  // ── Layer 2 Managed DIN-Rail ──
  if (subcategory === 'layer-2-managed-din-rail') {
    return [`${P}/compact-profinet-5-ports-1.jpg`, `${P}/compact-profinet-5-ports-2.jpg`, `${P}/compact-5-ports-1.jpg`];
  }

  // ── Non-Managed Rack ──
  if (subcategory === 'non-managed-rack') {
    return [`${P}/industrial-rack-24x1g-rj45-4x10g-sfp.webp`, `${P}/category-layer3.webp`, `${P}/layer3-rack-28-ports-1.jpg`];
  }

  // ── Non-Managed DIN-Rail ──
  if (subcategory === 'non-managed-din-rail') {
    return [`${P}/compact-5-ports-1.jpg`, `${P}/compact-5-ports-2.jpg`, `${P}/compact-5-ports-3.webp`];
  }

  // ── PoE ──
  if (subcategory === 'poe-industriel') {
    return [`${P}/poe-rack-28-ports-1.jpg`, `${P}/poe-rack-28-ports-2.jpg`, `${P}/poe-rack-28-ports-3.png`];
  }

  // ── TSN / PTP ──
  if (subcategory === 'tsn-ptp-ieee-1588') {
    return [`${P}/category-layer3.webp`, `${P}/layer3-rack-28-ports-1.jpg`, `${P}/layer3-rack-28-ports-3.jpg`];
  }

  // Fallback
  return [`${P}/category-industrial.jpg`];
}

export function ls(fr: string, en: string, es: string, it: string, ar: string, ru: string): LocalizedString {
  return { fr, en, es, it, ar, ru };
}

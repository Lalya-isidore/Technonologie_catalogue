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
    images: ['/images/products/placeholder.jpg'],
  };
}

export function ls(fr: string, en: string, es: string, it: string, ar: string, ru: string): LocalizedString {
  return { fr, en, es, it, ar, ru };
}

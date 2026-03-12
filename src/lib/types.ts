export type Locale = 'fr' | 'en' | 'es' | 'it' | 'ar' | 'ru';

export interface LocalizedString {
  fr: string;
  en: string;
  es: string;
  it: string;
  ar: string;
  ru: string;
}

export interface Product {
  id: string;
  sku: string;
  name: LocalizedString;
  slug: LocalizedString;
  category: string;
  subcategory: string;
  description: LocalizedString;
  shortDescription: LocalizedString;
  portConfig: string;
  totalPorts: number;
  speed: 'Fast Ethernet (100M)' | 'Gigabit (1G)' | 'Gigabit Uplink' | '10 Gigabit (10G)' | 'TSN' | 'PTP';
  mounting: 'din-rail' | 'rack-19' | 'compact';
  layer: 'layer-3' | 'layer-2-managed' | 'layer-2-unmanaged' | 'compact' | 'poe' | 'tsn-ptp';
  priceUSD: number;
  temperatureRange: string;
  ipRating: string;
  powerInput: string;
  casingMaterial: LocalizedString;
  certifications: string[];
  features: LocalizedString[];
  applications: LocalizedString[];
  faq: FAQ[];
  relatedProductIds: string[];
  seo: {
    title: LocalizedString;
    description: LocalizedString;
    keywords: LocalizedString;
  };
  isNew: boolean;
  isBestseller: boolean;
  images: string[];
}

export interface FAQ {
  question: LocalizedString;
  answer: LocalizedString;
  category?: string;
}

export interface ProductCategory {
  id: string;
  name: LocalizedString;
  slug: LocalizedString;
  description: LocalizedString;
  icon: string;
  productCount: number;
}

export interface BlogPost {
  id: string;
  title: LocalizedString;
  slug: LocalizedString;
  excerpt: LocalizedString;
  content: LocalizedString;
  date: string;
  author?: string;
  category: string;
  readTime: number;
  image?: string;
  relatedProductIds?: string[];
  faq?: FAQ[];
  seo?: {
    title: LocalizedString;
    description: LocalizedString;
    keywords: LocalizedString;
  };
}

export interface GlossaryTerm {
  id: string;
  term: LocalizedString;
  slug?: LocalizedString;
  definition: LocalizedString;
  relatedProductIds?: string[];
  relatedTermIds?: string[];
}

export interface Solution {
  id: string;
  name: LocalizedString;
  slug: LocalizedString;
  description: LocalizedString;
  challenges: LocalizedString[];
  recommendedProductIds: string[];
  faq: FAQ[];
  seo: {
    title: LocalizedString;
    description: LocalizedString;
    keywords: LocalizedString;
  };
}

import type { Product, Locale } from '@/lib/types';
import { layer3DinRailProducts } from './layer3-din-rail';
import { layer3RackProducts } from './layer3-rack';
import { layer2ManagedRackProducts } from './layer2-managed-rack';
import { layer2ManagedDinRailProducts } from './layer2-managed-din-rail';
import { unmanagedRackProducts } from './unmanaged-rack';
import { unmanagedDinRailProducts } from './unmanaged-din-rail';
import { compactProducts } from './compact';
import { poeProducts } from './poe';
import { tsnPtpProducts } from './tsn-ptp';

const allProducts: Product[] = [
  ...layer3DinRailProducts,
  ...layer3RackProducts,
  ...layer2ManagedRackProducts,
  ...layer2ManagedDinRailProducts,
  ...unmanagedRackProducts,
  ...unmanagedDinRailProducts,
  ...compactProducts,
  ...poeProducts,
  ...tsnPtpProducts,
];

export function getAllProducts(): Product[] {
  return allProducts;
}

export function getProductBySku(sku: string): Product | undefined {
  return allProducts.find((p) => p.sku === sku);
}

export function getProductById(id: string): Product | undefined {
  return allProducts.find((p) => p.id === id);
}

export function getProductsByCategory(subcategory: string): Product[] {
  return allProducts.filter((p) => p.subcategory === subcategory);
}

export function getProductsByLayer(layer: Product['layer']): Product[] {
  return allProducts.filter((p) => p.layer === layer);
}

export function getProductsByMounting(mounting: Product['mounting']): Product[] {
  return allProducts.filter((p) => p.mounting === mounting);
}

export function getRelatedProducts(product: Product, limit: number = 4): Product[] {
  return allProducts
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.subcategory === product.subcategory || p.layer === product.layer)
    )
    .slice(0, limit);
}

export function searchProducts(query: string, locale: Locale = 'fr'): Product[] {
  const q = query.toLowerCase();
  return allProducts.filter(
    (p) =>
      p.sku.toLowerCase().includes(q) ||
      p.name[locale].toLowerCase().includes(q) ||
      p.shortDescription[locale].toLowerCase().includes(q) ||
      p.portConfig.toLowerCase().includes(q)
  );
}

export function getProductSlug(product: Product, locale: Locale = 'fr'): string {
  return product.slug[locale];
}

export function getAllSlugs(locale: Locale = 'fr'): { slug: string; sku: string }[] {
  return allProducts.map((p) => ({
    slug: p.slug[locale],
    sku: p.sku,
  }));
}

export function getNewProducts(): Product[] {
  return allProducts.filter((p) => p.isNew);
}

export function getBestsellers(): Product[] {
  return allProducts.filter((p) => p.isBestseller);
}

export function getProductCount(): number {
  return allProducts.length;
}

export {
  layer3DinRailProducts,
  layer3RackProducts,
  layer2ManagedRackProducts,
  layer2ManagedDinRailProducts,
  unmanagedRackProducts,
  unmanagedDinRailProducts,
  compactProducts,
  poeProducts,
  tsnPtpProducts,
};

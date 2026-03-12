/**
 * Maps product SKU to an array of image paths.
 * Products with multiple images will display a slider in cards.
 */
export const productImages: Record<string, string[]> = {
  // Compact Industriel – 5 Ports (bestseller)
  'TSF-C205': [
    '/images/products/compact-5-ports-1.jpg',
    '/images/products/compact-5-ports-2.jpg',
  ],

  // Compact PROFINET – 5 Ports (new)
  'TSF-C205PN': [
    '/images/products/compact-profinet-5-ports-1.jpg',
    '/images/products/compact-profinet-5-ports-2.jpg',
    '/images/products/compact-profinet-5-ports-3.jpg',
  ],

  // Compact PROFINET – 8 Ports (new)
  'TSF-C208PN': [
    '/images/products/compact-profinet-8-ports-1.jpg',
    '/images/products/compact-profinet-8-ports-2.jpg',
    '/images/products/compact-profinet-8-ports-3.jpg',
  ],

  // Compact PROFINET Gigabit – 5 Ports (new)
  'TSF-C305PN': [
    '/images/products/compact-profinet-gbe-5-ports-1.jpg',
    '/images/products/compact-profinet-gbe-5-ports-2.jpg',
    '/images/products/compact-profinet-gbe-5-ports-3.jpg',
    '/images/products/compact-profinet-gbe-5-ports-4.jpg',
  ],

  // Compact PROFINET Gigabit – 8 Ports (new)
  'TSF-C308PN': [
    '/images/products/compact-profinet-gbe-8-ports-1.jpg',
    '/images/products/compact-profinet-gbe-8-ports-2.jpg',
  ],

  // Layer 3 Rack 28 Ports (bestseller)
  'TSF-S8028GX-4XGF-24GT': [
    '/images/products/layer3-rack-28-ports-1.jpg',
    '/images/products/layer3-rack-28-ports-2.jpg',
    '/images/products/layer3-rack-28-ports-3.jpg',
    '/images/products/layer3-rack-28-ports-4.jpg',
  ],

  // Layer 3 Rack 52 Ports (bestseller)
  'TSF-S8052GX-4XGF-48GT': [
    '/images/products/layer3-rack-52-ports-1.jpg',
    '/images/products/layer3-rack-52-ports-2.jpg',
    '/images/products/layer3-rack-52-ports-3.jpg',
  ],

  // PoE+ Rack 28 Ports (bestseller)
  'TSF-8028GP': [
    '/images/products/poe-rack-28-ports-1.jpg',
    '/images/products/poe-rack-28-ports-2.jpg',
    '/images/products/poe-rack-28-ports-3.png',
  ],
};

/** Get images for a product SKU, returns empty array if none */
export function getProductImages(sku: string): string[] {
  return productImages[sku] ?? [];
}

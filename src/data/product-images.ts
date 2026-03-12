/**
 * Maps product SKU to an array of image paths.
 * Products with multiple images will display a slider in cards.
 */
export const productImages: Record<string, string[]> = {
  // Compact Industriel – 5 Ports (bestseller)
  // 1: compact noir 5 ports avec étiquette (meilleur match)
  // 2: Eaton/Tripp Lite (mauvais type)
  'TSF-C205': [
    '/images/products/compact-5-ports-1.jpg',
    '/images/products/compact-5-ports-2.jpg',
  ],

  // Compact PROFINET – 5 Ports (new)
  // 1→ e-lnk 5 ports compact (bon format, vue angle)
  // 2→ même compact LNK (vue ports)
  // 3→ petite image (complément)
  'TSF-C205PN': [
    '/images/products/compact-profinet-5-ports-1.jpg',
    '/images/products/compact-profinet-5-ports-3.jpg',
    '/images/products/compact-profinet-5-ports-2.jpg',
  ],

  // Compact PROFINET – 8 Ports (new)
  // 3→ Eaton 8 ports NFI-U08-2 (bon nombre de ports, compact)
  // 2→ Eaton 10 ports (proche)
  // 1→ LNK 5 ports (mauvais nombre)
  'TSF-C208PN': [
    '/images/products/compact-profinet-8-ports-3.jpg',
    '/images/products/compact-profinet-8-ports-2.jpg',
    '/images/products/compact-profinet-8-ports-1.jpg',
  ],

  // Compact PROFINET Gigabit – 5 Ports (new)
  // 4→ e-lnk 5 ports PoE Gigabit (bon format, vue angle propre)
  // 1→ image marketing 5-Port GbE (descriptif)
  // 3→ compact LNK (vue ports)
  // 2→ Eaton (mauvais type)
  'TSF-C305PN': [
    '/images/products/compact-profinet-gbe-5-ports-4.jpg',
    '/images/products/compact-profinet-gbe-5-ports-1.jpg',
    '/images/products/compact-profinet-gbe-5-ports-3.jpg',
    '/images/products/compact-profinet-gbe-5-ports-2.jpg',
  ],

  // Compact PROFINET Gigabit – 8 Ports (new)
  // 1→ Tripp Lite 12 ports managed (plus gros, industriel)
  // 2→ Eaton 10 ports
  'TSF-C308PN': [
    '/images/products/compact-profinet-gbe-8-ports-1.jpg',
    '/images/products/compact-profinet-gbe-8-ports-2.jpg',
  ],

  // Layer 3 Rack 28 Ports (bestseller)
  // 3→ MokerLink 28-Port L3 Managed (description exacte, rack)
  // 1→ Tripp Lite rack 24 ports (vue face propre)
  // 2→ N-TRON 524TX industriel (vue angle)
  // 4→ Eaton compact (mauvais format, mis en dernier)
  'TSF-S8028GX-4XGF-24GT': [
    '/images/products/layer3-rack-28-ports-3.jpg',
    '/images/products/layer3-rack-28-ports-1.jpg',
    '/images/products/layer3-rack-28-ports-2.jpg',
    '/images/products/layer3-rack-28-ports-4.jpg',
  ],

  // Layer 3 Rack 52 Ports (bestseller)
  // 3→ CTC managed rack avec SFP (industriel, propre)
  // 1→ TP-Link 48 ports rack (bon format)
  // 2→ packaging marketing (mis en dernier)
  'TSF-S8052GX-4XGF-48GT': [
    '/images/products/layer3-rack-52-ports-3.jpg',
    '/images/products/layer3-rack-52-ports-1.jpg',
    '/images/products/layer3-rack-52-ports-2.jpg',
  ],

  // PoE+ Rack 28 Ports (bestseller)
  // 3→ Fiberroad rack 24+ ports PoE (bon format rack, propre)
  // 2→ Tripp Lite rack 16 ports (rack mais moins de ports)
  // 1→ diagramme compact PoE (mauvais format, mis en dernier)
  'TSF-8028GP': [
    '/images/products/poe-rack-28-ports-3.png',
    '/images/products/poe-rack-28-ports-2.jpg',
    '/images/products/poe-rack-28-ports-1.jpg',
  ],
};

/** Get images for a product SKU, returns empty array if none */
export function getProductImages(sku: string): string[] {
  return productImages[sku] ?? [];
}

import type { Locale } from './types';

// ──────────────────────────────────────────────
// Internal link type
// ──────────────────────────────────────────────
export interface InternalLink {
  label: string;
  href: string;
  description?: string;
}

// ──────────────────────────────────────────────
// Category URL map
// ──────────────────────────────────────────────
const categoryLinks: Record<string, { label: string; description: string; paths: Record<Locale, string> }> = {
  'layer-3-din-rail': {
    label: 'Switches Layer-3 DIN Rail',
    description: 'Routage IP, OSPF, VRRP. Montage DIN Rail, IP40.',
    paths: {
      fr: '/produits/switches-ethernet/layer-3-din-rail',
      en: '/en/products/industrial-ethernet-switches/layer-3-din-rail',
      es: '/es/productos/switches-ethernet-industriales/layer-3-din-rail',
      it: '/it/prodotti/switch-ethernet-industriali/layer-3-din-rail',
      ar: '/ar/products/industrial-ethernet-switches/layer-3-din-rail',
      ru: '/ru/produkty/promyshlennye-ethernet-kommutatory/layer-3-din-rail',
    },
  },
  'layer-3-rack': {
    label: 'Switches Layer-3 Rack 19"',
    description: 'Routage IP avancé, haute densité de ports. Rack 19".',
    paths: {
      fr: '/produits/switches-ethernet/layer-3-rack',
      en: '/en/products/industrial-ethernet-switches/layer-3-rack',
      es: '/es/productos/switches-ethernet-industriales/layer-3-rack',
      it: '/it/prodotti/switch-ethernet-industriali/layer-3-rack',
      ar: '/ar/products/industrial-ethernet-switches/layer-3-rack',
      ru: '/ru/produkty/promyshlennye-ethernet-kommutatory/layer-3-rack',
    },
  },
  'layer-2-managed-rack': {
    label: 'Switches Layer-2 Managed Rack',
    description: 'VLAN, QoS, RSTP, IGMP. Montage Rack 19".',
    paths: {
      fr: '/produits/switches-ethernet/layer-2-managed-rack',
      en: '/en/products/industrial-ethernet-switches/layer-2-managed-rack',
      es: '/es/productos/switches-ethernet-industriales/layer-2-managed-rack',
      it: '/it/prodotti/switch-ethernet-industriali/layer-2-managed-rack',
      ar: '/ar/products/industrial-ethernet-switches/layer-2-managed-rack',
      ru: '/ru/produkty/promyshlennye-ethernet-kommutatory/layer-2-managed-rack',
    },
  },
  'layer-2-managed-din-rail': {
    label: 'Switches Layer-2 Managed DIN Rail',
    description: 'VLAN, QoS, redondance réseau. Montage DIN Rail.',
    paths: {
      fr: '/produits/switches-ethernet/layer-2-managed-din-rail',
      en: '/en/products/industrial-ethernet-switches/layer-2-managed-din-rail',
      es: '/es/productos/switches-ethernet-industriales/layer-2-managed-din-rail',
      it: '/it/prodotti/switch-ethernet-industriali/layer-2-managed-din-rail',
      ar: '/ar/products/industrial-ethernet-switches/layer-2-managed-din-rail',
      ru: '/ru/produkty/promyshlennye-ethernet-kommutatory/layer-2-managed-din-rail',
    },
  },
  'unmanaged-rack': {
    label: 'Switches Non-Manageable Rack',
    description: 'Plug-and-play, fiables. Montage Rack 19".',
    paths: {
      fr: '/produits/switches-ethernet/unmanaged-rack',
      en: '/en/products/industrial-ethernet-switches/unmanaged-rack',
      es: '/es/productos/switches-ethernet-industriales/unmanaged-rack',
      it: '/it/prodotti/switch-ethernet-industriali/unmanaged-rack',
      ar: '/ar/products/industrial-ethernet-switches/unmanaged-rack',
      ru: '/ru/produkty/promyshlennye-ethernet-kommutatory/unmanaged-rack',
    },
  },
  'unmanaged-din-rail': {
    label: 'Switches Non-Manageable DIN Rail',
    description: 'Plug-and-play, compacts. Montage DIN Rail.',
    paths: {
      fr: '/produits/switches-ethernet/unmanaged-din-rail',
      en: '/en/products/industrial-ethernet-switches/unmanaged-din-rail',
      es: '/es/productos/switches-ethernet-industriales/unmanaged-din-rail',
      it: '/it/prodotti/switch-ethernet-industriali/unmanaged-din-rail',
      ar: '/ar/products/industrial-ethernet-switches/unmanaged-din-rail',
      ru: '/ru/produkty/promyshlennye-ethernet-kommutatory/unmanaged-din-rail',
    },
  },
  poe: {
    label: 'Switches PoE Industriels',
    description: 'IEEE 802.3af/at. Alimentation caméras IP et capteurs.',
    paths: {
      fr: '/produits/switches-ethernet/poe',
      en: '/en/products/industrial-ethernet-switches/poe',
      es: '/es/productos/switches-ethernet-industriales/poe',
      it: '/it/prodotti/switch-ethernet-industriali/poe',
      ar: '/ar/products/industrial-ethernet-switches/poe',
      ru: '/ru/produkty/promyshlennye-ethernet-kommutatory/poe',
    },
  },
  'tsn-ptp': {
    label: 'Switches TSN & PTP IEEE 1588',
    description: 'Latence déterministe < 1µs pour Industrie 4.0.',
    paths: {
      fr: '/produits/switches-ethernet/tsn-ptp',
      en: '/en/products/industrial-ethernet-switches/tsn-ptp',
      es: '/es/productos/switches-ethernet-industriales/tsn-ptp',
      it: '/it/prodotti/switch-ethernet-industriali/tsn-ptp',
      ar: '/ar/products/industrial-ethernet-switches/tsn-ptp',
      ru: '/ru/produkty/promyshlennye-ethernet-kommutatory/tsn-ptp',
    },
  },
  compact: {
    label: 'Switches Compacts Industriels',
    description: 'PROFINET, EtherCAT. Format ultra-compact.',
    paths: {
      fr: '/produits/switches-ethernet/compact',
      en: '/en/products/industrial-ethernet-switches/compact',
      es: '/es/productos/switches-ethernet-industriales/compact',
      it: '/it/prodotti/switch-ethernet-industriali/compact',
      ar: '/ar/products/industrial-ethernet-switches/compact',
      ru: '/ru/produkty/promyshlennye-ethernet-kommutatory/compact',
    },
  },
};

// Defines which categories are related to each other
const relatedCategoryMap: Record<string, string[]> = {
  'layer-3-din-rail': ['layer-3-rack', 'layer-2-managed-din-rail', 'tsn-ptp'],
  'layer-3-rack': ['layer-3-din-rail', 'layer-2-managed-rack', 'tsn-ptp'],
  'layer-2-managed-rack': ['layer-2-managed-din-rail', 'layer-3-rack', 'unmanaged-rack'],
  'layer-2-managed-din-rail': ['layer-2-managed-rack', 'layer-3-din-rail', 'unmanaged-din-rail'],
  'unmanaged-rack': ['unmanaged-din-rail', 'layer-2-managed-rack', 'poe'],
  'unmanaged-din-rail': ['unmanaged-rack', 'layer-2-managed-din-rail', 'compact'],
  poe: ['layer-2-managed-din-rail', 'unmanaged-din-rail', 'compact'],
  'tsn-ptp': ['layer-3-din-rail', 'layer-3-rack', 'compact'],
  compact: ['unmanaged-din-rail', 'poe', 'tsn-ptp'],
};

// ──────────────────────────────────────────────
// Solution data
// ──────────────────────────────────────────────
const solutionData: Record<string, { label: string; description: string; paths: Record<Locale, string> }> = {
  'smart-city': {
    label: 'Smart City',
    description: 'Réseaux urbains intelligents : éclairage, trafic, vidéosurveillance.',
    paths: {
      fr: '/solutions/smart-city',
      en: '/en/solutions/smart-city',
      es: '/es/soluciones/smart-city',
      it: '/it/soluzioni/smart-city',
      ar: '/ar/solutions/smart-city',
      ru: '/ru/resheniya/umnyy-gorod',
    },
  },
  'energies-renouvelables': {
    label: 'Énergies Renouvelables',
    description: 'Parcs éoliens, fermes solaires, smart grid.',
    paths: {
      fr: '/solutions/energies-renouvelables',
      en: '/en/solutions/renewable-energy',
      es: '/es/soluciones/energias-renovables',
      it: '/it/soluzioni/energie-rinnovabili',
      ar: '/ar/solutions/renewable-energy',
      ru: '/ru/resheniya/vozobnovlyaemaya-energetika',
    },
  },
  'industrie-4-0': {
    label: 'Industrie 4.0',
    description: 'Automatisation, robotique, lignes de production connectées.',
    paths: {
      fr: '/solutions/industrie-4-0',
      en: '/en/solutions/industry-4-0',
      es: '/es/soluciones/industria-4-0',
      it: '/it/soluzioni/industria-4-0',
      ar: '/ar/solutions/industry-4-0',
      ru: '/ru/resheniya/industriya-4-0',
    },
  },
  'transports-intelligents': {
    label: 'Transports Intelligents',
    description: 'Autoroutes, tunnels, gares, métros, signalisation.',
    paths: {
      fr: '/solutions/transports-intelligents',
      en: '/en/solutions/smart-transportation',
      es: '/es/soluciones/transporte-inteligente',
      it: '/it/soluzioni/trasporti-intelligenti',
      ar: '/ar/solutions/smart-transportation',
      ru: '/ru/resheniya/umnyy-transport',
    },
  },
};

// ──────────────────────────────────────────────
// Cross-selling map
// ──────────────────────────────────────────────
const crossSellingMap: Record<string, { label: string; description: string; href: string }[]> = {
  // Switch categories -> suggest routeur/logiciel
  'layer-3-din-rail': [
    { label: 'Switches PoE Industriels', description: 'Alimentez vos caméras et capteurs via Ethernet.', href: '/produits/switches-ethernet/poe' },
    { label: 'Switches TSN & PTP', description: 'Temps-réel déterministe pour Industrie 4.0.', href: '/produits/switches-ethernet/tsn-ptp' },
  ],
  'layer-3-rack': [
    { label: 'Switches Layer-2 Managed Rack', description: 'Complétez votre infrastructure rack.', href: '/produits/switches-ethernet/layer-2-managed-rack' },
    { label: 'Switches PoE Industriels', description: 'Alimentez vos périphériques PoE.', href: '/produits/switches-ethernet/poe' },
  ],
  'layer-2-managed-rack': [
    { label: 'Switches Layer-3 Rack 19"', description: 'Montez en gamme avec le routage Layer 3.', href: '/produits/switches-ethernet/layer-3-rack' },
    { label: 'Switches Non-Manageable Rack', description: 'Extension simple pour segments non critiques.', href: '/produits/switches-ethernet/unmanaged-rack' },
  ],
  'layer-2-managed-din-rail': [
    { label: 'Switches Layer-3 DIN Rail', description: 'Routage avancé pour vos armoires industrielles.', href: '/produits/switches-ethernet/layer-3-din-rail' },
    { label: 'Switches Compacts', description: 'Format réduit pour espaces restreints.', href: '/produits/switches-ethernet/compact' },
  ],
  'unmanaged-rack': [
    { label: 'Switches Layer-2 Managed Rack', description: 'Passez au managé pour plus de contrôle.', href: '/produits/switches-ethernet/layer-2-managed-rack' },
    { label: 'Switches PoE Industriels', description: 'Ajoutez l\'alimentation PoE à votre réseau.', href: '/produits/switches-ethernet/poe' },
  ],
  'unmanaged-din-rail': [
    { label: 'Switches Layer-2 Managed DIN Rail', description: 'Contrôle réseau avancé en DIN Rail.', href: '/produits/switches-ethernet/layer-2-managed-din-rail' },
    { label: 'Switches Compacts', description: 'Alternative ultra-compacte.', href: '/produits/switches-ethernet/compact' },
  ],
  poe: [
    { label: 'Switches Layer-2 Managed DIN Rail', description: 'Management avancé pour votre réseau PoE.', href: '/produits/switches-ethernet/layer-2-managed-din-rail' },
    { label: 'Switches Compacts', description: 'PoE compact pour petites installations.', href: '/produits/switches-ethernet/compact' },
  ],
  'tsn-ptp': [
    { label: 'Switches Layer-3 DIN Rail', description: 'Routage IP + temps-réel.', href: '/produits/switches-ethernet/layer-3-din-rail' },
    { label: 'Switches Compacts (PROFINET)', description: 'Protocoles industriels en format compact.', href: '/produits/switches-ethernet/compact' },
  ],
  compact: [
    { label: 'Switches Non-Manageable DIN Rail', description: 'Extension plug-and-play.', href: '/produits/switches-ethernet/unmanaged-din-rail' },
    { label: 'Switches PoE Industriels', description: 'Alimentation PoE pour vos capteurs.', href: '/produits/switches-ethernet/poe' },
  ],
};

// ──────────────────────────────────────────────
// Resource links
// ──────────────────────────────────────────────
const resourceData = [
  { label: 'Blog', description: 'Articles techniques et actualités.', href: '/blog' },
  { label: 'Guides Techniques', description: 'Guides d\'aide au choix et d\'installation.', href: '/ressources/guides-techniques' },
  { label: 'Comparatifs', description: 'Tableaux comparatifs de nos gammes.', href: '/ressources/comparatifs' },
  { label: 'Glossaire', description: 'Définitions des termes réseau industriel.', href: '/ressources/glossaire' },
];

// ──────────────────────────────────────────────
// Exported functions
// ──────────────────────────────────────────────

/**
 * Returns 3-4 related category links based on the current subcategory.
 */
export function getRelatedCategoryLinks(currentCategory: string, locale: Locale = 'fr'): InternalLink[] {
  const relatedIds = relatedCategoryMap[currentCategory];

  // If we have a specific mapping, use it; otherwise fall back to first 4 excluding current
  const ids = relatedIds
    ? relatedIds
    : Object.keys(categoryLinks).filter((id) => id !== currentCategory).slice(0, 4);

  return ids
    .filter((id) => categoryLinks[id])
    .map((id) => {
      const cat = categoryLinks[id];
      return {
        label: cat.label,
        href: cat.paths[locale],
        description: cat.description,
      };
    });
}

/**
 * Returns relevant solution page links (all 4 main solutions).
 */
export function getRelatedSolutionLinks(_currentPage?: string): InternalLink[] {
  return Object.values(solutionData).map((sol) => ({
    label: sol.label,
    href: sol.paths.fr,
    description: sol.description,
  }));
}

/**
 * Returns cross-selling product category suggestions.
 */
export function getCrossSellingLinks(productOrCategory: string): InternalLink[] {
  const links = crossSellingMap[productOrCategory];
  if (links) return links;

  // Fallback: suggest a couple of general popular categories
  return [
    { label: 'Switches PoE Industriels', description: 'Alimentation PoE pour caméras et capteurs.', href: '/produits/switches-ethernet/poe' },
    { label: 'Switches Compacts', description: 'Format ultra-compact pour espaces restreints.', href: '/produits/switches-ethernet/compact' },
  ];
}

/**
 * Returns links to blog, guides, comparisons, glossary.
 */
export function getResourceLinks(_currentPage?: string): InternalLink[] {
  return resourceData;
}

// ──────────────────────────────────────────────
// Legacy helpers (kept for backward compatibility)
// ──────────────────────────────────────────────

export function getCategoryLink(categoryId: string, locale: Locale): string {
  const cat = categoryLinks[categoryId];
  return cat ? cat.paths[locale] : '#';
}

export function getSolutionLink(solutionId: string, locale: Locale): string {
  const sol = solutionData[solutionId];
  return sol ? sol.paths[locale] : '#';
}

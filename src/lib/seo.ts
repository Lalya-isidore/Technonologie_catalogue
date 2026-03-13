import type { Locale, Product, FAQ } from './types';
import { SITE } from './constants';

const localeMap: Record<Locale, string> = {
  fr: 'fr_FR',
  en: 'en_US',
  es: 'es_ES',
  it: 'it_IT',
  ar: 'ar_SA',
  ru: 'ru_RU',
};

function getBaseUrl(locale: Locale, path: string = ''): string {
  return `${SITE.domain}/${locale}${path}`;
}

export function generateHreflangLinks(path: Record<Locale, string>) {
  const links: { rel: string; hrefLang: string; href: string }[] = SITE.locales.map((locale) => ({
    rel: 'alternate',
    hrefLang: locale as string,
    href: getBaseUrl(locale, path[locale]),
  }));
  links.push({
    rel: 'alternate',
    hrefLang: 'x-default',
    href: getBaseUrl('fr', path.fr),
  });
  return links;
}

export function generateMetadata({
  title,
  description,
  path,
  locale,
  ogImage,
}: {
  title: string;
  description: string;
  path: Record<Locale, string>;
  locale: Locale;
  ogImage?: string;
}) {
  const canonical = getBaseUrl(locale, path[locale]);
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: Object.fromEntries(
        SITE.locales.map((l) => [l, getBaseUrl(l, path[l])])
      ),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE.name,
      locale: localeMap[locale],
      type: 'website',
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description,
    },
  };
}

export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    legalName: SITE.company.legalName,
    url: SITE.domain,
    logo: `${SITE.domain}/images/logo.png`,
    description: SITE.tagline,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.company.address,
      addressLocality: SITE.company.city,
      postalCode: SITE.company.postalCode,
      addressCountry: SITE.company.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE.contact.whatsapp,
      email: SITE.contact.email,
      contactType: 'customer service',
      availableLanguage: ['French', 'English', 'Spanish', 'Italian', 'Arabic', 'Russian'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    },
    sameAs: [],
  };
}

export function generateWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.domain,
    description: SITE.tagline,
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE.domain}/fr/produits?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateProductJsonLd(product: Product, locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name[locale],
    description: product.description[locale],
    sku: product.sku,
    brand: {
      '@type': 'Brand',
      name: 'TSF Technology',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'TSF Technology',
    },
    image: product.images[0] ? `${SITE.domain}${product.images[0]}` : undefined,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: SITE.name,
      },
    },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'IP Rating', value: product.ipRating },
      { '@type': 'PropertyValue', name: 'Temperature Range', value: product.temperatureRange },
      { '@type': 'PropertyValue', name: 'Power Input', value: product.powerInput },
      { '@type': 'PropertyValue', name: 'Mounting', value: product.mounting },
      { '@type': 'PropertyValue', name: 'Total Ports', value: product.totalPorts.toString() },
      { '@type': 'PropertyValue', name: 'Port Configuration', value: product.portConfig },
    ],
  };
}

export function generateFaqJsonLd(faqs: FAQ[], locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question[locale],
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer[locale],
      },
    })),
  };
}

export function generateBreadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE.domain}${item.url}`,
    })),
  };
}

export function generateCollectionPageJsonLd(
  category: { name: string; description: string; url: string },
  products: Product[],
  locale: Locale
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.name,
    description: category.description,
    url: `${SITE.domain}${category.url}`,
    numberOfItems: products.length,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: products.length,
      itemListElement: products.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Product',
          name: product.name[locale],
          sku: product.sku,
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
          },
        },
      })),
    },
  };
}

export function generateArticleJsonLd({
  title,
  description,
  slug,
  locale,
  publishedAt,
  modifiedAt,
  author,
  image,
}: {
  title: string;
  description: string;
  slug: string;
  locale: Locale;
  publishedAt: string;
  modifiedAt?: string;
  author?: string;
  image?: string;
}) {
  const prefix = `/${locale}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${SITE.domain}${prefix}/blog/${slug}`,
    datePublished: publishedAt,
    dateModified: modifiedAt ?? publishedAt,
    author: {
      '@type': 'Organization',
      name: author ?? SITE.name,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: { '@type': 'ImageObject', url: `${SITE.domain}/images/logo.png` },
    },
    image: image ? `${SITE.domain}${image}` : undefined,
    inLanguage: locale,
  };
}

export function generateDefinedTermSetJsonLd(
  terms: { term: string; definition: string }[],
  locale: Locale
) {
  const prefix = `/${locale}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'Glossaire réseau industriel',
    url: `${SITE.domain}${prefix}/ressources/glossaire`,
    inLanguage: locale,
    hasDefinedTerm: terms.map((t) => ({
      '@type': 'DefinedTerm',
      name: t.term,
      description: t.definition,
    })),
  };
}

export function generateLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE.name,
    description: SITE.tagline,
    url: SITE.domain,
    telephone: SITE.contact.whatsapp,
    email: SITE.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.company.address,
      addressLocality: SITE.company.city,
      postalCode: SITE.company.postalCode,
      addressCountry: SITE.company.country,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    priceRange: '$$',
  };
}

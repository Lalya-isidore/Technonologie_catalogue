import type { MetadataRoute } from 'next';
import { SITE, CATEGORIES } from '@/lib/constants';
import type { Locale } from '@/lib/types';
import { getAllProducts } from '@/data/products';
import { getAllBlogPosts } from '@/data/blog';
import { getAllGuides } from '@/data/guides';

const locales = SITE.locales;
const domain = SITE.domain;

function getUrl(locale: Locale, path: string = ''): string {
  const prefix = locale === 'fr' ? '' : `/${locale}`;
  return `${domain}${prefix}${path}`;
}

function buildAlternates(path: string | Record<Locale, string>) {
  const languages: Record<string, string> = {};

  for (const locale of locales) {
    const p = typeof path === 'string' ? path : path[locale];
    languages[locale] = getUrl(locale, p);
  }

  // x-default points to French (default locale)
  const frPath = typeof path === 'string' ? path : path.fr;
  languages['x-default'] = getUrl('fr', frPath);

  return { languages };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date().toISOString();

  // ─── Homepage ───
  entries.push({
    url: getUrl('fr'),
    lastModified: now,
    changeFrequency: 'daily',
    priority: 1.0,
    alternates: buildAlternates(''),
  });

  // ─── All 102 Products ───
  const products = getAllProducts();
  for (const product of products) {
    const localizedPaths: Record<Locale, string> = {} as Record<Locale, string>;
    for (const locale of locales) {
      localizedPaths[locale] = `/produits/${product.slug[locale]}`;
    }

    entries.push({
      url: getUrl('fr', localizedPaths.fr),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: buildAlternates(localizedPaths),
    });
  }

  // ─── Category pages (9 subcategories) ───
  const categoryKeys = Object.keys(CATEGORIES);
  for (const category of categoryKeys) {
    const path = `/produits/switches-ethernet/${category}`;
    entries.push({
      url: getUrl('fr', path),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: buildAlternates(path),
    });
  }

  // ─── Catalog page ───
  entries.push({
    url: getUrl('fr', '/produits'),
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
    alternates: buildAlternates('/produits'),
  });

  // ─── Solution pages (4 solutions) ───
  const solutionSlugs = ['smart-city', 'energies-renouvelables', 'industrie-4-0', 'transports-intelligents'];
  for (const slug of solutionSlugs) {
    const path = `/solutions/${slug}`;
    entries.push({
      url: getUrl('fr', path),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: buildAlternates(path),
    });
  }

  // ─── Blog index ───
  entries.push({
    url: getUrl('fr', '/blog'),
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
    alternates: buildAlternates('/blog'),
  });

  // ─── Blog posts ───
  const blogPosts = getAllBlogPosts();
  for (const post of blogPosts) {
    const localizedPaths: Record<Locale, string> = {} as Record<Locale, string>;
    for (const locale of locales) {
      localizedPaths[locale] = `/blog/${post.slug[locale]}`;
    }

    entries.push({
      url: getUrl('fr', localizedPaths.fr),
      lastModified: post.date,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: buildAlternates(localizedPaths),
    });
  }

  // ─── Resource pages ───
  const resourcePages = [
    { path: '/ressources/glossaire', priority: 0.6 as const },
    { path: '/ressources/guides-techniques', priority: 0.6 as const },
    { path: '/ressources/comparatifs', priority: 0.6 as const },
  ];
  for (const page of resourcePages) {
    entries.push({
      url: getUrl('fr', page.path),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: page.priority,
      alternates: buildAlternates(page.path),
    });
  }

  // ─── Guide pages (5 guides techniques) ───
  const guideSlugs = getAllGuides();
  for (const guide of guideSlugs) {
    const path = `/ressources/guides-techniques/${guide.slug}`;
    entries.push({
      url: getUrl('fr', path),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: buildAlternates(path),
    });
  }

  // ─── Static pages ───
  const staticPages = [
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/demande-de-devis', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/a-propos', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/mentions-legales', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/confidentialite', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/cgv', priority: 0.3, changeFrequency: 'yearly' as const },
  ];
  for (const page of staticPages) {
    entries.push({
      url: getUrl('fr', page.path),
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: buildAlternates(page.path),
    });
  }

  return entries;
}

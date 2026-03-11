/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://tsf-technology.com',
  generateRobotsTxt: false, // We manage robots.txt manually
  generateIndexSitemap: true,
  outDir: './public',
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/api/*', '/_next/*'],
  alternateRefs: [
    { hreflang: 'fr', href: 'https://tsf-technology.com' },
    { hreflang: 'en', href: 'https://tsf-technology.com/en' },
    { hreflang: 'es', href: 'https://tsf-technology.com/es' },
    { hreflang: 'it', href: 'https://tsf-technology.com/it' },
    { hreflang: 'ar', href: 'https://tsf-technology.com/ar' },
    { hreflang: 'ru', href: 'https://tsf-technology.com/ru' },
    { hreflang: 'x-default', href: 'https://tsf-technology.com' },
  ],
  transform: async (config, path) => {
    // Higher priority for key pages
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === '/' || path === '') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.includes('/produits/') || path.includes('/products/')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.includes('/contact') || path.includes('/devis')) {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path.includes('/blog') || path.includes('/guides')) {
      priority = 0.7;
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};

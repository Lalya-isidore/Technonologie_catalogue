/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://tsf-technology.com',
  generateRobotsTxt: false,
  generateIndexSitemap: true,
  outDir: './out',
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/api/*', '/_next/*'],
  transform: async (config, path) => {
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path.match(/^\/[a-z]{2}$/)) {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.includes('/produits/')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.includes('/contact') || path.includes('/devis')) {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path.includes('/solutions/')) {
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
    };
  },
};

/**
 * Sitemap Generator for Auto Shop Digital
 * Generates XML sitemap with all pages, proper priorities, and change frequencies
 */

export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

const BASE_URL = 'https://autoshopdigital.com';

export function generateSitemap(): string {
  const urls: SitemapUrl[] = [];
  const today = new Date().toISOString().split('T')[0];

  // Homepage - highest priority
  urls.push({
    loc: BASE_URL,
    lastmod: today,
    changefreq: 'weekly',
    priority: 1.0,
  });

  // Main pages - high priority
  const mainPages = [
    '/about-us',
    '/pricing',
    '/case-studies',
    '/contact-us',
    '/faq',
    '/get-started',
    '/vs-competitors',
    '/guarantee',
    '/seo-audit',
  ];

  mainPages.forEach(page => {
    urls.push({
      loc: `${BASE_URL}${page}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.9,
    });
  });

  // Service pages - high priority
  const services = [
    '/services/managed-local-seo',
    '/services/managed-google-business-profile',
    '/services/managed-google-ads',
  ];

  services.forEach(service => {
    urls.push({
      loc: `${BASE_URL}${service}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.9,
    });
  });

  // Industry pages - medium-high priority
  const industries = [
    '/industries/auto-repair-shops',
    '/industries/auto-body-shops',
    '/industries/tire-shops',
    '/industries/oil-change-services',
    '/industries/transmission-repair',
    '/industries/brake-repair-shops',
    '/industries/muffler-exhaust-shops',
    '/industries/car-dealerships',
    '/industries/auto-classic-shops',
    '/industries/auto-collision-paint',
    '/industries/auto-custom-shops',
    '/industries/auto-detailing-shops',
    '/industries/auto-smog-check',
    '/industries/auto-sound-shops',
  ];

  industries.forEach(industry => {
    urls.push({
      loc: `${BASE_URL}${industry}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.8,
    });
  });

  // Location pages - medium-high priority
  const locations = [
    '/locations/los-angeles',
    '/locations/burbank',
    '/locations/hollywood',
    '/locations/pasadena',
    '/locations/santa-monica',
    '/locations/torrance',
    '/locations/van-nuys',
    '/locations/west-la',
  ];

  locations.forEach(location => {
    urls.push({
      loc: `${BASE_URL}${location}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.8,
    });
  });

  // Blog posts - medium priority, updated more frequently
  const blogPosts = [
    '/blog/seo-for-auto-shops',
    '/blog/google-business-profile-optimization',
    '/blog/local-seo-strategies',
    '/blog/automotive-digital-marketing-strategy',
    '/blog/google-ads-for-auto-shops',
    '/blog/auto-shop-website-design',
    '/blog/online-reputation-management',
    '/blog/content-marketing-for-auto-shops',
    '/blog/social-media-marketing-auto-shops',
    '/blog/top-10-benefits-of-seo-for-auto-body-shops',
  ];

  blogPosts.forEach(post => {
    urls.push({
      loc: `${BASE_URL}${post}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.7,
    });
  });

  // Legal pages - low priority
  const legalPages = [
    '/privacy-policy',
    '/terms-of-service',
    '/cancellation-policy',
    '/thank-you',
  ];

  legalPages.forEach(page => {
    urls.push({
      loc: `${BASE_URL}${page}`,
      lastmod: today,
      changefreq: 'yearly',
      priority: 0.3,
    });
  });

  // Generate XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  urls.forEach(url => {
    xml += '  <url>\n';
    xml += `    <loc>${url.loc}</loc>\n`;
    if (url.lastmod) {
      xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
    }
    if (url.changefreq) {
      xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
    }
    if (url.priority !== undefined) {
      xml += `    <priority>${url.priority.toFixed(1)}</priority>\n`;
    }
    xml += '  </url>\n';
  });

  xml += '</urlset>';

  return xml;
}

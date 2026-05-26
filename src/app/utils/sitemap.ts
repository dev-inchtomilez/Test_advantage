/**
 * ============================================
 * SITEMAP CONFIGURATION
 * ============================================
 * All routes for the AdvantEdge website
 * Used for navigation, SEO, and indexing
 * ============================================
 */

export interface RouteConfig {
  path: string;
  name: string;
  description: string;
  priority: number; // 0.0 to 1.0 for SEO
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}

export const routes: RouteConfig[] = [
  // Main Pages
  {
    path: '/',
    name: 'Home',
    description: 'Strategic Marketing Consultancy | AdvantEdge',
    priority: 1.0,
    changefreq: 'weekly',
  },
  {
    path: '/about',
    name: 'About Us',
    description: 'Learn about AdvantEdge and our strategic marketing expertise',
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    path: '/services',
    name: 'Services',
    description: 'Comprehensive marketing services from strategy to execution',
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    path: '/industries',
    name: 'Industries',
    description: 'Industry expertise across technology, healthcare, finance, and more',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/case-studies',
    name: 'Case Studies',
    description: 'Real results and success stories from our marketing engagements',
    priority: 0.8,
    changefreq: 'weekly',
  },
  {
    path: '/configurator',
    name: 'Service Configurator',
    description: 'Configure your custom marketing service package',
    priority: 0.7,
    changefreq: 'monthly',
  },
  {
    path: '/contact',
    name: 'Contact',
    description: 'Get in touch with AdvantEdge for a consultation',
    priority: 0.9,
    changefreq: 'monthly',
  },
  
  // Service Detail Pages
  {
    path: '/services/strategic-planning',
    name: 'Strategic Planning',
    description: 'Comprehensive marketing strategy development and go-to-market planning',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/services/brand-development',
    name: 'Brand Development',
    description: 'Brand strategy, identity design, and positioning services',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/services/digital-marketing',
    name: 'Digital Marketing',
    description: 'SEO, PPC, social media, and digital advertising services',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/services/content-strategy',
    name: 'Content Strategy',
    description: 'Content marketing, storytelling, and content creation services',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/services/pr-communications',
    name: 'PR & Communications',
    description: 'Public relations, media relations, and corporate communications',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/services/analytics-optimization',
    name: 'Analytics & Optimization',
    description: 'Marketing analytics, performance tracking, and conversion optimization',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/services/ai-marketing-solutions',
    name: 'AI Marketing Solutions',
    description: 'AI-powered marketing automation, predictive analytics, and machine learning optimization',
    priority: 0.8,
    changefreq: 'monthly',
  },
];

// Group routes by category
export const routesByCategory = {
  main: routes.filter(r => !r.path.includes('/services/') && r.path !== '/configurator'),
  services: routes.filter(r => r.path.includes('/services/')),
  tools: routes.filter(r => r.path === '/configurator'),
};

// Get route config by path
export const getRouteConfig = (path: string): RouteConfig | undefined => {
  return routes.find(r => r.path === path);
};

// Generate XML sitemap (for SEO)
export const generateXMLSitemap = (baseUrl: string = 'https://onemen.in'): string => {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const xmlFooter = '</urlset>';
  
  const urls = routes.map(route => `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('');
  
  return xmlHeader + urls + '\n' + xmlFooter;
};
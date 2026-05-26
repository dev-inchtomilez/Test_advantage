/**
 * ============================================
 * CENTRALIZED SEO CONFIGURATION
 * ============================================
 * Complete SEO metadata and structured data
 * for all pages in the AdvantEdge website
 * ============================================
 */

export const SITE_CONFIG = {
  name: 'AdvantEdge',
  url: 'https://onemen.in',
  tagline: 'Strategic Marketing Consultancy',
  description: 'AdvantEdge delivers strategic marketing planning, brand development, digital marketing, and analytics services that drive measurable business growth for executive-level clients.',
  email: 'hello@onemen.in',
  phone: '+1-555-123-4567',
  address: {
    street: '123 Business Avenue',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    country: 'US',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/advantedge',
    twitter: 'https://twitter.com/advantedge',
    facebook: 'https://www.facebook.com/advantedge',
  },
};

// Page-specific SEO metadata
export const PAGE_SEO = {
  home: {
    title: 'AdvantEdge — Strategic Marketing Consultancy',
    description: 'Transform your brand with data-driven marketing strategies. Expert consultancy in strategic planning, brand development, digital marketing, and analytics.',
    keywords: ['marketing consultancy', 'strategic planning', 'brand development', 'digital marketing', 'marketing ROI', 'B2B marketing', 'executive marketing'],
    ogImage: `${SITE_CONFIG.url}/og-home.png`,
  },
  about: {
    title: 'About Us — AdvantEdge Marketing Consultancy',
    description: 'Meet the strategic marketing experts at AdvantEdge. Our team brings decades of experience from top consultancies to help your business grow.',
    keywords: ['marketing consultancy team', 'strategic marketing experts', 'marketing professionals', 'consulting expertise'],
    ogImage: `${SITE_CONFIG.url}/og-about.png`,
  },
  services: {
    title: 'Marketing Services — AdvantEdge',
    description: 'Comprehensive marketing services from strategy to execution. Strategic planning, brand development, digital marketing, content strategy, PR, analytics, and AI solutions.',
    keywords: ['marketing services', 'consulting services', 'strategic planning', 'digital marketing services', 'brand development services'],
    ogImage: `${SITE_CONFIG.url}/og-services.png`,
  },
  industries: {
    title: 'Industries We Serve — AdvantEdge',
    description: 'Specialized marketing expertise across technology, healthcare, finance, retail, manufacturing, and professional services industries.',
    keywords: ['B2B marketing', 'industry expertise', 'technology marketing', 'healthcare marketing', 'financial services marketing'],
    ogImage: `${SITE_CONFIG.url}/og-industries.png`,
  },
  caseStudies: {
    title: 'Case Studies & Success Stories — AdvantEdge',
    description: 'Real results from our marketing engagements. Explore how we\'ve helped leading companies achieve measurable business growth.',
    keywords: ['marketing case studies', 'success stories', 'marketing ROI', 'client results', 'marketing performance'],
    ogImage: `${SITE_CONFIG.url}/og-case-studies.png`,
  },
  contact: {
    title: 'Contact Us — AdvantEdge Marketing Consultancy',
    description: 'Get in touch with AdvantEdge for a consultation. Let\'s discuss how we can help accelerate your marketing performance.',
    keywords: ['contact marketing consultancy', 'marketing consultation', 'get in touch', 'marketing inquiry'],
    ogImage: `${SITE_CONFIG.url}/og-contact.png`,
  },
  configurator: {
    title: 'Service Configurator — AdvantEdge',
    description: 'Configure your custom marketing service package. Select the services that best fit your business needs and budget.',
    keywords: ['marketing services configurator', 'custom marketing package', 'marketing services pricing'],
    ogImage: `${SITE_CONFIG.url}/og-configurator.png`,
  },
};

// Service-specific SEO metadata
export const SERVICE_SEO = {
  strategicPlanning: {
    title: 'Strategic Marketing Planning — AdvantEdge',
    description: 'Comprehensive marketing strategy development, market analysis, competitive intelligence, and go-to-market planning that drives business growth.',
    keywords: ['strategic planning', 'marketing strategy', 'go-to-market strategy', 'market analysis', 'competitive intelligence'],
    ogImage: `${SITE_CONFIG.url}/og-strategic-planning.png`,
    schema: {
      name: 'Strategic Marketing Planning',
      description: 'Comprehensive marketing strategy development including market analysis, competitive intelligence, and go-to-market planning',
      serviceType: 'Marketing Strategy Consulting',
    },
  },
  brandDevelopment: {
    title: 'Brand Development Services — AdvantEdge',
    description: 'Brand strategy, identity design, positioning, messaging, and brand guidelines that differentiate your business and resonate with your audience.',
    keywords: ['brand development', 'brand strategy', 'brand identity', 'brand positioning', 'brand messaging'],
    ogImage: `${SITE_CONFIG.url}/og-brand-development.png`,
    schema: {
      name: 'Brand Development Services',
      description: 'Brand strategy, identity design, positioning, messaging, and brand guidelines that differentiate and resonate',
      serviceType: 'Brand Development Consulting',
    },
  },
  digitalMarketing: {
    title: 'Digital Marketing Services — AdvantEdge',
    description: 'Expert SEO, PPC, social media marketing, email marketing, and digital advertising services that drive traffic, leads, and revenue.',
    keywords: ['digital marketing', 'SEO services', 'PPC management', 'social media marketing', 'email marketing', 'digital advertising'],
    ogImage: `${SITE_CONFIG.url}/og-digital-marketing.png`,
    schema: {
      name: 'Digital Marketing Services',
      description: 'SEO, PPC, social media marketing, email marketing, and digital advertising services that drive results',
      serviceType: 'Digital Marketing Services',
    },
  },
  contentStrategy: {
    title: 'Content Strategy & Marketing — AdvantEdge',
    description: 'Strategic content planning, creation, and distribution across blogs, whitepapers, video, and social media to engage your audience.',
    keywords: ['content strategy', 'content marketing', 'content creation', 'storytelling', 'content distribution'],
    ogImage: `${SITE_CONFIG.url}/og-content-strategy.png`,
    schema: {
      name: 'Content Strategy & Marketing',
      description: 'Content strategy, creation, and distribution across blogs, whitepapers, video, and social media',
      serviceType: 'Content Marketing Services',
    },
  },
  prCommunications: {
    title: 'PR & Communications Services — AdvantEdge',
    description: 'Public relations, media relations, crisis communications, and thought leadership programs that build your reputation and visibility.',
    keywords: ['public relations', 'PR services', 'media relations', 'crisis communications', 'thought leadership'],
    ogImage: `${SITE_CONFIG.url}/og-pr-communications.png`,
    schema: {
      name: 'PR & Communications',
      description: 'Public relations, media relations, crisis communications, and thought leadership programs',
      serviceType: 'Public Relations Services',
    },
  },
  analyticsOptimization: {
    title: 'Analytics & Optimization Services — AdvantEdge',
    description: 'Marketing analytics, performance tracking, conversion optimization, and data-driven insights that maximize your marketing ROI.',
    keywords: ['marketing analytics', 'performance tracking', 'conversion optimization', 'marketing ROI', 'data analytics'],
    ogImage: `${SITE_CONFIG.url}/og-analytics-optimization.png`,
    schema: {
      name: 'Analytics & Optimization',
      description: 'Marketing analytics, performance tracking, conversion optimization, and data-driven decision making',
      serviceType: 'Marketing Analytics Services',
    },
  },
  aiMarketing: {
    title: 'AI Marketing Solutions — AdvantEdge',
    description: 'Cutting-edge AI-powered marketing automation, predictive analytics, machine learning optimization, and intelligent personalization.',
    keywords: ['AI marketing', 'marketing automation', 'predictive analytics', 'machine learning', 'marketing AI', 'intelligent personalization'],
    ogImage: `${SITE_CONFIG.url}/og-ai-marketing.png`,
    schema: {
      name: 'AI Marketing Solutions',
      description: 'AI-powered marketing automation, predictive analytics, machine learning optimization, and intelligent personalization',
      serviceType: 'AI Marketing Solutions',
    },
  },
};

// FAQ data for structured data
export const FAQ_DATA = {
  home: [
    {
      question: 'What makes AdvantEdge different from other marketing consultancies?',
      answer: 'AdvantEdge combines strategic thinking from top-tier consultancies with hands-on execution expertise. We deliver measurable results through data-driven strategies and focus on long-term business growth rather than quick wins.',
    },
    {
      question: 'What industries does AdvantEdge serve?',
      answer: 'We serve technology, healthcare, financial services, retail, manufacturing, professional services, and education industries. Our team has deep expertise across B2B and B2C markets.',
    },
    {
      question: 'How long does a typical engagement last?',
      answer: 'Engagements typically range from 3-12 months depending on scope and objectives. We offer both project-based and ongoing retainer relationships tailored to your needs.',
    },
    {
      question: 'What results can I expect from working with AdvantEdge?',
      answer: 'Our clients typically see 40-60% improvement in key marketing metrics including lead generation, conversion rates, and marketing ROI within the first 6 months of engagement.',
    },
  ],
  services: [
    {
      question: 'What services does AdvantEdge offer?',
      answer: 'We offer strategic planning, brand development, digital marketing, content strategy, PR & communications, analytics & optimization, and AI marketing solutions.',
    },
    {
      question: 'Can I engage AdvantEdge for a single service?',
      answer: 'Yes, our services are modular and can be engaged individually or as an integrated solution. We customize our approach based on your specific needs and budget.',
    },
    {
      question: 'Do you provide ongoing support after the initial engagement?',
      answer: 'Yes, we offer ongoing support through retainer arrangements, quarterly strategy reviews, and on-demand consulting hours.',
    },
  ],
};

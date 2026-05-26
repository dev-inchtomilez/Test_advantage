/**
 * ============================================
 * SEO META TAGS COMPONENT
 * ============================================
 * Dynamic meta tags for SEO and social sharing
 * ============================================
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { getRouteConfig } from '../../utils/sitemap';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  type?: 'website' | 'article';
  canonicalUrl?: string;
}

export function SEO({
  title,
  description,
  keywords = [],
  image = '/og-image.png',
  type = 'website',
  canonicalUrl,
}: SEOProps) {
  const location = useLocation();
  const routeConfig = getRouteConfig(location.pathname);
  
  // Use provided values or fall back to route config
  const pageTitle = title || routeConfig?.name || 'AdvantEdge';
  const pageDescription = description || routeConfig?.description || 'Strategic Marketing Consultancy';
  const fullTitle = `${pageTitle} | AdvantEdge`;
  const baseUrl = 'https://onemen.in';
  const url = canonicalUrl || `${baseUrl}${location.pathname}`;
  const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;
  
  // Default keywords
  const defaultKeywords = [
    'marketing consultancy',
    'strategic planning',
    'brand development',
    'digital marketing',
    'AdvantEdge',
  ];
  
  const allKeywords = [...new Set([...defaultKeywords, ...keywords])].join(', ');
  
  useEffect(() => {
    // Update document title
    document.title = fullTitle;
    
    // Update meta tags
    updateMetaTag('description', pageDescription);
    updateMetaTag('keywords', allKeywords);
    
    // Open Graph tags
    updateMetaTag('og:title', fullTitle, 'property');
    updateMetaTag('og:description', pageDescription, 'property');
    updateMetaTag('og:type', type, 'property');
    updateMetaTag('og:url', url, 'property');
    updateMetaTag('og:image', imageUrl, 'property');
    updateMetaTag('og:site_name', 'AdvantEdge', 'property');
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:title', fullTitle, 'name');
    updateMetaTag('twitter:description', pageDescription, 'name');
    updateMetaTag('twitter:image', imageUrl, 'name');
    
    // Canonical URL
    updateCanonicalLink(url);
    
  }, [fullTitle, pageDescription, allKeywords, type, url, imageUrl]);
  
  return null; // This component doesn't render anything
}

// Helper function to update or create meta tags
function updateMetaTag(key: string, value: string, attribute: 'name' | 'property' = 'name') {
  let element = document.querySelector(`meta[${attribute}="${key}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', value);
}

// Helper function to update or create canonical link
function updateCanonicalLink(url: string) {
  let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  
  element.href = url;
}

// Page-specific SEO configurations
export const pageSEO = {
  home: {
    title: 'Strategic Marketing Consultancy',
    description: 'AdvantEdge delivers strategic marketing planning, brand development, digital marketing, and analytics services that drive measurable business growth.',
    keywords: ['marketing consultancy', 'strategic planning', 'brand development', 'digital marketing', 'marketing ROI'],
  },
  about: {
    title: 'About Us',
    description: 'Learn about AdvantEdge\'s team of strategic marketing experts and our proven methodology for driving business growth.',
    keywords: ['marketing experts', 'strategic consultancy', 'marketing team', 'marketing methodology'],
  },
  services: {
    title: 'Marketing Services',
    description: 'Comprehensive marketing services including strategic planning, brand development, digital marketing, content strategy, PR, and analytics.',
    keywords: ['marketing services', 'strategic planning', 'brand development', 'digital marketing services'],
  },
  industries: {
    title: 'Industries We Serve',
    description: 'Marketing expertise across technology, healthcare, financial services, manufacturing, retail, and professional services industries.',
    keywords: ['industry expertise', 'B2B marketing', 'technology marketing', 'healthcare marketing'],
  },
  caseStudies: {
    title: 'Case Studies & Success Stories',
    description: 'Real results from our marketing engagements including revenue growth, market share gains, and improved brand awareness.',
    keywords: ['marketing case studies', 'marketing results', 'marketing ROI', 'success stories'],
  },
  contact: {
    title: 'Contact Us',
    description: 'Get in touch with AdvantEdge for a consultation. Let\'s discuss how we can help drive your marketing success.',
    keywords: ['contact', 'consultation', 'marketing consultation', 'get in touch'],
  },
  strategicPlanning: {
    title: 'Strategic Marketing Planning',
    description: 'Comprehensive marketing strategy development including market analysis, competitive intelligence, and go-to-market planning.',
    keywords: ['strategic planning', 'marketing strategy', 'go-to-market strategy', 'market analysis'],
  },
  brandDevelopment: {
    title: 'Brand Development Services',
    description: 'Brand strategy, identity design, positioning, messaging, and brand guidelines that differentiate and resonate.',
    keywords: ['brand development', 'brand strategy', 'brand identity', 'brand positioning'],
  },
  digitalMarketing: {
    title: 'Digital Marketing Services',
    description: 'SEO, PPC, social media marketing, email marketing, and digital advertising services that drive results.',
    keywords: ['digital marketing', 'SEO', 'PPC', 'social media marketing', 'email marketing'],
  },
  contentStrategy: {
    title: 'Content Strategy & Marketing',
    description: 'Content strategy, creation, and distribution across blogs, whitepapers, video, and social media.',
    keywords: ['content strategy', 'content marketing', 'content creation', 'storytelling'],
  },
  prCommunications: {
    title: 'PR & Communications',
    description: 'Public relations, media relations, crisis communications, and thought leadership programs.',
    keywords: ['public relations', 'PR services', 'media relations', 'corporate communications'],
  },
  analyticsOptimization: {
    title: 'Analytics & Optimization',
    description: 'Marketing analytics, performance tracking, conversion optimization, and data-driven decision making.',
    keywords: ['marketing analytics', 'conversion optimization', 'marketing ROI', 'performance tracking'],
  },
  aiMarketing: {
    title: 'AI Marketing Solutions',
    description: 'AI-powered marketing automation, predictive analytics, machine learning optimization, and intelligent personalization at scale.',
    keywords: ['AI marketing', 'machine learning', 'marketing automation', 'predictive analytics', 'AI personalization', 'chatbots', 'marketing AI'],
  },
};
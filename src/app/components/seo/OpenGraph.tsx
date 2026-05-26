/**
 * ============================================
 * OPEN GRAPH & SOCIAL META TAGS
 * ============================================
 * Enhanced social sharing meta tags for all platforms.
 * Domain: onemen.in
 * ============================================
 */

import { useEffect } from 'react';

const SITE_URL = 'https://onemen.in';

interface OpenGraphProps {
  title: string;
  description: string;
  image: string;
  url: string;
  type?: 'website' | 'article';
  siteName?: string;
  locale?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
}

export function OpenGraph({
  title,
  description,
  image,
  url,
  type = 'website',
  siteName = 'AdvantEdge',
  locale = 'en_US',
  twitterCard = 'summary_large_image',
  twitterSite = '@advantedge',
  twitterCreator = '@advantedge',
}: OpenGraphProps) {
  useEffect(() => {
    // Open Graph Meta Tags
    updateMetaTag('og:type', type, 'property');
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', image, 'property');
    updateMetaTag('og:image:secure_url', image, 'property');
    updateMetaTag('og:image:width', '1200', 'property');
    updateMetaTag('og:image:height', '630', 'property');
    updateMetaTag('og:image:alt', title, 'property');
    updateMetaTag('og:url', url, 'property');
    updateMetaTag('og:site_name', siteName, 'property');
    updateMetaTag('og:locale', locale, 'property');

    // Twitter Card Meta Tags
    updateMetaTag('twitter:card', twitterCard, 'name');
    updateMetaTag('twitter:site', twitterSite, 'name');
    updateMetaTag('twitter:creator', twitterCreator, 'name');
    updateMetaTag('twitter:title', title, 'name');
    updateMetaTag('twitter:description', description, 'name');
    updateMetaTag('twitter:image', image, 'name');
    updateMetaTag('twitter:image:alt', title, 'name');

    // LinkedIn specific
    updateMetaTag('og:image:type', 'image/jpeg', 'property');
  }, [title, description, image, url, type, siteName, locale, twitterCard, twitterSite, twitterCreator]);

  return null;
}

function updateMetaTag(key: string, value: string, attribute: 'name' | 'property' = 'name') {
  let element = document.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', value);
}

/**
 * Pre-configured Open Graph data for common pages.
 * Domain: onemen.in
 */
export const openGraphData = {
  home: {
    title: 'AdvantEdge — Strategic Marketing Consultancy',
    description: 'Transform your marketing strategy with data-driven insights and proven methodologies. AdvantEdge delivers measurable ROI.',
    image: `${SITE_URL}/og-image.png`,
    url: SITE_URL,
  },
  about: {
    title: 'About AdvantEdge — Marketing Experts',
    description: 'Meet the team of strategic marketing consultants driving business growth through data-driven strategies.',
    image: `${SITE_URL}/og-image.png`,
    url: `${SITE_URL}/about`,
  },
  services: {
    title: 'Marketing Services — AdvantEdge',
    description: 'Comprehensive marketing services from strategy to execution. Strategic planning, brand development, digital marketing, and more.',
    image: `${SITE_URL}/og-image.png`,
    url: `${SITE_URL}/services`,
  },
  industries: {
    title: 'Industries We Serve — AdvantEdge',
    description: 'Marketing expertise across technology, healthcare, financial services, manufacturing, retail, and professional services.',
    image: `${SITE_URL}/og-image.png`,
    url: `${SITE_URL}/industries`,
  },
  caseStudies: {
    title: 'Case Studies & Results — AdvantEdge',
    description: 'Real results from our marketing engagements including revenue growth, market share gains, and improved brand awareness.',
    image: `${SITE_URL}/og-image.png`,
    url: `${SITE_URL}/case-studies`,
  },
  contact: {
    title: 'Contact AdvantEdge — Get Started Today',
    description: 'Ready to transform your marketing? Get in touch with our team for a consultation.',
    image: `${SITE_URL}/og-image.png`,
    url: `${SITE_URL}/contact`,
  },
  configurator: {
    title: 'Service Configurator — AdvantEdge',
    description: 'Configure your custom marketing service package tailored to your business needs.',
    image: `${SITE_URL}/og-image.png`,
    url: `${SITE_URL}/configurator`,
  },
};

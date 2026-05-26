/**
 * ============================================
 * STRUCTURED DATA (SCHEMA.ORG) COMPONENT
 * ============================================
 * JSON-LD structured data for rich snippets and SEO
 * ============================================
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router';

interface StructuredDataProps {
  type: 'organization' | 'website' | 'service' | 'article' | 'breadcrumb' | 'faq' | 'review';
  data: any;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const location = useLocation();
  
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = `structured-data-${type}`;
    
    let structuredData = {};
    
    switch (type) {
      case 'organization':
        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: data.name || 'AdvantEdge',
          url: data.url || 'https://onemen.in',
          logo: data.logo || 'https://onemen.in/logo.png',
          description: data.description || 'Strategic Marketing Consultancy',
          address: data.address && {
            '@type': 'PostalAddress',
            streetAddress: data.address.street,
            addressLocality: data.address.city,
            addressRegion: data.address.state,
            postalCode: data.address.zip,
            addressCountry: data.address.country,
          },
          contactPoint: data.contactPoint && {
            '@type': 'ContactPoint',
            telephone: data.contactPoint.phone,
            contactType: data.contactPoint.type || 'customer service',
            email: data.contactPoint.email,
          },
          sameAs: data.socialLinks || [],
        };
        break;
        
      case 'website':
        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: data.name || 'AdvantEdge',
          url: data.url || 'https://onemen.in',
          description: data.description,
          publisher: {
            '@type': 'Organization',
            name: data.publisherName || 'AdvantEdge',
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${data.url || 'https://onemen.in'}/search?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
          },
        };
        break;
        
      case 'service':
        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: data.name,
          description: data.description,
          provider: {
            '@type': 'Organization',
            name: 'AdvantEdge',
            url: 'https://onemen.in',
          },
          serviceType: data.serviceType,
          areaServed: data.areaServed || 'Worldwide',
          hasOfferCatalog: data.offers && {
            '@type': 'OfferCatalog',
            name: data.offersName,
            itemListElement: data.offers.map((offer: any) => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: offer.name,
                description: offer.description,
              },
            })),
          },
        };
        break;
        
      case 'article':
        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: data.headline,
          description: data.description,
          image: data.image,
          datePublished: data.datePublished,
          dateModified: data.dateModified || data.datePublished,
          author: {
            '@type': 'Organization',
            name: 'AdvantEdge',
          },
          publisher: {
            '@type': 'Organization',
            name: 'AdvantEdge',
            logo: {
              '@type': 'ImageObject',
              url: 'https://onemen.in/logo.png',
            },
          },
        };
        break;
        
      case 'breadcrumb':
        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: data.items.map((item: any, index: number) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        };
        break;
        
      case 'faq':
        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: data.faqs.map((faq: any) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        };
        break;
        
      case 'review':
        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'Review',
          itemReviewed: {
            '@type': 'Organization',
            name: 'AdvantEdge',
          },
          author: {
            '@type': 'Person',
            name: data.author,
          },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: data.rating,
            bestRating: '5',
          },
          reviewBody: data.review,
        };
        break;
    }
    
    script.text = JSON.stringify(structuredData);
    
    // Remove existing script with same ID
    const existing = document.getElementById(`structured-data-${type}`);
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [type, data, location]);
  
  return null;
}

// Organization schema data
export const organizationData = {
  name: 'AdvantEdge',
  url: 'https://onemen.in',
  logo: 'https://onemen.in/logo.png',
  description: 'Strategic marketing consultancy delivering data-driven solutions for business growth',
  address: {
    street: '123 Business Avenue',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    country: 'US',
  },
  contactPoint: {
    phone: '+1-555-123-4567',
    type: 'customer service',
    email: 'contact@onemen.in',
  },
  socialLinks: [
    'https://www.linkedin.com/company/advantedge',
    'https://twitter.com/advantedge',
    'https://www.facebook.com/advantedge',
  ],
};

// Service schemas for each service page
export const serviceSchemas = {
  strategicPlanning: {
    name: 'Strategic Marketing Planning',
    description: 'Comprehensive marketing strategy development including market analysis, competitive intelligence, and go-to-market planning',
    serviceType: 'Marketing Strategy Consulting',
    areaServed: 'Worldwide',
  },
  brandDevelopment: {
    name: 'Brand Development Services',
    description: 'Brand strategy, identity design, positioning, messaging, and brand guidelines that differentiate and resonate',
    serviceType: 'Brand Development Consulting',
    areaServed: 'Worldwide',
  },
  digitalMarketing: {
    name: 'Digital Marketing Services',
    description: 'SEO, PPC, social media marketing, email marketing, and digital advertising services that drive results',
    serviceType: 'Digital Marketing Services',
    areaServed: 'Worldwide',
  },
  contentStrategy: {
    name: 'Content Strategy & Marketing',
    description: 'Content strategy, creation, and distribution across blogs, whitepapers, video, and social media',
    serviceType: 'Content Marketing Services',
    areaServed: 'Worldwide',
  },
  prCommunications: {
    name: 'PR & Communications',
    description: 'Public relations, media relations, crisis communications, and thought leadership programs',
    serviceType: 'Public Relations Services',
    areaServed: 'Worldwide',
  },
  analyticsOptimization: {
    name: 'Analytics & Optimization',
    description: 'Marketing analytics, performance tracking, conversion optimization, and data-driven decision making',
    serviceType: 'Marketing Analytics Services',
    areaServed: 'Worldwide',
  },
  aiMarketing: {
    name: 'AI Marketing Solutions',
    description: 'AI-powered marketing automation, predictive analytics, machine learning optimization, and intelligent personalization',
    serviceType: 'AI Marketing Solutions',
    areaServed: 'Worldwide',
  },
};

// Breadcrumb helper function
export function generateBreadcrumbs(pathname: string) {
  const paths = pathname.split('/').filter(Boolean);
  const baseUrl = 'https://onemen.in';
  
  const items = [
    { name: 'Home', url: baseUrl },
  ];
  
  let currentPath = '';
  paths.forEach((path, index) => {
    currentPath += `/${path}`;
    const name = path
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    items.push({
      name,
      url: `${baseUrl}${currentPath}`,
    });
  });
  
  return { items };
}
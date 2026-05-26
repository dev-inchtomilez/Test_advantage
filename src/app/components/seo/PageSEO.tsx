/**
 * ============================================
 * PAGE SEO COMPONENT
 * ============================================
 * All-in-one SEO component that handles:
 * - Meta tags
 * - Open Graph
 * - Twitter Cards
 * - Structured Data (schema.org)
 * - Breadcrumbs
 * ============================================
 */

import { StructuredData, generateBreadcrumbs, organizationData } from './StructuredData';
import { SEO } from './SEO';
import { SITE_CONFIG, FAQ_DATA } from '../../utils/seo-config';

interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  path: string;
  type?: 'website' | 'article';
  showFAQ?: boolean;
  faqKey?: keyof typeof FAQ_DATA;
  serviceSchema?: {
    name: string;
    description: string;
    serviceType: string;
  };
}

export function PageSEO({
  title,
  description,
  keywords = [],
  ogImage = `${SITE_CONFIG.url}/og-image.png`,
  path,
  type = 'website',
  showFAQ = false,
  faqKey,
  serviceSchema,
}: PageSEOProps) {
  return (
    <>
      {/* Standard Meta Tags */}
      <SEO
        title={title}
        description={description}
        canonical={`${SITE_CONFIG.url}${path}`}
        ogImage={ogImage}
        keywords={keywords.join(', ')}
      />

      {/* Breadcrumb Structured Data */}
      <StructuredData type="breadcrumb" data={generateBreadcrumbs(path)} />

      {/* Organization Structured Data (only on home page) */}
      {path === '/' && <StructuredData type="organization" data={organizationData} />}

      {/* Service Structured Data */}
      {serviceSchema && (
        <StructuredData
          type="service"
          data={{
            ...serviceSchema,
            areaServed: 'Worldwide',
          }}
        />
      )}

      {/* FAQ Structured Data */}
      {showFAQ && faqKey && FAQ_DATA[faqKey] && (
        <StructuredData
          type="faq"
          data={{
            faqs: FAQ_DATA[faqKey],
          }}
        />
      )}
    </>
  );
}

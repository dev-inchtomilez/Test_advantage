/**
 * ============================================
 * SEMANTIC HEADING STRUCTURE UTILITIES
 * ============================================
 * Utilities for maintaining proper H1-H6 hierarchy
 * across all pages for SEO optimization
 * ============================================
 */

import React from 'react';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Semantic Heading Component
 * Automatically renders the correct heading level (H1-H6)
 */
export function Heading({ level = 2, children, className = '', style, ...props }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  return React.createElement(
    Tag,
    { className, style, ...props },
    children
  );
}

/**
 * Page Title (H1) - Should be used ONCE per page
 */
export function PageTitle({ children, className = '', style, ...props }: Omit<HeadingProps, 'level'>) {
  return (
    <h1 className={className} style={style} {...props}>
      {children}
    </h1>
  );
}

/**
 * Section Heading (H2) - Main sections
 */
export function SectionHeading({ children, className = '', style, ...props }: Omit<HeadingProps, 'level'>) {
  return (
    <h2 className={className} style={style} {...props}>
      {children}
    </h2>
  );
}

/**
 * Subsection Heading (H3) - Subsections within main sections
 */
export function SubsectionHeading({ children, className = '', style, ...props }: Omit<HeadingProps, 'level'>) {
  return (
    <h3 className={className} style={style} {...props}>
      {children}
    </h3>
  );
}

/**
 * Component Heading (H4) - Individual components/features
 */
export function ComponentHeading({ children, className = '', style, ...props }: Omit<HeadingProps, 'level'>) {
  return (
    <h4 className={className} style={style} {...props}>
      {children}
    </h4>
  );
}

/**
 * Detail Heading (H5) - Detailed sections
 */
export function DetailHeading({ children, className = '', style, ...props }: Omit<HeadingProps, 'level'>) {
  return (
    <h5 className={className} style={style} {...props}>
      {children}
    </h5>
  );
}

/**
 * Minor Heading (H6) - Minor details
 */
export function MinorHeading({ children, className = '', style, ...props }: Omit<HeadingProps, 'level'>) {
  return (
    <h6 className={className} style={style} {...props}>
      {children}
    </h6>
  );
}

/**
 * SEO Heading Structure Guidelines
 * 
 * Proper usage per page:
 * - H1: Page title (ONLY ONE per page) - Main topic/keyword
 * - H2: Major sections - Key topics/subtopics
 * - H3: Subsections within H2s - Supporting topics
 * - H4: Individual components/items within H3s
 * - H5: Details within H4s
 * - H6: Fine details within H5s
 * 
 * Rules:
 * 1. Never skip heading levels (H2 → H4 without H3)
 * 2. Always use only ONE H1 per page
 * 3. Use headings in hierarchical order
 * 4. Include relevant keywords naturally
 * 5. Keep headings concise and descriptive
 * 
 * Example structure:
 * ```
 * H1: AI Marketing Solutions (page title)
 *   H2: Key Features (main section)
 *     H3: Predictive Analytics (subsection)
 *       H4: Customer Behavior Prediction (feature)
 *         H5: Real-time Analysis (detail)
 *   H2: Benefits (main section)
 *     H3: Increased ROI (subsection)
 *   H2: Case Studies (main section)
 * ```
 */

export const HEADING_GUIDELINES = {
  h1: {
    usage: 'Page title only (ONE per page)',
    example: 'AI Marketing Solutions | AdvantEdge',
    seo: 'Should contain primary keyword and brand',
  },
  h2: {
    usage: 'Major section headings',
    example: 'Key Features, Benefits, Process, Deliverables',
    seo: 'Should contain secondary keywords',
  },
  h3: {
    usage: 'Subsections within H2',
    example: 'Predictive Analytics, Marketing Automation',
    seo: 'Should contain tertiary keywords and long-tail variations',
  },
  h4: {
    usage: 'Individual components or features',
    example: 'Real-time Campaign Optimization',
    seo: 'Descriptive labels with keywords where natural',
  },
  h5: {
    usage: 'Detailed sections within H4',
    example: 'Technical Specifications, Implementation Details',
    seo: 'Supportive content organization',
  },
  h6: {
    usage: 'Fine details and minor sections',
    example: 'Configuration Options, Additional Notes',
    seo: 'Minimal SEO impact, use for content organization',
  },
} as const;

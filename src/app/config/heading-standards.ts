/**
 * ============================================
 * ADVANTEDGE STANDARDIZED HEADING SYSTEM
 * ============================================
 * 
 * PROFESSIONAL, CONSISTENT TYPOGRAPHY ACROSS ALL PAGES
 * 
 * Use these standardized sizes across ALL pages:
 * - Home Page
 * - About Page
 * - Services Page
 * - Industries Page
 * - Case Studies Page
 * - Contact Page
 * - Configurator Page
 * - All Service Detail Pages
 */

export const HEADING_STANDARDS = {
  // PAGE HERO TITLES (H1)
  hero: {
    h1: 'text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight tracking-tight',
    // Example: "Marketing That Moves Business Forward"
  },

  // MAIN SECTION TITLES (H2)
  sectionTitle: {
    h2: 'text-2xl sm:text-3xl lg:text-3xl font-bold leading-tight tracking-tight',
    // Example: "Why Choose AdvantEdge", "Our Services", "Industries We Serve"
  },

  // SUBSECTION TITLES (H3)
  subsectionTitle: {
    h3: 'text-xl sm:text-2xl lg:text-2xl font-bold leading-tight',
    // Example: "Digital Marketing", "Brand Development"
  },

  // CARD/COMPONENT TITLES (H4)
  cardTitle: {
    h4: 'text-lg sm:text-xl font-bold leading-snug',
    // Example: Card headings, feature titles
  },

  // SMALL COMPONENT TITLES (H5)
  smallTitle: {
    h5: 'text-base font-bold leading-snug',
    // Example: Small cards, list items
  },

  // DESCRIPTIVE TEXT
  description: {
    large: 'text-base font-semibold leading-snug',      // Emphasis paragraphs
    medium: 'text-sm text-gray-700 leading-relaxed',     // Body text
    small: 'text-xs text-gray-600 font-medium',          // Captions, labels
  },

  // COMPACT SPACING
  spacing: {
    heroSection: 'py-12 lg:py-16',      // Hero sections
    section: 'py-10 lg:py-12',          // Standard sections
    compactSection: 'py-8 lg:py-10',    // Compact sections
  }
};

/**
 * IMPLEMENTATION CHECKLIST:
 * 
 * ✓ HOME PAGE (Home.tsx)
 *   - Hero: H1
 *   - All section titles: H2
 *   - Service cards: H3/H4
 * 
 * ✓ ABOUT PAGE (AboutPage.tsx)
 *   - Page hero: H1
 *   - Section titles: H2
 *   - Team members, values: H3/H4
 * 
 * ✓ SERVICES PAGE (ServicesPage.tsx)
 *   - Page hero: H1
 *   - Main sections: H2
 *   - Service cards: H3
 * 
 * ✓ INDUSTRIES PAGE (IndustriesPage.tsx)
 *   - Page hero: H1
 *   - Industry sections: H2
 *   - Industry cards: H3
 * 
 * ✓ CASE STUDIES PAGE (CaseStudiesPage.tsx)
 *   - Page hero: H1
 *   - Case study cards: H3
 * 
 * ✓ CONTACT PAGE (ContactPage.tsx)
 *   - Page hero: H1
 *   - Form sections: H2/H3
 * 
 * ✓ CONFIGURATOR PAGE (ConfiguratorPage.tsx)
 *   - Page hero: H1
 *   - Steps/Sections: H2/H3
 * 
 * ✓ SERVICE DETAIL PAGES (6 pages)
 *   - Page hero: H1
 *   - Main sections: H2
 *   - Feature details: H3
 */

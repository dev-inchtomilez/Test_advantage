/**
 * ============================================
 * CONFIGURATOR PAGE - Package Builder
 * ============================================
 * Refactored with Primitives System v2.0
 * Compact & crisp layout
 * ============================================
 */

import { PackageConfigurator } from '../components/PackageConfigurator';
import { PageBackground } from '../components/layout';

// SEO Components
import { PageSEO } from '../components/seo';
import { PAGE_SEO } from '../utils/seo-config';
import { ModernSectionBackground } from '../components/ModernSectionBackground';

export function ConfiguratorPage() {
  return (
    <PageBackground>
      <PageSEO
        title={PAGE_SEO.configurator.title}
        description={PAGE_SEO.configurator.description}
        keywords={PAGE_SEO.configurator.keywords}
        ogImage={PAGE_SEO.configurator.ogImage}
        path="/configurator"
      />
      <ModernSectionBackground variant="mesh-gradient-light" className="min-h-screen py-24">
        <PackageConfigurator />
      </ModernSectionBackground>
    </PageBackground>
  );
}
// NOTE: Named export only — no default export.
// routes.tsx lazy-loads this via .then(m => ({ default: m.ConfiguratorPage }))
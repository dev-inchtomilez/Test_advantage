/**
 * ============================================
 * PAGES INDEX — Named export re-exports
 * ============================================
 * All pages use named exports (export function X).
 * routes.tsx handles lazy loading directly.
 * This file is kept for any direct (non-lazy) imports.
 * ============================================
 */

// Main Pages
export { HomePage } from './Home';
export { AboutPage } from './AboutPage';
export { ServicesPage } from './ServicesPage';
export { IndustriesPage } from './IndustriesPage';
export { CaseStudiesPage } from './CaseStudiesPage';
export { ConfiguratorPage } from './ConfiguratorPage';
export { ContactPage } from './ContactPage';

// Service Detail Pages
export { StrategicPlanningPage } from './services/StrategicPlanningPage';
export { BrandDevelopmentPage } from './services/BrandDevelopmentPage';
export { DigitalMarketingPage } from './services/DigitalMarketingPage';
export { ContentStrategyPage } from './services/ContentStrategyPage';
export { PRCommunicationsPage } from './services/PRCommunicationsPage';
export { AnalyticsOptimizationPage } from './services/AnalyticsOptimizationPage';
export { default as AIMarketingSolutionsPage } from './services/AIMarketingSolutionsPage';

/**
 * ============================================
 * ADVANTEDGE — REACT ROUTER v7 ROUTING SYSTEM
 * ============================================
 * Upgraded to full React Router v7 Data Mode.
 *
 * KEY FIXES:
 *  1. ScrollRestoration → scroll-to-top on every route change
 *  2. Per-route SEO injection in PageWrapper
 *  3. Named-export bridge (.then) for all lazy pages
 *  4. Error boundaries at root + per-route level
 *  5. Future flags enabled (v7-ready)
 *  6. Proper 404 handling with NotFoundPage
 *
 * For "pages open in new tab" to work, the server
 * MUST serve index.html for any path. See:
 *   /public/.htaccess        → Apache / cPanel
 *   /vercel.json             → Vercel
 *   /netlify.toml            → Netlify
 * ============================================
 */

import { lazy, Suspense, useEffect } from 'react';
import {
  createBrowserRouter,
  Link,
  useRouteError,
  Outlet,
  ScrollRestoration,
  useLocation,
} from 'react-router';

import { Header } from './components/layout/Header';
import { MainLayout } from './components/MainLayout';
import { colors, gradients } from '../styles/design-tokens';
import { getRouteConfig } from './utils/sitemap';

// Floating UI (rendered once at root level)
import { AIChatbot } from './components/AIChatbot';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollDepthIndicator } from './components/ScrollDepthIndicator';

// ============================================
// SITE CONFIG — update this if domain changes
// ============================================
const SITE_URL = 'https://onemen.in';
const SITE_NAME = 'AdvantEdge';
const SITE_TAGLINE = 'Strategic Marketing Consultancy';

// ============================================
// PER-ROUTE SEO INJECTOR
// Updates <title>, <meta>, canonical & OG tags
// on every client-side navigation automatically.
// ============================================
function RouteHelmet() {
  const location = useLocation();
  const routeConfig = getRouteConfig(location.pathname);

  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${location.pathname === '/' ? '' : location.pathname}`;
    const pageTitle =
      location.pathname === '/'
        ? `${SITE_NAME} — ${SITE_TAGLINE}`
        : `${routeConfig?.name || 'Page'} | ${SITE_NAME}`;
    const pageDescription =
      routeConfig?.description ||
      'AdvantEdge delivers strategic marketing planning, brand development, digital marketing, and analytics services that drive measurable business growth.';

    // ── <title> ──────────────────────────────
    document.title = pageTitle;

    // ── Helper ──────────────────────────────
    const setMeta = (
      attr: 'name' | 'property',
      key: string,
      content: string,
    ) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    // ── Standard meta ────────────────────────
    setMeta('name', 'description', pageDescription);
    setMeta('name', 'robots', 'index, follow');

    // ── Open Graph ───────────────────────────
    setMeta('property', 'og:title', pageTitle);
    setMeta('property', 'og:description', pageDescription);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('property', 'og:image', `${SITE_URL}/og-image.png`);

    // ── Twitter Card ─────────────────────────
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', pageTitle);
    setMeta('name', 'twitter:description', pageDescription);
    setMeta('name', 'twitter:image', `${SITE_URL}/og-image.png`);

    // ── Canonical link ───────────────────────
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [location.pathname, routeConfig]);

  return null;
}

// ============================================
// ROOT LAYOUT — Floating UI + ScrollRestoration
// ============================================
function RootLayout() {
  return (
    <>
      {/*
        ScrollRestoration: scrolls window to top on every route change.
        Critical for page-to-page UX. Must live inside the router context.
      */}
      <ScrollRestoration />

      {/* Per-route SEO/meta injection */}
      <RouteHelmet />

      {/* Page content (lazy-loaded) */}
      <Outlet />

      {/* Floating UI — always visible across all pages */}
      <AIChatbot />
      <WhatsAppButton />
      <ScrollDepthIndicator />
    </>
  );
}

// ============================================
// LOADING SPINNER
// ============================================
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
          <div
            className="w-12 h-12 rounded-full border-4 border-t-transparent animate-spin"
            style={{
              borderColor: `${colors.brand.primary} transparent transparent transparent`,
            }}
          />
        </div>
        <p className="text-sm font-semibold" style={{ color: colors.brand.primary }}>
          Loading…
        </p>
      </div>
    </div>
  );
}

// ============================================
// ROUTE ERROR BOUNDARY
// ============================================
function RouteError() {
  const error = useRouteError() as { message?: string; status?: number };
  const is404 = error?.status === 404;

  console.error('[AdvantEdge Route Error]:', error);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md mx-auto">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)' }}
        >
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="#ef4444"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <h1
          className="text-3xl font-bold mb-4"
          style={{ color: colors.brand.primary }}
        >
          {is404 ? 'Page Not Found' : 'Something Went Wrong'}
        </h1>
        <p className="text-gray-600 mb-8 text-sm leading-relaxed">
          {is404
            ? "The page you're looking for doesn't exist or has been moved."
            : error?.message || 'An unexpected error occurred while loading this page.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-bold shadow-lg"
            style={{ background: gradients.primary }}
          >
            Go Home
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold border-2 bg-white"
            style={{ borderColor: colors.brand.primary, color: colors.brand.primary }}
          >
            Reload
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 404 PAGE
// ============================================
function NotFoundPage() {
  return (
    <>
      <Header />
      <MainLayout>
        <div className="min-h-[70vh] flex items-center justify-center px-4">
          <div className="text-center max-w-lg mx-auto">
            <h1
              className="text-8xl sm:text-9xl font-bold mb-4"
              style={{ color: colors.brand.primary }}
            >
              404
            </h1>
            <div
              className="h-1 w-20 mx-auto rounded-full mb-6"
              style={{ background: gradients.primary }}
            />
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: colors.brand.primary }}
            >
              Page Not Found
            </h2>
            <p className="text-gray-600 mb-8 text-sm sm:text-base leading-relaxed">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-bold shadow-lg"
                style={{ background: gradients.primary }}
              >
                Back to Home
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold border-2 bg-white"
                style={{ borderColor: colors.brand.primary, color: colors.brand.primary }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

// ============================================
// PAGE WRAPPER
// Header stays mounted; only page content
// triggers Suspense fallback during lazy load.
// ============================================
function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <MainLayout>
        <Suspense fallback={<PageLoader />}>{children}</Suspense>
      </MainLayout>
    </>
  );
}

// ============================================
// LAZY PAGE IMPORTS
// All pages use named exports (export function X).
// .then(m => ({ default: m.Name })) bridges
// named → default so React.lazy() works correctly.
// ============================================

// ── Main pages ─────────────────────────────
const HomePage = lazy(() =>
  import('./pages/Home').then(m => ({ default: m.HomePage })),
);
const AboutPage = lazy(() =>
  import('./pages/AboutPage').then(m => ({ default: m.AboutPage })),
);
const ServicesPage = lazy(() =>
  import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })),
);
const IndustriesPage = lazy(() =>
  import('./pages/IndustriesPage').then(m => ({ default: m.IndustriesPage })),
);
const CaseStudiesPage = lazy(() =>
  import('./pages/CaseStudiesPage').then(m => ({ default: m.CaseStudiesPage })),
);
const ContactPage = lazy(() =>
  import('./pages/ContactPage').then(m => ({ default: m.ContactPage })),
);
const ConfiguratorPage = lazy(() =>
  import('./pages/ConfiguratorPage').then(m => ({ default: m.ConfiguratorPage })),
);

// ── Service sub-pages ───────────────────────
const StrategicPlanningPage = lazy(() =>
  import('./pages/services/StrategicPlanningPage').then(m => ({
    default: m.StrategicPlanningPage,
  })),
);
const BrandDevelopmentPage = lazy(() =>
  import('./pages/services/BrandDevelopmentPage').then(m => ({
    default: m.BrandDevelopmentPage,
  })),
);
const DigitalMarketingPage = lazy(() =>
  import('./pages/services/DigitalMarketingPage').then(m => ({
    default: m.DigitalMarketingPage,
  })),
);
const ContentStrategyPage = lazy(() =>
  import('./pages/services/ContentStrategyPage').then(m => ({
    default: m.ContentStrategyPage,
  })),
);
const PRCommunicationsPage = lazy(() =>
  import('./pages/services/PRCommunicationsPage').then(m => ({
    default: m.PRCommunicationsPage,
  })),
);
const AnalyticsOptimizationPage = lazy(() =>
  import('./pages/services/AnalyticsOptimizationPage').then(m => ({
    default: m.AnalyticsOptimizationPage,
  })),
);
// AIMarketingSolutionsPage uses "export default function" — no bridge needed
const AIMarketingSolutionsPage = lazy(
  () => import('./pages/services/AIMarketingSolutionsPage'),
);

// ============================================
// ROUTER — React Router v7 Data Mode
// createBrowserRouter requires SPA rewrite rules
// on the server. All three config files are set:
//   /public/.htaccess   → Apache/cPanel
//   /vercel.json        → Vercel
//   /netlify.toml       → Netlify
// ============================================
export const router = createBrowserRouter(
  [
    {
      // Root: floating UI + ScrollRestoration + SEO
      element: <RootLayout />,
      errorElement: <RouteError />,
      children: [
        // ── Main pages ────────────────────────────────
        {
          path: '/',
          errorElement: <RouteError />,
          element: (
            <PageWrapper>
              <HomePage />
            </PageWrapper>
          ),
        },
        {
          path: '/about',
          errorElement: <RouteError />,
          element: (
            <PageWrapper>
              <AboutPage />
            </PageWrapper>
          ),
        },
        {
          path: '/services',
          errorElement: <RouteError />,
          element: (
            <PageWrapper>
              <ServicesPage />
            </PageWrapper>
          ),
        },
        {
          path: '/industries',
          errorElement: <RouteError />,
          element: (
            <PageWrapper>
              <IndustriesPage />
            </PageWrapper>
          ),
        },
        {
          path: '/case-studies',
          errorElement: <RouteError />,
          element: (
            <PageWrapper>
              <CaseStudiesPage />
            </PageWrapper>
          ),
        },
        {
          path: '/contact',
          errorElement: <RouteError />,
          element: (
            <PageWrapper>
              <ContactPage />
            </PageWrapper>
          ),
        },
        {
          path: '/configurator',
          errorElement: <RouteError />,
          element: (
            <PageWrapper>
              <ConfiguratorPage />
            </PageWrapper>
          ),
        },

        // ── Service sub-pages ─────────────────────────
        {
          path: '/services/strategic-planning',
          errorElement: <RouteError />,
          element: (
            <PageWrapper>
              <StrategicPlanningPage />
            </PageWrapper>
          ),
        },
        {
          path: '/services/brand-development',
          errorElement: <RouteError />,
          element: (
            <PageWrapper>
              <BrandDevelopmentPage />
            </PageWrapper>
          ),
        },
        {
          path: '/services/digital-marketing',
          errorElement: <RouteError />,
          element: (
            <PageWrapper>
              <DigitalMarketingPage />
            </PageWrapper>
          ),
        },
        {
          path: '/services/content-strategy',
          errorElement: <RouteError />,
          element: (
            <PageWrapper>
              <ContentStrategyPage />
            </PageWrapper>
          ),
        },
        {
          path: '/services/pr-communications',
          errorElement: <RouteError />,
          element: (
            <PageWrapper>
              <PRCommunicationsPage />
            </PageWrapper>
          ),
        },
        {
          path: '/services/analytics-optimization',
          errorElement: <RouteError />,
          element: (
            <PageWrapper>
              <AnalyticsOptimizationPage />
            </PageWrapper>
          ),
        },
        {
          path: '/services/ai-marketing-solutions',
          errorElement: <RouteError />,
          element: (
            <PageWrapper>
              <AIMarketingSolutionsPage />
            </PageWrapper>
          ),
        },

        // ── 404 catch-all ─────────────────────────────
        {
          path: '*',
          element: <NotFoundPage />,
        },
      ],
    },
  ],
  // NOTE: react-router v7 has NO "future" flags — they were v6→v7 migration flags.
  // In v7 all those behaviors are the default. Only valid option here is "basename".
  // { basename: '/' }  ← only needed if the app lives in a sub-directory
);
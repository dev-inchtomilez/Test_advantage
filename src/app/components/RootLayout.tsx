/**
 * ============================================
 * DEPRECATED — DO NOT USE
 * ============================================
 * This component is a legacy stub.
 *
 * The REAL RootLayout lives inside /src/app/routes.tsx
 * as an inline function. It is registered directly in
 * createBrowserRouter and renders:
 *   - <ScrollRestoration />
 *   - <RouteHelmet />    (per-route SEO)
 *   - <Outlet />         (page content)
 *   - <AIChatbot />
 *   - <WhatsAppButton />
 *   - <ScrollDepthIndicator />
 *
 * This file exists only so that legacy imports in
 * components/index.ts don't cause a missing-module error.
 * It does NOT render anything — it is a safe no-op stub.
 * ============================================
 */

import { Outlet } from 'react-router';

/**
 * @deprecated Use the inline RootLayout in routes.tsx instead.
 * This stub renders nothing but <Outlet /> to avoid breaking
 * any stale import that may reference this module.
 */
export function RootLayout() {
  // Intentional no-op stub. All root-level UI is handled
  // by the RootLayout function inside routes.tsx.
  return <Outlet />;
}

/**
 * ============================================
 * ADVANTEDGE — MAIN APP ENTRY
 * ============================================
 * Bootstraps the router. All routing logic,
 * layouts, and lazy loading live in routes.tsx.
 * ============================================
 */

import { RouterProvider } from 'react-router';
import { router } from './routes';
import { ScrollProgress } from './components/ScrollProgress';
import { ResourcePreload } from './components/ResourcePreload';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <>
      <ResourcePreload />
      <ScrollProgress />
      <Toaster position="top-right" richColors />
      <RouterProvider router={router} />
    </>
  );
}
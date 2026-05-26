import { ReactNode } from 'react';
import { BigFooter } from './BigFooter';

interface MainLayoutProps {
  children: ReactNode;
}

/**
 * Main Layout Wrapper
 * pt-14 = 56px matches the header h-14 (56px) exactly
 */
export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-transparent">
      {/* pt-14 = 56px to match header height (h-14 = 3.5rem = 56px) */}
      <main className="pt-14 relative bg-transparent" style={{ zIndex: 1 }}>
        {children}
      </main>
      <BigFooter />
    </div>
  );
}
/**
 * ============================================
 * PAGE BACKGROUND - Unified Background System
 * ============================================
 * Single source of truth for all page backgrounds
 * Consistent soft gradient mesh across entire website
 * ============================================
 */

import { ReactNode } from 'react';
import { gradients } from '../../../styles/design-tokens';

interface PageBackgroundProps {
  children: ReactNode;
  variant?: 'default' | 'minimal';
}

export function PageBackground({ children, variant = 'default' }: PageBackgroundProps) {
  return (
    <div className="w-full relative min-h-screen">
      {/* Unified Soft Gradient Background - Applied to ALL pages */}
      <div 
        className="fixed inset-0 -z-10"
        style={{ background: gradients.soft }}
        aria-hidden="true"
      />
      
      {/* Page Content */}
      {children}
    </div>
  );
}

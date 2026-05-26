/**
 * ============================================
 * useOptimizedScroll — Re-export shim
 * ============================================
 * All scroll logic lives in useScrollY.ts.
 * This file re-exports for backwards compatibility
 * with any existing imports.
 * ============================================
 */

export {
  useScrollState as useOptimizedScroll,
  useScrollY,
  useScrollDirection,
  useScrollProgress as useScrollProgressPercent,
  type ScrollState,
} from './useScrollY';

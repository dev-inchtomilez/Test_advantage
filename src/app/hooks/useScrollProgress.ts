/**
 * ============================================
 * useScrollProgress — Motion value variant
 * ============================================
 * For components that need Motion MotionValues
 * (e.g. parallax, opacity transitions via style prop).
 * Plain numeric progress lives in useScrollY.ts.
 * ============================================
 */

import { useScroll, useTransform, MotionValue } from 'motion/react';

export interface ScrollProgressMotion {
  scrollY: MotionValue<number>;
  scrollYProgress: MotionValue<number>;
}

export function useScrollProgressMotion(): ScrollProgressMotion {
  const { scrollY, scrollYProgress } = useScroll();
  return { scrollY, scrollYProgress };
}

// Legacy alias kept for any existing imports
export { useScrollProgressMotion as useScrollProgress };
export type { ScrollProgressMotion as ScrollProgress };

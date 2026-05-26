/**
 * ============================================
 * HOOKS INDEX — Single clean export surface
 * ============================================
 */

// ── Viewport / IntersectionObserver ─────────
export {
  useInViewport,
  useMultipleInViewport,
  useLazyLoad,
  useScrollAnimation,
} from './useInViewport';

// ── Scroll — primary hooks ───────────────────
export {
  useScrollState,
  useScrollY,
  useScrollDirection,
  useScrollProgress,
  type ScrollState,
} from './useScrollY';

// ── Scroll — Motion MotionValue variant ──────
export {
  useScrollProgressMotion,
} from './useScrollProgress';

// ── Legacy shims (keeps old imports alive) ───
export {
  useOptimizedScroll,
  useScrollProgressPercent,
} from './useOptimizedScroll';

export {
  usePerformantScroll,
  useScrollY as useScrollYPerformant,
} from './usePerformantScroll';

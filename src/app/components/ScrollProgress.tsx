/**
 * ============================================
 * SCROLL PROGRESS BAR — Top of page
 * ============================================
 * Thin gradient bar that fills as the user scrolls.
 * One passive listener, RAF-throttled, zero jank.
 * ============================================
 */

import { useScrollProgress } from '../hooks/useScrollY';
import { gradients } from '../../styles/design-tokens';

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 h-[3px] z-50 pointer-events-none origin-left"
      style={{
        width: `${progress}%`,
        background: gradients.primary,
        transition: 'width 0.06s linear',
        willChange: 'width',
      }}
    />
  );
}

/**
 * ============================================
 * SMOOTH SCROLL — Native passthrough
 * ============================================
 * No library, no JS overhead.
 * The browser owns the scroll axis.
 * Scroll behaviour is set to "auto" in index.css
 * so every scroll update is instant/native.
 * ============================================
 */

import { ReactNode } from 'react';

interface SmoothScrollProps {
  children: ReactNode;
}

/** Pure passthrough — rendered children scroll natively. */
export function SmoothScroll({ children }: SmoothScrollProps) {
  return <>{children}</>;
}

/** Scroll window to top instantly (no animation jank). */
export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'instant' } as ScrollToOptions);
}

/** Scroll to a CSS selector with optional pixel offset. */
export function scrollToElement(selector: string, offset = 0) {
  const el = document.querySelector(selector);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

/**
 * ============================================
 * FAST REVEAL — CSS + IntersectionObserver
 * ============================================
 * Zero Motion dependency. Uses native IO to
 * toggle a CSS class that drives the animation.
 * Ideal for performance-critical sections.
 * ============================================
 */

import { ReactNode, useEffect, useRef, useState } from 'react';

interface FastRevealProps {
  children: ReactNode;
  className?: string;
  /** Delay before animation starts (ms) */
  delay?: number;
}

/** Slide-up + fade in on scroll. */
export function FastReveal({ children, className = '', delay = 0 }: FastRevealProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.05 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 0.35s ease, transform 0.35s ease',
        transitionDelay: visible ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  );
}

/** Fade-only variant (no Y shift). */
export function FastFade({ children, className = '', delay = 0 }: FastRevealProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.05 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.35s ease',
        transitionDelay: visible ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  );
}

/**
 * Injects one-time CSS for stagger utilities.
 * Call once at app level if you use class-based stagger.
 */
export function addRevealStyles() {
  if (typeof window === 'undefined') return;
  if (document.getElementById('fast-reveal-styles')) return;

  const style = document.createElement('style');
  style.id = 'fast-reveal-styles';
  style.textContent = `
    .reveal-hidden  { opacity: 0; transform: translateY(10px); }
    .reveal-visible { opacity: 1; transform: translateY(0); transition: opacity 0.35s ease, transform 0.35s ease; }
    .fade-hidden    { opacity: 0; }
    .fade-visible   { opacity: 1; transition: opacity 0.35s ease; }
    .stagger-container > .reveal-visible:nth-child(1) { transition-delay: 0ms; }
    .stagger-container > .reveal-visible:nth-child(2) { transition-delay: 50ms; }
    .stagger-container > .reveal-visible:nth-child(3) { transition-delay: 100ms; }
    .stagger-container > .reveal-visible:nth-child(4) { transition-delay: 150ms; }
    .stagger-container > .reveal-visible:nth-child(5) { transition-delay: 200ms; }
    .stagger-container > .reveal-visible:nth-child(6) { transition-delay: 250ms; }
  `;
  document.head.appendChild(style);
}

/**
 * ============================================
 * USE SCROLL Y — SINGLE SOURCE OF TRUTH
 * ============================================
 * One clean, passive RAF-throttled scroll hook.
 * All scroll tracking across the site uses this.
 * ============================================
 */

import { useEffect, useState, useRef, useCallback } from 'react';

// ── Types ────────────────────────────────────

export interface ScrollState {
  scrollY: number;
  scrollDirection: 'up' | 'down' | null;
  scrollProgress: number; // 0–100
  isScrolling: boolean;
}

// ── Hooks ────────────────────────────────────

/**
 * Primary scroll hook — tracks Y position, direction, and progress.
 * Uses a single passive RAF-throttled listener.
 */
export function useScrollState(): ScrollState {
  const [state, setState] = useState<ScrollState>({
    scrollY: 0,
    scrollDirection: null,
    scrollProgress: 0,
    isScrolling: false,
  });

  const rafId = useRef<number | null>(null);
  const lastY = useRef(0);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const update = useCallback(() => {
    const y = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? (y / maxScroll) * 100 : 0;
    const direction = y > lastY.current ? 'down' : y < lastY.current ? 'up' : null;
    lastY.current = y;

    setState({
      scrollY: y,
      scrollDirection: direction,
      scrollProgress: Math.min(100, Math.max(0, progress)),
      isScrolling: true,
    });

    if (idleTimer.current) clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => {
      setState(prev => ({ ...prev, isScrolling: false }));
    }, 150);

    rafId.current = null;
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!rafId.current) {
        rafId.current = requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    // Set initial values
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, [update]);

  return state;
}

/**
 * Lightweight hook — only Y position, no extras.
 */
export function useScrollY(): number {
  const [scrollY, setScrollY] = useState(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!rafId.current) {
        rafId.current = requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          rafId.current = null;
        });
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    setScrollY(window.scrollY);

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return scrollY;
}

/**
 * Scroll direction only.
 */
export function useScrollDirection(): 'up' | 'down' | null {
  const [direction, setDirection] = useState<'up' | 'down' | null>(null);
  const lastY = useRef(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!rafId.current) {
        rafId.current = requestAnimationFrame(() => {
          const y = window.scrollY;
          setDirection(y > lastY.current ? 'down' : y < lastY.current ? 'up' : null);
          lastY.current = y;
          rafId.current = null;
        });
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return direction;
}

/**
 * Scroll progress 0–100.
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!rafId.current) {
        rafId.current = requestAnimationFrame(() => {
          const max = document.documentElement.scrollHeight - window.innerHeight;
          setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
          rafId.current = null;
        });
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return progress;
}

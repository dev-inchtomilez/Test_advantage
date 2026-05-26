/**
 * ============================================
 * PARALLAX TEXT — Scroll-reactive text offset
 * ============================================
 * Wraps any text/children in a motion div
 * that shifts vertically on scroll.
 * ============================================
 */

import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ParallaxTextProps {
  children: ReactNode;
  /** Multiplier for vertical shift. Negative values move upward. */
  speed?: number;
  className?: string;
}

export function ParallaxText({
  children,
  speed = 0.4,
  className = '',
}: ParallaxTextProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 80]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

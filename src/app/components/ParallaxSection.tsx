/**
 * ============================================
 * PARALLAX SECTION — Decorative background orbs
 * ============================================
 * Wraps any section with subtle parallax gradient
 * orbs that move on scroll via Motion's useScroll.
 * ============================================
 */

import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  /** 0–1: how far the orbs shift relative to scroll distance */
  speed?: number;
}

export function ParallaxSection({
  children,
  className = '',
  speed = 0.4,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y       = useTransform(scrollYProgress, [0, 1], [0, speed * 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Decorative gradient orbs — behind content */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 -z-10 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#0000aa]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-[#ffb300]/10 to-transparent rounded-full blur-3xl" />
      </motion.div>

      {children}
    </div>
  );
}

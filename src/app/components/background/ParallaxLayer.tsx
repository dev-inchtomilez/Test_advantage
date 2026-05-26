/**
 * ============================================
 * PARALLAX LAYER — Global scroll-reactive wrapper
 * ============================================
 * Uses window-level scrollY (not element-scoped)
 * to drive a vertical shift on its children.
 * Best for hero / full-bleed background layers.
 * ============================================
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { ReactNode } from 'react';

interface ParallaxLayerProps {
  children: ReactNode;
  /** Speed ratio 0–1. Higher = more movement. */
  speed?: number;
  className?: string;
}

export function ParallaxLayer({
  children,
  speed = 0.4,
  className = '',
}: ParallaxLayerProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, -speed * 160]);

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

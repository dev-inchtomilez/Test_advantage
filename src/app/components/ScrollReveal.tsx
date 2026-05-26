/**
 * ============================================
 * SCROLL REVEAL — InView animation wrappers
 * ============================================
 * Uses Motion's whileInView with IntersectionObserver.
 * Animations trigger once (once: true) and are
 * kept intentionally subtle for executive aesthetics.
 * ============================================
 */

import { motion } from 'motion/react';
import { ReactNode } from 'react';

// ── ScrollReveal ────────────────────────────

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const OFFSETS = {
  up:    { y: 12, x: 0 },
  down:  { y: -12, x: 0 },
  left:  { x: 12, y: 0 },
  right: { x: -12, y: 0 },
};

export function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, ...OFFSETS[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.35, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Parallax3D (simple fade-in alias) ────────

interface Parallax3DProps {
  children: ReactNode;
  intensity?: number;
  className?: string;
}

export function Parallax3D({ children, className }: Parallax3DProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── StaggerContainer ─────────────────────────

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.05,
  className = '',
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={{
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── staggerItemVariants ───────────────────────

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
  },
};

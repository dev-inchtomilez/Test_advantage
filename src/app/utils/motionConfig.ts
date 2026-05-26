/**
 * ============================================
 * MOTION CONFIGURATION - MINIMAL OVERHEAD
 * ============================================
 * Ultra-lightweight animations for native performance
 * ============================================
 */

import { Transition } from 'motion/react';

/**
 * Instant transition
 */
export const instant: Transition = {
  duration: 0.01,
};

/**
 * Ultra-fast tween (default)
 */
export const tweenFast: Transition = {
  duration: 0.1,
  ease: [0.25, 0.1, 0.25, 1],
};

/**
 * Standard tween
 */
export const tweenDefault: Transition = {
  duration: 0.15,
  ease: [0.25, 0.1, 0.25, 1],
};

/**
 * Smooth tween (use sparingly)
 */
export const tweenSmooth: Transition = {
  duration: 0.2,
  ease: [0.43, 0.13, 0.23, 0.96],
};

/**
 * Spring animations (use very sparingly - CPU intensive)
 */
export const springFast: Transition = {
  type: 'spring',
  stiffness: 600,
  damping: 40,
  mass: 0.2,
};

export const springDefault: Transition = {
  type: 'spring',
  stiffness: 500,
  damping: 35,
  mass: 0.3,
};

export const springSmooth: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 30,
  mass: 0.5,
};

/**
 * Minimal fade in
 */
export const fadeIn = {
  hidden: { 
    opacity: 0,
  },
  visible: { 
    opacity: 1,
    transition: tweenFast,
  },
};

/**
 * Minimal fade in up
 */
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 5,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: tweenDefault,
  },
};

/**
 * Minimal scale in
 */
export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.98,
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: tweenDefault,
  },
};

/**
 * Minimal slide in left
 */
export const slideInLeft = {
  hidden: { 
    opacity: 0, 
    x: -10,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: tweenDefault,
  },
};

/**
 * Minimal slide in right
 */
export const slideInRight = {
  hidden: { 
    opacity: 0, 
    x: 10,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: tweenDefault,
  },
};

/**
 * Fast stagger container
 */
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0,
    },
  },
};

/**
 * Optimized viewport settings
 */
export const viewportOnce = {
  once: true,
  margin: '0px',
  amount: 0.05,
};

export const viewportRepeat = {
  once: false,
  margin: '0px',
  amount: 0.05,
};

/**
 * Minimal hover scale
 */
export const hoverScale = {
  scale: 1.01,
  transition: instant,
};

/**
 * Minimal tap scale
 */
export const tapScale = {
  scale: 0.99,
  transition: instant,
};

/**
 * Fast layout transition
 */
export const layoutTransition = {
  duration: 0.1,
  ease: [0.25, 0.1, 0.25, 1],
};

/**
 * ============================================
 * ANIMATION UTILITIES
 * ============================================
 * GPU-accelerated animations with Motion (Framer Motion)
 * Optimized for 60fps performance
 * ============================================
 */

import { Variants, Transition } from 'motion/react';

// Standard easing curves
export const easings = {
  easeInOut: [0.4, 0, 0.2, 1],
  easeOut: [0, 0, 0.2, 1],
  easeIn: [0.4, 0, 1, 1],
  sharp: [0.4, 0, 0.6, 1],
  bounce: [0.34, 1.56, 0.64, 1],
  smooth: [0.22, 1, 0.36, 1], // Premium smooth easing
} as const;

// Standard durations
export const durations = {
  instant: 0.1,
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slower: 0.7,
  slowest: 1.0,
} as const;

// Fade animations
export const fadeVariants: Variants = {
  hidden: { 
    opacity: 0,
  },
  visible: { 
    opacity: 1,
    transition: {
      duration: durations.normal,
      ease: easings.easeOut,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: durations.fast,
      ease: easings.easeIn,
    }
  }
};

// Fade up animations
export const fadeUpVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 24,
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.smooth,
    }
  },
  exit: {
    opacity: 0,
    y: -24,
    transition: {
      duration: durations.normal,
      ease: easings.easeIn,
    }
  }
};

// Fade down animations
export const fadeDownVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: -24,
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.smooth,
    }
  }
};

// Slide animations
export const slideVariants = {
  left: {
    hidden: { x: -100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: durations.slow,
        ease: easings.smooth,
      }
    }
  },
  right: {
    hidden: { x: 100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: durations.slow,
        ease: easings.smooth,
      }
    }
  }
} as const;

// Scale animations
export const scaleVariants: Variants = {
  hidden: { 
    scale: 0.8,
    opacity: 0,
  },
  visible: { 
    scale: 1,
    opacity: 1,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: durations.fast,
      ease: easings.easeOut,
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: durations.instant,
      ease: easings.easeIn,
    }
  }
};

// Stagger children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

// Fast stagger for lists
export const fastStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0,
    }
  }
};

// Card hover effect
export const cardHoverVariants: Variants = {
  initial: {
    y: 0,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  hover: {
    y: -8,
    boxShadow: '0 20px 40px rgba(0, 1, 49, 0.15)',
    transition: {
      duration: durations.normal,
      ease: easings.easeOut,
    }
  }
};

// Rotate animations
export const rotateVariants: Variants = {
  hidden: { 
    rotate: -180,
    opacity: 0,
  },
  visible: { 
    rotate: 0,
    opacity: 1,
    transition: {
      duration: durations.slow,
      ease: easings.smooth,
    }
  }
};

// Spring transitions
export const springTransition: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
};

export const smoothSpring: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
  mass: 1,
};

export const bouncySpring: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 15,
};

// Viewport animation options
export const viewportOptions = {
  once: true,
  margin: '-100px',
  amount: 0.3,
} as const;

// Scroll-triggered animations
export const scrollVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: durations.slow,
      ease: easings.smooth,
    }
  }
};

// Button animations
export const buttonVariants: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      duration: durations.fast,
      ease: easings.easeOut,
    }
  },
  tap: { 
    scale: 0.95,
    transition: {
      duration: durations.instant,
      ease: easings.easeIn,
    }
  }
};

// Magnetic effect for buttons
export const magneticEffect = (
  e: React.MouseEvent<HTMLElement>,
  strength: number = 0.3
) => {
  const element = e.currentTarget;
  const rect = element.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  return {
    x: x * strength,
    y: y * strength,
    transition: {
      duration: durations.fast,
      ease: easings.easeOut,
    }
  };
};

// Reset magnetic effect
export const resetMagnetic = {
  x: 0,
  y: 0,
  transition: {
    duration: durations.normal,
    ease: easings.smooth,
  }
};

// Blur reveal animation
export const blurRevealVariants: Variants = {
  hidden: { 
    opacity: 0,
    filter: 'blur(10px)',
  },
  visible: { 
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: durations.slow,
      ease: easings.smooth,
    }
  }
};

// Nav link animation
export const navLinkVariants: Variants = {
  initial: { 
    scale: 1,
    opacity: 0.7,
  },
  hover: { 
    scale: 1.05,
    opacity: 1,
    transition: {
      duration: durations.fast,
      ease: easings.easeOut,
    }
  },
  active: {
    scale: 1,
    opacity: 1,
  }
};

// Counter animation
export const counterVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: durations.normal,
      ease: easings.easeOut,
    }
  }
};

// GPU-accelerated transform properties
export const gpuProps = {
  style: {
    transform: 'translateZ(0)',
    backfaceVisibility: 'hidden' as const,
    perspective: 1000,
  }
};

// Optimized motion props for lists
export const listItemProps = {
  variants: {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: durations.normal,
        ease: easings.smooth,
      }
    }
  }
};

// Page transition variants
export const pageVariants: Variants = {
  initial: { 
    opacity: 0,
    y: 20,
  },
  animate: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.smooth,
    }
  },
  exit: { 
    opacity: 0,
    y: -20,
    transition: {
      duration: durations.fast,
      ease: easings.easeIn,
    }
  }
};

// Shimmer effect keyframes
export const shimmerVariants: Variants = {
  initial: { x: '-100%' },
  animate: {
    x: '100%',
    transition: {
      repeat: Infinity,
      duration: 1.5,
      ease: 'linear',
    }
  }
};

// Pulse animation
export const pulseVariants: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: easings.easeInOut,
    }
  }
};

// Floating animation
export const floatingVariants: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      repeat: Infinity,
      duration: 3,
      ease: easings.easeInOut,
    }
  }
};

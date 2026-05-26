/**
 * ============================================
 * TEXT GRADIENT
 * Eye-catching gradient text effect
 * ============================================
 */

import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { gradients } from '../../styles/design-tokens';

interface TextGradientProps {
  children: ReactNode;
  className?: string;
  gradient?: string;
  animated?: boolean;
}

export function TextGradient({
  children,
  className = '',
  gradient = gradients.primary,
  animated = false,
}: TextGradientProps) {
  return (
    <motion.span
      className={`bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: gradient,
        backgroundSize: animated ? '200% auto' : 'auto',
      }}
      animate={
        animated
          ? {
              backgroundPosition: ['0% center', '200% center'],
            }
          : {}
      }
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {children}
    </motion.span>
  );
}

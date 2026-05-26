/**
 * ============================================
 * GRADIENT BORDER CARD
 * Modern card with animated gradient border
 * ============================================
 */

import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { gradients } from '../../styles/design-tokens';

interface GradientBorderProps {
  children: ReactNode;
  className?: string;
  borderWidth?: number;
  animated?: boolean;
}

export function GradientBorder({
  children,
  className = '',
  borderWidth = 2,
  animated = true,
}: GradientBorderProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Animated Gradient Border */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: gradients.primary,
          padding: `${borderWidth}px`,
        }}
        animate={
          animated
            ? {
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }
            : {}
        }
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="w-full h-full bg-white rounded-lg" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 p-6">{children}</div>
    </div>
  );
}

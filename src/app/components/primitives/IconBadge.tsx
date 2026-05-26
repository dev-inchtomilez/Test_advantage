/**
 * ============================================
 * ICON BADGE PRIMITIVE
 * ============================================
 */

import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { gradients, radius, shadows } from '../../../styles/design-tokens';

interface IconBadgeProps {
  icon: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'gradient' | 'solid' | 'outline';
  animated?: boolean;
}

const sizeMap = {
  sm: 'w-12 h-12',
  md: 'w-14 h-14',
  lg: 'w-16 h-16',
};

const iconSizeMap = {
  sm: 'w-6 h-6',
  md: 'w-7 h-7',
  lg: 'w-8 h-8',
};

export function IconBadge({
  icon,
  size = 'md',
  variant = 'gradient',
  animated = true,
}: IconBadgeProps) {
  const baseClasses = [
    sizeMap[size],
    'rounded-2xl',
    'flex items-center justify-center',
    'shadow-lg',
    variant === 'gradient' && 'bg-gradient-to-br from-[#000131] to-[#0000aa]',
    variant === 'solid' && 'bg-[#0000aa]',
    variant === 'outline' && 'bg-white border-2 border-[#0000aa]',
    'transition-transform duration-300',
  ]
    .filter(Boolean)
    .join(' ');

  const iconClasses = [
    iconSizeMap[size],
    variant === 'outline' ? 'text-[#0000aa]' : 'text-white',
  ].join(' ');

  if (animated) {
    return (
      <motion.div
        className={baseClasses}
        whileHover={{ scale: 1.1, rotate: 3 }}
        transition={{ duration: 0.3 }}
      >
        <div className={iconClasses}>{icon}</div>
      </motion.div>
    );
  }

  return (
    <div className={baseClasses}>
      <div className={iconClasses}>{icon}</div>
    </div>
  );
}

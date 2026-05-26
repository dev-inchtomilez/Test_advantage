/**
 * ============================================
 * GLASS CARD PRIMITIVE
 * ============================================
 */

import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { glass, radius, shadows } from '../../../styles/design-tokens';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'subtle' | 'base' | 'strong';
  rounded?: 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  padding?: 'none' | 'sm' | 'base' | 'md' | 'lg';
  hover?: boolean;
  as?: 'div' | 'article' | 'section';
}

const paddingMap = {
  none: '',
  sm: 'p-4',
  base: 'p-5',
  md: 'p-5',     // Alias for base
  lg: 'p-7',
};

const radiusMap = {
  md: 'rounded-lg',
  lg: 'rounded-xl',
  xl: 'rounded-2xl',
  '2xl': 'rounded-3xl',  // was wrongly 'rounded-2xl' — fixed to be distinct from xl
  '3xl': 'rounded-3xl',
};

export function GlassCard({
  children,
  className = '',
  variant = 'base',
  rounded = 'lg',
  padding = 'base',
  hover = true,
  as: Component = 'div',
}: GlassCardProps) {
  const glassStyle = glass[variant];

  const baseClasses = [
    'relative',
    'overflow-hidden',
    radiusMap[rounded],
    paddingMap[padding],
    'border border-gray-200/60',
    hover && 'hover:border-gray-900 hover:shadow-lg',
    'transition-all duration-300',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component
      className={baseClasses}
      style={{
        background: glassStyle.background,
        backdropFilter: glassStyle.backdropFilter,
        boxShadow: shadows.lg,
      }}
    >
      {children}
    </Component>
  );
}

export function AnimatedGlassCard({
  children,
  ...props
}: GlassCardProps & { whileHover?: any }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <GlassCard {...props}>{children}</GlassCard>
    </motion.div>
  );
}
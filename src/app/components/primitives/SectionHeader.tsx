/**
 * ============================================
 * SECTION HEADER PRIMITIVE
 * ============================================
 */

import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { GlowEffect } from '../GlowEffect';
import { colors, typography } from '../../../styles/design-tokens';

interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: ReactNode;
  title: string | ReactNode;
  description?: string;
  align?: 'left' | 'center';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  animated?: boolean;
  className?: string;
}

const maxWidthMap = {
  sm: 'max-w-xl',
  md: 'max-w-2xl',
  lg: 'max-w-3xl',
  xl: 'max-w-4xl',
  '2xl': 'max-w-5xl',
};

export function SectionHeader({
  badge,
  badgeIcon,
  title,
  description,
  align = 'center',
  maxWidth = 'md',
  animated = true,
  className = '',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  const marginClass = align === 'center' ? 'mx-auto' : '';
  const isLightText = className.includes('text-white');

  const content = (
    <div className={`${alignClass} mb-8 ${className}`}>
      {badge && (
        <GlowEffect color={colors.brand.accent} intensity={12}>
          <motion.span
            className="inline-flex items-center px-4 py-2 rounded-full mb-4 shadow-lg border-2"
            style={{
              backgroundColor: isLightText ? 'rgba(255, 255, 255, 0.1)' : '#ffffff',
              borderColor: colors.brand.accent,
              backdropFilter: isLightText ? 'blur(10px)' : 'none',
            }}
            whileHover={{ scale: 1.05 }}
          >
            {badgeIcon && <span className="mr-2">{badgeIcon}</span>}
            <span
              className="text-xs font-bold tracking-wide"
              style={{ color: isLightText ? '#ffffff' : colors.brand.primary }}
            >
              {badge}
            </span>
          </motion.span>
        </GlowEffect>
      )}

      {typeof title === 'string' ? (
        <h2
          className="text-xl sm:text-2xl lg:text-2xl font-bold leading-tight tracking-tight"
          style={{ color: isLightText ? '#ffffff' : colors.brand.primary }}
        >
          {title}
        </h2>
      ) : (
        title
      )}

      {description && (
        <p
          className={`text-sm ${isLightText ? 'text-white/90' : 'text-gray-700'} ${maxWidthMap[maxWidth]} ${marginClass} mt-3 leading-relaxed`}
        >
          {description}
        </p>
      )}
    </div>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
}
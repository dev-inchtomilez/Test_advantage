/**
 * ============================================
 * SECTION PRIMITIVE - Base Section Component
 * ============================================
 */

import { ReactNode, CSSProperties } from 'react';
import { motion } from 'motion/react';
import { spacing, gradients } from '../../../styles/design-tokens';

interface SectionProps {
  children: ReactNode;
  className?: string;
  spacing?: 'none' | 'sm' | 'compact' | 'base' | 'relaxed' | 'lg' | 'xl';
  background?: 'transparent' | 'elevated' | 'secondary' | 'white' | 'lightBlue' | 'lightPurple' | 'lightCream' | 'lightGray' | 'lightMint' | 'lightPink' | 'navy';
  as?: 'section' | 'div' | 'article' | 'aside';
  id?: string;
  animate?: boolean;
}

const spacingMap = {
  none: '',
  sm: 'py-6 md:py-8',           // Tight sections
  compact: 'py-8 md:py-10',     // Compact sections
  base: 'py-10 md:py-12',       // Standard section spacing
  relaxed: 'py-12 md:py-16',    // Relaxed breathing room
  lg: 'py-14 md:py-20',         // Large breathing room
  xl: 'py-16 md:py-24',         // Extra large for special sections
};

const backgroundStyleMap: Record<string, CSSProperties> = {
  transparent: {},
  elevated: { background: 'rgba(255, 255, 255, 0.05)' },
  secondary: { background: 'rgba(249, 250, 251, 0.3)' },
  white: { background: gradients.sections.white },
  lightBlue: { background: gradients.sections.lightBlue },
  lightPurple: { background: gradients.sections.lightPurple },
  lightCream: { background: gradients.sections.lightCream },
  lightGray: { background: gradients.sections.lightGray },
  lightMint: { background: gradients.sections.lightMint },
  lightPink: { background: gradients.sections.lightPink },
  navy: { background: gradients.sections.navy, color: '#ffffff' },
};

export function Section({
  children,
  className = '',
  spacing: spacingSize = 'base',
  background = 'transparent',
  as: Component = 'section',
  id,
  animate = false,
}: SectionProps) {
  const baseClasses = [
    'relative',
    'overflow-hidden',
    spacingMap[spacingSize],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const backgroundStyle = backgroundStyleMap[background] || {};

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Component id={id} className={baseClasses} style={backgroundStyle}>
          {children}
        </Component>
      </motion.div>
    );
  }

  return (
    <Component id={id} className={baseClasses} style={backgroundStyle}>
      {children}
    </Component>
  );
}
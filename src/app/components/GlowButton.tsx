/**
 * ============================================
 * GLOW BUTTON
 * Premium button with animated glow effect
 * ============================================
 */

import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { colors, gradients } from '../../styles/design-tokens';

interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: ReactNode;
}

const variants = {
  primary: {
    background: gradients.primary,
    glowColor: 'rgba(0, 0, 170, 0.6)',
  },
  secondary: {
    background: `linear-gradient(135deg, ${colors.brand.secondary} 0%, ${colors.brand.primary} 100%)`,
    glowColor: 'rgba(0, 0, 170, 0.6)',
  },
  accent: {
    background: `linear-gradient(135deg, ${colors.brand.accent} 0%, #ff8c00 100%)`,
    glowColor: 'rgba(255, 179, 0, 0.6)',
  },
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export function GlowButton({
  children,
  href,
  to,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
}: GlowButtonProps) {
  const buttonStyle = variants[variant];
  const buttonSize = sizes[size];

  const content = (
    <motion.span
      className={`relative inline-flex items-center justify-center ${buttonSize} rounded-full font-semibold text-white overflow-hidden group ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        background: buttonStyle.background,
      }}
    >
      {/* Glow effect */}
      <span
        className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
        style={{
          background: buttonStyle.glowColor,
          transform: 'scale(1.5)',
        }}
      />

      {/* Shine effect */}
      <motion.span
        className="absolute inset-0 bg-white"
        initial={{ x: '-100%', opacity: 0 }}
        whileHover={{ x: '100%', opacity: 0.2 }}
        transition={{ duration: 0.6 }}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="group-hover:translate-x-1 transition-transform">{icon}</span>}
      </span>
    </motion.span>
  );

  if (to) {
    return <Link to={to}>{content}</Link>;
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <button onClick={onClick}>{content}</button>;
}

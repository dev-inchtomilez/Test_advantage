/**
 * ============================================
 * CONTAINER PRIMITIVE - Max Width Container
 * ============================================
 */

import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: boolean;
}

const sizeMap = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  xl: 'max-w-[1400px]',
  full: 'max-w-full',
};

export function Container({
  children,
  className = '',
  size = 'lg',
  padding = true,
}: ContainerProps) {
  const baseClasses = [
    sizeMap[size],
    'mx-auto',
    'relative',
    'z-10',
    padding && 'px-4 sm:px-6 lg:px-8',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={baseClasses}>{children}</div>;
}

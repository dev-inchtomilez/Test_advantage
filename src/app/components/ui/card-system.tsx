import { ReactNode } from 'react';
import { cn } from './utils';

interface BaseCardProps {
  children: ReactNode;
  className?: string;
  spacing?: 'compact' | 'default' | 'large' | 'xlarge';
  onClick?: () => void;
}

/**
 * Standard Card - General content card
 */
export function Card({ children, className, spacing = 'default', onClick }: BaseCardProps) {
  const spacingClass = {
    compact: 'card-padding-compact',
    default: 'card-padding-default',
    large: 'card-padding-large',
    xlarge: 'card-padding-xlarge',
  }[spacing];

  return (
    <div
      className={cn(
        'card-radius bg-white border border-gray-200',
        'transition-all duration-300',
        spacingClass,
        onClick && 'cursor-pointer hover:shadow-lg',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

/**
 * Strong Card - Featured/priority content
 */
export function StrongCard({ children, className, spacing = 'default', onClick }: BaseCardProps) {
  const spacingClass = {
    compact: 'card-padding-compact',
    default: 'card-padding-default',
    large: 'card-padding-large',
    xlarge: 'card-padding-xlarge',
  }[spacing];

  return (
    <div
      className={cn(
        'card-radius bg-gradient-to-br from-blue-50 to-violet-50 border border-blue-200',
        'transition-all duration-300 hover:border-blue-400 hover:shadow-xl',
        spacingClass,
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

/**
 * Accent Card - Visually differentiated content
 */
export function AccentCard({ children, className, spacing = 'default', onClick }: BaseCardProps) {
  const spacingClass = {
    compact: 'card-padding-compact',
    default: 'card-padding-default',
    large: 'card-padding-large',
    xlarge: 'card-padding-xlarge',
  }[spacing];

  return (
    <div
      className={cn(
        'card-radius bg-gradient-to-br from-violet-50 to-blue-50 border border-violet-200',
        'transition-all duration-300 hover:border-violet-400 hover:shadow-xl',
        spacingClass,
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

/**
 * Card Content Components
 */
interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
  return <h4 className={cn('text-gray-900', className)}>{children}</h4>;
}

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return <p className={cn('text-gray-600', className)}>{children}</p>;
}

interface CardMetaProps {
  children: ReactNode;
  className?: string;
}

export function CardMeta({ children, className }: CardMetaProps) {
  return <div className={cn('text-small text-gray-500', className)}>{children}</div>;
}

/**
 * Interactive Card with Hover Effects
 */
export function InteractiveCard({
  children,
  className,
  spacing = 'default',
  onClick,
}: BaseCardProps) {
  const spacingClass = {
    compact: 'card-padding-compact',
    default: 'card-padding-default',
    large: 'card-padding-large',
    xlarge: 'card-padding-xlarge',
  }[spacing];

  return (
    <div
      className={cn(
        'card-radius bg-white border border-gray-200',
        'transition-all duration-300 cursor-pointer',
        'hover:scale-[1.02] hover:shadow-xl hover:border-blue-300',
        spacingClass,
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
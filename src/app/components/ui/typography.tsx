import { ReactNode, HTMLAttributes } from 'react';
import { cn } from './utils';

/**
 * Typography Component System
 * Uses the centralized typography system from theme.css
 * All sizes are explicitly defined - never use arbitrary values
 */

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Display - Hero headings (40px mobile → 72px desktop)
 * Usage: Large hero sections, main page titles
 */
export function Display({ children, className, as: Component = 'h1', ...props }: TypographyProps) {
  return (
    <Component className={cn('text-display', className)} {...props}>
      {children}
    </Component>
  );
}

/**
 * Section - Section headings (30px mobile → 48px desktop)
 * Usage: Major section titles
 */
export function Section({ children, className, as: Component = 'h2', ...props }: TypographyProps) {
  return (
    <Component className={cn('text-section', className)} {...props}>
      {children}
    </Component>
  );
}

/**
 * H1 - Page titles (26px mobile → 30px desktop, weight 500)
 * Usage: Standard page titles
 */
export function H1({ children, className, as: Component = 'h1', ...props }: TypographyProps) {
  return (
    <Component className={cn(className)} {...props}>
      {children}
    </Component>
  );
}

/**
 * H2 - Section headings (20px mobile → 22px desktop, weight 700)
 * Usage: Section headings within pages
 */
export function H2({ children, className, as: Component = 'h2', ...props }: TypographyProps) {
  return (
    <Component className={cn(className)} {...props}>
      {children}
    </Component>
  );
}

/**
 * H3 - Sub-sections (20px mobile → 22px desktop, weight 500)
 * Usage: Sub-section titles
 */
export function H3({ children, className, as: Component = 'h3', ...props }: TypographyProps) {
  return (
    <Component className={cn(className)} {...props}>
      {children}
    </Component>
  );
}

/**
 * H4 - Card titles (16px mobile → 18px desktop, weight 500)
 * Usage: Card and component titles
 */
export function H4({ children, className, as: Component = 'h4', ...props }: TypographyProps) {
  return (
    <Component className={cn(className)} {...props}>
      {children}
    </Component>
  );
}

/**
 * Lead - Introductory text (18px mobile → 20px desktop, weight 400)
 * Usage: Lead paragraphs under headings
 */
export function Lead({ children, className, as: Component = 'p', ...props }: TypographyProps) {
  return (
    <Component className={cn('text-lead', className)} {...props}>
      {children}
    </Component>
  );
}

/**
 * Body - Main content (14px mobile → 15px desktop, weight 400)
 * Usage: Standard body text
 */
export function Body({ children, className, as: Component = 'p', ...props }: TypographyProps) {
  return (
    <Component className={cn(className)} {...props}>
      {children}
    </Component>
  );
}

/**
 * Small - Meta, captions (12px mobile → 13px desktop, weight 400)
 * Usage: Metadata, captions, small text
 */
export function Small({ children, className, as: Component = 'span', ...props }: TypographyProps) {
  return (
    <Component className={cn('text-small', className)} {...props}>
      {children}
    </Component>
  );
}

/**
 * Gradient Text Wrapper
 * Usage: For gradient colored text
 */
interface GradientTextProps extends TypographyProps {
  gradient?: 'blue-violet' | 'violet-blue' | 'blue';
}

export function GradientText({ 
  children, 
  className, 
  gradient = 'blue-violet',
  as: Component = 'span',
  ...props 
}: GradientTextProps) {
  const gradientClass = {
    'blue-violet': 'bg-gradient-to-r from-blue-600 to-violet-600',
    'violet-blue': 'bg-gradient-to-r from-violet-600 to-blue-600',
    'blue': 'bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600',
  }[gradient];

  return (
    <Component 
      className={cn(gradientClass, 'bg-clip-text text-transparent', className)} 
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * Helper Components for Common Typography Patterns
 */

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  centered?: boolean;
}

/**
 * SectionHeader - Pre-composed section header
 * Usage: Consistent section headers across pages
 */
export function SectionHeader({ 
  title, 
  subtitle, 
  description, 
  className,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && 'text-center', className)}>
      <Section className="mb-6">
        {title}
        {subtitle && (
          <>
            <br />
            <GradientText>{subtitle}</GradientText>
          </>
        )}
      </Section>
      {description && (
        <Lead className="text-gray-700 max-w-4xl mx-auto">
          {description}
        </Lead>
      )}
    </div>
  );
}

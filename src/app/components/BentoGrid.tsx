/**
 * ============================================
 * BENTO GRID SYSTEM
 * Modern asymmetric grid layouts
 * ============================================
 */

import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { colors } from '../../styles/design-tokens';
import { ScrollReveal } from './ScrollReveal';

interface BentoItemProps {
  title?: string;
  description?: string;
  icon?: ReactNode;
  size?: 'small' | 'medium' | 'large' | 'wide' | 'tall';
  gradient?: string;
  children?: ReactNode;
  className?: string;
}

export function BentoItem({ 
  title, 
  description, 
  icon, 
  size = 'medium',
  gradient,
  children,
  className = ''
}: BentoItemProps) {
  const sizeClasses = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-1 md:col-span-2 row-span-1',
    large: 'col-span-1 md:col-span-2 row-span-2',
    wide: 'col-span-1 md:col-span-3 row-span-1',
    tall: 'col-span-1 row-span-2',
  };

  return (
    <ScrollReveal>
      <motion.div
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ duration: 0.3 }}
        className={`
          ${sizeClasses[size]} 
          p-6 md:p-8 
          rounded-2xl 
          backdrop-blur-xl
          border
          relative
          overflow-hidden
          group
          ${className}
        `}
        style={{
          background: gradient || 'rgba(255, 255, 255, 0.6)',
          borderColor: 'rgba(0, 0, 0, 0.06)',
        }}
      >
        {/* Gradient Overlay */}
        {gradient && (
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
            style={{ background: gradient }}
          />
        )}

        {/* If using as wrapper component (children only) */}
        {children && !title && !description ? (
          children
        ) : (
          <>
            {/* Icon */}
            {icon && (
              <div 
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  color: colors.brand.secondary 
                }}
              >
                {icon}
              </div>
            )}

            {/* Content */}
            {title && (
              <h3 
                className="text-base font-bold mb-2"
                style={{ color: colors.brand.primary }}
              >
                {title}
              </h3>
            )}
            
            {description && (
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                {description}
              </p>
            )}

            {/* Additional Content */}
            {children}
          </>
        )}

        {/* Hover Effect */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
          style={{ background: colors.brand.secondary }}
        />
      </motion.div>
    </ScrollReveal>
  );
}

interface BentoGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

export function BentoGrid({ children, columns = 3, className = '' }: BentoGridProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-4',
  };

  return (
    <div 
      className={`
        grid 
        ${gridCols[columns]} 
        gap-4 md:gap-6 
        auto-rows-fr
        ${className}
      `}
    >
      {children}
    </div>
  );
}

// Preset Bento Layouts

interface BentoLayoutProps {
  items: Array<{
    title: string;
    description: string;
    icon?: ReactNode;
    content?: ReactNode;
  }>;
}

export function BentoLayout3x3({ items }: BentoLayoutProps) {
  const sizes: Array<BentoItemProps['size']> = [
    'large',    // 0: 2x2
    'medium',   // 1: 2x1
    'small',    // 2: 1x1
    'medium',   // 3: 2x1
    'tall',     // 4: 1x2
    'small',    // 5: 1x1
  ];

  return (
    <BentoGrid columns={3}>
      {items.slice(0, 6).map((item, index) => (
        <BentoItem
          key={index}
          title={item.title}
          description={item.description}
          icon={item.icon}
          size={sizes[index]}
        >
          {item.content}
        </BentoItem>
      ))}
    </BentoGrid>
  );
}

export function BentoLayout2x2({ items }: BentoLayoutProps) {
  const sizes: Array<BentoItemProps['size']> = [
    'medium',   // 0: 2x1
    'tall',     // 1: 1x2
    'small',    // 2: 1x1
    'medium',   // 3: 2x1
  ];

  return (
    <BentoGrid columns={2}>
      {items.slice(0, 4).map((item, index) => (
        <BentoItem
          key={index}
          title={item.title}
          description={item.description}
          icon={item.icon}
          size={sizes[index]}
        >
          {item.content}
        </BentoItem>
      ))}
    </BentoGrid>
  );
}

export function BentoLayoutFeatured({ items }: BentoLayoutProps) {
  return (
    <BentoGrid columns={3}>
      {/* Featured large item */}
      <BentoItem
        title={items[0].title}
        description={items[0].description}
        icon={items[0].icon}
        size="large"
      >
        {items[0].content}
      </BentoItem>

      {/* Right side smaller items */}
      {items.slice(1, 5).map((item, index) => (
        <BentoItem
          key={index}
          title={item.title}
          description={item.description}
          icon={item.icon}
          size="small"
        >
          {item.content}
        </BentoItem>
      ))}
    </BentoGrid>
  );
}

// Export alias for backward compatibility
export const BentoCard = BentoItem;
/**
 * ============================================
 * AUTO HORIZONTAL CAROUSEL
 * Infinite auto-scrolling carousel with pause on hover
 * ============================================
 */

import { useEffect, useRef, useState, ReactNode } from 'react';
import { motion, useAnimation, useMotionValue } from 'motion/react';
import { colors } from '../../styles/design-tokens';

interface CarouselItemProps {
  children: ReactNode;
  className?: string;
}

export function CarouselItem({ children, className = '' }: CarouselItemProps) {
  return (
    <div 
      className={`
        flex-shrink-0 
        w-80 md:w-96 
        p-6 
        rounded-2xl 
        backdrop-blur-xl
        border
        ${className}
      `}
      style={{
        background: 'rgba(255, 255, 255, 0.6)',
        borderColor: 'rgba(0, 0, 0, 0.06)',
      }}
    >
      {children}
    </div>
  );
}

interface AutoHorizontalCarouselProps {
  children: ReactNode;
  speed?: number; // pixels per second
  pauseOnHover?: boolean;
  gap?: number;
  direction?: 'left' | 'right';
}

export function AutoHorizontalCarousel({ 
  children, 
  speed = 30,
  pauseOnHover = true,
  gap = 16,
  direction = 'left'
}: AutoHorizontalCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const controls = useAnimation();

  useEffect(() => {
    if (!containerRef.current) return;

    const updateWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.scrollWidth / 2;
        setContainerWidth(width);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, [children]);

  useEffect(() => {
    if (containerWidth === 0) return;

    const startAnimation = () => {
      const distance = containerWidth;
      const duration = distance / speed;

      controls.start({
        x: direction === 'left' ? -containerWidth : containerWidth,
        transition: {
          duration,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        },
      });
    };

    if (!isPaused) {
      startAnimation();
    } else {
      controls.stop();
    }
  }, [containerWidth, speed, isPaused, controls, direction]);

  return (
    <div 
      className="relative overflow-hidden py-4"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {/* Gradient Overlays */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, white, transparent)',
        }}
      />
      <div 
        className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to left, white, transparent)',
        }}
      />

      {/* Carousel Track */}
      <motion.div
        ref={containerRef}
        className="flex"
        style={{ 
          x,
          gap: `${gap}px`,
        }}
        animate={controls}
      >
        {/* First Set */}
        {children}
        
        {/* Duplicate for seamless loop */}
        {children}
      </motion.div>
    </div>
  );
}

// Pre-built Carousel Card Components

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating?: number;
}

export function TestimonialCard({ quote, author, role, company, rating = 5 }: TestimonialCardProps) {
  return (
    <CarouselItem>
      <div className="flex flex-col h-full">
        {/* Rating */}
        {rating && (
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5"
                fill={i < rating ? colors.brand.accent : 'none'}
                stroke={i < rating ? colors.brand.accent : colors.brand.primary}
                strokeWidth="1"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        )}

        {/* Quote */}
        <p 
          className="text-base italic mb-6 flex-grow leading-relaxed"
          style={{ color: colors.text.secondary }}
        >
          "{quote}"
        </p>

        {/* Author */}
        <div>
          <p className="font-bold text-sm" style={{ color: colors.brand.primary }}>
            {author}
          </p>
          <p className="text-sm text-gray-600">
            {role}
          </p>
          <p className="text-sm font-semibold" style={{ color: colors.brand.secondary }}>
            {company}
          </p>
        </div>
      </div>
    </CarouselItem>
  );
}

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  metric?: string;
}

export function FeatureCard({ icon, title, description, metric }: FeatureCardProps) {
  return (
    <CarouselItem>
      <div className="flex flex-col h-full">
        {/* Icon */}
        <div 
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            color: colors.brand.secondary 
          }}
        >
          {icon}
        </div>

        {/* Title */}
        <h3 
          className="text-xl font-bold mb-3"
          style={{ color: colors.brand.primary }}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-700 leading-relaxed flex-grow mb-4">
          {description}
        </p>

        {/* Metric */}
        {metric && (
          <div 
            className="text-2xl font-bold"
            style={{ color: colors.brand.secondary }}
          >
            {metric}
          </div>
        )}
      </div>
    </CarouselItem>
  );
}

interface StatCardProps {
  value: string;
  label: string;
  icon?: ReactNode;
  trend?: string;
}

export function StatCard({ value, label, icon, trend }: StatCardProps) {
  return (
    <CarouselItem className="text-center">
      {/* Icon */}
      {icon && (
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ 
            backgroundColor: 'rgba(0, 0, 170, 0.1)',
            color: colors.brand.secondary 
          }}
        >
          {icon}
        </div>
      )}

      {/* Value */}
      <div 
        className="text-4xl md:text-5xl font-bold mb-2"
        style={{ color: colors.brand.primary }}
      >
        {value}
      </div>

      {/* Label */}
      <p className="text-sm font-semibold text-gray-700 mb-2">
        {label}
      </p>

      {/* Trend */}
      {trend && (
        <p 
          className="text-xs font-bold"
          style={{ color: colors.brand.accent }}
        >
          {trend}
        </p>
      )}
    </CarouselItem>
  );
}

/**
 * ============================================
 * METRIC CARD COMPONENT
 * ============================================
 * Modern card with image and metrics display
 * Inspired by modern dashboard designs
 * ============================================
 */

import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { colors, gradients } from '../../styles/design-tokens';
import { GlassCard } from './primitives/GlassCard';

interface MetricItem {
  label: string;
  value: string;
  width: string;
}

interface MetricCardProps {
  title: string;
  icon?: LucideIcon;
  metrics: MetricItem[];
  footer?: string;
  className?: string;
  imageUrl?: string;
}

export function MetricCard({ 
  title, 
  icon: Icon, 
  metrics, 
  footer,
  className = '',
  imageUrl
}: MetricCardProps) {
  return (
    <GlassCard variant="base" rounded="lg" padding="base" className={`shadow-xl border border-gray-200/60 ${className}`}>
      {/* Optional Image Header */}
      {imageUrl && (
        <div className="relative w-full h-40 mb-5 rounded-lg overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      )}
      
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-bold" style={{ color: colors.brand.primary }}>
          {title}
        </h3>
        {Icon && <Icon className="w-6 h-6" style={{ color: colors.brand.secondary }} />}
      </div>

      {/* Metrics */}
      <div className="space-y-5">
        {metrics.map((metric, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-gray-700">{metric.label}</span>
              <span className="text-sm font-bold" style={{ color: colors.brand.secondary }}>
                {metric.value}
              </span>
            </div>
            <div className="h-3 bg-gray-200/40 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: gradients.primary }}
                initial={{ width: 0 }}
                animate={{ width: metric.width }}
                transition={{ delay: 0.5 + index * 0.2, duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      {footer && (
        <div className="pt-4 border-t border-gray-300/60 mt-5">
          <p className="text-sm text-gray-600 text-center italic">
            {footer}
          </p>
        </div>
      )}
    </GlassCard>
  );
}

export default MetricCard;
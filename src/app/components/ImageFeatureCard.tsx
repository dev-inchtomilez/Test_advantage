/**
 * ============================================
 * IMAGE FEATURE CARD COMPONENT
 * ============================================
 * Cards with images for showcasing features,
 * services, or capabilities
 * ============================================
 */

import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { colors } from '../../styles/design-tokens';
import { GlassCard } from './primitives/GlassCard';
import { Link } from 'react-router';

interface ImageFeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
  icon?: LucideIcon;
  link?: string;
  linkText?: string;
  className?: string;
}

export function ImageFeatureCard({ 
  title, 
  description, 
  imageUrl, 
  icon: Icon,
  link,
  linkText = 'Learn More',
  className = ''
}: ImageFeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      <GlassCard variant="base" rounded="lg" padding="none" hover className="h-full overflow-hidden">
        {/* Image */}
        <div className="relative w-full h-56 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Icon Badge */}
          {Icon && (
            <div className="absolute top-4 left-4 w-12 h-12 rounded-lg bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <Icon className="w-6 h-6" style={{ color: colors.brand.primary }} />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3" style={{ color: colors.brand.primary }}>
            {title}
          </h3>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            {description}
          </p>

          {/* Link */}
          {link && (
            <Link
              to={link}
              className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-300 group"
              style={{ color: colors.brand.secondary }}
            >
              {linkText}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
      </GlassCard>
    </motion.div>
  );
}

export default ImageFeatureCard;

/**
 * ============================================
 * MODERN SECTION BACKGROUND COMPONENT
 * ============================================
 * Ultra-modern background patterns with:
 * - White, Grey, and Lightest Blue ONLY
 * - Image overlays with gradient masks
 * - Mesh gradients
 * - Animated patterns
 * - Glass morphism effects
 * ============================================
 */

import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { colors } from '../../styles/design-tokens';

interface ModernSectionBackgroundProps {
  children: ReactNode;
  variant?: 
    | 'mesh-gradient-light' 
    | 'mesh-gradient-warm' 
    | 'image-overlay-office' 
    | 'image-overlay-team'
    | 'image-overlay-architecture'
    | 'image-overlay-workspace'
    | 'gradient-soft'
    | 'gradient-abstract'
    | 'glass-white'
    | 'glass-blur'
    | 'animated-dots'
    | 'grid-pattern';
  className?: string;
  imageUrl?: string;
}

export function ModernSectionBackground({ 
  children, 
  variant = 'mesh-gradient-light',
  className = '',
  imageUrl
}: ModernSectionBackgroundProps) {
  
  const getBackgroundStyle = () => {
    switch (variant) {
      case 'mesh-gradient-light':
      case 'mesh-gradient-blue': // fallback for old usages
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFFFFF] via-[#F5F5F7] to-[#E8E8ED]">
            <div className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
                  radial-gradient(at 0% 0%, rgba(59, 130, 246, 0.08) 0px, transparent 50%),
                  radial-gradient(at 100% 0%, rgba(96, 165, 250, 0.05) 0px, transparent 50%),
                  radial-gradient(at 100% 100%, rgba(147, 197, 253, 0.06) 0px, transparent 50%)
                `
              }}
            />
          </div>
        );

      case 'mesh-gradient-warm':
      case 'mesh-gradient-purple': // fallback
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-[#F0F5FF] via-[#FFFFFF] to-[#E6F0FF]">
            <div className="absolute inset-0 opacity-25"
              style={{
                backgroundImage: `
                  radial-gradient(at 0% 100%, rgba(59, 130, 246, 0.1) 0px, transparent 50%),
                  radial-gradient(at 100% 100%, rgba(147, 197, 253, 0.08) 0px, transparent 50%),
                  radial-gradient(at 50% 0%, rgba(191, 219, 254, 0.06) 0px, transparent 50%)
                `
              }}
            />
          </div>
        );

      case 'image-overlay-office':
        return (
          <>
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage: `url(${imageUrl || 'https://images.unsplash.com/photo-1559136646-8d0d1f46a146?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'})`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFFFFF]/95 via-[#F5F5F7]/92 to-[#E8E8ED]/90" />
            <div className="absolute inset-0" 
              style={{
                backdropFilter: 'blur(2px)',
                WebkitBackdropFilter: 'blur(2px)'
              }}
            />
          </>
        );

      case 'image-overlay-team':
        return (
          <>
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage: `url(${imageUrl || 'https://images.unsplash.com/photo-1758691736843-90f58dce465e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'})`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF]/98 via-[#FFFFFF]/95 to-[#F0F5FF]/92" />
          </>
        );

      case 'image-overlay-architecture':
        return (
          <>
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage: `url(${imageUrl || 'https://images.unsplash.com/photo-1715156153744-d5fd2f1f66eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'})`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF]/97 via-[#F5F5F7]/95 to-[#E8E8ED]/93" />
          </>
        );

      case 'image-overlay-workspace':
        return (
          <>
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage: `url(${imageUrl || 'https://images.unsplash.com/photo-1644337540803-2b2fb3cebf12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'})`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#F0F5FF]/98 via-[#FFFFFF]/96 to-[#E6F0FF]/94" />
          </>
        );

      case 'gradient-soft':
      case 'gradient-tech': // fallback
        return (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F7] via-[#E8E8ED] to-[#F0F5FF]" />
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1688413709025-5f085266935a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                mixBlendMode: 'overlay'
              }}
            />
          </div>
        );

      case 'gradient-abstract':
        return (
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1640963269654-3fe248c5fba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080)`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFFFFF]/92 via-[#F5F5F7]/95 to-[#E8E8ED]/90" />
          </div>
        );

      case 'glass-white':
        return (
          <div className="absolute inset-0 bg-[#FFFFFF]/80 backdrop-blur-xl">
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(0deg, #E8E8ED 0px, transparent 1px, transparent 40px),
                  repeating-linear-gradient(90deg, #E8E8ED 0px, transparent 1px, transparent 40px)
                `
              }}
            />
          </div>
        );

      case 'glass-blur':
        return (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFFFFF] via-[#F5F5F7]/50 to-[#F0F5FF]/50" />
            <div 
              className="absolute inset-0 backdrop-blur-3xl opacity-60"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
                  radial-gradient(circle at 80% 50%, rgba(147, 197, 253, 0.1) 0%, transparent 50%)
                `
              }}
            />
          </div>
        );

      case 'animated-dots':
        return (
          <div className="absolute inset-0 bg-gradient-to-b from-[#F5F5F7] to-[#FFFFFF] overflow-hidden">
            <motion.div 
              className="absolute inset-0 opacity-40"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%']
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'linear'
              }}
              style={{
                backgroundImage: `radial-gradient(circle, #9CA3AF 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}
            />
          </div>
        );

      case 'grid-pattern':
        return (
          <div className="absolute inset-0 bg-[#FFFFFF]">
            <div 
              className="absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage: `
                  linear-gradient(#E8E8ED 1px, transparent 1px),
                  linear-gradient(90deg, #E8E8ED 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5F5F7]/50 to-transparent" />
          </div>
        );

      default:
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFFFFF] to-[#F5F5F7]" />
        );
    }
  };

  return (
    <div className={`relative ${className}`}>
      {getBackgroundStyle()}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default ModernSectionBackground;
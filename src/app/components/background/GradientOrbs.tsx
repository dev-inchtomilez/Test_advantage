/**
 * ============================================
 * GRADIENT ORBS - Floating Blurred Circles
 * ============================================
 * Large gradient orbs with parallax movement
 * Creates depth and visual interest
 * ============================================
 */

import { motion } from 'motion/react';

export interface GradientOrb {
  color: string;
  size: number;
  position: { x: string; y: string };
  parallax: number;
  blur?: number;
}

interface GradientOrbsProps {
  orbs: GradientOrb[];
  animate?: boolean;
}

export function GradientOrbs({ orbs, animate = true }: GradientOrbsProps) {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -15 }}>
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: orb.position.x,
            top: orb.position.y,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            transform: 'translate(-50%, -50%)',
          }}
          animate={animate ? {
            scale: [1, 1.2, 1],
            opacity: [0.65, 0.9, 0.65],
            x: [0, index % 2 === 0 ? 40 : -40, 0],
            y: [0, index % 3 === 0 ? -30 : 30, 0],
            rotate: [0, index % 2 === 0 ? 10 : -10, 0],
          } : {}}
          transition={{
            duration: 15 + index * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.3,
          }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background: `radial-gradient(circle, ${orb.color} 0%, ${orb.color}dd 30%, transparent 70%)`,
              filter: `blur(${orb.blur || 100}px)`,
              willChange: 'transform, opacity',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
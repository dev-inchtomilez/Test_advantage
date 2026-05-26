/**
 * ============================================
 * MESH GRADIENT - Animated Background Layer
 * ============================================
 * Ultra-optimized SVG mesh gradient with minimal performance impact
 * ============================================
 */

import { memo, useMemo } from 'react';

interface MeshGradientProps {
  colors: string[];
  animationSpeed?: number;
  intensity?: 'subtle' | 'medium' | 'vibrant';
}

export const MeshGradient = memo(function MeshGradient({
  colors,
  animationSpeed = 0.3,
  intensity = 'subtle',
}: MeshGradientProps) {
  
  // Optimize color opacity based on intensity
  const opacity = useMemo(() => {
    switch (intensity) {
      case 'subtle': return 0.15;
      case 'medium': return 0.25;
      case 'vibrant': return 0.35;
      default: return 0.15;
    }
  }, [intensity]);

  // Memoize animation duration
  const animationDuration = useMemo(() => {
    return Math.max(15, 20 / animationSpeed);
  }, [animationSpeed]);

  return (
    <div className="fixed inset-0 overflow-hidden" style={{ zIndex: -19 }}>
      <svg 
        className="w-full h-full" 
        viewBox="0 0 1920 1080" 
        preserveAspectRatio="xMidYMid slice"
        style={{
          willChange: 'auto', // Removed transform from will-change
        }}
      >
        <defs>
          {/* Optimized gradient definitions */}
          {colors.map((color, index) => (
            <radialGradient
              key={`gradient-${index}`}
              id={`mesh-gradient-${index}`}
              cx="50%"
              cy="50%"
              r="50%"
            >
              <stop offset="0%" stopColor={color} stopOpacity={opacity} />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </radialGradient>
          ))}
        </defs>

        {/* Optimized mesh circles with reduced count */}
        <g className="mesh-group">
          {colors.slice(0, 3).map((_, index) => (
            <circle
              key={`mesh-${index}`}
              cx={`${30 + index * 35}%`}
              cy={`${40 + index * 20}%`}
              r="40%"
              fill={`url(#mesh-gradient-${index})`}
              style={{
                transformOrigin: 'center',
                animation: `meshFloat${index} ${animationDuration}s ease-in-out infinite`,
              }}
            />
          ))}
        </g>

        {/* Optimized animations with GPU acceleration */}
        <style>{`
          @keyframes meshFloat0 {
            0%, 100% { 
              transform: translate(0, 0) scale(1);
            }
            50% { 
              transform: translate(5%, 5%) scale(1.05);
            }
          }

          @keyframes meshFloat1 {
            0%, 100% { 
              transform: translate(0, 0) scale(1);
            }
            50% { 
              transform: translate(-5%, 3%) scale(1.03);
            }
          }

          @keyframes meshFloat2 {
            0%, 100% { 
              transform: translate(0, 0) scale(1);
            }
            50% { 
              transform: translate(3%, -5%) scale(1.04);
            }
          }

          /* GPU acceleration for smooth rendering */
          .mesh-group circle {
            will-change: transform;
            backface-visibility: hidden;
          }
        `}</style>
      </svg>
    </div>
  );
});
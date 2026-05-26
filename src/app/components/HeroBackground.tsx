import { motion } from 'motion/react';

interface HeroBackgroundProps {
  variant?: 'default' | 'alternate' | 'minimal';
  showGrid?: boolean;
  showNoise?: boolean;
}

/**
 * HeroBackground - Reusable animated background matching hero section theme
 * Provides animated gradient blobs, noise texture, and grid pattern
 */
export function HeroBackground({ 
  variant = 'default', 
  showGrid = true, 
  showNoise = true 
}: HeroBackgroundProps) {
  const GRADIENT_PRIMARY = 'linear-gradient(135deg, #000131 0%, #0000aa 100%)';
  const GRADIENT_ACCENT = 'linear-gradient(135deg, #0000aa 0%, #ffb300 100%)';
  const COLOR_ACCENT = '#ffb300';

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Radial Gradient Overlays */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            radial-gradient(at 20% 30%, rgba(0, 0, 170, 0.15) 0px, transparent 50%),
            radial-gradient(at 80% 70%, rgba(255, 179, 0, 0.1) 0px, transparent 50%),
            radial-gradient(at 50% 50%, rgba(255, 255, 255, 0.03) 0px, transparent 50%)
          `,
        }}
      />

      {/* Animated Gradient Blob 1 - Top Right */}
      <motion.div 
        className="absolute top-20 right-10 w-[600px] h-[600px] rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: variant === 'minimal' ? [0.02, 0.04, 0.02] : [0.04, 0.06, 0.04],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Gradient lives on a plain child div — gradients are not animatable colors in Motion */}
        <div className="absolute inset-0 rounded-full" style={{ background: GRADIENT_PRIMARY }} />
      </motion.div>
      
      {/* Animated Gradient Blob 2 - Bottom Left */}
      <motion.div 
        className="absolute bottom-40 left-20 w-[700px] h-[700px] rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: variant === 'minimal' ? [0.015, 0.03, 0.015] : [0.03, 0.05, 0.03],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        {/* Gradient lives on a plain child div — gradients are not animatable colors in Motion */}
        <div className="absolute inset-0 rounded-full" style={{ background: GRADIENT_ACCENT }} />
      </motion.div>
      
      {/* Animated Gradient Blob 3 - Center */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: variant === 'minimal' ? [0.01, 0.02, 0.01] : [0.02, 0.04, 0.02],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        {/* Gradient lives on a plain child div — gradients are not animatable colors in Motion */}
        <div className="absolute inset-0 rounded-full" style={{ backgroundColor: COLOR_ACCENT }} />
      </motion.div>

      {/* Noise Texture Overlay */}
      {showNoise && (
        <motion.div 
          className="absolute inset-0 opacity-[0.01] mix-blend-overlay"
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            backgroundRepeat: 'repeat',
          }}
          animate={{
            opacity: [0.02, 0.04, 0.02],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      )}

      {/* Grid Pattern Overlay */}
      {showGrid && (
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, rgba(0, 1, 49, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 1, 49, 0.2) 1px, transparent 1px)',
            backgroundSize: '48px 48px'
          }} 
        />
      )}
    </div>
  );
}
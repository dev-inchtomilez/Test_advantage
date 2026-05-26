import { motion } from 'motion/react';

/**
 * GradientMeshBackground - Subtle animated gradient mesh background
 * 80% white + 20% colorful gradients for a clean, professional look
 * Brand colors: Navy #000131, Blue #0000aa, Yellow #ffb300
 */
export function GradientMeshBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Pure white base background (80%) */}
      <div 
        className="absolute inset-0"
        style={{
          background: '#ffffff',
        }}
      />

      {/* Subtle animated mesh overlay with very light color shifts */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Gradient on child — gradients are not animatable colors in Motion */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 20% 30%, rgba(255, 179, 0, 0.01) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(0, 0, 170, 0.01) 0%, transparent 50%)',
        }} />
      </motion.div>

      {/* Primary Gradient Orb 1 - Top Left (Navy to Blue) - Very subtle */}
      <motion.div 
        className="absolute -top-48 -left-48 w-[900px] h-[900px] rounded-full blur-3xl"
        style={{ 
          background: 'radial-gradient(circle, rgba(0, 1, 49, 0.12) 0%, rgba(0, 0, 170, 0.08) 30%, rgba(100, 50, 200, 0.04) 60%, transparent 75%)',
        }}
        animate={{
          x: [0, 120, -40, 0],
          y: [0, 60, -30, 0],
          scale: [1, 1.15, 1.05, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Primary Gradient Orb 2 - Top Right (Blue to Yellow) - Very subtle */}
      <motion.div 
        className="absolute -top-64 -right-64 w-[1000px] h-[1000px] rounded-full blur-3xl"
        style={{ 
          background: 'radial-gradient(circle, rgba(0, 0, 170, 0.10) 0%, rgba(255, 179, 0, 0.08) 35%, rgba(255, 140, 0, 0.04) 60%, transparent 75%)',
        }}
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 120, -50, 0],
          scale: [1, 1.2, 1.1, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Secondary Gradient Orb 3 - Middle Left (Navy) - Very subtle */}
      <motion.div 
        className="absolute top-1/3 -left-72 w-[850px] h-[850px] rounded-full blur-3xl"
        style={{ 
          background: 'radial-gradient(circle, rgba(0, 1, 49, 0.10) 0%, rgba(0, 100, 200, 0.06) 40%, rgba(0, 200, 255, 0.03) 65%, transparent 75%)',
        }}
        animate={{
          x: [0, 150, -50, 0],
          y: [0, -80, 40, 0],
          scale: [1, 1.25, 1.08, 1],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />

      {/* Secondary Gradient Orb 4 - Middle Right (Yellow to Blue) - Very subtle */}
      <motion.div 
        className="absolute top-1/2 -right-56 w-[950px] h-[950px] rounded-full blur-3xl"
        style={{ 
          background: 'radial-gradient(circle, rgba(255, 179, 0, 0.12) 0%, rgba(255, 215, 0, 0.08) 30%, rgba(0, 0, 170, 0.06) 60%, transparent 75%)',
        }}
        animate={{
          x: [0, -120, 60, 0],
          y: [0, 100, -60, 0],
          scale: [1, 1.18, 1.12, 1],
        }}
        transition={{
          duration: 34,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Accent Orb 5 - Bottom Left (Blue) - Very subtle */}
      <motion.div 
        className="absolute -bottom-48 -left-56 w-[880px] h-[880px] rounded-full blur-3xl"
        style={{ 
          background: 'radial-gradient(circle, rgba(0, 0, 170, 0.12) 0%, rgba(100, 0, 200, 0.08) 35%, rgba(0, 1, 49, 0.04) 65%, transparent 75%)',
        }}
        animate={{
          x: [0, 110, -70, 0],
          y: [0, -90, 50, 0],
          scale: [1, 1.22, 1.1, 1],
        }}
        transition={{
          duration: 33,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      {/* Accent Orb 6 - Bottom Right (Yellow to Navy) - Very subtle */}
      <motion.div 
        className="absolute -bottom-72 -right-72 w-[920px] h-[920px] rounded-full blur-3xl"
        style={{ 
          background: 'radial-gradient(circle, rgba(255, 179, 0, 0.14) 0%, rgba(255, 215, 0, 0.10) 30%, rgba(0, 1, 49, 0.06) 60%, transparent 75%)',
        }}
        animate={{
          x: [0, -90, 70, 0],
          y: [0, -110, 60, 0],
          scale: [1, 1.2, 1.15, 1],
        }}
        transition={{
          duration: 36,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      />

      {/* Center Orb (Yellow-Gold) - Very subtle */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full blur-3xl"
        animate={{
          scale: [1, 1.35, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Gradient on child — gradients are not animatable colors in Motion */}
        <div className="absolute inset-0 rounded-full" style={{
          background: 'radial-gradient(circle, rgba(255, 179, 0, 0.10) 0%, rgba(255, 215, 100, 0.06) 40%, transparent 75%)',
        }} />
      </motion.div>

      {/* Additional Floating Orb 8 - Top Center (Light Blue) - Very subtle */}
      <motion.div 
        className="absolute top-20 left-1/3 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{ 
          background: 'radial-gradient(circle, rgba(135, 206, 250, 0.08) 0%, rgba(0, 0, 170, 0.04) 50%, transparent 70%)',
        }}
        animate={{
          x: [0, 80, -80, 0],
          y: [0, 60, -40, 0],
          scale: [1, 1.15, 1.08, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />

      {/* Additional Floating Orb 9 - Bottom Center (Amber) - Very subtle */}
      <motion.div 
        className="absolute bottom-32 right-1/3 w-[650px] h-[650px] rounded-full blur-3xl"
        style={{ 
          background: 'radial-gradient(circle, rgba(255, 200, 0, 0.08) 0%, rgba(255, 179, 0, 0.04) 50%, transparent 70%)',
        }}
        animate={{
          x: [0, -70, 70, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.12, 1.05, 1],
        }}
        transition={{
          duration: 27,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3.5
        }}
      />

      {/* Subtle shimmer overlay effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(110deg, transparent 40%, rgba(255, 255, 255, 0.15) 50%, transparent 60%)',
          backgroundSize: '200% 100%',
        }}
        animate={{
          backgroundPosition: ['200% 0', '-200% 0'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Very subtle pulsing radial waves */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Gradient on child — gradients are not animatable colors in Motion */}
        <div className="absolute inset-0 rounded-full" style={{
          background: 'radial-gradient(circle, rgba(0, 0, 170, 0.015) 0%, transparent 70%)',
        }} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      >
        {/* Gradient on child — gradients are not animatable colors in Motion */}
        <div className="absolute inset-0 rounded-full" style={{
          background: 'radial-gradient(circle, rgba(255, 179, 0, 0.015) 0%, transparent 70%)',
        }} />
      </motion.div>

      {/* Very subtle floating color bubbles */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full blur-2xl"
        style={{
          background: 'radial-gradient(circle, rgba(255, 100, 200, 0.025) 0%, transparent 70%)',
        }}
        animate={{
          y: [0, -100, 0],
          x: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/4 w-[350px] h-[350px] rounded-full blur-2xl"
        style={{
          background: 'radial-gradient(circle, rgba(100, 200, 255, 0.025) 0%, transparent 70%)',
        }}
        animate={{
          y: [0, 100, 0],
          x: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Very subtle noise texture for depth and grain */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Very subtle animated grid overlay */}
      <motion.div 
        className="absolute inset-0 opacity-[0.008]" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, rgba(0, 1, 49, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 1, 49, 0.15) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '80px 80px'],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
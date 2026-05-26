import { useRef, useState, ReactNode } from 'react';
import { motion } from 'motion/react';

interface TiltCardProps {
  children: ReactNode;
  maxTilt?: number;
  glareEffect?: boolean;
  className?: string;
}

export function TiltCard({ 
  children, 
  maxTilt = 10, 
  glareEffect = false,
  className = '' 
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    const tiltX = (y - 0.5) * maxTilt * 2;
    const tiltY = (x - 0.5) * -maxTilt * 2;
    
    setTilt({ x: tiltX, y: tiltY });
    setGlarePosition({ x: x * 100, y: y * 100 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {glareEffect && (
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)`,
            opacity: tilt.x !== 0 || tilt.y !== 0 ? 1 : 0,
          }}
        />
      )}
      {children}
    </motion.div>
  );
}

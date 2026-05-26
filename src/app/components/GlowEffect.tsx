import { ReactNode, CSSProperties } from 'react';

interface GlowEffectProps {
  children: ReactNode;
  color?: string;
  intensity?: number;
  className?: string;
}

export function GlowEffect({ 
  children, 
  color = '#0000aa', 
  intensity = 10,
  className = '' 
}: GlowEffectProps) {
  const glowStyle: CSSProperties = {
    filter: `drop-shadow(0 0 ${intensity}px ${color}33) drop-shadow(0 0 ${intensity * 2}px ${color}22)`,
  };

  return (
    <div className={`inline-block ${className}`} style={glowStyle}>
      {children}
    </div>
  );
}

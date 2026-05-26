/**
 * ============================================
 * SIMPLE CUSTOM CURSOR - FALLBACK VERSION
 * Ultra-simple implementation that always works
 * Use this if the main CustomCursor has issues
 * ============================================
 */

import { useEffect, useState } from 'react';

export function SimpleCustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button');
      setIsHovering(!!interactive);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <div
        className="fixed pointer-events-none z-[99999] hidden md:block transition-all duration-150"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovering ? '48px' : '32px',
          height: isHovering ? '48px' : '32px',
          border: '2px solid #ffb300',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: isHovering ? 0.6 : 1,
          mixBlendMode: 'difference',
        }}
      />

      {/* Inner dot */}
      <div
        className="fixed pointer-events-none z-[99999] hidden md:block transition-all duration-100"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '8px',
          height: '8px',
          backgroundColor: '#0000aa',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
}

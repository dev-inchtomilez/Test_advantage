/**
 * ============================================
 * CUSTOM CURSOR - PROFESSIONAL & ROBUST
 * Premium interactive cursor for entire website
 * ============================================
 */

import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { colors } from '../../styles/design-tokens';

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'hover' | 'text'>('default');
  const [isVisible, setIsVisible] = useState(false);
  
  // Use motion values for smooth performance
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring configuration for smooth following
  const springConfig = { 
    damping: 25, 
    stiffness: 400, 
    mass: 0.5 
  };
  
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Faster spring for inner dot
  const dotSpringConfig = { 
    damping: 20, 
    stiffness: 600, 
    mass: 0.3 
  };
  
  const dotX = useSpring(cursorX, dotSpringConfig);
  const dotY = useSpring(cursorY, dotSpringConfig);

  // Check if element is interactive
  const checkIfInteractive = useCallback((element: HTMLElement | null): boolean => {
    if (!element) return false;

    // Check current element
    const tag = element.tagName.toLowerCase();
    const role = element.getAttribute('role');
    const isClickable = element.onclick !== null;
    const hasPointerCursor = window.getComputedStyle(element).cursor === 'pointer';
    
    // Interactive element types
    const interactiveTags = ['a', 'button', 'input', 'select', 'textarea', 'label', 'summary'];
    const interactiveRoles = ['button', 'link', 'tab', 'checkbox', 'radio', 'menuitem'];
    
    if (
      interactiveTags.includes(tag) ||
      (role && interactiveRoles.includes(role)) ||
      isClickable ||
      hasPointerCursor ||
      element.hasAttribute('data-clickable') ||
      element.classList.contains('cursor-pointer')
    ) {
      return true;
    }

    // Check if inside interactive parent
    const interactiveParent = element.closest('a, button, [role="button"], [data-clickable], .cursor-pointer');
    return interactiveParent !== null;
  }, []);

  // Check if element is text input
  const checkIfTextInput = useCallback((element: HTMLElement | null): boolean => {
    if (!element) return false;
    
    const tag = element.tagName.toLowerCase();
    const textInputTypes = ['text', 'email', 'password', 'search', 'tel', 'url', 'number'];
    
    if (tag === 'textarea') return true;
    if (tag === 'input') {
      const type = element.getAttribute('type') || 'text';
      return textInputTypes.includes(type);
    }
    
    return element.isContentEditable;
  }, []);

  useEffect(() => {
    // Only enable on desktop
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    
    if (!mediaQuery.matches) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      // Check hover state
      const target = e.target as HTMLElement;
      const interactive = checkIfInteractive(target);
      const textInput = checkIfTextInput(target);
      
      setIsHovering(interactive);
      
      if (textInput) {
        setCursorType('text');
      } else if (interactive) {
        setCursorType('hover');
      } else {
        setCursorType('default');
      }
    };

    // Mouse enter/leave handlers
    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, checkIfInteractive, checkIfTextInput]);

  // Don't render on mobile or if not visible
  if (!isVisible) return null;

  return (
    <>
      {/* Outer cursor ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            scale: cursorType === 'hover' ? 1.6 : cursorType === 'text' ? 0.8 : 1,
            opacity: cursorType === 'hover' ? 0.5 : 1,
          }}
          transition={{
            duration: 0.2,
            ease: 'easeOut',
          }}
          style={{
            width: '40px',
            height: '40px',
            border: `2px solid ${colors.brand.accent}`,
            borderRadius: '50%',
          }}
        />
      </motion.div>

      {/* Inner cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            scale: cursorType === 'hover' ? 0.5 : cursorType === 'text' ? 1.5 : 1,
          }}
          transition={{
            duration: 0.15,
            ease: 'easeOut',
          }}
          style={{
            width: '8px',
            height: '8px',
            backgroundColor: colors.brand.secondary,
            borderRadius: '50%',
          }}
        />
      </motion.div>

      {/* Hover text indicator (optional) */}
      {cursorType === 'hover' && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[99999]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: '-50%',
            translateY: 'calc(-100% - 16px)',
          }}
        >
          <div
            className="px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap"
            style={{
              backgroundColor: colors.brand.secondary,
              color: '#ffffff',
            }}
          >
            Click
          </div>
        </motion.div>
      )}
    </>
  );
}

/**
 * ============================================
 * FLOATING CTA BAR - FAST & SMOOTH
 * Snappy appearance with optimized animations
 * ============================================
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router';
import { colors, gradients } from '../../styles/design-tokens';
import { MagneticButton } from './MagneticButton';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          // Show at 600px scroll
          if (scrolled > 600 && !isDismissed) {
            setIsVisible(true);
          } else if (scrolled <= 600) {
            setIsVisible(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ 
            type: 'spring', 
            stiffness: 350,  // FASTER: Increased from 260
            damping: 18      // FASTER: Reduced from 20
          }}
          className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 sm:pb-6 pointer-events-none"
        >
          <div className="max-w-6xl mx-auto pointer-events-auto">
            <div
              className="relative rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl border border-white/20"
              style={{ 
                background: 'rgba(255, 255, 255, 0.95)',
              }}
            >
              {/* Gradient Accent */}
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: gradients.primary }} />

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 sm:px-6 py-3 sm:py-4">
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-base sm:text-lg font-bold" style={{ color: colors.brand.primary }}>
                    Ready to Build Your Growth Infrastructure?
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1">
                    Schedule a strategic consultation with our team.
                  </p>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <Link to="/contact">
                    <MagneticButton 
                      strength={0.2}
                      className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-sm text-white transition-all duration-200 hover:shadow-xl whitespace-nowrap"
                      style={{ background: gradients.primary }}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </MagneticButton>
                  </Link>

                  <button
                    onClick={handleDismiss}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-150 flex-shrink-0"
                    aria-label="Dismiss"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
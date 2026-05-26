/**
 * ============================================
 * SCROLL DEPTH INDICATOR — Back-to-top button
 * ============================================
 * Circular progress ring showing page read %
 * Appears after scrolling 400 px down.
 * Uses the shared useScrollProgress hook.
 * ============================================
 */

import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp } from 'lucide-react';
import { useScrollProgress, useScrollY } from '../hooks/useScrollY';
import { colors } from '../../styles/design-tokens';

const CIRCUMFERENCE = 2 * Math.PI * 26; // r = 26

export function ScrollDepthIndicator() {
  const scrollY    = useScrollY();
  const progress   = useScrollProgress();
  const showButton = scrollY > 400;

  const dashOffset = CIRCUMFERENCE - (CIRCUMFERENCE * progress) / 100;

  return (
    <AnimatePresence>
      {showButton && (
        <motion.div
          key="back-to-top"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: 'spring', stiffness: 400, damping: 22 }}
          className="fixed bottom-24 right-6 z-40 hidden md:block"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="relative w-14 h-14 rounded-full shadow-xl hover:scale-110 transition-transform duration-200 group backdrop-blur-sm"
            style={{
              backgroundColor: 'rgba(255,255,255,0.95)',
              border: `2px solid ${colors.brand.primary}`,
            }}
            aria-label="Back to top"
          >
            {/* Progress ring */}
            <svg
              className="absolute inset-0 w-14 h-14 -rotate-90"
              viewBox="0 0 56 56"
              aria-hidden="true"
            >
              <circle cx="28" cy="28" r="26" fill="none" stroke="#e5e7eb" strokeWidth="2.5" />
              <circle
                cx="28"
                cy="28"
                r="26"
                fill="none"
                stroke={colors.brand.secondary}
                strokeWidth="2.5"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 0.2s ease-out' }}
              />
            </svg>

            {/* Arrow icon */}
            <ChevronUp
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 group-hover:-translate-y-[13px] transition-transform duration-200"
              style={{ color: colors.brand.primary }}
            />

            {/* Percentage tooltip */}
            <span
              className="absolute -top-9 left-1/2 -translate-x-1/2 text-xs font-bold whitespace-nowrap px-2.5 py-1 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-150"
              style={{
                color: colors.brand.primary,
                backgroundColor: 'rgba(255,255,255,0.95)',
                border: `1px solid ${colors.brand.secondary}`,
              }}
            >
              {Math.round(progress)}%
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

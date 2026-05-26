/**
 * ============================================
 * DESIGN TOKEN SYSTEM - AdvantEdge
 * ============================================
 * Centralized design tokens for consistent theming
 * Inspired by: Stripe, Linear, Notion
 * ============================================
 */

// ============================================
// COLOR TOKENS
// ============================================
export const colors = {
  // Brand Colors
  brand: {
    primary: '#000131',
    secondary: '#0000aa',
    accent: '#ffb300',
  },

  // Neutral Scale
  neutral: {
    0: '#ffffff',
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712',
  },

  // Semantic Colors
  semantic: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },

  // Background System
  background: {
    primary: '#ffffff',
    secondary: '#f9fafb',
    tertiary: '#f3f4f6',
    elevated: 'rgba(255, 255, 255, 0.55)',
    gradient: 'linear-gradient(135deg, #f8fbff 0%, #eef4ff 25%, #f6f3ff 50%, #fff9f1 75%, #f3fdf7 100%)',
  },

  // Text Scale
  text: {
    primary: '#000131',
    secondary: '#374151',
    tertiary: '#6b7280',
    disabled: '#9ca3af',
    inverse: '#ffffff',
  },

  // Border System
  border: {
    subtle: 'rgba(0, 0, 0, 0.06)',
    default: 'rgba(0, 0, 0, 0.1)',
    strong: 'rgba(0, 0, 0, 0.2)',
    brand: '#0000aa',
    accent: '#ffb300',
  },
} as const;

// ============================================
// SPACING TOKENS (4px base unit)
// ============================================
export const spacing = {
  0: '0',
  1: '0.25rem',    // 4px
  2: '0.5rem',     // 8px
  3: '0.75rem',    // 12px
  4: '1rem',       // 16px
  5: '1.25rem',    // 20px
  6: '1.5rem',     // 24px
  8: '2rem',       // 32px
  10: '2.5rem',    // 40px
  12: '3rem',      // 48px
  16: '4rem',      // 64px
  20: '5rem',      // 80px
  24: '6rem',      // 96px
  32: '8rem',      // 128px
  40: '10rem',     // 160px
  48: '12rem',     // 192px
  56: '14rem',     // 224px
  64: '16rem',     // 256px
} as const;

// ============================================
// TYPOGRAPHY TOKENS
// ============================================
export const typography = {
  // Font Families
  fontFamily: {
    primary: 'Raleway, system-ui, -apple-system, sans-serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, monospace',
  },

  // Font Sizes (Modular Scale: 1.250 - Major Third)
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
  },

  // Font Weights
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },

  // Line Heights
  lineHeight: {
    none: '1',
    tight: '1.1',
    snug: '1.15',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },

  // Letter Spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

// ============================================
// RADIUS TOKENS
// ============================================
export const radius = {
  none: '0',
  sm: '0.375rem',   // 6px
  base: '0.5rem',   // 8px
  md: '0.75rem',    // 12px
  lg: '1rem',       // 16px
  xl: '1.25rem',    // 20px
  '2xl': '1.5rem',  // 24px
  '3xl': '2rem',    // 32px
  full: '9999px',
} as const;

// ============================================
// SHADOW TOKENS
// ============================================
export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  lg: '0 8px 24px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
  glow: '0 0 20px rgba(0, 0, 170, 0.15)',
  glowAccent: '0 0 20px rgba(255, 179, 0, 0.2)',
} as const;

// ============================================
// MOTION TOKENS
// ============================================
export const motion = {
  // Durations
  duration: {
    instant: '0ms',
    fast: '150ms',
    base: '300ms',
    slow: '500ms',
    slower: '800ms',
  },

  // Easing Functions
  easing: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.22, 1, 0.36, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },

  // Framer Motion Variants
  variants: {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    slideUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
    },
    slideDown: {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.95 },
    },
  },
} as const;

// ============================================
// BREAKPOINT TOKENS
// ============================================
export const breakpoints = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// ============================================
// Z-INDEX SCALE
// ============================================
export const zIndex = {
  hide: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  modalBackdrop: 1300,
  modal: 1400,
  popover: 1500,
  tooltip: 1600,
} as const;

// ============================================
// GRADIENT PRESETS
// ============================================
export const gradients = {
  primary: 'linear-gradient(135deg, #000131 0%, #0000aa 100%)',
  accent: 'linear-gradient(to right, #000131, #0000aa)',
  soft: 'linear-gradient(135deg, #f8fbff 0%, #eef4ff 25%, #f6f3ff 50%, #fff9f1 75%, #f3fdf7 100%)',
  glow: 'radial-gradient(circle at center, rgba(0, 0, 170, 0.1) 0%, transparent 70%)',
  
  // Advanced Mesh Gradients (80% white, 20% colorful)
  mesh: {
    default: `
      radial-gradient(at 10% 20%, #f0f9ff 0%, transparent 50%),
      radial-gradient(at 85% 60%, #fef3c7 0%, transparent 50%),
      radial-gradient(at 50% 85%, #ede9fe 0%, transparent 50%),
      linear-gradient(to bottom, #ffffff 0%, #fcfcfd 100%)
    `,
    subtle: `
      radial-gradient(at 20% 30%, #f0f9ff15 0%, transparent 60%),
      radial-gradient(at 80% 50%, #fef3c710 0%, transparent 60%),
      radial-gradient(at 50% 80%, #ede9fe12 0%, transparent 60%),
      #ffffff
    `,
  },
  
  // Section Backgrounds - Distinct and Visible
  sections: {
    // White with subtle blue tint
    white: '#ffffff',
    
    // Very light blue (sky)
    lightBlue: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
    
    // Very light purple (lavender)
    lightPurple: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)',
    
    // Very light yellow/cream
    lightCream: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
    
    // Very light gray (neutral)
    lightGray: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)',
    
    // Very light green (mint)
    lightMint: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
    
    // Very light pink (blush)
    lightPink: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
    
    // Navy gradient (for standout sections)
    navy: 'linear-gradient(135deg, #000131 0%, #0000aa 100%)',
    
    // Subtle pattern overlays
    pattern: {
      dots: `radial-gradient(circle, rgba(0, 1, 49, 0.03) 1px, transparent 1px)`,
      grid: `linear-gradient(rgba(0, 1, 49, 0.03) 1px, transparent 1px),
             linear-gradient(90deg, rgba(0, 1, 49, 0.03) 1px, transparent 1px)`,
    },
  },
  
  // Gradient Orb colors (for floating orbs)
  orbColors: {
    skyBlue: '#f0f9ff',
    cream: '#fef3c7',
    lavender: '#ede9fe',
    mint: '#f0fdf4',
    blush: '#fef2f2',
    ice: '#dbeafe',
  },
} as const;

// ============================================
// BLUR TOKENS
// ============================================
export const blur = {
  none: '0',
  sm: '4px',
  base: '8px',
  md: '10px',
  lg: '12px',
  xl: '16px',
  '2xl': '24px',
  '3xl': '40px',
} as const;

// ============================================
// GLASS MORPHISM PRESETS
// ============================================
export const glass = {
  subtle: {
    background: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  base: {
    background: 'rgba(255, 255, 255, 0.55)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(0, 0, 0, 0.06)',
  },
  strong: {
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(0, 0, 0, 0.1)',
  },
} as const;

// ============================================
// EXPORT ALL TOKENS
// ============================================
export const tokens = {
  colors,
  spacing,
  typography,
  radius,
  shadows,
  motion,
  breakpoints,
  zIndex,
  gradients,
  blur,
  glass,
} as const;

export default tokens;
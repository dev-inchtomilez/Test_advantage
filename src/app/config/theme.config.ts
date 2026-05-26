/**
 * Global Theme Configuration for AdvantEdge
 * Centralized design system configuration
 */

export const theme = {
  // Typography - Raleway Font System
  typography: {
    fontFamily: "'Raleway', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    
    // Explicit sizes (never use arbitrary)
    sizes: {
      // Page titles - H1
      h1: {
        mobile: '26px',
        desktop: '30px',
        weight: 500,
        lineHeight: 1.4,
        letterSpacing: '-0.02em',
      },
      // Section headings - H2
      h2: {
        mobile: '20px',
        desktop: '22px',
        weight: 700,
        lineHeight: 1.2,
        letterSpacing: '-0.02em',
      },
      // Sub-sections - H3
      h3: {
        mobile: '20px',
        desktop: '22px',
        weight: 500,
        lineHeight: 1.4,
        letterSpacing: '-0.01em',
      },
      // Card titles - H4
      h4: {
        mobile: '16px',
        desktop: '18px',
        weight: 500,
        lineHeight: 1.4,
        letterSpacing: '0',
      },
      // Main content - Body
      body: {
        mobile: '14px',
        desktop: '15px',
        weight: 400,
        lineHeight: 1.6,
        letterSpacing: '0',
      },
      // Meta, captions - Small
      small: {
        mobile: '12px',
        desktop: '13px',
        weight: 400,
        lineHeight: 1.6,
        letterSpacing: '0',
      },
      // CTA buttons - Button
      button: {
        mobile: '14px',
        desktop: '15px',
        weight: 600,
        lineHeight: 1.4,
        letterSpacing: '0',
      },
      // Hero headings - Display
      display: {
        mobile: '40px',
        desktop: '72px',
        weight: 500,
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
      },
      // Section headings - Section
      section: {
        mobile: '30px',
        desktop: '48px',
        weight: 600,
        lineHeight: 1.2,
        letterSpacing: '-0.02em',
      },
      // Lead text - Lead
      lead: {
        mobile: '18px',
        desktop: '20px',
        weight: 400,
        lineHeight: 1.6,
        letterSpacing: '0',
      },
    },
  },

  // Colors - Light Theme
  colors: {
    primary: {
      mustard: {
        50: '#fefce8',
        100: '#fef9c3',
        200: '#fef08a',
        300: '#fde047',
        400: '#facc15',
        500: '#eab308',
        600: '#ca8a04',
        700: '#a16207',
        800: '#854d0e',
        900: '#713f12',
      },
      cyan: {
        50: '#ecfeff',
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
      },
      blue: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
      },
    },
    neutral: {
      white: '#ffffff',
      gray: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
      },
      black: '#000000',
    },
  },

  // Spacing System
  spacing: {
    card: {
      compact: '16px',
      default: '24px',
      large: '32px',
      xlarge: '48px',
    },
    section: {
      mobile: '80px',  // py-20
      desktop: '128px', // md:py-32
    },
    grid: {
      asymmetric: {
        mobile: '8px',
        tablet: '12px',
        desktop: '12px',
      },
      uniform: {
        mobile: '16px',
        tablet: '24px',
        desktop: '32px',
      },
    },
  },

  // Border Radius
  radius: {
    card: '12px',
    button: '12px',
    section: '24px',
    large: '32px',
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  },

  // Transitions
  transitions: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },

  // Breakpoints
  breakpoints: {
    mobile: '0px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },

  // Grid System
  grid: {
    asymmetric: {
      columns: 8,
      pattern: {
        // 12-card repeating pattern
        wide: [0, 4, 8],      // spans 4 columns
        medium: [1, 3, 7, 10], // spans 3 columns
        small: [2, 5, 6, 9, 11], // spans 2 columns
      },
    },
    uniform: {
      columns: {
        2: 2,
        3: 3,
        4: 4,
        5: 5,
      },
    },
  },
} as const;

export type Theme = typeof theme;
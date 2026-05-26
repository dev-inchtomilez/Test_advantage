/**
 * ============================================
 * BACKGROUND PRESETS - Gradient Configurations
 * ============================================
 * Pre-configured gradient systems for different pages
 * ============================================
 */

export interface GradientOrb {
  color: string;
  size: number;
  position: { x: string; y: string };
  parallax: number;
  blur?: number;
}

export interface BackgroundPreset {
  name: string;
  meshColors: string[];
  orbs: GradientOrb[];
  intensity: 'subtle' | 'medium' | 'vibrant';
  animationSpeed: number;
}

// ============================================
// PRESET CONFIGURATIONS
// ============================================

export const backgroundPresets = {
  // Default preset - 60% white, 40% LIGHT pastel gradients!
  default: {
    name: 'Default Mesh',
    meshColors: [
      '#ffffff', // White base
      '#f0f9ff', // Very light blue
      '#ffffff', // White
      '#fef2f2', // Very light pink
      '#fefefe', // Almost white
      '#ffffff', // White
      '#faf5ff', // Very light purple
      '#f8fafc', // Very light blue-gray
      '#ffffff', // White
      '#fce7f3', // Light pink
      '#fcfcfc', // Near white
      '#ffffff', // White
      '#eff6ff', // Light blue
      '#fefefe', // Almost white
      '#ffffff', // White
      '#f5f3ff', // Light purple
      '#f9fafb', // Very light gray
      '#ffffff', // White
      '#fbf5ff', // Very light lavender
      '#ffffff', // White
    ],
    orbs: [
      {
        color: '#e0f2fe', // Very light sky blue
        size: 650,
        position: { x: '10%', y: '20%' },
        parallax: 0.3,
        blur: 150,
      },
      {
        color: '#fce7f3', // Very light pink
        size: 620,
        position: { x: '85%', y: '50%' },
        parallax: 0.35,
        blur: 150,
      },
      {
        color: '#f3e8ff', // Very light purple
        size: 600,
        position: { x: '45%', y: '85%' },
        parallax: 0.32,
        blur: 155,
      },
      {
        color: '#dbeafe', // Light blue
        size: 580,
        position: { x: '70%', y: '15%' },
        parallax: 0.3,
        blur: 145,
      },
      {
        color: '#ede9fe', // Light lavender
        size: 560,
        position: { x: '30%', y: '60%' },
        parallax: 0.28,
        blur: 160,
      },
    ],
    intensity: 'subtle' as const,
    animationSpeed: 0.5,
  },

  // Minimal preset - 80% white, 20% barely visible gradients
  minimal: {
    name: 'Minimal',
    meshColors: [
      '#ffffff',
      '#fefefe',
      '#ffffff',
      '#fcfcfc',
      '#ffffff',
      '#fafafa',
      '#ffffff',
    ],
    orbs: [
      {
        color: '#f8fafc',
        size: 400,
        position: { x: '20%', y: '30%' },
        parallax: 0.2,
        blur: 120,
      },
      {
        color: '#fef2f2',
        size: 380,
        position: { x: '75%', y: '65%' },
        parallax: 0.25,
        blur: 125,
      },
    ],
    intensity: 'subtle' as const,
    animationSpeed: 0.3,
  },

  // Vibrant preset - 50% white, 50% soft colorful meshes
  vibrant: {
    name: 'Vibrant',
    meshColors: [
      '#ffffff',
      '#dbeafe', // Soft blue
      '#fbcfe8', // Soft pink
      '#ffffff',
      '#ede9fe', // Soft lavender
      '#e0f2fe', // Sky blue
      '#ffffff',
      '#e0e7ff', // Soft indigo
      '#fce7f3', // Light pink
      '#ffffff',
      '#c7d2fe', // Medium indigo
      '#f0f9ff', // Very light blue
      '#ffffff',
      '#f3e8ff', // Light purple
      '#fef2f2', // Very light pink
      '#ffffff',
    ],
    orbs: [
      {
        color: '#bfdbfe', // Soft blue
        size: 700,
        position: { x: '8%', y: '18%' },
        parallax: 0.4,
        blur: 130,
      },
      {
        color: '#fbcfe8', // Soft pink
        size: 670,
        position: { x: '88%', y: '48%' },
        parallax: 0.45,
        blur: 130,
      },
      {
        color: '#ede9fe', // Soft lavender
        size: 650,
        position: { x: '42%', y: '88%' },
        parallax: 0.42,
        blur: 135,
      },
      {
        color: '#dbeafe', // Light blue
        size: 630,
        position: { x: '72%', y: '12%' },
        parallax: 0.4,
        blur: 125,
      },
      {
        color: '#e0e7ff', // Light indigo
        size: 610,
        position: { x: '28%', y: '58%' },
        parallax: 0.38,
        blur: 140,
      },
    ],
    intensity: 'medium' as const,
    animationSpeed: 0.7,
  },
} as const;

export type PresetName = keyof typeof backgroundPresets;
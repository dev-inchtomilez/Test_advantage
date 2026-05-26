/**
 * ============================================
 * BACKGROUND SYSTEM - Main Orchestrator
 * ============================================
 * Combines all background layers:
 * - Mesh gradient base
 * - Floating gradient orbs
 * - Noise texture overlay
 * - Parallax scroll effects
 * ============================================
 */

import { MeshGradient } from './MeshGradient';
import { GradientOrbs, GradientOrb } from './GradientOrbs';
import { NoiseTexture } from './NoiseTexture';
import { backgroundPresets, PresetName } from '../../../styles/background-presets';

interface BackgroundSystemProps {
  variant?: 'mesh' | 'minimal' | 'none';
  preset?: PresetName;
  intensity?: 'subtle' | 'medium' | 'vibrant';
  parallax?: boolean;
  noise?: boolean;
  customOrbs?: GradientOrb[];
  animationSpeed?: number;
}

export function BackgroundSystem({
  variant = 'mesh',
  preset = 'default',
  intensity = 'subtle',
  parallax = true,
  noise = true,
  customOrbs,
  animationSpeed = 0.5,
}: BackgroundSystemProps) {
  
  // Return null if variant is 'none'
  if (variant === 'none') {
    return <div className="fixed inset-0 bg-white" style={{ zIndex: -20 }} />;
  }

  // Get preset configuration
  const presetConfig = backgroundPresets[preset];
  const orbs = customOrbs || presetConfig.orbs;

  return (
    <div className="fixed inset-0" style={{ zIndex: -20 }}>
      {/* Base Mesh Gradient */}
      {variant === 'mesh' && (
        <MeshGradient
          colors={presetConfig.meshColors}
          animationSpeed={animationSpeed}
          intensity={intensity}
        />
      )}

      {/* Minimal variant - just simple gradient */}
      {variant === 'minimal' && (
        <div className="fixed inset-0 bg-gradient-to-b from-white to-gray-50" style={{ zIndex: -20 }} />
      )}

      {/* Floating Gradient Orbs with Parallax */}
      {parallax && variant === 'mesh' && (
        <GradientOrbs orbs={orbs} animate={true} />
      )}

      {/* Subtle Noise Texture Overlay */}
      {noise && <NoiseTexture opacity={0.03} blend="overlay" />}
    </div>
  );
}
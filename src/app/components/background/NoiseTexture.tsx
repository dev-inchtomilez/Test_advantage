/**
 * ============================================
 * NOISE TEXTURE - Subtle Grain Overlay
 * ============================================
 * Adds tactile depth with SVG noise pattern
 * 2-3% opacity for subtle texture
 * ============================================
 */

interface NoiseTextureProps {
  opacity?: number;
  blend?: 'normal' | 'multiply' | 'overlay' | 'soft-light';
}

export function NoiseTexture({ opacity = 0.03, blend = 'overlay' }: NoiseTextureProps) {
  return (
    <>
      {/* SVG Noise Pattern Definition */}
      <svg className="fixed inset-0 w-0 h-0 pointer-events-none">
        <defs>
          <filter id="noise-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </defs>
      </svg>

      {/* Noise Overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          opacity,
          mixBlendMode: blend,
          zIndex: -5,
          filter: 'url(#noise-filter)',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          transform: 'translateZ(0)',
        }}
      />
    </>
  );
}
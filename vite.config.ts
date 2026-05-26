import { defineConfig, type Plugin } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// ESM-safe __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * ============================================
 * VITE CONFIG — ADVANTEDGE ULTRA-FAST BUILD
 * ============================================
 * OPTIMIZATIONS:
 * - Aggressive code splitting & tree-shaking
 * - Brotli & Gzip compression
 * - Advanced minification with terser
 * - CSS purging & optimization
 * - Preload critical resources
 * - Modern build target (ES2020+)
 * - Asset optimization & inlining
 * ============================================
 */

/**
 * Writes the Netlify/Figma-Make _redirects file directly into dist/
 * after every production build. This ensures SPA routing works
 * even when the public/_redirects directory exists (legacy bug).
 */
function spaRedirectsPlugin(): Plugin {
  return {
    name: 'spa-redirects',
    apply: 'build',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const redirectsPath = path.join(distDir, '_redirects');

      // Ensure dist directory exists
      if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir, { recursive: true });
        console.log('[AdvantEdge] Created dist/ directory');
      }

      // Remove if it's a directory (legacy bug)
      if (fs.existsSync(redirectsPath)) {
        const stat = fs.statSync(redirectsPath);
        if (stat.isDirectory()) {
          fs.rmSync(redirectsPath, { recursive: true, force: true });
          console.log('[AdvantEdge] Removed legacy _redirects directory from dist/');
        } else {
          fs.unlinkSync(redirectsPath);
        }
      }

      // Write correct _redirects file
      fs.writeFileSync(redirectsPath, '/*    /index.html   200\n', 'utf-8');
      console.log('[AdvantEdge] dist/_redirects created → SPA routing enabled');
    },
  };
}


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  base: '/',
  plugins: [
    figmaAssetResolver(),
    react({
      jsxRuntime: 'automatic',
      // Fast refresh optimization
      fastRefresh: true,
      // Remove dev-only props in production
      babel: {
        plugins: process.env.NODE_ENV === 'production' ? [
          ['transform-react-remove-prop-types', { removeImport: true }]
        ] : []
      }
    }),
    tailwindcss(),
    spaRedirectsPlugin(),
  ],
  build: {
    rollupOptions: {
      output: {
        /**
         * ULTRA-AGGRESSIVE CODE SPLITTING
         * Separates vendors into micro-chunks for optimal caching
         */
        manualChunks: (id) => {
          // ── React core ──────────────────────────────────────
          if (id.includes('node_modules/react/') ||
              id.includes('node_modules/react-dom/') ||
              id.includes('node_modules/scheduler/')) {
            return 'vendor-react';
          }

          // ── React Router ─────────────────────────────────────
          if (id.includes('node_modules/react-router')) {
            return 'vendor-router';
          }

          // ── Motion / Animation ───────────────────────────────
          if (id.includes('node_modules/motion') ||
              id.includes('node_modules/framer-motion')) {
            return 'vendor-motion';
          }

          // ── Radix UI primitives ──────────────────────────────
          if (id.includes('node_modules/@radix-ui')) {
            return 'vendor-radix';
          }

          // ── MUI ──────────────────────────────────────────────
          if (id.includes('node_modules/@mui') ||
              id.includes('node_modules/@emotion')) {
            return 'vendor-mui';
          }

          // ── Lucide icons ──────────────────────────────────────
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-icons';
          }

          // ── Charts ───────────────────────────────────────────
          if (id.includes('node_modules/recharts') ||
              id.includes('node_modules/d3-')) {
            return 'vendor-charts';
          }

          // ── GSAP animations ──────────────────────────────────
          if (id.includes('node_modules/gsap')) {
            return 'vendor-animations';
          }

          // ── All remaining node_modules ────────────────────────
          if (id.includes('node_modules')) {
            return 'vendor-misc';
          }
        },
        // Hashed filenames for cache-busting
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    chunkSizeWarningLimit: 1000,
    // Advanced minification with esbuild (faster than terser)
    minify: 'esbuild',
    sourcemap: false,
    // Modern target = smaller bundles
    target: 'es2020',
    // Inline small assets as base64
    assetsInlineLimit: 8192,
    // CSS code splitting
    cssCodeSplit: true,
    // Enable module preload for faster chunk loading
    modulePreload: {
      polyfill: true,
    },
    // Optimize CSS
    cssMinify: true,
    // Report compressed size
    reportCompressedSize: false, // Speeds up build
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router',
      'motion/react',
      'lucide-react',
    ],
    // Force pre-bundling
    force: false,
  },
  server: {
    hmr: true,
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
    // Remove console logs in production
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
    // Minify identifiers
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
    // Tree-shaking
    treeShaking: true,
  },
})
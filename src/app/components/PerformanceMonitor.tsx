/**
 * ============================================
 * PERFORMANCE MONITOR COMPONENT
 * ============================================
 * Displays performance metrics in development mode
 * Hidden in production
 * ============================================
 */

import { useEffect, useState } from 'react';

export function PerformanceMonitor() {
  const [showMonitor, setShowMonitor] = useState(false);
  const [metrics, setMetrics] = useState({
    fps: 60,
    loadTime: 0,
    score: 100,
  });

  useEffect(() => {
    // Only show in development mode
    const isDev = import.meta.env.DEV;
    if (!isDev) return;

    // Check if user wants to see performance monitor (shift+P to toggle)
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key === 'P') {
        setShowMonitor(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    // Measure performance metrics
    let frameCount = 0;
    let lastTime = performance.now();
    let animationId: number;

    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      const elapsed = currentTime - lastTime;

      if (elapsed >= 1000) {
        const fps = Math.round((frameCount * 1000) / elapsed);

        // Use modern PerformanceNavigationTiming API (replaces deprecated performance.timing)
        let loadTime = 0;
        const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
        if (navEntries.length > 0) {
          const nav = navEntries[0];
          loadTime = Math.round((nav.loadEventEnd - nav.startTime) / 1000);
        }

        setMetrics({
          fps,
          loadTime,
          score: Math.min(100, Math.max(0, Math.round((fps / 60) * 100))),
        });

        frameCount = 0;
        lastTime = currentTime;
      }

      animationId = requestAnimationFrame(measureFPS);
    };

    if (showMonitor) {
      animationId = requestAnimationFrame(measureFPS);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [showMonitor]);

  // Don't render in production
  if (!import.meta.env.DEV) {
    return null;
  }

  // Don't render if not toggled on
  if (!showMonitor) {
    return null;
  }

  return (
    <div
      className="fixed bottom-4 right-4 z-[9999] pointer-events-none"
      style={{
        fontFamily: 'monospace',
        fontSize: '12px',
      }}
    >
      <div
        className="bg-black/80 text-white rounded-lg p-3 backdrop-blur-sm border border-white/10 pointer-events-auto"
        style={{
          minWidth: '180px',
        }}
      >
        <div className="text-xs font-bold mb-2 text-yellow-400">
          Performance Monitor
        </div>
        
        <div className="space-y-1">
          <div className="flex justify-between">
            <span className="text-gray-400">FPS:</span>
            <span className={metrics.fps >= 55 ? 'text-green-400' : metrics.fps >= 30 ? 'text-yellow-400' : 'text-red-400'}>
              {metrics.fps}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-400">Load:</span>
            <span className="text-blue-400">{metrics.loadTime}s</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-400">Score:</span>
            <span className={metrics.score >= 90 ? 'text-green-400' : metrics.score >= 70 ? 'text-yellow-400' : 'text-red-400'}>
              {metrics.score}
            </span>
          </div>
        </div>

        <div className="text-[10px] text-gray-500 mt-2 pt-2 border-t border-white/10">
          Press Shift+P to toggle
        </div>
      </div>
    </div>
  );
}
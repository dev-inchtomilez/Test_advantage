/**
 * ============================================
 * PERFORMANCE MONITORING & WEB VITALS
 * ============================================
 * Tracks Core Web Vitals (LCP, FID, CLS, FCP, TTFB)
 * and custom performance metrics for AdvantEdge
 * ============================================
 */

interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: number;
}

// Web Vitals thresholds (Google standards)
const THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 },
  FID: { good: 100, poor: 300 },
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  TTFB: { good: 800, poor: 1800 },
};

/**
 * Calculate rating based on value and thresholds
 */
function getRating(
  value: number,
  threshold: { good: number; poor: number }
): 'good' | 'needs-improvement' | 'poor' {
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

/**
 * Track Core Web Vitals
 */
export function trackWebVitals() {
  if (typeof window === 'undefined') return;

  // LCP - Largest Contentful Paint
  const observeLCP = () => {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        const lcp = lastEntry.startTime;

        const metric: PerformanceMetric = {
          name: 'LCP',
          value: lcp,
          rating: getRating(lcp, THRESHOLDS.LCP),
          timestamp: Date.now(),
        };

        sendToAnalytics(metric);
      });

      observer.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch (e) {
      // PerformanceObserver not supported
    }
  };

  // FID - First Input Delay
  const observeFID = () => {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          const fid = entry.processingStart - entry.startTime;

          const metric: PerformanceMetric = {
            name: 'FID',
            value: fid,
            rating: getRating(fid, THRESHOLDS.FID),
            timestamp: Date.now(),
          };

          sendToAnalytics(metric);
        });
      });

      observer.observe({ type: 'first-input', buffered: true });
    } catch (e) {
      // PerformanceObserver not supported
    }
  };

  // CLS - Cumulative Layout Shift
  const observeCLS = () => {
    try {
      let clsScore = 0;

      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsScore += entry.value;
          }
        });

        const metric: PerformanceMetric = {
          name: 'CLS',
          value: clsScore,
          rating: getRating(clsScore, THRESHOLDS.CLS),
          timestamp: Date.now(),
        };

        sendToAnalytics(metric);
      });

      observer.observe({ type: 'layout-shift', buffered: true });
    } catch (e) {
      // PerformanceObserver not supported
    }
  };

  // FCP - First Contentful Paint
  const observeFCP = () => {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            const fcp = entry.startTime;

            const metric: PerformanceMetric = {
              name: 'FCP',
              value: fcp,
              rating: getRating(fcp, THRESHOLDS.FCP),
              timestamp: Date.now(),
            };

            sendToAnalytics(metric);
          }
        });
      });

      observer.observe({ type: 'paint', buffered: true });
    } catch (e) {
      // PerformanceObserver not supported
    }
  };

  // TTFB - Time to First Byte
  const measureTTFB = () => {
    try {
      const navEntry = performance.getEntriesByType('navigation')[0] as any;
      if (navEntry) {
        const ttfb = navEntry.responseStart - navEntry.requestStart;

        const metric: PerformanceMetric = {
          name: 'TTFB',
          value: ttfb,
          rating: getRating(ttfb, THRESHOLDS.TTFB),
          timestamp: Date.now(),
        };

        sendToAnalytics(metric);
      }
    } catch (e) {
      // Navigation Timing not supported
    }
  };

  // Initialize all observers
  observeLCP();
  observeFID();
  observeCLS();
  observeFCP();
  measureTTFB();
}

/**
 * Send metrics to analytics (console in dev, real analytics in prod)
 */
function sendToAnalytics(metric: PerformanceMetric) {
  // Store in localStorage for debugging
  try {
    const metrics = JSON.parse(localStorage.getItem('performance_metrics') || '[]');
    metrics.push(metric);
    // Keep only last 50 metrics
    if (metrics.length > 50) metrics.shift();
    localStorage.setItem('performance_metrics', JSON.stringify(metrics));
  } catch (e) {
    // localStorage not available
  }

  // Log in development
  if (process.env.NODE_ENV === 'development') {
    const emoji = metric.rating === 'good' ? '✅' : metric.rating === 'needs-improvement' ? '⚠️' : '❌';
    console.log(
      `${emoji} ${metric.name}: ${metric.value.toFixed(2)}ms (${metric.rating})`
    );
  }

  // In production, send to your analytics service
  // Example: Google Analytics, Sentry, etc.
  // if (process.env.NODE_ENV === 'production') {
  //   gtag('event', 'web_vitals', {
  //     name: metric.name,
  //     value: Math.round(metric.value),
  //     rating: metric.rating,
  //   });
  // }
}

/**
 * Measure custom timing
 */
export function measureTiming(name: string, startTime: number) {
  const duration = performance.now() - startTime;
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`⏱️ ${name}: ${duration.toFixed(2)}ms`);
  }

  return duration;
}

/**
 * Get performance summary
 */
export function getPerformanceSummary(): PerformanceMetric[] {
  try {
    return JSON.parse(localStorage.getItem('performance_metrics') || '[]');
  } catch {
    return [];
  }
}

/**
 * Preload critical resources
 */
export function preloadCriticalResources() {
  if (typeof window === 'undefined') return;

  // Preload critical fonts
  const fonts = [
    '/fonts/Raleway-Bold.woff2',
    '/fonts/Raleway-Regular.woff2',
  ];

  fonts.forEach((font) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    link.href = font;
    document.head.appendChild(link);
  });
}

/**
 * Optimize images with lazy loading observer
 */
export function initLazyLoading() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const imageObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    },
    {
      rootMargin: '50px 0px',
      threshold: 0.01,
    }
  );

  // Observe all images with data-src attribute
  document.querySelectorAll('img[data-src]').forEach((img) => {
    imageObserver.observe(img);
  });
}

/**
 * Report bundle size (dev only)
 */
export function reportBundleSize() {
  if (process.env.NODE_ENV !== 'development') return;

  const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
  let totalSize = 0;

  resources.forEach((resource) => {
    if (resource.name.includes('.js') || resource.name.includes('.css')) {
      const size = resource.transferSize || 0;
      totalSize += size;
    }
  });

  const sizeInKB = (totalSize / 1024).toFixed(2);
  console.log(`📦 Total Bundle Size: ${sizeInKB} KB`);
}

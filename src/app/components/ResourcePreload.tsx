/**
 * ============================================
 * RESOURCE PRELOAD - FASTER PAGE LOADS
 * Preconnect, DNS prefetch, and preload critical resources
 * ============================================
 */

import { useEffect } from 'react';

/**
 * Preload critical resources for faster page loads
 */
export function ResourcePreload() {
  useEffect(() => {
    // Preconnect to external domains (highest priority)
    const preconnectDomains = [
      'https://images.unsplash.com',
    ];

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // DNS prefetch for lower priority domains
    const dnsPrefetchDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
    ];

    dnsPrefetchDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });

    // Cleanup not needed as these hints remain useful throughout the page lifecycle
  }, []);

  return null;
}

/**
 * Preload specific images
 */
export function preloadImages(urls: string[]) {
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
}

/**
 * Preload fonts
 */
export function preloadFonts(urls: string[]) {
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = 'font/woff2';
    link.href = url;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
}

/**
 * ============================================
 * USE IN VIEWPORT HOOK
 * ============================================
 * Optimized viewport detection with IntersectionObserver
 * For performance-critical scroll animations
 * ============================================
 */

import { useEffect, useState, useRef, RefObject } from 'react';

interface UseInViewportOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Hook to detect when an element is in viewport
 * @param options - IntersectionObserver options
 * @returns [ref, isInViewport, hasBeenInViewport]
 */
export function useInViewport<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewportOptions = {}
): [RefObject<T>, boolean, boolean] {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
  } = options;

  const ref = useRef<T>(null);
  const [isInViewport, setIsInViewport] = useState(false);
  const [hasBeenInViewport, setHasBeenInViewport] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Skip if already triggered and triggerOnce is true
    if (triggerOnce && hasBeenInViewport) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        
        setIsInViewport(inView);
        
        if (inView && !hasBeenInViewport) {
          setHasBeenInViewport(true);
          
          // Disconnect if triggerOnce
          if (triggerOnce) {
            observer.disconnect();
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, hasBeenInViewport]);

  return [ref, isInViewport, hasBeenInViewport];
}

/**
 * Hook to detect multiple elements in viewport
 * @param count - Number of elements
 * @param options - IntersectionObserver options
 * @returns Array of [ref, isInViewport] tuples
 */
export function useMultipleInViewport<T extends HTMLElement = HTMLDivElement>(
  count: number,
  options: UseInViewportOptions = {}
): Array<[RefObject<T>, boolean]> {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
  } = options;

  const refs = useRef<RefObject<T>[]>(
    Array.from({ length: count }, () => ({ current: null }))
  );
  
  const [inViewportStates, setInViewportStates] = useState<boolean[]>(
    Array(count).fill(false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refs.current.findIndex(ref => ref.current === entry.target);
          if (index !== -1) {
            setInViewportStates(prev => {
              const newStates = [...prev];
              newStates[index] = entry.isIntersecting;
              return newStates;
            });
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    refs.current.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return refs.current.map((ref, index) => [ref, inViewportStates[index]]);
}

/**
 * Hook for lazy loading images
 * @param options - IntersectionObserver options
 * @returns [ref, shouldLoad]
 */
export function useLazyLoad<T extends HTMLElement = HTMLImageElement>(
  options: UseInViewportOptions = {}
): [RefObject<T>, boolean] {
  const [ref, , hasBeenInViewport] = useInViewport<T>({
    ...options,
    triggerOnce: true,
    threshold: 0,
    rootMargin: '50px', // Start loading before element enters viewport
  });

  return [ref, hasBeenInViewport];
}

/**
 * Hook for scroll-triggered animations
 * @param options - IntersectionObserver options
 * @returns [ref, shouldAnimate]
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewportOptions = {}
): [RefObject<T>, boolean] {
  const [ref, , hasBeenInViewport] = useInViewport<T>({
    ...options,
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '-50px',
  });

  return [ref, hasBeenInViewport];
}

/**
 * ============================================
 * GLOBAL TYPE DEFINITIONS
 * ============================================
 */

interface Window {
  // Performance monitoring
  getPerformanceReport: () => any;
  getPerformanceScore: () => number;
  clearPerformanceData: () => void;
  
  // Request Idle Callback
  requestIdleCallback: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
  cancelIdleCallback: (handle: number) => void;
}

interface IdleRequestCallback {
  (deadline: IdleDeadline): void;
}

interface IdleDeadline {
  readonly didTimeout: boolean;
  timeRemaining(): number;
}

interface IdleRequestOptions {
  timeout?: number;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

declare module 'figma:asset/*' {
  const content: string;
  export default content;
}

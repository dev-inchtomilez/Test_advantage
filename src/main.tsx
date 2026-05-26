/**
 * ============================================
 * ADVANTEDGE — ENHANCED APP ENTRY POINT
 * ============================================
 * Version: 9.0 - Production-Ready SPA
 * 
 * CRITICAL FEATURES:
 * 1. Global Error Boundary with detailed fallback UI
 * 2. Root element validation
 * 3. Graceful error handling
 * 4. Initial loader management
 * 5. Console error monitoring (DEV only)
 * 
 * Entry chain:
 *   index.html → /src/main.tsx → ./app/App → ./routes
 * ============================================
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './styles/index.css';

// Performance monitoring utilities (lazy loaded)
let performanceInitialized = false;

/**
 * Initialize performance monitoring after app loads
 */
function initPerformanceMonitoring() {
  if (performanceInitialized || typeof window === 'undefined') return;
  performanceInitialized = true;

  // Dynamically import and initialize performance utilities
  import('./app/utils/performance')
    .then(({ trackWebVitals, preloadCriticalResources }) => {
      // Delay execution to avoid blocking initial render
      setTimeout(() => {
        trackWebVitals();
        preloadCriticalResources();
      }, 100);
    })
    .catch((err) => {
      // Silently fail - performance monitoring is non-critical
      if (import.meta.env.DEV) {
        console.warn('[Performance] Failed to initialize monitoring:', err);
      }
    });
}

// ============================================
// ENHANCED ERROR BOUNDARY
// ============================================
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error; errorInfo?: React.ErrorInfo }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('[AdvantEdge] React Error Boundary Caught:', error);
    console.error('[Error Info]:', errorInfo);
    
    // Log to external error tracking service (if configured)
    if (typeof window !== 'undefined' && (window as any).trackError) {
      (window as any).trackError(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: '20px',
            fontFamily: "'Raleway', system-ui, sans-serif",
            backgroundColor: '#fff',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: '#FEE2E2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px',
            }}
          >
            <svg
              style={{ width: '40px', height: '40px', color: '#DC2626' }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          <h1
            style={{
              color: '#000131',
              marginBottom: '16px',
              fontSize: '28px',
              fontWeight: '700',
            }}
          >
            Application Error
          </h1>

          <p
            style={{
              color: '#666',
              marginBottom: '24px',
              maxWidth: '600px',
              fontSize: '16px',
              lineHeight: '1.6',
            }}
          >
            {this.state.error?.message ||
              'An unexpected error occurred. Please try reloading the page.'}
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: '14px 28px',
                background: 'linear-gradient(135deg, #000131 0%, #0000aa 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0, 1, 49, 0.2)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 1, 49, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 1, 49, 0.2)';
              }}
            >
              Reload Application
            </button>

            <button
              onClick={() => (window.location.href = '/')}
              style={{
                padding: '14px 28px',
                background: 'white',
                color: '#000131',
                border: '2px solid #000131',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#f8f9fa';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
              }}
            >
              Go to Homepage
            </button>
          </div>

          {import.meta.env.DEV && this.state.error && (
            <details
              style={{
                marginTop: '40px',
                padding: '20px',
                background: '#f5f5f5',
                borderRadius: '12px',
                maxWidth: '90vw',
                textAlign: 'left',
              }}
            >
              <summary
                style={{
                  cursor: 'pointer',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: '#666',
                }}
              >
                Error Details (Development Only)
              </summary>
              <pre
                style={{
                  overflow: 'auto',
                  fontSize: '12px',
                  lineHeight: '1.4',
                  color: '#333',
                  margin: 0,
                }}
              >
                {this.state.error.stack}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

// ============================================
// ROOT ELEMENT VALIDATION
// ============================================
const rootElement = document.getElementById('root');

if (!rootElement) {
  // Critical failure: root element missing
  document.body.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;font-family:'Raleway',system-ui,sans-serif;padding:20px;text-align:center;">
      <div style="width:80px;height:80px;border-radius:50%;background:#FEE2E2;display:flex;align-items:center;justify-content:center;margin-bottom:24px;">
        <svg style="width:40px;height:40px;color:#DC2626;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </div>
      <h1 style="color:#000131;margin-bottom:16px;font-size:24px;font-weight:700;">Initialization Failed</h1>
      <p style="color:#666;max-width:600px;line-height:1.6;">
        Root element (<code style="background:#f5f5f5;padding:2px 6px;border-radius:4px;">#root</code>) not found in index.html.
        <br><br>
        Please check your build configuration or contact support.
      </p>
      <button 
        onclick="window.location.reload()"
        style="margin-top:24px;padding:14px 28px;background:linear-gradient(135deg,#000131 0%,#0000aa 100%);color:white;border:none;border-radius:12px;font-size:16px;font-weight:600;cursor:pointer;box-shadow:0 4px 12px rgba(0,1,49,0.2);"
      >
        Retry
      </button>
    </div>
  `;
  throw new Error('[AdvantEdge] Failed to find #root element in index.html');
}

// ============================================
// HIDE INITIAL LOADER
// ============================================
function hideInitialLoader() {
  const loader = document.getElementById('initial-loader');
  if (loader) {
    loader.classList.add('hidden');
    // Remove from DOM after fade-out transition (300ms)
    setTimeout(() => {
      if (loader.parentNode) {
        loader.remove();
      }
    }, 350);
  }
}

// ============================================
// CONSOLE ERROR MONITORING (DEV ONLY)
// ============================================
if (import.meta.env.DEV) {
  const originalConsoleError = console.error;
  console.error = (...args: any[]) => {
    originalConsoleError.apply(console, args);
    // Check for critical errors that might cause blank screens
    const errorMessage = args.join(' ').toLowerCase();
    if (
      errorMessage.includes('chunk') ||
      errorMessage.includes('failed to fetch') ||
      errorMessage.includes('loading chunk')
    ) {
      console.warn('[AdvantEdge] Detected potential chunk loading error. Consider clearing cache.');
    }
  };
}

// ============================================
// MOUNT REACT APP
// ============================================
const root = ReactDOM.createRoot(rootElement);

try {
  root.render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );

  // Hide loader after React paints its first frame
  requestAnimationFrame(() => {
    requestAnimationFrame(hideInitialLoader);
  });
} catch (error) {
  console.error('[AdvantEdge] Failed to mount React app:', error);
  
  // Fallback UI if even mounting fails
  rootElement.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;padding:20px;font-family:'Raleway',system-ui,sans-serif;text-align:center;">
      <h1 style="color:#000131;margin-bottom:16px;font-size:24px;font-weight:700;">Failed to Start Application</h1>
      <p style="color:#666;margin-bottom:24px;">The application failed to initialize. Please reload the page.</p>
      <button 
        onclick="window.location.reload()"
        style="padding:14px 28px;background:linear-gradient(135deg,#000131 0%,#0000aa 100%);color:white;border:none;border-radius:12px;font-size:16px;font-weight:600;cursor:pointer;box-shadow:0 4px 12px rgba(0,1,49,0.2);"
      >
        Reload Page
      </button>
    </div>
  `;
  
  hideInitialLoader();
}

// ============================================
// GLOBAL ERROR HANDLERS
// ============================================

// Handle unhandled errors
window.addEventListener('error', (event) => {
  console.error('[Global Error]:', event.error);
  // NOTE: Do NOT call event.preventDefault() here — it suppresses
  // error reporting and can prevent React ErrorBoundary from working correctly.
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('[Unhandled Promise Rejection]:', event.reason);
  // NOTE: Do NOT call event.preventDefault() here — it suppresses
  // error reporting and can prevent React ErrorBoundary from working correctly.
});

// Log app startup
console.log(
  '%c🚀 AdvantEdge v9.0 %c- Enhanced SPA Routing System',
  'color: #000131; font-weight: bold; font-size: 14px;',
  'color: #666; font-size: 12px;'
);

if (import.meta.env.DEV) {
  console.log(
    '%c⚙️ Development Mode',
    'color: #0000aa; font-weight: bold; font-size: 12px;'
  );
}

// ============================================
// INITIALIZE PERFORMANCE MONITORING
// Delayed to avoid blocking initial render
// ============================================
if (typeof window !== 'undefined') {
  // Wait for app to fully load before starting monitoring
  window.addEventListener('load', () => {
    initPerformanceMonitoring();
  });
  
  // Fallback: initialize after 2 seconds if load event hasn't fired
  setTimeout(() => {
    initPerformanceMonitoring();
  }, 2000);
}
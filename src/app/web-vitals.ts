'use client';

import { onCLS, onFCP, onINP, onLCP, onTTFB, type Metric } from 'web-vitals';

/**
 * Report Web Vitals to analytics
 * Monitors: CLS, FCP, FID, INP, LCP, TTFB
 */
export function reportWebVitals(metric: Metric) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vital:', {
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
    });
  }

  // Send to analytics in production
  if (process.env.NODE_ENV === 'production') {
    // Example: Send to Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_category: 'Web Vitals',
        event_label: metric.id,
        non_interaction: true,
      });
    }

    // Example: Send to custom analytics endpoint
    const body = JSON.stringify({
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
      id: metric.id,
      navigationType: metric.navigationType,
    });

    // Uncomment and configure your analytics endpoint
    // if (navigator.sendBeacon) {
    //   navigator.sendBeacon('/api/analytics', body);
    // } else {
    //   fetch('/api/analytics', { body, method: 'POST', keepalive: true });
    // }
  }
}

/**
 * Initialize Web Vitals monitoring
 */
export function initWebVitals() {
  if (typeof window === 'undefined') return;

  // Monitor all Core Web Vitals
  onCLS(reportWebVitals);
  onFCP(reportWebVitals);
  onINP(reportWebVitals); // INP replaced FID in web-vitals v4
  onLCP(reportWebVitals);
  onTTFB(reportWebVitals);

  // Log performance navigation timing
  if (process.env.NODE_ENV === 'development') {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        const connectTime = perfData.responseEnd - perfData.requestStart;
        const renderTime = perfData.domComplete - perfData.domLoading;

        console.log('Performance Timing:', {
          'Page Load Time': `${pageLoadTime}ms`,
          'Connect Time': `${connectTime}ms`,
          'Render Time': `${renderTime}ms`,
          'DOM Content Loaded': `${perfData.domContentLoadedEventEnd - perfData.navigationStart}ms`,
        });
      }, 0);
    });
  }
}

// Thresholds for good/needs improvement/poor ratings
export const THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 },
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  INP: { good: 200, poor: 500 },
  TTFB: { good: 800, poor: 1800 },
};

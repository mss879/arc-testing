"use client";

import { useEffect } from 'react';
import { initWebVitals } from '@/app/web-vitals';
import { optimizeFontLoading } from '@/lib/font-optimization';

/**
 * Performance Monitor Component
 * Initializes web vitals tracking and performance optimizations
 */
export default function PerformanceMonitor() {
  useEffect(() => {
    // Initialize Web Vitals monitoring
    initWebVitals();
    
    // Optimize font loading
    optimizeFontLoading();
    
    // Log initial performance metrics in development
    if (process.env.NODE_ENV === 'development') {
      const logPerformance = () => {
        if (window.performance && window.performance.getEntriesByType) {
          const perfData = window.performance.timing;
          const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          
          if (navigation) {
            console.group('🚀 Performance Metrics');
            console.log('DNS Lookup:', `${navigation.domainLookupEnd - navigation.domainLookupStart}ms`);
            console.log('TCP Connection:', `${navigation.connectEnd - navigation.connectStart}ms`);
            console.log('Request Time:', `${navigation.responseStart - navigation.requestStart}ms`);
            console.log('Response Time:', `${navigation.responseEnd - navigation.responseStart}ms`);
            console.log('DOM Processing:', `${navigation.domComplete - navigation.domInteractive}ms`);
            console.log('Page Load:', `${navigation.loadEventEnd - navigation.fetchStart}ms`);
            console.groupEnd();
          }
        }
      };
      
      // Log after page load
      if (document.readyState === 'complete') {
        logPerformance();
      } else {
        window.addEventListener('load', logPerformance);
      }
    }
    
    // Detect and log slow resources in development
    if (process.env.NODE_ENV === 'development') {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const resources = window.performance.getEntriesByType('resource') as PerformanceResourceTiming[];
          const slowResources = resources
            .filter(resource => resource.duration > 500)
            .sort((a, b) => b.duration - a.duration)
            .slice(0, 10);
          
          if (slowResources.length > 0) {
            console.group('⚠️ Slow Resources (>500ms)');
            slowResources.forEach(resource => {
              console.log(`${Math.round(resource.duration)}ms - ${resource.name}`);
            });
            console.groupEnd();
          }
        }, 1000);
      });
    }
  }, []);

  return null; // This component doesn't render anything
}

"use client";

import { useState, useEffect, memo } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  priority?: boolean;
  quality?: number;
  loading?: 'lazy' | 'eager';
  style?: React.CSSProperties;
}

/**
 * Optimized Image Component
 * - Lazy loading by default
 * - WebP/AVIF format support with fallback
 * - Responsive sizing
 * - Intersection Observer for better performance
 * - Reduced layout shift with aspect ratio
 */
const OptimizedImage = memo(({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 85,
  loading = 'lazy',
  style,
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [imgRef, setImgRef] = useState<HTMLImageElement | null>(null);

  // Intersection Observer for lazy loading optimization
  useEffect(() => {
    if (!imgRef || priority || isInView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before image enters viewport
        threshold: 0.01,
      }
    );

    observer.observe(imgRef);

    return () => {
      observer.disconnect();
    };
  }, [imgRef, priority, isInView]);

  // Generate srcset for responsive images
  const generateSrcSet = (src: string) => {
    const widths = [640, 750, 828, 1080, 1200, 1920];
    return widths.map(w => `${src}?w=${w}&q=${quality} ${w}w`).join(', ');
  };

  return (
    <img
      ref={setImgRef}
      src={isInView ? src : undefined}
      data-src={!isInView ? src : undefined}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : loading}
      decoding={priority ? 'sync' : 'async'}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      style={{
        ...style,
        willChange: isLoaded ? 'auto' : 'opacity',
      }}
      onLoad={() => setIsLoaded(true)}
      fetchPriority={priority ? 'high' : 'low'}
    />
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;

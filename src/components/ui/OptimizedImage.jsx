'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

/**
 * Premium Optimized Image Component
 * Handles lazy loading, placeholders, and error states
 * Fixed: Prevents infinite loading by using proper event handling
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
  objectFit = 'cover',
  placeholder = 'blur',
  blurDataURL,
  ...props
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const timeoutRef = useRef(null);

  // Generate blur placeholder if not provided
  const defaultBlurDataURL =
    blurDataURL ||
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg==';

  // Safety timeout to prevent infinite loading
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      // Defensive: if Next's events don't fire (rare), don't keep the skeleton forever.
      setIsLoading(false);
    }, priority ? 3000 : 6000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isLoading, priority]);

  const handleLoad = () => {
    setIsLoading(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  if (hasError) {
    return (
      <div
        className={cn(
          'bg-gray-100 flex items-center justify-center',
          className
        )}
        style={fill ? {} : { width, height }}
      >
        <div className="text-gray-400 text-sm">Image unavailable</div>
      </div>
    );
  }

  const imageProps = fill
    ? { fill: true }
    : { width, height };

  return (
    <div className={cn('relative overflow-hidden', fill && 'w-full h-full', !fill && className)}>
      <Image
        src={src}
        alt={alt}
        {...imageProps}
        className={cn(
          'transition-opacity duration-500',
          isLoading ? 'opacity-0' : 'opacity-100',
          objectFit === 'cover' && 'object-cover',
          objectFit === 'contain' && 'object-contain',
          objectFit === 'fill' && 'object-fill',
          fill ? 'w-full h-full' : className
        )}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={defaultBlurDataURL}
        onLoad={handleLoad}
        onLoadingComplete={handleLoad}
        onError={handleError}
        loading={priority ? undefined : 'lazy'}
        {...props}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center z-10">
          <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}


'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

/**
 * Premium Card Component
 * Variants: default, elevated, outlined, gradient
 */
const Card = forwardRef(
  (
    {
      children,
      variant = 'default',
      className,
      hover = false,
      padding = 'md',
      ...props
    },
    ref
  ) => {
    const baseStyles = 'rounded-2xl transition-all duration-300';

    const variants = {
      default: 'bg-white border border-gray-200 shadow-sm',
      elevated: 'bg-white border border-gray-200 shadow-lg hover:shadow-xl',
      outlined: 'bg-white border-2 border-gray-200',
      gradient: 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100',
    };

    const paddings = {
      none: 'p-0',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-10',
    };

    const hoverStyles = hover
      ? 'hover:-translate-y-1 hover:shadow-xl cursor-pointer'
      : '';

    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          paddings[padding],
          hoverStyles,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

// Sub-components
Card.Header = ({ children, className, ...props }) => (
  <div className={cn('mb-4', className)} {...props}>
    {children}
  </div>
);

Card.Title = ({ children, className, ...props }) => (
  <h3 className={cn('text-xl font-bold font-secondary text-gray-900', className)} {...props}>
    {children}
  </h3>
);

Card.Description = ({ children, className, ...props }) => (
  <p className={cn('text-gray-600 font-primary', className)} {...props}>
    {children}
  </p>
);

Card.Content = ({ children, className, ...props }) => (
  <div className={cn('', className)} {...props}>
    {children}
  </div>
);

Card.Footer = ({ children, className, ...props }) => (
  <div className={cn('mt-6 pt-6 border-t border-gray-200', className)} {...props}>
    {children}
  </div>
);

export default Card;


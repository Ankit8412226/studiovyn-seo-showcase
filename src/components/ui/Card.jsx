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
      default: 'bg-[#121723] border border-[#1f2937] shadow-sm',
      elevated: 'bg-[#121723] border border-[#1f2937] shadow-lg hover:shadow-xl',
      outlined: 'bg-[#121723] border-2 border-[#1f2937]',
      gradient: 'bg-gradient-to-br from-[#0f1320] to-[#151b2b] border border-[#1f2937]',
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
  <h3 className={cn('text-xl font-bold font-secondary text-white', className)} {...props}>
    {children}
  </h3>
);

Card.Description = ({ children, className, ...props }) => (
  <p className={cn('text-slate-300 font-primary', className)} {...props}>
    {children}
  </p>
);

Card.Content = ({ children, className, ...props }) => (
  <div className={cn('', className)} {...props}>
    {children}
  </div>
);

Card.Footer = ({ children, className, ...props }) => (
  <div className={cn('mt-6 pt-6 border-t border-[#1f2937]', className)} {...props}>
    {children}
  </div>
);

export default Card;

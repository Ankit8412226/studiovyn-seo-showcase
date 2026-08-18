'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { forwardRef } from 'react';

/**
 * Premium Button Component — StudioVyn Design System
 * Variants: primary, secondary, ghost, link
 * Sizes: sm, md, lg
 */
const Button = forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      className,
      disabled,
      loading,
      icon,
      iconPosition = 'left',
      fullWidth,
      href,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold font-primary transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] disabled:opacity-40 disabled:cursor-not-allowed relative overflow-hidden cursor-pointer';

    const variants = {
      primary:
        'bg-[#10b981] border border-[#10b981] text-white hover:bg-[#0d9e6e] hover:border-[#0d9e6e] hover:shadow-[0_6px_20px_rgba(16,185,129,0.25)] active:scale-[0.98]',
      secondary:
        'bg-transparent border border-[#222] text-[#ccc] hover:border-[#333] hover:text-[#f0f0f0] hover:bg-[#111] active:scale-[0.98]',
      ghost:
        'bg-transparent border border-transparent text-[#888] hover:text-[#f0f0f0] hover:bg-[#111]',
      link:
        'bg-transparent border-transparent text-[#10b981] hover:text-[#0d9e6e] underline-offset-4 hover:underline p-0 border-0',
    };

    const sizes = {
      sm: 'text-sm px-4 py-2 rounded-lg gap-1.5',
      md: 'text-[0.9375rem] px-6 py-3 rounded-lg gap-2',
      lg: 'text-base px-8 py-4 rounded-lg gap-2',
    };

    const widthClass = fullWidth ? 'w-full' : '';

    const content = (
      <>
        {loading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          </span>
        )}
        <span className={cn('flex items-center gap-2', loading && 'opacity-0')}>
          {icon && iconPosition === 'left' && <span aria-hidden="true">{icon}</span>}
          {children}
          {icon && iconPosition === 'right' && <span aria-hidden="true">{icon}</span>}
        </span>
      </>
    );

    if (href && !disabled && !loading) {
      return (
        <Link
          href={href}
          ref={ref}
          className={cn(baseStyles, variants[variant], sizes[size], widthClass, className)}
          {...props}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], widthClass, className)}
        disabled={disabled || loading}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

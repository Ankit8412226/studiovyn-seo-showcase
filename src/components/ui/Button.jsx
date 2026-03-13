'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { forwardRef } from 'react';

/**
 * Premium Button Component
 * Variants: primary, secondary, ghost, link
 * Sizes: sm, md, lg
 * Supports both button and link (href) modes
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
    const baseStyles = 'inline-flex items-center justify-center font-semibold font-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden border-2 cursor-pointer';

    const variants = {
      primary: 'bg-[var(--brand-primary)] border-[var(--brand-primary)] text-[#f2f4f3] hover:bg-[var(--brand-primary-hover)] hover:border-[var(--brand-primary-hover)] focus:ring-[var(--brand-accent)] shadow-md hover:shadow-lg active:scale-[0.98]',
      secondary: 'bg-[#0f172a] border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-[#111827] hover:border-[var(--brand-primary-hover)] focus:ring-[var(--brand-accent)] shadow-sm hover:shadow-md active:scale-[0.98]',
      ghost: 'bg-transparent border-[#1f2937] text-[#cbd5f5] hover:bg-[#0f1320] hover:border-[#334155] focus:ring-[var(--brand-accent)]',
      link: 'bg-transparent border-transparent text-[var(--brand-primary)] hover:text-[var(--brand-primary-hover)] underline-offset-4 hover:underline focus:ring-[var(--brand-accent)] p-0',
    };

    const sizes = {
      sm: 'text-sm px-4 py-2 rounded-lg',
      md: 'text-base px-6 py-3 rounded-xl',
      lg: 'text-lg px-8 py-4 rounded-xl',
    };

    const widthClass = fullWidth ? 'w-full' : '';

    const content = (
      <>
        {loading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </span>
        )}
        <span className={cn('flex items-center gap-2', loading && 'opacity-0')}>
          {icon && iconPosition === 'left' && <span>{icon}</span>}
          {children}
          {icon && iconPosition === 'right' && <span>{icon}</span>}
        </span>
      </>
    );

    // If href is provided, render as Link
    if (href && !disabled && !loading) {
      return (
        <Link
          href={href}
          ref={ref}
          className={cn(
            baseStyles,
            variants[variant],
            sizes[size],
            widthClass,
            className
          )}
          {...props}
        >
          {content}
        </Link>
      );
    }

    // Otherwise render as button
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          widthClass,
          className
        )}
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

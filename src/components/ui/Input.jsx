'use client';

import { cn } from '@/lib/utils';
import { forwardRef, useId, useState } from 'react';

/**
 * Premium Input Component
 * Supports validation states and error messages
 */
const Input = forwardRef(
  (
    {
      label,
      error,
      helperText,
      icon,
      iconPosition = 'left',
      className,
      type = 'text',
      ...props
    },
    ref
  ) => {
    const [focused, setFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const generatedId = useId();
    const inputId = props.id || generatedId;

    const baseStyles =
      'w-full px-4 py-3 rounded-xl border transition-all duration-200 font-primary text-white placeholder-[#64748b] focus:outline-none focus:ring-2 focus:ring-offset-0';

    const stateStyles = error
      ? 'border-red-400 focus:border-red-500 focus:ring-red-500 bg-red-950/30'
      : focused
      ? 'border-emerald-400 focus:border-emerald-400 focus:ring-emerald-400 bg-[#0f1320]'
      : 'border-[#1f2937] focus:border-emerald-400 focus:ring-emerald-400 bg-[#0f1320] hover:border-[#334155]';

    const iconPadding = icon
      ? iconPosition === 'left'
        ? 'pl-12'
        : 'pr-12'
      : '';

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-semibold text-[#cbd5f5] mb-2 font-primary"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          {icon && iconPosition === 'left' && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94a3b8]">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            type={type === 'password' && showPassword ? 'text' : type}
            className={cn(baseStyles, stateStyles, iconPadding, className)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={
              error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
            }
            {...props}
          />
          {type === 'password' && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94a3b8] hover:text-white"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          )}
          {icon && iconPosition === 'right' && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94a3b8]">
              {icon}
            </div>
          )}
        </div>
        {error && (
          <p
            id={`${inputId}-error`}
            className="mt-2 text-sm text-red-600 font-primary"
            role="alert"
          >
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${inputId}-helper`} className="mt-2 text-sm text-[#94a3b8] font-primary">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;

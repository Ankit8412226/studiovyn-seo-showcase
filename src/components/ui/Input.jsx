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
      'w-full px-4 py-3 rounded-xl border transition-all duration-200 font-primary text-slate-900 placeholder-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-offset-0';

    const stateStyles = error
      ? 'border-red-400 focus:border-red-500 focus:ring-red-500 bg-red-50/50'
      : focused
      ? 'border-blue-600 focus:border-blue-600 focus:ring-blue-500/20 bg-white shadow-sm'
      : 'border-slate-300 focus:border-blue-600 focus:ring-blue-500/20 bg-white hover:border-slate-400';

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
            className="block text-sm font-semibold text-slate-700 mb-2 font-primary"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          {icon && iconPosition === 'left' && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
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
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          )}
          {icon && iconPosition === 'right' && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
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
          <p id={`${inputId}-helper`} className="mt-2 text-sm text-slate-500 font-primary">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;

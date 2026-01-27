'use client';

import { forwardRef, useState } from 'react';
import { cn } from '@/lib/utils';

/**
 * Premium Textarea Component
 * Supports validation states and error messages
 */
const Textarea = forwardRef(
  (
    {
      label,
      error,
      helperText,
      className,
      rows = 4,
      maxLength,
      showCount = false,
      ...props
    },
    ref
  ) => {
    const [focused, setFocused] = useState(false);
    const [charCount, setCharCount] = useState(0);

    const inputId = props.id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

    const baseStyles =
      'w-full px-4 py-3 rounded-xl border transition-all duration-200 font-primary text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-0 resize-y';

    const stateStyles = error
      ? 'border-red-300 focus:border-red-500 focus:ring-red-500 bg-red-50'
      : focused
      ? 'border-blue-500 focus:border-blue-500 focus:ring-blue-500 bg-white'
      : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500 bg-white hover:border-gray-400';

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-semibold text-gray-700 mb-2 font-primary"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          <textarea
            ref={ref}
            id={inputId}
            rows={rows}
            maxLength={maxLength}
            className={cn(baseStyles, stateStyles, className)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={(e) => {
              setCharCount(e.target.value.length);
              props.onChange?.(e);
            }}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={
              error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
            }
            {...props}
          />
          {showCount && maxLength && (
            <div className="absolute bottom-3 right-4 text-xs text-gray-400 font-primary">
              {charCount}/{maxLength}
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
          <p id={`${inputId}-helper`} className="mt-2 text-sm text-gray-500 font-primary">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;


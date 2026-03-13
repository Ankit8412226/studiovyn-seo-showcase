'use client';

import { cn } from '@/lib/utils';
import { forwardRef, useId, useState } from 'react';

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
    const generatedId = useId();
    const inputId = props.id || generatedId;

    const baseStyles =
      'w-full px-4 py-3 rounded-xl border transition-all duration-200 font-primary text-white placeholder-[#64748b] focus:outline-none focus:ring-2 focus:ring-offset-0 resize-y';

    const stateStyles = error
      ? 'border-red-400 focus:border-red-500 focus:ring-red-500 bg-red-950/30'
      : focused
      ? 'border-emerald-400 focus:border-emerald-400 focus:ring-emerald-400 bg-[#0f1320]'
      : 'border-[#1f2937] focus:border-emerald-400 focus:ring-emerald-400 bg-[#0f1320] hover:border-[#334155]';

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
            <div className="absolute bottom-3 right-4 text-xs text-[#94a3b8] font-primary">
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
          <p id={`${inputId}-helper`} className="mt-2 text-sm text-[#94a3b8] font-primary">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;

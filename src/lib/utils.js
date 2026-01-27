/**
 * Utility functions
 */

/**
 * Combines class names, filtering out falsy values
 * Similar to clsx/classnames
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Formats numbers with commas
 */
export function formatNumber(num) {
  return new Intl.NumberFormat('en-IN').format(num);
}

/**
 * Debounce function
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function
 */
export function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}


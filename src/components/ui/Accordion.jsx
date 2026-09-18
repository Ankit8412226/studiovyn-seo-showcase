'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Premium Accordion Component
 * For FAQ and collapsible content
 */
const Accordion = ({ items, allowMultiple = false, defaultOpen = [] }) => {
  const [openItems, setOpenItems] = useState(new Set(defaultOpen));

  const toggleItem = (index) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        if (allowMultiple) {
          newSet.delete(index);
        } else {
          newSet.clear();
        }
      } else {
        if (allowMultiple) {
          newSet.add(index);
        } else {
          newSet.clear();
          newSet.add(index);
        }
      }
      return newSet;
    });
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openItems.has(index);
        return (
          <div
            key={index}
            className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
              isOpen ? 'border-[#DBEAFE] bg-[#EFF6FF]/40 shadow-xs' : 'border-slate-200 bg-white hover:border-[#BFDBFE]'
            }`}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between p-6 sm:p-7 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${index}`}
            >
              <span className={`text-base sm:text-lg font-medium font-secondary pr-4 transition-colors ${isOpen ? 'text-[#2563EB]' : 'text-[#0F172A]'}`}>
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  'w-5 h-5 flex-shrink-0 transition-transform duration-200',
                  isOpen ? 'transform rotate-180 text-[#2563EB]' : 'text-[#94A3B8]'
                )}
                aria-hidden="true"
              />
            </button>
            <div
              id={`accordion-content-${index}`}
              className={cn(
                'overflow-hidden transition-all duration-300 ease-in-out',
                isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              )}
            >
              <div className="p-6 pt-0 text-slate-600 font-primary leading-relaxed border-t border-slate-50 mt-1">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;

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
            className="border border-gray-200 rounded-xl overflow-hidden bg-white transition-all duration-200 hover:shadow-md"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${index}`}
            >
              <span className="text-lg font-semibold font-secondary text-gray-900 pr-4">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  'w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200',
                  isOpen && 'transform rotate-180'
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
              <div className="p-6 pt-0 text-gray-600 font-primary leading-relaxed">
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


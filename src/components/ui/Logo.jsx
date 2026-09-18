'use client';

import Image from 'next/image';

export default function Logo({
  variant = 'dark', // 'dark' (for light bg) | 'light' (for navy/dark bg)
  showText = true,
  size = 'md',
  className = '',
}) {
  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
  };

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8 sm:w-9 sm:h-9',
    lg: 'w-10 h-10 sm:w-11 sm:h-11',
  };

  const textColor = variant === 'light' ? 'text-white' : 'text-[#0F172A]';
  const highlightColor = variant === 'light' ? 'text-[#60A5FA]' : 'text-[#2563EB]';

  return (
    <div className={`inline-flex items-center gap-2.5 group ${className}`}>
      {/* Official StudioVyn Emblem Image */}
      <div className={`relative ${iconSizes[size] || iconSizes.md} shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
        <Image
          src="/studiovyn-mark.png"
          alt="StudioVyn Logo"
          width={44}
          height={44}
          className="w-full h-full object-contain drop-shadow-xs"
          priority
        />
      </div>

      {showText && (
        <span
          className={`font-secondary font-bold tracking-tight ${textSizes[size]} ${textColor} transition-colors`}
        >
          Studio<span className={highlightColor}>Vyn</span>
        </span>
      )}
    </div>
  );
}


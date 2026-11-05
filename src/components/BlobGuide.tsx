import React, { useState } from 'react';
import { BlobMood, BlobHat } from '../types/myth';
import { playBlobSquish } from '../utils/sound';

interface BlobGuideProps {
  mood?: BlobMood;
  message?: string;
  hat?: BlobHat;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onPoke?: () => void;
  interactive?: boolean;
  className?: string;
}

const BOBBLY_QUIPS = [
  "Did you know? Humans don't have night-vision carrots in their eyes!",
  "Poke me again and I'll prescribe you 8 hours of sleep!",
  "Did you know? Deoxygenated blood is dark red, never blue!",
  "Your liver handles detox for free 24/7. Save your money on detox teas!",
  "Fact: 10,000 steps was originally a 1965 marketing gimmick for a Japanese pedometer!",
  "Pores have no muscles—they can't open and close like doors!",
  "Fun fact: You do NOT swallow 8 spiders in your sleep. Spiders fear giant breathing giants!",
  "I'm squishy, 100% certified myth-resistant, and powered by peer-reviewed science!"
];

export const BlobGuide: React.FC<BlobGuideProps> = ({
  mood = 'curious',
  message,
  hat = 'doctor',
  size = 'md',
  onPoke,
  interactive = true,
  className = '',
}) => {
  const [isSquishing, setIsSquishing] = useState(false);
  const [internalQuip, setInternalQuip] = useState<string | null>(null);

  const handleBlobClick = () => {
    if (!interactive) return;
    setIsSquishing(true);
    playBlobSquish();

    // Pick random quip if no external message
    const randomQuip = BOBBLY_QUIPS[Math.floor(Math.random() * BOBBLY_QUIPS.length)];
    setInternalQuip(randomQuip);

    setTimeout(() => {
      setIsSquishing(false);
    }, 600);

    if (onPoke) {
      onPoke();
    }
  };

  const activeMessage = message || internalQuip;

  // Size dimensions
  const dimensions = {
    sm: { width: 44, height: 44, svgScale: 'w-11 h-11' },
    md: { width: 72, height: 72, svgScale: 'w-18 h-18' },
    lg: { width: 110, height: 110, svgScale: 'w-28 h-28' },
    xl: { width: 150, height: 150, svgScale: 'w-38 h-38' },
  }[size];

  // SVG face details based on mood
  const renderFace = () => {
    switch (mood) {
      case 'happy':
      case 'celebrating':
        return (
          <g>
            {/* Happy arched closed eyes */}
            <path d="M 32 44 Q 38 38 44 44" stroke="#1E293B" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 56 44 Q 62 38 68 44" stroke="#1E293B" strokeWidth="3" fill="none" strokeLinecap="round" />
            {/* Blushing cheeks */}
            <ellipse cx="28" cy="52" rx="4.5" ry="3" fill="#F472B6" opacity="0.6" />
            <ellipse cx="72" cy="52" rx="4.5" ry="3" fill="#F472B6" opacity="0.6" />
            {/* Big smiling mouth */}
            <path d="M 40 54 Q 50 67 60 54" stroke="#1E293B" strokeWidth="3" fill="#E11D48" strokeLinecap="round" />
          </g>
        );

      case 'shocked':
        return (
          <g>
            {/* Wide shocked round eyes */}
            <circle cx="37" cy="42" r="6" fill="#1E293B" />
            <circle cx="39" cy="40" r="2.2" fill="#FFFFFF" />
            <circle cx="63" cy="42" r="6" fill="#1E293B" />
            <circle cx="65" cy="40" r="2.2" fill="#FFFFFF" />
            {/* Raised high eyebrows */}
            <path d="M 31 32 Q 37 28 43 32" stroke="#1E293B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M 57 32 Q 63 28 69 32" stroke="#1E293B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {/* Big O-shaped mouth */}
            <ellipse cx="50" cy="60" rx="6" ry="8" fill="#1E293B" />
          </g>
        );

      case 'thinking':
        return (
          <g>
            {/* One squinting eye, one raised */}
            <path d="M 32 42 Q 38 38 44 42" stroke="#1E293B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <circle cx="63" cy="41" r="5" fill="#1E293B" />
            <circle cx="65" cy="39" r="1.8" fill="#FFFFFF" />
            {/* Puzzled angled eyebrow */}
            <line x1="32" y1="34" x2="44" y2="37" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 57 31 Q 63 27 69 31" stroke="#1E293B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {/* Wavy thoughtful mouth */}
            <path d="M 44 56 Q 49 53 54 58" stroke="#1E293B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </g>
        );

      case 'sympathetic':
        return (
          <g>
            {/* Gentle droopy eyes */}
            <ellipse cx="37" cy="43" rx="4.5" ry="5.5" fill="#1E293B" />
            <circle cx="39" cy="41" r="1.5" fill="#FFFFFF" />
            <ellipse cx="63" cy="43" rx="4.5" ry="5.5" fill="#1E293B" />
            <circle cx="65" cy="41" r="1.5" fill="#FFFFFF" />
            {/* Comforting eyebrows */}
            <path d="M 33 34 Q 38 37 43 35" stroke="#1E293B" strokeWidth="2.2" fill="none" strokeLinecap="round" />
            <path d="M 57 35 Q 62 37 67 34" stroke="#1E293B" strokeWidth="2.2" fill="none" strokeLinecap="round" />
            {/* Gentle small warm smile */}
            <path d="M 44 56 Q 50 61 56 56" stroke="#1E293B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </g>
        );

      case 'explaining':
        return (
          <g>
            {/* Smart professorial eyes */}
            <circle cx="37" cy="42" r="5" fill="#1E293B" />
            <circle cx="39" cy="40" r="1.8" fill="#FFFFFF" />
            <circle cx="63" cy="42" r="5" fill="#1E293B" />
            <circle cx="65" cy="40" r="1.8" fill="#FFFFFF" />
            {/* Smart spectacles */}
            <circle cx="37" cy="42" r="8" fill="none" stroke="#64748B" strokeWidth="2" />
            <circle cx="63" cy="42" r="8" fill="none" stroke="#64748B" strokeWidth="2" />
            <line x1="45" y1="42" x2="55" y2="42" stroke="#64748B" strokeWidth="2" />
            {/* Speaking animated mouth */}
            <ellipse cx="50" cy="58" rx="5" ry="3.5" fill="#1E293B" />
          </g>
        );

      case 'waving':
      case 'curious':
      default:
        return (
          <g>
            {/* Friendly wide eyes */}
            <circle cx="38" cy="43" r="5" fill="#1E293B" />
            <circle cx="40" cy="41" r="1.8" fill="#FFFFFF" />
            <circle cx="62" cy="43" r="5" fill="#1E293B" />
            <circle cx="64" cy="41" r="1.8" fill="#FFFFFF" />
            {/* Blushing cheeks */}
            <ellipse cx="29" cy="51" rx="4" ry="2.5" fill="#F472B6" opacity="0.45" />
            <ellipse cx="71" cy="51" rx="4" ry="2.5" fill="#F472B6" opacity="0.45" />
            {/* Warm gentle smile */}
            <path d="M 43 54 Q 50 61 57 54" stroke="#1E293B" strokeWidth="2.8" fill="none" strokeLinecap="round" />
          </g>
        );
    }
  };

  // Render hat accessory on Bobbly
  const renderHat = () => {
    switch (hat) {
      case 'doctor':
        return (
          <g transform="translate(32, 4)">
            {/* Head mirror / medical reflector */}
            <circle cx="18" cy="14" r="10" fill="#E2E8F0" stroke="#475569" strokeWidth="2" />
            <circle cx="18" cy="14" r="4" fill="#94A3B8" />
            <path d="M 2 24 Q 18 12 34 24" stroke="#334155" strokeWidth="3.5" fill="none" />
            {/* Tiny red cross badge */}
            <rect x="15" y="11" width="6" height="6" fill="#EF4444" rx="1" />
            <rect x="16.5" y="9" width="3" height="10" fill="#EF4444" rx="0.5" />
          </g>
        );

      case 'scholar':
        return (
          <g transform="translate(26, 6)">
            {/* Mortarboard graduation cap */}
            <polygon points="24,6 46,15 24,24 2,15" fill="#1E293B" />
            <rect x="14" y="22" width="20" height="7" fill="#0F172A" rx="2" />
            {/* Golden tassel */}
            <circle cx="24" cy="15" r="2" fill="#F59E0B" />
            <path d="M 24 15 Q 36 20 38 30" stroke="#F59E0B" strokeWidth="2" fill="none" />
            <circle cx="38" cy="31" r="2" fill="#D97706" />
          </g>
        );

      case 'detective':
        return (
          <g transform="translate(25, 6)">
            {/* Classic houndstooth / detective deerstalker cap */}
            <ellipse cx="25" cy="22" rx="26" ry="6" fill="#854D0E" />
            <path d="M 8 22 C 8 8, 42 8, 42 22 Z" fill="#A16207" />
            <path d="M 20 8 Q 25 3 30 8" stroke="#713F12" strokeWidth="2.5" fill="none" />
          </g>
        );

      case 'apple':
        return (
          <g transform="translate(39, 4)">
            {/* Cute apple on head */}
            <circle cx="11" cy="16" r="9" fill="#EF4444" />
            <path d="M 11 8 Q 15 2 13 0" stroke="#78350F" strokeWidth="2" fill="none" />
            <ellipse cx="16" cy="6" rx="4" ry="2" fill="#22C55E" transform="rotate(-20 16 6)" />
          </g>
        );

      case 'sleep':
        return (
          <g transform="translate(28, 4)">
            {/* Cozy sleeping nightcap */}
            <path d="M 6 24 Q 22 4 36 12 Q 44 18 46 28" fill="#6366F1" />
            <ellipse cx="20" cy="24" rx="16" ry="4" fill="#EEF2FF" />
            <circle cx="47" cy="29" r="4" fill="#F8FAFC" />
          </g>
        );

      case 'chef':
        return (
          <g transform="translate(30, 2)">
            {/* Puffy chef hat */}
            <path d="M 10 24 C 2 12, 16 4, 20 8 C 24 0, 36 2, 36 10 C 44 8, 44 20, 36 24 Z" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
            <rect x="10" y="22" width="26" height="5" fill="#E2E8F0" rx="1" />
          </g>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`relative flex items-center gap-3 select-none ${className}`}>
      {/* The Animated SVG Blob */}
      <button
        type="button"
        onClick={handleBlobClick}
        aria-label="Interact with Bobbly the Fact-Blob guide"
        title={interactive ? 'Click or tap Bobbly for health wisdom!' : undefined}
        className={`group relative outline-none focus:ring-2 focus:ring-amber-500/50 rounded-full transition-transform ${
          interactive ? 'cursor-pointer hover:scale-105 active:scale-95' : 'cursor-default'
        } ${isSquishing ? 'animate-blob-squish' : 'animate-blob-float'}`}
      >
        <svg
          viewBox="0 0 100 100"
          className={`${dimensions.svgScale} drop-shadow-md transition-all duration-300`}
        >
          <defs>
            {/* Warm, friendly apricot-peach organic blob gradient */}
            <linearGradient id="blobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDBA74" />
              <stop offset="55%" stopColor="#FB923C" />
              <stop offset="100%" stopColor="#F97316" />
            </linearGradient>
            <radialGradient id="highlightGrad" cx="35%" cy="30%" r="50%">
              <stop offset="0%" stopColor="#FFF7ED" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFEDD5" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Organic squishy body */}
          <path
            d="M 50 16 C 72 14, 88 28, 89 48 C 90 70, 78 86, 52 87 C 26 88, 11 72, 12 50 C 13 28, 28 18, 50 16 Z"
            fill="url(#blobGrad)"
            stroke="#EA580C"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Subtle soft specular highlight on top curve */}
          <ellipse cx="40" cy="28" rx="18" ry="10" fill="url(#highlightGrad)" transform="rotate(-15 40 28)" />

          {/* Bobbly's Face */}
          {renderFace()}

          {/* Bobbly's Hat */}
          {renderHat()}
        </svg>

        {/* Small interaction ring indicator on hover */}
        {interactive && (
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[10px] font-medium text-amber-900 bg-amber-100/90 border border-amber-300 rounded-full px-1.5 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xs whitespace-nowrap">
            Poke me!
          </span>
        )}
      </button>

      {/* Thought/Speech Bubble */}
      {activeMessage && (
        <div
          role="status"
          className="relative max-w-xs md:max-w-sm bg-white/95 backdrop-blur-xs text-stone-800 border border-stone-300/80 rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm shadow-sm transition-all"
        >
          {/* Triangular pointer towards the blob */}
          <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-r-[8px] border-r-stone-300/80" />
          <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-0 h-0 border-y-[5px] border-y-transparent border-r-[7px] border-r-white" />

          <p className="leading-relaxed font-medium text-stone-800">
            {activeMessage}
          </p>
        </div>
      )}
    </div>
  );
};

import React, { useState } from 'react';
import { BlobHat } from '../types/myth';
import { isSoundEnabled, setSoundEnabled, playClickPop } from '../utils/sound';
import { BookOpen, HelpCircle, Gauge, Bookmark, Volume2, VolumeX, Sparkles, Wand2 } from 'lucide-react';

interface NavbarProps {
  activeTab: 'explorer' | 'quiz' | 'meter' | 'saved';
  setActiveTab: (tab: 'explorer' | 'quiz' | 'meter' | 'saved') => void;
  savedCount: number;
  currentHat: BlobHat;
  setCurrentHat: (hat: BlobHat) => void;
  quizStreak: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  savedCount,
  currentHat,
  setCurrentHat,
  quizStreak,
}) => {
  const [soundOn, setSoundOn] = useState<boolean>(() => isSoundEnabled());
  const [showHatPicker, setShowHatPicker] = useState<boolean>(false);

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setSoundEnabled(next);
    if (next) playClickPop();
  };

  const handleTabChange = (tab: 'explorer' | 'quiz' | 'meter' | 'saved') => {
    playClickPop();
    setActiveTab(tab);
  };

  const hats: { id: BlobHat; label: string; icon: string }[] = [
    { id: 'doctor', label: 'Doctor', icon: '🩺' },
    { id: 'scholar', label: 'Scholar', icon: '🎓' },
    { id: 'detective', label: 'Detective', icon: '🕵️' },
    { id: 'apple', label: 'Fresh Apple', icon: '🍏' },
    { id: 'chef', label: 'Nutrition Chef', icon: '👨‍🍳' },
    { id: 'sleep', label: 'Sleep Cap', icon: '🌙' },
    { id: 'none', label: 'Bare Blob', icon: '✨' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        {/* App Title & Bobbly Avatar */}
        <button
          type="button"
          onClick={() => handleTabChange('explorer')}
          className="flex items-center gap-2.5 sm:gap-3 text-left group cursor-pointer"
        >
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform overflow-hidden">
            <svg viewBox="0 0 100 100" className="w-10 h-10">
              <path
                d="M 50 16 C 72 14, 88 28, 89 48 C 90 70, 78 86, 52 87 C 26 88, 11 72, 12 50 C 13 28, 28 18, 50 16 Z"
                fill="#FB923C"
              />
              <circle cx="38" cy="43" r="5" fill="#1E293B" />
              <circle cx="62" cy="43" r="5" fill="#1E293B" />
              <path d="M 43 55 Q 50 63 57 55" stroke="#1E293B" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-bold text-lg sm:text-xl text-stone-900 tracking-tight leading-none">
                Health MythBuster
              </span>
              <span className="text-[10px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                88 Myths
              </span>
            </div>
            <p className="text-xs text-stone-500 font-sans hidden sm:block">
              Peer-reviewed evidence with Bobbly the Blob
            </p>
          </div>
        </button>

        {/* Center / Navigation Tabs */}
        <nav className="flex items-center gap-1 bg-stone-100/80 p-1 rounded-xl border border-stone-200/80">
          <button
            type="button"
            onClick={() => handleTabChange('explorer')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'explorer'
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900 hover:bg-white/50'
            }`}
          >
            <BookOpen className="w-4 h-4 text-amber-600" />
            <span className="hidden sm:inline">Explore Myths</span>
            <span className="sm:hidden">Explore</span>
          </button>

          <button
            type="button"
            onClick={() => handleTabChange('quiz')}
            className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'quiz'
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900 hover:bg-white/50'
            }`}
          >
            <HelpCircle className="w-4 h-4 text-teal-600" />
            <span>Quiz</span>
            {quizStreak > 0 && (
              <span className="ml-1 px-1.5 py-0.2 text-[10px] bg-amber-500 text-white rounded-full font-mono font-bold">
                {quizStreak}🔥
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => handleTabChange('meter')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'meter'
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900 hover:bg-white/50'
            }`}
          >
            <Gauge className="w-4 h-4 text-indigo-600" />
            <span className="hidden md:inline">Truth-o-Meter</span>
            <span className="md:hidden">Meter</span>
          </button>

          <button
            type="button"
            onClick={() => handleTabChange('saved')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'saved'
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900 hover:bg-white/50'
            }`}
          >
            <Bookmark className="w-4 h-4 text-rose-600" />
            <span className="hidden sm:inline">My Mythbook</span>
            {savedCount > 0 && (
              <span className="px-1.5 py-0.2 text-[10px] bg-rose-500 text-white rounded-full font-mono">
                {savedCount}
              </span>
            )}
          </button>
        </nav>

        {/* Right Tools: Dress Bobbly & Sound */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Hat Picker Trigger */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowHatPicker(!showHatPicker)}
              aria-label="Customize Bobbly's hat"
              title="Dress Bobbly"
              className="flex items-center gap-1 p-2 rounded-xl border border-stone-200 bg-white/80 hover:bg-white text-stone-700 hover:text-stone-900 text-xs shadow-2xs transition-colors cursor-pointer"
            >
              <Wand2 className="w-4 h-4 text-amber-600" />
              <span className="hidden lg:inline text-xs font-medium">Bobbly Hat</span>
            </button>

            {/* Hat Dropdown */}
            {showHatPicker && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-lg border border-stone-200 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-2.5 py-1.5 text-[11px] font-semibold text-stone-400 uppercase tracking-wider">
                  Dress Bobbly
                </div>
                <div className="space-y-0.5">
                  {hats.map((h) => (
                    <button
                      key={h.id}
                      type="button"
                      onClick={() => {
                        setCurrentHat(h.id);
                        setShowHatPicker(false);
                        playClickPop();
                      }}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                        currentHat === h.id
                          ? 'bg-amber-50 text-amber-900 font-semibold border border-amber-200'
                          : 'text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{h.icon}</span>
                        <span>{h.label}</span>
                      </span>
                      {currentHat === h.id && <Sparkles className="w-3.5 h-3.5 text-amber-600" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sound Toggle */}
          <button
            type="button"
            onClick={toggleSound}
            aria-label={soundOn ? 'Mute app sounds' : 'Enable tactile audio feedback'}
            title={soundOn ? 'Sound On' : 'Muted'}
            className="p-2 rounded-xl border border-stone-200 bg-white/80 hover:bg-white text-stone-600 hover:text-stone-900 shadow-2xs transition-colors cursor-pointer"
          >
            {soundOn ? <Volume2 className="w-4 h-4 text-emerald-600" /> : <VolumeX className="w-4 h-4 text-stone-400" />}
          </button>
        </div>
      </div>
    </header>
  );
};

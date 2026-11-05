import React, { useState, useMemo } from 'react';
import { Myth, MythCategory, MythVerdict, BlobHat } from '../types/myth';
import { ALL_MYTHS, CATEGORIES, filterMyths, getMythOfTheDay } from '../data/mythsData';
import { MythCard } from './MythCard';
import { BlobGuide } from './BlobGuide';
import { Search, Sparkles, Filter, X, ArrowUpDown, Calendar, HelpCircle } from 'lucide-react';
import { playClickPop } from '../utils/sound';

interface MythExplorerProps {
  savedMythIds: string[];
  onToggleSave: (mythId: string) => void;
  onOpenModal: (myth: Myth) => void;
  currentHat: BlobHat;
  believedCounts: Record<string, number>;
  markedBelievedIds: string[];
  onToggleBelieved: (mythId: string) => void;
  onStartQuizTab: () => void;
}

export const MythExplorer: React.FC<MythExplorerProps> = ({
  savedMythIds,
  onToggleSave,
  onOpenModal,
  currentHat,
  believedCounts,
  markedBelievedIds,
  onToggleBelieved,
  onStartQuizTab,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<MythCategory | 'ALL'>('ALL');
  const [selectedVerdict, setSelectedVerdict] = useState<MythVerdict | 'ALL'>('ALL');
  const [selectedDanger, setSelectedDanger] = useState<string | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'default' | 'believed' | 'alphabetical'>('default');

  const mythOfTheDay = useMemo(() => getMythOfTheDay(), []);

  // Filter and sort myths
  const filteredMyths = useMemo(() => {
    let result = filterMyths(ALL_MYTHS, {
      category: selectedCategory,
      verdict: selectedVerdict,
      dangerLevel: selectedDanger,
      search: searchQuery,
    });

    if (sortBy === 'believed') {
      result = [...result].sort((a, b) => b.believedPercentage - a.believedPercentage);
    } else if (sortBy === 'alphabetical') {
      result = [...result].sort((a, b) => a.claim.localeCompare(b.claim));
    }

    return result;
  }, [selectedCategory, selectedVerdict, selectedDanger, searchQuery, sortBy]);

  const clearFilters = () => {
    playClickPop();
    setSelectedCategory('ALL');
    setSelectedVerdict('ALL');
    setSelectedDanger('ALL');
    setSearchQuery('');
  };

  const hasActiveFilters =
    selectedCategory !== 'ALL' ||
    selectedVerdict !== 'ALL' ||
    selectedDanger !== 'ALL' ||
    searchQuery.trim() !== '';

  return (
    <div className="max-w-6xl mx-auto py-6 px-4 sm:px-6">
      {/* Featured Myth of the Day Banner */}
      {!hasActiveFilters && (
        <section
          aria-label="Myth of the day"
          className="bg-gradient-to-r from-amber-500/10 via-amber-100/30 to-orange-100/20 border border-amber-200/90 rounded-3xl p-6 sm:p-7 mb-8 shadow-xs relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2.5 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500 text-white shadow-2xs">
                  <Calendar className="w-3.5 h-3.5" />
                  Myth of the Day
                </span>
                <span className="text-xs font-semibold text-stone-500">
                  {mythOfTheDay.category}
                </span>
              </div>

              <h2 className="font-display font-bold text-xl sm:text-2xl text-stone-900 leading-snug">
                "{mythOfTheDay.claim}"
              </h2>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                <span className="font-bold text-amber-950">Verdict: </span>
                {mythOfTheDay.verdictSummary}
              </p>

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => onOpenModal(mythOfTheDay)}
                  className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                >
                  Read Today's Breakdown
                </button>
                <button
                  type="button"
                  onClick={onStartQuizTab}
                  className="px-4 py-2 bg-white hover:bg-stone-50 text-stone-800 border border-stone-200 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                >
                  Take Quiz Instead
                </button>
              </div>
            </div>

            <div className="hidden md:flex flex-col items-center shrink-0">
              <BlobGuide
                mood="explaining"
                hat={currentHat}
                size="md"
                message="Every single day I spotlight one persistent health myth! Tap to explore."
              />
            </div>
          </div>
        </section>
      )}

      {/* Search & Filter Toolbar */}
      <div className="bg-white border border-stone-200 rounded-3xl p-4 sm:p-5 shadow-xs mb-6 space-y-4">
        {/* Search Bar & Sorter */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 88 myths (e.g., water, crunches, carrots, sleep, vitamins, burns)..."
              className="w-full pl-10 pr-10 py-2.5 bg-stone-50 border border-stone-200 rounded-2xl text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort dropdown */}
          <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
            <ArrowUpDown className="w-4 h-4 text-stone-400 hidden sm:block" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'default' | 'believed' | 'alphabetical')}
              className="w-full sm:w-auto py-2.5 px-3 bg-stone-50 border border-stone-200 rounded-2xl text-xs font-medium text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer"
            >
              <option value="default">Default Order</option>
              <option value="believed">Most Believed First</option>
              <option value="alphabetical">Alphabetical (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <button
            type="button"
            onClick={() => {
              playClickPop();
              setSelectedCategory('ALL');
            }}
            className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
              selectedCategory === 'ALL'
                ? 'bg-stone-900 text-white font-semibold'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-600'
            }`}
          >
            All Categories ({ALL_MYTHS.length})
          </button>

          {CATEGORIES.map((cat) => (
            <button
              key={cat.name}
              type="button"
              onClick={() => {
                playClickPop();
                setSelectedCategory(cat.name);
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat.name
                  ? 'bg-amber-600 text-white font-semibold'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-600'
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>

        {/* Secondary Filter Tags (Verdict & Danger Level) */}
        <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-medium text-stone-400 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter by:
            </span>

            {/* Verdict filter */}
            <select
              value={selectedVerdict}
              onChange={(e) => setSelectedVerdict(e.target.value as MythVerdict | 'ALL')}
              className="py-1 px-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-700 cursor-pointer"
            >
              <option value="ALL">All Verdicts</option>
              <option value="BUSTED">Busted Only</option>
              <option value="HALF_TRUTH">Half-Truths Only</option>
            </select>

            {/* Danger filter */}
            <select
              value={selectedDanger}
              onChange={(e) => setSelectedDanger(e.target.value)}
              className="py-1 px-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-700 cursor-pointer"
            >
              <option value="ALL">All Danger Levels</option>
              <option value="Potentially Risky">⚠️ Potentially Risky</option>
              <option value="Common Misconception">Common Misconception</option>
              <option value="Harmless Folklore">Harmless Folklore</option>
            </select>
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="text-xs font-medium text-amber-700 hover:text-amber-900 underline cursor-pointer"
            >
              Reset all filters
            </button>
          )}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between mb-4 px-1">
        <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
          Showing {filteredMyths.length} of {ALL_MYTHS.length} Health Myths
        </span>
      </div>

      {/* Empty State */}
      {filteredMyths.length === 0 ? (
        <div className="bg-white border border-stone-200 rounded-3xl p-10 text-center max-w-md mx-auto my-12">
          <div className="flex justify-center mb-4">
            <BlobGuide mood="thinking" hat={currentHat} size="md" />
          </div>
          <h3 className="font-display font-bold text-lg text-stone-900 mb-1">
            No myths matched your search!
          </h3>
          <p className="text-xs text-stone-500 mb-5">
            Bobbly searched through all 88 claims but couldn't find a match for "{searchQuery}".
          </p>
          <button
            type="button"
            onClick={clearFilters}
            className="px-4 py-2 bg-stone-900 text-white rounded-xl text-xs font-semibold cursor-pointer"
          >
            Clear Filters & View All
          </button>
        </div>
      ) : (
        /* Grid of Myth Cards */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredMyths.map((myth) => (
            <MythCard
              key={myth.id}
              myth={myth}
              isSaved={savedMythIds.includes(myth.id)}
              onToggleSave={onToggleSave}
              onOpenModal={onOpenModal}
              believedCount={(believedCounts[myth.id] || 0) + myth.believedPercentage * 12}
              hasMarkedBelieved={markedBelievedIds.includes(myth.id)}
              onToggleBelieved={onToggleBelieved}
            />
          ))}
        </div>
      )}
    </div>
  );
};

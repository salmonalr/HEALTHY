import React, { useState } from 'react';
import { Myth, BlobHat } from '../types/myth';
import { ALL_MYTHS } from '../data/mythsData';
import { MythCard } from './MythCard';
import { BlobGuide } from './BlobGuide';
import { Bookmark, ThumbsUp, Sparkles, BookOpen, Trash2 } from 'lucide-react';
import { playClickPop } from '../utils/sound';

interface SavedMythsProps {
  savedMythIds: string[];
  onToggleSave: (mythId: string) => void;
  onOpenModal: (myth: Myth) => void;
  currentHat: BlobHat;
  believedCounts: Record<string, number>;
  markedBelievedIds: string[];
  onToggleBelieved: (mythId: string) => void;
  onSwitchToExplorer: () => void;
}

export const SavedMyths: React.FC<SavedMythsProps> = ({
  savedMythIds,
  onToggleSave,
  onOpenModal,
  currentHat,
  believedCounts,
  markedBelievedIds,
  onToggleBelieved,
  onSwitchToExplorer,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'bookmarks' | 'believed'>('bookmarks');

  const bookmarkedMyths = ALL_MYTHS.filter((m) => savedMythIds.includes(m.id));
  const believedMyths = ALL_MYTHS.filter((m) => markedBelievedIds.includes(m.id));

  return (
    <div className="max-w-6xl mx-auto py-6 px-4 sm:px-6">
      {/* Top Banner */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-8 shadow-xs mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3 max-w-xl text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-100 text-rose-900 border border-rose-200">
            <Bookmark className="w-3.5 h-3.5 text-rose-600" />
            Personal Archive
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-stone-900 leading-tight">
            My Personal Mythbook
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Your saved reading list and your "Myths I Used to Believe" trophy wall. Unlearning myths is the true hallmark of scientific growth!
          </p>
        </div>

        <BlobGuide
          mood="happy"
          hat={currentHat}
          size="lg"
          message={
            bookmarkedMyths.length > 0
              ? `You've collected ${bookmarkedMyths.length} myths in your archive!`
              : "Save any myth while exploring and it will show up here!"
          }
        />
      </div>

      {/* Sub-tab pills */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <button
          type="button"
          onClick={() => {
            playClickPop();
            setActiveSubTab('bookmarks');
          }}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            activeSubTab === 'bookmarks'
              ? 'bg-rose-600 text-white shadow-sm'
              : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
          }`}
        >
          <Bookmark className="w-4 h-4" />
          <span>Bookmarked Reading List ({bookmarkedMyths.length})</span>
        </button>

        <button
          type="button"
          onClick={() => {
            playClickPop();
            setActiveSubTab('believed');
          }}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            activeSubTab === 'believed'
              ? 'bg-amber-600 text-white shadow-sm'
              : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
          }`}
        >
          <ThumbsUp className="w-4 h-4" />
          <span>Myths I Used To Believe ({believedMyths.length})</span>
        </button>
      </div>

      {/* Content based on sub-tab */}
      {activeSubTab === 'bookmarks' ? (
        bookmarkedMyths.length === 0 ? (
          <div className="bg-white border border-stone-200 rounded-3xl p-10 text-center max-w-md mx-auto my-12">
            <div className="flex justify-center mb-4">
              <BlobGuide mood="curious" hat={currentHat} size="md" />
            </div>
            <h3 className="font-display font-bold text-lg text-stone-900 mb-1">
              Your Mythbook is empty!
            </h3>
            <p className="text-xs text-stone-500 mb-6">
              Click the bookmark icon on any myth card or breakdown to save it for quick reference anytime.
            </p>
            <button
              type="button"
              onClick={onSwitchToExplorer}
              className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              Browse 88 Health Myths
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {bookmarkedMyths.map((myth) => (
              <MythCard
                key={myth.id}
                myth={myth}
                isSaved={true}
                onToggleSave={onToggleSave}
                onOpenModal={onOpenModal}
                believedCount={(believedCounts[myth.id] || 0) + myth.believedPercentage * 12}
                hasMarkedBelieved={markedBelievedIds.includes(myth.id)}
                onToggleBelieved={onToggleBelieved}
              />
            ))}
          </div>
        )
      ) : believedMyths.length === 0 ? (
        <div className="bg-white border border-stone-200 rounded-3xl p-10 text-center max-w-md mx-auto my-12">
          <div className="flex justify-center mb-4">
            <BlobGuide mood="thinking" hat={currentHat} size="md" />
          </div>
          <h3 className="font-display font-bold text-lg text-stone-900 mb-1">
            No myths tagged yet!
          </h3>
          <p className="text-xs text-stone-500 mb-6">
            When you see a myth you used to genuinely believe, click the "I believed this!" button to build your personal trophy wall of unlearned misconceptions.
          </p>
          <button
            type="button"
            onClick={onSwitchToExplorer}
            className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
          >
            Explore & Tag Myths
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-amber-950 text-xs sm:text-sm leading-relaxed flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
            <span>
              Congratulations! You have officially unlearned and replaced <strong>{believedMyths.length}</strong> pervasive health myths with actual peer-reviewed science!
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {believedMyths.map((myth) => (
              <MythCard
                key={myth.id}
                myth={myth}
                isSaved={savedMythIds.includes(myth.id)}
                onToggleSave={onToggleSave}
                onOpenModal={onOpenModal}
                believedCount={(believedCounts[myth.id] || 0) + myth.believedPercentage * 12}
                hasMarkedBelieved={true}
                onToggleBelieved={onToggleBelieved}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

import React from 'react';
import { Myth, MythVerdict } from '../types/myth';
import { Bookmark, BookmarkCheck, AlertTriangle, HelpCircle, CheckCircle2, ChevronRight, Share2, ThumbsUp } from 'lucide-react';
import { playClickPop } from '../utils/sound';

interface MythCardProps {
  myth: Myth;
  isSaved: boolean;
  onToggleSave: (mythId: string) => void;
  onOpenModal: (myth: Myth) => void;
  believedCount: number;
  hasMarkedBelieved: boolean;
  onToggleBelieved: (mythId: string) => void;
}

export const MythCard: React.FC<MythCardProps> = ({
  myth,
  isSaved,
  onToggleSave,
  onOpenModal,
  believedCount,
  hasMarkedBelieved,
  onToggleBelieved,
}) => {
  const getVerdictBadge = (verdict: MythVerdict) => {
    switch (verdict) {
      case 'BUSTED':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-100 text-rose-800 border border-rose-300">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse" />
            Myth Busted
          </span>
        );
      case 'HALF_TRUTH':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-300">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
            Half-Truth
          </span>
        );
      case 'PLAUSIBLE':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-300">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            Plausible
          </span>
        );
      case 'VERIFIED':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            Science-Backed
          </span>
        );
    }
  };

  const getDangerBadge = () => {
    if (myth.dangerLevel === 'Potentially Risky') {
      return (
        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded-md">
          <AlertTriangle className="w-3 h-3 text-red-600" />
          Potentially Risky
        </span>
      );
    }
    if (myth.dangerLevel === 'Common Misconception') {
      return (
        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-stone-600 bg-stone-100 border border-stone-200 px-2 py-0.5 rounded-md">
          <HelpCircle className="w-3 h-3 text-stone-500" />
          Common Misconception
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
        Harmless Folklore
      </span>
    );
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    playClickPop();
    const textToCopy = `Myth Check: "${myth.claim}"\nVerdict: ${myth.verdict}\nThe Truth: ${myth.verdictSummary}\nLearn more in Health MythBuster!`;
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <article
      onClick={() => onOpenModal(myth)}
      className="group relative bg-white border border-stone-200/90 hover:border-amber-400/80 rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:shadow-md cursor-pointer flex flex-col justify-between"
    >
      <div>
        {/* Badges & Meta */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-2">
            {getVerdictBadge(myth.verdict)}
            <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wide">
              {myth.category}
            </span>
          </div>

          {/* Action buttons (Bookmark & Share) */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={handleCopy}
              title="Copy summary to clipboard"
              aria-label={`Copy summary for ${myth.claim}`}
              className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                playClickPop();
                onToggleSave(myth.id);
              }}
              aria-label={isSaved ? `Remove ${myth.claim} from saved` : `Save ${myth.claim}`}
              title={isSaved ? 'Saved in My Mythbook' : 'Save to reading list'}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                isSaved
                  ? 'text-rose-600 bg-rose-50'
                  : 'text-stone-400 hover:text-stone-700 hover:bg-stone-100'
              }`}
            >
              {isSaved ? <BookmarkCheck className="w-4 h-4 fill-rose-600" /> : <Bookmark className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Claim */}
        <h3 className="font-display font-semibold text-lg sm:text-xl text-stone-900 group-hover:text-amber-900 leading-snug tracking-tight mb-2.5 transition-colors">
          "{myth.claim}"
        </h3>

        {/* The Verdict Summary */}
        <p className="text-sm text-stone-600 leading-relaxed mb-4 line-clamp-3">
          {myth.verdictSummary}
        </p>
      </div>

      {/* Footer with Danger Level, Believed Counter, and Explore Prompt */}
      <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2">
          {getDangerBadge()}

          {/* I Used To Believe This button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              playClickPop();
              onToggleBelieved(myth.id);
            }}
            title="Did you used to believe this myth?"
            className={`flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md transition-colors cursor-pointer ${
              hasMarkedBelieved
                ? 'bg-amber-100 text-amber-900 font-semibold border border-amber-300'
                : 'bg-stone-50 text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            <ThumbsUp className={`w-3 h-3 ${hasMarkedBelieved ? 'text-amber-700 fill-amber-700' : 'text-stone-400'}`} />
            <span>I believed this!</span>
            <span className="font-mono text-[10px] text-stone-500 ml-0.5">({believedCount})</span>
          </button>
        </div>

        <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 group-hover:translate-x-0.5 transition-transform">
          Read Science
          <ChevronRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </article>
  );
};

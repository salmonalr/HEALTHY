import React, { useEffect, useState } from 'react';
import { Myth } from '../types/myth';
import { BlobGuide } from './BlobGuide';
import { X, Bookmark, BookmarkCheck, Share2, ExternalLink, Lightbulb, History, Dna, CheckCircle, HelpCircle } from 'lucide-react';
import { playClickPop, playSuccessChime, playWrongBuzz } from '../utils/sound';

interface MythModalProps {
  myth: Myth | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (mythId: string) => void;
}

export const MythModal: React.FC<MythModalProps> = ({
  myth,
  onClose,
  isSaved,
  onToggleSave,
}) => {
  const [selectedQuizOption, setSelectedQuizOption] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    // Reset quiz state when opening new myth
    setSelectedQuizOption(null);
    setCopied(false);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [myth, onClose]);

  if (!myth) return null;

  const handleOptionSelect = (optionId: string, isCorrect: boolean) => {
    if (selectedQuizOption !== null) return; // already answered
    setSelectedQuizOption(optionId);
    if (isCorrect) {
      playSuccessChime();
    } else {
      playWrongBuzz();
    }
  };

  const handleShare = () => {
    playClickPop();
    const text = `Did you know? "${myth.claim}" is ${myth.verdict}!\nTruth: ${myth.verdictSummary}\nLearn more on Health MythBuster.`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-myth-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-stone-900/60 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-[#FAF8F5] border border-stone-300 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header Bar */}
        <div className="p-5 sm:p-6 pb-4 bg-white border-b border-stone-200 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <BlobGuide
              mood={myth.verdict === 'BUSTED' ? 'shocked' : 'explaining'}
              size="sm"
              interactive={false}
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200">
                  {myth.verdict}
                </span>
                <span className="text-xs font-semibold text-stone-500">
                  {myth.category}
                </span>
              </div>
              <span className="text-[11px] text-stone-400">
                Believed by ~{myth.believedPercentage}% of the public
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handleShare}
              title="Share fact summary"
              className="p-2 rounded-xl text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => {
                playClickPop();
                onToggleSave(myth.id);
              }}
              title={isSaved ? 'Remove from saved' : 'Save to my mythbook'}
              className={`p-2 rounded-xl transition-colors cursor-pointer ${
                isSaved ? 'text-rose-600 bg-rose-50' : 'text-stone-500 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              {isSaved ? <BookmarkCheck className="w-4 h-4 fill-rose-600" /> : <Bookmark className="w-4 h-4" />}
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close myth details modal"
              className="p-2 rounded-xl text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
          {/* Main Claim */}
          <div>
            <h2
              id="modal-myth-title"
              className="font-display font-bold text-2xl sm:text-3xl text-stone-900 leading-tight mb-2"
            >
              "{myth.claim}"
            </h2>
            <div className="p-3.5 bg-amber-50/80 border border-amber-200/80 rounded-2xl text-amber-950 font-medium text-sm leading-relaxed">
              <span className="font-bold">The Verdict: </span>
              {myth.verdictSummary}
            </div>
          </div>

          {/* Section 1: Where Did This Come From? */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-stone-900 font-display font-semibold text-base sm:text-lg">
              <History className="w-4 h-4 text-amber-600" />
              <span>Where Did This Myth Start?</span>
            </div>
            <p className="text-sm text-stone-700 leading-relaxed bg-white p-4 rounded-2xl border border-stone-200">
              {myth.origin}
            </p>
          </div>

          {/* Section 2: What Science Actually Proves */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-stone-900 font-display font-semibold text-base sm:text-lg">
              <Lightbulb className="w-4 h-4 text-emerald-600" />
              <span>The Scientific Reality</span>
            </div>
            <p className="text-sm text-stone-700 leading-relaxed bg-white p-4 rounded-2xl border border-stone-200">
              {myth.scientificTruth}
            </p>
          </div>

          {/* Section 3: The Biological Mechanism */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-stone-900 font-display font-semibold text-base sm:text-lg">
              <Dna className="w-4 h-4 text-teal-600" />
              <span>How The Body Actually Works</span>
            </div>
            <p className="text-sm text-stone-600 leading-relaxed bg-stone-100/80 p-4 rounded-2xl border border-stone-200 font-mono text-xs">
              {myth.mechanism}
            </p>
          </div>

          {/* Section 4: What You Should Actually Do */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-stone-900 font-display font-semibold text-base sm:text-lg">
              <CheckCircle className="w-4 h-4 text-blue-600" />
              <span>Sensible Human Takeaway</span>
            </div>
            <div className="p-4 bg-blue-50/70 border border-blue-200/80 rounded-2xl text-blue-950 text-sm leading-relaxed">
              {myth.practicalAdvice}
            </div>
          </div>

          {/* Mini Interactive Quiz Check */}
          <div className="p-5 bg-stone-50 border border-stone-200 rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800">
                <HelpCircle className="w-4 h-4 text-amber-600" />
                Quick Knowledge Check
              </span>
              <span className="text-[11px] text-stone-400">Test yourself</span>
            </div>

            <p className="text-sm font-semibold text-stone-900">
              {myth.quiz.questionText}
            </p>

            <div className="space-y-2">
              {myth.quiz.options.map((opt) => {
                const isSelected = selectedQuizOption === opt.id;
                let btnStyle = 'bg-white border-stone-200 hover:border-amber-400 text-stone-800';

                if (selectedQuizOption !== null) {
                  if (opt.isCorrect) {
                    btnStyle = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-medium';
                  } else if (isSelected) {
                    btnStyle = 'bg-rose-50 border-rose-300 text-rose-900';
                  } else {
                    btnStyle = 'bg-stone-100/50 border-stone-200 text-stone-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleOptionSelect(opt.id, opt.isCorrect)}
                    disabled={selectedQuizOption !== null}
                    className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-2.5 cursor-pointer disabled:cursor-default ${btnStyle}`}
                  >
                    <span className="font-mono text-xs uppercase px-1.5 py-0.5 rounded-md bg-stone-100 border border-stone-300">
                      {opt.id}
                    </span>
                    <span className="flex-1">{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Explanation reveal */}
            {selectedQuizOption !== null && (
              <div className="pt-2 text-xs text-stone-600 leading-relaxed border-t border-stone-200 animate-in fade-in">
                <span className="font-bold text-stone-800">Explanation: </span>
                {myth.quiz.options.find((o) => o.isCorrect)?.explanation}
              </div>
            )}
          </div>

          {/* Sources & Citations */}
          <div className="pt-2 border-t border-stone-200">
            <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider block mb-2">
              Scientific References & Clinical Consensus
            </span>
            <ul className="space-y-1">
              {myth.sources.map((src, i) => (
                <li key={i} className="text-xs text-stone-600 flex items-center gap-1.5">
                  <ExternalLink className="w-3 h-3 text-stone-400 shrink-0" />
                  <span>{src}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer action */}
        <div className="p-4 bg-stone-100 border-t border-stone-200 flex items-center justify-between">
          <span className="text-xs text-stone-500">
            {copied ? '✓ Copied to clipboard!' : 'Health MythBuster — Verified Evidence'}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
          >
            Close Breakdown
          </button>
        </div>
      </div>
    </div>
  );
};

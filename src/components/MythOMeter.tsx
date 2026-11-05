import React, { useState } from 'react';
import { Myth, BlobHat } from '../types/myth';
import { ALL_MYTHS } from '../data/mythsData';
import { BlobGuide } from './BlobGuide';
import { AlertTriangle, Gauge, Sparkles, CheckCircle2, ChevronRight, Search, ShieldAlert, BookOpen } from 'lucide-react';
import { playClickPop } from '../utils/sound';

interface MythOMeterProps {
  onOpenModal: (myth: Myth) => void;
  currentHat: BlobHat;
}

export const MythOMeter: React.FC<MythOMeterProps> = ({
  onOpenModal,
  currentHat,
}) => {
  const [activeView, setActiveView] = useState<'danger' | 'spectrum' | 'comparator'>('danger');

  // Filter top most dangerous myths
  const dangerousMyths = ALL_MYTHS.filter((m) => m.dangerLevel === 'Potentially Risky');
  const harmlessMyths = ALL_MYTHS.filter((m) => m.dangerLevel === 'Harmless Folklore');
  const commonMyths = ALL_MYTHS.filter((m) => m.dangerLevel === 'Common Misconception');

  return (
    <div className="max-w-5xl mx-auto py-6 px-4">
      {/* Header */}
      <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-8 shadow-xs mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3 max-w-xl text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-900 border border-indigo-200">
            <Gauge className="w-3.5 h-3.5 text-indigo-600" />
            The Truth-o-Meter
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-stone-900 leading-tight">
            The Health Myth Risk Spectrum
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Not all myths are created equal. While carrots giving night vision is harmless wartime folklore, putting butter on burns or peeing on jellyfish stings can cause serious medical harm.
          </p>
        </div>

        <BlobGuide
          mood="explaining"
          hat={currentHat}
          size="lg"
          message="Let's inspect the danger ratings of popular health myths!"
        />
      </div>

      {/* Mode Navigation Tabs */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <button
          type="button"
          onClick={() => {
            playClickPop();
            setActiveView('danger');
          }}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            activeView === 'danger'
              ? 'bg-rose-600 text-white shadow-sm'
              : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
          }`}
        >
          <ShieldAlert className="w-4 h-4" />
          <span>High-Risk Myths ({dangerousMyths.length})</span>
        </button>

        <button
          type="button"
          onClick={() => {
            playClickPop();
            setActiveView('comparator');
          }}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            activeView === 'comparator'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Myth vs Reality Flashcards</span>
        </button>

        <button
          type="button"
          onClick={() => {
            playClickPop();
            setActiveView('spectrum');
          }}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            activeView === 'spectrum'
              ? 'bg-amber-600 text-white shadow-sm'
              : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Harmless Folklore ({harmlessMyths.length})</span>
        </button>
      </div>

      {/* View 1: Dangerous Myths Spotlight */}
      {activeView === 'danger' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-rose-950 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Medical Alert: </span>
              These {dangerousMyths.length} claims are classified as <strong>Potentially Risky</strong> because following them can delay emergency care, induce poisoning, worsen tissue burns, or promote toxic supplement intake.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dangerousMyths.map((myth) => (
              <div
                key={myth.id}
                onClick={() => onOpenModal(myth)}
                className="group bg-white border border-rose-200 hover:border-rose-400 p-5 rounded-2xl shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full uppercase">
                      <AlertTriangle className="w-3 h-3 text-rose-600" />
                      Potentially Risky
                    </span>
                    <span className="text-xs text-stone-400 font-mono">
                      {myth.category}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-stone-900 group-hover:text-rose-950 mb-2 leading-snug">
                    "{myth.claim}"
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    <strong className="text-rose-900">Why it's hazardous: </strong>
                    {myth.verdictSummary}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-rose-700">
                    See Safe Medical Alternative
                  </span>
                  <ChevronRight className="w-4 h-4 text-rose-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* View 2: Myth vs Reality Flashcards */}
      {activeView === 'comparator' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 animate-in fade-in duration-200">
          {ALL_MYTHS.slice(0, 16).map((myth) => (
            <div
              key={myth.id}
              onClick={() => onOpenModal(myth)}
              className="bg-white border border-stone-200 rounded-3xl p-6 shadow-xs hover:shadow-md transition-all cursor-pointer space-y-4"
            >
              <div className="flex items-center justify-between text-xs text-stone-400 font-semibold uppercase tracking-wider">
                <span>{myth.category}</span>
                <span className="text-rose-600 font-bold">{myth.verdict}</span>
              </div>

              {/* The Myth Box */}
              <div className="p-3.5 bg-rose-50/70 border border-rose-200 rounded-2xl">
                <span className="text-[11px] font-bold uppercase text-rose-800 tracking-wider block mb-1">
                  The Popular Myth:
                </span>
                <p className="font-display font-semibold text-sm sm:text-base text-stone-900">
                  "{myth.claim}"
                </p>
              </div>

              {/* The Reality Box */}
              <div className="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-2xl">
                <span className="text-[11px] font-bold uppercase text-emerald-800 tracking-wider block mb-1">
                  The Peer-Reviewed Reality:
                </span>
                <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                  {myth.scientificTruth}
                </p>
              </div>

              <div className="text-right">
                <span className="text-xs font-semibold text-stone-500 hover:text-stone-900 inline-flex items-center gap-1">
                  Explore full origins & mechanics <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View 3: Harmless Folklore */}
      {activeView === 'spectrum' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-950 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Harmless Folklore: </span>
              These {harmlessMyths.length} myths are entertaining schoolyard legends, grandma tales, or WW2 propaganda. Believing them won't hurt your health, but knowing the real history makes great party trivia!
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {harmlessMyths.map((myth) => (
              <div
                key={myth.id}
                onClick={() => onOpenModal(myth)}
                className="group bg-white border border-stone-200 hover:border-emerald-400 p-5 rounded-2xl shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full uppercase">
                      Harmless Folklore
                    </span>
                    <span className="text-xs text-stone-400 font-mono">
                      {myth.category}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-stone-900 group-hover:text-emerald-950 mb-2 leading-snug">
                    "{myth.claim}"
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    <strong className="text-emerald-900">The Real Scoop: </strong>
                    {myth.verdictSummary}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-700">
                    Read the quirky origin story
                  </span>
                  <ChevronRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

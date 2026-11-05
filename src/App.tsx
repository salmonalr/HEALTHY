import React, { useState, useEffect } from 'react';
import { Myth, BlobHat } from './types/myth';
import { ALL_MYTHS } from './data/mythsData';
import { Navbar } from './components/Navbar';
import { MythExplorer } from './components/MythExplorer';
import { QuizArena } from './components/QuizArena';
import { MythOMeter } from './components/MythOMeter';
import { SavedMyths } from './components/SavedMyths';
import { MythModal } from './components/MythModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<'explorer' | 'quiz' | 'meter' | 'saved'>('explorer');
  const [activeMythModal, setActiveMythModal] = useState<Myth | null>(null);

  // Bobbly hat state
  const [currentHat, setCurrentHat] = useState<BlobHat>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('health_myth_bobbly_hat');
      if (saved) return saved as BlobHat;
    }
    return 'doctor';
  });

  // Saved bookmarks
  const [savedMythIds, setSavedMythIds] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('health_myth_saved_ids');
        return saved ? JSON.parse(saved) : ['water-8-glasses', 'detox-cleanses-essential', 'sugar-hyperactivity-kids'];
      } catch {
        return ['water-8-glasses', 'detox-cleanses-essential'];
      }
    }
    return ['water-8-glasses'];
  });

  // Marked believed ids
  const [markedBelievedIds, setMarkedBelievedIds] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('health_myth_believed_ids');
        return saved ? JSON.parse(saved) : ['carrots-night-vision', 'brain-10-percent-capacity'];
      } catch {
        return ['carrots-night-vision'];
      }
    }
    return ['carrots-night-vision'];
  });

  // Believed dynamic increments
  const [believedCounts, setBelievedCounts] = useState<Record<string, number>>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('health_myth_believed_counts');
        return saved ? JSON.parse(saved) : {};
      } catch {
        return {};
      }
    }
    return {};
  });

  // Global quiz streak
  const [quizStreak, setQuizStreak] = useState<number>(0);

  // Check URL params on initial load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get('tab');
      if (tabParam === 'quiz') {
        setActiveTab('quiz');
      } else if (tabParam === 'meter') {
        setActiveTab('meter');
      } else if (tabParam === 'saved') {
        setActiveTab('saved');
      }
    }
  }, []);

  // Save hat changes
  const handleSetHat = (hat: BlobHat) => {
    setCurrentHat(hat);
    if (typeof window !== 'undefined') {
      localStorage.setItem('health_myth_bobbly_hat', hat);
    }
  };

  // Toggle bookmark save
  const handleToggleSave = (mythId: string) => {
    setSavedMythIds((prev) => {
      const next = prev.includes(mythId) ? prev.filter((id) => id !== mythId) : [...prev, mythId];
      if (typeof window !== 'undefined') {
        localStorage.setItem('health_myth_saved_ids', JSON.stringify(next));
      }
      return next;
    });
  };

  // Toggle "I used to believe this!"
  const handleToggleBelieved = (mythId: string) => {
    setMarkedBelievedIds((prev) => {
      const isAlready = prev.includes(mythId);
      const next = isAlready ? prev.filter((id) => id !== mythId) : [...prev, mythId];
      if (typeof window !== 'undefined') {
        localStorage.setItem('health_myth_believed_ids', JSON.stringify(next));
      }

      // update count
      setBelievedCounts((counts) => {
        const currentCount = counts[mythId] || 0;
        const newCount = isAlready ? Math.max(0, currentCount - 1) : currentCount + 1;
        const updated = { ...counts, [mythId]: newCount };
        if (typeof window !== 'undefined') {
          localStorage.setItem('health_myth_believed_counts', JSON.stringify(updated));
        }
        return updated;
      });

      return next;
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col font-sans selection:bg-amber-200">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        savedCount={savedMythIds.length}
        currentHat={currentHat}
        setCurrentHat={handleSetHat}
        quizStreak={quizStreak}
      />

      {/* Main Tab Content */}
      <main className="flex-1">
        {activeTab === 'explorer' && (
          <MythExplorer
            savedMythIds={savedMythIds}
            onToggleSave={handleToggleSave}
            onOpenModal={(myth) => setActiveMythModal(myth)}
            currentHat={currentHat}
            believedCounts={believedCounts}
            markedBelievedIds={markedBelievedIds}
            onToggleBelieved={handleToggleBelieved}
            onStartQuizTab={() => setActiveTab('quiz')}
          />
        )}

        {activeTab === 'quiz' && (
          <QuizArena
            currentHat={currentHat}
            onSaveMyth={handleToggleSave}
            savedMythIds={savedMythIds}
            onOpenMythModal={(myth) => setActiveMythModal(myth)}
            onUpdateGlobalStreak={setQuizStreak}
          />
        )}

        {activeTab === 'meter' && (
          <MythOMeter
            onOpenModal={(myth) => setActiveMythModal(myth)}
            currentHat={currentHat}
          />
        )}

        {activeTab === 'saved' && (
          <SavedMyths
            savedMythIds={savedMythIds}
            onToggleSave={handleToggleSave}
            onOpenModal={(myth) => setActiveMythModal(myth)}
            currentHat={currentHat}
            believedCounts={believedCounts}
            markedBelievedIds={markedBelievedIds}
            onToggleBelieved={handleToggleBelieved}
            onSwitchToExplorer={() => setActiveTab('explorer')}
          />
        )}
      </main>

      {/* Detail Modal */}
      {activeMythModal && (
        <MythModal
          myth={activeMythModal}
          onClose={() => setActiveMythModal(null)}
          isSaved={savedMythIds.includes(activeMythModal.id)}
          onToggleSave={handleToggleSave}
        />
      )}

      {/* Editorial Footer */}
      <footer className="mt-16 border-t border-stone-200/80 bg-white py-10 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="font-display font-bold text-base text-stone-900">
              Health MythBuster
            </span>
            <span className="text-stone-300">•</span>
            <span className="text-xs text-stone-500">
              88 Peer-Reviewed Breakdowns with Bobbly
            </span>
          </div>

          <p className="text-xs text-stone-500 max-w-xl mx-auto leading-relaxed">
            All medical explanations are synthesized from published clinical consensus (CDC, WHO, Harvard T.H. Chan, Mayo Clinic, British Medical Journal, and Cochrane Reviews). This tool is for educational purposes and is not a substitute for personal clinical advice.
          </p>

          <p className="text-[11px] text-stone-400">
            Crafted with warmth, curiosity, and scientific discernment.
          </p>
        </div>
      </footer>
    </div>
  );
}

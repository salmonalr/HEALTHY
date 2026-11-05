import React, { useState, useEffect, useRef } from 'react';
import { Myth, MythCategory, QuizState, BlobMood, BlobHat } from '../types/myth';
import { ALL_MYTHS, CATEGORIES } from '../data/mythsData';
import {
  selectQuizQuestions,
  calculateAnswerPoints,
  getLiteracyAssessment,
  formatTime,
} from '../utils/quizRules';
import { BlobGuide } from './BlobGuide';
import {
  playSuccessChime,
  playWrongBuzz,
  playClickPop,
} from '../utils/sound';
import {
  Zap,
  Flame,
  Award,
  RefreshCw,
  ArrowRight,
  HelpCircle,
  Bookmark,
  BookmarkCheck,
  CheckCircle,
  XCircle,
  Sparkles,
  Shield,
  Layers,
} from 'lucide-react';

interface QuizArenaProps {
  currentHat: BlobHat;
  onSaveMyth: (mythId: string) => void;
  savedMythIds: string[];
  onOpenMythModal: (myth: Myth) => void;
  onUpdateGlobalStreak: (streak: number) => void;
}

export const QuizArena: React.FC<QuizArenaProps> = ({
  currentHat,
  onSaveMyth,
  savedMythIds,
  onOpenMythModal,
  onUpdateGlobalStreak,
}) => {
  // Quiz configuration & state
  const [quizState, setQuizState] = useState<QuizState | null>(null);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [bobblyMood, setBobblyMood] = useState<BlobMood>('curious');
  const [bobblySpeech, setBobblySpeech] = useState<string>('Ready to test your health myth radar? Pick a mode!');
  const [showHint, setShowHint] = useState<boolean>(false);
  const [lastEarnedPoints, setLastEarnedPoints] = useState<number>(0);

  // Timer tracking
  const questionStartTimeRef = useRef<number>(Date.now());
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (quizState && !quizState.isComplete) {
      timer = setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [quizState]);

  // Start a new quiz
  const startQuiz = (mode: QuizState['mode'], category?: MythCategory) => {
    playClickPop();
    const questions = selectQuizQuestions(ALL_MYTHS, mode, category, mode === 'sprint' ? 10 : 8);

    setQuizState({
      mode,
      categoryFilter: category,
      currentQuestionIndex: 0,
      score: 0,
      streak: 0,
      maxStreak: 0,
      strikes: 0,
      questions,
      answers: [],
      isComplete: false,
      timeStarted: Date.now(),
    });

    setSelectedOptionId(null);
    setShowExplanation(false);
    setShowHint(false);
    setElapsedSeconds(0);
    questionStartTimeRef.current = Date.now();
    setBobblyMood('curious');
    setBobblySpeech("Let's bust some persistent folklore! Take your time.");
  };

  const currentMyth = quizState ? quizState.questions[quizState.currentQuestionIndex] : null;

  // Handle option click
  const handleSelectOption = (optionId: string, isCorrect: boolean) => {
    if (!quizState || selectedOptionId !== null || !currentMyth) return;

    const timeSpent = Math.max(1, Math.round((Date.now() - questionStartTimeRef.current) / 1000));
    const nextStreak = isCorrect ? quizState.streak + 1 : 0;
    const points = calculateAnswerPoints(isCorrect, quizState.streak, timeSpent);
    const newMaxStreak = Math.max(quizState.maxStreak, nextStreak);
    const newStrikes = !isCorrect && quizState.mode === 'survival' ? quizState.strikes + 1 : quizState.strikes;

    setSelectedOptionId(optionId);
    setShowExplanation(true);
    setLastEarnedPoints(points);

    if (isCorrect) {
      playSuccessChime();
      setBobblyMood('celebrating');
      const cheers = [
        "Boom! Spot on! That myth never stood a chance!",
        "Brilliant scientific thinking! Bobbly is thrilled!",
        "Yes! You saw right through the folklore!",
        "Peer-reviewed genius right here!"
      ];
      setBobblySpeech(cheers[Math.floor(Math.random() * cheers.length)]);
    } else {
      playWrongBuzz();
      setBobblyMood('sympathetic');
      setBobblySpeech(`Oof! Don't feel bad—roughly ${currentMyth.believedPercentage}% of people believe that too! Now you know the science.`);
    }

    onUpdateGlobalStreak(nextStreak);

    // Save answer
    const newAnswers = [
      ...quizState.answers,
      {
        mythId: currentMyth.id,
        selectedOptionId: optionId,
        isCorrect,
        timeSpentSeconds: timeSpent,
      },
    ];

    setQuizState((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        score: prev.score + points,
        streak: nextStreak,
        maxStreak: newMaxStreak,
        strikes: newStrikes,
        answers: newAnswers,
      };
    });
  };

  // Move to next question or complete
  const handleNextQuestion = () => {
    if (!quizState) return;
    playClickPop();

    const nextIndex = quizState.currentQuestionIndex + 1;
    const isSurvivalOver = quizState.mode === 'survival' && quizState.strikes >= 3;
    const isFinished = nextIndex >= quizState.questions.length || isSurvivalOver;

    if (isFinished) {
      setQuizState((prev) => (prev ? { ...prev, isComplete: true } : null));
      setBobblyMood('happy');
      setBobblySpeech('Quiz complete! Here is your official Scientific Literacy Assessment!');
    } else {
      setQuizState((prev) => (prev ? { ...prev, currentQuestionIndex: nextIndex } : null));
      setSelectedOptionId(null);
      setShowExplanation(false);
      setShowHint(false);
      questionStartTimeRef.current = Date.now();
      setBobblyMood('thinking');
      setBobblySpeech("Next challenge coming up! What do you think about this one?");
    }
  };

  // If no quiz is active, render Mode Selection Screen
  if (!quizState) {
    return (
      <div className="max-w-4xl mx-auto py-6 px-4">
        {/* Hero Banner with Bobbly */}
        <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-8 shadow-xs mb-8 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Interactive Trivia Arena
            </span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-stone-900 leading-tight">
              Test Your Medical & Health Myth Radar
            </h1>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Think you can tell real science from persistent urban legends, wellness marketing, and 1940s propaganda? Challenge yourself across 88 peer-reviewed claims!
            </p>
          </div>

          <div className="flex flex-col items-center">
            <BlobGuide
              mood="explaining"
              hat={currentHat}
              size="lg"
              message="I'll be your scientific co-pilot during the quiz. Pick a mode below!"
            />
          </div>
        </div>

        {/* Quiz Mode Cards */}
        <h2 className="font-display font-bold text-xl text-stone-900 mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-amber-600" />
          Choose Your Challenge Mode
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {/* Sprint Mode */}
          <button
            type="button"
            onClick={() => startQuiz('sprint')}
            className="group text-left bg-white hover:bg-amber-50/40 border border-stone-200 hover:border-amber-400 rounded-3xl p-6 shadow-xs transition-all hover:shadow-md cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-stone-900 mb-1.5">
                Quick Sprint (10 Qs)
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                Rapid-fire general checkup across diet, fitness, sleep, and anatomy. Fast, fun, and eye-opening.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700">
              Start 10-Question Sprint <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          {/* Survival Mode */}
          <button
            type="button"
            onClick={() => startQuiz('survival')}
            className="group text-left bg-white hover:bg-rose-50/40 border border-stone-200 hover:border-rose-400 rounded-3xl p-6 shadow-xs transition-all hover:shadow-md cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-stone-900 mb-1.5">
                Sudden Death (3 Strikes)
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                Three wrong answers and you're out! How high of a streak can you build before folklore catches you?
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-700">
              Start Survival Challenge <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          {/* Category Showdown (Pick One) */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center mb-4">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-stone-900 mb-1.5">
                Category Showdown
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-3">
                Focus your inquiry on a single specific medical domain.
              </p>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="category-select" className="sr-only">Select category for quiz</label>
              <select
                id="category-select"
                onChange={(e) => {
                  if (e.target.value) {
                    startQuiz('category', e.target.value as MythCategory);
                  }
                }}
                defaultValue=""
                className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
              >
                <option value="" disabled>Select a specialty category...</option>
                {CATEGORIES.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.name} ({c.count} myths)
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If Quiz is Finished, show Results Assessment
  if (quizState.isComplete) {
    const totalQuestions = quizState.answers.length;
    const correctCount = quizState.answers.filter((a) => a.isCorrect).length;
    const literacy = getLiteracyAssessment(quizState.score, totalQuestions, correctCount);

    return (
      <div className="max-w-3xl mx-auto py-8 px-4 animate-in fade-in duration-300">
        <div className="bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-9 shadow-sm text-center relative overflow-hidden">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 mb-4">
            <Award className="w-4 h-4 text-amber-700" />
            Official Scorecard
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl text-stone-900 mb-2">
            Quiz Completed!
          </h2>
          <p className="text-sm text-stone-500 mb-6 font-mono">
            Time: {formatTime(elapsedSeconds)} • Highest Streak: {quizState.maxStreak}🔥
          </p>

          {/* Bobbly Guide Reaction */}
          <div className="flex justify-center my-6">
            <BlobGuide
              mood="celebrating"
              hat={currentHat}
              size="lg"
              message={bobblySpeech}
            />
          </div>

          {/* Literacy Grade Card */}
          <div className={`p-6 rounded-3xl border-2 mb-8 ${literacy.colorClass}`}>
            <span className="text-xs font-bold uppercase tracking-wider block mb-1">
              {literacy.rank}
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl mb-2">
              {literacy.title}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
              {literacy.description}
            </p>
          </div>

          {/* Stats Breakdown Grid */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
              <span className="text-xs text-stone-500 block mb-1">Final Score</span>
              <span className="font-display font-bold text-2xl sm:text-3xl text-stone-900">
                {quizState.score}
              </span>
            </div>
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
              <span className="text-xs text-stone-500 block mb-1">Accuracy</span>
              <span className="font-display font-bold text-2xl sm:text-3xl text-stone-900">
                {totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0}%
              </span>
            </div>
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
              <span className="text-xs text-stone-500 block mb-1">Correct / Total</span>
              <span className="font-display font-bold text-2xl sm:text-3xl text-stone-900">
                {correctCount}/{totalQuestions}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setQuizState(null)}
              className="px-5 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              Play Another Quiz
            </button>
          </div>

          {/* Questions Review Section */}
          <div className="mt-10 pt-8 border-t border-stone-200 text-left">
            <h3 className="font-display font-bold text-lg text-stone-900 mb-4">
              Questions & Answers Review ({quizState.answers.length})
            </h3>
            <div className="space-y-3">
              {quizState.answers.map((ans, idx) => {
                const myth = ALL_MYTHS.find((m) => m.id === ans.mythId);
                if (!myth) return null;
                const isSaved = savedMythIds.includes(myth.id);

                return (
                  <div
                    key={ans.mythId}
                    className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50 flex items-start justify-between gap-3"
                  >
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        {ans.isCorrect ? (
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                            <CheckCircle className="w-3.5 h-3.5" /> Correct
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full">
                            <XCircle className="w-3.5 h-3.5" /> Believed Folklore
                          </span>
                        )}
                        <span className="text-xs text-stone-400 font-mono">Q{idx + 1}</span>
                      </div>
                      <p className="font-medium text-stone-900 text-sm">
                        "{myth.claim}"
                      </p>
                      <p className="text-xs text-stone-600">
                        <span className="font-semibold text-stone-700">Truth: </span>
                        {myth.verdictSummary}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        type="button"
                        onClick={() => onOpenMythModal(myth)}
                        className="text-xs font-semibold text-amber-700 hover:text-amber-900 bg-amber-50 hover:bg-amber-100 px-2.5 py-1.5 rounded-lg border border-amber-200 transition-colors cursor-pointer"
                      >
                        Deep Dive
                      </button>
                      <button
                        type="button"
                        onClick={() => onSaveMyth(myth.id)}
                        title={isSaved ? 'Saved in My Mythbook' : 'Save for later'}
                        className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                          isSaved ? 'text-rose-600 bg-rose-50' : 'text-stone-400 hover:text-stone-600'
                        }`}
                      >
                        {isSaved ? <BookmarkCheck className="w-4 h-4 fill-rose-600" /> : <Bookmark className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Active Quiz Question View
  if (!currentMyth) return null;

  return (
    <div className="max-w-3xl mx-auto py-6 px-4">
      {/* Top HUD Bar */}
      <div className="bg-white border border-stone-200/90 rounded-2xl p-4 shadow-xs mb-6 flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-semibold text-stone-500 uppercase tracking-wider">
            {quizState.mode === 'survival' ? (
              <span className="text-rose-700 font-bold">
                Survival • Strikes: {quizState.strikes}/3
              </span>
            ) : (
              `Question ${quizState.currentQuestionIndex + 1} of ${quizState.questions.length}`
            )}
          </span>
          <span className="text-stone-300">|</span>
          <span className="text-xs font-semibold text-stone-700">
            {currentMyth.category}
          </span>
        </div>

        <div className="flex items-center gap-4">
          {/* Current Streak */}
          <div className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
            <Flame className="w-4 h-4 text-amber-500" />
            <span>{quizState.streak} Streak</span>
          </div>

          {/* Current Score */}
          <div className="flex items-center gap-1 text-xs font-mono font-bold text-stone-800 bg-stone-100 px-2.5 py-1 rounded-full border border-stone-200">
            <span>{quizState.score} pts</span>
          </div>
        </div>
      </div>

      {/* Main Question Card with Bobbly */}
      <div className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-sm mb-6">
        {/* Bobbly Companion Header */}
        <div className="flex items-center justify-between gap-4 pb-5 mb-6 border-b border-stone-100">
          <BlobGuide
            mood={bobblyMood}
            hat={currentHat}
            size="md"
            message={bobblySpeech}
          />

          {!showExplanation && (
            <button
              type="button"
              onClick={() => {
                setShowHint(!showHint);
                playClickPop();
              }}
              className="text-xs font-semibold text-amber-700 hover:text-amber-900 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-xl border border-amber-200 transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
              <span>{showHint ? 'Hide Hint' : 'Bobbly’s Hint'}</span>
            </button>
          )}
        </div>

        {/* Optional Bobbly Hint Disclosure */}
        {showHint && !showExplanation && (
          <div className="mb-6 p-3.5 bg-amber-50/70 border border-amber-200 rounded-2xl text-amber-900 text-xs sm:text-sm leading-relaxed animate-in fade-in">
            <span className="font-bold">Bobbly whispers: </span>
            {currentMyth.quiz.bobblyHint}
          </div>
        )}

        {/* Question Heading */}
        <div className="mb-6">
          <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider block mb-1">
            Claim Under Investigation
          </span>
          <h2 className="font-display font-bold text-xl sm:text-2xl text-stone-900 leading-snug">
            "{currentMyth.quiz.questionText}"
          </h2>
        </div>

        {/* Multiple Choice Options */}
        <div className="space-y-3 mb-6">
          {currentMyth.quiz.options.map((opt) => {
            const isSelected = selectedOptionId === opt.id;
            let btnClass =
              'bg-white hover:bg-amber-50/40 border-stone-200 hover:border-amber-400 text-stone-800 shadow-2xs';

            if (selectedOptionId !== null) {
              if (opt.isCorrect) {
                btnClass = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-semibold shadow-xs';
              } else if (isSelected) {
                btnClass = 'bg-rose-50 border-rose-300 text-rose-950';
              } else {
                btnClass = 'bg-stone-50 border-stone-200 text-stone-400 opacity-60';
              }
            }

            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleSelectOption(opt.id, opt.isCorrect)}
                disabled={selectedOptionId !== null}
                className={`w-full text-left p-4 rounded-2xl border text-sm sm:text-base transition-all flex items-start gap-3.5 cursor-pointer disabled:cursor-default ${btnClass}`}
              >
                <span className="font-mono text-xs uppercase px-2 py-1 rounded-lg bg-stone-100 border border-stone-300 font-bold shrink-0">
                  {opt.id}
                </span>
                <span className="flex-1 leading-snug">{opt.text}</span>
                {selectedOptionId !== null && opt.isCorrect && (
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                )}
                {selectedOptionId === opt.id && !opt.isCorrect && (
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Revealed Science Explanation */}
        {showExplanation && (
          <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200 space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-emerald-600" />
                The Peer-Reviewed Reality
              </span>
              {lastEarnedPoints > 0 && (
                <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                  +{lastEarnedPoints} points!
                </span>
              )}
            </div>

            <p className="text-sm text-stone-700 leading-relaxed">
              {currentMyth.scientificTruth}
            </p>

            <div className="pt-2 border-t border-stone-200 flex items-center justify-between gap-3 flex-wrap">
              <button
                type="button"
                onClick={() => onOpenMythModal(currentMyth)}
                className="text-xs font-semibold text-amber-800 hover:underline cursor-pointer"
              >
                View complete origin & mechanisms →
              </button>

              <button
                type="button"
                onClick={handleNextQuestion}
                className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ml-auto"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

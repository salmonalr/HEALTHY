export type MythVerdict = 'BUSTED' | 'HALF_TRUTH' | 'VERIFIED' | 'PLAUSIBLE';

export type MythCategory =
  | 'Nutrition & Diet'
  | 'Fitness & Exercise'
  | 'Brain & Sleep'
  | 'Immunity & Sickness'
  | 'First Aid & Anatomy'
  | 'Daily Habits & Hygiene'
  | 'Wellness Fads & Trends';

export type DangerLevel = 'Harmless Folklore' | 'Common Misconception' | 'Potentially Risky';

export interface QuizQuestion {
  questionText: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
  bobblyHint: string;
}

export interface Myth {
  id: string;
  claim: string;
  verdict: MythVerdict;
  category: MythCategory;
  dangerLevel: DangerLevel;
  verdictSummary: string; // One punchy sentence
  origin: string; // How this myth started
  scientificTruth: string; // What science actually proves
  mechanism: string; // Biological / physiological mechanism
  practicalAdvice: string; // What you should actually do
  sources: string[]; // Authoritative citations (Mayo Clinic, Harvard Health, WHO, etc.)
  believedPercentage: number; // Est. % of general public that believes this
  quiz: QuizQuestion;
  tags: string[];
}

export type BlobMood =
  | 'happy'
  | 'curious'
  | 'explaining'
  | 'shocked'
  | 'celebrating'
  | 'thinking'
  | 'sympathetic'
  | 'waving';

export type BlobHat = 'none' | 'doctor' | 'scholar' | 'detective' | 'apple' | 'chef' | 'sleep';

export interface QuizState {
  mode: 'sprint' | 'category' | 'survival';
  categoryFilter?: MythCategory;
  currentQuestionIndex: number;
  score: number;
  streak: number;
  maxStreak: number;
  strikes: number; // For survival mode (max 3)
  questions: Myth[];
  answers: {
    mythId: string;
    selectedOptionId: string;
    isCorrect: boolean;
    timeSpentSeconds: number;
  }[];
  isComplete: boolean;
  timeStarted: number;
}

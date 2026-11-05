import { Myth, MythCategory, QuizState } from '../types/myth';

/**
 * Calculates score for an answer based on correctness, current streak, and answer speed.
 */
export function calculateAnswerPoints(
  isCorrect: boolean,
  currentStreak: number,
  timeSpentSeconds: number
): number {
  if (!isCorrect) return 0;

  const basePoints = 100;
  // Streak multiplier: +10% per streak up to 50% extra
  const streakBonus = Math.min(currentStreak * 10, 50);
  // Speed bonus: answering under 5s gives up to 50 bonus points
  const speedBonus = Math.max(0, Math.floor((10 - Math.min(timeSpentSeconds, 10)) * 5));

  return basePoints + streakBonus + speedBonus;
}

export interface LiteracyGrade {
  title: string;
  rank: string;
  description: string;
  colorClass: string;
}

/**
 * Evaluates quiz performance into a human, thoughtful scientific literacy assessment.
 */
export function getLiteracyAssessment(score: number, totalQuestions: number, correctCount: number): LiteracyGrade {
  const percentage = totalQuestions > 0 ? (correctCount / totalQuestions) * 100 : 0;

  if (percentage >= 90) {
    return {
      title: 'Certified Myth Slayer',
      rank: 'Tier S — Peer Reviewer',
      description: 'You possess formidable scientific discernment. Medical folklore and wellness marketing have zero power over you!',
      colorClass: 'text-emerald-700 bg-emerald-50 border-emerald-300',
    };
  }
  if (percentage >= 70) {
    return {
      title: 'Evidence-Based Thinker',
      rank: 'Tier A — Skeptical Investigator',
      description: 'Outstanding critical thinking! You spotted nearly all the urban legends and internet wellness fads.',
      colorClass: 'text-teal-700 bg-teal-50 border-teal-300',
    };
  }
  if (percentage >= 50) {
    return {
      title: 'Curious Inquirer',
      rank: 'Tier B — Seeking the Truth',
      description: 'Solid foundation, but a few pervasive cultural myths managed to slip past your radar. Bobbly is proud of your curiosity!',
      colorClass: 'text-amber-700 bg-amber-50 border-amber-300',
    };
  }
  return {
    title: 'Folklore Apprentice',
    rank: 'Tier C — Susceptible to Old Wives’ Tales',
    description: 'You’ve grown up surrounded by persistent myths! The good news: you just unlearned a dozen misconceptions.',
    colorClass: 'text-rose-700 bg-rose-50 border-rose-300',
  };
}

/**
 * Shuffles an array with Fisher-Yates algorithm deterministically or randomly.
 */
export function shuffleArray<T>(array: T[], seedRandom?: () => number): T[] {
  const copy = [...array];
  const rand = seedRandom || Math.random;
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Selects questions for a quiz mode.
 */
export function selectQuizQuestions(
  allMyths: Myth[],
  mode: QuizState['mode'],
  categoryFilter?: MythCategory,
  count: number = 10
): Myth[] {
  let filtered = allMyths;

  if (mode === 'category' && categoryFilter) {
    filtered = allMyths.filter((m) => m.category === categoryFilter);
  }

  const shuffled = shuffleArray(filtered);

  if (mode === 'sprint') {
    return shuffled.slice(0, count);
  }
  if (mode === 'survival') {
    // Return all shuffled questions for survival mode
    return shuffled;
  }
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

/**
 * Formats time spent into mm:ss
 */
export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

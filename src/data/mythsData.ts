import { Myth, MythCategory, MythVerdict } from '../types/myth';
import { nutritionMyths } from './categories/nutrition';
import { fitnessMyths } from './categories/fitness';
import { brainSleepMyths } from './categories/brainSleep';
import { immunityMyths } from './categories/immunity';
import { anatomyFirstAidMyths } from './categories/anatomyFirstAid';
import { habitsHygieneMyths } from './categories/habitsHygiene';
import { wellnessTrendsMyths } from './categories/wellnessTrends';

export const ALL_MYTHS: Myth[] = [
  ...nutritionMyths,
  ...fitnessMyths,
  ...brainSleepMyths,
  ...immunityMyths,
  ...anatomyFirstAidMyths,
  ...habitsHygieneMyths,
  ...wellnessTrendsMyths,
];

export const CATEGORIES: { name: MythCategory; icon: string; count: number; description: string }[] = [
  {
    name: 'Nutrition & Diet',
    icon: 'Apple',
    count: nutritionMyths.length,
    description: 'From 8 glasses of water to detox teas and MSG scares.',
  },
  {
    name: 'Fitness & Exercise',
    icon: 'Dumbbell',
    count: fitnessMyths.length,
    description: 'Spot reduction, 10,000 steps origin, and lifting myths.',
  },
  {
    name: 'Brain & Sleep',
    icon: 'Brain',
    count: brainSleepMyths.length,
    description: 'The 10% brain myth, sleep debt, and blue light spectacles.',
  },
  {
    name: 'Immunity & Sickness',
    icon: 'ShieldAlert',
    count: immunityMyths.length,
    description: 'Cold weather viruses, vitamin C megadoses, and fever rules.',
  },
  {
    name: 'First Aid & Anatomy',
    icon: 'HeartPulse',
    count: anatomyFirstAidMyths.length,
    description: 'Nosebleeds, burns, snakebites, and blue blood illusions.',
  },
  {
    name: 'Daily Habits & Hygiene',
    icon: 'Sparkles',
    count: habitsHygieneMyths.length,
    description: 'The 5-second rule, swallowing spiders, and Q-tip hazards.',
  },
  {
    name: 'Wellness Fads & Trends',
    icon: 'Flame',
    count: wellnessTrendsMyths.length,
    description: 'Alkaline water, collagen shots, charcoal lattes, and ACV.',
  },
];

/**
 * Returns deterministic myth of the day based on current date.
 */
export function getMythOfTheDay(): Myth {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24)
  );
  const index = Math.abs(dayOfYear) % ALL_MYTHS.length;
  return ALL_MYTHS[index];
}

/**
 * Filter myths by category, verdict, search query, or danger level.
 */
export function filterMyths(
  myths: Myth[],
  options: {
    category?: MythCategory | 'ALL';
    verdict?: MythVerdict | 'ALL';
    dangerLevel?: string | 'ALL';
    search?: string;
  }
): Myth[] {
  return myths.filter((m) => {
    if (options.category && options.category !== 'ALL' && m.category !== options.category) {
      return false;
    }
    if (options.verdict && options.verdict !== 'ALL' && m.verdict !== options.verdict) {
      return false;
    }
    if (options.dangerLevel && options.dangerLevel !== 'ALL' && m.dangerLevel !== options.dangerLevel) {
      return false;
    }
    if (options.search && options.search.trim() !== '') {
      const q = options.search.toLowerCase().trim();
      const tokens = q.split(/\s+/).filter(Boolean);
      const searchableContent = [
        m.claim,
        m.verdictSummary,
        m.scientificTruth,
        m.mechanism,
        m.origin,
        m.practicalAdvice,
        ...m.tags,
      ].join(' ').toLowerCase();

      const allTokensMatch = tokens.every((token) => searchableContent.includes(token));
      if (!allTokensMatch) {
        return false;
      }
    }
    return true;
  });
}

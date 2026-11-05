import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateAnswerPoints, getLiteracyAssessment, shuffleArray } from './quizRules';

test('calculateAnswerPoints returns 0 when incorrect', () => {
  assert.equal(calculateAnswerPoints(false, 3, 2), 0);
  assert.equal(calculateAnswerPoints(false, 0, 1), 0);
});

test('calculateAnswerPoints applies base points, streak bonus and speed bonus', () => {
  // Base: 100, Streak: 3 * 10 = 30, Speed: (10 - 2) * 5 = 40 => Total: 170
  const points = calculateAnswerPoints(true, 3, 2);
  assert.equal(points, 170);

  // Maximum streak cap (50)
  const maxStreakPoints = calculateAnswerPoints(true, 10, 10);
  // Base 100 + Streak 50 + Speed 0 => 150
  assert.equal(maxStreakPoints, 150);
});

test('getLiteracyAssessment assigns correct tiers', () => {
  const perfect = getLiteracyAssessment(1000, 10, 10);
  assert.equal(perfect.title, 'Certified Myth Slayer');

  const solid = getLiteracyAssessment(750, 10, 7);
  assert.equal(solid.title, 'Evidence-Based Thinker');

  const average = getLiteracyAssessment(500, 10, 5);
  assert.equal(average.title, 'Curious Inquirer');

  const low = getLiteracyAssessment(200, 10, 2);
  assert.equal(low.title, 'Folklore Apprentice');
});

test('shuffleArray returns all elements without mutation', () => {
  const original = [1, 2, 3, 4, 5];
  const shuffled = shuffleArray(original, () => 0.42);
  assert.equal(shuffled.length, original.length);
  assert.deepEqual([...shuffled].sort(), [...original].sort());
});

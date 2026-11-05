import test from 'node:test';
import assert from 'node:assert/strict';
import { ALL_MYTHS, CATEGORIES, filterMyths, getMythOfTheDay } from './mythsData';

test('dataset contains at least 80 health myths', () => {
  assert.ok(ALL_MYTHS.length >= 80, `Expected at least 80 myths, found ${ALL_MYTHS.length}`);
});

test('every myth has unique id and valid properties', () => {
  const ids = new Set<string>();
  for (const myth of ALL_MYTHS) {
    assert.ok(!ids.has(myth.id), `Duplicate myth id found: ${myth.id}`);
    ids.add(myth.id);
    assert.ok(myth.claim.length > 10, `Claim too short for ${myth.id}`);
    assert.ok(myth.scientificTruth.length > 20, `Truth too short for ${myth.id}`);
    assert.ok(myth.quiz.options.length >= 3, `Quiz must have at least 3 options in ${myth.id}`);
    const correctOptions = myth.quiz.options.filter((o) => o.isCorrect);
    assert.equal(correctOptions.length, 1, `Exactly 1 correct option required in ${myth.id}`);
    assert.ok(myth.sources.length >= 1, `At least 1 source citation required in ${myth.id}`);
  }
});

test('filterMyths filters accurately by category and search text', () => {
  const nutritionOnly = filterMyths(ALL_MYTHS, { category: 'Nutrition & Diet' });
  assert.equal(nutritionOnly.length, 14);

  const waterSearch = filterMyths(ALL_MYTHS, { search: 'glasses of water' });
  assert.ok(waterSearch.length >= 1);
  assert.equal(waterSearch[0].id, 'water-8-glasses');
});

test('getMythOfTheDay returns a valid myth', () => {
  const daily = getMythOfTheDay();
  assert.ok(daily && daily.id);
});

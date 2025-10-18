import { isBetween } from './comparisons.js';
test('inclusive between', () => {
  expect(isBetween(5, 1, 7)).toBe(true);
  expect(isBetween(1, 2, 7)).toBe(false);
});

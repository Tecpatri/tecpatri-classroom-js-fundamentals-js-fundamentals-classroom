import { apiValueOrDefault } from './nullish-coalescing.js';
test('uses fallback only for null/undefined', () => {
  expect(apiValueOrDefault(null, 5)).toBe(5);
  expect(apiValueOrDefault(undefined, 'x')).toBe('x');
  expect(apiValueOrDefault(0, 7)).toBe(0);
  expect(apiValueOrDefault('', 'y')).toBe('');
});

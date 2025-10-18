import { toNumber } from './type-conversions.js';
test('parses numeric strings', () => {
  expect(toNumber('42')).toBe(42);
  expect(toNumber(' 3.14 ')).toBeCloseTo(3.14, 5);
});
test('invalid to NaN', () => {
  expect(Number.isNaN(toNumber('abc'))).toBe(true);
});

import { isNumber, isString } from './fundamentals.js';
test('type checks', () => {
  expect(isNumber(3)).toBe(true);
  expect(isString('a')).toBe(true);
  expect(isNumber('3')).toBe(false);
});

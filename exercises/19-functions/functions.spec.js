import { repeat } from './functions.js';
test('repeats a string', () => {
  expect(repeat('ab', 3)).toBe('ababab');
  expect(repeat('x')).toBe('x');
});

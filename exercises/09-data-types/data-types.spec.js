import { classify } from './data-types.js';
test('classifies values', () => {
  expect(classify(null)).toBe('null');
  expect(classify([1,2])).toBe('array');
  expect(classify({})).toBe('object');
  expect(classify('a')).toBe('string');
});

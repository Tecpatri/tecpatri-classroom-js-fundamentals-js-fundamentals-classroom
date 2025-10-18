import { inStrictMode } from './use-strict.js';
test('detects strict mode', () => {
  expect(inStrictMode()).toBe(true);
});

import { makeCounter } from './function-expressions.js';
test('function expression with closure', () => {
  const c = makeCounter(1);
  expect(c()).toBe(2);
  expect(c()).toBe(3);
});

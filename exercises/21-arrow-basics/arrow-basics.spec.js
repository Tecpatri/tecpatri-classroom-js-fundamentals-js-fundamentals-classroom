import { double, addN } from './arrow-basics.js';
test('arrow basics', () => {
  expect(double(4)).toBe(8);
  const add5 = addN(5);
  expect(add5(7)).toBe(12);
});

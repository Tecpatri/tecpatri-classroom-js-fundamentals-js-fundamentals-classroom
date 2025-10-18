import { sumTo, firstEven } from './loops.js';
test('sumTo', () => {
  expect(sumTo(5)).toBe(15);
});
test('firstEven', () => {
  expect(firstEven([1,3,7,8,10])).toBe(8);
  expect(firstEven([1,3,5])).toBeUndefined();
});

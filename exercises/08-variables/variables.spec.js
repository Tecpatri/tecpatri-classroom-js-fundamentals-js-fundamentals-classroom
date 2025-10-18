import { circleArea } from './variables.js';
test('computes circle area', () => {
  expect(circleArea(2)).toBeCloseTo(12.56636, 5);
});

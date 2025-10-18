import { add, mod, pow } from './operators-math.js';
test('basic math', () => {
  expect(add(2,2)).toBe(4);
  expect(mod(7,3)).toBe(1);
  expect(pow(2,3)).toBe(8);
});

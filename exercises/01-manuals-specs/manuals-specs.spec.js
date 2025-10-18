import { mustRead } from './manuals-specs.js';
test('contains MDN and ECMA-262 links', () => {
  expect(mustRead.some(u => u.includes('mozilla'))).toBe(true);
  expect(mustRead.some(u => u.includes('ecma'))).toBe(true);
});

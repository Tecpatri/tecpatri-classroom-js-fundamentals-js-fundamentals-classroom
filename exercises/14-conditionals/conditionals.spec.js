import { grade } from './conditionals.js';
test('grades correctly', () => {
  expect(grade(95)).toBe('A');
  expect(grade(72)).toBe('C');
  expect(grade(59)).toBe('F');
});

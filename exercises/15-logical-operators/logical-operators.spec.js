import { canDrive } from './logical-operators.js';
test('AND logic', () => {
  expect(canDrive(true, true)).toBe(true);
  expect(canDrive(true, false)).toBe(false);
});

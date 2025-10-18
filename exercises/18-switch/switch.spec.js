import { dayType } from './switch.js';
test('switch basics', () => {
  expect(dayType('Mon')).toBe('weekday');
  expect(dayType('Sun')).toBe('weekend');
});

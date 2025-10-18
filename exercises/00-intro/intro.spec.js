import { sayHello } from './intro.js';
test('greets by name', () => {
  expect(sayHello('Ada')).toBe('Hello, Ada!');
});

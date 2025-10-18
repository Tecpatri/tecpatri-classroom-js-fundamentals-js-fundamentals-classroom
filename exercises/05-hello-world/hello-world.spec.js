import { hello } from './hello-world.js';
test('classic greeting', () => {
  expect(hello()).toBe('Hello, world!');
});

import { askName } from './interaction.js';
test('uses provided prompt function', () => {
  const promptStub = jest.fn(() => 'Sam');
  expect(askName(promptStub)).toBe('Hello, Sam!');
  expect(promptStub).toHaveBeenCalled();
});

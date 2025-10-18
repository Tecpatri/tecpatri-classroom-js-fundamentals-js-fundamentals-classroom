import { formatSum } from './dev-console.js';
test('logs and returns formatted sum', () => {
  const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
  const s = formatSum(2, 5);
  expect(s).toBe('2 + 5 = 7');
  expect(spy).toHaveBeenCalledWith('2 + 5 = 7');
  spy.mockRestore();
});

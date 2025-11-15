import { demonstrateStrictMode, noUndeclaredVariables, noDelete } from './use-strict.js'

describe('Use Strict', () => {
  test('detects strict mode is active', () => {
    expect(demonstrateStrictMode()).toBe(true)
  })

  test('uses properly declared variables', () => {
    expect(noUndeclaredVariables()).toBe('strict mode works')
  })

  test('returns value without deletion', () => {
    expect(noDelete()).toBe(42)
  })
})

import {
  getFirstTruthy,
  getLastTruthy,
  hasAccess,
  canDrive,
  negate,
  setDefault
} from './logical-operators.js'

describe('Exercise 11 - Logical Operators', () => {
  describe('OR operator - returns first truthy value', () => {
    test('getFirstTruthy() returns first truthy value using ||', () => {
      // First is truthy
      expect(getFirstTruthy('hello', 'world', 'test')).toBe('hello')
      expect(getFirstTruthy(1, 2, 3)).toBe(1)

      // First is falsy, second is truthy
      expect(getFirstTruthy(0, 'hello', 'world')).toBe('hello')
      expect(getFirstTruthy('', 'default', 'backup')).toBe('default')

      // First two are falsy, third is truthy
      expect(getFirstTruthy(null, 0, 'last')).toBe('last')
      expect(getFirstTruthy('', null, 'default')).toBe('default')

      // All falsy - returns last value
      expect(getFirstTruthy(0, '', null)).toBe(null)
      expect(getFirstTruthy(false, 0, '')).toBe('')
    })
  })

  describe('AND operator - returns first falsy or last value', () => {
    test('getLastTruthy() returns last value if all truthy, first falsy otherwise', () => {
      // All truthy - returns last
      expect(getLastTruthy(1, 2, 3)).toBe(3)
      expect(getLastTruthy('hello', 'world', 'test')).toBe('test')
      expect(getLastTruthy(true, 1, 'yes')).toBe('yes')

      // First is falsy
      expect(getLastTruthy(0, 'hello', 'world')).toBe(0)
      expect(getLastTruthy('', 'hello', 'world')).toBe('')

      // Second is falsy
      expect(getLastTruthy('hello', 0, 'world')).toBe(0)
      expect(getLastTruthy(1, false, 3)).toBe(false)

      // Third is falsy
      expect(getLastTruthy('hello', 'world', '')).toBe('')
      expect(getLastTruthy(1, 2, 0)).toBe(0)
    })
  })

  describe('AND operator for boolean logic', () => {
    test('hasAccess() checks if both conditions are true', () => {
      expect(hasAccess(true, true)).toBe(true)
      expect(hasAccess(true, false)).toBe(false)
      expect(hasAccess(false, true)).toBe(false)
      expect(hasAccess(false, false)).toBe(false)
    })

    test('canDrive() checks if all three conditions are true', () => {
      // All true
      expect(canDrive(true, true, true)).toBe(true)

      // One false
      expect(canDrive(false, true, true)).toBe(false)
      expect(canDrive(true, false, true)).toBe(false)
      expect(canDrive(true, true, false)).toBe(false)

      // All false
      expect(canDrive(false, false, false)).toBe(false)

      // Two false
      expect(canDrive(false, false, true)).toBe(false)
      expect(canDrive(true, false, false)).toBe(false)
    })
  })

  describe('NOT operator for negation', () => {
    test('negate() returns the boolean negation', () => {
      // Boolean values
      expect(negate(true)).toBe(false)
      expect(negate(false)).toBe(true)

      // Truthy values become false
      expect(negate('hello')).toBe(false)
      expect(negate(1)).toBe(false)
      expect(negate([])).toBe(false)
      expect(negate({})).toBe(false)

      // Falsy values become true
      expect(negate(0)).toBe(true)
      expect(negate('')).toBe(true)
      expect(negate(null)).toBe(true)
      expect(negate(undefined)).toBe(true)
    })
  })

  describe('OR operator for default values', () => {
    test('setDefault() returns value or default if value is falsy', () => {
      // Truthy values return themselves
      expect(setDefault('John', 'Anonymous')).toBe('John')
      expect(setDefault(42, 100)).toBe(42)
      expect(setDefault('hello', 'default')).toBe('hello')

      // Falsy values return default
      expect(setDefault('', 'Anonymous')).toBe('Anonymous')
      expect(setDefault(0, 100)).toBe(100)
      expect(setDefault(null, 'default')).toBe('default')
      expect(setDefault(undefined, 'fallback')).toBe('fallback')
      expect(setDefault(false, true)).toBe(true)
    })
  })

  describe('Complex logical expressions', () => {
    test('OR chains work with multiple falsy values', () => {
      expect(getFirstTruthy(null, undefined, 0)).toBe(0)
      expect(getFirstTruthy(false, null, 'found')).toBe('found')
    })

    test('AND chains stop at first falsy value', () => {
      expect(getLastTruthy(true, '', 'never reached')).toBe('')
      expect(getLastTruthy(1, 2, false)).toBe(false)
    })

    test('NOT converts to boolean before negating', () => {
      expect(negate([])).toBe(false) // Empty array is truthy
      expect(negate({})).toBe(false) // Empty object is truthy
      expect(negate('0')).toBe(false) // String '0' is truthy
      expect(negate(NaN)).toBe(true) // NaN is falsy
    })
  })
})

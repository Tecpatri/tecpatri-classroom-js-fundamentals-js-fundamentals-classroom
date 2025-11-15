import {
  isEqual,
  isGreater,
  isLessOrEqual,
  compareStrings,
  isLooselyEqual,
  isBetween,
  isNullish,
  compareValues
} from './comparisons.js'

describe('Exercise 09 - Comparisons', () => {
  describe('Strict equality', () => {
    test('isEqual() checks strict equality with ===', () => {
      expect(isEqual(5, 5)).toBe(true)
      expect(isEqual('hello', 'hello')).toBe(true)
      expect(isEqual(5, '5')).toBe(false)
      expect(isEqual(0, false)).toBe(false)
      expect(isEqual(null, undefined)).toBe(false)
      expect(isEqual(null, null)).toBe(true)
    })
  })

  describe('Basic comparison operators', () => {
    test('isGreater() checks if a > b', () => {
      expect(isGreater(10, 5)).toBe(true)
      expect(isGreater(3, 7)).toBe(false)
      expect(isGreater(5, 5)).toBe(false)
      expect(isGreater('2', 1)).toBe(true) // Type coercion: '2' becomes 2
    })

    test('isLessOrEqual() checks if a <= b', () => {
      expect(isLessOrEqual(5, 10)).toBe(true)
      expect(isLessOrEqual(5, 5)).toBe(true)
      expect(isLessOrEqual(10, 5)).toBe(false)
      expect(isLessOrEqual(0, 0)).toBe(true)
    })
  })

  describe('String comparison', () => {
    test('compareStrings() compares strings lexicographically', () => {
      // str1 < str2 should return negative
      expect(compareStrings('apple', 'banana')).toBeLessThan(0)
      expect(compareStrings('a', 'z')).toBeLessThan(0)

      // str1 === str2 should return 0
      expect(compareStrings('hello', 'hello')).toBe(0)
      expect(compareStrings('', '')).toBe(0)

      // str1 > str2 should return positive
      expect(compareStrings('zebra', 'apple')).toBeGreaterThan(0)
      expect(compareStrings('z', 'a')).toBeGreaterThan(0)

      // Longer string with same prefix
      expect(compareStrings('bee', 'be')).toBeGreaterThan(0)
    })
  })

  describe('Loose equality', () => {
    test('isLooselyEqual() demonstrates loose equality with ==', () => {
      // Type coercion cases
      expect(isLooselyEqual(5, '5')).toBe(true)
      expect(isLooselyEqual(0, false)).toBe(true)
      expect(isLooselyEqual(1, true)).toBe(true)
      expect(isLooselyEqual(null, undefined)).toBe(true)

      // Should still return false for obviously different values
      expect(isLooselyEqual(5, 10)).toBe(false)
      expect(isLooselyEqual('hello', 'world')).toBe(false)
    })
  })

  describe('Range checking', () => {
    test('isBetween() checks if value is within range (inclusive)', () => {
      expect(isBetween(5, 1, 10)).toBe(true)
      expect(isBetween(1, 1, 10)).toBe(true) // Edge case: equal to min
      expect(isBetween(10, 1, 10)).toBe(true) // Edge case: equal to max
      expect(isBetween(0, 1, 10)).toBe(false)
      expect(isBetween(11, 1, 10)).toBe(false)
      expect(isBetween(-5, -10, 0)).toBe(true) // Negative numbers
    })
  })

  describe('Null and undefined special cases', () => {
    test('isNullish() identifies null or undefined', () => {
      // Should return true for null and undefined
      expect(isNullish(null)).toBe(true)
      expect(isNullish(undefined)).toBe(true)

      // Should return false for other falsy values
      expect(isNullish(0)).toBe(false)
      expect(isNullish('')).toBe(false)
      expect(isNullish(false)).toBe(false)
      expect(isNullish(NaN)).toBe(false)

      // Should return false for truthy values
      expect(isNullish('hello')).toBe(false)
      expect(isNullish(1)).toBe(false)
      expect(isNullish(true)).toBe(false)
    })
  })

  describe('Comparison result', () => {
    test('compareValues() returns comparison result as string', () => {
      expect(compareValues(10, 5)).toBe('greater')
      expect(compareValues(100, 1)).toBe('greater')

      expect(compareValues(3, 8)).toBe('less')
      expect(compareValues(1, 100)).toBe('less')

      expect(compareValues(5, 5)).toBe('equal')
      expect(compareValues(0, 0)).toBe('equal')
      expect(compareValues(-5, -5)).toBe('equal')
    })
  })

  describe('Edge cases and type coercion', () => {
    test('comparisons work with type coercion', () => {
      // String to number comparison in >
      expect(isGreater('10', 5)).toBe(true)
      expect(isGreater('2', '12')).toBe(false) // Both strings - compared lexicographically
    })

    test('strict equality distinguishes types', () => {
      expect(isEqual(0, '0')).toBe(false)
      expect(isEqual(true, 1)).toBe(false)
      expect(isEqual(false, 0)).toBe(false)
    })

    test('string comparison is lexicographical', () => {
      expect(compareStrings('Apple', 'apple')).toBeLessThan(0) // 'A' < 'a'
      expect(compareStrings('10', '2')).toBeLessThan(0) // String '1' < '2'
    })
  })
})

import {
  createRange,
  isIterable,
  iterableToArray,
  getCharacters,
  createFibonacci,
  isArrayLike,
  sumIterable
} from './iterables.js'

describe('Iterables', () => {
  describe('createRange', () => {
    test('creates an iterable range object', () => {
      const range = createRange(1, 5)
      const result = []
      for (const num of range) {
        result.push(num)
      }
      expect(result).toEqual([1, 2, 3, 4, 5])
    })

    test('works with different ranges', () => {
      const range = createRange(3, 7)
      const result = []
      for (const num of range) {
        result.push(num)
      }
      expect(result).toEqual([3, 4, 5, 6, 7])
    })

    test('can be spread into an array', () => {
      const range = createRange(1, 3)
      expect([...range]).toEqual([1, 2, 3])
    })
  })

  describe('isIterable', () => {
    test('returns true for arrays', () => {
      expect(isIterable([1, 2, 3])).toBe(true)
    })

    test('returns true for strings', () => {
      expect(isIterable('hello')).toBe(true)
    })

    test('returns true for custom iterables', () => {
      const range = createRange(1, 3)
      expect(isIterable(range)).toBe(true)
    })

    test('returns false for plain objects', () => {
      expect(isIterable({ a: 1, b: 2 })).toBe(false)
    })

    test('returns false for null and undefined', () => {
      expect(isIterable(null)).toBe(false)
      expect(isIterable(undefined)).toBe(false)
    })
  })

  describe('iterableToArray', () => {
    test('converts a custom iterable to array', () => {
      const range = createRange(1, 4)
      expect(iterableToArray(range)).toEqual([1, 2, 3, 4])
    })

    test('converts a string to array of characters', () => {
      expect(iterableToArray('hello')).toEqual(['h', 'e', 'l', 'l', 'o'])
    })

    test('converts an array-like object to array', () => {
      const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 }
      expect(iterableToArray(arrayLike)).toEqual(['a', 'b', 'c'])
    })
  })

  describe('getCharacters', () => {
    test('extracts characters from a string', () => {
      expect(getCharacters('hello')).toEqual(['h', 'e', 'l', 'l', 'o'])
    })

    test('works with empty string', () => {
      expect(getCharacters('')).toEqual([])
    })

    test('works with special characters', () => {
      expect(getCharacters('a-b')).toEqual(['a', '-', 'b'])
    })
  })

  describe('createFibonacci', () => {
    test('generates Fibonacci sequence up to max', () => {
      const fib = createFibonacci(10)
      const result = []
      for (const num of fib) {
        result.push(num)
      }
      expect(result).toEqual([1, 1, 2, 3, 5, 8])
    })

    test('works with different max values', () => {
      const fib = createFibonacci(20)
      expect([...fib]).toEqual([1, 1, 2, 3, 5, 8, 13])
    })

    test('works with small max value', () => {
      const fib = createFibonacci(1)
      expect([...fib]).toEqual([1, 1])
    })
  })

  describe('isArrayLike', () => {
    test('returns true for array-like objects', () => {
      expect(isArrayLike({ 0: 'a', 1: 'b', length: 2 })).toBe(true)
    })

    test('returns true for actual arrays', () => {
      expect(isArrayLike([1, 2, 3])).toBe(true)
    })

    test('returns true for strings', () => {
      expect(isArrayLike('hello')).toBe(true)
    })

    test('returns false for objects without length', () => {
      expect(isArrayLike({ 0: 'a', 1: 'b' })).toBe(false)
    })

    test('returns false for null and undefined', () => {
      expect(isArrayLike(null)).toBe(false)
      expect(isArrayLike(undefined)).toBe(false)
    })
  })

  describe('sumIterable', () => {
    test('sums numbers from a custom iterable', () => {
      const range = createRange(1, 5)
      expect(sumIterable(range)).toBe(15)
    })

    test('sums numbers from an array', () => {
      expect(sumIterable([1, 2, 3, 4])).toBe(10)
    })

    test('works with empty iterable', () => {
      expect(sumIterable([])).toBe(0)
    })
  })
})

import {
  countDown,
  sumNumbers,
  findFirstNegative,
  skipEvens,
  repeatUntilValid,
  createMultiplicationTable
} from './loops.js'

describe('Loops: while and for', () => {
  describe('countDown (while loop)', () => {
    test('counts down from n to 1', () => {
      expect(countDown(5)).toEqual([5, 4, 3, 2, 1])
      expect(countDown(3)).toEqual([3, 2, 1])
      expect(countDown(1)).toEqual([1])
    })

    test('returns empty array for 0 or negative numbers', () => {
      expect(countDown(0)).toEqual([])
      expect(countDown(-5)).toEqual([])
    })
  })

  describe('sumNumbers (for loop)', () => {
    test('sums all numbers in an array', () => {
      expect(sumNumbers([1, 2, 3, 4])).toBe(10)
      expect(sumNumbers([5, 10, 15])).toBe(30)
      expect(sumNumbers([100])).toBe(100)
    })

    test('returns 0 for empty array', () => {
      expect(sumNumbers([])).toBe(0)
    })

    test('handles negative numbers', () => {
      expect(sumNumbers([1, -2, 3, -4])).toBe(-2)
      expect(sumNumbers([-1, -2, -3])).toBe(-6)
    })
  })

  describe('findFirstNegative (break statement)', () => {
    test('finds the first negative number', () => {
      expect(findFirstNegative([1, 2, -3, -4, 5])).toBe(-3)
      expect(findFirstNegative([5, 4, 3, -2, -1])).toBe(-2)
      expect(findFirstNegative([-1, -2, -3])).toBe(-1)
    })

    test('returns null when no negative numbers exist', () => {
      expect(findFirstNegative([1, 2, 3])).toBe(null)
      expect(findFirstNegative([0, 5, 10])).toBe(null)
    })

    test('handles empty array', () => {
      expect(findFirstNegative([])).toBe(null)
    })
  })

  describe('skipEvens (continue statement)', () => {
    test('collects only odd numbers from 1 to n', () => {
      expect(skipEvens(10)).toEqual([1, 3, 5, 7, 9])
      expect(skipEvens(5)).toEqual([1, 3, 5])
      expect(skipEvens(1)).toEqual([1])
    })

    test('returns empty array for 0 or negative', () => {
      expect(skipEvens(0)).toEqual([])
      expect(skipEvens(-5)).toEqual([])
    })

    test('handles even upper limits', () => {
      expect(skipEvens(8)).toEqual([1, 3, 5, 7])
    })
  })

  describe('repeatUntilValid (do...while loop)', () => {
    test('repeats until validator returns true', () => {
      let count = 0
      const result = repeatUntilValid(() => ++count === 3)
      expect(result).toBe(3)
    })

    test('runs at least once even if condition is initially true', () => {
      const attempts = repeatUntilValid(() => true)
      expect(attempts).toBe(1)
    })

    test('handles multiple attempts', () => {
      let count = 0
      const result = repeatUntilValid(() => {
        count++
        return count >= 5
      })
      expect(result).toBe(5)
    })
  })

  describe('createMultiplicationTable (nested loops)', () => {
    test('creates a 3x3 multiplication table', () => {
      expect(createMultiplicationTable(3)).toEqual([
        [1, 2, 3],
        [2, 4, 6],
        [3, 6, 9]
      ])
    })

    test('creates a 1x1 table', () => {
      expect(createMultiplicationTable(1)).toEqual([[1]])
    })

    test('creates a 5x5 multiplication table', () => {
      const result = createMultiplicationTable(5)
      expect(result).toHaveLength(5)
      expect(result[0]).toEqual([1, 2, 3, 4, 5])
      expect(result[4]).toEqual([5, 10, 15, 20, 25])
      expect(result[2][2]).toBe(9) // 3 * 3
      expect(result[3][4]).toBe(20) // 4 * 5
    })

    test('returns empty array for size 0', () => {
      expect(createMultiplicationTable(0)).toEqual([])
    })
  })
})

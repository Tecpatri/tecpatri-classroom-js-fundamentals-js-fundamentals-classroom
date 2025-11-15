import {
  getGrade,
  getAbsoluteValue,
  canVote,
  getMax,
  getFizzBuzz,
  checkSign,
  checkTruthiness,
  getDiscountMessage
} from './conditionals.js'

describe('Exercise 10 - Conditional Branching', () => {
  describe('else if chains', () => {
    test('getGrade() converts numeric scores to letter grades', () => {
      // A grades (90-100)
      expect(getGrade(95)).toBe('A')
      expect(getGrade(90)).toBe('A')
      expect(getGrade(100)).toBe('A')

      // B grades (80-89)
      expect(getGrade(85)).toBe('B')
      expect(getGrade(80)).toBe('B')
      expect(getGrade(89)).toBe('B')

      // C grades (70-79)
      expect(getGrade(72)).toBe('C')
      expect(getGrade(70)).toBe('C')
      expect(getGrade(79)).toBe('C')

      // D grades (60-69)
      expect(getGrade(65)).toBe('D')
      expect(getGrade(60)).toBe('D')

      // F grades (below 60)
      expect(getGrade(59)).toBe('F')
      expect(getGrade(0)).toBe('F')
    })
  })

  describe('Basic if/else', () => {
    test('getAbsoluteValue() returns the absolute value of a number', () => {
      expect(getAbsoluteValue(-5)).toBe(5)
      expect(getAbsoluteValue(5)).toBe(5)
      expect(getAbsoluteValue(0)).toBe(0)
      expect(getAbsoluteValue(-100)).toBe(100)
      expect(getAbsoluteValue(42)).toBe(42)
    })

    test('canVote() checks if age is 18 or older', () => {
      expect(canVote(18)).toBe(true)
      expect(canVote(20)).toBe(true)
      expect(canVote(65)).toBe(true)
      expect(canVote(17)).toBe(false)
      expect(canVote(0)).toBe(false)
      expect(canVote(16)).toBe(false)
    })
  })

  describe('Ternary operator', () => {
    test('getMax() returns the larger of two numbers', () => {
      expect(getMax(10, 5)).toBe(10)
      expect(getMax(3, 8)).toBe(8)
      expect(getMax(5, 5)).toBe(5)
      expect(getMax(-1, -10)).toBe(-1)
      expect(getMax(0, 0)).toBe(0)
    })
  })

  describe('FizzBuzz logic', () => {
    test('getFizzBuzz() implements FizzBuzz rules', () => {
      // FizzBuzz (divisible by both 3 and 5)
      expect(getFizzBuzz(15)).toBe('FizzBuzz')
      expect(getFizzBuzz(30)).toBe('FizzBuzz')
      expect(getFizzBuzz(0)).toBe('FizzBuzz')

      // Fizz (divisible by 3)
      expect(getFizzBuzz(3)).toBe('Fizz')
      expect(getFizzBuzz(9)).toBe('Fizz')
      expect(getFizzBuzz(12)).toBe('Fizz')

      // Buzz (divisible by 5)
      expect(getFizzBuzz(5)).toBe('Buzz')
      expect(getFizzBuzz(10)).toBe('Buzz')
      expect(getFizzBuzz(20)).toBe('Buzz')

      // Regular numbers (not divisible by 3 or 5)
      expect(getFizzBuzz(1)).toBe('1')
      expect(getFizzBuzz(7)).toBe('7')
      expect(getFizzBuzz(13)).toBe('13')
    })
  })

  describe('Multiple conditions', () => {
    test('checkSign() identifies positive, negative, or zero', () => {
      expect(checkSign(5)).toBe('positive')
      expect(checkSign(100)).toBe('positive')
      expect(checkSign(0.1)).toBe('positive')

      expect(checkSign(-3)).toBe('negative')
      expect(checkSign(-100)).toBe('negative')
      expect(checkSign(-0.1)).toBe('negative')

      expect(checkSign(0)).toBe('zero')
    })
  })

  describe('Truthy and falsy values', () => {
    test('checkTruthiness() identifies truthy and falsy values', () => {
      // Truthy values
      expect(checkTruthiness('hello')).toBe('truthy')
      expect(checkTruthiness(1)).toBe('truthy')
      expect(checkTruthiness(-1)).toBe('truthy')
      expect(checkTruthiness(true)).toBe('truthy')
      expect(checkTruthiness([])).toBe('truthy')
      expect(checkTruthiness({})).toBe('truthy')

      // Falsy values
      expect(checkTruthiness(0)).toBe('falsy')
      expect(checkTruthiness('')).toBe('falsy')
      expect(checkTruthiness(false)).toBe('falsy')
      expect(checkTruthiness(null)).toBe('falsy')
      expect(checkTruthiness(undefined)).toBe('falsy')
    })
  })

  describe('Complex conditional logic', () => {
    test('getDiscountMessage() returns appropriate discount messages', () => {
      // $100 or more
      expect(getDiscountMessage(100)).toBe('20% discount')
      expect(getDiscountMessage(120)).toBe('20% discount')
      expect(getDiscountMessage(500)).toBe('20% discount')

      // $50-$99
      expect(getDiscountMessage(50)).toBe('10% discount')
      expect(getDiscountMessage(75)).toBe('10% discount')
      expect(getDiscountMessage(99)).toBe('10% discount')

      // Less than $50
      expect(getDiscountMessage(49)).toBe('No discount')
      expect(getDiscountMessage(30)).toBe('No discount')
      expect(getDiscountMessage(0)).toBe('No discount')
    })
  })
})

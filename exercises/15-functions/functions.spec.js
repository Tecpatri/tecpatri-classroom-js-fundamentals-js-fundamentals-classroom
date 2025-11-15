import {
  greet,
  calculateArea,
  getDiscount,
  createMessage,
  findMax,
  isEven
} from './functions.js'

describe('Function Basics', () => {
  describe('greet - function with parameters and return value', () => {
    test('should return a greeting with the provided name', () => {
      expect(greet('Alice')).toBe('Hello, Alice!')
      expect(greet('Bob')).toBe('Hello, Bob!')
    })

    test('should work with different names', () => {
      expect(greet('World')).toBe('Hello, World!')
      expect(greet('JavaScript')).toBe('Hello, JavaScript!')
    })
  })

  describe('calculateArea - function with multiple parameters', () => {
    test('should calculate area correctly with positive numbers', () => {
      expect(calculateArea(5, 10)).toBe(50)
      expect(calculateArea(7, 3)).toBe(21)
      expect(calculateArea(12, 8)).toBe(96)
    })

    test('should handle zero values', () => {
      expect(calculateArea(0, 10)).toBe(0)
      expect(calculateArea(5, 0)).toBe(0)
    })

    test('should handle decimal values', () => {
      expect(calculateArea(5.5, 2)).toBe(11)
      expect(calculateArea(3.5, 4)).toBe(14)
    })
  })

  describe('getDiscount - function with default parameter values', () => {
    test('should use default 10% discount when not provided', () => {
      expect(getDiscount(100)).toBe(10)
      expect(getDiscount(50)).toBe(5)
      expect(getDiscount(200)).toBe(20)
    })

    test('should use custom discount when provided', () => {
      expect(getDiscount(100, 20)).toBe(20)
      expect(getDiscount(50, 15)).toBe(7.5)
      expect(getDiscount(200, 25)).toBe(50)
    })

    test('should handle 0% discount', () => {
      expect(getDiscount(200, 0)).toBe(0)
    })

    test('should handle 100% discount', () => {
      expect(getDiscount(100, 100)).toBe(100)
    })
  })

  describe('createMessage - function combining parameters', () => {
    test('should create formatted messages', () => {
      expect(createMessage('Hello', 'World')).toBe('Hello, World!')
      expect(createMessage('Good', 'Morning')).toBe('Good, Morning!')
    })

    test('should work with different greetings', () => {
      expect(createMessage('Hi', 'there')).toBe('Hi, there!')
      expect(createMessage('Welcome', 'friend')).toBe('Welcome, friend!')
    })
  })

  describe('findMax - function with explicit return and conditional logic', () => {
    test('should return the larger number', () => {
      expect(findMax(5, 10)).toBe(10)
      expect(findMax(20, 15)).toBe(20)
      expect(findMax(100, 50)).toBe(100)
    })

    test('should handle equal numbers', () => {
      expect(findMax(7, 7)).toBe(7)
      expect(findMax(0, 0)).toBe(0)
    })

    test('should handle negative numbers', () => {
      expect(findMax(-5, -10)).toBe(-5)
      expect(findMax(-1, -100)).toBe(-1)
    })

    test('should handle mixed positive and negative', () => {
      expect(findMax(-5, 10)).toBe(10)
      expect(findMax(5, -10)).toBe(5)
    })
  })

  describe('isEven - function returning boolean values', () => {
    test('should return true for even numbers', () => {
      expect(isEven(4)).toBe(true)
      expect(isEven(0)).toBe(true)
      expect(isEven(2)).toBe(true)
      expect(isEven(100)).toBe(true)
    })

    test('should return false for odd numbers', () => {
      expect(isEven(7)).toBe(false)
      expect(isEven(1)).toBe(false)
      expect(isEven(99)).toBe(false)
    })

    test('should handle negative even numbers', () => {
      expect(isEven(-2)).toBe(true)
      expect(isEven(-4)).toBe(true)
      expect(isEven(-100)).toBe(true)
    })

    test('should handle negative odd numbers', () => {
      expect(isEven(-3)).toBe(false)
      expect(isEven(-1)).toBe(false)
      expect(isEven(-99)).toBe(false)
    })
  })
})

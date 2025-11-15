import {
  add,
  subtract,
  multiply,
  divide,
  remainder,
  power,
  concatenate,
  convertToNumber,
  incrementByRef,
  addAndAssign,
  sumStringNumbers
} from './operators-math.js'

describe('Exercise 08 - Basic Operators, Maths', () => {
  describe('Basic arithmetic operators', () => {
    test('add() returns the sum of two numbers', () => {
      expect(add(2, 3)).toBe(5)
      expect(add(10, -5)).toBe(5)
      expect(add(0, 0)).toBe(0)
      expect(add(1.5, 2.5)).toBe(4)
    })

    test('subtract() returns the difference of two numbers', () => {
      expect(subtract(10, 3)).toBe(7)
      expect(subtract(5, 10)).toBe(-5)
      expect(subtract(0, 0)).toBe(0)
      expect(subtract(2.5, 1.5)).toBe(1)
    })

    test('multiply() returns the product of two numbers', () => {
      expect(multiply(4, 5)).toBe(20)
      expect(multiply(3, -2)).toBe(-6)
      expect(multiply(0, 100)).toBe(0)
      expect(multiply(2.5, 4)).toBe(10)
    })

    test('divide() returns the quotient of two numbers', () => {
      expect(divide(10, 2)).toBe(5)
      expect(divide(15, 3)).toBe(5)
      expect(divide(7, 2)).toBe(3.5)
      expect(divide(0, 5)).toBe(0)
    })
  })

  describe('Remainder and exponentiation', () => {
    test('remainder() returns the remainder using modulo operator', () => {
      expect(remainder(10, 3)).toBe(1)
      expect(remainder(7, 4)).toBe(3)
      expect(remainder(8, 2)).toBe(0)
      expect(remainder(5, 10)).toBe(5)
    })

    test('power() returns a raised to the power of b', () => {
      expect(power(2, 3)).toBe(8)
      expect(power(5, 2)).toBe(25)
      expect(power(10, 0)).toBe(1)
      expect(power(2, 10)).toBe(1024)
    })
  })

  describe('String concatenation', () => {
    test('concatenate() joins two strings with a space', () => {
      expect(concatenate('Hello', 'World')).toBe('Hello World')
      expect(concatenate('JavaScript', 'Rocks')).toBe('JavaScript Rocks')
      expect(concatenate('', 'Test')).toBe(' Test')
      expect(concatenate('Test', '')).toBe('Test ')
    })
  })

  describe('Type conversion with unary plus', () => {
    test('convertToNumber() converts values to numbers', () => {
      expect(convertToNumber('123')).toBe(123)
      expect(convertToNumber('456')).toBe(456)
      expect(convertToNumber(true)).toBe(1)
      expect(convertToNumber(false)).toBe(0)
      expect(convertToNumber('')).toBe(0)
      expect(convertToNumber('  42  ')).toBe(42)
    })
  })

  describe('Increment operator', () => {
    test('incrementByRef() increments object property and returns new value', () => {
      const obj1 = { value: 5 }
      expect(incrementByRef(obj1)).toBe(6)
      expect(obj1.value).toBe(6)

      const obj2 = { value: 0 }
      expect(incrementByRef(obj2)).toBe(1)
      expect(obj2.value).toBe(1)

      const obj3 = { value: -1 }
      expect(incrementByRef(obj3)).toBe(0)
      expect(obj3.value).toBe(0)
    })
  })

  describe('Assignment operators', () => {
    test('addAndAssign() uses compound assignment operator +=', () => {
      const obj1 = { value: 10 }
      expect(addAndAssign(obj1, 5)).toBe(15)
      expect(obj1.value).toBe(15)

      const obj2 = { value: 0 }
      expect(addAndAssign(obj2, 100)).toBe(100)
      expect(obj2.value).toBe(100)

      const obj3 = { value: -5 }
      expect(addAndAssign(obj3, 10)).toBe(5)
      expect(obj3.value).toBe(5)
    })
  })

  describe('Operator precedence and conversion', () => {
    test('sumStringNumbers() converts and adds string numbers', () => {
      expect(sumStringNumbers('3', '5')).toBe(8)
      expect(sumStringNumbers('10', '20')).toBe(30)
      expect(sumStringNumbers('100', '1')).toBe(101)
      expect(sumStringNumbers('0', '0')).toBe(0)
      expect(sumStringNumbers('-5', '10')).toBe(5)
      expect(sumStringNumbers('1.5', '2.5')).toBe(4)
    })
  })

  describe('Edge cases and special values', () => {
    test('arithmetic operators work with decimals', () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3)
      expect(multiply(0.5, 0.5)).toBe(0.25)
    })

    test('remainder works with various numbers', () => {
      expect(remainder(10, 3)).toBe(1)
      expect(remainder(17, 5)).toBe(2)
      expect(remainder(100, 7)).toBe(2)
    })

    test('power works with various exponents', () => {
      expect(power(3, 3)).toBe(27)
      expect(power(10, 3)).toBe(1000)
      expect(power(2, 0)).toBe(1)
      expect(power(5, 1)).toBe(5)
    })
  })
})

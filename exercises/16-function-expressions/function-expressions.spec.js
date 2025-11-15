import {
  multiply,
  sayHi,
  createGreeting,
  ask,
  calculator,
  processArray
} from './function-expressions.js'

describe('Function Expressions', () => {
  describe('multiply - basic function expression syntax', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(3, 4)).toBe(12)
      expect(multiply(5, 2)).toBe(10)
      expect(multiply(7, 8)).toBe(56)
    })

    test('should handle zero', () => {
      expect(multiply(0, 100)).toBe(0)
      expect(multiply(5, 0)).toBe(0)
    })

    test('should handle negative numbers', () => {
      expect(multiply(-3, 4)).toBe(-12)
      expect(multiply(-5, -2)).toBe(10)
    })
  })

  describe('sayHi - function expression assigned to a variable', () => {
    test('should return greeting with name', () => {
      expect(sayHi('Alice')).toBe('Hi, Alice!')
      expect(sayHi('Bob')).toBe('Hi, Bob!')
    })

    test('should work with different names', () => {
      expect(sayHi('World')).toBe('Hi, World!')
      expect(sayHi('JavaScript')).toBe('Hi, JavaScript!')
    })
  })

  describe('createGreeting - functions returning functions', () => {
    test('should create greeting functions with different greetings', () => {
      const greetInSpanish = createGreeting('Hola')
      const greetInFrench = createGreeting('Bonjour')

      expect(greetInSpanish('Maria')).toBe('Hola, Maria!')
      expect(greetInFrench('Pierre')).toBe('Bonjour, Pierre!')
    })

    test('should create independent greeting functions', () => {
      const sayHello = createGreeting('Hello')
      const sayHey = createGreeting('Hey')

      expect(sayHello('John')).toBe('Hello, John!')
      expect(sayHey('Jane')).toBe('Hey, Jane!')
    })

    test('should demonstrate functions as values', () => {
      const greeting = createGreeting('Welcome')
      expect(typeof greeting).toBe('function')
      expect(greeting('User')).toBe('Welcome, User!')
    })
  })

  describe('ask - callback functions as parameters', () => {
    test('should call yes callback when answer is true', () => {
      function yes () {
        return 'You agreed.'
      }

      function no () {
        return 'You declined.'
      }

      expect(ask('Do you agree?', yes, no, true)).toBe('Question: Do you agree? Answer: You agreed.')
    })

    test('should call no callback when answer is false', () => {
      function yes () {
        return 'You agreed.'
      }

      function no () {
        return 'You declined.'
      }

      expect(ask('Do you agree?', yes, no, false)).toBe('Question: Do you agree? Answer: You declined.')
    })

    test('should work with different questions and callbacks', () => {
      function confirm () {
        return 'Confirmed!'
      }

      function cancel () {
        return 'Cancelled!'
      }

      expect(ask('Continue?', confirm, cancel, true)).toBe('Question: Continue? Answer: Confirmed!')
      expect(ask('Continue?', confirm, cancel, false)).toBe('Question: Continue? Answer: Cancelled!')
    })
  })

  describe('calculator - function returning an object with methods', () => {
    test('should perform addition', () => {
      const calc = calculator()
      expect(calc.add(5, 3)).toBe(8)
      expect(calc.add(10, 20)).toBe(30)
      expect(calc.add(-5, 5)).toBe(0)
    })

    test('should perform subtraction', () => {
      const calc = calculator()
      expect(calc.subtract(10, 4)).toBe(6)
      expect(calc.subtract(20, 5)).toBe(15)
      expect(calc.subtract(5, 10)).toBe(-5)
    })

    test('should perform multiplication', () => {
      const calc = calculator()
      expect(calc.multiply(3, 7)).toBe(21)
      expect(calc.multiply(5, 5)).toBe(25)
      expect(calc.multiply(0, 100)).toBe(0)
    })

    test('should perform division', () => {
      const calc = calculator()
      expect(calc.divide(20, 4)).toBe(5)
      expect(calc.divide(15, 3)).toBe(5)
      expect(calc.divide(10, 2)).toBe(5)
    })

    test('should create independent calculator instances', () => {
      const calc1 = calculator()
      const calc2 = calculator()

      expect(calc1.add(5, 5)).toBe(10)
      expect(calc2.add(3, 3)).toBe(6)
    })
  })

  describe('processArray - anonymous functions as callbacks', () => {
    test('should double array elements', () => {
      const numbers = [1, 2, 3, 4, 5]
      const doubled = processArray(numbers, function (x) { return x * 2 })
      expect(doubled).toEqual([2, 4, 6, 8, 10])
    })

    test('should square array elements', () => {
      const numbers = [1, 2, 3, 4, 5]
      const squared = processArray(numbers, function (x) { return x * x })
      expect(squared).toEqual([1, 4, 9, 16, 25])
    })

    test('should increment array elements', () => {
      const numbers = [10, 20, 30]
      const incremented = processArray(numbers, function (x) { return x + 1 })
      expect(incremented).toEqual([11, 21, 31])
    })

    test('should work with different callback functions', () => {
      const numbers = [5, 10, 15]
      const halved = processArray(numbers, function (x) { return x / 2 })
      expect(halved).toEqual([2.5, 5, 7.5])
    })

    test('should not modify original array', () => {
      const numbers = [1, 2, 3]
      const original = [...numbers]
      processArray(numbers, function (x) { return x * 2 })
      expect(numbers).toEqual(original)
    })
  })
})

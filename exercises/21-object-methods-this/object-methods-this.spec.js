import {
  createPersonWithMethod,
  createUser,
  createCounter,
  createCalculator,
  createLadder,
  createObjectWithArrowFunction,
  demonstrateThisDifference,
  createWorkingGreeting,
  createPersonWithFullName,
  addMethod,
  copyMethod,
  createBankAccount
} from './object-methods-this.js'

describe('Object Methods and "this"', () => {
  describe('createPersonWithMethod', () => {
    test('should create object with greet method', () => {
      const person = createPersonWithMethod('Alice')
      expect(person.name).toBe('Alice')
      expect(typeof person.greet).toBe('function')
    })

    test('greet method should use this.name', () => {
      const person = createPersonWithMethod('Bob')
      expect(person.greet()).toBe('Hello, my name is Bob')
    })
  })

  describe('createUser', () => {
    test('should return user object with getName method', () => {
      const user = createUser('John')
      expect(user.getName()).toBe('John')
    })

    test('should work with different names', () => {
      const user = createUser('Jane')
      expect(user.getName()).toBe('Jane')
    })
  })

  describe('createCounter', () => {
    test('should start at 0', () => {
      const counter = createCounter()
      expect(counter.count).toBe(0)
    })

    test('increment should increase count', () => {
      const counter = createCounter()
      counter.increment()
      expect(counter.count).toBe(1)
      counter.increment()
      expect(counter.count).toBe(2)
    })
  })

  describe('createCalculator', () => {
    test('should have sum method', () => {
      const calc = createCalculator(5, 3)
      expect(calc.sum()).toBe(8)
    })

    test('should have multiply method', () => {
      const calc = createCalculator(4, 7)
      expect(calc.multiply()).toBe(28)
    })

    test('should work with different values', () => {
      const calc = createCalculator(10, 2)
      expect(calc.sum()).toBe(12)
      expect(calc.multiply()).toBe(20)
    })
  })

  describe('createLadder', () => {
    test('should start at step 0', () => {
      const ladder = createLadder()
      expect(ladder.step).toBe(0)
    })

    test('up should increase step', () => {
      const ladder = createLadder()
      ladder.up()
      expect(ladder.step).toBe(1)
    })

    test('down should decrease step', () => {
      const ladder = createLadder()
      ladder.up()
      ladder.down()
      expect(ladder.step).toBe(0)
    })

    test('should support method chaining', () => {
      const ladder = createLadder()
      ladder.up().up().up().down()
      expect(ladder.step).toBe(2)
    })

    test('showStep should return current step', () => {
      const ladder = createLadder()
      ladder.up().up()
      expect(ladder.showStep()).toBe(2)
    })
  })

  describe('createObjectWithArrowFunction', () => {
    test('should return object with getNameDelayed method', () => {
      const obj = createObjectWithArrowFunction('Alice')
      expect(typeof obj.getNameDelayed).toBe('function')
    })

    test('arrow function should access this.name', () => {
      const obj = createObjectWithArrowFunction('Bob')
      const fn = obj.getNameDelayed()
      expect(fn()).toBe('Bob')
    })
  })

  describe('demonstrateThisDifference', () => {
    test('regular method should work with this', () => {
      const obj = demonstrateThisDifference('Alice')
      expect(obj.regularMethod()).toBe('Alice')
    })

    test('arrow method in object literal cannot access object via this', () => {
      const obj = demonstrateThisDifference('Bob')
      // Arrow function doesn't have access to object's 'this'
      expect(obj.arrowMethod()).toBeUndefined()
    })
  })

  describe('createWorkingGreeting', () => {
    test('should have working greet method', () => {
      const obj = createWorkingGreeting('Alice')
      expect(obj.greet()).toContain('Alice')
    })

    test('should use this.name', () => {
      const obj = createWorkingGreeting('Bob')
      const greeting = obj.greet()
      expect(typeof greeting).toBe('string')
      expect(greeting.includes('Bob')).toBe(true)
    })
  })

  describe('createPersonWithFullName', () => {
    test('should have getFirstName method', () => {
      const person = createPersonWithFullName('John', 'Doe')
      expect(person.getFirstName()).toBe('John')
    })

    test('should have getLastName method', () => {
      const person = createPersonWithFullName('Jane', 'Smith')
      expect(person.getLastName()).toBe('Smith')
    })

    test('getFullName should combine first and last name', () => {
      const person = createPersonWithFullName('Alice', 'Johnson')
      expect(person.getFullName()).toBe('Alice Johnson')
    })
  })

  describe('addMethod', () => {
    test('should add sayHi method to user', () => {
      const user = { name: 'Alice' }
      addMethod(user)
      expect(typeof user.sayHi).toBe('function')
    })

    test('sayHi should return greeting with name', () => {
      const user = { name: 'Bob' }
      addMethod(user)
      expect(user.sayHi()).toBe("Hi, I'm Bob")
    })

    test('should return the user object', () => {
      const user = { name: 'Charlie' }
      const result = addMethod(user)
      expect(result).toBe(user)
    })
  })

  describe('copyMethod', () => {
    test('should copy method from source to target', () => {
      const source = {
        greet () {
          return `Hello, ${this.name}`
        }
      }
      const target = { name: 'Alice' }

      copyMethod(source, target, 'greet')

      expect(typeof target.greet).toBe('function')
      expect(target.greet()).toBe('Hello, Alice')
    })

    test('copied method should use target object\'s this', () => {
      const source = {
        getValue () {
          return this.value * 2
        }
      }
      const target = { value: 10 }

      copyMethod(source, target, 'getValue')
      expect(target.getValue()).toBe(20)
    })
  })

  describe('createBankAccount', () => {
    test('should start with initial balance', () => {
      const account = createBankAccount(100)
      expect(account.getBalance()).toBe(100)
    })

    test('deposit should add to balance', () => {
      const account = createBankAccount(100)
      account.deposit(50)
      expect(account.getBalance()).toBe(150)
    })

    test('withdraw should subtract from balance', () => {
      const account = createBankAccount(100)
      account.withdraw(30)
      expect(account.getBalance()).toBe(70)
    })

    test('multiple operations should work correctly', () => {
      const account = createBankAccount(1000)
      account.deposit(500)
      account.withdraw(200)
      account.deposit(100)
      expect(account.getBalance()).toBe(1400)
    })
  })
})

import {
  User,
  createUser,
  Product,
  Animal,
  Rectangle,
  Circle,
  Password,
  SpecialConstructor,
  PrimitiveReturn,
  createMultipleUsers,
  createProductWithoutParens,
  TodoList,
  SafeUser,
  createSingleComplexUser,
  Counter
} from './constructor-new.js'

describe('Constructor Functions and "new"', () => {
  describe('User constructor', () => {
    test('should create user with name and age', () => {
      const user = new User('Alice', 30)
      expect(user.name).toBe('Alice')
      expect(user.age).toBe(30)
    })

    test('should work with different values', () => {
      const user = new User('Bob', 25)
      expect(user.name).toBe('Bob')
      expect(user.age).toBe(25)
    })
  })

  describe('createUser', () => {
    test('should create User using new', () => {
      const user = createUser('Charlie', 35)
      expect(user.name).toBe('Charlie')
      expect(user.age).toBe(35)
    })

    test('should return User instance', () => {
      const user = createUser('Dave', 40)
      expect(user instanceof User).toBe(true)
    })
  })

  describe('Product constructor', () => {
    test('should create product with name and price', () => {
      const product = new Product('Laptop', 1000)
      expect(product.name).toBe('Laptop')
      expect(product.price).toBe(1000)
    })

    test('should have getInfo method', () => {
      const product = new Product('Phone', 500)
      expect(product.getInfo()).toBe('Product: Phone costs $500')
    })
  })

  describe('Animal constructor', () => {
    test('should create animal with name and species', () => {
      const animal = new Animal('Max', 'Dog')
      expect(animal.name).toBe('Max')
      expect(animal.species).toBe('Dog')
    })

    test('should use default species if not provided', () => {
      const animal = new Animal('Mystery')
      expect(animal.name).toBe('Mystery')
      expect(animal.species).toBe('Unknown')
    })
  })

  describe('Rectangle constructor', () => {
    test('should set width and height', () => {
      const rect = new Rectangle(10, 5)
      expect(rect.width).toBe(10)
      expect(rect.height).toBe(5)
    })

    test('should compute area', () => {
      const rect = new Rectangle(8, 4)
      expect(rect.area).toBe(32)
    })
  })

  describe('Circle constructor', () => {
    test('should set radius', () => {
      const circle = new Circle(5)
      expect(circle.radius).toBe(5)
    })

    test('should have getArea method', () => {
      const circle = new Circle(10)
      const area = circle.getArea()
      expect(area).toBeCloseTo(314.159, 2)
    })

    test('getArea should use Math.PI', () => {
      const circle = new Circle(1)
      expect(circle.getArea()).toBe(Math.PI)
    })
  })

  describe('Password constructor', () => {
    test('should set password', () => {
      const pwd = new Password('secret123')
      expect(pwd.password).toBe('secret123')
    })

    test('should set isValid to true for long password', () => {
      const pwd = new Password('longpassword')
      expect(pwd.isValid).toBe(true)
    })

    test('should set isValid to false for short password', () => {
      const pwd = new Password('short')
      expect(pwd.isValid).toBe(false)
    })

    test('should accept exactly 8 characters', () => {
      const pwd = new Password('exactly8')
      expect(pwd.isValid).toBe(true)
    })
  })

  describe('SpecialConstructor', () => {
    test('should return custom object instead of this', () => {
      const obj = new SpecialConstructor()
      expect(obj.name).toBe('returned')
    })

    test('should not have the original this properties', () => {
      const obj = new SpecialConstructor()
      expect(obj.name).not.toBe('created')
    })
  })

  describe('PrimitiveReturn', () => {
    test('should ignore primitive return and return this', () => {
      const obj = new PrimitiveReturn(42)
      expect(obj.value).toBe(42)
    })

    test('should be an object, not a primitive', () => {
      const obj = new PrimitiveReturn(100)
      expect(typeof obj).toBe('object')
    })
  })

  describe('createMultipleUsers', () => {
    test('should create array of 3 users', () => {
      const users = createMultipleUsers(25)
      expect(users.length).toBe(3)
    })

    test('all users should have same age', () => {
      const users = createMultipleUsers(30)
      expect(users[0].age).toBe(30)
      expect(users[1].age).toBe(30)
      expect(users[2].age).toBe(30)
    })

    test('all users should be User instances', () => {
      const users = createMultipleUsers(20)
      expect(users[0] instanceof User).toBe(true)
      expect(users[1] instanceof User).toBe(true)
      expect(users[2] instanceof User).toBe(true)
    })
  })

  describe('createProductWithoutParens', () => {
    test('should create product without parentheses', () => {
      const product = createProductWithoutParens()
      expect(product.name).toBe('Default Product')
      expect(product.price).toBe(0)
    })
  })

  describe('TodoList constructor', () => {
    test('should initialize with empty tasks array', () => {
      const list = new TodoList()
      expect(list.tasks).toEqual([])
    })

    test('should have addTask method', () => {
      const list = new TodoList()
      expect(typeof list.addTask).toBe('function')
    })

    test('addTask should add tasks', () => {
      const list = new TodoList()
      list.addTask('Task 1')
      list.addTask('Task 2')
      expect(list.tasks).toEqual(['Task 1', 'Task 2'])
    })

    test('should have getCount method', () => {
      const list = new TodoList()
      list.addTask('Task 1')
      list.addTask('Task 2')
      expect(list.getCount()).toBe(2)
    })
  })

  describe('SafeUser constructor', () => {
    test('should work with new', () => {
      const user = new SafeUser('Alice')
      expect(user.name).toBe('Alice')
    })

    test('should throw error when called without new', () => {
      expect(() => {
        SafeUser('Bob')
      }).toThrow('Must use new with SafeUser')
    })
  })

  describe('createSingleComplexUser', () => {
    test('should create user with name', () => {
      const user = createSingleComplexUser('Alice')
      expect(user.name).toBe('Alice')
    })

    test('should have createdAt property', () => {
      const user = createSingleComplexUser('Bob')
      expect(user.createdAt).toBeInstanceOf(Date)
    })
  })

  describe('Counter constructor', () => {
    test('should have increment method', () => {
      const counter = new Counter()
      expect(typeof counter.increment).toBe('function')
    })

    test('should have getCount method', () => {
      const counter = new Counter()
      expect(typeof counter.getCount).toBe('function')
    })

    test('should start at 0', () => {
      const counter = new Counter()
      expect(counter.getCount()).toBe(0)
    })

    test('increment should increase count', () => {
      const counter = new Counter()
      counter.increment()
      counter.increment()
      expect(counter.getCount()).toBe(2)
    })

    test('count should not be accessible as a property', () => {
      const counter = new Counter()
      expect(counter.count).toBeUndefined()
    })
  })
})

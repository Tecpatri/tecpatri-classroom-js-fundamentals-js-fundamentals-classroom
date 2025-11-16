import {
  createUser,
  getTitle,
  getProperty,
  addEmail,
  updatePrice,
  removePassword,
  hasProperty,
  createDynamicObject,
  createPersonShorthand,
  propertyExists,
  getKeys,
  sumValues,
  createCounter,
  createObjectWithMultiwordProperty,
  getMultiwordProperty
} from './objects.js'

describe('Objects', () => {
  describe('createUser', () => {
    test('should create an object with name, age, and city', () => {
      const user = createUser('Alice', 30, 'NYC')
      expect(user.name).toBe('Alice')
      expect(user.age).toBe(30)
      expect(user.city).toBe('NYC')
    })

    test('should work with different values', () => {
      const user = createUser('Bob', 25, 'LA')
      expect(user.name).toBe('Bob')
      expect(user.age).toBe(25)
      expect(user.city).toBe('LA')
    })
  })

  describe('getTitle', () => {
    test('should return the title property', () => {
      const book = { title: '1984', author: 'Orwell' }
      expect(getTitle(book)).toBe('1984')
    })

    test('should work with different books', () => {
      const book = { title: 'To Kill a Mockingbird', author: 'Lee' }
      expect(getTitle(book)).toBe('To Kill a Mockingbird')
    })
  })

  describe('getProperty', () => {
    test('should return property value using bracket notation', () => {
      const obj = { name: 'Alice', age: 30 }
      expect(getProperty(obj, 'name')).toBe('Alice')
      expect(getProperty(obj, 'age')).toBe(30)
    })

    test('should work with any property name', () => {
      const obj = { color: 'blue', size: 'large' }
      expect(getProperty(obj, 'color')).toBe('blue')
    })
  })

  describe('addEmail', () => {
    test('should add email property to user', () => {
      const user = { name: 'Alice', age: 30 }
      const result = addEmail(user, 'alice@example.com')
      expect(result.email).toBe('alice@example.com')
    })

    test('should return the same object', () => {
      const user = { name: 'Bob' }
      const result = addEmail(user, 'bob@example.com')
      expect(result).toBe(user)
    })
  })

  describe('updatePrice', () => {
    test('should update the price property', () => {
      const product = { name: 'Laptop', price: 1000 }
      updatePrice(product, 900)
      expect(product.price).toBe(900)
    })

    test('should return the modified object', () => {
      const product = { name: 'Phone', price: 500 }
      const result = updatePrice(product, 450)
      expect(result).toBe(product)
      expect(result.price).toBe(450)
    })
  })

  describe('removePassword', () => {
    test('should delete the password property', () => {
      const user = { name: 'Alice', password: 'secret123' }
      removePassword(user)
      expect(user.password).toBeUndefined()
      expect('password' in user).toBe(false)
    })

    test('should return the user object', () => {
      const user = { name: 'Bob', password: 'pass' }
      const result = removePassword(user)
      expect(result).toBe(user)
    })
  })

  describe('hasProperty', () => {
    test('should return true if property exists', () => {
      const obj = { name: 'Alice', age: 30 }
      expect(hasProperty(obj, 'name')).toBe(true)
      expect(hasProperty(obj, 'age')).toBe(true)
    })

    test('should return false if property does not exist', () => {
      const obj = { name: 'Alice' }
      expect(hasProperty(obj, 'age')).toBe(false)
      expect(hasProperty(obj, 'email')).toBe(false)
    })

    test('should return true even if value is undefined', () => {
      const obj = { name: undefined }
      expect(hasProperty(obj, 'name')).toBe(true)
    })
  })

  describe('createDynamicObject', () => {
    test('should create object with computed property name', () => {
      const obj = createDynamicObject('color', 'blue')
      expect(obj.color).toBe('blue')
    })

    test('should work with different keys', () => {
      const obj = createDynamicObject('fruit', 'apple')
      expect(obj.fruit).toBe('apple')
    })

    test('should work with number values', () => {
      const obj = createDynamicObject('price', 100)
      expect(obj.price).toBe(100)
    })
  })

  describe('createPersonShorthand', () => {
    test('should create object using property shorthand', () => {
      const person = createPersonShorthand('Alice', 30, 'NYC')
      expect(person.name).toBe('Alice')
      expect(person.age).toBe(30)
      expect(person.city).toBe('NYC')
    })

    test('should work with different values', () => {
      const person = createPersonShorthand('Bob', 25, 'LA')
      expect(person).toEqual({ name: 'Bob', age: 25, city: 'LA' })
    })
  })

  describe('propertyExists', () => {
    test('should return true for existing properties', () => {
      const obj = { a: 1, b: 2 }
      expect(propertyExists(obj, 'a')).toBe(true)
    })

    test('should return false for non-existing properties', () => {
      const obj = { a: 1 }
      expect(propertyExists(obj, 'b')).toBe(false)
    })

    test('should return true even when value is undefined', () => {
      const obj = { test: undefined }
      expect(propertyExists(obj, 'test')).toBe(true)
    })
  })

  describe('getKeys', () => {
    test('should return array of property names', () => {
      const obj = { name: 'Alice', age: 30, city: 'NYC' }
      const keys = getKeys(obj)
      expect(keys).toContain('name')
      expect(keys).toContain('age')
      expect(keys).toContain('city')
      expect(keys.length).toBe(3)
    })

    test('should return empty array for empty object', () => {
      const obj = {}
      expect(getKeys(obj)).toEqual([])
    })

    test('should work with numeric properties', () => {
      const obj = { a: 1, b: 2 }
      const keys = getKeys(obj)
      expect(keys).toContain('a')
      expect(keys).toContain('b')
    })
  })

  describe('sumValues', () => {
    test('should sum all numeric values', () => {
      const obj = { a: 10, b: 20, c: 30 }
      expect(sumValues(obj)).toBe(60)
    })

    test('should return 0 for empty object', () => {
      expect(sumValues({})).toBe(0)
    })

    test('should work with different values', () => {
      const obj = { x: 5, y: 15, z: 80 }
      expect(sumValues(obj)).toBe(100)
    })
  })

  describe('createCounter', () => {
    test('should create object with count property', () => {
      const counter = createCounter()
      expect(counter.count).toBe(0)
    })

    test('should have an increment method', () => {
      const counter = createCounter()
      expect(typeof counter.increment).toBe('function')
    })

    test('increment method should increase count', () => {
      const counter = createCounter()
      counter.increment()
      expect(counter.count).toBe(1)
      counter.increment()
      expect(counter.count).toBe(2)
    })
  })

  describe('createObjectWithMultiwordProperty', () => {
    test('should create object with multiword property', () => {
      const obj = createObjectWithMultiwordProperty()
      expect(obj['likes birds']).toBe(true)
    })

    test('should be accessible with bracket notation', () => {
      const obj = createObjectWithMultiwordProperty()
      expect('likes birds' in obj).toBe(true)
    })
  })

  describe('getMultiwordProperty', () => {
    test('should access multiword property', () => {
      const obj = { 'likes birds': true, 'can swim': false }
      expect(getMultiwordProperty(obj, 'likes birds')).toBe(true)
      expect(getMultiwordProperty(obj, 'can swim')).toBe(false)
    })

    test('should work with different property names', () => {
      const obj = { 'first name': 'John', 'last name': 'Doe' }
      expect(getMultiwordProperty(obj, 'first name')).toBe('John')
    })
  })
})

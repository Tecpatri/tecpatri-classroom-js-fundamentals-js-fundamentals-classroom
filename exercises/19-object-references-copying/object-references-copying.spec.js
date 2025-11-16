import {
  demonstrateReference,
  comparePrimitives,
  compareObjectReferences,
  notACopy,
  shallowCopy,
  shallowCopyWithSpread,
  demonstrateShallowCopyProblem,
  deepCopy,
  mergeObjects,
  mergeMultiple,
  cloneAndModify,
  testIndependence,
  modifyConstObject,
  copyArrayOfObjects,
  deepCopyArray
} from './object-references-copying.js'

describe('Object References and Copying', () => {
  describe('demonstrateReference', () => {
    test('should create a reference to the same object', () => {
      const user = { name: 'John', age: 30 }
      const admin = demonstrateReference(user)
      expect(admin).toBe(user)
      expect(admin.role).toBe('administrator')
      expect(user.role).toBe('administrator')
    })
  })

  describe('comparePrimitives', () => {
    test('should return true for equal primitives', () => {
      expect(comparePrimitives(5, 5)).toBe(true)
      expect(comparePrimitives('hello', 'hello')).toBe(true)
    })

    test('should return false for different primitives', () => {
      expect(comparePrimitives(5, 10)).toBe(false)
      expect(comparePrimitives('hello', 'world')).toBe(false)
    })
  })

  describe('compareObjectReferences', () => {
    test('should return true for same object reference', () => {
      const obj = { a: 1 }
      const ref = obj
      expect(compareObjectReferences(obj, ref)).toBe(true)
    })

    test('should return false for different objects with same content', () => {
      const obj1 = { a: 1 }
      const obj2 = { a: 1 }
      expect(compareObjectReferences(obj1, obj2)).toBe(false)
    })
  })

  describe('notACopy', () => {
    test('should return reference to original', () => {
      const original = { a: 1 }
      const result = notACopy(original)
      expect(result).toBe(original)
    })
  })

  describe('shallowCopy', () => {
    test('should create a new object with same properties', () => {
      const original = { name: 'John', age: 30 }
      const copy = shallowCopy(original)
      expect(copy).toEqual(original)
      expect(copy).not.toBe(original)
    })

    test('modifications to copy should not affect original', () => {
      const original = { name: 'John', age: 30 }
      const copy = shallowCopy(original)
      copy.name = 'Jane'
      expect(original.name).toBe('John')
      expect(copy.name).toBe('Jane')
    })
  })

  describe('shallowCopyWithSpread', () => {
    test('should create a new object using spread', () => {
      const original = { x: 1, y: 2 }
      const copy = shallowCopyWithSpread(original)
      expect(copy).toEqual(original)
      expect(copy).not.toBe(original)
    })

    test('should not affect original when copy is modified', () => {
      const original = { x: 1, y: 2 }
      const copy = shallowCopyWithSpread(original)
      copy.x = 100
      expect(original.x).toBe(1)
    })
  })

  describe('demonstrateShallowCopyProblem', () => {
    test('should show that nested objects are still referenced', () => {
      const user = {
        name: 'John',
        address: { city: 'NYC', country: 'USA' }
      }
      const copy = demonstrateShallowCopyProblem(user)

      expect(copy).not.toBe(user)
      expect(user.address.city).toBe('Boston')
      expect(copy.address.city).toBe('Boston')
      expect(copy.address).toBe(user.address)
    })
  })

  describe('deepCopy', () => {
    test('should create completely independent copy', () => {
      const original = {
        name: 'John',
        address: { city: 'NYC', country: 'USA' }
      }
      const copy = deepCopy(original)

      expect(copy).toEqual(original)
      expect(copy).not.toBe(original)
      expect(copy.address).not.toBe(original.address)
    })

    test('modifying nested objects should not affect original', () => {
      const original = {
        name: 'John',
        address: { city: 'NYC' }
      }
      const copy = deepCopy(original)
      copy.address.city = 'LA'

      expect(original.address.city).toBe('NYC')
      expect(copy.address.city).toBe('LA')
    })
  })

  describe('mergeObjects', () => {
    test('should merge source into target', () => {
      const target = { a: 1, b: 2 }
      const source = { b: 3, c: 4 }
      const result = mergeObjects(target, source)

      expect(result).toBe(target)
      expect(result).toEqual({ a: 1, b: 3, c: 4 })
    })

    test('source values should override target values', () => {
      const target = { name: 'John', age: 30 }
      const source = { age: 31, city: 'NYC' }
      mergeObjects(target, source)

      expect(target.age).toBe(31)
      expect(target.city).toBe('NYC')
    })
  })

  describe('mergeMultiple', () => {
    test('should merge three objects into new object', () => {
      const obj1 = { a: 1 }
      const obj2 = { b: 2 }
      const obj3 = { c: 3 }
      const result = mergeMultiple(obj1, obj2, obj3)

      expect(result).toEqual({ a: 1, b: 2, c: 3 })
      expect(result).not.toBe(obj1)
    })

    test('later objects should override earlier ones', () => {
      const obj1 = { a: 1, b: 1 }
      const obj2 = { b: 2, c: 2 }
      const obj3 = { c: 3, d: 3 }
      const result = mergeMultiple(obj1, obj2, obj3)

      expect(result).toEqual({ a: 1, b: 2, c: 3, d: 3 })
    })

    test('should not modify original objects', () => {
      const obj1 = { a: 1 }
      const obj2 = { b: 2 }
      const obj3 = { c: 3 }
      mergeMultiple(obj1, obj2, obj3)

      expect(obj1).toEqual({ a: 1 })
      expect(obj2).toEqual({ b: 2 })
    })
  })

  describe('cloneAndModify', () => {
    test('should create copy with new property', () => {
      const user = { name: 'John', age: 30 }
      const result = cloneAndModify(user)

      expect(result.status).toBe('active')
      expect(result.name).toBe('John')
      expect(result.age).toBe(30)
    })

    test('should not modify original', () => {
      const user = { name: 'John', age: 30 }
      cloneAndModify(user)

      expect(user.status).toBeUndefined()
    })
  })

  describe('testIndependence', () => {
    test('should return true as original is not affected', () => {
      const obj = { a: 1, b: 2 }
      const result = testIndependence(obj)

      expect(result).toBe(true)
      expect(obj.test).toBeUndefined()
    })
  })

  describe('modifyConstObject', () => {
    test('should modify const object properties', () => {
      const obj = { name: 'John' }
      const result = modifyConstObject(obj)

      expect(result.modified).toBe(true)
      expect(result).toBe(obj)
    })
  })

  describe('copyArrayOfObjects', () => {
    test('should create new array', () => {
      const users = [{ name: 'John' }, { name: 'Jane' }]
      const copy = copyArrayOfObjects(users)

      expect(copy).not.toBe(users)
      expect(copy).toEqual(users)
    })

    test('objects inside should still be references', () => {
      const users = [{ name: 'John' }, { name: 'Jane' }]
      const copy = copyArrayOfObjects(users)

      expect(copy[0]).toBe(users[0])
      expect(copy[1]).toBe(users[1])
    })

    test('modifying object in copy affects original', () => {
      const users = [{ name: 'John' }]
      const copy = copyArrayOfObjects(users)
      copy[0].name = 'Jane'

      expect(users[0].name).toBe('Jane')
    })
  })

  describe('deepCopyArray', () => {
    test('should create independent copy of array', () => {
      const arr = [{ a: 1 }, { b: 2 }]
      const copy = deepCopyArray(arr)

      expect(copy).toEqual(arr)
      expect(copy).not.toBe(arr)
      expect(copy[0]).not.toBe(arr[0])
    })

    test('modifying copy should not affect original', () => {
      const arr = [{ name: 'John' }]
      const copy = deepCopyArray(arr)
      copy[0].name = 'Jane'

      expect(arr[0].name).toBe('John')
      expect(copy[0].name).toBe('Jane')
    })
  })
})

import {
  makeUnreachable,
  countReferences,
  breakChain,
  findReachable,
  clearAllReferences,
  createCircularReference,
  createIslandAndDetach,
  singleReferenceKeepsAlive,
  createReferenceChain,
  wouldBeCollected,
  detachParent,
  multiplePathsToObject,
  cleanup
} from './garbage-collection.js'

describe('Garbage Collection', () => {
  describe('makeUnreachable', () => {
    test('should return null', () => {
      const user = { name: 'John' }
      const result = makeUnreachable(user)
      expect(result).toBeNull()
    })
  })

  describe('countReferences', () => {
    test('should count references to same object', () => {
      const obj = { a: 1 }
      const ref1 = obj
      const ref2 = obj
      const ref3 = { a: 1 }
      const variables = [ref1, ref2, ref3, null]

      expect(countReferences(obj, variables)).toBe(2)
    })

    test('should return 0 for no references', () => {
      const obj = { a: 1 }
      const variables = [{ a: 1 }, { b: 2 }, null]
      expect(countReferences(obj, variables)).toBe(0)
    })

    test('should handle empty array', () => {
      const obj = { a: 1 }
      expect(countReferences(obj, [])).toBe(0)
    })
  })

  describe('breakChain', () => {
    test('should set next property to null', () => {
      const obj2 = { value: 2 }
      const obj1 = { value: 1, next: obj2 }

      breakChain(obj1)
      expect(obj1.next).toBeNull()
    })

    test('should return the object', () => {
      const obj = { next: {} }
      const result = breakChain(obj)
      expect(result).toBe(obj)
    })
  })

  describe('findReachable', () => {
    test('should return names of non-null properties', () => {
      const root = {
        user: { name: 'John' },
        admin: { name: 'Jane' },
        guest: null
      }
      const reachable = findReachable(root)

      expect(reachable).toContain('user')
      expect(reachable).toContain('admin')
      expect(reachable).not.toContain('guest')
      expect(reachable.length).toBe(2)
    })

    test('should return empty array when all are null', () => {
      const root = { a: null, b: null }
      expect(findReachable(root)).toEqual([])
    })
  })

  describe('clearAllReferences', () => {
    test('should set all properties to null', () => {
      const obj = {
        prop1: { a: 1 },
        prop2: { b: 2 },
        prop3: { c: 3 }
      }

      clearAllReferences(obj)

      expect(obj.prop1).toBeNull()
      expect(obj.prop2).toBeNull()
      expect(obj.prop3).toBeNull()
    })

    test('should return the object', () => {
      const obj = { a: {}, b: {} }
      const result = clearAllReferences(obj)
      expect(result).toBe(obj)
    })
  })

  describe('createCircularReference', () => {
    test('should create objects with circular references', () => {
      const { obj1, obj2 } = createCircularReference()

      expect(obj1.next).toBe(obj2)
      expect(obj2.prev).toBe(obj1)
    })

    test('objects should reference each other', () => {
      const { obj1, obj2 } = createCircularReference()

      expect(obj1.next.prev).toBe(obj1)
      expect(obj2.prev.next).toBe(obj2)
    })
  })

  describe('createIslandAndDetach', () => {
    test('should return null to indicate detachment', () => {
      const obj = { value: 1 }
      const result = createIslandAndDetach(obj)
      expect(result).toBeNull()
    })
  })

  describe('singleReferenceKeepsAlive', () => {
    test('should return the remaining reference', () => {
      const obj = { name: 'John' }
      const ref1 = obj
      const ref2 = obj

      const result = singleReferenceKeepsAlive(obj, ref1, ref2)
      expect(result).toBe(obj)
      expect(result).toBe(ref2)
    })
  })

  describe('createReferenceChain', () => {
    test('should create chain of three objects', () => {
      const obj1 = createReferenceChain()

      expect(obj1.value).toBe(1)
      expect(obj1.next.value).toBe(2)
      expect(obj1.next.next.value).toBe(3)
    })

    test('chain should be accessible from root', () => {
      const obj1 = createReferenceChain()

      expect(obj1.next).toBeTruthy()
      expect(obj1.next.next).toBeTruthy()
    })
  })

  describe('wouldBeCollected', () => {
    test('should return true when no references exist', () => {
      const obj = { a: 1 }
      expect(wouldBeCollected(obj, 0)).toBe(true)
    })

    test('should return true when references would be nulled', () => {
      const obj = { a: 1 }
      expect(wouldBeCollected(obj, 2)).toBe(true)
    })
  })

  describe('detachParent', () => {
    test('should return null', () => {
      const parent = { child: { value: 1 } }
      const result = detachParent(parent)
      expect(result).toBeNull()
    })
  })

  describe('multiplePathsToObject', () => {
    test('should return true when object is reachable through path1', () => {
      const obj = { name: 'John' }
      const path1 = obj
      const path2 = null

      expect(multiplePathsToObject(obj, path1, path2)).toBe(true)
    })

    test('should return true when object is reachable through path2', () => {
      const obj = { name: 'John' }
      const path1 = null
      const path2 = obj

      expect(multiplePathsToObject(obj, path1, path2)).toBe(true)
    })

    test('should return true when reachable through both paths', () => {
      const obj = { name: 'John' }
      const path1 = obj
      const path2 = obj

      expect(multiplePathsToObject(obj, path1, path2)).toBe(true)
    })

    test('should return false when not reachable through any path', () => {
      const obj = { name: 'John' }
      const path1 = null
      const path2 = null

      expect(multiplePathsToObject(obj, path1, path2)).toBe(false)
    })
  })

  describe('cleanup', () => {
    test('should set data property to null', () => {
      const obj = {
        data: { large: 'dataset' },
        listeners: [() => {}, () => {}]
      }

      cleanup(obj)
      expect(obj.data).toBeNull()
    })

    test('should clear listeners array', () => {
      const obj = {
        data: {},
        listeners: [() => {}, () => {}, () => {}]
      }

      cleanup(obj)
      expect(obj.listeners).toEqual([])
    })

    test('should return the cleaned object', () => {
      const obj = { data: {}, listeners: [] }
      const result = cleanup(obj)
      expect(result).toBe(obj)
    })
  })
})

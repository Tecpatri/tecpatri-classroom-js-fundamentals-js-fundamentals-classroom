import {
  getObjectKeys,
  getObjectValues,
  getObjectEntries,
  countProperties,
  sumObjectValues,
  hasKey,
  objectToMap,
  mapToObject,
  doubleValues,
  filterByValue,
  swapKeysAndValues,
  mergeObjects,
  getKeysByType,
  createObjectFromArrays
} from './object-keys-values-entries.js'

describe('Object.keys, values, entries', () => {
  describe('getObjectKeys', () => {
    test('returns array of object keys', () => {
      expect(getObjectKeys({ a: 1, b: 2, c: 3 })).toEqual(['a', 'b', 'c'])
    })

    test('works with empty object', () => {
      expect(getObjectKeys({})).toEqual([])
    })
  })

  describe('getObjectValues', () => {
    test('returns array of object values', () => {
      expect(getObjectValues({ a: 1, b: 2, c: 3 })).toEqual([1, 2, 3])
    })

    test('works with different value types', () => {
      const values = getObjectValues({ name: 'Alice', age: 25, active: true })
      expect(values).toContain('Alice')
      expect(values).toContain(25)
      expect(values).toContain(true)
    })
  })

  describe('getObjectEntries', () => {
    test('returns array of [key, value] pairs', () => {
      expect(getObjectEntries({ a: 1, b: 2 })).toEqual([['a', 1], ['b', 2]])
    })

    test('works with empty object', () => {
      expect(getObjectEntries({})).toEqual([])
    })
  })

  describe('countProperties', () => {
    test('counts properties in object', () => {
      expect(countProperties({ a: 1, b: 2, c: 3 })).toBe(3)
    })

    test('returns 0 for empty object', () => {
      expect(countProperties({})).toBe(0)
    })
  })

  describe('sumObjectValues', () => {
    test('sums all numeric values', () => {
      expect(sumObjectValues({ a: 10, b: 20, c: 30 })).toBe(60)
    })

    test('works with single value', () => {
      expect(sumObjectValues({ x: 5 })).toBe(5)
    })

    test('returns 0 for empty object', () => {
      expect(sumObjectValues({})).toBe(0)
    })
  })

  describe('hasKey', () => {
    test('returns true when key exists', () => {
      expect(hasKey({ a: 1, b: 2 }, 'a')).toBe(true)
    })

    test('returns false when key does not exist', () => {
      expect(hasKey({ a: 1, b: 2 }, 'c')).toBe(false)
    })
  })

  describe('objectToMap', () => {
    test('converts object to Map', () => {
      const map = objectToMap({ a: 1, b: 2 })
      expect(map instanceof Map).toBe(true)
      expect(map.get('a')).toBe(1)
      expect(map.get('b')).toBe(2)
    })
  })

  describe('mapToObject', () => {
    test('converts Map to object', () => {
      const map = new Map([['a', 1], ['b', 2]])
      expect(mapToObject(map)).toEqual({ a: 1, b: 2 })
    })
  })

  describe('doubleValues', () => {
    test('doubles all numeric values', () => {
      expect(doubleValues({ a: 1, b: 2, c: 3 })).toEqual({ a: 2, b: 4, c: 6 })
    })

    test('does not modify original object', () => {
      const original = { a: 1, b: 2 }
      const doubled = doubleValues(original)
      expect(original).toEqual({ a: 1, b: 2 })
      expect(doubled).not.toBe(original)
    })
  })

  describe('filterByValue', () => {
    test('filters object by value predicate', () => {
      const obj = { a: 10, b: 20, c: 5, d: 30 }
      expect(filterByValue(obj, val => val > 10)).toEqual({ b: 20, d: 30 })
    })

    test('returns empty object when no values match', () => {
      expect(filterByValue({ a: 1, b: 2 }, val => val > 10)).toEqual({})
    })

    test('works with different predicates', () => {
      const obj = { a: 'hello', b: 'world', c: 'hi' }
      const result = filterByValue(obj, val => val.length > 3)
      expect(result).toEqual({ a: 'hello', b: 'world' })
    })
  })

  describe('swapKeysAndValues', () => {
    test('swaps keys and values', () => {
      expect(swapKeysAndValues({ a: '1', b: '2' })).toEqual({ '1': 'a', '2': 'b' })
    })

    test('works with number values', () => {
      const result = swapKeysAndValues({ x: 10, y: 20 })
      expect(result[10]).toBe('x')
      expect(result[20]).toBe('y')
    })
  })

  describe('mergeObjects', () => {
    test('merges two objects', () => {
      const obj1 = { a: 1, b: 2 }
      const obj2 = { c: 3, d: 4 }
      expect(mergeObjects(obj1, obj2)).toEqual({ a: 1, b: 2, c: 3, d: 4 })
    })

    test('second object wins for duplicate keys', () => {
      const obj1 = { a: 1, b: 2 }
      const obj2 = { b: 10, c: 3 }
      expect(mergeObjects(obj1, obj2)).toEqual({ a: 1, b: 10, c: 3 })
    })
  })

  describe('getKeysByType', () => {
    test('filters keys by value type', () => {
      const obj = { a: 1, b: 'hello', c: 2, d: true, e: 3 }
      expect(getKeysByType(obj, 'number')).toEqual(['a', 'c', 'e'])
    })

    test('works with string type', () => {
      const obj = { a: 'hello', b: 42, c: 'world' }
      expect(getKeysByType(obj, 'string')).toEqual(['a', 'c'])
    })

    test('returns empty array when no matches', () => {
      expect(getKeysByType({ a: 1, b: 2 }, 'string')).toEqual([])
    })
  })

  describe('createObjectFromArrays', () => {
    test('creates object from key and value arrays', () => {
      const keys = ['name', 'age', 'city']
      const values = ['Alice', 25, 'NYC']
      expect(createObjectFromArrays(keys, values)).toEqual({
        name: 'Alice',
        age: 25,
        city: 'NYC'
      })
    })

    test('works with empty arrays', () => {
      expect(createObjectFromArrays([], [])).toEqual({})
    })
  })
})

import {
  trackUserVisits,
  getUserVisits,
  getUniqueTags,
  addTags,
  hasAllTags,
  setToArray,
  removeDuplicates,
  getSizes,
  clearCollections,
  getMapEntries,
  objectToMap,
  setIntersection
} from './map-set.js'

describe('Map and Set', () => {
  describe('trackUserVisits', () => {
    test('tracks visits using user objects as keys', () => {
      const user1 = { id: 1, name: 'Alice' }
      const user2 = { id: 2, name: 'Bob' }
      const users = [user1, user2, user1, user1, user2]

      const visits = trackUserVisits(users)
      expect(visits.get(user1)).toBe(3)
      expect(visits.get(user2)).toBe(2)
    })

    test('works with empty array', () => {
      const visits = trackUserVisits([])
      expect(visits.size).toBe(0)
    })
  })

  describe('getUserVisits', () => {
    test('returns visit count for existing user', () => {
      const user = { id: 1, name: 'Alice' }
      const map = new Map([[user, 5]])
      expect(getUserVisits(map, user)).toBe(5)
    })

    test('returns 0 for non-existing user', () => {
      const user1 = { id: 1, name: 'Alice' }
      const user2 = { id: 2, name: 'Bob' }
      const map = new Map([[user1, 5]])
      expect(getUserVisits(map, user2)).toBe(0)
    })
  })

  describe('getUniqueTags', () => {
    test('removes duplicate tags', () => {
      const tags = ['javascript', 'coding', 'javascript', 'web', 'coding']
      const uniqueTags = getUniqueTags(tags)
      expect(uniqueTags.size).toBe(3)
      expect(uniqueTags.has('javascript')).toBe(true)
      expect(uniqueTags.has('coding')).toBe(true)
      expect(uniqueTags.has('web')).toBe(true)
    })

    test('works with already unique tags', () => {
      const tags = ['a', 'b', 'c']
      const uniqueTags = getUniqueTags(tags)
      expect(uniqueTags.size).toBe(3)
    })
  })

  describe('addTags', () => {
    test('adds new tags to Set', () => {
      const tagSet = new Set(['javascript', 'web'])
      const result = addTags(tagSet, ['coding', 'javascript'])
      expect(result.size).toBe(3)
      expect(result.has('coding')).toBe(true)
    })

    test('ignores duplicate tags automatically', () => {
      const tagSet = new Set(['a'])
      addTags(tagSet, ['a', 'a', 'b'])
      expect(tagSet.size).toBe(2)
    })
  })

  describe('hasAllTags', () => {
    test('returns true when all tags exist', () => {
      const tagSet = new Set(['javascript', 'web', 'coding'])
      expect(hasAllTags(tagSet, ['javascript', 'web'])).toBe(true)
    })

    test('returns false when some tags are missing', () => {
      const tagSet = new Set(['javascript', 'web'])
      expect(hasAllTags(tagSet, ['javascript', 'python'])).toBe(false)
    })

    test('returns true for empty required tags', () => {
      const tagSet = new Set(['javascript'])
      expect(hasAllTags(tagSet, [])).toBe(true)
    })
  })

  describe('setToArray', () => {
    test('converts Set to array', () => {
      const set = new Set([1, 2, 3])
      const arr = setToArray(set)
      expect(Array.isArray(arr)).toBe(true)
      expect(arr).toEqual([1, 2, 3])
    })

    test('works with empty Set', () => {
      const set = new Set()
      expect(setToArray(set)).toEqual([])
    })
  })

  describe('removeDuplicates', () => {
    test('removes duplicate values from array', () => {
      expect(removeDuplicates([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3])
    })

    test('works with strings', () => {
      const result = removeDuplicates(['a', 'b', 'a', 'c', 'b'])
      expect(result.length).toBe(3)
      expect(result).toContain('a')
      expect(result).toContain('b')
      expect(result).toContain('c')
    })
  })

  describe('getSizes', () => {
    test('returns sizes of Map and Set', () => {
      const map = new Map([['a', 1], ['b', 2]])
      const set = new Set([1, 2, 3])
      expect(getSizes(map, set)).toEqual({ mapSize: 2, setSize: 3 })
    })

    test('works with empty collections', () => {
      expect(getSizes(new Map(), new Set())).toEqual({ mapSize: 0, setSize: 0 })
    })
  })

  describe('clearCollections', () => {
    test('clears both Map and Set', () => {
      const map = new Map([['a', 1], ['b', 2]])
      const set = new Set([1, 2, 3])
      const result = clearCollections(map, set)

      expect(result).toEqual({ mapSize: 0, setSize: 0 })
      expect(map.size).toBe(0)
      expect(set.size).toBe(0)
    })
  })

  describe('getMapEntries', () => {
    test('collects all Map entries', () => {
      const map = new Map([['a', 1], ['b', 2]])
      const entries = getMapEntries(map)
      expect(entries).toEqual([['a', 1], ['b', 2]])
    })

    test('works with empty Map', () => {
      expect(getMapEntries(new Map())).toEqual([])
    })
  })

  describe('objectToMap', () => {
    test('converts object to Map', () => {
      const obj = { a: 1, b: 2, c: 3 }
      const map = objectToMap(obj)
      expect(map instanceof Map).toBe(true)
      expect(map.get('a')).toBe(1)
      expect(map.get('b')).toBe(2)
      expect(map.get('c')).toBe(3)
      expect(map.size).toBe(3)
    })

    test('works with empty object', () => {
      const map = objectToMap({})
      expect(map.size).toBe(0)
    })
  })

  describe('setIntersection', () => {
    test('finds common elements in two sets', () => {
      const set1 = new Set([1, 2, 3, 4])
      const set2 = new Set([3, 4, 5, 6])
      const result = setIntersection(set1, set2)
      expect(setToArray(result).sort()).toEqual([3, 4])
    })

    test('returns empty set when no common elements', () => {
      const set1 = new Set([1, 2])
      const set2 = new Set([3, 4])
      const result = setIntersection(set1, set2)
      expect(result.size).toBe(0)
    })
  })
})

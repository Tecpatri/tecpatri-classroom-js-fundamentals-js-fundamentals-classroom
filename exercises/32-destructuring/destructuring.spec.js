import {
  getFirstTwo,
  getFirstAndThird,
  getFirstAndRest,
  getWithDefaults,
  extractNameAndAge,
  renameProperties,
  getWithObjectDefaults,
  extractTitleAndRest,
  extractCity,
  extractFromNested,
  swapValues,
  greetUser,
  createMenu,
  processCoordinates,
  extractUserData
} from './destructuring.js'

describe('Destructuring Assignment', () => {
  describe('getFirstTwo', () => {
    test('extracts first two elements', () => {
      expect(getFirstTwo([1, 2, 3, 4])).toEqual({ first: 1, second: 2 })
    })

    test('works with exactly two elements', () => {
      expect(getFirstTwo(['a', 'b'])).toEqual({ first: 'a', second: 'b' })
    })
  })

  describe('getFirstAndThird', () => {
    test('extracts first and third elements, skipping second', () => {
      expect(getFirstAndThird([10, 20, 30, 40])).toEqual({ first: 10, third: 30 })
    })

    test('works with different values', () => {
      expect(getFirstAndThird(['a', 'b', 'c', 'd'])).toEqual({ first: 'a', third: 'c' })
    })
  })

  describe('getFirstAndRest', () => {
    test('extracts first element and rest of array', () => {
      expect(getFirstAndRest([1, 2, 3, 4])).toEqual({
        first: 1,
        rest: [2, 3, 4]
      })
    })

    test('rest is empty array when only one element', () => {
      expect(getFirstAndRest([5])).toEqual({ first: 5, rest: [] })
    })
  })

  describe('getWithDefaults', () => {
    test('uses values when present', () => {
      expect(getWithDefaults(['Alice', 25])).toEqual({ name: 'Alice', age: 25 })
    })

    test('uses defaults when values missing', () => {
      expect(getWithDefaults([])).toEqual({ name: 'Unknown', age: 0 })
    })

    test('uses default for second value only', () => {
      expect(getWithDefaults(['Bob'])).toEqual({ name: 'Bob', age: 0 })
    })
  })

  describe('extractNameAndAge', () => {
    test('extracts name and age from object', () => {
      expect(extractNameAndAge({ name: 'Alice', age: 25 })).toEqual({
        name: 'Alice',
        age: 25
      })
    })
  })

  describe('renameProperties', () => {
    test('renames width and height to w and h', () => {
      expect(renameProperties({ width: 100, height: 200 })).toEqual({
        w: 100,
        h: 200
      })
    })
  })

  describe('getWithObjectDefaults', () => {
    test('uses values when present', () => {
      expect(getWithObjectDefaults({ title: 'Hello', width: 300 })).toEqual({
        title: 'Hello',
        width: 300
      })
    })

    test('uses defaults when properties missing', () => {
      expect(getWithObjectDefaults({})).toEqual({
        title: 'Untitled',
        width: 100
      })
    })

    test('uses default for one property', () => {
      expect(getWithObjectDefaults({ title: 'Test' })).toEqual({
        title: 'Test',
        width: 100
      })
    })
  })

  describe('extractTitleAndRest', () => {
    test('extracts title and collects rest', () => {
      const result = extractTitleAndRest({ title: 'Hello', width: 100, height: 200 })
      expect(result.title).toBe('Hello')
      expect(result.rest).toEqual({ width: 100, height: 200 })
    })

    test('rest is empty when only title present', () => {
      const result = extractTitleAndRest({ title: 'Test' })
      expect(result.rest).toEqual({})
    })
  })

  describe('extractCity', () => {
    test('extracts city from nested address', () => {
      const user = {
        name: 'Alice',
        address: { city: 'NYC', zip: '10001' }
      }
      expect(extractCity(user)).toBe('NYC')
    })
  })

  describe('extractFromNested', () => {
    test('extracts from 2D array', () => {
      expect(extractFromNested([[1, 2], [3, 4]])).toEqual({ first: 1, second: 4 })
    })

    test('works with different values', () => {
      expect(extractFromNested([['a', 'b'], ['c', 'd']])).toEqual({
        first: 'a',
        second: 'd'
      })
    })
  })

  describe('swapValues', () => {
    test('swaps two values', () => {
      expect(swapValues(1, 2)).toEqual({ a: 2, b: 1 })
    })

    test('works with strings', () => {
      expect(swapValues('hello', 'world')).toEqual({ a: 'world', b: 'hello' })
    })
  })

  describe('greetUser', () => {
    test('uses destructured parameters', () => {
      expect(greetUser({ name: 'Alice', age: 25 })).toBe(
        'Hello Alice, you are 25 years old'
      )
    })
  })

  describe('createMenu', () => {
    test('uses provided values', () => {
      expect(createMenu({ title: 'File', width: 200 })).toEqual({
        title: 'File',
        width: 200
      })
    })

    test('uses defaults when properties missing', () => {
      expect(createMenu({})).toEqual({ title: 'Menu', width: 100 })
    })

    test('uses defaults when no argument', () => {
      expect(createMenu()).toEqual({ title: 'Menu', width: 100 })
    })
  })

  describe('processCoordinates', () => {
    test('destructures function return value', () => {
      const getCoords = () => [10, 20]
      expect(processCoordinates(getCoords)).toEqual({ x: 10, y: 20 })
    })
  })

  describe('extractUserData', () => {
    test('extracts complex nested data', () => {
      const user = {
        name: 'Alice',
        age: 25,
        address: {
          city: 'NYC',
          country: 'USA'
        },
        hobbies: ['reading', 'coding', 'gaming']
      }

      expect(extractUserData(user)).toEqual({
        name: 'Alice',
        city: 'NYC',
        firstHobby: 'reading',
        otherHobbies: ['coding', 'gaming']
      })
    })

    test('works with different data', () => {
      const user = {
        name: 'Bob',
        age: 30,
        address: {
          city: 'LA',
          country: 'USA'
        },
        hobbies: ['sports']
      }

      expect(extractUserData(user)).toEqual({
        name: 'Bob',
        city: 'LA',
        firstHobby: 'sports',
        otherHobbies: []
      })
    })
  })
})

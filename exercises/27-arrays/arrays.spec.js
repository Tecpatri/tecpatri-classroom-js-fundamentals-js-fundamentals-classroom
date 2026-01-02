import {
  createArray,
  accessElement,
  addToEnd,
  removeFromEnd,
  addToStart,
  removeFromStart,
  getArrayLength,
  iterateArray
} from './arrays.js'

describe('Arrays', () => {
  test('createArray - creates array from elements', () => {
    expect(createArray(1, 2, 3)).toEqual([1, 2, 3])
    expect(createArray('a', 'b')).toEqual(['a', 'b'])
    expect(createArray()).toEqual([])
  })

  test('accessElement - accesses elements with at() method', () => {
    const arr = [10, 20, 30, 40]
    expect(accessElement(arr, 0)).toBe(10)
    expect(accessElement(arr, 2)).toBe(30)
    expect(accessElement(arr, -1)).toBe(40)
    expect(accessElement(arr, -2)).toBe(30)
  })

  test('addToEnd - adds elements with push()', () => {
    const arr = [1, 2]
    const result = addToEnd(arr, 3, 4)
    expect(result).toEqual([1, 2, 3, 4])
    expect(arr).toEqual([1, 2, 3, 4]) // Original modified
  })

  test('removeFromEnd - removes last element with pop()', () => {
    const arr = [1, 2, 3]
    const removed = removeFromEnd(arr)
    expect(removed).toBe(3)
    expect(arr).toEqual([1, 2])
  })

  test('addToStart - adds elements with unshift()', () => {
    const arr = [3, 4]
    const result = addToStart(arr, 1, 2)
    expect(result).toEqual([1, 2, 3, 4])
    expect(arr).toEqual([1, 2, 3, 4]) // Original modified
  })

  test('removeFromStart - removes first element with shift()', () => {
    const arr = [1, 2, 3]
    const removed = removeFromStart(arr)
    expect(removed).toBe(1)
    expect(arr).toEqual([2, 3])
  })

  test('getArrayLength - returns array length', () => {
    expect(getArrayLength([1, 2, 3])).toBe(3)
    expect(getArrayLength([])).toBe(0)
    expect(getArrayLength(['a', 'b', 'c', 'd'])).toBe(4)
  })

  test('iterateArray - loops through and transforms elements', () => {
    expect(iterateArray(['apple', 'orange', 'pear'])).toEqual(['APPLE', 'ORANGE', 'PEAR'])
    expect(iterateArray(['hello'])).toEqual(['HELLO'])
    expect(iterateArray([])).toEqual([])
  })
})

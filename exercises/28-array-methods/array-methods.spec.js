import {
  removeElements,
  copyPortion,
  mergeArrays,
  findElement,
  filterElements,
  transformArray,
  sortNumbers,
  convertToString,
  sumArray
} from './array-methods.js'

describe('Array Methods', () => {
  test('removeElements - removes elements with splice', () => {
    const arr1 = [1, 2, 3, 4, 5]
    expect(removeElements(arr1, 1, 2)).toEqual([1, 4, 5])

    const arr2 = ['a', 'b', 'c', 'd']
    expect(removeElements(arr2, 0, 1)).toEqual(['b', 'c', 'd'])
  })

  test('copyPortion - copies with slice', () => {
    expect(copyPortion([1, 2, 3, 4], 1, 3)).toEqual([2, 3])
    expect(copyPortion(['a', 'b', 'c', 'd'], 0, 2)).toEqual(['a', 'b'])
    expect(copyPortion([1, 2, 3, 4], 2)).toEqual([3, 4])
  })

  test('mergeArrays - merges with concat', () => {
    expect(mergeArrays([1, 2], [3, 4])).toEqual([1, 2, 3, 4])
    expect(mergeArrays([1], [2], [3])).toEqual([1, 2, 3])
    expect(mergeArrays(['a', 'b'], ['c', 'd'], ['e'])).toEqual(['a', 'b', 'c', 'd', 'e'])
  })

  test('findElement - finds with condition', () => {
    expect(findElement([1, 2, 3, 4], x => x > 2)).toBe(3)
    expect(findElement([{ id: 1 }, { id: 2 }], x => x.id === 2)).toEqual({ id: 2 })
    expect(findElement([1, 2, 3], x => x > 10)).toBe(undefined)
  })

  test('filterElements - filters with condition', () => {
    expect(filterElements([1, 2, 3, 4], x => x > 2)).toEqual([3, 4])
    expect(filterElements([1, 2, 3, 4, 5], x => x % 2 === 0)).toEqual([2, 4])
    expect(filterElements(['a', 'ab', 'abc'], x => x.length > 1)).toEqual(['ab', 'abc'])
  })

  test('transformArray - transforms with map', () => {
    expect(transformArray([1, 2, 3], x => x * 2)).toEqual([2, 4, 6])
    expect(transformArray(['a', 'b', 'c'], x => x.toUpperCase())).toEqual(['A', 'B', 'C'])
    expect(transformArray([1, 2, 3], x => x * x)).toEqual([1, 4, 9])
  })

  test('sortNumbers - sorts numbers correctly', () => {
    const arr1 = [3, 1, 4, 1, 5]
    expect(sortNumbers(arr1)).toEqual([1, 1, 3, 4, 5])

    const arr2 = [15, 2, 100, 1]
    expect(sortNumbers(arr2)).toEqual([1, 2, 15, 100])
  })

  test('convertToString - joins with separator', () => {
    expect(convertToString(['a', 'b', 'c'], '-')).toBe('a-b-c')
    expect(convertToString([1, 2, 3], ', ')).toBe('1, 2, 3')
    expect(convertToString(['Hello', 'World'], ' ')).toBe('Hello World')
  })

  test('sumArray - calculates sum with reduce', () => {
    expect(sumArray([1, 2, 3, 4])).toBe(10)
    expect(sumArray([10, 20, 30])).toBe(60)
    expect(sumArray([])).toBe(0)
    expect(sumArray([5])).toBe(5)
  })
})

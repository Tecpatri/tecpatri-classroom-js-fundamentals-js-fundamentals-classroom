import {
  square,
  greet,
  add,
  getMax,
  createMultiplier,
  filterPositive
} from './arrow-basics.js'

describe('Arrow Functions Basics', () => {
  test('square - single parameter without parentheses, implicit return', () => {
    expect(square(5)).toBe(25)
    expect(square(0)).toBe(0)
    expect(square(-3)).toBe(9)
  })

  test('greet - single parameter, implicit return with template literal', () => {
    expect(greet('Alice')).toBe('Hello, Alice!')
    expect(greet('Bob')).toBe('Hello, Bob!')
  })

  test('add - multiple parameters with parentheses, implicit return', () => {
    expect(add(3, 7)).toBe(10)
    expect(add(10, 20)).toBe(30)
    expect(add(-5, 5)).toBe(0)
  })

  test('getMax - multi-line arrow function with explicit return', () => {
    expect(getMax(5, 10)).toBe(10)
    expect(getMax(20, 15)).toBe(20)
    expect(getMax(7, 7)).toBe(7)
    expect(getMax(-5, -10)).toBe(-5)
  })

  test('createMultiplier - arrow function returning another arrow function', () => {
    const double = createMultiplier(2)
    const triple = createMultiplier(3)

    expect(double(5)).toBe(10)
    expect(triple(5)).toBe(15)
    expect(double(0)).toBe(0)
  })

  test('filterPositive - arrow function as a callback', () => {
    expect(filterPositive([1, -2, 3, -4, 5])).toEqual([1, 3, 5])
    expect(filterPositive([-1, -2, -3])).toEqual([])
    expect(filterPositive([10, 20, 30])).toEqual([10, 20, 30])
  })
})

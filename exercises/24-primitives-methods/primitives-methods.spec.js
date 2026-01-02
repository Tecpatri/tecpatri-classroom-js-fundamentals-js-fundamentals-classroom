import {
  useStringMethod,
  useNumberMethod,
  checkPrimitiveType,
  accessStringCharacter,
  demonstrateWrapperBehavior
} from './primitives-methods.js'

describe('Methods of Primitives', () => {
  test('useStringMethod - calls toUpperCase on string', () => {
    expect(useStringMethod('hello')).toBe('HELLO')
    expect(useStringMethod('javascript')).toBe('JAVASCRIPT')
    expect(useStringMethod('Test')).toBe('TEST')
  })

  test('useNumberMethod - calls toFixed on number', () => {
    expect(useNumberMethod(1.23456, 2)).toBe('1.23')
    expect(useNumberMethod(10, 0)).toBe('10')
    expect(useNumberMethod(3.14159, 3)).toBe('3.142')
    expect(useNumberMethod(99.9, 1)).toBe('99.9')
  })

  test('checkPrimitiveType - identifies primitives correctly', () => {
    // Primitives
    expect(checkPrimitiveType(42)).toBe(true)
    expect(checkPrimitiveType('hello')).toBe(true)
    expect(checkPrimitiveType(true)).toBe(true)
    expect(checkPrimitiveType(null)).toBe(true)
    expect(checkPrimitiveType(undefined)).toBe(true)
    expect(checkPrimitiveType(Symbol('id'))).toBe(true)

    // Non-primitives
    expect(checkPrimitiveType({})).toBe(false)
    expect(checkPrimitiveType([])).toBe(false)
    expect(checkPrimitiveType(function () {})).toBe(false)
  })

  test('accessStringCharacter - accesses character by index', () => {
    expect(accessStringCharacter('Hello', 0)).toBe('H')
    expect(accessStringCharacter('Hello', 4)).toBe('o')
    expect(accessStringCharacter('JavaScript', 4)).toBe('S')
  })

  test('demonstrateWrapperBehavior - calls toLowerCase', () => {
    expect(demonstrateWrapperBehavior('HELLO')).toBe('hello')
    expect(demonstrateWrapperBehavior('JAVASCRIPT')).toBe('javascript')
    expect(demonstrateWrapperBehavior('TeSt')).toBe('test')
  })
})

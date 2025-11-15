import {
  identifyType,
  createTemplateString,
  checkSpecialNumbers,
  demonstrateAllTypes,
  differentiateNullUndefined,
  templateWithExpression
} from './data-types.js'

describe('Data Types', () => {
  test('identifyType - uses typeof operator correctly', () => {
    expect(identifyType(42)).toBe('number')
    expect(identifyType('hello')).toBe('string')
    expect(identifyType(true)).toBe('boolean')
    expect(identifyType(undefined)).toBe('undefined')
    expect(identifyType({})).toBe('object')
    expect(identifyType(null)).toBe('object') // Known JavaScript quirk
    expect(identifyType(Symbol('id'))).toBe('symbol')
  })

  test('createTemplateString - uses template literals with variables', () => {
    expect(createTemplateString('Alice', 25)).toBe('Hello, Alice! You are 25 years old.')
    expect(createTemplateString('Bob', 30)).toBe('Hello, Bob! You are 30 years old.')
  })

  test('checkSpecialNumbers - identifies Infinity and NaN', () => {
    expect(checkSpecialNumbers(Infinity)).toEqual({ isInfinity: true, isNaN: false })
    expect(checkSpecialNumbers(-Infinity)).toEqual({ isInfinity: true, isNaN: false })
    expect(checkSpecialNumbers(NaN)).toEqual({ isInfinity: false, isNaN: true })
    expect(checkSpecialNumbers(42)).toEqual({ isInfinity: false, isNaN: false })
    expect(checkSpecialNumbers('text')).toEqual({ isInfinity: false, isNaN: false })
  })

  test('demonstrateAllTypes - returns all 8 JavaScript data types', () => {
    const types = demonstrateAllTypes()

    expect(typeof types.number).toBe('number')
    expect(typeof types.bigint).toBe('bigint')
    expect(typeof types.string).toBe('string')
    expect(typeof types.boolean).toBe('boolean')
    expect(types.nullValue).toBe(null)
    expect(types.undefinedValue).toBe(undefined)
    expect(typeof types.symbol).toBe('symbol')
    expect(typeof types.object).toBe('object')
    expect(types.object).not.toBe(null) // Ensure it's actually an object, not null
  })

  test('differentiateNullUndefined - shows differences between null and undefined', () => {
    const result = differentiateNullUndefined()

    expect(result.nullType).toBe('object')
    expect(result.undefinedType).toBe('undefined')
    expect(result.nullEqualsUndefined).toBe(true) // null == undefined is true
    expect(result.nullStrictEqualsUndefined).toBe(false) // null === undefined is false
  })

  test('templateWithExpression - calculates expressions inside template literals', () => {
    expect(templateWithExpression(5, 3)).toBe('The sum of 5 and 3 is 8.')
    expect(templateWithExpression(10, 20)).toBe('The sum of 10 and 20 is 30.')
    expect(templateWithExpression(-5, 5)).toBe('The sum of -5 and 5 is 0.')
  })
})

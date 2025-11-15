import {
  convertToString,
  convertToNumber,
  convertToBoolean,
  handleConversionEdgeCases,
  demonstrateImplicitConversion,
  isFalsy
} from './type-conversions.js'

describe('Type Conversions', () => {
  test('convertToString - converts values to strings', () => {
    const result1 = convertToString(123)
    expect(result1.result).toBe('123')
    expect(result1.type).toBe('string')

    const result2 = convertToString(true)
    expect(result2.result).toBe('true')
    expect(result2.type).toBe('string')

    const result3 = convertToString(null)
    expect(result3.result).toBe('null')
    expect(result3.type).toBe('string')
  })

  test('convertToNumber - handles all numeric conversion edge cases', () => {
    // Normal conversions
    expect(convertToNumber('123')).toBe(123)
    expect(convertToNumber('  456  ')).toBe(456) // Whitespace trimmed
    expect(convertToNumber(true)).toBe(1)
    expect(convertToNumber(false)).toBe(0)

    // Edge cases
    expect(convertToNumber('')).toBe(0) // Empty string -> 0
    expect(convertToNumber('   ')).toBe(0) // Whitespace -> 0
    expect(convertToNumber(null)).toBe(0) // null -> 0
    expect(Number.isNaN(convertToNumber(undefined))).toBe(true) // undefined -> NaN
    expect(Number.isNaN(convertToNumber('abc'))).toBe(true) // Invalid -> NaN
  })

  test('convertToBoolean - identifies falsy and truthy values', () => {
    // Falsy values
    expect(convertToBoolean(0)).toBe(false)
    expect(convertToBoolean('')).toBe(false) // Empty string
    expect(convertToBoolean(null)).toBe(false)
    expect(convertToBoolean(undefined)).toBe(false)
    expect(convertToBoolean(NaN)).toBe(false)
    expect(convertToBoolean(false)).toBe(false)

    // Truthy values
    expect(convertToBoolean(1)).toBe(true)
    expect(convertToBoolean('hello')).toBe(true)
    expect(convertToBoolean('0')).toBe(true) // String "0" is truthy!
    expect(convertToBoolean(' ')).toBe(true) // Space is truthy!
    expect(convertToBoolean([])).toBe(true) // Empty array is truthy
    expect(convertToBoolean({})).toBe(true) // Empty object is truthy
  })

  test('handleConversionEdgeCases - demonstrates critical edge cases', () => {
    const result = handleConversionEdgeCases()

    expect(result.nullToNumber).toBe(0) // null -> 0
    expect(Number.isNaN(result.undefinedToNumber)).toBe(true) // undefined -> NaN
    expect(result.emptyStringToNumber).toBe(0) // "" -> 0
  })

  test('demonstrateImplicitConversion - shows automatic type conversion', () => {
    const result = demonstrateImplicitConversion()

    expect(result.stringPlusNumber).toBe('53') // String concatenation
    expect(result.stringMinusNumber).toBe(2) // Numeric conversion
    expect(result.booleanToNumber).toBe(2) // true + 1 = 2
    expect(result.unaryPlus).toBe(42) // Unary + converts to number
  })

  test('isFalsy - correctly identifies falsy values', () => {
    // Falsy values
    expect(isFalsy(0)).toBe(true)
    expect(isFalsy('')).toBe(true)
    expect(isFalsy(null)).toBe(true)
    expect(isFalsy(undefined)).toBe(true)
    expect(isFalsy(NaN)).toBe(true)
    expect(isFalsy(false)).toBe(true)

    // Truthy values
    expect(isFalsy(1)).toBe(false)
    expect(isFalsy('hello')).toBe(false)
    expect(isFalsy('0')).toBe(false) // String "0" is truthy!
    expect(isFalsy(' ')).toBe(false) // Space is truthy!
    expect(isFalsy([])).toBe(false)
    expect(isFalsy({})).toBe(false)
  })
})

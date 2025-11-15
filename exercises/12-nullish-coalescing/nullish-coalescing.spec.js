import {
  getValueOrDefault,
  formatUserName,
  getConfigValue,
  firstDefinedValue,
  compareOperators
} from './nullish-coalescing.js'

describe('Nullish Coalescing Operator (??)', () => {
  describe('getValueOrDefault', () => {
    test('returns the value when it is not null or undefined', () => {
      expect(getValueOrDefault(0, 10)).toBe(0)
      expect(getValueOrDefault('', 'default')).toBe('')
      expect(getValueOrDefault(false, true)).toBe(false)
      expect(getValueOrDefault('hello', 'default')).toBe('hello')
    })

    test('returns the default value when value is null or undefined', () => {
      expect(getValueOrDefault(null, 10)).toBe(10)
      expect(getValueOrDefault(undefined, 'default')).toBe('default')
    })
  })

  describe('formatUserName', () => {
    test('returns the user name when it exists', () => {
      expect(formatUserName({ name: 'Alice' })).toBe('Alice')
      expect(formatUserName({ name: 'Bob' })).toBe('Bob')
    })

    test('returns "Guest" when name is null or undefined', () => {
      expect(formatUserName({ name: null })).toBe('Guest')
      expect(formatUserName({ name: undefined })).toBe('Guest')
      expect(formatUserName({})).toBe('Guest')
    })

    test('returns empty string when name is empty string (not null/undefined)', () => {
      expect(formatUserName({ name: '' })).toBe('')
    })
  })

  describe('getConfigValue', () => {
    test('returns the config value when it exists and is not null/undefined', () => {
      expect(getConfigValue({ volume: 0 }, 'volume', 50)).toBe(0)
      expect(getConfigValue({ autoplay: false }, 'autoplay', true)).toBe(
        false
      )
      expect(getConfigValue({ name: '' }, 'name', 'default')).toBe('')
      expect(getConfigValue({ count: 100 }, 'count', 0)).toBe(100)
    })

    test('returns the default value when config value is null or undefined', () => {
      expect(getConfigValue({ volume: null }, 'volume', 50)).toBe(50)
      expect(getConfigValue({ volume: undefined }, 'volume', 50)).toBe(50)
      expect(getConfigValue({}, 'volume', 50)).toBe(50)
    })
  })

  describe('firstDefinedValue', () => {
    test('returns the first value that is not null or undefined', () => {
      expect(firstDefinedValue(null, undefined, 42)).toBe(42)
      expect(firstDefinedValue(null, 0, 42)).toBe(0)
      expect(firstDefinedValue(false, null, true)).toBe(false)
      expect(firstDefinedValue('a', 'b', 'c')).toBe('a')
    })

    test('handles all null/undefined values', () => {
      expect(firstDefinedValue(null, null, null)).toBe(null)
      expect(firstDefinedValue(undefined, undefined, 'last')).toBe('last')
    })

    test('treats falsy values as valid', () => {
      expect(firstDefinedValue(null, '', 'default')).toBe('')
      expect(firstDefinedValue(null, 0, 100)).toBe(0)
      expect(firstDefinedValue(undefined, false, true)).toBe(false)
    })
  })

  describe('compareOperators', () => {
    test('shows difference between ?? and || for falsy values', () => {
      expect(compareOperators(0)).toEqual({
        withNullish: 0,
        withOr: 'default'
      })
      expect(compareOperators('')).toEqual({
        withNullish: '',
        withOr: 'default'
      })
      expect(compareOperators(false)).toEqual({
        withNullish: false,
        withOr: 'default'
      })
    })

    test('shows both operators return default for null/undefined', () => {
      expect(compareOperators(null)).toEqual({
        withNullish: 'default',
        withOr: 'default'
      })
      expect(compareOperators(undefined)).toEqual({
        withNullish: 'default',
        withOr: 'default'
      })
    })

    test('shows both operators return the value for truthy values', () => {
      expect(compareOperators('hello')).toEqual({
        withNullish: 'hello',
        withOr: 'hello'
      })
      expect(compareOperators(42)).toEqual({
        withNullish: 42,
        withOr: 42
      })
    })
  })
})

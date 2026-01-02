import {
  getCharacter,
  findSubstring,
  extractPortion,
  checkInclusion,
  changeCase,
  capitalizeFirst,
  checkStartEnd
} from './strings.js'

describe('Strings', () => {
  test('getCharacter - accesses characters with at() method', () => {
    expect(getCharacter('Hello', 0)).toBe('H')
    expect(getCharacter('Hello', 4)).toBe('o')
    expect(getCharacter('Hello', -1)).toBe('o')
    expect(getCharacter('Hello', -2)).toBe('l')
  })

  test('findSubstring - finds substring position with indexOf', () => {
    expect(findSubstring('Hello World', 'World')).toBe(6)
    expect(findSubstring('Hello World', 'Hello')).toBe(0)
    expect(findSubstring('Hello World', 'o')).toBe(4)
    expect(findSubstring('Hello World', 'xyz')).toBe(-1)
  })

  test('extractPortion - extracts substring with slice', () => {
    expect(extractPortion('JavaScript', 0, 4)).toBe('Java')
    expect(extractPortion('JavaScript', 4, 10)).toBe('Script')
    expect(extractPortion('JavaScript', 4)).toBe('Script')
    expect(extractPortion('JavaScript', -6)).toBe('Script')
  })

  test('checkInclusion - checks substring with includes', () => {
    expect(checkInclusion('Hello World', 'Wor')).toBe(true)
    expect(checkInclusion('Hello World', 'Hello')).toBe(true)
    expect(checkInclusion('Hello World', 'xyz')).toBe(false)
  })

  test('changeCase - converts to upper or lowercase', () => {
    expect(changeCase('Hello', 'upper')).toBe('HELLO')
    expect(changeCase('Hello', 'lower')).toBe('hello')
    expect(changeCase('JavaScript', 'upper')).toBe('JAVASCRIPT')
  })

  test('capitalizeFirst - capitalizes first letter only', () => {
    expect(capitalizeFirst('hello')).toBe('Hello')
    expect(capitalizeFirst('javaScript')).toBe('Javascript')
    expect(capitalizeFirst('WORLD')).toBe('World')
    expect(capitalizeFirst('')).toBe('')
  })

  test('checkStartEnd - checks start and end with startsWith/endsWith', () => {
    expect(checkStartEnd('Hello World', 'Hello', 'World')).toEqual({
      startsWithText: true,
      endsWithText: true
    })
    expect(checkStartEnd('JavaScript', 'Java', 'Python')).toEqual({
      startsWithText: true,
      endsWithText: false
    })
    expect(checkStartEnd('Test', 'X', 'st')).toEqual({
      startsWithText: false,
      endsWithText: true
    })
  })
})

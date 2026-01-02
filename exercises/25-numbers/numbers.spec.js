import {
  convertToHex,
  roundNumber,
  parsePixelValue,
  fixPrecision,
  validateNumber,
  generateRandomInRange,
  convertToBase
} from './numbers.js'

describe('Numbers', () => {
  test('convertToHex - converts number to hexadecimal', () => {
    expect(convertToHex(255)).toBe('ff')
    expect(convertToHex(16)).toBe('10')
    expect(convertToHex(0)).toBe('0')
  })

  test('roundNumber - uses different rounding methods', () => {
    expect(roundNumber(3.7, 'floor')).toBe(3)
    expect(roundNumber(3.7, 'ceil')).toBe(4)
    expect(roundNumber(3.7, 'round')).toBe(4)
    expect(roundNumber(3.7, 'trunc')).toBe(3)

    expect(roundNumber(-1.1, 'floor')).toBe(-2)
    expect(roundNumber(-1.1, 'ceil')).toBe(-1)
    expect(roundNumber(2.5, 'round')).toBe(3)
  })

  test('parsePixelValue - extracts number from string', () => {
    expect(parsePixelValue('100px')).toBe(100)
    expect(parsePixelValue('12.5em')).toBe(12.5)
    expect(parsePixelValue('50%')).toBe(50)
  })

  test('fixPrecision - handles decimal precision', () => {
    expect(fixPrecision(0.1, 0.2)).toBe(0.3)
    expect(fixPrecision(0.7, 0.1)).toBe(0.8)
    expect(fixPrecision(1.005, 0.005)).toBe(1.01)
  })

  test('validateNumber - checks if value is finite number', () => {
    expect(validateNumber(100)).toBe(true)
    expect(validateNumber(0)).toBe(true)
    expect(validateNumber(-50)).toBe(true)

    expect(validateNumber(Infinity)).toBe(false)
    expect(validateNumber(NaN)).toBe(false)
    expect(validateNumber('100')).toBe(false)
    expect(validateNumber('text')).toBe(false)
  })

  test('generateRandomInRange - generates random integer in range', () => {
    for (let i = 0; i < 10; i++) {
      const result = generateRandomInRange(1, 10)
      expect(result).toBeGreaterThanOrEqual(1)
      expect(result).toBeLessThanOrEqual(10)
      expect(Number.isInteger(result)).toBe(true)
    }

    // Test single value range
    expect(generateRandomInRange(5, 5)).toBe(5)
  })

  test('convertToBase - converts to different bases', () => {
    expect(convertToBase(255, 2)).toBe('11111111')
    expect(convertToBase(255, 16)).toBe('ff')
    expect(convertToBase(8, 8)).toBe('10')
    expect(convertToBase(255, 36)).toBe('73')
  })
})

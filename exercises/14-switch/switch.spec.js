import {
  getDayType,
  getGrade,
  getSeasonByMonth,
  interpretStatusCode,
  calculateShipping,
  compareValues
} from './switch.js'

describe('The "switch" Statement', () => {
  describe('getDayType (grouped cases)', () => {
    test('returns "weekend" for Saturday and Sunday', () => {
      expect(getDayType('Sat')).toBe('weekend')
      expect(getDayType('Sun')).toBe('weekend')
    })

    test('returns "weekday" for Monday through Friday', () => {
      expect(getDayType('Mon')).toBe('weekday')
      expect(getDayType('Tue')).toBe('weekday')
      expect(getDayType('Wed')).toBe('weekday')
      expect(getDayType('Thu')).toBe('weekday')
      expect(getDayType('Fri')).toBe('weekday')
    })
  })

  describe('getGrade (switch with ranges)', () => {
    test('returns "A" for scores 90-100', () => {
      expect(getGrade(90)).toBe('A')
      expect(getGrade(95)).toBe('A')
      expect(getGrade(100)).toBe('A')
    })

    test('returns "B" for scores 80-89', () => {
      expect(getGrade(80)).toBe('B')
      expect(getGrade(85)).toBe('B')
      expect(getGrade(89)).toBe('B')
    })

    test('returns "C" for scores 70-79', () => {
      expect(getGrade(70)).toBe('C')
      expect(getGrade(75)).toBe('C')
      expect(getGrade(79)).toBe('C')
    })

    test('returns "D" for scores 60-69', () => {
      expect(getGrade(60)).toBe('D')
      expect(getGrade(65)).toBe('D')
      expect(getGrade(69)).toBe('D')
    })

    test('returns "F" for scores below 60', () => {
      expect(getGrade(0)).toBe('F')
      expect(getGrade(30)).toBe('F')
      expect(getGrade(59)).toBe('F')
    })
  })

  describe('getSeasonByMonth (grouped seasonal cases)', () => {
    test('returns "Winter" for December, January, February', () => {
      expect(getSeasonByMonth(12)).toBe('Winter')
      expect(getSeasonByMonth(1)).toBe('Winter')
      expect(getSeasonByMonth(2)).toBe('Winter')
    })

    test('returns "Spring" for March, April, May', () => {
      expect(getSeasonByMonth(3)).toBe('Spring')
      expect(getSeasonByMonth(4)).toBe('Spring')
      expect(getSeasonByMonth(5)).toBe('Spring')
    })

    test('returns "Summer" for June, July, August', () => {
      expect(getSeasonByMonth(6)).toBe('Summer')
      expect(getSeasonByMonth(7)).toBe('Summer')
      expect(getSeasonByMonth(8)).toBe('Summer')
    })

    test('returns "Fall" for September, October, November', () => {
      expect(getSeasonByMonth(9)).toBe('Fall')
      expect(getSeasonByMonth(10)).toBe('Fall')
      expect(getSeasonByMonth(11)).toBe('Fall')
    })

    test('handles invalid month numbers with default case', () => {
      expect(getSeasonByMonth(0)).toBe('Invalid month')
      expect(getSeasonByMonth(13)).toBe('Invalid month')
    })
  })

  describe('interpretStatusCode (specific cases with default)', () => {
    test('interprets 2xx success codes', () => {
      expect(interpretStatusCode(200)).toBe('OK')
      expect(interpretStatusCode(201)).toBe('Created')
    })

    test('interprets 4xx client error codes', () => {
      expect(interpretStatusCode(400)).toBe('Bad Request')
      expect(interpretStatusCode(401)).toBe('Unauthorized')
      expect(interpretStatusCode(404)).toBe('Not Found')
    })

    test('interprets 5xx server error codes', () => {
      expect(interpretStatusCode(500)).toBe('Internal Server Error')
    })

    test('returns "Unknown Status" for unhandled codes', () => {
      expect(interpretStatusCode(999)).toBe('Unknown Status')
      expect(interpretStatusCode(100)).toBe('Unknown Status')
    })
  })

  describe('calculateShipping (grouped country cases)', () => {
    test('charges $5 for US', () => {
      expect(calculateShipping('US')).toBe(5)
    })

    test('charges $10 for Canada and Mexico', () => {
      expect(calculateShipping('CA')).toBe(10)
      expect(calculateShipping('MX')).toBe(10)
    })

    test('charges $15 for UK, France, and Germany', () => {
      expect(calculateShipping('UK')).toBe(15)
      expect(calculateShipping('FR')).toBe(15)
      expect(calculateShipping('DE')).toBe(15)
    })

    test('charges $25 for all other countries', () => {
      expect(calculateShipping('JP')).toBe(25)
      expect(calculateShipping('AU')).toBe(25)
      expect(calculateShipping('BR')).toBe(25)
    })
  })

  describe('compareValues (strict equality demonstration)', () => {
    test('returns match: true for identical values and types', () => {
      expect(compareValues(1, 1)).toEqual({
        match: true,
        message: 'Exact match'
      })
      expect(compareValues('hello', 'hello')).toEqual({
        match: true,
        message: 'Exact match'
      })
    })

    test('returns match: false for same value but different types', () => {
      expect(compareValues(1, '1')).toEqual({
        match: false,
        message: 'Different types'
      })
      expect(compareValues(0, false)).toEqual({
        match: false,
        message: 'Different types'
      })
    })

    test('returns match: false for completely different values', () => {
      expect(compareValues(1, 2)).toEqual({
        match: false,
        message: 'Different values'
      })
      expect(compareValues('hello', 'world')).toEqual({
        match: false,
        message: 'Different values'
      })
    })
  })
})

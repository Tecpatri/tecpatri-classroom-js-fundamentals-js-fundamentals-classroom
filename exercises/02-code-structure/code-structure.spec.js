import { sum, multiStatement, withComments, withMultilineComment } from './code-structure.js'

describe('Code Structure', () => {
  test('sums two numbers', () => {
    expect(sum(2, 3)).toBe(5)
    expect(sum(10, 20)).toBe(30)
  })

  test('uses multiple statements', () => {
    expect(multiStatement(5)).toBe(20) // (5 * 2) + 10 = 20
    expect(multiStatement(0)).toBe(10) // (0 * 2) + 10 = 10
    expect(multiStatement(10)).toBe(30) // (10 * 2) + 10 = 30
  })

  test('returns value with comments', () => {
    expect(withComments(4)).toBe(12) // 4 * 3 = 12
    expect(withComments(7)).toBe(21) // 7 * 3 = 21
  })

  test('sums three numbers with multiline comment', () => {
    expect(withMultilineComment(1, 2, 3)).toBe(6)
    expect(withMultilineComment(5, 10, 15)).toBe(30)
  })
})

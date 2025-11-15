import {
  createUserProfile,
  updateCounter,
  calculateRectangleArea,
  declareConstants,
  useDescriptiveNames,
  demonstrateLetVsConst
} from './variables.js'

describe('Variables', () => {
  test('createUserProfile - declares const variable with object', () => {
    const user = createUserProfile('Alice', 25)
    expect(user).toEqual({
      name: 'Alice',
      age: 25,
      isActive: true
    })
  })

  test('updateCounter - uses let to increment counter', () => {
    expect(updateCounter(5)).toBe(5)
    expect(updateCounter(10)).toBe(10)
    expect(updateCounter(0)).toBe(0)
  })

  test('calculateRectangleArea - declares multiple variables in one statement', () => {
    expect(calculateRectangleArea(5, 10)).toBe(50)
    expect(calculateRectangleArea(3, 7)).toBe(21)
    expect(calculateRectangleArea(2.5, 4)).toBe(10)
  })

  test('declareConstants - creates constants that cannot be reassigned', () => {
    const constants = declareConstants()
    expect(constants.MAX_USERS).toBe(100)
    expect(constants.APP_NAME).toBe('MyApp')
  })

  test('useDescriptiveNames - follows camelCase naming convention', () => {
    const result = useDescriptiveNames('John', 'Doe')
    expect(result.fullName).toBe('John Doe')
    expect(result.nameLength).toBe(8)

    const result2 = useDescriptiveNames('Jane', 'Smith')
    expect(result2.fullName).toBe('Jane Smith')
    expect(result2.nameLength).toBe(10)
  })

  test('demonstrateLetVsConst - shows let allows reassignment, const does not', () => {
    const result = demonstrateLetVsConst(50, 25)
    expect(result.score).toBe(75)
    expect(result.maxScore).toBe(100)

    const result2 = demonstrateLetVsConst(80, 15)
    expect(result2.score).toBe(95)
    expect(result2.maxScore).toBe(100)
  })
})

import { hello, greet, showMessage } from './hello-world.js'

describe('Hello, world!', () => {
  test('returns classic greeting', () => {
    expect(hello()).toBe('Hello, world!')
  })

  test('greets a person by name', () => {
    expect(greet('Alice')).toBe('Hello, Alice!')
  })

  test('greets different names', () => {
    expect(greet('Bob')).toBe('Hello, Bob!')
    expect(greet('John')).toBe('Hello, John!')
  })

  test('returns message unchanged', () => {
    expect(showMessage('Welcome!')).toBe('Welcome!')
  })

  test('returns different messages', () => {
    expect(showMessage('Good morning')).toBe('Good morning')
    expect(showMessage('Goodbye')).toBe('Goodbye')
  })
})

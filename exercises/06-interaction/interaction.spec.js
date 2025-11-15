import {
  simulateAlert,
  simulatePrompt,
  simulateConfirm,
  handlePromptCancel,
  combineInteractions,
  promptReturnsString
} from './interaction.js'
import { jest } from '@jest/globals'

describe('Interaction', () => {
  test('simulateAlert - alert returns undefined', () => {
    const mockAlert = jest.fn(() => undefined)
    const result = simulateAlert(mockAlert, 'Hello World')

    expect(mockAlert).toHaveBeenCalledWith('Hello World')
    expect(result).toBe(undefined)
  })

  test('simulatePrompt - handles user input and cancellation', () => {
    // User enters text
    const mockPromptWithInput = jest.fn(() => 'Alice')
    expect(simulatePrompt(mockPromptWithInput, 'Your name?')).toBe('You entered: Alice')

    // User cancels (returns null)
    const mockPromptCancelled = jest.fn(() => null)
    expect(simulatePrompt(mockPromptCancelled, 'Your name?')).toBe('No input provided')
  })

  test('simulateConfirm - returns true for OK, false for Cancel', () => {
    // User clicks OK
    const mockConfirmOK = jest.fn(() => true)
    expect(simulateConfirm(mockConfirmOK, 'Are you sure?')).toBe('Confirmed')

    // User clicks Cancel
    const mockConfirmCancel = jest.fn(() => false)
    expect(simulateConfirm(mockConfirmCancel, 'Are you sure?')).toBe('Cancelled')
  })

  test('handlePromptCancel - uses default value when prompt is cancelled', () => {
    // User cancels
    const mockPromptNull = jest.fn(() => null)
    expect(handlePromptCancel(mockPromptNull)).toBe('Welcome, Guest!')

    // User enters name
    const mockPromptName = jest.fn(() => 'Bob')
    expect(handlePromptCancel(mockPromptName)).toBe('Welcome, Bob!')
  })

  test('combineInteractions - combines confirm and prompt logic', () => {
    // User cancels at confirm stage
    const mockConfirmNo = jest.fn(() => false)
    const mockPrompt = jest.fn(() => 'Alice')
    expect(combineInteractions(mockConfirmNo, mockPrompt)).toBe('Registration cancelled')
    expect(mockPrompt).not.toHaveBeenCalled() // Prompt shouldn't be called if confirm is false

    // User confirms but cancels prompt
    const mockConfirmYes = jest.fn(() => true)
    const mockPromptNull = jest.fn(() => null)
    expect(combineInteractions(mockConfirmYes, mockPromptNull)).toBe('Name required')

    // User confirms and enters name
    const mockConfirmYes2 = jest.fn(() => true)
    const mockPromptName = jest.fn(() => 'Charlie')
    expect(combineInteractions(mockConfirmYes2, mockPromptName)).toBe('Registered: Charlie')
  })

  test('promptReturnsString - prompt always returns a string (or null)', () => {
    // User enters a number, but it's returned as a string
    const mockPromptNumber = jest.fn(() => '42')
    const result = promptReturnsString(mockPromptNumber)

    expect(result.value).toBe('42')
    expect(result.type).toBe('string') // Not 'number'!

    // User cancels - returns null
    const mockPromptNull = jest.fn(() => null)
    const resultNull = promptReturnsString(mockPromptNull)

    expect(resultNull.value).toBe(null)
    expect(resultNull.type).toBe('object') // typeof null is 'object'
  })
})

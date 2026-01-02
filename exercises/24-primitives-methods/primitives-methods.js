/**
 * Use a string method to convert to uppercase
 *
 * Call the toUpperCase() method on the input string.
 * This demonstrates how primitives can access methods through wrapper objects.
 *
 * Example: "hello" -> "HELLO"
 */
export function useStringMethod (str) {
  // TODO: Return the result of calling toUpperCase() on str
}

/**
 * Use a number method to format with fixed decimal places
 *
 * Call the toFixed(decimals) method on the input number.
 * Note: toFixed returns a string, not a number!
 *
 * Example: (1.23456, 2) -> "1.23"
 */
export function useNumberMethod (num, decimals) {
  // TODO: Return the result of calling toFixed(decimals) on num
}

/**
 * Check if a value is a primitive (not an object, or null)
 *
 * A value is primitive if:
 * - typeof returns something other than "object" and "function"
 * - OR if it's null (typeof null is "object", but null is primitive)
 *
 * Return true for primitives, false for objects/functions
 */
export function checkPrimitiveType (value) {
  // TODO: Check if value is primitive
  // Hint: typeof value !== 'object' || value === null
  // Also check typeof value !== 'function'
}

/**
 * Access a character in a string by index
 *
 * Use bracket notation [index] to get a character from a string.
 * Strings are array-like and can be accessed by position.
 *
 * Example: ("Hello", 0) -> "H"
 */
export function accessStringCharacter (str, index) {
  // TODO: Return the character at the given index
}

/**
 * Demonstrate that wrapper objects are temporary
 *
 * Call toLowerCase() on the string and return the result.
 * This shows how a temporary wrapper is created, the method is called,
 * and then the wrapper is destroyed (though we can't observe the destruction).
 *
 * Example: "JAVASCRIPT" -> "javascript"
 */
export function demonstrateWrapperBehavior (str) {
  // TODO: Return the result of calling toLowerCase() on str
}

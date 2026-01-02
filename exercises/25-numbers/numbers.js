/**
 * Convert a number to hexadecimal string
 *
 * Use the toString(base) method with base 16 for hexadecimal.
 *
 * Example: 255 -> "ff"
 */
export function convertToHex (num) {
  // TODO: Return num.toString(16)
}

/**
 * Round a number using the specified method
 *
 * Methods: 'floor', 'ceil', 'round', 'trunc'
 * - floor: rounds down
 * - ceil: rounds up
 * - round: rounds to nearest integer
 * - trunc: removes decimal part
 *
 * Example: (3.7, 'floor') -> 3
 */
export function roundNumber (num, method) {
  // TODO: Use Math[method](num) to call the appropriate Math method
  // Example: if method is 'floor', call Math.floor(num)
}

/**
 * Parse a number from a string with units
 *
 * Extract the numeric value from strings like "100px", "12.5em".
 * Use parseFloat to extract the number.
 *
 * Example: "100px" -> 100
 */
export function parsePixelValue (str) {
  // TODO: Use parseFloat(str) to extract the number
}

/**
 * Fix precision issues with decimal addition
 *
 * Add two numbers and round the result to 2 decimal places.
 * Use toFixed(2) and convert back to number with the + operator.
 *
 * Example: (0.1, 0.2) -> 0.3 (not 0.30000000000004)
 */
export function fixPrecision (a, b) {
  // TODO: Calculate a + b, call .toFixed(2), then convert to number with +
}

/**
 * Validate that a value is a finite number
 *
 * Use Number.isFinite() to check if the value is a valid, finite number.
 * Returns true for regular numbers, false for Infinity, NaN, or non-numbers.
 *
 * Example: 100 -> true, Infinity -> false, "text" -> false
 */
export function validateNumber (value) {
  // TODO: Return the result of Number.isFinite(value)
}

/**
 * Generate a random integer between min and max (inclusive)
 *
 * Use Math.random() to generate a random number.
 * Formula: Math.floor(Math.random() * (max - min + 1)) + min
 *
 * Example: (1, 10) -> random integer from 1 to 10
 */
export function generateRandomInRange (min, max) {
  // TODO: Generate random integer between min and max inclusive
}

/**
 * Convert a number to a string in the specified base
 *
 * Use toString(base) to convert to different number systems.
 * Common bases: 2 (binary), 8 (octal), 16 (hex), 36 (max base)
 *
 * Example: (255, 2) -> "11111111"
 */
export function convertToBase (num, base) {
  // TODO: Return num.toString(base)
}

/**
 * Exercise 09 - Comparisons
 *
 * Implement the following functions using JavaScript's comparison operators.
 */

/**
 * Checks if two values are strictly equal (===)
 * @param {*} a - First value
 * @param {*} b - Second value
 * @returns {boolean} True if a and b are strictly equal
 *
 * Example: isEqual(5, 5) -> true
 * Example: isEqual(5, '5') -> false
 */
export function isEqual (a, b) {
  // TODO: Return true if a and b are strictly equal using ===
}

/**
 * Checks if a is greater than b
 * @param {*} a - First value
 * @param {*} b - Second value
 * @returns {boolean} True if a is greater than b
 *
 * Example: isGreater(10, 5) -> true
 * Example: isGreater(3, 7) -> false
 */
export function isGreater (a, b) {
  // TODO: Return true if a is greater than b
}

/**
 * Checks if a is less than or equal to b
 * @param {*} a - First value
 * @param {*} b - Second value
 * @returns {boolean} True if a is less than or equal to b
 *
 * Example: isLessOrEqual(5, 10) -> true
 * Example: isLessOrEqual(5, 5) -> true
 */
export function isLessOrEqual (a, b) {
  // TODO: Return true if a is less than or equal to b
}

/**
 * Compares two strings lexicographically
 * Returns:
 *  - negative number if str1 < str2
 *  - 0 if str1 === str2
 *  - positive number if str1 > str2
 *
 * @param {string} str1 - First string
 * @param {string} str2 - Second string
 * @returns {number} Comparison result
 *
 * Example: compareStrings('apple', 'banana') -> negative number
 * Example: compareStrings('zebra', 'apple') -> positive number
 */
export function compareStrings (str1, str2) {
  // TODO: Compare the strings and return -1, 0, or 1
  // Hint: Use if statements with < and > operators
}

/**
 * Checks if two values are loosely equal using ==
 * Note: This demonstrates loose equality, but strict equality is preferred in practice
 * @param {*} a - First value
 * @param {*} b - Second value
 * @returns {boolean} True if a and b are loosely equal
 *
 * Example: isLooselyEqual(5, '5') -> true
 * Example: isLooselyEqual(0, false) -> true
 */
export function isLooselyEqual (a, b) {
  // TODO: Return true if a and b are loosely equal using ==
  // Note: This is for educational purposes. Use === in real code!
}

/**
 * Checks if x is between min and max (inclusive)
 * @param {number} x - Value to check
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {boolean} True if x is between min and max (inclusive)
 *
 * Example: isBetween(5, 1, 10) -> true
 * Example: isBetween(0, 1, 10) -> false
 */
export function isBetween (x, min, max) {
  // TODO: Check if x is >= min AND x is <= max
  // Hint: Use the && operator with two comparisons
}

/**
 * Checks if value is null or undefined
 * @param {*} value - Value to check
 * @returns {boolean} True if value is null or undefined
 *
 * Example: isNullish(null) -> true
 * Example: isNullish(undefined) -> true
 * Example: isNullish(0) -> false
 */
export function isNullish (value) {
  // TODO: Check if value is null or undefined
  // Hint: Use loose equality (==) with null to check for both
}

/**
 * Compares two values and returns 'greater', 'less', or 'equal'
 * @param {number} a - First value
 * @param {number} b - Second value
 * @returns {string} 'greater' if a > b, 'less' if a < b, 'equal' if a === b
 *
 * Example: compareValues(10, 5) -> 'greater'
 * Example: compareValues(3, 8) -> 'less'
 * Example: compareValues(5, 5) -> 'equal'
 */
export function compareValues (a, b) {
  // TODO: Use if/else if/else with comparison operators
}

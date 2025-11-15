/**
 * Exercise 11 - Logical Operators
 *
 * Implement the following functions using JavaScript's logical operators (||, &&, !).
 */

/**
 * Returns the first truthy value from three values using OR operator
 * @param {*} a - First value
 * @param {*} b - Second value
 * @param {*} c - Third value
 * @returns {*} The first truthy value, or c if all are falsy
 *
 * Example: getFirstTruthy(0, 'hello', 'world') -> 'hello'
 * Example: getFirstTruthy('', null, 'default') -> 'default'
 */
export function getFirstTruthy (a, b, c) {
  // TODO: Chain OR operators to return first truthy value
  // Format: a || b || c
}

/**
 * Returns the last value if all three are truthy, otherwise returns first falsy
 * Uses the AND operator which returns the last value if all are truthy
 * @param {*} a - First value
 * @param {*} b - Second value
 * @param {*} c - Third value
 * @returns {*} The last value if all truthy, otherwise first falsy
 *
 * Example: getLastTruthy(1, 2, 3) -> 3
 * Example: getLastTruthy('hello', 0, 'world') -> 0
 */
export function getLastTruthy (a, b, c) {
  // TODO: Chain AND operators
  // Format: a && b && c
  // Remember: AND returns first falsy or last value if all truthy
}

/**
 * Checks if a user has access (must be logged in AND active)
 * @param {boolean} isLoggedIn - Whether user is logged in
 * @param {boolean} isActive - Whether user account is active
 * @returns {boolean} True if user has access
 *
 * Example: hasAccess(true, true) -> true
 * Example: hasAccess(true, false) -> false
 */
export function hasAccess (isLoggedIn, isActive) {
  // TODO: Use AND operator to check both conditions
}

/**
 * Checks if a person can drive
 * Must have license AND be sober AND be adult (all three must be true)
 * @param {boolean} hasLicense - Has valid driver's license
 * @param {boolean} isSober - Is not under influence
 * @param {boolean} isAdult - Is 18 or older
 * @returns {boolean} True if person can drive
 *
 * Example: canDrive(true, true, true) -> true
 * Example: canDrive(true, false, true) -> false
 */
export function canDrive (hasLicense, isSober, isAdult) {
  // TODO: Use AND operator to check all three conditions
}

/**
 * Returns the boolean negation of a value
 * @param {*} value - Any value
 * @returns {boolean} The negated boolean value
 *
 * Example: negate(true) -> false
 * Example: negate(0) -> true
 * Example: negate('hello') -> false
 */
export function negate (value) {
  // TODO: Use the NOT operator (!) to negate the value
}

/**
 * Returns the value, or defaultValue if value is falsy
 * This is a common pattern for setting default values
 * @param {*} value - The value to check
 * @param {*} defaultValue - The default to use if value is falsy
 * @returns {*} value or defaultValue
 *
 * Example: setDefault('', 'Anonymous') -> 'Anonymous'
 * Example: setDefault('John', 'Anonymous') -> 'John'
 * Example: setDefault(0, 100) -> 100
 */
export function setDefault (value, defaultValue) {
  // TODO: Use OR operator to return value or defaultValue
  // Format: value || defaultValue
}

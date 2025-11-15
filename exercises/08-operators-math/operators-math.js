/**
 * Exercise 08 - Basic Operators, Maths
 *
 * Implement the following functions using JavaScript's arithmetic operators.
 */

/**
 * Returns the sum of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 *
 * Example: add(2, 3) -> 5
 */
export function add (a, b) {
  // TODO: Return the sum of a and b
}

/**
 * Returns the difference of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The difference (a - b)
 *
 * Example: subtract(10, 3) -> 7
 */
export function subtract (a, b) {
  // TODO: Return the difference of a and b
}

/**
 * Returns the product of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The product of a and b
 *
 * Example: multiply(4, 5) -> 20
 */
export function multiply (a, b) {
  // TODO: Return the product of a and b
}

/**
 * Returns the quotient of two numbers
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} The quotient (a / b)
 *
 * Example: divide(10, 2) -> 5
 */
export function divide (a, b) {
  // TODO: Return the quotient of a divided by b
}

/**
 * Returns the remainder of dividing a by b
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} The remainder
 *
 * Example: remainder(10, 3) -> 1
 */
export function remainder (a, b) {
  // TODO: Return the remainder using the % operator
}

/**
 * Returns a raised to the power of b
 * @param {number} a - Base
 * @param {number} b - Exponent
 * @returns {number} a to the power of b
 *
 * Example: power(2, 3) -> 8
 */
export function power (a, b) {
  // TODO: Return a raised to the power of b using the ** operator
}

/**
 * Concatenates two strings with a space between them
 * @param {string} str1 - First string
 * @param {string} str2 - Second string
 * @returns {string} The concatenated string
 *
 * Example: concatenate("Hello", "World") -> "Hello World"
 */
export function concatenate (str1, str2) {
  // TODO: Concatenate str1 and str2 with a space between them
}

/**
 * Converts a value to a number using unary plus
 * @param {*} value - Value to convert
 * @returns {number} The numeric value
 *
 * Example: convertToNumber("123") -> 123
 * Example: convertToNumber(true) -> 1
 */
export function convertToNumber (value) {
  // TODO: Use unary plus (+) to convert value to a number
}

/**
 * Increments the value property of an object using the prefix increment operator
 * Returns the new value after incrementing
 * @param {Object} obj - Object with a value property
 * @returns {number} The new value after incrementing
 *
 * Example: incrementByRef({value: 5}) -> 6 (and obj.value is now 6)
 */
export function incrementByRef (obj) {
  // TODO: Use prefix increment (++obj.value) and return the new value
}

/**
 * Adds two numbers using the compound assignment operator
 * Modifies the first object's value property
 * @param {Object} obj - Object with a value property
 * @param {number} num - Number to add
 * @returns {number} The new value after adding
 *
 * Example: addAndAssign({value: 10}, 5) -> 15 (and obj.value is now 15)
 */
export function addAndAssign (obj, num) {
  // TODO: Use += to add num to obj.value and return the new value
}

/**
 * Converts string numbers to actual numbers and returns their sum
 * Uses unary plus to convert strings to numbers
 * @param {string} str1 - First number as string
 * @param {string} str2 - Second number as string
 * @returns {number} The sum of both numbers
 *
 * Example: sumStringNumbers('3', '5') -> 8
 * Example: sumStringNumbers('10', '20') -> 30
 */
export function sumStringNumbers (str1, str2) {
  // TODO: Use unary plus (+) to convert both strings to numbers and return their sum
}

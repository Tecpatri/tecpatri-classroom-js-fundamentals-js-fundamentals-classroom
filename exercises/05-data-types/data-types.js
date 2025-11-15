/**
 * Identify the type of a value using typeof operator
 *
 * Use the typeof operator to return the type of the input value as a string.
 * Note: typeof null returns "object" (this is a known JavaScript quirk)
 */
export function identifyType (value) {
  // TODO: Return the result of typeof value
}

/**
 * Create a greeting string using template literals
 *
 * Use template literals (backticks) to create a string that says:
 * "Hello, [name]! You are [age] years old."
 *
 * Example: name="Alice", age=25 -> "Hello, Alice! You are 25 years old."
 */
export function createTemplateString (name, age) {
  // TODO: Create and return a template literal string with name and age
}

/**
 * Check if a value is Infinity or NaN
 *
 * Return an object with two properties:
 * - isInfinity: true if the value is Infinity or -Infinity
 * - isNaN: true if the value is NaN
 *
 * Hint: Use Number.isFinite() and Number.isNaN()
 */
export function checkSpecialNumbers (value) {
  // TODO: Check if value is Infinity (use !Number.isFinite() and typeof === 'number')
  // TODO: Check if value is NaN (use Number.isNaN())
  // TODO: Return { isInfinity: ..., isNaN: ... }
}

/**
 * Demonstrate all 8 JavaScript data types
 *
 * Return an object with examples of all 8 data types:
 * {
 *   number: a number value,
 *   bigint: a BigInt value (use 123n),
 *   string: a string value,
 *   boolean: a boolean value,
 *   nullValue: null,
 *   undefinedValue: undefined,
 *   symbol: a Symbol,
 *   object: an object
 * }
 */
export function demonstrateAllTypes () {
  // TODO: Create and return an object with all 8 data types
  // Use Symbol('id') for the symbol type
}

/**
 * Differentiate between null and undefined
 *
 * Return an object showing the differences:
 * {
 *   nullType: typeof null (should be "object"),
 *   undefinedType: typeof undefined (should be "undefined"),
 *   nullEqualsUndefined: null == undefined (loose equality),
 *   nullStrictEqualsUndefined: null === undefined (strict equality)
 * }
 */
export function differentiateNullUndefined () {
  // TODO: Return an object with the four properties described above
}

/**
 * Work with template literals and expressions
 *
 * Given two numbers, create a template literal that says:
 * "The sum of [a] and [b] is [sum]."
 *
 * Calculate the sum inside the template literal using ${a + b}
 */
export function templateWithExpression (a, b) {
  // TODO: Return a template literal with the sum calculated inside ${}
}

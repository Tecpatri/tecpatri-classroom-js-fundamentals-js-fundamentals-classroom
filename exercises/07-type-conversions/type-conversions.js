/**
 * Convert a value to a string using String()
 *
 * Return an object with:
 * - result: the converted string
 * - type: typeof result (should be "string")
 */
export function convertToString (value) {
  // TODO: Convert value to string using String()
  // TODO: Return { result: converted value, type: typeof converted value }
}

/**
 * Convert a value to a number using Number()
 *
 * Return the numeric conversion of the value.
 * Remember the edge cases:
 * - undefined -> NaN
 * - null -> 0
 * - "" (empty string) -> 0
 * - "   " (whitespace) -> 0
 * - "123abc" -> NaN
 */
export function convertToNumber (value) {
  // TODO: Convert value to number using Number()
  // TODO: Return the result
}

/**
 * Convert a value to a boolean using Boolean()
 *
 * Return the boolean conversion of the value.
 * Remember falsy values: 0, "", null, undefined, NaN
 * Everything else is truthy!
 */
export function convertToBoolean (value) {
  // TODO: Convert value to boolean using Boolean()
  // TODO: Return the result
}

/**
 * Handle conversion edge cases
 *
 * Test three conversions and return an object with results:
 * {
 *   nullToNumber: Number(null),        // Should be 0
 *   undefinedToNumber: Number(undefined), // Should be NaN
 *   emptyStringToNumber: Number("")    // Should be 0
 * }
 */
export function handleConversionEdgeCases () {
  // TODO: Return an object with the three conversions above
}

/**
 * Demonstrate implicit (automatic) type conversion
 *
 * Return an object showing implicit conversions:
 * {
 *   stringPlusNumber: "5" + 3,        // String concatenation: "53"
 *   stringMinusNumber: "5" - 3,       // Numeric conversion: 2
 *   booleanToNumber: true + 1,        // true becomes 1, result: 2
 *   unaryPlus: +"42"                  // Converts to number: 42
 * }
 */
export function demonstrateImplicitConversion () {
  // TODO: Return an object with the four implicit conversions above
}

/**
 * Identify falsy values
 *
 * Given a value, return true if it's falsy, false if it's truthy.
 * Falsy values: 0, "", null, undefined, NaN, false
 *
 * Use Boolean conversion: !Boolean(value) or simply !value
 */
export function isFalsy (value) {
  // TODO: Return true if value is falsy, false if truthy
  // Hint: Use !value or !Boolean(value)
}

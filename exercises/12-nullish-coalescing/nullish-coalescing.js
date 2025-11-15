/**
 * Returns the value if it's not null or undefined, otherwise returns the default value.
 * This demonstrates the basic usage of the nullish coalescing operator (??).
 *
 * @param {*} value - The value to check
 * @param {*} defaultValue - The default value to return if value is null/undefined
 * @returns {*} The value or the default value
 *
 * Example:
 *   getValueOrDefault(0, 10) => 0
 *   getValueOrDefault(null, 10) => 10
 *   getValueOrDefault(undefined, 10) => 10
 */
export function getValueOrDefault (value, defaultValue) {
  // TODO: Use the ?? operator to return value if it's not null/undefined,
  // otherwise return defaultValue
}

/**
 * Formats a user's name. Returns the user's name property, or 'Guest' if the name
 * is null or undefined. This is a common use case for API responses.
 *
 * @param {Object} user - A user object with a name property
 * @returns {string} The user's name or 'Guest'
 *
 * Example:
 *   formatUserName({ name: 'Alice' }) => 'Alice'
 *   formatUserName({ name: null }) => 'Guest'
 *   formatUserName({ name: undefined }) => 'Guest'
 *   formatUserName({ name: '' }) => ''  (empty string is valid!)
 */
export function formatUserName (user) {
  // TODO: Use the ?? operator to return user.name if it's not null/undefined,
  // otherwise return 'Guest'
}

/**
 * Gets a configuration value by key, returning a default value if the config value
 * is null or undefined. This is useful when 0, false, or '' are valid config values.
 *
 * @param {Object} config - A configuration object
 * @param {string} key - The key to look up in the config
 * @param {*} defaultValue - The default value if config[key] is null/undefined
 * @returns {*} The config value or the default value
 *
 * Example:
 *   getConfigValue({ volume: 0 }, 'volume', 50) => 0
 *   getConfigValue({ volume: null }, 'volume', 50) => 50
 *   getConfigValue({}, 'volume', 50) => 50
 */
export function getConfigValue (config, key, defaultValue) {
  // TODO: Use the ?? operator to return config[key] if it's not null/undefined,
  // otherwise return defaultValue
}

/**
 * Returns the first value that is not null or undefined.
 * This demonstrates chaining the ?? operator.
 *
 * @param {*} a - First value to check
 * @param {*} b - Second value to check
 * @param {*} c - Third value to check
 * @returns {*} The first defined value
 *
 * Example:
 *   firstDefinedValue(null, undefined, 42) => 42
 *   firstDefinedValue(null, 0, 42) => 0
 *   firstDefinedValue(false, null, true) => false
 */
export function firstDefinedValue (a, b, c) {
  // TODO: Chain the ?? operator to return the first value that is not null/undefined
  // Hint: a ?? b ?? c
}

/**
 * Compares the behavior of ?? and || operators with the same value.
 * Returns an object showing the difference between the two operators.
 *
 * @param {*} value - The value to test
 * @returns {Object} An object with 'withNullish' and 'withOr' properties
 *
 * Example:
 *   compareOperators(0) => { withNullish: 0, withOr: 'default' }
 *   compareOperators(null) => { withNullish: 'default', withOr: 'default' }
 *   compareOperators('') => { withNullish: '', withOr: 'default' }
 */
export function compareOperators (value) {
  // TODO: Return an object with two properties:
  // - withNullish: value ?? 'default'
  // - withOr: value || 'default'
  // This shows how ?? treats 0, false, '' as valid values, while || treats them as falsy
}

/**
 * Get all property names from an object
 *
 * Use Object.keys() to get an array of all property names (keys)
 * from the given object.
 */
export function getObjectKeys (obj) {
  // TODO: Use Object.keys() to get an array of all keys
  // TODO: Return the array of keys
}

/**
 * Get all property values from an object
 *
 * Use Object.values() to get an array of all property values
 * from the given object.
 */
export function getObjectValues (obj) {
  // TODO: Use Object.values() to get an array of all values
  // TODO: Return the array of values
}

/**
 * Get all key-value pairs from an object
 *
 * Use Object.entries() to get an array of [key, value] pairs
 * from the given object.
 */
export function getObjectEntries (obj) {
  // TODO: Use Object.entries() to get an array of [key, value] pairs
  // TODO: Return the array of entries
}

/**
 * Count properties in an object
 *
 * Use Object.keys() to count how many properties an object has.
 * Return the count.
 */
export function countProperties (obj) {
  // TODO: Get the array of keys using Object.keys()
  // TODO: Return the length of that array
}

/**
 * Sum all numeric values in an object
 *
 * Given an object with numeric values, sum them all.
 * Use Object.values() to get the values, then sum them.
 *
 * Example: { a: 10, b: 20, c: 30 } → 60
 */
export function sumObjectValues (obj) {
  // TODO: Get all values using Object.values()
  // TODO: Use reduce or a loop to sum all values
  // TODO: Return the sum
}

/**
 * Check if object has a specific key
 *
 * Check if the given key exists in the object.
 * Use Object.keys() and array methods to check.
 */
export function hasKey (obj, key) {
  // TODO: Get all keys using Object.keys()
  // TODO: Check if the key exists in the array (use includes())
  // TODO: Return true or false
}

/**
 * Convert object to Map
 *
 * Use Object.entries() to convert a plain object to a Map.
 * Object.entries() gives you the [key, value] pairs that Map constructor accepts!
 */
export function objectToMap (obj) {
  // TODO: Get entries using Object.entries()
  // TODO: Create a new Map from the entries
  // TODO: Return the Map
}

/**
 * Convert Map to object
 *
 * Use Object.fromEntries() to convert a Map to a plain object.
 * Maps are already iterable as [key, value] pairs, perfect for fromEntries!
 */
export function mapToObject (map) {
  // TODO: Use Object.fromEntries() with the map
  // TODO: Return the resulting object
}

/**
 * Double all numeric values in an object
 *
 * Given an object with numeric values, return a NEW object
 * with all values doubled.
 *
 * Use the transformation pattern:
 * 1. Object.entries() to get [key, value] pairs
 * 2. Array.map() to transform each pair
 * 3. Object.fromEntries() to convert back to object
 */
export function doubleValues (obj) {
  // TODO: Get entries using Object.entries()
  // TODO: Use map() to transform each [key, value] to [key, value * 2]
  // TODO: Use Object.fromEntries() to convert back to object
  // TODO: Return the new object
}

/**
 * Filter object by value
 *
 * Given an object and a predicate function,
 * return a NEW object containing only entries where
 * the predicate returns true for the value.
 *
 * Example: filterByValue({a: 10, b: 20, c: 5}, val => val > 10)
 *          → {b: 20}
 */
export function filterByValue (obj, predicateFn) {
  // TODO: Get entries using Object.entries()
  // TODO: Use filter() to keep only entries where predicateFn(value) is true
  // TODO: Use Object.fromEntries() to convert back to object
  // TODO: Return the new object
}

/**
 * Swap keys and values
 *
 * Create a new object where keys become values and values become keys.
 *
 * Example: { a: '1', b: '2' } → { '1': 'a', '2': 'b' }
 *
 * Use Object.entries() and map to swap each [key, value] to [value, key]
 */
export function swapKeysAndValues (obj) {
  // TODO: Get entries using Object.entries()
  // TODO: Use map() to transform each [key, value] to [value, key]
  // TODO: Use Object.fromEntries() to convert back to object
  // TODO: Return the new object
}

/**
 * Merge two objects
 *
 * Combine two objects into one new object.
 * If both have the same key, the second object's value wins.
 *
 * Use Object.entries() and spread operator or Object.fromEntries()
 */
export function mergeObjects (obj1, obj2) {
  // TODO: You can use spread operator: { ...obj1, ...obj2 }
  // TODO: Or get entries from both and combine them
  // TODO: Return the merged object
}

/**
 * Get keys with specific value type
 *
 * Return an array of keys whose values are of the specified type.
 *
 * Example: getKeysByType({ a: 1, b: 'hello', c: 2 }, 'number') → ['a', 'c']
 *
 * Use Object.entries() to get [key, value] pairs,
 * filter by checking typeof value === type,
 * then map to get just the keys.
 */
export function getKeysByType (obj, type) {
  // TODO: Get entries using Object.entries()
  // TODO: Filter entries where typeof value === type
  // TODO: Map the filtered entries to get just the keys
  // TODO: Return the array of keys
}

/**
 * Create object from arrays
 *
 * Given an array of keys and an array of values,
 * create an object by zipping them together.
 *
 * Example: (['a', 'b'], [1, 2]) → { a: 1, b: 2 }
 *
 * Create [key, value] pairs by mapping over keys,
 * then use Object.fromEntries() to create the object.
 */
export function createObjectFromArrays (keys, values) {
  // TODO: Map over keys with index: keys.map((key, i) => [key, values[i]])
  // TODO: Use Object.fromEntries() to convert pairs to object
  // TODO: Return the object
}

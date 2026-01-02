/**
 * Extract array elements using destructuring
 *
 * Given an array of numbers, use array destructuring to extract
 * the first and second elements.
 *
 * Return an object: { first, second }
 */
export function getFirstTwo (arr) {
  // TODO: Use array destructuring: const [first, second] = arr
  // TODO: Return { first, second }
}

/**
 * Skip elements in array destructuring
 *
 * Given an array, extract the first and third elements,
 * skipping the second one.
 *
 * Use commas to skip elements: [a, , c]
 */
export function getFirstAndThird (arr) {
  // TODO: Use destructuring with a comma to skip: [first, , third]
  // TODO: Return { first, third }
}

/**
 * Use rest operator in array destructuring
 *
 * Given an array, extract the first element and collect
 * all remaining elements in a separate array.
 *
 * Use the rest operator: [first, ...rest]
 */
export function getFirstAndRest (arr) {
  // TODO: Use destructuring with rest: [first, ...rest] = arr
  // TODO: Return { first, rest }
}

/**
 * Array destructuring with default values
 *
 * Extract two elements from array with default values.
 * If elements don't exist, use 'Unknown' and 0 as defaults.
 */
export function getWithDefaults (arr) {
  // TODO: Use destructuring with defaults: [name = 'Unknown', age = 0] = arr
  // TODO: Return { name, age }
}

/**
 * Object destructuring - extract properties
 *
 * Given an object with name and age properties,
 * extract them using object destructuring.
 */
export function extractNameAndAge (person) {
  // TODO: Use object destructuring: const { name, age } = person
  // TODO: Return { name, age }
}

/**
 * Object destructuring with renaming
 *
 * Extract 'width' and 'height' properties but rename them
 * to 'w' and 'h' in the destructuring assignment.
 *
 * Syntax: { oldName: newName }
 */
export function renameProperties (obj) {
  // TODO: Use destructuring with renaming: { width: w, height: h } = obj
  // TODO: Return { w, h }
}

/**
 * Object destructuring with default values
 *
 * Extract 'title' and 'width' properties with defaults.
 * Default title to 'Untitled' and width to 100 if not present.
 */
export function getWithObjectDefaults (obj) {
  // TODO: Use destructuring with defaults: { title = 'Untitled', width = 100 }
  // TODO: Return { title, width }
}

/**
 * Object destructuring with rest
 *
 * Extract 'title' property separately and collect all
 * remaining properties in a 'rest' object.
 */
export function extractTitleAndRest (obj) {
  // TODO: Use destructuring with rest: { title, ...rest } = obj
  // TODO: Return { title, rest }
}

/**
 * Nested object destructuring
 *
 * Given a user object with an address object inside,
 * extract the city from the nested address.
 *
 * Example: { name: 'Alice', address: { city: 'NYC', zip: '10001' } }
 */
export function extractCity (user) {
  // TODO: Use nested destructuring: { address: { city } } = user
  // TODO: Return city
}

/**
 * Nested array destructuring
 *
 * Given a 2D array (array of arrays),
 * extract the first element of the first sub-array
 * and the second element of the second sub-array.
 *
 * Example: [[1, 2], [3, 4]] → first = 1, second = 4
 */
export function extractFromNested (matrix) {
  // TODO: Use nested array destructuring: [[first], [, second]] = matrix
  // TODO: Return { first, second }
}

/**
 * Swap variables using destructuring
 *
 * Given two variables a and b, swap their values
 * using array destructuring.
 */
export function swapValues (a, b) {
  // TODO: Swap using destructuring: [a, b] = [b, a]
  // TODO: Return { a, b }
}

/**
 * Function parameter destructuring
 *
 * Create a function that accepts an object with name and age,
 * but destructures them in the parameter list.
 *
 * This function is already defined, you just need to add
 * destructuring to its parameters.
 */
export function greetUser ({ name, age }) {
  // Function body is provided - parameters are already destructured!
  return `Hello ${name}, you are ${age} years old`
}

/**
 * Function parameter destructuring with defaults
 *
 * Create a function that accepts an options object with
 * title and width properties, with defaults.
 *
 * Default title to 'Menu' and width to 100.
 */
export function createMenu ({ title = 'Menu', width = 100 } = {}) {
  // Function body is provided - parameters are already destructured!
  // Note: = {} at the end handles the case when no argument is passed
  return { title, width }
}

/**
 * Destructure function return value
 *
 * Call the provided getCoordinates() function and
 * destructure its return value to get x and y.
 *
 * getCoordinates returns an array: [x, y]
 */
export function processCoordinates (getCoordinates) {
  // TODO: Call getCoordinates() and destructure result: const [x, y] = getCoordinates()
  // TODO: Return { x, y }
}

/**
 * Complex destructuring example
 *
 * Given a complex object representing a user with nested data,
 * extract multiple pieces of information using destructuring.
 *
 * Object shape:
 * {
 *   name: 'Alice',
 *   age: 25,
 *   address: {
 *     city: 'NYC',
 *     country: 'USA'
 *   },
 *   hobbies: ['reading', 'coding', 'gaming']
 * }
 *
 * Extract: name, city, firstHobby, and collect otherHobbies
 */
export function extractUserData (user) {
  // TODO: Use complex destructuring to extract all required data
  // TODO: Destructure name from top level
  // TODO: Destructure city from nested address
  // TODO: Destructure first hobby and rest from hobbies array
  // TODO: Return { name, city, firstHobby, otherHobbies }
}

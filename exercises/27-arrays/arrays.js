/**
 * Create an array from the given elements
 *
 * Take any number of arguments and return them as an array.
 *
 * Example: (1, 2, 3) -> [1, 2, 3]
 */
export function createArray (...elements) {
  // TODO: Return an array containing all elements
  // Hint: elements is already an array due to rest parameter syntax
}

/**
 * Access an array element by index using the at() method
 *
 * The at() method supports negative indexes.
 * Negative indexes count from the end: -1 is the last element.
 *
 * Example: ([1, 2, 3], -1) -> 3
 */
export function accessElement (arr, index) {
  // TODO: Return arr.at(index)
}

/**
 * Add elements to the end of an array
 *
 * Use push() to add elements. The push method modifies the original array
 * and returns the new length.
 *
 * Example: ([1, 2], 3, 4) -> [1, 2, 3, 4]
 */
export function addToEnd (arr, ...elements) {
  // TODO: Use arr.push() with the spread operator to add all elements
  // Return the modified array
}

/**
 * Remove and return the last element from an array
 *
 * Use pop() to remove the last element. This modifies the original array.
 *
 * Example: [1, 2, 3] -> returns 3, array becomes [1, 2]
 */
export function removeFromEnd (arr) {
  // TODO: Return arr.pop()
}

/**
 * Add elements to the beginning of an array
 *
 * Use unshift() to add elements at the start. This modifies the original array.
 * Note: This is slower than push() as it requires renumbering all elements.
 *
 * Example: ([3, 4], 1, 2) -> [1, 2, 3, 4]
 */
export function addToStart (arr, ...elements) {
  // TODO: Use arr.unshift() with the spread operator to add all elements
  // Return the modified array
}

/**
 * Remove and return the first element from an array
 *
 * Use shift() to remove the first element. This modifies the original array.
 * Note: This is slower than pop() as it requires renumbering all elements.
 *
 * Example: [1, 2, 3] -> returns 1, array becomes [2, 3]
 */
export function removeFromStart (arr) {
  // TODO: Return arr.shift()
}

/**
 * Get the length of an array
 *
 * The length property tells you how many elements are in the array.
 *
 * Example: [1, 2, 3] -> 3
 */
export function getArrayLength (arr) {
  // TODO: Return arr.length
}

/**
 * Iterate through an array and return all elements in uppercase
 *
 * Use a for..of loop to iterate through the array.
 * Convert each string element to uppercase and collect in a new array.
 *
 * Example: ['apple', 'orange'] -> ['APPLE', 'ORANGE']
 */
export function iterateArray (arr) {
  // TODO: Create empty result array
  // TODO: Loop through arr using for..of
  // TODO: Convert each element to uppercase and add to result
  // TODO: Return result array
}

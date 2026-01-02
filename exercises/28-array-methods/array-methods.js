/**
 * Remove elements from an array using splice
 *
 * Use splice(start, deleteCount) to remove elements.
 * splice modifies the original array.
 *
 * Example: ([1, 2, 3, 4], 1, 2) -> [1, 4] (removed 2 elements starting at index 1)
 */
export function removeElements (arr, start, deleteCount) {
  // TODO: Use arr.splice(start, deleteCount)
  // TODO: Return the modified array
}

/**
 * Copy a portion of an array using slice
 *
 * Use slice(start, end) to copy elements from start to end (not including end).
 * slice does NOT modify the original array.
 *
 * Example: ([1, 2, 3, 4], 1, 3) -> [2, 3]
 */
export function copyPortion (arr, start, end) {
  // TODO: Return arr.slice(start, end)
}

/**
 * Merge multiple arrays using concat
 *
 * Use concat() to merge the input arrays into one.
 *
 * Example: ([1, 2], [3, 4], [5, 6]) -> [1, 2, 3, 4, 5, 6]
 */
export function mergeArrays (...arrays) {
  // TODO: Return the first array concatenated with all other arrays
  // Hint: arrays[0].concat(...arrays.slice(1))
}

/**
 * Find an element in an array that matches a condition
 *
 * Use find() with a callback function that returns true for matching element.
 *
 * Example: ([1, 2, 3, 4], x => x > 2) -> 3
 */
export function findElement (arr, callback) {
  // TODO: Return arr.find(callback)
}

/**
 * Filter an array to get all elements matching a condition
 *
 * Use filter() with a callback function that returns true for matching elements.
 *
 * Example: ([1, 2, 3, 4], x => x > 2) -> [3, 4]
 */
export function filterElements (arr, callback) {
  // TODO: Return arr.filter(callback)
}

/**
 * Transform each element in an array using map
 *
 * Use map() with a callback function that transforms each element.
 *
 * Example: ([1, 2, 3], x => x * 2) -> [2, 4, 6]
 */
export function transformArray (arr, callback) {
  // TODO: Return arr.map(callback)
}

/**
 * Sort an array of numbers in ascending order
 *
 * Use sort() with a compare function (a, b) => a - b for numeric sorting.
 * Note: sort() modifies the original array.
 *
 * Example: [3, 1, 4, 1, 5] -> [1, 1, 3, 4, 5]
 */
export function sortNumbers (arr) {
  // TODO: Use arr.sort((a, b) => a - b)
  // TODO: Return the sorted array
}

/**
 * Convert an array to a string with a separator
 *
 * Use join(separator) to combine array elements into a string.
 *
 * Example: (['a', 'b', 'c'], '-') -> 'a-b-c'
 */
export function convertToString (arr, separator) {
  // TODO: Return arr.join(separator)
}

/**
 * Calculate the sum of all numbers in an array using reduce
 *
 * Use reduce() to accumulate the sum.
 * reduce((accumulator, current) => accumulator + current, initialValue)
 *
 * Example: [1, 2, 3, 4] -> 10
 */
export function sumArray (arr) {
  // TODO: Return arr.reduce((sum, current) => sum + current, 0)
}

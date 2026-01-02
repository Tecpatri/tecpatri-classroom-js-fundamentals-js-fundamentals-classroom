/**
 * Create an iterable range object
 *
 * Create an object that represents a range from 'from' to 'to'.
 * The object should be iterable and work with for..of loops.
 *
 * Example:
 * const range = createRange(1, 5)
 * for (let num of range) {
 *   console.log(num) // 1, 2, 3, 4, 5
 * }
 *
 * To make an object iterable:
 * 1. Add a method with the key Symbol.iterator
 * 2. This method should return an object with a next() method
 * 3. The next() method should return {done: boolean, value: any}
 */
export function createRange (from, to) {
  // TODO: Return an object with 'from' and 'to' properties
  // TODO: Add a [Symbol.iterator]() method that returns an iterator
  // TODO: The iterator should have a next() method
  // TODO: next() should return {done: false, value: current} until reaching 'to'
  // TODO: When done, return {done: true}
}

/**
 * Check if an object is iterable
 *
 * An object is iterable if it has a Symbol.iterator method.
 * Return true if the object is iterable, false otherwise.
 */
export function isIterable (obj) {
  // TODO: Check if obj is not null/undefined
  // TODO: Check if obj has a Symbol.iterator method
  // TODO: Return true if iterable, false otherwise
}

/**
 * Convert an iterable to an array
 *
 * Use Array.from() to convert any iterable (or array-like) to a real array.
 * This is useful because iterables don't have array methods like map, filter, etc.
 */
export function iterableToArray (iterable) {
  // TODO: Use Array.from() to convert the iterable to an array
  // TODO: Return the resulting array
}

/**
 * Get characters from a string using iteration
 *
 * Strings are iterable! Use a for..of loop to iterate through
 * each character and collect them in an array.
 */
export function getCharacters (str) {
  // TODO: Create an empty array to store characters
  // TODO: Use for..of to iterate through each character in str
  // TODO: Push each character to the array
  // TODO: Return the array
}

/**
 * Create a custom iterator for Fibonacci sequence
 *
 * Create an object that generates Fibonacci numbers up to a maximum value.
 * The Fibonacci sequence: 1, 1, 2, 3, 5, 8, 13, 21, ...
 * Each number is the sum of the previous two.
 *
 * Example:
 * const fib = createFibonacci(10)
 * for (let num of fib) {
 *   console.log(num) // 1, 1, 2, 3, 5, 8
 * }
 */
export function createFibonacci (max) {
  // TODO: Return an object with a [Symbol.iterator]() method
  // TODO: The iterator should track two previous values (start with 0 and 1)
  // TODO: Generate Fibonacci numbers: next = prev1 + prev2
  // TODO: Stop when the next number would exceed max
  // TODO: Return {done: false, value: current} or {done: true} when finished
}

/**
 * Check if an object is array-like
 *
 * An array-like object has indexed elements and a length property,
 * but may not be iterable (no Symbol.iterator).
 *
 * Example array-like: { 0: 'a', 1: 'b', length: 2 }
 */
export function isArrayLike (obj) {
  // TODO: Check if obj is not null/undefined and is an object
  // TODO: Check if obj has a 'length' property that is a number
  // TODO: Check if length is >= 0
  // TODO: Return true if array-like, false otherwise
}

/**
 * Sum all numbers from an iterable
 *
 * Use for..of to iterate through an iterable and sum all numbers.
 * This demonstrates that for..of works with any iterable.
 */
export function sumIterable (iterable) {
  // TODO: Initialize sum to 0
  // TODO: Use for..of to iterate through each value in iterable
  // TODO: Add each value to sum
  // TODO: Return the total sum
}

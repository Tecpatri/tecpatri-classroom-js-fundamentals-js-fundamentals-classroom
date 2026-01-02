# 29 – Iterables

Learn about iterables in JavaScript and how to make custom objects work with `for..of` loops.

## Learning Objectives

- Understand what makes an object iterable
- Implement the Symbol.iterator protocol
- Create custom iterators with the next() method
- Distinguish between iterables and array-likes
- Use Array.from() to convert iterables to arrays

## Key Concepts

### What Are Iterables?

Iterables are objects that can be used in `for..of` loops. Arrays, strings, Maps, and Sets are all iterable by default.

```javascript
// Arrays are iterable
for (let num of [1, 2, 3]) {
  console.log(num) // 1, 2, 3
}

// Strings are iterable
for (let char of "abc") {
  console.log(char) // 'a', 'b', 'c'
}

// Plain objects are NOT iterable
for (let key of {a: 1}) {
  // Error! Objects are not iterable
}
```

### Symbol.iterator Protocol

To make an object iterable, you must add a method with the key `Symbol.iterator`. This method should return an **iterator object** with a `next()` method.

```javascript
const range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,

      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ }
        } else {
          return { done: true }
        }
      }
    }
  }
}

for (let num of range) {
  console.log(num) // 1, 2, 3, 4, 5
}
```

### The Iterator Protocol

An iterator must have a `next()` method that returns an object with:
- `done` (boolean): `true` when iteration is complete, `false` otherwise
- `value` (any): the current value (ignored when done is true)

```javascript
const iterator = range[Symbol.iterator]()

console.log(iterator.next()) // { done: false, value: 1 }
console.log(iterator.next()) // { done: false, value: 2 }
// ...
console.log(iterator.next()) // { done: true }
```

### Iterables vs Array-likes

These are two different concepts:

- **Iterables**: Have a `Symbol.iterator` method, work with `for..of`
- **Array-likes**: Have numeric indexes and a `length` property

```javascript
// Array-like but not iterable
const arrayLike = {
  0: 'Hello',
  1: 'World',
  length: 2
}

// Can't use for..of (not iterable)
// for (let item of arrayLike) {} // Error!

// But can access by index
console.log(arrayLike[0]) // 'Hello'
console.log(arrayLike.length) // 2

// Strings are both iterable AND array-like
const str = 'Hi'
console.log(str[0]) // 'H' (array-like)
for (let char of str) {} // Works! (iterable)
```

### Array.from()

`Array.from()` converts iterables and array-likes into real arrays:

```javascript
// Convert array-like to array
const arrayLike = { 0: 'a', 1: 'b', length: 2 }
const arr = Array.from(arrayLike)
console.log(arr) // ['a', 'b']

// Now we can use array methods
arr.push('c')
console.log(arr) // ['a', 'b', 'c']

// Works with iterables too
const range = createRange(1, 3)
const numbers = Array.from(range)
console.log(numbers) // [1, 2, 3]
```

### Spread Operator with Iterables

The spread operator `...` works with any iterable:

```javascript
const range = createRange(1, 5)
const arr = [...range]
console.log(arr) // [1, 2, 3, 4, 5]

// Combine iterables
const str = 'Hi'
console.log([...str]) // ['H', 'i']
```

## Tasks

Complete the functions in `iterables.js`:

1. **createRange**: Create a custom iterable range object
   - Implement Symbol.iterator to make the object work with for..of
   - Return an iterator with a next() method
   - Generate numbers from 'from' to 'to'

2. **isIterable**: Check if an object is iterable
   - Test if the object has a Symbol.iterator method
   - Handle null/undefined safely

3. **iterableToArray**: Convert any iterable to an array
   - Use Array.from() to perform the conversion
   - Works with both iterables and array-likes

4. **getCharacters**: Extract characters from a string using iteration
   - Use for..of to iterate through a string
   - Collect each character in an array

5. **createFibonacci**: Create an iterator for Fibonacci sequence
   - Generate Fibonacci numbers: 1, 1, 2, 3, 5, 8, 13...
   - Stop when the next number would exceed max
   - Each number is the sum of the previous two

6. **isArrayLike**: Check if an object is array-like
   - Must have a numeric length property
   - May or may not be iterable

7. **sumIterable**: Sum all numbers from an iterable
   - Use for..of to iterate through values
   - Works with any iterable (arrays, ranges, etc.)

## Run Tests

Test your solutions:

```bash
npm test exercises/29-iterables
```

## Resources

- [JavaScript.info - Iterables](https://javascript.info/iterable)
- [MDN - Iteration protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- [MDN - Symbol.iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)
- [MDN - Array.from()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

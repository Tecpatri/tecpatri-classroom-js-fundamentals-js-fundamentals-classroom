# 27 – Arrays

Learn about JavaScript arrays - ordered collections for storing sequential data with methods for adding, removing, and accessing elements.

## Learning Objectives

- Create and work with arrays
- Add and remove elements from arrays
- Access array elements including negative indexes
- Iterate over arrays properly
- Understand array references and copying

## Key Concepts

### Array Declaration

Two ways to create arrays:
```javascript
let arr = [];                    // Preferred
let arr2 = new Array();          // Less common
let fruits = ['Apple', 'Orange', 'Plum'];
```

### Accessing Elements

Use bracket notation and the modern `at()` method:
```javascript
let fruits = ['Apple', 'Orange', 'Plum'];

fruits[0];      // 'Apple'
fruits[1];      // 'Orange'
fruits[2];      // 'Plum'

// at() method supports negative indexes
fruits.at(0);   // 'Apple'
fruits.at(-1);  // 'Plum' (last element)
fruits.at(-2);  // 'Orange' (second from last)

// Old way for last element
fruits[fruits.length - 1]; // 'Plum'
```

### Adding and Removing at End (Fast)

`push` and `pop` are efficient operations:
```javascript
let fruits = ['Apple', 'Orange'];

fruits.push('Pear');         // ['Apple', 'Orange', 'Pear']
let last = fruits.pop();     // 'Pear', fruits is now ['Apple', 'Orange']
```

### Adding and Removing at Beginning (Slow)

`shift` and `unshift` require renumbering all elements:
```javascript
let fruits = ['Orange', 'Pear'];

fruits.unshift('Apple');     // ['Apple', 'Orange', 'Pear']
let first = fruits.shift();  // 'Apple', fruits is now ['Orange', 'Pear']
```

### Iteration

**Preferred methods**:
```javascript
let fruits = ['Apple', 'Orange', 'Pear'];

// for loop - most flexible
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for..of - cleanest for values
for (let fruit of fruits) {
  console.log(fruit);
}
```

**Avoid for arrays**:
```javascript
// DON'T use for..in with arrays (10-100x slower)
for (let key in fruits) {  // Not recommended
  console.log(fruits[key]);
}
```

### Arrays are Objects (References)

Arrays are copied by reference:
```javascript
let fruits = ['Apple'];
let copy = fruits;           // copy is a reference, not a new array

copy.push('Pear');
console.log(fruits);         // ['Apple', 'Pear'] - original changed!
```

### The length Property

The `length` property is writable and auto-updates:
```javascript
let arr = [1, 2, 3];
arr.length;                  // 3

arr.length = 2;              // Truncate
console.log(arr);            // [1, 2]

arr.length = 0;              // Clear array
console.log(arr);            // []
```

### Comparing Arrays

Don't use `==` to compare arrays:
```javascript
[] == [];                    // false (different references)
[1] == [1];                  // false

// Compare element by element instead
```

### Multidimensional Arrays

Arrays can contain other arrays:
```javascript
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

matrix[1][1];                // 5
```

## Tasks

Complete the functions in `arrays.js`:

1. **createArray**: Create array with initial values
2. **accessElement**: Get element by index using at()
3. **addToEnd**: Add elements with push()
4. **removeFromEnd**: Remove and return last element
5. **addToStart**: Add elements with unshift()
6. **removeFromStart**: Remove and return first element
7. **getArrayLength**: Return array length
8. **iterateArray**: Loop through array and return values

## Run Tests

Test your solutions:

```bash
npm test exercises/27-arrays
```

## Resources

- [JavaScript.info - Arrays](https://javascript.info/array)
- [MDN - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

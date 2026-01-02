# 28 – Array Methods

Master JavaScript's powerful array methods for adding, removing, searching, transforming, and reducing arrays.

## Learning Objectives

- Modify arrays with splice, slice, and concat
- Search arrays with indexOf, includes, find, and filter
- Transform arrays with map and forEach
- Sort and reverse arrays
- Convert between strings and arrays with split/join
- Reduce arrays to single values with reduce

## Key Concepts

### Add/Remove Elements

**splice()** - the "Swiss army knife" for arrays:
```javascript
let arr = ['I', 'study', 'JavaScript'];

// Remove 1 element from index 1
arr.splice(1, 1);            // ['I', 'JavaScript']

// Remove 2 elements and replace with new ones
arr.splice(0, 2, 'Let', 'us');  // ['Let', 'us', 'JavaScript']

// Insert without removing
arr.splice(2, 0, 'complex'); // ['Let', 'us', 'complex', 'JavaScript']
```

**slice()** - creates copy without modification:
```javascript
let arr = ['t', 'e', 's', 't'];
arr.slice(1, 3);             // ['e', 's']
arr.slice(-2);               // ['s', 't']
```

**concat()** - merges arrays:
```javascript
let arr = [1, 2];
arr.concat([3, 4], 5, 6);    // [1, 2, 3, 4, 5, 6]
```

### Searching Arrays

**indexOf/includes**:
```javascript
let arr = [1, 0, false];
arr.indexOf(0);              // 1
arr.indexOf(null);           // -1
arr.includes(1);             // true
```

**find/findIndex** - search with condition:
```javascript
let users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Pete' }
];

let user = users.find(item => item.id === 1);  // { id: 1, name: 'John' }
```

**filter** - find all matching elements:
```javascript
let users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Pete' },
  { id: 3, name: 'Mary' }
];

let someUsers = users.filter(item => item.id < 3);
// [{ id: 1, name: 'John' }, { id: 2, name: 'Pete' }]
```

### Transform Arrays

**map()** - transform each element:
```javascript
let lengths = ['Bilbo', 'Gandalf', 'Nazgul'].map(item => item.length);
// [5, 7, 6]
```

**forEach()** - run function for each element:
```javascript
['Bilbo', 'Gandalf', 'Nazgul'].forEach((item, index) => {
  console.log(`${item} is at index ${index}`);
});
```

### Sort and Reverse

**sort()** - sorts in place (mutates array):
```javascript
let arr = [1, 15, 2];
arr.sort();                  // [1, 15, 2] - string sort by default!

// Use compare function for numbers
arr.sort((a, b) => a - b);   // [1, 2, 15] - correct numeric sort
```

**reverse()** - reverses in place:
```javascript
let arr = [1, 2, 3];
arr.reverse();               // [3, 2, 1]
```

### String Conversion

**split()** - string to array:
```javascript
let str = 'Bilbo, Gandalf, Nazgul';
let arr = str.split(', ');   // ['Bilbo', 'Gandalf', 'Nazgul']
```

**join()** - array to string:
```javascript
let arr = ['Bilbo', 'Gandalf', 'Nazgul'];
let str = arr.join(';');     // 'Bilbo;Gandalf;Nazgul'
```

### Reduce

**reduce()** - calculate single value from array:
```javascript
let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((sum, current) => sum + current, 0);  // 15
```

### Other Useful Methods

**Array.isArray()** - check if value is array:
```javascript
Array.isArray([]);           // true
Array.isArray({});           // false
```

## Tasks

Complete the functions in `array-methods.js`:

1. **removeElements**: Use splice to remove elements
2. **copyPortion**: Use slice to copy part of array
3. **mergeArrays**: Use concat to merge arrays
4. **findElement**: Use find to locate element by condition
5. **filterElements**: Use filter to get matching elements
6. **transformArray**: Use map to transform elements
7. **sortNumbers**: Use sort with compare function
8. **convertToString**: Use join to create string
9. **sumArray**: Use reduce to calculate sum

## Run Tests

Test your solutions:

```bash
npm test exercises/28-array-methods
```

## Resources

- [JavaScript.info - Array methods](https://javascript.info/array-methods)
- [MDN - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

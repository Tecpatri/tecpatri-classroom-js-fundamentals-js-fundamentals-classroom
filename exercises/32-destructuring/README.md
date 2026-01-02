# 32 – Destructuring Assignment

Learn how to unpack values from arrays and objects into individual variables using destructuring syntax.

## Learning Objectives

- Use array destructuring to extract elements
- Use object destructuring to extract properties
- Skip elements and use the rest operator (...)
- Set default values in destructuring
- Rename variables in object destructuring
- Work with nested destructuring
- Use destructuring in function parameters
- Swap variables using destructuring

## Key Concepts

### What is Destructuring?

Destructuring is a convenient syntax for unpacking values from arrays or properties from objects into distinct variables.

```javascript
// Without destructuring
const arr = [1, 2, 3]
const first = arr[0]
const second = arr[1]

// With destructuring
const [first, second] = [1, 2, 3]
```

### Array Destructuring

Extract values from arrays by position:

```javascript
const colors = ['red', 'green', 'blue']

// Basic destructuring
const [first, second, third] = colors
console.log(first)   // 'red'
console.log(second)  // 'green'
console.log(third)   // 'blue'

// Skip elements with commas
const [primary, , tertiary] = colors
console.log(primary)   // 'red'
console.log(tertiary)  // 'blue'

// Works with any iterable (strings, Sets, etc.)
const [a, b, c] = 'ABC'
console.log(a, b, c)  // 'A' 'B' 'C'
```

### Rest Operator in Arrays

Collect remaining elements with `...rest`:

```javascript
const numbers = [1, 2, 3, 4, 5]

const [first, second, ...rest] = numbers
console.log(first)   // 1
console.log(second)  // 2
console.log(rest)    // [3, 4, 5]
```

**Important:** The rest element must be last!

```javascript
const [first, ...middle, last] = arr  // Error!
const [first, ...rest] = arr          // OK
```

### Default Values in Arrays

Provide fallback values if elements are missing:

```javascript
const [name = 'Guest', age = 18] = []
console.log(name)  // 'Guest'
console.log(age)   // 18

const [x = 5, y = 10] = [7]
console.log(x)  // 7 (from array)
console.log(y)  // 10 (default used)
```

### Object Destructuring

Extract properties by name:

```javascript
const user = {
  name: 'Alice',
  age: 25,
  city: 'NYC'
}

// Basic destructuring
const { name, age, city } = user
console.log(name)  // 'Alice'
console.log(age)   // 25
console.log(city)  // 'NYC'

// Order doesn't matter!
const { city, name } = user  // Still works
```

### Renaming Variables

Assign to different variable names using `:`:

```javascript
const user = { name: 'Alice', age: 25 }

// Rename during destructuring
const { name: userName, age: userAge } = user
console.log(userName)  // 'Alice'
console.log(userAge)   // 25

// name and age variables don't exist!
console.log(name)  // ReferenceError
```

**Syntax reminder:** `{ propertyName: newVariableName }`

### Default Values in Objects

Provide defaults for missing properties:

```javascript
const { name = 'Guest', age = 18 } = {}
console.log(name)  // 'Guest'
console.log(age)   // 18

const options = { title: 'Menu' }
const { title, width = 100, height = 200 } = options
console.log(title)   // 'Menu'
console.log(width)   // 100 (default)
console.log(height)  // 200 (default)
```

### Combining Renaming and Defaults

```javascript
const { name: userName = 'Guest', age: userAge = 18 } = {}
console.log(userName)  // 'Guest'
console.log(userAge)   // 18
```

### Rest Operator in Objects

Collect remaining properties:

```javascript
const user = {
  name: 'Alice',
  age: 25,
  city: 'NYC',
  country: 'USA'
}

const { name, age, ...location } = user
console.log(name)      // 'Alice'
console.log(age)       // 25
console.log(location)  // { city: 'NYC', country: 'USA' }
```

### Nested Destructuring

Extract from nested structures:

```javascript
const user = {
  name: 'Alice',
  address: {
    city: 'NYC',
    zip: '10001'
  }
}

// Nested object destructuring
const { name, address: { city, zip } } = user
console.log(city)  // 'NYC'
console.log(zip)   // '10001'

// Nested array destructuring
const matrix = [[1, 2], [3, 4]]
const [[a, b], [c, d]] = matrix
console.log(a, b, c, d)  // 1 2 3 4
```

### Swapping Variables

Elegant way to swap values:

```javascript
let a = 1
let b = 2

// Swap using destructuring
[a, b] = [b, a]

console.log(a)  // 2
console.log(b)  // 1
```

### Function Parameter Destructuring

Destructure directly in function parameters:

```javascript
// Instead of this:
function greet(user) {
  console.log(`Hello ${user.name}, age ${user.age}`)
}

// Do this:
function greet({ name, age }) {
  console.log(`Hello ${name}, age ${age}`)
}

greet({ name: 'Alice', age: 25 })
// 'Hello Alice, age 25'
```

With defaults:

```javascript
function createMenu({ title = 'Menu', width = 100, height = 200 } = {}) {
  console.log(`${title} ${width}x${height}`)
}

createMenu({ title: 'File' })
// 'File 100x200'

createMenu()
// 'Menu 100x200'
```

**Note:** The `= {}` at the end handles the case when no argument is passed.

### Common Pitfalls

**1. Destructuring without declaration:**

```javascript
// Error: JavaScript thinks it's a code block
{ name, age } = user

// Fix: wrap in parentheses or use let/const
({ name, age } = user)
let { name, age } = user
```

**2. Trying to destructure null/undefined:**

```javascript
const { name } = null  // Error!

// Use default empty object
const { name } = someValue || {}
```

## Tasks

Complete the functions in `destructuring.js`:

1. **getFirstTwo**: Extract first two array elements
2. **getFirstAndThird**: Skip elements using commas
3. **getFirstAndRest**: Use rest operator to collect remaining elements
4. **getWithDefaults**: Array destructuring with default values
5. **extractNameAndAge**: Basic object destructuring
6. **renameProperties**: Rename variables during object destructuring
7. **getWithObjectDefaults**: Object destructuring with defaults
8. **extractTitleAndRest**: Use rest operator with objects
9. **extractCity**: Nested object destructuring
10. **extractFromNested**: Nested array destructuring
11. **swapValues**: Swap two variables using destructuring
12. **greetUser**: Function with destructured parameters (already implemented)
13. **createMenu**: Function parameters with defaults (already implemented)
14. **processCoordinates**: Destructure function return value
15. **extractUserData**: Complex destructuring with nested structures

## Run Tests

Test your solutions:

```bash
npm test exercises/32-destructuring
```

## Resources

- [JavaScript.info - Destructuring assignment](https://javascript.info/destructuring-assignment)
- [MDN - Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [MDN - Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

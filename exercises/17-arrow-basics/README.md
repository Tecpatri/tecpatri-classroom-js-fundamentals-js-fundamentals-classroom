# Exercise 17 - Arrow Functions, the Basics

Learn the concise syntax of arrow functions and understand their different forms in JavaScript.

## Learning Objectives

By completing this exercise, you will learn:

- Arrow function syntax and variations
- How to write single-parameter arrow functions without parentheses
- How to use implicit returns for single expressions
- How to write multi-line arrow functions with explicit returns
- How to use arrow functions as callbacks
- How arrow functions can return other arrow functions

## Key Concepts

### Arrow Function Syntax

Arrow functions provide a shorter syntax for writing function expressions:

**Traditional function expression:**
```javascript
const sum = function(a, b) {
  return a + b;
};
```

**Arrow function:**
```javascript
const sum = (a, b) => {
  return a + b;
};
```

### Single Parameter Without Parentheses

If the arrow function has exactly one parameter, you can omit the parentheses:

```javascript
// With parentheses (always works)
const square = (x) => x * x;

// Without parentheses (only for single parameter)
const square = x => x * x;

// No parameters or multiple parameters REQUIRE parentheses
const sayHi = () => console.log('Hi');
const add = (a, b) => a + b;
```

### Implicit Return for Single Expressions

If the function body is a single expression, you can omit the curly braces and the `return` keyword. The expression is automatically returned:

```javascript
// Explicit return (with curly braces)
const double = x => {
  return x * 2;
};

// Implicit return (no curly braces)
const double = x => x * 2;

// Implicit return with template literal
const greet = name => `Hello, ${name}!`;

// Implicit return with calculation
const calculateArea = (width, height) => width * height;
```

### Multi-line Arrow Functions with Explicit Return

For functions with multiple statements or more complex logic, use curly braces and an explicit `return`:

```javascript
const getMax = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

// Or with a ternary operator (still multi-line for readability)
const getMax = (a, b) => {
  return a > b ? a : b;
};
```

### Arrow Functions as Callbacks

Arrow functions are commonly used as callbacks because of their concise syntax:

```javascript
// Traditional function
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(x) {
  return x * 2;
});

// Arrow function
const doubled = numbers.map(x => x * 2);

// More examples
const evens = numbers.filter(x => x % 2 === 0);
const sum = numbers.reduce((acc, x) => acc + x, 0);
```

### Arrow Functions Returning Arrow Functions

Arrow functions can return other arrow functions:

```javascript
// Traditional nested functions
const makeMultiplier = function(factor) {
  return function(x) {
    return x * factor;
  };
};

// With arrow functions
const makeMultiplier = factor => x => x * factor;

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

double(5); // 10
triple(5); // 15
```

## Syntax Summary

```javascript
// No parameters
const sayHi = () => 'Hello!';

// One parameter (parentheses optional)
const square = x => x * x;
const square = (x) => x * x;  // Both work

// Multiple parameters (parentheses required)
const add = (a, b) => a + b;

// Implicit return (no curly braces)
const double = x => x * 2;

// Explicit return (with curly braces)
const getMax = (a, b) => {
  return a > b ? a : b;
};

// Returning an object (wrap in parentheses)
const makePerson = (name, age) => ({ name: name, age: age });

// Multi-line implicit return (expression wrapped in parentheses)
const formatMessage = name => (
  `Hello, ${name}! ` +
  `Welcome to our site.`
);
```

## Tasks

Complete the following arrow functions in `arrow-basics.js`:

1. **square(x)**: Single parameter, implicit return - returns x squared
2. **greet(name)**: Single parameter, implicit return with template literal
3. **add(a, b)**: Multiple parameters, implicit return - returns sum
4. **getMax(a, b)**: Multi-line with explicit return - returns larger number
5. **createMultiplier(factor)**: Returns an arrow function that multiplies by factor
6. **filterPositive(arr)**: Uses arrow function callback with array's filter method

## Resources

- [JavaScript.info - Arrow Functions, the Basics](https://javascript.info/arrow-functions-basics)

## Running the Tests

Run only this exercise's tests:

```bash
npm test exercises/17-arrow-basics
```
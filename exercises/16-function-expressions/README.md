# Exercise 16 - Function Expressions

Learn the difference between function declarations and function expressions, and understand how functions can be treated as values in JavaScript.

## Learning Objectives

By completing this exercise, you will learn:

- The syntax of function expressions
- The difference between function declarations and function expressions (hoisting)
- How to treat functions as values (assign to variables, pass as arguments)
- How to use callback functions
- How to create and use anonymous functions
- How functions can return other functions

## Key Concepts

### Function Expression Syntax

A function expression creates a function and assigns it to a variable:

```javascript
const sayHi = function(name) {
  return `Hello, ${name}!`;
};

sayHi('John'); // 'Hello, John!'
```

### Function Declaration vs Function Expression

**Function Declaration:**
```javascript
function sayHi(name) {
  return `Hello, ${name}!`;
}
```

**Function Expression:**
```javascript
const sayHi = function(name) {
  return `Hello, ${name}!`;
};
```

**Key Difference - Hoisting:**

- Function declarations are hoisted (can be called before they are defined)
- Function expressions are NOT hoisted (cannot be called before assignment)

```javascript
// This works - function declaration is hoisted
greet('Alice');
function greet(name) {
  return `Hi, ${name}`;
}

// This fails - function expression is not hoisted
sayHi('Bob'); // Error: Cannot access 'sayHi' before initialization
const sayHi = function(name) {
  return `Hi, ${name}`;
};
```

### Functions as Values

In JavaScript, functions are values. You can:

1. **Assign them to variables:**
```javascript
const greet = function(name) {
  return `Hello, ${name}`;
};
```

2. **Pass them as arguments:**
```javascript
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled."); }
);
```

3. **Return them from other functions:**
```javascript
function makeMultiplier(factor) {
  return function(x) {
    return x * factor;
  };
}

const double = makeMultiplier(2);
double(5); // 10
```

### Callback Functions

A callback is a function passed as an argument to another function:

```javascript
function processUserInput(callback) {
  const name = 'Alice';
  callback(name);
}

processUserInput(function(name) {
  console.log(`Hello, ${name}!`);
});
```

### Anonymous Functions

Functions without names are called anonymous functions. They are commonly used as callbacks:

```javascript
// Anonymous function as a callback
setTimeout(function() {
  console.log('This runs after 1 second');
}, 1000);

// Named function expression
const greet = function hello(name) {
  return `Hello, ${name}`;
};
// 'greet' is accessible, but 'hello' is only accessible inside the function
```

## Tasks

Complete the following functions in `function-expressions.js`:

1. **multiply(a, b)**: Basic function expression that multiplies two numbers
2. **sayHi(name)**: Function expression that returns a greeting
3. **createGreeting(greeting)**: Returns a function that greets with the specified greeting
4. **ask(question, yes, no, answer)**: Takes callback functions and calls the appropriate one
5. **calculator()**: Returns an object with methods for basic arithmetic operations
6. **processArray(arr, callback)**: Applies a callback function to each array element

## Important Distinctions

### When to Use Each Type

**Function Declaration:**
- Use when you need hoisting
- Use for top-level functions
- More traditional, explicit

```javascript
function greet(name) {
  return `Hello, ${name}`;
}
```

**Function Expression:**
- Use when assigning functions to variables
- Use when passing functions as arguments
- Use when returning functions from other functions
- More flexible, modern

```javascript
const greet = function(name) {
  return `Hello, ${name}`;
};
```

### Key Differences Summary

| Feature | Function Declaration | Function Expression |
|---------|---------------------|---------------------|
| Hoisting | Yes (can be called before definition) | No (must be defined before use) |
| Syntax | `function name() {}` | `const name = function() {}` |
| When created | Before code execution | During code execution |
| Use case | General purpose | As values, callbacks, closures |

### Common Patterns

**1. Immediately Invoked Function Expression (IIFE):**
```javascript
(function() {
  console.log('This runs immediately');
})();
```

**2. Higher-Order Functions:**
Functions that take other functions as arguments or return functions:

```javascript
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const triple = createMultiplier(3);
triple(5); // 15
```

**3. Callback Pattern:**
```javascript
function processData(data, callback) {
  const result = data * 2;
  return callback(result);
}

processData(5, function(x) {
  return x + 10;
}); // Returns 20
```

## Resources

- [JavaScript.info - Function Expressions](https://javascript.info/function-expressions)

## Running the Tests

Run only this exercise's tests:

```bash
npm test exercises/16-function-expressions
```

## Tips for Completion

1. **multiply() and sayHi()**: Start with these simple function expressions
2. **createGreeting()**: Remember to return a function from inside the function
3. **ask()**: Use an if statement to decide which callback to call, then return the formatted string
4. **calculator()**: Return an object with four properties, each containing a function expression
5. **processArray()**: Create a new array, loop through the input array, apply the callback to each element, and add the result to the new array

Example pattern for createGreeting():
```javascript
export const createGreeting = function(greeting) {
  return function(name) {
    // Use greeting and name here
  };
};
```
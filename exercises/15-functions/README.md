# Exercise 15 - Functions

Learn how to create and use functions in JavaScript.

## Learning Objectives

By completing this exercise, you will learn:

- How to declare functions using the `function` keyword
- How to define parameters and pass arguments to functions
- How to return values from functions (explicit and implicit `undefined`)
- The difference between local and outer variables
- How to use default parameter values
- Function naming conventions (using verbs for action-based functions)

## Key Concepts

### Function Declaration

A function is a block of code designed to perform a particular task. Functions are declared using the `function` keyword:

```javascript
function functionName(parameter1, parameter2) {
  // code to be executed
  return result;
}
```

### Parameters and Arguments

- **Parameters** are the names listed in the function definition
- **Arguments** are the actual values passed to the function when it's called

```javascript
function greet(name) {  // 'name' is a parameter
  return `Hello, ${name}!`;
}

greet('Alice');  // 'Alice' is an argument
```

### Return Values

Functions can return values using the `return` statement. If no return statement is present, the function returns `undefined`:

```javascript
function add(a, b) {
  return a + b;  // Explicit return
}

function logMessage(msg) {
  console.log(msg);
  // No return statement - implicitly returns undefined
}
```

### Local vs Outer Variables

- **Local variables**: Declared inside a function, only visible within that function
- **Outer variables**: Declared outside the function, accessible from within the function

```javascript
let userName = 'John';  // Outer variable

function showMessage() {
  let message = 'Hello, ' + userName;  // message is local, userName is outer
  return message;
}
```

### Default Parameters

You can provide default values for parameters. If an argument is not provided, the default value is used:

```javascript
function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}

greet();        // 'Hello, Guest!'
greet('Alice'); // 'Hello, Alice!'
```

### Function Naming

Functions that perform actions should be named with a verb:

- `showMessage()` - shows a message
- `getAge()` - returns the age
- `calcSum()` - calculates and returns a sum
- `createForm()` - creates a form
- `checkPermission()` - checks permission and returns true/false

## Tasks

Complete the following functions in `functions.js`:

1. **greet(name)**: Takes a name and returns a greeting message
2. **calculateArea(width, height)**: Takes width and height, returns the area
3. **getDiscount(price, discountPercent)**: Calculates discount amount with a default discount of 10%
4. **createMessage(greeting, name)**: Creates a formatted message from two parameters
5. **findMax(a, b)**: Returns the larger of two numbers
6. **isEven(num)**: Returns `true` if the number is even, `false` otherwise

## Important Notes

### Return Statement
- A function without a `return` statement returns `undefined`
- The `return` statement can be anywhere in the function
- When `return` is encountered, the function stops executing immediately

```javascript
function checkAge(age) {
  if (age >= 18) {
    return true;  // Function stops here if condition is true
  }
  return false;   // Only executes if condition is false
}
```

### Variable Scope
- Variables declared inside a function are **local** to that function
- Functions can access **outer** variables declared outside the function
- If a local variable has the same name as an outer variable, it **shadows** the outer one

```javascript
let message = 'Outer';  // Outer variable

function showMessage() {
  let message = 'Inner';  // Local variable shadows outer
  console.log(message);   // 'Inner'
}

showMessage();
console.log(message);  // 'Outer' - unchanged
```

### Best Practices
1. **One function - one action**: A function should do exactly what its name suggests, nothing more
2. **Use descriptive names**: Function names should clearly describe what they do
3. **Keep functions short**: Ideally, a function should fit on one screen
4. **Use parameters instead of modifying outer variables**: This makes functions more reusable and testable

```javascript
// Good - uses parameters
function sum(a, b) {
  return a + b;
}

// Avoid - modifies outer variable
let result = 0;
function addToResult(value) {
  result += value;  // Modifying outer variable
}
```

## Resources

- [JavaScript.info - Functions](https://javascript.info/function-basics)

## Running the Tests

Run only this exercise's tests:

```bash
npm test exercises/15-functions
```

## Tips for Completion

1. Start with `greet()` - it's the simplest function
2. For `isEven()`, use the modulo operator (`%`) to check if a number divides evenly by 2
3. For `findMax()`, use an `if/else` statement to compare the two numbers
4. For `getDiscount()`, remember that the default parameter is already set up for you
5. Make sure all functions have explicit `return` statements with the correct values
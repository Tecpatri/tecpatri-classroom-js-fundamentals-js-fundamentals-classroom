# Exercise 03: The Modern Mode, "use strict"

## Lesson
[The modern mode, "use strict"](https://javascript.info/strict-mode)

## Concepts
- Strict mode and its purpose
- How to enable strict mode with `"use strict"`
- Differences between strict and non-strict mode
- Automatic strict mode in ES modules

## Instructions

This exercise explores strict mode, which enables modern JavaScript behavior and catches common mistakes.

### Task 1: Demonstrate Strict Mode
Implement the `demonstrateStrictMode()` function:
- It should return `true` to confirm strict mode is active
- The provided code uses a test: in strict mode, `this` in a function is `undefined`

### Task 2: Use Declared Variables
Implement the `noUndeclaredVariables()` function:
- In strict mode, all variables must be declared with `let`, `const`, or `var`
- Create a variable `message` with the value `"strict mode works"`
- Return the `message` variable

### Task 3: No Variable Deletion
Implement the `noDelete()` function:
- In strict mode, you cannot delete variables (only object properties)
- The function should return the value `42`
- A constant `value` is already declared for you

## Tips
- `"use strict"` must be at the very top of a script or function
- ES modules (files using import/export) are automatically in strict mode
- Strict mode prevents common mistakes and makes code more secure
- Modern JavaScript features like classes and modules enable strict mode automatically

## Running Tests
```bash
npm test exercises/03-use-strict
```
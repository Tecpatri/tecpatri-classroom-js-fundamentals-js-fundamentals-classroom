# 04 – Variables

Learn how to declare and use variables in JavaScript using `let` and `const`.

## Learning Objectives

- Declare variables using `let` and `const`
- Understand the difference between `let` (reassignable) and `const` (constant)
- Follow proper variable naming conventions (camelCase)
- Declare multiple variables efficiently

## Key Concepts

### Variable Declaration

JavaScript has three ways to declare variables: `var`, `let`, and `const`. In modern JavaScript, we primarily use `let` and `const`.

```javascript
let message = "Hello";      // Can be reassigned
const PI = 3.14159;         // Cannot be reassigned
```

### let vs const

- **`let`**: Use when the variable's value will change
  ```javascript
  let counter = 0;
  counter = counter + 1;  // OK - reassignment allowed
  counter++;              // OK - increment allowed
  ```

- **`const`**: Use when the variable should remain constant
  ```javascript
  const MAX_SIZE = 100;
  MAX_SIZE = 200;  // Error! Cannot reassign const
  ```

**Important**: `const` means the variable reference cannot be reassigned, but for objects and arrays, their properties/elements can still be modified:

```javascript
const user = { name: "Alice" };
user.name = "Bob";        // OK - modifying property
user = { name: "Bob" };   // Error - cannot reassign the variable

const numbers = [1, 2, 3];
numbers.push(4);          // OK - modifying array
numbers = [4, 5, 6];      // Error - cannot reassign the variable
```

**Best Practice**: Use `const` by default, only use `let` when you know the variable needs to be reassigned.

### Naming Conventions

- Use camelCase for variable names: `myVariableName`
- Names must start with a letter, `$`, or `_`
- Names are case-sensitive: `apple` and `Apple` are different variables
- Use descriptive names: `userName` instead of `u` or `data`

```javascript
let userName = "Alice";     // Good: descriptive, camelCase
let user_name = "Alice";    // Avoid: use camelCase, not snake_case
let x = "Alice";            // Avoid: not descriptive
```

### Multiple Variable Declarations

You can declare multiple variables in various ways:

```javascript
// Separate declarations
let firstName = "John";
let lastName = "Doe";

// Multiple declarations in one line
let age = 25, city = "NYC";

// Multiline style (more readable)
let country = "USA",
    zipCode = "10001",
    isActive = true;
```

## Tasks

Complete the functions in `variables.js`. Each function has detailed TODO comments to guide you:

1. **createUserProfile**: Declare variables for user information using `const`
   - Practice creating an object with const
   - Understand that const prevents reassignment, but object properties can change

2. **updateCounter**: Use `let` to create a counter that can be incremented
   - See how let allows reassignment
   - Practice incrementing a variable

3. **calculateRectangleArea**: Declare multiple variables in one statement
   - Learn the comma syntax for declaring multiple variables
   - Practice efficient variable declarations

4. **declareConstants**: Declare constants that cannot be changed
   - Use const for values that won't change
   - Follow naming conventions for constants (UPPER_CASE for true constants)

5. **useDescriptiveNames**: Practice using descriptive variable names
   - Use camelCase convention
   - Choose meaningful names that describe the data

6. **demonstrateLetVsConst**: Understand the difference between let and const
   - See when to use let (values that change)
   - See when to use const (values that stay the same)

## Run Tests

Test your solutions:

```bash
npm test exercises/04-variables
```

## Resources

- [JavaScript.info - Variables](https://javascript.info/variables)
- [MDN - let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [MDN - const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
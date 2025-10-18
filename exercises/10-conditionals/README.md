# Exercise 10 - Conditional Branching: if, '?'

Learn about conditional statements in JavaScript and how to make decisions in your code.

**Lesson:** [Conditional branching: if, '?' - javascript.info](https://javascript.info/ifelse)

## Learning Objectives

By completing this exercise, you will learn:
- if/else statements for conditional execution
- else if chains for multiple conditions
- The ternary operator (? :) for concise conditionals
- Truthy and falsy values in conditional contexts
- Best practices for writing conditionals
- When to use if/else vs ternary operator

## Key Concepts

### Basic if Statement

The if statement executes code only when a condition is true:

```javascript
if (age >= 18) {
  console.log('You can vote');
}
```

### if...else Statement

Use else to specify code that runs when the condition is false:

```javascript
if (temperature > 30) {
  console.log('It is hot');
} else {
  console.log('It is not hot');
}
```

### else if Chains

Chain multiple conditions using else if:

```javascript
if (score >= 90) {
  return 'A';
} else if (score >= 80) {
  return 'B';
} else if (score >= 70) {
  return 'C';
} else {
  return 'F';
}
```

### Ternary Operator

The ternary operator (? :) is a concise way to write simple if/else statements:

```javascript
// Syntax: condition ? valueIfTrue : valueIfFalse
let message = age >= 18 ? 'Adult' : 'Minor';

// Equivalent to:
let message;
if (age >= 18) {
  message = 'Adult';
} else {
  message = 'Minor';
}
```

**Best Practice:** Use ternary operators for simple conditions. For complex logic, use if/else statements for better readability.

### Truthy and Falsy Values

In JavaScript, values are automatically converted to boolean in conditional contexts:

**Falsy values** (evaluate to false):
- `false`
- `0`
- `''` (empty string)
- `null`
- `undefined`
- `NaN`

**Truthy values** (evaluate to true):
- Everything else! Including:
  - `true`
  - Any non-zero number
  - Any non-empty string
  - Objects and arrays (even empty ones!)

```javascript
if (userName) {
  console.log('User is logged in');
} else {
  console.log('User is not logged in');
}

// userName = '' → false (empty string)
// userName = 'John' → true (non-empty string)
```

### Nested Conditionals

You can nest conditionals inside each other:

```javascript
if (isLoggedIn) {
  if (isPremium) {
    console.log('Access premium content');
  } else {
    console.log('Access basic content');
  }
} else {
  console.log('Please log in');
}
```

## Tasks

Implement the following functions in `conditionals.js`:

1. `getGrade(score)` - Convert a numeric score to a letter grade (A, B, C, D, F)
2. `getAbsoluteValue(num)` - Return the absolute value using conditional
3. `canVote(age)` - Return true if age >= 18, false otherwise
4. `getMax(a, b)` - Return the larger of two numbers using ternary operator
5. `getFizzBuzz(num)` - Return 'Fizz' if divisible by 3, 'Buzz' if by 5, 'FizzBuzz' if both, or the number
6. `checkSign(num)` - Return 'positive', 'negative', or 'zero'
7. `checkTruthiness(value)` - Return 'truthy' or 'falsy' based on the value
8. `getDiscountMessage(amount)` - Return discount message based on purchase amount

## Tips

- When using else if chains, order matters! Check the most specific conditions first
- For FizzBuzz, check divisibility by both 3 AND 5 before checking each individually
- The ternary operator is great for simple conditions, but use if/else for complex logic
- Remember the 6 falsy values: false, 0, '', null, undefined, NaN. Everything else is truthy!
- You can omit the else block if you don't need it
- Use parentheses to make ternary operators more readable when needed

## Resources

- [javascript.info: Conditional branching: if, '?'](https://javascript.info/ifelse) (Main lesson)
- [MDN: if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [MDN: Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

## Running Tests

Run only this exercise's tests:

```bash
npm test exercises/10-conditionals
```

Run all tests:

```bash
npm test
```

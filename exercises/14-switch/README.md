# Exercise 14 - The 'switch' Statement

## Learning Objectives

In this exercise, you'll learn about the `switch` statement, which provides a cleaner way to handle multiple conditional branches compared to long `if...else if` chains.

## Reference

- [javascript.info: The "switch" statement](https://javascript.info/switch)

## Concepts

### Basic Switch Syntax

The `switch` statement compares a value against multiple cases:

```javascript
let day = 2;
switch (day) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  default:
    console.log('Other day');
}
```

### The Importance of "break"

Without `break`, execution "falls through" to the next case:

```javascript
let x = 1;
switch (x) {
  case 1:
    console.log('One');
    // No break! Falls through to case 2
  case 2:
    console.log('Two');
    break;
}
// Output: "One" and "Two"
```

Always use `break` unless you intentionally want fall-through behavior!

### Grouping Cases (Fall-through)

You can group multiple cases to share the same code:

```javascript
let day = 'Sat';
switch (day) {
  case 'Sat':
  case 'Sun':
    console.log('Weekend!');
    break;
  case 'Mon':
  case 'Tue':
  case 'Wed':
  case 'Thu':
  case 'Fri':
    console.log('Weekday');
    break;
}
```

### The Default Case

The `default` case runs when no other cases match (like `else` in if statements):

```javascript
let fruit = 'mango';
switch (fruit) {
  case 'apple':
    console.log('Red or green');
    break;
  case 'banana':
    console.log('Yellow');
    break;
  default:
    console.log('Unknown fruit');
}
```

### Strict Equality (===)

Switch uses **strict equality** (`===`) for comparisons. Type matters!

```javascript
let value = '1';
switch (value) {
  case 1:          // number 1
    console.log('This will NOT match');
    break;
  case '1':        // string '1'
    console.log('This WILL match!');
    break;
}
```

### Switch as an Expression (Return Pattern)

You can use `return` instead of `break` in functions:

```javascript
function getColor(fruit) {
  switch (fruit) {
    case 'apple':
      return 'red';
    case 'banana':
      return 'yellow';
    case 'grape':
      return 'purple';
    default:
      return 'unknown';
  }
}
```

### When to Use Switch vs If-Else

Use `switch` when:
- You have multiple specific values to check against one variable
- The comparisons use strict equality (`===`)
- You want cleaner, more readable code for many branches

Use `if-else` when:
- You need complex conditions (`>`, `<`, `&&`, `||`)
- You're checking different variables in each condition
- You need to use non-strict comparisons

### Any Expression in Case

Both `switch` and `case` can have expressions:

```javascript
let a = 2 + 2;

switch (a) {
  case 3:
    console.log('Too small');
    break;
  case 4:
    console.log('Exactly!');
    break;
  case 5:
    console.log('Too big');
    break;
  default:
    console.log("I don't know such values");
}
```

## Your Tasks

Implement the following functions in `switch.js`:

1. `getDayType(day)` - Returns 'weekend' or 'weekday' based on day name
2. `getGrade(score)` - Returns a letter grade (A-F) based on numeric score
3. `getSeasonByMonth(month)` - Returns the season for a given month number
4. `interpretStatusCode(code)` - Returns a message for HTTP status codes
5. `calculateShipping(country)` - Returns shipping cost with grouped countries
6. `compareValues(a, b)` - Demonstrates strict equality in switch

## Running the Tests

Test your implementation by running:

```bash
npm test exercises/14-switch
```

## Tips

- Always include `break` at the end of each case (unless you intentionally want fall-through)
- Use fall-through to group multiple cases that should execute the same code
- Remember: `switch` uses strict equality (`===`), so types must match exactly
- The `default` case is optional but recommended for handling unexpected values
- You can use `return` instead of `break` when inside a function

## Resources

- [javascript.info: The "switch" statement](https://javascript.info/switch)
- [MDN: switch statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
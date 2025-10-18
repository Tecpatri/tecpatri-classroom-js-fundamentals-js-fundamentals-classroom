# Exercise 11 - Logical Operators

Learn about JavaScript's logical operators and how they work with truthy/falsy values.

**Lesson:** [Logical operators - javascript.info](https://javascript.info/logical-operators)

## Learning Objectives

By completing this exercise, you will learn:
- OR operator (||) and how it returns the first truthy value
- AND operator (&&) and how it returns the first falsy value or last value
- NOT operator (!) for boolean negation
- Short-circuit evaluation behavior
- Operator precedence (NOT > AND > OR)
- Practical use cases for logical operators
- Using logical operators for default values and conditional execution

## Key Concepts

### OR Operator (||)

The OR operator returns the **first truthy value** or the last value if all are falsy:

```javascript
true || false    // true
false || true    // true
false || false   // false

// Returns first truthy value
'hello' || 'world'   // 'hello'
'' || 'default'      // 'default'
null || 0 || 'hi'    // 'hi'

// Common use: default values
let userName = inputName || 'Guest';
```

**Short-circuit evaluation:** If the first operand is truthy, the second is not evaluated.

```javascript
true || alert('This will not run');
```

### AND Operator (&&)

The AND operator returns the **first falsy value** or the **last value** if all are truthy:

```javascript
true && true     // true
true && false    // false
false && true    // false

// Returns first falsy value or last value
'hello' && 'world'    // 'world' (both truthy, returns last)
'' && 'world'         // '' (first falsy)
'hello' && 0          // 0 (first falsy)
5 && 10 && 15         // 15 (all truthy, returns last)

// Common use: conditional execution
isLoggedIn && showDashboard();
```

**Short-circuit evaluation:** If the first operand is falsy, the second is not evaluated.

```javascript
false && alert('This will not run');
```

### NOT Operator (!)

The NOT operator converts a value to boolean and negates it:

```javascript
!true     // false
!false    // true
!0        // true (0 is falsy)
!'hello'  // false ('hello' is truthy)
!''       // true (empty string is falsy)

// Double NOT (!!) converts to boolean
!!1       // true
!!0       // false
!!'hello' // true
!!''      // false
```

### Operator Precedence

NOT (!) has higher precedence than AND (&&), which has higher precedence than OR (||):

```javascript
// Order: ! → && → ||
!false && true || false
// Step 1: !false → true
// Step 2: true && true → true
// Step 3: true || false → true

// Use parentheses for clarity
!(false && true) || false
```

### Practical Examples

**Default values:**
```javascript
let name = userName || 'Anonymous';
let port = process.env.PORT || 3000;
```

**Conditional execution:**
```javascript
isAdmin && deleteUser();  // Only runs if isAdmin is true
hasPermission && isActive && loadData();
```

**Validation:**
```javascript
if (username && password) {
  login(username, password);
}
```

**Negation:**
```javascript
if (!isLoggedIn) {
  redirectToLogin();
}
```

## Tasks

Implement the following functions in `logical-operators.js`:

1. `getFirstTruthy(a, b, c)` - Return the first truthy value using OR
2. `getLastTruthy(a, b, c)` - Return the last value if all are truthy using AND
3. `hasAccess(isLoggedIn, isActive)` - Check if user has access (both must be true)
4. `canDrive(hasLicense, isSober, isAdult)` - Check if person can drive (all must be true)
5. `negate(value)` - Return the boolean negation of a value
6. `setDefault(value, defaultValue)` - Return value or defaultValue if value is falsy

## Tips

- OR (||) is commonly used for setting default values: `let name = inputName || 'Guest'`
- AND (&&) is commonly used for conditional execution: `isLoggedIn && showDashboard()`
- Double NOT (!!) converts any value to its boolean equivalent
- Logical operators can work with any data type, not just booleans
- Short-circuit evaluation means the second operand might not be evaluated at all
- Remember operator precedence: ! is evaluated first, then &&, then ||
- Use parentheses to make complex logical expressions more readable

## Resources

- [javascript.info: Logical operators](https://javascript.info/logical-operators) (Main lesson)
- [MDN: Logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#binary_logical_operators)
- [MDN: Nullish coalescing operator (??)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) (Modern alternative to ||)

## Running Tests

Run only this exercise's tests:

```bash
npm test exercises/11-logical-operators
```

Run all tests:

```bash
npm test
```

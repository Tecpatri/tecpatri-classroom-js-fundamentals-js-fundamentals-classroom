# Exercise 12 - Nullish Coalescing Operator (??)

## Learning Objectives

In this exercise, you'll learn about the nullish coalescing operator (`??`), which provides a concise way to handle `null` and `undefined` values.

## Reference

- [javascript.info: Nullish Coalescing Operator](https://javascript.info/nullish-coalescing-operator)

## Concepts

### What is the Nullish Coalescing Operator?

The nullish coalescing operator (`??`) returns the first argument if it's **not** `null` or `undefined`. Otherwise, it returns the second argument.

```javascript
let result = value ?? defaultValue;
```

### Key Difference: ?? vs ||

The `??` operator is different from the logical OR (`||`) operator:

- `||` returns the right side for **any** falsy value: `0`, `''`, `false`, `null`, `undefined`, `NaN`
- `??` returns the right side **only** for `null` or `undefined`

```javascript
// Using || (logical OR)
let height = 0;
console.log(height || 100); // 100 (0 is falsy)

// Using ?? (nullish coalescing)
console.log(height ?? 100); // 0 (0 is not null/undefined)
```

This is important when `0`, `false`, or `''` are valid values!

### Common Use Cases

**1. Setting default values for API responses:**
```javascript
function getUserName(user) {
  return user.name ?? 'Anonymous';
}
```

**2. Configuration with zero values:**
```javascript
let volume = config.volume ?? 50; // 0 is a valid volume
let autoplay = config.autoplay ?? false; // false is valid
```

**3. Form inputs:**
```javascript
let search = searchInput.value ?? ''; // empty string is valid
```

### Chaining the ?? Operator

You can chain multiple `??` operators to find the first defined value:

```javascript
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder
```

### Operator Precedence

The `??` operator has low precedence, similar to `||`. Use parentheses when combining with other operators:

```javascript
let x = (a ?? b) * c; // Good
let y = a ?? b * c;   // Might be confusing
```

### Cannot Chain with && or ||

For safety, you cannot directly chain `??` with `&&` or `||` without parentheses:

```javascript
// This will cause an error:
// let x = a || b ?? c;

// Use parentheses:
let x = (a || b) ?? c; // OK
```

### Why ?? is Better Than || for Default Values

When working with values where `0`, `false`, or `''` are valid:

```javascript
// Problem with ||
let height = 0;
alert(height || 100); // 100 (wrong! 0 is valid)

// Solution with ??
alert(height ?? 100); // 0 (correct!)
```

## Your Tasks

Implement the following functions in `nullish-coalescing.js`:

1. `getValueOrDefault(value, defaultValue)` - Returns value if it's not null/undefined, otherwise returns defaultValue
2. `formatUserName(user)` - Returns user.name or 'Guest' if name is null/undefined
3. `getConfigValue(config, key, defaultValue)` - Gets config[key] or returns defaultValue for null/undefined
4. `firstDefinedValue(a, b, c)` - Returns the first value that is not null/undefined
5. `compareOperators(value)` - Returns an object showing the difference between ?? and ||

## Running the Tests

Test your implementation by running:

```bash
npm test exercises/12-nullish-coalescing
```

## Tips

- Use `??` when `0`, `false`, or `''` are valid values
- Use `||` when you want to treat all falsy values as "missing"
- Remember: `??` only checks for `null` and `undefined`
- Chain multiple `??` to check several values in order

## Resources

- [javascript.info: Nullish Coalescing Operator](https://javascript.info/nullish-coalescing-operator)
- [MDN: Nullish Coalescing Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
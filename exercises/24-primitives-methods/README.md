# 24 – Methods of Primitives

Learn how primitives can access methods through temporary wrapper objects, understanding JavaScript's clever compromise between simplicity and functionality.

## Learning Objectives

- Understand the difference between primitives and objects
- Learn how primitives can call methods via wrapper objects
- Work with string and number methods
- Understand why property assignments to primitives don't persist

## Key Concepts

### Primitives vs Objects

JavaScript has **7 primitive types**:
- `string`
- `number`
- `bigint`
- `boolean`
- `symbol`
- `null`
- `undefined`

**Objects** can store multiple values and have methods. Primitives are lightweight single values.

### The Wrapper Object Pattern

JavaScript allows primitives to access methods through a clever trick:

```javascript
let str = "Hello";
console.log(str.toUpperCase()); // "HELLO"
```

**What happens behind the scenes:**
1. A temporary "wrapper object" is created
2. The method runs on the wrapper
3. The wrapper is immediately destroyed
4. The result is returned

This gives us the best of both worlds: primitives stay lightweight, but we can still call methods on them!

### Common String Methods

```javascript
let str = "Hello";

str.toUpperCase();  // "HELLO"
str.toLowerCase();  // "hello"
str[0];             // "H" - access by index
```

### Common Number Methods

```javascript
let n = 1.23456;

n.toFixed(2);       // "1.23" - returns string with specified decimals
```

### Why Property Assignment Fails

```javascript
let str = "Hello";
str.test = 5;       // Creates wrapper, adds property, wrapper destroyed
console.log(str.test); // undefined - the wrapper is gone!
```

In strict mode, this assignment would throw an error. The wrapper is temporary and destroyed immediately.

### Important Notes

- `null` and `undefined` have no wrapper objects and no methods
- Constructors like `String()`, `Number()`, `Boolean()` exist but shouldn't be used with `new` (creates objects instead of primitives)
- JavaScript engines optimize wrapper creation heavily

## Tasks

Complete the functions in `primitives-methods.js`:

1. **useStringMethod**: Call toUpperCase() on a string
   - Demonstrates primitive method access
   - Returns uppercase version

2. **useNumberMethod**: Call toFixed() on a number
   - Rounds to specified decimal places
   - Returns a string

3. **checkPrimitiveType**: Verify a value is primitive
   - Use typeof operator
   - Check if it's not an object or is null

4. **accessStringCharacter**: Access character at position
   - Use bracket notation
   - Return specific character

5. **demonstrateWrapperBehavior**: Show wrapper object creation
   - Return result of calling a method
   - Understand temporary wrapper behavior

## Run Tests

Test your solutions:

```bash
npm test exercises/24-primitives-methods
```

## Resources

- [JavaScript.info - Methods of primitives](https://javascript.info/primitives-methods)
- [MDN - Primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)

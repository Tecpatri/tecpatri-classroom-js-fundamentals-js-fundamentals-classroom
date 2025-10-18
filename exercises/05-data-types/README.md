# 05 – Data Types

Learn about JavaScript's 8 primitive and object data types, the `typeof` operator, and how to work with different types of values.

## Learning Objectives

- Understand JavaScript's 8 data types
- Use the `typeof` operator to check data types
- Work with special numeric values (Infinity, NaN)
- Use template literals with variables
- Differentiate between primitive and object types

## Key Concepts

### JavaScript's 8 Data Types

JavaScript has 8 fundamental data types:

#### Primitive Types (7)
1. **Number**: integers and floating-point numbers
   ```javascript
   let age = 25;
   let price = 19.99;
   let infinity = Infinity;
   let notANumber = NaN;
   ```

2. **BigInt**: for very large integers (beyond Number's safe range)
   ```javascript
   let bigNumber = 1234567890123456789012345678901234567890n;
   ```

3. **String**: text data enclosed in quotes
   ```javascript
   let name = "Alice";
   let greeting = 'Hello';
   let template = `Welcome, ${name}!`;  // Template literal
   ```

4. **Boolean**: true or false
   ```javascript
   let isActive = true;
   let hasAccess = false;
   ```

5. **Null**: intentional absence of value
   ```javascript
   let emptyValue = null;
   ```

6. **Undefined**: variable declared but not assigned
   ```javascript
   let notAssigned;
   console.log(notAssigned);  // undefined
   ```

7. **Symbol**: unique identifier (advanced topic)
   ```javascript
   let id = Symbol('id');
   ```

#### Object Type (1)
8. **Object**: collections of data and more complex entities
   ```javascript
   let user = { name: "Alice", age: 25 };
   let numbers = [1, 2, 3];  // Arrays are objects
   ```

### The typeof Operator

Use `typeof` to check the type of a value:

```javascript
typeof 42              // "number"
typeof "hello"         // "string"
typeof true            // "boolean"
typeof undefined       // "undefined"
typeof { name: "Bob" } // "object"
typeof null            // "object" (known bug in JavaScript!)
typeof [1, 2, 3]       // "object" (arrays are objects)
```

### Special Numeric Values

**Infinity**: represents mathematical infinity
```javascript
console.log(1 / 0);        // Infinity
console.log(-1 / 0);       // -Infinity
console.log(Infinity > 1000000);  // true
console.log(typeof Infinity);     // "number"
```

**NaN** (Not a Number): represents a computational error
```javascript
console.log("text" / 2);   // NaN
console.log(NaN + 5);      // NaN (NaN is contagious - any operation with NaN returns NaN)
console.log(typeof NaN);   // "number" (yes, NaN is a number type!)
console.log(NaN === NaN);  // false (NaN is not equal to itself!)
```

**Checking for special values**:
```javascript
// Use Number.isFinite() to check if a value is a regular number (not Infinity/NaN)
Number.isFinite(100);      // true
Number.isFinite(Infinity); // false
Number.isFinite(NaN);      // false

// Use Number.isNaN() to check specifically for NaN
Number.isNaN(NaN);         // true
Number.isNaN(123);         // false
Number.isNaN("text");      // false (it's a string, not NaN)
```

### Template Literals

Template literals use backticks (`) and allow embedded expressions with `${}`:

```javascript
let name = "Alice";
let age = 25;
let message = `My name is ${name} and I am ${age} years old.`;
// "My name is Alice and I am 25 years old."

// Can include expressions, not just variables
let price = 10;
let quantity = 3;
console.log(`Total: $${price * quantity}`);  // "Total: $30"

// Multi-line strings
let multiline = `Line 1
Line 2
Line 3`;
```

## Tasks

Complete the functions in `data-types.js`. Each function has detailed TODO comments to guide you:

1. **identifyType**: Use `typeof` to identify the type of a value
   - Learn the typeof operator
   - Understand the quirk: `typeof null` returns "object"

2. **createTemplateString**: Create strings using template literals
   - Use backticks and `${}` syntax
   - Embed variables in strings

3. **checkSpecialNumbers**: Work with Infinity and NaN
   - Use Number.isFinite() to detect Infinity
   - Use Number.isNaN() to detect NaN
   - Understand these special numeric values

4. **demonstrateAllTypes**: Return examples of all 8 data types
   - Create one example of each: number, bigint, string, boolean, null, undefined, symbol, object
   - Remember: use `123n` syntax for BigInt, `Symbol()` for symbols

5. **differentiateNullUndefined**: Understand the difference between null and undefined
   - See the typeof differences
   - Understand loose equality (==) vs strict equality (===)
   - Learn when each is used in JavaScript

6. **templateWithExpression**: Calculate expressions inside template literals
   - Embed calculations directly in `${}`
   - See how expressions are evaluated

## Run Tests

Test your solutions:

```bash
npm test exercises/05-data-types
```

## Resources

- [JavaScript.info - Data types](https://javascript.info/types)
- [MDN - JavaScript data types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [MDN - typeof operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
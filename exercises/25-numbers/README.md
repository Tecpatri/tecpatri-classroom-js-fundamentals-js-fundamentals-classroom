# 25 – Numbers

Learn about JavaScript's number type, including different number formats, rounding methods, parsing strings, and handling precision issues.

## Learning Objectives

- Write numbers in different formats (hex, binary, scientific notation)
- Round numbers using various methods
- Parse numbers from strings
- Understand and handle precision limitations
- Validate numbers with isNaN and isFinite

## Key Concepts

### Number Formats

**Scientific notation** with `e`:
```javascript
let billion = 1e9;       // 1 with 9 zeros
let microsec = 1e-6;     // 0.000001 (6 zeros)
```

**Different number systems**:
```javascript
let hex = 0xff;          // 255 in hexadecimal
let binary = 0b11111111; // 255 in binary
let octal = 0o377;       // 255 in octal
```

**Readability with underscores**:
```javascript
let billion = 1_000_000_000; // Same as 1000000000
```

### Converting to Different Bases

The `toString(base)` method converts numbers to strings in different bases (2-36):

```javascript
let num = 255;
num.toString(16); // "ff" (hexadecimal)
num.toString(2);  // "11111111" (binary)
num.toString(36); // "73" (base 36, uses 0-9 and a-z)
```

### Rounding Methods

```javascript
let num = 3.6;

Math.floor(num);  // 3 - rounds down
Math.ceil(num);   // 4 - rounds up
Math.round(num);  // 4 - rounds to nearest integer
Math.trunc(num);  // 3 - removes decimal part

// toFixed(n) - rounds to n decimal places, returns STRING
let pi = 3.14159;
pi.toFixed(2);    // "3.14"
pi.toFixed(0);    // "3"
```

### Parsing Strings to Numbers

`parseInt` and `parseFloat` extract numbers from strings:

```javascript
parseInt('100px');      // 100
parseFloat('12.5em');   // 12.5
parseInt('12.3');       // 12 (parses integers only)

// parseInt with radix (base)
parseInt('ff', 16);     // 255
parseInt('0xff', 16);   // 255
```

### Precision Issues

JavaScript uses 64-bit IEEE-754 format, causing precision problems with decimals:

```javascript
0.1 + 0.2 === 0.3;      // false!
0.1 + 0.2;              // 0.30000000000000004

// Solution: use toFixed() and convert back
+(0.1 + 0.2).toFixed(2); // 0.3
```

### Validation Methods

```javascript
isNaN('text');          // true (converts to number first)
Number.isNaN('text');   // false (stricter, no conversion)

isFinite(100);          // true
isFinite(Infinity);     // false
isFinite('text');       // false

Number.isFinite(100);   // true
Number.isFinite('100'); // false (stricter)
```

### Other Math Functions

```javascript
Math.random();          // Random number 0 to 1
Math.max(1, 5, 3);      // 5
Math.min(1, 5, 3);      // 1
Math.pow(2, 3);         // 8 (2 to the power of 3)
```

## Tasks

Complete the functions in `numbers.js`:

1. **convertToHex**: Convert number to hexadecimal string
2. **roundNumber**: Use different rounding methods
3. **parsePixelValue**: Extract number from string like "100px"
4. **fixPrecision**: Handle decimal precision issues
5. **validateNumber**: Check if value is a valid, finite number
6. **generateRandomInRange**: Create random number between min and max
7. **convertToBase**: Convert number to specified base

## Run Tests

Test your solutions:

```bash
npm test exercises/25-numbers
```

## Resources

- [JavaScript.info - Numbers](https://javascript.info/number)
- [MDN - Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [MDN - Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

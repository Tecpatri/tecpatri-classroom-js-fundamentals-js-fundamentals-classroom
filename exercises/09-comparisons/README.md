# Exercise 09 - Comparisons

Learn about JavaScript's comparison operators and the differences between strict and loose equality.

**Lesson:** [Comparisons - javascript.info](https://javascript.info/comparison)

## Learning Objectives

By completing this exercise, you will learn:
- Comparison operators (>, <, >=, <=, ==, !=, ===, !==)
- Strict equality vs loose equality (=== vs ==)
- String comparison and lexicographical ordering
- Special cases with null and undefined
- Type conversion in comparisons
- Common comparison pitfalls
- Why strict equality (===) is preferred over loose equality (==)

## Key Concepts

### Basic Comparison Operators

JavaScript provides several operators for comparing values:

```javascript
5 > 3    // true - greater than
3 < 5    // true - less than
5 >= 5   // true - greater than or equal
4 <= 3   // false - less than or equal
```

### Equality Operators

There are two types of equality checks in JavaScript:

**Loose Equality (==)** - Compares values after type conversion:
```javascript
5 == '5'     // true (string '5' is converted to number)
0 == false   // true (false is converted to 0)
null == undefined  // true (special case)
```

**Strict Equality (===)** - Compares both value and type:
```javascript
5 === '5'    // false (different types)
0 === false  // false (different types)
null === undefined  // false (different types)
```

**Best Practice:** Always use strict equality (===) unless you have a specific reason to use loose equality.

### String Comparison

Strings are compared character by character in lexicographical order:

```javascript
'Z' > 'A'        // true
'apple' < 'banana'  // true
'2' > '12'       // true (string comparison, not numeric!)
'bee' > 'be'     // true (longer string with same prefix)
```

### Null and Undefined

These values have special comparison rules:

```javascript
// Strict equality
null === undefined  // false

// Loose equality
null == undefined   // true

// Comparisons with null/undefined
null > 0   // false
null == 0  // false
null >= 0  // true (surprising!)

undefined > 0   // false
undefined < 0   // false
undefined == 0  // false
```

**Important:** Be careful when comparing null or undefined with other values.

### Type Conversion in Comparisons

When using comparison operators (>, <, >=, <=), values are converted to numbers:

```javascript
'2' > 1     // true ('2' becomes 2)
'01' == 1   // true ('01' becomes 1)
true == 1   // true (true becomes 1)
false == 0  // true (false becomes 0)
```

## Tasks

Implement the following functions in `comparisons.js`:

1. `isEqual(a, b)` - Check if two values are strictly equal
2. `isGreater(a, b)` - Check if a is greater than b
3. `isLessOrEqual(a, b)` - Check if a is less than or equal to b
4. `compareStrings(str1, str2)` - Compare two strings lexicographically
5. `isLooselyEqual(a, b)` - Check if two values are loosely equal (using ==)
6. `isBetween(x, min, max)` - Check if x is between min and max (inclusive)
7. `isNullish(value)` - Check if value is null or undefined
8. `compareValues(a, b)` - Return 'greater', 'less', or 'equal' based on comparison

## Tips

- Always use strict equality (===) unless you have a specific reason to use loose equality (==)
- String comparison is case-sensitive: 'A' !== 'a'
- For string comparison, uppercase letters are "less than" lowercase: 'Z' < 'a' is true
- Be extra careful when comparing null or undefined with other values using relational operators (>, <, >=, <=)
- To check for null or undefined, use value == null (this checks both) or value === null/undefined separately
- When comparing different types with > or <, JavaScript converts values to numbers

## Resources

- [javascript.info: Comparisons](https://javascript.info/comparison) (Main lesson)
- [MDN: Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#relational_operators)
- [MDN: Equality comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)

## Running Tests

Run only this exercise's tests:

```bash
npm test exercises/09-comparisons
```

Run all tests:

```bash
npm test
```

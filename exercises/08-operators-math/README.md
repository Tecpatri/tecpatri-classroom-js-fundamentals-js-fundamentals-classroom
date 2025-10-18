# Exercise 08 - Basic Operators, Maths

Learn about JavaScript's basic arithmetic operators and mathematical operations.

**Lesson:** [Basic operators, maths - javascript.info](https://javascript.info/operators)

## Learning Objectives

By completing this exercise, you will learn:
- Basic arithmetic operators (+, -, *, /, %, **)
- String concatenation with the + operator
- Unary plus for type conversion
- Increment and decrement operators (++ and --)
- Assignment operators (=, +=, -=, *=, /=, etc.)
- Operator precedence
- The difference between prefix and postfix increment/decrement

## Key Concepts

### Arithmetic Operators

JavaScript supports the standard arithmetic operators:

```javascript
// Addition
5 + 3  // 8

// Subtraction
10 - 4  // 6

// Multiplication
3 * 4  // 12

// Division
15 / 3  // 5

// Remainder (modulo)
10 % 3  // 1

// Exponentiation
2 ** 3  // 8 (2 to the power of 3)
```

### String Concatenation

The + operator can also join (concatenate) strings:

```javascript
"Hello" + " " + "World"  // "Hello World"

// When you add a number to a string, the number is converted to a string
"The answer is " + 42  // "The answer is 42"
```

### Unary Plus

The unary plus (+) converts a value to a number:

```javascript
+true  // 1
+false  // 0
+"123"  // 123
+""  // 0
```

### Increment/Decrement

The ++ and -- operators increase or decrease a number by 1:

```javascript
let counter = 1;
counter++;  // 2 (postfix form)
++counter;  // 3 (prefix form)

counter--;  // 2 (postfix form)
--counter;  // 1 (prefix form)
```

**Important:** Prefix form (++counter) returns the new value, while postfix form (counter++) returns the old value.

### Assignment Operators

Modify and assign in one operation:

```javascript
let x = 5;
x += 3;  // same as x = x + 3, now x is 8
x -= 2;  // same as x = x - 2, now x is 6
x *= 4;  // same as x = x * 4, now x is 24
x /= 3;  // same as x = x / 3, now x is 8
```

## Tasks

Implement the following functions in `operators-math.js`:

1. `add(a, b)` - Return the sum of two numbers
2. `subtract(a, b)` - Return the difference of two numbers
3. `multiply(a, b)` - Return the product of two numbers
4. `divide(a, b)` - Return the quotient of two numbers
5. `remainder(a, b)` - Return the remainder of a divided by b
6. `power(a, b)` - Return a raised to the power of b
7. `concatenate(str1, str2)` - Concatenate two strings with a space between them
8. `convertToNumber(value)` - Convert a value to a number using unary plus
9. `incrementByRef(obj)` - Increment the value property of an object using ++
10. `addAndAssign(obj, num)` - Add a number to object's value using +=
11. `sumStringNumbers(str1, str2)` - Convert string numbers to numbers and return their sum

## Tips

- The exponentiation operator (**) is equivalent to Math.pow(base, exponent)
- String concatenation only works with the + operator, not other arithmetic operators
- Unary plus (+) is the shortest way to convert a string to a number
- Prefix increment (++x) increments and returns the new value, postfix (x++) returns the old value
- Compound assignment operators (+=, -=, etc.) are shorter and often clearer than x = x + y

## Resources

- [javascript.info: Basic operators, maths](https://javascript.info/operators) (Main lesson)
- [MDN: Arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#arithmetic_operators)
- [MDN: Assignment operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators)

## Running Tests

Run only this exercise's tests:

```bash
npm test exercises/08-operators-math
```

Run all tests:

```bash
npm test
```

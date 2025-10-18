# 07 – Type Conversions

Learn how JavaScript converts values between different types: String, Number, and Boolean conversions.

## Learning Objectives

- Convert values to strings using `String()`
- Convert values to numbers using `Number()` and understand edge cases
- Convert values to booleans using `Boolean()` and understand falsy values
- Understand implicit vs explicit type conversion
- Handle conversion edge cases (null, undefined, empty strings)

## Key Concepts

### String Conversion

Use `String(value)` to explicitly convert to a string:

```javascript
String(123);       // "123"
String(true);      // "true"
String(null);      // "null"
String(undefined); // "undefined"
```

String conversion also happens automatically in string contexts:

```javascript
alert(123);        // "123" (alert expects a string)
"Value: " + 5;     // "Value: 5" (+ with string converts to string)
```

### Numeric Conversion

Use `Number(value)` to explicitly convert to a number:

```javascript
Number("123");      // 123
Number("  456  ");  // 456 (whitespace is trimmed)
Number("123.45");   // 123.45
Number("");         // 0 (empty string becomes 0)
Number("   ");      // 0 (whitespace-only becomes 0)
```

#### Numeric Conversion Rules

| Value | Result |
|-------|--------|
| `undefined` | `NaN` |
| `null` | `0` |
| `true` / `false` | `1` / `0` |
| `string` | Whitespace trimmed, then parsed as number. Empty string becomes 0. Invalid format becomes `NaN`. |

```javascript
Number(undefined);  // NaN
Number(null);       // 0 (important!)
Number(true);       // 1
Number(false);      // 0
Number("0");        // 0
Number("abc");      // NaN
```

Numeric conversion happens automatically in math operations:

```javascript
"6" / "2";    // 3 (both strings converted to numbers)
"6" - 2;      // 4
+"123";       // 123 (unary + converts to number)
```

### Boolean Conversion

Use `Boolean(value)` to explicitly convert to a boolean:

**Falsy values** (become `false`):
- `0` and `-0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

**Truthy values** (become `true`):
- Everything else!
- `"0"` (non-empty string, even "0")
- `"false"` (non-empty string)
- `" "` (string with space)
- `[]` (empty array)
- `{}` (empty object)

```javascript
Boolean(1);         // true
Boolean(0);         // false
Boolean("hello");   // true
Boolean("");        // false (empty string is falsy!)
Boolean("0");       // true (non-empty string is truthy, even "0"!)
Boolean(null);      // false
Boolean(undefined); // false
Boolean(NaN);       // false
Boolean(" ");       // true (string with space is truthy!)
```

Boolean conversion happens automatically in logical contexts:

```javascript
if ("hello") {      // "hello" is truthy
  // This runs
}

if (0) {            // 0 is falsy
  // This doesn't run
}
```

## Common Pitfalls

1. **Empty string vs zero**: `Number("")` is `0`, not `NaN`
2. **null vs undefined**: `Number(null)` is `0`, but `Number(undefined)` is `NaN`
3. **String "0"**: `Boolean("0")` is `true` (non-empty string)
4. **String with spaces**: `Number("   ")` is `0`, `Boolean("   ")` is `true`

## Tasks

Complete the functions in `type-conversions.js`:

1. **convertToString**: Practice String conversion
2. **convertToNumber**: Practice Number conversion with edge cases
3. **convertToBoolean**: Understand falsy vs truthy values
4. **handleConversionEdgeCases**: Master null, undefined, empty string conversions
5. **demonstrateImplicitConversion**: See automatic type conversion in action

## Run Tests

Test your solutions:

```bash
npm test exercises/07-type-conversions
```

## Resources

- [JavaScript.info - Type Conversions](https://javascript.info/type-conversions)
- [MDN - Type coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)
- [MDN - Falsy values](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
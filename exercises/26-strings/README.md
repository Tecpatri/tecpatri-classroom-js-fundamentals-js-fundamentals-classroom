# 26 – Strings

Master JavaScript string methods for searching, extracting, and transforming text. Learn about string immutability and character access.

## Learning Objectives

- Access characters with bracket notation and at() method
- Search for substrings using indexOf, includes, startsWith, endsWith
- Extract portions of strings with slice, substring, substr
- Transform strings with case conversion methods
- Understand string immutability

## Key Concepts

### String Immutability

Strings cannot be modified in place. You must create a new string:

```javascript
let str = 'Hi';
str[0] = 'h'; // Doesn't work!
str = str[0].toLowerCase() + str.slice(1); // This works: "hi"
```

### Character Access

**Bracket notation** and **at() method**:
```javascript
let str = 'Hello';
str[0];      // 'H'
str[4];      // 'o'
str.at(0);   // 'H'
str.at(-1);  // 'o' - negative indexes work with at()
str[-1];     // undefined - negative indexes don't work with brackets
```

### Special Characters

Use escape sequences for special characters:
```javascript
let newLine = 'Line 1\nLine 2';  // \n is newline
let tab = 'A\tB';                // \t is tab
let backslash = 'C:\\path';      // \\ is single backslash
```

### Searching Substrings

**indexOf** - finds position or returns -1:
```javascript
let str = 'Widget with id';
str.indexOf('Widget');    // 0
str.indexOf('widget');    // -1 (case sensitive)
str.indexOf('id');        // 1 (first occurrence)
str.indexOf('id', 2);     // 12 (search from position 2)
```

**includes, startsWith, endsWith**:
```javascript
'Widget'.includes('id');      // true
'Widget'.startsWith('Wid');   // true
'Widget'.endsWith('get');     // true
```

### Extracting Substrings

**slice(start, end)** - most flexible, supports negative indexes:
```javascript
let str = 'stringify';
str.slice(0, 5);   // 'strin'
str.slice(2);      // 'ringify' (from position 2 to end)
str.slice(-4, -1); // 'gif' (negative indexes count from end)
```

**substring(start, end)** - similar to slice but no negative values:
```javascript
str.substring(2, 6); // 'ring'
str.substring(6, 2); // 'ring' (swaps if start > end)
```

**substr(start, length)** - uses length instead of end position (deprecated):
```javascript
str.substr(2, 4); // 'ring' (4 characters from position 2)
```

### Case Conversion

```javascript
'Hello'.toLowerCase();  // 'hello'
'Hello'.toUpperCase();  // 'HELLO'
'Hello'[0].toLowerCase(); // 'h' (single character)
```

### Comparing Strings

**localeCompare** for proper language-aware comparison:
```javascript
'Österreich'.localeCompare('Zealand'); // -1 (correct order)
```

## Tasks

Complete the functions in `strings.js`:

1. **getCharacter**: Access character by index with at()
2. **findSubstring**: Search for substring position
3. **extractPortion**: Extract substring with slice
4. **checkInclusion**: Check if string contains substring
5. **changeCase**: Convert to uppercase or lowercase
6. **capitalizeFirst**: Capitalize first letter only
7. **checkStartEnd**: Verify string starts/ends with text

## Run Tests

Test your solutions:

```bash
npm test exercises/26-strings
```

## Resources

- [JavaScript.info - Strings](https://javascript.info/string)
- [MDN - String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

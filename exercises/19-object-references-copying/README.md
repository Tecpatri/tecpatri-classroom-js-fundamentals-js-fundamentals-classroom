# 19 – Object References and Copying

Learn how JavaScript handles object references and how to properly copy objects.

## Learning Objectives

- Understand that objects are stored and copied by reference
- Distinguish between reference equality and value equality
- Create shallow copies using `Object.assign()` and spread operator
- Understand the limitations of shallow copying
- Create deep copies using `structuredClone()`
- Merge objects effectively

## Key Concepts

### Objects are Stored by Reference

Unlike primitives (numbers, strings, booleans) which are copied by value, objects are copied by reference:

```javascript
// Primitives - copied by value
let a = 5
let b = a  // b gets a COPY of the value
b = 10
console.log(a)  // 5 - original unchanged

// Objects - copied by reference
let user = { name: 'John' }
let admin = user  // admin references the SAME object
admin.name = 'Jane'
console.log(user.name)  // 'Jane' - original changed!
```

### Comparison by Reference

Two objects are only equal if they reference the same object:

```javascript
let a = {}
let b = {}
console.log(a == b)   // false - different objects

let c = a
console.log(a == c)   // true - same object reference
```

### Const with Objects

`const` prevents reassignment but doesn't prevent modification:

```javascript
const user = { name: 'John' }
user.name = 'Jane'  // OK - modifying properties
user = {}           // Error - cannot reassign const variable
```

### Shallow Copying

**Using Object.assign():**
```javascript
const original = { name: 'John', age: 30 }
const copy = Object.assign({}, original)
// copy is a NEW object with the same properties
```

**Using spread operator:**
```javascript
const original = { name: 'John', age: 30 }
const copy = { ...original }
// Cleaner syntax, same result
```

### Shallow Copy Limitations

Shallow copies only duplicate the top level. Nested objects remain referenced:

```javascript
const user = {
  name: 'John',
  address: { city: 'NYC' }
}

const copy = { ...user }
copy.address.city = 'LA'

console.log(user.address.city)  // 'LA' - nested object is still shared!
```

### Deep Copying

Use `structuredClone()` to create completely independent copies:

```javascript
const user = {
  name: 'John',
  address: { city: 'NYC' }
}

const copy = structuredClone(user)
copy.address.city = 'LA'

console.log(user.address.city)  // 'NYC' - original unchanged!
console.log(copy.address.city)  // 'LA'
```

**structuredClone features:**
- Handles nested objects
- Handles circular references
- Copies arrays within objects
- Cannot copy functions

### Merging Objects

Merge multiple objects into one:

```javascript
const defaults = { theme: 'light', lang: 'en' }
const userPrefs = { lang: 'es', size: 'large' }

const settings = Object.assign({}, defaults, userPrefs)
// { theme: 'light', lang: 'es', size: 'large' }
// Later objects override earlier ones

// Or with spread:
const settings = { ...defaults, ...userPrefs }
```

### Common Pitfalls

1. **Thinking assignment creates a copy**
   ```javascript
   let original = { a: 1 }
   let copy = original  // NOT a copy, just another reference!
   ```

2. **Forgetting about nested objects**
   ```javascript
   let copy = { ...original }  // Nested objects still shared!
   ```

3. **Using shallow copy when deep copy needed**
   ```javascript
   // Need nested independence? Use structuredClone
   let copy = structuredClone(original)
   ```

## Tasks

Complete the functions in `object-references-copying.js`:

1. **demonstrateReference**: Show that objects are passed by reference
2. **comparePrimitives**: Compare primitive values
3. **compareObjectReferences**: Compare object references
4. **notACopy**: Demonstrate that assignment doesn't create a copy
5. **shallowCopy**: Create a shallow copy with `Object.assign()`
6. **shallowCopyWithSpread**: Create a shallow copy with spread operator
7. **demonstrateShallowCopyProblem**: Show shallow copy limitations
8. **deepCopy**: Create a deep copy with `structuredClone()`
9. **mergeObjects**: Merge objects with `Object.assign()`
10. **mergeMultiple**: Merge multiple objects
11. **cloneAndModify**: Clone and add properties
12. **testIndependence**: Verify copies are independent
13. **modifyConstObject**: Show const objects are still mutable
14. **copyArrayOfObjects**: Copy array but objects inside are still references
15. **deepCopyArray**: Deep copy an array of objects

## Run Tests

Test your solutions:

```bash
npm test exercises/19-object-references-copying
```

## Resources

- [JavaScript.info - Object References and Copying](https://javascript.info/object-copy)
- [MDN - Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- [MDN - structuredClone()](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)
- [MDN - Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

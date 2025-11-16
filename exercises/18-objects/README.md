# 18 – Objects

Learn how to create and work with objects in JavaScript.

## Learning Objectives

- Create objects using object literal syntax
- Access and modify object properties
- Use both dot notation and bracket notation
- Check for property existence using the `in` operator
- Use computed properties and property shorthand
- Iterate over object properties with `for...in`

## Key Concepts

### Object Creation

Objects store keyed collections of data. Create them using curly braces:

```javascript
const user = {
  name: 'John',
  age: 30,
  city: 'NYC'
}
```

### Property Access

**Dot notation** - for simple property names:
```javascript
user.name      // 'John'
user.age       // 30
```

**Bracket notation** - for multiword properties or computed names:
```javascript
user['name']           // 'John'
user['likes birds']    // for properties with spaces
const key = 'age'
user[key]              // 30 - using a variable
```

### Adding and Modifying Properties

```javascript
// Add new property
user.email = 'john@example.com'

// Modify existing property
user.age = 31

// Delete property
delete user.password
```

### Property Existence

The `in` operator checks if a property exists (better than checking for undefined):

```javascript
'name' in user      // true
'salary' in user    // false

// Why 'in' is better:
const obj = { test: undefined }
obj.test === undefined   // true - but property exists!
'test' in obj            // true - correctly identifies it
```

### Computed Properties

Use square brackets to create properties with dynamic names:

```javascript
const key = 'color'
const obj = {
  [key]: 'blue'  // same as { color: 'blue' }
}

const fruit = 'apple'
const bag = {
  [fruit + 'Count']: 5  // { appleCount: 5 }
}
```

### Property Shorthand

When variable names match property names, use shorthand:

```javascript
const name = 'Alice'
const age = 30

// Instead of:
const user = { name: name, age: age }

// Use shorthand:
const user = { name, age }
```

### Iterating Over Properties

Use `for...in` loop to iterate over all properties:

```javascript
const user = { name: 'John', age: 30, city: 'NYC' }

for (const key in user) {
  console.log(key)           // property name
  console.log(user[key])     // property value
}
```

### Property Ordering

- **Integer properties** (like "1", "42") are sorted automatically
- **Other properties** appear in creation order

```javascript
const codes = {
  "49": "Germany",
  "1": "USA",
  "44": "UK"
}
// Iteration order: "1", "44", "49" (sorted numerically)

const user = {
  name: "John",
  age: 30
}
// Iteration order: "name", "age" (creation order)
```

### Multiword Properties

Properties can have spaces, but must use quotes and bracket notation:

```javascript
const user = {
  'likes birds': true,  // must use quotes
  'can swim': false
}

user['likes birds']  // access with brackets
user.likes birds     // Syntax Error!
```

## Tasks

Complete the functions in `objects.js`:

1. **createUser**: Create a basic object with properties
2. **getTitle**: Access properties using dot notation
3. **getProperty**: Access properties using bracket notation
4. **addEmail**: Add a new property to an object
5. **updatePrice**: Modify an existing property
6. **removePassword**: Delete a property using the `delete` operator
7. **hasProperty**: Check property existence with `in` operator
8. **createDynamicObject**: Use computed property names
9. **createPersonShorthand**: Use property shorthand syntax
10. **propertyExists**: Properly check for property existence
11. **getKeys**: Iterate over properties with `for...in`
12. **sumValues**: Iterate and accumulate values
13. **createCounter**: Create an object with a method
14. **createObjectWithMultiwordProperty**: Use multiword property names
15. **getMultiwordProperty**: Access multiword properties

## Run Tests

Test your solutions:

```bash
npm test exercises/18-objects
```

## Resources

- [JavaScript.info - Objects](https://javascript.info/object)
- [MDN - Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
- [MDN - Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

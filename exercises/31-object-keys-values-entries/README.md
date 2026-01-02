# 31 – Object.keys, values, entries

Learn how to work with plain objects using Object.keys(), Object.values(), and Object.entries().

## Learning Objectives

- Use Object.keys() to get an array of property names
- Use Object.values() to get an array of property values
- Use Object.entries() to get an array of [key, value] pairs
- Transform objects using the entries → array methods → fromEntries pattern
- Understand the difference between object methods and Map methods
- Convert between objects and Maps

## Key Concepts

### The Three Core Methods

JavaScript provides three static methods for working with plain objects:

```javascript
const user = {
  name: 'Alice',
  age: 25,
  city: 'NYC'
}

// Get array of keys
console.log(Object.keys(user))
// ['name', 'age', 'city']

// Get array of values
console.log(Object.values(user))
// ['Alice', 25, 'NYC']

// Get array of [key, value] pairs
console.log(Object.entries(user))
// [['name', 'Alice'], ['age', 25], ['city', 'NYC']]
```

### Differences from Map Methods

The syntax is different from Map:

```javascript
// Map methods (instance methods)
const map = new Map()
map.keys()    // Returns an iterator
map.values()  // Returns an iterator
map.entries() // Returns an iterator

// Object methods (static methods)
Object.keys(obj)    // Returns an array
Object.values(obj)  // Returns an array
Object.entries(obj) // Returns an array
```

**Key differences:**
- Object methods are **static** (called on Object, not the instance)
- Object methods return **arrays** (not iterators)
- Object methods only work with string keys (ignore Symbols)

### Iterating Over Objects

Use these methods to iterate over object data:

```javascript
const prices = {
  apple: 1.5,
  banana: 0.8,
  orange: 2.0
}

// Iterate over keys
for (let fruit of Object.keys(prices)) {
  console.log(fruit) // 'apple', 'banana', 'orange'
}

// Iterate over values
for (let price of Object.values(prices)) {
  console.log(price) // 1.5, 0.8, 2.0
}

// Iterate over entries
for (let [fruit, price] of Object.entries(prices)) {
  console.log(`${fruit}: $${price}`)
}
```

### Transforming Objects

A powerful pattern for transforming objects:

1. **Object.entries()** - Convert object to array of [key, value] pairs
2. **Array methods** - Use map, filter, etc. to transform
3. **Object.fromEntries()** - Convert back to object

```javascript
const prices = { apple: 1.5, banana: 0.8, orange: 2.0 }

// Double all prices
const doubled = Object.fromEntries(
  Object.entries(prices).map(([fruit, price]) => [fruit, price * 2])
)
// { apple: 3, banana: 1.6, orange: 4 }

// Filter by value
const expensive = Object.fromEntries(
  Object.entries(prices).filter(([fruit, price]) => price > 1)
)
// { apple: 1.5, orange: 2.0 }
```

### Object.fromEntries()

Converts an array of [key, value] pairs back into an object:

```javascript
const entries = [
  ['name', 'Alice'],
  ['age', 25]
]

const obj = Object.fromEntries(entries)
// { name: 'Alice', age: 25 }
```

This is especially useful for:
- Converting Map to object: `Object.fromEntries(map)`
- Rebuilding objects after transformation

### Converting Between Objects and Maps

```javascript
// Object to Map
const obj = { name: 'Alice', age: 25 }
const map = new Map(Object.entries(obj))

// Map to Object
const backToObj = Object.fromEntries(map)
```

### Counting Properties

Use Object.keys() to count properties:

```javascript
const user = { name: 'Alice', age: 25, city: 'NYC' }
const propertyCount = Object.keys(user).length
console.log(propertyCount) // 3
```

### Important Limitations

These methods:
- Only work with **own enumerable properties** (not inherited)
- Ignore **Symbol** keys
- Follow the same order as a `for...in` loop

```javascript
const obj = {
  name: 'Alice',
  [Symbol('id')]: 123  // This will be ignored!
}

console.log(Object.keys(obj)) // ['name']
```

## Tasks

Complete the functions in `object-keys-values-entries.js`:

1. **getObjectKeys**: Use Object.keys() to get property names
2. **getObjectValues**: Use Object.values() to get property values
3. **getObjectEntries**: Use Object.entries() to get [key, value] pairs
4. **countProperties**: Count how many properties an object has
5. **sumObjectValues**: Sum all numeric values in an object
6. **hasKey**: Check if a key exists using Object.keys()
7. **objectToMap**: Convert object to Map using Object.entries()
8. **mapToObject**: Convert Map to object using Object.fromEntries()
9. **doubleValues**: Transform object values using entries → map → fromEntries
10. **filterByValue**: Filter object entries based on value predicate
11. **swapKeysAndValues**: Swap keys and values in an object
12. **mergeObjects**: Combine two objects into one
13. **getKeysByType**: Get keys whose values match a specific type
14. **createObjectFromArrays**: Create object from separate key and value arrays

## Run Tests

Test your solutions:

```bash
npm test exercises/31-object-keys-values-entries
```

## Resources

- [JavaScript.info - Object.keys, values, entries](https://javascript.info/keys-values-entries)
- [MDN - Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [MDN - Object.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
- [MDN - Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
- [MDN - Object.fromEntries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)

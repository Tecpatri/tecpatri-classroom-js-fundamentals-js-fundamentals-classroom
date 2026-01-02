# 30 – Map and Set

Learn about Map and Set, two powerful collection data structures in JavaScript.

## Learning Objectives

- Understand what Map and Set are and when to use them
- Use Map methods: set, get, has, delete, clear, size
- Use Set methods: add, delete, has, clear, size
- Leverage Maps to use objects as keys
- Use Sets to automatically handle uniqueness
- Convert between Maps/Sets and arrays/objects

## Key Concepts

### What is a Map?

A **Map** is a collection of keyed data items, similar to an Object. The key difference: **Map allows keys of any type**, including objects, numbers, and booleans.

```javascript
const map = new Map()

map.set('1', 'string key')   // String key
map.set(1, 'number key')      // Number key
map.set(true, 'boolean key')  // Boolean key

console.log(map.get('1'))  // 'string key'
console.log(map.get(1))    // 'number key'
console.log(map.size)      // 3
```

### Map Methods

- **`map.set(key, value)`** – stores a value by key, returns the map (chainable)
- **`map.get(key)`** – returns the value by key, or `undefined` if not found
- **`map.has(key)`** – returns `true` if the key exists, `false` otherwise
- **`map.delete(key)`** – removes the value by key, returns `true` if key existed
- **`map.clear()`** – removes everything from the map
- **`map.size`** – returns the current element count (NOT `.length`!)

```javascript
const map = new Map()

map.set('name', 'Alice')
   .set('age', 25)        // Chaining!

console.log(map.get('name'))     // 'Alice'
console.log(map.has('age'))      // true
console.log(map.size)            // 2

map.delete('age')
console.log(map.has('age'))      // false
```

### Using Objects as Map Keys

This is Map's superpower! You can use objects as keys, and they remain separate even if they look identical.

```javascript
const user1 = { id: 1 }
const user2 = { id: 2 }

const visits = new Map()
visits.set(user1, 5)
visits.set(user2, 3)

console.log(visits.get(user1))  // 5
console.log(visits.get(user2))  // 3

// This doesn't work with regular objects!
// They would both become "[object Object]" as string keys
```

### What is a Set?

A **Set** is a collection of unique values. Each value can only occur once in a Set.

```javascript
const set = new Set()

set.add(1)
set.add(2)
set.add(2)  // Ignored! Already exists

console.log(set.size)     // 2
console.log(set.has(1))   // true
```

### Set Methods

- **`set.add(value)`** – adds a value, returns the set (chainable)
- **`set.delete(value)`** – removes the value, returns `true` if value existed
- **`set.has(value)`** – returns `true` if the value exists, `false` otherwise
- **`set.clear()`** – removes everything from the set
- **`set.size`** – returns the current element count

```javascript
const tags = new Set()

tags.add('javascript')
    .add('web')
    .add('coding')

console.log(tags.has('web'))     // true
console.log(tags.size)           // 3

tags.delete('web')
console.log(tags.has('web'))     // false
```

### Removing Duplicates with Set

A common use case: remove duplicates from an array!

```javascript
const numbers = [1, 2, 2, 3, 3, 3, 4]
const unique = [...new Set(numbers)]
console.log(unique)  // [1, 2, 3, 4]
```

### Iteration

Both Map and Set are iterable and preserve insertion order:

```javascript
const map = new Map([
  ['name', 'Alice'],
  ['age', 25]
])

// Iterate over keys
for (let key of map.keys()) {
  console.log(key)
}

// Iterate over values
for (let value of map.values()) {
  console.log(value)
}

// Iterate over entries [key, value]
for (let [key, value] of map.entries()) {
  console.log(key, value)
}

// forEach
map.forEach((value, key) => {
  console.log(key, value)
})
```

```javascript
const set = new Set(['a', 'b', 'c'])

for (let value of set) {
  console.log(value)
}

set.forEach(value => {
  console.log(value)
})
```

### Converting Between Types

```javascript
// Object to Map
const obj = { name: 'Alice', age: 25 }
const map = new Map(Object.entries(obj))

// Map to Object
const mapToObj = Object.fromEntries(map)

// Array to Set
const arr = [1, 2, 2, 3]
const set = new Set(arr)

// Set to Array
const setToArr = [...set]
// or
const setToArr2 = Array.from(set)
```

## Tasks

Complete the functions in `map-set.js`:

1. **trackUserVisits**: Use Map to count visits with user objects as keys
2. **getUserVisits**: Get visit count for a specific user from Map
3. **getUniqueTags**: Create a Set from an array to get unique values
4. **addTags**: Add multiple tags to an existing Set
5. **hasAllTags**: Check if a Set contains all required tags
6. **setToArray**: Convert a Set to an array
7. **removeDuplicates**: Use Set to remove duplicates from an array
8. **getSizes**: Get the size property of Map and Set
9. **clearCollections**: Clear both Map and Set
10. **getMapEntries**: Iterate over Map using forEach
11. **objectToMap**: Convert a plain object to Map
12. **setIntersection**: Find common elements between two Sets

## Run Tests

Test your solutions:

```bash
npm test exercises/30-map-set
```

## Resources

- [JavaScript.info - Map and Set](https://javascript.info/map-set)
- [MDN - Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [MDN - Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

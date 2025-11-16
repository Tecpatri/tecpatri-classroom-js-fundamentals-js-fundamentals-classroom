# 23 – Optional Chaining '?.'

Learn how to safely access nested properties using optional chaining.

## Learning Objectives

- Understand the optional chaining operator `?.`
- Safely access nested object properties
- Use optional chaining with method calls
- Combine optional chaining with nullish coalescing
- Recognize when to use (and when not to use) optional chaining

## Key Concepts

### The Problem

Accessing nested properties can be risky:

```javascript
const user = {}
console.log(user.address.street)  // Error! Cannot read 'street' of undefined
```

Traditional solution - check each level:

```javascript
const street = user && user.address && user.address.street
// Works but verbose and repetitive
```

### Optional Chaining to the Rescue

The `?.` operator stops evaluation if the value before it is `null` or `undefined`:

```javascript
const street = user?.address?.street  // undefined (no error!)
```

**Key behavior**: Returns `undefined` if the value before `?.` is `null`/`undefined`

### Three Syntax Forms

**1. Property access: `obj?.prop`**
```javascript
const user = null
console.log(user?.name)  // undefined (not an error)
```

**2. Bracket notation: `obj?.[prop]`**
```javascript
const key = 'name'
console.log(user?.[key])  // undefined
```

**3. Method calls: `obj?.method()`**
```javascript
const user = {}
console.log(user.getName?.())  // undefined (method doesn't exist)
```

### Short-Circuiting

Optional chaining stops ("short-circuits") immediately when it hits `null`/`undefined`:

```javascript
let user = null
let x = 0

// x++ never runs because evaluation stops at user
user?.sayHi(x++)

console.log(x)  // 0 (unchanged)
```

### Combining with Nullish Coalescing

Use `??` to provide default values:

```javascript
const city = user?.address?.city ?? 'Unknown'
// Get city if exists, otherwise 'Unknown'
```

### Safe Method Calls

Call methods that might not exist:

```javascript
const userAdmin = {
  admin () { console.log('I am admin') }
}

const userGuest = {}

userAdmin.admin?.()  // I am admin
userGuest.admin?.()  // nothing happens (no error)
```

### Accessing Array Elements

Safely access array elements:

```javascript
const users = null

console.log(users?.[0])  // undefined
console.log(users?.[0]?.name)  // undefined
```

### Deep Nesting

Chain multiple optional accesses:

```javascript
const config = {
  user: {
    settings: {
      theme: {
        color: 'dark'
      }
    }
  }
}

const color = config?.user?.settings?.theme?.color  // 'dark'
const font = config?.user?.settings?.theme?.font   // undefined
```

### Multiple Paths with Fallbacks

Try multiple locations:

```javascript
const name = config?.user?.name ??
             config?.account?.name ??
             'Guest'
```

### Important Limitations

**1. Cannot use on left side of assignment:**
```javascript
user?.name = 'John'  // Syntax Error!
```

**2. Cannot use with `delete`:**
```javascript
delete user?.name  // Syntax Error!
```

**3. Variable must be declared:**
```javascript
undeclaredVar?.prop  // ReferenceError!
// Optional chaining doesn't help with undeclared variables
```

### When to Use Optional Chaining

**Good use cases:**
- Accessing properties from external data (APIs, user input)
- Optional function parameters
- Checking if optional callbacks exist before calling

```javascript
function saveSettings (settings, onSuccess) {
  // save logic...
  onSuccess?.()  // call if provided
}
```

**Don't overuse:**
```javascript
// Bad - hides bugs
user?.name?.toString()?.toUpperCase()?.trim()

// If user or name being null is unexpected, it's better to get an error
// Good - fails fast if required data is missing
user.name.toString().toUpperCase().trim()
```

### Comparing Approaches

**Without optional chaining:**
```javascript
const street = user && user.address && user.address.street
```

**With optional chaining:**
```javascript
const street = user?.address?.street
```

**Benefits:**
- More readable
- Less repetitive
- Shorter code
- Same safety

### Common Patterns

**1. Accessing nested API data:**
```javascript
const userName = apiResponse?.data?.user?.name ?? 'Anonymous'
```

**2. Optional callbacks:**
```javascript
function fetchData (url, callbacks) {
  // fetch logic...
  callbacks?.onSuccess?.(data)
  callbacks?.onError?.(error)
}
```

**3. Safely calling array methods:**
```javascript
const firstUser = users?.filter(u => u.active)?.[0]
```

**4. Checking permissions:**
```javascript
const canEdit = user?.permissions?.edit ?? false
```

### Optional Chaining vs Logical AND

Both can check existence, but behave differently:

```javascript
const user = { name: '', age: 0 }

// Logical AND - treats falsy values as "doesn't exist"
console.log(user && user.name)  // '' (falsy but exists!)
console.log(user && user.age)   // 0 (falsy but exists!)

// Optional chaining - only cares about null/undefined
console.log(user?.name)  // '' (correct - property exists)
console.log(user?.age)   // 0 (correct - property exists)
```

### Best Practices

1. **Use sparingly** - Only when absence is genuinely acceptable
2. **Fail fast** - Don't hide bugs that should be caught
3. **Combine with `??`** - Provide sensible defaults
4. **Document assumptions** - Make it clear what can be null
5. **Prefer early returns** - Sometimes explicit checks are clearer

```javascript
// Sometimes explicit is better
function processUser (user) {
  if (!user || !user.address) {
    return 'Invalid user'
  }
  return user.address.street
}

// vs
function processUser (user) {
  return user?.address?.street ?? 'Invalid user'
}
```

## Tasks

Complete the functions in `optional-chaining.js`:

1. **getStreet**: Basic optional chaining
2. **getCityWithDefault**: Combine with nullish coalescing
3. **getStreetTraditional**: Compare with traditional approach
4. **getFirstUserName**: Optional chaining with arrays
5. **callGetName**: Optional method calls
6. **getTheme**: Deep nested access
7. **chainAccess**: Multiple level chaining
8. **getPropertySafely**: With computed properties
9. **callCallback**: Safe callback execution
10. **getNameFromConfig**: Multiple fallback paths
11. **cannotDeleteWithOptionalChaining**: Understand limitations
12. **checkPermission**: Call nested methods safely
13. **demonstrateShortCircuit**: Short-circuiting behavior
14. **checkActiveAndPermission**: Combine with logical operators
15. **handleUndefinedValue**: Handle undefined values
16. **safeMap**: Safe array method calls
17. **getAgeCategory**: Complex conditional logic
18. **addOptionalValues**: Multiple optional values
19. **triggerChange**: Optional callback pattern
20. **getItemName**: Nested array access

## Run Tests

Test your solutions:

```bash
npm test exercises/23-optional-chaining
```

## Resources

- [JavaScript.info - Optional Chaining](https://javascript.info/optional-chaining)
- [MDN - Optional Chaining (?. )](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [TC39 - Optional Chaining Proposal](https://github.com/tc39/proposal-optional-chaining)

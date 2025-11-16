# 22 – Constructor Functions and "new"

Learn how to create objects using constructor functions and the `new` operator.

## Learning Objectives

- Create constructor functions
- Understand how the `new` operator works
- Add methods to constructed objects
- Understand return behavior in constructors
- Use `new.target` to detect how function was called
- Recognize constructor patterns and best practices

## Key Concepts

### Constructor Functions

Constructor functions are regular functions used to create multiple similar objects:

```javascript
function User (name, age) {
  this.name = name
  this.age = age
}

const user1 = new User('John', 30)
const user2 = new User('Jane', 25)
```

**Naming convention**: Constructor functions should start with a capital letter.

### How "new" Works

When `new User(...)` is called:

1. A new empty object is created and assigned to `this`
2. The function body executes, usually adding properties to `this`
3. The value of `this` is returned automatically

```javascript
function User (name) {
  // this = {}  (implicitly)

  this.name = name
  this.isAdmin = false

  // return this  (implicitly)
}
```

### Adding Methods in Constructors

Methods can be added directly in the constructor:

```javascript
function User (name) {
  this.name = name

  this.sayHi = function () {
    console.log(`My name is ${this.name}`)
  }
}

const user = new User('John')
user.sayHi()  // My name is John
```

### Return Behavior

**Normal case** - no return statement:
- The `new` operator automatically returns `this`

**Returning an object**:
- If you return an object, that object is returned instead of `this`

```javascript
function BigUser () {
  this.name = 'John'
  return { name: 'Override' }  // this object is returned
}

console.log(new BigUser().name)  // Override
```

**Returning a primitive**:
- Primitive return values are ignored, `this` is returned

```javascript
function SmallUser () {
  this.name = 'John'
  return 123  // ignored
}

console.log(new SmallUser().name)  // John
```

### Omitting Parentheses

If there are no arguments, parentheses can be omitted (not recommended for readability):

```javascript
const user = new User  // same as new User()
```

### Methods with Computed Values

Constructors can compute properties:

```javascript
function Rectangle (width, height) {
  this.width = width
  this.height = height
  this.area = width * height  // computed property
}
```

### Constructor Without "new"

Calling a constructor without `new` causes problems:

```javascript
function User (name) {
  this.name = name  // 'this' is undefined in strict mode!
}

const user = User('John')  // ERROR! Cannot set property 'name' of undefined
```

### Detecting "new" with new.target

`new.target` is a special property:
- `undefined` if function is called without `new`
- Equals the constructor if called with `new`

```javascript
function User (name) {
  if (!new.target) {
    throw new Error('Must use new with User')
  }
  this.name = name
}

User('John')        // Error!
new User('John')    // OK
```

Or make it work both ways:

```javascript
function User (name) {
  if (!new.target) {
    return new User(name)  // redirect to new
  }
  this.name = name
}

const user = User('John')  // works!
```

### Immediately Invoked Constructor

For one-off complex objects, use an immediately called constructor:

```javascript
const user = new function () {
  this.name = 'John'
  this.isAdmin = false
  // complex logic here
}
```

### Encapsulation with Closures

Variables declared in constructor (not assigned to `this`) act as "private":

```javascript
function User (name) {
  let birthday = new Date()  // private variable

  this.name = name

  this.getAge = function () {
    const today = new Date()
    // can access birthday here
    return today.getFullYear() - birthday.getFullYear()
  }
}

const user = new User('John')
console.log(user.birthday)  // undefined - private!
console.log(user.getAge())  // works - method can access it
```

### Constructor Pattern vs Object Literal

**Object literal** - for single objects:
```javascript
const user = {
  name: 'John',
  age: 30
}
```

**Constructor** - for multiple similar objects:
```javascript
function User (name, age) {
  this.name = name
  this.age = age
}

const user1 = new User('John', 30)
const user2 = new User('Jane', 25)
```

### Common Patterns

**1. Simple data objects:**
```javascript
function Point (x, y) {
  this.x = x
  this.y = y
}
```

**2. Objects with methods:**
```javascript
function Calculator (initial = 0) {
  this.value = initial

  this.add = function (n) {
    this.value += n
    return this  // for chaining
  }

  this.subtract = function (n) {
    this.value -= n
    return this
  }
}

new Calculator(10).add(5).subtract(3)
```

**3. Objects with validation:**
```javascript
function User (name) {
  if (name.length < 3) {
    throw new Error('Name too short')
  }
  this.name = name
}
```

## Tasks

Complete the functions in `constructor-new.js`:

1. **User**: Basic constructor with properties
2. **createUser**: Use constructor with `new`
3. **Product**: Constructor with methods
4. **Animal**: Constructor with default parameters
5. **Rectangle**: Constructor that computes properties
6. **Circle**: Constructor with method using properties
7. **Password**: Constructor with validation logic
8. **SpecialConstructor**: Demonstrate return object behavior
9. **PrimitiveReturn**: Demonstrate primitive return ignored
10. **createMultipleUsers**: Main purpose - create multiple objects
11. **createProductWithoutParens**: Omit parentheses syntax
12. **TodoList**: Constructor with array and methods
13. **SafeUser**: Use `new.target` for safety check
14. **createSingleComplexUser**: Immediately invoked constructor
15. **Counter**: Private variables with closures

## Run Tests

Test your solutions:

```bash
npm test exercises/22-constructor-new
```

## Resources

- [JavaScript.info - Constructor, operator "new"](https://javascript.info/constructor-new)
- [MDN - new operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
- [MDN - new.target](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target)
# 21 – Object Methods and "this"

Learn how to add methods to objects and understand the `this` keyword.

## Learning Objectives

- Create objects with methods
- Understand how `this` works in methods
- Use method shorthand syntax
- Recognize the difference between regular functions and arrow functions
- Enable method chaining by returning `this`
- Avoid common `this` pitfalls

## Key Concepts

### Methods in Objects

A method is a function stored as an object property:

```javascript
const user = {
  name: 'John',
  sayHi () {  // method shorthand
    console.log('Hello!')
  }
}

user.sayHi()  // Hello!
```

**Longhand vs Shorthand:**
```javascript
// Longhand
const obj = {
  method: function () {
    // ...
  }
}

// Shorthand (preferred)
const obj = {
  method () {
    // ...
  }
}
```

### The "this" Keyword

`this` refers to the object that is executing the current method:

```javascript
const user = {
  name: 'John',
  sayHi () {
    console.log(this.name)  // 'this' is user
  }
}

user.sayHi()  // John
```

**Key Rule**: The value of `this` is determined **at call time**, not when the method is defined.

```javascript
const user = { name: 'John' }
const admin = { name: 'Admin' }

function sayHi () {
  console.log(this.name)
}

user.f = sayHi
admin.f = sayHi

user.f()   // John (this = user)
admin.f()  // Admin (this = admin)
```

### "this" Without an Object

If a function is called without an object, `this` is `undefined` (in strict mode):

```javascript
function sayHi () {
  console.log(this)
}

sayHi()  // undefined (in strict mode)
```

This causes problems when extracting methods:

```javascript
const user = {
  name: 'John',
  sayHi () {
    console.log(this.name)
  }
}

const hi = user.sayHi  // extract method
hi()  // Error! Cannot read property 'name' of undefined
```

### Arrow Functions Don't Have "this"

Arrow functions don't have their own `this`. They inherit it from the outer scope:

```javascript
const user = {
  name: 'John',
  sayHi () {
    const arrow = () => {
      console.log(this.name)  // inherits 'this' from sayHi
    }
    arrow()
  }
}

user.sayHi()  // John
```

**Important**: Arrow functions as methods don't work as expected:

```javascript
const user = {
  name: 'John',
  sayHi: () => {
    console.log(this.name)  // 'this' is NOT the object!
  }
}

user.sayHi()  // undefined (arrow function doesn't have its own 'this')
```

**Rule**: Use regular functions for methods, use arrow functions inside methods.

### Method Chaining

Methods can return `this` to enable chaining:

```javascript
const ladder = {
  step: 0,
  up () {
    this.step++
    return this
  },
  down () {
    this.step--
    return this
  }
}

ladder.up().up().down()  // chaining!
console.log(ladder.step)  // 1
```

### Accessing Other Methods

Use `this` to call other methods of the same object:

```javascript
const calculator = {
  sum: 0,
  add (value) {
    this.sum += value
    return this
  },
  multiply (value) {
    this.sum *= value
    return this
  },
  getResult () {
    return this.sum
  }
}

calculator.add(5).multiply(2).getResult()  // 10
```

### Common Patterns

**1. Object with state and methods:**
```javascript
const counter = {
  count: 0,
  increment () {
    this.count++
  },
  decrement () {
    this.count--
  },
  reset () {
    this.count = 0
  }
}
```

**2. Methods that transform data:**
```javascript
const formatter = {
  prefix: '>',
  format (text) {
    return this.prefix + ' ' + text
  }
}
```

**3. Methods added dynamically:**
```javascript
const user = { name: 'John' }

user.sayHi = function () {
  console.log(`Hi, I'm ${this.name}`)
}

user.sayHi()  // Hi, I'm John
```

### Common Pitfalls

**1. Extracting methods:**
```javascript
const user = {
  name: 'John',
  sayHi () { console.log(this.name) }
}

const say = user.sayHi
say()  // Error! 'this' is undefined
```

**2. Arrow functions as methods:**
```javascript
const user = {
  name: 'John',
  sayHi: () => console.log(this.name)  // WRONG!
}
user.sayHi()  // undefined
```

**3. Passing methods as callbacks:**
```javascript
const user = {
  name: 'John',
  sayHi () { console.log(this.name) }
}

setTimeout(user.sayHi, 1000)  // undefined (lost context)

// Solution: wrap in arrow function
setTimeout(() => user.sayHi(), 1000)  // John
```

## Tasks

Complete the functions in `object-methods-this.js`:

1. **createPersonWithMethod**: Create object with method using `this`
2. **createUser**: Implement method that returns `this.name`
3. **createCounter**: Use method shorthand syntax
4. **createCalculator**: Multiple methods using `this`
5. **createLadder**: Return `this` for method chaining
6. **createObjectWithArrowFunction**: Arrow function inheriting `this`
7. **demonstrateThisDifference**: Compare regular vs arrow functions
8. **createWorkingGreeting**: Fix arrow function problem
9. **createPersonWithFullName**: Call methods from other methods
10. **addMethod**: Add method after object creation
11. **copyMethod**: Copy method to another object
12. **createBankAccount**: Build stateful object with methods

## Run Tests

Test your solutions:

```bash
npm test exercises/21-object-methods-this
```

## Resources

- [JavaScript.info - Object Methods and "this"](https://javascript.info/object-methods)
- [MDN - this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [MDN - Method definitions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)
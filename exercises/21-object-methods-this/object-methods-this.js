/**
 * Create an object with a method
 *
 * Create and return an object with:
 * - A name property with the provided name
 * - A greet method that returns "Hello, my name is X" where X is the name
 *
 * The method should use 'this' to access the name property.
 */
export function createPersonWithMethod (name) {
  // TODO: Create an object with name property and greet method
  // TODO: The greet method should use 'this.name'
  // TODO: Return the object
}

/**
 * Access 'this' in a method
 *
 * The user object has a getName method that should return the user's name.
 * Implement the getName method to return this.name.
 */
export function createUser (name) {
  return {
    name,
    getName () {
      // TODO: Return this.name
    }
  }
}

/**
 * Method shorthand syntax
 *
 * Create an object with a method using shorthand syntax.
 * Return an object with count property and increment method.
 * The increment method should increase count by 1.
 */
export function createCounter () {
  // TODO: Return object with count: 0 and increment method using shorthand
  // TODO: increment() should do this.count++
}

/**
 * Multiple methods using 'this'
 *
 * Create a calculator object with:
 * - a property
 * - b property
 * - sum() method that returns a + b
 * - multiply() method that returns a * b
 *
 * Methods should use 'this' to access properties.
 */
export function createCalculator (a, b) {
  // TODO: Create object with a, b properties and sum, multiply methods
}

/**
 * Method returning 'this' for chaining
 *
 * Create an object where methods return 'this' to enable chaining.
 * Create a ladder object with:
 * - step property (starts at 0)
 * - up() method that increments step and returns this
 * - down() method that decrements step and returns this
 * - showStep() method that returns the current step value
 */
export function createLadder () {
  // TODO: Create ladder object with step: 0
  // TODO: up() increments step and returns this
  // TODO: down() decrements step and returns this
  // TODO: showStep() returns current step value
}

/**
 * 'this' value depends on how method is called
 *
 * Given an object with a method, extract the method and call it.
 * When called without an object, 'this' is undefined (in strict mode).
 * Return the result of calling the method.
 */
export function extractAndCallMethod (obj) {
  // TODO: Store obj.method in a variable
  // TODO: Call the method as a standalone function
  // TODO: Return the result (will likely be undefined or error)
  // This demonstrates that 'this' is determined at call time
}

/**
 * Arrow functions don't have their own 'this'
 *
 * Create an object with a regular method that contains an arrow function.
 * The arrow function should access 'this' from the outer method.
 * Return an object with name and a method getNameDelayed.
 */
export function createObjectWithArrowFunction (name) {
  return {
    name,
    getNameDelayed () {
      // TODO: Return an arrow function that returns this.name
      // The arrow function inherits 'this' from getNameDelayed
    }
  }
}

/**
 * Regular function vs arrow function in methods
 *
 * Demonstrates the difference:
 * - Regular functions have their own 'this' (determined at call time)
 * - Arrow functions inherit 'this' from outer scope
 *
 * Return an object with both types of methods.
 */
export function demonstrateThisDifference (name) {
  return {
    name,
    // Regular method - has its own 'this'
    regularMethod () {
      // TODO: Return this.name
    },
    // Arrow function property - inherits 'this' from outer scope
    // In object literal, there's no outer 'this', so it gets global/undefined
    arrowMethod: () => {
      // TODO: Try to return this.name (won't work as expected!)
      // Arrow functions in object literals can't access the object via 'this'
    }
  }
}

/**
 * Fix the arrow function problem
 *
 * When you need 'this' to refer to the object, use a regular function.
 * Create an object with name and a working greet method.
 */
export function createWorkingGreeting (name) {
  // TODO: Create object with name property
  // TODO: Add greet method as regular function (not arrow) that returns greeting
  // TODO: Use this.name in the greeting
}

/**
 * Nested method calls
 *
 * Create an object where one method calls another method on the same object.
 * Use 'this' to call other methods.
 */
export function createPersonWithFullName (firstName, lastName) {
  return {
    firstName,
    lastName,
    getFirstName () {
      // TODO: Return this.firstName
    },
    getLastName () {
      // TODO: Return this.lastName
    },
    getFullName () {
      // TODO: Return this.getFirstName() + ' ' + this.getLastName()
    }
  }
}

/**
 * Method can be added after object creation
 *
 * Add a method called 'sayHi' to the user object that returns "Hi, I'm X".
 * Return the modified user object.
 */
export function addMethod (user) {
  // TODO: Add sayHi method to user object
  // TODO: Method should return "Hi, I'm " + this.name
  // TODO: Return user
}

/**
 * Copy method to another object
 *
 * Copy the method from source object to target object.
 * Return the target object.
 */
export function copyMethod (source, target, methodName) {
  // TODO: Copy source[methodName] to target[methodName]
  // TODO: Return target
}

/**
 * Method uses 'this' to modify object
 *
 * Create a bank account object with:
 * - balance property
 * - deposit(amount) method that adds to balance
 * - withdraw(amount) method that subtracts from balance
 * - getBalance() method that returns current balance
 */
export function createBankAccount (initialBalance) {
  // TODO: Create object with balance property
  // TODO: Add deposit method that does this.balance += amount
  // TODO: Add withdraw method that does this.balance -= amount
  // TODO: Add getBalance method that returns this.balance
}

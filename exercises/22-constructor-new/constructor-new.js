/**
 * Create a constructor function
 *
 * Create a User constructor function that creates objects with
 * name and age properties from the parameters.
 * Constructor functions should start with a capital letter.
 */
export function User (name, age) {
  // TODO: Set this.name to name parameter
  // TODO: Set this.age to age parameter
}

/**
 * Use the constructor with 'new'
 *
 * Create and return a new User using the User constructor.
 */
export function createUser (name, age) {
  // TODO: Return new User(name, age)
}

/**
 * Constructor with methods
 *
 * Create a Product constructor that sets name and price properties,
 * and adds a getInfo method that returns "Product: X costs $Y".
 */
export function Product (name, price) {
  // TODO: Set this.name and this.price
  // TODO: Add this.getInfo method that returns product info string
}

/**
 * Constructor with default values
 *
 * Create an Animal constructor with name parameter and
 * species parameter that defaults to 'Unknown' if not provided.
 */
export function Animal (name, species = 'Unknown') {
  // TODO: Set this.name to name
  // TODO: Set this.species to species (uses default if not provided)
}

/**
 * Constructor that computes properties
 *
 * Create a Rectangle constructor that takes width and height,
 * and computes an area property (width * height).
 */
export function Rectangle (width, height) {
  // TODO: Set this.width and this.height
  // TODO: Set this.area to width * height
}

/**
 * Constructor with method that uses other properties
 *
 * Create a Circle constructor that takes radius,
 * and adds a getArea method that returns π * radius²
 * Use Math.PI for π.
 */
export function Circle (radius) {
  // TODO: Set this.radius
  // TODO: Add getArea method that returns Math.PI * this.radius ** 2
}

/**
 * Constructor with validation
 *
 * Create a Password constructor that validates the password length.
 * If password is shorter than 8 characters, set this.isValid to false.
 * Otherwise, set it to true.
 */
export function Password (password) {
  // TODO: Set this.password to password
  // TODO: Set this.isValid based on whether password.length >= 8
}

/**
 * Return from constructor - object
 *
 * Usually constructors don't have an explicit return.
 * But if they return an object, that object is returned instead of 'this'.
 * Create a constructor that returns a different object.
 */
export function SpecialConstructor () {
  this.name = 'created'

  // TODO: Return a new object {name: 'returned'} instead of 'this'
}

/**
 * Return from constructor - primitive
 *
 * If a constructor returns a primitive value, it's ignored and 'this' is returned.
 * Create a constructor that tries to return a number.
 */
export function PrimitiveReturn (value) {
  this.value = value

  // TODO: Try to return 123 (this will be ignored!)
}

/**
 * Constructor creates multiple similar objects
 *
 * Demonstrate the main purpose of constructors - creating multiple similar objects.
 * Create and return an array of 3 users with different names but same age.
 */
export function createMultipleUsers (age) {
  // TODO: Create 3 User objects (User1, User2, User3) with same age
  // TODO: Return array of the three user objects
}

/**
 * Omitting parentheses
 *
 * If constructor has no arguments, parentheses can be omitted (but not recommended).
 * Create and return new Product without parentheses.
 * Product should have default values.
 */
export function createProductWithoutParens () {
  // Define a simple constructor first
  function SimpleProduct () {
    this.name = 'Default Product'
    this.price = 0
  }

  // TODO: Return new SimpleProduct (without parentheses)
}

/**
 * Constructor with complex initialization
 *
 * Create a TodoList constructor that initializes an empty tasks array
 * and adds methods to add and count tasks.
 */
export function TodoList () {
  // TODO: Set this.tasks to empty array
  // TODO: Add this.addTask method that pushes task to array
  // TODO: Add this.getCount method that returns tasks.length
}

/**
 * Check if called with 'new' using new.target
 *
 * new.target is a special property that:
 * - Is undefined if called without 'new'
 * - Is the constructor if called with 'new'
 *
 * Create a User constructor that throws an error if called without 'new'.
 */
export function SafeUser (name) {
  // TODO: Check if new.target is undefined
  // TODO: If so, throw new Error('Must use new with SafeUser')
  // TODO: Otherwise, set this.name = name
}

/**
 * Immediately called constructor
 *
 * Sometimes we need to create a complex object just once.
 * We can call the constructor immediately without storing it.
 * Create and return a single user object inline.
 */
export function createSingleComplexUser (name) {
  // TODO: Return the result of: new function() { this.name = name; this.createdAt = new Date() }
  // This creates an anonymous constructor and calls it immediately
}

/**
 * Constructor with private-like variables
 *
 * Variables declared in constructor are not properties and act as "private".
 * Create a Counter constructor with a private count variable.
 */
export function Counter () {
  let count = 0 // private variable

  // TODO: Add this.increment method that increases count
  // TODO: Add this.getCount method that returns count
  // count is not a property, but methods can access it via closure
}

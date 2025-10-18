# Exercise 01: Hello, world!

## Lesson
[Hello, world!](https://javascript.info/hello-world)

## Concepts
- Writing JavaScript functions
- Returning values from functions
- String interpolation and concatenation
- Basic function syntax

## Instructions

In this exercise, you'll create your first JavaScript functions that return messages.

### Task 1: Classic Greeting
Implement the `hello()` function to return the string `"Hello, world!"`.

### Task 2: Personalized Greeting
Implement the `greet(name)` function that takes a person's name and returns a personalized greeting.
- Example: `greet("Alice")` should return `"Hello, Alice!"`
- Use template literals (backticks) or string concatenation

### Task 3: Message Display
Implement the `showMessage(message)` function that takes a message and returns it unchanged.
- This simulates displaying a message (in a browser, you'd use `alert()`)

## Tips
- Use template literals for string interpolation: `` `Hello, ${name}!` ``
- Or use string concatenation: `"Hello, " + name + "!"`
- Make sure to include the exclamation mark and correct spacing

## Running Tests
```bash
npm test exercises/01-hello-world
```
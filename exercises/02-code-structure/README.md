# Exercise 02: Code Structure

## Lesson
[Code structure](https://javascript.info/structure)

## Concepts
- Statements and semicolons
- Automatic semicolon insertion
- Single-line comments (`//`)
- Multi-line comments (`/* */`)
- Code organization and readability

## Instructions

This exercise focuses on proper JavaScript code structure, including statements, semicolons, and comments.

### Task 1: Basic Sum
Implement the `sum(a, b)` function that returns the sum of two numbers.
- Use proper semicolons at the end of statements

### Task 2: Multiple Statements
Implement the `multiStatement(x)` function:
- Create a variable that stores `x * 2`
- Add 10 to that variable
- Return the final result
- Each operation should be its own statement with proper semicolons

### Task 3: Single-Line Comments
Implement the `withComments(value)` function:
- Add a single-line comment (`//`) explaining what the code does
- Return `value * 3`

### Task 4: Multi-Line Comments
Implement the `withMultilineComment(a, b, c)` function:
- Add a multi-line comment (`/* ... */`) describing the function
- Return the sum of all three parameters

## Tips
- Semicolons are optional in many cases due to automatic insertion, but it's good practice to use them
- Comments should explain *why*, not just *what* the code does
- Single-line comments: `// This is a comment`
- Multi-line comments: `/* This is a multi-line comment */`

## Running Tests
```bash
npm test exercises/02-code-structure
```
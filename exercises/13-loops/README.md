# Exercise 13 - Loops: while and for

## Learning Objectives

In this exercise, you'll learn about loops in JavaScript, which allow you to repeat code multiple times efficiently.

## Reference

- [javascript.info: Loops: while and for](https://javascript.info/while-for)

## Concepts

### The "while" Loop

The `while` loop repeats code as long as a condition is true:

```javascript
let i = 0;
while (i < 3) {
  console.log(i); // 0, 1, 2
  i++;
}
```

**Important:** Make sure the condition eventually becomes false, or you'll create an infinite loop!

### The "do...while" Loop

Similar to `while`, but always executes at least once because the condition is checked after the loop body:

```javascript
let i = 0;
do {
  console.log(i); // 0, 1, 2
  i++;
} while (i < 3);
```

Even if the condition is initially false, the loop runs once:

```javascript
do {
  console.log('This runs once!');
} while (false);
```

### The "for" Loop

The most commonly used loop, with three components in one line:

```javascript
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
```

Structure: `for (begin; condition; step) { body }`

- `begin`: Executes once when entering the loop
- `condition`: Checked before each iteration
- `step`: Executes after each iteration
- `body`: Runs while condition is true

### Breaking Out of a Loop

Use `break` to exit a loop immediately:

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i); // 0, 1, 2, 3, 4
}
```

### Skipping an Iteration

Use `continue` to skip the current iteration and move to the next:

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i); // 0, 1, 3, 4 (skips 2)
}
```

### Nested Loops

Loops can be nested inside other loops:

```javascript
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}
```

### Choosing the Right Loop

- **for**: When you know how many iterations you need
- **while**: When you don't know how many iterations in advance
- **do...while**: When you want to run at least once, then check the condition

### Inline Variable Declaration

You can declare the loop variable right in the loop:

```javascript
for (let i = 0; i < 3; i++) {
  console.log(i);
}
// i is not accessible here
```

Or use an existing variable:

```javascript
let i = 0;
for (; i < 3; i++) {
  console.log(i);
}
// i === 3 here
```

### Infinite Loops

Be careful to avoid infinite loops:

```javascript
// DON'T DO THIS!
// for (let i = 0; i < 10; ) {
//   console.log(i); // Prints 0 forever
// }
```

### Break with Label

You can use labels to break out of nested loops:

```javascript
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break outer;
    console.log(`${i}, ${j}`);
  }
}
```

## Your Tasks

Implement the following functions in `loops.js`:

1. `countDown(n)` - Uses a while loop to count from n down to 1
2. `sumNumbers(numbers)` - Uses a for loop to sum all numbers in an array
3. `findFirstNegative(numbers)` - Uses a loop with break to find the first negative number
4. `skipEvens(n)` - Uses continue to collect only odd numbers from 1 to n
5. `repeatUntilValid(validator)` - Uses do...while to repeat until validation passes
6. `createMultiplicationTable(size)` - Uses nested loops to create a multiplication table

## Running the Tests

Test your implementation by running:

```bash
npm test exercises/13-loops
```

## Tips

- Always make sure your loop condition will eventually become false to avoid infinite loops
- Use `break` to exit a loop early when you've found what you're looking for
- Use `continue` to skip the current iteration without exiting the entire loop
- `for` loops are great when you know the number of iterations in advance
- `while` loops are better when the number of iterations depends on a condition
- `do...while` guarantees at least one execution of the loop body

## Resources

- [javascript.info: Loops: while and for](https://javascript.info/while-for)
- [MDN: Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
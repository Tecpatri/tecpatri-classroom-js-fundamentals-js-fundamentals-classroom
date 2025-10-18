# 06 – Interaction: alert, prompt, confirm

Learn about browser interaction methods: `alert`, `prompt`, and `confirm`. Since we're testing in Node.js, we'll simulate these functions to understand their behavior.

## Learning Objectives

- Understand how `alert`, `prompt`, and `confirm` work in browsers
- Learn the return values of each interaction method
- Practice abstracting user interaction for testability
- Handle user input and cancellations properly

## Key Concepts

### Browser Interaction Methods

Browsers provide three simple methods for interacting with users:

#### 1. alert(message)
Displays a message and waits for the user to click "OK".
- **Returns**: `undefined`
- **Use case**: Simple notifications

```javascript
alert("Welcome to our site!");  // Shows message, returns undefined
```

#### 2. prompt(message, default)
Displays a message asking for user input.
- **Returns**: The text entered by the user as a **string**, or `null` if cancelled
- **Parameters**:
  - `message`: The text to display
  - `default` (optional): Default value in the input field

```javascript
let name = prompt("What is your name?", "Guest");
// If user enters "Alice": name = "Alice"
// If user clicks Cancel: name = null
```

**Important**: `prompt` always returns a string (even for numbers) or `null`!

```javascript
let age = prompt("Your age?", "");
// If user enters "25": age = "25" (string, not number!)
// If user clicks Cancel: age = null
```

#### 3. confirm(message)
Asks the user to confirm or cancel.
- **Returns**: `true` if OK is clicked, `false` if Cancel is clicked
- **Use case**: Yes/no questions

```javascript
let isAdult = confirm("Are you 18 or older?");
// If user clicks OK: isAdult = true
// If user clicks Cancel: isAdult = false
```

### Return Values Summary

| Method | User Action | Return Value |
|--------|-------------|--------------|
| `alert("Hi")` | Clicks OK | `undefined` |
| `prompt("Name?")` | Enters "Alice" | `"Alice"` (string) |
| `prompt("Name?")` | Clicks Cancel | `null` |
| `confirm("OK?")` | Clicks OK | `true` |
| `confirm("OK?")` | Clicks Cancel | `false` |

### Testing User Interactions

Since we can't use real browser dialogs in tests, we pass functions as parameters:

```javascript
// Production code would use: prompt("Your name?")
// Test code passes a mock function
function greetUser(promptFn) {
  const name = promptFn("Your name?");
  return `Hello, ${name}!`;
}

// In tests:
const mockPrompt = () => "Alice";
greetUser(mockPrompt);  // "Hello, Alice!"
```

## Tasks

Complete the functions in `interaction.js`. Each function has detailed TODO comments to guide you:

1. **simulateAlert**: Understand alert's return value (undefined)
   - Call the alert function
   - Return what it returns (undefined)
   - Remember: alert shows a message but returns nothing useful

2. **simulatePrompt**: Handle prompt's return values (string or null)
   - Call prompt and check its return value
   - Handle both cases: user enters text (string) or cancels (null)
   - Build appropriate response strings

3. **simulateConfirm**: Work with confirm's boolean return values
   - Call confirm and get true/false result
   - Convert boolean to user-friendly message
   - Understand OK = true, Cancel = false

4. **handlePromptCancel**: Properly handle when user cancels prompt
   - Use prompt to ask for input
   - Provide default value when user cancels (null)
   - Learn the null-coalescing pattern

5. **combineInteractions**: Use multiple interaction types together
   - Use confirm first, then prompt conditionally
   - Handle all possible user paths
   - Chain interactions logically

6. **promptReturnsString**: Understand that prompt always returns a string (or null)
   - See that prompt returns "42" as a string, not the number 42
   - Use typeof to verify the type
   - Learn why you need to convert strings to numbers

## Run Tests

Test your solutions:

```bash
npm test exercises/06-interaction
```

## Resources

- [JavaScript.info - Interaction: alert, prompt, confirm](https://javascript.info/alert-prompt-confirm)
- [MDN - Window.alert()](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)
- [MDN - Window.prompt()](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
- [MDN - Window.confirm()](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)
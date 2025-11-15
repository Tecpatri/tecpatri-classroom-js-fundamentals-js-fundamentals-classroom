/**
 * Simulate alert behavior
 *
 * Call the alertFn with the provided message.
 * Remember: alert returns undefined, not the message.
 *
 * Return what alertFn returns (should be undefined).
 */
export function simulateAlert (alertFn, message) {
  // TODO: Call alertFn with message
  // TODO: Return the result of alertFn (which should be undefined)
}

/**
 * Simulate prompt behavior
 *
 * Call promptFn with the question.
 * prompt returns a string (user input) or null (if cancelled).
 *
 * Return a greeting: "You entered: [result]" or "No input provided" if null.
 */
export function simulatePrompt (promptFn, question) {
  // TODO: Call promptFn with question and store result
  // TODO: If result is null, return "No input provided"
  // TODO: Otherwise, return "You entered: [result]"
}

/**
 * Simulate confirm behavior
 *
 * Call confirmFn with the question.
 * confirm returns true (OK clicked) or false (Cancel clicked).
 *
 * Return "Confirmed" if true, "Cancelled" if false.
 */
export function simulateConfirm (confirmFn, question) {
  // TODO: Call confirmFn with question
  // TODO: Return "Confirmed" if true, "Cancelled" if false
}

/**
 * Handle prompt cancellation
 *
 * Ask for user's name using promptFn.
 * If the user cancels (returns null), use "Guest" as default.
 * Otherwise use the name they entered.
 *
 * Return: "Welcome, [name]!"
 */
export function handlePromptCancel (promptFn) {
  // TODO: Call promptFn with "What is your name?"
  // TODO: If result is null, set name to "Guest"
  // TODO: Otherwise, set name to the result
  // TODO: Return "Welcome, [name]!"
}

/**
 * Combine interactions: confirm then prompt
 *
 * First, use confirmFn to ask: "Do you want to enter your name?"
 * - If false (cancelled), return "Registration cancelled"
 * - If true, use promptFn to ask "Enter your name:"
 *   - If prompt returns null, return "Name required"
 *   - If prompt returns a name, return "Registered: [name]"
 */
export function combineInteractions (confirmFn, promptFn) {
  // TODO: Call confirmFn with "Do you want to enter your name?"
  // TODO: If false, return "Registration cancelled"
  // TODO: If true, call promptFn with "Enter your name:"
  // TODO: If promptFn returns null, return "Name required"
  // TODO: Otherwise return "Registered: [name]"
}

/**
 * Understand that prompt always returns a string (or null)
 *
 * Use promptFn to ask "Enter a number:".
 * Remember: prompt returns a STRING, not a number!
 *
 * Return an object:
 * {
 *   value: the return value from prompt,
 *   type: the typeof the return value
 * }
 */
export function promptReturnsString (promptFn) {
  // TODO: Call promptFn with "Enter a number:"
  // TODO: Return { value: result, type: typeof result }
}

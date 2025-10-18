// Simulated UI: provide stubs for testing.
export function askName(promptFn) {
  const name = promptFn('Your name?');
  return `Hello, ${name}!`;
}

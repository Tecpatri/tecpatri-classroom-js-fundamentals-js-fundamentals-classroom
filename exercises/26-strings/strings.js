/**
 * Get a character from a string at the specified index
 *
 * Use the at() method which supports negative indexes.
 * Negative indexes count from the end: -1 is last character.
 *
 * Example: ("Hello", -1) -> "o"
 */
export function getCharacter (str, index) {
  // TODO: Return str.at(index)
}

/**
 * Find the position of a substring
 *
 * Use indexOf() to find the first occurrence of the substring.
 * Returns the index, or -1 if not found.
 *
 * Example: ("Hello World", "World") -> 6
 */
export function findSubstring (str, substring) {
  // TODO: Return str.indexOf(substring)
}

/**
 * Extract a portion of a string
 *
 * Use slice(start, end) to extract characters from start up to (but not including) end.
 * If end is omitted, slices to the end of the string.
 *
 * Example: ("JavaScript", 0, 4) -> "Java"
 */
export function extractPortion (str, start, end) {
  // TODO: Return str.slice(start, end)
}

/**
 * Check if a string contains a substring
 *
 * Use includes() to check if substring exists anywhere in the string.
 * Returns true or false.
 *
 * Example: ("Hello World", "Wor") -> true
 */
export function checkInclusion (str, substring) {
  // TODO: Return str.includes(substring)
}

/**
 * Convert string to uppercase or lowercase
 *
 * Use toUpperCase() or toLowerCase() based on the toCase parameter.
 * toCase will be either 'upper' or 'lower'.
 *
 * Example: ("Hello", "upper") -> "HELLO"
 */
export function changeCase (str, toCase) {
  // TODO: If toCase is 'upper', return str.toUpperCase()
  // TODO: If toCase is 'lower', return str.toLowerCase()
}

/**
 * Capitalize the first letter of a string
 *
 * Make the first character uppercase and the rest lowercase.
 * Hint: Use str[0].toUpperCase() + str.slice(1).toLowerCase()
 *
 * Example: "javaScript" -> "Javascript"
 */
export function capitalizeFirst (str) {
  // TODO: Return first character uppercase + rest lowercase
  // Handle empty string case
}

/**
 * Check if a string starts with and/or ends with specific text
 *
 * Return an object with:
 * - startsWithText: true if str starts with startText
 * - endsWithText: true if str ends with endText
 *
 * Use startsWith() and endsWith() methods.
 *
 * Example: ("Hello World", "Hello", "World") -> { startsWithText: true, endsWithText: true }
 */
export function checkStartEnd (str, startText, endText) {
  // TODO: Return object with startsWithText and endsWithText properties
}

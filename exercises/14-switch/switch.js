/**
 * Determines if a day is a weekend or weekday.
 * Demonstrates grouping multiple cases with fall-through.
 *
 * @param {string} day - A three-letter day abbreviation (Mon, Tue, Wed, Thu, Fri, Sat, Sun)
 * @returns {string} 'weekend' or 'weekday'
 *
 * Example:
 *   getDayType('Sat') => 'weekend'
 *   getDayType('Mon') => 'weekday'
 */
export function getDayType (day) {
  // TODO: Use a switch statement to check the day
  // Group 'Sat' and 'Sun' together to return 'weekend'
  // Use default case to return 'weekday' for all other days
}

/**
 * Converts a numeric score to a letter grade.
 * Demonstrates using switch with number ranges.
 *
 * @param {number} score - A score from 0-100
 * @returns {string} A letter grade: 'A', 'B', 'C', 'D', or 'F'
 *
 * Grading scale:
 *   90-100: A
 *   80-89: B
 *   70-79: C
 *   60-69: D
 *   0-59: F
 *
 * Example:
 *   getGrade(95) => 'A'
 *   getGrade(82) => 'B'
 *   getGrade(59) => 'F'
 */
export function getGrade (score) {
  // TODO: Use switch with Math.floor(score / 10) to group scores
  // This allows you to handle ranges with switch
  // Don't forget break statements!
  // Hint: case 10 and case 9 should both return 'A'
}

/**
 * Returns the season for a given month number.
 * Demonstrates grouping seasonal months together.
 *
 * @param {number} month - A month number (1-12)
 * @returns {string} The season: 'Winter', 'Spring', 'Summer', or 'Fall'
 *
 * Seasons (Northern Hemisphere):
 *   Winter: December (12), January (1), February (2)
 *   Spring: March (3), April (4), May (5)
 *   Summer: June (6), July (7), August (8)
 *   Fall: September (9), October (10), November (11)
 *
 * Example:
 *   getSeasonByMonth(7) => 'Summer'
 *   getSeasonByMonth(12) => 'Winter'
 */
export function getSeasonByMonth (month) {
  // TODO: Use a switch statement with grouped cases for each season
  // Group months 12, 1, 2 for Winter
  // Group months 3, 4, 5 for Spring, etc.
  // Use default case to return 'Invalid month' for invalid month numbers
}

/**
 * Returns a human-readable message for HTTP status codes.
 * Demonstrates switch with specific values and a default case.
 *
 * @param {number} code - An HTTP status code
 * @returns {string} A message describing the status
 *
 * Example:
 *   interpretStatusCode(200) => 'OK'
 *   interpretStatusCode(404) => 'Not Found'
 *   interpretStatusCode(500) => 'Internal Server Error'
 */
export function interpretStatusCode (code) {
  // TODO: Use a switch statement to handle these status codes:
  // 200: 'OK'
  // 201: 'Created'
  // 400: 'Bad Request'
  // 401: 'Unauthorized'
  // 404: 'Not Found'
  // 500: 'Internal Server Error'
  // default: 'Unknown Status'
}

/**
 * Calculates shipping cost based on country.
 * Demonstrates grouping countries with the same shipping cost.
 *
 * @param {string} country - A country code (US, CA, UK, etc.)
 * @returns {number} The shipping cost in dollars
 *
 * Shipping rates:
 *   US: $5
 *   CA, MX: $10
 *   UK, FR, DE: $15
 *   Others: $25
 *
 * Example:
 *   calculateShipping('US') => 5
 *   calculateShipping('CA') => 10
 *   calculateShipping('UK') => 15
 */
export function calculateShipping (country) {
  // TODO: Use a switch statement with grouped country codes
  // Group CA and MX together for $10 shipping
  // Group UK, FR, DE together for $15 shipping
  // Use default for $25 shipping
}

/**
 * Compares two values using switch to demonstrate strict equality.
 * Returns an object showing whether values match by value and by type.
 *
 * @param {*} a - First value
 * @param {*} b - Second value
 * @returns {Object} Object with 'match' (boolean) and 'message' (string)
 *
 * Example:
 *   compareValues(1, 1) => { match: true, message: 'Exact match' }
 *   compareValues(1, '1') => { match: false, message: 'Different types' }
 *   compareValues(1, 2) => { match: false, message: 'Different values' }
 */
export function compareValues (a, b) {
  // TODO: Use a switch statement on 'a' with case 'b'
  // This demonstrates that switch uses strict equality (===)
  // If they match: return { match: true, message: 'Exact match' }
  // If they don't match but a == b (loose equality): return { match: false, message: 'Different types' }
  // Otherwise: return { match: false, message: 'Different values' }
  // Hint: You'll need an if statement in the default case to distinguish the last two scenarios
}

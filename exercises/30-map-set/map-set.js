/**
 * Create a user visits tracker using Map
 *
 * Create a Map to track how many times each user has visited.
 * Accept an array of user objects.
 * Count visits for each user (user objects can appear multiple times).
 *
 * Map allows using objects as keys, which is perfect for this task!
 *
 * Return the Map with user objects as keys and visit counts as values.
 */
export function trackUserVisits (users) {
  // TODO: Create a new Map
  // TODO: Loop through each user in the users array
  // TODO: If user exists in map, increment their count
  // TODO: If user doesn't exist, set their count to 1
  // TODO: Return the Map
}

/**
 * Get the visit count for a specific user
 *
 * Given a Map of user visits and a user object,
 * return the number of visits for that user.
 * If the user is not in the map, return 0.
 */
export function getUserVisits (visitsMap, user) {
  // TODO: Check if the user exists in the map using map.has()
  // TODO: If yes, return the count using map.get()
  // TODO: If no, return 0
}

/**
 * Create a unique tags Set from an array
 *
 * Given an array of tags (strings) that may contain duplicates,
 * create and return a Set containing only unique tags.
 *
 * Sets automatically handle uniqueness!
 */
export function getUniqueTags (tags) {
  // TODO: Create a new Set from the tags array
  // TODO: Return the Set
  // Hint: You can pass an array to the Set constructor
}

/**
 * Add tags to an existing Set
 *
 * Given a Set of tags and an array of new tags to add,
 * add all new tags to the Set.
 * Remember: Sets automatically ignore duplicates.
 *
 * Return the updated Set.
 */
export function addTags (tagSet, newTags) {
  // TODO: Loop through each tag in newTags
  // TODO: Add each tag to the Set using set.add()
  // TODO: Return the Set
}

/**
 * Check if a Set contains all required tags
 *
 * Given a Set of available tags and an array of required tags,
 * check if ALL required tags exist in the Set.
 *
 * Return true if all required tags are present, false otherwise.
 */
export function hasAllTags (tagSet, requiredTags) {
  // TODO: Loop through each required tag
  // TODO: Check if the tag exists using set.has()
  // TODO: If any tag is missing, return false
  // TODO: If all tags exist, return true
}

/**
 * Convert Set to Array
 *
 * Convert a Set to an array so you can use array methods.
 * There are multiple ways to do this!
 */
export function setToArray (set) {
  // TODO: Convert the Set to an array
  // TODO: Return the array
  // Hint: Use Array.from() or the spread operator [...]
}

/**
 * Remove duplicate values from an array using Set
 *
 * This is a common use case for Sets!
 * Create a Set from the array (removes duplicates),
 * then convert back to an array.
 */
export function removeDuplicates (arr) {
  // TODO: Create a Set from the array
  // TODO: Convert the Set back to an array
  // TODO: Return the array
}

/**
 * Get Map size and Set size
 *
 * Given a Map and a Set, return an object with their sizes.
 * Use the .size property (NOT .length!).
 */
export function getSizes (map, set) {
  // TODO: Get the size of the map using map.size
  // TODO: Get the size of the set using set.size
  // TODO: Return an object: { mapSize, setSize }
}

/**
 * Clear a Map and Set
 *
 * Remove all entries from both the Map and Set.
 * Return an object showing their sizes are now 0.
 */
export function clearCollections (map, set) {
  // TODO: Clear the map using map.clear()
  // TODO: Clear the set using set.clear()
  // TODO: Return { mapSize: map.size, setSize: set.size }
}

/**
 * Iterate over Map entries
 *
 * Given a Map, use forEach to collect all entries
 * into an array of [key, value] pairs.
 */
export function getMapEntries (map) {
  // TODO: Create an empty array for entries
  // TODO: Use map.forEach((value, key) => ...) to iterate
  // TODO: Push each [key, value] pair to the array
  // TODO: Return the array
}

/**
 * Convert object to Map
 *
 * Given a plain object, convert it to a Map.
 * Use Object.entries() to get [key, value] pairs,
 * then create a Map from those entries.
 */
export function objectToMap (obj) {
  // TODO: Use Object.entries(obj) to get array of [key, value] pairs
  // TODO: Create a new Map from those entries
  // TODO: Return the Map
  // Hint: new Map() can accept an array of [key, value] pairs
}

/**
 * Find intersection of two Sets
 *
 * Given two Sets, return a new Set containing only
 * the values that exist in BOTH sets.
 */
export function setIntersection (set1, set2) {
  // TODO: Create a new Set for the result
  // TODO: Iterate through set1
  // TODO: For each value, check if it exists in set2 using set2.has()
  // TODO: If yes, add it to the result Set
  // TODO: Return the result Set
}

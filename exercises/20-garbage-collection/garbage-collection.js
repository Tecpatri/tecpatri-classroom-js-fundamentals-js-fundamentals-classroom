/**
 * Make an object unreachable
 *
 * Set the user variable to null to make the object unreachable
 * and eligible for garbage collection.
 * Return null.
 */
export function makeUnreachable (user) {
  // TODO: Set user to null
  // TODO: Return null
}

/**
 * Count reachable references
 *
 * Given an object, count how many variables reference it.
 * For this exercise, you'll receive an object and an array of variables.
 * Return the count of variables that reference the same object.
 */
export function countReferences (obj, variables) {
  // TODO: Count how many items in variables array reference obj
  // TODO: Use === to compare references
  // TODO: Return the count
}

/**
 * Break a reference chain
 *
 * Given an object that has a 'next' property pointing to another object,
 * remove the reference by setting 'next' to null.
 * This makes the referenced object unreachable if no other references exist.
 */
export function breakChain (obj) {
  // TODO: Set obj.next to null
  // TODO: Return obj
}

/**
 * Identify reachable objects
 *
 * Given a root object with properties that reference other objects,
 * return an array of property names that are NOT null.
 * These represent reachable objects.
 */
export function findReachable (root) {
  // TODO: Create an empty array for result
  // TODO: Loop through properties using for...in
  // TODO: If property value is not null, add property name to result
  // TODO: Return array of property names
}

/**
 * Clear all references
 *
 * Given an object with properties that reference other objects,
 * set all properties to null to break the reference chains.
 * Return the modified object.
 */
export function clearAllReferences (obj) {
  // TODO: Loop through all properties
  // TODO: Set each property to null
  // TODO: Return obj
}

/**
 * Circular references don't prevent GC
 *
 * Create two objects that reference each other,
 * then remove external references.
 * Return an object describing the setup: {obj1: ..., obj2: ...}
 */
export function createCircularReference () {
  // TODO: Create obj1 with a property
  // TODO: Create obj2 with a property
  // TODO: Set obj1.next = obj2
  // TODO: Set obj2.prev = obj1
  // TODO: Return {obj1, obj2}
}

/**
 * Island of isolation
 *
 * Objects that reference each other but have no connection to roots
 * are still garbage collected. This function simulates removing
 * the root reference. Return null to indicate the island is unreachable.
 */
export function createIslandAndDetach (obj) {
  // TODO: Set obj to null (breaks connection to root)
  // TODO: Return null
}

/**
 * Single reference keeps object alive
 *
 * An object is reachable if even ONE reference exists.
 * Given an object and two variables referencing it,
 * null out the first variable. The object is still reachable.
 * Return the second variable.
 */
export function singleReferenceKeepsAlive (obj, ref1, ref2) {
  // TODO: Set ref1 to null
  // TODO: Return ref2 (object still reachable through ref2)
}

/**
 * Deep reference chain
 *
 * Create a chain: obj1 -> obj2 -> obj3
 * If we keep obj1 reachable, the entire chain is reachable.
 * Return obj1.
 */
export function createReferenceChain () {
  // TODO: Create obj3 = {value: 3}
  // TODO: Create obj2 = {value: 2, next: obj3}
  // TODO: Create obj1 = {value: 1, next: obj2}
  // TODO: Return obj1
}

/**
 * Determine if object would be garbage collected
 *
 * Given an object and a count of how many variables reference it,
 * return true if setting all references to null would make it
 * eligible for garbage collection.
 */
export function wouldBeCollected (obj, referenceCount) {
  // TODO: If referenceCount is 0, return true (already unreachable)
  // TODO: If we null all references, it becomes unreachable
  // TODO: Return true (would be collected after nulling references)
}

/**
 * Parent-child relationship
 *
 * A parent object references a child.
 * If parent becomes unreachable, child also becomes unreachable.
 * Set parent to null and return null.
 */
export function detachParent (parent) {
  // TODO: Set parent to null
  // TODO: Return null (both parent and child now unreachable)
}

/**
 * Multiple paths to same object
 *
 * An object is reachable through multiple references.
 * Return true if the object is still reachable after removing one path.
 */
export function multiplePathsToObject (obj, path1, path2) {
  // TODO: If either path1 or path2 references obj, return true
  // TODO: Return false if neither references it
}

/**
 * Manual memory cleanup
 *
 * While we can't force GC, we can remove references to help.
 * Given an object with event listeners or large data,
 * set its 'data' property to null and clear 'listeners' array.
 * Return the cleaned object.
 */
export function cleanup (obj) {
  // TODO: Set obj.data to null
  // TODO: Set obj.listeners to empty array []
  // TODO: Return obj
}

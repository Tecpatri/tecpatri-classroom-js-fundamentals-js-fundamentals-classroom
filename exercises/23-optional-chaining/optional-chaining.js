/**
 * Access nested property safely
 *
 * Use optional chaining to safely access user.address.street.
 * Return undefined if any part of the chain is null/undefined.
 */
export function getStreet (user) {
  // TODO: Return user?.address?.street
}

/**
 * Access nested property with fallback
 *
 * Use optional chaining with nullish coalescing to provide a default value.
 * Return user?.address?.city ?? 'Unknown'
 */
export function getCityWithDefault (user) {
  // TODO: Return user?.address?.city ?? 'Unknown'
}

/**
 * Compare with traditional approach
 *
 * Without optional chaining, you'd need: user && user.address && user.address.street
 * Implement the traditional approach for comparison.
 */
export function getStreetTraditional (user) {
  // TODO: Return user && user.address && user.address.street
}

/**
 * Optional chaining with array access
 *
 * Use optional chaining to safely access an array element.
 * Return users?.[0]?.name
 */
export function getFirstUserName (users) {
  // TODO: Return users?.[0]?.name
}

/**
 * Optional chaining with method calls
 *
 * Use ?.() to safely call a method that might not exist.
 * Return user.getName?.() (returns undefined if getName doesn't exist)
 */
export function callGetName (user) {
  // TODO: Return user.getName?.()
}

/**
 * Deep nested access
 *
 * Safely access a deeply nested property: data?.user?.profile?.settings?.theme
 * Return undefined if any part doesn't exist.
 */
export function getTheme (data) {
  // TODO: Return data?.user?.profile?.settings?.theme
}

/**
 * Optional chaining stops at null/undefined
 *
 * If the value before ?. is null or undefined, evaluation stops and returns undefined.
 * Try to access obj?.prop1?.prop2?.prop3 and return the result.
 */
export function chainAccess (obj) {
  // TODO: Return obj?.prop1?.prop2?.prop3
}

/**
 * Optional chaining with computed properties
 *
 * Combine optional chaining with bracket notation.
 * Return obj?.[prop] where prop is a variable.
 */
export function getPropertySafely (obj, prop) {
  // TODO: Return obj?.[prop]
}

/**
 * Check if property exists and call it
 *
 * Use optional chaining to check if a callback function exists and call it.
 * If callbacks.onSuccess exists, call it with data, otherwise return undefined.
 */
export function callCallback (callbacks, data) {
  // TODO: Return callbacks?.onSuccess?.(data)
}

/**
 * Optional chaining with multiple branches
 *
 * Try to get value from multiple possible locations:
 * config?.user?.name ?? config?.account?.name ?? 'Guest'
 */
export function getNameFromConfig (config) {
  // TODO: Return config?.user?.name ?? config?.account?.name ?? 'Guest'
}

/**
 * Delete with optional chaining
 *
 * You CANNOT use optional chaining on the left side of assignment or delete.
 * This function demonstrates what NOT to do (will cause syntax error).
 * Just return false to indicate this operation is not allowed.
 */
export function cannotDeleteWithOptionalChaining (user) {
  // TODO: Return false
  // Note: delete user?.address would be a syntax error
}

/**
 * Optional chaining with function in object
 *
 * Safely call a function that's a property of an object.
 * Return admin.permissions?.canEdit?.()
 */
export function checkPermission (admin) {
  // TODO: Return admin.permissions?.canEdit?.()
}

/**
 * Short-circuiting behavior
 *
 * Optional chaining short-circuits: if the left part doesn't exist,
 * evaluation stops immediately.
 * Try to access obj?.missingProperty?.anotherProperty
 */
export function demonstrateShortCircuit (obj) {
  // TODO: Return obj?.missingProperty?.anotherProperty
}

/**
 * Combine with logical operators
 *
 * Use optional chaining with && operator.
 * Return user?.isActive && user?.permissions?.canPost
 */
export function checkActiveAndPermission (user) {
  // TODO: Return user?.isActive && user?.permissions?.canPost
}

/**
 * Optional chaining doesn't help with undeclared variables
 *
 * ?. works with null/undefined but not with undeclared variables.
 * Access a property on a parameter that might be undefined.
 * Return value?.property ?? 'default'
 */
export function handleUndefinedValue (value) {
  // TODO: Return value?.property ?? 'default'
}

/**
 * Accessing array method safely
 *
 * Use optional chaining to safely call an array method.
 * Return arr?.map(x => x * 2)
 * If arr is null/undefined, return undefined.
 */
export function safeMap (arr) {
  // TODO: Return arr?.map(x => x * 2)
}

/**
 * Optional chaining with ternary operator
 *
 * Combine optional chaining with ternary for complex logic.
 * Return user?.age >= 18 ? 'adult' : 'minor'
 * If user is null/undefined, return 'unknown'
 */
export function getAgeCategory (user) {
  // TODO: If user is null/undefined, return 'unknown'
  // TODO: Otherwise return user.age >= 18 ? 'adult' : 'minor'
  // Hint: user?.age !== undefined ? (user.age >= 18 ? 'adult' : 'minor') : 'unknown'
}

/**
 * Multiple optional chains in one expression
 *
 * Return obj1?.value + obj2?.value
 * If either is null/undefined, that part becomes undefined.
 * Handle the case where addition might be NaN.
 */
export function addOptionalValues (obj1, obj2) {
  // TODO: Get val1 = obj1?.value ?? 0
  // TODO: Get val2 = obj2?.value ?? 0
  // TODO: Return val1 + val2
}

/**
 * Optional chaining with optional callback
 *
 * Call onChange callback if it exists, passing the value.
 * If onChange doesn't exist, do nothing (return undefined).
 */
export function triggerChange (callbacks, value) {
  // TODO: Return callbacks?.onChange?.(value)
}

/**
 * Accessing nested array element
 *
 * Safely access: data?.items?.[index]?.name
 * Return undefined if any part doesn't exist.
 */
export function getItemName (data, index) {
  // TODO: Return data?.items?.[index]?.name
}

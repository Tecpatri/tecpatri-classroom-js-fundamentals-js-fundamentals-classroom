import {
  getStreet,
  getCityWithDefault,
  getStreetTraditional,
  getFirstUserName,
  callGetName,
  getTheme,
  chainAccess,
  getPropertySafely,
  callCallback,
  getNameFromConfig,
  cannotDeleteWithOptionalChaining,
  checkPermission,
  demonstrateShortCircuit,
  checkActiveAndPermission,
  handleUndefinedValue,
  safeMap,
  getAgeCategory,
  addOptionalValues,
  triggerChange,
  getItemName
} from './optional-chaining.js'

describe('Optional Chaining', () => {
  describe('getStreet', () => {
    test('should return street when all properties exist', () => {
      const user = { address: { street: '123 Main St' } }
      expect(getStreet(user)).toBe('123 Main St')
    })

    test('should return undefined when address is missing', () => {
      const user = { name: 'John' }
      expect(getStreet(user)).toBeUndefined()
    })

    test('should return undefined when user is null', () => {
      expect(getStreet(null)).toBeUndefined()
    })
  })

  describe('getCityWithDefault', () => {
    test('should return city when it exists', () => {
      const user = { address: { city: 'NYC' } }
      expect(getCityWithDefault(user)).toBe('NYC')
    })

    test('should return Unknown when city is missing', () => {
      const user = { address: {} }
      expect(getCityWithDefault(user)).toBe('Unknown')
    })

    test('should return Unknown when user is null', () => {
      expect(getCityWithDefault(null)).toBe('Unknown')
    })
  })

  describe('getStreetTraditional', () => {
    test('should return street when all properties exist', () => {
      const user = { address: { street: '456 Oak Ave' } }
      expect(getStreetTraditional(user)).toBe('456 Oak Ave')
    })

    test('should return undefined when address is missing', () => {
      const user = { name: 'Jane' }
      expect(getStreetTraditional(user)).toBeUndefined()
    })
  })

  describe('getFirstUserName', () => {
    test('should return first user name', () => {
      const users = [{ name: 'Alice' }, { name: 'Bob' }]
      expect(getFirstUserName(users)).toBe('Alice')
    })

    test('should return undefined when array is empty', () => {
      expect(getFirstUserName([])).toBeUndefined()
    })

    test('should return undefined when users is null', () => {
      expect(getFirstUserName(null)).toBeUndefined()
    })
  })

  describe('callGetName', () => {
    test('should call getName if it exists', () => {
      const user = { getName: () => 'John' }
      expect(callGetName(user)).toBe('John')
    })

    test('should return undefined if getName does not exist', () => {
      const user = { name: 'Jane' }
      expect(callGetName(user)).toBeUndefined()
    })

    test('should return undefined if user is null', () => {
      expect(callGetName(null)).toBeUndefined()
    })
  })

  describe('getTheme', () => {
    test('should return theme when path exists', () => {
      const data = {
        user: {
          profile: {
            settings: { theme: 'dark' }
          }
        }
      }
      expect(getTheme(data)).toBe('dark')
    })

    test('should return undefined when intermediate property missing', () => {
      const data = { user: { profile: {} } }
      expect(getTheme(data)).toBeUndefined()
    })

    test('should return undefined when data is null', () => {
      expect(getTheme(null)).toBeUndefined()
    })
  })

  describe('chainAccess', () => {
    test('should access deeply nested property', () => {
      const obj = {
        prop1: {
          prop2: {
            prop3: 'value'
          }
        }
      }
      expect(chainAccess(obj)).toBe('value')
    })

    test('should return undefined when chain breaks', () => {
      const obj = { prop1: { prop2: null } }
      expect(chainAccess(obj)).toBeUndefined()
    })
  })

  describe('getPropertySafely', () => {
    test('should return property value', () => {
      const obj = { name: 'Alice', age: 30 }
      expect(getPropertySafely(obj, 'name')).toBe('Alice')
    })

    test('should return undefined when object is null', () => {
      expect(getPropertySafely(null, 'name')).toBeUndefined()
    })

    test('should return undefined when property does not exist', () => {
      const obj = { name: 'Bob' }
      expect(getPropertySafely(obj, 'age')).toBeUndefined()
    })
  })

  describe('callCallback', () => {
    test('should call callback with data', () => {
      const callbacks = { onSuccess: (data) => `Success: ${data}` }
      expect(callCallback(callbacks, 'test')).toBe('Success: test')
    })

    test('should return undefined when callback does not exist', () => {
      const callbacks = {}
      expect(callCallback(callbacks, 'test')).toBeUndefined()
    })

    test('should return undefined when callbacks is null', () => {
      expect(callCallback(null, 'test')).toBeUndefined()
    })
  })

  describe('getNameFromConfig', () => {
    test('should return user name when it exists', () => {
      const config = { user: { name: 'Alice' } }
      expect(getNameFromConfig(config)).toBe('Alice')
    })

    test('should return account name when user name missing', () => {
      const config = { account: { name: 'Bob' } }
      expect(getNameFromConfig(config)).toBe('Bob')
    })

    test('should return Guest when both missing', () => {
      const config = {}
      expect(getNameFromConfig(config)).toBe('Guest')
    })

    test('user name should take precedence', () => {
      const config = {
        user: { name: 'Alice' },
        account: { name: 'Bob' }
      }
      expect(getNameFromConfig(config)).toBe('Alice')
    })
  })

  describe('cannotDeleteWithOptionalChaining', () => {
    test('should return false', () => {
      expect(cannotDeleteWithOptionalChaining({})).toBe(false)
    })
  })

  describe('checkPermission', () => {
    test('should call permission check', () => {
      const admin = {
        permissions: {
          canEdit: () => true
        }
      }
      expect(checkPermission(admin)).toBe(true)
    })

    test('should return undefined when permission method missing', () => {
      const admin = { permissions: {} }
      expect(checkPermission(admin)).toBeUndefined()
    })
  })

  describe('demonstrateShortCircuit', () => {
    test('should return undefined when property missing', () => {
      const obj = { someProperty: 'value' }
      expect(demonstrateShortCircuit(obj)).toBeUndefined()
    })

    test('should return undefined when obj is null', () => {
      expect(demonstrateShortCircuit(null)).toBeUndefined()
    })
  })

  describe('checkActiveAndPermission', () => {
    test('should return true when both conditions met', () => {
      const user = {
        isActive: true,
        permissions: { canPost: true }
      }
      expect(checkActiveAndPermission(user)).toBe(true)
    })

    test('should return false when isActive is false', () => {
      const user = {
        isActive: false,
        permissions: { canPost: true }
      }
      expect(checkActiveAndPermission(user)).toBe(false)
    })

    test('should return undefined when user is null', () => {
      expect(checkActiveAndPermission(null)).toBeUndefined()
    })
  })

  describe('handleUndefinedValue', () => {
    test('should return property value', () => {
      const value = { property: 'test' }
      expect(handleUndefinedValue(value)).toBe('test')
    })

    test('should return default when value is undefined', () => {
      expect(handleUndefinedValue(undefined)).toBe('default')
    })

    test('should return default when property missing', () => {
      const value = {}
      expect(handleUndefinedValue(value)).toBe('default')
    })
  })

  describe('safeMap', () => {
    test('should map array values', () => {
      const arr = [1, 2, 3]
      expect(safeMap(arr)).toEqual([2, 4, 6])
    })

    test('should return undefined when array is null', () => {
      expect(safeMap(null)).toBeUndefined()
    })

    test('should return empty array for empty input', () => {
      expect(safeMap([])).toEqual([])
    })
  })

  describe('getAgeCategory', () => {
    test('should return adult for age >= 18', () => {
      const user = { age: 25 }
      expect(getAgeCategory(user)).toBe('adult')
    })

    test('should return minor for age < 18', () => {
      const user = { age: 15 }
      expect(getAgeCategory(user)).toBe('minor')
    })

    test('should return unknown when user is null', () => {
      expect(getAgeCategory(null)).toBe('unknown')
    })

    test('should return unknown when user is undefined', () => {
      expect(getAgeCategory(undefined)).toBe('unknown')
    })
  })

  describe('addOptionalValues', () => {
    test('should add two values', () => {
      const obj1 = { value: 10 }
      const obj2 = { value: 20 }
      expect(addOptionalValues(obj1, obj2)).toBe(30)
    })

    test('should treat missing value as 0', () => {
      const obj1 = { value: 10 }
      const obj2 = null
      expect(addOptionalValues(obj1, obj2)).toBe(10)
    })

    test('should return 0 when both are null', () => {
      expect(addOptionalValues(null, null)).toBe(0)
    })
  })

  describe('triggerChange', () => {
    test('should call onChange with value', () => {
      let called = false
      const callbacks = {
        onChange: (val) => { called = val }
      }
      triggerChange(callbacks, 'test')
      expect(called).toBe('test')
    })

    test('should return undefined when onChange missing', () => {
      expect(triggerChange({}, 'test')).toBeUndefined()
    })
  })

  describe('getItemName', () => {
    test('should return item name', () => {
      const data = {
        items: [
          { name: 'Item 1' },
          { name: 'Item 2' }
        ]
      }
      expect(getItemName(data, 0)).toBe('Item 1')
      expect(getItemName(data, 1)).toBe('Item 2')
    })

    test('should return undefined when index out of bounds', () => {
      const data = { items: [{ name: 'Item 1' }] }
      expect(getItemName(data, 5)).toBeUndefined()
    })

    test('should return undefined when data is null', () => {
      expect(getItemName(null, 0)).toBeUndefined()
    })
  })
})

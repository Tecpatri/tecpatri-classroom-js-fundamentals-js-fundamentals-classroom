# 20 – Garbage Collection

Understand how JavaScript automatically manages memory through garbage collection.

## Learning Objectives

- Understand the concept of reachability
- Learn when objects become eligible for garbage collection
- Recognize that circular references don't prevent GC
- Apply best practices for memory management
- Understand reference chains and object isolation

## Key Concepts

### What is Garbage Collection?

JavaScript automatically frees memory by removing objects that are no longer accessible. You cannot force or prevent garbage collection, but understanding how it works helps you write better code.

### Reachability

The fundamental concept: **values that can be accessed or used are kept in memory**.

**Root values** (always reachable):
- Global variables
- Currently executing function and its local variables
- Functions in the current call chain

**Reachable values**:
- Values accessible from roots through references or chains of references

```javascript
// user is reachable (global variable - a root)
let user = { name: 'John' }

// Make it unreachable
user = null  // Now the object becomes garbage-collected
```

### Reference Chains

An object is reachable if there's a path of references from any root:

```javascript
let user = { name: 'John' }
let admin = user  // Two references to same object

user = null       // Still reachable through admin
admin = null      // NOW unreachable, will be collected
```

### Interlinked Objects

Multiple objects can reference each other. All are reachable as long as they connect to a root:

```javascript
function marry (man, woman) {
  woman.husband = man
  man.wife = woman
}

let family = {
  father: { name: 'John' },
  mother: { name: 'Jane' }
}

marry(family.father, family.mother)

// Both father and mother are reachable through family
// They also reference each other
```

Breaking the connection:

```javascript
delete family.father
delete family.mother.husband

// Now father is unreachable (no references from roots)
// Mother is still reachable through family.mother
```

### Circular References Don't Prevent GC

Objects that reference each other can still be garbage collected if unreachable from roots:

```javascript
function createCircle () {
  let obj1 = { name: 'obj1' }
  let obj2 = { name: 'obj2' }

  obj1.ref = obj2
  obj2.ref = obj1  // Circular reference

  // When function returns, obj1 and obj2 become unreachable
  // Even though they reference each other, both are collected
}

createCircle()  // Circle created then collected
```

### Unreachable Island

A group of interlinked objects can become "isolated" - unreachable as a group:

```javascript
let family = {
  father: { name: 'John' },
  mother: { name: 'Jane' }
}

family.father.wife = family.mother
family.mother.husband = family.father

// They reference each other, but:
family = null

// The entire "island" is now unreachable and will be collected
```

### Internal Algorithm

JavaScript engines use the **"mark-and-sweep"** algorithm:

1. **Mark**: Garbage collector starts from roots, marks all reachable objects
2. **Sweep**: Unmarked objects are considered garbage and removed

**Optimizations**:
- **Generational collection**: New objects are checked more frequently
- **Incremental collection**: Work is split into parts to avoid delays
- **Idle-time collection**: Runs during CPU idle time

### Best Practices

You cannot control GC directly, but you can help:

1. **Clear references explicitly when done**:
   ```javascript
   let data = fetchLargeData()
   processData(data)
   data = null  // Help GC identify it's no longer needed
   ```

2. **Remove event listeners**:
   ```javascript
   element.removeEventListener('click', handler)
   ```

3. **Clear timers**:
   ```javascript
   clearTimeout(timer)
   clearInterval(interval)
   ```

4. **Avoid keeping references in closures**:
   ```javascript
   // Bad - keeps entire largeObject in memory
   function process (largeObject) {
     return function () {
       console.log(largeObject.size)
     }
   }

   // Good - only keeps what's needed
   function process (largeObject) {
     const size = largeObject.size
     return function () {
       console.log(size)
     }
   }
   ```

### Common Misconceptions

**Myth**: Setting a variable to `null` forces garbage collection
**Truth**: It only makes the object unreachable. GC runs on its own schedule

**Myth**: Circular references cause memory leaks
**Truth**: Modern engines handle circular references correctly

**Myth**: You need to manually manage memory in JavaScript
**Truth**: GC is automatic, but understanding it helps write efficient code

## Tasks

Complete the functions in `garbage-collection.js`:

1. **makeUnreachable**: Remove reference to make object unreachable
2. **countReferences**: Count how many variables reference an object
3. **breakChain**: Break a reference chain
4. **findReachable**: Identify reachable objects
5. **clearAllReferences**: Clear multiple references
6. **createCircularReference**: Create circular reference structure
7. **createIslandAndDetach**: Create isolated group of objects
8. **singleReferenceKeepsAlive**: Show one reference is enough
9. **createReferenceChain**: Create chain of references
10. **wouldBeCollected**: Determine GC eligibility
11. **detachParent**: Show child becomes unreachable with parent
12. **multiplePathsToObject**: Check reachability through multiple paths
13. **cleanup**: Practice manual cleanup of large data

## Run Tests

Test your solutions:

```bash
npm test exercises/20-garbage-collection
```

## Resources

- [JavaScript.info - Garbage Collection](https://javascript.info/garbage-collection)
- [MDN - Memory Management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)
- [V8 Blog - Trash Talk (GC)](https://v8.dev/blog/trash-talk)

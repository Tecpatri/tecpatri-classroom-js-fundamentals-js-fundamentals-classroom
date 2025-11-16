# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a JavaScript fundamentals learning repository with 23 progressive exercises covering basic JavaScript concepts from the javascript.info curriculum. Each exercise is self-contained with its own starter file, comprehensive Jest tests, and detailed README.

## Development Commands

### Testing
```bash
# Install dependencies first
npm ci

# Run all tests
npm test

# Run tests for a specific chapter
npm test exercises/04-variables

# Watch mode for continuous testing
npm test:watch
```

### Code Quality
```bash
# Lint code (checks exercises directory)
npm run lint

# Check formatting
npm run format
```

## Project Structure

### Exercise Organization
- Each exercise lives in `exercises/XX-topic-name/` where XX is a two-digit number (01-23)
- Every exercise folder contains:
  - `topic-name.js` - Student implementation file with exported functions (starter code with TODO comments)
  - `topic-name.spec.js` - Jest test file that imports and tests the implementation
  - `README.md` - Exercise instructions with javascript.info lesson link, concepts, and examples

### Curriculum Alignment
All exercises are aligned with javascript.info lessons:
1. Hello, world! → https://javascript.info/hello-world
2. Code structure → https://javascript.info/structure
3. Use strict → https://javascript.info/strict-mode
4. Variables → https://javascript.info/variables
5. Data types → https://javascript.info/types
6. Interaction (alert, prompt, confirm) → https://javascript.info/alert-prompt-confirm
7. Type conversions → https://javascript.info/type-conversions
8. Basic operators, maths → https://javascript.info/operators
9. Comparisons → https://javascript.info/comparison
10. Conditional branching → https://javascript.info/ifelse
11. Logical operators → https://javascript.info/logical-operators
12. Nullish coalescing operator → https://javascript.info/nullish-coalescing-operator
13. Loops → https://javascript.info/while-for
14. The "switch" statement → https://javascript.info/switch
15. Functions → https://javascript.info/function-basics
16. Function expressions → https://javascript.info/function-expressions
17. Arrow functions basics → https://javascript.info/arrow-functions-basics
18. Objects → https://javascript.info/object
19. Object references and copying → https://javascript.info/object-copy
20. Garbage collection → https://javascript.info/garbage-collection
21. Object methods, "this" → https://javascript.info/object-methods
22. Constructor, operator "new" → https://javascript.info/constructor-new
23. Optional chaining '?.' → https://javascript.info/optional-chaining

### Patterns
- All JavaScript files use ES modules (`type: "module"` in package.json)
- Exercise files export functions that are imported by corresponding test files
- Tests use Jest's standard `test()` and `expect()` API with `describe()` blocks
- File naming convention: folder name matches base filename (e.g., `04-variables/variables.js`)
- Starter code has TODO comments and empty function bodies for students to implement

### Autograde System
- `autograde/summarize.js` parses Jest output from `results.json` to generate a score summary
- Used for automated grading; calculates pass percentage across all tests

## Technology Stack
- Node.js 20
- Jest 29 for testing (runs in Node environment, not browser)
- ESLint with Standard config (warns on unused vars except those prefixed with `_`, allows console)
- Prettier for code formatting

## Working with Exercises

When modifying or fixing exercises:
1. The implementation file exports functions using ES module syntax (`export function name() {}`)
2. Test files import these functions (`import { name } from './file.js'`)
3. Tests run with `--runInBand` flag (sequential execution) by default
4. Jest is configured to only look in `exercises/` directory for tests
5. Each README includes the corresponding javascript.info lesson link
6. Tests are comprehensive (4-23 tests per exercise) covering key concepts and edge cases
7. Students implement empty function bodies guided by TODO comments

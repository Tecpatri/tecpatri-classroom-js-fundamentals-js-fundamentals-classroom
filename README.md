# JavaScript Fundamentals – Classroom Template

This repository contains 23 progressive exercises covering JavaScript fundamentals from [javascript.info](https://javascript.info). Each exercise includes:
- Starter JavaScript file with TODO comments
- Comprehensive Jest test suite (4-23 tests per exercise)
- Detailed README with lesson links, concepts, and examples

## Getting Started

```bash
# Install dependencies
npm ci

# Run all tests (all exercises)
npm test

# Run a specific exercise only (example: 04-variables)
npm test -- exercises/04-variables

# Watch mode for development
npm test:watch
```

## Working on Exercises & Grading (Students)

- **Goal**: Over time you are expected to complete **all exercises** in this repository.
- **Reality**: You will usually work on **one exercise at a time**.

### Workflow for a single exercise

1. **Pick the exercise** from the list below (for example `04-variables`).
2. **Read the exercise README** at `exercises/04-variables/README.md` and the linked article on [javascript.info](https://javascript.info).
3. **Edit only the implementation file**, for example:
   - `exercises/04-variables/variables.js`
   - Follow the `TODO` comments.
4. **Run tests for just that exercise** while you are working:

   ```bash
   npm test -- exercises/04-variables
   ```

   Fix your code until all tests for that exercise pass.

5. **Commit and push your work** to save/provide it for grading:

   ```bash
   git add .
   git commit -m "Complete 04-variables"
   git push
   ```

### Running the whole repo

When you are ready to check your overall progress, you can run **all tests**:

```bash
npm test
```

- This runs tests for **every exercise** in `exercises/`.
- Any exercise you have not finished yet will show **failing tests**.

### Autograding in GitHub Classroom

When you push to GitHub (or open a pull request), GitHub Classroom will run an
**autograding workflow**:

- You can see the status in the **"Actions" / "Checks"** tab on GitHub.
- The workflow runs `npm test` for the whole repo.
- **Failing checks do not always mean your current exercise is wrong** – they
  may also include other exercises you have not implemented yet.

How to interpret the results:

- If you are only assigned a specific exercise (for example `04-variables`):
  - Focus on the tests and files inside that exercise’s folder.
  - It is OK if other exercises still fail for now.
- Later, when the assignment requires **all exercises to pass**, the goal is to
  have the autograding checks green with `npm test`.

### Keeping your repository up to date

Your instructor may add **new exercises or fixes** to the template during the course.

- If you already accepted the assignment earlier, your repository does **not**
  update automatically.
- To get the latest changes, you should regularly **pull updates** from the
  main branch (your instructor will tell you which remote/branch to use). A
  typical workflow looks like:

  ```bash
  git pull origin main
  ```

  or, if your instructor asks you to pull from an `upstream` remote:

  ```bash
  git fetch upstream
  git merge upstream/main
  ```

Ask your instructor which command you should use in your class setup, and run
it regularly so you do not miss new exercises or important updates.

## Exercises

1. [Hello, world!](exercises/01-hello-world)
2. [Code structure](exercises/02-code-structure)
3. [The modern mode, "use strict"](exercises/03-use-strict)
4. [Variables](exercises/04-variables)
5. [Data types](exercises/05-data-types)
6. [Interaction: alert, prompt, confirm](exercises/06-interaction)
7. [Type Conversions](exercises/07-type-conversions)
8. [Basic operators, maths](exercises/08-operators-math)
9. [Comparisons](exercises/09-comparisons)
10. [Conditional branching: if, '?'](exercises/10-conditionals)
11. [Logical operators](exercises/11-logical-operators)
12. [Nullish coalescing operator '??'](exercises/12-nullish-coalescing)
13. [Loops: while and for](exercises/13-loops)
14. [The "switch" statement](exercises/14-switch)
15. [Functions](exercises/15-functions)
16. [Function expressions](exercises/16-function-expressions)
17. [Arrow functions, the basics](exercises/17-arrow-basics)
18. [Objects](exercises/18-objects)
19. [Object references and copying](exercises/19-object-references-copying)
20. [Garbage collection](exercises/20-garbage-collection)
21. [Object methods, "this"](exercises/21-object-methods-this)
22. [Constructor, operator "new"](exercises/22-constructor-new)
23. [Optional chaining '?.'](exercises/23-optional-chaining)

## Technology Stack

- Node.js 20
- Jest 29 for testing
- ESLint (Standard config)
- Prettier for code formatting

## Code Quality

```bash
# Lint code
npm run lint

# Check formatting
npm run format
```

## Getting Feedback

  A "Feedback" pull request has been automatically created in your repository. Your
  instructor may use this to provide feedback on your code. Check it regularly for
  comments and suggestions.

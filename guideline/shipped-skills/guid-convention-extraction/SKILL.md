---
name: guid-convention-extraction
description: "Extracts naming conventions, code style guidelines, and structural patterns specific to the project. Analyzes variable naming, function signatures, file organization, and comment styles."
model: inherit
---

# Convention Extraction

## Pattern Description

**What**: Identifies and documents recurring conventions and stylistic choices within a project's codebase.

**When**: Use this skill to understand a project's established coding standards, when onboarding to a new codebase, or when ensuring consistency during development.

**Context**: Applicable across various programming languages and frameworks, focusing on observable patterns rather than prescriptive rules.

## Project-Specific Conventions

### Naming Conventions
- **Variables**: [e.g., `camelCase` for JS, `snake_case` for Python]
- **Functions/Methods**: [e.g., `verbNoun()` for actions]
- **Classes/Interfaces**: [e.g., `PascalCase`]
- **Files**: [e.g., `componentName.tsx`, `utility-function.js`]

### Code Style Guidelines
- **Indentation**: [e.g., 2 spaces, 4 spaces, tabs]
- **Brace Style**: [e.g., K&R, Allman]
- **Line Length**: [e.g., max 80 characters]
- **Comments**: [e.g., JSDoc, inline, single-line vs multi-line]

### Structural Patterns
- **File Organization**: [e.g., `src/components`, `src/utils`, `lib/`]
- **Module Structure**: [e.g., barrel files, index.ts exports]
- **Dependency Injection**: [e.g., manual, framework-assisted]
- **Error Handling**: [e.g., `try-catch`, custom error classes]
- **Concurrency**: [e.g., async/await, threads, goroutines]
- **Logging**: [e.g., consistent log levels, structured logging]

## Common Pitfalls

### ❌ Inconsistent Application
**Problem**: Conventions are documented but not consistently followed.
**Why It Fails**: Leads to code readability issues and developer confusion.
**Better Approach**: Automate linting and formatting where possible; conduct regular code reviews.

### ❌ Over-Prescription
**Problem**: Too many rigid rules, stifling developer flexibility.
**Why It Fails**: Can make coding tedious and discourage adoption.
**Better Approach**: Focus on key conventions that impact readability and maintainability.

## Convention Analysis for Skill Creation

### Identifying Skill Opportunities
When extracting conventions, look for patterns that could benefit from dedicated skills:
- **Recurring Workflows**: Repeated processes that could be codified
- **Complex Patterns**: Multi-step conventions that require coordination
- **Team-Specific Approaches**: Unique solutions different from standard practices
- **Integration Patterns**: How different technologies or components work together

### Pattern Frequency Assessment
Consider these factors when evaluating convention relevance for skill creation:
- **Usage Frequency**: How often do developers encounter this pattern?
- **Complexity Level**: Is this simple enough to remember or complex enough to benefit from documentation?
- **Team Impact**: Does this affect multiple team members or workflows?
- **Maintenance Needs**: Will this pattern evolve or change over time?

### Tool Integration Opportunities
Some conventions may suggest specific tool selections:
- **Code Formatting**: Linters, formatters, pre-commit hooks
- **Testing Patterns**: Specific testing frameworks or assertion libraries
- **Build Processes**: Build tools, bundlers, automation scripts
- **Documentation**: Documentation generators, template systems

## Related Resources

### Related Skills
- **universal-technology-discovery**: To understand the technologies driving conventions.
- **repository-pattern-recognition**: For understanding how conventions relate to repository structure.
- **skill-creation**: For creating skills based on extracted conventions and patterns.
- **tool-selection-guidance**: For selecting tools that support established conventions.

### Related Agents
- **code-reviewer-agent**: To enforce extracted conventions.
- **frontend-specialist**: For frontend-specific convention guidance.
- **backend-specialist**: For backend and API convention patterns.

### External Resources
- [EditorConfig](https://editorconfig.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

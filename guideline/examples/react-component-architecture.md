---
name: react-component-architecture
description: "Use when creating or refactoring React components. Apply for functional components, hooks, state management, and props design. Relevant for UI development, component libraries, and frontend features."
model: inherit
---

# React Component Architecture

## Pattern Description

**What**: Best practices for designing, structuring, and implementing React components to ensure reusability, maintainability, and performance.

**When**: Use this pattern when creating new UI components, refactoring existing ones, or establishing frontend architecture.

**Context**: Designed for modern React (Functional Components + Hooks) with TypeScript and Tailwind CSS.

## Component Design Principles

### 1. Single Responsibility
**Focus**: Each component should do one thing well.
**Pattern**: Split complex components into smaller, focused sub-components.

### 2. Composition over Inheritance
**Focus**: Build complex UIs by combining simpler components.
**Pattern**: Use `children` prop and slots for flexible layouts.

### 3. Pure Presentational Components
**Focus**: Separate UI rendering from business logic.
**Pattern**: "Container/Presentational" or "Smart/Dumb" components (though Hooks often replace this, the principle of separation remains valid).

## State Management Patterns

### 1. Local State
**Use Case**: UI state specific to a single component (e.g., form input, toggle).
**Tool**: `useState`, `useReducer`.

### 2. Lifted State
**Use Case**: State shared between sibling components.
**Pattern**: Move state up to the nearest common ancestor and pass down via props.

### 3. Global/Context State
**Use Case**: Data needed by many components at different nesting levels (e.g., theme, auth user).
**Tool**: `useContext`, Redux, Zustand, Recoil.

## Performance Optimization

### 1. Memoization
**Pattern**: Use `React.memo`, `useMemo`, and `useCallback` to prevent unnecessary re-renders.
**Caution**: Don't optimize prematurely; measure first.

### 2. Code Splitting
**Pattern**: Use `React.lazy` and `Suspense` to load components only when needed.

## Common Pitfalls

### ❌ Prop Drilling
**Problem**: Passing props through many layers of components that don't use them.
**Why It Fails**: Makes refactoring difficult and code hard to read.
**Better Approach**: Use Composition (pass components as props) or Context.

### ❌ Giant Components
**Problem**: Components with hundreds of lines of code handling multiple concerns.
**Why It Fails**: Hard to test, debug, and reuse.
**Better Approach**: Extract sub-components and custom hooks.

### ❌ useEffect Dependency Lying
**Problem**: Omitting variables from the `useEffect` dependency array.
**Why It Fails**: Causes stale closures and unpredictable bugs.
**Better Approach**: Always include all dependencies or refactor the effect logic.

## Related Resources

### Related Skills
- **working-with-react**: General React usage.
- **creating-tests**: Testing React components.

### Related Agents
- **frontend-specialist**: For UI/UX implementation.

### External Resources
- [React Documentation](https://react.dev/)
- [Thinking in React](https://react.dev/learn/thinking-in-react)

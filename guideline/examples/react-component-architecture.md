---
# Claude Code Native Fields (REQUIRED)
name: react-component-architecture
description: "Use when creating React components, implementing UI features, or refactoring frontend code in React 18+ with TypeScript. Apply for functional components, hooks, state management, styling, and component-based architecture patterns."

# Claude Code Optional Fields
model: inherit
tools: Read, Write, Edit, Grep, Glob

# Guild Enhancement Fields (Optional)
category: frontend-patterns
applicability:
  file_patterns: ["**/components/**/*.tsx", "**/components/**/*.jsx", "src/**/*.tsx"]
  technologies: ["react", "typescript", "tailwind", "styled-components"]
  task_types: ["component-creation", "ui-development", "frontend-feature"]
related_skills: ["state-management", "styling-patterns", "testing-components"]
related_agents: ["frontend-specialist", "ui-architect"]
---

## Pattern Description

**What**: A structured approach to creating React components following project conventions for organization, typing, styling, and state management.

**When**: Use this pattern when creating new React components, refactoring existing components, or implementing UI features.

**Context**: This project uses React 18+ with TypeScript, functional components with hooks, and component-based architecture.

## Project-Specific Conventions

### Component Organization
```
src/components/
├── common/           # Reusable components (Button, Input, Card)
├── layout/           # Layout components (Header, Sidebar, Footer)
├── features/         # Feature-specific components
│   └── {feature}/    # Organized by feature domain
│       ├── {Component}.tsx
│       ├── {Component}.test.tsx
│       └── index.ts  # Barrel export
└── pages/            # Page-level components
```

### File Naming
- **Component files**: `PascalCase.tsx` (e.g., `UserProfile.tsx`)
- **Test files**: `{ComponentName}.test.tsx`
- **Story files** (if using Storybook): `{ComponentName}.stories.tsx`
- **Barrel exports**: `index.ts` in feature directories

### Component Structure
```typescript
// 1. Imports (grouped: React, libraries, local, types, styles)
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { UserAvatar } from '@/components/common';
import type { User } from '@/types';
import styles from './UserProfile.module.css';

// 2. Types/Interfaces
interface UserProfileProps {
  userId: string;
  onUpdate?: (user: User) => void;
  className?: string;
}

// 3. Component definition
export function UserProfile({ userId, onUpdate, className }: UserProfileProps) {
  // a. Hooks (state, effects, queries)
  const [isEditing, setIsEditing] = useState(false);
  const { data: user, isLoading } = useQuery(['user', userId], fetchUser);

  // b. Event handlers
  const handleSave = () => {
    // ...
  };

  // c. Render logic
  if (isLoading) return <LoadingSpinner />;

  return (
    <div className={cn(styles.container, className)}>
      {/* JSX */}
    </div>
  );
}

// 4. Default export (if needed)
export default UserProfile;
```

### TypeScript Conventions
- **Props interfaces**: `{ComponentName}Props`
- **State types**: Explicit types for useState hooks
- **Event handlers**: Properly typed (e.g., `React.MouseEvent<HTMLButtonElement>`)
- **Ref types**: `React.RefObject<HTMLDivElement>` or `React.MutableRefObject`
- **Children**: Use `React.ReactNode` for children prop

### State Management
- **Local state**: `useState` for component-specific state
- **Complex state**: `useReducer` for complex state logic
- **Global state**: Context API or Zustand for shared state
- **Server state**: React Query for data fetching and caching
- **Form state**: React Hook Form for form handling

### Styling Approach
- **CSS Modules**: Scoped styles per component (`.module.css`)
- **Tailwind CSS**: Utility classes for common styling
- **Conditional classes**: Use `cn()` utility (classnames/clsx)
- **Dynamic styles**: CSS variables for theme values
- **Responsive**: Mobile-first responsive design

## Common Pitfalls

### ❌ Props Drilling
**Problem**: Passing props through multiple component levels.
**Why It Fails**: Difficult to maintain, couples components, verbose.
**Better Approach**: Use Context API or composition for deeply nested data.

```typescript
// ❌ Bad - Props drilling
<Parent>
  <Child1 theme={theme}>
    <Child2 theme={theme}>
      <Child3 theme={theme} /> {/* Theme passed through 3 levels! */}
    </Child2>
  </Child1>
</Parent>

// ✅ Good - Context
const ThemeContext = createContext<Theme>(defaultTheme);

export function Parent() {
  return (
    <ThemeContext.Provider value={theme}>
      <Child1>
        <Child2>
          <Child3 /> {/* Accesses theme via useContext */}
        </Child2>
      </Child1>
    </ThemeContext.Provider>
  );
}
```

### ❌ Massive Components
**Problem**: Components with hundreds of lines, multiple responsibilities.
**Why It Fails**: Hard to test, difficult to understand, poor reusability.
**Better Approach**: Break into smaller, focused components.

```typescript
// ❌ Bad - One massive component
export function UserDashboard() {
  // 300+ lines of logic, JSX, and handlers
  return (
    <div>
      {/* Complex profile section */}
      {/* Complex stats section */}
      {/* Complex activity feed */}
      {/* Complex settings panel */}
    </div>
  );
}

// ✅ Good - Composed from smaller components
export function UserDashboard() {
  return (
    <div className={styles.dashboard}>
      <UserProfile />
      <UserStats />
      <ActivityFeed />
      <SettingsPanel />
    </div>
  );
}
```

### ❌ Missing Dependency Arrays
**Problem**: useEffect hooks without proper dependency arrays.
**Why It Fails**: Stale closures, infinite loops, unexpected behavior.
**Better Approach**: Include all dependencies or use exhaustive deps ESLint rule.

```typescript
// ❌ Bad - Missing dependencies
useEffect(() => {
  fetchData(userId); // userId not in deps array!
}, []);

// ✅ Good - All dependencies included
useEffect(() => {
  fetchData(userId);
}, [userId]);
```

### ❌ Inline Function Definitions
**Problem**: Creating new function instances on every render in event handlers.
**Why It Fails**: Unnecessary re-renders of child components, performance issues.
**Better Approach**: Define handlers outside JSX or use useCallback when needed.

```typescript
// ❌ Bad - New function on every render
{items.map(item => (
  <Item key={item.id} onClick={() => handleClick(item.id)} />
))}

// ✅ Good - Stable function reference
const handleItemClick = useCallback((id: string) => {
  handleClick(id);
}, [handleClick]);

{items.map(item => (
  <Item key={item.id} onClick={() => handleItemClick(item.id)} />
))}
```

### ❌ Not Memoizing Expensive Calculations
**Problem**: Recalculating expensive values on every render.
**Why It Fails**: Performance degradation, sluggish UI.
**Better Approach**: Use useMemo for expensive calculations.

```typescript
// ❌ Bad - Recalculates every render
function ProductList({ products }) {
  const sortedProducts = products.sort(...).filter(...).map(...); // Expensive!
  return <div>{sortedProducts.map(...)}</div>;
}

// ✅ Good - Memoized calculation
function ProductList({ products }) {
  const sortedProducts = useMemo(() =>
    products.sort(...).filter(...).map(...),
    [products]
  );
  return <div>{sortedProducts.map(...)}</div>;
}
```

## Related Resources

### Related Skills
- **state-management**: Global state patterns using Context/Zustand
- **styling-patterns**: CSS Modules, Tailwind, and theming approaches
- **testing-components**: React Testing Library patterns for this project
- **performance-optimization**: React performance best practices
- **form-handling**: React Hook Form integration patterns

### Related Agents
- **frontend-specialist**: For complex component architecture decisions
- **ui-architect**: For design system and component library design
- **performance-specialist**: For optimization and profiling

### External Resources
- Component examples: `/docs/components.md`
- Design system: `/docs/design-system.md`
- React documentation: https://react.dev
- TypeScript React cheatsheet: https://react-typescript-cheatsheet.netlify.app

## Implementation Checklist

When creating a new React component:
- [ ] Choose appropriate component location (common/features/pages)
- [ ] Create component file with proper naming
- [ ] Define TypeScript interface for props
- [ ] Structure component with hooks, handlers, JSX
- [ ] Add proper TypeScript types for all values
- [ ] Apply styling using project conventions
- [ ] Handle loading and error states
- [ ] Make component accessible (ARIA attributes, keyboard navigation)
- [ ] Write unit tests using React Testing Library
- [ ] Add component to barrel export if in feature directory
- [ ] Consider creating Storybook story for reusable components

## Notes

- This pattern assumes React 18+ with TypeScript
- Prioritize accessibility (WCAG 2.1 AA compliance)
- Use React DevTools for debugging and profiling
- Consider code splitting for large components (React.lazy)
- Follow React 18+ patterns (Suspense, concurrent rendering)
- Use strict mode in development
- Consider performance implications of context updates
- Prefer composition over inheritance

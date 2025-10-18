---
# Claude Code Native Fields (REQUIRED)
name: test-creation-protocol
description: "Use when writing unit tests, integration tests, or end-to-end tests with Jest, Vitest, React Testing Library, or Playwright. Apply for testing strategy, test structure, mocking, assertions, and implementing TDD."

# Claude Code Optional Fields
model: inherit
tools: Read, Write, Edit, Grep, Glob, Bash

# Guild Enhancement Fields (Optional)
category: testing-patterns
applicability:
  file_patterns: ["**/*.test.ts", "**/*.spec.ts", "**/__tests__/**"]
  technologies: ["jest", "vitest", "testing-library", "playwright"]
  task_types: ["unit-testing", "integration-testing", "e2e-testing"]
related_skills: ["api-endpoint-creation", "react-component-architecture", "mocking-strategies"]
related_agents: ["testing-specialist", "qa-engineer"]
---

## Pattern Description

**What**: A systematic approach to creating unit, integration, and end-to-end tests following project conventions and best practices.

**When**: Use this pattern when writing tests for new features, adding test coverage to existing code, or implementing test-driven development.

**Context**: This project uses Jest/Vitest for unit/integration tests, React Testing Library for component tests, and Playwright for E2E tests.

## Project-Specific Conventions

### Test Organization
```
src/
├── components/
│   └── Button/
│       ├── Button.tsx
│       └── Button.test.tsx        # Co-located with component
├── services/
│   └── api/
│       ├── userService.ts
│       └── userService.test.ts    # Co-located with service
└── __tests__/
    ├── integration/               # Integration tests
    └── e2e/                       # E2E tests (Playwright)
```

### File Naming
- **Unit tests**: `{fileName}.test.ts` or `{fileName}.spec.ts`
- **Component tests**: `{ComponentName}.test.tsx`
- **Integration tests**: `{feature}.integration.test.ts`
- **E2E tests**: `{userFlow}.e2e.test.ts`

### Test Structure (AAA Pattern)
```typescript
describe('UserService', () => {
  describe('createUser', () => {
    it('should create a new user with valid data', async () => {
      // Arrange - Set up test data and mocks
      const userData = { name: 'John', email: 'john@example.com' };
      mockDb.users.create.mockResolvedValue({ id: '1', ...userData });

      // Act - Execute the function being tested
      const result = await userService.createUser(userData);

      // Assert - Verify the results
      expect(result).toEqual({ id: '1', ...userData });
      expect(mockDb.users.create).toHaveBeenCalledWith(userData);
    });
  });
});
```

### Test Coverage Requirements
- **Target**: 80%+ code coverage overall
- **Critical paths**: 100% coverage (authentication, payments, data mutations)
- **Utility functions**: 90%+ coverage
- **UI components**: Focus on behavior, not implementation details
- **Edge cases**: Explicitly test error conditions and boundaries

### Mocking Strategy
- **External APIs**: Mock with MSW (Mock Service Worker)
- **Database**: Mock with in-memory implementation or test fixtures
- **Time/Dates**: Mock with Jest fake timers or date-fns mock
- **File system**: Mock with `mock-fs` or Jest mocks
- **Environment variables**: Mock with `jest.mock` or test env config

### Assertion Style
```typescript
// Prefer specific matchers
expect(result).toBe(true);              // ✅ Good
expect(result).toEqual(expectedObject); // ✅ Good
expect(result).toBeTruthy();            // ❌ Too vague

// Use descriptive error messages
expect(user.role).toBe('admin'); // Message generated automatically
```

## Common Pitfalls

### ❌ Testing Implementation Details
**Problem**: Tests couple to internal implementation instead of behavior.
**Why It Fails**: Tests break on refactoring, don't catch actual bugs.
**Better Approach**: Test behavior and outcomes, not implementation.

```typescript
// ❌ Bad - Testing internal state
it('should set isLoading to true', () => {
  const { result } = renderHook(() => useUserData());
  act(() => result.current.fetchUser());
  expect(result.current.isLoading).toBe(true); // Implementation detail!
});

// ✅ Good - Testing user-visible behavior
it('should show loading spinner while fetching user', async () => {
  render(<UserProfile userId="123" />);
  expect(screen.getByRole('progressbar')).toBeInTheDocument();
  await waitFor(() => {
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});
```

### ❌ Not Cleaning Up After Tests
**Problem**: Tests don't reset state, causing test interdependence.
**Why It Fails**: Flaky tests, order-dependent failures.
**Better Approach**: Use beforeEach/afterEach for cleanup.

```typescript
// ❌ Bad - No cleanup
describe('UserService', () => {
  it('test 1', () => {
    localStorage.setItem('token', 'abc');
    // ... test logic
  });

  it('test 2', () => {
    // This test might see token from test 1!
  });
});

// ✅ Good - Proper cleanup
describe('UserService', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  // ... tests
});
```

### ❌ Overly Broad Mocks
**Problem**: Mocking too much, tests don't exercise real code paths.
**Why It Fails**: False confidence, missed integration issues.
**Better Approach**: Mock only external dependencies, test real logic.

```typescript
// ❌ Bad - Mocking everything
jest.mock('./userService');
jest.mock('./validation');
jest.mock('./database');
// Now testing almost nothing!

// ✅ Good - Mock only external dependencies
jest.mock('./api/httpClient'); // External API
// Test real userService, validation, and in-memory database
```

### ❌ Async Tests Without Proper Waiting
**Problem**: Tests don't wait for async operations, causing race conditions.
**Why It Fails**: Flaky tests, false positives/negatives.
**Better Approach**: Use async/await, waitFor, or act properly.

```typescript
// ❌ Bad - Not waiting for async
it('should display user name', () => {
  render(<UserProfile userId="123" />);
  expect(screen.getByText('John Doe')).toBeInTheDocument(); // Fails - not loaded yet!
});

// ✅ Good - Proper async handling
it('should display user name', async () => {
  render(<UserProfile userId="123" />);
  await waitFor(() => {
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});
```

### ❌ Unclear Test Descriptions
**Problem**: Test names don't clearly describe what's being tested.
**Why It Fails**: Hard to understand failures, poor documentation.
**Better Approach**: Use descriptive test names that explain expected behavior.

```typescript
// ❌ Bad - Vague descriptions
it('works', () => { ... });
it('test user creation', () => { ... });
it('handles errors', () => { ... });

// ✅ Good - Clear, specific descriptions
it('should create user with valid email and name', () => { ... });
it('should throw ValidationError when email is invalid', () => { ... });
it('should return 401 when authentication token is expired', () => { ... });
```

## Test Types & When to Use

### Unit Tests
**Purpose**: Test individual functions/methods in isolation
**When**: Testing utility functions, services, hooks, pure logic
**Tools**: Jest/Vitest
**Example**:
```typescript
describe('calculateDiscount', () => {
  it('should apply 10% discount for orders over $100', () => {
    expect(calculateDiscount(150, 'SAVE10')).toBe(135);
  });
});
```

### Component Tests
**Purpose**: Test React components' behavior and rendering
**When**: Testing UI components, user interactions, state changes
**Tools**: React Testing Library + Jest/Vitest
**Example**:
```typescript
describe('LoginForm', () => {
  it('should submit form with email and password', async () => {
    const onSubmit = jest.fn();
    render(<LoginForm onSubmit={onSubmit} />);

    await userEvent.type(screen.getByLabelText('Email'), 'user@example.com');
    await userEvent.type(screen.getByLabelText('Password'), 'password123');
    await userEvent.click(screen.getByRole('button', { name: 'Log In' }));

    expect(onSubmit).toHaveBeenCalledWith({
      email: 'user@example.com',
      password: 'password123'
    });
  });
});
```

### Integration Tests
**Purpose**: Test multiple units working together
**When**: Testing API routes, service layer with database, feature flows
**Tools**: Jest/Vitest with real dependencies
**Example**:
```typescript
describe('User Registration Flow', () => {
  it('should register user and send confirmation email', async () => {
    const userData = { email: 'new@example.com', password: 'secure123' };

    const response = await request(app)
      .post('/api/auth/register')
      .send(userData)
      .expect(201);

    expect(response.body.user.email).toBe(userData.email);
    expect(mockEmailService.sendConfirmation).toHaveBeenCalledWith(
      expect.objectContaining({ email: userData.email })
    );
  });
});
```

### E2E Tests
**Purpose**: Test complete user workflows in real browser
**When**: Testing critical user journeys, cross-browser compatibility
**Tools**: Playwright
**Example**:
```typescript
test('user can complete checkout process', async ({ page }) => {
  await page.goto('/products');
  await page.click('[data-testid="add-to-cart"]');
  await page.click('[data-testid="checkout"]');
  await page.fill('[name="cardNumber"]', '4242424242424242');
  await page.click('[data-testid="place-order"]');

  await expect(page.locator('.order-confirmation')).toBeVisible();
});
```

## Related Resources

### Related Skills
- **mocking-strategies**: Advanced mocking patterns for this project
- **api-endpoint-creation**: API testing patterns
- **react-component-architecture**: Component testing patterns
- **ci-cd-integration**: Running tests in CI/CD pipeline

### Related Agents
- **testing-specialist**: For complex testing scenarios and coverage analysis
- **qa-engineer**: For E2E test design and test strategy

### External Resources
- Testing guidelines: `/docs/testing.md`
- Jest documentation: https://jestjs.io
- React Testing Library: https://testing-library.com/react
- Playwright documentation: https://playwright.dev

## Implementation Checklist

When writing tests:
- [ ] Choose appropriate test type (unit/component/integration/e2e)
- [ ] Co-locate test file with source file
- [ ] Use descriptive test names (should/when/given format)
- [ ] Follow AAA pattern (Arrange, Act, Assert)
- [ ] Mock only external dependencies
- [ ] Handle async operations properly (await, waitFor)
- [ ] Test error cases and edge conditions
- [ ] Clean up after tests (beforeEach/afterEach)
- [ ] Verify test coverage meets requirements
- [ ] Run tests locally before committing

## Notes

- Prefer integration tests over unit tests when reasonable
- E2E tests are expensive - focus on critical paths
- Use test.each for parameterized tests
- Consider snapshot tests sparingly (they're brittle)
- Use data-testid attributes for stable selectors
- Run tests in watch mode during development
- Configure CI to run full test suite on PRs
- Keep tests fast - slow tests won't get run
- Test behavior, not implementation
- Write tests that fail when they should

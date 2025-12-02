---
name: test-creation-protocol
description: "Use when creating or modifying tests. Apply for unit, integration, and e2e testing tasks. Includes conventions for test structure, naming, mocking, and assertion patterns."
model: inherit
---

# Test Creation Protocol

## Pattern Description

**What**: Standardized approach for designing, implementing, and maintaining automated tests across the codebase.

**When**: Apply this pattern whenever adding new features, fixing bugs (regression tests), or refactoring code.

**Context**: Ensures high code quality, prevents regressions, and documents system behavior through executable specifications.

## Project-Specific Conventions

### Test Hierarchy
- **Unit Tests**: Co-located with source files (e.g., `component.test.ts` next to `component.ts`) or in `__tests__` directories. Isolate logic using mocks.
- **Integration Tests**: Located in `tests/integration` or distinct directories. Test interaction between modules/services.
- **E2E Tests**: Located in `tests/e2e` or separate project structure. Test full user flows.

### Naming Conventions
- **Files**: `*.test.ts` or `*.spec.ts`.
- **Suites**: `describe('ModuleName', ...)`
- **Cases**: `it('should [expected behavior] when [condition]', ...)` or `test('[functionality]', ...)`

### Mocking Strategy
- Prefer dependency injection for easier mocking.
- Use framework-specific mocking utilities (e.g., `jest.mock`, `vi.mock`) for external modules.
- Reset/restore mocks between tests to prevent pollution.

## Common Pitfalls

### ❌ Testing Implementation Details
**Problem**: Tests that rely on private methods or internal state.
**Why It Fails**: Makes refactoring difficult as tests break even if external behavior is unchanged.
**Better Approach**: Test the public API and observable side effects.

### ❌ Over-Mocking
**Problem**: Mocking everything, including the subject under test's internal helpers or simple utilities.
**Why It Fails**: Reduces confidence that the code actually works; tests become tautological.
**Better Approach**: Only mock boundaries (Network, DB, File System, Third-party services).

### ❌ Global State Pollution
**Problem**: Modifying global objects or singletons without cleanup.
**Why It Fails**: Causes flaky tests where order of execution matters.
**Better Approach**: Use `beforeEach`/`afterEach` hooks to setup and teardown environments.

## Related Resources

### Related Skills
- **working-with-react**: For testing React components.
- **api-endpoint-creation**: For testing API routes.

### Related Agents
- **quality-assurance-specialist**: For comprehensive test planning and review.

### External Resources
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Vitest Documentation](https://vitest.dev/guide/)
- [Testing Library](https://testing-library.com/docs/)

## Examples (Optional)

### Unit Test Example
```typescript
describe('UserService', () => {
  it('should create a user when valid data is provided', async () => {
    // Arrange
    const mockRepo = { create: jest.fn().mockResolvedValue({ id: 1, name: 'Test' }) };
    const service = new UserService(mockRepo);

    // Act
    const result = await service.createUser({ name: 'Test' });

    // Assert
    expect(result).toEqual({ id: 1, name: 'Test' });
    expect(mockRepo.create).toHaveBeenCalledWith({ name: 'Test' });
  });
});
```

## Notes

Always ensure tests run in CI/CD pipeline.
Check coverage reports to identify untested paths.

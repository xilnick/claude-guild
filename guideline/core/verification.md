# Natural Verification

## Purpose
Ensure tasks are completed correctly using Claude's natural verification abilities with **MANDATORY** iteration until user satisfaction.

## Core Principle

<principle>
  Trust Claude to naturally verify work quality while ALWAYS:
  - Confirming understanding before execution
  - Checking for implementation gaps  
  - Iterating until user is fully satisfied
  - Never considering work complete without explicit user confirmation
</principle>

## Verification Approach

<verification>
  <check_completion>
    Did we complete what was requested?
    Do all components work together?
    Are tests passing (if applicable)?
  </check_completion>
  
  <check_quality>
    Does code follow project patterns?
    Is the solution maintainable?
    Is performance acceptable?
  </check_quality>
</verification>

## Simple Success Criteria

<success>
  <measurable>
    - Task completed as requested
    - Components integrated properly
    - No breaking changes
    - User requirements met
  </measurable>
  
  <quality>
    - Follows existing patterns
    - Clean, readable code
    - Appropriate error handling
  </quality>
</success>

## Natural Gap Detection

<gaps>
  If something is missing or broken:
  1. Identify what's wrong
  2. Create specialist to fix it
  3. Verify the fix
  4. Continue until complete
</gaps>

## Integration Validation

<integration>
  - Check interfaces work together
  - Verify data flows correctly
  - Test end-to-end scenarios
  - Fix any integration issues
</integration>

## Best Practices

<practices>
  - Verify as you go, not just at the end
  - Test integration points explicitly
  - Use project's existing test suites
  - Trust Claude's judgment on completeness
  - Keep verification simple and practical
</practices>
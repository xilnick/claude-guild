# Natural Workflow Orchestration

## Purpose
Enable Claude to naturally analyze, decompose, and execute tasks using native intelligence with MANDATORY understanding confirmation and iterative verification.

## Core Workflow (MANDATORY ITERATION)

<workflow>
  <understand_and_confirm>
    MANDATORY: Confirm understanding before ANY execution
    - Use chain of thought to understand request
    - Present interpretation to user
    - Get explicit approval
    - Never proceed without confirmation
  </understand_and_confirm>
  
  <decompose>
    Break down naturally based on:
    - Logical boundaries
    - Technical dependencies  
    - Parallel opportunities
  </decompose>
  
  <execute>
    Create specialists dynamically with Task tool
    Include verification requirements in prompts
    Coordinate based on natural dependencies
  </execute>
  
  <verify_and_iterate>
    MANDATORY: Check and iterate until satisfied
    - Verify all success criteria
    - Detect implementation gaps
    - Fix issues found
    - Get user confirmation
    - Continue until fully satisfied
  </verify_and_iterate>
</workflow>

## Understanding Confirmation (MANDATORY)

<understanding>
  Always present understanding for approval:
  "I understand you want me to [interpretation].
   This involves:
   - [Component 1]
   - [Component 2]
   - Success means: [criteria]
   Is this correct?"
   
  Wait for user confirmation before proceeding.
</understanding>

## Task Analysis (Natural)

<analysis>
  For each request, naturally determine:
  1. Have I confirmed understanding with user?
  2. What are the independent components?
  3. What blocks other work?
  4. What can run in parallel?
  5. How will I verify completeness?
  6. What gaps might occur?
</analysis>

## Dependency Management

<dependencies>
  <blocking>
    - Understanding confirmation blocks ALL work
    - Research blocks implementation
    - API design blocks API consumption
    - Schema blocks data layer
    - Verification blocks completion
  </blocking>
  
  <parallel>
    - Independent files can run in parallel
    - Different layers can run in parallel
    - Separate features can run in parallel
  </parallel>
</dependencies>

## Verification Process (MANDATORY)

<verification>
  MANDATORY after execution:
  1. Check all success criteria
  2. Look for implementation gaps
  3. Test integration points
  4. Report findings to user
  5. Fix any issues found
  6. Re-verify after fixes
  7. Get user confirmation
</verification>

## Task Tool Usage

<task_tool>
  Parameters:
  - subagent_type: "general-purpose"
  - description: Clear, specific task description
  - prompt: Must include:
    * Detailed requirements and context
    * Success criteria for verification
    * Gap detection requirements
    * Reporting format
  
  Execution:
  - Launch multiple tasks simultaneously when independent
  - Wait for blocking tasks before dependent ones
  - Include verification in all specialist prompts
</task_tool>

## Best Practices

<practices>
  - ALWAYS confirm understanding first
  - Think before executing
  - Be explicit in specialist instructions
  - Include verification requirements
  - Respect natural dependencies
  - Maximize parallelism where safe
  - Verify integration points
  - Iterate until user satisfied
</practices>
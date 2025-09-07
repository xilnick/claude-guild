# Intelligent Agent Management

## Purpose
Use Claude's native intelligence to determine when to create dynamic specialists or use persistent agents, with MANDATORY verification requirements.

## Hybrid Approach (Intelligence-Driven)

<approach>
  <intelligence_driven>
    Claude analyzes each task and decides:
    - Should I create a specialist for this specific task?
    - Does a suitable persistent agent already exist?
    - What approach is most efficient?
    - How will verification be handled?
  </intelligence_driven>
  
  <no_rigid_rules>
    Don't force either approach
    Let task requirements guide the decision
    Trust Claude's judgment
    Always include verification requirements
  </no_rigid_rules>
</approach>

## Dynamic Specialist Creation

<dynamic_creation>
  <when_to_use>
    - Task-specific requirements
    - One-time or unique needs
    - No suitable agent exists
    - Flexibility is priority
  </when_to_use>
  
  <how_to_create>
    Use Task tool directly:
    ```
    subagent_type: "general-purpose"
    description: Clear, specific task
    prompt: Detailed context including:
      - Role and expertise
      - Project context
      - Specific requirements
      - Success criteria
      - MANDATORY: Verification requirements
      - MANDATORY: Gap detection instructions
      - MANDATORY: Reporting format
    ```
  </how_to_create>
  
  <verification_requirements>
    Every specialist prompt MUST include:
    - Clear success criteria
    - Gap detection requirements
    - Integration check instructions
    - Reporting format for findings
    - Iteration instructions if gaps found
  </verification_requirements>
  
  <benefits>
    - No setup required
    - Perfectly tailored to task
    - Maximum flexibility
    - Immediate availability
    - Built-in verification
  </benefits>
</dynamic_creation>

## Persistent Agent Usage

<persistent_agents>
  <when_valuable>
    - Frequently repeated tasks
    - Specialized domain knowledge
    - Team consistency needs
    - Complex project patterns
    - Standardized verification processes
  </when_valuable>
  
  <creation>
    Use /agents command to create
    Include verification capabilities
    Store in project for reuse
    Document for team awareness
  </creation>
  
  <usage>
    ```
    subagent_type: "[agent-name]"
    description: Specific task
    prompt: Task details including:
      - MANDATORY: Verification requirements
      - MANDATORY: Gap detection scope
      - MANDATORY: Success criteria
    ```
  </usage>
</persistent_agents>

## Decision Guidelines

<guidelines>
  <analysis>
    For each task component:
    1. What expertise is needed?
    2. Is this a recurring need?
    3. Does an agent exist for this?
    4. Would dynamic be more appropriate?
    5. What verification is required?
  </analysis>
  
  <decision>
    Default to dynamic unless:
    - Perfect persistent agent exists
    - Task explicitly requests specific agent
    - Consistency with previous work needed
    - Standardized verification available
  </decision>
  
  <execution>
    - Create/use specialists as determined
    - Provide comprehensive context
    - Include verification requirements
    - Coordinate naturally
    - Monitor for gaps
    - Iterate based on findings
  </execution>
</guidelines>

## Verification Integration

<verification_integration>
  All agents (dynamic or persistent) MUST:
  - Check their work for completeness
  - Report gaps found
  - Suggest fixes for issues
  - Verify integration points
  - Confirm success criteria met
</verification_integration>

## Best Practices

<practices>
  - Don't overthink the decision
  - Prefer dynamic for flexibility
  - Use persistent for consistency
  - ALWAYS provide detailed context
  - ALWAYS include verification requirements
  - Trust Claude's natural intelligence
  - Avoid rigid templates or rules
  - Ensure gap detection in all agents
</practices>

## Examples

<examples>
  <dynamic_with_verification>
    Task: "Add authentication to API"
    Decision: Create dynamic backend specialist
    Prompt includes:
    - Authentication requirements
    - Success criteria (login/logout working)
    - Gap detection (edge cases, security)
    - Integration verification
  </dynamic_with_verification>
  
  <persistent_with_verification>
    Task: "Review code quality"
    Decision: Use existing code-reviewer agent
    Additional prompt:
    - Specific areas to review
    - Quality criteria
    - Gap detection focus
    - Report format
  </persistent_with_verification>
  
  <hybrid_example>
    Task: "Refactor and test authentication"
    Decision: Dynamic refactoring + persistent test agent
    Both include:
    - Verification requirements
    - Gap detection scope
    - Integration checks
  </hybrid_example>
</examples>
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
    description: **3-4 sentences minimum** explaining:
      * What the specialist will do and primary purpose
      * When this specialist should be used vs others
      * Important limitations or constraints
      * Expected outcomes and deliverables
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

## Error Handling Framework

<error_handling>
  **All specialists must handle errors gracefully:**
  ```json
  {
    "type": "specialist_error",
    "message": "Clear description of what failed",
    "details": "Context and debugging information",
    "suggestions": "Recommended fixes or alternative approaches"
  }
  ```
  - Provide actionable error messages with recovery strategies
  - Include suggestions for resolution and alternative approaches
  - Allow retry with modified parameters when appropriate
  - Implement fallback approaches for critical failures
  - Report errors clearly to enable iteration and improvement
</error_handling>

## Parallel Execution Guidance

<parallel_execution>
  **Claude 4 Optimization for agent coordination:**
  - Launch independent specialists simultaneously when possible
  - Batch agent creation and deployment for efficiency
  - Coordinate integration points explicitly between agents
  - Design agents to work together without conflicts
  - Enable concurrent execution of non-dependent tasks
</parallel_execution>

## Best Practices

<practices>
  - Don't overthink the decision between dynamic vs persistent
  - Prefer dynamic for flexibility, persistent for consistency
  - ALWAYS provide detailed context and requirements
  - ALWAYS include verification requirements in agent prompts
  - Trust Claude's natural intelligence for routing decisions
  - Avoid rigid templates or rules that constrain flexibility
  - Ensure gap detection capabilities in all agents
  - Follow Tool Use Implementation standards consistently
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
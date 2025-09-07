# Intelligent Agent Management

## Purpose
Use Claude's native intelligence to determine when to create dynamic specialists or use persistent agents.

## Hybrid Approach

<approach>
  <intelligence_driven>
    Claude analyzes each task and decides:
    - Should I create a specialist for this specific task?
    - Does a suitable persistent agent already exist?
    - What approach is most efficient?
  </intelligence_driven>
  
  <no_rigid_rules>
    Don't force either approach
    Let task requirements guide the decision
    Trust Claude's judgment
  </no_rigid_rules>
</approach>

## Dynamic Specialists (Primary Mode)

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
    ```
  </how_to_create>
  
  <benefits>
    - No setup required
    - Perfectly tailored to task
    - Maximum flexibility
    - Immediate availability
  </benefits>
</dynamic_creation>

## Persistent Agents (When Beneficial)

<persistent_agents>
  <when_valuable>
    - Frequently repeated tasks
    - Specialized domain knowledge
    - Team consistency needs
    - Complex project patterns
  </when_valuable>
  
  <creation>
    Use /agents command to create
    Store in project for reuse
    Document for team awareness
  </creation>
  
  <usage>
    ```
    subagent_type: "[agent-name]"
    description: Specific task
    prompt: Task details
    ```
  </usage>
</persistent_agents>

## Intelligence Guidelines

<guidelines>
  <analysis>
    For each task component:
    1. What expertise is needed?
    2. Is this a recurring need?
    3. Does an agent exist for this?
    4. Would dynamic be more appropriate?
  </analysis>
  
  <decision>
    Default to dynamic unless:
    - Perfect persistent agent exists
    - Task explicitly requests specific agent
    - Consistency with previous work needed
  </decision>
  
  <execution>
    - Create/use specialists as determined
    - Provide comprehensive context
    - Coordinate naturally
    - Verify results
  </execution>
</guidelines>

## Best Practices

<practices>
  - Don't overthink the decision
  - Prefer dynamic for flexibility
  - Use persistent for consistency
  - Always provide detailed context
  - Trust Claude's natural intelligence
  - Avoid rigid templates or rules
</practices>

## Examples

<examples>
  <dynamic_example>
    Task: "Add authentication to API"
    Decision: Create dynamic backend specialist
    Reason: Specific to current API structure
  </dynamic_example>
  
  <persistent_example>
    Task: "Review code quality"
    Decision: Use existing code-reviewer agent
    Reason: Consistent standards across project
  </persistent_example>
  
  <hybrid_example>
    Task: "Refactor and test authentication"
    Decision: Dynamic refactoring specialist + persistent test agent
    Reason: Unique refactor, standard testing
  </hybrid_example>
</examples>
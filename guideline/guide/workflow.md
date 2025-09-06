# Guild Workflow - Natural Task Execution

## Purpose

Execute tasks using Claude's native intelligence to decompose, route, and coordinate work.

## Core Workflow

<workflow>
  <analyze>
    Understand the request fully using chain of thought
  </analyze>
  
  <decompose>
    Break down into logical components naturally
  </decompose>
  
  <route>
    Create and activate appropriate specialists
  </route>
  
  <execute>
    Coordinate execution, respecting dependencies
  </execute>
</workflow>

## Natural Task Analysis

When a user makes a request:

<thinking>
  1. What is the user trying to achieve?
  2. What are the distinct components?
  3. What dependencies exist between components?
  4. What can be done in parallel?
  5. What specialists would handle each component best?
</thinking>

## Dynamic Specialist Creation

<specialist_creation>
  Don't use templates. Instead:
  
  1. Look at the actual task requirements
  2. Consider the project's technology
  3. Create specialists with clear, specific roles
  4. Use the Task tool with detailed prompts
</specialist_creation>

## Execution Patterns

<patterns>
  <simple_task>
    Single specialist handles everything
    Example: "Fix this typo" → One editing specialist
  </simple_task>
  
  <parallel_task>
    Multiple specialists work simultaneously
    Example: "Add feature X" → Frontend and backend specialists in parallel
  </parallel_task>
  
  <sequential_task>
    Specialists work in order due to dependencies
    Example: "Research and implement Y" → Research specialist, then implementation specialist
  </sequential_task>
  
  <mixed_task>
    Combination of parallel and sequential
    Example: "Design, implement, and test Z" → Design first, then frontend/backend parallel, then testing
  </mixed_task>
</patterns>

## Task Tool Usage

<task_tool>
  <basic_usage>
    ```
    Task tool parameters:
    - subagent_type: "general-purpose"
    - description: "Brief, clear task description"
    - prompt: "Detailed instructions with full context"
    ```
  </basic_usage>
  
  <parallel_execution>
    Launch multiple Task tool calls simultaneously when tasks are independent
  </parallel_execution>
  
  <sequential_execution>
    Wait for blocking tasks to complete before launching dependent tasks
  </sequential_execution>
</task_tool>

## Dependency Management

<dependencies>
  <identify>
    Natural reasoning about what blocks what:
    - Does B need output from A?
    - Can C and D work independently?
    - What's the critical path?
  </identify>
  
  <respect>
    Don't start dependent work until prerequisites complete
  </respect>
  
  <optimize>
    Maximize parallelism where possible
  </optimize>
</dependencies>

## Example Workflows

<examples>
  <example_1>
    Request: "Add user authentication"
    
    Analysis:
    - Need backend endpoints (login, signup, logout)
    - Need frontend forms and UI
    - Need session management
    - Backend and frontend can work in parallel
    
    Execution:
    - Launch backend specialist (API endpoints)
    - Launch frontend specialist (UI components) - parallel
    - Launch integration specialist (connect frontend to backend) - after both complete
  </example_1>
  
  <example_2>
    Request: "Optimize database queries"
    
    Analysis:
    - Need to analyze current queries
    - Need to identify bottlenecks
    - Need to implement optimizations
    - This is sequential - analysis blocks optimization
    
    Execution:
    - Launch analysis specialist (find slow queries)
    - Wait for analysis to complete
    - Launch optimization specialist (improve queries)
  </example_2>
</examples>

## Success Validation

<validation>
  <check>
    - Did we complete what was requested?
    - Do all components work together?
    - Are tests passing?
    - Is the solution maintainable?
  </check>
  
  <iterate>
    If something is missing or broken, create additional specialists to address it
  </iterate>
</validation>

## Best Practices

<best_practices>
  - Think before executing
  - Be explicit in specialist instructions
  - Respect natural dependencies
  - Maximize parallelism where safe
  - Verify integration points
  - Test the complete solution
</best_practices>

## What to Avoid

<avoid>
  - Don't create generic specialists
  - Don't force parallel execution when sequential makes sense
  - Don't over-orchestrate simple tasks
  - Don't create unnecessary abstraction layers
</avoid>

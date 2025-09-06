# Natural Workflow Orchestration

## Purpose
Enable Claude to naturally analyze, decompose, and execute tasks using native intelligence.

## Core Workflow

<workflow>
  <understand>
    Use chain of thought to fully understand the request
  </understand>
  
  <decompose>
    Break down naturally based on:
    - Logical boundaries
    - Technical dependencies  
    - Parallel opportunities
  </decompose>
  
  <execute>
    Create specialists dynamically with Task tool
    Coordinate based on natural dependencies
  </execute>
</workflow>

## Task Analysis (Natural)

<analysis>
  For each request, naturally determine:
  1. What are the independent components?
  2. What blocks other work?
  3. What can run in parallel?
  4. What specialists would be most effective?
</analysis>

## Dependency Management

<dependencies>
  <blocking>
    - Research blocks implementation
    - API design blocks API consumption
    - Schema blocks data layer
    - Authentication blocks protected features
  </blocking>
  
  <parallel>
    - Independent files can run in parallel
    - Different layers can run in parallel
    - Separate features can run in parallel
  </parallel>
</dependencies>

## Task Tool Usage

<task_tool>
  Parameters:
  - subagent_type: "general-purpose"
  - description: Clear, specific task description
  - prompt: Detailed requirements and context
  
  Execution:
  - Launch multiple tasks simultaneously when independent
  - Wait for blocking tasks before dependent ones
  - Let Claude handle coordination naturally
</task_tool>

## Best Practices

<practices>
  - Think before executing
  - Be explicit in specialist instructions
  - Respect natural dependencies
  - Maximize parallelism where safe
  - Verify integration points
</practices>
# Guild System - Native Intelligence Framework

## MANDATORY REQUIREMENTS

**This framework MUST follow all Anthropic best practices documented in `guideline/guide/recommendations.md`**

## Core Philosophy

Let Claude use its native intelligence to analyze, decompose, and route tasks naturally.

## Principles

<principles>
  <native_intelligence>
    Trust Claude to analyze tasks and make routing decisions without rigid templates
  </native_intelligence>
  
  <simple_decomposition>
    Break complex tasks into logical components based on the specific request
  </simple_decomposition>
  
  <clear_dependencies>
    Identify what blocks what using natural reasoning, not complex protocols
  </clear_dependencies>
  
  <dynamic_routing>
    Create specialists on-demand based on actual needs, not pre-defined types
  </dynamic_routing>
</principles>

## Task Analysis (Natural)

<task_analysis>
  <instructions>
    When receiving a request:
    1. Understand the full scope and intent
    2. Identify logical components
    3. Determine dependencies (what must complete before what)
    4. Route to appropriate specialists via Task tool
  </instructions>
  
  <thinking>
    Ask yourself:
    - What are the independent pieces?
    - What blocks other work?
    - What can run in parallel?
    - What specialists would handle this best?
  </thinking>
</task_analysis>

## Blocking Relationships (Simple)

<dependencies>
  <blocking_patterns>
    - Research blocks implementation
    - API design blocks API consumption
    - Database schema blocks data layer
    - Authentication blocks protected features
    - Design blocks frontend implementation
  </blocking_patterns>
  
  <parallel_patterns>
    - Independent files can run in parallel
    - Different layers (frontend/backend) can run in parallel
    - Separate features can run in parallel
    - Documentation can run alongside implementation
  </parallel_patterns>
</dependencies>

## Specialist Management (Intelligent)

<specialist_management>
  <hybrid_approach>
    Claude's intelligence determines the best approach:
    
    Option 1: Dynamic Specialists (Task-specific)
    - Create on-demand for specific tasks
    - Use Task tool with subagent_type: "general-purpose"
    - Provide detailed context and requirements
    - No persistence needed
    
    Option 2: Persistent Agents (Reusable)
    - Created with /agents command during setup
    - Reused across multiple tasks
    - Specialized knowledge and context
    - Launch with specific agent names
  </hybrid_approach>
  
  <intelligent_decision>
    Claude decides based on:
    - Is this a one-time need?
    - Does a suitable agent already exist?
    - Would persistence add value?
    - What's most efficient for this task?
  </intelligent_decision>
  
  <task_tool_usage>
    For dynamic specialists (following recommendations.md):
    - subagent_type: "general-purpose"
    - description: Clear, specific task description
    - prompt: MUST include:
      * Project context and technology stack
      * Detailed requirements with XML structure
      * Success criteria (measurable)
      * Examples when appropriate
      * Grounding in actual files
    
    For persistent agents:
    - subagent_type: "[agent-name]"
    - description: Specific task
    - prompt: Task details following recommendations.md structure
  </task_tool_usage>
</specialist_management>## Execution Flow (Natural)

<execution>
  <phase_1_understanding>
    <!-- Analyze and understand the request fully -->
    Use chain of thought to understand:
    - User intent
    - Task components
    - Success criteria
  </phase_1_understanding>
  
  <phase_2_decomposition>
    <!-- Break down naturally -->
    Decompose based on:
    - Logical boundaries
    - Technical dependencies
    - Parallel opportunities
  </phase_2_decomposition>
  
  <phase_3_execution>
    <!-- Execute using Task tool -->
    Create and coordinate specialists naturally
    Let Claude handle the orchestration
  </phase_3_execution>
</execution>

## Success Criteria

<success>
  <measurable>
    - Task completed as requested
    - All components integrated properly
    - Tests pass (if applicable)
    - User requirements met
  </measurable>
  
  <quality>
    - Code follows project patterns
    - Solution is maintainable
    - Performance is acceptable
  </quality>
</success>

## Best Practices (MANDATORY)

<best_practices>
  <mandatory_compliance>
    ALL task execution MUST follow Anthropic best practices from guideline/guide/recommendations.md
  </mandatory_compliance>
  
  <required_principles>
    - MUST use XML tags for structure (per recommendations.md)
    - MUST provide clear, explicit instructions (per recommendations.md)
    - MUST apply chain of thought for reasoning (per recommendations.md)
    - MUST ground in actual project files (per recommendations.md)
    - MUST allow uncertainty expression (per recommendations.md)
    - MUST include examples for complex tasks (per recommendations.md)
    - MUST verify work iteratively (per recommendations.md)
  </required_principles>
</best_practices>

## What NOT to Do

<avoid>
  - Don't create rigid compliance frameworks
  - Don't use pre-defined agent templates
  - Don't over-engineer coordination protocols
  - Don't add unnecessary complexity
  - Don't constrain Claude's natural intelligence
</avoid>

## Example Usage (Following recommendations.md)

<example>
User: "Add authentication to my app"

Claude's Natural Analysis (using chain of thought per recommendations.md):
<thinking>
  1. Backend API endpoints needed (login, signup, logout)
  2. Frontend UI components needed (forms, state management)
  3. Security validation required (after implementation)
  4. Backend and frontend are independent (can parallelize)
  5. Security review depends on both completing
</thinking>

Task Tool Usage (with XML structure per recommendations.md):
<task_execution>
  <parallel_tasks>
    - Backend specialist: API endpoints with JWT
    - Frontend specialist: Login/signup forms
  </parallel_tasks>
  <sequential_task>
    - Security specialist: Review after both complete
  </sequential_task>
</task_execution>
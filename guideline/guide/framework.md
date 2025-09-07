# Guild System - Native Intelligence Framework

## MANDATORY REQUIREMENTS

**This framework MUST follow all Anthropic best practices documented in `guideline/guide/recommendations.md`**

## Core Philosophy

Let Claude use its native intelligence to analyze, decompose, and route tasks naturally, with **MANDATORY** understanding confirmation, verification, and iteration until user satisfaction.

## Principles

<principles>
  <native_intelligence>
    Trust Claude to analyze tasks and make routing decisions without rigid templates
    ALWAYS with mandatory understanding confirmation and iterative verification
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
    1. MANDATORY: Confirm understanding with user before proceeding
    2. Understand the full scope and intent
    3. Identify logical components
    4. Determine dependencies (what must complete before what)
    5. Route to appropriate specialists via Task tool
    6. MANDATORY: Verify completion and iterate until satisfied
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
</specialist_management>## Execution Flow (ITERATIVE & MANDATORY)

<execution>
  <phase_1_understanding_confirmation>
    <!-- MANDATORY: Confirm understanding before ANY work -->
    Use chain of thought to understand, then:
    - Present interpretation back to user
    - Ask clarifying questions if needed
    - Wait for explicit user approval
    - NEVER proceed without confirmation
  </phase_1_understanding_confirmation>
  
  <phase_2_decomposition>
    <!-- Break down ONLY after understanding confirmed -->
    Decompose based on:
    - Logical boundaries
    - Technical dependencies
    - Parallel opportunities
  </phase_2_decomposition>
  
  <phase_3_execution>
    <!-- Execute with verification built-in -->
    Create and coordinate specialists
    Include gap detection in all tasks
    Monitor for issues during execution
  </phase_3_execution>
  
  <phase_4_verification>
    <!-- MANDATORY: Verify completeness -->
    Check for:
    - Implementation gaps
    - Missing functionality
    - Integration issues
    - Quality problems
    Report ALL findings to user
  </phase_4_verification>
  
  <phase_5_iteration>
    <!-- MANDATORY: Iterate until satisfied -->
    If gaps found or user not satisfied:
    - Fix identified issues
    - Re-verify changes
    - Get user confirmation
    - Continue until fully satisfied
  </phase_5_iteration>
</execution>

## Success Criteria (WITH MANDATORY VERIFICATION)

<success>
  <understanding_confirmed>
    - User explicitly approves understanding
    - All clarifications addressed
    - Scope clearly defined
  </understanding_confirmed>
  
  <implementation_complete>
    - All requested functionality implemented
    - Components integrated properly
    - Tests pass (if applicable)
    - No known gaps remain
  </implementation_complete>
  
  <user_satisfaction>
    - User confirms satisfaction
    - All adjustments completed
    - Quality standards met
    - Explicit approval received
  </user_satisfaction>
</success>

## Best Practices (MANDATORY)

<best_practices>
  <mandatory_compliance>
    ALL task execution MUST follow Anthropic best practices from guideline/guide/recommendations.md
  </mandatory_compliance>
  
  <required_iteration>
    - MUST confirm understanding before execution
    - MUST verify after implementation
    - MUST check for gaps systematically
    - MUST iterate until user satisfied
    - MUST get explicit user confirmation
  </required_iteration>
  
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
# Guild System - Native Intelligence Framework

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

## Specialist Creation (Dynamic)

<specialist_creation>
  <approach>
    Create specialists based on what you discover, not templates:
    - Analyze the technology in the project
    - Understand the specific task requirements
    - Create appropriate specialists with clear descriptions
  </approach>
  
  <task_tool_usage>
    - subagent_type: "general-purpose"
    - description: Clear, specific task description
    - prompt: Detailed requirements and context
  </task_tool_usage>
</specialist_creation>

## Execution Flow (Natural)

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

## Best Practices (From Anthropic)

<best_practices>
  <be_clear>
    Give specialists clear, explicit instructions
  </be_clear>
  
  <use_xml_for_structure>
    Use XML tags for clarity, not bureaucracy
  </use_xml_for_structure>
  
  <chain_of_thought>
    Think through the approach before executing
  </chain_of_thought>
  
  <avoid_hallucination>
    Work with actual project files and patterns
  </avoid_hallucination>
</best_practices>

## What NOT to Do

<avoid>
  - Don't create rigid compliance frameworks
  - Don't use pre-defined agent templates
  - Don't over-engineer coordination protocols
  - Don't add unnecessary complexity
  - Don't constrain Claude's natural intelligence
</avoid>

## Example Usage

<example>
User: "Add authentication to my app"

Claude's Natural Analysis:
1. This needs backend API endpoints
2. This needs frontend UI components  
3. This needs security validation
4. Backend and frontend can work in parallel
5. Security review happens after implementation

Task Tool Usage:
- Create backend specialist for API endpoints
- Create frontend specialist for UI (parallel)
- Create security specialist for review (after)
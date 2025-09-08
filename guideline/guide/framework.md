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
  
  <parallel_first_execution>
    Default to simultaneous execution - launch multiple specialists concurrently by default
    Sequential execution requires explicit dependency justification
    Proactive parallelization is fundamental to Guild System efficiency
  </parallel_first_execution>
  
  <simple_decomposition>
    Break complex tasks into logical components based on the specific request
    PROACTIVE: Assume components can be parallelized until proven otherwise
  </simple_decomposition>
  
  <clear_dependencies>
    Identify what blocks what using natural reasoning, not complex protocols
    Focus on minimal necessary dependencies to maximize parallel opportunities
  </clear_dependencies>
  
  <dynamic_routing>
    Create specialists on-demand based on actual needs, not pre-defined types
    Default to launching multiple specialists simultaneously for independent work
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
    PARALLEL-FIRST ANALYSIS - Ask yourself in this order:
    - What can run in parallel? (FIRST QUESTION - default assumption)
    - What are the independent pieces? (identify concurrent opportunities)
    - What blocks other work? (minimize dependencies)
    - What specialists would handle this best? (parallel-capable specialists)
    
    PROACTIVE PARALLELIZATION: Default to assuming tasks can be parallelized until proven otherwise
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
    For dynamic specialists (following Tool Use Implementation from recommendations.md):
    - subagent_type: "general-purpose"
    - description: **3-4 sentences minimum** explaining:
      * What the specialist will do and primary purpose
      * When this specialist should be used vs others
      * Important limitations or constraints
      * Expected outcomes and deliverables
    - prompt: MUST include:
      * Project context and technology stack
      * Detailed requirements with XML structure
      * Success criteria (measurable)
      * Examples when appropriate
      * Grounding in actual files
      * Error handling expectations
      * Integration verification requirements
    
    For persistent agents:
    - subagent_type: "[agent-name]"
    - description: **3-4 sentences minimum** per tool definition guidelines
    - prompt: Task details following recommendations.md structure
  </task_tool_usage>
  
  <parallel_execution>
    **PARALLEL-FIRST STANDARD PRACTICE (per recommendations.md):**
    - Default to simultaneous specialist launches for all tasks
    - Sequential execution requires explicit dependency justification
    - Batch tool calls together as standard operating procedure
    - Proactively identify concurrent execution opportunities
    - Coordinate integration points explicitly
    - Send all results in single response when possible
    - Make parallel execution the norm, not the optimization
  </parallel_execution>
  
  <error_handling>
    **All specialists must handle errors gracefully:**
    - Provide actionable error messages
    - Include suggestions for resolution
    - Allow retry with modified parameters
    - Fallback to alternative approaches
    - Report errors clearly for iteration
  </error_handling>
</specialist_management>## Tool Definition Requirements (From recommendations.md)

<tool_definitions>
  <comprehensive_descriptions>
    **MANDATORY: All tool/specialist descriptions must be 3-4 sentences minimum:**
    1. Primary purpose and what the tool/specialist does
    2. When it should vs shouldn't be used
    3. Important limitations and caveats
    4. Expected outcomes and side effects
  </comprehensive_descriptions>
  
  <parameter_documentation>
    **Every parameter must include:**
    - Clear purpose and format explanation
    - Valid values and constraints
    - Required vs optional designation
    - Examples of valid inputs
  </parameter_documentation>
  
  <error_handling_requirements>
    **All specialists must include error handling:**
    - Structured error responses
    - Actionable error messages
    - Recovery strategies
    - Fallback approaches
  </error_handling_requirements>
</tool_definitions>

## Execution Flow (ITERATIVE & MANDATORY)

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
    <!-- Break down ONLY after understanding confirmed - PARALLEL-FIRST approach -->
    Decompose based on:
    - Parallel opportunities (FIRST consideration)
    - Logical boundaries (optimized for concurrency)
    - Technical dependencies (minimized for maximum parallelization)
  </phase_2_decomposition>
  
  <phase_3_execution>
    <!-- Execute with verification built-in and PARALLEL-FIRST approach -->
    Create and coordinate specialists following Tool Use Implementation:
    - Default to simultaneous specialist launches (parallel-first standard)
    - Sequential execution only when dependencies explicitly require it
    - Provide 3-4 sentence descriptions for each specialist
    - Include comprehensive error handling requirements
    - Include gap detection in all tasks
    - Monitor for issues during execution
    - Batch tool calls for efficiency as standard practice
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

Claude's Natural Analysis (using PARALLEL-FIRST chain of thought per recommendations.md):
<thinking>
  PARALLEL-FIRST ANALYSIS:
  1. What can run in parallel? Backend API + Frontend UI + Documentation
  2. What are independent pieces? API endpoints, UI forms, setup docs
  3. What blocks other work? Only final security review needs both complete
  4. Specialists needed: Backend, Frontend, Documentation (all launched simultaneously)
  5. Sequential dependency: Security review after all complete
</thinking>

Task Tool Usage (with XML structure per recommendations.md - PARALLEL-FIRST approach):
<task_execution>
  <simultaneous_tasks_default>
    - Backend specialist: API endpoints with JWT
    - Frontend specialist: Login/signup forms  
    - Documentation specialist: Setup and usage guides
  </simultaneous_tasks_default>
  <dependency_justified_sequential>
    - Security specialist: Review after all three complete (explicit dependency)
  </dependency_justified_sequential>
</task_execution>
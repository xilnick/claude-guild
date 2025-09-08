# Guild System - Native Intelligence Framework

## MANDATORY REQUIREMENTS

**This framework MUST follow all Anthropic best practices documented in `guideline/guide/recommendations.md`**

## Core Philosophy

Let Claude use its native intelligence to **PROACTIVELY DECOMPOSE** and route tasks in **PARALLEL-FIRST** patterns, with **MANDATORY** understanding confirmation, verification, and iteration until user satisfaction.

**PARALLEL-FIRST MANDATE**: Every task begins with the assumption that components MUST run in parallel unless explicitly blocked by dependencies.

## Principles

<principles>
  <native_intelligence>
    Trust Claude to analyze tasks and make routing decisions without rigid templates
    ALWAYS with mandatory understanding confirmation and iterative verification
  </native_intelligence>
  
  <parallel_first_execution>
    **PARALLEL-FIRST AS ABSOLUTE DEFAULT** - simultaneous execution is the standard, not optimization
    Sequential execution REQUIRES explicit dependency justification with proof
    **PROACTIVE PARALLELIZATION IS MANDATORY** - fundamental to Guild System operation
    Every task decomposition MUST identify parallel opportunities FIRST
  </parallel_first_execution>
  
  <proactive_task_decomposition>
    **SYSTEMATIC DECOMPOSITION METHODOLOGY** - mandatory first step after understanding
    Break tasks into SMALLEST parallelizable units immediately
    **DEFAULT ASSUMPTION**: Components MUST run in parallel until dependency proven
    Use decomposition decision tree: Independent? → Parallel. Dependent? → Prove necessity.
  </proactive_task_decomposition>
  
  <clear_dependencies>
    Identify what blocks what using natural reasoning, not complex protocols
    Focus on minimal necessary dependencies to maximize parallel opportunities
  </clear_dependencies>
  
  <proactive_specialist_creation>
    **AGGRESSIVE SPECIALIST CREATION** - err on the side of creating more specialists
    **SIMULTANEOUS SPECIALIST LAUNCHES** as standard practice, not exception
    Default to creating specialists for ANY potentially independent work
    Batch specialist creation and coordination as fundamental operation pattern
  </proactive_specialist_creation>
</principles>

## Proactive Task Decomposition (Mandatory First Step)

<task_analysis>
  <mandatory_decomposition_methodology>
    **SYSTEMATIC DECOMPOSITION SEQUENCE** - execute in exact order:
    1. MANDATORY: Confirm understanding with user before proceeding
    2. **IMMEDIATE DECOMPOSITION**: Break task into smallest parallelizable units
    3. **PARALLEL OPPORTUNITY IDENTIFICATION**: What MUST run simultaneously?
    4. **DEPENDENCY MINIMIZATION**: Challenge each dependency - is it truly blocking?
    5. **PROACTIVE SPECIALIST PLANNING**: Design simultaneous specialist launches
    6. Execute with parallel-first coordination
    7. MANDATORY: Verify completion and iterate until satisfied
  </mandatory_decomposition_methodology>
  
  <parallel_first_thinking_framework>
    **MANDATORY PARALLEL-FIRST ANALYSIS** - think in this EXACT sequence:
    1. **What MUST run in parallel?** (Default assumption: everything unless proven otherwise)
    2. **What are the atomic independent pieces?** (Identify ALL concurrent opportunities)
    3. **What truly blocks other work?** (Challenge and minimize ALL dependencies)
    4. **What specialists needed simultaneously?** (Plan aggressive parallel specialist creation)
    5. **How do specialists coordinate?** (Design integration points upfront)
    
    **DECOMPOSITION DECISION TREE**:
    - Can this be split? → YES (default) → Split immediately → Plan parallel execution
    - Seems dependent? → CHALLENGE → Prove blocking necessity → Minimize serial work
    - Creates specialist work? → CREATE SPECIALISTS → Launch simultaneously → Coordinate explicitly
  </parallel_first_thinking_framework>
  
  <specialist_creation_decision_matrix>
    **WHEN TO CREATE SPECIALISTS** (Default: CREATE):
    - ✅ **ALWAYS CREATE** for independent file operations
    - ✅ **ALWAYS CREATE** for separate technology domains (frontend/backend/database)
    - ✅ **ALWAYS CREATE** for different skill areas (implementation/testing/documentation)
    - ✅ **ALWAYS CREATE** for parallel research tasks
    - ✅ **ALWAYS CREATE** when task can be split into 30+ minute chunks
    - ❌ **DON'T CREATE** only for simple single-file edits under 10 minutes
    - ❌ **DON'T CREATE** when coordination overhead exceeds work complexity
  </specialist_creation_decision_matrix>
</task_analysis>

## Dependency Analysis (Minimize Sequential Work)

<dependencies>
  <dependency_challenge_protocol>
    **CHALLENGE EVERY DEPENDENCY** - Default assumption: tasks are independent
    For each potential dependency, ask:
    - Is this TRULY blocking, or just traditionally done sequentially?
    - Can we create interfaces/contracts to enable parallel work?
    - Can we use mocks, stubs, or parallel integration approaches?
    - Would splitting this create MORE parallel opportunities?
  </dependency_challenge_protocol>
  
  <proven_blocking_patterns>
    **ONLY THESE ARE TRUE BLOCKERS** (challenge all others):
    - Shared data structure definition blocks consumers
    - Authentication implementation blocks protected feature testing
    - API contract definition blocks API consumption (unless mocked)
    - Build/compilation dependencies in same artifact
    - File system conflicts in exact same files
  </proven_blocking_patterns>
  
  <maximize_parallel_patterns>
    **DEFAULT TO PARALLEL EXECUTION** for:
    - Independent files MUST run in parallel
    - Different layers (frontend/backend/database) MUST run in parallel
    - Separate features MUST run in parallel
    - Documentation MUST run alongside implementation
    - Testing MUST run alongside implementation
    - Research MUST run alongside initial implementation
    - UI and API development MUST run in parallel with contracts/interfaces
    - Different modules/packages MUST run in parallel
    - Infrastructure and application code MUST run in parallel
  </maximize_parallel_patterns>
  
  <coordination_templates>
    **PARALLEL COORDINATION PATTERNS**:
    - **Interface-First**: Define contracts early, implement in parallel
    - **Mock-Driven**: Create mocks for dependencies, develop in parallel
    - **Event-Driven**: Use events/messages for loose coupling
    - **Layer Contracts**: API contracts enable UI/backend parallel work
    - **Integration Points**: Define explicit integration verification steps
  </coordination_templates>
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
  
  <aggressive_parallel_execution>
    **PARALLEL-FIRST MANDATORY STANDARD (per recommendations.md):**
    - **SIMULTANEOUS SPECIALIST LAUNCHES** for all independent work (not optional)
    - Sequential execution REQUIRES explicit blocking dependency proof
    - **BATCH TOOL CALLS** as fundamental operating procedure (not optimization)
    - **PROACTIVELY IDENTIFY** ALL concurrent execution opportunities (mandatory scanning)
    - **COORDINATE INTEGRATION POINTS** explicitly with upfront planning
    - **SEND ALL RESULTS** in single response to maximize coordination efficiency
    - **PARALLEL EXECUTION IS THE NORM** - sequential work is the rare exception
    
    **SPECIALIST BATCHING PATTERNS**:
    - Launch 3-5 specialists simultaneously as standard practice
    - Coordinate through shared interfaces and contracts
    - Use parallel integration verification as default approach
    - Plan coordination points explicitly before execution
    - Design for maximum concurrency from start
  </aggressive_parallel_execution>
  
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
  
  <phase_2_mandatory_decomposition>
    <!-- SYSTEMATIC DECOMPOSITION METHODOLOGY - MANDATORY after understanding -->
    **IMMEDIATE PROACTIVE DECOMPOSITION PROCESS:**
    1. **IDENTIFY PARALLEL OPPORTUNITIES** (FIRST and PRIMARY step)
    2. **BREAK INTO SMALLEST UNITS** (atomic parallelizable components)
    3. **CHALLENGE ALL DEPENDENCIES** (minimize sequential work)
    4. **DESIGN SPECIALIST LAUNCHES** (plan simultaneous creation)
    5. **DEFINE COORDINATION POINTS** (integration interfaces upfront)
    
    **DECOMPOSITION EXAMPLES BY TASK TYPE:**
    - **Feature Addition**: UI + API + Database + Tests + Docs (5 parallel specialists)
    - **Bug Fix**: Research + Reproduce + Fix + Test + Document (3-5 parallel streams)
    - **Refactor**: Analysis + Plan + Implementation + Testing + Migration (parallel where possible)
    - **Research**: Multiple domain experts investigating simultaneously
  </phase_2_mandatory_decomposition>
  
  <phase_3_aggressive_execution>
    <!-- AGGRESSIVE PARALLEL EXECUTION with proactive specialist management -->
    **SIMULTANEOUS SPECIALIST CREATION AND COORDINATION:**
    - **LAUNCH ALL INDEPENDENT SPECIALISTS** simultaneously (mandatory default)
    - **BATCH SPECIALIST CREATION** as fundamental practice (3-5 specialists standard)
    - Sequential execution ONLY when explicit blocking dependency proven
    - **PROVIDE 3-4 SENTENCE DESCRIPTIONS** following Tool Use Implementation
    - **INCLUDE COMPREHENSIVE ERROR HANDLING** in all specialist requirements
    - **BUILD IN GAP DETECTION** and continuous verification for all tasks
    - **MONITOR AND COORDINATE** execution across all specialists actively
    - **DESIGN INTEGRATION POINTS** before specialist launch
    
    **COORDINATION EXECUTION PATTERN:**
    1. Launch specialists in parallel batches
    2. Monitor progress across all specialists
    3. Coordinate integration points explicitly
    4. Verify parallel work integration continuously
    5. Adjust coordination as needed during execution
  </phase_3_aggressive_execution>
  
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

Claude's **PROACTIVE PARALLEL-FIRST** Analysis (mandatory methodology per recommendations.md):

<thinking>
  **SYSTEMATIC DECOMPOSITION WITH AGGRESSIVE PARALLELIZATION:**
  
  1. **IMMEDIATE PARALLEL IDENTIFICATION**: Backend API + Frontend UI + Database Schema + Tests + Documentation + Security Planning
  
  2. **ATOMIC INDEPENDENT PIECES**: 
     - JWT implementation (API)
     - Login/signup forms (UI)  
     - User schema design (Database)
     - Authentication tests (Testing)
     - Setup documentation (Docs)
     - Security architecture planning (Security)
  
  3. **DEPENDENCY CHALLENGE**: 
     - Database schema → Can use interface contracts for parallel development
     - JWT implementation → Can use mocks for frontend development
     - Security review → Can run alongside implementation with iterative feedback
  
  4. **SPECIALIST BATCH DESIGN**:
     - **SIMULTANEOUS LAUNCH**: 6 specialists working in parallel
     - **COORDINATION**: Shared authentication contracts and interfaces
     - **INTEGRATION POINTS**: Explicit verification steps planned upfront
  
  5. **MAXIMIZED CONCURRENCY**: Only final integration testing requires coordination
</thinking>

**AGGRESSIVE PARALLEL TASK EXECUTION** (Tool Use Implementation with XML structure):
<task_execution>
  <simultaneous_specialist_batch_launch>
    <!-- MANDATORY: All independent work runs in parallel -->
    - **Backend specialist**: JWT API endpoints with authentication contracts
    - **Frontend specialist**: Login/signup forms using authentication mocks  
    - **Database specialist**: User schema and authentication data models
    - **Testing specialist**: Authentication test suite with mocking strategies
    - **Documentation specialist**: Setup, usage, and security documentation
    - **Security specialist**: Architecture review and iterative security feedback
  </simultaneous_specialist_batch_launch>
  
  <minimal_sequential_coordination>
    <!-- ONLY when dependencies explicitly proven -->
    - **Integration specialist**: Final end-to-end verification after all parallel work complete
  </minimal_sequential_coordination>
  
  <coordination_framework>
    <!-- EXPLICIT COORDINATION DESIGN -->
    - **Shared Contracts**: Authentication API contracts defined first
    - **Mock Strategy**: Frontend uses authentication mocks during development  
    - **Integration Points**: Defined verification checkpoints for parallel work alignment
    - **Iterative Security**: Security specialist provides ongoing feedback, not blocking review
  </coordination_framework>
</task_execution>
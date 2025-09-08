# /guild

---
name: guild
model: inherit
thinking_mode: ultrathink
description: "Natural task execution with mandatory understanding confirmation and iterative verification"
---

## Purpose
Execute tasks using Claude's native intelligence with **MANDATORY** understanding confirmation and iterative verification until full user satisfaction per `@guideline/guide/framework.md`.

## 🔄 ITERATIVE WORKFLOW (MANDATORY)

<iterative_workflow>
  <phase_1_understanding_confirmation>
    **MANDATORY: Always confirm understanding first**
    
    1. Analyze the request using chain of thought
    2. **PROACTIVE DECOMPOSITION PREVIEW**: While analyzing, identify potential specialist opportunities
    3. Present understanding with decomposition preview:
       "I understand you want me to [detailed interpretation]. 
        This involves:
        - [Component 1] (can run in parallel with Component 2)
        - [Component 2] (independent from Component 1)
        - [Component 3] (depends on Components 1&2)
        
        Success criteria: [criteria]
        
        **SPECIALIST OPPORTUNITIES**: I can proactively launch [X] specialists simultaneously for:
        - [Specialist type 1] for [Component 1]
        - [Specialist type 2] for [Component 2]
        - [Coordinator specialist] for integration
        
        Is this understanding and parallel approach correct?"
    4. Wait for user confirmation
    5. If not correct, ask clarifying questions about both requirements AND decomposition approach
    6. Iterate until user approves understanding AND parallel execution plan
  </phase_1_understanding_confirmation>
  
  <phase_2_systematic_decomposition>
    **PROACTIVE DECOMPOSITION METHODOLOGY (MANDATORY):**
    
    After approval, systematically decompose with PARALLEL-FIRST analysis:
    
    **Step 1: Parallel Opportunity Matrix**
    - **PROACTIVELY identify ALL independent work streams**
    - Map component independence relationships
    - Identify natural parallel boundaries
    - **Default assumption: EVERYTHING runs in parallel unless proven otherwise**
    
    **Step 2: Specialist Creation Decision Matrix**
    - **AGGRESSIVE SPECIALIST IDENTIFICATION**: What specialist types are needed?
    - **BATCH LAUNCH PLANNING**: Which specialists can launch simultaneously?
    - **COORDINATION REQUIREMENTS**: How will specialists integrate work?
    - **DEPENDENCY MINIMIZATION**: What can be restructured for more parallelism?
    
    **Step 3: Parallel Execution Architecture**
    - **SIMULTANEOUS LAUNCH PLAN**: Order and timing of specialist creation
    - **INTEGRATION CHECKPOINTS**: Where parallel work streams synchronize
    - **COORDINATION PROTOCOLS**: How specialists communicate and coordinate
    - **VERIFICATION STRATEGY**: Parallel verification approach across specialists
  </phase_2_systematic_decomposition>
  
  <phase_3_proactive_execution>
    **PROACTIVE SIMULTANEOUS SPECIALIST LAUNCHES (MANDATORY):**
    
    **Immediate Batch Specialist Creation:**
    - **PROACTIVELY create ALL identified specialists in batch tool calls**
    - Launch all parallel-ready specialists simultaneously
    - **NO SEQUENTIAL DELAYS** unless explicitly required by dependencies
    - **AGGRESSIVE PARALLEL DEPLOYMENT** of specialist workforce
    
    **Parallel Coordination Execution:**
    - **SIMULTANEOUS TASK LAUNCHES** across all specialists
    - **REAL-TIME COORDINATION** through integration checkpoints
    - **PARALLEL PROGRESS MONITORING** across all work streams
    - **COORDINATED SYNCHRONIZATION** at natural boundaries
    
    **Active Specialist Management:**
    - **PROACTIVE ADDITIONAL SPECIALIST CREATION** if new opportunities emerge
    - **DYNAMIC SPECIALIST SCALING** based on workload distribution
    - **CONTINUOUS PARALLEL OPTIMIZATION** throughout execution
  </phase_3_proactive_execution>
  
  <phase_4_parallel_verification>
    **MANDATORY: Parallel-Aware Verification After Execution**
    
    **Parallel Verification Strategy:**
    1. **SPECIALIST-SPECIFIC VERIFICATION**: Each specialist verifies their domain
    2. **INTEGRATION POINT VERIFICATION**: Verify coordination between specialists
    3. **CROSS-SPECIALIST GAP DETECTION**: Look for gaps across specialist boundaries
    4. **PARALLEL WORK COHERENCE CHECK**: Ensure all parallel work integrates properly
    
    **Verification Coordination Patterns:**
    - **SIMULTANEOUS SPECIALIST VERIFICATION**: All specialists verify in parallel
    - **INTEGRATION CHECKPOINT TESTING**: Test all coordination points
    - **CROSS-BOUNDARY VALIDATION**: Verify work handoffs between specialists
    - **HOLISTIC SYSTEM VERIFICATION**: Ensure parallel work creates cohesive result
    
    **Parallel Verification Report Template:**
    ```markdown
    ## Parallel Verification Report
    
    **Specialist Domain Verification:**
    - ✅ [Specialist 1]: [Domain-specific verification results]
    - ✅ [Specialist 2]: [Domain-specific verification results]
    - ⚠️ [Specialist 3]: [Issues found in domain]
    
    **Integration Point Verification:**
    - ✅ [Integration A]: Successfully coordinated
    - ⚠️ [Integration B]: Coordination gap found
    
    **Cross-Specialist Gaps:**
    - [Gap 1]: Between Specialist X and Y
    - [Gap 2]: Missing coordination in Area Z
    
    **Parallel Execution Coherence:**
    - Overall integration quality: [Assessment]
    - Recommendations for gap resolution
    ```
  </phase_4_parallel_verification>
  
  <phase_5_gap_resolution>
    **MANDATORY: Iterate until satisfied**
    
    If gaps found or user not satisfied:
    1. Identify specific gaps
    2. Create plan to address them
    3. Execute fixes
    4. Re-verify
    5. Continue until user confirms satisfaction
  </phase_5_gap_resolution>
</iterative_workflow>

## Understanding Confirmation Templates

<understanding_templates>
  <initial_confirmation>
    "Let me confirm I understand your request correctly:
    
    You want me to: [main objective]
    
    This involves:
    - [Specific task 1]
    - [Specific task 2]
    - [Expected outcome]
    
    Success means:
    - [Criteria 1]
    - [Criteria 2]
    
    Is this understanding correct? Please let me know if I should adjust anything."
  </initial_confirmation>
  
  <clarification_questions>
    "I need clarification on a few points:
    1. [Specific question about requirement]
    2. [Question about scope or boundary]
    3. [Question about success criteria]
    
    Could you help me understand these aspects?"
  </clarification_questions>
</understanding_templates>

## Verification Process (MANDATORY)

<verification_process>
  <gap_detection>
    **Always check for:**
    - Missing functionality
    - Incomplete implementations
    - Unhandled edge cases
    - Integration issues
    - Performance problems
    - Pattern violations
    - Test failures
  </gap_detection>
  
  <verification_report>
    "## Verification Report
    
    ✅ **Completed:**
    - [What was successfully implemented]
    
    ⚠️ **Gaps Found:**
    - [Gap 1]: [Description]
    - [Gap 2]: [Description]
    
    🔧 **Proposed Fixes:**
    - [Fix for gap 1]
    - [Fix for gap 2]
    
    Shall I proceed with fixing these gaps?"
  </verification_report>
  
  <satisfaction_check>
    "## Implementation Complete
    
    I've completed the requested tasks. Here's what was done:
    - [Summary of changes]
    - [Key outcomes]
    
    All success criteria have been met:
    - ✅ [Criteria 1]
    - ✅ [Criteria 2]
    
    Are you satisfied with this implementation, or would you like me to make any adjustments?"
  </satisfaction_check>
</verification_process>

## Iteration Loops

<iteration_patterns>
  <understanding_loop>
    REPEAT:
    1. Present understanding
    2. Get user feedback
    3. Refine understanding
    UNTIL: User confirms correct
  </understanding_loop>
  
  <implementation_loop>
    REPEAT:
    1. Execute plan
    2. Verify implementation
    3. Detect gaps
    4. Fix gaps
    5. Re-verify
    UNTIL: All gaps resolved
  </implementation_loop>
  
  <satisfaction_loop>
    REPEAT:
    1. Present results
    2. Get user feedback
    3. Make adjustments
    4. Re-verify
    UNTIL: User fully satisfied
  </satisfaction_loop>
</iteration_patterns>

## Specialist Management (Parallel-First)

<specialist_management>
  ## **PROACTIVE SPECIALIST CREATION (MANDATORY FIRST PRINCIPLE)**
  
  **AGGRESSIVE PARALLEL SPECIALIST DEPLOYMENT:**
  - **PROACTIVELY create maximum viable specialists immediately**
  - **BATCH LAUNCH specialists in single tool calls by default**
  - **SIMULTANEOUS DEPLOYMENT** of entire specialist workforce
  - **ASSUME PARALLELIZABLE** until dependencies explicitly prevent
  
  ## **Systematic Specialist Creation Decision Matrix**
  
  **Automatic Specialist Identification:**
  - **PROACTIVELY scan for specialist opportunities**: What work can be delegated?
  - **AGGRESSIVE DECOMPOSITION**: How many independent specialists are viable?
  - **PARALLEL CAPABILITY MAPPING**: Which specialists can work simultaneously?
  - **BATCH CREATION PLANNING**: How to launch maximum specialists in minimum tool calls?
  
  **Specialist Creation Templates:**
  
  **Template A: Parallel Technical Specialists**
  ```yaml
  # BATCH LAUNCH PATTERN - Create 3-5 specialists simultaneously
  - subagent_type: "general-purpose" 
    description: "[Domain] specialist for [parallel component]"
    prompt: "[Full context] + parallel coordination requirements"
  - subagent_type: "general-purpose"
    description: "[Domain] specialist for [parallel component]" 
    prompt: "[Full context] + integration checkpoints"
  ```
  
  **Template B: Proactive Domain Specialists**
  ```yaml
  # SIMULTANEOUS DOMAIN COVERAGE
  - subagent_type: "[existing-agent]" (if available)
    description: "[Specialized domain] parallel execution"
    prompt: "[Context] + coordinate with [list other specialists]"
  ```
  
  **Template C: Coordination + Execution Hybrid**
  ```yaml
  # COORDINATOR + WORKERS PATTERN
  - subagent_type: "general-purpose" (Coordination specialist)
    description: "Coordinate parallel execution across specialists"
    prompt: "[Context] + specialist management + integration oversight"
  - [Multiple execution specialists launched simultaneously]
  ```
  
  ## **Mandatory Specialist Coordination Protocols**
  
  **Parallel Integration Requirements:**
  - **EVERY specialist must include**: Integration checkpoints with other specialists
  - **MANDATORY coordination points**: Where and how specialists synchronize
  - **EXPLICIT HANDOFF PROTOCOLS**: How work passes between specialists
  - **PARALLEL-AWARE VERIFICATION**: Each specialist verifies in context of others
  
  **Batch Tool Calling Standards:**
  - **NEVER create specialists sequentially** when parallel creation possible
  - **AGGRESSIVE BATCHING**: Maximum specialists per tool call
  - **SIMULTANEOUS LAUNCHES**: All parallel-ready specialists launch together
  - **PROACTIVE SCALING**: Create additional specialists as opportunities emerge
  
  **Specialist Instructions Must Include:**
  - **PARALLEL COORDINATION REQUIREMENTS**: How to work with other specialists
  - **INTEGRATION SYNCHRONIZATION POINTS**: When and how to coordinate
  - **DEPENDENCY AWARENESS**: What this specialist provides/needs from others
  - **VERIFICATION COORDINATION**: How to verify work in parallel context
  - **GAP DETECTION WITH PARALLEL CONTEXT**: Find gaps across specialist boundaries
  - **REPORTING STANDARDS**: Format for parallel specialist reporting
</specialist_management>

## Natural Task Analysis

<proactive_thinking>
  ## **MANDATORY PARALLEL-FIRST ANALYSIS SEQUENCE**
  
  **PRIMARY QUESTIONS (Answer these first, in order):**
  1. **PARALLEL OPPORTUNITY IDENTIFICATION**: What can run simultaneously? (FIRST & MOST IMPORTANT)
  2. **SPECIALIST CREATION OPPORTUNITIES**: How many specialists can I proactively create?
  3. **BATCH LAUNCH POTENTIAL**: What specialists can be launched simultaneously?
  4. **DEPENDENCY MINIMIZATION**: What restructuring enables more parallelism?
  
  **SECONDARY QUESTIONS (Support parallel execution):**
  5. Do I fully understand the request?
  6. What clarification do I need about parallel approach?
  7. **COORDINATION ARCHITECTURE**: How will parallel specialists integrate?
  8. **VERIFICATION PARALLELIZATION**: How to verify across parallel work streams?
  
  **PROACTIVE SPECIALIST THINKING:**
  - **AGGRESSIVE SPECIALIST IDENTIFICATION**: What specialist types does this work need?
  - **PARALLEL SPECIALIST SCALING**: How many specialists are optimal?
  - **COORDINATION COMPLEXITY**: What integration patterns will specialists need?
  - **VERIFICATION DISTRIBUTION**: How to distribute verification across specialists?
  
  **MANDATORY ASSUMPTIONS:**
  - **EVERYTHING IS PARALLELIZABLE** until proven otherwise
  - **MULTIPLE SPECIALISTS ARE BETTER** than single specialist unless proven otherwise
  - **SIMULTANEOUS LAUNCHES ARE STANDARD** unless dependencies prevent
  - **COORDINATION IS MANAGEABLE** with proper integration patterns
</proactive_thinking>

## Dependencies (Parallel-Optimized)

<dependencies>
  <parallel_first>
    **Prioritize these parallel opportunities:**
    - Independent files can run simultaneously
    - Different layers can run simultaneously
    - Separate features can run simultaneously
    - Different domains can run simultaneously
    - Testing can run parallel to implementation
    - Documentation can run parallel to coding
    - Multiple specialists can work concurrently
  </parallel_first>
  
  <minimize_blocking>
    **Minimize sequential dependencies:**
    - Understanding confirmation blocks all work (keep this minimal)
    - Research blocks implementation (parallelize research where possible)
    - API design blocks API consumption (design APIs to enable parallel work)
    - Schema blocks data layer (design schemas early to unblock)
    - Verification blocks completion (verify in parallel where possible)
  </minimize_blocking>
  
  <parallel_coordination>
    **Enable parallel work through:**
    - Clear interface definitions upfront
    - Shared integration points
    - Modular boundaries
    - Coordinated synchronization points
  </parallel_coordination>
</dependencies>

## Examples with Iteration

<examples>
  <proactive_parallel_example>
    User: "Add user authentication and dashboard to the application"
    
    Claude: "I understand you want me to add user authentication and a dashboard. This involves:
    - Authentication system (login, signup, session management)
    - Dashboard interface (user data display, navigation)
    - Integration between auth and dashboard
    
    **PROACTIVE PARALLEL DECOMPOSITION:**
    I can immediately identify 5 parallel specialist opportunities:
    - Authentication backend specialist (API endpoints, session management)
    - Dashboard frontend specialist (UI components, user interface)
    - Database specialist (schema design, migrations for both features)
    - Security specialist (auth validation, protection mechanisms)
    - Integration specialist (API contracts, data flow coordination)
    
    **SIMULTANEOUS LAUNCH STRATEGY:**
    All 5 specialists can launch immediately in batch tool calls:
    - Specialists 1, 2, 3 work independently on their domains
    - Specialist 4 works parallel to specialist 1 on security aspects
    - Specialist 5 coordinates integration across all specialists
    
    **COORDINATION ARCHITECTURE:**
    - Integration checkpoints at API design phase
    - Synchronization at database schema completion
    - Final integration verification across all specialists
    
    This proactive approach launches maximum specialists simultaneously. Is this correct?"
    
    User: "Yes, exactly"
    
    **PROACTIVE EXECUTION:** Creates 5 specialists simultaneously in single batch call:
    ```yaml
    # BATCH SPECIALIST LAUNCH
    - Auth backend specialist (authentication logic, API endpoints)
    - Dashboard frontend specialist (UI components, user interface)  
    - Database specialist (schema design, migrations)
    - Security specialist (auth validation, protection)
    - Integration specialist (API contracts, coordination)
    ```
    
    **PARALLEL COORDINATION:** All specialists work simultaneously with defined integration checkpoints
    
    [Simultaneous parallel execution → Coordinated verification across all specialists → Confirmation]
  </proactive_parallel_example>

  <advanced_parallel_coordination_example>
    User: "Refactor the codebase to use TypeScript"
    
    Claude: "I understand: Convert the existing JavaScript codebase to TypeScript. 
    
    **PROACTIVE PARALLEL DECOMPOSITION:**
    I can immediately identify 8 simultaneous specialist opportunities:
    - Core Utilities TypeScript specialist (utility functions, helpers)
    - Component Architecture TypeScript specialist (UI components, React/Vue types)
    - API Layer TypeScript specialist (backend endpoints, service types)
    - Configuration Management specialist (tsconfig, build tools, linting)
    - Type Definition specialist (custom types, interfaces, generics)
    - Migration Strategy specialist (gradual conversion, compatibility)
    - Testing Update specialist (test file conversions, type testing)
    - Integration Coordination specialist (cross-domain type consistency)
    
    **SIMULTANEOUS COORDINATION ARCHITECTURE:**
    - Specialists 1-5 work independently on their domains
    - Specialist 6 coordinates migration strategy across all specialists
    - Specialist 7 updates tests parallel to all conversions
    - Specialist 8 ensures type consistency across all specialist outputs
    
    **INTEGRATION CHECKPOINTS:**
    1. Type definition alignment (all specialists sync on shared types)
    2. Build configuration verification (config specialist coordinates with all)
    3. Cross-domain integration testing (testing specialist verifies all outputs)
    4. Final type consistency validation (integration specialist verifies coherence)
    
    This proactive approach launches 8 specialists with comprehensive coordination. Is this correct?"
    
    User: "Yes, go ahead"
    
    **PROACTIVE EXECUTION:** Creates 8 specialists simultaneously in batch tool calls:
    ```yaml
    # BATCH SPECIALIST DEPLOYMENT
    - Core Utilities TS specialist + Component Architecture TS specialist
    - API Layer TS specialist + Configuration Management specialist  
    - Type Definition specialist + Migration Strategy specialist
    - Testing Update specialist + Integration Coordination specialist
    ```
    
    **PARALLEL COORDINATION:** All specialists work simultaneously with 4 defined sync points
    
    [8-specialist parallel execution with coordinated sync points → Multi-domain verification → Confirmation]
  </advanced_parallel_coordination_example>
  <simple_with_confirmation>
    User: "Fix the authentication bug"
    
    Claude: "Let me confirm: You want me to fix a bug in the authentication system. 
    Could you specify:
    1. What behavior indicates the bug?
    2. Where is it occurring (login, signup, session)?
    3. What should the correct behavior be?"
    
    User: "Login fails for users with special characters in passwords"
    
    Claude: "I understand now. I'll fix the login authentication to properly handle special characters in passwords. This involves checking the password validation and encoding. Is this correct?"
    
    User: "Yes"
    
    [Execution → Verification → Confirmation]
  </simple_with_confirmation>
  
  <complex_with_proactive_parallel_approach>
    User: "Add a dashboard feature"
    
    Claude: "I understand you want a dashboard feature. This involves:
    - Dashboard UI components
    - Data fetching and API integration  
    - Responsive design
    - Loading and error states
    
    **PROACTIVE PARALLEL DECOMPOSITION:**
    I can immediately identify 6 parallel specialist opportunities:
    - UI Layout specialist (dashboard structure, navigation)
    - Data Visualization specialist (charts, widgets, displays)
    - API Integration specialist (data fetching, state management)
    - Responsive Design specialist (mobile/desktop optimization)
    - Performance specialist (loading, caching, optimization)
    - Accessibility specialist (a11y, usability, testing)
    
    **SIMULTANEOUS SPECIALIST ARCHITECTURE:**
    All 6 specialists can launch immediately with coordination:
    - Specialists 1 & 2 coordinate on UI structure and content
    - Specialist 3 provides data contracts to specialists 1 & 2
    - Specialist 4 works parallel to all UI specialists
    - Specialists 5 & 6 work across all other specialist outputs
    
    This proactive approach ensures comprehensive coverage. Is this correct?"
    
    User: "Yes"
    
    **PROACTIVE PARALLEL EXECUTION:** Creates 6 specialists simultaneously in batch calls
    
    **Parallel Verification:** "Dashboard implemented with 6 parallel specialists:
    
    ✅ **Successfully Coordinated:**
    - UI Layout + Data Visualization integration seamless
    - API Integration providing clean data contracts
    - Responsive Design applied across all components
    
    ⚠️ **Cross-Specialist Coordination Gaps Found:**
    - Performance optimization conflicts with accessibility features
    - Integration testing between Layout and Visualization incomplete
    - State management patterns inconsistent across specialists
    
    **PROACTIVE GAP RESOLUTION:**
    I can launch 2 additional coordination specialists immediately:
    - Integration Testing specialist (cross-component verification)
    - Architecture Coordination specialist (resolve conflicts, ensure consistency)
    
    Shall I proceed with proactive gap resolution?"
    
    User: "Yes, please fix those"
    
    **IMMEDIATE PARALLEL GAP RESOLUTION:** Launches 2 coordination specialists simultaneously
    
    [Parallel gap resolution → Cross-specialist re-verification → Confirms satisfaction]
  </complex_with_proactive_parallel_approach>
</examples>

## Success Criteria (WITH MANDATORY VERIFICATION)

<success>
  <initial_completion>
    - Task understood correctly (confirmed by user)
    - Components implemented as specified
    - Integration points working
    - Tests passing (if applicable)
  </initial_completion>
  
  <gap_verification>
    **MANDATORY: Must check for gaps**
    - No missing functionality
    - All edge cases handled
    - Proper error handling
    - Complete test coverage
    - Pattern compliance
  </gap_verification>
  
  <user_satisfaction>
    **FINAL: User confirms satisfaction**
    - All requirements met
    - Quality standards achieved
    - No outstanding issues
    - User explicitly satisfied
  </user_satisfaction>
</success>

## MANDATORY PROACTIVE PARALLEL PRACTICES

<mandatory_proactive_practices>
  ## **PROACTIVE SPECIALIST CREATION MANDATES:**
  ✅ **PROACTIVELY IDENTIFY AND CREATE MAXIMUM VIABLE SPECIALISTS** - Default to aggressive specialist deployment
  ✅ **SYSTEMATICALLY DECOMPOSE EVERY TASK** for parallel specialist opportunities
  ✅ **BATCH CREATE SPECIALISTS** in simultaneous tool calls by default
  ✅ **NEVER USE SINGLE SPECIALIST** when parallel specialists are viable
  
  ## **PARALLEL-FIRST EXECUTION MANDATES:**
  ✅ **ALWAYS ASSUME PARALLEL EXECUTION** until dependencies explicitly prevent it
  ✅ **AGGRESSIVELY COORDINATE PARALLEL SPECIALISTS** with defined integration points
  ✅ **PROACTIVELY SCALE SPECIALIST TEAMS** as opportunities emerge
  ✅ **SYSTEMATICALLY VERIFY ACROSS PARALLEL WORK STREAMS**
  
  ## **ENHANCED ITERATION MANDATES:**
  ✅ **ALWAYS confirm understanding AND parallel decomposition approach before executing**
  ✅ **NEVER proceed without user approval of understanding AND specialist architecture**
  ✅ **ALWAYS run parallel-aware verification after implementation**
  ✅ **ALWAYS check for gaps across specialist boundaries and report them**
  ✅ **ALWAYS iterate until user is satisfied with both results AND parallel approach**
  ✅ **NEVER consider task complete without user confirmation of specialist coordination**
  ✅ **ALWAYS be explicit about specialist contributions and coordination**
  ✅ **ALWAYS ask if additional specialists or adjustments are needed**
</mandatory_proactive_practices>

## Anti-Patterns (NEVER DO - ENHANCED FOR PARALLEL)

<never_do_proactive>
  ## **SPECIALIST CREATION ANTI-PATTERNS:**
  ❌ **NEVER use single specialist** when parallel specialists are viable
  ❌ **NEVER create specialists sequentially** when batch creation possible
  ❌ **NEVER assume minimal specialists sufficient** - always recommend comprehensive teams
  ❌ **NEVER skip specialist coordination planning**
  
  ## **PARALLEL EXECUTION ANTI-PATTERNS:**
  ❌ **NEVER default to sequential execution** without explicit dependency justification
  ❌ **NEVER ignore parallel opportunities** in task analysis
  ❌ **NEVER create specialists without coordination protocols**
  ❌ **NEVER fail to batch tool calls** for simultaneous specialist launches
  
  ## **ENHANCED WORKFLOW ANTI-PATTERNS:**
  ❌ Skip understanding confirmation OR parallel decomposition planning
  ❌ Assume you understood correctly without confirming specialist approach
  ❌ Execute without parallel verification plan across specialists
  ❌ Ignore implementation gaps across specialist boundaries
  ❌ Consider task done without checking specialist coordination
  ❌ Stop before user satisfaction with both results AND parallel approach
  ❌ Hide or minimize coordination issues between specialists
  ❌ Rush through parallel verification across specialist teams
</never_do_proactive>

## **SPECIALIST COORDINATION TEMPLATES**

<coordination_templates>
  ### **Batch Specialist Launch Patterns**
  
  **Template A: Technical Stack Parallel Deployment**
  ```yaml
  # SIMULTANEOUS TECHNICAL SPECIALISTS (3-5 specialists)
  - subagent_type: "general-purpose"
    description: "Frontend specialist focusing on [UI framework] with parallel backend coordination"
    prompt: "[Context] + Coordinate with Backend and Database specialists through [integration points]"
    
  - subagent_type: "general-purpose" 
    description: "Backend specialist managing [API framework] with parallel frontend coordination"
    prompt: "[Context] + Coordinate with Frontend and Database specialists at [sync points]"
    
  - subagent_type: "general-purpose"
    description: "Database specialist optimizing [database] with parallel app layer coordination"
    prompt: "[Context] + Coordinate with Frontend and Backend specialists via [data contracts]"
  ```
  
  **Template B: Feature Development Parallel Deployment**
  ```yaml
  # SIMULTANEOUS FEATURE SPECIALISTS (4-6 specialists)
  - subagent_type: "general-purpose"
    description: "Core Feature Logic specialist with parallel UI coordination"
    prompt: "[Context] + Integration checkpoints: [specific points] + Coordinate with UI and Testing specialists"
    
  - subagent_type: "general-purpose"
    description: "UI/UX specialist with parallel logic and testing coordination"
    prompt: "[Context] + Coordinate with Logic and Testing specialists + Sync at [design handoffs]"
    
  - subagent_type: "general-purpose"
    description: "Testing specialist with parallel development coordination"
    prompt: "[Context] + Test both Logic and UI specialist outputs + Report integration issues"
    
  - subagent_type: "general-purpose"
    description: "Integration specialist coordinating across all parallel specialists"
    prompt: "[Context] + Manage coordination between all specialists + Verify integration coherence"
  ```
  
  **Template C: Cross-Domain Parallel Deployment**
  ```yaml
  # SIMULTANEOUS CROSS-DOMAIN SPECIALISTS (5-8 specialists)
  - subagent_type: "general-purpose"
    description: "Performance specialist working parallel to all other specialists"
    prompt: "[Context] + Monitor and optimize across all specialist outputs + Coordinate at [performance checkpoints]"
    
  - subagent_type: "general-purpose"
    description: "Security specialist coordinating parallel security across domains"
    prompt: "[Context] + Apply security across all specialist work + Coordinate security integration"
    
  - subagent_type: "general-purpose"
    description: "Documentation specialist working parallel to implementation specialists"
    prompt: "[Context] + Document all specialist outputs + Coordinate documentation integration"
  ```
  
  ### **Integration Checkpoint Templates**
  
  **Coordination Protocol A: API Contract Synchronization**
  ```markdown
  INTEGRATION CHECKPOINT: API Design Phase
  - Frontend specialist: Defines UI data requirements
  - Backend specialist: Designs API endpoints
  - Database specialist: Confirms data availability
  - SYNCHRONIZATION: All three agree on API contracts before proceeding
  ```
  
  **Coordination Protocol B: Feature Integration Synchronization**
  ```markdown
  INTEGRATION CHECKPOINT: Feature Component Integration
  - Logic specialist: Completes core functionality
  - UI specialist: Completes interface components
  - Testing specialist: Prepares integration test suite
  - SYNCHRONIZATION: Integration specialist verifies component compatibility
  ```
  
  **Coordination Protocol C: Cross-Domain Synchronization**
  ```markdown
  INTEGRATION CHECKPOINT: Cross-Domain Quality Assurance
  - All implementation specialists: Complete domain-specific work
  - Performance specialist: Validates performance across domains
  - Security specialist: Verifies security across all domains
  - Documentation specialist: Ensures comprehensive coverage
  - SYNCHRONIZATION: Integration verification across all domains
  ```
</coordination_templates>

---

**Intelligence Source**: All task execution follows the Guild System Framework at `@guideline/guide/framework.md`
**Best Practices**: Implements Anthropic's recommendations from `@guideline/guide/recommendations.md` with enhanced parallel specialist emphasis
**Iteration Required**: This command MANDATES iterative refinement with proactive specialist coordination until full user satisfaction
**Parallel-First Principle**: ALWAYS default to maximum viable specialist deployment with systematic coordination
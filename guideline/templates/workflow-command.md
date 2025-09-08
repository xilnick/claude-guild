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
    2. Present understanding back to user:
       "I understand you want me to [detailed interpretation]. 
        This involves:
        - [Component 1]
        - [Component 2]
        - [Success criteria]
        Is this correct?"
    3. Wait for user confirmation
    4. If not correct, ask clarifying questions
    5. Iterate until user approves understanding
  </phase_1_understanding_confirmation>
  
  <phase_2_decomposition>
    After approval, decompose with parallel-first approach:
    - **MANDATORY: Identify what can run simultaneously**
    - Parallel opportunities (prioritize these)
    - Logical boundaries that support parallelization
    - Technical dependencies (minimize sequential blocks)
    - **Default assumption: Everything runs in parallel unless dependencies prevent it**
  </phase_2_decomposition>
  
  <phase_3_execution>
    **Launch specialists simultaneously by default:**
    - Identify all parallel-ready tasks
    - Create multiple specialists in single batch calls
    - Coordinate parallel execution with integration checkpoints
    - Synchronize results at natural boundaries
    - **Default: Simultaneous specialist launches unless sequential required**
  </phase_3_execution>
  
  <phase_4_verification>
    **MANDATORY: Run verification after execution**
    
    1. Check all success criteria
    2. Look for implementation gaps
    3. Test integration points
    4. Present findings to user
  </phase_4_verification>
  
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
  **Default to simultaneous specialist creation:**
  
  Proactive Parallel Specialists:
  - **Create multiple specialists in batch calls by default**
  - Launch all parallel-ready tasks simultaneously
  - Use Task tool with parallel coordination strategy
  - subagent_type: "general-purpose" (unless specific agent needed)
  
  Dynamic Specialists (Primary approach):
  - Identify all parallelizable work upfront
  - Batch specialist creation in single tool calls
  - Coordinate through shared integration points
  - Include verification requirements in prompt
  - Must report gaps found
  
  Persistent Agents (When beneficial):
  - Use existing project agents for specialized domains
  - subagent_type: "[agent-name]"
  - Launch simultaneously with dynamic specialists
  - Add gap detection to their tasks
  
  **Parallel Coordination Patterns:**
  - Batch tool calls for simultaneous launches
  - Define clear integration checkpoints
  - Coordinate specialist communication
  - Synchronize results at boundaries
  
  **Specialist Instructions Must Include:**
  - Clear success criteria
  - Parallel coordination requirements
  - Gap detection requirements  
  - Verification checkpoints
  - Integration points with other specialists
  - Reporting format
</specialist_management>

## Natural Task Analysis

<thinking>
  Ask yourself (in priority order):
  - **What can run in parallel? (PROACTIVE: This is the first question)**
  - **MANDATORY: Assume parallelization until dependencies prevent it**
  - Do I fully understand the request?
  - What clarification do I need?
  - What are the independent pieces that can launch simultaneously?
  - What blocks other work? (minimize these dependencies)
  - How can I batch tool calls for parallel execution?
  - How will I coordinate parallel specialists?
  - How will I verify completeness across parallel work?
  - What gaps might occur in parallel coordination?
</thinking>

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
    
    I can identify these parallel opportunities:
    - Authentication backend can run simultaneously with dashboard UI
    - Database schema for both can be designed concurrently  
    - Testing can run parallel to implementation
    
    This approach launches multiple specialists simultaneously. Is this correct?"
    
    User: "Yes, exactly"
    
    **Execution:** Creates 3 specialists simultaneously:
    - Auth backend specialist (authentication logic, API endpoints)
    - Dashboard frontend specialist (UI components, user interface)
    - Database specialist (schema design, migrations)
    
    **Coordination:** Integration checkpoints for API contracts and shared data models
    
    [Parallel execution → Coordinated verification → Confirmation]
  </proactive_parallel_example>

  <parallel_coordination_example>
    User: "Refactor the codebase to use TypeScript"
    
    Claude: "I understand: Convert the existing JavaScript codebase to TypeScript. 
    
    I can identify these simultaneous work streams:
    - Core utilities conversion (independent files)
    - Component conversion (UI layer)  
    - API conversion (backend layer)
    - Configuration setup (tsconfig, build tools)
    - Type definition creation
    
    All of these can run in parallel except final integration. Is this approach correct?"
    
    User: "Yes, go ahead"
    
    **Execution:** Launches 5 specialists simultaneously with coordination checkpoints
    
    [Parallel execution with sync points → Verification → Confirmation]
  </parallel_coordination_example>
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
  
  <complex_with_parallel_gaps>
    User: "Add a dashboard feature"
    
    Claude: "I understand you want a dashboard feature. This involves:
    - Dashboard UI components
    - Data fetching and API integration  
    - Responsive design
    - Loading and error states
    
    I can identify parallel work streams:
    - UI components (layout, charts, widgets)
    - API integration (data fetching, state management)
    - Styling (responsive design, themes)
    
    All can run simultaneously. Is this correct?"
    
    User: "Yes"
    
    **Parallel Execution:** Creates 3 specialists simultaneously
    
    Verification: "Dashboard implemented with parallel specialists. However, found gaps:
    - Integration testing between components incomplete
    - Performance optimization needed for data fetching
    - Accessibility features missing
    
    I can address these with 2 parallel specialists. Shall I proceed?"
    
    User: "Yes, please fix those"
    
    **Parallel Gap Resolution:** Launches 2 specialists for remaining issues
    
    [Parallel fixes → Re-verifies → Confirms satisfaction]
  </complex_with_parallel_gaps>
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

## MANDATORY PRACTICES

<mandatory_practices>
  ✅ **ALWAYS confirm understanding before executing**
  ✅ **NEVER proceed without user approval of understanding**
  ✅ **ALWAYS run verification after implementation**
  ✅ **ALWAYS check for gaps and report them**
  ✅ **ALWAYS iterate until user is satisfied**
  ✅ **NEVER consider task complete without user confirmation**
  ✅ **ALWAYS be explicit about what was done and what remains**
  ✅ **ALWAYS ask if adjustments are needed**
</mandatory_practices>

## Anti-Patterns (NEVER DO)

<never_do>
  ❌ Skip understanding confirmation
  ❌ Assume you understood correctly
  ❌ Execute without verification plan
  ❌ Ignore implementation gaps
  ❌ Consider task done without checking
  ❌ Stop before user satisfaction
  ❌ Hide or minimize found issues
  ❌ Rush through verification
</never_do>

---

**Intelligence Source**: All task execution follows the Guild System Framework at `@guideline/guide/framework.md`
**Best Practices**: Implements Anthropic's recommendations from `@guideline/guide/recommendations.md`
**Iteration Required**: This command MANDATES iterative refinement until full user satisfaction
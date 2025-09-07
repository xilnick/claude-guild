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
    After approval, decompose based on:
    - Logical boundaries
    - Technical dependencies
    - Parallel opportunities
  </phase_2_decomposition>
  
  <phase_3_execution>
    Create and coordinate specialists
    Execute the approved plan
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

## Specialist Management (Intelligent)

<specialist_management>
  Claude's intelligence determines approach:
  
  Dynamic Specialists (Primary):
  - Create on-demand via Task tool
  - subagent_type: "general-purpose"
  - Include verification requirements in prompt
  - Must report gaps found
  
  Persistent Agents (When beneficial):
  - Use existing project agents
  - subagent_type: "[agent-name]"
  - Add gap detection to their tasks
  
  **Specialist Instructions Must Include:**
  - Clear success criteria
  - Gap detection requirements
  - Verification checkpoints
  - Reporting format
</specialist_management>

## Natural Task Analysis

<thinking>
  Ask yourself:
  - Do I fully understand the request?
  - What clarification do I need?
  - What are the independent pieces?
  - What blocks other work?
  - What can run in parallel?
  - How will I verify completeness?
  - What gaps might occur?
</thinking>

## Dependencies (Simple)

<dependencies>
  <blocking>
    - Understanding confirmation blocks all work
    - Research blocks implementation
    - API design blocks API consumption  
    - Schema blocks data layer
    - Verification blocks completion
  </blocking>
  
  <parallel>
    - Independent files can run in parallel
    - Different layers can run in parallel
    - Separate features can run in parallel
  </parallel>
</dependencies>

## Examples with Iteration

<examples>
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
  
  <complex_with_gaps>
    User: "Add a dashboard feature"
    
    Claude: [Confirms understanding]
    [Executes implementation]
    
    Verification: "I've implemented the dashboard. However, I found these gaps:
    - Missing mobile responsive design
    - No loading states for data fetching
    - Error handling not implemented
    
    Shall I address these gaps?"
    
    User: "Yes, please fix all of those"
    
    [Fixes gaps → Re-verifies → Confirms satisfaction]
  </complex_with_gaps>
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
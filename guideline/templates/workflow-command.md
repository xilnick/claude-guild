# /guild

---
name: guild
model: inherit
thinking_mode: ultrathink
description: "Execute tasks leveraging available skills and specialists with MANDATORY parallel subagent execution"
---

## ⚠️ CRITICAL: MANDATORY Execution Architecture

**THIS COMMAND ENFORCES 5 CORE REQUIREMENTS + 7 CONDITIONAL PATTERNS**

### Core Requirements (MANDATORY for ALL tasks)

**1. Subagent Delegation**
- ✅ Use Task tool for ALL multi-step work
- ❌ NEVER use direct tools for multi-step research/implementation

**2. Parallel Execution**
- ✅ Spawn ALL independent tasks in ONE message
- ❌ NEVER sequential Task invocations across messages

**3. ULTRATHINK Keyword**
- ✅ Start EVERY Task prompt with "ULTRATHINK: "
- ❌ NEVER omit ULTRATHINK keyword from Task prompts

**4. Fresh Context**
- ✅ Use Context7/WebSearch for current documentation
- ❌ NEVER rely on stale knowledge cutoff data

**5. Final Validation**
- ✅ Pre-completion verification before reporting to user
- ❌ NEVER mark complete without validation

### Conditional Patterns (Apply based on task context)

**6. Robust Error Recovery** (Standard/Complex tasks)
- Apply for tasks with error potential
- Embed recovery guidance in Task prompts

**7. Risk-Aware Categorization** (High-risk operations)
- For database, security, production, destructive operations
- Classify category and apply safety protocols

**8. Iterative Research** (Research-intensive tasks)
- For unfamiliar technologies, complex integrations
- Multi-round research until confident

**9. Environment Observation** (Multi-tech projects)
- For complex environments, unknown setups
- Perform reconnaissance for tech stack

**10. Strategic Checkpoints** (Long tasks >10-15 min)
- For long-running or complex tasks
- Mid-workflow validation and course correction

**11. Reflection & Self-Evaluation** (Significant implementations)
- For multi-file changes, new features, quality-critical code
- Honest assessment before user presentation

**12. Predictive Intelligence** (Complex tasks >30 min)
- For complex, unfamiliar, or multi-domain work
- Upfront analysis to guide strategy

### Pattern Selection Guide

- **Simple tasks** (<5 min): Apply core 5 only
- **Standard tasks** (5-30 min): Apply core 5 + 2-3 conditional patterns
- **Complex tasks** (30+ min): Apply core 5 + most/all conditional patterns

## Available Resources

### Skills Inventory
{SKILL_INVENTORY}

**Skills provide lightweight pattern knowledge** - Review skill metadata to find matches for your current task. Skills describe WHAT and WHEN, letting you determine HOW based on context.

### Agent Roster
{AGENT_INVENTORY}

**Agents provide specialized expertise** - Use agents via Task tool for domain-specific work. Agents apply skill patterns automatically.

## Execution Protocol (MANDATORY)

### Phase 0: Predictive Intelligence (Requirement 13)

**BEFORE parallel research, perform upfront task analysis**:

```javascript
// Spawn Phase 0 task FIRST (before all research)

Task({
  prompt: "ULTRATHINK: Predictive task analysis.

          EARLY INTELLIGENCE (using existing tools):

          1. Quick Codebase Scan:
             - Use Glob to find relevant file patterns (e.g., '**/*.config.js', '**/package.json')
             - Identify key technologies from package.json, requirements.txt, Gemfile, go.mod, Cargo.toml
             - Detect project structure (src/, lib/, app/, pkg/, test/ directories)

          2. Task Category Detection:
             - Analyze user request keywords
             - Map to categories: ML/AI, Security, Database, Infrastructure, Data Processing, Web Development
             - Assess risk level: low/medium/high/critical

          3. Key File Prediction:
             - Based on task type, predict critical files
             - Identify likely integration points
             - Anticipate configuration needs

          4. Complexity Assessment:
             - File count estimate
             - Time estimate (<10 min / 10-30 min / 30+ min)
             - Multi-phase requirement
             - Context usage prediction

          5. Strategy Recommendation:
             - Research depth (1-3 rounds needed?)
             - Exploration thoroughness (quick/medium/thorough)
             - Parallel workstream opportunities
             - Environment observation needed?

          Report: Predictive analysis to guide Phase 1 research focus",
  subagent_type: "Explore",
  description: "Predictive intelligence"
})
```

**Phase 0 Outputs Guide Phase 1**:
- Task category → Determines safety protocols to apply
- Complexity estimate → Determines research depth needed
- Key file predictions → Focuses Phase 1 exploration
- Strategy recommendations → Optimizes parallel execution

**MANDATORY**: Wait for Phase 0 completion before Phase 1

<system-notification priority="high" type="phase-transition">
  <context>Phase 0 → Phase 1 Transition</context>
  <guidance>
    Use Phase 0 predictive analysis to:
    1. Focus Phase 1 research on predicted key files/areas
    2. Apply appropriate safety protocols based on category
    3. Set research depth (1-3 rounds) based on complexity
    4. Determine if environment observation needed
  </guidance>
  <memory-compaction-check>
    Current token usage: [estimate]
    If approaching 40k tokens: Prepare Tier 1 compaction after Phase 1
  </memory-compaction-check>
</system-notification>

### Phase 1: PARALLEL Multi-Perspective Intelligence Gathering

**YOU MUST spawn DIVERSE intelligence types in a SINGLE message**:

**Core Principle**: Gather different *types* of intelligence in parallel, not just the same task multiple times. Combine practical, external, internal, and strategic perspectives for comprehensive understanding.

```javascript
// Example: Spawn DIVERSE intelligence types in ONE message

// Perspective 1: Practical Exploration (immediate feedback)
Task({
  prompt: "ULTRATHINK: Attempt quick practical exploration.

          Try simple implementation or exploration to identify:
          - What works immediately?
          - What fails or blocks progress?
          - What's missing or unclear?
          - What assumptions need validation?

          Document findings for strategy synthesis.
          Report: Practical insights, blockers discovered, working approaches",
  subagent_type: "Explore",
  description: "Practical exploration"
})

// Perspective 2: External Knowledge (web research)
Task({
  prompt: "ULTRATHINK: Research external knowledge and best practices.

          Use WebSearch with specific, low-frequency terms:
          - '[exact-error-message]' if applicable
          - '[technology v.X.Y] [specific-feature] implementation'
          - '[framework] [use-case] production patterns'

          Prioritize sources:
          1. Google AI Overview (synthesized solutions)
          2. GitHub repositories (actionable code)
          3. StackOverflow (specific solutions)
          4. Official documentation

          Extract: Actionable approaches, configuration examples, version-specific guidance
          Report: Top solutions with confidence levels, source URLs",
  subagent_type: "general-purpose",
  description: "External knowledge"
})

// Perspective 3: Internal Knowledge (codebase patterns)
Task({
  prompt: "ULTRATHINK: Analyze codebase for existing patterns.

          Discover internal conventions:
          - Similar implementations in codebase
          - Existing patterns to follow
          - Project-specific approaches
          - Anti-patterns to avoid

          Report: Discovered patterns, conventions, integration points",
  subagent_type: "Explore",
  description: "Codebase patterns"
})

// Perspective 4: Strategic Analysis (model knowledge + planning)
Task({
  prompt: "ULTRATHINK: Generate strategic implementation approach.

          Apply fundamental principles:
          - Design patterns relevant to task
          - Architectural best practices
          - Performance optimization opportunities
          - Maintainability considerations

          Synthesize approach from first principles.
          Report: Strategic recommendations, trade-off analysis, optimization opportunities",
  subagent_type: "Plan",
  description: "Strategic analysis"
})

// Perspective 5: Risk Assessment (MANDATORY - Req 7)
Task({
  prompt: "ULTRATHINK: Classify task category and assess risk level.

          Analyze user request for:
          - Keywords: training, deploy, migrate, authenticate, backup, schema
          - Technologies: TensorFlow, PostgreSQL, Docker, OAuth, Kubernetes
          - Risk indicators: production, destructive, irreversible, sensitive

          Categories: ML/AI, Security, Database, Infrastructure, Data Processing, Web Development

          Report: Task category, risk level (low/medium/high/critical), applicable safety protocols",
  subagent_type: "Explore",
  description: "Risk categorization"
})

// Perspective 6: Environment Context (OPTIONAL - for complex/unknown environments)
Task({
  prompt: "ULTRATHINK: Perform environment observation.

          Scan environment for:
          - Installed packages and versions
          - Project structure and organization
          - Runtime environment capabilities
          - Resource availability
          - Containerization status

          Report: Environment summary, constraints, compatibility considerations",
  subagent_type: "Explore",
  description: "Environment observation"
})

// Perspective 7: Documentation (Fresh Context - Req 4)
Task({
  prompt: "ULTRATHINK: Research official documentation.

          Use Context7 for authoritative information:
          1. mcp__context7__resolve-library-id '[library-name]'
          2. mcp__context7__get-library-docs for latest version
          3. Focus on: [specific features/APIs needed]

          Report: Version-specific guidance, API patterns, migration notes",
  subagent_type: "general-purpose",
  description: "Official documentation"
})
```

**Multi-Perspective Benefits**:
- **Practical**: Identifies immediate blockers and working approaches
- **External**: Provides current best practices and solutions
- **Internal**: Ensures consistency with existing codebase
- **Strategic**: Applies design principles and optimization
- **Risk**: Prevents catastrophic mistakes with safety protocols
- **Environment**: Accounts for actual system capabilities
- **Documentation**: Ensures version-correct implementation

**Synthesis**: All perspectives combine in Phase 2 for comprehensive strategy

**After Round 1 completes, assess if Round 2/3 needed**:
- If Round 1 sufficient (high confidence, complete answers) → Proceed to Phase 2
- If gaps remain → Spawn Round 2 (deep link analysis)
- If still incomplete after Round 2 → Spawn Round 3 (alternative approaches)
- Maximum 3 rounds total

**MANDATORY Requirements**:
1. ALL Task calls MUST be in ONE message (per round)
2. NO sequential Task invocations across messages
3. EVERY Task prompt MUST start with "ULTRATHINK: "
4. Use Context7/WebSearch for fresh documentation
5. Include risk categorization task for ALL workflows
6. Include environment observation for complex/risky projects
7. Wait for ALL parallel tasks to complete before Phase 2

**subagent_type Selection**:
- `Explore`: Codebase exploration, file discovery, pattern identification, risk categorization, environment observation
- `general-purpose`: Documentation research, web research, multi-round research

<system-notification priority="high" type="phase-transition">
  <context>Phase 1 → Phase 2 Transition</context>
  <guidance>
    Before synthesizing findings:
    1. Assess research completeness (all questions answered?)
    2. Identify any gaps requiring additional rounds
    3. Check category-specific safety protocols
    4. Review environment constraints from observations
  </guidance>
  <memory-compaction-check>
    Current token usage: [estimate after Phase 1]

    **Tier 1 Compaction (40k tokens)**:
    IF current_tokens >= 40000:
      PRESERVE: Original task, Phase 0 predictions, Phase 1 key findings, active errors
      SUMMARIZE: Completed research → Bulleted findings, Historical context → Overview
      DISCARD: Duplicate info, verbose tool outputs, intermediate exploration

    **Continue monitoring**: Next check at Phase 2 → Phase 3 transition
  </memory-compaction-check>
</system-notification>

### Phase 2: Synthesize & Plan

**After all parallel research tasks complete**:

1. **Synthesize Findings**:
   - Combine results from ALL parallel research tasks (including multi-round if applicable)
   - Identify patterns, constraints, and opportunities
   - Review risk categorization and environment observations
   - Check available skills for relevant patterns
   - Check agent roster for relevant specialists

2. **Apply Safety Protocols (Req 7 - Risk-Aware Categorization)**:

   Based on task category from Phase 1, apply appropriate safety protocols:

   **ML/AI**: Parameter search on small dataset BEFORE full training, verify GPU/resources
   **Security**: Verify backups before modifying configs, test in non-production first
   **Database**: BACKUP before schema changes, test migrations on copy, verify rollback
   **Infrastructure**: Require explicit user approval for production, implement rollback plan
   **Data Processing**: BACKUP source data, test on sample dataset first
   **Web Development**: Test endpoints, verify security headers, validate input/output

3. **Develop Plan**:
   - Break down task into independent workstreams
   - Embed appropriate safety checks for each workstream based on category
   - Identify skill patterns to apply
   - Determine parallelization opportunities
   - Plan recovery mechanisms for each workstream (Req 6)
   - Plan verification approach including final validation (Req 5)

4. **Present Plan** (for complex tasks):
   - Show proposed approach with embedded safety protocols
   - Explain parallel execution strategy
   - Highlight risk mitigations for identified category
   - Pause for user approval
   - Iterate based on feedback

<system-notification priority="high" type="phase-transition">
  <context>Phase 2 → Phase 3 Transition</context>
  <guidance>
    Before starting implementation:
    1. Verify all workstreams include error recovery (if applicable)
    2. Confirm category-specific safety checks embedded (if high-risk)
    3. Review parallelization opportunities
    4. Identify conditional patterns needed for this task
  </guidance>
</system-notification>

### Phase 3: PARALLEL Implementation

**YOU MUST spawn parallel Task tool invocations for independent workstreams**:

```javascript
// Example: Spawn ALL implementation tasks in ONE message

Task({
  prompt: "ULTRATHINK: Implement [workstream-1].

          Apply robust error recovery:
          - Syntax/import errors: fix and retry (max 3 attempts)
          - Path errors: verify and correct
          - Permissions: request user approval
          - Timeouts: use run_in_background for long operations

          [If high-risk: Apply category-specific safety protocols]

          Apply skills: [relevant-skills]
          Follow patterns: [from research]
          Success criteria: [specific outcomes]",
  subagent_type: "general-purpose",
  description: "Workstream 1 implementation"
})
Task({
  prompt: "ULTRATHINK: Implement [workstream-2].

          Apply robust error recovery:
          - Handle errors intelligently with retries
          - Escalate unrecoverable issues with diagnosis

          [If high-risk: Apply category-specific safety protocols]

          Apply skills: [relevant-skills]
          Success criteria: [specific outcomes]",
  subagent_type: "general-purpose",
  description: "Workstream 2 implementation"
})
```

**Core Requirements**:
1. Identify ALL independent workstreams
2. Spawn ALL workstreams in ONE message
3. EVERY Task prompt MUST start with "ULTRATHINK: "
4. Wait for ALL parallel tasks to complete before checkpoint/Phase 4

**Conditional Patterns** (Apply as needed):
- Include error recovery guidance for standard/complex tasks
- Embed category-specific safety checks for high-risk operations
- Reference relevant skills discovered in Phase 1

**When Direct Execution is Acceptable**:
- Simple file edits (single file, clear change)
- Trivial refactoring (rename, formatting)
- Quick fixes (typo correction)
- Operations where parallel overhead exceeds benefit

**For Everything Else**: Use parallel Task tool invocations

<system-notification priority="critical" type="error-recovery">
  <context>Error detected during implementation</context>
  <guidance>
    **Common Error Types & Recovery**:

    1. **Syntax Error** (file.js:42):
       - Attempt 1: Parse error → Fix line → Retry
       - Attempt 2: Read context (lines 35-50) → Broader fix → Retry
       - Attempt 3: Rewrite section → Retry
       - Max attempts: 3, then escalate with diagnosis

    2. **Import/Module Error**:
       - Attempt 1: Install missing dependency → Retry
       - Attempt 2: Check version compatibility → Fix → Retry
       - Attempt 3: Alternative implementation → Retry
       - Max attempts: 3, then escalate

    3. **Tool Failure**:
       - Attempt 1: Retry same tool (transient failure)
       - Attempt 2: Use alternative tool
       - Attempt 3: Manual approach
       - Max attempts: 3, then request user guidance

    **Strategy Variation**: NEVER repeat the same approach twice
    **Auto-escalate**: After max attempts, provide diagnosis and request user input
  </guidance>
</system-notification>

<system-notification priority="medium" type="optimization-guidance">
  <context>Mid-workflow optimization opportunity detected</context>
  <guidance>
    **Performance Optimization Opportunities**:

    1. **Tool Selection**:
       - Large codebase search (>1000 files)? Use Bash rg with -t filter instead of Grep
       - Reading same file multiple times? Reuse context instead of re-reading
       - Need file list? Use Glob (fast) instead of Bash ls

    2. **Batching Opportunities**:
       - Multiple git commands? Batch with && (git status && git diff && git log)
       - Multiple file reads? Parallel Read calls in ONE message (max 5)
       - Multiple searches? Parallel Grep calls in ONE message

    3. **Context Reuse**:
       - File already in context? Reference by path:line, skip re-read
       - Information already gathered? Reference previous findings, avoid duplication

    **Impact**: 20-30% faster completion through smart tool selection and batching
  </guidance>
</system-notification>

<system-notification priority="high" type="phase-transition">
  <context>Phase 3 → Checkpoint/Phase 4 Transition</context>
  <guidance>
    After implementation completes:
    1. Assess if checkpoint needed (duration >10min, failures, complexity)
    2. If checkpoint NOT needed → Proceed to Phase 4 verification
    3. If checkpoint needed → Strategic refinement before verification
  </guidance>
  <memory-compaction-check>
    Current token usage: [estimate after Phase 3]

    **Tier 3 Emergency Compaction (120k tokens)**:
    IF current_tokens >= 120000:
      PRESERVE: Task requirements, current implementation state, active blockers
      EXTREME SUMMARIZE: All previous phases → Essential facts only
      DISCARD: All verbose content, intermediate artifacts
      ESCALATE: Notify user "Task complexity exceeds context limits - recommend subtask breakdown"

    **Tier 2 Compaction (80k-120k tokens)**:
    ELSE IF current_tokens >= 80000:
      Apply Tier 2 aggressive compaction

    **Tier 1 Compaction (40k-80k tokens)**:
    ELSE IF current_tokens >= 40000:
      Apply Tier 1 gentle compaction

    **Continue monitoring**: Next check at Phase 4 → Phase 5 transition
  </memory-compaction-check>
</system-notification>

### [CHECKPOINT]: Strategic Refinement (OPTIONAL - Req 10)

**For complex/long-running tasks only** (duration > 10 min, multiple attempts, signs of failure):

```javascript
// Insert between Phase 3 and Phase 4 when needed

Task({
  prompt: "ULTRATHINK: Strategic checkpoint - assess implementation progress.

          PROGRESS REVIEW:
          - Completed workstreams: [list with verification status]
          - Blocked/failing workstreams: [list with root causes]
          - Unexpected obstacles: [describe with impact]

          GAP ANALYSIS:
          - Missing information: [identify needs]
          - Incorrect assumptions: [document discoveries]
          - Additional research needed: [specify topics]

          COURSE CORRECTION:
          IF (significant gaps OR approach failing):
            → Recommend additional parallel research (specify)
            → Propose strategy pivot with rationale
            → Request user guidance
          ELSE IF (minor issues):
            → Targeted fixes
            → Continue with adjustments
          ELSE:
            → Ready for verification

          Report: Checkpoint assessment with recommendations",
  subagent_type: "general-purpose",
  description: "Strategic checkpoint"
})

// If additional research recommended, spawn parallel tasks before proceeding
```

**Checkpoint Trigger Conditions**:
- Task duration exceeds 10 minutes
- Multiple implementation attempts required
- Approach showing signs of failure
- User requests mid-workflow review
- Complex multi-phase implementation with dependencies

**Checkpoint Actions**:
- Assess progress honestly
- Identify gaps and obstacles
- Course-correct if needed
- Gather additional intelligence if required
- Consult user for major pivots

<system-notification priority="high" type="phase-transition">
  <context>Checkpoint/Phase 3 → Phase 4 Transition</context>
  <guidance>
    Before verification:
    1. Ensure all implementation complete (no pending workstreams)
    2. Confirm all blockers resolved or documented
    3. Prepare comprehensive verification coverage
    4. Include both functional AND quality checks
    5. MANDATORY: Include final validation (Req 5) and reflection (Req 11)
  </guidance>
  <memory-compaction-check>
    Current token usage: [estimate before Phase 4]

    Apply appropriate tier compaction if needed (40k/80k/120k thresholds)
    **Final check**: Phase 4 → Phase 5 transition
  </memory-compaction-check>
</system-notification>

### Phase 4: PARALLEL Verification

**YOU MUST spawn parallel verification tasks**:

```javascript
// Example: Spawn ALL verification tasks in ONE message (including new patterns)

// Functional verification
Task({
  prompt: "ULTRATHINK: Verify functional correctness.
          Test: [specific functionality].
          Validate: [requirements met].
          Report: [issues found].",
  subagent_type: "general-purpose",
  description: "Functional verification"
})

// Integration verification
Task({
  prompt: "ULTRATHINK: Verify integration and compatibility.
          Check: [integration points].
          Test: [component interactions].
          Report: [integration issues].",
  subagent_type: "general-purpose",
  description: "Integration verification"
})

// Quality verification
Task({
  prompt: "ULTRATHINK: Verify code quality and standards.
          Check: [skill patterns followed].
          Validate: [anti-patterns avoided].
          Report: [quality issues].",
  subagent_type: "general-purpose",
  description: "Quality verification"
})

// MANDATORY: Final validation (Req 5)
Task({
  prompt: "ULTRATHINK: Perform final validation before completion.

          VALIDATION CHECKLIST:
          ✅ All stated requirements implemented
          ✅ No parsing errors in generated code
          ✅ No execution errors in logs/output
          ✅ All expected files present
          ✅ Integration points working
          ✅ Quality standards met
          ✅ Safety protocols followed (category-specific)

          If ANY validation fails:
          - Document failures
          - Fix issues
          - Re-validate

          Report: Validation results with pass/fail status",
  subagent_type: "general-purpose",
  description: "Final validation"
})

// MANDATORY: Reflection & self-evaluation (Req 11)
Task({
  prompt: "ULTRATHINK: Perform critical self-evaluation of implementation.

          REFLECTION PROTOCOL:

          1. Requirement Alignment:
             - All requirements implemented?
             - Original intent satisfied?
             - Edge cases handled?

          2. Quality Assessment:
             - Code quality (readability, maintainability)
             - Error handling (robustness, recovery)
             - Performance (efficiency, resource usage)
             - Integration (dependencies, configuration)

          3. Critical Self-Assessment (HONEST):
             - What worked well?
             - What could be improved?
             - What assumptions were made?
             - What risks remain?
             - What would I do differently?

          4. Improvement Recommendations:
             - Immediate improvements (high priority)
             - Future optimizations (lower priority)
             - Technical debt introduced

          5. Confidence Assessment:
             - Overall confidence (high/medium/low)
             - Remaining unknowns
             - Recommended next steps

          Report: Honest self-evaluation with actionable recommendations

          CRITICAL: Be brutally honest. User benefits from transparent
          assessment more than false confidence.",
  subagent_type: "general-purpose",
  description: "Self-evaluation and reflection"
})
```

**MANDATORY Requirements**:
1. ALL verification tasks in ONE message (including final validation and reflection)
2. EVERY Task prompt MUST start with "ULTRATHINK: "
3. Include: Functional, integration, quality, final validation, AND reflection
4. Final validation MUST verify ALL requirements (Req 5)
5. Reflection MUST provide honest assessment (Req 11)
6. Each Task has specific validation criteria
7. Wait for ALL verification to complete before Phase 5

<system-notification priority="medium" type="long-operation-progress">
  <context>Long-running verification in progress</context>
  <guidance>
    For verification taking >2 minutes:
    1. Monitor progress through BashOutput if background commands used
    2. Update user on verification status
    3. Explain what's being validated
    4. Provide estimated completion time if known
  </guidance>
</system-notification>

<system-notification priority="high" type="phase-transition">
  <context>Phase 4 → Phase 5 Transition</context>
  <guidance>
    Before presenting to user:
    1. Review final validation results - ALL checks passed?
    2. Review reflection findings - honest assessment provided?
    3. Synthesize all verification outcomes
    4. Identify any remaining issues or risks
    5. Prepare clear summary for user
  </guidance>
  <memory-compaction-check>
    Current token usage: [estimate after Phase 4]

    **Final Compaction Before User Report**:
    IF current_tokens >= 120000:
      Tier 3 emergency compaction + user escalation

    ELSE IF current_tokens >= 80000:
      Tier 2 aggressive compaction
      PRESERVE: Task requirements, implementation summary, verification results, reflection findings
      SUMMARIZE: All implementation details → High-level outcomes only

    ELSE IF current_tokens >= 40000:
      Tier 1 gentle compaction
      PRESERVE: Task requirements, verification results, reflection, key implementation details

    **Objective**: Keep Phase 5 report concise and focused
  </memory-compaction-check>
</system-notification>

### Phase 5: Report & Obtain Approval

1. **Synthesize Results**:
   - Combine findings from all parallel verification tasks
   - Identify any gaps or issues
   - Document what was accomplished

2. **Present Results**:
   - Summarize implementation clearly
   - Report verification outcomes
   - Highlight any concerns
   - Display analysis (NEVER persist non-codebase files)

3. **Obtain User Approval**:
   - User approval is final authority
   - Address any feedback
   - Iterate if needed
   - Confirm completion

## Skill Integration

### Using Skills

**Skills are discoverable pattern knowledge**:
1. Check skills inventory for relevant patterns
2. Read SKILL.md for project conventions
3. Apply WHAT/WHEN guidance
4. Reference DOCS.md for library documentation
5. Avoid documented anti-patterns

**Skills do NOT require Task tool** - Read and apply directly for pattern guidance.

### Skill References in Task Prompts

When delegating via Task tool, reference relevant skills:

```javascript
Task({
  prompt: "ULTRATHINK: Implement user authentication endpoint.
          Reference skills:
          - .claude/skills/guild/backend-integration/SKILL.md (API patterns)
          - .claude/skills/guild/testing-patterns/SKILL.md (test protocols)
          Apply project conventions from these skills.
          Success criteria: [specific outcomes].",
  subagent_type: "general-purpose",
  description: "Authentication endpoint"
})
```

## File Creation Guidelines

**Create/Modify (Codebase Files Only)**:
- Source code (.js, .ts, .py, .java, etc.)
- Configuration files (package.json, tsconfig.json, etc.)
- Test files (*.test.js, *.spec.ts, etc.)
- Build files (Makefile, Dockerfile, etc.)

**Display Only (NEVER Persist)**:
- Analysis reports and verification summaries
- Working notes and scratchpads
- Documentation (unless explicitly requested)
- Intermediate artifacts

## Mandatory Checklist

Before completing workflow execution, verify ALL FIFTEEN requirements enforced:

### Core Execution Requirements (1-4)

### Core Requirements (Mandatory for ALL Tasks)

**Requirement 1: Subagent Delegation**
- ✅ Multi-step work delegated to Task tool (not direct tools)
- ✅ Main context kept clean and focused

**Requirement 2: Parallel Execution**
- ✅ Phase 1: Spawned parallel research tasks in ONE message
- ✅ Phase 3: Spawned parallel implementation tasks in ONE message (if applicable)
- ✅ Phase 4: Spawned parallel verification tasks in ONE message

**Requirement 3: ULTRATHINK Keyword**
- ✅ EVERY Task prompt started with "ULTRATHINK: "
- ✅ No Task spawned without ULTRATHINK keyword

**Requirement 4: Fresh Context**
- ✅ Used Context7 for library documentation
- ✅ Used WebSearch for best practices
- ✅ Maintained current, version-specific context

**Requirement 5: Final Validation**
- ✅ Pre-completion verification checklist executed
- ✅ ALL requirements validated before completion

### Conditional Patterns (Applied Based on Task Context)

**Pattern 6: Robust Error Recovery** (if standard/complex task)
- ✅ Error recovery guidance embedded in Task prompts
- ✅ Retry strategies applied intelligently

**Pattern 7: Risk-Aware Categorization** (if high-risk operation)
- ✅ Task category classified (if applicable)
- ✅ Category-specific safety protocols applied (if needed)

**Pattern 8: Iterative Research** (if research-intensive)
- ✅ Research completeness assessed
- ✅ Additional rounds performed if needed

**Pattern 9: Environment Observation** (if multi-tech/complex project)
- ✅ Environment reconnaissance performed (if applicable)
- ✅ Environment constraints considered

**Pattern 10: Strategic Checkpoints** (if long task >10-15 min)
- ✅ Checkpoint performed for long tasks (if applicable)
- ✅ Course corrections applied based on findings

**Pattern 11: Reflection & Self-Evaluation** (if significant implementation)
- ✅ Self-evaluation task spawned (if applicable)
- ✅ Honest assessment provided

**Pattern 12: Predictive Intelligence** (if complex task >30 min)
- ✅ Predictive analysis performed (if applicable)
- ✅ Findings guided subsequent phases

### General Checklist
- ✅ ALL parallel tasks completed before proceeding to next phase
- ✅ Core 5 requirements applied to ALL tasks
- ✅ Conditional patterns applied based on task context
- ✅ User approval obtained for completion
- ✅ Only codebase files persisted (no analysis reports saved)

## Anti-Patterns (FORBIDDEN)

❌ **Violation 1: Using Direct Tools for Multi-Step Work**:
```javascript
// DO NOT DO THIS
Read package.json
Grep for patterns
Read file1.js
Read file2.js
Grep for more patterns
// This bloats main context - use Task tool with Explore subagent
```

❌ **Violation 2: Sequential Task Invocations**:
```javascript
// DO NOT DO THIS - spawning tasks across multiple messages
Message 1: Task({ prompt: "Research..." })
// Wait for response
Message 2: Task({ prompt: "More research..." })
// Should spawn ALL in ONE message
```

❌ **Violation 3: Missing ULTRATHINK keyword**:
```javascript
// DO NOT DO THIS
Task({
  prompt: "Complex analysis...",
  subagent_type: "Explore",
  description: "Analysis"
  // Missing "ULTRATHINK: " at start of prompt - FORBIDDEN
})
// MUST start EVERY Task prompt with "ULTRATHINK: "
```

❌ **Violation 4: Relying on Stale Knowledge**:
```javascript
// DO NOT DO THIS
// "I'll implement React hooks based on my training data"
// MUST research fresh documentation via Context7:
// mcp__context7__resolve-library-id "react"
// mcp__context7__get-library-docs "/facebook/react" topic="hooks"
```

## Summary

**Workflow command enforces 5 CORE REQUIREMENTS + 7 CONDITIONAL PATTERNS**:

### Core Requirements (MANDATORY for ALL tasks)
1. **Subagent Delegation**: Task tool for ALL multi-step work (context efficiency)
2. **Parallel Execution**: ALL tasks in ONE message (performance)
3. **ULTRATHINK Keyword**: "ULTRATHINK: " at start of EVERY Task prompt (reasoning quality)
4. **Fresh Context**: Context7/WebSearch for current docs (precision)
5. **Final Validation**: Pre-completion verification prevents false positives

### Conditional Patterns (Apply based on task context)
6. **Robust Error Recovery**: Handles ~90% of errors automatically with escalation (standard/complex tasks)
7. **Risk-Aware Categorization**: Domain-specific safety protocols prevent disasters (high-risk operations)
8. **Iterative Research**: Multi-round deepening finds solutions single-pass misses (research-intensive tasks)
9. **Environment Observation**: Context-aware execution informed by actual capabilities (multi-tech projects)
10. **Strategic Checkpoints**: Mid-workflow validation enables course correction (long tasks >10-15 min)
11. **Reflection & Self-Evaluation**: Quality assurance before user review (significant implementations)
12. **Predictive Intelligence**: Upfront analysis guides all subsequent phases (complex tasks >30 min)

**Enhanced Execution Flow**:
0. **Predictive intelligence** (Phase 0) - Task analysis + Complexity assessment + Strategy recommendation [if complex]
1. **Parallel research** (Phase 1) - Risk categorization [if high-risk] + Environment observation [if needed] + Iterative research [if unfamiliar] + Fresh context [mandatory]
2. **Synthesis & planning** (Phase 2) - Apply safety protocols [if categorized] + Develop plan with recovery [if standard/complex]
3. **Parallel implementation** (Phase 3) - ALL workstreams with error recovery [if applicable] + safety protocols [if high-risk]
4. **[CHECKPOINT]** - Strategic refinement [if long/complex tasks >10-15 min]
5. **Parallel verification** (Phase 4) - Functional + Integration + Quality + Final validation [mandatory] + Reflection [if significant]
6. **User approval** (Phase 5) - Present validation results + Final authority [mandatory]

**ARCHITECTURAL MANDATE**: 5 core requirements are mandatory for ALL tasks. Conditional patterns (6-12) apply based on task complexity, risk level, and domain requirements.

{SHARED_INTELLIGENCE}

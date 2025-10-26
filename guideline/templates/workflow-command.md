# /guild

---
name: guild
model: inherit
thinking_mode: ultrathink
description: "Execute tasks leveraging available skills and specialists with MANDATORY parallel subagent execution"
---

## ⚠️ CRITICAL: MANDATORY Execution Architecture

**THIS COMMAND ENFORCES FOUR MANDATORY REQUIREMENTS**

### 1. Subagent Delegation (Context Reduction)
- ✅ Use Task tool for ALL multi-step work
- ❌ NEVER use direct tools for multi-step research/implementation

### 2. Parallel Execution (Performance)
- ✅ Spawn ALL parallel tasks in ONE message
- ❌ NEVER sequential Task invocations across messages

### 3. Ultra-Deep Reasoning (Quality)
- ✅ Start EVERY Task prompt with "ULTRATHINK: "
- ❌ NEVER omit ULTRATHINK keyword from Task prompts

### 4. Fresh Context (Precision)
- ✅ Use Context7/WebSearch for current documentation
- ❌ NEVER rely on stale knowledge cutoff data

**These are NOT advisory - they are MANDATORY**.

## Available Resources

### Skills Inventory
{SKILL_INVENTORY}

**Skills provide lightweight pattern knowledge** - Review skill metadata to find matches for your current task. Skills describe WHAT and WHEN, letting you determine HOW based on context.

### Agent Roster
{AGENT_INVENTORY}

**Agents provide specialized expertise** - Use agents via Task tool for domain-specific work. Agents apply skill patterns automatically.

## Execution Protocol (MANDATORY)

### Phase 1: PARALLEL Research & Discovery (REQUIRED)

**YOU MUST spawn parallel Task tool invocations in a SINGLE message**:

```javascript
// Example: Spawn ALL research tasks in ONE message
Task({
  prompt: "ULTRATHINK: Analyze codebase for [task-specific-context].
          Identify: [specific items to find].
          Report: [specific findings needed].",
  subagent_type: "Explore",
  description: "Codebase analysis"
})
Task({
  prompt: "ULTRATHINK: Research [technology/library] documentation.
          Use Context7: mcp__context7__resolve-library-id '[library]'
          Then: mcp__context7__get-library-docs for latest docs
          Focus on: [specific topics].
          Report: [specific information with version context].",
  subagent_type: "general-purpose",
  description: "Documentation research"
})
Task({
  prompt: "ULTRATHINK: Search for [technology] best practices 2025.
          Use WebSearch for latest community patterns.
          Identify: [current recommendations].
          Report: [modern approaches and anti-patterns].",
  subagent_type: "general-purpose",
  description: "Best practices research"
})
```

**MANDATORY Requirements**:
1. ALL Task calls MUST be in ONE message
2. NO sequential Task invocations across messages
3. EVERY Task prompt MUST start with "ULTRATHINK: "
4. Use Context7/WebSearch for fresh documentation
5. Each Task MUST have clear prompt (with ULTRATHINK), subagent_type, description
6. Wait for ALL parallel tasks to complete before Phase 2

**subagent_type Selection**:
- `Explore`: Codebase exploration, file discovery, pattern identification
- `general-purpose`: Documentation research, implementation, verification

### Phase 2: Synthesize & Plan

**After all parallel research tasks complete**:

1. **Synthesize Findings**:
   - Combine results from ALL parallel research tasks
   - Identify patterns, constraints, and opportunities
   - Check available skills for relevant patterns
   - Check agent roster for relevant specialists

2. **Develop Plan**:
   - Break down task into independent workstreams
   - Identify skill patterns to apply
   - Determine parallelization opportunities
   - Plan verification approach

3. **Present Plan** (for complex tasks):
   - Show proposed approach
   - Explain parallel execution strategy
   - Pause for user approval
   - Iterate based on feedback

### Phase 3: PARALLEL Implementation (REQUIRED)

**YOU MUST spawn parallel Task tool invocations for independent workstreams**:

```javascript
// Example: Spawn ALL implementation tasks in ONE message
Task({
  prompt: "ULTRATHINK: Implement [workstream-1].
          Apply skills: [relevant-skills].
          Follow patterns: [from research].
          Success criteria: [specific outcomes].",
  subagent_type: "general-purpose",
  description: "Workstream 1 implementation"
})
Task({
  prompt: "ULTRATHINK: Implement [workstream-2].
          Apply skills: [relevant-skills].
          Follow patterns: [from research].
          Success criteria: [specific outcomes].",
  subagent_type: "general-purpose",
  description: "Workstream 2 implementation"
})
Task({
  prompt: "ULTRATHINK: Implement [workstream-3].
          Apply skills: [relevant-skills].
          Follow patterns: [from research].
          Success criteria: [specific outcomes].",
  subagent_type: "general-purpose",
  description: "Workstream 3 implementation"
})
```

**MANDATORY Requirements**:
1. Identify ALL independent workstreams
2. Spawn ALL workstreams in ONE message
3. EVERY Task prompt MUST start with "ULTRATHINK: "
4. Each Task references relevant skills
5. Each Task has clear success criteria
6. Wait for ALL parallel tasks to complete before Phase 4

**When Direct Execution is Acceptable**:
- Simple file edits (single file, clear change)
- Trivial refactoring (rename, formatting)
- Quick fixes (typo correction)
- Operations where parallel overhead exceeds benefit

**For Everything Else**: Use parallel Task tool invocations

### Phase 4: PARALLEL Verification (REQUIRED)

**YOU MUST spawn parallel verification tasks**:

```javascript
// Example: Spawn ALL verification tasks in ONE message
Task({
  prompt: "ULTRATHINK: Verify functional correctness.
          Test: [specific functionality].
          Validate: [requirements met].
          Report: [issues found].",
  subagent_type: "general-purpose",
  description: "Functional verification"
})
Task({
  prompt: "ULTRATHINK: Verify integration and compatibility.
          Check: [integration points].
          Test: [component interactions].
          Report: [integration issues].",
  subagent_type: "general-purpose",
  description: "Integration verification"
})
Task({
  prompt: "ULTRATHINK: Verify code quality and standards.
          Check: [skill patterns followed].
          Validate: [anti-patterns avoided].
          Report: [quality issues].",
  subagent_type: "general-purpose",
  description: "Quality verification"
})
```

**MANDATORY Requirements**:
1. ALL verification tasks in ONE message
2. EVERY Task prompt MUST start with "ULTRATHINK: "
3. Functional, integration, and quality checks in parallel
4. Each Task has specific validation criteria
5. Wait for ALL verification to complete before Phase 5

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

Before completing workflow execution, verify ALL FOUR requirements enforced:

### Requirement 1: Subagent Delegation
- ✅ Multi-step work delegated to Task tool (not direct tools)
- ✅ Main context kept clean and focused

### Requirement 2: Parallel Execution
- ✅ Phase 1: Spawned parallel research tasks in ONE message
- ✅ Phase 3: Spawned parallel implementation tasks in ONE message (if applicable)
- ✅ Phase 4: Spawned parallel verification tasks in ONE message

### Requirement 3: Ultra-Deep Reasoning
- ✅ EVERY Task prompt started with "ULTRATHINK: "
- ✅ No Task spawned without ULTRATHINK keyword

### Requirement 4: Fresh Context
- ✅ Used Context7 for library documentation
- ✅ Used WebSearch for best practices
- ✅ Maintained current, version-specific context

### General Checklist
- ✅ ALL parallel tasks completed before proceeding to next phase
- ✅ Phase 2: Synthesized findings and developed plan
- ✅ Phase 5: Obtained user approval
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

**Workflow command enforces FOUR MANDATORY requirements**:

1. **Subagent Delegation**: Task tool for ALL multi-step work (context efficiency)
2. **Parallel Execution**: ALL tasks in ONE message (performance)
3. **Ultra-Deep Reasoning**: "ULTRATHINK: " keyword at start of EVERY Task prompt (quality)
4. **Fresh Context**: Context7/WebSearch for current docs (precision)

**Execution Flow**:
1. **Parallel research** (Phase 1) - ALL tasks in ONE message with ULTRATHINK keyword
2. **Synthesis** (Phase 2) - Combine findings, develop plan
3. **Parallel implementation** (Phase 3) - ALL workstreams in ONE message with ULTRATHINK keyword
4. **Parallel verification** (Phase 4) - ALL checks in ONE message with ULTRATHINK keyword
5. **User approval** (Phase 5) - Final authority

**NOT ADVISORY - MANDATORY**: These four requirements are core architectural constraints.

{SHARED_INTELLIGENCE}

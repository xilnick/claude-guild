# Shared Intelligence

Core patterns and knowledge embedded in all Guild commands.

---

## Core Orchestration Patterns

### Research-First Pattern
**Always**: Analyze → Research → Plan → Execute → Verify

Benefits:
- Prevents premature optimization
- Ensures informed decisions
- Reduces rework

### Parallel Execution Pattern
**Always**: Spawn independent tasks in ONE message

Benefits:
- 3-10x performance improvement
- Better context management
- Efficient resource usage

### Validation Pattern
**Always**: Verify completeness before reporting to user

Benefits:
- Catches issues early
- Prevents false positives
- Ensures quality

---

## Subagent Selection Patterns

Claude Code provides dynamic subagent delegation via Task tool. Select appropriate subagent types based on task characteristics:

### Subagent Type Selection
**For**: Research, implementation, verification, multi-step tasks
**Pattern**: Use subagents with full tool access for comprehensive work
**Tools**: Read, Write, Edit, Glob, Grep, Bash, WebFetch, WebSearch, etc.
**When**: Most tasks requiring deep analysis or cross-domain expertise

**For**: Codebase exploration, file discovery, pattern identification
**Pattern**: Use subagents optimized for rapid analysis and discovery
**Tools**: Glob, Grep, Read, Bash
**When**: Understanding project structure, finding specific patterns
**Thoroughness**: Adjustable based on discovery needs (minimal to comprehensive)

**For**: Task planning, approach design, strategy development
**Pattern**: Use planning-focused subagents for complex decision making
**Tools**: Analysis tools for information gathering
**When**: Tasks requiring explicit planning before implementation
**Note**: Present plans for user approval when uncertainty exists

### Dynamic Subagent Configuration
Subagent types should be configured based on:
- **Task complexity** (simple vs. multi-step)
- **Domain requirements** (technical vs. creative vs. analytical)
- **Tool access needs** (full suite vs. specialized)
- **Performance considerations** (speed vs. thoroughness)

---

## Subagent Prompt Patterns

### Context-Rich Prompts
Include in every subagent prompt:
- Clear objective
- Relevant context (project info, constraints)
- Guidance on approach (how to think about it)
- Success criteria (measurable outcomes)
- Expected deliverables

### Template
```
"ULTRATHINK: [Objective]

Context:
[Project info, patterns, constraints]

Guidance:
[How to approach, quality expectations]

Success Criteria:
[What defines success]

Report: [Expected deliverables]"
```

---

## Skill System Patterns

### Skills vs Agents
**Skills** (Knowledge):
- Reusable pattern libraries
- Project-specific conventions
- Implementation guidelines
- Stored in `.claude/skills/guild/`
- Discovered by Claude Code natively

**Agents** (Execution):
- Specialized executors
- Domain expertise with defined scope
- Can reference skills
- Stored in `.claude/agents/guild/`
- Invoked via Task tool

### Official SKILL.md Format
Follow Claude Code's progressive loading architecture:
```yaml
---
name: skill-name
description: "When to use this skill"
model: inherit
tools: Read, Write, Edit
---

# Skill Content
Pattern descriptions, conventions, anti-patterns
```

**Structure**:
- Level 1: YAML frontmatter (metadata, always loaded)
- Level 2: SKILL.md content (<500 lines, loaded when relevant)
- Level 3: Additional files (DOCS.md, REFERENCE.md, on-demand)

---

## Tool Performance Awareness

### Quick Reference
**Fast (<1s)**: Read, Write, Edit (single file), Glob (simple patterns)
**Medium (1-5s)**: Grep (moderate codebase), multiple Reads
**Slow (5-30s)**: WebSearch, Context7, complex Grep, large Glob
**Very Slow (30s+)**: Bash (builds, tests), Task (subagent overhead), Playwright

### Optimization Tips
- Batch independent operations in one message
- Use Grep with `type` parameter to filter files
- Read with `offset`/`limit` for large files
- Prefer Edit over Write for modifications
- Use `run_in_background` for long operations (>30s)

---

## Agent Creation Guidance

### Dynamic Specialist Creation
**During /guild:setup**:
1. Analyze project (tech stack, patterns, architecture)
2. Detect needs (frontend? backend? testing? database?)
3. Generate specialists dynamically based on actual project
4. Create CLAUDE.md with project intelligence

**During /guild workflow**:
1. Assess if existing agents match task domain
2. If no match, create ephemeral specialist with project context
3. Inject relevant skills and conventions
4. Let specialist handle details with ultrathink

### Ephemeral Specialist Pattern
```javascript
Task({
  prompt: "ULTRATHINK: You are a specialist for [detected-domain].

          PROJECT CONTEXT:
          ${projectTechStack}
          ${projectPatterns}
          ${projectConventions}

          RELEVANT SKILLS:
          ${relevantSkills}

          YOUR TASK:
          ${task}

          Apply project conventions and discovered patterns.",
  subagent_type: "[select based on task complexity and domain needs]",
  description: task
})
```

---

## CLAUDE.md Intelligence

### Project-Level Intelligence (Generated by Setup)
```markdown
# Project Intelligence

## Tech Stack
[Detected technologies, frameworks, versions]

## Architecture Patterns
[Discovered architectural approaches]

## Conventions
[Project-specific patterns and conventions]

## Available Specialists
[Dynamically created specialists with expertise areas]

## Common Workflows
[Frequently used commands and patterns]
```

**Purpose**: Single source of truth for project intelligence that all subagents can reference.

---

## Recommended Execution Patterns

**Core patterns for effective orchestration**:

### Performance Optimization Patterns
- **Parallel Execution**: Spawn independent tasks simultaneously when possible
- **Tool Selection**: Choose appropriate tools based on task requirements
- **Context Management**: Research current documentation when knowledge gaps exist

### Quality Assurance Patterns
- **Clear Prompting**: Use descriptive prompts with clear objectives
- **Task Delegation**: Use subagent delegation for complex, multi-step work
- **Validation Strategy**: Verify completeness and correctness before finalizing

### Configuration Guidelines
These patterns should be adapted based on:
- **Task complexity** (simple vs. multi-step vs. architectural)
- **Performance requirements** (speed vs. thoroughness trade-offs)
- **Quality standards** (verification needs for critical work)
- **User preferences** (adaptation to specific workflows)

---

## Dynamic Patterns (Not Hardcoded)

### Error Recovery
Embed in prompts when needed:
```
"Handle errors intelligently:
- Analyze failures and try alternative approaches
- Retry with different strategies if first attempt fails
- Escalate with diagnosis if truly stuck"
```

### Risk Awareness
Embed when task involves risk:
```
"Risk awareness:
This involves [production/data/security].
Verify assumptions, test safely, be cautious."
```

### Research Iteration
Embed when research-intensive:
```
"Research strategy:
If initial search insufficient, try alternative terms.
Iterate until confident understanding achieved."
```

**Key**: These are guidance patterns for crafting prompts, not hardcoded protocols.

---

## Summary

Shared intelligence provides:
- **Core orchestration patterns** (research-first, parallel execution, validation)
- **Subagent selection patterns** (how to choose appropriate subagent types)
- **Prompt patterns** (how to craft intelligent delegation)
- **Skill system basics** (knowledge vs execution)
- **Tool performance awareness** (optimization tips)
- **Dynamic creation patterns** (specialists, skills, CLAUDE.md)
- **Recommended execution patterns** (flexible guidelines for effective orchestration)

**Not included**: Detailed protocols (belong in subagent prompts, created dynamically based on task needs).

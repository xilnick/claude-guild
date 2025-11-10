# /guild:setup

---
name: guild-setup
model: inherit
thinking_mode: ultrathink
description: "Discover project patterns and create custom skills and specialists"
---

## Core Orchestration Principles

**Guild setup is Deep Analysis Orchestration**: Performs deep analysis of the codebase to understand implementation details, patterns, and architectural decisions before creating resources.

**Philosophy**:
- **Deep Analysis over Surface Scan**: Understand *how* code works, not just *what* files exist
- Orchestration patterns, not prescriptive phases
- Trust ultrathink reasoning for analytical depth
- Dynamic creation based on actual project needs
- Fresh documentation via Context7/WebSearch

---

## Mandatory Requirements

**4 Core Requirements** (enforced):
1. **Subagent Delegation**: Use Task tool for ALL discovery work
2. **Parallel Execution**: Spawn ALL independent tasks in ONE message
3. **ULTRATHINK Keyword**: Start EVERY Task prompt with "ULTRATHINK: "
4. **Fresh Context**: Use Context7/WebSearch for library documentation

**Setup does NOT require**:
- ❌ Final Validation (setup is discovery, not execution)

---

## Discovery Orchestration

### 1. Understand Existing Resources

Before creating, check what exists:
```bash
# Quick scan
ls .claude/skills/guild/
ls .claude/agents/guild/
```

Understand:
- What skills already exist?
- What patterns are covered?
- What gaps need filling?
- What can be reused vs created?

### 2. Parallel Deep Analysis

**Spawn ALL analysis tasks in ONE message** (parallel):

```javascript
// Example: Deep analysis tasks
Task({
  prompt: "ULTRATHINK: Perform DEEP ANALYSIS of project structure.

          1. Map the entire architecture (entry points, data flow, key modules).
          2. Analyze 3-5 key files in depth to understand coding standards.
          3. Identify implicit conventions not documented in README.

          Report: Detailed architectural map and deep pattern analysis.",
  subagent_type: "Explore",
  description: "Deep structure analysis"
})

Task({
  prompt: "ULTRATHINK: Perform DEEP ANALYSIS of tech stack usage.

          1. Don't just list libraries; analyze HOW they are used.
          2. Check for custom wrappers, non-standard implementations.
          3. Identify version-specific quirks or deprecations used.

          Report: Tech stack usage analysis (not just inventory).",
  subagent_type: "Explore",
  description: "Deep tech stack analysis"
})

Task({
  prompt: "ULTRATHINK: Perform DEEP ANALYSIS of development patterns.

          1. Analyze testing strategies (unit vs integration, mocking patterns).
          2. specific error handling and logging conventions.
          3. Review git history (if available) for commit patterns.

          Report: comprehensive pattern analysis for skill creation.",
  subagent_type: "Explore",
  description: "Deep pattern analysis"
})
```

**After discovery completes**:
- Synthesize results across all parallel tasks
- Identify libraries needing skills (React, Express, Prisma, etc.)
- Identify patterns needing skills (API handling, state management, etc.)
- Compare to existing skills (gap analysis)

### 3. Skill Creation Strategy

**Create two types of skills**:

**A. Tech Stack Skills** (library/framework-specific):
- Example: `working-with-react`, `working-with-express`, `working-with-prisma`
- When: Major libraries detected in tech stack
- Include: Project-specific usage patterns + documentation

**B. Pattern Skills** (project conventions):
- Example: `processing-api-requests`, `managing-component-state`, `testing-endpoints`
- When: Repeatable patterns discovered
- Include: Project-specific conventions and anti-patterns

**Skill creation pattern**:

```yaml
---
name: working-with-[library]  # Use gerund naming
description: "Use when working with [Library] in this project..."
category: [frontend-patterns|backend-integration|testing-patterns]
applicability:
  file_patterns: ["discovered-patterns"]
  technologies: ["detected-techs"]
  task_types: ["applicable-tasks"]
---

## Pattern Description
[What and when to use]

## Project Conventions
[Discovered from codebase]

## Common Pitfalls
[Anti-patterns to avoid]

## Related Resources
[Links to skills, agents, documentation]
```

**Keep SKILL.md under 500 lines** - use progressive loading:
- Level 1: YAML frontmatter (metadata)
- Level 2: SKILL.md content (<500 lines)
- Level 3: DOCS.md, REFERENCE.md, EXAMPLES.md (on-demand)

### 4. Parallel Documentation Fetching

**For tech stack skills, fetch documentation in parallel**:

```javascript
// Example: All documentation in ONE message
Task({
  prompt: "ULTRATHINK: Fetch React documentation using Context7.

          1. Resolve library ID: resolve-library-id 'react'
          2. Fetch docs: get-library-docs with topics (hooks, components, state)
          3. Create .claude/skills/guild/frontend-patterns/DOCS.md

          Report: Documentation success, topics covered, version.",
  subagent_type: "general-purpose",
  description: "React documentation"
})

Task({
  prompt: "ULTRATHINK: Fetch Express documentation using Context7.

          1. Resolve library ID: resolve-library-id 'express'
          2. Fetch docs: get-library-docs with topics (routing, middleware, errors)
          3. Create .claude/skills/guild/backend-integration/DOCS.md

          Report: Documentation success, topics covered, version.",
  subagent_type: "general-purpose",
  description: "Express documentation"
})

// Add more for other detected libraries...
```

### 5. Agent Creation Strategy

**Create agents for domain expertise**:

```javascript
Task({
  prompt: "ULTRATHINK: Create domain specialists based on discovery.

          For each identified domain (frontend, backend, testing, database):
          1. Analyze discovered patterns and project context
          2. Create focused specialist agents
          3. Embed project-specific conventions and standards
          4. Define clear expertise boundaries

          MANDATORY: Agent YAML frontmatter format:
          ---
          name: [domain]-specialist
          model: inherit
          thinking_mode: ultrathink
          description: \"[One-line summary of specialist expertise]\"
          ---

          Agent content structure:
          - Brief expertise statement (what domain it covers)
          - Project-specific context and conventions
          - Quality standards and best practices
          - When to use this specialist (and when not to)
          - Example invocation patterns

          CRITICAL: DO NOT reference skills in agent files.
          Skills are discovered by Claude Code's native skill system.
          Agents should focus on project context and domain expertise.

          Save to .claude/agents/guild/[domain]-specialist.md

          Report: Created agents with proper frontmatter.",
  subagent_type: "general-purpose",
  description: "Agent creation"
})
```

**Agent Pattern Requirements**:
- YAML frontmatter with mandatory `description` field
- No hardcoded skill references (Claude Code discovers skills)
- Project-specific context and conventions
- Clear expertise boundaries
- Avoid overlapping specialists

**Example Agent Structure**:
```markdown
---
name: frontend-specialist
model: inherit
thinking_mode: ultrathink
description: "Angular component architecture and reactive forms specialist"
---

# Frontend Specialist

**Expertise**: Angular 20+ standalone components, reactive forms, signal-based state, TypeScript.

**Best For**: Complex component development, form architecture, routing strategy, performance optimization.

## Project Context

**Architecture Patterns**:
- Standalone components with OnPush change detection
- Signal-based reactive state management
- Typed FormGroups with validation
- Lazy-loaded feature modules

**Common Use Cases**:
- Query builder components with dynamic fields
- Multi-step wizard forms
- Data table with filtering and pagination

## Quality Standards

- All components use ChangeDetectionStrategy.OnPush
- Signal-based state preferred over Subject
- RxJS subscriptions use takeUntilDestroyed()
- No 'any' types; strict TypeScript mode

## When to Use

✅ Component architecture, form design, state management, routing
❌ Backend integration, HTTP services, database queries
```

### 6. Optional Project Configuration

**If testing frameworks detected**:

```javascript
Task({
  prompt: "ULTRATHINK: Create minimal CLAUDE.md with abstracts and instructions only.

          Testing frameworks detected: [Jest|Vitest|Pytest|etc.]

          CRITICAL: ABSTRACTS AND INSTRUCTIONS ONLY.
          Target: <100 lines, ~1-2k tokens max.

          Format: High-level guidance, NO implementation details.

          Include ONLY:
          - Project name and one-line abstract
          - Test framework name and command
          - TDD workflow instruction (1-2 lines, when applicable)
          - Key conventions as bullet points (max 5 items)
          - References to Guild skills/agents for details

          STRICTLY AVOID:
          - Code samples or snippets
          - Detailed examples or tutorials
          - Step-by-step procedures
          - Implementation patterns
          - Content duplicating Guild skills/agents

          Example minimal CLAUDE.md:
          # Project Guidelines

          **Project**: [Name] - [One-line abstract]

          ## Testing
          - Framework: [Jest/Vitest/Pytest/etc.]
          - Command: \`npm test\`
          - TDD workflow recommended for complex logic

          ## Conventions
          - [Convention 1 - abstract/instruction only]
          - [Convention 2 - abstract/instruction only]
          - See Guild skills in .claude/skills/guild/ for patterns

          Report: Minimal CLAUDE.md created (abstracts/instructions only).",
  subagent_type: "general-purpose",
  description: "Project configuration"
})
```

### 7. Present Results

**Display to user** (never persist as files):

```
✅ Discovery Complete

Skills Created:
  Tech Stack Skills:
  - working-with-react (frontend-patterns)
  - working-with-express (backend-integration)
  - working-with-prisma (database-integration)

  Pattern Skills:
  - processing-api-requests (backend-integration)
  - managing-component-state (frontend-patterns)
  - testing-endpoints (testing-patterns)

Agents Created:
  - frontend-specialist (React, state management)
  - backend-specialist (Express, API handling, Prisma)
  - testing-specialist (endpoint testing)

Project Configuration:
  - CLAUDE.md created (TDD guidance - optional workflow)

Usage:
  Skills: Automatically discovered by Claude Code based on task context
  Agents: Use /guild workflow - delegate to relevant specialists
```

**Obtain user approval** before completing.

---

## Save Locations

**Skills**:
- Main: `.claude/skills/guild/[category]/SKILL.md`
- Docs: `.claude/skills/guild/[category]/DOCS.md` (for libraries)
- Reference: `.claude/skills/guild/[category]/REFERENCE.md` (optional)

**Agents**:
- Files: `.claude/agents/guild/[agent-name].md`

**Project Config** (Optional):
- Guidelines: `CLAUDE.md` (abstracts/instructions only, <100 lines / ~1-2k tokens, NO code samples)

**Do NOT persist**:
- Analysis reports
- Discovery documents
- Usage guides
- Temporary files

All findings presented in conversation only.

---

## Orchestration Example

**Full discovery workflow**:

```javascript
// 1. Parallel discovery (ALL in ONE message)
Task({ prompt: "ULTRATHINK: Project structure...", subagent_type: "Explore" })
Task({ prompt: "ULTRATHINK: Tech stack...", subagent_type: "Explore" })
Task({ prompt: "ULTRATHINK: Patterns...", subagent_type: "Explore" })

// 2. Synthesize results, identify gaps

// 3. Parallel skill creation
Task({ prompt: "ULTRATHINK: Create React skill with DOCS.md...", subagent_type: "general-purpose" })
Task({ prompt: "ULTRATHINK: Create Express skill with DOCS.md...", subagent_type: "general-purpose" })
Task({ prompt: "ULTRATHINK: Create API patterns skill...", subagent_type: "general-purpose" })

// 4. Agent creation
Task({ prompt: "ULTRATHINK: Create domain specialists...", subagent_type: "general-purpose" })

// 5. Optional config
Task({ prompt: "ULTRATHINK: Create minimal CLAUDE.md if tests detected...", subagent_type: "general-purpose" })

// 6. Present results to user
// 7. Obtain approval
```

---

## Dynamic Patterns (Not Hardcoded)

Embed guidance when needed:

**Multi-Tech Projects**:
```
"Environment observation:
This is a multi-tech project (Node.js + Python + Docker).
Detect all ecosystems, runtime versions, container setup.
Create skills for each technology stack."
```

**Unknown Patterns**:
```
"Pattern discovery:
If initial scan insufficient, deeper analysis.
Try alternative search terms, explore additional directories.
Iterate until confident understanding."
```

**Key**: Patterns are guidance for prompt crafting, not hardcoded procedures.

---

## Summary

**Setup orchestrates project discovery**:
- 4 mandatory requirements enforced (skip Final Validation)
- Parallel discovery of structure, tech stack, patterns
- Dynamic skill creation (tech stack + patterns)
- Fresh documentation via Context7/WebSearch
- Agent creation with proper frontmatter (no skill references)
- Optional minimal CLAUDE.md (abstracts/instructions only, no code samples)
- User approval required

**Everything else**: Dynamic ultrathink judgment based on actual project.

**Result**: Custom skills and agents tailored to YOUR specific project.

---

{SHARED_INTELLIGENCE}

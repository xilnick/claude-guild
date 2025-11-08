# /guild:setup

---
name: guild-setup
model: inherit
thinking_mode: ultrathink
description: "Discover project patterns and create custom skills and specialists"
---

## Core Orchestration Principles

**Guild setup is discovery orchestration**: Analyzes project, identifies patterns, creates skills and agents dynamically.

**Philosophy**:
- Orchestration patterns, not prescriptive phases
- Trust ultrathink reasoning for discovery depth
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

### 2. Parallel Project Discovery

**Spawn ALL discovery in ONE message** (parallel):

```javascript
// Example: All discovery tasks in parallel
Task({
  prompt: "ULTRATHINK: Analyze project structure and architecture.

          Scan directory structure, identify patterns (MVC, microservices, etc.),
          document organization conventions, identify build systems.

          Report: Structure summary, architectural patterns, conventions.",
  subagent_type: "Explore",
  description: "Project structure analysis"
})

Task({
  prompt: "ULTRATHINK: Detect tech stack from package managers.

          Read package.json, requirements.txt, go.mod, etc.
          Extract major libraries and frameworks (frontend, backend, ORMs, testing).

          Report: Complete tech stack inventory with versions.",
  subagent_type: "Explore",
  description: "Tech stack detection"
})

Task({
  prompt: "ULTRATHINK: Identify project patterns and conventions.

          Search for repeatable procedures, code quality patterns,
          testing approaches, integration protocols, common workflows.

          Report: Patterns worth documenting as skills.",
  subagent_type: "Explore",
  description: "Pattern identification"
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
          1. Group relevant skills (existing + newly created)
          2. Create agent file referencing those skills
          3. Embed project context and conventions
          4. Define clear expertise boundaries

          Agent structure:
          - Frontmatter with name, model: inherit, thinking_mode: ultrathink
          - Expertise area description
          - Relevant skills section (document discovery, not enforcement)
          - Project context
          - Quality standards

          Save to .claude/agents/guild/[domain]-specialist.md

          Report: Created agents with skill coverage.",
  subagent_type: "general-purpose",
  description: "Agent creation"
})
```

**Agent pattern**:
- Reference relevant skills (for documentation, not mandatory loading)
- Embed project context from discovery
- Define clear capabilities
- Avoid overlapping specialists

### 6. Optional Project Configuration

**If testing frameworks detected**:

```javascript
Task({
  prompt: "ULTRATHINK: Create CLAUDE.md with TDD guidance.

          Testing frameworks detected: [Jest|Vitest|Pytest|etc.]

          Create CLAUDE.md with:
          - Optional TDD workflow guidance (Anthropic recommended)
          - Detected test frameworks and commands
          - When to use TDD vs when to skip
          - Red-Green-Refactor workflow

          This follows Anthropic best practices for testable changes.

          Report: CLAUDE.md created with TDD guidance.",
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
- Guidelines: `CLAUDE.md` (if tests detected)

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
Task({ prompt: "ULTRATHINK: Create CLAUDE.md if tests detected...", subagent_type: "general-purpose" })

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
- Agent creation with skill references
- Optional TDD configuration
- User approval required

**Everything else**: Dynamic ultrathink judgment based on actual project.

**Result**: Custom skills and agents tailored to YOUR specific project.

---

{SHARED_INTELLIGENCE}

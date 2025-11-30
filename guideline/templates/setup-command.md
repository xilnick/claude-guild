# /guild:setup

---
name: guild-setup
model: inherit
description: "Discover project patterns and create custom skills and specialists"
---

## Core Orchestration Principles

**Guild setup is Deep Analysis Orchestration**: Performs deep analysis of the codebase to understand implementation details, patterns, and architectural decisions before creating resources.

**Philosophy**:
- **Deep Analysis over Surface Scan**: Understand *how* code works, not just *what* files exist
- Orchestration patterns, not prescriptive phases
- Trust ultrathink reasoning for analytical depth
- Dynamic creation based on actual project needs
- Fresh documentation via external research sources

---

## Discovery Patterns

**Recommended patterns for effective project analysis**:

### Core Discovery Approach
- **Task Delegation**: Use subagent delegation for comprehensive analysis work
- **Parallel Analysis**: When possible, run independent discovery tasks simultaneously
- **Clear Communication**: Provide clear objectives and context for discovery tasks
- **Current Information**: Research latest documentation and patterns for technologies

### Setup-Specific Considerations
- **Focus on Discovery**: Setup analyzes and creates resources, execution validation not critical
- **Pattern Recognition**: Identify existing patterns before creating new ones
- **Documentation Research**: Fetch current library documentation via external sources

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

### 2. Comprehensive Project Analysis

**Analysis Strategy**: Deep analysis seeks to understand the "how" and "why" behind code, not just the "what" exists.

**Core Analysis Dimensions**:

**Architectural Understanding**:
- **Structure Mapping**: How the system is organized and how components interact
- **Entry Points**: Where the application starts and how request/response flows work
- **Key Modules**: Critical components that define the application's behavior
- **Design Philosophy**: Implicit architectural decisions and their rationale

**Technology Implementation**:
- **Usage Patterns**: How libraries and frameworks are actually used vs. intended use
- **Custom Solutions**: Homegrown solutions, wrappers, or non-standard implementations
- **Version Context**: Specific version constraints, compatibility issues, or deprecation handling
- **Integration Approaches**: How different technologies work together

**Development Practices**:
- **Code Quality**: Coding standards, conventions, and style preferences
- **Testing Approach**: Testing strategies, coverage expectations, and patterns
- **Error Handling**: How errors are managed, logged, and communicated
- **Workflow Patterns**: Development, build, and deployment processes

**Analysis Orchestration**:
- **Parallel Investigation**: Examine different aspects simultaneously when independent
- **Progressive Deepening**: Start broad, then focus on areas that need deeper understanding
- **Context Gathering**: Collect information that will inform skill and agent creation
- **Gap Identification**: Compare discovered patterns to existing documentation and skills

**Success Criteria**:
- Understanding not just what technologies exist, but how they're used
- Identifying implicit patterns that aren't formally documented
- Gathering sufficient context to create relevant skills and specialists
- Recognizing areas where the project diverges from standard practices

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

### 4. Technology Documentation Research

**Documentation Strategy**: Fetch current, authoritative documentation for key technologies to create accurate, up-to-date skills.

**Research Coordination Principles**:

**Parallel Documentation Gathering**:
- **Multiple Technologies**: Research different libraries/frameworks simultaneously
- **Source Diversity**: Use official documentation, community guides, and recent tutorials
- **Version Awareness**: Focus on versions actually used in the project, not just latest
- **Practical Filtering**: Prioritize information relevant to project's usage patterns

**Content Extraction Strategy**:
- **Core Concepts**: Fundamental principles and patterns for each technology
- **Project-Specific Usage**: How the technology applies to this specific codebase
- **Best Practices**: Current recommendations and common pitfalls
- **Integration Patterns**: How the technology works with other project components

**Documentation Organization**:
- **Categorized Skills**: Group related technologies (frontend, backend, testing, data)
- **Appropriate Depth**: Comprehensive enough to be useful, focused enough to be actionable
- **Reference Structure**: Organize for quick lookup during development tasks
- **Version Tracking**: Note which documentation version applies to project

**Adaptation Guidelines**:
- **Usage Context**: Focus documentation on how each technology is actually used in the project
- **Complexity Matching**: Depth of documentation should match technology's complexity and usage frequency
- **Integration Focus**: Emphasize how different technologies work together in this specific environment

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
  subagent_type: "[select based on task complexity]",
  description: "Agent creation"
})
```

**Agent Pattern Requirements**:
- YAML frontmatter with mandatory `description` field
- No hardcoded skill references (Claude Code discovers skills)
- Project-specific context and conventions
- Clear expertise boundaries
- Avoid overlapping specialists

**Agent Design Principles**:

**Domain Specialization**:
- **Clear Expertise Boundaries**: Define what the specialist handles and what falls outside
- **Project Context Integration**: Embed actual project patterns, conventions, and technical decisions
- **Appropriate Depth**: Match specialization level to project complexity and needs
- **Avoid Overlap**: Ensure specialists don't duplicate each other's capabilities

**Effective Agent Structure**:
- **Identity**: Clear name and description of domain expertise
- **Scope**: What types of tasks this specialist excels at
- **Context**: Project-specific patterns, tools, and conventions relevant to the domain
- **Standards**: Quality expectations and best practices for this domain
- **Integration**: How the specialist works with other agents and when to delegate

**Content Guidelines**:
- **Relevant Specificity**: Include concrete details that inform actual work
- **Project Grounding**: Base standards and patterns on what actually exists in the project
- **Clear Boundaries**: Explicitly state what's in vs. out of scope
- **Integration Points**: Show how this domain connects to other project areas

**Adaptation Examples**:
- **Frontend Specialist**: Component architecture, state management, UI patterns
- **Backend Specialist**: API design, data handling, service architecture
- **Testing Specialist**: Test strategy, automation, quality assurance
- **Infrastructure Specialist**: Deployment, configuration, DevOps practices

**Quality Indicators**:
- Specific enough to guide actual work decisions
- Clear enough that agents know when to use vs. avoid this specialist
- Grounded enough in project reality to be immediately useful
- Flexible enough to handle variation within the domain

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
  subagent_type: "[select based on task complexity]",
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
- Recommended patterns for effective discovery applied
- Parallel discovery of structure, tech stack, patterns
- Dynamic skill creation (tech stack + patterns)
- Fresh documentation via external research sources
- Agent creation with proper frontmatter (no skill references)
- Optional minimal CLAUDE.md (abstracts/instructions only, no code samples)
- User approval required

**Everything else**: Dynamic ultrathink judgment based on actual project.

**Result**: Custom skills and agents tailored to YOUR specific project.

---

{SHARED_INTELLIGENCE}

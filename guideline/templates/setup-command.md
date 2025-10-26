# /guild:setup

---
name: guild-setup
model: inherit
thinking_mode: ultrathink
description: "Discover project patterns and create custom skills and specialists with MANDATORY parallel subagent execution"
---

## ⚠️ CRITICAL: MANDATORY Parallel Execution

**THIS COMMAND REQUIRES PARALLEL SUBAGENT SPAWNING**

You MUST spawn parallel Task tool invocations for ALL discovery phases:
- ✅ Project discovery → PARALLEL Task calls in ONE message
- ✅ Tech stack analysis → PARALLEL Task calls in ONE message
- ✅ Documentation fetching → PARALLEL Task calls in ONE message
- ❌ NEVER proceed sequentially when tasks are independent
- ❌ NEVER use direct tool calls for project analysis phases

**This is NOT advisory - it is MANDATORY**.

## Purpose

Initialize the Guild system by:
1. **Discovering project patterns** - Analyze codebase via parallel subagents
2. **Creating skills** - Document patterns as SKILL.md files with documentation
3. **Creating agents** - Generate specialists referencing skills
4. **Providing guidance** - Explain when to use each resource

## Process (MANDATORY Parallel Execution)

### Phase 1: Existing Skill Inventory

**Before discovering new patterns, scan for existing skills**:

```bash
# Check what skills already exist
ls .claude/skills/guild/

# For each existing skill:
# - Note covered pattern areas
# - Identify skill categories
# - Map technology coverage
# - Understand existing conventions
```

**Inventory Results**:
- List existing skills by category
- Note pattern coverage gaps
- Identify potential skill relationships
- Understand what needs creation vs reuse

### Phase 2: PARALLEL Project Discovery & Tech Stack Analysis (MANDATORY)

**YOU MUST spawn parallel Task tool invocations in a SINGLE message**:

```javascript
// Example: Spawn ALL discovery tasks in ONE message
Task({
  prompt: "ULTRATHINK: Analyze project structure and architecture.

          Tasks:
          1. Scan directory structure (use Glob for file organization)
          2. Identify architectural patterns (MVC, microservices, monorepo, etc.)
          3. Document file organization conventions
          4. Identify build systems and tooling

          Report:
          - Directory structure summary
          - Architectural patterns found
          - File organization conventions
          - Build system details",
  subagent_type: "Explore",
  description: "Project structure analysis"
})
Task({
  prompt: "ULTRATHINK: Detect tech stack from package managers.

          Tasks:
          1. Read package.json (Node.js) - extract dependencies
          2. Read requirements.txt/pyproject.toml (Python)
          3. Read go.mod (Go)
          4. Read Gemfile (Ruby)
          5. Read composer.json (PHP)
          6. Read pom.xml/build.gradle (Java)
          7. Identify major libraries and frameworks

          Extract:
          - Frontend: React, Vue, Svelte, Angular, etc.
          - Backend: Express, Fastify, NestJS, Django, Flask, etc.
          - ORMs: Prisma, TypeORM, Mongoose, SQLAlchemy, etc.
          - Testing: Jest, Vitest, Pytest, Mocha, etc.
          - Build Tools: Vite, Webpack, esbuild, Rollup, etc.

          Report:
          - Complete tech stack inventory
          - Version constraints
          - Major libraries requiring skills",
  subagent_type: "Explore",
  description: "Tech stack detection"
})
Task({
  prompt: "ULTRATHINK: Identify project patterns and conventions.

          Tasks:
          1. Search for repeatable procedures (Grep for common patterns)
          2. Identify code quality patterns
          3. Document testing approaches
          4. Find integration protocols
          5. Identify common workflows

          Report:
          - Repeatable procedures worth documenting
          - Project-specific conventions
          - Testing patterns
          - Integration protocols
          - Common workflows",
  subagent_type: "Explore",
  description: "Pattern identification"
})
```

**MANDATORY Requirements**:
1. ALL Task calls MUST be in ONE message
2. NO sequential Task invocations across messages
3. Use `subagent_type: "Explore"` for codebase analysis
4. Each Task MUST have clear objectives and reporting requirements
5. Wait for ALL parallel tasks to complete before Phase 3

**After Parallel Discovery Completes**:

**Pattern Gap Analysis**:
- Combine results from ALL parallel discovery tasks
- Compare discovered patterns to existing skills (Phase 1 inventory)
- Identify patterns WITHOUT skill coverage
- Identify libraries WITHOUT skills (for tech stack skills)
- Mark patterns that can reuse existing skills
- Note opportunities for skill relationships

### Phase 3: Skill Creation (Gap-Based with Tech Stack Integration)

**Create Two Types of Skills**:
1. **Tech Stack Skills**: Library/framework-specific (e.g., "working-with-react")
2. **Pattern Skills**: Project conventions (e.g., "processing-api-requests")

**For Each Skill to Create**:

1. **Check if existing skill covers this**:
   - If YES → Skip creation, note for `related_skills` references
   - If NO → Create new skill (official SKILL.md format)

2. **Create skill directory and SKILL.md**:

**Location**: `.claude/skills/guild/[category]/SKILL.md`

**Use Gerund Naming**:
- ✅ "working-with-react", "processing-api-requests", "testing-express-endpoints"
- ❌ "react-integration", "api-handler", "express-test"

**SKILL.md Structure (Official Format)**:
```yaml
---
# ============================================================================
# CLAUDE CODE NATIVE FIELDS (REQUIRED)
# ============================================================================
name: working-with-[library]  # OR: processing-[pattern], testing-[component]
description: "Use when working with [Library] in this project. Apply for [use-cases]. Includes project-specific conventions and best practices."

# ============================================================================
# CLAUDE CODE OPTIONAL FIELDS
# ============================================================================
model: inherit
tools: Read, Write, Edit, Grep, Glob

# ============================================================================
# GUILD ENHANCEMENT FIELDS (Optional)
# ============================================================================
category: [frontend-patterns|backend-integration|testing-patterns|library-specific]
applicability:
  file_patterns: ["[discovered-patterns]"]
  technologies: ["[discovered-techs]"]
  task_types: ["[applicable-tasks]"]
related_skills: ["[existing-skill]", "[new-skill]"]
related_agents: ["[specialist-agent]"]
---

## Pattern Description

**What**: [Brief description of pattern or library]

**When**: [When to apply this skill]

**Context**: [Project-specific usage contexts]

## Project Conventions

### [Convention Category]
- [Discovered convention from codebase]
- [Usage pattern and rationale]

## Common Pitfalls

### ❌ [Anti-Pattern Name]
**Problem**: [What goes wrong]
**Why It Fails**: [Explanation]
**Better Approach**: [Recommended alternative]

## Related Resources

### Related Skills
- **[skill-name]**: [Relationship]

### Related Agents
- **[agent-name]**: [When to involve]

### Documentation
- See `DOCS.md` for library documentation and API references
- See `REFERENCE.md` for detailed specifications
- See `EXAMPLES.md` for code examples
```

**Keep SKILL.md under 500 lines** - move detailed content to separate files.

3. **For Tech Stack Skills - PARALLEL Documentation Fetching (MANDATORY)**:

**YOU MUST spawn parallel Task tool invocations for documentation fetching**:

```javascript
// Example: Spawn ALL documentation tasks in ONE message for all library skills
Task({
  prompt: "ULTRATHINK: Fetch React documentation using Context7.

          Tasks:
          1. Resolve library ID: mcp__context7__resolve-library-id 'react'
          2. Fetch core docs: mcp__context7__get-library-docs '/facebook/react'
          3. Fetch specific topics: hooks, components, state management
          4. Optionally WebSearch for 'React best practices 2025'

          Create:
          - .claude/skills/guild/frontend-patterns/DOCS.md with all fetched documentation

          Report:
          - Documentation fetching success/failure
          - Topics covered
          - Version information",
  subagent_type: "general-purpose",
  description: "React documentation"
})
Task({
  prompt: "ULTRATHINK: Fetch Express documentation using Context7.

          Tasks:
          1. Resolve library ID: mcp__context7__resolve-library-id 'express'
          2. Fetch core docs: mcp__context7__get-library-docs '/expressjs/express'
          3. Fetch specific topics: routing, middleware, error handling
          4. Optionally WebSearch for 'Express best practices 2025'

          Create:
          - .claude/skills/guild/backend-integration/DOCS.md with all fetched documentation

          Report:
          - Documentation fetching success/failure
          - Topics covered
          - Version information",
  subagent_type: "general-purpose",
  description: "Express documentation"
})
// Add more parallel Task calls for other library skills...
```

**MANDATORY Requirements**:
1. ALL documentation fetching tasks in ONE message
2. Use parallel Task tool invocations for all library skills
3. Each Task uses Context7 to fetch library documentation
4. Create DOCS.md files for each library skill
5. Wait for ALL documentation tasks to complete

**DOCS.md Structure**:
```markdown
# [Library] Documentation

**Library**: [Library Name]
**Version**: [Detected from package.json]
**Last Updated**: [Timestamp]

## Core Concepts
[Fetched from Context7]

## API Reference
[Fetched from Context7 with specific topic]

## Best Practices
[Optionally fetched from WebSearch: "[Library] best practices 2025"]

## Project Usage
[How this project uses the library - discovered patterns]
```

4. **Create Optional Resource Files**:
- `REFERENCE.md` - Detailed API specs and references
- `EXAMPLES.md` - Code examples and patterns
- `scripts/` - Validation or utility scripts

5. **Link skills together**:
   - Add `related_skills` references between new and existing skills
   - Create skill composition patterns
   - Document tech stack + pattern skill relationships

**Skill Creation Priority**:
1. **Major libraries/frameworks** (React, Express, etc.) → Tech Stack Skills
2. **Repeatable patterns** (API creation, state management) → Pattern Skills
3. **Testing approaches** → Testing Skills
4. **Integration protocols** → Integration Skills

**Skill Composition Examples**:
- `working-with-express` + `processing-api-requests` + `testing-express-endpoints`
- `working-with-react` + `managing-component-state` + `testing-react-components`
- `working-with-prisma` + `processing-database-operations` + `testing-database-queries`

### Phase 4: Agent Creation (Reference ALL Skills)

**Create Agents for Domain Expertise**:

For identified domain areas requiring specialized knowledge, create agent files in `.claude/agents/guild/`:

1. **Scan ALL skills** (existing from Phase 1 + newly created from Phase 3):
   - Group skills by domain relevance
   - Identify which skills each specialist should reference
   - Include both existing and new skills

2. **Create agent file** in `.claude/agents/guild/`:

```yaml
---
name: [domain]-specialist
model: inherit
thinking_mode: ultrathink
description: "[Domain] specialist for [project-context]"
---

## Expertise

You are a [domain] specialist for [project-name] using [discovered-technologies].

## Relevant Skills

**ALWAYS review and apply these skills before working:**

### Core Skills (Existing)
- **.claude/skills/guild/[existing-skill-1]**: [When to apply]
- **.claude/skills/guild/[existing-skill-2]**: [When to apply]

### Project-Specific Skills (New)
- **.claude/skills/guild/[new-skill-1]**: [When to apply]
- **.claude/skills/guild/[new-skill-2]**: [When to apply]

**Usage**: Load applicable skills for your current task and follow their conventions.

## Project Context

[Discovered project-specific patterns and conventions]

## Capabilities

- [Capability-1]: [Description]
- [Capability-2]: [Description]

## Quality Standards

[Project-specific quality requirements]

## Skill Application Protocol

1. **Before starting work**: Review relevant skills listed above
2. **During work**: Apply skill patterns and conventions
3. **Composition**: Use multiple related skills together for complex tasks
4. **Anti-patterns**: Avoid pitfalls documented in skills
```

**Agent Creation Guidance**:
- Base on actual project needs
- **Reference ALL applicable skills** (existing + new)
- Group skills by usage context
- Embed project context
- Provide clear expertise boundaries
- Avoid overlapping specialists
- Include skill application instructions

### Phase 5: Guidance

**Display Resource Inventory** (never persist as file):

Present to user in conversation:

1. **Skill Inventory Summary**:
   - **Existing Skills** (from Phase 1): List reused skills
   - **New Skills** (from Phase 3): List created skills
   - **Skill Relationships**: Show how skills compose together
   - **Coverage Gaps**: Note any patterns still without skills

2. **Agent Inventory**:
   - List created agents with expertise areas
   - Show which skills each agent references
   - Highlight skill composition patterns

3. **Selection Guidance**:
   - When to use skills directly vs agents
   - How to compose multiple skills
   - Skill-agent coordination patterns

4. **Usage Recommendations**:
   - How to leverage skill compositions
   - Agent skill application examples
   - Integration patterns

## Save Locations

**Skills** (Official Claude Code Format):
- Main skill: `.claude/skills/guild/[category]/SKILL.md`
- Documentation: `.claude/skills/guild/[category]/DOCS.md` (for library skills)
- Reference: `.claude/skills/guild/[category]/REFERENCE.md` (optional)
- Examples: `.claude/skills/guild/[category]/EXAMPLES.md` (optional)

**Agents**:
- Agent files: `.claude/agents/guild/[agent-name].md`

**Skill Directory Structure**:
```
.claude/skills/guild/
├── frontend-patterns/
│   ├── SKILL.md          # Main: working-with-react
│   ├── DOCS.md           # React documentation (Context7)
│   ├── REFERENCE.md      # API references
│   └── EXAMPLES.md       # Code examples
├── backend-integration/
│   ├── SKILL.md          # Main: working-with-express
│   └── DOCS.md           # Express documentation
└── testing-patterns/
    └── SKILL.md          # Main: testing-express-endpoints
```

**Do Not Create**:
- Analysis reports or discovery documents
- Recommendations files
- Usage guides as files
- Temporary or intermediate files

Present all findings in conversation only.

## User-Specified Additions

If user requests specific agents or skills:
1. Perform discovery first to understand project
2. Create evidence-based resources from discovery
3. Add user-requested resources to the inventory
4. Ensure consistency with discovered patterns

## Mandatory Checklist

Before completing setup execution, verify:

### Phase 2: Parallel Discovery (MANDATORY)
- ✅ Spawned parallel Task tool invocations for ALL discovery in ONE message
- ✅ Project structure analysis via Task tool
- ✅ Tech stack detection via Task tool
- ✅ Pattern identification via Task tool
- ✅ ALL discovery tasks completed before proceeding to Phase 3

### Phase 3: Skill Creation
- ✅ Identified skills to create based on gap analysis
- ✅ Created SKILL.md files with official format (gerund naming)
- ✅ Skills under 500 lines with progressive loading structure
- ✅ Tech stack skills AND pattern skills created

### Phase 3: Documentation Fetching (If Library Skills Created)
- ✅ Spawned parallel Task tool invocations for ALL documentation fetching in ONE message
- ✅ Used Context7 to fetch library documentation
- ✅ Created DOCS.md files for tech stack skills
- ✅ ALL documentation tasks completed

### Phase 4: Agent Creation
- ✅ Created agents referencing ALL relevant skills (existing + new)
- ✅ Agents include "Relevant Skills" sections
- ✅ Agent files saved to `.claude/agents/guild/`

### Phase 5: Guidance & Approval
- ✅ Resource inventory presented (displayed, not persisted)
- ✅ Usage guidance provided (displayed, not persisted)
- ✅ Only skill and agent files persisted
- ✅ User approval obtained

## Success Criteria

**Setup Considered Successful When**:
- ✅ Phase 2: Parallel discovery executed (ALL tasks in ONE message)
- ✅ Phase 3: Skills created with official SKILL.md format
- ✅ Phase 3: Documentation fetched in parallel (if library skills)
- ✅ Phase 4: Agents created referencing all skills
- ✅ Phase 5: Guidance provided and user approval obtained
- ✅ Only codebase files (skills, agents) persisted

**Anti-Patterns to Avoid**:
- ❌ Sequential Task invocations across multiple messages
- ❌ Using direct tools (Read, Grep, Glob) instead of Task tool for discovery
- ❌ Skipping parallel documentation fetching for library skills
- ❌ Creating skills without discovering from project first
- ❌ Persisting analysis reports or discovery documents

## Summary

**Setup command REQUIRES**:
1. **Parallel discovery** (Phase 2) - ALL discovery tasks in ONE message
2. **Skill creation** (Phase 3) - Official SKILL.md format with docs
3. **Parallel documentation** (Phase 3) - ALL library docs in ONE message
4. **Agent creation** (Phase 4) - Referencing all skills
5. **User approval** (Phase 5) - Final authority

**NOT ADVISORY - MANDATORY**: Parallel subagent spawning is a core architectural requirement.

{SHARED_INTELLIGENCE}

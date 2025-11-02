# /guild:setup

---
name: guild-setup
model: inherit
thinking_mode: ultrathink
description: "Discover project patterns and create custom skills and specialists with MANDATORY parallel subagent execution"
---

## ⚠️ CRITICAL: MANDATORY Execution Architecture

**THIS COMMAND ENFORCES 4 CORE REQUIREMENTS + 1 CONDITIONAL PATTERN**

### Core Requirements (MANDATORY for ALL discovery workflows)
1. **Subagent Delegation**: Task tool for ALL discovery phases
2. **Parallel Execution**: ALL discovery tasks in ONE message
3. **ULTRATHINK Keyword**: "ULTRATHINK: " keyword in all Task prompts
4. **Fresh Context**: Context7/WebSearch for library documentation

### Conditional Pattern (Discovery-specific)
5. **Environment Observation**: Heuristic project reconnaissance for context-aware skill creation

**Not applicable to discovery workflows**: Final Validation (task completion only), Error Recovery, Risk Categorization, Iterative Research, Checkpoints, Reflection, Predictive Intelligence

You MUST spawn parallel Task tool invocations for ALL discovery phases:
- ✅ Project discovery → PARALLEL Task calls in ONE message
- ✅ Tech stack analysis → PARALLEL Task calls in ONE message
- ✅ Environment observation → PARALLEL with discovery
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
  prompt: "ULTRATHINK: Perform heuristic environment observation (Req 9).

          Tasks:
          1. Detect package ecosystems (npm, pip, gem, go, etc.)
          2. Identify runtime environments (Node version, Python version, etc.)
          3. Detect containerization (Docker, Kubernetes)
          4. Check CI/CD configurations (.github, .gitlab-ci, etc.)
          5. Identify development tools (linters, formatters, test runners)

          Report:
          - Package ecosystem details
          - Runtime environment capabilities
          - Container/orchestration status
          - CI/CD pipeline presence
          - Development tooling inventory",
  subagent_type: "Explore",
  description: "Environment observation"
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
1. ALL Task calls MUST be in ONE message (4 discovery tasks: structure, tech stack, environment, patterns)
2. NO sequential Task invocations across messages
3. Use `subagent_type: "Explore"` for codebase analysis
4. Each Task MUST have clear objectives and reporting requirements
5. Include environment observation (Req 9) for context-aware skill creation
6. Wait for ALL parallel tasks to complete before Phase 3

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

**MANDATORY: Use Heredoc for File Creation (Req 12)**:
```bash
# Correct: Heredoc with single-quoted delimiter
cat > .claude/skills/guild/[category]/SKILL.md <<'EOF'
---
name: working-with-react
description: "Use when working with React in this project..."
---
[Content here]
EOF

# Incorrect: Echo or redirection - DO NOT USE
echo "content" > file.md  # ❌ FORBIDDEN
```

**SKILL.md Structure (Official Format with Metadata)**:

Skills use metadata-rich frontmatter to enable intelligent skill selection:

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
# GUILD ENHANCEMENT FIELDS (Optional) - Metadata for skill selection
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

**MANDATORY: Use Heredoc for File Creation (Req 12)**:
```bash
# Correct: Heredoc with single-quoted delimiter
cat > .claude/agents/guild/[domain]-specialist.md <<'EOF'
---
name: [domain]-specialist
model: inherit
thinking_mode: ultrathink
description: "[Domain] specialist for [project-context]"
---
[Content here]
EOF
```

**Agent File Structure**:
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

**Skills are automatically discovered by Claude Code** based on task context. This agent works with the following domain-specific skills:

### Core Skills (Existing)
- **.claude/skills/guild/[existing-skill-1]**: [When to apply]
- **.claude/skills/guild/[existing-skill-2]**: [When to apply]

### Project-Specific Skills (New)
- **.claude/skills/guild/[new-skill-1]**: [When to apply]
- **.claude/skills/guild/[new-skill-2]**: [When to apply]

**Note**: Skills listed above will be automatically applied when relevant to your work.

## Project Context

[Discovered project-specific patterns and conventions]

## Capabilities

- [Capability-1]: [Description]
- [Capability-2]: [Description]

## Quality Standards

[Project-specific quality requirements]
```

**Agent Creation Guidance**:
- Base on actual project needs
- **Reference relevant skills** (existing + new) to document domain coverage
- Group skills by usage context
- Embed project context
- Provide clear expertise boundaries
- Avoid overlapping specialists

### Phase 5: Project Configuration & Guidance

**Step 1: Create Project CLAUDE.md (If Test Frameworks Detected)**

If Phase 2 tech stack analysis detected testing frameworks:

1. **Extract Test Framework Information**:
   - Test framework names (Jest, Vitest, Pytest, Mocha, etc.)
   - Package manager (npm, pip, gem, etc.)
   - Typical test commands based on detected frameworks

2. **Create CLAUDE.md with TDD Guidance**:

**MANDATORY: Use Heredoc for File Creation**:
```bash
# Create project CLAUDE.md with TDD guidance
cat > CLAUDE.md <<'EOF'
# Project Development Guidelines

This file provides guidance to Claude Code when working with this codebase.

## Test-Driven Development (Optional)

This project has testing infrastructure. When implementing verifiable features, consider using test-driven development:

1. **Write failing test** that defines expected behavior
2. **Implement minimal code** to make test pass
3. **Refactor** while maintaining green tests
4. **Expand** with edge case tests

This is an Anthropic-recommended workflow for testable changes.

### Testing Frameworks Detected

- **[Framework Names]**: [Jest|Vitest|Pytest|Mocha|etc.]

### Test Commands

Run these commands to execute tests:

```bash
# Run all tests
[npm test | pytest | bundle exec rspec | go test ./... | cargo test]

# Run tests in watch mode (if supported)
[npm test -- --watch | pytest --watch | etc.]

# Run tests with coverage
[npm run test:coverage | pytest --cov | etc.]
```

### When to Use TDD

✅ **Recommended for**:
- New features with clear specifications
- Bug fixes with reproducible test cases
- API development and integration work
- Refactoring existing code

❌ **Not necessary for**:
- Exploratory prototyping
- Simple documentation updates
- UI polish and styling tweaks
- Configuration changes

### TDD Workflow

For features that benefit from TDD:

1. **Red**: Write a test that fails
2. **Green**: Write minimal code to pass the test
3. **Refactor**: Improve code while keeping tests green
4. **Repeat**: Add more tests for edge cases

This ensures correctness, prevents regressions, and documents expected behavior.

---

*This file was generated by Guild setup. Modify as needed for your project.*
EOF
```

3. **Customize Test Commands**:
   - Node.js (npm): `npm test`, `npm run test:watch`, `npm run coverage`
   - Python (pytest): `pytest`, `pytest --watch`, `pytest --cov`
   - Ruby (RSpec): `bundle exec rspec`, `bundle exec rspec --format documentation`
   - Go: `go test ./...`, `go test -v ./...`, `go test -cover ./...`
   - Rust: `cargo test`, `cargo test -- --nocapture`, `cargo tarpaulin`

4. **Inform User**:
   - Display message: "Created CLAUDE.md with TDD guidance (testing frameworks detected)"
   - Note that TDD is optional and can be enabled/disabled by editing CLAUDE.md
   - Mention that this follows Anthropic's recommended workflow for testable changes

**If NO Test Frameworks Detected**:
- Skip CLAUDE.md creation
- Inform user that no testing infrastructure was detected
- Suggest adding tests for better development workflow

**Step 2: Display Resource Inventory** (never persist as file):

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

3. **Usage Guidance**:
   - **Skills**: Automatically discovered and applied by Claude Code based on task context
   - **Agents**: Use via `/guild` workflow - delegate domain-specific workstreams to relevant agents
   - Agents automatically benefit from related skills in their domain

## Save Locations

**Skills** (Official Claude Code Format):
- Main skill: `.claude/skills/guild/[category]/SKILL.md`
- Documentation: `.claude/skills/guild/[category]/DOCS.md` (for library skills)
- Reference: `.claude/skills/guild/[category]/REFERENCE.md` (optional)
- Examples: `.claude/skills/guild/[category]/EXAMPLES.md` (optional)

**Agents**:
- Agent files: `.claude/agents/guild/[agent-name].md`

**Project Configuration** (Optional):
- Project guidelines: `CLAUDE.md` (created only if test frameworks detected)

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
- ✅ Spawned parallel Task tool invocations for ALL discovery in ONE message (Req 1, 2)
- ✅ Project structure analysis via Task tool (Req 1)
- ✅ Tech stack detection via Task tool (Req 1)
- ✅ Environment observation via Task tool (Req 9)
- ✅ Pattern identification via Task tool (Req 1)
- ✅ ALL discovery tasks use "ULTRATHINK: " keyword (Req 3)
- ✅ ALL discovery tasks completed before proceeding to Phase 3

### Phase 3: Skill Creation
- ✅ Identified skills to create based on gap analysis
- ✅ Created SKILL.md files with official format (gerund naming)
- ✅ Files created using appropriate tools (Write/Edit)
- ✅ Skills under 500 lines with progressive loading structure
- ✅ Tech stack skills AND pattern skills created

### Phase 3: Documentation Fetching (If Library Skills Created)
- ✅ Spawned parallel Task tool invocations for ALL documentation fetching in ONE message (Core Req 1, 2)
- ✅ Used Context7 to fetch library documentation (Core Req 4 - Fresh Context)
- ✅ WebSearch for best practices when needed (Core Req 4 - Fresh Context)
- ✅ Created DOCS.md files with documentation content
- ✅ ALL documentation tasks completed

### Phase 4: Agent Creation
- ✅ Created agents referencing ALL relevant skills (existing + new)
- ✅ Agents include "Relevant Skills" sections
- ✅ Agent files created and saved to `.claude/agents/guild/`

### Phase 5: Project Configuration & Guidance
- ✅ If test frameworks detected: Created CLAUDE.md with TDD guidance
- ✅ If test frameworks detected: Informed user about TDD optional workflow
- ✅ If NO test frameworks: Informed user (no CLAUDE.md created)
- ✅ Resource inventory presented (displayed, not persisted)
- ✅ Usage guidance provided (displayed, not persisted)
- ✅ Only skill, agent, and CLAUDE.md files persisted
- ✅ User approval obtained

## Success Criteria

**Setup Considered Successful When**:
- ✅ Phase 2: Parallel discovery executed (ALL tasks in ONE message)
- ✅ Phase 3: Skills created with official SKILL.md format
- ✅ Phase 3: Documentation fetched in parallel (if library skills)
- ✅ Phase 4: Agents created referencing all skills
- ✅ Phase 5: CLAUDE.md created if tests detected (optional TDD guidance)
- ✅ Phase 5: Guidance provided and user approval obtained
- ✅ Only codebase files (skills, agents, CLAUDE.md) persisted

**Anti-Patterns to Avoid**:
- ❌ Sequential Task invocations across multiple messages
- ❌ Using direct tools (Read, Grep, Glob) instead of Task tool for discovery
- ❌ Skipping parallel documentation fetching for library skills
- ❌ Creating skills without discovering from project first
- ❌ Persisting analysis reports or discovery documents

## Summary

**Setup command enforces 4 CORE REQUIREMENTS + 1 CONDITIONAL PATTERN**:

### Core Requirements (MANDATORY for ALL discovery workflows)
1. **Subagent Delegation**: Task tool for ALL discovery phases
2. **Parallel Execution**: ALL tasks in ONE message
3. **ULTRATHINK Keyword**: "ULTRATHINK: " keyword in all Task prompts
4. **Fresh Context**: Context7/WebSearch for library documentation

### Conditional Pattern (Discovery-specific)
5. **Environment Observation**: Heuristic reconnaissance for context-aware skill creation

**Enhanced Discovery Flow**:
1. **Parallel discovery** (Phase 2) - 4 tasks: structure + tech stack + environment + patterns
2. **Skill creation** (Phase 3) - Official SKILL.md format with appropriate file creation tools
3. **Parallel documentation** (Phase 3) - Context7/WebSearch for fresh library docs
4. **Agent creation** (Phase 4) - Referencing all skills (existing + new)
5. **User approval** (Phase 5) - Final authority

**ARCHITECTURAL MANDATE**: 4 core requirements are mandatory for ALL discovery workflows. Environment Observation is conditionally applied for context-aware skill creation.

{SHARED_INTELLIGENCE}

# /guild:setup

---
name: guild-setup
model: inherit
thinking_mode: ultrathink
description: "Discover project patterns and create custom skills and specialists"
---

## Purpose

Initialize the Guild system by:
1. **Discovering project patterns** - Analyze codebase for repeatable procedures and conventions
2. **Creating skills** - Document patterns as lightweight, metadata-rich skill definitions
3. **Creating agents** - Generate specialists for domain expertise and complex coordination
4. **Providing guidance** - Explain when to use each resource

## Process

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

### Phase 2: Project Discovery & Tech Stack Analysis

**Analyze Project Structure**:
- File organization and architecture
- Build systems and tooling
- Testing approaches
- Documentation patterns

**Tech Stack Detection**:
```bash
# Detect technologies from package managers (parallel execution)
- Read package.json (Node.js/npm)
- Read requirements.txt or pyproject.toml (Python)
- Read go.mod (Go)
- Read Gemfile (Ruby)
- Read composer.json (PHP)
- Read pom.xml or build.gradle (Java)
```

**Extract Major Libraries**:
- Frontend: React, Vue, Svelte, Angular, etc.
- Backend: Express, Fastify, NestJS, Django, Flask, etc.
- ORMs: Prisma, TypeORM, Mongoose, SQLAlchemy, etc.
- Testing: Jest, Vitest, Pytest, Mocha, etc.
- Build Tools: Vite, Webpack, esbuild, Rollup, etc.

**Identify Patterns**:
- Repeatable procedures worth documenting
- Project-specific conventions and approaches
- Integration protocols and standards
- Code quality patterns
- Common workflows

**Pattern Gap Analysis**:
- Compare discovered patterns to existing skills
- Identify patterns WITHOUT skill coverage
- Identify libraries WITHOUT skills (for tech stack skills)
- Mark patterns that can reuse existing skills
- Note opportunities for skill relationships

**Discovery Methods**:
- Parallel tool execution (Glob, Grep, Read)
- Configuration file analysis
- Documentation review
- Codebase pattern mining
- Tech stack extraction

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

3. **For Tech Stack Skills - Create Documentation Resources**:

**If skill is library-specific** (e.g., working-with-react):

```bash
# Use Context7 to fetch library documentation
mcp__context7__resolve-library-id "[library-name]"
# Example: "react" → /facebook/react

mcp__context7__get-library-docs "/[org]/[project]" topic="[relevant-topic]"
# Example: /facebook/react, topic="hooks"

# Create DOCS.md with fetched documentation
# Location: .claude/skills/guild/[category]/DOCS.md
```

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

## Success Criteria

**Completion When**:
- ✅ Existing skills inventoried (Phase 1)
- ✅ Project patterns discovered and gap analysis performed (Phase 2)
- ✅ **New skills created ONLY for patterns without existing coverage** (Phase 3)
- ✅ **Skill relationships established** (new ↔ existing via `related_skills`)
- ✅ **Agents created referencing ALL skills** (existing + new) (Phase 4)
- ✅ Resource inventory with composition patterns presented (displayed, not persisted) (Phase 5)
- ✅ Usage guidance with skill composition examples provided (displayed, not persisted)
- ✅ User approval obtained

**Remember**:
- **Reuse existing skills** - don't duplicate patterns
- **Compose skills** - link related skills together
- **Agents use ALL skills** - reference both existing and new
- Skills describe WHAT/WHEN, not HOW
- All resources discoverable via metadata
- No hardcoded skill sets - discover from project
- Only persist skill and agent files

{SHARED_INTELLIGENCE}

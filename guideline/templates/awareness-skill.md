---
name: guild-project-patterns
description: Apply project-specific conventions from .claude/skills/guild/. Use when working on features, refactoring, or following project standards. Guild skills follow official Claude Code SKILL.md format with progressive loading (metadata, instructions, documentation resources).
model: inherit
tools: Read, Bash
---

## Purpose

This project uses **Guild-managed skills** following the official Claude Code SKILL.md format with progressive loading architecture.

Guild skills contain:
- **Level 1 (Metadata)**: Always-loaded skill metadata in YAML frontmatter
- **Level 2 (Instructions)**: Main SKILL.md content with patterns and conventions
- **Level 3 (Resources)**: On-demand DOCS.md, REFERENCE.md, EXAMPLES.md files

## Skill Structure (Official Format)

Each skill is organized as:
```
.claude/skills/guild/
├── [category]/
│   ├── SKILL.md          # Main skill (metadata + instructions)
│   ├── DOCS.md           # Library documentation (optional)
│   ├── REFERENCE.md      # API references (optional)
│   └── EXAMPLES.md       # Code examples (optional)
```

## How to Use Guild Skills

### 1. Discover Available Skills

```bash
# List skill categories
ls .claude/skills/guild/

# Example categories:
# - frontend-patterns/    (React, Vue, component patterns)
# - backend-integration/  (Express, API patterns)
# - testing-patterns/     (Jest, testing protocols)
# - library-specific/     (Framework-specific skills)
```

### 2. Read Skills When Relevant

**For library/framework work:**
```bash
# Example: Working with React
cat .claude/skills/guild/frontend-patterns/SKILL.md

# If skill references documentation:
cat .claude/skills/guild/frontend-patterns/DOCS.md
```

**For pattern application:**
```bash
# Example: API endpoint creation
cat .claude/skills/guild/backend-integration/SKILL.md
```

### 3. Application Modes

**Direct Application** (simple tasks):
- Read SKILL.md for pattern knowledge
- Apply project conventions from skill content
- Reference DOCS.md for library documentation
- No delegation needed

**Agent Integration** (complex tasks):
- Guild agents reference relevant skills automatically
- Use `/guild` command for specialist coordination
- Agents apply skill patterns to their work

**Subagent Reference** (ad-hoc delegation):
```javascript
Task({
  prompt: "Implement user profile component.
          Reference: .claude/skills/guild/frontend-patterns/SKILL.md
          Apply React conventions from that skill.",
  subagent_type: "general-purpose"
})
```

## Skill Types

Guild creates two types of skills:

**1. Tech Stack Skills** (library/framework-specific):
- **Format**: "working-with-[library]" (gerund naming)
- **Examples**: working-with-react, working-with-express, working-with-prisma
- **Includes**: Library documentation (DOCS.md from Context7), project conventions
- **When to Use**: Working with specific libraries or frameworks

**2. Pattern Skills** (project conventions):
- **Format**: "processing-[pattern]", "testing-[component]"
- **Examples**: processing-api-requests, managing-component-state
- **Includes**: Project-specific patterns and best practices
- **When to Use**: Following project conventions and patterns

## Progressive Loading

Skills use official Claude Code progressive loading:

**Metadata (always loaded)**:
- YAML frontmatter with name, description, category
- Enables skill discovery without loading full content

**Instructions (load when relevant)**:
- Main SKILL.md content
- Pattern descriptions, conventions, anti-patterns
- Keep under 500 lines

**Resources (on-demand)**:
- DOCS.md: Library documentation (fetched from Context7)
- REFERENCE.md: Detailed API specs
- EXAMPLES.md: Code examples
- Load only when needed for detailed information

## Integration

**Skills work everywhere:**
- ✅ Claude Code discovers them autonomously (via metadata)
- ✅ Guild workflow presents them (`/guild` command)
- ✅ Agents reference them in prompts
- ✅ Subagents can reference them in task descriptions
- ✅ Official Claude Code SKILL.md format

## Creating New Skills

Use `/guild:setup` to:
- Analyze project and detect tech stack
- Create library-specific skills with documentation
- Document project patterns as skills
- Fetch library docs via Context7
- Organize skills by category

## When to Use `/guild` Command

**Use `/guild` for:**
- Complex multi-domain features
- Tasks needing specialist coordination
- Architectural changes
- Full verification workflow

**Direct skill application for:**
- Simple pattern application
- Library-specific guidance
- Quick convention checks

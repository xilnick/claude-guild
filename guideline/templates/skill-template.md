---
# ============================================================================
# CLAUDE CODE NATIVE FIELDS (Official format - REQUIRED)
# ============================================================================
name: working-with-[library]  # Gerund form: working-with, processing, testing, managing
description: "Use when working with [Library/Pattern] in this project. Apply for [use-cases]. Includes project-specific conventions, best practices, and common pitfalls."

# ============================================================================
# CLAUDE CODE OPTIONAL FIELDS
# ============================================================================
model: inherit  # Uses user's selected model
tools: Read, Write, Edit, Grep, Glob, Bash  # Optional: Comma-separated list to restrict tools

# ============================================================================
# GUILD ENHANCEMENT FIELDS (Optional - enable advanced selection)
# ============================================================================
category: [frontend-patterns|backend-integration|testing-patterns|library-specific]

applicability:
  file_patterns: ["[path-pattern-1]", "[path-pattern-2]"]  # Where skill applies
  technologies: ["[tech-1]", "[tech-2]"]  # Tech stack relevance
  task_types: ["[task-type-1]", "[task-type-2]"]  # Task classifications

related_skills: ["[skill-1]", "[skill-2]"]  # Complementary skills
related_agents: ["[agent-1]"]  # Relevant specialist agents
---

<!--
OFFICIAL CLAUDE CODE SKILL FORMAT
This is SKILL.md - keep under 500 lines for optimal progressive loading
Move detailed content to: DOCS.md, REFERENCE.md, EXAMPLES.md
-->

## Pattern Description

**What**: [Brief description of what this pattern represents]

**When**: [Clear guidance on when this pattern applies]

**Context**: [Situations where this skill is most relevant]

## Project-Specific Conventions

[Document the discovered project-specific approaches, conventions, and patterns]

### [Convention Category 1]
- [Specific convention or pattern]
- [Usage context and rationale]

### [Convention Category 2]
- [Specific convention or pattern]
- [Usage context and rationale]

## Common Pitfalls

### ❌ [Anti-Pattern 1]
**Problem**: [Description of the anti-pattern]
**Why It Fails**: [Explanation of issues]
**Better Approach**: [Recommended alternative]

### ❌ [Anti-Pattern 2]
**Problem**: [Description of the anti-pattern]
**Why It Fails**: [Explanation of issues]
**Better Approach**: [Recommended alternative]

## Related Resources

### Related Skills
- **[related-skill-1]**: [Brief description of relationship]
- **[related-skill-2]**: [Brief description of relationship]

### Related Agents
- **[related-agent-1]**: [When to involve this specialist]

### External Resources
- [Relevant documentation or references]

## Examples (Optional)

[Brief examples of pattern application - keep minimal and illustrative]

## Notes

[Any additional context, edge cases, or considerations]

---

## Progressive Loading Resources (Level 3)

**These files are optional and loaded on-demand:**

### DOCS.md (For Library/Framework Skills)
Create this file to store library documentation fetched from external documentation sources.

```markdown
# [Library] Documentation

**Library**: [Library Name]
**Version**: [Detected from package.json]
**Last Updated**: [Timestamp]

## Core Concepts
[Documentation from external sources]

## API Reference
[Specific APIs relevant to project usage]

## Best Practices
[Latest patterns from current research]

## Project-Specific Usage
[How this project uses the library]
```

### REFERENCE.md (Optional)
Detailed API specifications, migration guides, advanced patterns.

### EXAMPLES.md (Optional)
Code examples and usage patterns specific to the project.

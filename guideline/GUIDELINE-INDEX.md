# Guild System - Guideline Index

## Document Organization

The Guild system documentation is organized into four main categories: **Philosophy**, **Requirements**, **Examples**, and **Intelligence**.

## Philosophy & Core Concepts

### `guide/framework.md` - Core Framework
**Purpose**: Defines the fundamental philosophy and architecture of the Guild system.

**Key Concepts**:
- Discovery over prescription
- Skills as pattern knowledge
- Advisory guidance principles
- Resource selection model
- Delegation and orchestration guidance

**When to Read**: Start here to understand Guild's philosophy and design principles.

---

### `guide/recommendations.md` - Opus 4.1 Optimization
**Purpose**: Technical guidance for optimizing Claude Opus 4.1 performance.

**Key Concepts**:
- XML structure patterns
- Lost in Middle mitigation
- Specialist creation templates
- Parallel execution guidance
- Verification frameworks

**When to Read**: Reference for technical optimization patterns when creating templates or agents.

---

## Requirements Documents

### `guide/base-requirements.md` - General System Requirements ⭐ NEW
**Purpose**: Foundational requirements for the entire Guild system.

**Key Concepts**:
- Three-layer architecture (Skills → Agents → Workflows)
- Skill system requirements
- Agent integration requirements
- Workflow execution requirements
- Skill composition patterns
- Interoperability requirements
- File persistence protocol
- Quality and verification standards

**When to Read**: Essential reading for understanding system-wide requirements and how components integrate.

---

### `guide/workflow-requirements.md` - Workflow-Specific Requirements ✨ UPDATED
**Purpose**: Requirements specific to the workflow command (`/guild`).

**Key Concepts**:
- Skill-first execution pattern
- Resource discovery and selection
- Skill application guidance
- Agent delegation criteria
- Optimization recommendations (parallel execution)
- MANDATORY ULTRATHINK keyword for all Task invocations
- Communication standards

**When to Read**: When implementing or modifying the workflow command.

**Status**: **Recently updated** to align with advisory framework and skills-first approach.

---

### `guide/setup-requirements.md` - Setup-Specific Requirements
**Purpose**: Requirements for the setup command (`/guild:setup`).

**Key Concepts**:
- Discovery process
- Pattern analysis
- Skill creation
- Agent creation
- Reporting guidelines

**When to Read**: When implementing or modifying the setup command.

---

## Skills System

### `guide/skills-system-guide.md` - Comprehensive Skills Guide ⭐ NEW
**Purpose**: Complete guide to the Guild skills system.

**Key Concepts**:
- What skills are and why skills-first matters
- Three-layer architecture details
- Skill structure (metadata + content)
- Skill discovery and creation process
- Usage patterns (workflows and agents)
- Skill composition strategies
- Setup and workflow integration
- Best practices and advanced patterns

**When to Read**: Essential reading for understanding how skills work and how to use them effectively.

---

### `templates/skill-template.md` - Skill Template
**Purpose**: Template for creating new skills.

**Structure**:
- Metadata frontmatter (applicability, confidence scoring, relationships)
- Pattern description (WHAT/WHEN)
- Project-specific conventions
- Common pitfalls and anti-patterns
- Related resources
- Implementation checklist

**When to Use**: When manually creating new skills or understanding skill structure.

---

## Example Skills

### `examples/api-endpoint-creation.md` ⭐ NEW
**Domain**: Backend integration
**Technologies**: Express, Fastify, Koa, NestJS
**Demonstrates**: Complete backend skill with RESTful API patterns, error handling, validation

---

### `examples/react-component-architecture.md` ⭐ NEW
**Domain**: Frontend patterns
**Technologies**: React, TypeScript, Tailwind
**Demonstrates**: Complete frontend skill with component design, state management, TypeScript patterns

---

### `examples/test-creation-protocol.md` ⭐ NEW
**Domain**: Testing patterns
**Technologies**: Jest, Vitest, React Testing Library, Playwright
**Demonstrates**: Complete testing skill with unit/integration/E2E patterns, mocking strategies

---

## Intelligence Modules

### `core/shared-intelligence.md` - Reusable Patterns ✨ REFACTORED
**Purpose**: Reusable implementation patterns embedded in command templates.

**Key Concepts**:
- Skill metadata and content patterns
- Resource selection guidance
- Agent creation patterns
- Optimization recommendations
- File creation guidelines
- Task tool usage patterns
- Quality and verification practices

**When to Read**: Reference for reusable patterns when implementing commands or agents.

**Status**: **Significantly refactored** from 540+ lines of prescriptive rules to 285 lines of advisory guidance.

---

## Command Templates

### `templates/workflow-command.md` - Workflow Template
**Purpose**: Template for the main workflow command (`/guild`).

**Placeholders**:
- `{SKILL_INVENTORY}`: Dynamically generated skill inventory
- `{AGENT_INVENTORY}`: Dynamically generated agent roster
- `{SHARED_INTELLIGENCE}`: Embedded shared intelligence patterns

**Content**: Advisory resource presentation, selection guidance, execution patterns, quality standards.

---

### `templates/setup-command.md` - Setup Template
**Purpose**: Template for the setup command (`/guild:setup`).

**Placeholders**:
- `{SHARED_INTELLIGENCE}`: Embedded shared intelligence patterns

**Content**: Discovery process, skill creation guidance, agent creation patterns, reporting guidelines.

---

## Document Relationships

### Information Flow

```
Philosophy & Principles
├─ framework.md (Core philosophy)
├─ recommendations.md (Technical optimization)
└─ skills-system-guide.md (Skills architecture)
        │
        ▼
Requirements
├─ base-requirements.md (System-wide requirements)
├─ workflow-requirements.md (Workflow-specific)
└─ setup-requirements.md (Setup-specific)
        │
        ▼
Implementation
├─ core/shared-intelligence.md (Reusable patterns)
├─ templates/workflow-command.md (Workflow implementation)
├─ templates/setup-command.md (Setup implementation)
└─ templates/skill-template.md (Skill structure)
        │
        ▼
Examples
├─ examples/api-endpoint-creation.md
├─ examples/react-component-architecture.md
└─ examples/test-creation-protocol.md
```

### Dependency Matrix

| Document | Extends | References |
|----------|---------|------------|
| `framework.md` | - | - |
| `recommendations.md` | - | - |
| `base-requirements.md` | `framework.md` | `recommendations.md` |
| `workflow-requirements.md` | `base-requirements.md` | `framework.md`, `recommendations.md`, `shared-intelligence.md` |
| `setup-requirements.md` | `base-requirements.md` | `framework.md` |
| `skills-system-guide.md` | `base-requirements.md` | `framework.md`, skill examples |
| `shared-intelligence.md` | `base-requirements.md` | `framework.md` |
| `workflow-command.md` | `workflow-requirements.md` | `shared-intelligence.md` |
| `setup-command.md` | `setup-requirements.md` | `shared-intelligence.md` |

## Reading Paths

### For New Users
1. `framework.md` - Understand the philosophy
2. `skills-system-guide.md` - Learn the skills system
3. `base-requirements.md` - Understand system requirements
4. Review example skills - See skills in practice

### For Implementation
1. `base-requirements.md` - System-wide requirements
2. `workflow-requirements.md` OR `setup-requirements.md` - Command-specific requirements
3. `shared-intelligence.md` - Reusable patterns
4. Relevant template - Command structure
5. `recommendations.md` - Optimization patterns

### For Creating Skills
1. `skills-system-guide.md` - Skills system overview
2. Review example skills - Understand structure
3. `templates/skill-template.md` - Use template
4. `base-requirements.md` § Skill System Requirements

### For Creating Agents
1. `base-requirements.md` § Agent Requirements
2. `skills-system-guide.md` § Agent Usage
3. Review example skills - Understand skill references
4. `shared-intelligence.md` § Agent Creation Guidance

## Recent Changes

### Major Updates (2025-10-17)

**New Documents**:
- ⭐ `base-requirements.md` - Foundational system requirements
- ⭐ `skills-system-guide.md` - Comprehensive skills guide
- ⭐ `examples/api-endpoint-creation.md` - Backend skill example
- ⭐ `examples/react-component-architecture.md` - Frontend skill example
- ⭐ `examples/test-creation-protocol.md` - Testing skill example

**Major Refactors**:
- ✨ `workflow-requirements.md` - Transformed from prescriptive enforcement to advisory guidance
- ✨ `shared-intelligence.md` - Reduced from 540+ lines to 285 lines, advisory focus

**Philosophy Transformation**:
- ❌ OLD: Rigid, prescriptive, zero-tolerance enforcement
- ✅ NEW: Advisory, trust-based, skills-first, contextual

### Impact Summary

**Before**:
- Fragmented requirements
- Prescriptive enforcement language ("MANDATORY", "FORBIDDEN", "NEVER")
- Complex, rigid protocols
- Missing skills system documentation
- No concrete skill examples

**After**:
- Unified requirement hierarchy
- Advisory guidance language ("Recommended", "Consider", "Suggested")
- Flexible, context-based patterns
- Comprehensive skills system guide
- Three concrete skill examples
- Clear interoperability between skills, agents, workflows

## Consistency Principles

### Language Consistency

**MUST/REQUIRED**: Only for critical system constraints
- Skills MUST be presented in workflow
- Only codebase files MUST be persisted
- Agents MUST reference skills

**SHOULD/RECOMMENDED**: For strong guidance with flexibility
- Skills SHOULD inform execution
- Agents SHOULD apply skill patterns
- Workflows SHOULD present plans for complex tasks

**MAY/CONSIDER**: For optional optimization
- Skills MAY be composed
- Agents MAY be delegated to
- Parallel execution MAY improve performance

### Architectural Consistency

All documents align on:
1. **Skills-First**: Skills are the foundation
2. **Advisory**: Guidance over enforcement
3. **Trust**: Trust Claude Code's capabilities
4. **Context**: Context-based decisions
5. **Interoperability**: Skills, agents, workflows work together

## Summary

The Guild guideline system provides:
- **Philosophy**: Clear principles and design rationale
- **Requirements**: Structured, advisory requirements
- **Patterns**: Reusable implementation guidance
- **Examples**: Concrete skill demonstrations
- **Integration**: Clear interoperability between components

**Start with**: `framework.md` → `skills-system-guide.md` → `base-requirements.md`

**Philosophy**: Discovery over prescription. Skills as knowledge. Advisory over enforcement. Trust over constraint.

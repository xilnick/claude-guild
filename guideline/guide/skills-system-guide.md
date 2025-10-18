# Skills System Guide

## Overview

The Guild skills system is a **knowledge transfer mechanism** that enables project-specific patterns, conventions, and best practices to be discovered, documented, and reused by both agents and workflows.

## Core Concepts

### What are Skills?

**Skills are lightweight, metadata-rich pattern definitions** that describe:
- **WHAT**: What pattern or convention this represents
- **WHEN**: When to apply this pattern
- **WHERE**: File patterns, technologies, and contexts where applicable
- **NOT HOW**: Skills guide understanding, not execution

### Why Skills-First?

Traditional approaches either:
1. **Hard-code patterns** into agents (inflexible, difficult to update)
2. **Rely on discovery each time** (inefficient, inconsistent)
3. **Document in prose** (not machine-discoverable, hard to match to context)

**Skills solve this** by making patterns:
- **Discoverable**: Rich metadata enables intelligent selection
- **Reusable**: Both agents and workflows can reference them
- **Maintainable**: Update once, applies everywhere
- **Project-specific**: Captured from actual project discovery

## Architecture

### Three-Layer Design

```
┌─────────────────────────────────────────────────────┐
│  Layer 3: Workflows (Task Execution)                │
│  • Present skills to users                          │
│  • Guide skill selection                            │
│  • Apply skill patterns to tasks                    │
└─────────────────────────────────────────────────────┘
                         │ uses
                         ▼
┌─────────────────────────────────────────────────────┐
│  Layer 2: Agents (Domain Expertise)                 │
│  • Reference relevant skills                        │
│  • Apply skill patterns to work                     │
│  • Specialized domain coordination                  │
└─────────────────────────────────────────────────────┘
                         │ uses
                         ▼
┌─────────────────────────────────────────────────────┐
│  Layer 1: Skills (Pattern Knowledge)                │
│  • Metadata-rich definitions                        │
│  • WHAT/WHEN guidance                               │
│  • Project-specific conventions                     │
│  • Discoverable via applicability patterns          │
└─────────────────────────────────────────────────────┘
```

### Information Flow

```
Project Codebase
    │
    ├─ /guild:setup discovers patterns
    │       │
    │       ├─ Creates skills (.claude/skills/guild/)
    │       └─ Creates agents (.claude/agents/guild/)
    │
    ├─ install.js generates inventories
    │       │
    │       ├─ Scans skills directory
    │       ├─ Scans agents directory
    │       └─ Embeds inventories in commands
    │
    └─ /guild workflow executes tasks
            │
            ├─ Presents skill inventory
            ├─ Presents agent roster
            ├─ Applies skill patterns
            └─ Delegates to skill-aware agents
```

## Skill Structure

### Metadata (Frontmatter) - Official Claude Code Format with Guild Enhancements

Guild skills follow the **official Claude Code skill format** with optional enhancements:

```yaml
---
# ============================================================================
# CLAUDE CODE NATIVE FIELDS (Official format - REQUIRED)
# ============================================================================
name: api-endpoint-creation           # Unique identifier (REQUIRED)
description: "Use when creating REST API endpoints in Express, Fastify, Koa, or NestJS. Apply for backend route handlers, request validation, error handling, and response formatting patterns."  # REQUIRED for discovery

# ============================================================================
# CLAUDE CODE OPTIONAL FIELDS
# ============================================================================
model: inherit                        # Options: inherit, sonnet, opus, haiku
tools: Read, Write, Edit, Grep, Glob  # Comma-separated list to restrict tools

# ============================================================================
# GUILD ENHANCEMENT FIELDS (Optional - enable advanced selection)
# ============================================================================
category: backend-integration         # Guild classification
applicability:
  file_patterns:                      # Where it applies
    - "**/api/**/*.ts"
    - "**/routes/**/*.js"
  technologies:                       # Tech stack relevance
    - "express"
    - "fastify"
  task_types:                         # Task classification
    - "api-endpoint"
    - "route-handler"
related_skills:                       # Complementary skills
  - "error-handling"
  - "validation"
related_agents:                       # Relevant specialists
  - "backend-specialist"
---
```

**Field Classification**:
- **Claude Code Native (Required)**: `name`, `description`
- **Claude Code Native (Optional)**: `model`, `tools`
- **Guild Enhancements (Optional)**: `category`, `applicability`, `related_skills`, `related_agents`

**Compatibility**: Guild skills are valid Claude Code skills - they work with native Claude Code skill discovery while providing enhanced selection capabilities within the Guild system.

### Content Structure

```markdown
## Pattern Description
**What**: [Brief description of the pattern]
**When**: [When to apply this pattern]
**Context**: [Relevant contexts and situations]

## Project-Specific Conventions
[Discovered project approaches and standards]

## Common Pitfalls
### ❌ Anti-Pattern Name
**Problem**: [What the anti-pattern is]
**Why It Fails**: [Why it's problematic]
**Better Approach**: [Recommended alternative]

## Related Resources
### Related Skills
- **skill-name**: [Relationship description]

### Related Agents
- **agent-name**: [When to involve]

### External Resources
- [Documentation links, guides, references]
```

## Skill Discovery & Creation

### Discovery Process (`/guild:setup`)

**Phase 1: Parallel Project Discovery**
```javascript
// Discover in parallel:
- File structure and organization
- Technologies and frameworks
- Build systems and tooling
- Testing approaches
- Documentation patterns
- Coding conventions
- Integration protocols
```

**Phase 2: Pattern Identification**
```javascript
// Identify patterns worth documenting:
- Repeatable procedures
- Project-specific conventions
- Integration protocols
- Testing patterns
- Quality standards
- Common workflows
```

**Phase 3: Skill Creation**
```javascript
// For each pattern, create skill:
.claude/skills/guild/
├── backend/
│   ├── api-endpoint-creation.md
│   └── error-handling.md
├── frontend/
│   ├── react-component-architecture.md
│   └── state-management.md
└── testing/
    └── test-creation-protocol.md
```

**Phase 4: Agent Creation with Skill References**
```javascript
// Create agents that reference skills:
.claude/agents/guild/
├── backend-specialist.md          // References: backend skills
├── frontend-specialist.md         // References: frontend skills
└── testing-specialist.md          // References: testing skills
```

### Manual Skill Creation

Users can also create skills manually:

1. **Create file**: `.claude/skills/guild/{category}/{skill-name}.md`
2. **Add metadata**: Frontmatter with applicability patterns
3. **Document pattern**: WHAT/WHEN, conventions, pitfalls
4. **Link relationships**: Related skills and agents
5. **Reinstall**: Run `node install.js` to update inventory

## Skill Usage Patterns

### By Workflows

**1. Skill Inventory Presentation**
```markdown
### Skills Inventory

**Available Guild Skills (5 total)**
*Last scanned: 2025-10-17T...*

**backend**:
  - **API Endpoint Creation**: RESTful API patterns
  - **Error Handling**: Centralized error handling

**frontend**:
  - **React Component Architecture**: Component design patterns
  - **State Management**: Global state patterns

**testing**:
  - **Test Creation Protocol**: Unit/integration/E2E testing
```

**2. Skill Selection Guidance**
```javascript
// Workflow presents skills with metadata
// User/agent evaluates:
- Does task match file_patterns?
- Is technology in technologies list?
- Does task_type align?
- What's the confidence_scoring?

// Decision:
- Load skill if highly applicable
- Reference related skills if needed
- Compose multiple skills for complex tasks
```

**3. Skill Application**
```javascript
// When skill loaded:
- Apply WHAT/WHEN patterns
- Follow project conventions
- Avoid documented anti-patterns
- Reference related skills
- Maintain consistency
```

### By Agents

**Agent Definition (Example)**
```markdown
# Backend Specialist

---
name: backend-specialist
model: inherit
thinking_mode: ultrathink
description: "Backend development specialist for Node.js/Express APIs"
---

## Expertise
You are a backend development specialist for this project.

## Relevant Skills
Reference these skills when applicable:
- **api-endpoint-creation**: When creating new API routes
- **error-handling**: For error handling patterns
- **validation**: For request validation approaches
- **database-operations**: For data access patterns

## Project Context
[Discovered project-specific patterns]

## Capabilities
- API design and implementation
- Database integration
- Error handling and validation
- Authentication and authorization

[Rest of agent definition...]
```

**Agent Skill Usage**
```javascript
// When agent invoked:
1. Agent reviews relevant skills section
2. Loads applicable skills for current task
3. Applies skill patterns to work
4. Follows skill conventions
5. Avoids skill anti-patterns
6. References related skills if needed
```

## Skill Composition

### Single Skill Application

**Simple Case**: Task matches one skill clearly

```javascript
Task: "Create a new user registration endpoint"

Workflow identifies:
- api-endpoint-creation skill applies
- High confidence (90+)
- File pattern matches: /api/routes/

Action:
- Load api-endpoint-creation skill
- Apply conventions for endpoints
- Follow project structure
- Avoid documented pitfalls
```

### Multi-Skill Composition

**Complex Case**: Task requires multiple skills

```javascript
Task: "Implement authenticated user profile endpoint with tests"

Workflow identifies multiple skills:
- api-endpoint-creation (endpoint structure)
- authentication (auth patterns)
- validation (input validation)
- test-creation-protocol (testing approach)

Action:
- Load all relevant skills
- Compose patterns from multiple skills
- Apply conventions from each domain
- Ensure consistency across patterns
```

### Skill Relationships

**Related Skills**: Complementary patterns often used together

```yaml
# In api-endpoint-creation.md:
related_skills:
  - "error-handling"      # Error patterns for endpoints
  - "validation"          # Input validation patterns
  - "authentication"      # Auth/authz patterns
```

**Workflow automatically suggests** related skills when one is selected.

## Setup Command Integration

### Setup Workflow

```javascript
/guild:setup

Phase 1: Discovery (parallel)
├─ Analyze file structure
├─ Identify technologies
├─ Detect patterns
├─ Extract conventions
└─ Map workflows

Phase 2: Pattern Analysis
├─ Categorize patterns
├─ Identify skill opportunities
├─ Determine agent needs
└─ Assess relationships

Phase 3: Skill Creation
├─ Generate skill files with metadata
├─ Document conventions and anti-patterns
├─ Link relationships
└─ Save to .claude/skills/guild/

Phase 4: Agent Creation
├─ Generate agent files with skill references
├─ Embed project context
├─ Define capabilities
└─ Save to .claude/agents/guild/

Phase 5: Guidance (display only)
└─ Present created skills and agents
```

### Setup Output Example

```markdown
## Created Skills (5)

### Backend Skills (2)
- **api-endpoint-creation**: API design patterns for Express
- **error-handling**: Centralized error handling approach

### Frontend Skills (2)
- **react-component-architecture**: Component design patterns
- **state-management**: Context API and Zustand patterns

### Testing Skills (1)
- **test-creation-protocol**: Jest/RTL testing approach

## Created Agents (3)
- **backend-specialist**: References backend skills
- **frontend-specialist**: References frontend skills
- **testing-specialist**: References testing skills

## Usage Guidance
Use `/guild "task"` to execute tasks with these resources.
```

## Workflow Command Integration

### Workflow Execution Pattern

```javascript
/guild "Create user profile API endpoint with validation"

Step 1: Resource Discovery
├─ Present skill inventory (5 skills)
├─ Present agent roster (3 agents)
└─ Assess task requirements

Step 2: Resource Selection
├─ Identify applicable skills:
│   ├─ api-endpoint-creation (confidence: 95)
│   ├─ validation (confidence: 90)
│   └─ error-handling (confidence: 85)
├─ Consider agents:
│   └─ backend-specialist (references these skills)
└─ Decision: Use skills directly for this task

Step 3: Execution
├─ Load api-endpoint-creation skill
├─ Apply API structure conventions
├─ Load validation skill
├─ Apply validation patterns
├─ Implement endpoint following both patterns

Step 4: Verification
├─ Verify conventions followed (from skills)
├─ Check anti-patterns avoided (from skills)
├─ Test implementation
└─ Obtain user approval
```

## Interoperability Matrix

### Skills ↔ Agents

| Aspect | Implementation |
|--------|----------------|
| **Agent References Skills** | Agent definition includes "Relevant Skills" section |
| **Agent Applies Skills** | Agent work follows skill patterns and conventions |
| **Setup Links Them** | Setup command creates both with relationships |
| **Metadata Connects** | Skill `related_agents` field lists relevant agents |

### Skills ↔ Workflows

| Aspect | Implementation |
|--------|----------------|
| **Workflow Presents Skills** | Skill inventory displayed at workflow entry |
| **Workflow Guides Selection** | Applicability metadata enables intelligent matching |
| **Workflow Loads Skills** | Workflow can load skill content when relevant |
| **Metadata Enables Discovery** | Rich frontmatter enables context-aware selection |

### Agents ↔ Workflows

| Aspect | Implementation |
|--------|----------------|
| **Workflow Presents Agents** | Agent roster displayed alongside skills |
| **Workflow Delegates** | Workflow can invoke agents for complex tasks |
| **Agents Created by Setup** | Persistent agents created by setup command |
| **Ephemeral Creation** | Workflow can create temporary agents via Task tool |

## Best Practices

### Creating Effective Skills

**DO**:
- ✅ Focus on WHAT and WHEN, not HOW
- ✅ Include rich, specific metadata
- ✅ Document actual project patterns
- ✅ Provide clear anti-patterns
- ✅ Link related resources
- ✅ Keep content scannable
- ✅ Use confidence scoring wisely

**DON'T**:
- ❌ Write prescriptive step-by-step instructions
- ❌ Create skills without project evidence
- ❌ Duplicate patterns across skills
- ❌ Make skills too generic or too specific
- ❌ Ignore relationships to other skills
- ❌ Create overlapping skills

### Organizing Skills

**By Category** (Recommended):
```
.claude/skills/guild/
├── backend/        # Backend patterns
├── frontend/       # Frontend patterns
├── testing/        # Testing patterns
├── deployment/     # Deployment patterns
└── integration/    # Integration patterns
```

**Naming Conventions**:
- Use descriptive, hyphenated names
- Reflect the pattern purpose
- Be specific but not overly verbose
- Examples: `api-endpoint-creation`, `react-component-architecture`

### Maintaining Skills

**Update Skills When**:
- Project conventions change
- New patterns emerge
- Anti-patterns discovered
- Technologies updated
- Better approaches found

**Regenerate Inventory After**:
```bash
# After manual skill changes:
node install.js
```

## Advanced Patterns

### Conditional Confidence Scoring

```yaml
confidence_scoring: "hasFramework('express') && hasTypeScript() ? 95 : hasFramework('express') ? 80 : 50"
```

This enables context-aware skill ranking.

### Multi-Technology Applicability

```yaml
applicability:
  file_patterns: ["**/api/**/*.ts", "**/routes/**/*.js"]
  technologies: ["express", "fastify", "koa", "nest"]
  task_types: ["api-endpoint", "route-handler", "middleware"]
```

Makes skills useful across technology variations.

### Skill Families

Group related skills for discovery:

```markdown
## Related Resources
### Related Skills (Skill Family)
- **api-endpoint-creation**: Core API patterns
- **api-authentication**: Auth patterns
- **api-validation**: Validation patterns
- **api-error-handling**: Error patterns
- **api-testing**: API testing patterns
```

## Examples

See the following example skills for reference:
- `guideline/examples/api-endpoint-creation.md`
- `guideline/examples/react-component-architecture.md`
- `guideline/examples/test-creation-protocol.md`

These demonstrate complete skill structure with metadata, conventions, anti-patterns, and relationships.

## Summary

The Guild skills system provides:

1. **Knowledge Transfer**: Capture project patterns as discoverable skills
2. **Reusability**: Both agents and workflows use the same skills
3. **Discoverability**: Rich metadata enables intelligent selection
4. **Maintainability**: Update once, applies everywhere
5. **Flexibility**: Advisory guidance, not rigid enforcement
6. **Integration**: Seamless interoperability between skills, agents, and workflows

**Philosophy**: Skills are the foundation. Agents apply them with expertise. Workflows present them for selection. Together, they enable intelligent, project-aware task execution.

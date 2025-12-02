---
name: guid-skill-creation
description: "Use when creating Claude Code skills following official format with proper YAML frontmatter, progressive loading, and Guild system integration patterns."
model: inherit
---

# Skill Creation Skill

## Pattern Description
**What**: Creating Claude Code skills following official format with proper structure, naming conventions, and Guild system integration
**When**: Documenting project-specific patterns, library conventions, or reusable workflows for Claude Code
**Context**: Use when you have discovered patterns or conventions that should be reusable across the project

## Official Claude Code Skill Format

### Skill Structure Requirements

**Mandatory YAML Frontmatter**:
```yaml
---
# CLAUDE CODE NATIVE FIELDS (Required)
name: skill-name                    # Lowercase, hyphens, max 64 chars
description: "Use when... clear description of when to apply and what value this provides"  # Max 1024 chars, REQUIRED for discovery

# CLAUDE CODE OPTIONAL FIELDS
model: inherit                      # Uses user's selected model
tools: [list of tools if needed]    # Optional: specify required tools for security/specialization
---
```

### Progressive Loading Architecture

**Level 1: Metadata (Always Loaded)**
- YAML frontmatter with required fields
- Enables skill discovery and selection for agents
- Must include specific description with:
  - **"Use when..."** trigger terms for discovery
  - **Clear value proposition** explaining what the skill provides
  - **Target audience context** (which agents benefit most)

**Level 2: Main Content (<500 lines)**
- SKILL.md content loaded when skill is relevant
- Core patterns, conventions, and guidance
- Should be focused and actionable

**Level 3: On-Demand Resources (Optional)**
- **DOCS.md**: Library documentation or API references
- **REFERENCE.md**: Technical specifications and advanced patterns
- **EXAMPLES.md**: Code examples and usage demonstrations

## Guild Skill Categories & Naming

### Tech Stack Skills (Library/Framework-Specific)
**Format**: `guid-working-with-[library]` (Guild-generated with gerund naming)
```yaml
---
name: guid-working-with-react
description: "Use when working with React components, hooks, state management, and lifecycle patterns in this project. Provides component architecture patterns, state management approaches, and performance optimization techniques specific to this codebase's React implementation."

category: frontend-patterns
---
```

**Examples**:
- `guid-working-with-express` - REST API development patterns with middleware integration
- `guid-working-with-prisma` - Database ORM conventions with query optimization patterns
- `guid-working-with-jest` - Testing framework usage patterns with test organization strategies

### Pattern Skills (Project Conventions)
**Format**: `guid-[action]-[pattern]` or `guid-[domain]-[pattern]` (Guild-generated)
```yaml
---
name: guid-processing-api-requests
description: "Use when processing API requests, handling responses, managing errors, and integrating with external services. Provides standardized request validation patterns, response formatting conventions, error handling strategies, and external service integration workflows used consistently across the codebase."

category: backend-integration
---
```

**Examples**:
- `guid-managing-component-state` - State management patterns with data flow architecture
- `guid-testing-user-workflows` - E2E testing conventions with test data management
- `guid-handling-authentication` - Auth flow implementation patterns with security best practices

## Skill Content Structure

## Writing Effective Skill Descriptions for Agent Discovery

### Description Structure Requirements
**Every skill description must include three critical components:**

1. **"Use when..." Trigger Clause**
   - Clear scenarios and contexts for skill application
   - Specific keywords that Claude Code searches for
   - Action-oriented language describing when to invoke

2. **Value Proposition Statement**
   - What specific knowledge, patterns, or guidance the skill provides
   - Tangible benefits for the user/agent
   - Unique aspects of this project's implementation

3. **Context and Scope**
   - Technology stack or domain relevance
   - Scope boundaries (what's included vs excluded)
   - Integration with other skills or workflows

### Description Examples and Analysis

**❌ Poor Description:**
```yaml
description: "React component patterns"
```
*Problems: No trigger clause, no value proposition, too generic*

**✅ Good Description:**
```yaml
description: "Use when creating React components, managing state, or implementing component lifecycle in this project. Provides component architecture patterns, custom hook usage, state management approaches, and performance optimization techniques specific to this codebase's React implementation."
```

*Strengths: Clear trigger, specific value, project context*

### Agent Discovery Optimization

**Keyword Targeting for Different Agent Types:**

**Frontend Agents:**
- Keywords: "components", "UI", "frontend", "interface", "user experience"
- Value focus: Component architecture, state management, performance optimization

**Backend Agents:**
- Keywords: "API", "server", "database", "integration", "services"
- Value focus: Request handling, data processing, service communication

**Architecture Agents:**
- Keywords: "patterns", "architecture", "design", "structure", "system"
- Value focus: Architectural decisions, design principles, system organization

**DevOps Agents:**
- Keywords: "deployment", "infrastructure", "monitoring", "CI/CD", "operations"
- Value focus: Operational patterns, deployment strategies, monitoring approaches

### Description Templates by Skill Type

**Tech Stack Skills Template:**
```yaml
description: "Use when working with [technology] for [specific purposes]. Provides [value 1], [value 2], and [value 3] specific to this project's [technology] implementation including [unique aspects]."
```

**Pattern Skills Template:**
```yaml
description: "Use when [action/condition] in [context]. Provides [value 1], [value 2], and [value 3] with [specific approaches] used consistently across the codebase for [purpose]."
```

**Integration Skills Template:**
```yaml
description: "Use when integrating [systems/components] or handling [data/communication]. Provides standardized [approach 1], [approach 2], and [approach 3] for reliable [integration type] in this project's architecture."
```

### Standard Template
```markdown
## Pattern Description
**What**: [Brief description of what this pattern represents]
**When**: [Clear guidance on when this pattern applies]
**Context**: [Situations where this skill is most relevant]

# When to Use This Skill
**Primary Use Cases:**
- [Specific scenario 1 with clear trigger conditions]
- [Specific scenario 2 with context requirements]
- [Specific scenario 3 with integration needs]

# What This Skill Provides
**Core Deliverables:**
- [Specific knowledge or patterns provided]
- [Implementation approaches or guidelines]
- [Integration strategies or best practices]

**Discovery Value for Agents:**
- **For [Agent Type]**: [Specific value provided to this agent type]
- **For [Agent Type]**: [Specific value provided to this agent type]
- **For [Agent Type]**: [Specific value provided to this agent type]

---

## Project-Specific Conventions
[Discovered project-specific approaches and conventions]
- [Specific convention or pattern]
- [Usage context and rationale]
- [Integration notes]

## Implementation Guidelines
[Step-by-step or checklist approach]
1. [First step with context]
2. [Second step with examples]
3. [Additional considerations]

## Common Pitfalls
### ❌ [Anti-Pattern 1]
**Problem**: [Description of the anti-pattern]
**Why It Fails**: [Explanation of issues]
**Better Approach**: [Recommended alternative with examples]

## Related Resources
### Related Skills
- **[related-skill]**: Brief description of relationship

### Related Agents
- **[related-agent]**: When to involve this specialist

### External Resources
- [Relevant documentation or references]
```

## Skill Creation Process

### Step 1: Pattern Discovery
**Identify Reusable Patterns**:
- Look for recurring solutions across the codebase
- Document architectural decisions and conventions
- Capture integration patterns between components
- Note technology-specific best practices

**Pattern Validation**:
- Is this pattern used consistently?
- Does it solve a recurring problem?
- Is it specific enough to be actionable?
- Is it general enough to be reusable?

### Step 2: Skill Design
**Define Scope and Focus**:
- Choose appropriate category (tech stack vs pattern)
- Select descriptive name following conventions
- Write specific, action-oriented description
- Identify related skills and agents

**Content Planning**:
- Outline key conventions to document
- Identify common pitfalls to address
- Plan progressive loading structure
- Determine need for supporting files

### Step 3: Content Creation
**Write SKILL.md**:
- Create clear YAML frontmatter
- Write focused, actionable content under 500 lines
- Include project-specific conventions, not generic patterns
- Add practical examples and anti-patterns

**Create Supporting Files (Optional)**:
- **DOCS.md**: Fetch or write relevant documentation
- **REFERENCE.md**: API specs and technical details
- **EXAMPLES.md**: Concrete code examples from project

### Step 4: Integration
**File Organization**:

**Skills Directory Structure**:
```
.claude/skills/
├── guild-[skill-name]/        # Skill directory with guid- prefix
│   ├── SKILL.md               # Main skill file (required)
│   ├── DOCS.md                # Optional documentation
│   ├── REFERENCE.md           # Optional references
│   └── EXAMPLES.md            # Optional examples
```

**Agents Directory Structure**:
```
.claude/agents/guild/
├── guild-[agent-name].md      # Agent configuration file
```

**Naming Convention**: Both created skills and agents should be prefixed with `guid-` to indicate they are Guild-generated and distinguish them from manually created ones.

**Guild Integration**:
- Skills are automatically discovered by Claude Code
- Used by `/guild:setup` to understand project patterns
- Referenced by agents through contextual understanding
- Inventory regenerated via `node install.js`

## Intelligent Skill Creation Framework

### Repository Analysis Integration
- Leverage universal-technology-discovery for tech stack understanding
- Use convention-extraction for pattern identification
- Apply architectural-pattern-discovery for comprehensive pattern insights
- Consider repository-pattern-recognition for overall project context

### Tool Selection Guidance
- Essential toolset: File operations, Research, Execution (great starting point)
- Enhanced tools: Consider based on project needs and complexity
- Tool optimization hierarchy: Consider sg/grit for structural work, ripgrep for quick searches
- Use tool-selection-guidance skill for detailed recommendations

### Skill Creation Considerations
Think about these factors when deciding to create skills:
- **Pattern frequency**: How often does this pattern appear in your work?
- **Project complexity**: Does this deserve its own skill or fit in an existing one?
- **Team value**: Will others find this skill useful?
- **Maintenance**: Can this skill stay current as the project evolves?
- **Automation opportunities**: Can this skill include helpful scripts or tools?

### Modern Claude Code Skills Integration
Following current Claude Code skills documentation:

**allowed-tools parameter**:
- Consider for security-focused skills (read-only access)
- Use for analysis skills with specific tool needs
- Apply to automation skills with controlled tool access
- Example: `allowed-tools: [Read, Grep, Bash]`

**Script Integration**:
- Include project-specific scripts in skill directories
- Add automation tools that enhance the skill's capabilities
- Create helper scripts for complex workflows
- Ensure scripts are well-documented and maintained

**Progressive Loading Best Practices**:
- Keep SKILL.md focused and actionable (guideline, not strict rule)
- Use supporting files for deeper content:
  - **DOCS.md**: Documentation or API references
  - **REFERENCE.md**: Technical specifications
  - **EXAMPLES.md**: Code examples and usage
- Optimize for Claude Code's model-invoked discovery

## Critical Guidelines

### ✅ Recommended Patterns
- Use lowercase, hyphenated names (max 64 chars)
- Include specific description with "Use when..." format
- Keep SKILL.md focused and actionable
- Focus on **principles, patterns, and approaches** rather than specific code implementations
- Use appropriate Guild naming: `guid-working-with-[library]` or `guid-[action]-[pattern]`
- Include **schematical code examples** only when essential to illustrate patterns
- Emphasize **best practices, principles, and external references** for high-quality guidance
- Make skills **timeless and general** to avoid frequent editing due to code changes

### ❌ Things to Avoid
- Generic names like "react-skill" or "api-pattern"
- Including specific code that will quickly become outdated
- Creating overly specific skills that require constant maintenance
- Mixing multiple unrelated patterns in one skill
- Overly restrictive rules that limit creativity
- Documentation that duplicates existing library documentation

Remember: Skills are meant to provide **enduring guidance** and **principles** that remain relevant despite code changes. Focus on **why** and **how** approaches work, not just **what** specific code to write.

### Creating Timeless Skills

**General vs Specific Balance:**
- ✅ **General**: "Principles for API error handling with status codes and response patterns"
- ❌ **Specific**: "Use this exact error handling middleware configuration"

**Documentation Strategy:**
- Include **schematical examples** that illustrate patterns without being tied to specific implementations
- Reference **official documentation** for detailed implementation guidance
- Focus on **decision criteria** for when to apply different approaches
- Provide **quality principles** and **best practices** rather than rigid rules

**Maintenance-Friendly Content:**
- Skills should rarely need updates due to codebase changes
- Focus on **architectural principles** that evolve slowly
- Include **external references** to official documentation for current specifics
- Emphasize **pattern recognition** over specific implementation details

## Quality Checklist

Before finalizing a skill:
- [ ] Name follows Guild conventions (`guid-working-with-[library]` or `guid-[action]-[pattern]`)
- [ ] Description is specific and includes "Use when..." format with clear value proposition
- [ ] YAML frontmatter is complete and valid
- [ ] Content is under 500 lines and focused on principles, not specific implementations
- [ ] Documents **timeless principles and patterns**, not fleeting code specifics
- [ ] Includes **schematical examples** only when essential to illustrate patterns
- [ ] References **external documentation** for detailed implementation guidance
- [ ] Emphasizes **best practices and quality principles** over rigid rules
- [ ] Has clear value for **agent discovery** and **pattern reuse** across projects

## Skill Types & Examples

### Tech Stack Skills Example
```yaml
---
name: guid-working-with-typescript
description: "Use when working with TypeScript interfaces, types, generics, and compilation patterns. Provides type system design principles, interface organization strategies, and type safety approaches for maintainable code architecture."
model: inherit
---
```

### Pattern Skills Example
```yaml
---
name: guid-handling-environment-configuration
description: "Use when managing environment variables, configuration files, and deployment-specific settings. Provides configuration management principles, environment separation strategies, and security best practices for robust deployment patterns."
model: inherit
---
```

## Common Pitfalls

### ❌ Generic Documentation
**Problem**: Creating skills that document generic library usage instead of project-specific patterns
**Why It Fails**: Skills should capture project conventions, not replace official documentation
**Better Approach**: Focus on how the project specifically uses the technology, unique patterns, and local conventions

### ❌ Poor Discovery Design
**Problem**: Vague descriptions or generic names that prevent intelligent skill matching
**Why It Fails**: Claude Code can't match the right skill to the right task
**Better Approach**: Use specific descriptions with trigger terms and meaningful, descriptive names

### ❌ Scope Creep
**Problem**: Skills that try to cover too many unrelated patterns or domains
**Why It Fails**: Reduces discoverability and makes skills hard to maintain
**Better Approach**: Create focused, single-purpose skills with clear boundaries

### ❌ Missing Progressive Loading
**Problem**: Putting everything in SKILL.md or not using supporting files effectively
**Why It Fails**: Hurts performance and makes skills hard to navigate
**Better Approach**: Use 3-level architecture: metadata → main content → on-demand resources

## Related Resources

### Related Skills
- **agent-creation**: For creating execution specialists that can apply skill patterns
- **convention-extraction**: For discovering patterns to document as skills
- **architectural-pattern-discovery**: For understanding architectural and design patterns

### Related Agents
- **frontend-specialist**: For frontend technology skills
- **backend-specialist**: For API and database skills
- **testing-specialist**: For testing framework skills

### External Resources
- [Claude Code Skills Documentation](https://code.claude.com/docs/en/skills)
- [Guild System Framework](./framework.md) - Skill integration patterns
- [Skill Template](../templates/skill-template.md) - Standardized format
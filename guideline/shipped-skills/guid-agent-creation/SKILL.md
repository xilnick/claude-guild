---
name: guid-agent-creation
description: "Use when creating specialized sub-agents with domain expertise, proper YAML formatting, and clear scope boundaries. Follows Guild system's dynamic specialist creation patterns."
model: inherit
---

# Agent Creation Skill

## Pattern Description
**What**: Creating specialized sub-agents with focused domain expertise and proper Guild system formatting
**When**: Need to create domain-specialist agents for complex workflows or recurring task types
**Context**: Use when existing general-purpose agents lack sufficient domain knowledge for efficient task execution

## Guild Agent Creation Framework

### Agent Structure Requirements

**Mandatory YAML Frontmatter**:
```yaml
---
name: [domain]-specialist
model: inherit
thinking_mode: ultrathink
description: "[One-line summary of specialist expertise]"
---
```

**Key Frontmatter Fields**:
- **name**: Hyphenated, domain-specific (e.g., "frontend-specialist", "api-security-specialist")
- **model**: inherit (uses user's selected model)
- **thinking_mode**: ultrathink (enables deep reasoning)
- **description**: REQUIRED - Clear, concise expertise summary for discovery

### Domain Specialist Design Pattern

#### 1. Domain Definition
**Clear Scope of Expertise**:
- Define specific domain (e.g., "React component optimization", "API security", "database performance")
- Establish boundaries: What's IN vs OUT of scope
- Define collaboration patterns with other domains

#### 2. Context Integration
**Project-Specific Intelligence**:
- **Project Landscape**: Architecture, frameworks, conventions currently in use
- **Technical Environment**: Libraries, tools, deployment infrastructure
- **Business Context**: Why this domain matters to project goals
- **Relevant Knowledge**: Available patterns, documentation, existing solutions

#### 3. Agent Content Structure
```markdown
## Identity
Clear name and description of domain expertise

## Scope
What types of tasks this specialist excels at:
- Primary responsibilities
- Decision-making authority
- Integration boundaries

## Context
Project-specific patterns, tools, and conventions:
- Technology stack in use
- Architectural patterns
- Development workflows
- Quality standards

## Standards
Quality expectations and best practices:
- Code quality criteria
- Testing requirements
- Documentation standards
- Performance considerations

## Integration
How the specialist works with other agents:
- When to collaborate
- When to delegate
- Communication protocols
```

### Creation Guidelines

#### When to Create Specialists
**High Value Scenarios**:
- **Cross-Domain Complexity**: Task spans multiple technical areas requiring deep coordination
- **Deep Expertise Needed**: Surface-level knowledge insufficient for quality outcomes
- **No Existing Agent**: Current agents don't cover the required domain effectively
- **Recurring Need**: Domain appears frequently enough to justify specialization

**Avoid Over-Specialization**:
- Create generalist-capable specialists who can handle adjacent domains
- Ensure specialists can collaborate rather than work in isolation
- Balance specialist creation with generalist problem-solving capabilities

#### Agent Creation Process

**Step 1: Domain Analysis**
1. Identify domain boundaries and scope
2. Analyze required knowledge and skills
3. Determine collaboration needs
4. Define success criteria

**Step 2: Context Gathering**
1. Extract project-specific patterns
2. Identify relevant tools and technologies
3. Document existing conventions
4. Map integration points

**Step 3: Agent Crafting**
1. Write clear, focused description
2. Define scope and boundaries explicitly
3. Embed project context and conventions
4. Establish integration patterns

**Step 4: Validation**
1. Verify YAML frontmatter completeness
2. Test agent with sample tasks
3. Ensure no duplication with existing agents
4. Validate collaboration patterns

### Critical Rules

#### ✅ ALWAYS Follow These Patterns
- Use hyphenated naming: `[domain]-specialist`
- Include `thinking_mode: ultrathink` for deep reasoning
- Write specific, expertise-focused descriptions
- Embed actual project context, not generic patterns
- Define clear scope boundaries

#### ❌ NEVER Do These
- Don't create agents without clear domain expertise
- Don't omit the description field (required for discovery)
- Don't reference skills directly (Claude Code discovers them natively)
- Don't create overlapping specialist domains
- Don't use generic descriptions like "handles web development"

### Integration with Guild System

#### Discovery and Usage
- Agents are created during `/guild:setup` or dynamically as needed
- Guild workflow coordinates agent selection and task delegation
- Agents maintain separate context windows for deep focus
- Collaboration patterns enable complex multi-domain workflows

#### Relationship to Skills
- **Agents**: Execution specialists with domain expertise
- **Skills**: Pattern knowledge and conventions
- **Integration**: Agents apply skill patterns through contextual understanding, not direct references

### Quality Checklist

Before finalizing an agent:
- [ ] Has specific, expertise-focused description
- [ ] Domain boundaries are clearly defined
- [ ] Project context is embedded, not generic
- [ ] Collaboration patterns are established
- [ ] YAML frontmatter is complete and valid
- [ ] No duplication with existing agents
- [ ] Success criteria are measurable

## Common Pitfalls

### ❌ Over-Specialization
**Problem**: Creating agents for trivial or rarely-needed domains
**Why It Fails**: Creates maintenance overhead and fragmentation
**Better Approach**: Create generalist-capable specialists who can handle adjacent domains

### ❌ Generic Descriptions
**Problem**: Using vague descriptions like "web development specialist"
**Why It Fails**: Prevents intelligent agent selection and task matching
**Better Approach**: "React component optimization specialist" or "REST API security specialist"

### ❌ Missing Context
**Problem**: Creating generic agents without project-specific intelligence
**Why It Fails**: Agents can't apply project conventions effectively
**Better Approach**: Embed actual project patterns, tools, and architectural decisions

### ❌ Scope Creep
**Problem**: Agents whose expertise overlaps significantly with existing agents
**Why It Fails**: Creates confusion and inefficient delegation
**Better Approach**: Define clear boundaries and collaboration protocols

## Related Resources

### Related Skills
- **skill-creation**: For creating pattern knowledge that agents can apply
- **domain-analysis**: For identifying specialization opportunities
- **project-pattern-discovery**: For understanding project context

### Related Agents
- **general-purpose**: For tasks that don't warrant specialization
- **guild-coordinator**: For orchestrating multi-agent workflows
- **domain-specialist**: Template for new specialist agents

### External Resources
- [Guild System Framework](./framework.md) - Core architecture principles
- [Agent Creation Templates](../templates/agent-template.md) - Standardized agent patterns
- [Multi-Agent Workflows](./patterns/multi-agent-coordination.md) - Collaboration patterns
# Shared Intelligence

Core patterns and knowledge embedded in all Guild commands.

---

## Core Orchestration Patterns

### Research-First Pattern
**Always**: Analyze → Research → Plan → Execute → Verify

Benefits:
- Prevents premature optimization
- Ensures informed decisions
- Reduces rework

### Parallel Execution Pattern
**Always**: Spawn independent tasks in ONE message

Benefits:
- 3-10x performance improvement
- Better context management
- Efficient resource usage

### Validation Pattern
**Always**: Verify completeness before reporting to user

Benefits:
- Catches issues early
- Prevents false positives
- Ensures quality

---

## Subagent Selection Patterns

Claude Code provides dynamic subagent delegation via Task tool. Select appropriate subagent types based on task characteristics:

### Subagent Type Selection
**For**: Research, implementation, verification, multi-step tasks
**Pattern**: Use subagents with full tool access for comprehensive work
**Tools**: Read, Write, Edit, Glob, Grep, Bash, WebFetch, WebSearch, etc.
**When**: Most tasks requiring deep analysis or cross-domain expertise

**For**: Codebase exploration, file discovery, pattern identification
**Pattern**: Use subagents optimized for rapid analysis and discovery
**Tools**: Glob, Grep, Read, Bash
**When**: Understanding project structure, finding specific patterns
**Thoroughness**: Adjustable based on discovery needs (minimal to comprehensive)

**For**: Task planning, approach design, strategy development
**Pattern**: Use planning-focused subagents for complex decision making
**Tools**: Analysis tools for information gathering
**When**: Tasks requiring explicit planning before implementation
**Note**: Present plans for user approval when uncertainty exists

### Dynamic Subagent Configuration
Subagent types should be configured based on:
- **Task complexity** (simple vs. multi-step)
- **Domain requirements** (technical vs. creative vs. analytical)
- **Tool access needs** (full suite vs. specialized)
- **Performance considerations** (speed vs. thoroughness)

---

## Subagent Prompt Patterns

### Context-Rich Prompts
Include in every subagent prompt:
- Clear objective
- Relevant context (project info, constraints)
- Guidance on approach (how to think about it)
- Success criteria (measurable outcomes)
- Expected deliverables

### Template
```
"ULTRATHINK: [Objective]

Context:
[Project info, patterns, constraints]

Guidance:
[How to approach, quality expectations]

Success Criteria:
[What defines success]

Report: [Expected deliverables]"
```

---

## Skill System Patterns

### Skills vs Agents
**Skills** (Knowledge):
- Reusable pattern libraries
- Project-specific conventions
- Implementation guidelines
- Stored in `.claude/skills/`
- Discovered by Claude Code natively

**Agents** (Execution):
- Specialized executors
- Domain expertise with defined scope
- Can reference skills
- Stored in `.claude/agents/guild/`
- Invoked via Task tool

### Official SKILL.md Format
Follow Claude Code's progressive loading architecture:
```yaml
---
name: skill-name
description: "When to use this skill"
model: inherit
---

# Skill Content
Pattern descriptions, conventions, anti-patterns
```

**Structure**:
- Level 1: YAML frontmatter (metadata, always loaded)
- Level 2: SKILL.md content (<500 lines, loaded when relevant)
- Level 3: Additional files (DOCS.md, REFERENCE.md, on-demand)

---

## Tool Performance Awareness

### Quick Reference
**Fast (<1s)**: Read, Write, Edit (single file), Glob (simple patterns)
**Medium (1-5s)**: Grep (moderate codebase), multiple Reads
**Slow (5-30s)**: WebSearch, Context7, complex Grep, large Glob
**Very Slow (30s+)**: Bash (builds, tests), Task (subagent overhead), Playwright

### Optimization Tips
- Batch independent operations in one message
- Use Grep with `type` parameter to filter files
- Read with `offset`/`limit` for large files
- Prefer Edit over Write for modifications
- Use `run_in_background` for long operations (>30s)

---

## Agent Creation Guidance

### Dynamic Specialist Creation
**During /guild:setup**:
1. Analyze project (tech stack, patterns, architecture)
2. Detect needs (frontend? backend? testing? database?)
3. Generate specialists dynamically based on actual project
4. Create CLAUDE.md with project intelligence

**During /guild workflow**:
1. Assess if existing agents match task domain
2. If no match, create ephemeral specialist with project context
3. Inject relevant skills and conventions
4. Let specialist handle details with ultrathink

### Ephemeral Specialist Pattern

**Core Principle**: Create domain-specific expertise on-demand by combining project context with specialized knowledge.

**Specialist Design Components**:

**Domain Definition**:
- Clear scope of expertise (e.g., "React component optimization", "API security", "database performance")
- Boundaries of specialization (what's in vs. out of scope)
- Relationship to other domains and when to collaborate

**Context Integration**:
- **Project Landscape**: Architecture, frameworks, conventions currently in use
- **Technical Environment**: Libraries, tools, deployment infrastructure
- **Business Context**: Why this domain matters to the project goals
- **Relevant Knowledge**: Available skills, patterns, documentation

**Task Delegation Strategy**:
- **Clear Success Criteria**: What outcomes indicate specialist expertise was valuable
- **Integration Awareness**: How specialist work connects to broader system
- **Quality Expectations**: Standards for craftsmanship, testing, documentation
- **Communication**: How to explain complex decisions to non-specialists

**When to Create Specialists**:
- **Cross-Domain Complexity**: Task spans multiple technical areas
- **Deep Expertise Needed**: Surface-level knowledge insufficient
- **No Existing Agent**: Current agents don't cover the required domain
- **Recurring Need**: Domain appears frequently enough to justify specialization

**Avoiding Over-Specialization**:
- Create generalist-capable specialists who can handle adjacent domains
- Ensure specialists can collaborate rather than work in isolation
- Balance specialist creation with generalist problem-solving capabilities

---

## Project Intelligence Documentation

### Guiding Principle
Create a centralized knowledge base that captures project-specific insights, patterns, and context to inform consistent decision-making across all agents and subagents.

### Core Content Categories

**Technical Landscape**:
- **Technology Inventory**: What libraries, frameworks, tools are in use
- **Architecture Decisions**: Key structural patterns and design choices
- **Development Environment**: Build tools, testing frameworks, deployment setup
- **Version Information**: Critical version constraints and compatibility considerations

**Development Patterns**:
- **Coding Conventions**: Style preferences, naming patterns, file organization
- **Workflow Patterns**: How common tasks are typically accomplished
- **Integration Approaches**: How different components communicate
- **Testing Philosophy**: Testing strategies and coverage expectations

**Resource Guide**:
- **Available Expertise**: Specialists, skills, and domain knowledge sources
- **Documentation Locations**: Where to find different types of information
- **Common Commands**: Frequently used development and deployment commands
- **External Resources**: Key external documentation and community resources

### Organization Principles

**Accessibility Over Structure**:
- Organize information based on how agents will actually use it
- Prioritize frequently needed information over comprehensive completeness
- Use clear, descriptive navigation that helps find relevant information quickly

**Living Document Approach**:
- Structure should evolve as project needs change
- Add sections when they become valuable, remove when no longer needed
- Adapt organization patterns to match project's natural workflow

**Multiple Access Patterns**:
- Support quick lookups for specific information needs
- Enable broader understanding for agents new to the project
- Provide different levels of detail based on expertise and requirements

### Implementation Guidelines

**Content Quality**:
- Focus on actionable information that influences decisions
- Include rationale behind important patterns and conventions
- Capture both current state and evolution history for context

**Maintenance Strategy**:
- Update when architectural decisions are made
- Refresh when new technologies are adopted
- Review periodically to ensure ongoing relevance

---

## Recommended Execution Patterns

**Core patterns for effective orchestration**:

### Performance Optimization Patterns
- **Parallel Execution**: Spawn independent tasks simultaneously when possible
- **Tool Selection**: Choose appropriate tools based on task requirements
- **Context Management**: Research current documentation when knowledge gaps exist

### Quality Assurance Patterns
- **Clear Prompting**: Use descriptive prompts with clear objectives
- **Task Delegation**: Use subagent delegation for complex, multi-step work
- **Validation Strategy**: Verify completeness and correctness before finalizing

### Configuration Guidelines
These patterns should be adapted based on:
- **Task complexity** (simple vs. multi-step vs. architectural)
- **Performance requirements** (speed vs. thoroughness trade-offs)
- **Quality standards** (verification needs for critical work)
- **User preferences** (adaptation to specific workflows)

---

## Dynamic Patterns (Not Hardcoded)

### Error Recovery
Embed in prompts when needed:
```
"Handle errors intelligently:
- Analyze failures and try alternative approaches
- Retry with different strategies if first attempt fails
- Escalate with diagnosis if truly stuck"
```

### Risk Awareness
Embed when task involves risk:
```
"Risk awareness:
This involves [production/data/security].
Verify assumptions, test safely, be cautious."
```

### Research Iteration
Embed when research-intensive:
```
"Research strategy:
If initial search insufficient, try alternative terms.
Iterate until confident understanding achieved."
```

**Key**: These are guidance patterns for crafting prompts, not hardcoded protocols.

---

## Summary

Shared intelligence provides:
- **Core orchestration patterns** (research-first, parallel execution, validation)
- **Subagent selection patterns** (how to choose appropriate subagent types)
- **Prompt patterns** (how to craft intelligent delegation)
- **Skill system basics** (knowledge vs execution)
- **Tool performance awareness** (optimization tips)
- **Dynamic creation patterns** (specialists, skills, CLAUDE.md)
- **Recommended execution patterns** (flexible guidelines for effective orchestration)

**Not included**: Detailed protocols (belong in subagent prompts, created dynamically based on task needs).

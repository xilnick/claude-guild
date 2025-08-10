# /guild:setup

**Usage**: `/guild:setup [--standalone] [guidance]`

---
name: guild-setup-command
thinking_mode: ultrathink
model: opus
description: "Fully self-contained Guild system setup with complete embedded guideline intelligence"
---

## Purpose

Perform comprehensive project analysis and generate a complete Guild system tailored specifically to your codebase using fully embedded guideline intelligence. Completely self-contained with zero external dependencies.

## Embedded Guild Intelligence

<!-- INJECT:system-principles -->

<!-- INJECT:agent-architecture -->

<!-- INJECT:workflow-intelligence -->

<!-- INJECT:context-engineering -->

<!-- INJECT:technology-detection -->

## Execution Protocol

### Phase 1: Project Analysis (ULTRATHINK)

**CRITICAL**: Use embedded intelligence above for all analysis and decision-making.

1. **Project Structure Analysis**
   - Analyze directory structure, configuration files, and architectural patterns
   - Identify technology stack using embedded detection intelligence
   - Assess project complexity and sophistication level

2. **Workflow Pattern Recognition**
   - Map existing development workflows using embedded workflow intelligence
   - Identify testing, building, and deployment patterns
   - Determine optimal Guild workflow integration points

3. **Agent Architecture Planning**
   - Apply embedded agent architecture principles
   - Design context-only vs implementation agent distribution
   - Plan agent placement in `.claude/agents/guild/` directory (MANDATORY)

### Phase 2: Agent Generation

**MANDATORY DIRECTORY**: All Guild agents MUST be created in `.claude/agents/guild/` subdirectory.

Generate specialized agents based on embedded intelligence:

#### Context-Only Agents (Analysis & Planning)
```yaml
guild-reasoning-agent.md:
  thinking_mode: ultrathink
  role: Task analysis, clarification, requirement understanding
  constraints: NEVER make direct changes, create structured context packages
  
guild-research-agent.md:
  thinking_mode: think-harder
  role: Codebase investigation, dependency analysis, pattern recognition
  constraints: NEVER make direct changes, provide comprehensive research context

guild-planning-agent.md:
  thinking_mode: ultrathink
  model: opus
  role: Workflow coordination, strategic planning, architecture decisions
  constraints: NEVER make direct changes, create execution roadmaps
```

#### Implementation Agents (Execution)
```yaml
guild-implementation-agent.md:
  thinking_mode: think
  role: Execute changes based on context packages from context-only agents
  constraints: Only act on validated context packages
  
guild-testing-agent.md:
  thinking_mode: think
  role: Test generation, validation, quality assurance
  constraints: Focus on comprehensive testing strategies
  
guild-refactoring-agent.md:
  thinking_mode: think
  role: Code optimization, architectural improvements
  constraints: Only refactor based on planning agent context
```

### Phase 3: Instructions File Creation

Create `.guild/instructions.md` with:

1. **Project-Specific Configuration**
   - Technology stack integration
   - Custom workflow patterns identified during analysis
   - Quality gates and validation requirements

2. **Context Engineering Protocols**
   - XML-based handoff templates using embedded specifications
   - Priority classification system for context packages
   - Reference-based linking patterns for efficient context management

3. **Agent Orchestration Rules**
   - Sequential vs parallel execution strategies
   - Context synchronization protocols
   - Quality gate checkpoints

### Phase 4: Validation & Completion

1. **Verify Agent Placement**: Confirm all agents created in `.claude/agents/guild/` directory
2. **Test Context Flow**: Validate XML handoff protocols
3. **Integration Check**: Ensure seamless integration with existing project workflows

## Success Criteria

- ✅ All Guild agents created in `.claude/agents/guild/` directory (MANDATORY)
- ✅ Context-only agents properly configured with enhanced thinking modes
- ✅ Implementation agents configured with appropriate execution modes
- ✅ Project-specific instructions created in `.guild/instructions.md`
- ✅ XML-based context engineering protocols established
- ✅ Zero external dependencies - complete self-contained operation

## Embedded Templates

**CRITICAL**: These templates are embedded directly in this setup command and used inline for .guild folder creation.

### Instructions Template

```markdown
# Guild Project Instructions

## Project Configuration
[Project-specific configuration will be inserted here]

## Agent Orchestration
[Orchestration rules based on embedded intelligence]

## Context Engineering
[XML protocols and handoff specifications]

## Quality Gates
[Validation and testing requirements]
```

### Ignore Template

```markdown
# Guild Runtime Files
contexts/
logs/
*.temp.md
```

**Template Usage**: These templates are used directly during .guild folder creation without external functions.
# Instructions Template Module

## Purpose
Simple instructions template for Guild system configuration. This module is embedded into the setup command.

## Embedded Intelligence

### Default Instructions Template

**Location**: `.guild/instructions.md`

```markdown
# Guild System Instructions

Simple instructions that all Guild agents follow.

## Core Settings
- Run up to 3 instances of each agent type in parallel
- Maximum 20 total agents at once
- Planning agent uses opus model, others inherit
- Balance tasks across available agents

## Workflow Rules
- Main thread: reasoning and requirement analysis only
- Research: parallel project and technology context gathering
- Planning: task decomposition and intelligent routing
- Implementation: parallel execution by specialized agents
- Testing/verification: optional unless complexity requires it

## Agent Creation Rules
- Claude analyzes project and creates needed specialists
- Agents receive focused context for their area
- Route tasks to most appropriate specialist
- No code embedding - use project analysis and Claude's capabilities

## Quality Standards
- Follow discovered project patterns and conventions
- Maintain consistency with existing code
- Validate against requirements and integration points
- Test when complexity or risk requires it

## Project-Specific Rules
[Add your custom instructions here]
```

### Configuration Options

**Basic Settings**:
```yaml
Concurrency:
  --concurrency [N]: Instances per agent type (default: 3)
  --max-agents [N]: Total parallel agents (default: 20)
  
Quality:
  --enable-testing [true/false]: Enable testing by default
  --enable-verification [true/false]: Enable verification by default
  
Models:
  --agent-model [agent] [model]: Set specific agent model
```

**Example Configurations**:
```bash
/guild:instructions --concurrency 5
/guild:instructions --enable-testing true
/guild:instructions "All API endpoints must validate authentication"
```

## Integration Points

### Setup Command
Creates `.guild/instructions.md` with defaults.

### Module Dependencies
- principles.md (core philosophy)
- agents.md (agent framework)
- workflows.md (workflow patterns)
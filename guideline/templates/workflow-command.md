# /guild:workflow

---
name: guild-workflow  
model: inherit
description: "Execute tasks through ultrathink reasoning and parallel agent invocation"
---

## Purpose

Execute user tasks with TARGET FOCUS and MANDATORY PARALLEL execution for speed.

## Core Intelligence

**Workflow Intelligence**:
{{core/workflow}}

**Agent Intelligence**:
{{core/agents}}

## Execution Protocol

### Phase 1: Ultrathink Reasoning (MANDATORY)

**Analyze User Input** (`$ARGUMENTS`):

```yaml
🎯 TARGET FOCUS:
  Exact Request: What user asked for specifically
  Optimal Solution: Minimal approach to solve perfectly
  Required Research: Only necessary knowledge  
  Optimal Agents: Exact number needed (not maximum)

⚡ PARALLEL STRATEGY:
  1 agent: Single execution
  2+ agents: MANDATORY parallel
  Work Units: Distinct, non-overlapping
  Ownership: Exclusive domains per agent
```

**Present Plan**:
```
## EXECUTION PLAN - APPROVAL REQUIRED

**Target**: [Exact user request]
**Solution**: [Optimal approach]
**Agents**: [Number] agents in parallel
**Work Distribution**:
  - Agent 1: [Exclusive domain]
  - Agent 2: [Different domain]
  - Agent N: [Unique domain]

Proceed? (Need explicit "yes")
```

### Phase 2: Parallel Research (If Needed)

**Main Thread Creates Research Agents**:
- Documentation researchers for discovered frameworks
- Pattern researchers for best practices
- All run simultaneously
- Shared knowledge cache

### Phase 3: Parallel Implementation (After Approval)

**Main Thread Spawns Implementation Agents**:
1. Create all required agents
2. Launch simultaneously
3. Each owns exclusive work area
4. Integrate results after completion

**Coordination**:
- Main thread controls all agents
- No agent spawns other agents
- Clear boundaries prevent conflicts
- All agents use model: sonnet

## Command Usage

```bash
/guild:workflow "implement user authentication"
/guild:workflow "optimize database queries"
/guild:workflow "add payment processing"
```

## Success Criteria

✅ **Target Focus**: Do exactly what's requested  
✅ **Mandatory Parallel**: All multi-agent tasks run in parallel
✅ **Optimal Count**: Right number of agents for the task
✅ **User Approval**: Always get confirmation
✅ **Maximum Speed**: Parallel execution for efficiency

## Error Handling

- **Missing Agents**: Run `/guild:setup` first
- **Unclear Request**: Ask for clarification
- **No Approval**: HALT until user confirms
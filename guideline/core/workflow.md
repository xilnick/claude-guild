# Workflow Module

## Core Philosophy

**🎯 TARGET FOCUS**: Do EXACTLY what user requested - nothing more, nothing less.

**⚡ MANDATORY PARALLEL**: Always execute agents in parallel for maximum speed.

**🧠 INTELLIGENCE-FIRST**: Claude determines optimal agent count and work distribution.

## OPTIMAL PARALLEL EXECUTION

### Unified Strategy
```
1. EXACT REQUIREMENTS: Extract precisely what user wants
2. OPTIMAL AGENTS: Determine minimum agents for perfect solution
3. MANDATORY PARALLEL: Execute all agents simultaneously
4. NO DUPLICATE WORK: Each agent owns exclusive work domain
```

### Execution Rules
- **1 agent task** → Single agent execution
- **2+ agent task** → MANDATORY parallel execution  
- **Optimal count** → Use EXACT agents needed (not maximum possible)
- **Speed focus** → Parallel execution for all multi-agent tasks

## Three-Phase Workflow

### Phase 1: Ultrathink Reasoning (MANDATORY)

**Intelligence Discovers:**
- Task requirements from user prompt
- Optimal agent count for the task
- Work decomposition into distinct units
- Exclusive agent assignments

**Target Focus Analysis:**
```yaml
Exact Request: What user asked for specifically
Optimal Solution: Minimal approach to solve perfectly  
Required Research: Only necessary knowledge
Optimal Agents: Exact number needed
```

**Work Decomposition:**
- Break into DISTINCT, non-overlapping units
- Assign EXCLUSIVE work domains to each agent
- Prevent duplicate work through clear boundaries
- Present plan for user approval

### Phase 2: Parallel Research (When Needed)

**Main Thread Control:**
- Main thread spawns ALL research agents
- Each agent researches different aspects
- All agents run simultaneously
- Shared knowledge cache for findings

**Research Tools:**
- context7 for library documentation
- WebSearch for patterns and practices
- WebFetch for official documentation

### Phase 3: Parallel Implementation (After Approval)

**Execution Strategy:**
1. Main thread creates implementation agents
2. Spawn ALL agents simultaneously  
3. Each agent owns exclusive work area
4. Integrate results after completion

**Coordination:**
- Intelligence prevents conflicts
- Clear file ownership boundaries
- No agent spawns other agents
- Main thread manages everything

## Success Criteria

✅ **Target Precision**: Do exactly what was requested  
✅ **Optimal Speed**: Mandatory parallel for multi-agent tasks
✅ **Intelligent Scaling**: Right number of agents for the task
✅ **Conflict-Free**: Clear boundaries prevent overlap
✅ **User Approval**: Always get confirmation before execution

## Integration

- **Depends on**: agents.md (cognitive personas)
- **Used by**: workflow-command.md, setup-command.md
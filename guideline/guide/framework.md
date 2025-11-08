# Guild Framework - Pure Orchestration

## Philosophy

**Guild is an orchestrator**: Analyzes tasks, delegates to subagents with ultrathink reasoning, coordinates results.

**Core Principle**: Minimal mandatory requirements + trust in intelligent delegation.

---

## The 5 Mandatory Requirements

<mandatory_requirements>
These requirements are **ENFORCED** in all Guild workflows:

### 1. Subagent Delegation
- **What**: Use Task tool for ALL multi-step work
- **Why**: Context efficiency, isolation, scalability
- **Pattern**: Delegate complex work to subagents with full context

### 2. Parallel Execution
- **What**: Spawn ALL independent tasks in ONE message
- **Why**: 3-10x performance improvement
- **Pattern**: Single message with multiple Task calls

### 3. ULTRATHINK Keyword
- **What**: Start EVERY Task prompt with "ULTRATHINK: "
- **Why**: Enables deep, thorough reasoning consistently
- **Pattern**: `prompt: "ULTRATHINK: [objective]..."`

### 4. Fresh Context
- **What**: Use Context7/WebSearch for current documentation
- **Why**: Avoid stale knowledge, get latest best practices
- **Pattern**: Research before implementation

### 5. Final Validation
- **What**: Verify before marking tasks complete
- **Why**: Prevents false positives, ensures quality
- **Pattern**: Validation task before user report

</mandatory_requirements>

---

## Dynamic Orchestration

**Everything else is intelligent judgment based on ultrathink reasoning.**

### Task Analysis Pattern
Before delegating, understand:
- **User Intent**: What's the actual goal?
- **Complexity**: Simple/Standard/Complex?
- **Knowledge Gaps**: What needs research?
- **Risk Factors**: What could go wrong?
- **Parallelization**: Independent workstreams?

### Research Orchestration
Spawn research based on **identified gaps**, not hardcoded perspectives:
- Documentation gaps → Context7/WebSearch
- Codebase unknowns → Explore subagent
- Technology unfamiliarity → Multi-round research
- Risk assessment → Safety research
- Best practices → Community knowledge

**Pattern**: ALL research in ONE message (parallel)

### Implementation Delegation
Create context-rich prompts:
```
"ULTRATHINK: [Clear objective]

Context:
[Project info, constraints, patterns]

Guidance:
[How to approach, quality expectations]

Success Criteria:
[Measurable outcomes]

Report: [Expected deliverables]"
```

### Coordination Intelligence
After parallel work completes:
1. **Synthesize**: What did we learn?
2. **Patterns**: Consensus vs conflicts?
3. **Completeness**: Sufficient to proceed?
4. **Risks**: Safety considerations?
5. **Plan**: Structure implementation?

### Validation Orchestration
Trust ultrathink subagent to verify intelligently:
- Functionality against requirements
- Integration points
- Quality and edge cases
- User intent satisfied

---

## Dynamic Patterns (Not Hardcoded)

Embed guidance in prompts **when task needs it**:

**Error Recovery** (when errors likely):
```
"Handle errors intelligently:
- Analyze failures, try alternatives
- Retry with different strategies
- Escalate with diagnosis if stuck"
```

**Risk Awareness** (when risky):
```
"Risk awareness:
This involves [production/data/security].
Verify assumptions, test safely, be cautious."
```

**Research Iteration** (when research-intensive):
```
"Research strategy:
If initial search insufficient, try alternatives.
Iterate until confident understanding."
```

**Key**: Patterns are guidance for prompt crafting, not hardcoded protocols.

---

## Skills and Agents

### Skills = Knowledge
- Reusable pattern libraries
- Project-specific conventions
- Implementation guidelines
- Stored in `.claude/skills/guild/`
- Discovered by Claude Code natively
- Official SKILL.md format with progressive loading

### Agents = Execution
- Specialized executors
- Domain expertise with defined scope
- Can reference skills
- Stored in `.claude/agents/guild/`
- Invoked via Task tool

### Dynamic Creation
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

---

## Command Requirements

### Workflow Command (`/guild`)
- **Apply**: All 5 mandatory requirements
- **Dynamic**: Task analysis → Research → Implementation → Validation
- **Trust**: Ultrathink reasoning for approach details

### Setup Command (`/guild:setup`)
- **Apply**: 4 mandatory requirements (skip Final Validation - setup is discovery)
- **Dynamic**: Project analysis → Skill generation → Agent creation
- **Trust**: Ultrathink reasoning for pattern detection

---

## Summary

**Mandatory (5 requirements)**:
1. Subagent Delegation
2. Parallel Execution
3. ULTRATHINK Keyword
4. Fresh Context
5. Final Validation

**Everything Else**:
- Dynamic analysis based on ultrathink reasoning
- Intelligent prompt crafting with embedded guidance
- Trust in subagent capabilities
- Orchestration patterns, not execution procedures

**Result**: Simple, powerful orchestrator that delegates intelligently.

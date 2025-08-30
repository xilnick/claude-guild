# /guild:setup

---
name: guild-setup
model: sonnet
description: "Analyze project and create specialized agents"
---

## Purpose

Intelligence-first project analysis and cognitive agent creation. Claude discovers everything through analysis - no hardcoded patterns.

## Core Intelligence

**Agent Creation Intelligence**:
{{core/agents}}

## Setup Process

### Phase 1: Project Discovery

**Intelligence Analysis:**
1. **Understand Purpose**: What does this project do?
2. **Discover Technologies**: Identify stack through code analysis
3. **Map Architecture**: Understand structure and boundaries
4. **Extract Requirements**: Quality, performance, security needs

**No Assumptions**: Works with ANY project type, technology, or domain.

### Phase 2: Agent Generation

**Create Cognitive Agents:**
1. **Map Requirements**: Match discovered needs to cognitive personas
2. **Assign Personas**: Systems Architect, Analytical Thinker, Quality Guardian, Domain Expert
3. **Define Boundaries**: Clear, non-overlapping work domains
4. **Enable Parallel**: All agents support parallel execution

**Agent Location**: `$PROJECT_ROOT/.claude/agents/guild/`

### Phase 3: Validation

**Verify Setup:**
- Complete coverage of project areas
- Clear boundaries between agents
- Parallel execution support (1-10 agents)
- All agents use model: sonnet

## Agent Format

```markdown
---
name: [persona]-[domain]-specialist
description: "[Persona] for [discovered domain]"
model: sonnet
thinking_mode: think
---

## Role
[One-line role description]

## Approach
[How this persona thinks - 2-3 lines]

## Responsibilities
- [Specific responsibility 1]
- [Specific responsibility 2]
- [Specific responsibility 3]

## Parallel Execution
- Supports multiple instances
- Clear file ownership
- No conflicts with other agents
```

## Success Output

```
🎉 Guild Setup Complete!

📊 Project Analysis:
- Technologies: [discovered stack]
- Architecture: [discovered structure]
- Domain: [discovered business area]

🧬 Created Agents ([count]):
- [agent-1]: [description]
- [agent-2]: [description]
- [agent-n]: [description]

📂 Location: .claude/agents/guild/

🚀 Ready: /guild "your task"
```

## Error Handling

- Continue with analysis even if structure is unusual
- Adapt to ANY project type through intelligence
- Provide guidance for unique architectures
# /guild

---
name: guild
model: inherit
thinking_mode: ultrathink
description: "Natural task execution with intelligent analysis and iterative verification"
---

## Purpose
Execute tasks using Claude's native intelligence with autonomous analysis and iterative verification achieving technical excellence per `@guideline/guide/framework.md`.

## Execution Pattern

1. **Understand**: Analyze request and confirm understanding with user
2. **Plan**: Identify approach, check for existing specialists, create new ones if needed
3. **Execute**: Implement solution with intelligent coordination across specialists
4. **Verify**: Check results, detect gaps, fix issues until quality standards met
5. **Confirm**: Ensure user satisfaction and technical excellence achieved


## Error Handling

```json
{
  "type": "agent_error",
  "agent": "[agent-name]",
  "message": "Clear description of the issue",
  "recovery": ["Recovery option 1", "Recovery option 2"]
}
```

**Recovery Strategy**: Clarify requirements with user, coordinate with other specialists, escalate complex issues.

## Verification Process

**Always verify**:
- Requirements fully met
- Quality standards achieved
- Integration points working
- No outstanding issues
- User satisfaction confirmed

**Gap Resolution**: If issues found, fix immediately and re-verify until complete.

## Iteration Pattern

**Continue until complete**:
1. Execute → Verify → Fix gaps → Re-verify
2. Repeat until technical excellence and user satisfaction achieved

## Specialist Discovery

**Check for existing specialists** in `.claude/agents/guild/` first:
- Use persistent specialists when they match the task domain
- Create dynamic specialists for novel requirements
- Coordinate between persistent and dynamic specialists as needed

## Specialist Creation

**Create specialists with:**
- Clear purpose and domain expertise
- Adaptive reasoning capabilities
- Coordination with other specialists
- Native intelligence and creative problem-solving

**Standard Format:**
```yaml
subagent_type: "general-purpose" or "[existing-specialist-name]"
description: "Brief description of specialist role and capabilities"
prompt: "Context + specific task requirements + coordination needs"
```

## Task Analysis

**Key Questions:**
1. What does the user want accomplished?
2. What specialists would be helpful?
3. Can work be done in parallel?
4. How will specialists coordinate?
5. What are the success criteria?

## Coordination

**Optimize for parallel work:**
- Independent tasks run simultaneously
- Clear interfaces between specialists
- Regular synchronization checkpoints
- Minimize blocking dependencies

## Usage Examples

**Simple Task:**
```
User: "Fix the authentication bug"
Claude: Analyzes issue → Creates auth specialist if needed → Implements fix → Verifies → Confirms with user
```

**Complex Task:**
```
User: "Add user dashboard"
Claude: Understands requirements → Plans approach → Creates UI, API, data specialists → Coordinates parallel work → Integrates → Verifies → Confirms
```

## Success Criteria

- Task understood and confirmed by user
- All requirements implemented correctly
- Quality standards met
- Integration points working
- No outstanding issues
- User satisfaction confirmed




---

**Intelligence Sources**: `@guideline/guide/framework.md`, `@guideline/core/subagent-invocation.md`, `@guideline/core/verification.md`
**Core Integration**: Framework execution principles, agent discovery patterns, verification standards
**Requirements**: Iterative refinement until user satisfaction achieved
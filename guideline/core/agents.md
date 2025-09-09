# Agent Management Framework

## Purpose
Determine when to create new specialists vs reuse existing ones through intelligent analysis and systematic coordination.

## Agent Selection Strategy

**CORE PRINCIPLE:** Discover first, create only when needed.

**SELECTION PROCESS:**
0. **Mandatory Discovery**: Scan `.claude/agents/guild/` for existing specialists first
1. **Discover Available**: Scan for existing specialists with relevant capabilities
2. **Score Compatibility**: Rate alignment (0-100) between need and available capabilities  
3. **Make Decision**: Good+ match (60+) = adapt existing, Low match (<60) = create new, Document why existing can't be adapted
4. **Coordinate Integration**: Design collaboration patterns between selected specialists

## Parallel Creation Framework

**PARALLEL-FIRST APPROACH:**
- Identify independent work units that can run simultaneously
- Create specialists for each distinct capability area needed
- Coordinate integration points and handoffs upfront
- Default to parallel execution unless dependencies require sequence

## Specialist Creation Standards

**CREATION TRIGGERS:**
- No existing specialist achieves 60+ compatibility after adaptation assessment
- Novel requirements that existing specialists cannot be extended to handle
- Documented analysis shows adaptation would be more complex than creation
- Critical gaps that cannot be filled by adapting available specialists

**DESCRIPTION STANDARD (4 sentences):**
1. **Purpose**: What this specialist does and unique capabilities
2. **Coordination**: How it works with other specialists and when to use
3. **Boundaries**: Important limitations and error handling approach
4. **Outcomes**: Expected deliverables and integration patterns

**QUALITY REQUIREMENTS:**
- Clear success criteria and verification approach
- Integration points with other specialists defined
- Error handling and recovery procedures specified

## Specialist Coordination

**COORDINATION PATTERNS:**
- **Direct Assignment**: Existing specialist handles the work with minimal adaptation
- **Collaborative**: Multiple specialists work together with defined integration points
- **Sequential**: Dependencies require ordered execution with clear handoffs
- **Parallel**: Independent work streams that sync at completion

**INTEGRATION DESIGN:**
- Define interfaces and data flows upfront
- Establish communication protocols between specialists
- Plan verification and quality checkpoints
- Design conflict resolution and error recovery procedures

## Best Practices

**AGENT SELECTION:**
- Mandatory discovery of existing capabilities before any specialist creation
- Score compatibility objectively (domain fit, adaptation potential, coordination needs)
- Adapt existing specialists when 60+ compatibility, create only when <60%
- Document why existing specialists cannot be adapted when creating new ones

**EXECUTION OPTIMIZATION:**
- Default to parallel execution unless dependencies require sequence
- Create specialists for independent work units
- Design integration architecture upfront
- Batch specialist creation for efficiency

**QUALITY ASSURANCE:**
- All specialists must meet description standards
- Verification approach defined for each specialist
- Integration points tested and validated
- Recovery procedures specified for error handling

## Error Handling

**STRUCTURED ERROR FORMAT:**
```json
{
  "type": "agent_error",
  "agent": "[specialist-name]", 
  "error": {
    "message": "Clear description of what failed",
    "details": "Context and debugging information",
    "suggestions": ["Recovery option 1", "Recovery option 2"]
  },
  "coordination": {
    "affected_specialists": ["specialist-1", "specialist-2"],
    "recovery_approach": "Steps to coordinate recovery"
  }
}
```

**RECOVERY STRATEGIES:**
- **Immediate Retry**: For transient failures
- **Alternative Approach**: When initial method fails
- **Coordination Adjustment**: For integration issues
- **Escalation**: When specialist cannot resolve issue independently
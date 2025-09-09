# Agent Management Framework

## Purpose
**MANDATORY AGENT EXECUTION**: All tasks must be executed through agents. Determine specialist requirements and create comprehensive agent teams for complete task coverage.

## Agent Selection Strategy

**CORE PRINCIPLE:** Create agents for ALL tasks - research, implementation, verification, and coordination.

**MANDATORY AGENT CREATION PROCESS:**
1. **Task Analysis**: Deploy analysis specialist to break down task requirements
2. **Agent Requirements**: Create specialist-design specialist to determine needed agent capabilities
3. **Discovery Process**: Use existing-agent-scanner specialist to identify available specialists
4. **Creation Decision**: Deploy agent-creation specialist to create new specialists for all task components
5. **Integration Design**: Create coordination specialist to design collaboration patterns between all specialists

## Parallel Creation Framework

**PARALLEL-FIRST APPROACH:**
- Identify independent work units that can run simultaneously
- Create specialists for each distinct capability area needed
- Coordinate integration points and handoffs upfront
- Default to parallel execution unless dependencies require sequence

## Specialist Creation Standards

**MANDATORY CREATION REQUIREMENTS:**
- ALL task components require dedicated specialists - no exceptions
- Research work requires research specialists
- Implementation work requires implementation specialists  
- Verification work requires verification specialists
- Coordination work requires coordination specialists
- Analysis work requires analysis specialists

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
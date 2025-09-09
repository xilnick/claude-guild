# Specialist Invocation Framework

## Purpose
Define systematic approaches for discovering, selecting, and coordinating specialists to optimize task execution through intelligent resource utilization.

## Core Philosophy
**Principle**: Match capabilities to needs through systematic assessment and coordination.

**SPECIALIST TYPES:**
- **Existing Specialists**: Proven capabilities and established patterns
- **New Specialists**: Custom-built for specific needs and novel requirements
- **Coordinated Teams**: Multiple specialists working together on complex tasks

## Discovery Process

**CAPABILITY ASSESSMENT:**
1. **Scan Available**: Review existing specialists and their capabilities
2. **Map Domains**: Identify coverage areas and expertise patterns
3. **Assess Fit**: Rate compatibility between needs and available capabilities
4. **Plan Integration**: Design coordination approach for selected specialists

## Selection Framework

**COMPATIBILITY SCORING:**
- **High Match (80+)**: Existing specialist perfect fit with minimal adaptation
- **Good Match (60-79)**: Existing specialist can be adapted effectively
- **Medium Match (40-59)**: Existing specialist needs significant adaptation
- **Low Match (<40)**: Create new specialist optimized for specific requirements

**SELECTION DECISION:**
- **Direct Assignment**: High match (80+), assign to existing specialist
- **Adapted Assignment**: Good match (60-79), adapt existing specialist to context
- **Team Coordination**: Multiple existing specialists needed for comprehensive coverage
- **New Creation**: Low match (<60), create specialist optimized for requirements with documented justification

## Specialist Description Standard

**REQUIRED ELEMENTS (4 components):**
1. **Purpose**: What this specialist does and unique capabilities
2. **Coordination**: How it works with others and when to use it
3. **Boundaries**: Important limitations and error handling approach  
4. **Outcomes**: Expected deliverables and integration approach

**ADAPTATION APPROACHES:**
- **Direct Use**: Apply existing capabilities with minimal modification
- **Context Adaptation**: Modify approach for specific requirements while leveraging core strengths
- **Team Integration**: Coordinate multiple specialists with clear role definitions and handoffs
- **Custom Creation**: Build new specialist optimized for specific needs and context

## Coordination Patterns

**SPECIALIST INTERACTION:**
- **Direct Communication**: Specialists work together with clear interfaces
- **Sequential Handoffs**: Output from one becomes input to next
- **Parallel Coordination**: Multiple specialists work simultaneously with sync points  
- **Hierarchical Management**: Coordination specialist manages multiple work streams

**INTEGRATION DESIGN:**
- Define clear interfaces and data flows between specialists
- Establish communication protocols and checkpoints
- Plan error handling and recovery procedures
- Design verification and quality assurance approaches

## Error Handling

**STRUCTURED ERROR RESPONSE:**
```json
{
  "type": "specialist_error",
  "specialist": "[name]",
  "error": {
    "message": "Clear description of failure",
    "context": "Situational details",
    "suggestions": ["Recovery approach 1", "Recovery approach 2"]
  },
  "coordination": {
    "affected_specialists": ["specialist-1", "specialist-2"],
    "recovery_steps": "Coordination recovery approach"
  }
}
```

**RECOVERY APPROACHES:**
- **Retry**: For transient failures
- **Alternative Method**: When primary approach fails  
- **Coordination Adjustment**: For integration issues
- **Specialist Replacement**: When fundamental mismatch exists

## Best Practices

**SELECTION OPTIMIZATION:**
- Mandatory assessment of existing capabilities before any specialist creation
- Score compatibility objectively based on requirements and adaptation potential
- Document why existing specialists cannot be adapted when creating new ones
- Prefer adaptation over creation when compatibility is 60+ to reduce coordination complexity

**EXECUTION EFFICIENCY:**
- Design integration architecture upfront when using multiple specialists
- Establish clear communication protocols and checkpoints
- Plan error handling and recovery procedures in advance
- Monitor performance and adjust coordination approach as needed


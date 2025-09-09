# Task Workflow Framework

## Purpose
Research, decompose, and route tasks to appropriate specialists through systematic analysis and intelligent coordination.

## Task Research Phase

**UNDERSTANDING REQUIREMENTS:**
- Clarify user intent and desired outcomes
- Identify success criteria and constraints  
- Assess task complexity and scope
- Determine resource and coordination needs

**RESEARCH STRATEGY:**
- Ask clarifying questions when requirements are ambiguous
- Break down vague requests into specific deliverables
- Identify dependencies and integration requirements
- Plan execution approach based on complexity assessment

## Task Decomposition

**DECOMPOSITION PRINCIPLES:**
- Break complex tasks into independent work units
- Identify opportunities for parallel execution
- Minimize dependencies between work units
- Design clear interfaces between components

**WORK UNIT CRITERIA:**
- Each unit should have clear, measurable outcomes
- Units should be as independent as possible
- Dependencies should be explicit and documented
- Integration points should be planned upfront

**PARALLELIZATION ASSESSMENT:**
- Challenge assumed dependencies - can work be done simultaneously?
- Identify true blockers that prevent parallel execution
- Design coordination for necessary sequential work
- Default to parallel execution when possible

## Routing Strategy

**SPECIALIST ASSIGNMENT:**
- Route work units to appropriate specialists based on domain expertise
- Consider existing specialist capabilities before creating new ones
- Design collaboration patterns between multiple specialists
- Plan handoffs and integration points

**ROUTING DECISIONS:**
- **Single Specialist**: When work unit fits one domain clearly
- **Multiple Specialists**: When work requires diverse expertise
- **Sequential Routing**: When dependencies require ordered execution
- **Parallel Routing**: When work units are independent

**INTEGRATION PLANNING:**
- Define interfaces between work units handled by different specialists
- Plan synchronization points for dependent work streams
- Design coordination mechanisms for complex multi-specialist tasks
- Establish quality gates and handoff criteria

## Coordination Framework

**EXECUTION COORDINATION:**
- Launch independent work streams simultaneously when possible
- Monitor progress across all work units
- Coordinate dependencies and integration points
- Adjust routing and coordination based on execution results

**INTEGRATION MANAGEMENT:**
- Ensure work units integrate properly at planned interfaces
- Coordinate timing of dependent work streams
- Handle integration conflicts and compatibility issues
- Maintain overall task coherence across multiple specialists

## Purpose
Systematic approach to analyzing, planning, and executing tasks through intelligent decomposition and coordination.

## Core Workflow Process

**SEQUENTIAL PHASES:**
1. **Analyze**: Understand requirements and success criteria
2. **Decompose**: Break down into manageable work units  
3. **Execute**: Implement solutions through coordinated specialists
4. **Verify**: Ensure completeness and user satisfaction

**EXECUTION PRINCIPLES:**
- Identify opportunities for parallel work streams
- Minimize dependencies between work units
- Coordinate integration points upfront
- Iterate improvements based on verification results

## Task Analysis

**UNDERSTANDING PHASE:**
- Clarify requirements and constraints
- Identify success criteria and deliverables
- Assess complexity and resource needs
- Plan execution approach and coordination strategy

**DECOMPOSITION STRATEGY:**
- Break complex tasks into independent work units
- Identify opportunities for parallel execution
- Minimize dependencies between work streams  
- Plan integration points and handoffs

## Specialist Coordination

**DISCOVERY AND ASSIGNMENT:**
1. **Assess Available**: Review existing specialists and capabilities
2. **Match Requirements**: Score compatibility between needs and available options
3. **Assign Optimally**: Use existing specialists when suitable, create new when needed
4. **Coordinate Integration**: Design collaboration patterns and handoffs

**EXECUTION COORDINATION:**
- Launch independent work streams simultaneously when possible
- Coordinate dependencies and integration points
- Monitor progress and adjust coordination as needed
- Ensure quality and completeness across all work streams

## Dependency Management

**DEPENDENCY ASSESSMENT:**
- Challenge assumed dependencies - can work be done independently?
- Identify true blockers that prevent parallel execution
- Design coordination for necessary dependencies
- Minimize sequential constraints where possible

**COMMON PATTERNS:**
- **Independent Work**: Files, features, and components that can be developed simultaneously  
- **Logical Dependencies**: Core foundations that must be established first
- **Integration Points**: Planned synchronization and handoff moments
- **Coordination Requirements**: Communication and alignment needs

## Quality Integration

**VERIFICATION APPROACH:**
- Apply systematic verification throughout execution
- Coordinate verification across multiple work streams
- Address issues promptly to maintain momentum
- Ensure user satisfaction before considering work complete

**QUALITY MAINTENANCE:**
- Follow established standards and best practices
- Document work and decisions for future reference  
- Learn from execution patterns to improve approaches
- Maintain clean execution without unnecessary artifacts

## Error Handling

**STRUCTURED APPROACH:**
- Identify issues quickly through systematic checking
- Document problems clearly with context and impact
- Design targeted solutions that address root causes
- Implement fixes and verify they resolve issues completely

**ERROR RESPONSE FORMAT:**
```json
{
  "type": "workflow_error", 
  "message": "Clear description of what failed",
  "context": "Situational details and impact",
  "suggestions": ["Solution approach 1", "Solution approach 2"],
  "coordination": "Impact on other work streams"
}
```

**RECOVERY STRATEGIES:**
- **Immediate Retry**: For transient issues
- **Alternative Approach**: When primary method fails  
- **Coordination Adjustment**: For integration problems
- **Specialist Support**: When specialized expertise needed

## Best Practices

**SYSTEMATIC EXECUTION:**
- Understand requirements thoroughly before beginning implementation
- Break complex tasks into manageable, independent work units
- Coordinate integration points and dependencies upfront
- Monitor progress and adjust approach based on results

**SPECIALIST COORDINATION:**
- Assess available specialists before creating new ones
- Document selection rationale and assignments clearly
- Design coordination patterns that minimize conflicts
- Enable organic collaboration while maintaining oversight

**QUALITY FOCUS:**
- Apply verification systematically throughout execution  
- Address issues promptly to maintain momentum
- Learn from patterns to improve future implementations
- Ensure user satisfaction before considering work complete

**EFFICIENT OPERATIONS:**
- Default to parallel execution when work units are independent
- Batch operations and tool calls for optimal performance
- Challenge dependencies to maximize parallelization opportunities
- Design recovery approaches for different types of failures
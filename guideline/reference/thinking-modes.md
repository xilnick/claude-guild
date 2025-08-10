# Thinking Modes Reference

## Overview
Comprehensive guide to thinking mode configurations and their application in Guild agents.

## Thinking Mode Definitions

### Ultrathink Mode
```yaml
Purpose: Comprehensive strategic analysis
Usage: Critical decisions and complex planning
Agents:
  - guild-reasoning-agent
  - guild-planning-agent

Characteristics:
  - Deep multi-stage analysis
  - Comprehensive exploration of alternatives
  - Detailed constraint analysis
  - Risk assessment and mitigation
  - Strategic decision making

When to Use:
  - Requirement analysis
  - Strategic planning
  - Architecture decisions
  - Complex problem solving
  - Critical path determination
```

### Think-Harder Mode
```yaml
Purpose: Thorough analytical processing
Usage: Complex analysis requiring depth
Agents:
  - guild-specification-agent
  - Standalone specialists (as needed)

Characteristics:
  - Multi-stage reasoning
  - Assumption challenging
  - Alternative exploration
  - Thorough validation
  - Deep understanding

When to Use:
  - Specification analysis
  - Documentation review
  - Complex debugging
  - Performance analysis
  - Security assessment
```

### Think Mode (Standard)
```yaml
Purpose: Efficient execution and synthesis
Usage: Implementation and routine operations
Agents:
  - All research agents
  - All implementation engineers
  - guild-verification-agent

Characteristics:
  - Focused reasoning
  - Efficient processing
  - Clear execution
  - Standard validation
  - Quick decisions

When to Use:
  - Code implementation
  - Context synthesis
  - Testing execution
  - Routine validation
  - Standard operations
```

## Agent-Specific Assignments

### Strategic Agents
```yaml
guild-reasoning-agent:
  mode: ultrathink
  rationale: Comprehensive requirement analysis
  focus: Understanding full context and implications
  
guild-planning-agent:
  mode: ultrathink
  model: opus
  rationale: Strategic workflow coordination
  focus: Optimal resource allocation and routing
```

### Analytical Agents
```yaml
guild-specification-agent:
  mode: think-harder
  rationale: Thorough documentation analysis
  focus: Complete specification understanding
```

### Synthesis Agents
```yaml
guild-project-research-agent:
  mode: think
  rationale: Efficient context gathering
  focus: Quick synthesis of project information
  
guild-global-research-agent:
  mode: think
  rationale: External context integration
  focus: Rapid pattern identification
```

### Implementation Agents
```yaml
Technology Engineers:
  mode: think
  rationale: Focused execution
  focus: Efficient implementation
  
guild-verification-agent:
  mode: think
  rationale: Systematic validation
  focus: Quality assurance
```

## Cognitive Load Management

### Resource Allocation
```yaml
High Complexity Tasks:
  - Use ultrathink for decisions
  - Think-harder for analysis
  - Standard think for execution
  
Medium Complexity Tasks:
  - Think-harder for planning
  - Standard think throughout
  
Low Complexity Tasks:
  - Standard think only
  - Optimize for speed
```

### Parallel Execution
```yaml
Strategy:
  - Reserve ultrathink for sequential critical paths
  - Use standard think for parallel operations
  - Balance cognitive load across agents
  - Optimize total throughput
```

## Chain-of-Thought Patterns

### Ultrathink Pattern
```xml
<ultrathink-process>
  <stage-1>
    Problem decomposition
    Constraint identification
    Context gathering
  </stage-1>
  
  <stage-2>
    Alternative generation
    Trade-off analysis
    Risk assessment
  </stage-2>
  
  <stage-3>
    Strategy selection
    Validation planning
    Success criteria
  </stage-3>
  
  <stage-4>
    Implementation planning
    Resource allocation
    Coordination setup
  </stage-4>
</ultrathink-process>
```

### Think-Harder Pattern
```xml
<think-harder-process>
  <analysis>
    Deep examination
    Pattern recognition
    Assumption questioning
  </analysis>
  
  <synthesis>
    Alternative consideration
    Integration planning
    Validation approach
  </synthesis>
  
  <conclusion>
    Recommendation
    Justification
    Next steps
  </conclusion>
</think-harder-process>
```

### Standard Think Pattern
```xml
<think-process>
  <understand>
    Parse requirements
    Identify approach
  </understand>
  
  <execute>
    Implement solution
    Validate results
  </execute>
  
  <report>
    Summary
    Next actions
  </report>
</think-process>
```

## Performance Optimization

### Mode Selection Criteria
```yaml
Factors:
  - Task complexity
  - Decision criticality
  - Available time
  - Resource constraints
  - Error tolerance
  
Guidelines:
  - Use minimum sufficient mode
  - Escalate when uncertain
  - Monitor effectiveness
  - Adjust based on results
```

### Efficiency Strategies
```yaml
Optimization:
  - Batch similar thinking tasks
  - Pipeline different modes
  - Cache thinking results
  - Reuse analysis outputs
  - Parallelize where possible
```

## Configuration Management

### Project-Level Settings
```yaml
Location: .guild/instructions.md

Format:
  ## Agent Requirements
  - guild-planning-agent: ultrathink + opus
  - guild-reasoning-agent: ultrathink
  - guild-specification-agent: think-harder
  - Others: think (default)
```

### Runtime Overrides
```yaml
User Prompts:
  - Can request specific modes
  - Override default assignments
  - Temporary adjustments
  - Experimental configurations
```

## Best Practices

### Mode Assignment
1. Match mode to task complexity
2. Reserve ultrathink for critical paths
3. Use think-harder for deep analysis
4. Default to standard think
5. Monitor and adjust

### Performance Balance
1. Avoid overusing enhanced modes
2. Parallelize standard operations
3. Sequential critical thinking
4. Cache expensive analysis
5. Optimize total throughput

### Quality Assurance
1. Validate mode effectiveness
2. Track decision quality
3. Monitor resource usage
4. Adjust assignments
5. Document rationale

## Common Patterns

### Planning Workflow
```yaml
Pattern:
  1. Reasoning (ultrathink) → Requirements
  2. Research (think) → Context
  3. Planning (ultrathink) → Strategy
  4. Implementation (think) → Execution
```

### Debugging Workflow
```yaml
Pattern:
  1. Analysis (think-harder) → Root cause
  2. Planning (think) → Fix strategy
  3. Implementation (think) → Solution
  4. Verification (think) → Validation
```

### Specification Workflow
```yaml
Pattern:
  1. Analysis (think-harder) → Understanding
  2. Planning (ultrathink) → Update strategy
  3. Implementation (think) → Documentation
  4. Validation (think) → Consistency
```

## Notes

- Thinking modes directly impact quality and performance
- Project complexity should guide assignments
- User prompts can override configurations
- Regular review improves effectiveness
- Balance quality with efficiency
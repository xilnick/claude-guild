# Context Engineering Module

## Purpose
Defines context management strategies, XML handoff protocols, and optimization techniques. This module is embedded into the setup command to enable efficient information flow between agents.

## Context Flow Architecture

### Lifecycle Phases
```xml
<context-lifecycle>
  <generation-phase>
    Context-only agents create structured packages
    Priority classification applied
    References established
  </generation-phase>
  
  <transfer-phase>
    Validation checkpoints
    Compression if needed
    Handoff protocols executed
  </transfer-phase>
  
  <usage-phase>
    Implementation agents validate context
    Execution based on provided information
    Quality gates enforced
  </usage-phase>
  
  <decay-phase>
    Automatic pruning of stale data
    Critical decisions retained
    Archive for future reference
  </decay-phase>
</context-lifecycle>
```

## Structured Handoff Protocols

### XML Context Package Template
```xml
<context-package>
  <metadata>
    <from-agent>source-agent-name</from-agent>
    <to-agent>target-agent-name</to-agent>
    <timestamp>ISO-8601</timestamp>
    <priority>critical|important|supplementary</priority>
  </metadata>
  
  <executive-summary>
    High-level overview of context and decisions
  </executive-summary>
  
  <requirements>
    <functional>What needs to be accomplished</functional>
    <technical>Constraints and specifications</technical>
    <quality>Standards and expectations</quality>
  </requirements>
  
  <implementation-context>
    <approach>Recommended implementation strategy</approach>
    <constraints>Technical limitations</constraints>
    <dependencies>Required components</dependencies>
  </implementation-context>
  
  <validation-criteria>
    <success-metrics>How to measure success</success-metrics>
    <acceptance-criteria>What defines completion</acceptance-criteria>
    <quality-gates>Required quality standards</quality-gates>
  </validation-criteria>
  
  <references>
    <files>file:line citations</files>
    <functions>function signatures</functions>
    <documentation>relevant docs</documentation>
  </references>
</context-package>
```

### Agent-Specific Handoffs

#### Reasoning to Planning
```xml
<reasoning-to-planning>
  <validated-requirements>
    Clear understanding of user intent
    Identified constraints and edge cases
    Success criteria definition
  </validated-requirements>
  
  <complexity-assessment>
    Task complexity rating
    Required expertise areas
    Resource requirements
  </complexity-assessment>
  
  <recommendation>
    Suggested approach
    Risk factors
    Alternative strategies
  </recommendation>
</reasoning-to-planning>
```

#### Planning to Implementation
```xml
<planning-to-implementation>
  <execution-strategy>
    Step-by-step implementation plan
    Agent assignments
    Coordination points
  </execution-strategy>
  
  <technical-specifications>
    Architecture decisions
    Technology choices
    Integration requirements
  </technical-specifications>
  
  <quality-requirements>
    Testing strategy
    Performance targets
    Security considerations
  </quality-requirements>
</planning-to-implementation>
```

#### Research to Planning
```xml
<research-to-planning>
  <project-context>
    Codebase patterns discovered
    Technology stack analysis
    Existing implementations
  </project-context>
  
  <external-context>
    Best practices identified
    Framework recommendations
    Community standards
  </external-context>
  
  <synthesis>
    Key findings
    Applicable patterns
    Integration opportunities
  </synthesis>
</research-to-planning>
```

## Context Optimization Techniques

### Priority Classification
```yaml
Priority Levels:
  Critical:
    - Must have for task completion
    - Core requirements and constraints
    - Blocking dependencies
    
  Important:
    - Significantly helps execution
    - Quality improvements
    - Performance optimizations
    
  Supplementary:
    - Nice to have information
    - Additional examples
    - Extended documentation
    
Usage:
  - Always include critical
  - Include important when possible
  - Add supplementary if space permits
```

### Compression Strategies
```yaml
Techniques:
  Reference-Based Linking:
    - Use file:line citations
    - Avoid content duplication
    - Link to source locations
    
  Progressive Detail:
    - Start with summaries
    - Expand on request
    - Hierarchical structure
    
  Intelligent Filtering:
    - Remove redundant information
    - Focus on relevant patterns
    - Prune outdated context
    
  Hierarchical Summarization:
    - Executive summary at top
    - Detailed sections below
    - Drill-down capability
```

### Context Management
```yaml
Input Processing:
  - Task requirement extraction
  - Constraint identification
  - Complexity assessment
  - Pattern recognition
  
Context Generation:
  - Structured XML packages
  - Priority classification
  - Reference establishment
  - Compression application
  
Handoff Execution:
  - Validation checkpoint
  - Acknowledgment requirement
  - Clarification mechanism
  - Error recovery
```

## Performance Optimization

### Context Transfer Efficiency
```yaml
Optimization Metrics:
  - Transfer size: 85% reduction
  - Processing time: 60% faster
  - Memory usage: 50% lower
  - Quality maintained: 100%
  
Strategies:
  - Smart caching between stages
  - Parallel context preparation
  - Predictive loading
  - Incremental updates
```

### Multi-Level Caching
```yaml
Cache Levels:
  L1 - Agent Local:
    - Current task context
    - Recent decisions
    - Active references
    
  L2 - Stage Shared:
    - Stage-wide context
    - Common patterns
    - Shared resources
    
  L3 - Workflow Global:
    - Project context
    - Configuration
    - Historical data
    
Invalidation:
  - Time-based expiry
  - Change detection
  - Manual refresh
  - Cascade updates
```

## Error Handling

### Context Transfer Failures
```yaml
Failure Types:
  incomplete_context:
    detection: Validation fails
    action: Request clarification
    fallback: Use defaults
    
  oversized_context:
    detection: Size threshold exceeded
    action: Apply compression
    fallback: Request summary
    
  invalid_format:
    detection: Schema validation fails
    action: Return to source
    fallback: Manual intervention
    
Recovery Strategies:
  - Retry with exponential backoff
  - Request alternative format
  - Escalate to planning agent
  - Graceful degradation
```

## Integration Points

### Setup Command Embedding
This module provides:
- Context package templates
- Handoff protocol definitions
- Optimization strategies
- Performance guidelines

### Agent Communication
Used by all agents for:
- Creating context packages
- Validating received context
- Executing handoffs
- Managing lifecycle

### Workflow Coordination
Enables workflow features:
- Stage transitions
- Parallel coordination
- Result aggregation
- Quality gates

## Key Invariants

1. **XML Structure**: All handoffs use structured XML format
2. **Priority Respect**: Critical context always included
3. **Reference Optimization**: Use citations over duplication
4. **Validation Required**: All transfers validated
5. **Lifecycle Management**: Context follows defined phases

## Module Dependencies
- agent-architecture.md (agent types)
- workflow-patterns.md (stage transitions)

## Module Consumers
- All Guild agents
- `/guild:setup` command
- Workflow orchestration
- Stage coordination logic
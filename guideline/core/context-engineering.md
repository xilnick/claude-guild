# Context Engineering Module

## Purpose
Core context engineering that defines the Guild system's intelligence. This module is embedded into the setup command.

## Embedded Intelligence

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

### Scope-Boundary Handoffs

#### Cross-Scope Communication

```xml
<scope-boundary-handoff>
  <metadata>
    <from-scope>payments</from-scope>
    <to-scope>user-management</to-scope>
    <integration-point>user-payment-linking</integration-point>
    <priority>critical</priority>
  </metadata>
  
  <contract>
    <interface>PaymentUserInterface</interface>
    <data-schema>UserPaymentSchema</data-schema>
    <validation-rules>payment-user-rules</validation-rules>
  </contract>
  
  <dependencies>
    <required>user-id-validation</required>
    <optional>payment-history-access</optional>
  </dependencies>
  
  <constraints>
    <security>PCI-compliance-required</security>
    <performance>sub-100ms-response</performance>
    <consistency>eventual-consistency-ok</consistency>
  </constraints>
</scope-boundary-handoff>
```

#### Domain Agent Coordination

```xml
<domain-coordination>
  <scope-analysis>
    <scope-name>e-commerce</scope-name>
    <sub-scopes>[cart, checkout, inventory, pricing]</sub-scopes>
    <complexity>high</complexity>
    <dependencies>external-payment-gateway</dependencies>
  </scope-analysis>
  
  <agent-allocation>
    <primary>guild-ecommerce-domain-agent</primary>
    <supporting>
      - guild-payments-domain-agent
      - guild-inventory-specialist
      - guild-pricing-engine
    </supporting>
  </agent-allocation>
  
  <execution-strategy>
    <parallelization>scope-level</parallelization>
    <coordination>boundary-validation</coordination>
    <conflict-resolution>automatic</conflict-resolution>
  </execution-strategy>
</domain-coordination>
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

## Integration Points

### Setup Command Embedding
This module is embedded into `/guild:setup` command during installation.

### Module Dependencies
- Extracted from: master-context-engineering.md

### Module Consumers
- `/guild:setup` command (primary)
- Agent generation logic
- Workflow orchestration
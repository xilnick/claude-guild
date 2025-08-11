# Master Context Engineering Reference

## Overview

This is the comprehensive reference for Guild context management, handoff protocols, and optimization techniques. Core sections are extracted for embedding into the setup command.

## Table of Contents

1. [Context Architecture](#context-architecture)
2. [Handoff Protocols](#handoff-protocols)
3. [Optimization Techniques](#optimization-techniques)
4. [XML Package Specifications](#xml-package-specifications)
5. [Performance Strategies](#performance-strategies)

## Context Architecture

The Guild system uses sophisticated context management to enable efficient information flow between agents.

<!-- CORE-START -->
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
<!-- CORE-END -->

## Handoff Protocols

### Structured XML Packages

The system uses XML-based context packages for reliable information transfer.

<!-- CORE-START -->
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
<!-- CORE-END -->

### Agent-Specific Handoffs

Different agent pairs use specialized handoff formats.

<!-- CORE-START -->
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
<!-- CORE-END -->

## Optimization Techniques

### Context Compression

The system uses multiple strategies to minimize context size while preserving information value.

<!-- CORE-START -->
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
<!-- CORE-END -->

## XML Package Specifications

### Package Structure

Each context package follows a strict schema for consistency.

**Required Elements**:
1. **Metadata**: Source, target, timestamp, priority
2. **Summary**: Executive overview
3. **Content**: Main information payload
4. **References**: Citations and links
5. **Validation**: Success criteria

### Validation Rules

Packages must pass validation before transfer.

**Validation Checks**:
1. **Schema Compliance**: Valid XML structure
2. **Required Fields**: All mandatory elements present
3. **Reference Validity**: Citations point to real locations
4. **Size Limits**: Within acceptable bounds
5. **Priority Consistency**: Appropriate classification

## Performance Strategies

### Multi-Level Caching

The system uses hierarchical caching for performance.

<!-- CORE-START -->
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
<!-- CORE-END -->

## Error Handling

### Context Transfer Failures

The system handles transfer failures gracefully.

<!-- CORE-START -->
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
<!-- CORE-END -->

## Best Practices

### Context Creation

1. **Start Minimal**: Begin with essential information
2. **Use References**: Prefer citations over content
3. **Classify Priority**: Mark importance levels
4. **Structure Hierarchically**: Enable drill-down
5. **Validate Early**: Check before transfer

### Context Consumption

1. **Validate First**: Check package integrity
2. **Extract Critical**: Process high-priority first
3. **Cache Wisely**: Store for reuse
4. **Clean Up**: Remove stale data
5. **Acknowledge Receipt**: Confirm successful transfer

## Integration Points

<!-- CORE-START -->
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
<!-- CORE-END -->

## Troubleshooting

### Common Issues

1. **Validation Failures**: Check XML schema
2. **Size Overruns**: Apply compression
3. **Lost Context**: Verify handoff protocols
4. **Stale Data**: Review cache invalidation
5. **Performance Issues**: Optimize transfer size

### Debug Strategies

- Enable context logging
- Inspect XML packages
- Monitor transfer sizes
- Track cache hit rates
- Review validation errors

## Advanced Topics

### Custom Handoff Protocols

Creating specialized handoffs for unique agent pairs.

**Design Process**:
1. Identify information needs
2. Define XML schema
3. Implement validation
4. Test transfer protocol
5. Document usage

### Context Evolution

How context packages evolve during workflow execution.

**Evolution Patterns**:
- Progressive enrichment
- Iterative refinement
- Selective pruning
- Priority adjustment
- Reference accumulation
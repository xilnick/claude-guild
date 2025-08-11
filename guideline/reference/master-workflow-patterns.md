# Master Workflow Patterns Reference

## Overview

This is the comprehensive reference for Guild workflow patterns, execution strategies, and coordination mechanisms. Core sections are extracted for embedding into the setup command.

## Table of Contents

1. [Workflow Architecture](#workflow-architecture)
2. [Stage Definitions](#stage-definitions)
3. [Execution Strategies](#execution-strategies)
4. [Flag Processing Logic](#flag-processing-logic)
5. [Coordination Mechanisms](#coordination-mechanisms)

## Workflow Architecture

The Guild system uses a flexible, stage-based workflow architecture that adapts to task requirements.

<!-- CORE-START -->
## Standard Workflow Patterns

### Default Workflow Configuration

```yaml
Base Workflow:
  stages: [reasoning, research, planning, implementation]
  description: Standard development flow for most tasks
  
Full Workflow (--full):
  stages: [reasoning, research, planning, implementation, testing, verification, refactoring]
  description: Comprehensive development lifecycle
  
Specialized Workflows:
  fix_workflow: [reasoning, research, planning, fix_stage]
  plan_workflow: [reasoning, research, planning, save_to_file]
  research_workflow: [reasoning, research]
  spec_workflow: [reasoning, spec_analysis, spec_update, research, planning, implementation]
  refactor_workflow: [reasoning, research, refactor_planning, refactoring]
```

### Stage Definitions

```yaml
Context-Only Stages:
  reasoning:
    executor: main-thread
    purpose: Task analysis and requirement clarification using ultrathink mode
    output: Structured requirements and constraints
    
  research:
    agents: [guild-project-research-agent, guild-global-research-agent]
    purpose: Context gathering and synthesis
    output: Comprehensive context packages
    
  planning:
    agent: guild-planning-agent
    purpose: Strategic planning and routing
    output: Implementation strategy and agent assignments

Implementation Stages:
  implementation:
    agents: [technology-engineers]
    purpose: Execute planned changes
    output: Completed features and modifications
    
  testing:
    agents: [technology-engineers, guild-verification-agent]
    purpose: Create and execute tests
    output: Test results and coverage
    
  verification:
    agent: guild-verification-agent
    purpose: Validate against requirements
    output: Quality assessment and fixes
    
  refactoring:
    agents: [planning-agent, technology-engineers]
    purpose: Optimize code structure
    output: Improved code quality
```
<!-- CORE-END -->

## Stage Definitions

### Context-Only Stages

These stages analyze and plan without making changes to the codebase.

**Reasoning Stage**:
- Deep task analysis
- Requirement clarification
- Constraint identification
- Edge case discovery

**Research Stage**:
- Project context gathering
- External best practices
- Pattern identification
- Technology assessment

**Planning Stage**:
- Strategic approach design
- Resource allocation
- Risk assessment
- Success criteria definition

### Implementation Stages

These stages execute changes based on context from analysis stages.

**Implementation Stage**:
- Feature development
- Bug fixes
- Integration work
- Documentation updates

**Testing Stage**:
- Test creation
- Test execution
- Coverage analysis
- Quality validation

**Verification Stage**:
- Requirement validation
- Integration testing
- Performance assessment
- Final quality check

## Execution Strategies

The Guild system supports multiple execution strategies optimized for different scenarios.

<!-- CORE-START -->
## Flag-Based Stage Control

### Flag Processing Logic

```yaml
Flag Categories:
  Disable Flags:
    --no-reason: Remove reasoning stage
    --no-plan: Remove planning stage
    --no-implement: Remove implementation stage
    
  Enable Flags:
    --fix: Add fix stage
    --test: Add testing stage
    --verify: Add verification stage
    --refactor: Add refactoring stages
    --full: Enable all quality stages
    
  Mode Flags:
    --reason: Reasoning-only mode (when alone)
    --plan: Planning-only mode (when alone)
    --research: Research-only mode (when alone)
    --spec: Specification mode

Processing Order:
  1. Detect single-flag modes
  2. Start with default stages
  3. Process --full flag
  4. Apply disable flags
  5. Apply enable flags
  6. Handle special modes
```

### Special Mode Handling

```yaml
Single-Flag Modes:
  --reason only:
    stages: [reasoning]
    behavior: Deep prompt analysis
    output: Requirement clarification
    
  --fix only:
    stages: [reasoning, research, planning, fix_stage]
    behavior: Systematic bug fixing
    output: Debugged solution
    
  --plan only:
    stages: [reasoning, research, planning]
    behavior: Strategic analysis
    output: Saved plan file
    
  --research only:
    stages: [reasoning, research]
    behavior: Context gathering
    output: Research synthesis
    
  --spec only:
    stages: [reasoning, research, planning, spec_stages]
    behavior: Specification management
    output: Updated documentation
    
  --refactor only:
    stages: [reasoning, research, refactor_planning, refactoring]
    behavior: Code optimization
    output: Refactored code
```
<!-- CORE-END -->

## Execution Patterns

### Sequential Execution

Used when stages have dependencies.

<!-- CORE-START -->
## Execution Strategies

### Sequential Execution

```yaml
When: Dependencies exist between stages
Flow: Stage A → Stage B → Stage C
Benefits:
  - Clear dependencies
  - Predictable flow
  - Simple error handling
  
Example:
  reasoning → research → planning → implementation
```

### Parallel Execution

```yaml
When: Independent work possible
Flow: 
  Stage A ⟍
  Stage B → Aggregation
  Stage C ⟋
  
Benefits:
  - Maximum efficiency
  - Reduced latency
  - Better resource utilization
  
Example:
  Project Research ∥ Global Research → Context Synthesis
```

### Pipeline Execution

```yaml
When: Stages can overlap
Flow:
  Stage A → Stage B (starts early)
       ↘ Stage C (overlapped)
       
Benefits:
  - Continuous flow
  - Early starts
  - Reduced total time
  
Example:
  Planning → Implementation (early start) → Testing (overlapped)
```

### Adaptive Execution

```yaml
Strategy Selection:
  Simple Tasks: Sequential execution
  Complex Tasks: Parallel with coordination
  Large Projects: Pipeline with checkpoints
  
Factors:
  - Task complexity
  - Available agents
  - Context size
  - Performance requirements
```
<!-- CORE-END -->

## Coordination Mechanisms

### Context Synchronization

The system manages context isolation and synchronization between agents.

<!-- CORE-START -->
## Coordination Mechanisms

### Context Synchronization

```yaml
Isolation:
  - Separate working contexts per agent
  - File access boundaries
  - Independent state management
  
Synchronization Points:
  - Stage transitions
  - Result aggregation
  - Phase checkpoints
  
Conflict Resolution:
  - Lock mechanisms for shared resources
  - Sequential fallback for conflicts
  - Merge strategies for parallel results
```

### Stage Handoffs

```yaml
Handoff Protocol:
  1. Stage completion signal
  2. Context package creation
  3. Validation checkpoint
  4. Next stage activation
  5. Acknowledgment receipt
  
Context Transfer:
  - Structured XML packages
  - Priority classification
  - Reference-based linking
  - Compression when needed
```
<!-- CORE-END -->

## Workflow Optimization

### Performance Strategies

The system optimizes workflow execution for maximum efficiency.

<!-- CORE-START -->
## Workflow Optimization

### Performance Strategies

```yaml
Optimization Techniques:
  - Stream execution for fast response
  - Parallel research for efficiency
  - Context caching between stages
  - Smart agent pooling
  
Metrics:
  - First response time
  - End-to-end completion
  - Context transfer size
  - Resource utilization
```

### Adaptive Routing

```yaml
Routing Decisions:
  Task Analysis:
    - Complexity assessment
    - Technology detection
    - Scope determination
    
  Agent Selection:
    - Capability matching
    - Load balancing
    - Specialization alignment
    
  Strategy Selection:
    - Sequential for simple
    - Parallel for complex
    - Pipeline for large
```
<!-- CORE-END -->

## Error Handling

### Stage Failure Recovery

The system handles failures gracefully with recovery strategies.

**Failure Types**:
1. **Agent Failures**: Individual agent errors
2. **Context Failures**: Transfer or validation issues
3. **Resource Failures**: System resource problems
4. **Coordination Failures**: Synchronization issues

**Recovery Strategies**:
- Retry with exponential backoff
- Fallback to alternative agents
- Graceful degradation
- Manual intervention escalation

## Quality Gates

### Stage Transition Validation

Each stage transition includes quality gates to ensure readiness.

**Validation Points**:
1. **Context Completeness**: Required information present
2. **Format Correctness**: Proper structure and syntax
3. **Resource Availability**: Agents and systems ready
4. **Success Criteria**: Previous stage goals met

## Best Practices

### Workflow Design

1. **Start Simple**: Use default workflow for most tasks
2. **Add Stages Incrementally**: Enable flags as needed
3. **Monitor Performance**: Track execution metrics
4. **Optimize Bottlenecks**: Focus on slowest stages
5. **Document Patterns**: Record successful workflows

### Flag Usage

1. **Use --full for Production**: Comprehensive quality
2. **Use --plan for Architecture**: Strategic planning
3. **Use --fix for Debugging**: Focused problem solving
4. **Use --research for Learning**: Context gathering
5. **Combine Wisely**: Understand flag interactions

## Integration Points

<!-- CORE-START -->
## Integration Points

### Setup Command Embedding
This module provides:
- Workflow pattern definitions
- Stage configuration logic
- Flag processing rules
- Execution strategies

### Runtime Execution
Workflows execute through:
- Dynamic stage selection
- Flag-based configuration
- Adaptive strategy choice
- Agent coordination

### Command Integration
Used by commands:
- `/guild` (primary consumer)
- `/guild:setup` (embeds patterns)
- All workflow-based operations

## Key Invariants

1. **Stage Order**: Context-only stages before implementation
2. **Flag Priority**: Single-flag modes override combinations
3. **Adaptive Strategy**: Choose based on task complexity
4. **Context Flow**: Always through structured handoffs
5. **Quality Gates**: Validation at stage transitions
<!-- CORE-END -->

## Troubleshooting

### Common Issues

1. **Stage Skipping**: Check flag configuration
2. **Slow Execution**: Review parallelization opportunities
3. **Context Loss**: Validate handoff protocols
4. **Quality Issues**: Ensure verification stages enabled
5. **Coordination Problems**: Check synchronization points

### Debug Strategies

- Enable workflow logging
- Monitor stage transitions
- Inspect context packages
- Track execution times
- Review quality gates
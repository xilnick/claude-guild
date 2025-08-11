# Workflow Patterns Module

## Purpose
Core workflow patterns that defines the Guild system's intelligence. This module is embedded into the setup command.

## Embedded Intelligence

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
  Multi-Scope Projects: Maximum parallelization
  
Factors:
  - Task complexity
  - Available agents
  - Context size
  - Performance requirements
  - Number of scopes
  - Inter-scope dependencies
```

### Large Project Workflows

```yaml
Scope Discovery Workflow:
  stages: [scope_analysis, boundary_detection, agent_generation, scope_planning]
  parallel: true
  description: Discover and analyze project scopes
  execution:
    - Parallel directory scanning
    - Concurrent pattern matching
    - Simultaneous boundary detection
    - Parallel agent generation per scope
    
Multi-Scope Workflow:
  stages: [reasoning, scope_analysis, parallel_research, parallel_planning, parallel_implementation, integration_testing]
  description: Handle multi-scope projects efficiently
  execution:
    - Sequential reasoning for requirements
    - Parallel scope analysis
    - Parallel research per scope
    - Parallel planning with boundary coordination
    - Parallel implementation per scope
    - Integration testing across boundaries
    
Monorepo Workflow:
  stages: [package_discovery, dependency_analysis, parallel_package_work, integration_validation]
  description: Optimized for monorepo structures
  execution:
    - Discover all packages
    - Analyze inter-package dependencies
    - Parallel work on independent packages
    - Validate package integration
```

### Parallel Execution Control

```yaml
Parallelization Flags:
  --parallel:
    description: Enable parallel execution
    default: auto-detect based on project size
    levels: [none, minimal, balanced, maximum]
    
  --max-parallel:
    description: Maximum parallel agents
    default: number_of_cpu_cores
    range: 1-32
    
  --scope-parallel:
    description: Enable scope-based parallelization
    default: true for multi-scope projects
    
  --parallel-strategy:
    description: Parallelization strategy
    options: [sequential, parallel, pipeline, adaptive]
    default: adaptive

Parallel Stage Configuration:
  research:
    max_parallel: unlimited
    strategy: scatter-gather
    coordination: merge_results
    
  planning:
    max_parallel: number_of_scopes
    strategy: hierarchical
    coordination: boundary_validation
    
  implementation:
    max_parallel: 2_per_scope
    strategy: scope_isolated
    coordination: conflict_detection
    
  testing:
    max_parallel: test_suite_count
    strategy: test_parallel
    coordination: result_aggregation
```

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

## Integration Points

### Setup Command Embedding
This module is embedded into `/guild:setup` command during installation.

### Module Dependencies
- Extracted from: master-workflow-patterns.md

### Module Consumers
- `/guild:setup` command (primary)
- Agent generation logic
- Workflow orchestration
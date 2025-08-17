# Workflow Patterns Module
**Version**: 2.5.0 | **Last Updated**: 2025-01-17 | **Dependencies**: principles.md, agents.md, parallel.md

## Purpose
Ultra-parallel workflow patterns for massive Guild system execution with aggressive agent spawning and micro-task coordination. This module is embedded into the setup command.

## Embedded Intelligence

### Intelligent Execution Pattern with Smart Context

**Ultra-Parallel 3-Stage Workflow with Massive Specialist Coordination**:
```yaml
Ultra-Parallel Flow:
  reasoning: Main thread uses ultrathink to analyze requirements and decomposition potential
  planning: Meta-planning agent decomposes into 10-100+ micro-tasks with similarity clustering
  implementation: 5-20+ specialist instances execute micro-tasks with distributed coordination
  validation: Cross-specialist validation with distributed quality assurance

Ultra-Parallel Principles:
  - Main thread analyzes complexity and identifies massive parallelization opportunities
  - Meta-planning agent decomposes tasks into micro-tasks (function/method level granularity)
  - Similarity-based batching clusters related micro-tasks for efficiency
  - Massive agent spawning (5-20+ instances) based on micro-task count
  - Distributed context coordination across all instances
  - Real-time load balancing and work stealing protocols
  - Granular conflict prevention through file/symbol ownership
  - Ultra-parallel validation across all specialist instances
```

### Simple Workflow Stages

**Core 3-Stage Pattern**:
```yaml
Standard (DEFAULT - ALWAYS USED UNLESS FLAGS SPECIFIED):
  stages: [reasoning, planning, implementation]
  description: Simple 3-stage workflow - efficient for all tasks
  flags: --no-reason, --no-plan, --no-implement to disable stages

Focused Modes:
  reasoning_only: [reasoning] - use --no-plan --no-implement
  planning_only: [reasoning, planning] - use --no-implement
  implementation_only: [planning, implementation] - use --no-reason (planning creates basic context)
```

### Stage Definitions

**Core Stages**:
```yaml
Reasoning Stage:
  executor: main thread (only stage executed by main thread)
  thinking_mode: ultrathink
  purpose: Requirement analysis and task understanding

  Analysis Components:
    1. Requirement Analysis (ultrathink):
       - Parse user requirements and clarify ambiguities
       - Identify task scope and complexity
       - Determine success criteria

    2. Task Understanding (think harder for planning context):
       - Understand what needs to be accomplished
       - Identify key constraints and requirements
       - Create clear context for planning stage

  output: Task understanding and requirements for planning

Planning Stage:
  agent: meta-planning specialist (guild-meta-planning-agent)
  thinking_mode: ultrathink for massive decomposition and coordination
  purpose: Ultra-parallel micro-task decomposition with massive specialist coordination
  input: Requirements and task understanding from reasoning stage
  output: Micro-task batches with optimal instance distribution and coordination protocols

  Ultra-Parallel Planning Process:
    1. Aggressive Task Decomposition (ultrathink):
       - Decompose tasks into 10-100+ micro-tasks at function/method level
       - Apply multi-dimensional similarity clustering (domain, technical, operation)
       - Calculate optimal instance count: ceil(micro_tasks / 5)
       - Create granular file/symbol ownership mapping
       - Design conflict prevention and resolution strategies

    2. Massive Specialist Coordination (ultrathink):
       - Create specialists based on detected patterns and complexity
       - Establish distributed context pool with ultra-parallel synchronization
       - Plan micro-task distribution using similarity-based batching
       - Configure cross-instance communication through distributed context

    3. Ultra-Parallel Orchestration (ultrathink):
       - Plan instance counts: 5-20+ instances based on micro-task analysis
       - Establish distributed context coordination for massive cooperation
       - Configure real-time load balancing and work stealing protocols
       - Enable ultra-parallel quality assurance across all instances
       - Design dynamic redistribution and failure recovery mechanisms

Implementation Stage:
  agents: Massive specialist instances with distributed context coordination
  execution: ultra-parallel with distributed context and real-time load balancing
  purpose: Execute micro-tasks with massive specialist coordination and distributed quality
  output: Completed micro-task implementations with ultra-parallel validation and integration

  Ultra-Parallel Implementation Execution:
    - Massive specialist engagement (5-20+ instances) based on micro-task analysis
    - Distributed context sharing across all instances through intelligent coordination
    - Real-time coordination across instances for integration points
    - Intelligent conflict detection and resolution across all instances
    - Distributed quality assurance through cross-instance validation
    - Progress monitoring and collective learning through distributed intelligence

  Ultra-Parallel Execution Protocol:
    - Proactive instance spawning when micro_tasks >= 5 (aggressive trigger)
    - Dynamic scaling: ceil(micro_tasks / 5) instances up to 20 maximum
    - Granular file/symbol ownership to prevent conflicts
    - Similarity-based batching for maximum efficiency
    - Use standard Read/Write tools for .guild directory operations
    - Real-time load balancing and work stealing across all instances
    - Aggregate results with distributed conflict resolution
    - Ultra-parallel validation and integration across all micro-tasks
```

### Intelligent Execution Strategies with Smart Context

**Ultra-Parallel Specialist-First Approach** (DEFAULT):
```yaml
Philosophy: Massively engage specialists with distributed context coordination, optimize through ultra-parallel intelligence

Ultra-Parallel Planning Phase:
  - Meta-planning agent decomposes into 10-100+ micro-tasks with similarity clustering
  - Establishes distributed context pool with ultra-parallel synchronization
  - Plans massive cross-instance coordination through distributed context sharing
  - Configures real-time conflict detection and resolution across all instances
  - Targets maximum specialist utilization with distributed context-driven coordination

Ultra-Parallel Implementation Phase:
  - Specialists engage massively (5-20+ instances) based on micro-task analysis
  - Distributed context sharing prevents conflicts and enhances massive coordination
  - Cross-instance validation through distributed understanding
  - Real-time conflict resolution through ultra-parallel context coordination
  - Continuous learning and pattern sharing across all instances

Massive Parallel Strategy:
  - Single planning agent creates ultra-parallel execution plan using ultrathink
  - Aggressive identification and implementation of massive parallel opportunities
  - Plans micro-task distribution and granular ownership for ultra-parallel execution
  - Uses standard Read/Write tools for .guild operations
  - Targets 95%+ parallel execution rate through massive agent spawning

Ultra-Parallel Implementation Coordination:
  - 5-20+ specialist instances work on micro-task batches in parallel
  - Aggressive same-agent parallelization when micro_tasks >= 5
  - Granular file/symbol ownership prevents conflicts
  - Standard tools for all .guild directory operations
  - Real-time progress tracking and distributed result aggregation
  - Dynamic load balancing and work stealing across all instances
```

**Ultra-Parallel Strategy Selection**:
```yaml
Ultra-Parallel Decision Making:
  execution_strategy:
    - Proactively evaluate ultra-parallel execution when micro_tasks >= 5
    - Default to massive parallelization with intelligent fallback to single-threaded
    - Ultra-parallel coordination through granular file/symbol ownership
    - All .guild operations use standard Read/Write tools
    - Default: Assume massive parallelization beneficial until analysis shows otherwise

  Ultra-Parallel Task Assignment:
    - Route micro-tasks to specialist types using enhanced responsibility catalog
    - Spawn 5-20+ instances when micro_tasks >= 5 (aggressive trigger)
    - Assign granular ownership to prevent conflicts across all instances
    - Use similarity-based clustering for maximum efficiency
    - Apply real-time load balancing and work stealing protocols
    - Target: Maximum parallelization (10-20x speedup) based on ultra-parallel analysis

  Scaling Decision Matrix:
    - 1-4 micro-tasks → 1 instance (standard execution)
    - 5-10 micro-tasks → 2 instances (aggressive parallel trigger)
    - 11-30 micro-tasks → 6 instances (ultra-parallel execution)
    - 31-60 micro-tasks → 12 instances (massive parallelization)
    - 61+ micro-tasks → 20 instances (maximum practical parallelization)
```

### Flag-Based Control

**Essential Flags**:
```yaml
Execution Control:
  --no-reason: Skip reasoning stage
  --no-plan: Skip planning stage (reasoning only)
  --no-implement: Skip implementation stage (planning only)

Simple Operation:
  Default: reasoning → planning → implementation
  Customizable: Use flags to disable specific stages as needed
```

### Ultra-Parallel Coordination Patterns with Distributed Context

**Massive Instance Coordination Framework**:
```yaml
Ultra-Parallel Architecture:
  instance_count: 5-20+ specialist instances per specialist type
  coordination_mechanism: distributed context pool with real-time synchronization
  conflict_prevention: granular file/symbol ownership with intelligent resolution
  load_balancing: dynamic work redistribution and stealing across all instances
  
Distributed Context Management:
  context_sharding: distributed context across instance groups for scalability
  real_time_sync: continuous synchronization of discoveries and patterns
  conflict_detection: real-time monitoring and resolution across all instances
  pattern_sharing: cross-instance learning and optimization

Ultra-Parallel Communication Protocol:
  progress_reporting: real-time micro-task completion tracking across all instances
  work_stealing: intelligent redistribution when instances finish early
  failure_recovery: isolation and redistribution of failed micro-tasks
  integration_coordination: cross-instance validation and merge coordination
```

**Similarity-Based Batching Coordination**:
```yaml
Multi-Dimensional Clustering:
  domain_batching: group micro-tasks by business domain (auth, user, product)
  technical_batching: group by tech stack (React, Node.js, database, API)
  operation_batching: group by operation type (CRUD, refactoring, testing)
  complexity_batching: group by effort level (simple, medium, complex)

Batch Assignment Strategy:
  affinity_optimization: assign related micro-tasks to same instance
  load_balancing: distribute effort evenly across all instances
  conflict_minimization: ensure no overlapping file/symbol ownership
  efficiency_maximization: optimize for parallel execution benefits

Cross-Batch Coordination:
  dependency_tracking: manage dependencies between batches
  integration_points: coordinate related micro-tasks across instances
  validation_protocols: ensure consistency across all batches
  merge_strategies: intelligent integration of all completed micro-tasks
```

### Traditional Coordination Patterns with Smart Context

**Smart Context Coordination Strategy**:
```yaml
Intelligent Context Sharing:
  principle: Specialists share context pool with smart coordination mechanisms
  conflict_prevention: Think harder to detect and resolve conflicts through shared intelligence
  communication: Cross-specialist learning and pattern sharing through intelligent coordination
  
Smart Integration Points:
  planning: Think harder to establish context coordination and specialist cooperation
  execution: Think to validate and resolve conflicts through shared context
  completion: Cross-specialist validation and collective learning integration

Context-Driven Coordination:
  shared_understanding: Specialists access shared project understanding for coordination
  intelligent_resolution: Think harder to resolve conflicts through context intelligence
  smart_quality: Cross-specialist validation through shared standards and context awareness
  continuous_learning: Pattern discoveries shared across specialists through intelligent coordination

File-Based Coordination:
  principle: Each file assigned to single agent instance during execution
  conflict_prevention: Clear file ownership prevents write conflicts
  communication: Progress reporting and result aggregation
  
Integration Points:
  planning: Think harder to define task boundaries and file assignments upfront
  execution: Think to validate integration points at completion
  completion: Aggregate results and validate overall success

Standard Tools:
  guild_operations: All .guild directory operations use standard Read/Write tools
  no_special_handling: No guild-specific file operation tools
  consistency: Same tools used throughout entire workflow
```

### Ultra-Parallel Execution with Distributed Context

**Massive Specialist Parallelization**:
```yaml
Ultra-Parallel Trigger Conditions:
  - Proactive micro-task decomposition for 5+ related operations
  - Aggressive parallel execution with similarity-based batching
  - Massive instance spawning based on micro-task count analysis

Ultra-Parallel Execution Pattern:
  1. Meta-planning agent uses ultrathink to decompose into 10-100+ micro-tasks
  2. Creates specialists and establishes distributed context coordination
  3. Applies similarity clustering for optimal batch assignment
  4. Spawns 5-20+ instances with granular ownership mapping
  5. Executes real-time load balancing and work stealing protocols
  6. Performs ultra-parallel validation and integration across all instances

Benefits:
  - 10-20x speedup through massive specialist coordination
  - Minimal conflicts through distributed context intelligence
  - Quality assurance through ultra-parallel cross-instance validation
  - Continuous learning and pattern evolution across all instances

Ultra-Parallel Execution Rules:
  - Proactive decomposition when task complexity supports micro-task approach
  - Aggressive parallel execution for 5+ micro-tasks with distributed coordination
  - Micro-tasks assigned granular file/symbol ownership for conflict prevention
  - Planning agent uses ultrathink to identify massive parallel opportunities
  - Similarity-based batching to optimize efficiency and prevent conflicts
  - Spawn optimal instances: ceil(micro_tasks / 5) up to 20 maximum
  - Each instance works on assigned micro-task batch only
  - Real-time progress monitoring and dynamic load balancing
  - Aggregate results with distributed conflict resolution and validation
```

**Ultra-Parallel Performance Examples**:
```yaml
Real-World Scenarios:
  100_typescript_errors: 20 instances, 5 errors each, 20x speedup
  50_component_tests: 10 instances, 5 tests each, 10x speedup
  80_authentication_updates: 16 instances, 5 files each, 16x speedup
  150_function_refactoring: 20 instances, 7-8 functions each, 20x speedup

Performance Metrics:
  small_scale: 5-10 micro-tasks → 2x speedup (2 instances)
  medium_scale: 25-50 micro-tasks → 8-10x speedup (8-10 instances)
  large_scale: 75-100 micro-tasks → 15-20x speedup (15-20 instances)
  massive_scale: 150+ micro-tasks → 20x speedup (20 instances, resource-limited)
```

### Intelligent Workflow Composition with Smart Context

**Smart Specialist-Driven Composition**:
```yaml
Intelligent Workflow:
  - Always start with reasoning (unless --no-reason) using appropriate thinking modes
  - Meta-planning agent thinks harder to create specialists and establish context coordination
  - Implementation executes with intelligent context coordination
  - Cross-specialist validation through shared context understanding
  - Target: Effective specialist utilization with minimal conflicts

Smart Stage Dependencies:
  - Planning thinks harder to create specialists based on project analysis
  - Implementation engages specialists through intelligent context analysis
  - Validation coordinates through smart context mechanisms
  - Each stage validates through shared understanding and cross-specialist learning

Intelligent Error Handling:
  - Specialist missing: Think to create appropriate specialist or use suitable fallback
  - Task failure: Think harder to redistribute through context-aware load balancing
  - Integration failure: Think harder to resolve through smart context coordination
  - Context conflicts: Think harder to resolve through shared intelligence mechanisms

Ultra-Parallel Performance Targets:
  - 10-20x speedup for micro-task decomposable workloads
  - 5-10x speedup for medium complexity parallel tasks
  - 2-5x speedup for simple tasks with parallel potential
  - Ultra-parallel coordination through granular ownership and distributed intelligence
  - Standard tools for all operations with massive scaling capability
  - Maximum resource utilization through intelligent load balancing and work stealing
  - 95%+ conflict-free execution through intelligent coordination protocols
  - Real-time adaptation and optimization across all instances
```

## Integration Points

### Setup Command Embedding
This module provides workflow patterns for execution orchestration.

### Module Dependencies
- principles.md (core philosophy)
- agents.md (agent framework)

### Module Consumers
- Setup command (embeds workflow patterns)
- Main execution logic (orchestrates workflows)
- Planning agents (compose task sequences)
# Workflow Patterns Module
**Version**: 2.4.0 | **Last Updated**: 2025-01-17 | **Dependencies**: principles.md, agents.md

## Purpose
Essential workflow patterns for Guild system execution. This module is embedded into the setup command.

## Embedded Intelligence

### Intelligent Execution Pattern with Smart Context

**Smart 3-Stage Workflow with Specialist Coordination**:
```yaml
Intelligent Flow:
  reasoning: Main thread uses ultrathink to analyze requirements and complexity
  planning: Meta-planning agent thinks harder to create specialists and coordinate execution
  implementation: Specialists execute work with intelligent context sharing
  validation: Cross-specialist validation with context-driven quality assurance

Smart Principles:
  - Main thread does reasoning and requirement analysis using ultrathink
  - Meta-planning agent thinks harder to detect and create appropriate specialists
  - Intelligent specialist engagement - specialists called based on smart context analysis
  - Context sharing through intelligent coordination mechanisms
  - Parallel execution with smart context-aware coordination
  - Cross-specialist validation through shared context understanding
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
  thinking_mode: think harder
  purpose: Intelligent specialist creation and coordination with smart context sharing
  input: Requirements and task understanding from reasoning stage
  output: Implementation plan with intelligent specialist coordination and context coordination

  Smart Planning Process:
    1. Intelligent Project Analysis (think harder):
       - Analyze project for specialist patterns and opportunities
       - Think harder to detect complexity requiring specialists
       - Create appropriate specialists based on detected patterns
       - Initialize context pool with project intelligence

    2. Specialist Coordination (think harder):
       - Create appropriate specialists from responsibility catalog
       - Establish shared context pool with intelligent synchronization
       - Plan task distribution with context-aware affinity grouping
       - Configure cross-specialist communication through shared context

    3. Execution Orchestration (think harder):
       - Plan instance counts: 2 instances when 3-4 tasks, 3 when 5+ tasks
       - Establish context coordination mechanisms for intelligent cooperation
       - Configure conflict resolution through shared intelligence
       - Enable quality assurance through cross-specialist validation

Implementation Stage:
  agents: Intelligent specialists with smart context sharing
  execution: parallel with intelligent context coordination and cross-specialist cooperation
  purpose: Execute tasks with smart specialist coordination and context-driven quality
  output: Completed implementations with cross-specialist validation and context integration

  Smart Implementation Execution:
    - Intelligent specialist engagement based on context analysis and patterns
    - Context sharing through smart coordination mechanisms
    - Think to coordinate across specialists for integration points
    - Think harder to detect and resolve conflicts intelligently
    - Quality assurance through shared context validation
    - Progress sharing and collective learning through intelligent coordination

  Intelligent Parallel Execution:
    - Think harder to evaluate when >2 tasks exist for same specialist type
    - Spawn multiple instances when beneficial (2 for 3-4 tasks, 3 for 5+ tasks)
    - Assign file ownership to prevent conflicts
    - Use standard Read/Write tools for .guild directory operations
    - Aggregate results and validate integration
    - Think about single-threaded vs parallel execution benefits
```

### Intelligent Execution Strategies with Smart Context

**Smart Specialist-First Approach** (DEFAULT):
```yaml
Philosophy: Intelligently engage specialists with smart context coordination, optimize through shared intelligence

Intelligent Planning Phase:
  - Meta-planning agent creates specialists based on project pattern analysis
  - Establishes shared context pool with intelligent synchronization
  - Plans cross-specialist coordination through smart context sharing
  - Configures conflict detection and resolution mechanisms
  - Targets effective specialist utilization with context-driven coordination

Smart Implementation Phase:
  - Specialists engage based on intelligent context analysis and complexity assessment
  - Context sharing prevents conflicts and enhances coordination
  - Cross-specialist validation through shared understanding
  - Think harder to resolve conflicts through intelligent context coordination
  - Continuous learning and pattern sharing across specialists

Parallel Strategy:
  - Single planning agent creates parallel execution plan using think harder
  - Think harder to identify and implement parallel execution opportunities
  - Plans task distribution and file ownership for effective parallelization
  - Uses standard Read/Write tools for .guild operations
  - Targets 80%+ parallel execution rate when beneficial

Implementation Coordination:
  - Multiple specialists work on assigned tasks in parallel when appropriate
  - Smart same-agent parallelization when >2 tasks exist
  - File-level ownership prevents conflicts
  - Standard tools for all .guild directory operations
  - Progress tracking and result aggregation
  - Think about single-threaded vs parallel execution trade-offs
```

**Smart Parallel Strategy Selection**:
```yaml
Intelligent Decision Making:
  execution_strategy:
    - Think harder to evaluate parallel execution when >2 tasks exist
    - Think about justification for single agent execution
    - Smart coordination through file ownership
    - All .guild operations use standard Read/Write tools
    - Default: Assume tasks are parallelizable until analysis shows otherwise

  Intelligent Task Assignment:
    - Think to route tasks to appropriate specialist types using responsibility catalog
    - Spawn multiple instances when >2 tasks show clear benefit
    - Assign file ownership to prevent conflicts
    - Use affinity-based grouping for efficiency
    - Target: Effective parallelization based on intelligent analysis
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

### Intelligent Coordination Patterns with Smart Context

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

### Intelligent Parallel Execution with Smart Context

**Smart Specialist Parallelization**:
```yaml
Intelligent Trigger Conditions:
  - Think harder when specialists detect patterns requiring their expertise
  - Smart parallel execution for 3+ tasks with context coordination
  - Think to assign tasks through intelligent context affinity

Smart Execution Pattern:
  1. Meta-planning agent uses think harder to analyze for specialist opportunities
  2. Creates specialists and establishes smart context coordination
  3. Think to assign tasks using context-aware affinity grouping
  4. Intelligent coordination through shared context mechanisms
  5. Think harder to resolve conflicts through smart context coordination
  6. Cross-specialist validation and learning through shared context

Benefits:
  - 3-5x speedup through intelligent specialist coordination
  - Minimal conflicts through smart context intelligence
  - Quality assurance through cross-specialist validation
  - Continuous learning and pattern evolution across specialists

Parallel Execution Rules:
  - Think harder when >2 tasks require same specialist type
  - Smart parallel execution for 3+ tasks when beneficial
  - Tasks assigned clear file ownership for conflict prevention
  - Planning agent thinks harder to identify parallel opportunities
  - Think to assign task batches to prevent conflicts
  - Spawn multiple instances: 2 for 3-4 tasks, 3 for 5+ tasks
  - Each instance works on assigned files only
  - Aggregate results and validate integration
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

Performance Targets:
  - 2-3x speedup for applicable tasks when parallel execution beneficial
  - Smart coordination through file ownership and context intelligence
  - Standard tools for all operations
  - Effective resource utilization based on intelligent analysis
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
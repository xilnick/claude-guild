# Workflow Patterns Module
**Version**: 2.2.0 | **Last Updated**: 2025-08-16 | **Dependencies**: principles.md, agents.md

## Purpose
Essential workflow patterns for Guild system execution. This module is embedded into the setup command.

## Embedded Intelligence

### Core Execution Pattern

**Standard Workflow**:
```yaml
Default Flow:
  reasoning: Main thread analyzes requirements using ultrathink mode
  research: Parallel project and technology context gathering
  planning: Task decomposition and intelligent routing to specialists
  implementation: Parallel execution by specialized agents
  validation: Optional quality validation when complexity requires it

Key Principles:
  - Main thread does reasoning and requirement analysis ONLY
  - All other work delegated to specialized agents
  - Parallel execution whenever tasks are independent
  - Minimal coordination through clear boundaries
```

### Workflow Variations

**Basic Workflows**:
```yaml
Standard (DEFAULT - ALWAYS USED UNLESS FLAGS SPECIFIED):
  stages: [reasoning, research, planning, implementation]
  description: Simple 4-stage workflow - fast and efficient for most tasks
  testing: OFF (use --test or --full to enable)
  verification: OFF (use --verify or --full to enable)
  refactoring: OFF (use --refactor or --full to enable)

Full (--full flag - OPTIONAL ENHANCEMENT):
  stages: [reasoning, research, planning, implementation, testing, verification, refactoring]
  description: Comprehensive 7-stage workflow with quality assurance - use when thorough validation needed

Focused Modes:
  research_only: [reasoning, research]
  planning_only: [reasoning, research, planning]
  implementation_only: [reasoning, research, planning, implementation]
```

### Stage Definitions

**Core Stages**:
```yaml
Enhanced Reasoning Stage:
  executor: main thread (only stage executed by main thread)
  thinking_mode: ultrathink
  purpose: Requirement analysis, approach validation, and task decomposition strategy

  Analysis Components:
    1. Requirement Analysis:
       - Parse user requirements and clarify ambiguities
       - Identify task scope and complexity
       - Determine success criteria

    2. Approach Suitability Validation:
       - Analyze proposed technical approach and technology choices
       - Detect potential inefficiencies or anti-patterns
       - Evaluate security and performance implications
       - Check for modern best practices alignment

    3. Alternative Assessment:
       - Identify better tools or approaches when issues detected
       - Research more efficient patterns and solutions
       - Consider security, performance, and maintainability factors
       - Provide specific recommendations with rationale

  output: Enhanced task breakdown with approach validation and agent orchestration plan

Approach Verification Checkpoint:
  executor: main thread analysis (post-reasoning validation)
  trigger: Immediately after reasoning stage completion
  purpose: Critical validation gate for approach appropriateness

  Verification Criteria:
    technology_appropriateness:
      - Is the chosen technology stack suitable for the task?
      - Are there more appropriate tools available?
      - Is the approach aligned with project constraints?

    efficiency_analysis:
      - Does the approach follow best practices?
      - Are there performance implications to consider?
      - Is the solution appropriately scoped?

    anti_pattern_detection:
      - Using regex for complex parsing (recommend proper parsers)
      - Manual HTTP handling (recommend HTTP libraries)
      - SQL string concatenation (recommend parameterized queries)
      - Poor authentication methods (recommend secure alternatives)

    security_considerations:
      - Are security best practices followed?
      - Are there known security vulnerabilities in the approach?
      - Is input validation and sanitization properly considered?

  Actions When Issues Detected:
    workflow_halt: STOP execution immediately
    issue_analysis: Present detailed concerns and risks
    alternative_proposal: Suggest better approaches with explanations
    user_decision_gate: Require explicit user choice to proceed/adjust

  Actions When Approach Validated:
    validation_confirmation: Log approach as verified and appropriate
    workflow_continuation: Proceed to research stage
    risk_documentation: Note any minor risks for planning stage

  output: Approach validation report with proceed/halt decision

Research Stage:
  agents: research specialists (project + technology)
  execution: parallel (up to 3 instances each type)
  purpose: Gather comprehensive context about project and technology
  output: Context packages for planning and implementation

Enhanced Planning Stage:
  agent: planning specialist (single coordinator with advanced analysis capabilities)
  thinking_mode: ultrathink
  purpose: Advanced task decomposition with dependency analysis and intelligent routing
  input: Research context, user requirements, and project dependency graph
  output: Optimized task assignments with dependency-aware scheduling and context packages

  Dependency Analysis Process:
    1. Project Structure Analysis:
       - Parse import/require statements across all files
       - Build comprehensive dependency graph with weight scoring
       - Identify circular dependencies and resolution strategies
       - Map component relationships and coupling strength

    2. Task Interdependency Mapping:
       - Analyze task dependencies based on file relationships
       - Identify critical path and parallel execution opportunities
       - Calculate dependency depth and impact scoring
       - Determine optimal task ordering and batching

    3. Parallel Execution Planning:
       - Group independent tasks for maximum parallelization
       - Identify tasks that can run concurrently without conflicts
       - Plan coordination points for dependent task sequences
       - Optimize for minimal waiting time and maximum throughput

    4. Resource Allocation Strategy:
       - Estimate resource requirements per task
       - Plan specialist allocation based on dependency analysis
       - Schedule instance spawning to minimize overhead
       - Balance workload across available parallel agents

  Advanced Output:
    dependency_graph: Complete task dependency mapping with weights
    parallel_execution_plan: Optimized scheduling for maximum concurrency
    coordination_points: Required synchronization moments
    specialist_assignments: Task-to-agent mapping with context packages
    risk_assessment: Potential bottlenecks and mitigation strategies

Implementation Stage:
  agents: dynamically created specialists based on project analysis
  execution: parallel with same-agent multiple instances (up to 3 per specialization)
  purpose: Execute decomposed tasks independently with task distribution
  output: Completed implementations with integration validation

  Task Decomposition Example:
    Request: "Add error handling to all service methods"

    Analysis: 15 service files → 3 clusters (independent, dependent, foundation)

    Execution Plan:
      Phase 1: Create shared utilities (3 min)
      Phase 2: Update independent clusters in parallel (6 min)
      Phase 3: Update dependent services (4 min)

    Result: 13 minutes vs 30 minutes sequential (2.3x speedup)

Validation Stages (optional):
  testing: Create and run tests when complexity requires validation
  verification: Quality assessment and compliance checking
  execution: parallel specialists with result aggregation
```

### Execution Strategies

**Enhanced Parallel-First Approach** (default):
```yaml
Philosophy: Maximum parallelization with intelligent coordination and adaptive rebalancing

Research Phase:
  - Project analysis agents work independently with dependency discovery
  - Technology research agents work independently with pattern analysis
  - Parallel context gathering with real-time progress monitoring
  - Results aggregated with dependency graph construction
  - No blocking between research types, optimal resource utilization

Planning Phase:
  - Single planning agent coordinates decomposition with dependency analysis
  - Receives all research context including dependency graphs
  - Routes tasks to appropriate specialists using affinity algorithms
  - Balances workload using complexity estimation and prediction
  - Creates dynamic execution plan with rebalancing triggers

Implementation Phase:
  - Multiple specialists work independently with real-time coordination
  - Dependency-aware scheduling with optimal parallel execution paths
  - Dynamic rebalancing based on progress and performance metrics
  - Integration validation at dependency boundaries and completion
  - Quality gates applied consistently with cross-instance coordination

Dynamic Rebalancing Triggers:
  performance_based:
    - Agent completing tasks 50% faster than estimated → receives more work
    - Agent falling behind 150% of estimate → work redistributed
    - Idle agents detected → automatically steal work from busy agents
    - Resource constraints detected → adaptive scaling and optimization

  dependency_based:
    - Critical path delays detected → priority rebalancing
    - Dependency resolution completed → release dependent tasks
    - Bottleneck identification → parallel alternative path activation
    - Integration conflicts → automatic rollback and rescheduling

  quality_based:
    - Quality issues detected → additional validation agents spawned
    - Consistency violations → cross-instance synchronization triggered
    - Error rates above threshold → specialist replacement or assistance
    - Integration failures → dependency reanalysis and replanning
```

**Enhanced Adaptive Strategy Selection**:
```yaml
Dynamic Decision Making:
  execution_strategy:
    - When to parallelize vs. sequence based on dependency analysis
    - Optimal specialist types and instance counts for current workload
    - How to balance workload using predictive algorithms
    - When coordination is required vs. independent execution
    - What quality gates to apply based on risk assessment

  real_time_adaptation:
    - Dynamic strategy adjustment based on performance metrics
    - Automatic strategy switching when bottlenecks detected
    - Resource-aware strategy selection for optimal utilization
    - Context-driven specialist selection and configuration
    - Failure-aware recovery strategy selection

Advanced Factors Considered:
  dependency_analysis:
    - Task complexity and interdependency mapping
    - Critical path identification and optimization opportunities
    - Dependency depth and parallel execution potential
    - Integration risk assessment and mitigation strategies

  resource_optimization:
    - Project size and structure with scaling implications
    - Available system resources and capacity constraints
    - Memory pressure and context window optimization
    - Network latency and distributed execution considerations

  quality_and_risk:
    - Risk and quality requirements with appropriate validation
    - Error probability assessment and prevention strategies
    - Quality assurance overhead vs. speed trade-offs
    - Integration complexity and testing requirements

Parallel Execution Strategies:
  aggressive_parallel:
    trigger: High independence, ample resources, low risk
    approach: Maximum parallelization with minimal coordination
    monitoring: Performance metrics and resource utilization

  conservative_parallel:
    trigger: Some dependencies, limited resources, moderate risk
    approach: Balanced parallelization with careful coordination
    monitoring: Dependency resolution and quality metrics

  sequential_with_bursts:
    trigger: High dependencies, resource constraints, high risk
    approach: Sequential execution with parallel bursts at safe points
    monitoring: Dependency completion and resource availability

  hybrid_adaptive:
    trigger: Mixed complexity, varying resources, dynamic requirements
    approach: Dynamic switching between strategies based on conditions
    monitoring: Comprehensive metrics with strategy effectiveness tracking
```

### Flag-Based Control

**Essential Flags**:
```yaml
Execution Control:
  --full: Enable comprehensive workflow with quality stages
  --no-implement: Skip implementation (planning only)
  --test: Add testing stage
  --verify: Add verification stage

Parallelization Control:
  --concurrency [N]: Set instances per agent type (default: 3)
  --max-agents [N]: Set total parallel agents (default: 20)

Mode Control:
  --reason: Reasoning analysis only
  --research: Research gathering only
  --plan: Planning only (save plan to file)
  --show-plan: Show execution plan preview before starting (requires confirmation)
```

### Coordination Patterns

**Minimal Coordination Strategy**:
```yaml
Independent Execution:
  principle: Agents work independently whenever possible
  coordination: Only at clear integration boundaries
  communication: Async progress reporting
  conflict_resolution: Apply unified strategy from principles.md

Boundary Management:
  planning: Define interfaces and contracts upfront
  execution: Validate integration points at completion
  quality: Apply consistent validation criteria
  feedback: Report issues for resolution

Load Balancing:
  distribution: Tasks routed to most appropriate specialists
  scaling: Dynamic adjustment based on workload
  optimization: Work stealing and resource rebalancing
  monitoring: Continuous performance tracking
```

### Workflow Composition

**Dynamic Composition**:
```yaml
Claude Composes Workflows Based On:
  - Task complexity and requirements
  - Project size and structure
  - Quality and risk considerations
  - Resource availability and constraints
  - User preferences and flags

Composition Rules:
  - Always start with reasoning in main thread
  - Add research when context is needed
  - Include planning for complex decomposition
  - Parallelize implementation when possible
  - Add validation when complexity requires it

Adaptive Adjustments:
  - Scale parallel execution based on project size
  - Add coordination when dependencies exist
  - Include quality gates for critical functionality
  - Optimize for performance and resource usage
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
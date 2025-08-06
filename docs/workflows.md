# Claude Guild Workflows

## Workflow Philosophy

Guild workflows follow a **stage-based execution model** where each stage has a specific purpose, clear inputs/outputs, and defined handoff protocols.

## Core Workflow Stages

### Stage 1: Task Analysis (Reasoning)

```yaml
Stage: task-analysis
Purpose: Understand and clarify user requirements
Executor: guild-reasoning-agent
Process: analyze-task

Activities:
  - Parse user prompt
  - Correct typos and errors
  - Extract requirements
  - Identify ambiguities
  - Assess complexity
  - Determine initial approach

Outputs:
  - clarified_requirements
  - complexity_assessment
  - suggested_approach
  - research_areas

Handoff:
  To: research agents (parallel)
  Context: requirements, research focus
```

### Stage 2: Context Research

```yaml
Stage: context-research  
Purpose: Gather relevant information
Executors: research agents (parallel)
Processes: research-project-context, research-best-practices

Parallel Execution:
  Project Researcher:
    - Analyze codebase patterns
    - Find existing implementations
    - Identify constraints
    
  Global Researcher:
    - Research best practices
    - Find community solutions
    - Explore alternatives

Outputs:
  - codebase_patterns
  - best_practices
  - technical_constraints
  - solution_alternatives

Handoff:
  To: planning agent
  Context: aggregated research findings
```

### Stage 3: Strategic Planning

```yaml
Stage: strategic-planning
Purpose: Create execution plan and route tasks
Executor: guild-planning-agent
Process: create-execution-plan

Activities:
  - Synthesize research findings
  - Decompose into subtasks
  - Identify dependencies
  - Select appropriate agents
  - Determine execution strategy
  - Define coordination points

Outputs:
  - execution_plan
  - agent_assignments
  - parallel_groups
  - coordination_strategy

Handoff:
  To: implementation agents
  Context: assigned tasks, boundaries, interfaces
```

### Stage 4: Implementation

```yaml
Stage: implementation
Purpose: Execute the planned solution
Executors: specialized engineers (parallel/sequential)
Process: implement-solution

Execution Modes:
  Sequential:
    - Single agent
    - Clear dependencies
    - Step-by-step
    
  Parallel:
    - Multiple agents
    - Independent scopes
    - Simultaneous work
    
  Pipeline:
    - Overlapping stages
    - Continuous flow
    - Early starts

Outputs:
  - code_changes
  - tests
  - documentation
  - integration_points

Handoff:
  To: verification agent
  Context: implementation summary, test results
```

### Stage 5: Verification

```yaml
Stage: verification
Purpose: Validate implementation
Executor: guild-verification-agent
Process: validate-implementation

Activities:
  - Check requirements satisfaction
  - Run tests
  - Verify integration
  - Assess quality
  - Identify issues

Outputs:
  - validation_report
  - test_results
  - quality_metrics
  - recommendations
```

## Command-Specific Workflows

### /guild - Main Workflow

```yaml
Command: /guild [flags] "task"
Purpose: General task execution with configurable stages

Default Flow:
  1. Task Analysis (reasoning)
  2. Context Research (parallel)
  3. Strategic Planning
  4. Implementation
  5. Verification (if --verify)

Flag Modifications:
  --no-reason: Skip stage 1
  --no-plan: Skip stage 3
  --no-implement: Stop after planning
  --refactor: Add refactoring stage
  --test: Add testing stage
  --verify: Add verification stage

Special Modes:
  Planning Only (--no-implement only):
    - Execute stages 1-3
    - Save plan to file
    - No implementation
    
  Refactor Only (--refactor only):
    - Skip regular implementation
    - Execute refactor-planning
    - Perform refactoring
```

### /guild:fix - Bug Fix Workflow

```yaml
Command: /guild:fix "bug description"
Purpose: Focused bug fixing workflow

Workflow:
  1. Bug Analysis
     - Understand bug report
     - Identify symptoms
     - Trace root cause
     
  2. Investigation (parallel)
     - Code flow analysis
     - Error pattern research
     - Solution exploration
     
  3. Fix Planning
     - Design fix approach
     - Assess impact
     - Plan testing
     
  4. Implementation
     - Apply fix
     - Add regression tests
     - Update documentation
     
  5. Verification
     - Confirm bug fixed
     - Run test suite
     - Check for regressions
```

### /guild:refactor - Refactoring Workflow

```yaml
Command: /guild:refactor "refactoring goals"
Purpose: Code improvement workflow

Workflow:
  1. Code Analysis
     - Identify code smells
     - Find duplications
     - Assess complexity
     
  2. Research (parallel)
     - Best practices
     - Design patterns
     - Performance optimizations
     
  3. Refactor Planning
     - Define improvements
     - Assess risks
     - Create safety net
     
  4. Refactoring (parallel possible)
     - Eliminate duplication
     - Simplify complexity
     - Improve structure
     - Enhance readability
     
  5. Validation
     - Run tests
     - Check functionality
     - Measure improvements
```

### /guild:plan - Planning Workflow

```yaml
Command: /guild:plan "task description"
Purpose: Planning and documentation only

Workflow:
  1. Task Analysis
     - Deep requirement analysis
     - Stakeholder consideration
     - Risk assessment
     
  2. Comprehensive Research
     - Technical feasibility
     - Alternative approaches
     - Best practices
     
  3. Detailed Planning
     - Architecture design
     - Implementation strategy
     - Test strategy
     - Deployment plan
     
  4. Documentation
     - Save plan to file
     - Create diagrams
     - Generate estimates
```

### /guild:spec - Specification Workflow

```yaml
Command: /guild:spec [level] "specification request"
Purpose: Generate technical specifications

Levels:
  brief: High-level overview
  standard: Detailed specification
  comprehensive: Full technical design

Workflow:
  1. Requirement Analysis
     - Parse specification needs
     - Determine detail level
     - Identify stakeholders
     
  2. Domain Research
     - Industry standards
     - Similar systems
     - Technical constraints
     
  3. Specification Planning
     - Structure design
     - Section organization
     - Detail allocation
     
  4. Specification Generation
     - Technical details
     - API definitions
     - Data models
     - Process flows
     
  5. Validation
     - Completeness check
     - Consistency validation
     - Feasibility assessment
```

### /guild:setup - Setup Workflow

```yaml
Command: /guild:setup
Purpose: Initialize Guild for project

Workflow:
  1. Project Analysis
     - Detect technologies
     - Analyze structure
     - Identify patterns
     
  2. Technology Research
     - Framework patterns
     - Best practices
     - Common configurations
     
  3. Agent Planning
     - Determine needed agents
     - Define specializations
     - Plan boundaries
     
  4. System Creation
     - Create .guild structure
     - Generate agents
     - Configure routing
     - Set up processes
     
  5. Validation
     - Verify setup
     - Test agent creation
     - Confirm configuration
```

## Workflow Patterns

### Pattern 1: Sequential Execution

```yaml
Pattern: Sequential
When: Dependencies exist
Example: Research → Planning → Implementation

Characteristics:
  - Clear order
  - Each stage completes before next
  - Context passed forward
  - Predictable flow

Implementation:
  stages:
    - stage_1: complete
    - stage_2: wait for stage_1
    - stage_3: wait for stage_2
```

### Pattern 2: Parallel Execution

```yaml
Pattern: Parallel
When: Independent tasks
Example: Frontend || Backend || Database

Characteristics:
  - Simultaneous execution
  - No dependencies
  - Result aggregation
  - Efficiency gains

Implementation:
  parallel_group:
    - agent_1: independent
    - agent_2: independent
    - agent_3: independent
  aggregation: merge_results
```

### Pattern 3: Pipeline Execution

```yaml
Pattern: Pipeline
When: Stages can overlap
Example: Research → (Planning starts early) → Implementation

Characteristics:
  - Overlapping stages
  - Continuous flow
  - Early starts
  - Reduced total time

Implementation:
  pipeline:
    - stage_1: start
    - stage_2: start when stage_1 50% complete
    - stage_3: start when stage_2 ready
```

### Pattern 4: Divide and Conquer

```yaml
Pattern: Divide and Conquer
When: Large decomposable tasks
Example: Large refactoring split across modules

Characteristics:
  - Task decomposition
  - Distributed execution
  - Result merging
  - Scalable approach

Implementation:
  decompose: into subtasks
  distribute: to specialized agents
  execute: in parallel
  merge: combine results
```

## Stage Handoff Protocols

### Context Transfer

```yaml
Handoff Structure:
  from: source_agent
  to: target_agent(s)
  context:
    - required_data
    - processed_information
    - recommendations
  timing: immediate | on_completion | milestone
```

### Aggregation Strategies

```yaml
Research Aggregation:
  Type: Merge findings
  Method:
    - Collect all research
    - Remove duplicates
    - Prioritize by relevance
    - Synthesize insights

Implementation Aggregation:
  Type: Combine changes
  Method:
    - Gather all changes
    - Check compatibility
    - Resolve conflicts
    - Create unified result
```

### Synchronization Points

```yaml
Checkpoints:
  After Research:
    - All research complete
    - Findings aggregated
    - Ready for planning
    
  After Planning:
    - Plan finalized
    - Agents assigned
    - Ready for implementation
    
  Before Verification:
    - Implementation complete
    - Tests passing
    - Ready for validation
```

## Workflow Customization

### Stage Configuration

```yaml
# .guild/instructions.md
workflow:
  stages:
    reasoning:
      enabled: true
      model: opus
      
    research:
      parallel: true
      max_time: 30s
      
    planning:
      detail_level: comprehensive
      save_plans: true
      
    implementation:
      parallel_threshold: 3
      quality_checks: true
```

### Custom Stage Addition

```yaml
Custom Stage:
  name: security-review
  after: implementation
  before: verification
  
  executor: guild-security-agent
  process: security-audit
  
  activities:
    - Vulnerability scan
    - Dependency check
    - Security best practices
    
  required_for:
    - Authentication code
    - Payment processing
    - Data handling
```

## Workflow Optimization

### Performance Tuning

```yaml
Optimization Strategies:
  Parallel Maximization:
    - Identify independent tasks
    - Create parallel groups
    - Minimize sequential bottlenecks
    
  Early Start:
    - Begin next stage early
    - Pipeline execution
    - Overlap where possible
    
  Smart Routing:
    - Direct to best agent
    - Avoid unnecessary stages
    - Optimize agent selection
```

### Workflow Metrics

```yaml
Key Metrics:
  Execution Time:
    - Total workflow time
    - Stage durations
    - Parallel efficiency
    
  Success Rate:
    - Workflow completion
    - Stage success
    - Error frequency
    
  Quality Metrics:
    - Output quality
    - Test coverage
    - Bug detection
```

## Error Recovery

### Stage Failure Handling

```yaml
Failure Recovery:
  Retry Strategy:
    - Automatic retry with backoff
    - Maximum 3 attempts
    - Exponential delay
    
  Fallback Strategy:
    - Try alternative agent
    - Simplify approach
    - Request user help
    
  Rollback Strategy:
    - Revert changes
    - Return to checkpoint
    - Safe state restoration
```

### Workflow Rollback

```yaml
Rollback Points:
  - After each stage
  - Before destructive operations
  - At user checkpoints
  
Rollback Process:
  1. Detect failure
  2. Identify rollback point
  3. Restore state
  4. Retry or abort
```

## Best Practices

### Workflow Design

1. **Keep Stages Focused**: Each stage should have a single purpose
2. **Define Clear Handoffs**: Explicit context transfer between stages
3. **Enable Parallelism**: Identify and leverage parallel opportunities
4. **Plan for Failure**: Include error handling and recovery
5. **Measure and Optimize**: Track metrics and improve

### Stage Implementation

1. **Validate Inputs**: Check prerequisites before starting
2. **Progress Tracking**: Report progress during execution
3. **Clean Outputs**: Provide well-structured results
4. **Error Reporting**: Clear, actionable error messages
5. **Documentation**: Document custom stages and modifications

This comprehensive workflow system provides the foundation for efficient, reliable task execution with maximum flexibility and parallelization opportunities.
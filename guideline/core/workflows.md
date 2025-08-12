# Workflow Patterns Module

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
Standard (default):
  stages: [reasoning, research, planning, implementation]
  description: Main development workflow with parallel execution
  
Full (--full flag):
  stages: [reasoning, research, planning, implementation, testing, verification]
  description: Comprehensive workflow with quality stages
  
Focused Modes:
  research_only: [reasoning, research]
  planning_only: [reasoning, research, planning]
  implementation_only: [reasoning, research, planning, implementation]
```

### Stage Definitions

**Core Stages**:
```yaml
Reasoning Stage:
  executor: main thread (only stage executed by main thread)
  thinking_mode: ultrathink
  purpose: Requirement analysis and task decomposition strategy
  output: Clear task breakdown and agent orchestration plan
  
Research Stage:
  agents: research specialists (project + technology)
  execution: parallel (up to 3 instances each type)
  purpose: Gather comprehensive context about project and technology
  output: Context packages for planning and implementation
  
Planning Stage:
  agent: planning specialist (single coordinator)
  thinking_mode: ultrathink
  purpose: Task decomposition and intelligent routing to specialists
  input: Research context and user requirements
  output: Task assignments with context packages for specialists
  
Implementation Stage:
  agents: dynamically created specialists based on project analysis
  execution: parallel with same-agent multiple instances (up to 3 per specialization)
  purpose: Execute decomposed tasks independently with task distribution
  output: Completed implementations with integration validation
  
  Task Decomposition Example:
    Request: "Add error handling to all service methods"
    
    Planning Output:
      - 15 service files identified
      - All need same error handling pattern
      - Files are independent
      
    Agent Spawning:
      - Create 3 instances of service-specialist
      - Distribute 15 files across 3 instances (5 each)
      - All work in parallel
      
    Timeline:
      Sequential: 15 files × 2 min = 30 minutes
      Parallel (3 instances): 5 files × 2 min = 10 minutes
      Speedup: 3x
  
Validation Stages (optional):
  testing: Create and run tests when complexity requires validation
  verification: Quality assessment and compliance checking
  execution: parallel specialists with result aggregation
```

### Execution Strategies

**Parallel-First Approach** (default):
```yaml
Philosophy: Maximum parallelization with intelligent coordination

Research Phase:
  - Project analysis agents work independently
  - Technology research agents work independently  
  - Results aggregated for planning consumption
  - No blocking between research types
  
Planning Phase:
  - Single planning agent coordinates decomposition
  - Receives all research context
  - Routes tasks to appropriate specialists
  - Balances workload across available agents
  
Implementation Phase:
  - Multiple specialists work independently
  - Different files or clear component boundaries
  - Integration validation at completion
  - Quality gates applied consistently
```

**Adaptive Strategy Selection**:
```yaml
Claude Determines:
  - When to parallelize vs. sequence
  - Which specialists are needed
  - How to balance workload
  - When coordination is required
  - What quality gates to apply

Factors Considered:
  - Task complexity and dependencies
  - Project size and structure
  - Available resources and capacity
  - Risk and quality requirements
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
```

### Coordination Patterns

**Minimal Coordination Strategy**:
```yaml
Independent Execution:
  principle: Agents work independently whenever possible
  coordination: Only at clear integration boundaries
  communication: Async progress reporting
  conflict_resolution: File ownership and merge rules
  
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
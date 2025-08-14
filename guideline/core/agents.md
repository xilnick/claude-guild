# Agent Framework Module

## Purpose
Generic agent framework that enables dynamic specialist creation based on project analysis. This module is embedded into the setup command.

## Embedded Intelligence

### Generic Agent Architecture

**Dynamic Specialization**: Claude creates specialists based on actual project patterns, not predefined types.

**Core Agent Types**:
```yaml
Research Agents:
  purpose: Gather context and analyze patterns
  thinking_mode: think
  parallel: true (up to 3 instances)
  examples: project analysis, technology research, pattern discovery
  
Planning Agent:
  purpose: Task decomposition and intelligent routing
  thinking_mode: ultrathink
  parallel: false (single coordinator)
  role: Break down work and route to appropriate specialists
  
Implementation Specialists:
  purpose: Execute specific areas of work
  thinking_mode: think
  parallel: true (up to 3 per specialization)
  created: Based on project analysis and task requirements
  
Quality Specialists:
  purpose: Validation, testing, verification when needed
  thinking_mode: think
  parallel: true (up to 3 instances)
  triggered: When complexity or risk requires validation
```

### Agent Creation Process

**Pattern-Based Generation**:
```yaml
Project Analysis:
  1. Claude examines project structure and patterns
  2. Identifies areas requiring specialized attention
  3. Determines appropriate specialist types
  4. Creates agents with focused context packages
  
Specialization Examples:
  # Based on discovered patterns, not hardcoded types
  - Interface patterns → interface specialist
  - Service patterns → service specialist  
  - Data patterns → data specialist
  - Integration patterns → integration specialist
  - Security patterns → security specialist
  - Performance patterns → performance specialist
  
Context Package Creation:
  - Project-specific patterns and conventions
  - Relevant technology best practices
  - Integration requirements and boundaries
  - Quality standards and validation criteria
  - Specific task requirements and success criteria
```

### Agent Intelligence Model

**No Code Embedding**: Agents receive analysis and use Claude's full capabilities, never hardcoded templates.

**Context-Driven Behavior**:
```yaml
Agent Context Package:
  project_patterns: Discovered conventions and architectural styles
  technology_context: Relevant best practices and patterns
  task_requirements: Specific work to accomplish
  integration_points: Boundaries and interfaces with other work
  quality_standards: Expected quality criteria and validation approaches
  
Agent File Operation Rules:
  1. Check `.guild/ignore.md` patterns before file operations
  2. Exclude matching files from automatic analysis
  3. Skip ignored files during batch modifications
  4. Allow access when user explicitly names ignored files
  5. Report when accessing ignored files by explicit request
  
Agent Execution:
  1. Analyze provided context package
  2. Understand specific task requirements
  3. Apply Claude's full capabilities to implement solution
  4. Follow discovered project patterns and conventions
  5. Validate against provided success criteria
```

### Agent Coordination

**Enhanced Coordination Strategy**:
```yaml
Lock-Free Independence Model:
  file_ownership:
    - Each file assigned to single agent instance during execution
    - Optimistic locking with conflict detection and rollback
    - Read-only access to project context shared across all instances
    - Write permissions granted exclusively to assigned agent
    
  boundary_management:
    - Clear component boundaries defined upfront in planning
    - Interface contracts established before parallel execution
    - Integration points marked with dependency requirements
    - Boundary validation automated at completion checkpoints
    
  conflict_resolution:
    - Automatic detection of write conflicts through file monitoring
    - Priority-based resolution (first-come-first-served for equal priority)
    - Graceful rollback and retry mechanisms for failed operations
    - Escalation to planning agent for complex conflicts

Intelligent Load Balancing:
  work_estimation_distribution:
    - Tasks distributed using complexity-based algorithms
    - Real-time workload monitoring and rebalancing
    - Affinity-based assignment for related tasks
    - Predictive scaling based on queue depth and complexity
    
  adaptive_scaling:
    - Dynamic instance spawning based on workload patterns
    - Automatic scaling up to limits (3 per type, 20 total)
    - Intelligent work stealing with context transfer optimization
    - Resource monitoring with predictive adjustment algorithms
    
  context_optimization:
    - Shared context packages to minimize duplication
    - Incremental context updates for efficiency
    - Context affinity for related task assignment
    - Memory pressure monitoring and optimization

Advanced Progress Tracking:
  real_time_monitoring:
    - Asynchronous progress reporting with detailed metrics
    - Performance tracking against estimated completion times
    - Resource utilization monitoring (CPU, memory, I/O)
    - Quality metrics collection for continuous improvement
    
  coordination_protocols:
    - No blocking waits during normal execution
    - Checkpoint-based synchronization for integration points
    - Streaming progress updates for real-time visibility
    - Automated integration validation at completion
    
  quality_coordination:
    - Consistent quality gates applied across all instances
    - Cross-instance quality metric aggregation
    - Automated quality regression detection
    - Quality-driven task redistribution when needed

Instance Lifecycle Management:
  spawn_coordination:
    - Coordinated instance spawning to prevent resource conflicts
    - Staggered startup to minimize context transfer overhead
    - Instance health monitoring and automatic replacement
    - Graceful shutdown with work preservation
    
  state_management:
    - Instance state isolation to prevent cross-contamination
    - Shared read-only state for project context
    - Transactional state updates for consistency
    - State recovery mechanisms for failure scenarios
```

### Agent Template Structure

**Generic Agent Definition**:
```yaml
---
name: guild-[specialization]-specialist
color: [auto-assigned based on type]
model: inherit
description: [Specific area] specialist - [determined from project analysis]
thinking_mode: think
parallel: true
max_instances: 3
context_embedded: true
---

## Role
You are a specialist in [specific area] based on analysis of this project's patterns and requirements.

## Context
Your context package includes:
- Project patterns and conventions for your specialization area
- Relevant technology best practices and architectural examples
- Integration requirements and boundary definitions
- Quality standards and validation approaches
- Specific task requirements and success criteria

## Execution Approach
1. Review context package for your specialization
2. Understand specific task requirements and constraints
3. Use Claude's full capabilities to implement appropriate solution
4. Follow discovered project patterns and conventions
5. Validate implementation against success criteria
6. Ensure integration compatibility with related components

## Quality Standards
- Follow project's established patterns and conventions
- Maintain consistency with existing code style and architecture
- Validate against provided requirements and constraints
- Ensure proper integration with other components
- Apply appropriate testing when complexity requires it
```

## Multiple Instance Orchestration

**Same-Agent Parallelization**:
```yaml
Instance Creation:
  Trigger: Planning agent identifies multiple independent tasks for same specialization
  Process:
    1. Analyze task list for parallelization opportunities
    2. Group tasks by required specialist type
    3. Spawn multiple instances (up to 3) of same specialist
    4. Assign task batches to each instance
    5. Monitor progress and rebalance if needed

Example Orchestration:
  Task: "Update all API endpoints to add authentication"
  
  Planning Analysis:
    - Found 12 API endpoint files
    - All need same service specialist
    - Files are independent (no shared dependencies)
  
  Execution Plan:
    - Spawn 3 service specialist instances
    - Instance 1: Updates endpoints 1-4
    - Instance 2: Updates endpoints 5-8  
    - Instance 3: Updates endpoints 9-12
    
  Result: 12 files updated in time of 4 sequential updates
```

**Enhanced Instance Coordination**:
```yaml
Advanced Coordination Rules:
  instance_identification:
    - Each instance gets unique ID with role suffix (e.g., service-specialist-1, service-specialist-2)
    - Instance capabilities and specialization context clearly defined
    - Performance history and affinity patterns tracked per instance
    - Health status and availability monitoring for each instance
    
  conflict_prevention:
    - File-level ownership assignment with atomic operations
    - Dependency analysis to prevent circular dependencies
    - Resource locking protocols for shared dependencies
    - Optimistic concurrency with rollback mechanisms
    
  context_management:
    - Shared read access to immutable project context
    - Independent write access to assigned files with versioning
    - Context updates propagated efficiently across instances
    - Memory-efficient context sharing to prevent duplication

Smart Task Assignment:
  affinity_based_assignment:
    - Assign related files to same instance for context reuse
    - Group files by domain, complexity, or technical patterns
    - Consider dependency graphs in assignment decisions
    - Optimize for minimal context switching overhead
    
  dynamic_rebalancing:
    - Real-time monitoring of instance workload and progress
    - Automatic task redistribution when imbalances detected
    - Work stealing protocols for idle instances
    - Priority-based task migration for urgent changes
    
  quality_coordination:
    - Cross-instance consistency checking and validation
    - Shared quality standards and validation protocols
    - Automated integration testing at coordination points
    - Quality metric aggregation and reporting

Communication Protocols:
  progress_reporting:
    - Asynchronous progress updates with detailed metrics
    - Real-time status broadcasting for coordination awareness
    - Milestone-based synchronization for integration points
    - Performance data collection for optimization
    
  coordination_messaging:
    - Event-driven communication for state changes
    - Resource availability announcements for work stealing
    - Error and exception propagation across instances
    - Completion notifications with integration metadata
    
  orchestrator_interface:
    - Centralized coordination through planning agent
    - Load balancing decisions based on real-time data
    - Conflict resolution and escalation protocols
    - Resource allocation and optimization management
```

## Concurrency and Load Balancing

**Enhanced Default Settings**:
```yaml
Advanced Concurrency Limits:
  per_agent_type: 3 instances (configurable, auto-tuned based on performance)
  total_parallel: 20 agents maximum (configurable, scaled based on system resources)
  load_balancing: intelligent task distribution with affinity and complexity awareness
  resource_monitoring: real-time performance tracking with predictive analytics
  context_memory: optimized context sharing to minimize memory overhead
  
Intelligent Scaling Strategy:
  predictive_scale_up: 
    - Anticipate capacity needs based on queue analysis
    - Consider task complexity and estimated completion times
    - Spawn instances before bottlenecks occur
    
  graceful_scale_down:
    - Monitor idle time and resource utilization
    - Preserve context for potential reuse
    - Coordinate shutdown to prevent work interruption
    
  cross_specialization_work_stealing:
    - Enable idle specialists to adapt and help overloaded specialists
    - Context transfer protocols for seamless specialist adaptation
    - Capability matching for appropriate task reassignment
    - Quality preservation through supervised adaptation
    
  adaptive_optimization:
    - Real-time performance analysis and adjustment
    - Historical data-driven scaling decisions
    - Resource constraint awareness and optimization
    - Bottleneck prediction and proactive mitigation

Performance Monitoring Hooks:
  real_time_metrics:
    - Task completion time vs. estimates (accuracy tracking)
    - Resource utilization per instance (CPU, memory, I/O)
    - Context transfer overhead and optimization opportunities
    - Quality metrics and consistency measurements
    
  predictive_analytics:
    - Machine learning models for performance prediction
    - Bottleneck identification and prevention
    - Optimal resource allocation recommendations
    - Quality risk assessment and early warning systems
    
  continuous_optimization:
    - Automatic parameter tuning based on performance data
    - A/B testing of different scaling strategies
    - Performance regression detection and alerting
    - Continuous improvement through feedback loops
```

**Advanced Load Balancing Rules**:
```yaml
Intelligent Task Distribution:
  primary_routing:
    - Route tasks to most appropriate specialist type using capability matching
    - Apply affinity-based assignment for related tasks
    - Consider context overlap and reuse opportunities
    - Balance workload using complexity-aware algorithms
    
  cross_specialization_adaptation:
    - Enable specialists to handle adjacent specialization tasks when idle
    - Provide context adaptation protocols for specialist expansion
    - Maintain quality through supervised cross-specialization
    - Track adaptation success rates for optimization
    
  dynamic_rebalancing:
    - Real-time workload monitoring and redistribution
    - Predictive task assignment based on completion estimates
    - Priority-based task migration for urgent requirements
    - Load variance minimization across all active instances

Advanced Resource Management:
  capacity_monitoring:
    - Real-time agent capacity and performance tracking
    - Resource utilization forecasting and optimization
    - Context memory usage monitoring and optimization
    - I/O bandwidth and latency impact assessment
    
  adaptive_scaling:
    - Intelligent instance scaling based on workload patterns
    - Context-aware spawning to minimize overhead
    - Graceful instance termination with state preservation
    - Resource pooling and sharing optimization
    
  context_optimization:
    - Dynamic context package sizing based on task requirements
    - Shared context caching for memory efficiency
    - Context transfer optimization for cross-specialization
    - Context versioning and incremental updates

Cross-Specialization Work Stealing:
  capability_mapping:
    - Map specialist capabilities and adaptation potential
    - Identify tasks suitable for cross-specialization handling
    - Assess context transfer requirements and overhead
    - Evaluate quality risk and mitigation strategies
    
  stealing_protocols:
    - Idle specialist detection and availability advertising
    - Task complexity assessment for stealing suitability
    - Context transfer and adaptation procedures
    - Quality assurance for cross-specialization work
    
  adaptation_mechanisms:
    - Specialist capability expansion through guided learning
    - Context package enhancement for new specialization areas
    - Performance monitoring for adaptation effectiveness
    - Rollback mechanisms for unsuccessful adaptations

Performance Monitoring Hooks:
  execution_metrics:
    - Task start/completion timestamps with duration tracking
    - Resource consumption patterns (CPU, memory, I/O)
    - Context loading and transfer performance
    - Error rates and quality metrics per instance
    
  system_metrics:
    - Overall system throughput and efficiency
    - Agent utilization rates and idle time analysis
    - Cross-specialization success rates and impact
    - Resource contention and bottleneck identification
    
  optimization_triggers:
    - Performance threshold alerts and automated responses
    - Degradation detection with automatic mitigation
    - Capacity planning recommendations based on trends
    - Quality regression detection and correction protocols
```

## Integration Points

### Setup Command Embedding
This module provides agent framework for dynamic specialist creation.

### Module Dependencies
- principles.md (core philosophy)

### Module Consumers
- Setup command (embeds framework)
- Planning agent (creates specialists)
- Workflow orchestration (manages agents)
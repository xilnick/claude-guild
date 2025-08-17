# Agent Framework Module
**Version**: 2.3.0 | **Last Updated**: 2025-01-16 | **Dependencies**: principles.md

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
Enhanced Agent Context Package:
  project_patterns: Discovered conventions and architectural styles
  technology_context: Relevant best practices and patterns
  task_requirements: Specific work to accomplish
  integration_points: Boundaries and interfaces with other work
  quality_standards: Expected quality criteria and validation approaches
  
  # Enhanced for Complex Projects
  project_structure:
    root_path: Absolute path to project root (working directory)
    submodules: [{name, path, remote_url, boundaries}]
    packages: [{name, path, type, dependencies, scope}]
    languages: {path_pattern → primary_language_and_patterns}
    config_files: [{type, path, scope, related_configs}]
    boundaries: 
      submodule_boundaries: Clear separation points between submodules
      package_boundaries: Monorepo package isolation rules
      service_boundaries: Microservice and API boundaries
      language_boundaries: Cross-language interface definitions
    cross_dependencies: [{from_path, to_path, type, interface}]
    
  structure_awareness:
    monorepo_coordination: How to handle workspace operations
    submodule_protocols: When and how to modify submodule content
    cross_language_interfaces: How different languages interact
    dependency_chains: Understanding of dependency flow

Agent File Operation Rules:
  1. Check `{project_root}/.guild/ignore.md` patterns before file operations
  2. Exclude matching files from automatic analysis
  3. Skip ignored files during batch modifications
  4. Allow access when user explicitly names ignored files
  5. Report when accessing ignored files by explicit request
  6. Respect submodule boundaries (understand when crossing is appropriate)
  7. Honor package/workspace isolation in monorepos
  8. Maintain cross-language interface consistency

Agent Execution with Structure Awareness:
  1. Analyze provided context package including project structure
  2. Understand task requirements within structural constraints
  3. Apply Claude's full capabilities respecting boundaries
  4. Follow discovered patterns across all project components
  5. Coordinate changes across submodules/packages when needed
  6. Validate against success criteria and structural integrity
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
    - Follow unified conflict resolution strategy from principles.md
    - Implement lock-free coordination with optimistic concurrency
    - Apply automatic prevention through ownership rules
    - Escalate complex conflicts per defined hierarchy

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

**Smart Instance Coordination**:
```yaml
Instance Management:
  - Unique instance IDs (e.g., service-specialist-1, service-specialist-2)
  - File-level ownership assignment prevents conflicts
  - Shared read access to project context, independent write access
  - Memory-efficient context sharing

Task Assignment:
  - Affinity-based grouping (related files to same instance)
  - Dynamic rebalancing based on workload
  - Work stealing protocols for idle instances
  - Quality coordination across all instances

Communication:
  - Asynchronous progress reporting
  - Event-driven coordination messaging
  - Centralized coordination through planning agent
```

### Claude Instance Spawning Instructions

**CRITICAL**: These are direct execution patterns for Claude to follow when managing agent instances.

**Instance Detection and Spawning Protocol**:
```yaml
STEP 1: Parallel Opportunity Detection
  WHEN analyzing implementation tasks:
    task_count = count_independent_similar_tasks()
    specialist_type = identify_required_specialist()
    
    IF task_count >= 3 AND tasks_are_independent():
      TRIGGER parallel instance spawning
      optimal_instances = min(ceil(task_count / 3), 3)

STEP 2: Task Distribution Strategy Selection
  # Analyze task characteristics to choose distribution method
  
  Domain Affinity Distribution (PREFERRED):
    IF tasks_group_by_business_domain():
      user_tasks = [tasks related to users/auth/profiles]
      product_tasks = [tasks related to products/catalog/search]  
      order_tasks = [tasks related to orders/payments/shipping]
      ASSIGN domain groups to instances for context coherence
  
  Technical Affinity Distribution:
    ELSE IF tasks_group_by_file_type():
      component_tasks = [*.tsx, *.jsx files]
      service_tasks = [*.service.ts, *.api.ts files]
      test_tasks = [*.test.ts, *.spec.ts files]
      ASSIGN technical groups to instances for specialization

  Complexity Balancing Distribution:
    ELSE IF can_estimate_task_complexity():
      high_complexity = [large files, many dependencies, complex patterns]
      medium_complexity = [standard files, moderate dependencies]
      low_complexity = [small files, simple patterns]
      BALANCE total work across instances using estimates

  Round-Robin Distribution (FALLBACK):
    ELSE:
      DISTRIBUTE tasks evenly: [1,4,7...], [2,5,8...], [3,6,9...]

STEP 3: Instance Spawning with Task Tool
  FOR each instance (1 to optimal_instances):
    assigned_batch = get_tasks_for_instance(instance_number)
    
    Task [specialist-agent] (Instance {instance_number}):
    "PARALLEL IMPLEMENTATION BATCH for: [USER_TASK]
    
    Instance Assignment ({instance_number}/{total_instances}):
    Your Specific Tasks: [CLEAR_LIST_OF_ASSIGNED_TASKS]
    Your File Ownership: [EXACT_FILES_THIS_INSTANCE_OWNS]
    
    Shared Context Package:
    - Overall Objective: [USER_TASK]
    - Project Patterns: [DISCOVERED_PATTERNS_AND_CONVENTIONS]
    - Integration Requirements: [BOUNDARIES_AND_INTERFACES]
    - Quality Standards: [PROJECT_QUALITY_CRITERIA]
    
    Instance-Specific Context:
    - Task Batch: [DETAILED_TASK_DESCRIPTIONS_FOR_THIS_INSTANCE]
    - Affinity Group: [DOMAIN/TECHNICAL/COMPLEXITY_GROUP_IF_APPLICABLE]
    - Estimated Complexity: [WORK_ESTIMATION_FOR_BATCH]
    - Dependencies: [ANY_DEPENDENCIES_OR_COORDINATION_NEEDS]
    
    Parallel Execution Rules:
    - Work EXCLUSIVELY on your assigned files: [FILE_LIST]
    - Coordinate with other instances for integration points
    - Report progress: 'Started batch', 'Completed N/M tasks', 'Finished batch'
    - Enable work stealing: Accept additional tasks if you finish early
    - Prevent conflicts: No shared write access with other instances
    
    Expected Output: Complete implementation for your assigned task batch"

STEP 4: Progress Monitoring and Coordination
  MONITOR instance progress:
  - Track completion status from each instance
  - Identify fast/slow instances for potential rebalancing
  - Collect intermediate progress reports
  
  ENABLE dynamic work stealing:
  IF instance finishes early AND other instances still working:
    available_tasks = identify_redistributable_tasks()
    Task [fast-instance]: "Take additional work: [available_tasks]"

STEP 5: Result Aggregation
  WAIT for all instances to complete
  COLLECT implementation results from each instance
  VALIDATE integration between instance outputs
  VERIFY no missing work or file conflicts
  SYNTHESIZE final consolidated results
```

**Instance Coordination Patterns**:
```yaml
File Ownership Management:
  # Critical for conflict prevention
  instance_1_files = [file1.ts, file4.ts, file7.ts, ...]
  instance_2_files = [file2.ts, file5.ts, file8.ts, ...]
  instance_3_files = [file3.ts, file6.ts, file9.ts, ...]
  
  VALIDATE: No file appears in multiple instance assignments
  ENSURE: Each instance has exclusive write access to assigned files

Progress Reporting Protocol:
  EACH instance reports:
  - "Starting parallel batch: [assigned_files]"
  - "Progress update: completed [N] of [total] assigned tasks"
  - "Batch complete: [summary_of_changes_made]"
  
  AGGREGATE progress:
  - Monitor overall completion percentage
  - Identify bottlenecks or blocked instances
  - Enable work redistribution when beneficial

Error Recovery and Fallback:
  IF instance fails or produces errors:
    1. Log specific failure details and affected tasks
    2. Extract incomplete tasks from failed instance
    3. Redistribute failed tasks to other instances OR main thread
    4. Continue with successful instances
    5. Report partial completion with issue details
  
  GRACEFUL degradation ensures partial success even with instance failures
```

**Real Execution Examples**:
```yaml
Example: "Add TypeScript types to 15 JavaScript files"
Detection: 15 independent files, frontend specialist needed
Distribution: Technical affinity + complexity balancing
Instance Spawning:
  Task guild-frontend-engineer (Instance 1):
  "Convert your assigned files to TypeScript: [file1.js, file6.js, file11.js, file14.js, file15.js]
   Focus on complex components requiring careful type definitions."
  
  Task guild-frontend-engineer (Instance 2):
  "Convert your assigned files to TypeScript: [file2.js, file5.js, file8.js, file10.js, file13.js]
   Focus on service layer files with API type definitions."
  
  Task guild-frontend-engineer (Instance 3):
  "Convert your assigned files to TypeScript: [file3.js, file4.js, file7.js, file9.js, file12.js]
   Focus on utility and helper files with simpler type requirements."

Expected: 3x speedup with technical specialization benefits

Example: "Implement CRUD operations for 6 database entities"
Detection: 6 independent entities, backend specialist needed
Distribution: Domain affinity grouping
Instance Spawning:
  Task guild-backend-engineer (Instance 1):
  "Implement CRUD for user-related entities: [User, Profile] 
   Apply consistent authentication and authorization patterns."
  
  Task guild-backend-engineer (Instance 2):  
  "Implement CRUD for product-related entities: [Product, Category]
   Apply consistent validation and search patterns."
  
  Task guild-backend-engineer (Instance 3):
  "Implement CRUD for order-related entities: [Order, Payment]
   Apply consistent transaction and audit patterns."

Expected: 3x speedup with domain expertise accumulation
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
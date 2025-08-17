# Parallel Execution Module
**Version**: 2.4.0 | **Last Updated**: 2025-01-17 | **Dependencies**: principles.md, agents.md, workflows.md

## Purpose
Essential parallel execution strategies for Guild system performance. This module is embedded into the setup command.

## Intelligent Specialist Execution Instructions with Smart Context

**CRITICAL**: These are execution patterns for Claude to follow when implementing intelligent specialist coordination with smart context sharing.

### Smart Specialist Detection and Context Coordination Protocol

**Smart Parallelization Detection** (THINK HARDER TO EVALUATE):
```yaml
Intelligent Detection Pattern:
  Think harder: Is this task parallelizable and would specialists benefit coordination?
  
Independent Agent Tasks (DIFFERENT specialists):
  Strategy: Think to parallelize when different agent types can work effectively together
  Implementation: Route tasks to different specialists with smart context coordination
  
Same-Agent Parallel Instances (SAME specialist type):
  Threshold: Think harder when tasks > 2 for same agent type
  Scaling: 2 tasks per instance until reaching 3 instance limit
  
  Calculation with thinking:
  - 1-2 tasks → 1 instance (think about parallel vs single-threaded benefits)
  - 3-4 tasks → 2 instances (2 tasks each, think harder for coordination)
  - 5-6 tasks → 3 instances (2 tasks each, ultrathink for complex coordination)
  - 7+ tasks → 3 instances (distribute evenly, think harder for load balancing)

Smart Examples:
  - "Update error handling in 5 service files" → Think harder: 3 instances (backend specialist)
  - "Add tests to 8 components" → Think harder: 3 instances (frontend specialist)  
  - "Refactor UI + fix API + update docs" → Think: 3 parallel specialists (different types)
  - "Implement CRUD for 4 entities" → Think harder: 2 instances (backend specialist)

Guidelines:
  - Intelligent specialist creation based on pattern analysis
  - Meta-planning agent thinks harder to analyze for specialist opportunities
  - Smart context coordination for all specialist collaboration
  - Default assumption: Think about whether specialists can coordinate effectively
```

### Intelligent Specialist Creation and Context Coordination Pattern

**Smart Claude Task Tool Usage with Context Coordination**:
```yaml
Step 1: Intelligent Specialist Analysis and Creation
  - Think harder to analyze project for specialist patterns and opportunities
  - Create appropriate specialists based on detected patterns using smart analysis
  - Establish shared context pool with intelligent coordination mechanisms
  - Configure cross-specialist communication and conflict resolution

Step 2: Smart Context-Coordinated Instance Management
  Per specialist type with shared context:
  - 1-2 tasks → 1 instance with full context access
  - 3-4 tasks → 2 instances with shared smart context coordination
  - 5+ tasks → 3 instances with intelligent context synchronization
  
  Formula with Context: instances = min(max(ceil(tasks/2), 1), 3) + smart_coordination
  
  Smart Examples with Context Coordination:
  - 3 tasks → Think harder: Use 2 instances with shared context pool
  - 5 tasks → Think harder: Use 3 instances with intelligent context coordination
  - Mixed types → Think: Engage multiple specialists with cross-context coordination

Step 3: Context-Aware Task Distribution Using Task Tool
  FOR each specialist with smart context coordination:
    Task [specialist-agent] (Instance {i} with Smart Context): 
    "Handle your assigned batch with intelligent context access: [specific task assignments]
    
    Smart Context Package:
    - Shared Understanding: [intelligent project understanding]
    - Cross-Specialist Patterns: [patterns from related specialists]
    - Context Updates: [smart context synchronization]
    - Conflict Resolution: [think harder to detect and resolve conflicts]
    - Integration Coordination: [cross-specialist coordination requirements]
    
    Context-Driven Instructions:
    - Access shared context for comprehensive understanding
    - Think to coordinate effectively with related specialists
    - Share discoveries through intelligent context mechanisms
    - Think harder to resolve conflicts through smart context coordination
    - Validate work through cross-specialist context verification
    
    Expected Output: [deliverables integrated through smart context coordination]"

Step 4: Context-Coordinated Result Aggregation
  - Monitor all specialists through shared context mechanisms
  - Collect results with intelligent conflict resolution
  - Think to validate integration through smart context coordination
  - Report comprehensive results with cross-specialist learning

### Smart Task Distribution with Context Coordination

**Intelligent Affinity-Based Distribution** (DEFAULT approach):
```yaml
When tasks have natural groupings with shared context:

Domain Affinity with Smart Coordination:
  - User-related files → Instance 1 (shared user context patterns)
  - Product-related files → Instance 2 (shared product context patterns)
  - Order-related files → Instance 3 (shared order context patterns)

Technical Affinity with Context Coordination:
  - React components (.tsx) → Instance 1 (shared component patterns)
  - Services (.service.ts) → Instance 2 (shared service patterns)
  - Tests (.test.ts) → Instance 3 (shared testing patterns)

Context Benefits: Smart pattern sharing, intelligent conflict resolution, cross-specialist validation
Guideline: Use context-driven affinity when logical groupings exist (think harder to determine optimal grouping)
```

**Smart Round-Robin** (when no clear affinity patterns):
```yaml
When no clear affinity patterns (rare - most tasks have logical groupings):

Intelligent Even Distribution:
  Instance 1: Tasks [1, 4, 7, 10, ...] with shared context access
  Instance 2: Tasks [2, 5, 8, 11, ...] with shared context access
  Instance 3: Tasks [3, 6, 9, 12, ...] with shared context access
  
Approach: Think to distribute evenly with smart context coordination
Result: Effective parallelization with minimal conflicts through context intelligence
```

### Intelligent Coordination Execution Patterns

**Smart Context Coordination Strategy**:
```yaml
Context-Driven Assignment Pattern:
  - Each file assigned to primary specialist with shared context access
  - Specialists share context pool with intelligent coordination mechanisms
  - Think harder to synchronize context and prevent conflicts
  - Context intelligence enables smart coordination

Implementation with Context Coordination:
  Instance 1 owns: [file1.ts, file4.ts, file7.ts] + shared context access
  Instance 2 owns: [file2.ts, file5.ts, file8.ts] + shared context access
  Instance 3 owns: [file3.ts, file6.ts, file9.ts] + shared context access
  
Context Validation: Think harder to detect conflicts and coordinate through shared intelligence
```

**Smart Progress Reporting Pattern**:
```yaml
Each Specialist Reports Through Shared Context:
  - "Starting work on assigned batch with context coordination: [file_list]"
  - "Updated shared context with discoveries: [pattern_updates]"
  - "Completed [N/total] files with context validation"
  - "Finished all assigned work: [summary] + context contributions"
  
Context Aggregation:
  - Monitor all specialist progress through shared context pool
  - Collect completion reports with intelligent conflict resolution
  - Think to validate integration through smart context coordination
  - Synthesize results with cross-specialist learning integration
```

### Intelligent Error Handling with Smart Context

**Context-Driven Failure Recovery**:
```yaml
IF specialist fails or encounters conflicts:
  1. Think harder to detect and log the failure
  2. Shared context pool identifies alternative resolution strategies
  3. Think to redistribute failed tasks using context-aware load balancing
  4. Think about handling through cross-specialist coordination
  5. Continue with context-validated successful results
  6. Report resolution through shared intelligence analysis

Example Context-Driven Recovery:
  "Specialist 2 encountered pattern conflict in complex refactoring.
   Context intelligence detected alternative approach.
   Redistributing tasks [X, Y, Z] to Specialist 1 with updated context.
   Resolved conflict through shared pattern intelligence.
   Completed 95% of requested changes with enhanced pattern consistency."
```

### Intelligent Performance Optimization with Smart Context

**Context-Driven Load Balancing**:
```yaml
IF specialist finishes early with context awareness:
  1. Shared context pool identifies other specialists' workload status
  2. Think to determine optimal task redistribution
  3. Use Task tool with context coordination to assign additional work:
     Task [specialist-agent] (Instance {fast_instance} with Context):
     "Take on context-optimized additional tasks: [context_aware_tasks]
      Use shared context intelligence for seamless integration."
  4. Update shared context with load balancing decisions

Context-Intelligent Work Stealing Example:
  Instance 1: Finished early (3 tasks in 5 min, shared learning through context)
  Instance 2: Struggling (2/5 tasks, context identifies complexity issues)
  Context Action: Think to reassign 1-2 tasks with context-optimized patterns
  Result: Enhanced performance + improved pattern consistency through shared intelligence
```

### Intelligent Execution Examples with Smart Context

**Example 1: API Endpoint Updates with Context Intelligence**
```yaml
User Request: "Add authentication middleware to all 12 API endpoints"

Intelligent Detection: Think harder to detect backend patterns, create backend specialist
Context Coordination: Think to establish shared middleware patterns and security context
Instance Count: 3 instances with smart authentication context coordination

Context-Driven Execution:
Task guild-backend-engineer (Instance 1 with Auth Context):
"Add authentication middleware to your assigned endpoints with shared auth patterns:
- /api/users/*, /api/users/profile, /api/users/settings, /api/users/preferences

Smart Context Access:
- Shared authentication patterns and middleware conventions
- Security best practices from security specialist
- Cross-endpoint consistency validation through shared context
- Think harder to resolve auth implementation conflicts

Use shared context intelligence for consistent implementation.
Output: Auth middleware with context-validated consistency"

[Similar context-coordinated patterns for instances 2 and 3]

Expected Result: 3-4x speedup with minimal conflicts through context intelligence
```

**Example 2: Component Refactoring with Context Intelligence**
```yaml
User Request: "Convert 15 class components to functional components with hooks"

Intelligent Detection: Think harder to detect React patterns, create frontend specialist
Context Coordination: Think to establish shared component patterns and hook conventions
Instance Count: 3 instances with smart React context coordination

Context-Driven Affinity Distribution:
Instance 1: User components with shared user interaction patterns
Instance 2: Product components with shared product data patterns  
Instance 3: Order components with shared order workflow patterns
ALL: Access to shared React patterns, hook conventions, and component architecture

Context-Coordinated Execution:
Task guild-frontend-engineer (Instance 1 with Component Context):
"Convert your assigned user components with shared context intelligence:
[UserProfile.tsx, UserList.tsx, UserCard.tsx, UserSettings.tsx, UserModal.tsx]

Smart Context Access:
- Shared React patterns and hook conventions
- Cross-component consistency through shared design system
- Think to validate prop interfaces and patterns
- Think harder to resolve hook implementation conflicts

Use context intelligence for consistent functional component patterns.
Maintain interfaces through shared context validation.
Output: Converted components with context-driven consistency"

Expected Result: 3-4x speedup with architectural consistency through context intelligence
```

## Embedded Intelligence with Smart Context

### Intelligent Specialist Philosophy with Context Coordination

**Smart Specialist Strategy with Context Coordination**: Think harder to create and coordinate specialists through intelligent context sharing, engaging specialists based on project analysis.

**Intelligent Settings with Context Coordination**:
```yaml
Concurrency Requirements with Context Coordination:
  per_agent_type: 3 instances (maximum) with shared context pool
  specialization: Think harder to create specialists when patterns detected
  context_coordination: Intelligent shared context across all specialists
  smart_coordination: Think to engage specialists through context analysis

Intelligent Specialist Triggers:
  task_analysis: Think harder to evaluate for specialist engagement opportunities
  pattern_detection: Think to engage specialists when patterns detected
  context_triggers: Think harder to call specialists based on shared context intelligence
  complexity_thresholds: Think harder to create specialists when complexity detected
  cross_integration: Think to coordinate between related specialists
  
SPECIALIST COORDINATION:
  APPROACH: Smart context sharing and intelligent synchronization
  EXAMPLES: "Specialists coordinate through shared intelligence pool" or "Think harder to resolve context conflicts"
```

### Same-Agent Multiple Instance Parallelization

**Core Concept**: Spawn multiple instances of the SAME specialist agent to process independent tasks in parallel.

**Simple Instance Spawning**:
```yaml
Detection Patterns:
  - Multiple files needing same type of modification
  - Independent components requiring same specialist
  - Batch operations on similar code patterns
  - Parallel test creation for related modules

Simple Spawning Strategy:
  1. Planning agent analyzes task and identifies parallel opportunities
  2. Calculates optimal instance count (up to 3)
  3. Applies affinity-based grouping when possible
  4. Spawns instances with clear file ownership
  5. Monitors progress and aggregates results

Benefits:
  - 2-3x speedup for applicable tasks
  - Simple coordination through file ownership
  - Standard tools for all operations
```

### Parallelization Patterns

**Implementation Parallelization**:
```yaml
Pattern: Independent specialist execution
Execution:
  - Different specialists work on different files
  - Clear component boundaries prevent conflicts
  - Integration points defined upfront in planning
Coordination: File-level ownership, integration validation at completion
Benefits: 2-3x speedup through parallel implementation
```

### Simple Load Balancing Strategy

**Automatic Distribution**:
```yaml
Task Routing:
  - Route tasks to most appropriate specialist type
  - Balance workload using simple distribution
  - Apply affinity-based routing for related tasks
  - Prevent overloading any single specialist

Simple Work Stealing:
  - Idle specialists can take on additional work
  - Context transfer through shared project patterns
  - Priority-based task redistribution
```

### Coordination Mechanisms

**Simple Coordination Strategy**:
```yaml
Independence Principle:
  - Agents work independently whenever possible
  - Shared state minimized to essential integration points
  - Communication through simple progress reporting
  - Conflict resolution through file ownership rules

Boundary Management:
  planning_phase: Define interfaces and contracts upfront
  execution_phase: Validate integration points at completion
  quality_phase: Apply consistent validation across all work
  feedback_phase: Report issues and coordinate resolution

Standard Tools:
  - All .guild directory operations use standard Read/Write tools
  - No special coordination tools or complex protocols
  - Simple file-based ownership and conflict prevention
```

### Error Handling and Recovery

**Simple Error Management**:
```yaml
Failure Isolation:
  - Task-level failure containment
  - Continue other work on localized failures
  - Simple reporting of failed vs. successful work

Recovery Strategies:
  fallback_redistribution: Redistribute failed tasks to other instances
  main_thread_fallback: Handle failed tasks with main thread
  partial_completion: Report partial success with clear status
```

### Performance Metrics

**Target Performance**:
```yaml
Efficiency Metrics:
  load_balancing: Even distribution across instances
  coordination_overhead: Minimal overhead through simple protocols
  resource_utilization: Effective use of parallel capabilities

Speedup Expectations:
  implementation_phase: 2-3x through specialist parallelization
  
Overall Performance:
  simple_projects: 2x faster through basic parallelization
  medium_projects: 2-3x faster through intelligent load balancing
  large_projects: 3x faster through optimized coordination
```

## Integration Points

### Setup Command Embedding
This module provides parallel execution strategies for performance optimization.

### Module Dependencies
- principles.md (core philosophy)
- agents.md (agent framework)
- workflows.md (workflow patterns)

### Module Consumers
- Setup command (embeds parallel strategies)
- Workflow orchestration (implements parallelization)
- Agent coordination (manages parallel execution)
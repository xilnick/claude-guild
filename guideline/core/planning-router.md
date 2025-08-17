# Planning Router Module
**Version**: 5.0.0 | **Last Updated**: 2025-01-18 | **Dependencies**: principles.md, agents.md, workflows.md, parallel.md

## Purpose
Master orchestration module that provides intelligent task decomposition, agent spawning coordination, and hierarchical execution management. **CRITICAL**: This module is invoked ONLY after explicit user confirmation of reasoning phase. The planning router handles all heavy cognitive work while specialized agents focus on efficient execution using only "think" mode.

## Planning-Only Architecture

**EXCLUSIVE PLANNING RESPONSIBILITY**: The planning router is NEVER involved in implementation. It serves as a pure orchestrator that:
1. **ONLY PLANS**: Analyzes tasks and creates execution strategies
2. **ONLY COORDINATES**: Spawns and coordinates agents but never implements
3. **ONLY ORCHESTRATES**: Manages agent lifecycle, handoffs, and resource allocation

**ZERO IMPLEMENTATION RULE**: The planning router must NEVER write code, modify files, or perform any implementation tasks. All implementation is delegated to specialist agents.

## Reasoning-First Architecture

**CONFIRMATION-TRIGGERED INVOCATION**: The planning router is never invoked directly by user requests. It is called exclusively by the main thread after:
1. **Reasoning Phase**: Main thread analyzes user prompt for logical issues
2. **Confirmation Phase**: User explicitly confirms understanding is correct
3. **Handoff Phase**: Validated understanding transferred to planning router

**NO RE-ANALYSIS**: Planning router accepts confirmed understanding as authoritative and focuses exclusively on implementation planning rather than requirement interpretation.

## Research Agent Architecture

**PARALLEL RESEARCH COORDINATION**: The planning router spawns 2-5 research agents simultaneously to gather comprehensive intelligence before creating execution plans.

**DUAL RESEARCH STREAMS**: 
- **Project Research Agents**: Analyze codebase patterns, dependencies, architecture, and existing conventions
- **External Research Agents**: Gather documentation, best practices, API references, and external knowledge

**RESEARCH SYNTHESIS**: Planning router synthesizes all research findings to create optimal execution strategies with full context awareness.

<research_agent_framework>
<project_research_patterns>
**Project Research Agent Spawning**:
```yaml
codebase_analysis_agents:
  architecture_researcher:
    responsibility: "Analyze project structure, module boundaries, and architectural patterns"
    mcp_servers: [GitHub, AST-Grep, DeepView]
    deliverable: "Architectural overview with module boundaries and integration points"
    
  technology_stack_researcher:
    responsibility: "Identify frameworks, libraries, versions, and configuration patterns"
    mcp_servers: [GitHub, Context7, Ref Tools]
    deliverable: "Technology inventory with version compatibility and usage patterns"
    
  pattern_discovery_researcher:
    responsibility: "Extract coding conventions, design patterns, and quality standards"
    mcp_servers: [GitHub, Semgrep, DeepView]
    deliverable: "Pattern library with conventions and quality requirements"
    
  dependency_mapping_researcher:
    responsibility: "Map internal dependencies and external integrations"
    mcp_servers: [GitHub, Supabase, Neo4j]
    deliverable: "Dependency graph with integration complexity analysis"

parallel_project_research_execution:
  spawn_count: 3-4 agents simultaneously
  coordination: Each agent focuses on specific research area
  synthesis: Planning router aggregates findings for comprehensive understanding
  duration: 30-60 seconds parallel research phase
```
</project_research_patterns>

<external_research_patterns>
**External Research Agent Spawning**:
```yaml
documentation_research_agents:
  api_documentation_researcher:
    responsibility: "Research external API documentation and integration patterns"
    mcp_servers: [Context7, Ref Tools, WebFetch]
    deliverable: "API integration guide with examples and best practices"
    
  best_practice_researcher:
    responsibility: "Gather current best practices for discovered technologies"
    mcp_servers: [Context7, Ref Tools, WebSearch]
    deliverable: "Best practice recommendations with implementation examples"
    
  framework_documentation_researcher:
    responsibility: "Research framework-specific patterns and advanced usage"
    mcp_servers: [Context7, Ref Tools, WebFetch]
    deliverable: "Framework-specific implementation strategies and patterns"

external_research_coordination:
  spawn_triggers:
    - Unknown external APIs or services
    - New framework versions or features
    - Complex integration requirements
    - Performance optimization needs
  parallel_execution: 2-3 agents researching different external sources
  real_time_synthesis: Aggregate external knowledge with project patterns
```
</external_research_patterns>

<research_synthesis_intelligence>
**Research Integration Process**:
```yaml
research_aggregation:
  project_context_integration:
    - Combine project patterns with external best practices
    - Identify optimal approaches based on existing architecture
    - Plan implementation strategies using discovered conventions
    - Create execution roadmap with full context awareness
    
  constraint_identification:
    - Technical constraints from project architecture
    - External API limitations and requirements
    - Performance requirements and scalability needs
    - Security and compliance requirements
    
  opportunity_discovery:
    - Optimization opportunities from best practice research
    - Integration improvements from external documentation
    - Architecture enhancements from pattern analysis
    - Performance improvements from technology research

synthesis_output:
  comprehensive_execution_plan: Integration of all research findings
  risk_assessment: Potential challenges identified through research
  optimization_opportunities: Performance and architecture improvements
  implementation_strategy: Step-by-step execution plan with full context
```
</research_synthesis_intelligence>
</research_agent_framework>

## Embedded Intelligence

### Planning Router Architecture

**MASTER ORCHESTRATOR (POST-CONFIRMATION)**: The planning router serves as the central intelligence hub for all complex coordination, using think-harder/ultrathink modes to handle sophisticated analysis while keeping all specialized agents in efficient "think" mode. **INVOKED ONLY AFTER USER CONFIRMS REASONING PHASE**.

For complex coordination tasks, ultrathink about the system architecture and agent orchestration. For moderate coordination, think harder about task decomposition and specialist assignments.

**HIERARCHICAL SPAWNING**: Implements intelligent agent hierarchy where planning router spawns domain leads, which can spawn specialized sub-agents based on workload analysis and task patterns.

**COGNITIVE LOAD OPTIMIZATION**: Front-loads all complex thinking into planning phase, enabling parallel agents to execute with minimal cognitive overhead.

**MULTI-INSTANCE SPAWNING**: Creates 3-5 instances of the same specialist type for large tasks, with intelligent work chunking to prevent context overflow and enable continuous execution.

**CONTEXT OVERFLOW PREVENTION**: Monitors agent context usage and proactively spawns fresh instances before context limits are reached, ensuring seamless work continuation.

**PURE PLANNING ORCHESTRATOR**: The planning router NEVER implements - it exclusively plans, coordinates, and orchestrates. All implementation is delegated to specialist agents with proper context and boundaries.

**REASONING-TO-PLANNING HANDOFF**: Planning router receives validated understanding from confirmed reasoning phase, including:
- Resolved logical issues and clarified requirements
- User-confirmed interpretation and approach
- Identified constraints and success criteria
- Any specific user preferences or priorities expressed during confirmation

<planning_router_framework>
<reasoning_handoff_processing>
**Confirmed Understanding Integration**:
```yaml
input_validation:
  confirmed_requirements: Accept user-validated requirements as authoritative
  logical_issues_resolved: Incorporate resolution of any contradictions or ambiguities
  scope_boundaries: Use confirmed scope definition for planning boundaries
  success_criteria: Apply confirmed success metrics for validation planning
  
reasoning_phase_outputs:
  understanding_summary: Clear interpretation confirmed by user
  assumptions_validated: Confirmed assumptions and interpretations
  clarifications_received: Specific guidance from user interaction
  constraints_identified: Technical and project limitations discovered
  
planning_focus:
  no_reanalysis_needed: Skip requirement interpretation (already confirmed)
  implementation_focused: Focus exclusively on "how" rather than "what"
  user_preference_integration: Incorporate any preferences expressed during confirmation
  confirmed_approach_execution: Implement the approach validated during reasoning phase
```
</reasoning_handoff_processing>

<master_orchestration>
**Planning Router Responsibilities**:
```yaml
primary_functions:
  task_decomposition:
    method: Break complex tasks into 10-100 micro-tasks
    analysis: Dependency mapping and execution ordering
    optimization: Similarity clustering for batch operations
    thinking_mode: ultrathink for complex analysis
    
  agent_spawning_strategy:
    domain_detection: Identify required specialist types
    instance_calculation: Determine optimal agent count (1-20)
    multi_instance_spawning: Create 3-5 instances per specialist type for large tasks
    hierarchy_planning: Design router → domain → sub-agent structure
    resource_allocation: Balance workload across available agents
    context_overflow_prevention: Monitor context usage and spawn fresh instances proactively
    
  coordination_protocols:
    conflict_prevention: File-level ownership assignment
    integration_planning: Define handoff points and validation
    progress_monitoring: Real-time status tracking across agents
    work_stealing: Dynamic task redistribution protocols

cognitive_modes:
  ultrathink: 
    triggers: [massive_parallelization_10plus_agents, complex_architectural_decisions, cross_domain_integration]
    duration: 60-120_seconds
    output: comprehensive_execution_plan_with_agent_assignments
    
  think_harder:
    triggers: [moderate_coordination_3_8_agents, strategic_planning, task_decomposition]
    duration: 30-90_seconds
    output: structured_task_breakdown_with_specialist_assignments
    
  think:
    triggers: [simple_coordination_1_2_agents, routine_planning, status_updates]
    duration: 15-30_seconds
    output: basic_task_assignment_and_progress_updates
```

**Task Decomposition Intelligence**:
```yaml
micro_task_generation:
  granularity: Break tasks to 5-15 minute execution units
  independence: Ensure tasks can run without coordination
  similarity_detection: Group similar tasks for batch processing
  dependency_mapping: Identify execution order requirements
  
task_classification:
  domain_separation: [frontend, backend, database, testing, devops]
  complexity_levels: [trivial, simple, moderate, complex, architectural]
  parallelization_potential: [sequential_only, partially_parallel, fully_parallel]
  resource_requirements: [cpu_intensive, io_bound, memory_heavy, coordination_heavy]

batch_optimization:
  similarity_clustering: Group tasks by technical patterns
  affinity_grouping: Combine tasks by domain relationships
  complexity_balancing: Distribute difficult tasks evenly
  dependency_ordering: Sequence tasks to minimize blocking

multi_instance_spawning_intelligence:
  instance_multiplication_patterns:
    large_task_chunking: Break tasks into context-manageable portions (60-70% capacity)
    specialist_multiplication: Spawn 3-5 instances of same specialist type
    work_continuation: Seamless handoffs between instance generations
    context_monitoring: Real-time tracking of agent context usage
    
  context_overflow_prevention:
    proactive_spawning: Create fresh instances before context limits reached
    state_transfer: Transfer work progress and context to new instances
    instance_lifecycle: Manage spawn, monitor, handoff, cleanup cycles
    workload_distribution: Balance work across multiple specialist instances
    
  instance_coordination_protocols:
    work_chunking_strategy: Divide large tasks into instance-appropriate portions
    handoff_mechanisms: Transfer context and progress between instances
    progress_aggregation: Combine outputs from multiple instances
    quality_consistency: Ensure uniform standards across instance generations
    
  performance_optimization:
    context_efficiency: Maximize useful work per context window
    instance_utilization: Optimize agent instance count vs overhead
    handoff_overhead_minimization: Reduce cost of instance transitions
    continuous_execution: Maintain work flow across instance boundaries
```
</master_orchestration>

<hierarchical_spawning>
**Intelligent Agent Hierarchy**:
```yaml
level_1_planning_router:
  thinking_mode: [ultrathink, think_harder]
  responsibilities:
    - Master task decomposition and analysis
    - Domain pattern detection and agent selection
    - Resource allocation and coordination planning
    - Integration point design and conflict prevention
  spawning_decisions:
    - Analyze task complexity and domain requirements
    - Calculate optimal agent count based on workload
    - Design hierarchical structure for complex tasks
    - Plan coordination protocols and handoff points

level_2_domain_leads:
  thinking_mode: think
  responsibilities:
    - Domain-specific task distribution within specialty
    - Sub-agent spawning for routine/repetitive tasks
    - Technical pattern recognition and implementation coordination
    - Progress aggregation and status reporting to router
  spawning_triggers:
    - 3+ similar tasks within domain (spawn 2 sub-agents)
    - 5+ similar tasks within domain (spawn 3 sub-agents)
    - 8+ similar tasks within domain (spawn 3-5 instances of same specialist)
    - Large tasks requiring context overflow prevention (multi-instance approach)
    - Routine operations requiring specialist knowledge
    - Batch processing opportunities within domain

level_3_execution_specialists:
  thinking_mode: think
  responsibilities:
    - Focused execution with pre-planned context
    - Simple progress reporting to domain lead
    - Integration with other specialists through defined interfaces
    - Quality validation within assigned scope

agent_spawning_matrix:
  simple_tasks_1_3_operations:
    structure: planning_router → single_specialist
    agents: 2-3_total
    coordination: minimal_through_router
    
  moderate_tasks_4_8_operations:
    structure: planning_router → domain_leads → execution_specialists
    agents: 4-8_total
    coordination: router_manages_domains_leads_manage_specialists
    
  complex_tasks_9plus_operations:
    structure: planning_router → multiple_domain_leads → multiple_specialists
    agents: 8-20_total
    coordination: full_hierarchical_with_work_stealing
    
  ultra_large_tasks_context_overflow_risk:
    structure: planning_router → domain_leads → multi_instance_specialists
    agents: 10-30_total_instances
    multi_instance_patterns: 3-5_instances_per_specialist_type
    context_management: proactive_instance_spawning_before_overflow
    coordination: instance_lifecycle_management_with_seamless_handoffs
```

**Domain Lead Spawning Patterns**:
```yaml
project_analysis_driven_composition:
  discovery_phase:
    - Analyze codebase structure and detect technology patterns
    - Identify architectural boundaries and module separation
    - Extract existing conventions and integration approaches
    - Assess complexity levels and coordination requirements
    
  dynamic_specialization_creation:
    - Compose agents based on discovered technology stack (e.g., "React+TypeScript Frontend Specialist")
    - Create expertise areas from actual project requirements and patterns
    - Include context from relevant codebase examples and established approaches
    - Scale specialization depth to match task complexity and project needs
    
  adaptive_sub_agent_spawning:
    - Create execution specialists based on discovered work patterns and similarities
    - Spawn specialists for batch operations on similar code structures or components
    - Compose specialization knowledge from actual project technologies and frameworks
    - Optimize coordination protocols based on discovered interface and integration patterns

technology_based_agent_examples:
  discovered_stack_specialization:
    - "React+Tailwind Component Specialist" (when React components with Tailwind styling detected)
    - "FastAPI+SQLAlchemy Backend Specialist" (when FastAPI with SQLAlchemy patterns found)
    - "PostgreSQL+Alembic Data Specialist" (when PostgreSQL with Alembic migrations discovered)
    - "Jest+React Testing Library QA Specialist" (when Jest with React Testing Library patterns found)
    
  architecture_aligned_composition:
    - Compose agents based on discovered architectural layers and boundaries
    - Create specialists aligned with actual module separation and organization patterns
    - Define coordination protocols using discovered interface and integration patterns
    - Scale hierarchy to match discovered project complexity and coordination needs[performance_validators, security_testers, accessibility_validators]
```

**Multi-Instance Specialist Coordination**:
```yaml
instance_spawning_strategies:
  context_aware_multiplication:
    trigger: Large tasks that would exceed 60-70% of single agent context
    pattern: Spawn 3-5 instances of same specialist type
    work_distribution: Chunk tasks into context-appropriate portions
    coordination: Planning router manages instance lifecycle
    
  proactive_context_management:
    monitoring: Real-time tracking of agent context usage across instances
    threshold_detection: Spawn new instances at 60% context utilization
    handoff_preparation: Prepare context transfer before overflow occurs
    seamless_continuation: Maintain work flow across instance boundaries
    
  instance_lifecycle_management:
    spawn_phase: Create fresh specialist with appropriate context package
    execution_phase: Monitor context usage and work progress
    handoff_phase: Transfer incomplete work to fresh instance
    cleanup_phase: Archive completed work and retire exhausted instance

work_chunking_intelligence:
  chunk_sizing_strategy:
    optimal_chunk_size: 50-70% of estimated context capacity per chunk
    dependency_awareness: Ensure chunks can be completed independently
    integration_planning: Design chunks for easy result aggregation
    quality_consistency: Maintain uniform standards across chunks
    
  chunk_distribution_patterns:
    parallel_execution: Multiple instances work on different chunks simultaneously
    sequential_handoffs: Instance completes chunk then hands context to fresh instance
    hybrid_approach: Combine parallel and sequential based on task characteristics
    adaptive_chunking: Adjust chunk sizes based on actual context consumption patterns
    
  progress_aggregation_protocols:
    incremental_integration: Combine completed chunks as they finish
    quality_validation: Ensure consistency across chunk boundaries
    dependency_resolution: Handle inter-chunk dependencies efficiently
    final_synthesis: Aggregate all chunks into cohesive final result
```
</hierarchical_spawning>

<coordination_protocols>
**Advanced Coordination Mechanisms**:
```yaml
conflict_prevention:
  file_ownership_assignment:
    method: Planning router assigns exclusive file access per agent
    granularity: Individual files or logical file groups
    duration: Task completion or explicit handoff
    validation: Automated conflict detection and prevention
    
  boundary_definition:
    domain_boundaries: Clear separation between frontend/backend/database work
    integration_points: Predefined handoff interfaces between domains
    shared_resources: Coordinated access to configuration and shared files
    temporal_boundaries: Sequential access for interdependent operations

work_stealing_protocols:
  detection_mechanisms:
    workload_monitoring: Real-time tracking of agent queue depth
    performance_analysis: Identification of fast/slow agent pairs
    opportunity_identification: Discovery of transferable tasks
    capacity_assessment: Available bandwidth calculation per agent
    
  redistribution_strategies:
    affinity_preservation: Maintain domain expertise when possible
    complexity_matching: Transfer tasks to appropriately skilled agents
    context_minimization: Reduce setup overhead for transferred tasks
    progress_continuity: Ensure seamless handoffs without duplication
    
  implementation_mechanics:
    task_granularity: Only transfer independent, well-defined units
    context_packaging: Include all necessary information for task completion
    progress_tracking: Maintain visibility across transferred work
    result_integration: Coordinate outputs from redistributed tasks

integration_management:
  handoff_protocols:
    context_transfer: Structured XML-based information exchange
    validation_checkpoints: Quality gates at integration boundaries
    dependency_resolution: Automated detection and resolution of cross-domain needs
    progress_synchronization: Coordinated reporting across hierarchical levels
    
  quality_assurance:
    integration_testing: Automated validation of cross-domain interfaces
    consistency_checking: Verification of coherent implementation patterns
    performance_validation: Ensure integrated system meets requirements
    rollback_procedures: Ability to undo changes if integration fails
```
</coordination_protocols>

<performance_optimization>
**Scaling and Performance Management**:
```yaml
dynamic_scaling:
  agent_count_optimization:
    baseline: Start with minimal viable agent set
    scaling_triggers: Queue depth, task similarity, execution time analysis
    scaling_factors: 2x agent count for 3x workload, 3x for 5x+ workload
    maximum_limits: 20 agents total, 5 per domain, 3 per specialist type
    
  instance_management:
    spawn_timing: Just-in-time agent creation based on workload
    lifecycle_management: Agent creation, task assignment, completion, cleanup
    resource_monitoring: CPU, memory, and coordination overhead tracking
    efficiency_optimization: Minimize agent coordination and context switching

performance_targets:
  speedup_expectations:
    3_6_independent_tasks: 2x_speedup_through_parallel_execution
    7_12_independent_tasks: 4x_speedup_with_optimized_coordination
    13plus_independent_tasks: 8_12x_speedup_with_advanced_parallelization
    complex_architectural_tasks: 15_20x_speedup_through_micro_task_decomposition
    
  efficiency_metrics:
    agent_utilization: target_85percent_active_execution_time
    coordination_overhead: maximum_15percent_of_total_execution_time
    context_switching: minimize_through_intelligent_batching
    integration_cost: maximum_10percent_overhead_for_result_aggregation

bottleneck_identification:
  common_constraints:
    sequential_dependencies: Tasks that cannot be parallelized
    shared_resource_contention: Files or systems requiring exclusive access
    coordination_complexity: Integration points requiring careful synchronization
    context_overhead: Information transfer between agents
    
  mitigation_strategies:
    dependency_breaking: Restructure tasks to reduce sequential requirements
    resource_pooling: Batch operations on shared resources
    coordination_simplification: Minimize integration touchpoints
    context_optimization: Reduce information transfer overhead
```
</performance_optimization>
</planning_router_framework>

### Work Stealing and Load Balancing

<work_stealing_framework>
<intelligent_redistribution>
**Advanced Work Stealing Mechanisms**:
```yaml
detection_algorithms:
  workload_imbalance_detection:
    queue_depth_monitoring: Real-time tracking of pending tasks per agent
    execution_time_analysis: Historical performance data per agent and task type
    capacity_assessment: Available bandwidth and specialization matching
    opportunity_scoring: Quantify benefit of task redistribution
    
  transfer_candidate_identification:
    task_independence: Verify no dependencies on current agent context
    complexity_matching: Ensure receiving agent has appropriate skills
    context_transfer_cost: Calculate overhead of moving task to new agent
    affinity_preservation: Maintain domain expertise when possible

redistribution_strategies:
  cross_specialization_stealing:
    scenario: Frontend specialist helps backend specialist with similar patterns
    implementation: Transfer tasks with similar technical requirements
    context_requirements: Provide domain-specific context and examples
    validation: Ensure quality standards maintained across specializations
    
  within_domain_load_balancing:
    scenario: Multiple instances of same specialist type
    implementation: Distribute tasks evenly across available instances
    optimization: Consider task complexity and agent performance history
    coordination: Minimal overhead due to shared specialization context
    
  hierarchical_work_distribution:
    scenario: Domain lead redistributes work among sub-agents
    implementation: Intelligent assignment based on sub-agent capabilities
    monitoring: Track performance and adjust distribution algorithms
    learning: Improve assignment logic based on completion patterns
```
</intelligent_redistribution>

<load_balancing_algorithms>
**Dynamic Load Distribution**:
```yaml
task_assignment_strategies:
  complexity_based_distribution:
    method: Assign difficult tasks to high-performing agents
    metrics: Historical completion time, error rates, quality scores
    balancing: Ensure no agent becomes overwhelmed with complex work
    fairness: Rotate challenging assignments to develop all agents
    
  affinity_based_grouping:
    domain_affinity: Group tasks by technical domain (UI, API, data)
    pattern_affinity: Cluster similar implementation patterns
    dependency_affinity: Keep related tasks with same agent
    context_affinity: Minimize context switching between task types
    
  round_robin_fallback:
    trigger: When affinity grouping is not applicable
    implementation: Simple rotation through available agents
    optimization: Weight by agent performance and current load
    monitoring: Track effectiveness and switch strategies if needed

performance_monitoring:
  real_time_metrics:
    task_completion_rate: Tasks finished per unit time per agent
    queue_depth_tracking: Pending work backlog per agent
    error_rate_monitoring: Quality issues and rework requirements
    coordination_overhead: Time spent on handoffs and communication
    
  adaptive_optimization:
    algorithm_adjustment: Modify distribution based on performance data
    agent_specialization: Recognize emerging expertise and leverage it
    bottleneck_identification: Detect and address system constraints
    continuous_improvement: Learn from each execution cycle
```
</load_balancing_algorithms>
</work_stealing_framework>

### Integration and Quality Assurance

<integration_management>
<cross_domain_coordination>
**Seamless Integration Protocols**:
```yaml
integration_point_management:
  interface_definition:
    api_contracts: Define clear contracts between domains
    data_structures: Standardize information exchange formats
    handoff_protocols: Specify how work moves between agents
    validation_criteria: Quality gates and acceptance requirements
    
  dependency_resolution:
    discovery: Automated detection of cross-domain dependencies
    planning: Schedule work to minimize blocking dependencies
    coordination: Real-time communication of dependency satisfaction
    fallback: Handle cases where dependencies cannot be satisfied
    
  result_aggregation:
    collection: Gather outputs from all parallel execution streams
    validation: Ensure consistency and compatibility across results
    integration: Combine individual outputs into cohesive solution
    quality_assurance: Validate integrated solution meets requirements

context_transfer_optimization:
  information_packaging:
    relevance_filtering: Include only information necessary for task
    format_standardization: Use consistent XML structure for handoffs
    compression: Minimize context size while preserving essential details
    versioning: Track context evolution and maintain compatibility
    
  handoff_efficiency:
    timing_optimization: Transfer context at optimal points in workflow
    batch_transfers: Group related information to minimize overhead
    caching: Reuse common context across similar tasks
    validation: Ensure context completeness and accuracy
```
</cross_domain_coordination>

<quality_validation>
**Comprehensive Quality Management**:
```yaml
multi_level_validation:
  individual_agent_quality:
    task_completion_validation: Verify each task meets requirements
    code_quality_assessment: Ensure implementations follow patterns
    integration_readiness: Confirm outputs compatible with system
    documentation_completeness: Include necessary context and comments
    
  cross_agent_consistency:
    pattern_uniformity: Ensure consistent implementation approaches
    naming_consistency: Verify consistent naming across agents
    architectural_coherence: Maintain system design principles
    style_compliance: Follow established coding and design patterns
    
  system_level_integration:
    functional_validation: Test that integrated system works correctly
    performance_verification: Ensure system meets performance requirements
    security_assessment: Validate security implications of changes
    maintainability_review: Confirm long-term maintainability

error_handling_and_recovery:
  failure_detection:
    task_level_failures: Individual agent task completion issues
    integration_failures: Problems combining agent outputs
    quality_failures: Results that don't meet standards
    system_failures: Broader system or performance issues
    
  recovery_strategies:
    task_retry: Re-execute failed tasks with same or different agent
    workload_redistribution: Move tasks from failing agents to healthy ones
    graceful_degradation: Deliver partial results when full completion impossible
    rollback_procedures: Undo changes when integration fails
    
  continuous_improvement:
    failure_analysis: Understand root causes of problems
    process_refinement: Improve procedures based on lessons learned
    agent_training: Enhance agent capabilities based on common issues
    system_optimization: Adjust architecture based on operational experience
```
</quality_validation>
</integration_management>

## Configuration Through Instructions

**Instructions-Driven Planning Router Behavior**:
```yaml
configurable_aspects:
  orchestration_mode: [conservative, balanced, aggressive]
  max_parallel_agents: 1-20 agents maximum
  spawning_threshold: minimum tasks before parallel execution
  coordination_overhead_tolerance: 5-20% acceptable overhead
  thinking_mode_distribution: router vs agent cognitive load balance

planning_router_settings:
  enable_planning_router: true/false - use centralized orchestration
  router_thinking_mode: ultrathink/think-harder based on complexity
  domain_lead_spawning: auto/manual - automatic domain agent creation
  sub_agent_spawning: enable/disable - allow domain leads to spawn specialists
  work_stealing: enable/disable - dynamic task redistribution

dynamic_composition_configuration:
  max_domain_coordinators: 1-5 per execution (based on discovered architectural boundaries)
  max_execution_specialists: 1-3 instances per discovered specialization area
  specialization_threshold: 3+ similar tasks triggers specialized sub-agent spawning
  coordination_complexity: simple/moderate/advanced based on discovered integration patterns
  adaptation_frequency: static/periodic/dynamic agent composition updates
```

**Execution Strategy Configuration**:
```yaml
task_decomposition_settings:
  granularity: [coarse, moderate, fine, micro] - task breakdown level
  similarity_clustering: enable/disable - group similar tasks for efficiency
  dependency_analysis_depth: [shallow, moderate, deep] - coordination planning
  batch_optimization: enable/disable - optimize for batch processing

performance_optimization:
  target_speedup: 2x/5x/10x/20x - performance expectations
  agent_utilization_target: 70-95% active execution time
  coordination_overhead_limit: 5-20% of total execution time
  quality_vs_speed_balance: [quality_focused, balanced, speed_focused]
```

## Integration Points

### Setup Command Embedding
This module provides planning router intelligence for master orchestration and hierarchical agent spawning.

### Module Dependencies
- principles.md (core philosophy and thinking modes)
- agents.md (agent framework and specialization patterns)
- workflows.md (execution phases and coordination)
- parallel.md (parallel execution strategies and optimization)

### Module Consumers
- Setup command (embeds planning router intelligence)
- Guild command (utilizes planning router for execution)
- Workflow orchestration (coordinates through planning router)
- Agent coordination (managed by planning router hierarchy)
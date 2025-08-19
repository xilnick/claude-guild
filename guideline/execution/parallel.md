# Parallel Execution Module
**Version**: 5.0.0 | **Last Updated**: 2025-01-18 | **Dependencies**: principles.md, planning-router.md, agents.md

## Purpose
Proactively parallel execution framework that enables 10-20x performance improvements through aggressive task decomposition, intelligent batching, and distributed coordination. This module works in conjunction with the planning router to achieve maximum parallelization efficiency.

## Embedded Intelligence

### Proactively Parallel Execution Philosophy

**PERFORMANCE-FIRST APPROACH**: Default to parallel execution for any task with 3+ independent operations, targeting 10-20x speedup through intelligent coordination and minimal overhead.

**AGGRESSIVE TASK DECOMPOSITION**: Break complex tasks into 10-100 micro-tasks that can execute independently with clear boundaries and result aggregation.

**DISTRIBUTED CONTEXT COORDINATION**: Enable 2-20 agents to work simultaneously without conflicts through intelligent file ownership and context sharing.

<proactively_parallel_framework>
<aggressive_parallelization>
**Proactively Parallel Execution Strategies**:
```yaml
massive_task_decomposition:
  granularity: Break tasks to 5-15 minute execution units
  independence: Ensure micro-tasks require no inter-task coordination
  similarity_clustering: Group similar operations for batch processing
  dependency_minimization: Restructure work to reduce sequential requirements
  
  decomposition_patterns:
    file_based_splitting: One agent per file or logical file group
    operation_based_splitting: Similar operations across multiple files
    domain_based_splitting: Frontend/backend/database work separation
    complexity_based_splitting: Balance difficult tasks across agents
    
  micro_task_examples:
    api_endpoints: "Update authentication middleware in user endpoints" (5 files)
    ui_components: "Add loading states to form components" (8 components)
    database_queries: "Optimize index usage in reporting queries" (12 queries)
    test_creation: "Add unit tests for utility functions" (15 functions)

similarity_based_batching:
  pattern_detection:
    technical_patterns: Similar code structures, frameworks, or APIs
    domain_patterns: Related business logic or user workflows
    complexity_patterns: Tasks requiring similar skill levels or time
    dependency_patterns: Work that shares common prerequisites
    
  batch_optimization:
    context_sharing: Minimize context switching between similar tasks
    learning_acceleration: Apply insights from one task to similar tasks
    tool_reuse: Leverage same tools and approaches across batch
    quality_consistency: Apply same standards and patterns uniformly
    
  batch_examples:
    crud_operations: Create 8 REST endpoints with similar structure
    component_conversion: Convert 12 class components to functional
    migration_scripts: Create 6 database migrations with similar patterns
    validation_logic: Add input validation to 10 form components

dynamic_scaling_protocols:
  instance_multiplication:
    trigger_thresholds:
      3_4_similar_tasks: spawn_2_instances
      5_8_similar_tasks: spawn_3_instances
      9_15_similar_tasks: spawn_4_5_instances
      16plus_similar_tasks: spawn_5_8_instances (ultra-aggressive scaling)
    scaling_factors:
      linear_scaling: 1_agent_per_3_tasks_for_simple_work
      complexity_scaling: 1_agent_per_2_tasks_for_complex_work
      ultra_aggressive_scaling: 1_agent_per_1_task_for_maximum_parallelization
      efficiency_scaling: optimize_for_85percent_agent_utilization
      context_overflow_scaling: spawn_instances_proactively_before_context_limits
      
  cross_domain_parallelization:
    simultaneous_domains: frontend + backend + database + testing + devops + documentation
    domain_instance_limits: 5_agents_maximum_per_domain (increased for ultra-aggressive)
    specialist_instance_limits: 8_instances_per_specialist_type_for_large_tasks
    total_agent_cap: 30_agents_maximum_system_wide (increased for ultra-aggressive)
    coordination_overhead: maximum_10percent_of_execution_time (optimized)
    
  adaptive_scaling:
    workload_analysis: Real-time assessment of task complexity and volume
    performance_monitoring: Track agent utilization and completion rates
    dynamic_adjustment: Add/remove agents based on queue depth and efficiency
    bottleneck_detection: Identify and address coordination or resource constraints
```

**Performance Optimization Targets**:
```yaml
speedup_expectations:
  3_6_independent_tasks: 2_3x_speedup_baseline_parallel_execution
  7_12_independent_tasks: 4_6x_speedup_optimized_coordination
  13_20_independent_tasks: 8_12x_speedup_advanced_parallelization
  21_30_tasks_multi_instance: 15_25x_speedup_instance_multiplication
  massive_architectural_tasks: 20_30x_speedup_ultra_aggressive_parallelization
  context_overflow_prevention: continuous_execution_without_context_breaks

efficiency_metrics:
  agent_utilization: target_85_90percent_active_execution_time
  coordination_overhead: maximum_10_15percent_total_execution_time
  context_switching: minimize_through_intelligent_task_affinity
  result_integration: maximum_5_10percent_overhead_for_aggregation
  
quality_maintenance:
  consistency_across_agents: ensure_uniform_implementation_patterns
  integration_seamlessness: validate_compatibility_between_parallel_outputs
  error_rate_control: maintain_same_quality_standards_as_sequential
  rollback_capability: ability_to_undo_parallel_work_if_integration_fails
```
</aggressive_parallelization>

<ultra_aggressive_parallelization>
**Ultra-Aggressive Parallel Execution Strategies**:
```yaml
maximum_parallelization_approach:
  instance_multiplication_extremes:
    specialist_flooding: spawn_5_8_instances_per_specialist_type_for_massive_tasks
    domain_saturation: max_out_domain_capacity_with_multiple_specialists
    context_overflow_prevention: proactive_instance_spawning_at_50percent_context_usage
    continuous_execution: maintain_work_flow_through_unlimited_instance_generations
    
  ultra_aggressive_scaling_patterns:
    immediate_parallelization: spawn_parallel_agents_for_any_task_with_2plus_operations
    preemptive_scaling: create_instances_before_workload_analysis_completes
    saturation_scaling: fill_all_available_coordination_capacity_immediately
    overflow_scaling: exceed_normal_limits_when_ultra_performance_required
    
  work_chunking_extremes:
    micro_chunking: break_tasks_to_30_50percent_context_capacity_per_chunk
    aggressive_independence: ensure_chunks_require_zero_inter_chunk_coordination
    parallel_chunk_execution: execute_all_chunks_simultaneously_across_instances
    rapid_result_aggregation: combine_outputs_in_real_time_as_chunks_complete

performance_targets_ultra_aggressive:
  20_30x_speedup_targets:
    massive_task_decomposition: 20_25x_speedup_through_extreme_parallelization
    instance_multiplication: 25_30x_speedup_through_specialist_flooding
    context_overflow_elimination: continuous_execution_without_context_breaks
    coordination_optimization: sub_5percent_overhead_through_extreme_efficiency
    
  ultra_performance_metrics:
    instance_utilization: target_90_95percent_active_execution_across_all_instances
    coordination_overhead: maximum_5percent_total_execution_time
    context_efficiency: maximize_useful_work_per_context_window_across_instances
    handoff_optimization: sub_1percent_overhead_for_instance_transitions
    
  scalability_maximums:
    total_instance_count: 30_50_instances_for_massive_architectural_tasks
    specialist_instances: 8_10_instances_per_specialist_type_maximum
    domain_instances: 6_8_instances_per_domain_maximum
    coordination_agents: planning_router_plus_5_8_domain_coordinators

context_overflow_elimination:
  proactive_instance_management:
    early_warning_system: monitor_context_usage_at_10percent_intervals
    predictive_spawning: create_instances_based_on_projected_context_consumption
    seamless_handoffs: transfer_work_with_zero_execution_interruption
    infinite_scaling: unlimited_instance_generations_for_unlimited_task_size
    
  work_continuation_optimization:
    state_transfer_efficiency: minimize_context_package_size_for_handoffs
    progress_preservation: maintain_100percent_work_continuity_across_handoffs
    quality_consistency: ensure_uniform_output_quality_across_instance_generations
    integration_seamlessness: aggregate_multi_instance_results_transparently
```
</ultra_aggressive_parallelization>

<distributed_context_coordination>
**Advanced Context Management**:
```yaml
context_partitioning:
  agent_specific_context:
    relevance_filtering: Each agent receives only necessary information
    domain_specialization: Context tailored to agent expertise area
    task_specific_details: Instructions focused on assigned work
    integration_interfaces: Clear handoff points and validation criteria
    
  shared_context_coordination:
    project_patterns: Common architectural and coding standards
    integration_points: Shared APIs, data structures, and interfaces
    quality_standards: Consistent validation and testing requirements
    progress_tracking: Real-time status updates across all agents
    
  dynamic_context_updates:
    discovery_propagation: New insights shared across relevant agents
    pattern_evolution: Architectural changes updated throughout system
    dependency_updates: Changes affecting multiple agents communicated
    error_propagation: Issues shared to prevent similar problems

conflict_prevention_mechanisms:
  file_ownership_assignment:
    exclusive_access: Each file assigned to single agent during execution
    ownership_duration: From task start to completion or explicit handoff
    conflict_detection: Automated prevention of simultaneous file access
    handoff_protocols: Structured transfer of file ownership between agents
    
  logical_boundary_management:
    component_boundaries: Clear ownership of UI components, services, modules
    feature_boundaries: Logical separation of user features and workflows
    layer_boundaries: Separation between presentation, business, and data layers
    integration_boundaries: Defined interfaces between parallel work streams
    
  temporal_coordination:
    execution_phases: Sequential phases for work that cannot be parallelized
    dependency_ordering: Schedule work to minimize blocking dependencies
    integration_checkpoints: Periodic synchronization points for validation
    rollback_coordination: Ability to undo work across multiple agents if needed

work_stealing_optimization:
  intelligent_redistribution:
    workload_monitoring: Real-time tracking of agent queue depth and performance
    transfer_candidate_identification: Tasks suitable for redistribution
    skill_matching: Ensure receiving agent has appropriate capabilities
    context_transfer_efficiency: Minimize overhead of moving tasks between agents
    
  multi_instance_work_stealing:
    cross_instance_redistribution: Steal work between instances of same specialist type
    context_aware_stealing: Consider context usage when redistributing between instances
    instance_lifecycle_stealing: Move work from exhausted instances to fresh instances
    specialist_flooding_balancing: Distribute work across 5-8 instances of same specialist
    
  ultra_aggressive_load_balancing:
    complexity_distribution: Balance difficult tasks across available agents
    affinity_preservation: Maintain domain expertise when redistributing
    batch_integrity: Keep related tasks together when possible
    fairness_algorithms: Ensure equitable work distribution over time
    instance_multiplication_balancing: Distribute work optimally across specialist instances
    context_overflow_prevention: Preemptively redistribute before context limits
    
  dynamic_optimization:
    performance_learning: Improve distribution based on historical performance
    bottleneck_identification: Detect and address system constraints
    capacity_planning: Predict optimal agent counts for different task types
    continuous_improvement: Refine algorithms based on execution results
    instance_efficiency_learning: Optimize instance count and handoff timing
    context_usage_prediction: Predict context consumption for proactive scaling
```
</distributed_context_coordination>

<fine_grained_coordination>
**Minimal Coordination Overhead Protocols**:
```yaml
asynchronous_progress_reporting:
  status_broadcasting:
    completion_notifications: Agent reports when tasks finish
    progress_updates: Periodic status without blocking other agents
    error_notifications: Immediate alerts for issues requiring attention
    dependency_satisfaction: Notification when prerequisites are met
    
  aggregated_monitoring:
    central_dashboard: Planning router tracks all agent progress
    bottleneck_detection: Identify slow agents or blocking dependencies
    resource_utilization: Monitor system capacity and efficiency
    quality_metrics: Track error rates and rework requirements
    
  minimal_synchronization:
    checkpoint_coordination: Brief synchronization at integration points
    dependency_handoffs: Structured transfer when one agent needs another's output
    quality_validation: Periodic checks without stopping parallel execution
    error_recovery: Coordinate recovery from failures without full system stop

integration_point_optimization:
  lazy_integration:
    deferred_combination: Combine results only when necessary
    streaming_results: Process outputs as they become available
    incremental_validation: Validate compatibility progressively
    parallel_testing: Test integration points while other work continues
    
  batch_integration:
    result_grouping: Combine related outputs for efficient processing
    validation_batching: Test multiple components simultaneously
    rollback_grouping: Group changes for efficient undo if needed
    deployment_coordination: Bundle related changes for release
    
  interface_standardization:
    consistent_handoff_formats: XML or JSON structure for all inter-agent communication
    validation_protocols: Standard quality gates at all integration points
    error_handling: Consistent approaches to dealing with integration failures
    documentation_standards: Uniform documentation of integration interfaces
```
</fine_grained_coordination>
</proactively_parallel_framework>

### Advanced Task Distribution Strategies

<intelligent_distribution>
<affinity_based_grouping>
**Smart Task Clustering**:
```yaml
domain_affinity_clustering:
  technical_domains:
    frontend_cluster: UI components, user interactions, client-side logic
    backend_cluster: APIs, business logic, server-side processing
    database_cluster: Schema changes, queries, data migrations
    testing_cluster: Unit tests, integration tests, quality validation
    infrastructure_cluster: Deployment, monitoring, configuration
    
  pattern_affinity:
    similar_technologies: React components, Express endpoints, SQL queries
    similar_complexity: Simple CRUD operations, complex business logic
    similar_dependencies: Shared libraries, common APIs, related data models
    similar_testing: Unit testable functions, integration test scenarios
    
  business_affinity:
    user_workflows: Registration flow, checkout process, reporting dashboard
    feature_areas: Authentication system, payment processing, user management
    data_relationships: User data, product catalog, order processing
    compliance_areas: Security requirements, accessibility needs, audit trails

complexity_based_distribution:
  task_complexity_assessment:
    trivial_tasks: Simple changes, configuration updates, documentation
    simple_tasks: Straightforward implementations following established patterns
    moderate_tasks: New features requiring some design decisions
    complex_tasks: Architectural changes, performance optimizations, integrations
    
  distribution_strategies:
    complexity_balancing: Distribute difficult tasks evenly across agents
    expertise_matching: Assign complex tasks to high-performing agents
    learning_opportunities: Give moderate tasks to developing agents
    parallel_complexity: Run complex and simple tasks simultaneously
    
  workload_optimization:
    time_estimation: Predict task completion time based on complexity
    capacity_planning: Balance agent workloads for simultaneous completion
    bottleneck_prevention: Identify tasks that might slow down overall progress
    buffer_management: Include slack time for unexpected complications

dependency_aware_scheduling:
  dependency_analysis:
    prerequisite_identification: Tasks that must complete before others can start
    shared_resource_detection: Files or systems that multiple tasks need
    integration_requirements: Work that requires coordination between agents
    validation_dependencies: Tasks that need others' outputs for testing
    
  scheduling_optimization:
    critical_path_identification: Tasks that determine overall completion time
    parallel_opportunity_maximization: Run independent work simultaneously
    resource_contention_minimization: Schedule shared resource access efficiently
    integration_point_planning: Coordinate handoffs for minimum blocking time
    
  dynamic_rescheduling:
    completion_time_adjustment: Reschedule based on actual vs predicted completion
    failure_recovery: Redistribute work when agents encounter problems
    opportunity_optimization: Take advantage of early completions for new work
    bottleneck_resolution: Address blocking issues through work redistribution
```
</affinity_based_grouping>

<work_stealing_mechanisms>
**Advanced Workload Redistribution**:
```yaml
intelligent_work_stealing:
  opportunity_detection:
    queue_imbalance: Identify agents with significantly different workloads
    skill_overlap: Find agents capable of handling others' work
    context_transfer_cost: Calculate overhead of moving tasks between agents
    benefit_analysis: Quantify improvement from task redistribution
    
  transfer_candidate_selection:
    independence_verification: Ensure tasks can be moved without breaking dependencies
    context_compatibility: Verify receiving agent has necessary background
    integration_simplicity: Prefer tasks with minimal coordination requirements
    progress_preservation: Avoid moving work that would lose significant progress
    
  redistribution_execution:
    context_package_creation: Bundle all necessary information for task transfer
    handoff_protocol: Structured process for task ownership transfer
    progress_continuity: Ensure seamless continuation of work
    quality_maintenance: Preserve standards and patterns across agents

cross_specialization_assistance:
  skill_sharing_protocols:
    expertise_lending: Specialists help with tasks outside their primary domain
    knowledge_transfer: Share domain insights to improve cross-domain work
    pattern_propagation: Apply successful approaches across different areas
    quality_standardization: Maintain consistent standards across specializations
    
  collaborative_optimization:
    pair_programming_simulation: Multiple agents collaborate on complex tasks
    review_and_feedback: Specialists validate each other's work
    best_practice_sharing: Propagate successful approaches across agents
    continuous_improvement: Learn from inter-agent collaboration
    
  emergency_response:
    failure_recovery: Redistribute work from failing agents
    bottleneck_resolution: Add resources to overloaded agents
    quality_rescue: Higher-skilled agents assist with problematic work
    deadline_pressure: Coordinate all agents to meet critical timelines
```
</work_stealing_mechanisms>
</intelligent_distribution>

### Performance Monitoring and Optimization

<performance_tracking>
<real_time_metrics>
**Comprehensive Performance Monitoring**:
```yaml
agent_level_metrics:
  execution_efficiency:
    task_completion_rate: Tasks finished per unit time
    queue_processing_speed: Time from task assignment to completion
    error_rate_tracking: Frequency of mistakes or rework needed
    quality_score_monitoring: Adherence to standards and patterns
    
  resource_utilization:
    active_execution_time: Percentage of time spent on productive work
    coordination_overhead: Time spent on communication and handoffs
    context_switching_cost: Overhead from changing between task types
    idle_time_analysis: Periods when agents are waiting for work or dependencies
    
  collaboration_effectiveness:
    integration_success_rate: Percentage of successful handoffs with other agents
    rework_frequency: How often outputs need modification for integration
    communication_efficiency: Quality and timeliness of inter-agent coordination
    conflict_resolution_time: Speed of resolving overlapping work issues

system_level_metrics:
  overall_performance:
    total_speedup_achieved: Actual vs theoretical parallel execution improvement
    ultra_aggressive_targets: 20-30x speedup through instance multiplication
    end_to_end_completion_time: Total time from task start to fully integrated result
    quality_consistency: Uniformity of standards across parallel work streams
    context_overflow_prevention: Success rate of seamless instance handoffs
    user_satisfaction: Meeting requirements and expectations
    
  ultra_aggressive_scalability_indicators:
    instance_multiplication_efficiency: Performance scaling with 5-8 instances per specialist
    specialist_flooding_optimization: Effectiveness of saturating domains with specialists
    context_overflow_elimination: Success rate of preventing context exhaustion
    continuous_execution_metrics: Maintenance of work flow across instance generations
    coordination_overhead_minimization: Sub-5% overhead achievement rates
    
  multi_instance_performance_metrics:
    instance_utilization_rates: 90-95% active execution across all instances
    handoff_efficiency: Sub-1% overhead for instance transitions
    work_continuation_success: 100% work continuity across handoffs
    context_efficiency_maximization: Useful work per context window across instances
    parallel_chunk_execution: Real-time result aggregation success rates
    
  ultra_aggressive_efficiency_analysis:
    parallel_efficiency_ratio: Actual speedup / theoretical maximum speedup (targeting 85-95%)
    ultra_aggressive_efficiency: 20-30x speedup achievement rate
    coordination_to_execution_ratio: Time spent coordinating vs productive work (targeting <5%)
    instance_multiplication_efficiency: Performance gain per additional instance
    context_overflow_prevention_rate: Success in avoiding context breaks
    work_continuation_efficiency: Seamless handoff success rate across instances
    rework_percentage: Amount of work needing redo due to coordination issues (<2%)
    integration_success_rate: Percentage of parallel work integrating successfully (>98%)
    specialist_flooding_effectiveness: Performance scaling with domain saturation

adaptive_optimization:
  ultra_aggressive_performance_learning:
    historical_analysis: Learn from past executions to improve future performance
    instance_multiplication_learning: Optimize instance count and handoff timing patterns
    context_overflow_prediction: Anticipate context exhaustion before it occurs
    pattern_recognition: Identify task types and conditions that work well in parallel
    specialist_flooding_optimization: Learn optimal domain saturation strategies
    bottleneck_prediction: Anticipate performance issues before they occur
    handoff_timing_optimization: Perfect instance transition timing for maximum efficiency
    
  continuous_improvement_ultra_aggressive:
    context_usage_modeling: Build predictive models for context consumption
    instance_lifecycle_optimization: Improve spawn/handoff/cleanup efficiency
    work_chunking_refinement: Optimize chunk sizes for maximum parallelization
    coordination_overhead_elimination: Continuously reduce coordination costs
    quality_consistency_enhancement: Maintain standards across instance generations
    integration_seamlessness_improvement: Perfect result aggregation across instances
    
  dynamic_adjustment:
    agent_count_optimization: Adjust number of agents based on real-time performance
    task_distribution_refinement: Improve how work is divided among agents
    coordination_protocol_tuning: Minimize overhead while maintaining quality
    quality_vs_speed_balancing: Optimize for user priorities and requirements
```
</real_time_metrics>

<continuous_improvement>
**Performance Evolution Framework**:
```yaml
execution_analysis:
  post_execution_review:
    performance_measurement: Quantify actual vs expected speedup and quality
    bottleneck_identification: Find constraints that limited parallel effectiveness
    success_factor_analysis: Identify what worked well for future replication
    failure_mode_analysis: Understand what went wrong and how to prevent it
    
  pattern_discovery:
    optimal_task_distribution: Learn which task groupings work most effectively
    agent_specialization_evolution: Identify emerging expertise and leverage it
    coordination_optimization: Find ways to minimize overhead while maintaining quality
    integration_best_practices: Develop better approaches for combining parallel work
    
  knowledge_accumulation:
    performance_database: Build repository of execution data for analysis
    best_practice_documentation: Document successful approaches for future use
    antipattern_identification: Catalog approaches that don't work well
    optimization_playbook: Create actionable guides for improving performance

system_evolution:
  architecture_refinement:
    coordination_protocol_improvement: Develop better ways for agents to work together
    task_decomposition_enhancement: Improve how complex work is broken down
    agent_specialization_optimization: Refine agent capabilities and responsibilities
    integration_process_streamlining: Make combining parallel work more efficient
    
  capability_enhancement:
    new_parallelization_opportunities: Identify work that could benefit from parallel execution
    coordination_overhead_reduction: Find ways to minimize the cost of working in parallel
    quality_assurance_improvement: Better methods for ensuring consistent standards
    error_recovery_optimization: More effective ways to handle and recover from failures
    
  scalability_advancement:
    higher_agent_counts: Safely scale to more parallel agents when beneficial
    cross_domain_coordination: Better integration between different types of specialists
    complex_task_handling: Improve parallel execution for architectural and design work
    real_time_optimization: Adapt and improve performance during execution
```
</continuous_improvement>
</performance_tracking>

## Configuration Through Instructions

**Instructions-Driven Parallel Execution**:
```yaml
parallel_execution_settings:
  enable_proactively_parallel: true/false - allow aggressive parallelization
  max_parallel_agents: 2-20 agents maximum
  spawning_threshold: 3-5 independent tasks before parallel execution
  performance_target: 2x/5x/10x/20x speedup expectations
  quality_vs_speed_balance: quality_focused/balanced/speed_focused

task_decomposition_configuration:
  granularity_level: [coarse, moderate, fine, micro] - task breakdown detail
  similarity_clustering: enable/disable - group similar tasks for efficiency
  dependency_analysis: [shallow, moderate, deep] - coordination planning depth
  batch_optimization: enable/disable - optimize similar tasks together

coordination_settings:
  work_stealing: enable/disable - dynamic task redistribution
  cross_domain_assistance: enable/disable - specialists help outside their domain
  coordination_overhead_limit: 5-20% of total execution time
  integration_frequency: [lazy, periodic, real_time] - when to combine results
```

**Performance Optimization Configuration**:
```yaml
agent_utilization_settings:
  target_utilization: 70-95% active execution time
  idle_time_tolerance: 5-15% acceptable waiting time
  context_switching_limit: minimize through intelligent task batching
  coordination_time_budget: maximum time for inter-agent communication

scaling_strategy:
  linear_scaling: 1_agent_per_3_tasks for simple work
  complexity_scaling: 1_agent_per_2_tasks for complex work
  domain_scaling: max_3_agents per domain (frontend/backend/database)
  emergency_scaling: additional agents for critical deadlines
```

## Integration Points

### Setup Command Embedding
This module provides proactively parallel execution intelligence for maximum performance optimization.

### Module Dependencies
- principles.md (core philosophy and performance targets)
- planning-router.md (orchestration and coordination)
- agents.md (agent capabilities and specialization)

### Module Consumers
- Setup command (embeds parallel execution strategies)
- Planning router (utilizes parallel optimization)
- Guild execution (implements parallel coordination)
- Agent coordination (managed through parallel protocols)
# Task Routing Configuration

## Routing Intelligence System

### Task Classification Engine

```yaml
classifier: technology-detector
  inputs: [task_description, codebase_context]
  detection_rules:
    frontend:
      keywords: [ui, component, render, display, style, layout]
      files: [*.jsx, *.tsx, *.vue, *.css, *.scss]
      frameworks: [react, vue, angular, svelte]
    backend:
      keywords: [api, endpoint, server, database, auth]
      files: [*.js, *.ts, *.py, *.go, *.java]
      frameworks: [express, fastapi, django, gin]
    database:
      keywords: [query, migration, schema, index, transaction]
      files: [*.sql, migrations/*, models/*]
      technologies: [postgres, mysql, mongodb, redis]
    testing:
      keywords: [test, spec, mock, coverage, assert]
      files: [*.test.*, *.spec.*, __tests__/*]
      frameworks: [jest, pytest, mocha, cypress]
    infrastructure:
      keywords: [deploy, docker, ci, cd, pipeline]
      files: [Dockerfile, *.yml, *.yaml, .github/*]
      technologies: [docker, kubernetes, github-actions]
```

```yaml
classifier: complexity-analyzer
  inputs: [task_description, estimated_changes]
  complexity_factors:
    high:
      - cross_system_changes: true
      - multiple_technologies: > 3
      - architectural_changes: true
      - estimated_files: > 10
      - risk_level: high
    medium:
      - multiple_components: true
      - technologies: 2-3
      - estimated_files: 3-10
      - standard_patterns: true
    low:
      - single_component: true
      - single_technology: true
      - estimated_files: < 3
      - well_defined: true
```

```yaml
classifier: scope-determiner
  inputs: [task_requirements, affected_areas]
  scope_detection:
    isolated:
      - single_module: true
      - no_dependencies: true
      - clear_boundaries: true
    integrated:
      - multiple_modules: true
      - shared_dependencies: true
      - api_contracts: true
    system_wide:
      - architectural: true
      - cross_cutting: true
      - global_impact: true
```

### Routing Decision Matrix

```yaml
routing_matrix:
  # Simple, single-technology tasks
  - condition:
      complexity: low
      technologies: [single]
      scope: isolated
    routing:
      mode: direct
      agents: [single_specialist]
      execution: sequential
      research_phases:
        strategic: minimal (5%)
        tactical: focused (95%)
  
  # Medium complexity with multiple components
  - condition:
      complexity: medium
      technologies: [2-3]
      scope: integrated
    routing:
      mode: coordinated
      agents: [planning, specialists]
      execution: mixed
      research_phases:
        strategic: standard (30%)
        tactical: targeted (70%)
  
  # Complex, multi-system tasks
  - condition:
      complexity: high
      technologies: [multiple]
      scope: system_wide
    routing:
      mode: orchestrated
      agents: [reasoning, planning, multiple_specialists]
      execution: parallel_groups
      research_phases:
        strategic: comprehensive (40%)
        tactical: deep (60%)
```

### Enhanced Routing Algorithm

```yaml
smart_routing_algorithm:
  step_1_decompose:
    actions:
      - break_into_atomic_tasks
      - identify_dependencies
      - calculate_complexity_scores
    outputs:
      - task_graph
      - dependency_matrix
      - complexity_map
      
  step_2_optimize:
    routing_score_calculation:
      for_each_routing_option:
        factors:
          parallelization_potential: 0.35
          context_locality: 0.25
          agent_expertise_match: 0.20
          coordination_overhead: -0.10
          context_transfer_cost: -0.10
        score: weighted_sum(factors)
    selection:
      - rank_by_score
      - verify_feasibility
      - select_optimal
      
  step_3_package:
    work_package_creation:
      for_each_agent:
        include:
          - specific_tasks
          - filtered_context (only_relevant)
          - success_criteria
          - integration_points
        exclude:
          - irrelevant_context
          - other_agent_tasks
          - unnecessary_details
          
  step_4_schedule:
    execution_scheduling:
      - identify_critical_path
      - schedule_parallel_groups
      - define_synchronization_points
      - allocate_resources
```

### Agent Selection Rules

```yaml
selection_rules:
  # Frontend tasks
  - trigger:
      detected: [react, component, jsx]
    select:
      primary: guild-react-engineer
      support: [guild-style-engineer, guild-test-engineer]
  
  # Backend API tasks
  - trigger:
      detected: [api, endpoint, express]
    select:
      primary: guild-node-engineer
      support: [guild-database-engineer, guild-test-engineer]
  
  # Database tasks
  - trigger:
      detected: [migration, schema, query]
    select:
      primary: guild-database-engineer
      support: [guild-backend-engineer]
  
  # Full-stack features
  - trigger:
      detected: [frontend, backend, database]
    select:
      parallel:
        - guild-react-engineer
        - guild-node-engineer
        - guild-database-engineer
      coordinator: guild-planning-agent
  
  # Bug fixes
  - trigger:
      task_type: bug_fix
    select:
      sequence:
        - guild-reasoning-agent
        - guild-project-researcher
        - [appropriate_engineer]
        - guild-test-engineer
```

## Parallel Execution Strategies

### Strategy 1: Independent Scopes
```yaml
strategy: independent-parallel
  when:
    - clear_boundaries: true
    - no_shared_state: true
    - different_technologies: true
  execution:
    - group_by_scope:
        frontend: [react-engineer, style-engineer]
        backend: [node-engineer, database-engineer]
        testing: [test-engineer]
    - coordination:
        type: milestone-based
        coordinator: planning-agent
```

### Strategy 2: Pipeline Parallel
```yaml
strategy: pipeline-parallel
  when:
    - sequential_dependencies: true
    - can_start_early: true
  execution:
    - stage_1: [research-agents]
    - stage_2: [planning-agent]
    - stage_3_parallel:
        as_soon_as_ready: true
        agents: [implementation-engineers]
    - stage_4: [verification-agent]
```

### Strategy 3: Divide and Conquer
```yaml
strategy: divide-conquer
  when:
    - large_task: true
    - decomposable: true
  execution:
    - decompose:
        by: planning-agent
        into: subtasks
    - assign:
        subtasks_to_agents: based_on_expertise
    - execute:
        mode: parallel
        merge: by_coordinator
```

## Coordination Mechanisms

### Context Isolation
```yaml
isolation: scope-based
  frontend_context:
    access: [src/components, src/styles, src/hooks]
    modify: [only_frontend_files]
    communicate: [via_api_contracts]
  
  backend_context:
    access: [src/api, src/services, src/models]
    modify: [only_backend_files]
    communicate: [via_api_contracts]
  
  database_context:
    access: [migrations, schema, queries]
    modify: [only_database_files]
    communicate: [via_models]
```

### Conflict Resolution
```yaml
conflict_resolution:
  file_conflicts:
    strategy: coordinator_arbitration
    handler: planning-agent
    resolution: sequential_editing
  
  scope_conflicts:
    strategy: boundary_clarification
    handler: planning-agent
    resolution: redefine_scopes
  
  dependency_conflicts:
    strategy: dependency_ordering
    handler: planning-agent
    resolution: establish_sequence
```

### Progress Synchronization
```yaml
synchronization:
  checkpoints:
    - after_research: aggregate_findings
    - after_planning: distribute_tasks
    - during_implementation: coordinate_interfaces
    - before_validation: integrate_changes
  
  communication:
    method: context_handoff
    format: structured_data
    coordinator: planning-agent
```

## Routing Examples

### Example 1: React Component with API (Dual-Phase Research)
```yaml
task: "Create user dashboard with real-time data"
classification:
  technologies: [react, api, websocket]
  complexity: medium
  scope: integrated

routing_result:
  execution_plan:
    phase_1_strategic_research:
      parallel:
        - guild-project-researcher: 
            quick_scan: existing_dashboards (2min)
            identify: component_patterns (1min)
        - guild-global-researcher:
            overview: realtime_approaches (3min)
            complexity: implementation_effort (2min)
      effort: 30%
      
    phase_2_planning:
      sequential: guild-planning-agent:
        - decompose_into_subtasks
        - identify_specific_needs
        - create_routing_plan
        
    phase_3_tactical_research:
      parallel:
        - guild-project-researcher:
            deep_dive: specific_dashboard_components
            extract: exact_websocket_patterns
            context: filtered_by_plan
        - guild-global-researcher:
            detailed: websocket_implementation_examples
            specific: react_realtime_best_practices
      effort: 70%
      
    phase_4_implementation:
      parallel:
        group_1:
          - guild-react-engineer:
              context: [specific_components, patterns]
              task: implement_dashboard
          - guild-style-engineer:
              context: [design_system, responsive_patterns]
              task: create_styles
        group_2:
          - guild-node-engineer:
              context: [websocket_examples, api_patterns]
              task: implement_endpoint
          - guild-database-engineer:
              context: [query_patterns, optimization_tips]
              task: optimize_queries
              
    phase_5_validation:
      sequential:
        - guild-test-engineer: integration_testing
        - guild-verification-agent: validate_requirements
```

### Example 2: Performance Optimization
```yaml
task: "Optimize slow page load times"
classification:
  technologies: [react, api, database]
  complexity: high
  scope: system_wide

routing_result:
  execution_plan:
    phase_1:
      parallel:
        - guild-project-researcher: analyze_performance_bottlenecks
        - guild-global-researcher: research_optimization_techniques
    phase_2:
      sequential: guild-planning-agent: create_optimization_strategy
    phase_3:
      parallel:
        - guild-react-engineer: implement_lazy_loading
        - guild-node-engineer: optimize_api_responses
        - guild-database-engineer: add_indexes_optimize_queries
        - guild-devops-engineer: configure_caching
    phase_4:
      sequential:
        - guild-test-engineer: performance_benchmarking
        - guild-verification-agent: validate_improvements
```

### Example 3: Bug Fix
```yaml
task: "Fix user authentication not persisting"
classification:
  technologies: [auth, session, frontend]
  complexity: low
  scope: integrated

routing_result:
  execution_plan:
    sequential:
      - guild-reasoning-agent: analyze_bug_report
      - guild-project-researcher: trace_auth_flow
      - guild-node-engineer: fix_session_handling
      - guild-react-engineer: update_auth_context
      - guild-test-engineer: add_regression_tests
      - guild-verification-agent: verify_fix
```

## Performance Optimization

### Context-Aware Performance Optimization

```yaml
context_optimization:
  context_budget:
    per_agent_limit: 10KB
    total_system_limit: 100KB
    compression_threshold: 5KB
    
  transfer_optimization:
    strategies:
      lazy_loading:
        - Send references, not content
        - Load on demand only
        - Cache frequently accessed
      differential_updates:
        - Send only changes
        - Maintain base context
        - Merge incrementally
      smart_compression:
        - Summarize verbose content
        - Extract key points
        - Remove redundancy
        
  memory_management:
    cache_hierarchy:
      L1_hot: immediate_access (1KB)
      L2_warm: quick_access (10KB)
      L3_cold: slow_access (100KB)
    eviction_policy: LRU_with_relevance_boost
```

### Predictive Resource Allocation

```yaml
predictive_allocation:
  load_prediction:
    model: time_series_analysis
    features:
      - Historical task patterns
      - Current system load
      - Task complexity indicators
    actions:
      - Pre-allocate agents
      - Warm up caches
      - Prepare context
      
  bottleneck_prevention:
    monitoring:
      - Queue depths
      - Agent utilization
      - Context growth rate
    preemptive_actions:
      scale_agents:
        trigger: utilization > 70%
        action: spawn_additional
      compress_context:
        trigger: size > threshold
        action: aggressive_compression
      switch_mode:
        trigger: coordination_overhead > 30%
        action: sequential_fallback
        
  adaptive_parallelization:
    dynamic_adjustment:
      increase_parallel:
        when: low_coordination_cost
        max: 5_agents
      decrease_parallel:
        when: high_overhead
        min: 1_agent
      rebalance:
        frequency: every_30_seconds
        based_on: actual_performance
```

### Streaming Performance

```yaml
streaming_optimization:
  pipeline_configuration:
    buffer_sizes:
      research_to_planning: 1KB
      planning_to_implementation: 2KB
      implementation_to_validation: 1KB
      
    flow_control:
      backpressure: enabled
      rate_limiting: adaptive
      overflow_handling: queue_or_drop
      
    latency_targets:
      first_result: < 5_seconds
      continuous_flow: < 1_second
      end_to_end: < 2_minutes
      
  parallel_streams:
    independent_flows:
      - Frontend stream
      - Backend stream
      - Database stream
    synchronization:
      only_at: integration_points
      method: eventual_consistency
    merge_strategy:
      conflict_resolution: last_write_wins
      validation: at_merge_points
```

## Monitoring and Metrics

```yaml
routing_metrics:
  track:
    - routing_accuracy: correct_agent_selection
    - execution_time: parallel_vs_sequential
    - resource_usage: agent_utilization
    - success_rate: task_completion
  
  optimization_triggers:
    - poor_routing_accuracy: adjust_rules
    - slow_execution: increase_parallelization
    - resource_bottleneck: limit_parallel_agents
    - low_success_rate: review_agent_capabilities
```
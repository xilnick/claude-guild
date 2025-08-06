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
  
  # Medium complexity with multiple components
  - condition:
      complexity: medium
      technologies: [2-3]
      scope: integrated
    routing:
      mode: coordinated
      agents: [planning, specialists]
      execution: mixed
  
  # Complex, multi-system tasks
  - condition:
      complexity: high
      technologies: [multiple]
      scope: system_wide
    routing:
      mode: orchestrated
      agents: [reasoning, planning, multiple_specialists]
      execution: parallel_groups
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

### Example 1: React Component with API
```yaml
task: "Create user dashboard with real-time data"
classification:
  technologies: [react, api, websocket]
  complexity: medium
  scope: integrated

routing_result:
  execution_plan:
    phase_1:
      parallel:
        - guild-project-researcher: analyze_existing_dashboard_patterns
        - guild-global-researcher: research_realtime_best_practices
    phase_2:
      sequential: guild-planning-agent: create_implementation_plan
    phase_3:
      parallel:
        group_1:
          - guild-react-engineer: implement_dashboard_component
          - guild-style-engineer: create_responsive_styles
        group_2:
          - guild-node-engineer: implement_websocket_endpoint
          - guild-database-engineer: optimize_data_queries
    phase_4:
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

```yaml
optimization_rules:
  parallel_threshold:
    min_subtasks: 2
    min_complexity: medium
    max_parallel_agents: 5
  
  sequential_preference:
    when:
      - critical_path: true
      - high_risk: true
      - dependencies: complex
  
  resource_management:
    max_concurrent_agents: 3
    queue_overflow: sequential_fallback
    priority_scheduling: true
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
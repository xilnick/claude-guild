# Workflow Process Definitions

## Core Workflow Processes

### Task Analysis Processes

```yaml
process: analyze-task
  description: Deep analysis of user requirements with clarification
  inputs: [user_prompt, project_context]
  steps:
    - parse_requirements:
        action: extract explicit and implicit requirements
        output: requirement_list
    - identify_ambiguities:
        action: detect unclear or missing information
        output: clarification_needs
    - assess_complexity:
        action: evaluate technical complexity and effort
        output: complexity_score
    - determine_approach:
        action: suggest implementation strategy
        output: recommended_approach
  outputs: [requirements, clarifications, complexity, approach]
  error_handling: request_user_clarification
```

```yaml
process: correct-typos
  description: Identify and correct typing errors in prompt
  inputs: [user_prompt]
  steps:
    - detect_typos:
        action: identify probable typing errors
        output: typo_list
    - suggest_corrections:
        action: generate correction suggestions
        output: corrections
    - apply_corrections:
        action: create corrected prompt
        output: corrected_prompt
  outputs: [corrected_prompt, corrections_applied]
```

### Research Processes

```yaml
process: research-project-context
  description: Analyze existing project patterns and conventions
  inputs: [project_scope, research_focus]
  parallel: true
  steps:
    - scan_codebase:
        action: identify relevant files and patterns
        output: codebase_analysis
    - extract_conventions:
        action: detect coding standards and patterns
        output: conventions
    - analyze_architecture:
        action: understand project structure
        output: architecture_insights
    - identify_constraints:
        action: find technical limitations
        output: constraints
  outputs: [patterns, conventions, architecture, constraints]
  coordination: aggregate_findings
```

```yaml
process: research-best-practices
  description: Research external best practices and solutions
  inputs: [technology_stack, problem_domain]
  parallel: true
  steps:
    - search_documentation:
        action: query official documentation
        output: official_guidance
    - find_community_solutions:
        action: search for community patterns
        output: community_practices
    - evaluate_alternatives:
        action: compare different approaches
        output: alternatives_analysis
  outputs: [best_practices, alternatives, recommendations]
  coordination: synthesize_research
```

### Planning Processes

```yaml
process: create-execution-plan
  description: Create detailed plan with task routing
  inputs: [requirements, research_findings, complexity]
  steps:
    - decompose_task:
        action: break into manageable subtasks
        output: subtask_list
    - identify_dependencies:
        action: find task dependencies
        output: dependency_graph
    - assign_agents:
        action: route subtasks to specialized agents
        output: agent_assignments
    - determine_parallelization:
        action: identify parallel execution opportunities
        output: execution_groups
    - define_coordination:
        action: establish coordination points
        output: coordination_plan
  outputs: [execution_plan, agent_assignments, coordination_points]
```

```yaml
process: route-to-agents
  description: Intelligent routing based on context
  inputs: [task, available_agents, routing_rules]
  steps:
    - classify_task:
        action: determine task type and requirements
        output: task_classification
    - match_capabilities:
        action: find agents with required skills
        output: capable_agents
    - apply_routing_rules:
        action: apply project-specific routing
        output: selected_agents
    - optimize_assignment:
        action: balance workload and efficiency
        output: final_assignments
  outputs: [agent_assignments, execution_mode]
```

### Implementation Processes

```yaml
process: implement-solution
  description: Execute implementation with quality standards
  inputs: [requirements, plan, context]
  steps:
    - prepare_implementation:
        action: setup implementation context
        output: implementation_context
    - write_code:
        action: generate solution code
        output: code_changes
    - apply_patterns:
        action: ensure pattern compliance
        output: pattern_compliant_code
    - add_tests:
        action: create appropriate tests
        output: test_code
  outputs: [implementation, tests, documentation]
  quality_checks: [lint, type_check, test_run]
```

```yaml
process: refactor-code
  description: Systematic code improvement
  inputs: [code_scope, refactor_goals]
  steps:
    - analyze_code_quality:
        action: identify improvement opportunities
        output: quality_issues
    - eliminate_duplication:
        action: remove redundant code
        output: deduplicated_code
    - simplify_complexity:
        action: reduce cognitive load
        output: simplified_code
    - improve_structure:
        action: enhance organization
        output: restructured_code
  outputs: [refactored_code, improvement_metrics]
```

### Validation Processes

```yaml
process: validate-implementation
  description: Comprehensive validation of changes
  inputs: [implementation, requirements, tests]
  steps:
    - verify_requirements:
        action: check requirement satisfaction
        output: requirement_coverage
    - run_tests:
        action: execute test suite
        output: test_results
    - check_integration:
        action: verify system integration
        output: integration_status
    - assess_quality:
        action: evaluate code quality
        output: quality_metrics
  outputs: [validation_report, issues_found, recommendations]
```

## Parallel Execution Coordination

```yaml
coordination: parallel-research
  description: Coordinate parallel research agents
  participants: [project_researcher, global_researcher]
  strategy:
    - independent_execution:
        each_agent: works on assigned scope
        isolation: context-based
    - result_aggregation:
        collector: planning_agent
        method: merge_findings
    - conflict_resolution:
        handler: planning_agent
        strategy: prioritize_project_patterns
```

```yaml
coordination: parallel-implementation
  description: Coordinate parallel implementation
  participants: [frontend_engineers, backend_engineers]
  strategy:
    - scope_isolation:
        method: assign_clear_boundaries
        enforcement: context_limits
    - progress_sync:
        frequency: on_milestone
        coordinator: planning_agent
    - integration_points:
        definition: explicit_interfaces
        validation: contract_testing
```

## Context Handoff Protocols

```yaml
handoff: reasoning-to-research
  from: guild-reasoning-agent
  to: [guild-project-researcher, guild-global-researcher]
  context_transfer:
    - clarified_requirements
    - complexity_assessment
    - research_focus_areas
  parallel_flag: true
```

```yaml
handoff: research-to-planning
  from: [research_agents]
  to: guild-planning-agent
  context_aggregation:
    - merge_research_findings
    - identify_patterns
    - synthesize_recommendations
  coordination: wait_for_all
```

```yaml
handoff: planning-to-implementation
  from: guild-planning-agent
  to: [assigned_engineers]
  context_distribution:
    - subtask_assignments
    - implementation_context
    - quality_standards
  execution_mode: parallel_or_sequential
```

## Error Handling

```yaml
error_handler: process-failure
  recovery_strategies:
    - retry_with_backoff:
        max_attempts: 3
        backoff: exponential
    - fallback_to_sequential:
        when: parallel_execution_fails
    - request_user_intervention:
        when: automated_recovery_fails
```

```yaml
error_handler: coordination-conflict
  resolution_strategies:
    - coordinator_arbitration:
        decider: planning_agent
    - scope_renegotiation:
        method: redefine_boundaries
    - sequential_fallback:
        when: parallel_conflicts_persist
```
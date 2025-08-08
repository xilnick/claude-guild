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

### Specification-Driven Processes

```yaml
process: analyze-specifications
  description: Analyze current project specifications and documentation
  inputs: [task_requirements, project_context]
  steps:
    - inventory_existing_specs:
        action: identify current specification documents
        output: spec_inventory
    - assess_spec_completeness:
        action: evaluate specification coverage
        output: completeness_assessment
    - identify_spec_gaps:
        action: find gaps between task needs and current specs
        output: specification_gaps
    - determine_update_requirements:
        action: define what specifications need updating
        output: update_requirements
  outputs: [spec_inventory, gaps_analysis, update_plan]
  changes_allowed: false  # Analysis only
```

```yaml
process: update-specifications
  description: Update project specifications and documentation
  inputs: [update_requirements, task_details, gap_analysis]
  steps:
    - update_api_documentation:
        action: revise API specs and interface definitions
        output: updated_api_docs
        scope: [endpoints, contracts, schemas]
    - update_technical_specifications:
        action: revise technical and architecture documents
        output: updated_tech_specs
        scope: [design_docs, architecture_decisions, technical_requirements]
    - update_requirements_documentation:
        action: revise user stories and business requirements
        output: updated_requirements
        scope: [user_stories, acceptance_criteria, business_rules]
    - update_testing_specifications:
        action: revise test plans and validation criteria
        output: updated_test_specs
        scope: [test_plans, acceptance_tests, validation_contracts]
    - create_implementation_guidelines:
        action: derive clear implementation guidance from updated specs
        output: implementation_guidelines
  outputs: [updated_specifications, implementation_guidelines]
  changes_allowed: specification_updates_only
```

### Research Processes

#### Strategic Research (Phase 1 - Pre-Planning)

```yaml
process: strategic-research-project
  description: Quick landscape understanding for planning context
  inputs: [task_description, project_scope]
  parallel: true
  effort_allocation: 30%
  steps:
    - quick_architecture_scan:
        action: identify high-level structure
        output: architecture_overview
        time_box: 2_minutes
    - detect_technology_stack:
        action: identify key technologies
        output: tech_stack
        time_box: 1_minute
    - find_constraints:
        action: identify blocking limitations
        output: hard_constraints
        time_box: 2_minutes
    - pattern_overview:
        action: detect dominant patterns
        output: pattern_summary
        time_box: 2_minutes
  outputs: [architecture_overview, tech_stack, constraints, patterns]
  coordination: aggregate_strategic_context
```

```yaml
process: strategic-research-global
  description: High-level best practices for planning
  inputs: [technology_stack, task_type]
  parallel: true
  effort_allocation: 30%
  steps:
    - identify_approaches:
        action: find common solution patterns
        output: approach_options
        time_box: 3_minutes
    - assess_complexity:
        action: evaluate implementation difficulty
        output: complexity_factors
        time_box: 2_minutes
    - find_prerequisites:
        action: identify required knowledge
        output: knowledge_requirements
        time_box: 2_minutes
  outputs: [approaches, complexity, prerequisites]
  coordination: synthesize_strategic_insights
```

#### Tactical Research (Phase 2 - Post-Planning)

```yaml
process: tactical-research-project
  description: Deep targeted investigation for implementation
  inputs: [specific_tasks, implementation_plan, required_context]
  parallel: true
  effort_allocation: 70%
  steps:
    - deep_code_analysis:
        action: analyze specific implementation areas
        output: detailed_code_context
        targeted: true
    - extract_exact_patterns:
        action: find precise patterns to follow
        output: implementation_patterns
        filtered_by: plan_requirements
    - trace_dependencies:
        action: map exact dependency chains
        output: dependency_details
        scope: task_specific
    - gather_examples:
        action: collect relevant code examples
        output: code_examples
        relevance: direct_only
  outputs: [detailed_context, patterns, dependencies, examples]
  coordination: package_implementation_context
```

```yaml
process: tactical-research-global
  description: Specific best practices for chosen approach
  inputs: [selected_approach, implementation_details]
  parallel: true
  effort_allocation: 70%
  steps:
    - detailed_documentation:
        action: retrieve specific API docs
        output: api_documentation
        filtered_by: planned_usage
    - implementation_examples:
        action: find exact code examples
        output: working_examples
        relevance: approach_specific
    - gotchas_and_tips:
        action: identify common pitfalls
        output: implementation_tips
        context: selected_approach
  outputs: [documentation, examples, tips]
  coordination: compile_tactical_guidance
```

### Planning Processes

```yaml
process: distributed-planning
  description: Multi-level distributed planning with streaming
  inputs: [requirements, initial_research, complexity]
  mode: streaming
  steps:
    - strategic_planning:
        level: high
        agent: planning_agent
        action: create_skeleton_plan
        output: high_level_structure
        time_box: 30_seconds
        can_proceed_with: 60%_confidence
        
    - distribute_planning:
        level: tactical
        action: delegate_detailed_planning
        output: planning_assignments
        to_agents: specialist_engineers
        parallel: true
        
    - streaming_refinement:
        mode: continuous
        action: refine_as_research_arrives
        output: evolving_plan
        update_frequency: on_new_data
        
    - peer_coordination:
        level: micro
        action: agents_self_organize
        output: negotiated_interfaces
        protocol: peer_to_peer
        
  outputs: [distributed_plan, agent_contracts, coordination_protocol]
  streaming: true
```

```yaml
process: context-aware-routing
  description: Smart routing with context decay
  inputs: [task, available_agents, context_pool]
  steps:
    - apply_context_decay:
        action: score_context_relevance
        algorithm: exponential_decay
        output: filtered_context
        max_size: 10KB_per_agent
        
    - calculate_routing_efficiency:
        action: optimize_context_locality
        factors:
          - context_transfer_cost
          - agent_expertise
          - parallelization_gain
        output: efficiency_scores
        
    - create_work_packages:
        action: package_minimal_context
        strategy: include_only_essential
        compression: aggressive
        output: lightweight_packages
        
    - streaming_assignment:
        action: assign_as_ready
        mode: progressive
        no_waiting: true
        output: streaming_assignments
        
  outputs: [optimized_routing, minimal_context_packages]
  performance: optimized_for_speed
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
process: refactor-planning
  description: Strategic refactoring analysis and planning
  inputs: [codebase_analysis, quality_metrics, refactor_goals]
  steps:
    - analyze_code_quality:
        action: identify improvement opportunities  
        output: quality_issues
    - prioritize_improvements:
        action: rank improvements by impact
        output: improvement_priorities
    - assess_risks:
        action: evaluate refactoring risks
        output: risk_assessment
    - create_refactor_strategy:
        action: plan systematic improvements
        output: refactor_plan
  outputs: [refactor_strategy, priority_list, risk_mitigation]
  changes_allowed: false  # Planning only
```

```yaml
process: execute-refactoring
  description: Systematic code improvement execution
  inputs: [refactor_plan, code_scope, quality_targets]
  steps:
    - eliminate_duplication:
        action: remove redundant code
        output: deduplicated_code
    - simplify_complexity:
        action: reduce cognitive load
        output: simplified_code
    - improve_structure:
        action: enhance organization
        output: restructured_code
    - update_tests:
        action: ensure tests still pass
        output: updated_tests
    - measure_improvements:
        action: quantify quality improvements
        output: improvement_metrics
  outputs: [refactored_code, updated_tests, metrics]
  changes_allowed: true
```

### Validation Processes

```yaml
process: create-tests
  description: Systematic test creation and execution
  inputs: [implementation, requirements, context]
  steps:
    - analyze_test_needs:
        action: identify testing requirements
        output: test_requirements
    - create_unit_tests:
        action: generate unit tests
        output: unit_test_code
    - create_integration_tests:
        action: generate integration tests
        output: integration_test_code
    - run_test_suite:
        action: execute all tests
        output: test_results
    - create_test_documentation:
        action: document test approach
        output: test_documentation
  outputs: [test_code, test_results, test_docs]
  changes_allowed: true
```

```yaml
process: validate-implementation
  description: Comprehensive validation with corrective changes
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
    - fix_issues:
        action: correct problems found during validation
        output: corrective_changes
  outputs: [validation_report, issues_found, fixes_applied]
  changes_allowed: true
```

## Comprehensive Workflow Processes

### --full Flag Execution Process

```yaml
process: comprehensive-workflow
  description: Complete development lifecycle execution (--full flag)
  inputs: [user_task, project_context]
  stages:
    - context_creation:
        agents: [reasoning, research, planning]
        changes_allowed: false
        output: comprehensive_context
    - implementation:
        agents: [framework_engineers]
        changes_allowed: true
        input: comprehensive_context
        output: working_implementation
    - quality_assurance:
        agents: [verification, testing, refactoring]
        changes_allowed: true
        input: [implementation, context]
        output: production_ready_code
  coordination: sequential_stages_with_parallel_within
```

### --spec Flag Execution Process

```yaml
process: specification-driven-workflow
  description: Specification-first development lifecycle execution (--spec flag)
  inputs: [user_task, project_context]
  stages:
    - context_creation:
        agents: [reasoning]
        changes_allowed: false
        output: task_analysis
    - specification_phase:
        agents: [spec_agent]
        changes_allowed: specification_updates_only
        input: task_analysis
        output: updated_specifications
    - enhanced_context_creation:
        agents: [research, planning]
        changes_allowed: false
        input: [task_analysis, updated_specifications]
        output: implementation_context
    - implementation:
        agents: [framework_engineers]
        changes_allowed: true
        input: [implementation_context, updated_specifications]
        output: spec_compliant_implementation
  coordination: sequential_stages_specification_first
  quality_gate: specifications_updated_before_implementation
```

```yaml
process: context-only-execution
  description: Execution pattern for context-only agents
  participants: [reasoning_agent, research_agents, planning_agent]
  constraints:
    - no_file_modifications: true
    - no_code_changes: true  
    - context_output_only: true
  coordination:
    - parallel_research: research agents work simultaneously
    - sequential_flow: reasoning → research → planning
    - context_handoffs: structured context packages between stages
```

```yaml  
process: implementation-execution
  description: Execution pattern for implementation agents
  participants: [engineers, verification_agent]
  capabilities:
    - file_modifications: true
    - code_changes: true
    - test_creation: true
    - documentation_updates: true
  coordination:
    - context_consumption: receive structured context from context-only agents
    - parallel_implementation: multiple engineers on different components
    - quality_validation: verification agent validates and fixes issues
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

### Context-Only Agent Handoffs (No Changes Allowed)

```yaml
handoff: reasoning-to-strategic-research
  from: guild-reasoning-agent (context-only)
  to: [guild-project-researcher, guild-global-researcher] (context-only)
  context_transfer:
    priority: strategic
    agent_constraint: no_changes_allowed
    content:
      critical:
        - clarified_requirements
        - task_objectives
      important:
        - complexity_assessment
        - identified_risks
      supplementary:
        - user_preferences
  parallel_flag: true
  time_allocation: 30%_of_research_time
```

```yaml
handoff: strategic-research-to-planning
  from: [research_agents] (context-only)
  to: guild-planning-agent (context-only)
  context_aggregation:
    format: executive_summary
    agent_constraint: no_changes_allowed
    content:
      - architecture_overview
      - technology_constraints
      - approach_options
      - complexity_factors
    max_size: 500_words
  coordination: wait_for_all
```

### Phase 2: Tactical Handoffs

```yaml
handoff: planning-to-tactical-research
  from: guild-planning-agent
  to: [guild-project-researcher, guild-global-researcher]
  context_transfer:
    priority: tactical
    content:
      task_assignments:
        - specific_subtasks
        - required_information
        - target_areas
      focus_filters:
        - relevant_files
        - specific_patterns
        - required_apis
  parallel_flag: true
  time_allocation: 70%_of_research_time
```

```yaml
handoff: context-to-implementation-transition
  from: [research_agents, planning_agent] (context-only)
  to: [assigned_engineers] (implementation)
  context_distribution:
    format: structured_package
    transition: context_only_to_implementation
    content:
      task_definition:
        what: specific_task_description
        why: business_technical_justification
        success_criteria: measurable_outcomes
      implementation_context:
        patterns_to_follow: [exact_patterns]
        constraints: [technical_limitations]
        dependencies: [interface_contracts]
      code_context:
        relevant_files: [paths_with_purpose]
        key_functions: [signatures_with_usage]
        modification_points: [where_to_change]
      priority_filtering:
        critical: must_have_for_execution
        important: significantly_helps
        supplementary: nice_to_have
      agent_permissions:
        receiving_agents: changes_allowed
        context_creators: context_only_completed
  execution_mode: optimized_parallel
```

### Specification-Driven Handoffs

```yaml
handoff: reasoning-to-specification
  from: guild-reasoning-agent (context-only)
  to: guild-spec-agent (specification-updates-only)
  context_transfer:
    priority: specification_requirements
    agent_constraint: spec_updates_only
    content:
      critical:
        - task_requirements
        - functional_objectives
        - specification_scope
      important:
        - complexity_assessment
        - integration_requirements
      supplementary:
        - user_preferences
        - implementation_hints
  parallel_flag: false
  sequence: mandatory_before_research
```

```yaml
handoff: specification-to-enhanced-context
  from: guild-spec-agent (specification-updates-only)
  to: [guild-project-research-agent, guild-global-research-agent] (context-only)
  context_transfer:
    priority: specification_guided_research
    agent_constraint: no_changes_allowed
    content:
      critical:
        - updated_specifications
        - specification_changes_made
        - implementation_guidelines
      important:
        - specification_dependencies
        - integration_requirements
      research_focus:
        - patterns_matching_updated_specs
        - implementation_approaches_for_specs
        - validation_strategies_for_requirements
  parallel_flag: true
  coordination: spec_guided_research
```

```yaml
handoff: specification-guided-to-implementation
  from: [spec_agent, research_agents, planning_agent] (context-only)
  to: [assigned_engineers] (implementation)
  context_distribution:
    format: specification_guided_package
    transition: spec_first_to_implementation
    content:
      specification_context:
        updated_specifications: [current_spec_versions]
        specification_changes: [what_was_updated_and_why]
        implementation_guidelines: [clear_guidance_from_specs]
        acceptance_criteria: [measurable_success_criteria]
      implementation_context:
        patterns_to_follow: [spec_compliant_patterns]
        constraints: [specification_constraints]
        dependencies: [spec_defined_interfaces]
      validation_requirements:
        specification_compliance: must_match_updated_specs
        acceptance_tests: derived_from_spec_criteria
        integration_tests: validate_spec_interfaces
      agent_permissions:
        receiving_agents: implementation_changes_allowed
        specification_compliance: mandatory
  execution_mode: specification_compliant_implementation
```

### Enhanced Context Structure

```yaml
structured_context_package:
  metadata:
    task_id: unique_identifier
    agent_target: specific_engineer
    priority_level: critical|important|supplementary
    estimated_effort: time_estimate
    
  executive_summary:
    task_overview: 100_word_max
    key_objectives: bullet_points
    success_metrics: measurable_criteria
    
  implementation_details:
    patterns:
      - pattern_name: specific_pattern
        example_code: relevant_snippet
        application: how_to_apply
    constraints:
      - type: technical|business|security
        description: constraint_detail
        impact: how_affects_implementation
    dependencies:
      - interface: api_or_component
        contract: expected_behavior
        integration_point: where_connects
        
  code_references:
    primary:
      - file: path/to/file
        purpose: why_relevant
        sections: [specific_lines_or_functions]
    secondary:
      - file: related_file
        purpose: additional_context
        optional: true
        
  resources:
    documentation: [relevant_doc_links]
    examples: [code_examples]
    discussions: [relevant_decisions]
```

### Dynamic Context Request

```yaml
dynamic_context_request:
  request_format:
    from_agent: requesting_engineer
    request_type: clarification|additional_context|coordination
    specifics:
      what_needed: detailed_description
      why_needed: blocker_explanation
      urgency: blocking|important|nice_to_have
      
  response_protocol:
    router: guild-planning-agent
    decision_tree:
      if_cached:
        action: return_immediately
        source: context_cache
      if_research_needed:
        action: trigger_tactical_research
        scope: specific_request_only
      if_coordination_needed:
        action: mediate_between_agents
        participants: affected_agents
      if_user_input_needed:
        action: escalate_to_user
        format: structured_question
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
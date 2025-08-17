# Instructions Template Module
**Version**: 5.0.0 | **Last Updated**: 2025-01-18 | **Dependencies**: principles.md, agents.md, workflows.md, parallel.md, planning-router.md

## Purpose
Hierarchical configuration template for Guild system behavior with planning router orchestration and think-only specialized agents. This module is embedded into the setup command and creates the project's instructions.md file.

## Embedded Intelligence

### Enhanced Instructions Template with Variable Substitution

**Location**: `{{project_root}}/.guild/instructions.md`

<template_variables>
```yaml
# Project-specific variables automatically detected and substituted
project_name: "{{project_name}}"           # Auto-detected from package.json, setup.py, etc.
project_type: "{{project_type}}"           # Auto-detected: web-app, cli-tool, library, api, etc.
tech_stack: "{{tech_stack}}"               # Auto-detected: react+node, python+django, etc.
complexity: "{{complexity}}"               # Auto-detected: simple, moderate, complex
team_size: "{{team_size}}"                 # User-configured: solo, small-team, large-team
project_stage: "{{project_stage}}"         # User-configured: prototype, development, production
```
</template_variables>

<template_structure>
```markdown
# Guild System Instructions for {{project_name}}

<project_context>
Project Type: {{project_type}}
Technology Stack: {{tech_stack}}
Development Stage: {{project_stage}}
Team Configuration: {{team_size}}
</project_context>

Configure how Guild agents behave in this {{project_type}} project through these settings.

## Core Workflow Configuration

<workflow_settings>
### Reasoning & Context Gathering
```yaml
reasoning:
  depth: {{default_reasoning_depth}}      # minimal | standard | comprehensive
  context_strategy: {{default_context}}   # on-demand | proactive | progressive  
  thinking_mode: adaptive                 # adaptive | ultrathink | think-harder | think
  project_analysis: enabled               # enabled | disabled
```

<reasoning_guidance>
**Choose reasoning depth based on your project needs:**

<examples>
<example scenario="rapid_prototyping">
<configuration>
reasoning:
  depth: minimal
  context_strategy: on-demand
  thinking_mode: think
</configuration>
<rationale>Fast iteration with basic analysis for prototype development</rationale>
</example>

<example scenario="production_system">
<configuration>
reasoning:
  depth: comprehensive
  context_strategy: proactive
  thinking_mode: think-harder
</configuration>
<rationale>Thorough analysis with extensive context for production reliability</rationale>
</example>

<example scenario="learning_project">
<configuration>
reasoning:
  depth: standard
  context_strategy: progressive
  thinking_mode: adaptive
</configuration>
<rationale>Balanced approach with learning-focused explanation depth</rationale>
</example>
</examples>
</reasoning_guidance>

### Planning Router Configuration
```yaml
planning_router:
  enabled: {{default_planning_router_enabled}}         # true | false - use planning router for coordination
  thinking_mode: {{default_router_thinking}}           # adaptive | think-harder | ultrathink
  orchestration_style: {{default_orchestration}}       # conservative | balanced | aggressive
  coordination_overhead_limit: {{default_overhead}}    # 5-20% maximum coordination time
```

<planning_router_guidance>
**Planning Router controls all complex coordination and agent spawning:**

<router_examples>
<example scenario="simple_tasks">
<configuration>
planning_router:
  enabled: false
  thinking_mode: think
  orchestration_style: conservative
  coordination_overhead_limit: 5%
</configuration>
<rationale>Direct execution for simple tasks without coordination overhead</rationale>
</example>

<example scenario="complex_architecture">
<configuration>
planning_router:
  enabled: true
  thinking_mode: ultrathink
  orchestration_style: aggressive
  coordination_overhead_limit: 15%
</configuration>
<rationale>Full orchestration for complex tasks requiring extensive coordination</rationale>
</example>

<example scenario="moderate_complexity">
<configuration>
planning_router:
  enabled: true
  thinking_mode: think-harder
  orchestration_style: balanced
  coordination_overhead_limit: 10%
</configuration>
<rationale>Balanced coordination for moderate complexity with reasonable overhead</rationale>
</example>
</router_examples>
</planning_router_guidance>

### Agent Delegation Configuration
```yaml
agents:
  auto_detection: {{default_auto_detection}}    # enabled | disabled
  delegation_mode: {{default_delegation}}       # manual | auto | aggressive
  max_parallel: {{default_max_parallel}}        # 1-20 maximum parallel agents
  thinking_mode: think                          # ALL specialized agents use think mode only
  task_isolation: {{default_isolation}}         # strict | moderate | flexible
```

<delegation_guidance>
**Agent delegation modes for different scenarios:**

<delegation_examples>
<example project_type="{{project_type}}" team_size="{{team_size}}">
<recommended_settings>
# Optimized for {{project_type}} with {{team_size}} team
agents:
  auto_detection: {{recommended_auto_detection}}
  delegation_mode: {{recommended_delegation_mode}}
  max_parallel: {{recommended_max_parallel}}
  task_isolation: {{recommended_isolation_level}}
</recommended_settings>
<reasoning>
- Auto-detection {{recommended_auto_detection}} because {{auto_detection_reasoning}}
- Delegation mode {{recommended_delegation_mode}} for {{delegation_reasoning}}
- Max parallel {{recommended_max_parallel}} agents suitable for {{parallelization_reasoning}}
- Task isolation {{recommended_isolation_level}} to {{isolation_reasoning}}
</reasoning>
</example>
</delegation_examples>
</delegation_guidance>

### User Confirmation Settings
```yaml
confirmation:
  enabled: {{default_confirmation_enabled}}         # true | false
  level: {{default_confirmation_level}}             # minimal | standard | detailed
  threshold: {{default_confirmation_threshold}}     # simple | medium | complex (when to require)
  timeout: {{default_confirmation_timeout}}         # seconds to wait for user response
  format: {{default_confirmation_format}}           # structured | conversational
```

<confirmation_guidance>
**Choose confirmation settings based on your workflow needs:**

<confirmation_examples>
<example scenario="rapid_development">
<configuration>
confirmation:
  enabled: false  # or threshold: complex
  level: minimal
  timeout: 30
</configuration>
<rationale>Fast iteration with confirmation only for complex tasks</rationale>
</example>

<example scenario="production_environment">
<configuration>
confirmation:
  enabled: true
  level: detailed
  threshold: simple
  timeout: 120
</configuration>
<rationale>Comprehensive confirmation for all tasks to prevent mistakes</rationale>
</example>

<example scenario="learning_mode">
<configuration>
confirmation:
  enabled: true
  level: standard
  threshold: medium
  format: conversational
</configuration>
<rationale>Educational confirmation to understand Guild's reasoning process</rationale>
</example>
</confirmation_examples>
</confirmation_guidance>

### Hierarchical Parallel Execution Settings  
```yaml
parallel:
  enabled: {{default_parallel_enabled}}         # true | false
  threshold: {{default_parallel_threshold}}     # minimum independent tasks (3+)
  max_total_agents: {{default_max_agents}}      # 1-20 total agents maximum
  domain_leads: {{default_domain_leads}}        # 1-5 domain lead agents
  sub_agents_per_domain: {{default_sub_agents}} # 2-3 sub-agents per domain lead
  performance_target: {{default_speedup}}       # 2x | 5x | 10x | 20x speedup target
  coordination_overhead_limit: {{default_coordination_overhead}} # 5-15% maximum overhead
```

<hierarchical_parallel_guidance>
**Hierarchical parallel execution optimizes coordination through planning router:**

<parallel_examples>
<example scenario="small_project">
<configuration>
parallel:
  enabled: true
  threshold: 3
  max_total_agents: 5
  domain_leads: 2
  sub_agents_per_domain: 2
  performance_target: 2x
  coordination_overhead_limit: 10%
</configuration>
<rationale>Conservative parallelization for small projects with minimal overhead</rationale>
</example>

<example scenario="large_system">
<configuration>
parallel:
  enabled: true
  threshold: 3
  max_total_agents: 20
  domain_leads: 5
  sub_agents_per_domain: 3
  performance_target: 10x
  coordination_overhead_limit: 15%
</configuration>
<rationale>Aggressive parallelization for complex systems targeting maximum speedup</rationale>
</example>
</parallel_examples>
</hierarchical_parallel_guidance>
</workflow_settings>

## MCP Server Integration Configuration

<mcp_server_framework>
Configure Model Context Protocol (MCP) server integration for enhanced Guild capabilities.
Servers are automatically detected from Claude desktop configuration and categorized by capability.
</mcp_server_framework>

<detected_mcp_servers>
```yaml
# Automatically detected MCP servers from Claude desktop configuration
available_servers:
  development_tools:
    github: {{github_available}}              # Repository access and analysis
    jetbrains: {{jetbrains_available}}        # IDE integration and project analysis
    semgrep: {{semgrep_available}}            # Security scanning and code analysis
    deepview: {{deepview_available}}          # Large codebase analysis
    
  documentation_access:
    notion: {{notion_available}}              # Team documentation and knowledge base
    ref_tools: {{ref_tools_available}}        # Up-to-date technical documentation
    inkeep: {{inkeep_available}}              # RAG search over documentation
    
  data_integration:
    supabase: {{supabase_available}}          # Database and authentication integration
    neo4j: {{neo4j_available}}               # Graph database operations
    bigquery: {{bigquery_available}}         # Large-scale data analysis
    prisma: {{prisma_available}}             # Database management and ORM
    
  project_management:
    plane: {{plane_available}}               # Project automation and management
    taskade: {{taskade_available}}           # Task management and workflows
    
  observability_monitoring:
    sentry: {{sentry_available}}             # Error tracking and performance monitoring
    grafana: {{grafana_available}}           # Dashboard management and monitoring
```
</detected_mcp_servers>

<mcp_configuration_settings>
### MCP Server Usage Configuration
```yaml
mcp_integration:
  auto_detection: {{default_mcp_auto_detection}}     # enabled | disabled
  intelligent_matching: {{default_mcp_matching}}     # enabled | disabled  
  performance_optimization: {{default_mcp_performance}} # enabled | disabled
  parallel_coordination: {{default_mcp_parallel}}    # enabled | disabled
```

<mcp_usage_patterns>
**Project-specific MCP server recommendations:**

<mcp_examples>
<example project_type="{{project_type}}" detected_servers="{{detected_mcp_servers}}">
<recommended_mcp_config>
# Optimized MCP configuration for {{project_type}}
mcp_servers:
  essential: {{essential_mcp_servers}}        # Critical servers for this project type
  recommended: {{recommended_mcp_servers}}    # Beneficial servers for enhanced capabilities
  optional: {{optional_mcp_servers}}          # Additional servers for advanced features
</recommended_mcp_config>
<mcp_reasoning>
- Essential servers {{essential_mcp_servers}} because {{essential_reasoning}}
- Recommended servers {{recommended_mcp_servers}} for {{recommended_reasoning}}
- Optional servers {{optional_mcp_servers}} to {{optional_reasoning}}
</mcp_reasoning>
</example>
</mcp_examples>
</mcp_usage_patterns>

### MCP Server Categories Configuration
```yaml
server_categories:
  development_tools:
    enabled: {{default_dev_tools_enabled}}           # true | false
    auto_usage: {{default_dev_tools_auto}}           # research | implementation | validation | always
    performance_limit: {{default_dev_tools_limit}}   # concurrent requests limit
    
  documentation_access:
    enabled: {{default_docs_enabled}}                # true | false
    auto_usage: {{default_docs_auto}}                # research | context-gathering | always
    search_depth: {{default_docs_depth}}             # shallow | standard | comprehensive
    
  data_integration:
    enabled: {{default_data_enabled}}                # true | false
    auto_usage: {{default_data_auto}}                # context-gathering | implementation | always
    connection_pooling: {{default_data_pooling}}     # enabled | disabled
    
  project_management:
    enabled: {{default_pm_enabled}}                  # true | false
    auto_usage: {{default_pm_auto}}                  # planning | coordination | always
    workflow_integration: {{default_pm_workflow}}    # enabled | disabled
    
  observability_monitoring:
    enabled: {{default_obs_enabled}}                 # true | false
    auto_usage: {{default_obs_auto}}                 # validation | continuous | always
    alerting_integration: {{default_obs_alerting}}   # enabled | disabled
```
</mcp_configuration_settings>

<advanced_mcp_settings>
### Confirmation Behavior
```yaml
confirmation_behavior:
  auto_skip_simple: {{default_auto_skip_simple}}        # true | false  
  always_confirm_security: {{default_confirm_security}} # true | false
  timeout_action: {{default_no_response}}               # proceed | wait | cancel
```

### Custom Confirmation Rules
```yaml
# Simple pattern-based rules
trusted_patterns: {{user_trusted_patterns}}          # Patterns that skip confirmation
always_confirm_patterns: {{user_always_confirm}}     # Patterns that always require confirmation
```

### MCP Performance Settings
```yaml
mcp_optimization:
  enabled: {{default_mcp_optimization}}               # true | false
  timeout: {{default_mcp_timeout}}                    # request timeout in seconds (default: 30)
  parallel_limit: {{default_mcp_parallel_limit}}      # max concurrent requests (default: 5)
```
</advanced_mcp_settings>

<mcp_customization>
### Custom MCP Rules
```yaml
# Simple overrides for specific scenarios
disabled_servers: {{user_disabled_mcp_servers}}     # List of servers to never use
always_use_servers: {{user_required_mcp_servers}}   # List of servers to always try
```
</mcp_customization>

## Agent Configuration

### Dynamic Agent Composition Settings
```yaml
agent_composition:
  pattern_detection: auto  # auto | manual | disabled
  specialization_depth: standard  # minimal | standard | comprehensive
  dynamic_creation: enabled  # enabled | disabled
  technology_adaptation: auto  # auto | guided | manual
  mcp_enhancement: enabled  # enabled | disabled
```

**Agent Composition Modes**:
- **auto**: Automatically detect patterns and compose specialists based on project analysis
- **manual**: Only create specialists when explicitly requested
- **disabled**: Use single-agent execution without specialization
- **guided**: Interactive specialization with user confirmation

### Specialization Detection Patterns
```yaml
# Dynamic patterns for composing specialists based on discovered technologies
technology_detection_patterns:
  ui_frameworks:
    react_patterns: ["**/*.{jsx,tsx}", "**/components/**", "**/hooks/**"]
    vue_patterns: ["**/*.vue", "**/composables/**", "**/pages/**"]
    angular_patterns: ["**/*.component.ts", "**/services/**", "**/modules/**"]
  
  server_frameworks:
    node_express: ["**/routes/**", "**/middleware/**", "**/controllers/**"]
    python_django: ["**/views.py", "**/models.py", "**/urls.py"]
    python_fastapi: ["**/routers/**", "**/dependencies/**", "**/schemas/**"]
  
  data_technologies:
    sql_databases: ["**/migrations/**", "**/*.sql", "**/models/**"]
    nosql_databases: ["**/schemas/**", "**/collections/**"]
    orm_patterns: ["**/entities/**", "**/repositories/**"]
  
  quality_frameworks:
    testing_libraries: ["**/*.{test,spec}.{js,ts,jsx,tsx,py}", "**/tests/**"]
    e2e_frameworks: ["**/e2e/**", "**/cypress/**", "**/playwright/**"]
    quality_tools: ["**/.eslintrc*", "**/jest.config*", "**/cypress.config*"]

# Compose specialists dynamically based on discovered patterns
specialization_composition_rules:
  technology_stack_analysis: "Analyze discovered patterns to determine optimal specialist composition"
  depth_scaling: "Scale specialization depth based on task complexity and project patterns"
  context_relevance: "Include only relevant technology context for composed specialists"
  mcp_enhancement: "Enhance specialists with relevant MCP server capabilities"
```

## Quality & Validation Configuration

### Quality Standards
```yaml
quality:
  code_consistency: enforce  # enforce | prefer | flexible
  pattern_following: strict  # strict | moderate | flexible  
  testing_requirements: auto  # auto | manual | disabled
  integration_validation: boundary  # boundary | completion | continuous
```

**Quality Enforcement Levels**:
- **enforce/strict**: Must follow established patterns, fail if not compliant
- **prefer/moderate**: Strongly encourage patterns, warn if inconsistent
- **flexible**: Allow deviation with justification

### Validation Settings
```yaml
validation:
  pre_execution: enabled  # enabled | disabled
  during_execution: progress  # none | progress | detailed
  post_execution: comprehensive  # minimal | standard | comprehensive
  integration_testing: auto  # auto | manual | disabled
```

## Evaluation and Success Metrics

<success_definition>
Define specific, measurable criteria for Guild system success in this project.
Use quantitative metrics where possible, with clear qualitative scales for subjective measures.
</success_definition>

<evaluation_framework>
### Core Success Metrics
```yaml
# Task completion and accuracy
task_fidelity: {{success_threshold_task_fidelity}}        # 90-99% tasks completed correctly
consistency: {{success_threshold_consistency}}            # 85-95% consistent responses
relevance: {{success_threshold_relevance}}               # 90-99% outputs relevant and useful
integration_success: {{success_threshold_integration}}    # 95-99% successful system integration

# Performance and efficiency  
execution_speed: {{target_execution_speed}}              # Target completion time
parallel_efficiency: {{target_parallel_efficiency}}      # 70-90% efficiency in parallel execution
resource_utilization: {{target_resource_utilization}}    # 80-95% agent capacity utilization
cost_effectiveness: {{target_cost_effectiveness}}        # Cost per successful task completion

# Quality and maintainability
code_quality: {{target_code_quality}}                    # Code quality standards compliance
pattern_consistency: {{target_pattern_consistency}}       # 90-99% adherence to project patterns
testing_coverage: {{target_testing_coverage}}            # Appropriate testing for complexity
documentation_quality: {{target_documentation_quality}}   # Clear, accurate documentation
```
</evaluation_framework>

<testing_strategy>
### Automated Evaluation Approaches
```yaml
quantitative_testing:
  - exact_match_evaluation: Compare outputs against expected results
  - performance_benchmarks: Measure execution time and resource usage
  - integration_testing: Validate system integration points
  - regression_testing: Ensure consistent behavior over time

qualitative_assessment:
  - code_review_metrics: Technical review and feedback scoring
  - user_feedback: Satisfaction and usability ratings
  - expert_evaluation: Domain expert assessment of outputs
  - a_b_testing: Compare different configuration approaches
```
</testing_strategy>

<success_criteria_examples>
<example project_type="web-application">
<metrics>
```yaml
# Web application success criteria
task_fidelity: 95%              # High accuracy for user-facing features
execution_speed: "< 5 minutes"   # Fast iteration for development workflow
integration_success: 98%        # Critical for production deployment
code_quality: "pass all lints"  # Strict quality for maintainability
```
</metrics>
</example>

<example project_type="data-pipeline">
<metrics>
```yaml
# Data pipeline success criteria  
task_fidelity: 99%              # Very high accuracy for data integrity
consistency: 95%                # Consistent data processing approaches
performance: "handle 1M+ records" # Scale requirements
testing_coverage: 90%           # Comprehensive testing for reliability
```
</metrics>
</example>

<example project_type="cli-tool">
<metrics>
```yaml
# CLI tool success criteria
task_fidelity: 90%              # Good accuracy with user feedback loop
execution_speed: "< 2 minutes"   # Fast turnaround for command development
usability: "4.5/5 rating"       # High usability for end users
documentation_quality: "complete" # Essential for CLI tool adoption
```
</metrics>
</example>
</success_criteria_examples>

<continuous_improvement>
### Performance Monitoring and Optimization
```yaml
monitoring_approach:
  real_time_metrics: Track execution performance and success rates
  quality_feedback: Collect feedback on output quality and usefulness
  efficiency_analysis: Monitor parallel execution and resource utilization
  error_tracking: Identify and categorize failure patterns

optimization_strategies:
  configuration_tuning: Adjust settings based on performance data
  specialist_improvement: Enhance specialist prompts based on outcomes
  workflow_refinement: Improve workflow patterns based on execution data
  template_evolution: Update templates based on project learnings
```
</continuous_improvement>

## Project-Specific Configuration

### Technology Stack (Auto-Detected)
```yaml
# These are automatically detected but can be overridden
technology:
  frontend: react  # react | vue | angular | vanilla
  backend: node  # node | python | go | java | ruby
  database: postgresql  # postgresql | mysql | mongodb | sqlite
  testing: jest  # jest | vitest | mocha | pytest
```

### Project Structure Settings
```yaml
structure:
  monorepo: false  # true | false (auto-detected)
  submodules: false  # true | false (auto-detected)
  package_manager: npm  # npm | yarn | pnpm | bun (auto-detected)
  build_system: custom  # webpack | vite | rollup | custom (auto-detected)
```

### File Organization Preferences
```yaml
file_organization:
  component_structure: feature  # feature | type | flat
  test_location: adjacent  # adjacent | separate | mirror
  config_location: root  # root | config | separate
  asset_organization: type  # type | feature | flat
```

## Advanced Configuration

### Performance Optimization
```yaml
performance:
  parallel_preference: balanced  # aggressive | balanced | conservative
  load_balancing: enabled  # enabled | disabled
  work_stealing: enabled  # enabled | disabled
  early_completion_redistribution: true  # true | false
```

### Error Handling & Recovery
```yaml
error_handling:
  conflict_resolution: automatic  # automatic | manual | prevention
  failure_recovery: redistribute  # redistribute | retry | abort
  partial_completion: accept  # accept | reject | manual
  fallback_strategy: sequential  # sequential | single-agent | abort
```

### Monitoring & Reporting
```yaml
monitoring:
  progress_tracking: standard  # minimal | standard | detailed
  performance_metrics: enabled  # enabled | disabled
  execution_logging: errors  # none | errors | info | debug
  completion_summary: standard  # minimal | standard | detailed
```

## Project-Specific Rules

Add your custom rules and preferences here:

### Custom Patterns
```yaml
# Example custom rules
custom_rules:
  - "Always validate API responses with proper error handling"
  - "Use existing component patterns from design system"
  - "Implement proper TypeScript types for all new code"
  - "Add unit tests for business logic functions"
  - "Follow existing naming conventions in codebase"
```

### Domain-Specific Guidelines
```yaml
domain_guidelines:
  authentication: "Use existing auth patterns from auth/ directory"
  api_design: "Follow RESTful conventions with proper HTTP status codes"
  database: "Use migrations for schema changes, no direct DB modifications"  
  frontend: "Follow component composition patterns, avoid prop drilling"
  testing: "Prioritize integration tests for critical user flows"
```

### Integration Requirements
```yaml
integration:
  external_apis: "Always handle network timeouts and retries"
  third_party_libs: "Prefer existing library versions, justify upgrades"
  deployment: "Ensure all changes work in containerized environment"
  monitoring: "Add appropriate logging for debugging and monitoring"
```

---

## Configuration Help

### Quick Setup Examples

**Minimal Configuration** (Fast execution, less parallelization):
```yaml
reasoning:
  depth: minimal
  context_strategy: on-demand
parallel:
  enabled: false
  threshold: 5
agents:
  auto_detection: disabled
  delegation_mode: manual
```

**Balanced Configuration** (Default - good for most projects):
```yaml
reasoning:
  depth: standard
  context_strategy: proactive
parallel:
  enabled: true
  threshold: 3
  max_total_agents: 5
agents:
  auto_detection: enabled
  delegation_mode: auto
  max_parallel: 3
```

**Comprehensive Configuration** (Thorough analysis, maximum parallelization):
```yaml
reasoning:
  depth: comprehensive
  context_strategy: proactive
parallel:
  enabled: true
  threshold: 3
  max_total_agents: 20
  performance_target: 10x
agents:
  auto_detection: enabled
  delegation_mode: aggressive
  max_parallel: 20
```

### Common Configuration Patterns

**Rapid Development**:
- reasoning: minimal
- parallel: enabled with threshold=2
- agents: auto for core domains
- quality: moderate enforcement

**Production-Ready**:
- reasoning: comprehensive  
- parallel: conservative with threshold=4
- agents: auto with extensive validation
- quality: strict enforcement

**Experimentation**:
- reasoning: standard
- parallel: aggressive with threshold=2
- agents: auto with flexible patterns
- quality: flexible with learning focus

### Troubleshooting Configuration

**If Guild is too slow**:
- Reduce reasoning depth to 'minimal'
- Increase parallel threshold
- Disable less critical experts
- Reduce validation frequency

**If Guild makes mistakes**:
- Increase reasoning depth to 'comprehensive'
- Enable stricter quality enforcement
- Reduce parallelization to improve coordination
- Enable more validation checkpoints

**If Guild conflicts occur**:
- Set task_isolation to 'strict'
- Reduce max_parallel agents
- Enable conflict_resolution: 'prevention'
- Use more conservative parallel settings
```

### Configuration Validation

**Default Validation Rules**:
```yaml
validation_rules:
  max_parallel_range: 1-20
  threshold_range: 2-10  
  coordination_overhead_max: 50
  expert_modes: [auto, manual, disabled]
  quality_levels: [enforce, prefer, flexible]
  reasoning_depths: [minimal, standard, comprehensive]
```

**Configuration Conflicts Resolution**:
```yaml
conflict_resolution:
  parallel_disabled_but_threshold_set: disable_threshold
  max_agents_exceeds_limit: cap_at_maximum  
  invalid_expert_mode: default_to_manual
  conflicting_quality_settings: prefer_stricter
  unknown_technology_stack: use_generic_patterns
```

## Integration Points

### Setup Command
Creates `{project_root}/.guild/instructions.md` with project-appropriate defaults and configuration options.

### Module Dependencies
- principles.md (core philosophy and think-only agent principles)
- agents.md (hierarchical agent framework)
- workflows.md (workflow patterns with planning router)
- parallel.md (hierarchical parallelization strategies)
- planning-router.md (orchestration and coordination)

### Module Consumers
- Setup command (creates {project_root}/.guild/instructions.md with hierarchical settings)
- Planning router (reads configuration for orchestration)
- Guild command (applies hierarchical configuration)
- All agents (follow project-specific rules with think-mode constraints)
# Workflow Template Library

## Template Structure

### Base Template Format

```yaml
template:
  id: template-identifier
  name: Human-readable name
  description: What this workflow accomplishes
  category: bug-fix|feature|refactor|optimization|security|testing
  
  triggers:
    keywords: [words that suggest this template]
    patterns: [code patterns that match]
    conditions: [when to use this template]
    
  requirements:
    agents: [required agents]
    technologies: [supported technologies]
    min_complexity: low|medium|high
    
  workflow:
    stages: [ordered stages]
    parallel_groups: [stages that can run in parallel]
    conditional_stages: [stages that may be skipped]
    
  customization:
    variables: [user-definable parameters]
    optional_stages: [stages user can add]
    flags: [command flags to modify behavior]
    
  performance:
    estimated_time: minutes
    parallelization_benefit: percentage
    success_rate: percentage
```

## Core Workflow Templates

### 1. Bug Fix Workflow

```yaml
template:
  id: bug-fix-standard
  name: Standard Bug Fix Workflow
  description: Systematic approach to identifying and fixing bugs
  category: bug-fix
  
  triggers:
    keywords: [bug, error, issue, broken, fix, not working]
    patterns: [error messages, stack traces, test failures]
    
  workflow:
    stages:
      1. bug-analysis:
         agent: guild-reasoning-agent
         process: analyze-bug-report
         outputs: [bug_classification, severity, affected_areas]
         
      2. bug-research:
         parallel: true
         agents:
           - guild-project-researcher:
               focus: error_patterns
               scope: codebase_history
           - guild-global-researcher:
               focus: known_solutions
               scope: community_resources
               
      3. root-cause-analysis:
         agent: guild-planning-agent
         process: identify-root-cause
         inputs: [bug_analysis, research_findings]
         outputs: [root_cause, fix_strategy]
         
      4. implementation:
         agent: [technology]-engineer
         process: implement-fix
         validation: test_immediately
         
      5. regression-testing:
         agent: guild-test-engineer
         process: regression-test
         scope: affected_areas_plus_related
         
      6. verification:
         agent: guild-verification-agent
         process: verify-fix
         checks: [bug_resolved, no_new_issues, tests_pass]
         
  customization:
    variables:
      test_depth: shallow|normal|comprehensive
      fix_approach: minimal|refactor|redesign
    optional_stages:
      - performance-check
      - security-scan
      
  performance:
    estimated_time: 15-30
    success_rate: 92%
```

### 2. Feature Development Workflow

```yaml
template:
  id: feature-development
  name: Feature Development Workflow
  description: End-to-end feature implementation
  category: feature
  
  triggers:
    keywords: [add, implement, create, build, develop, feature]
    patterns: [user stories, requirements docs]
    
  workflow:
    stages:
      1. requirement-analysis:
         agent: guild-reasoning-agent
         process: analyze-requirements
         outputs: [specifications, acceptance_criteria]
         
      2. research-phase:
         parallel: true
         agents:
           - guild-project-researcher:
               focus: existing_patterns
           - guild-global-researcher:
               focus: best_practices
               
      3. architecture-planning:
         agent: guild-planning-agent
         process: design-architecture
         outputs: [component_design, api_design, data_model]
         
      4. parallel-implementation:
         parallel_groups:
           frontend:
             agent: guild-[frontend]-engineer
             process: implement-ui
           backend:
             agent: guild-[backend]-engineer
             process: implement-api
           database:
             agent: guild-database-engineer
             process: implement-schema
             
      5. integration:
         agent: guild-planning-agent
         process: coordinate-integration
         validation: integration_points
         
      6. testing:
         parallel: true
         agents:
           - guild-test-engineer:
               scope: unit_tests
           - guild-e2e-engineer:
               scope: integration_tests
               
      7. documentation:
         agent: guild-docs-engineer
         process: update-documentation
         scope: [api_docs, user_guide, code_comments]
         
  customization:
    variables:
      implementation_approach: mvp|full|phased
      test_coverage: basic|standard|comprehensive
      documentation_level: minimal|standard|detailed
      
  performance:
    estimated_time: 60-120
    parallelization_benefit: 40%
    success_rate: 88%
```

### 3. Refactoring Workflow

```yaml
template:
  id: code-refactoring
  name: Systematic Refactoring Workflow
  description: Improve code quality without changing functionality
  category: refactor
  
  triggers:
    keywords: [refactor, cleanup, improve, optimize, restructure]
    patterns: [code smells, technical debt markers]
    
  workflow:
    stages:
      1. code-analysis:
         agent: guild-reasoning-agent
         process: analyze-code-quality
         metrics: [complexity, duplication, coupling]
         
      2. improvement-research:
         agent: guild-global-researcher
         process: research-patterns
         focus: [design_patterns, best_practices]
         
      3. refactor-planning:
         agent: guild-planning-agent
         process: plan-refactoring
         outputs: [refactor_strategy, risk_assessment]
         
      4. safety-net:
         agent: guild-test-engineer
         process: ensure-test-coverage
         requirement: 80%_coverage_before_refactor
         
      5. incremental-refactoring:
         agent: [technology]-engineer
         process: refactor-incrementally
         approach: small_safe_changes
         validation: tests_pass_after_each
         
      6. quality-verification:
         parallel: true
         agents:
           - guild-test-engineer:
               verify: functionality_unchanged
           - guild-verification-agent:
               verify: quality_improved
               
  customization:
    variables:
      refactor_scope: file|module|system
      risk_tolerance: conservative|balanced|aggressive
      improvement_targets: [readability, performance, maintainability]
      
  performance:
    estimated_time: 30-60
    success_rate: 95%
```

### 4. Performance Optimization Workflow

```yaml
template:
  id: performance-optimization
  name: Performance Optimization Workflow
  description: Identify and resolve performance bottlenecks
  category: optimization
  
  triggers:
    keywords: [slow, performance, optimize, speed, latency]
    patterns: [performance metrics, user complaints]
    
  workflow:
    stages:
      1. performance-analysis:
         agent: guild-reasoning-agent
         process: analyze-performance
         tools: [profiler, metrics, logs]
         
      2. bottleneck-identification:
         parallel: true
         agents:
           - guild-project-researcher:
               analyze: code_hotspots
           - guild-database-engineer:
               analyze: query_performance
           - guild-[frontend]-engineer:
               analyze: render_performance
               
      3. optimization-planning:
         agent: guild-planning-agent
         process: prioritize-optimizations
         criteria: [impact, effort, risk]
         
      4. parallel-optimization:
         parallel_groups:
           code:
             agent: [technology]-engineer
             optimize: algorithms_and_logic
           database:
             agent: guild-database-engineer
             optimize: queries_and_indexes
           caching:
             agent: guild-cache-engineer
             optimize: caching_strategy
             
      5. performance-testing:
         agent: guild-test-engineer
         process: benchmark-performance
         compare: before_vs_after
         
      6. validation:
         agent: guild-verification-agent
         verify: [performance_improved, functionality_intact]
         
  performance:
    estimated_time: 45-90
    parallelization_benefit: 50%
    success_rate: 85%
```

### 5. Security Audit Workflow

```yaml
template:
  id: security-audit
  name: Security Audit Workflow
  description: Comprehensive security vulnerability assessment
  category: security
  
  triggers:
    keywords: [security, vulnerability, audit, penetration, secure]
    patterns: [security warnings, compliance requirements]
    
  workflow:
    stages:
      1. security-assessment:
         agent: guild-security-engineer
         process: initial-assessment
         scope: [code, dependencies, configuration]
         
      2. vulnerability-scanning:
         parallel: true
         agents:
           - guild-security-scanner:
               scan: known_vulnerabilities
           - guild-dependency-checker:
               scan: dependency_vulnerabilities
           - guild-code-analyzer:
               scan: code_vulnerabilities
               
      3. risk-analysis:
         agent: guild-planning-agent
         process: assess-risks
         output: [risk_matrix, priority_list]
         
      4. remediation:
         agent: guild-security-engineer
         process: fix-vulnerabilities
         priority: critical_first
         
      5. security-testing:
         agent: guild-test-engineer
         process: security-test
         tests: [penetration, injection, authentication]
         
      6. compliance-check:
         agent: guild-verification-agent
         verify: [vulnerabilities_fixed, compliance_met]
         
  performance:
    estimated_time: 60-120
    success_rate: 90%
```

## Template Selection

### Automatic Selection

```yaml
template_selection:
  process: select-workflow-template
  inputs: [task_description, project_context]
  
  steps:
    1. extract_keywords:
       action: NLP keyword extraction
       output: keyword_list
       
    2. match_patterns:
       action: Pattern matching against triggers
       output: matching_templates
       
    3. score_templates:
       scoring_factors:
         - keyword_match: 0.3
         - context_match: 0.3
         - complexity_match: 0.2
         - success_rate: 0.2
       output: scored_templates
       
    4. select_best:
       criteria: highest_score
       minimum_threshold: 0.6
       output: selected_template
       
    5. customize_template:
       action: Apply project-specific modifications
       output: customized_workflow
```

### Manual Override

```yaml
manual_selection:
  command: /guild --template=feature-development "task"
  
  available_flags:
    --list-templates: Show all available templates
    --suggest-template: Suggest best template for task
    --no-template: Don't use any template
    --custom-template: Use custom template file
```

## Template Customization

### Variable Substitution

```yaml
customization_rules:
  technology_specific:
    [frontend]: react|vue|angular
    [backend]: node|python|go
    [database]: postgres|mysql|mongodb
    
  complexity_based:
    low: use_simple_workflow
    medium: use_standard_workflow
    high: use_comprehensive_workflow
    
  user_preferences:
    from: .guild/instructions.md
    apply: template_overrides
```

### Dynamic Stage Addition

```yaml
dynamic_stages:
  conditions:
    if_security_critical:
      add: security-scan stage
    if_performance_critical:
      add: performance-benchmark stage
    if_has_ui:
      add: ui-testing stage
    if_has_api:
      add: api-testing stage
```

## Template Analytics

### Usage Tracking

```yaml
template_metrics:
  usage:
    template_id: count
    success_rate: percentage
    average_time: minutes
    customization_frequency: percentage
    
  performance:
    time_saved: comparison_with_manual
    error_reduction: percentage
    user_satisfaction: rating
    
  improvements:
    common_customizations: track_patterns
    failure_points: identify_weaknesses
    optimization_opportunities: analyze_bottlenecks
```

## Creating Custom Templates

### User Template Format

```yaml
# .guild/templates/custom-workflow.yml
custom_template:
  based_on: existing-template-id  # Optional
  name: My Custom Workflow
  
  workflow:
    # Define custom stages
    stages:
      - my-custom-stage:
          agent: guild-custom-agent
          process: custom-process
          
  # Override default behavior
  overrides:
    stage_name:
      process: different-process
      agent: different-agent
```

### Template Validation

```yaml
validation:
  required_fields: [name, workflow, stages]
  agent_verification: Ensure agents exist
  process_verification: Ensure processes defined
  dependency_check: Verify stage dependencies
  cycle_detection: Prevent circular dependencies
```
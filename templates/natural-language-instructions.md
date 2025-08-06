# Natural Language Instruction Parsing

## Overview

The Natural Language Instruction system allows users to configure Guild using plain English instructions instead of YAML configuration, making the system more accessible and intuitive.

## Instruction Pattern Recognition

### Common Instruction Patterns

```yaml
instruction_patterns:
  # Agent Assignment Patterns
  agent_assignment:
    patterns:
      - "always use {agent} for {task_type}"
      - "assign {task_type} to {agent}"
      - "{agent} should handle {task_type}"
      - "prefer {agent} when {condition}"
      
    examples:
      - "always use senior engineers for database migrations"
      - "assign security tasks to guild-security-engineer"
      - "guild-react-engineer should handle all UI changes"
      - "prefer opus model when complexity is high"
      
    parsing:
      extract: [agent_name, task_type, condition]
      generate:
        routing_rule:
          pattern: {task_type}
          agent: {agent_name}
          priority: high
          
  # Workflow Modification Patterns
  workflow_modification:
    patterns:
      - "always {action} before {stage}"
      - "skip {stage} when {condition}"
      - "add {stage} after {other_stage}"
      - "run {stages} in parallel"
      
    examples:
      - "always run tests before deployment"
      - "skip research when fixing typos"
      - "add security scan after implementation"
      - "run frontend and backend in parallel"
      
    parsing:
      extract: [action, stage, condition, other_stage]
      generate:
        workflow_rule:
          action: {action}
          stage: {stage}
          condition: {condition}
          position: {relative_position}
          
  # Quality Standards Patterns
  quality_standards:
    patterns:
      - "ensure {metric} is {comparison} {value}"
      - "require {requirement} for {scope}"
      - "enforce {standard} on {target}"
      - "maintain {quality} above {threshold}"
      
    examples:
      - "ensure test coverage is above 80%"
      - "require code review for production changes"
      - "enforce linting on all JavaScript files"
      - "maintain performance score above 90"
      
    parsing:
      extract: [metric, comparison, value, requirement, scope]
      generate:
        quality_rule:
          metric: {metric}
          operator: {comparison}
          threshold: {value}
          enforcement: mandatory
          
  # Performance Optimization Patterns
  performance_optimization:
    patterns:
      - "optimize for {metric}"
      - "prioritize {aspect} over {other_aspect}"
      - "cache {data_type} for {duration}"
      - "limit {resource} to {amount}"
      
    examples:
      - "optimize for speed"
      - "prioritize accuracy over speed"
      - "cache research results for 1 hour"
      - "limit parallel agents to 3"
      
    parsing:
      extract: [metric, aspect, data_type, duration, resource, amount]
      generate:
        performance_rule:
          optimization_target: {metric}
          priority: {aspect}
          caching: {cache_config}
          limits: {resource_limits}
```

## Parsing Engine

### Natural Language Processing Pipeline

```yaml
nlp_pipeline:
  process: parse-natural-instruction
  inputs: [instruction_text]
  
  steps:
    1. preprocess:
       actions:
         - lowercase_text
         - expand_contractions
         - remove_punctuation
         - tokenize
       output: tokens
       
    2. identify_pattern:
       actions:
         - match_against_patterns
         - calculate_similarity_scores
         - select_best_match
       output: matched_pattern
       
    3. extract_entities:
       actions:
         - identify_named_entities
         - extract_values
         - resolve_references
       output: entities
       
    4. validate_entities:
       actions:
         - check_agent_exists
         - verify_stage_names
         - validate_values
       output: validated_entities
       
    5. generate_config:
       actions:
         - apply_template
         - substitute_values
         - format_yaml
       output: configuration_rule
       
    6. verify_logic:
       actions:
         - check_conflicts
         - ensure_consistency
         - validate_feasibility
       output: verified_config
```

### Entity Recognition

```yaml
entity_recognition:
  agents:
    keywords: [engineer, agent, scanner, analyzer]
    mapping:
      "senior engineer": guild-senior-engineer
      "frontend developer": guild-[frontend]-engineer
      "backend engineer": guild-[backend]-engineer
      "security expert": guild-security-engineer
      
  stages:
    keywords: [stage, phase, step, process]
    mapping:
      "testing": test-stage
      "deployment": deploy-stage
      "research": research-stage
      "planning": planning-stage
      
  conditions:
    keywords: [when, if, unless, while]
    operators: [is, equals, contains, matches, greater, less]
    mapping:
      "high complexity": complexity > high
      "production": environment == production
      "critical": priority == critical
      
  metrics:
    keywords: [coverage, performance, quality, score]
    units: [percentage, percent, %, score, points]
    mapping:
      "test coverage": test_coverage_percentage
      "performance score": lighthouse_score
      "code quality": quality_metrics
```

## Instruction Categories

### 1. Routing Instructions

```yaml
routing_instructions:
  examples:
    - input: "Use React engineers for all component work"
      output:
        routing:
          pattern: "component"
          agent: guild-react-engineer
          
    - input: "Database changes need senior approval"
      output:
        routing:
          pattern: "database"
          requires: senior-review
          
    - input: "Route API tasks to backend team"
      output:
        routing:
          pattern: "api"
          agents: [guild-backend-engineer]
```

### 2. Workflow Instructions

```yaml
workflow_instructions:
  examples:
    - input: "Always test after implementing"
      output:
        workflow:
          sequence:
            implementation: [testing]
            
    - input: "Skip planning for simple tasks"
      output:
        workflow:
          conditional:
            skip: planning
            when: complexity == low
            
    - input: "Run security scan on auth changes"
      output:
        workflow:
          conditional:
            add: security-scan
            when: changes_match("auth")
```

### 3. Quality Instructions

```yaml
quality_instructions:
  examples:
    - input: "Don't deploy without 90% test coverage"
      output:
        quality:
          requirement:
            metric: test_coverage
            minimum: 90
            blocker: deployment
            
    - input: "All code must pass linting"
      output:
        quality:
          requirement:
            check: linting
            enforcement: mandatory
            
    - input: "Require documentation for public APIs"
      output:
        quality:
          requirement:
            documentation: required
            scope: public_apis
```

### 4. Performance Instructions

```yaml
performance_instructions:
  examples:
    - input: "Complete tasks within 30 minutes"
      output:
        performance:
          timeout: 30m
          
    - input: "Use at most 3 parallel agents"
      output:
        performance:
          parallel:
            max_agents: 3
            
    - input: "Cache everything for 2 hours"
      output:
        performance:
          caching:
            default_ttl: 2h
            strategy: aggressive
```

## Instruction Interpretation

### Ambiguity Resolution

```yaml
ambiguity_handling:
  multiple_interpretations:
    strategy: score_and_rank
    factors:
      - pattern_match_quality: 0.3
      - entity_confidence: 0.3
      - context_relevance: 0.2
      - historical_usage: 0.2
      
  unclear_entities:
    strategy: ask_for_clarification
    prompt: "Did you mean {option1} or {option2}?"
    
  conflicting_instructions:
    strategy: priority_based
    rules:
      - latest_overrides_previous
      - specific_overrides_general
      - user_confirmation_required
```

### Context Understanding

```yaml
context_awareness:
  project_context:
    - Detect project type from stack
    - Infer likely agents needed
    - Understand domain terminology
    
  instruction_context:
    - Track previous instructions
    - Understand relationships
    - Maintain consistency
    
  temporal_context:
    - Understand "always" vs "sometimes"
    - Handle "from now on" directives
    - Process conditional timing
```

## Implementation Integration

### Instruction File Support

```yaml
# .guild/natural-instructions.md
Natural Instructions:
  - Always use TypeScript engineers for .ts files
  - Run tests before any deployment
  - Prioritize security over speed
  - Cache research for 1 hour
  - Use senior engineers for database work
  - Skip documentation for internal tools
  - Require 80% test coverage minimum
  - Deploy only on successful tests
```

### Real-time Parsing

```yaml
command_integration:
  inline_instructions:
    command: /guild --instruct "use senior engineers" "task"
    
  instruction_file:
    command: /guild --instructions-file natural.md "task"
    
  interactive_mode:
    command: /guild --interactive
    prompts:
      - "Any special instructions for this task?"
      - "Should I modify the standard workflow?"
```

## Validation & Feedback

### Instruction Validation

```yaml
validation_rules:
  feasibility:
    - Check if requested agents exist
    - Verify stages are valid
    - Ensure values are reasonable
    
  consistency:
    - No conflicting rules
    - No circular dependencies
    - No impossible conditions
    
  completeness:
    - All entities resolved
    - No ambiguous references
    - Clear conditions defined
```

### User Feedback

```yaml
feedback_system:
  confirmation:
    show_interpretation: true
    format: "I understand: {interpreted_rule}"
    allow_correction: true
    
  learning:
    save_corrections: true
    improve_patterns: true
    adapt_to_usage: true
    
  reporting:
    show_applied_rules: true
    explain_decisions: true
    suggest_improvements: true
```

## Advanced Features

### Composite Instructions

```yaml
composite_instructions:
  example: "For production deployments, always run full tests, require approval, and create backup"
  
  parsing:
    break_into_parts:
      - condition: "production deployments"
      - actions:
          - "run full tests"
          - "require approval"
          - "create backup"
          
  output:
    rules:
      - workflow: add full-test stage when environment==production
      - approval: required when environment==production
      - backup: automatic when environment==production
```

### Learning from Usage

```yaml
learning_system:
  pattern_discovery:
    - Track successful interpretations
    - Identify new patterns
    - Add to pattern library
    
  refinement:
    - Improve entity recognition
    - Better ambiguity resolution
    - Context understanding
    
  personalization:
    - Learn user preferences
    - Adapt to project terminology
    - Customize interpretations
```

## Benefits

```yaml
benefits:
  accessibility:
    - No YAML knowledge required
    - Natural language configuration
    - Intuitive instructions
    
  flexibility:
    - Dynamic rule creation
    - Easy modifications
    - Quick experimentation
    
  productivity:
    - Faster configuration
    - Fewer errors
    - Better understanding
    
  adoption:
    - Lower learning curve
    - Wider user base
    - Better user experience
```
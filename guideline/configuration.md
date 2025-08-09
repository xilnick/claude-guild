# Configuration

Complete configuration system for Claude Guild with context engineering, thinking modes, and workflow customization.

## Overview

The Guild configuration system follows a hierarchical approach: **Defaults → Project → Runtime**, allowing fine-grained customization while maintaining sensible defaults.

## Configuration Hierarchy

### Configuration Levels

```yaml
Configuration Precedence: Runtime > Project > Defaults

Sources:
  - Defaults: Built into Guild system
  - Project: .guild/instructions.md
  - Runtime: Command-line flags and environment variables
```

## Core Configuration Schema

### Base Configuration

```yaml
# .guild/instructions.md - Project Configuration
models:
  reasoning: claude-3-5-sonnet-20241022      # Model for analysis and reasoning agents
  planning: claude-3-5-sonnet-20241022       # Model for planning and strategy agents  
  implementation: claude-3-5-sonnet-20241022 # Model for implementation agents
  verification: claude-3-5-sonnet-20241022   # Model for testing and verification agents

# Thinking Mode Configuration
thinking_modes:
  default_reasoning: ultrathink     # Default for reasoning/analysis agents
  default_planning: ultrathink      # Default for planning agents
  default_specification: think-harder # Default for specification agents
  default_research: think           # Default for research agents
  default_implementation: think     # Default for implementation agents
  default_verification: think       # Default for verification agents

# Context Engineering Configuration  
context_engineering:
  compression_enabled: true         # Enable context compression techniques
  max_context_size: 50000          # Maximum context size before compression
  reference_linking: enabled        # Use file:line references vs content duplication
  progressive_detail: enabled       # Enable progressive context building
  
  priority_weights:
    critical: 1.0                   # Weight for critical context
    important: 0.7                  # Weight for important context
    supplementary: 0.3              # Weight for supplementary context
    
  transfer_protocols:
    validation_checkpoints: enabled # Enable context validation checkpoints
    acknowledgment_required: true   # Require agent acknowledgment of context
    compression_threshold: 10000    # Context size threshold for compression

# Parallel Execution Configuration
parallel:
  enabled: true                     # Enable parallel agent execution
  max_agents: 4                     # Maximum concurrent agents
  context_synchronization: enabled  # Enable context sharing between parallel agents
  
  coordination:
    handoff_timeout: 300            # Timeout for agent handoffs (seconds)
    retry_attempts: 3               # Number of retry attempts for failed handoffs
    failure_escalation: enabled     # Escalate failures to planning agent

# Workflow Configuration
workflows:
  default_execution: sequential     # Default execution strategy
  stage_timeouts: 
    analysis: 600                   # Analysis stage timeout (seconds)
    research: 900                   # Research stage timeout (seconds)  
    planning: 600                   # Planning stage timeout (seconds)
    implementation: 1800            # Implementation stage timeout (seconds)
    validation: 600                 # Validation stage timeout (seconds)
    
  quality_gates:
    enabled: true                   # Enable quality gates between stages
    failure_threshold: 2            # Number of failures before escalation
    success_criteria_required: true # Require explicit success criteria

# Routing Configuration  
routing:
  preferences:
    complexity_threshold: medium    # Threshold for complex task routing
    specialization_preference: high # Preference for specialized agents
    parallel_optimization: enabled  # Optimize for parallel execution when possible
    
  overrides:
    security_tasks: security-analyst-agent    # Route security tasks to security specialist
    performance_tasks: performance-engineer-agent # Route performance tasks to specialist
    api_design: api-architect-agent          # Route API design to architect
    
  context_optimization: enabled    # Enable context-aware routing decisions

# Agent Configuration
agents:
  thin_architecture: enabled       # Use thin agent architecture with centralized processes
  metadata_only: true              # Agents contain only metadata, logic in processes
  thinking_mode_integration: enabled # Enable thinking mode keywords in agent definitions
  context_handoff_protocols: enabled # Enable structured context handoff between agents
  
  placement_strategy:
    guild_agents: .claude/agents/guild/    # Directory for core guild agents
    standalone_agents: .claude/agents/     # Directory for standalone specialists
    namespace_isolation: enabled          # Prevent agent namespace conflicts

# Performance Optimization
performance:
  caching:
    enabled: true                   # Enable multi-level caching
    context_cache_size: 100         # Number of context packages to cache
    process_cache_size: 50          # Number of process definitions to cache
    agent_cache_size: 25            # Number of agent definitions to cache
    
  optimization:
    adaptive_execution: enabled     # Enable adaptive execution based on system load
    predictive_loading: enabled     # Pre-load anticipated contexts and processes
    context_pooling: enabled        # Share common context across similar tasks
    
  monitoring:
    performance_tracking: enabled   # Track agent and workflow performance
    context_efficiency: enabled     # Monitor context transfer efficiency
    resource_usage: enabled         # Monitor system resource usage

# Extensibility Configuration
extensibility:
  custom_processes: enabled        # Allow custom process definitions
  custom_agents: enabled           # Allow custom agent definitions
  plugin_architecture: enabled     # Enable plugin system
  pattern_extensions: enabled      # Allow custom pattern definitions
  
  extension_points:
    pre_workflow: enabled          # Allow pre-workflow hooks
    post_workflow: enabled         # Allow post-workflow hooks
    stage_interceptors: enabled    # Allow stage-level interceptors
    context_processors: enabled    # Allow custom context processing
```

## Agent-Specific Configuration

### Individual Agent Overrides

```yaml
# Agent-specific thinking mode overrides
agent_overrides:
  guild-reasoning-agent: ultrathink           # Strategic requirement analysis
  guild-planning-agent: ultrathink            # Comprehensive strategy development
  guild-specification-agent: think-harder     # Thorough specification analysis
  guild-project-research-agent: think         # Efficient information synthesis
  guild-global-research-agent: think          # External context integration
  guild-verification-agent: think             # Systematic validation
  
  # Standalone specialist overrides
  security-analyst-agent: think-harder        # Security threat analysis
  performance-engineer-agent: think-harder    # Performance bottleneck analysis
  accessibility-auditor-agent: think          # Compliance validation
  api-architect-agent: think-harder           # API design implications
  documentation-writer-agent: think           # Structured documentation creation

# Agent capability configuration
agent_capabilities:
  context_only_agents:
    - guild-reasoning-agent
    - guild-planning-agent
    - guild-project-research-agent
    - guild-global-research-agent
    - guild-specification-agent
    
  implementation_agents:
    - guild-verification-agent
    - guild-frontend-engineer
    - guild-backend-engineer
    - guild-database-engineer
    - guild-devops-engineer
```

## Context Engineering Configuration

### Advanced Context Settings

```yaml
context_engineering_advanced:
  compression_strategies:
    hierarchical_summarization: enabled
    reference_based_linking: enabled
    progressive_detail_building: enabled
    automatic_relevance_filtering: enabled
    
  transfer_optimization:
    priority_based_routing: enabled
    progressive_detail_revelation: enabled
    validation_checkpoints: enabled
    context_pooling: enabled
    
  lifecycle_management:
    automatic_pruning: enabled
    decision_retention: enabled
    context_archiving: enabled
    memory_optimization: enabled
    
  quality_assurance:
    context_validation: enabled
    relevance_scoring: enabled
    completeness_checking: enabled
    consistency_verification: enabled
```

## Workflow Configuration

### Stage Configuration

```yaml
workflow_configuration:
  stage_definitions:
    analysis:
      required: true
      agent_type: context-only
      default_thinking_mode: ultrathink
      timeout: 600
      quality_gates: [requirement_clarity, constraint_identification]
      
    research:
      required: true
      agent_type: context-only
      phases: [strategic, tactical]
      strategic_ratio: 0.3
      tactical_ratio: 0.7
      timeout: 900
      quality_gates: [context_completeness, relevance_validation]
      
    planning:
      required: true
      agent_type: context-only
      default_thinking_mode: ultrathink
      timeout: 600
      quality_gates: [strategy_completeness, resource_allocation, risk_assessment]
      
    implementation:
      required: true
      agent_type: implementation
      default_thinking_mode: think
      timeout: 1800
      quality_gates: [functionality_validation, code_quality, requirement_compliance]
      
    testing:
      optional: true
      agent_type: implementation
      default_thinking_mode: think
      timeout: 900
      quality_gates: [test_coverage, test_quality, regression_validation]
      
    verification:
      optional: true
      agent_type: implementation
      default_thinking_mode: think
      timeout: 600
      quality_gates: [requirement_validation, quality_standards, acceptance_criteria]
      
    refactoring:
      optional: true
      agent_type: implementation
      default_thinking_mode: think
      timeout: 900
      quality_gates: [code_improvement, maintainability, performance_impact]
```

## Environment Configuration

### Environment Variables

```bash
# Guild System Configuration
GUILD_CONFIG_PATH=./.guild/instructions.md
GUILD_AGENTS_PATH=./.claude/agents
GUILD_PROCESSES_PATH=./.guild/processes

# Model Configuration
GUILD_DEFAULT_MODEL=claude-3-5-sonnet-20241022
GUILD_REASONING_MODEL=claude-3-5-sonnet-20241022
GUILD_PLANNING_MODEL=claude-3-5-sonnet-20241022

# Context Engineering
GUILD_CONTEXT_COMPRESSION=true
GUILD_MAX_CONTEXT_SIZE=50000
GUILD_PROGRESSIVE_DETAIL=true

# Performance Configuration
GUILD_PARALLEL_EXECUTION=true
GUILD_MAX_PARALLEL_AGENTS=4
GUILD_CONTEXT_CACHING=true

# Debug and Monitoring
GUILD_DEBUG_MODE=false
GUILD_PERFORMANCE_MONITORING=true
GUILD_LOG_LEVEL=info
```

## Project-Specific Configuration

### Technology Stack Detection

```yaml
# Automatic configuration based on detected patterns
technology_detection:
  frontend_patterns:
    react: 
      agents: [guild-react-engineer]
      processes: [react-component-development, react-testing]
      
    vue:
      agents: [guild-vue-engineer]
      processes: [vue-component-development, vue-testing]
      
    angular:
      agents: [guild-angular-engineer] 
      processes: [angular-component-development, angular-testing]
      
  backend_patterns:
    nodejs:
      agents: [guild-nodejs-engineer]
      processes: [nodejs-api-development, nodejs-testing]
      
    python:
      agents: [guild-python-engineer]
      processes: [python-api-development, python-testing]
      
    java:
      agents: [guild-java-engineer]
      processes: [java-api-development, java-testing]
      
  database_patterns:
    postgresql:
      agents: [guild-postgresql-engineer]
      processes: [postgresql-schema-management, postgresql-optimization]
      
    mongodb:
      agents: [guild-mongodb-engineer]
      processes: [mongodb-schema-management, mongodb-optimization]
```

## Runtime Configuration

### Command-Line Flag Integration

```yaml
# Flag-based runtime configuration
runtime_flags:
  --full:
    enabled_stages: [analysis, research, planning, implementation, testing, verification, refactoring]
    thinking_mode_overrides:
      analysis: ultrathink
      planning: ultrathink
      
  --spec:
    enabled_stages: [analysis, spec_analysis, spec_update, research, planning, implementation, validation]
    special_agents: [guild-specification-agent]
    
  --project:
    scope_modifier: project_wide
    impact_analysis: comprehensive
    
  --no-reason:
    disabled_stages: [analysis]
    context_quality_impact: reduced
    
  --no-plan:  
    disabled_stages: [planning]
    execution_pattern: direct_implementation
```

## Advanced Configuration

### Plugin Configuration

```yaml
plugins:
  enabled: true
  plugin_directory: .guild/plugins
  auto_discovery: enabled
  
  security:
    signature_verification: enabled
    sandboxed_execution: enabled
    permission_system: enabled
    
  available_plugins:
    - name: advanced-security-analysis
      version: 1.0.0
      agents: [advanced-security-agent]
      processes: [threat-modeling, penetration-testing]
      
    - name: performance-profiling
      version: 1.2.0
      agents: [profiling-agent]
      processes: [performance-profiling, bottleneck-analysis]
```

### Monitoring and Analytics

```yaml
monitoring:
  enabled: true
  metrics_collection:
    workflow_performance: enabled
    agent_efficiency: enabled
    context_effectiveness: enabled
    resource_utilization: enabled
    
  analytics:
    pattern_recognition: enabled
    optimization_recommendations: enabled
    predictive_insights: enabled
    
  reporting:
    daily_summaries: enabled
    weekly_analysis: enabled
    performance_trends: enabled
```

This configuration system provides comprehensive customization capabilities while maintaining ease of use through intelligent defaults and hierarchical configuration precedence.
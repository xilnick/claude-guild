# Default Preset Configurations Module

## Purpose
Defines intelligent default preset configurations that provide optimal Guild system behavior based on project type, complexity, and team characteristics. Ensures excellent out-of-the-box experience while maintaining customization flexibility.

## Preset Selection Intelligence

### Automated Preset Selection
```yaml
Selection Algorithm:
  1. Project Scanning:
     - Analyze project structure and files
     - Detect technology patterns and frameworks
     - Assess project size and complexity indicators
     - Identify team and workflow patterns
     
  2. Pattern Matching:
     - Match against preset classification patterns
     - Calculate confidence scores for each preset type
     - Select highest confidence match with threshold
     - Fall back to conservative defaults if uncertain
     
  3. Adaptive Customization:
     - Customize selected preset based on unique characteristics
     - Adjust thinking modes based on complexity assessment
     - Modify agent specialization based on detected patterns
     - Optimize workflow stages based on project requirements

Confidence Thresholds:
  high_confidence: 0.8    # Use preset as-is with minor customization
  medium_confidence: 0.6  # Use preset with moderate customization
  low_confidence: 0.4     # Use preset with significant customization
  fallback: < 0.4         # Use safe minimal preset with upgrade suggestions
```

### Project Classification Patterns
```yaml
Classification Intelligence:
  web_application_indicators:
    files: [package.json, src/components/, public/, build.config.*]
    frameworks: [react, vue, angular, svelte, next, nuxt]
    patterns: [component_architecture, client_server, responsive_design]
    confidence_boost: +0.3
    
  cli_tool_indicators:
    files: [bin/, cli.js, command.js, #!/usr/bin/env]
    frameworks: [commander, yargs, oclif, inquirer]
    patterns: [command_parsing, user_interaction, terminal_output]
    confidence_boost: +0.4
    
  api_service_indicators:
    files: [routes/, controllers/, middleware/, api/]
    frameworks: [express, fastapi, django, rails, koa]
    patterns: [rest_endpoints, database_models, middleware_stack]
    confidence_boost: +0.3
    
  library_package_indicators:
    files: [lib/, src/index.*, exports, module.exports]
    frameworks: [typescript, rollup, webpack, babel]
    patterns: [public_api, documentation, testing, packaging]
    confidence_boost: +0.4
    
  full_stack_indicators:
    combined_patterns: [frontend + backend, client + server]
    files: [both_frontend_and_backend_indicators]
    complexity_multiplier: 1.5
    confidence_boost: +0.2
```

## Core Preset Definitions

### Minimal Preset (Default Fallback)
```yaml
minimal_preset:
  description: "Conservative defaults for simple projects or uncertain classification"
  use_cases: [learning, experimentation, simple_scripts, uncertain_projects]
  
  agents:
    core_agents:
      - guild-reasoning-agent:
          thinking_mode: think
          model: inherited
      - guild-planning-agent:
          thinking_mode: think
          model: inherited
      - guild-verification-agent:
          thinking_mode: think
    
    implementation_agents:
      - guild-general-engineer:
          thinking_mode: think
          specialization: generalist
          
  workflow:
    default_stages: [reasoning, research, planning, implementation]
    optional_stages: [testing, verification]
    parallel_execution: false
    
  context_engineering:
    level: basic
    optimization: standard
    handoff_protocols: simplified
    
  quality_standards:
    testing: optional
    documentation: minimal
    validation: basic
    
  upgrade_paths:
    - "Run `/guild:setup --analyze-deeper` for more sophisticated configuration"
    - "Use `/guild:instructions` to add project-specific requirements"
    - "Consider `--full` flag for comprehensive workflows"
```

### Standard Web Application Preset
```yaml
web_application_preset:
  description: "Optimized for modern web applications with frontend and backend"
  use_cases: [spa, progressive_web_app, full_stack_web, e_commerce]
  
  agents:
    core_agents:
      - guild-reasoning-agent:
          thinking_mode: ultrathink
          model: inherited
          specialization: web_application_understanding
      - guild-planning-agent:
          thinking_mode: ultrathink
          model: opus
          specialization: web_architecture_planning
      - guild-project-research-agent:
          thinking_mode: think
          specialization: web_technology_research
      - guild-global-research-agent:
          thinking_mode: think
          specialization: web_best_practices
      - guild-verification-agent:
          thinking_mode: think
          specialization: web_quality_assurance
    
    implementation_agents:
      - guild-frontend-engineer:
          thinking_mode: think
          specialization: [ui_components, state_management, routing]
          context_awareness: high
      - guild-backend-engineer:
          thinking_mode: think
          specialization: [api_endpoints, data_models, middleware]
          context_awareness: high
          
  workflow:
    default_stages: [reasoning, research, planning, implementation, testing]
    enhanced_stages: [verification, refactoring] # available with --full
    parallel_execution: true
    parallel_patterns: [frontend_backend_parallel, research_parallel]
    
  context_engineering:
    level: comprehensive
    optimization: web_optimized
    handoff_protocols: structured_xml
    compression: reference_based_linking
    
  quality_standards:
    testing: required
    documentation: component_docs
    validation: comprehensive
    performance: web_vitals_aware
    accessibility: wcag_conscious
    
  technology_adaptations:
    react_ecosystem:
      additional_agents: [guild-react-specialist]
      testing_focus: [component_testing, integration_testing]
    vue_ecosystem:
      additional_agents: [guild-vue-specialist]
      testing_focus: [component_testing, e2e_testing]
```

### CLI Tool Preset
```yaml
cli_tool_preset:
  description: "Optimized for command-line tools and utilities"
  use_cases: [developer_tools, automation_scripts, system_utilities]
  
  agents:
    core_agents:
      - guild-reasoning-agent:
          thinking_mode: ultrathink
          specialization: user_workflow_understanding
      - guild-planning-agent:
          thinking_mode: think
          specialization: cli_user_experience
      - guild-verification-agent:
          thinking_mode: think
          specialization: cli_testing
    
    implementation_agents:
      - guild-cli-engineer:
          thinking_mode: think
          specialization: [command_structure, user_interaction, error_handling]
          context_awareness: user_workflow_focused
          
  workflow:
    default_stages: [reasoning, research, planning, implementation, testing]
    cli_specific_stages: [user_workflow_validation, help_documentation]
    parallel_execution: false  # CLI tools usually simpler, sequential is better
    
  context_engineering:
    level: user_workflow_focused
    optimization: cli_optimized
    handoff_protocols: command_focused
    
  quality_standards:
    testing: command_testing_required
    documentation: help_and_readme
    validation: user_workflow_validation
    error_handling: comprehensive
    
  cli_specific_optimizations:
    user_experience:
      - Interactive prompts when appropriate
      - Clear error messages and suggestions
      - Progress indication for long operations
      - Helpful command completion and hints
    performance:
      - Fast startup time optimization
      - Efficient argument parsing
      - Minimal dependencies
      - Resource-conscious operation
```

### Library Package Preset
```yaml
library_package_preset:
  description: "Optimized for reusable libraries and packages"
  use_cases: [npm_packages, python_packages, utility_libraries, frameworks]
  
  agents:
    core_agents:
      - guild-reasoning-agent:
          thinking_mode: ultrathink
          specialization: api_design_understanding
      - guild-planning-agent:
          thinking_mode: ultrathink
          model: opus
          specialization: library_architecture
      - guild-specification-agent:
          thinking_mode: think_harder
          specialization: api_documentation
      - guild-verification-agent:
          thinking_mode: think
          specialization: library_quality_assurance
    
    implementation_agents:
      - guild-package-engineer:
          thinking_mode: think
          specialization: [api_design, public_interface, backward_compatibility]
          context_awareness: consumer_focused
          
  workflow:
    default_stages: [reasoning, specification_analysis, research, planning, implementation]
    enhanced_stages: [testing, verification, documentation_validation]
    specification_driven: true
    parallel_execution: limited  # API consistency is critical
    
  context_engineering:
    level: api_focused
    optimization: consumer_experience
    handoff_protocols: specification_driven
    
  quality_standards:
    testing: comprehensive_with_examples
    documentation: api_documentation_required
    validation: backward_compatibility_testing
    performance: benchmarking_aware
    versioning: semantic_versioning
    
  package_specific_optimizations:
    api_design:
      - Clear, intuitive public interface
      - Comprehensive type definitions
      - Example usage in documentation
      - Migration guides for breaking changes
    quality:
      - High test coverage including edge cases
      - Performance benchmarking
      - Cross-environment compatibility testing
      - Security vulnerability scanning
```

### Enterprise Application Preset
```yaml
enterprise_application_preset:
  description: "Optimized for large-scale enterprise applications"
  use_cases: [enterprise_software, saas_platforms, complex_business_systems]
  
  agents:
    core_agents:
      - guild-reasoning-agent:
          thinking_mode: ultrathink
          model: opus
          specialization: enterprise_requirements_analysis
      - guild-planning-agent:
          thinking_mode: ultrathink
          model: opus
          specialization: enterprise_architecture_planning
      - guild-project-research-agent:
          thinking_mode: think
          specialization: enterprise_patterns_research
      - guild-global-research-agent:
          thinking_mode: think
          specialization: enterprise_best_practices
      - guild-specification-agent:
          thinking_mode: think_harder
          specialization: enterprise_documentation
      - guild-verification-agent:
          thinking_mode: think
          specialization: enterprise_quality_assurance
    
    implementation_agents:
      - guild-frontend-engineer:
          thinking_mode: think
          specialization: [enterprise_ui, complex_state_management]
      - guild-backend-engineer:
          thinking_mode: think
          specialization: [microservices, enterprise_integration]
      - guild-database-engineer:
          thinking_mode: think
          specialization: [data_modeling, performance_optimization]
      - guild-security-engineer:
          thinking_mode: think_harder
          specialization: [enterprise_security, compliance]
          
  workflow:
    default_stages: [reasoning, research, planning, implementation, testing, verification]
    enhanced_stages: [security_review, performance_testing, integration_testing]
    parallel_execution: true
    coordination_complexity: high
    
  context_engineering:
    level: comprehensive
    optimization: enterprise_scale
    handoff_protocols: formal_structured
    validation: rigorous
    
  quality_standards:
    testing: comprehensive_with_compliance
    documentation: enterprise_grade
    validation: multi_stage_validation
    performance: enterprise_sla_aware
    security: security_first
    compliance: audit_ready
    
  enterprise_specific_optimizations:
    scalability:
      - Design for horizontal scaling
      - Performance monitoring integration
      - Resource optimization patterns
      - Load balancing awareness
    security:
      - Security-by-design principles
      - Compliance framework integration
      - Audit trail implementation
      - Data privacy protection
```

### Microservice Preset
```yaml
microservice_preset:
  description: "Optimized for microservice architecture development"
  use_cases: [distributed_systems, service_oriented_architecture, cloud_native]
  
  agents:
    core_agents:
      - guild-reasoning-agent:
          thinking_mode: ultrathink
          specialization: service_boundary_analysis
      - guild-planning-agent:
          thinking_mode: ultrathink
          specialization: service_coordination_planning
      - guild-verification-agent:
          thinking_mode: think
          specialization: service_integration_testing
    
    implementation_agents:
      - guild-service-engineer:
          thinking_mode: think
          specialization: [service_implementation, api_contracts]
      - guild-integration-engineer:
          thinking_mode: think
          specialization: [service_communication, data_consistency]
      - guild-observability-engineer:
          thinking_mode: think
          specialization: [monitoring, logging, tracing]
          
  workflow:
    default_stages: [reasoning, research, planning, implementation, integration_testing]
    enhanced_stages: [service_contract_validation, observability_setup]
    parallel_execution: service_aware
    
  context_engineering:
    level: service_boundary_aware
    optimization: distributed_system_optimized
    handoff_protocols: contract_based
    
  quality_standards:
    testing: service_contract_testing
    documentation: service_api_documentation
    validation: integration_validation
    monitoring: comprehensive_observability
    
  microservice_specific_optimizations:
    service_design:
      - Clear service boundaries and responsibilities
      - Well-defined API contracts
      - Independent deployment capabilities
      - Data consistency patterns
    operational:
      - Health check endpoints
      - Graceful degradation patterns
      - Circuit breaker implementations
      - Distributed tracing integration
```

## Preset Selection Examples

### Selection Logic Examples
```yaml
Example 1 - React + Express Project:
  detected_patterns:
    - frontend: react, components, jsx
    - backend: express, routes, middleware
    - combined: full_stack_indicators
  
  selection_process:
    1. web_application_preset: confidence 0.85
    2. full_stack_preset: confidence 0.75
    3. Selected: web_application_preset
    4. Customizations: Add full-stack coordination
  
  result:
    preset: web_application_preset
    customizations:
      - Enhanced frontend-backend coordination
      - React-specific optimization
      - Express middleware patterns

Example 2 - CLI Tool with TypeScript:
  detected_patterns:
    - cli: bin/, command parsing, user interaction
    - typescript: strict typing, compilation
  
  selection_process:
    1. cli_tool_preset: confidence 0.9
    2. Selected: cli_tool_preset
    3. Customizations: TypeScript optimization
  
  result:
    preset: cli_tool_preset
    customizations:
      - TypeScript-aware development
      - Type-safe CLI argument parsing
      - Enhanced error messages

Example 3 - Unknown Project Structure:
  detected_patterns:
    - minimal indicators
    - uncertain classification
  
  selection_process:
    1. All presets: confidence < 0.4
    2. Fallback: minimal_preset
    3. Provide upgrade guidance
  
  result:
    preset: minimal_preset
    guidance:
      - "Project structure suggests custom workflow needed"
      - "Use `/guild:setup --interactive` for guided configuration"
      - "Consider `/guild:instructions` for project-specific rules"
```

## Integration Points

### Setup Command Integration
This module provides:
- Automated preset selection algorithms
- Project classification intelligence
- Customization logic for detected patterns
- Upgrade path recommendations

### User Experience Integration
Enhanced user experience through:
- Intelligent defaults that "just work"
- Clear explanations of preset selection
- Easy upgrade paths to more sophisticated configurations
- Project-specific optimization suggestions

### Learning Integration
Continuous improvement through:
- Success pattern recognition for preset refinement
- Project classification accuracy improvement
- User preference learning and adaptation
- Preset effectiveness measurement and optimization

## Key Invariants

1. **Conservative Defaults**: When uncertain, choose simpler, safer defaults
2. **Clear Upgrade Paths**: Always provide clear paths to more sophisticated configurations
3. **Project-Aware**: All presets consider actual project characteristics
4. **Explanation-Focused**: Always explain why a preset was selected
5. **User-Overridable**: All preset selections can be overridden by user instructions

## Module Dependencies
- project-analysis.md (project classification)
- agent-architecture.md (agent configuration)
- dynamic-adaptation.md (customization logic)

## Module Consumers
- `/guild:setup` command (primary)
- Agent generation logic (configuration)
- User experience systems (guidance)
- Learning systems (optimization)
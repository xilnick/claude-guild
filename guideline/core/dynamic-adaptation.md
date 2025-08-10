# Dynamic Project Adaptation Module

## Purpose
Defines intelligent adaptation mechanisms that customize Guild behavior based on specific project characteristics, team patterns, and development workflows. This module enables truly project-specific Guild configurations.

## Adaptive Intelligence Architecture

### Multi-Dimensional Project Profiling
```yaml
Project Characteristics Analysis:
  Technology Profile:
    - Framework ecosystem and versions
    - Language patterns and idioms
    - Architecture style and complexity
    - Integration patterns and dependencies
    
  Team Profile:
    - Development workflow patterns
    - Code review and quality practices
    - Documentation standards and styles
    - Testing strategies and coverage
    
  Domain Profile:
    - Business domain complexity
    - User interaction patterns
    - Data processing requirements
    - Performance and scalability needs
    
  Operational Profile:
    - Deployment patterns and strategies
    - Monitoring and observability
    - Security and compliance requirements
    - Maintenance and update patterns
```

### Intelligent Preset Selection
```yaml
Dynamic Preset Algorithm:
  1. Multi-dimensional Analysis:
     - Analyze project across all dimensions
     - Identify primary and secondary patterns
     - Assess complexity and sophistication level
     - Determine team experience indicators
     
  2. Pattern Matching:
     - Match against known successful configurations
     - Identify similar project archetypes
     - Select optimal preset as starting point
     - Customize based on unique characteristics
     
  3. Adaptive Refinement:
     - Fine-tune based on specific patterns
     - Adjust complexity based on team capabilities
     - Optimize for discovered workflow patterns
     - Configure thinking modes appropriately

Preset Categories:
  startup_mvp:
    characteristics: [rapid_development, simple_architecture, lean_team]
    workflow: [streamlined_reasoning, single_engineer, fast_execution]
    thinking_modes: [think_standard, minimal_planning]
    
  enterprise_application:
    characteristics: [complex_architecture, large_team, high_quality_standards]
    workflow: [comprehensive_reasoning, multiple_specialists, thorough_validation]
    thinking_modes: [ultrathink_planning, think_harder_analysis]
    
  open_source_library:
    characteristics: [api_design, documentation_focus, compatibility_requirements]
    workflow: [specification_driven, documentation_first, backward_compatibility]
    thinking_modes: [think_harder_specification, comprehensive_testing]
```

## Project-Specific Agent Customization

### Intelligent Agent Specialization
```yaml
Beyond Technology Detection:
  Domain-Specific Agents:
    - Generate agents that understand your specific business domain
    - Create agents specialized in your data patterns
    - Develop agents that know your user workflows
    - Build agents that understand your integration patterns
    
  Team-Aware Agents:
    - Agents that match your team's coding style
    - Agents that understand your review process
    - Agents that follow your documentation standards
    - Agents that respect your quality gates
    
  Project-History-Aware Agents:
    - Agents that understand past architectural decisions
    - Agents that know why certain patterns were chosen
    - Agents that respect established conventions
    - Agents that can evolve patterns intelligently

Advanced Specialization Examples:
  ecommerce_domain_agent:
    expertise: [order_processing, payment_flows, inventory_management]
    patterns: [cart_state_management, checkout_workflows, user_sessions]
    quality_focus: [security_compliance, performance_optimization, data_consistency]
    
  fintech_security_agent:
    expertise: [regulatory_compliance, data_encryption, audit_trails]
    patterns: [secure_authentication, transaction_integrity, risk_assessment]
    quality_focus: [security_first, compliance_validation, audit_readiness]
```

### Context-Aware Workflow Adaptation
```yaml
Dynamic Workflow Intelligence:
  Complexity-Based Adaptation:
    simple_tasks: |
      - Streamlined reasoning
      - Direct implementation
      - Minimal validation
      
    complex_features: |
      - Comprehensive analysis (ultrathink)
      - Multi-stage planning
      - Parallel specialized implementation
      - Thorough validation and testing
      
    architectural_changes: |
      - Deep architectural analysis
      - Impact assessment across system
      - Staged implementation approach
      - Comprehensive testing and validation
      
  Context-Sensitive Stage Selection:
    new_project_setup: |
      - Enhanced reasoning for foundation
      - Comprehensive planning
      - Architecture-focused implementation
      - Future-proofing validation
      
    maintenance_tasks: |
      - Focused analysis on affected areas
      - Targeted implementation
      - Regression testing focus
      - Impact-aware validation
      
    refactoring_work: |
      - Deep code analysis
      - Pattern improvement planning
      - Careful implementation
      - Comprehensive testing
```

## Default Preset Configurations

### Intelligent Default Selection
```yaml
Default Preset Algorithm:
  1. Quick Project Scan:
     - Identify obvious technology indicators
     - Assess project size and complexity
     - Check for configuration files and patterns
     
  2. Pattern-Based Classification:
     - Match against common project archetypes
     - Select most appropriate preset
     - Note confidence level of selection
     
  3. Adaptive Defaults:
     - Use conservative defaults for uncertain cases
     - Provide clear upgrade paths to more sophisticated presets
     - Include preset explanation and reasoning

Preset Hierarchy:
  minimal_preset: |
    For simple projects or when uncertain:
    - Basic reasoning and planning agents
    - Single generalist implementation agent
    - Standard thinking modes throughout
    - Minimal context engineering
    
  standard_preset: |
    For typical development projects:
    - Full core agent set with appropriate thinking modes
    - Technology-specific engineers based on detection
    - Balanced context engineering
    - Standard workflow patterns
    
  comprehensive_preset: |
    For complex or critical projects:
    - Enhanced agents with ultrathink modes
    - Multiple specialized engineers
    - Advanced context engineering
    - Full workflow with all quality stages
    
  custom_preset: |
    For projects with specific patterns:
    - Agents customized to detected patterns
    - Workflow adapted to project characteristics
    - Context engineering optimized for project
    - Quality standards matched to expectations
```

### Project-Type-Specific Presets
```yaml
Web Application Preset:
  agents: [reasoning, planning, frontend_engineer, backend_engineer, verification]
  workflow: [reasoning, research, planning, implementation, testing]
  thinking_modes: {planning: ultrathink, others: think}
  quality_focus: [user_experience, performance, security]
  
CLI Tool Preset:
  agents: [reasoning, planning, cli_engineer, verification]
  workflow: [reasoning, research, planning, implementation, testing]
  thinking_modes: {reasoning: ultrathink, others: think}
  quality_focus: [user_workflow, error_handling, documentation]
  
Library Package Preset:
  agents: [reasoning, planning, package_engineer, specification_agent, verification]
  workflow: [reasoning, spec_analysis, research, planning, implementation, testing]
  thinking_modes: {planning: ultrathink, specification: think_harder, others: think}
  quality_focus: [api_design, backward_compatibility, documentation]
  
Microservice Preset:
  agents: [reasoning, planning, backend_engineer, integration_engineer, verification]
  workflow: [reasoning, research, planning, implementation, integration_testing, verification]
  thinking_modes: {planning: ultrathink, others: think}
  quality_focus: [service_boundaries, performance, observability]
```

## Adaptive Learning Patterns

### Project Evolution Intelligence
```yaml
Learning from Project History:
  Pattern Recognition:
    - Learn from successful patterns in the project
    - Adapt to evolved architectural decisions
    - Recognize team preference patterns
    - Understand domain-specific optimizations
    
  Intelligent Adaptation:
    - Gradually refine agent behavior based on results
    - Adjust workflow patterns based on effectiveness
    - Optimize thinking mode allocation based on outcomes
    - Improve context engineering based on usage patterns
    
  Preset Evolution:
    - Track which presets work best for similar projects
    - Refine preset selection algorithms based on outcomes
    - Evolve default configurations based on success patterns
    - Share learnings across similar project types
```

### Team Workflow Integration
```yaml
Team-Aware Adaptation:
  Development Pattern Recognition:
    - Understand team's preferred development flow
    - Adapt to team's code review processes
    - Match team's quality expectations
    - Integrate with team's tooling preferences
    
  Communication Style Adaptation:
    - Match team's documentation style preferences
    - Adapt to team's technical communication patterns
    - Align with team's problem-solving approaches
    - Respect team's decision-making processes
    
  Quality Standard Alignment:
    - Detect and match team's quality expectations
    - Adapt testing strategies to team preferences
    - Align performance standards with team requirements
    - Respect team's security and compliance needs
```

## Integration Points

### Setup Command Integration
This module provides:
- Intelligent preset selection algorithms
- Project-specific customization logic
- Adaptive agent generation strategies
- Dynamic workflow optimization

### Runtime Adaptation
Enhanced during execution:
- Real-time workflow adjustment based on task complexity
- Dynamic agent specialization based on discovered patterns
- Context-aware performance optimization
- Intelligent quality standard enforcement

### Learning Integration
Continuous improvement through:
- Pattern recognition and learning algorithms
- Success/failure analysis and adaptation
- Team preference learning and integration
- Project evolution tracking and optimization

## Key Invariants

1. **Project-Specific**: All adaptations based on actual project characteristics
2. **Team-Aware**: Considers team patterns and preferences
3. **Evolution-Capable**: Learns and adapts over time
4. **Default-Safe**: Conservative defaults with clear upgrade paths
5. **Context-Preserving**: Maintains project-specific knowledge

## Module Dependencies
- project-analysis.md (project understanding)
- agent-architecture.md (agent customization)
- workflow-patterns.md (workflow adaptation)

## Module Consumers
- `/guild:setup` command (primary)
- Agent generation logic (customization)
- Workflow orchestration (adaptation)
- Quality assurance systems (standards)
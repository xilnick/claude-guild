# Agent Composition Framework Module
**Version**: 5.0.0 | **Last Updated**: 2025-01-19 | **Dependencies**: principles.md, workflows.md, planning-router.md, parallel.md

## Purpose
Dynamic agent composition framework that leverages Claude Code's project analysis capabilities to create specialized agents based on actual codebase patterns rather than hardcoded templates. Enables intelligent agent creation through principle-based composition and hierarchical coordination.

## Embedded Intelligence

### Dynamic Agent Composition Philosophy

**PROJECT-DRIVEN SPECIALIZATION**: All agent specializations are dynamically composed based on actual project analysis using Claude Code's understanding of the codebase structure, technologies, and patterns.

**NO HARDCODED TEMPLATES**: Instead of predefined agent personas, the system uses composition principles to create agents tailored to the specific project's needs and discovered patterns.

**HIERARCHICAL INTELLIGENCE**: Planning router orchestrates agent creation using think-harder/ultrathink modes while all specialized agents operate in think mode for efficient execution.

**REASONING-FIRST APPROACH**: Before any agent creation, the main thread must complete reasoning analysis and obtain user confirmation. This includes logical issue identification and requirement validation.

### Main Thread Logical Reasoning Patterns

**PURPOSE**: Before any agent composition occurs, the main thread must analyze user prompts for logical consistency, completeness, and feasibility. These patterns guide the reasoning process.

<logical_reasoning_framework>
<prompt_analysis_patterns>
**Requirement Extraction Patterns**:
```yaml
explicit_requirements_identification:
  method: "Parse user prompt word-by-word for explicit requests"
  output: "List of clearly stated requirements"
  validation: "Ensure each requirement is actionable and measurable"
  
implicit_requirements_detection:
  method: "Identify unstated but necessary requirements"
  output: "List of implied requirements that must be addressed"
  validation: "Confirm necessity of each implied requirement"
  
success_criteria_definition:
  method: "Extract or infer what constitutes completion"
  output: "Clear definition of task completion"
  validation: "Ensure success criteria are observable and testable"
  
scope_boundary_identification:
  method: "Determine what is included/excluded from the request"
  output: "Clear boundaries of work scope"
  validation: "Check for scope creep or undefined boundaries"
```

**Logical Consistency Analysis Patterns**:
```yaml
contradiction_detection:
  internal_contradictions: "Identify conflicting requirements within the request"
  external_contradictions: "Detect conflicts with existing project constraints"
  temporal_contradictions: "Find impossible timeline or sequence conflicts"
  resource_contradictions: "Identify resource allocation conflicts"
  
ambiguity_identification:
  terminology_ambiguity: "Find unclear or multiple-meaning terms"
  process_ambiguity: "Identify unclear procedural requirements"
  priority_ambiguity: "Detect unclear prioritization between conflicting needs"
  scope_ambiguity: "Find undefined boundaries or responsibilities"
  
completeness_assessment:
  missing_prerequisites: "Identify required dependencies not mentioned"
  incomplete_specifications: "Find underspecified requirements"
  missing_constraints: "Identify unstated but necessary limitations"
  undefined_interfaces: "Find unclear integration or handoff points"
```
</prompt_analysis_patterns>

<reasoning_presentation_patterns>
**User Communication Templates**:
```yaml
understanding_presentation_template:
  structure: |
    **My Understanding of Your Request:**
    - [Primary goal clearly stated]
    - [Key requirements listed explicitly]
    - [Success criteria as understood]
    - [Scope boundaries identified]
  
  logical_issues_template: |
    **Logical Issues Identified:**
    - [Contradictions found with explanations]
    - [Ambiguities requiring clarification]
    - [Missing information needed to proceed]
    - [Assumptions that need validation]
  
  clarification_template: |
    **Clarification Needed:**
    - [Specific questions to resolve ambiguities]
    - [Validation requests for assumptions]
    - [Priority clarification for conflicting requirements]
    - [Scope confirmation for undefined boundaries]
  
  confirmation_request_template: |
    **Confirmation Required:**
    - "Is my understanding of your request correct?"
    - "Have I identified the logical issues accurately?"
    - "Should I proceed with this interpretation?"
    - "Are there any adjustments you'd like me to make?"
```

**Common Reasoning Scenarios**:
```yaml
ambiguous_request_pattern:
  indicators: ["vague terminology", "undefined scope", "multiple interpretations"]
  response: "Present multiple interpretations and ask for clarification"
  template: "I see several possible interpretations: [list options]. Which approach would you prefer?"
  
contradictory_request_pattern:
  indicators: ["conflicting requirements", "impossible combinations", "resource conflicts"]
  response: "Highlight contradictions and propose resolution approaches"
  template: "I've identified a contradiction: [explain conflict]. Here are possible resolutions: [list options]"
  
incomplete_request_pattern:
  indicators: ["missing prerequisites", "undefined success criteria", "unclear scope"]
  response: "Identify missing information and request specific clarification"
  template: "To proceed effectively, I need clarification on: [list missing information]"
  
well_defined_request_pattern:
  indicators: ["clear requirements", "defined scope", "measurable success criteria"]
  response: "Acknowledge clarity and confirm understanding"
  template: "Your request is clear and well-defined. I understand you want: [summarize requirements]"
```
</reasoning_presentation_patterns>
</logical_reasoning_framework>

### Research Agent Patterns

**PURPOSE**: Research agents are specialized for gathering intelligence about the project and external resources. They work in parallel to provide comprehensive context for planning decisions.

<research_agent_framework>
<project_research_agent_patterns>
**Project Research Agent Specializations**:
```yaml
architecture_research_specialist:
  responsibility: "Analyze project structure, module boundaries, and architectural patterns"
  capabilities:
    - Examine file structure and organization patterns
    - Map component relationships and dependencies
    - Identify architectural layers and boundaries
    - Document integration points and interfaces
  mcp_server_integration: [GitHub, AST-Grep, DeepView]
  deliverable_format: "Architectural overview with module structure and integration analysis"
  thinking_mode: think
  
technology_stack_research_specialist:
  responsibility: "Identify frameworks, libraries, versions, and configuration patterns"
  capabilities:
    - Inventory all dependencies and their versions
    - Analyze configuration files and build systems
    - Map technology relationships and compatibility
    - Document technology-specific patterns and conventions
  mcp_server_integration: [GitHub, Context7, Ref Tools]
  deliverable_format: "Technology inventory with compatibility matrix and usage patterns"
  thinking_mode: think
  
pattern_discovery_specialist:
  responsibility: "Extract coding conventions, design patterns, and quality standards"
  capabilities:
    - Analyze existing code for established patterns
    - Document coding style and naming conventions
    - Identify design patterns and architectural approaches
    - Extract quality standards and validation requirements
  mcp_server_integration: [GitHub, Semgrep, DeepView]
  deliverable_format: "Pattern library with conventions and quality requirements"
  thinking_mode: think
  
dependency_mapping_specialist:
  responsibility: "Map internal dependencies and external integrations"
  capabilities:
    - Analyze inter-module dependencies
    - Map external API integrations and requirements
    - Document data flow and communication patterns
    - Identify potential integration challenges
  mcp_server_integration: [GitHub, Supabase, Neo4j]
  deliverable_format: "Dependency graph with integration complexity analysis"
  thinking_mode: think
```
</project_research_agent_patterns>

<external_research_agent_patterns>
**External Research Agent Specializations**:
```yaml
api_documentation_research_specialist:
  responsibility: "Research external API documentation and integration patterns"
  capabilities:
    - Gather comprehensive API documentation
    - Analyze integration examples and best practices
    - Document authentication and security requirements
    - Identify rate limits and usage constraints
  mcp_server_integration: [Context7, Ref Tools, WebFetch]
  deliverable_format: "API integration guide with examples and constraints"
  thinking_mode: think
  
best_practice_research_specialist:
  responsibility: "Gather current best practices for discovered technologies"
  capabilities:
    - Research current technology best practices
    - Identify performance optimization techniques
    - Document security and compliance requirements
    - Gather testing and validation approaches
  mcp_server_integration: [Context7, Ref Tools, WebSearch]
  deliverable_format: "Best practice guide with implementation recommendations"
  thinking_mode: think
  
framework_documentation_specialist:
  responsibility: "Research framework-specific patterns and advanced usage"
  capabilities:
    - Deep dive into framework documentation
    - Identify advanced features and optimization opportunities
    - Document migration paths and upgrade considerations
    - Research community best practices and common pitfalls
  mcp_server_integration: [Context7, Ref Tools, WebFetch]
  deliverable_format: "Framework expertise guide with advanced patterns"
  thinking_mode: think
```
</external_research_agent_patterns>

<parallel_research_coordination>
**Research Agent Coordination Patterns**:
```yaml
research_phase_orchestration:
  parallel_spawning:
    project_research_agents: 3-4 agents analyzing different aspects of codebase
    external_research_agents: 2-3 agents gathering external intelligence
    coordination_agent: Planning router synthesizes all research findings
    duration: 30-60 seconds parallel research phase
    
  research_synthesis:
    findings_aggregation: Combine project analysis with external best practices
    constraint_identification: Technical and external limitations
    opportunity_discovery: Optimization and improvement possibilities
    execution_strategy_formulation: Comprehensive implementation approach
    
  research_quality_assurance:
    cross_validation: Verify findings across multiple research agents
    consistency_checking: Ensure research findings are compatible
    completeness_verification: Confirm all necessary research areas covered
    synthesis_validation: Ensure integrated research supports execution planning
```
</parallel_research_coordination>
</research_agent_framework>

### Multi-Instance Specialist Patterns

**PURPOSE**: Multi-instance patterns enable continuous execution of large tasks by spawning multiple instances of specialist agents with intelligent work chunking and context overflow prevention.

<multi_instance_specialist_framework>
<instance_multiplication_strategies>
**Specialist Instance Multiplication**:
```yaml
large_task_decomposition:
  chunk_sizing_intelligence:
    optimal_chunk_size: 50-70% of estimated context capacity per chunk
    independence_verification: Ensure chunks can complete without inter-chunk dependencies
    integration_planning: Design chunks for seamless result aggregation
    quality_consistency: Maintain uniform standards across all chunks
    
  instance_spawning_patterns:
    specialist_multiplication: Spawn 3-5 instances of same specialist type
    work_distribution: Assign context-appropriate chunks to each instance
    parallel_execution: Multiple instances work simultaneously on different chunks
    staggered_spawning: Create instances just-in-time based on workload analysis
    
  context_overflow_prevention:
    proactive_monitoring: Track context usage across all instances in real-time
    threshold_management: Spawn fresh instances at 60% context utilization
    graceful_handoffs: Transfer work seamlessly before context exhaustion
    state_preservation: Maintain work continuity across instance transitions

instance_coordination_protocols:
  work_handoff_mechanisms:
    context_transfer: Complete work state and progress information
    quality_preservation: Maintain consistent standards across handoffs
    integration_points: Clear boundaries for chunk aggregation
    progress_tracking: Monitor completion across multiple instances
    
  instance_lifecycle_management:
    spawn_optimization: Create instances with appropriate specialization context
    execution_monitoring: Track progress and context usage per instance
    handoff_coordination: Manage transitions between instance generations
    cleanup_efficiency: Archive completed work and retire exhausted instances
```
</instance_multiplication_strategies>

<work_continuation_patterns>
**Seamless Work Continuation**:
```yaml
context_preservation_strategies:
  work_state_transfer:
    progress_documentation: Complete record of work completed and remaining
    context_package_creation: All necessary information for continuation
    quality_checkpoints: Validation that handoff maintains standards
    integration_readiness: Ensure work products are ready for aggregation
    
  continuity_assurance:
    seamless_transitions: No disruption in work flow during handoffs
    quality_consistency: Uniform standards across instance generations
    progress_momentum: Maintain execution velocity through transitions
    integration_coherence: Ensure final result appears as unified work
    
  instance_coordination:
    parallel_coordination: Multiple instances working on related chunks
    sequential_handoffs: Clean transitions between instance generations
    hybrid_approaches: Combine parallel and sequential based on task needs
    adaptive_management: Adjust coordination based on actual performance
```
</work_continuation_patterns>

<specialist_coordination_enhancement>
**Enhanced Specialist Coordination**:
```yaml
multi_instance_specialist_types:
  implementation_specialists:
    multiplication_triggers: Large coding tasks, multiple similar components
    chunk_patterns: Feature-based chunks, component-based chunks, file-based chunks
    coordination: Progress aggregation through domain lead
    quality_assurance: Consistent patterns and integration validation
    
  testing_specialists:
    multiplication_triggers: Extensive test suites, multiple testing types
    chunk_patterns: Test suite chunks, component test chunks, integration test chunks
    coordination: Test result aggregation and coverage analysis
    quality_assurance: Consistent testing standards and coverage metrics
    
  documentation_specialists:
    multiplication_triggers: Large documentation tasks, multiple document types
    chunk_patterns: Section-based chunks, component documentation chunks
    coordination: Documentation consistency and integration
    quality_assurance: Uniform documentation standards and completeness
    
  integration_specialists:
    multiplication_triggers: Complex integration tasks, multiple integration points
    chunk_patterns: API integration chunks, data integration chunks, service integration chunks
    coordination: Integration testing and validation coordination
    quality_assurance: Consistent integration patterns and error handling
```
</specialist_coordination_enhancement>
</multi_instance_specialist_framework>

### Core Agent Composition Principles

<agent_composition_framework>
<dynamic_specialization>
**Agent Creation Through Project Analysis**:
```yaml
project_discovery_phase:
  codebase_analysis:
    - Examine file structure and organization patterns
    - Detect technologies, frameworks, and libraries in use
    - Identify architectural patterns and design approaches
    - Discover existing conventions and coding standards
    
  domain_boundary_identification:
    - Analyze module boundaries and separation of concerns
    - Identify distinct layers (frontend, backend, data, infrastructure)
    - Map integration points and interface definitions
    - Discover testing patterns and quality assurance approaches
    
  specialization_needs_assessment:
    - Determine required expertise based on detected technologies
    - Identify complex areas requiring specialized knowledge
    - Assess task complexity and coordination requirements
    - Plan optimal agent count and specialization mix

context_composition_principles:
  project_specific_context:
    - Include relevant code examples from actual codebase
    - Reference established patterns and conventions
    - Provide technology-specific best practices for discovered stack
    - Include integration requirements from actual interfaces
    
  dynamic_expertise_creation:
    - Compose agent knowledge from project's technology stack
    - Adapt specialization depth to task complexity
    - Include relevant MCP server capabilities
    - Create context packages tailored to specific work assignments
    
  adaptive_specialization:
    - Adjust agent expertise based on discovered project needs
    - Scale specialization complexity to task requirements
    - Leverage Claude Code's understanding of discovered technologies
    - Create agents optimized for the actual work to be performed
```
</dynamic_specialization>

<composition_patterns>
**Universal Agent Composition Patterns**:
```yaml
specialization_composition_framework:
  expertise_areas:
    - Determined dynamically from project analysis
    - Based on actual technologies and patterns found
    - Scaled to appropriate depth for task complexity
    - Enhanced with relevant MCP server capabilities
    
  context_package_structure:
    project_patterns: "Discovered architectural and coding patterns"
    technology_context: "Specific frameworks, libraries, and tools in use"
    integration_points: "Actual interfaces and coordination requirements"
    quality_standards: "Existing code quality and testing patterns"
    work_boundaries: "Clear task isolation based on project structure"
    
  thinking_mode_allocation:
    planning_router: "think-harder/ultrathink for orchestration and complex coordination"
    domain_coordinators: "think mode for domain-specific coordination"
    execution_specialists: "think mode only for focused implementation"
    
  coordination_protocols:
    file_ownership: "Based on discovered module boundaries"
    integration_interfaces: "Using actual project interface patterns"
    quality_validation: "Following discovered testing and validation patterns"
    progress_reporting: "Lightweight async communication"
    
  multi_instance_integration:
    instance_multiplication: "Create 3-5 instances of specialist types for large tasks"
    work_chunking: "Divide tasks into context-manageable portions per instance"
    context_overflow_prevention: "Proactive spawning before context limits reached"
    seamless_continuation: "Maintain work flow across instance boundaries"

agent_boundary_principles:
  discovery_based_isolation:
    - Use project's actual module boundaries for task isolation
    - Respect discovered architectural layers and separations
    - Align with existing interface definitions and contracts
    - Follow established patterns for inter-module communication
    
  adaptive_coordination:
    - Create coordination protocols based on discovered interfaces
    - Use actual integration patterns from the codebase
    - Respect existing dependency management approaches
    - Follow established error handling and validation patterns
    
  quality_alignment:
    - Apply discovered code quality standards consistently
    - Use existing testing patterns and coverage expectations
    - Follow established documentation and comment patterns
    - Maintain consistency with discovered naming conventions
    
  multi_instance_coordination:
    - Design work chunks that respect project module boundaries
    - Ensure instance handoffs maintain architectural integrity
    - Coordinate multiple instances to prevent integration conflicts
    - Scale instance count based on discovered project complexity patterns
```
</composition_patterns>

<hierarchical_composition>
**Dynamic Hierarchical Agent Creation**:
```yaml
planning_router_intelligence:
  project_analysis_orchestration:
    - Use think-harder/ultrathink for comprehensive project understanding
    - Analyze codebase to identify optimal agent specializations
    - Plan hierarchical structure based on discovered architecture
    - Create coordination strategies using actual project interfaces
    
  dynamic_agent_spawning:
    - Spawn domain coordinators based on discovered project layers
    - Create execution specialists based on actual work patterns
    - Scale agent count to task complexity and independence
    - Optimize hierarchy for discovered project characteristics
    
  context_distribution:
    - Create specialized context packages from project analysis
    - Include relevant code examples and established patterns
    - Provide technology-specific guidance based on discovery
    - Define clear work boundaries using actual module structure

domain_coordinator_composition:
  specialization_areas:
    - Determined from project analysis rather than templates
    - Examples: "React Frontend Specialist", "FastAPI Backend Expert", "PostgreSQL Data Specialist"
    - Composed based on discovered technologies and complexity
    - Enhanced with relevant MCP server access for real-time insights
    
  coordination_responsibilities:
    - Manage sub-agents within discovered domain boundaries
    - Apply domain-specific best practices from project analysis
    - Coordinate integration using discovered interface patterns
    - Ensure quality consistency within domain scope
    
  sub_agent_spawning_logic:
    - Create execution specialists for routine work within domain
    - Spawn multiple instances for batch operations on similar patterns
    - Scale based on workload and discovered task similarities
    - Optimize for discovered project coordination patterns

execution_specialist_composition:
  task_focused_specialization:
    - Created for specific, well-defined work assignments
    - Specialized knowledge composed from project requirements
    - Context includes relevant code examples and patterns
    - Optimized for efficient think-mode execution
    
  multi_instance_specialization:
    - Spawn 3-5 instances for large tasks to prevent context overflow
    - Chunk work into context-appropriate portions per instance
    - Enable seamless handoffs between instance generations
    - Maintain work quality and consistency across instances
    
  boundary_definition:
    - Clear file or component ownership based on project structure
    - Defined integration points using actual project interfaces
    - Specific deliverables aligned with project architecture
    - Quality requirements based on discovered standards
    
  context_overflow_management:
    - Monitor context usage across all specialist instances
    - Proactively spawn fresh instances before context exhaustion
    - Transfer work state seamlessly between instances
    - Aggregate results from multiple instances into cohesive output
```
</hierarchical_composition>
</agent_composition_framework>

### Agent Composition Implementation

<composition_implementation>
<project_analysis_driven_creation>
**Dynamic Agent Creation Process**:
```yaml
Step 1: Project Discovery and Analysis
  codebase_examination:
    - Use Claude Code to analyze file structure and organization
    - Identify technologies, frameworks, and architectural patterns
    - Discover existing conventions, standards, and quality patterns
    - Map integration points and interface definitions
    
  specialization_identification:
    - Determine required expertise areas from discovered technologies
    - Assess complexity levels and coordination requirements
    - Identify opportunities for parallel execution and batch processing
    - Plan optimal agent hierarchy based on project characteristics
    
  context_preparation:
    - Extract relevant code examples and established patterns
    - Prepare technology-specific best practices and guidelines
    - Create integration requirement documentation
    - Define quality standards and validation approaches

Step 2: Dynamic Agent Composition
  expertise_composition:
    - Create specialized knowledge profiles based on discovered needs
    - Compose agent context from actual project patterns and examples
    - Include relevant MCP server capabilities for enhanced intelligence
    - Scale expertise depth to task complexity and requirements
    
  boundary_definition:
    - Define work boundaries using discovered module structure
    - Establish coordination protocols based on actual interfaces
    - Create file ownership assignments aligned with project architecture
    - Plan integration points using existing patterns
    
  hierarchy_planning:
    - Design agent hierarchy optimized for discovered project structure
    - Plan communication protocols based on actual integration patterns
    - Create escalation procedures aligned with project complexity
    - Optimize for discovered coordination and quality requirements

Step 3: Intelligent Agent Instantiation
  specialized_agent_creation:
    - Instantiate agents with composed expertise and project context
    - Assign specific work based on discovered boundaries and interfaces
    - Provide clear deliverables aligned with project architecture
    - Enable think-mode execution with pre-computed context
    
  coordination_establishment:
    - Create communication channels using discovered interface patterns
    - Establish quality gates based on project standards
    - Enable progress tracking aligned with project workflow
    - Set up integration validation using existing patterns
```
</project_analysis_driven_creation>

<adaptive_specialization_examples>
**Example Specialization Compositions** (Generated Dynamically):

<example project_type="react_typescript_app">
<discovered_patterns>
- Technology Stack: React 18, TypeScript, Vite, TailwindCSS
- Architecture: Component-based with custom hooks
- Testing: Jest + React Testing Library
- State Management: Zustand with persistence
</discovered_patterns>
<composed_agents>
```yaml
Domain Coordinator: React TypeScript Frontend Specialist
  context_composition:
    - React 18 patterns discovered in codebase
    - TypeScript best practices from project configuration
    - Existing component patterns and design system usage
    - Custom hooks patterns and state management approaches
    
  specialization_areas:
    - Component composition following discovered patterns
    - TypeScript interface and type definitions
    - Integration with existing state management patterns
    - Testing approaches aligned with project standards
    
  mcp_server_integration:
    - GitHub server for component pattern analysis
    - Ref Tools for React/TypeScript best practices
    - Documentation servers for team standards

Execution Specialists:
  Component Builder:
    - Specializes in React component creation following discovered patterns
    - Context includes existing component examples and design system usage
    - Focuses on TypeScript integration and prop interface definitions
    
  State Integration Specialist:
    - Specializes in Zustand integration patterns discovered in codebase
    - Context includes existing state management examples
    - Focuses on type-safe state updates and persistence patterns
```
</composed_agents>
</example>

<example project_type="python_fastapi_backend">
<discovered_patterns>
- Technology Stack: Python 3.11, FastAPI, SQLAlchemy, Pydantic
- Architecture: Clean architecture with service layers
- Testing: pytest with fixtures and mocking
- Database: PostgreSQL with Alembic migrations
</discovered_patterns>
<composed_agents>
```yaml
Domain Coordinator: Python FastAPI Backend Specialist
  context_composition:
    - FastAPI patterns and middleware usage discovered in codebase
    - SQLAlchemy model definitions and relationship patterns
    - Pydantic schema patterns for validation and serialization
    - Service layer patterns for business logic separation
    
  specialization_areas:
    - API endpoint creation following discovered patterns
    - Database model design aligned with existing schemas
    - Business logic implementation using service layer patterns
    - Integration with existing authentication and validation patterns
    
  mcp_server_integration:
    - GitHub server for API pattern analysis
    - Supabase server for database schema understanding
    - Semgrep server for security pattern validation

Execution Specialists:
  API Endpoint Specialist:
    - Specializes in FastAPI route creation following discovered patterns
    - Context includes existing endpoint examples and middleware usage
    - Focuses on Pydantic integration and proper HTTP response patterns
    
  Data Model Specialist:
    - Specializes in SQLAlchemy model creation aligned with existing patterns
    - Context includes current schema patterns and relationship definitions
    - Focuses on migration creation and database consistency
```
</composed_agents>
</example>
</adaptive_specialization_examples>
</composition_implementation>

### Quality and Consistency Through Principles

<quality_principles>
<consistency_through_discovery>
**Project-Aligned Quality Standards**:
```yaml
pattern_consistency:
  discovery_based_standards:
    - Extract quality standards from existing codebase analysis
    - Identify code style patterns and formatting conventions
    - Discover testing patterns and coverage expectations
    - Understand documentation standards and comment patterns
    
  adaptive_enforcement:
    - Apply discovered standards consistently across all agent work
    - Validate against actual project patterns rather than generic rules
    - Use existing linting and quality tools discovered in project
    - Maintain consistency with established architectural patterns
    
  continuous_alignment:
    - Monitor agent outputs for consistency with discovered patterns
    - Adjust specialization as understanding of project deepens
    - Learn from integration feedback to improve future composition
    - Evolve quality standards based on project evolution

integration_validation:
  interface_compliance:
    - Validate agent outputs against discovered interface patterns
    - Ensure compatibility with existing integration approaches
    - Test against actual project dependencies and requirements
    - Maintain consistency with established error handling patterns
    
  system_coherence:
    - Verify that agent contributions integrate seamlessly
    - Test that parallel work maintains architectural integrity
    - Validate that specialization boundaries respect project structure
    - Ensure that quality standards are maintained across agent hierarchy
```
</consistency_through_discovery>

<adaptive_quality_assurance>
**Dynamic Quality Framework**:
```yaml
project_specific_validation:
  discovered_testing_patterns:
    - Apply testing approaches found in existing codebase
    - Use established testing frameworks and patterns
    - Follow discovered test organization and naming conventions
    - Integrate with existing CI/CD and quality validation pipelines
    
  contextual_quality_gates:
    - Create validation checkpoints based on project complexity
    - Apply appropriate quality standards for different code areas
    - Use discovered code review patterns and approval processes
    - Implement quality validation aligned with project risk profile
    
  feedback_integration:
    - Learn from integration successes and failures
    - Adjust composition principles based on project outcomes
    - Refine specialization based on discovered effectiveness patterns
    - Evolve quality standards based on project feedback and evolution
```
</adaptive_quality_assurance>
</quality_principles>

### Configuration and Customization

<composition_configuration>
**Principle-Based Configuration**:
```yaml
agent_composition_settings:
  analysis_depth: [shallow, standard, comprehensive] # depth of project analysis
  specialization_granularity: [coarse, moderate, fine] # level of agent specialization
  context_richness: [minimal, standard, comprehensive] # amount of context per agent
  adaptation_frequency: [static, periodic, dynamic] # how often to adjust composition
  
discovery_preferences:
  technology_focus: [detected, specified, hybrid] # how to identify technologies
  pattern_detection: [automatic, guided, manual] # approach to pattern discovery
  boundary_identification: [structural, functional, hybrid] # how to define boundaries
  quality_extraction: [automatic, configured, hybrid] # approach to quality standards
  
hierarchical_composition:
  max_hierarchy_depth: [2, 3, 4] # levels in agent hierarchy
  coordination_complexity: [simple, moderate, advanced] # coordination sophistication
  specialization_overlap: [strict, moderate, flexible] # boundary flexibility
  adaptive_scaling: [conservative, balanced, aggressive] # how aggressively to scale
```
</composition_configuration>

<customization_principles>
**Project-Specific Adaptation**:
```yaml
technology_adaptation:
  framework_recognition: "Automatically detect and adapt to discovered frameworks"
  pattern_learning: "Learn from existing codebase patterns for specialization"
  context_relevance: "Include only relevant context for discovered technology stack"
  best_practice_integration: "Apply technology-specific best practices dynamically"
  
architectural_alignment:
  boundary_respect: "Align agent boundaries with discovered architectural patterns"
  interface_utilization: "Use actual project interfaces for agent coordination"
  layer_awareness: "Respect architectural layers discovered in codebase"
  pattern_consistency: "Maintain consistency with established architectural patterns"
  
quality_inheritance:
  standard_extraction: "Extract quality standards from existing codebase"
  pattern_enforcement: "Enforce discovered code style and organization patterns"
  testing_alignment: "Follow established testing approaches and coverage patterns"
  documentation_consistency: "Maintain consistency with discovered documentation patterns"
```
</customization_principles>
</composition_configuration>

## Integration Points

### Setup Command Embedding
This module provides dynamic agent composition principles for intelligent specialization based on project analysis.

### Module Dependencies
- principles.md (core philosophy and dynamic composition principles)
- workflows.md (workflow patterns and agent delegation)
- planning-router.md (orchestration and dynamic agent creation)
- parallel.md (parallel execution and coordination optimization)

### Module Consumers
- Setup command (embeds agent composition principles)
- Planning router (uses composition principles for dynamic agent creation)
- Guild command (utilizes principle-based agent specialization)
- Workflow orchestration (managed through dynamic agent composition)
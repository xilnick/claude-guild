# Agent Framework Module
**Version**: 2.4.0 | **Last Updated**: 2025-01-17 | **Dependencies**: principles.md

## Purpose
Generic agent framework that enables dynamic specialist creation based on project analysis. This module is embedded into the setup command.

## Embedded Intelligence

### Intelligent Specialist Architecture

**Smart Agent Detection**: Claude uses ultrathink to analyze projects and intelligently creates specialists when patterns indicate they would be beneficial.

**Intelligent Specialist Patterns**:
```yaml
Project Analysis Triggers:
  startup: Ultrathink to analyze project for specialist opportunities
  file_discovery: Think harder to detect specialist domains from file patterns
  task_complexity: Think harder to determine when specialists would help
  
Intelligent Specialist Creation:
  codebase_scan: Analyze patterns that benefit from specialists
  smart_creation: Create appropriate specialists based on analysis
  context_sharing: Create shared context packages for coordination
  early_preparation: Think ahead to prepare specialists for implementation

Core Agent Types:
```yaml
Meta-Planning Agent:
  purpose: Project analysis and specialist orchestration
  thinking_mode: ultrathink
  parallel: false (single orchestrator)
  role: Intelligently detect and create appropriate specialists
  responsibility: Project pattern analysis and specialist management
  triggers: Project startup, file discovery, complexity analysis

Planning Agent:
  purpose: Task decomposition and parallel execution coordination
  thinking_mode: think harder
  parallel: false (single coordinator)
  role: Break down work and route to appropriate specialists
  responsibility: Evaluate parallelization opportunities for every task

Implementation Specialists:
  purpose: Execute domain-specific work with shared context
  thinking_mode: think
  parallel: true (when >2 tasks per specialist type)
  created: Based on intelligent project analysis
  scaling: Dynamic - 2 instances for 3-4 tasks, 3 instances for 5+ tasks
  context: Shared context pool with intelligent coordination
```

### Intelligent Specialist Detection Catalog

**Pattern Recognition**: Meta-planning agent uses ultrathink to analyze project patterns and intelligently creates specialists when beneficial.

**Specialist Creation Triggers**:
```yaml
Frontend Specialists:
  triggers: 
    - React/Vue/Angular files detected (*.jsx, *.tsx, *.vue)
    - Component directories with >3 components
    - UI state management patterns (Redux, Vuex, Context)
    - Frontend test files detected
  creation: When frontend patterns detected (think harder to determine benefit)
  context_sharing: Component patterns, design system, state flows
  responsibilities: UI components, client-side logic, styling, frontend tests

Backend Specialists:
  triggers:
    - API endpoint files detected (routes/, api/, controllers/)
    - Database models or schemas (models/, entities/, schema/)
    - Service layer patterns (services/, business/)
    - Backend configuration (config/, middleware/)
  creation: When backend patterns detected (think harder to evaluate complexity)
  context_sharing: Data models, API contracts, business rules
  responsibilities: REST/GraphQL APIs, database operations, business logic, auth

CLI Specialists:
  triggers:
    - CLI command definitions (cli/, bin/, commands/)
    - Package.json scripts with complex patterns
    - Command-line tools detected (commander.js, click, argparse)
    - Automation scripts (scripts/, tasks/)
  creation: When CLI patterns found (think to assess tool complexity)
  context_sharing: Command patterns, help systems, configuration
  responsibilities: CLI commands, automation scripts, build tools, deployment

Database Specialists:
  triggers:
    - Migration files detected (migrations/, db/migrate/)
    - Schema definitions (schema.sql, models/, entities/)
    - Database configuration (database.yml, knexfile.js)
    - Query files or repositories (queries/, repositories/)
  creation: When database patterns found (think harder for schema complexity)
  context_sharing: Schema patterns, migration strategies, query optimization
  responsibilities: Database schema, queries, migrations, data modeling

DevOps Specialists:
  triggers:
    - Dockerfile or docker-compose.yml detected
    - CI/CD configuration (.github/, .gitlab-ci.yml, Jenkinsfile)
    - Infrastructure as code (terraform/, ansible/, k8s/)
    - Deployment scripts (deploy/, scripts/)
  creation: When infrastructure patterns found (think harder for deployment complexity)
  context_sharing: Deployment patterns, environment configuration
  responsibilities: Deployment pipelines, containerization, infrastructure

Test Specialists:
  triggers:
    - Test files detected (*.test.*, *.spec.*, __tests__/)
    - Test configuration (jest.config.js, pytest.ini, vitest.config.ts)
    - E2E test patterns (cypress/, playwright/, selenium/)
    - Test utilities or fixtures
  creation: When testing patterns found (think to evaluate test strategy)
  context_sharing: Test patterns, fixtures, assertion libraries
  responsibilities: Test creation, test automation, quality assurance

Documentation Specialists:
  triggers:
    - Documentation files (docs/, documentation/, *.md files)
    - API documentation tools (swagger/, openapi/)
    - README files with complex structure
    - Documentation generation tools
  creation: When documentation patterns found (think to assess documentation needs)
  context_sharing: Documentation styles, API documentation patterns
  responsibilities: Documentation creation, API documentation, user guides

Architecture Specialists:
  triggers:
    - Complex project structure (>5 directories, >20 files)
    - Multiple technology stacks detected
    - Microservices patterns (multiple services/, apps/)
    - Cross-cutting concerns (logging/, monitoring/, security/)
  creation: For complex architectures (ultrathink for system design decisions)
  context_sharing: System-wide patterns and architectural interactions
  responsibilities: System design, integration patterns, cross-cutting concerns
```

### Intelligent Agent Creation Process

**Smart Pattern Analysis**:
```yaml
Intelligent Project Analysis:
  startup_analysis: Ultrathink to analyze project for specialist opportunities
  pattern_monitoring: Think harder to detect emerging specialist needs
  complexity_assessment: Think harder to determine specialist benefits
  context_preparation: Create shared context packages for coordination

Smart Specialist Creation:
  pattern_recognition: Analyze patterns intelligently to determine value
  intelligent_creation: Create specialists when analysis shows benefit
  context_sharing: Build shared context for effective coordination
  preparation: Think ahead to prepare specialists for upcoming work

Shared Context Architecture:
  context_pool: 
    - Specialists share common project understanding
    - Context updates flow between related specialists
    - Patterns and conventions accessible to all specialists
    - Cross-specialist communication through shared context
    
  context_packages:
    - Domain expertise built on shared foundation
    - Updates shared when specialists discover new patterns
    - Intelligent conflict detection and resolution
    - Knowledge sharing between related specialists

Context Structure:
  shared_foundation:
    project_patterns: Project conventions and established styles
    technology_context: Technology understanding and best practices
    architectural_decisions: System design patterns and principles
    integration_points: Component interfaces and boundaries
    
  specialist_expertise:
    domain_knowledge: Deep understanding of specialist's area
    related_patterns: Patterns from closely related specialists
    dependencies: Understanding of upstream/downstream impacts
    quality_standards: Domain-specific validation criteria
    
  intelligent_updates:
    context_sharing: Think to synchronize important context changes
    pattern_learning: Learn from new patterns and decisions
    conflict_resolution: Think harder to resolve context conflicts
    knowledge_flow: Cross-pollination between specialists

Agent Creation Process:
  1. Ultrathink: Examine project structure and identify patterns
  2. Think harder: Assess areas requiring specialized attention
  3. Think: Determine appropriate specialist types and create agents
  4. Creates agents with focused context packages

Specialization Examples:
  # Based on discovered patterns, not hardcoded types
  - Frontend patterns → frontend specialist
  - Backend patterns → backend specialist
  - CLI patterns → CLI specialist
  - Database patterns → database specialist
  - API patterns → API specialist

Context Package Creation:
  - Project-specific patterns and conventions
  - Relevant technology best practices
  - Integration requirements and boundaries
  - Quality standards and validation criteria
  - Specific task requirements and success criteria
```

### Intelligent Context Model

**Shared Context Pool**: Specialists share context intelligently to coordinate effectively and avoid conflicts.

**Smart Context-Driven Behavior**:
```yaml
Intelligent Context Architecture:
  shared_context:
    context_sharing: Specialists maintain shared understanding of project
    pattern_sharing: Discoveries shared between related specialists
    conflict_resolution: Think harder to detect and resolve context conflicts
    knowledge_evolution: Continuous learning and pattern refinement

  specialist_layers:
    foundation_layer: Shared project understanding (all specialists)
    domain_layer: Specialist-specific expertise and patterns
    integration_layer: Cross-specialist communication and coordination
    adaptation_layer: Learning and context evolution over time

Context Coordination:
  intelligent_discovery: New patterns shared when relevant to other specialists
  context_flow: Context updates flow between related specialists
  conflict_detection: Think harder to identify contradicting patterns
  resolution_protocols: Intelligent conflict resolution using context analysis
  
Smart Agent Coordination:
  complexity_assessment: Think harder to determine when specialists should engage
  pattern_recognition: Engage specialists when their expertise patterns detected
  quality_triggers: Think to involve specialists for quality concerns
  integration_coordination: Think harder to coordinate specialists for integration

Agent Context Package:
  project_patterns: Discovered conventions and architectural styles
  technology_context: Relevant best practices and patterns
  task_requirements: Specific work to accomplish
  integration_points: Boundaries and interfaces with other work
  quality_standards: Expected quality criteria and validation approaches

Agent Operation Guidelines:
  1. Use standard Read/Write tools for all .guild directory operations
  2. Check `.guild/ignore.md` patterns before file operations
  3. Exclude matching files from automatic analysis
  4. Work on assigned files to prevent conflicts
  5. Follow discovered patterns across project components
  6. Share discoveries through intelligent context coordination
  7. Think harder to resolve conflicts through shared context
```

### Intelligent Coordination Strategy

**Smart Context Coordination**:
```yaml
Intelligent Context Sharing:
  shared_context:
    - Specialists synchronize important project understanding
    - Think to share discoveries and patterns between related specialists
    - Think harder to detect and resolve context conflicts intelligently
    - Cross-specialist knowledge sharing for better coordination
    
  smart_coordination:
    - Think harder to determine when specialists should engage
    - Coordinate when integration points detected
    - Think to prevent conflicts through shared understanding
    - Quality assurance through cross-specialist validation

Context-Aware Task Management:
  file_ownership:
    - Each file assigned to primary specialist during execution
    - Shared read access to context pool for coordination
    - Context updated when specialists make changes
    - Related specialists notified of relevant changes
    
  intelligent_boundaries:
    - Think harder to detect integration points and dependencies
    - Think ahead to coordinate before conflicts arise
    - Validate changes against shared context
    - Think harder to resolve conflicts through context intelligence

Smart Load Balancing:
  intelligent_distribution:
    - Route tasks based on specialist expertise and context affinity
    - Think to balance load with context-aware task grouping
    - Redistribute work when specialists become available
    - Maintain context coherence during coordination
    
  context_coordination:
    - Shared understanding of work progress and patterns
    - Context updates shared as work progresses
    - Cross-specialist validation and quality checks
    - Integration testing through shared context
    - Standard Read/Write tools for .guild operations

```

### Intelligent Multiple Instance Coordination

**Smart Same-Agent Parallelization**:
```yaml
Instance Creation:
  trigger: When >2 tasks identified for same specialization (think harder to assess benefit)
  process:
    1. Think harder to analyze task patterns for parallelization opportunities
    2. Group tasks by required specialist type with context coordination
    3. Spawn multiple instances when beneficial: 2 for 3-4 tasks, 3 for 5+ tasks
    4. Think to distribute tasks using context-aware affinity grouping
    5. Monitor progress and coordinate through shared context
  
Intelligent Scaling:
  - 1-2 tasks → 1 instance with full context access
  - 3-4 tasks → 2 instances with shared context coordination
  - 5+ tasks → 3 instances with intelligent context synchronization
  - Mixed specialist types → Think harder to parallelize across different specialists

Example Orchestration:
  Task: "Update all API endpoints to add authentication"

  Planning Analysis (think harder):
    - Found 12 API endpoint files
    - All need same backend specialist
    - Files are independent (no shared dependencies)

  Execution Plan:
    - Spawn 3 backend specialist instances
    - Instance 1: Updates endpoints 1-4
    - Instance 2: Updates endpoints 5-8
    - Instance 3: Updates endpoints 9-12

  Result: 12 files updated efficiently with intelligent coordination
```

### Smart Agent Template Structure

**Generic Agent Definition with Intelligent Context**:
```yaml
---
name: guild-[specialization]-specialist
color: [auto-assigned based on type]
model: inherit
description: [Specific area] specialist with intelligent context coordination
thinking_mode: think
parallel: true
max_instances: 3
context_embedded: true
---

## Role
You are an intelligent specialist in [specific area] based on analysis of this project's patterns and requirements.

## Context
Your context package includes:
- Project patterns and conventions for your specialization area
- Relevant technology best practices and architectural examples
- Integration requirements and boundary definitions
- Quality standards and validation approaches
- Specific task requirements and success criteria
- Shared context with related specialists for coordination

## Execution Approach
1. Think to review context package for your specialization
2. Understand specific task requirements and constraints
3. Use Claude's full capabilities to implement appropriate solution
4. Follow discovered project patterns and conventions
5. Use standard Read/Write tools for .guild directory operations
6. Think to coordinate with related specialists through shared context
7. Validate implementation against success criteria
8. Ensure integration compatibility with related components

## Quality Standards
- Follow project's established patterns and conventions
- Maintain consistency with existing code style and architecture
- Validate against provided requirements and constraints
- Ensure proper integration with other components
- Use standard Read/Write tools for .guild operations
- Think harder to resolve conflicts through intelligent context coordination
```

### Intelligent Concurrency and Load Balancing

**Smart Scaling Settings**:
```yaml
Concurrency Strategy:
  per_agent_type: 3 instances (maximum)
  scaling_threshold: Think harder when >2 tasks for same specialist type
  load_balancing: Intelligent task distribution with context affinity
  coordination: File-based ownership with smart conflict prevention

Intelligent Scaling:
  scaling_decisions: Think harder to determine when multiple instances beneficial
  coordination: File ownership prevents conflicts + affinity-based grouping
  standard_tools: All .guild operations use Read/Write tools
  justification: Think about single-threaded vs parallel execution benefits

Smart Load Balancing:
  routing: Think to route tasks to most appropriate specialist type
  distribution: Assign related tasks to same instances for efficiency
  conflict_prevention: Clear file ownership assignments
  parallel_assessment: Think harder to evaluate parallel opportunities before single-threaded execution
  standard_operations: Use Read/Write tools for .guild directory
```

### Error Handling

**Simple Error Management**:
```yaml
Agent Missing Fallbacks:
  IF agent NOT FOUND in .claude/agents/guild/:
    LOG: "Agent [agent-name] not found, using fallback approach"
    
    FALLBACK OPTIONS:
    1. Execute stage using main thread with enhanced context
    2. Skip stage if not critical to task completion  
    3. Provide user guidance for agent setup if critical
    
    CONTINUE with available agents and adapted workflow

Task Failure Recovery:
  IF agent task fails:
    1. Log failure details and affected tasks
    2. Redistribute tasks to other instances OR main thread
    3. Continue with successful agents
    4. Report partial completion with clear status
```

## Integration Points

### Setup Command Embedding
This module provides agent framework for dynamic specialist creation.

### Module Dependencies
- principles.md (core philosophy)

### Module Consumers
- Setup command (embeds framework)
- Planning agent (creates specialists)
- Workflow orchestration (manages agents)
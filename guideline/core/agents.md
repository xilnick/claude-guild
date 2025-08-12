# Agent Framework Module

## Purpose
Generic agent framework that enables dynamic specialist creation based on project analysis. This module is embedded into the setup command.

## Embedded Intelligence

### Generic Agent Architecture

**Dynamic Specialization**: Claude creates specialists based on actual project patterns, not predefined types.

**Core Agent Types**:
```yaml
Research Agents:
  purpose: Gather context and analyze patterns
  thinking_mode: think
  parallel: true (up to 3 instances)
  examples: project analysis, technology research, pattern discovery
  
Planning Agent:
  purpose: Task decomposition and intelligent routing
  thinking_mode: ultrathink
  parallel: false (single coordinator)
  role: Break down work and route to appropriate specialists
  
Implementation Specialists:
  purpose: Execute specific areas of work
  thinking_mode: think
  parallel: true (up to 3 per specialization)
  created: Based on project analysis and task requirements
  
Quality Specialists:
  purpose: Validation, testing, verification when needed
  thinking_mode: think
  parallel: true (up to 3 instances)
  triggered: When complexity or risk requires validation
```

### Agent Creation Process

**Pattern-Based Generation**:
```yaml
Project Analysis:
  1. Claude examines project structure and patterns
  2. Identifies areas requiring specialized attention
  3. Determines appropriate specialist types
  4. Creates agents with focused context packages
  
Specialization Examples:
  # Based on discovered patterns, not hardcoded types
  - Interface patterns → interface specialist
  - Service patterns → service specialist  
  - Data patterns → data specialist
  - Integration patterns → integration specialist
  - Security patterns → security specialist
  - Performance patterns → performance specialist
  
Context Package Creation:
  - Project-specific patterns and conventions
  - Relevant technology best practices
  - Integration requirements and boundaries
  - Quality standards and validation criteria
  - Specific task requirements and success criteria
```

### Agent Intelligence Model

**No Code Embedding**: Agents receive analysis and use Claude's full capabilities, never hardcoded templates.

**Context-Driven Behavior**:
```yaml
Agent Context Package:
  project_patterns: Discovered conventions and architectural styles
  technology_context: Relevant best practices and patterns
  task_requirements: Specific work to accomplish
  integration_points: Boundaries and interfaces with other work
  quality_standards: Expected quality criteria and validation approaches
  
Agent File Operation Rules:
  1. Check `.guild/ignore.md` patterns before file operations
  2. Exclude matching files from automatic analysis
  3. Skip ignored files during batch modifications
  4. Allow access when user explicitly names ignored files
  5. Report when accessing ignored files by explicit request
  
Agent Execution:
  1. Analyze provided context package
  2. Understand specific task requirements
  3. Apply Claude's full capabilities to implement solution
  4. Follow discovered project patterns and conventions
  5. Validate against provided success criteria
```

### Agent Coordination

**Minimal Coordination Strategy**:
```yaml
Independent Execution:
  - Agents work on different files or clear component boundaries
  - Shared interfaces defined upfront in planning
  - Integration points validated after completion
  - Conflicts resolved through ownership rules
  
Load Balancing:
  - Tasks distributed across available agent instances
  - Automatic scaling up to limits (3 per type, 20 total)
  - Work stealing when agents become idle
  - Resource monitoring and adjustment
  
Progress Tracking:
  - Asynchronous progress reporting
  - No blocking waits during execution
  - Integration validation at completion
  - Quality gates applied consistently
```

### Agent Template Structure

**Generic Agent Definition**:
```yaml
---
name: guild-[specialization]-specialist
color: [auto-assigned based on type]
model: inherit
description: [Specific area] specialist - [determined from project analysis]
thinking_mode: think
parallel: true
max_instances: 3
context_embedded: true
---

## Role
You are a specialist in [specific area] based on analysis of this project's patterns and requirements.

## Context
Your context package includes:
- Project patterns and conventions for your specialization area
- Relevant technology best practices and architectural examples
- Integration requirements and boundary definitions
- Quality standards and validation approaches
- Specific task requirements and success criteria

## Execution Approach
1. Review context package for your specialization
2. Understand specific task requirements and constraints
3. Use Claude's full capabilities to implement appropriate solution
4. Follow discovered project patterns and conventions
5. Validate implementation against success criteria
6. Ensure integration compatibility with related components

## Quality Standards
- Follow project's established patterns and conventions
- Maintain consistency with existing code style and architecture
- Validate against provided requirements and constraints
- Ensure proper integration with other components
- Apply appropriate testing when complexity requires it
```

## Multiple Instance Orchestration

**Same-Agent Parallelization**:
```yaml
Instance Creation:
  Trigger: Planning agent identifies multiple independent tasks for same specialization
  Process:
    1. Analyze task list for parallelization opportunities
    2. Group tasks by required specialist type
    3. Spawn multiple instances (up to 3) of same specialist
    4. Assign task batches to each instance
    5. Monitor progress and rebalance if needed

Example Orchestration:
  Task: "Update all API endpoints to add authentication"
  
  Planning Analysis:
    - Found 12 API endpoint files
    - All need same service specialist
    - Files are independent (no shared dependencies)
  
  Execution Plan:
    - Spawn 3 service specialist instances
    - Instance 1: Updates endpoints 1-4
    - Instance 2: Updates endpoints 5-8  
    - Instance 3: Updates endpoints 9-12
    
  Result: 12 files updated in time of 4 sequential updates
```

**Instance Coordination**:
```yaml
Coordination Rules:
  - Each instance gets unique ID (e.g., service-specialist-1, service-specialist-2)
  - Instances work on different files (no conflicts)
  - Shared read access to project context
  - Independent write access to assigned files
  - Progress reported to orchestrator
```

## Concurrency and Load Balancing

**Default Settings**:
```yaml
Concurrency Limits:
  per_agent_type: 3 instances (configurable)
  total_parallel: 20 agents maximum (configurable)
  load_balancing: automatic task distribution
  resource_monitoring: continuous performance tracking
  
Scaling Strategy:
  scale_up: when workload exceeds current capacity
  scale_down: when agents become idle
  work_stealing: idle agents help busy specializations
  resource_optimization: dynamic adjustment based on performance
```

**Load Balancing Rules**:
```yaml
Task Distribution:
  - Route tasks to most appropriate specialist type
  - Balance workload across available instances
  - Prefer agents with relevant context
  - Avoid overloading any single agent
  
Resource Management:
  - Monitor agent capacity and performance
  - Scale instances based on workload
  - Optimize context package sizes
  - Manage memory and processing efficiently
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
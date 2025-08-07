# Claude Guild System Specification

## Executive Summary

Claude Guild is a **workflow orchestration system** for Claude Code that provides:
- Thin agent architecture with centralized processes
- Intelligent task routing and parallel execution
- Configuration-driven customization
- Technology-agnostic implementation

## Core Architecture

### Four-Layer System

```
Commands → Processes → Agents → Configuration
```

Each layer has a single responsibility:
- **Commands**: Orchestrate workflows
- **Processes**: Define execution logic
- **Agents**: Provide metadata and roles
- **Configuration**: Customize behavior

### Key Principles

1. **Technology Agnostic**: Work with any stack
2. **Configuration Over Code**: Customize through config
3. **Thin Architecture**: Minimal agent definitions
4. **Process Reuse**: Centralized logic
5. **Adaptive Execution**: Respond to conditions

## Workflow System

### Execution Stages

```yaml
Core Workflow:
  1. Analysis: Understand task requirements
  2. Research: Gather context (dual-phase)
  3. Planning: Route to appropriate agents
  4. Implementation: Execute task
  5. Validation: Verify results
```

### Dual-Phase Research

**Strategic (30%)**: Quick overview before planning
**Tactical (70%)**: Targeted investigation after planning

This prevents unnecessary context gathering and improves efficiency.

### Command System

```yaml
Base: /guild [flags] "task"

Flags:
  --no-reason    # Skip analysis
  --no-plan      # Skip planning
  --no-implement # Planning only
  --refactor     # Code improvement
  --test         # Add testing
  --verify       # Validate results
  --project      # Project-wide scope

Specialized Commands:
  /guild:setup [--standalone]  # Initialize agents
  /guild:fix                   # Bug fixing
  /guild:refactor              # Code improvement
  /guild:plan                  # Planning only
  /guild:spec                  # Specifications
```

## Agent Architecture

### Thin Agents

Agents are metadata-only (<10 lines) that reference processes:

```yaml
---
name: agent-identifier
role: primary-function
processes: [process-references]
scope: operational-boundary
parallel: true/false
---
```

### Core Agent Types

- **Reasoning**: Task analysis and clarification
- **Planning**: Workflow coordination and routing
- **Research**: Context gathering (project/global)
- **Implementation**: Task execution specialists
- **Verification**: Quality validation

### Standalone Agents

Self-contained agents for specific domains:

```yaml
---
name: standalone-agent
role: domain-specialist
approach: methodology
scope: boundaries
self_contained: true
---
```

#### Agent Placement

Guild agents are organized in a structured directory hierarchy:

- **Standard Guild agents**: `.claude/agents/guild/` - Core guild system agents (reasoning, planning, research, verification, engineers)
- **Standalone specialists**: `.claude/agents/` - Self-contained domain specialists that operate independently

This separation ensures:
- Clear distinction between guild system agents and standalone specialists
- Better organization and discoverability
- Namespace isolation to prevent conflicts
- Easier management of agent types

## Process System

### Process Structure

```yaml
process: name
  description: purpose
  inputs: [required-data]
  steps: [execution-actions]
  outputs: [produced-results]
  parallel: true/false
  error_handling: strategy
```

### Core Process Types

- **Analysis**: Task understanding and clarification
- **Research**: Information gathering and synthesis
- **Planning**: Execution strategy and routing
- **Implementation**: Code changes and creation
- **Validation**: Testing and verification

## Routing Intelligence

### Task Classification

```yaml
Complexity Assessment:
  Simple: Single agent, linear execution
  Medium: Multiple agents, coordination needed
  Complex: Many agents, parallel execution

Routing Factors:
  - Task complexity
  - Required capabilities
  - Resource availability
  - Parallelization potential
```

### Execution Strategies

1. **Sequential**: One agent at a time
2. **Parallel**: Multiple independent agents
3. **Pipeline**: Overlapping stages
4. **Hybrid**: Mixed strategies

## Context Management

### Context Lifecycle

```yaml
Flow: Generation → Transfer → Usage → Decay → Removal

Optimization:
  - Filter by relevance
  - Compress verbose data
  - Cache frequently used
  - Decay outdated info
```

### Transfer Protocol

```yaml
Priority Levels:
  Critical: Essential for task
  Important: Significantly helps
  Supplementary: Nice to have

Format:
  - Executive summary
  - Key points
  - Detailed context (on-demand)
  - References
```

## Planning Framework

### Distributed Planning

Three-tier hierarchy prevents bottlenecks:

```yaml
Strategic: High-level decomposition (planning agent)
Tactical: Implementation approach (specialists)
Micro: Immediate decisions (all agents)
```

### Task Decomposition

Atomic tasks should be:
- Single responsibility
- Clear input/output
- Independently testable
- Parallelizable when possible

## Performance Optimization

### Core Strategies

```yaml
Optimization Techniques:
  Caching: Multi-level hierarchy
  Compression: Context reduction
  Parallelization: Concurrent execution
  Prediction: Anticipate bottlenecks
  Streaming: Continuous flow
```

### Adaptive Execution

Dynamic adjustment based on:
- System load
- Task complexity
- Available resources
- Historical patterns

## Configuration

### Configuration Hierarchy

```yaml
Levels: Defaults → Project → Runtime

Schema:
  models:
    reasoning: model-choice
    planning: model-choice
    implementation: model-choice
    
  parallel:
    enabled: boolean
    max_agents: number
    
  routing:
    preferences: custom-rules
    overrides: specific-cases
```

## Setup Process

### Technology Detection

Pattern-based detection (not framework-specific):

```yaml
Detection Categories:
  Frontend: UI component patterns
  Backend: Server architecture patterns
  Database: Data persistence patterns
  Testing: Quality assurance patterns
  DevOps: Deployment patterns
```

### Agent Generation

Create agents based on detected patterns:
- Component patterns → UI engineers
- API patterns → Backend engineers
- Data patterns → Database engineers
- Test patterns → QA engineers

#### Generated Files Structure

**Standard Mode**:
```
.guild/
├── instructions.md    # User configuration
├── overview.md       # System reference
├── agents.md         # Agent templates
└── ignore.md         # File patterns

.claude/agents/guild/
├── guild-reasoning-agent.md
├── guild-planning-agent.md
├── guild-project-researcher.md
├── guild-global-researcher.md
├── guild-verification-agent.md
└── [pattern-specific-engineers].md
```

**Standalone Mode** (`--standalone`):
```
.claude/agents/
├── security-analyst-agent.md
├── performance-engineer-agent.md
├── accessibility-auditor-agent.md
└── [other-specialists].md
```

## Extensibility

### Extension Points

```yaml
Custom Elements:
  Processes: New workflow logic
  Agents: Specialized roles
  Commands: Custom workflows
  Routing: Advanced rules
  Patterns: Enhancement templates
```

### Plugin Architecture

```yaml
Plugin Structure:
  metadata: Description and requirements
  processes: Logic definitions
  agents: Role templates
  integration: Setup instructions
```

## System Structure

```
claude-guild/
├── templates/           # Core templates
│   ├── processes.md    # Workflow logic
│   ├── routing.md      # Task routing
│   ├── agents.md       # Agent templates
│   └── instructions.md # Default config
├── commands/           # Command definitions
├── docs/              # Documentation
└── install.js         # NPM installer
```

## Documentation

Core documentation in `/docs`:
- **getting-started.md**: Installation, usage, and setup
- **architecture.md**: Complete system architecture
- **agents.md**: Agent specifications and design
- **performance.md**: Optimization strategies
- **development.md**: Contributing guidelines
- **extensibility.md**: Customization and plugins

## Success Metrics

- **Efficiency**: 50-70% performance improvement
- **Flexibility**: Works with any technology
- **Maintainability**: Simple, clear structure
- **Scalability**: Grows with project needs
- **Adoption**: Quick learning curve

## Implementation Guidelines

### Best Practices

1. Keep agents thin - metadata only
2. Centralize logic in processes
3. Use patterns, not specific technologies
4. Optimize for parallel execution
5. Monitor and adapt performance

### Common Patterns

```yaml
Simple Task: Direct routing to single specialist
Feature Development: Parallel UI/API/DB work
Bug Fix: Sequential investigation and repair
Refactoring: Distributed code improvement
Testing: Parallel test generation and execution
```

## Conclusion

Claude Guild provides a streamlined, technology-agnostic workflow system that:
- Simplifies complex orchestration
- Adapts to any technology stack
- Scales with project complexity
- Maintains clean architecture
- Optimizes performance automatically

The system achieves power through simplicity, not complexity.
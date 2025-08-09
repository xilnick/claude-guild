# Claude Guild System Specification

**Executive Summary and Navigation Guide**

## Quick Start

Claude Guild is a **workflow orchestration system** for Claude Code that provides:
- **Thin agent architecture** with centralized processes
- **Advanced context engineering** for long-context optimization  
- **Intelligent task routing** and parallel execution
- **Chain-of-thought reasoning** integration
- **Configuration-driven customization**
- **Technology-agnostic** implementation

## Architecture Overview

**Four-Layer System**: `Commands → Processes → Agents → Configuration`

Each layer has a single responsibility with integrated context engineering and thinking mode optimization for efficient workflow execution.

**📋 Complete Architecture Details**: See [docs/architecture.md](./docs/architecture.md)

## Core Components

### Context Engineering
Advanced context management with XML-structured packages, progressive detail building, and long-context optimization.

**📋 Complete Context Engineering Guide**: See [docs/context-engineering.md](./docs/context-engineering.md)

### Thinking Mode Configuration
**Optional** cognitive resource allocation system allowing user customization of thinking modes through prefilled instructions.md configuration. Supports ultrathink/think-harder/think patterns based on user preferences.

**📋 Complete Thinking Modes Configuration**: See [docs/thinking-modes.md](./docs/thinking-modes.md)

### Workflow Orchestration
Multi-stage workflow patterns with flag system, parallel execution, and specification-driven development support.

**📋 Complete Workflow Documentation**: See [docs/workflows.md](./docs/workflows.md)

### Agent System
Thin metadata agents with context-only vs implementation classification, structured handoff protocols, and technology-specific specialization.

**📋 Complete Agent Specifications**: See [docs/agents.md](./docs/agents.md)

### Configuration System
Hierarchical configuration with optionality-first design, maintaining user control through thin instruction mechanics and priority-based behavior modification.

**Instructions Mechanic Priority Hierarchy**:
```yaml
Priority Order (Highest to Lowest):
  1. User Prompts: Direct user requests override all system behavior
  2. Instructions.md: Optional user customization (thin configuration)
  3. Default Prompts: System defaults (lowest priority)

Optionality Principle:
  - Instructions.md contains ONLY optional user requirements
  - Default system behavior remains intact when instructions.md is empty
  - User always maintains full control through direct prompts
  - Thin configuration prevents overwhelming complexity
```

**Mandatory Default Thinking Modes**:
```yaml
Required Prefilled Configuration:
  guild-planning-agent:
    thinking_mode: ultrathink
    model: opus
    
All Other Agents:
  thinking_mode: think (default)
  model: inherited from Claude Code
```

**📋 Complete Configuration Guide**: See [docs/configuration.md](./docs/configuration.md)

## Key Workflow Patterns

### Standard Workflow
```yaml
Analysis → Research → Planning → Implementation → Validation
```

### --full Flag (Comprehensive Development)
```yaml  
Analysis → Research → Planning → Implementation → Testing → Verification → Refactoring
```

### --spec Flag (Documentation-First)
```yaml
Analysis → Spec Analysis → Spec Update → Research → Planning → Implementation → Validation
```

## Agent Classification

### Context-Only Agents (Never make changes)
- **guild-reasoning-agent**: Requirement analysis and task understanding
- **guild-planning-agent**: Strategic workflow coordination and routing  
- **guild-research-agents**: Context gathering and information synthesis
- **guild-specification-agent**: Documentation analysis and spec updates

### Implementation Agents (Make changes)
- **guild-verification-agent**: Quality validation and testing execution
- **Technology engineers**: Domain-specific implementation specialists

**📋 Complete Agent Details**: See [docs/agents.md](./docs/agents.md)

## Context Transfer Protocol

All agent-to-agent communication follows structured XML handoff templates:

```xml
<context-handoff>
  <executive-summary>Key decisions and requirements</executive-summary>
  <structured-context>Technical and business constraints</structured-context>
  <implementation-package>Step-by-step guidance and validation criteria</implementation-package>
  <quality-gates>Success criteria and escalation triggers</quality-gates>
</context-handoff>
```

**📋 Complete Context Engineering**: See [docs/context-engineering.md](./docs/context-engineering.md)

## Command System

### Base Command
`/guild [flags] "task"`

### Key Flags
- **--full**: Complete development lifecycle (7 stages)
- **--fix**: Bug fixing workflow with systematic debugging  
- **--plan**: Planning-only mode with optional save to file
- **--research**: Research-only mode for context gathering
- **--spec**: Documentation-first development with spec management
- **--refactor/--test/--verify**: Enable optional quality stages
- **--project**: Project-wide scope
- **--no-reason/--no-plan/--no-implement**: Disable specific stages

### Flag-Only Execution Modes
When specific flags are used independently, Guild executes specialized workflow sequences:

- **`--fix` only**: reasoning → research → planning → fix stage (no implementation)
- **`--plan` only**: reasoning → research → planning → save plan option  
- **`--research` only**: reasoning → research (no planning/implementation)
- **`--spec` only**: reasoning → research → planning → specification stages (no implementation)

### Specialized Commands  
- `/guild:setup [--standalone]`: Initialize system and agents

**📋 Complete Workflow Details**: See [docs/workflows.md](./docs/workflows.md)

## Setup and Installation

### NPM Installation
```bash
npx claude-guild@latest
```

### Generated Structure
```
.guild/
├── instructions.md    # Project configuration
├── overview.md       # System reference  
├── agents.md         # Agent templates
└── ignore.md         # File patterns

.claude/agents/guild/
├── guild-reasoning-agent.md      # Context generation
├── guild-planning-agent.md       # Strategy development
├── guild-specification-agent.md  # Documentation analysis
├── guild-verification-agent.md   # Validation
└── [technology-engineers].md     # Implementation
```

## Performance and Optimization

**Context Engineering Optimizations**:
- Reference-based linking (file:line citations)
- Progressive detail building 
- Hierarchical summarization
- Automatic context pruning

**Thinking Mode Optimizations**:
- User-configurable thinking modes through instructions.md
- Optional cognitive enhancement based on task complexity
- Customizable reasoning strategies for different workflows

**Execution Optimizations**:
- Parallel agent execution with context synchronization
- Adaptive workflow routing based on task complexity
- Context caching and compression

**📋 Complete Performance Guide**: See [docs/performance.md](./docs/performance.md)

## Extension and Customization

### Configuration Hierarchy
`Defaults → Project (.guild/instructions.md) → Runtime (flags)`

### Extension Points
- Custom processes in workflow logic
- Specialized agents for domain expertise
- Custom commands for workflow patterns  
- Plugin architecture for community extensions

### Standalone Agent System

**Self-Contained Specialists**: Independent agents that operate without .guild system infrastructure while providing focused expertise in specific domains.

**Key Characteristics**:
```yaml
standalone_agents:
  design: self_contained
  dependencies: none
  activation: automatic_based_on_keywords
  integration: seamless_with_claude_code
  specialization: domain_specific_expertise
```

**Available Specialists**:
- **security-analyst-agent**: OWASP compliance, vulnerability assessment, authentication analysis
- **accessibility-auditor-agent**: WCAG 2.1 AA compliance, ARIA implementation, screen reader compatibility  
- **performance-engineer-agent**: Performance profiling, database optimization, caching strategies
- **code-reviewer-agent**: Code quality analysis, refactoring, best practices enforcement
- **documentation-writer-agent**: Technical documentation, API docs, user guides
- **api-architect-agent**: API design patterns, REST/GraphQL architecture, integration strategies
- **deployment-engineer-agent**: CI/CD optimization, deployment strategies, infrastructure as code
- **testing-strategist-agent**: Test strategy development, automation, quality assurance

**Usage Pattern**:
```yaml
activation: automatic
triggers: [security, performance, accessibility, testing, documentation, deployment]
integration: works_with_all_claude_code_commands
scope: specialist_domains_only
```

**📋 Complete Configuration Details**: See [docs/configuration.md](./docs/configuration.md)
**📋 Complete Extensibility Guide**: See [docs/extensibility.md](./docs/extensibility.md)

## Key Differentiators

- **Advanced context engineering** with XML-structured packages and long-context optimization
- **Integrated thinking modes** for appropriate cognitive resource allocation
- **Structured agent communication** with validation checkpoints and quality gates  
- **Documentation-first development** with specification-driven workflows
- **Technology-agnostic design** with pattern-based detection and universal workflows

## Success Metrics

- **50-70% performance improvement** through context optimization and parallel execution
- **Enhanced reasoning quality** with appropriate thinking mode selection
- **Efficient agent communication** with structured handoff protocols
- **Technology stack flexibility** with universal workflow patterns
- **Scalable complexity management** through progressive context building

## Documentation Index

### Core Documentation
- **[Architecture](./docs/architecture.md)**: Complete system architecture and design philosophy
- **[Context Engineering](./docs/context-engineering.md)**: Advanced context management and optimization  
- **[Thinking Modes](./docs/thinking-modes.md)**: Chain-of-thought reasoning and cognitive resource allocation
- **[Workflows](./docs/workflows.md)**: Execution patterns, stages, and flag system
- **[Agents](./docs/agents.md)**: Agent specifications, types, and communication protocols
- **[Configuration](./docs/configuration.md)**: Setup, customization, and performance tuning

### Additional Documentation  
- **[Getting Started](./docs/getting-started.md)**: Installation, setup, and first usage
- **[Performance](./docs/performance.md)**: Optimization strategies and monitoring
- **[Development](./docs/development.md)**: Contributing guidelines and development workflow
- **[Extensibility](./docs/extensibility.md)**: Customization, plugins, and extension patterns

---

## Development Guidelines

**⚠️ CRITICAL WORKFLOW ORDER - MUST FOLLOW:**

1. **FIRST: Update GUIDELINE.md** - This specification defines system behavior
2. **SECOND: Update Templates** - Reflect specification in implementation templates  
3. **THIRD: Update Commands** - Ensure commands use updated templates properly

**NEVER** modify `.guild/`, `.serena/`, or `.claude/` directories directly - these are generated from templates.

### Template Management Rules (CRITICAL)

**Template Architecture Principle**: 
Templates must contain **ONLY** content needed for inline embedding into setup commands. Templates are embedded during development and NOT shipped in NPM packages.

**Required Templates** (Must Keep):
- `templates/instructions.md` - User configuration template
- `templates/overview.md` - Process definitions and workflow steps
- `templates/agents.md` - Agent creation templates  
- `templates/ignore.md` - File exclusion patterns

**Template Content Requirements**:
```yaml
Content Policy:
  Include: Only content referenced by .guild/ system or commands
  Exclude: Experimental features, unused mechanisms, development artifacts
  
Process:
  1. Templates embedded into commands/setup.md during development
  2. Setup command becomes self-contained during NPM packaging
  3. Templates directory not shipped with package
  
Validation:
  - Every template file must be referenced by Guild commands
  - Unused templates create package bloat without benefit
  - All valuable mechanisms belong in GUIDELINE.md documentation
```

**Template Cleanup Protocol**:
1. **Extract valuable mechanisms** - Move useful processes/patterns to GUIDELINE.md
2. **Remove unused templates** - Delete files not referenced by commands
3. **Validate embedding** - Ensure setup command contains all needed content
4. **Test package** - Verify NPM package works without templates directory

---

This specification provides the foundation for a **comprehensive development ecosystem** that combines thin agent simplicity with advanced context management and structured reasoning systems.
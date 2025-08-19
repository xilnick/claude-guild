# Guild System Guideline

## Overview

This directory contains the authoritative specifications for the Claude Guild system. It is organized to support both dynamic composition of the setup command and standalone command specifications.

## Directory Structure

```
guideline/
├── README.md                 # This file - system overview
├── shared/                   # Shared intelligence (both setup & execution)
│   ├── principles.md         # Core Guild philosophy and principles
│   └── mcp-integration.md    # MCP integration patterns
├── setup/                    # Setup command intelligence
│   ├── agents.md            # Agent generation and composition patterns
│   └── testing.md           # Testing setup patterns
├── execution/                # Execution command intelligence
│   ├── planning-router.md    # Planning router intelligence
│   ├── workflows.md         # Workflow orchestration patterns
│   └── parallel.md          # Parallel execution strategies
└── templates/                # Command templates with embedded intelligence
    ├── setup-command.md      # /guild:setup template (shared + setup)
    ├── agent-command.md      # /guild:agent template (shared + execution)
    ├── instructions-command.md # /guild:instructions template (shared)
    ├── ignore-command.md     # /guild:ignore template (shared)
    ├── agent-templates.md    # Agent template patterns
    └── instructions-template.md # User configuration template
```

## Composition Architecture

### Setup Command Composition

The `/guild:setup` command is dynamically composed from core modules by install.js:

1. **Core Principles** → Embedded as architectural foundation and project structure intelligence
2. **Agent Framework** → Embedded as agent generation logic with structure awareness
3. **Workflow Patterns** → Embedded as execution strategies for complex projects
4. **Parallel Execution** → Embedded as parallelization strategies
5. **Instructions Template** → Embedded as user configuration defaults

### Standalone Commands

Commands with their own specifications (located in `/commands` directory):
- `/guild:setup` - Project analysis and agent generation
- `/guild` - Main workflow command (discovers agents at runtime)
- `/guild:ignore` - File exclusion pattern management
- `/guild:instructions` - Project configuration management

## Core Principles

### Prompt-Driven Intelligence
- All intelligence through prompts, no hardcoded logic
- Claude-native analysis using full capabilities
- Dynamic adaptation to any technology stack
- Future-proof design that improves with each model

### Self-Contained Distribution
- Zero-dependency NPM installation
- Complete intelligence embedded during generation
- Runtime independence from external files
- Global consistency across all environments

### Project-Adaptive Generation
- Dynamic agent creation based on project analysis
- Technology-specific specialization
- Context-aware workflow optimization
- Embedded project intelligence in all components

## Maintenance Guidelines

### Core Modules
- Keep focused on single responsibility
- Maintain technology-agnostic patterns
- Document embedding points for install.js
- Version control all intelligence updates

### Command Specifications
- Complete, standalone specifications
- Clear interface definitions
- Consistent error handling patterns
- User-friendly documentation

### Quality Standards
- No duplication across modules
- Clear separation of concerns
- Maintainable and testable design
- Comprehensive documentation

## Usage in install.js

```javascript
// Pseudo-code for command composition with intelligence separation
const setupCommand = compose({
  template: 'templates/setup-command.md',
  modules: [
    'shared/principles.md',        // shared intelligence
    'shared/mcp-integration.md',   // shared intelligence  
    'setup/agents.md',            // setup intelligence
    'setup/testing.md',           // setup intelligence
    'templates/instructions-template.md'
  ],
  output: '.claude/commands/guild/setup.md'
});

const agentCommand = compose({
  template: 'templates/agent-command.md',
  modules: [
    'shared/principles.md',        // shared intelligence
    'shared/mcp-integration.md',   // shared intelligence
    'execution/planning-router.md', // execution intelligence
    'execution/workflows.md',       // execution intelligence
    'execution/parallel.md'         // execution intelligence
  ],
  output: '.claude/commands/guild/agent.md'
});
```

## Evolution Strategy

1. **Intelligence Module Updates**: Update individual intelligence modules for focused changes
2. **Template Updates**: Modify command templates for structure changes
3. **Intelligence Separation**: Keep setup and execution intelligence separate
4. **Composition Logic**: install.js handles dynamic assembly with appropriate intelligence
5. **Testing**: Validate composed commands with embedded intelligence before publishing
6. **Versioning**: Semantic versioning for breaking changes

This intelligence separation architecture ensures the Guild system remains maintainable, focused, and aligned with our principles of separated concerns and focused command intelligence.
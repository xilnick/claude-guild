# Guild System Guideline

## Overview

This directory contains the authoritative specifications for the Claude Guild system. It is organized to support both dynamic composition of the setup command and standalone command specifications.

## Directory Structure

```
guideline/
├── README.md                 # This file - system overview
└── core/                     # Core intelligence modules for setup command composition
    ├── principles.md         # Fundamental architectural principles and project structure
    ├── agents.md             # Agent classification and design patterns
    ├── workflows.md          # Workflow execution and coordination
    ├── parallel.md           # Parallel execution strategies and optimization
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
// Pseudo-code for setup command composition
const setupCommand = compose({
  base: 'commands/setup-base.md',
  modules: [
    'core/principles.md',
    'core/agents.md',
    'core/workflows.md',
    'core/parallel.md',
    'core/instructions-template.md'
  ],
  output: '.claude/commands/guild-setup.md'
});
```

## Evolution Strategy

1. **Core Module Updates**: Update individual modules without touching commands
2. **Command Updates**: Modify command specs independently
3. **Composition Logic**: install.js handles dynamic assembly
4. **Testing**: Validate composed commands before publishing
5. **Versioning**: Semantic versioning for breaking changes

This modular architecture ensures the Guild system remains maintainable, extensible, and aligned with our principles of prompt-driven intelligence and self-contained distribution.
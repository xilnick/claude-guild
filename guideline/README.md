# Guild System Guideline

## Overview

This directory contains the authoritative specifications for the Claude Guild system. The system is built around two core commands that work together: setup and workflow.

## Directory Structure

```
guideline/
├── README.md                 # This file - system overview
├── core/                     # Core intelligence modules
│   ├── workflow.md          # Ultrathink reasoning + parallel execution
│   └── agents.md            # Project-agnostic agent specialization patterns
└── templates/                # Command templates with embedded intelligence
    ├── setup-command.md     # /guild:setup template (project analysis + agent creation)
    └── workflow-command.md  # /guild template (reasoning + parallel execution)
```

## Simple Two-Command Architecture

### /guild:setup
- **Purpose**: Analyze project and create specialized agents
- **Process**: Detect tech stack → Generate agents → Embed intelligence
- **Output**: Specialized agents in `.claude/agents/guild/`
- **Intelligence**: Uses agents.md for project-agnostic patterns

### /guild
- **Purpose**: Execute tasks through reasoning and parallel agent invocation
- **Process**: Ultrathink reasoning → Present plan → Get approval → FORCE parallel execution
- **Intelligence**: Uses workflow.md for two-phase execution

## Core Principles

### Framework-Agnostic Design
- Works with any technology stack
- Dynamic agent creation based on project analysis
- No hardcoded technology assumptions

### Ultrathink Reasoning
- Mandatory 30-90 second reasoning phase
- Present execution plan for user approval
- Clear understanding before execution

### Optimal Execution Strategy
- **TARGET FOCUS**: Do EXACTLY what was requested - nothing more, nothing less
- Use OPTIMAL agent count for the task (1 agent for simple, 10+ for complex)
- Smart parallelization when beneficial, not forced everywhere
- Targeted research on specific needs, not comprehensive exploration
- Efficiency over raw parallelization

### Embedded Intelligence
- All logic embedded in command prompts during generation
- No runtime dependencies
- Self-contained agent specifications

## Command Generation

The install.js system composes commands from core modules:

```javascript
// Setup command composition
setupCommand = compose({
  template: 'templates/setup-command.md',
  modules: ['core/agents.md'],
  output: '/guild:setup'
});

// Workflow command composition  
workflowCommand = compose({
  template: 'templates/workflow-command.md',
  modules: ['core/workflow.md', 'core/agents.md'],
  output: '/guild'
});
```

## Simple Workflow

1. **Initial Setup**: `/guild:setup` analyzes project and creates specialized agents
2. **Task Execution**: `/guild "task"` uses ultrathink reasoning then parallel execution
3. **Multiple Invocations**: Same agents can work on different parts of the project
4. **Result Integration**: Simple combination of agent outputs

## Maintenance Guidelines

### Core Modules
- Keep workflow.md focused on reasoning + execution patterns
- Keep agents.md focused on technology detection + specialization
- Both modules must be project-agnostic and framework-neutral

### Command Templates
- setup-command.md handles project analysis and agent creation
- workflow-command.md handles task reasoning and execution
- Both embed appropriate core modules during generation

### Quality Standards
- No duplication between modules
- Clear separation of concerns (setup vs execution)
- Maintainable and testable design
- Project-agnostic patterns only

This streamlined architecture ensures Guild remains simple, powerful, and adaptable to any project or technology stack.
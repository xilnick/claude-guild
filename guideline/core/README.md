# Core Intelligence Modules

## Overview
This directory contains the shared intelligence modules that are embedded into all Guild commands during installation. These modules follow the Guild System Framework defined in `@guideline/guide/framework.md`.

## Core Module Structure

### Required Core Modules
- **workflow.md** - Workflow orchestration and coordination intelligence
- **agents.md** - Agent creation and specialization intelligence  
- **verification.md** - Coverage verification and gap detection intelligence

### Module Requirements
All core modules MUST:
1. Follow the Guild System Framework (`@guideline/guide/framework.md`)
2. Be self-contained with complete intelligence patterns
3. Use imperative command language throughout
4. Include verification capabilities
5. Support both dynamic and persistent agent patterns

## Intelligence Maintenance Process

### 1. Core Intelligence Updates
When updating core intelligence:
```bash
1. Edit the relevant module in guideline/core/
2. Ensure changes comply with framework.md requirements
3. Test that install.js properly embeds the updated intelligence
4. Verify commands work correctly after installation
```

### 2. Command-Specific Intelligence
Commands may include additional intelligence beyond core:
- Place command-specific patterns in the command template
- Core intelligence is embedded during installation
- Command-specific intelligence remains in the template

### 3. Intelligence Hierarchy
```
guideline/guide/framework.md    # Master framework (source of truth)
    ↓
guideline/core/*.md             # Shared core intelligence modules
    ↓
guideline/templates/*.md        # Command templates (embed core + specific)
    ↓
.claude/commands/guild/*.md     # Installed commands (fully embedded)
```

## Module Specifications

### workflow.md
**Purpose**: Orchestration and coordination patterns
**Must Include**:
- Human-in-the-middle approval patterns
- Parallel execution intelligence
- Coverage verification integration
- Agent coordination protocols

### agents.md  
**Purpose**: Agent creation and specialization
**Must Include**:
- Dynamic agent creation patterns
- Persistent agent architectures
- Persona frameworks
- Boundary detection intelligence

### verification.md
**Purpose**: Quality assurance and gap detection
**Must Include**:
- Coverage verification algorithms
- Gap detection patterns
- Satisfaction criteria
- Progressive validation

## Embedding Process

During installation (`install.js`):
1. Load all core modules from this directory
2. Process modules to remove headers
3. Embed into command templates
4. Write fully self-contained commands

## Validation Checklist

Before committing changes to core modules:
- [ ] Module follows framework.md requirements
- [ ] Imperative command language used throughout
- [ ] Verification capabilities included
- [ ] No external dependencies
- [ ] Properly integrates with other core modules
- [ ] Installation process successfully embeds module

## Version Control

Core modules represent the single source of truth for shared intelligence. Changes here affect all commands, so updates must be:
- Carefully reviewed
- Tested across all commands
- Backward compatible when possible
- Documented in commit messages
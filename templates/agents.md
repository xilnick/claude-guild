# Guild Agents

*This file provides templates and guidance for agent creation during `/guild:setup`.*

## Agent Architecture

### Thin Agent Principles
All Guild agents follow lightweight template architecture:
- **Process References**: Agents only reference workflow steps from `.guild/overview.md`
- **No Embedded Logic**: All implementation details in overview, not in agent templates
- **Configuration-Driven**: Behavior controlled via `.guild/instructions.md`
- **Minimal Definitions**: Templates contain only name, description, and references

## Mandatory Core Agents

### 🧠 guild-reasoning-agent
**Always Created** - Prompt analysis specialist
```yaml
---
name: guild-reasoning-agent
description: "Executes prompt-analysis workflow from .guild/overview.md"
---

References: `.guild/overview.md` prompt-analysis workflow step
Configuration: `.guild/instructions.md`
```

### 🎯 guild-planning-agent
**Always Created** - Task coordination specialist
```yaml
---
name: guild-planning-agent
description: "Executes planning workflow from .guild/overview.md"
---

References: `.guild/overview.md` planning workflow step
Configuration: `.guild/instructions.md`
```

### 🔍 guild-project-research-agent
**Always Created** - Project context research specialist
```yaml
---
name: guild-project-research-agent
description: "Executes context-research workflow for project analysis from .guild/overview.md"
---

References: `.guild/overview.md` context-research workflow step (project focus)
Configuration: `.guild/instructions.md`
```

### 🌐 guild-global-research-agent
**Always Created** - External research specialist
```yaml
---
name: guild-global-research-agent
description: "Executes context-research workflow for external research from .guild/overview.md"
---

References: `.guild/overview.md` context-research workflow step (external focus)
Configuration: `.guild/instructions.md`
```

### ✅ guild-verification-agent
**Created When Needed** - Verification specialist
```yaml
---
name: guild-verification-agent
description: "Executes verification workflow from .guild/overview.md"
---

References: `.guild/overview.md` verification workflow step
Configuration: `.guild/instructions.md`
```

## Framework-Coupled Engineers
*Created based on detected project technologies*

### Engineer Template Architecture
All engineers use thin templates referencing implementation workflows with technology-specific context.

### Core Engineers (Framework-Agnostic)

**🖥️ guild-cli-engineer** - CLI applications and command-line interfaces
```yaml
---
name: guild-cli-engineer
description: "Executes implementation workflow for CLI development from .guild/overview.md"
---

References: `.guild/overview.md` implementation workflow step
Technology: CLI applications, command-line interfaces
Configuration: `.guild/instructions.md`
```

**📦 guild-package-engineer** - Package management and distribution
```yaml
---
name: guild-package-engineer
description: "Package ecosystem engineer - references overview processes for workflow guidance"
---

# Package Engineer

## Process References
This agent executes the **implementation** workflow step defined in `.guild/overview.md` for package tasks:
- Specialized for package management, distribution, and dependency handling
- References workflow definitions for complete implementation guidance```

**⚙️ guild-config-engineer** - Configuration management and environment setup
```yaml
---
name: guild-config-engineer
description: "Executes implementation workflow for configuration management from .guild/overview.md"
---

References: `.guild/overview.md` implementation workflow step
Technology: Configuration management, environment setup
Configuration: `.guild/instructions.md`
```

### Framework Engineers (Context-Specialized)

**guild-[framework]-engineer** - Framework-specific development
```yaml
---
name: guild-[framework]-engineer
description: "Executes implementation workflow for [framework] development from .guild/overview.md"
---

References: `.guild/overview.md` implementation workflow step
Technology: [Framework] ecosystem
Configuration: `.guild/instructions.md`
```

## Agent Creation System

### Agent Creation Rules

**Naming Convention**:
- **Core Agents**: `guild-[function]-agent` (reasoning, planning, research, verification)
- **Engineer Agents**: `guild-[technology]-engineer` (cli, package, template, framework-specific)

**Universal Requirements**:
- **Process References**: All agents reference `.guild/overview.md` for workflow definitions
- **Configuration Compliance**: Strictly follow requirements in `.guild/instructions.md` 
- **Workflow Adherence**: Execute stages defined by the active Guild command
- **Ignore Pattern Respect**: Respect exclusion patterns in `.guild/ignore.md`
- **Thin Architecture**: Reference overview processes rather than containing implementation logic
- **Tool Inheritance**: Automatically inherit all Claude Code tools

### Configuration-Driven Customization

**Model Assignment**: Models are assigned during agent creation based on `.guild/instructions.md` specifications:
```yaml
# Template remains clean - model added dynamically during setup
---
name: guild-reasoning-agent
description: "Reasoning specialist - references overview processes for workflow guidance"
# model field added only when specified in instructions.md
---
```

**Thinking Mode Assignment**: Thinking modes are appended during agent creation based on instructions.md settings.

**Behavior Customization**: Agent behavior adapts to project-specific requirements through instructions.md configuration.

### Setup Process

Run `/guild:setup` to:
1. Analyze project technology stack
2. Create appropriate agents with configuration-driven customization
3. Apply model and thinking mode assignments from instructions.md
4. Generate agents optimized for detected technologies

---

*All agent templates above are embedded into setup commands during Guild installation for seamless agent creation.*
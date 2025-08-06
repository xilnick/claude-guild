# Claude Guild

Simple comprehensive workflow integration for Claude Code via custom commands.

## What is Claude Guild?

Claude Guild installs 6 simple commands in Claude Code that activate a **Multi-stage comprehensive workflow** for every development task.

## Installation

```bash
# Install commands in any project
npx claude-guild

# Set up project-specific agents
/guild:setup
```

## Commands

- **`/guild:setup`** - Analyze project and set up comprehensive workflow
- **`/guild:instructions`** - Manage project instructions and configuration options
- **`/guild "task"`** - Execute any task with simplified 3-stage workflow (fast)
- **`/guild:full "task"`** - Execute any task with complete 8-stage comprehensive workflow
- **`/guild:refactor "description"`** - Execute refactoring with specialized 4-stage workflow
- **`/guild:research`** - Research context engine with available MCP server integration

## How It Works

1. **Install**: `npx claude-guild` copies 6 command files to `.claude/commands/`
2. **Setup**: `/guild:setup` examines your project and creates .guild structure
3. **Smart Detection**: Automatically creates appropriate engineers (including UI engineer for UI apps) and architects
4. **Architect-Led Planning**: Global architect coordinates all planning with specialized architects using comprehensive analysis
5. **Workflow Activation**: Use `/guild "task"` for fast 3-stage workflow or `/guild:full "task"` for complete 8-stage comprehensive process

## Comprehensive Workflow

Guild provides two workflow options:

### Simplified Workflow (`/guild "task"`)
Fast 3-stage process for most development tasks:
1. **🧠 Prompt Analysis & Reasoning** - Analyze prompt for errors, clarity, and completeness
2. **🔍 Context Research** - Gather comprehensive background and technical context
3. **🎯 Planning & Implementation** - Unified engineers execute with shared context

### Full Workflow (`/guild:full "task"`)
Complete 8-stage process with **MANDATORY PARALLEL EXECUTION** and **COMPREHENSIVE ANALYSIS**:

1. **🧠 Planning** - ALL architects in parallel using comprehensive analysis design optimal approaches
2. **🎯 Intelligent Routing** - Task router analyzes prompts for errors/clarity, then forces parallel execution of all compatible agents
3. **🔨 Implementation** - Parallel agent execution with comprehensive analysis
4. **🐛 Error Checking** - Concurrent validation with parallel comprehensive error analysis
5. **🔧 Error Fixing** - Parallel error resolution with systematic comprehensive approaches
6. **♻️ Refactor Planning** - Parallel architect analysis with comprehensive optimization strategies
7. **✨ Cleanup** - Concurrent improvements with parallel comprehensive refactoring
8. **✅ Validation** - Parallel quality assurance with comprehensive analysis

## Universal Support

Works with any:
- **Languages**: JavaScript, Python, Go, Rust, PHP, Java, C#, etc.
- **Frameworks**: React, Django, Laravel, Spring, Express, etc.
- **UI Systems**: Design Systems, Component Libraries, CSS Frameworks, etc.
- **Architectures**: Web apps, APIs, mobile, desktop, microservices

## Intelligent Task Analysis & Architect-Driven Approach

- **Task Router**: Analyzes every prompt for logical errors, typos, and clarity issues using comprehensive analysis
- **Global Architect**: Coordinates all architectural decisions and approach design  
- **Specialized Architects**: Handle domain-specific design (system, data, security, API, etc.)
- **Comprehensive Analysis**: All agents use deep analysis and multiple approach evaluation
- **Codebase Maintenance**: Architects can be assigned to maintain specific application areas
- **Instructions Integration**: Use `/guild:instructions` to assign architects to codebase sections

## License

MIT

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.
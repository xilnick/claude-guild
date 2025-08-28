# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Main Principles

The Guild system is built on simple, focused architecture:

- **install.js must not contain any templates** - Only handles command installation  
- **ALWAYS modify guideline first, then update templates, commands and install.js**
- **Simple separation** - Setup creates agents, workflow invokes agents

### **Core Philosophy**
- **Framework-Agnostic**: Works with any framework, library, or tool
- **Project-Agnostic**: Adapts to any project structure or domain
- **Technology-Agnostic**: Supports all programming languages and tech stacks
- **Prompt-First Design**: Intelligence embedded in agents and workflows, not hardcoded logic

### **Architecture Principles**
- **Simple Separation**: Setup creates specialized agents, workflow invokes them
- **Agent Intelligence**: Specialized agents contain domain-specific knowledge  
- **Minimal Coordination**: Agents work independently with clear boundaries
- **Direct Execution**: No complex orchestration or hierarchical coordination

### **Implementation Focus**
- **Setup**: Analyzes projects and creates specialized agents with embedded intelligence
- **Workflow**: Simple reasoning then parallel agent invocation
- **Agents**: Contain specialization logic for their technology domains
- **Configuration**: Human-readable settings control behavior

## Guild System Architecture

The Guild system uses **simple agent-based architecture**:

### **Current Structure**
```
guideline/
├── core/                    # Simple core modules  
│   ├── workflow.md         ← Simple reasoning + parallel execution
│   └── agents.md           ← Agent specialization patterns
└── templates/               # Command templates
    ├── setup-command.md    ← Agent creation and project analysis
    ├── workflow-command.md ← Simple reasoning + agent invocation
    ├── agent-command.md    ← Alternative workflow template
    ├── agent-templates.md  ← Agent template patterns
    ├── instructions-template.md ← Configuration template
    ├── instructions-command.md ← Configuration management
    └── ignore-command.md   ← Ignore pattern management
```

### **Simple Development Workflow**
1. **Modify core modules** (`guideline/core/`) for workflow or agent changes
2. **Update command templates** (`guideline/templates/`) for command behavior
3. **Run install.js** to regenerate commands from templates  
4. **Test execution** with various project types

### **Key Architecture Features**
- **Simple Agent Creation** - Setup analyzes project and creates specialized agents
- **Direct Agent Invocation** - Workflow reasons then invokes appropriate agents
- **Embedded Intelligence** - Agents contain domain-specific knowledge
- **Minimal Coordination** - Clear boundaries prevent conflicts
- **Configuration Driven** - Behavior controlled by `.guild/instructions.md`

---

## Development Guidelines

- **Do what has been asked; nothing more, nothing less**
- **NEVER create files unless absolutely necessary**  
- **ALWAYS prefer editing existing files over creating new ones**
- **NEVER proactively create documentation files** unless explicitly requested

## Guild System Rules

- **Core modules are authoritative** - Edit `guideline/core/` for workflow changes
- **Templates define commands** - Update `guideline/templates/` for command changes
- **Setup creates agents** - Agent creation happens during project setup
- **Workflow invokes agents** - Simple execution through agent specialization
- **Trust Claude's intelligence** - Minimal rules, maximum adaptation

## System Responsibilities

### **install.js** (installation only):
- Creates `.claude/commands/guild/` directory
- Loads core modules and embeds them in command templates
- Generates commands with embedded intelligence
- **No configuration files** - commands are self-contained

### **Setup Command** (`/guild:setup`):
- **Project Analysis**: Detect technologies, frameworks, and patterns
- **Agent Creation**: Generate specialized agents in `.claude/agents/guild/`  
- **Configuration**: Create `.guild/instructions.md` with project settings
- **Intelligence**: Uses core agents module for specialization patterns

### **Workflow Command** (`/guild`):
- **Reasoning Phase**: Understand task requirements (ultrathink/sequential)
- **Agent Invocation**: Call appropriate specialized agents in parallel
- **Result Integration**: Combine agent outputs into final solution
- **Intelligence**: Uses core workflow module for execution patterns

### **Management Commands** (`/guild:instructions`, `/guild:ignore`):
- **Configuration Management**: Modify `.guild/instructions.md` settings
- **Ignore Patterns**: Manage `.guild/ignore.md` file patterns
- **Intelligence**: Simple configuration and pattern management

## Simple Execution Flow

### 1. Setup Phase
```
User runs: /guild:setup
↓
Setup analyzes project (technologies, patterns, structure)
↓  
Setup creates specialized agents based on detected patterns
↓
Setup creates .guild/instructions.md configuration
```

### 2. Execution Phase  
```
User runs: /guild "task description"
↓
Workflow reasons about task (ultrathink/sequential)
↓
Workflow identifies which agents are needed
↓
Workflow invokes agents in parallel
↓
Agents execute with their specialized knowledge
↓
Results are integrated and returned
```

### 3. Benefits
- **Clear Separation**: Setup creates, workflow executes
- **Specialized Intelligence**: Agents contain domain expertise  
- **Simple Coordination**: Minimal overhead, clear boundaries
- **Fast Execution**: Direct agent invocation without orchestration
- **Easy Maintenance**: Simple architecture is easy to understand and modify

## Language & Technology Verification

**CRITICAL**: When working with language or technology-specific content:

### **Correctness Questions**
Before implementing or modifying language/technology-specific features, ask:
- **"Is this terminology correct for [language/technology]?"**
- **"Are these patterns idiomatic for [language/technology]?"** 
- **"Do these conventions match [language/technology] best practices?"**

### **When to Ask**
Ask verification questions when:
- Working with unfamiliar languages or technologies
- Updating language-specific configurations
- Creating technology-specific workflows
- Setting up language conventions or patterns
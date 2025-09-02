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
├── core/                    # Core intelligence modules  
│   ├── workflow.md         ← Team orchestration and coordination patterns
│   └── agents.md           ← Intelligent specialist creation patterns
└── templates/               # Command templates
    ├── setup-command.md    ← Project analysis and team building
    └── workflow-command.md ← Team coordination and task execution
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
- Creates `.claude/commands/` directory structure
- Loads core modules and embeds intelligence in command templates
- Generates self-contained commands with embedded domain knowledge
- **Pure intelligence-driven** - commands adapt through analysis, not configuration

### **Setup Command** (`/guild:setup`):
- **Project Discovery**: Deep analysis of codebase, architecture, and technology patterns
- **Intelligent Team Building**: Create custom specialists perfectly matched to project requirements  
- **Configuration**: Generate optional `.guild/instructions.md` for team preferences
- **Intelligence**: Uses core modules to build teams through pure project analysis

### **Workflow Command** (`/guild`):
- **Task Analysis**: Deep understanding of requirements within project context (ultrathink/sequential)
- **Team Coordination**: Intelligent selection and coordination of custom specialists
- **Parallel Execution**: All specialists work simultaneously with intelligent coordination
- **Intelligence**: Uses core workflow module for adaptive team orchestration patterns



## Simple Execution Flow

### 1. Setup Phase
```
User runs: /guild:setup
↓
Deep project discovery (codebase patterns, architecture, domain requirements)
↓  
Build custom specialist teams perfectly matched to project characteristics
↓
Generate optional .guild/instructions.md for team preferences
```

### 2. Execution Phase  
```
User runs: /guild "task description"
↓
Task analysis within project context (ultrathink/sequential reasoning)
↓
Intelligent team selection based on task requirements and project characteristics
↓
Coordinated parallel execution with custom specialists
↓
Specialists execute with project-specific domain expertise
↓
Results integrated and delivered with quality assurance
```

### 3. Benefits
- **Intelligence-First Design**: Setup discovers and builds, workflow coordinates and executes
- **Perfect Specialist Matching**: Every team member designed for your specific project needs  
- **Adaptive Coordination**: Intelligent team coordination based on project characteristics
- **Maximum Effectiveness**: Custom specialists vs generic assistance
- **Effortless Evolution**: Teams adapt automatically as project requirements change

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
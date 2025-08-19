# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Main Principles

The Guild system is built on these fundamental principles:

- **install.js must not contain any templates** - Only handles command installation
- **ALWAYS modify guideline first, then update templates, commands and install.js**
- **Intelligence separation** - Setup and execution commands have focused, relevant intelligence

### **Core Philosophy**
- **Framework-Agnostic**: Works with any framework, library, or tool
- **Project-Agnostic**: Adapts to any project structure or domain
- **Technology-Agnostic**: Supports all programming languages and tech stacks
- **Prompt-First Design**: Intelligence and workflows are defined through prompts, not hardcoded logic

### **Architecture Principles**
- **Intelligence Separation**: Setup and execution intelligence are separated for focused commands
- **Consolidated Management**: All system intelligence lives in well-defined locations
- **Maintainable Design**: Clean separation of concerns for easy understanding and modification
- **Self-Documenting**: The system's structure inherently documents its behavior

### **Implementation Focus**
- Agents and workflows are created through **prompt engineering**, not programming
- System adapts to **any project context** through intelligent analysis
- All configurations are **human-readable and editable**
- Changes propagate through a **defined, testable workflow**

## Guild System Development Workflow

The Guild system uses **intelligence separation architecture** where setup and execution commands have focused, relevant intelligence.

### **Development Architecture**

The Guild system uses **separated intelligence embedding**:
- **Shared modules** contain intelligence needed by both setup and execution
- **Setup modules** contain project configuration and agent generation intelligence
- **Execution modules** contain task planning, coordination, and workflow intelligence
- **Templates** embed appropriate intelligence modules based on command purpose

### **🔄 INTELLIGENCE SEPARATION WORKFLOW**

When making changes to Guild intelligence or architecture:

#### **1. Intelligence Separation Architecture**

```
guideline/
├── shared/                  # Intelligence for both setup & execution
│   ├── principles.md        ← Core Guild philosophy
│   └── mcp-integration.md   ← MCP integration patterns
├── setup/                   # Setup command intelligence only
│   ├── agents.md           ← Agent generation and composition
│   └── testing.md          ← Testing setup patterns
├── execution/               # Execution command intelligence only
│   ├── planning-router.md   ← Planning router intelligence
│   ├── workflows.md        ← Workflow orchestration patterns
│   └── parallel.md         ← Parallel execution strategies
└── templates/               # Command templates with focused intelligence
    ├── setup-command.md     ← Embeds: shared + setup intelligence
    ├── agent-command.md     ← Embeds: shared + execution intelligence
    ├── instructions-command.md ← Embeds: shared intelligence (management)
    ├── ignore-command.md    ← Embeds: shared intelligence (management)
    ├── instructions-template.md ← User configuration template
    └── agent-templates.md   ← Agent template patterns
```

#### **2. Intelligence-Focused Development Workflow**

**Step 1 - Identify Intelligence Type**:

🎯 **Shared Intelligence** (affects both setup and execution):
- Core Guild philosophy and principles
- MCP integration patterns
- Cross-command concepts

📋 **Setup Intelligence** (affects project configuration):
- Agent generation patterns
- Project analysis logic
- Configuration creation
- Testing setup patterns

⚡ **Execution Intelligence** (affects task execution):
- Planning router logic
- Workflow orchestration
- Parallel coordination strategies
- Task decomposition patterns

🏗️ **Template Structure** (affects command layout):
- Command organization and sections
- User interface and help text
- Template embedding structure

**Step 2 - Edit Appropriate Modules**:
```bash
# Shared intelligence changes (affects all commands):
vim guideline/shared/principles.md      # Core philosophy
vim guideline/shared/mcp-integration.md # MCP patterns

# Setup intelligence changes (affects setup/management commands):
vim guideline/setup/agents.md           # Agent generation logic
vim guideline/setup/testing.md          # Testing setup patterns

# Execution intelligence changes (affects execution commands):
vim guideline/execution/planning-router.md  # Planning logic
vim guideline/execution/workflows.md        # Workflow patterns
vim guideline/execution/parallel.md         # Parallel strategies

# Template structure changes (affects command layout):
vim guideline/templates/setup-command.md        # Setup command structure
vim guideline/templates/agent-command.md        # Agent command structure
vim guideline/templates/instructions-command.md # Instructions command structure
vim guideline/templates/ignore-command.md       # Ignore command structure
```

**Step 3 - Test Intelligence Embedding**:
```bash
# Test installation and command generation with separated intelligence
node install.js --no-interaction --scope project

# Verify commands are generated with appropriate intelligence
ls .claude/commands/guild/setup.md         # Should have shared + setup intelligence
ls .claude/commands/guild/agent.md         # Should have shared + execution intelligence
ls .claude/commands/guild/instructions.md  # Should have shared intelligence only
ls .claude/commands/guild/ignore.md        # Should have shared intelligence only
```

### **⚡ Benefits of Intelligence Separation**

✅ **Focused Commands**: Each command gets only relevant intelligence, not bloated with unrelated logic  
✅ **Independent Evolution**: Setup and execution intelligence can evolve separately without conflicts  
✅ **Reduced Complexity**: Commands are simpler and more maintainable  
✅ **Clear Ownership**: Obvious which intelligence affects which commands  
✅ **Faster Development**: Changes in one area don't require understanding all areas  
✅ **Better Performance**: Commands load faster with less irrelevant intelligence

### **🚨 Intelligence Separation Success Factors**

1. **Think about command purpose** - Is this setup or execution intelligence?
2. **Keep intelligence focused** - Don't mix setup and execution logic
3. **Use shared for common concepts** - Only put truly shared intelligence in shared/
4. **Test intelligence embedding** - Validate commands get appropriate intelligence
5. **Maintain clear boundaries** - Setup creates/configures, execution plans/coordinates

### **⚠️ Common Anti-Patterns to Avoid**

❌ **Intelligence Mixing**: Putting execution logic in setup modules or vice versa  
❌ **Over-sharing**: Putting setup-specific logic in shared modules  
❌ **Template Bloat**: Embedding irrelevant intelligence in command templates  
❌ **Boundary Confusion**: Not understanding which command needs which intelligence  

---

## Development Guidelines

- **Do what has been asked; nothing more, nothing less**
- **NEVER create files unless absolutely necessary**  
- **ALWAYS prefer editing existing files over creating new ones**
- **NEVER proactively create documentation files** unless explicitly requested

## Guild System Rules

- **Intelligence modules are authoritative** - Edit them directly for changes
- **Maintain intelligence separation** - Keep setup and execution intelligence separate
- **Test after changes** - Validate installation and command generation
- **Trust Claude** - Let Claude's intelligence handle complexity rather than hardcoding

## Responsibility Separation

### **install.js Responsibilities** (system installation only):
- Creates `.claude/commands/guild/` directory structure
- Loads intelligence modules from separated structure
- Generates commands with embedded intelligence
- **Does NOT** create project files, agents, or `.guild/` directories

### **Setup Command Responsibilities** (project configuration only):
- Creates `.guild/` directory and config files
- Generates agents in `.claude/agents/guild/`
- Analyzes project and creates appropriate configuration
- **Uses** setup + shared intelligence only

### **Execution Commands Responsibilities** (task execution only):
- Reads existing configuration and agents
- Plans and coordinates task execution
- Manages workflow orchestration and parallel processing
- **Uses** execution + shared intelligence only

### **Management Commands Responsibilities** (configuration management):
- Manages `.guild/instructions.md` and `.guild/ignore.md` files
- Provides project configuration interfaces
- **Uses** shared intelligence only

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
# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Main Principles

The Guild system is built on these fundamental principles:

### **Core Philosophy**
- **Framework-Agnostic**: Works with any framework, library, or tool
- **Project-Agnostic**: Adapts to any project structure or domain
- **Technology-Agnostic**: Supports all programming languages and tech stacks
- **Prompt-First Design**: Intelligence and workflows are defined through prompts, not hardcoded logic

### **Architecture Principles**
- **Structured Intelligence**: Everything is organized in clear, modular components
- **Consolidated Management**: All system intelligence lives in well-defined locations
- **Maintainable Design**: Clean separation of concerns for easy understanding and modification
- **Self-Documenting**: The system's structure inherently documents its behavior

### **Implementation Focus**
- Agents and workflows are created through **prompt engineering**, not programming
- System adapts to **any project context** through intelligent analysis
- All configurations are **human-readable and editable**
- Changes propagate through a **defined, testable workflow**

## Guild System Development Workflow

**SIMPLIFIED**: The Guild system now uses a streamlined approach focused on core modules only.

### **Development Architecture**

The Guild system uses a **template-based intelligence architecture** where:
- **Core modules** in `guideline/core/` contain all intelligence and behavior
- **Command templates** in `guideline/templates/` define command structure  
- **Guild commands** are dynamically generated from templates + embedded intelligence
- **No hardcoded logic** - templates contain structure, modules contain intelligence

### **🔄 SIMPLIFIED DEVELOPMENT WORKFLOW**

When making changes to Guild intelligence or architecture:

#### **1. Template-Based Intelligence System**

The Guild system uses templates + intelligence embedding:

```
guideline/
├── core/                    # Intelligence modules (source of truth)
│   ├── principles.md        ← Core philosophy and principles
│   ├── agents.md           ← Generic agent framework  
│   ├── workflows.md        ← Essential workflow patterns
│   ├── parallel.md         ← Parallel execution strategies
│   ├── planning-router.md   ← Planning router intelligence
│   ├── testing.md          ← Testing strategies
│   ├── mcp-integration.md   ← MCP integration patterns
│   └── instructions-template.md ← User configuration template
└── templates/               # Command templates with placeholders
    ├── setup-command.md     ← /guild:setup template
    └── guild-agent-command.md ← /guild:agent template
```

#### **2. Development Workflow**

**For Intelligence Changes** (behavior, logic, patterns):
- Edit modules in `guideline/core/` - they contain all Guild intelligence
- Changes automatically flow to all generated commands

**For Command Structure Changes** (layout, format, sections):
- Edit templates in `guideline/templates/` 
- Templates use `{{module-name}}` placeholders for intelligence embedding

**Guidelines**:
- **Intelligence**: Edit core modules - they are the authoritative source
- **Structure**: Edit templates for command layout and organization
- **Both embedded**: Templates + modules = final commands with full intelligence
- Test composition after changes

#### **3. Validate Command Generation**
```bash
# Test the installation process
node install.js --no-interaction --scope project

# Verify both commands are generated with embedded intelligence
ls .claude/commands/guild/setup.md    # Generated from setup-command.md template
ls .claude/commands/guild/guild.md    # Generated from guild-agent-command.md template
```

### **✅ CORRECT WORKFLOW**

**Task**: Update Guild intelligence or command structure

**Step 1 - Identify Change Type**:
```bash
# Intelligence changes (behavior, logic, patterns):
vim guideline/core/agents.md           # Agent behavior
vim guideline/core/workflows.md        # Workflow patterns
vim guideline/core/principles.md       # Core principles
vim guideline/core/parallel.md         # Parallel execution strategies

# Structure changes (command layout, sections):
vim guideline/templates/setup-command.md       # Setup command structure
vim guideline/templates/guild-agent-command.md # Guild agent command structure
```

**Step 2 - Test Command Generation**:
```bash
# Test installation and command generation with embedded intelligence
node install.js --no-interaction --scope project
```

### **⚡ Benefits of Template-Based Intelligence**

✅ **Embedded Intelligence**: All commands get full guideline intelligence automatically  
✅ **Separation of Concerns**: Templates handle structure, modules handle behavior  
✅ **Single Source of Truth**: Core modules define all Guild intelligence  
✅ **Consistent Approach**: Both setup and guild:agent commands use same pattern  
✅ **Easy Updates**: Change intelligence once, flows to all generated commands  
✅ **No Hardcoded Logic**: Templates contain structure, modules contain intelligence

### **🚨 Key Success Factors**

1. **Intelligence in modules** - Edit `guideline/core/` for behavior changes
2. **Structure in templates** - Edit `guideline/templates/` for layout changes  
3. **Test command generation** - Validate installation produces correct commands
4. **No hardcoded logic** - Templates + modules = complete embedded intelligence
5. **Maintain separation** - Keep structure (templates) and intelligence (modules) separate

---

## Development Guidelines

- **Do what has been asked; nothing more, nothing less**
- **NEVER create files unless absolutely necessary**  
- **ALWAYS prefer editing existing files over creating new ones**
- **NEVER proactively create documentation files** unless explicitly requested

## Guild System Rules

- **Core modules are authoritative** - Edit them directly for changes
- **Keep it simple** - Prefer simple patterns over complex specifications
- **Test after changes** - Validate installation and setup generation
- **Trust Claude** - Let Claude's intelligence handle complexity rather than hardcoding

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

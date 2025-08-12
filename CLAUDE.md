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

The Guild system uses a **simplified core architecture** where:
- **Core modules** in `guideline/core/` are the single source of truth
- **Setup command** is dynamically composed from core modules
- **No complex generation** - just maintain core modules directly

### **🔄 SIMPLIFIED DEVELOPMENT WORKFLOW**

When making changes to Guild intelligence or architecture:

#### **1. Update Core Modules Directly**
```
guideline/core/
├── principles.md        ← Core philosophy and principles
├── agents.md           ← Generic agent framework  
├── workflows.md        ← Essential workflow patterns
├── parallel.md         ← Parallel execution strategies
└── instructions-template.md ← User configuration template
```

**Guidelines**:
- Edit core modules directly - they are the authoritative source
- Keep modules focused and embeddable
- Ensure modules are self-contained and clear
- Test composition after changes

#### **2. Validate Setup Command Composition**
```bash
# Test the installation process
node install.js --test-mode

# Verify setup command generation works
npm run test-install
```

### **✅ CORRECT WORKFLOW**

**Task**: Update agent behavior or system principles

**Step 1 - Modify Core Module**:
```bash
# Edit the appropriate core module directly
vim guideline/core/agents.md    # For agent changes
vim guideline/core/workflows.md # For workflow changes
vim guideline/core/principles.md # For principle changes
```

**Step 2 - Test System**:
```bash
# Test installation and setup command generation
node install.js --test-mode
npm run test-install
```

### **⚡ Benefits of Simplified Approach**

✅ **Single Source of Truth**: Core modules are directly maintained  
✅ **No Complex Generation**: Simpler workflow without extraction scripts  
✅ **Easier Maintenance**: Direct editing without intermediate steps  
✅ **Clear Ownership**: Each module has clear responsibility  
✅ **Faster Iteration**: Immediate changes without generation delays

### **🚨 Key Success Factors**

1. **Edit core modules directly** - They are the authoritative source
2. **Keep modules focused** - Each module has a clear, specific purpose  
3. **Test after changes** - Validate installation and setup generation
4. **Maintain simplicity** - Prefer simple patterns over complex specifications

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
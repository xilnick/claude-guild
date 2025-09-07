# Guild System - Intelligent Task Execution Framework

## 🎯 Motivation & Problem Solved

### The Problem
Traditional AI coding assistants operate with generic, one-size-fits-all approaches that:
- **Lack project-specific intelligence** - No understanding of your codebase patterns
- **Execute without approval** - Changes made without user consent or understanding
- **Miss coverage gaps** - Incomplete implementations with no systematic verification
- **Work sequentially** - Slow, inefficient execution for complex tasks
- **Forget project context** - No learning or pattern recognition across sessions

### The Solution
The Guild System revolutionizes AI-assisted development through:
- **🧠 Intelligence-First Architecture** - Adaptive agents that learn your project's patterns
- **👤 Human-in-the-Middle Control** - Mandatory approval before ANY execution
- **✅ Verification-Assured Quality** - Comprehensive coverage tracking and gap detection
- **⚡ Parallel Execution** - 5-10x faster through intelligent agent coordination
- **📚 Project Knowledge Persistence** - Agents embed and retain project-specific expertise

## 🚀 Installation

### Quick Install
```bash
npx claude-guild@latest
```

### What Gets Installed
```
~/.claude/commands/
├── guild.md          # Main workflow command (symlink)
└── guild/
    ├── workflow.md   # Intelligent task execution
    └── setup.md      # Project agent creation
```

### First Use
```bash
# Analyze your project and create specialized agents
/guild:setup

# Execute any task with intelligent coordination
/guild "add user authentication with JWT"
```

## 📖 Core Concepts

### Mandatory Human Approval
**No execution without your explicit consent**
- System analyzes requirements and presents understanding
- You review approach and expected outcomes
- Execution blocked until you approve

### Dynamic Agent Creation
**Agents created based on YOUR project**
- Analyzes your technology stack and patterns
- Creates specialists matching your architecture
- Embeds your coding conventions and standards

### Comprehensive Verification
**Never ships incomplete work**
- Tracks coverage across all affected areas
- Detects gaps in implementation
- Ensures 100% satisfaction before completion

### Parallel Execution Intelligence
**5-10x faster for complex tasks**
- Identifies parallel execution opportunities
- Coordinates multiple specialists simultaneously
- Integrates results seamlessly

## 🏗️ Architecture

```
Framework Layer (Philosophy & Requirements)
    ↓
Core Intelligence Layer (Shared Patterns)
    ↓
Command Layer (Self-Contained Execution)
```

### Key Components
- **framework.md** - Master requirements and philosophy
- **core/*.md** - Shared intelligence modules
- **templates/*.md** - Command templates
- **install.js** - Embeds intelligence into commands

## 💡 Usage Examples

### Simple Task
```bash
/guild "fix the login bug"
# → Single specialist, 1-3 minutes
```

### Complex Feature
```bash
/guild "implement real-time chat with websockets"
# → Multiple specialists working in parallel, 5-8 minutes
# → Instead of 30-60 minutes sequential
```

### Project Setup
```bash
/guild:setup
# → Analyzes project, creates persistent agents
# → Future tasks execute with instant project knowledge
```

## 🔧 Configuration

### Command Metadata
Commands use Claude's configuration format:
```yaml
name: guild
model: sonnet
thinking_mode: ultrathink
description: "Natural task execution following @guideline/guide/framework.md"
```

### Core Modules
- **agents.md** - Specialist creation and coordination
- **verification.md** - Coverage tracking and validation

## 📚 Documentation

- [Framework Documentation](guideline/guide/framework.md) - Complete philosophy and requirements
- [Best Practices & Recommendations](guideline/guide/recommendations.md) - Anthropic's official guidance
- [Core Modules](guideline/core/README.md) - Intelligence module documentation
- [Compliance Verification](guideline/verify-compliance.md) - System validation guide

## 🤝 Contributing

The Guild System welcomes contributions that enhance intelligent task execution while maintaining mandatory requirements:

1. All changes must comply with framework.md requirements
2. Maintain human-in-the-middle approval patterns
3. Ensure verification framework integration
4. Follow Anthropic best practices

## 📄 License

[Your License Here]

## 🙏 Acknowledgments

Built on Anthropic's Claude AI best practices for structured prompting, XML patterns, and chain-of-thought reasoning.

---

**The Guild System** - Bringing intelligence, control, and verification to AI-assisted development.
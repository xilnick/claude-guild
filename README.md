# 🏛️ Claude Guild

[![npm version](https://img.shields.io/npm/v/claude-guild.svg)](https://www.npmjs.com/package/claude-guild)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Transform your Claude Code workflow with intelligent task orchestration, context-aware agents, and systematic development processes.

Claude Guild is a comprehensive workflow orchestration system for [Claude Code](https://claude.ai/code) that provides command-driven workflows with specialized agents. It transforms development by analyzing your project's technology stack and creating context-aware engineers that understand your codebase, components, and patterns.

## ✨ Features

- **🤖 Context-Aware Agents**: Automatically creates specialized engineers based on your tech stack
- **🔍 Deep Project Understanding**: Scans and catalogs components, APIs, and database schemas
- **⚡ Intelligent Task Routing**: Routes tasks to appropriate specialists with parallel execution
- **🎯 Interactive Mode**: Prompts for tasks when not provided, with context-aware suggestions
- **📋 Systematic Workflows**: Multi-stage processes for reasoning, planning, and implementation
- **🛠️ Customizable Configuration**: Adapt agents and workflows to your project needs
- **🚀 Framework Integration**: Deep understanding of React, Vue, Express, Next.js, and more

## 📦 Installation

### Quick Install (Recommended)

```bash
npx claude-guild@latest
```

This will:
1. Analyze your project structure
2. Detect technologies and frameworks
3. Create specialized agents for your stack
4. Set up the Guild workflow system

### Manual Installation

```bash
npm install -g claude-guild
claude-guild
```

## 🚀 Getting Started

### 1. Initial Setup

After installation, Guild analyzes your project and creates specialized agents:

```bash
# Guild automatically detects:
# - Frontend: React, Vue, Angular, Svelte
# - Backend: Express, Fastify, NestJS, FastAPI
# - Database: PostgreSQL, MongoDB, MySQL
# - Testing: Jest, Vitest, Pytest
# - Build: Webpack, Vite, Next.js
```

### 2. Using Guild Commands

#### Main Workflow Command

```bash
# Execute a task with automatic workflow stages
/guild "implement user authentication"

# Interactive mode - Guild prompts for task
/guild

# With specific workflow stages
/guild --test --verify "add payment processing"

# Apply changes project-wide
/guild --refactor --project "upgrade to TypeScript"
```

#### Available Flags

- `--refactor` - Enable code optimization stage
- `--fix` - Enable bug fixing stage  
- `--test` - Enable test creation stage
- `--verify` - Enable verification stage
- `--project` - Apply changes to entire project (default: focused)
- `--no-reason` - Skip reasoning stage
- `--no-plan` - Skip planning stage
- `--no-implement` - Planning only mode

#### Specialized Commands

```bash
# Planning workflow
/guild:plan "design new feature architecture"

# Bug fixing workflow
/guild:fix "users cannot log in"

# Specification creation
/guild:spec component "user profile component"

# View current agents
/guild:agents

# Update configuration
/guild:update
```

## 🎯 How It Works

### Workflow Stages

Guild executes tasks through systematic stages:

1. **🧠 Reasoning Stage**: Analyzes and clarifies requirements
2. **🔍 Research Stage**: Gathers context from your codebase
3. **📋 Planning Stage**: Creates strategic implementation plan
4. **🔨 Implementation Stage**: Executes with specialized engineers
5. **✅ Verification Stage**: Validates against requirements

### Context-Aware Engineers

Guild creates engineers that understand your specific setup:

```yaml
React Project Detection:
  guild-react-component-engineer:
    - Knows your existing components
    - Understands Material-UI/Ant Design APIs
    - Follows your styling patterns
    - Maintains consistency

Express API Detection:
  guild-express-api-engineer:
    - Maps existing routes
    - Understands middleware chains
    - Follows authentication patterns
    - Maintains API consistency
```

## ⚙️ Customization

### Project Configuration

Edit `.guild/instructions.md` to customize behavior:

```yaml
# Model preferences
models:
  reasoning: opus
  planning: opus
  implementation: sonnet

# Parallel execution
parallel:
  enabled: true
  max_agents: 5

# Project requirements
project:
  stack: [react, typescript, postgres]
  standards: [eslint, prettier]
  testing: jest

# Custom patterns
patterns:
  component_style: "functional"
  api_pattern: "REST"
  error_handling: "custom"
```

### Custom Agents

Add specialized agents for your needs:

```yaml
custom_agents:
  - name: guild-analytics-engineer
    role: "Analytics and tracking implementation"
    specialization: "Google Analytics, Mixpanel, custom events"
    
  - name: guild-security-engineer
    role: "Security audit and implementation"
    specialization: "OWASP, authentication, encryption"
```

### Workflow Customization

Modify workflow stages and behavior:

```yaml
workflow:
  always_verify: true
  auto_test: true
  require_approval: false
  
stages:
  research:
    depth: comprehensive
    include_external: true
    
  planning:
    detail_level: high
    include_alternatives: true
```

## 📚 Project Structure

After setup, Guild creates:

```
your-project/
├── .guild/
│   ├── instructions.md    # User configuration
│   ├── overview.md        # Workflow definitions
│   ├── agents.md          # Agent specifications
│   └── ignore.md          # File exclusion patterns
│
├── .claude/
│   └── agents/
│       └── guild/         # Specialized engineers
│           ├── guild-planning-agent.md
│           ├── guild-react-component-engineer.md
│           ├── guild-express-api-engineer.md
│           └── [other specialized agents]
│
└── CLAUDE.md              # Project instructions for Claude
```

## 🤝 Contributing

We welcome contributions! Here's how to get involved:

### Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/claude-guild.git
   cd claude-guild
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Make your changes following the workflow:
   - Update `GUIDELINE.md` first (specification)
   - Update templates in `templates/`
   - Update commands in `commands/`

### Contribution Guidelines

- **Specification First**: All changes must be specified in GUIDELINE.md
- **Template-Driven**: Use templates for consistency
- **Test Coverage**: Add tests for new features
- **Documentation**: Update relevant docs

### Testing

```bash
# Run tests
npm test

# Test installation
npm run test-install

# Lint code
npm run lint
```

## 🐛 Bug Reports & Feature Requests

### Reporting Issues

Please report issues on [GitHub Issues](https://github.com/anthropics/claude-guild/issues) with:

- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Your environment details

### Feature Requests

We love feature ideas! Please include:

- Use case description
- Expected behavior
- Why it would benefit users
- Possible implementation approach

### Feature Request Examples

- Custom workflow stages
- New framework support
- Enhanced parallel execution
- Integration with CI/CD
- Custom agent templates

## 🔧 Advanced Usage

### Parallel Execution

Guild optimizes complex tasks with parallel execution:

```bash
# Parallel frontend and backend implementation
/guild "implement real-time chat feature"
# Executes: React components || Express WebSocket || Database schema

# Parallel testing across components
/guild --test --project "comprehensive test coverage"
# Executes: Unit tests || Integration tests || E2E tests
```

### Interactive Mode Examples

When no task is provided, Guild enters interactive mode:

```
$ /guild --refactor

🏛️ Guild Ready - [React + Node.js Project Detected]

What task would you like to execute?

Examples for your project:
• Refactor state management to use Zustand
• Optimize component rendering performance  
• Restructure API routes for better organization
• Improve error handling across the application

Selected flags: --refactor
Available flags: --test, --verify, --project

Enter your task: _
```

### Planning Mode

Create detailed implementation plans:

```bash
/guild:plan "migrate from JavaScript to TypeScript"

# Creates: .guild/plans/migrate-to-typescript-[timestamp].md
# Includes: Phases, timelines, risks, dependencies
```

## 📖 Documentation

- **[GUIDELINE.md](./GUIDELINE.md)** - Complete technical specification
- **[Architecture](./docs/architecture.md)** - System design details
- **[Workflows](./docs/workflows.md)** - Workflow patterns
- **[Agents](./docs/agents.md)** - Agent specifications
- **[API Reference](./docs/api.md)** - Command reference

## 🌟 Why Claude Guild?

### Without Guild
- Manual task breakdown
- Context switching between files
- Inconsistent patterns
- Repetitive explanations
- Serial execution

### With Guild
- ✅ Automatic task orchestration
- ✅ Context-aware execution
- ✅ Consistent patterns
- ✅ Specialized engineers
- ✅ Parallel optimization

## 💡 Tips & Best Practices

1. **Start with Setup**: Let Guild analyze your project thoroughly
2. **Use Interactive Mode**: When unsure, let Guild guide you
3. **Leverage Flags**: Combine flags for comprehensive workflows
4. **Customize Configuration**: Adapt to your team's standards
5. **Plan Complex Tasks**: Use `/guild:plan` for large features
6. **Verify Critical Changes**: Use `--verify` flag for important tasks

## 📝 License

MIT License - see [LICENSE](./LICENSE) file for details.

## 🙏 Acknowledgments

- Built for [Claude Code](https://claude.ai/code) by Anthropic
- Inspired by modern development workflows
- Community-driven improvements

## 🔗 Links

- [NPM Package](https://www.npmjs.com/package/claude-guild)
- [GitHub Repository](https://github.com/anthropics/claude-guild)
- [Issue Tracker](https://github.com/anthropics/claude-guild/issues)
- [Claude Code Documentation](https://docs.anthropic.com/claude-code)

---

**Ready to transform your development workflow?**

```bash
npx claude-guild@latest
```

*Guild: Intelligent workflow orchestration for Claude Code* 🏛️
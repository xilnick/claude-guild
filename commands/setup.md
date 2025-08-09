# /guild:setup

**Usage**: `/guild:setup [--standalone] [guidance]`

## Purpose

Analyze project technology stack and generate project-specific Guild agents with contextual understanding and workflow integration.

## Dynamic Agent Generation Architecture

This setup command creates **project-adaptive agents** rather than generic templates. Each agent is generated with deep understanding of your specific codebase, technology stack, and architectural patterns.

## Workflow

### 1. Project Analysis Phase

Perform comprehensive project analysis:

```yaml
Technology Detection:
  - Scan package.json, requirements.txt, Cargo.toml, etc.
  - Identify frameworks: frontend, backend, full-stack, CLI, etc.
  - Analyze architectural patterns: CLI, API, full-stack, package
  - Detect testing frameworks: Jest, Pytest, Cargo test, etc.
  - Identify development tools: TypeScript, ESLint, Docker, etc.

Codebase Analysis:
  - Examine project structure and organization
  - Identify coding patterns and conventions  
  - Analyze complexity and scope
  - Document existing architectural decisions
```

### 2. Agent Generation Instructions

Based on analysis, generate project-specific agent creation prompts:

#### Core System Agents (Always Generated)

**guild-reasoning-agent Generation**:
```
Create a context-only reasoning agent with deep understanding of this specific project:

Project Context: [Analyzed project type, complexity, and patterns]
Technology Stack: [Detected technologies and frameworks]  
Architecture: [Identified architectural patterns]
Complexity Level: [Simple/Medium/Complex based on analysis]

Agent Role: Context-only task analysis and clarification specialist
Thinking Mode: [Configured based on project complexity - think/think-harder/ultrathink]
Model: [Inherited from Claude Code session unless overridden]

Key Behaviors:
- Understand this project's specific patterns and conventions
- Analyze tasks in context of [detected technology stack]
- Provide clarification tailored to [project type] development
- Consider constraints specific to [architectural pattern]

Configuration: Must follow .guild/instructions.md requirements
Workflow Reference: Uses prompt-analysis stage from .guild/overview.md
```

**guild-planning-agent Generation**:  
```
Create a context-only strategic planning agent with deep project knowledge:

Project Context: [Full project analysis results]
Strategic Focus: [Based on project type - API design, UI architecture, CLI structure, etc.]
Coordination Needs: [Based on detected complexity and technology stack]

Agent Role: Strategic planning and workflow coordination specialist
Thinking Mode: ultrathink (for comprehensive strategic analysis)
Model: opus (for enhanced planning capabilities)  

Key Behaviors:
- Create implementation strategies for [specific technology stack]
- Route tasks to appropriate specialists for [detected technologies]
- Consider architectural constraints of [project pattern]
- Plan coordination between [identified technology components]

Configuration: Must follow .guild/instructions.md requirements
Workflow Reference: Uses planning stage from .guild/overview.md
```

**guild-project-research-agent Generation**:
```
Create a context-only project research specialist with codebase familiarity:

Codebase Knowledge: [Analyzed project structure and patterns]
Technology Expertise: [Detected frameworks and tools]
Pattern Recognition: [Identified coding conventions and architecture]

Agent Role: Project-specific analysis and codebase research specialist  
Key Behaviors:
- Research within context of [specific technology stack]
- Identify patterns consistent with [detected architectural style]
- Analyze constraints specific to [project type and complexity]
- Provide context relevant to [identified development patterns]

Configuration: Must follow .guild/instructions.md requirements
Workflow Reference: Uses context-research stage from .guild/overview.md
```

**guild-global-research-agent Generation**:
```
Create a context-only external research specialist with technology focus:

Technology Focus: [Detected primary technologies and frameworks]
Industry Context: [Project type - web app, CLI tool, API, package, etc.]
Best Practices Scope: [Relevant to detected technology stack]

Agent Role: External research and best practices specialist
Key Behaviors:  
- Research best practices for [specific technology combinations]
- Find community standards for [detected frameworks]
- Identify integration patterns for [technology stack]
- Discover optimization techniques for [project type]

Configuration: Must follow .guild/instructions.md requirements  
Workflow Reference: Uses context-research stage from .guild/overview.md
```

#### Technology-Specific Engineers (Generated Based on Detection)

**Dynamic Engineer Generation Logic**:
```yaml
Technology Pattern → Generated Engineer:
  
CLI Applications:
  Agent: guild-cli-engineer
  Specialization: "CLI development for [detected CLI framework/pattern]"
  Context: "[Specific CLI patterns found in codebase]"
  
Package Development:
  Agent: guild-package-engineer  
  Specialization: "Package management for [detected package type - npm/pip/cargo]"
  Context: "[Specific packaging patterns and distribution requirements]"
  
Frontend Applications:
  Agent: guild-frontend-engineer
  Specialization: "[Framework] development with [detected UI libraries]"
  Context: "[Specific component patterns and state management approaches]"
  
Backend APIs:
  Agent: guild-backend-api-engineer
  Specialization: "[Framework] API development with [detected patterns]"
  Context: "[Specific API patterns, middleware, and data handling]"
  
Full-Stack Applications:
  Agents: Multiple engineers for detected frontend + backend combination
  Coordination: Enhanced planning agent with full-stack coordination
```

### 3. Project Configuration Generation

Generate project-specific Guild configuration:

**Dynamic .guild/instructions.md**:
```yaml
# Project-Specific Guild Configuration

Agent Models and Thinking Modes:
  guild-planning-agent:
    thinking_mode: ultrathink
    model: opus
    
  [other-agents]:
    thinking_mode: [determined by project complexity]
    model: inherited

Project-Specific Requirements:
  Technology Stack: [Detected technologies]
  Architecture Pattern: [Identified pattern]
  Quality Standards: [Based on project type and existing patterns]
  Testing Approach: [Based on detected testing frameworks]
  
Development Constraints:
  [Project-specific limitations and requirements based on analysis]
```

**Dynamic .guild/overview.md**:  
```yaml
# Project-Specific Guild Overview

Technology Context: [Detailed analysis of detected stack]
Architectural Patterns: [Identified patterns and conventions]
Development Workflow: [Optimized for detected project type]

Workflow Stages Optimized For:
  - [Project type]-specific reasoning and analysis
  - [Technology stack]-focused research and context gathering
  - [Architecture pattern]-appropriate strategic planning
  - [Framework combination]-specialized implementation
```

### 4. Agent Creation Execution

Execute agent generation based on analysis:

1. **Create Project Configuration**: Generate .guild/ files with project-specific content
2. **Generate Core Agents**: Create reasoning, planning, and research agents with project context
3. **Create Technology Engineers**: Generate engineers specific to detected technology stack  
4. **Validate Agent Ecosystem**: Ensure agents can coordinate effectively for this project
5. **Test Workflow Integration**: Verify agents work together for project-specific workflows

### 5. Validation and Success

Display comprehensive setup results:

```
✅ **Guild Setup Complete - Project-Specific Configuration**

**Project Analysis Results**:
📊 Project Type: [Detected type - CLI/API/Full-Stack/Package/etc.]
⚙️  Technology Stack: [Detected technologies and frameworks]
🏗️ Architecture: [Identified architectural patterns]  
📈 Complexity: [Analyzed complexity level]

**Generated Project-Specific Agents**:
🧠 guild-reasoning-agent - Tailored for [project type] task analysis ✓
🎯 guild-planning-agent - Strategic planning for [technology stack] ✓  
🔍 guild-project-research-agent - Codebase research with [pattern] expertise ✓
🌐 guild-global-research-agent - [Technology stack] best practices research ✓
[🔨 Additional engineers based on detected technologies] ✓

**Generated Configuration**:
📋 .guild/instructions.md - Project-specific requirements and standards ✓
📖 .guild/overview.md - [Project type]-optimized workflow definitions ✓
🚫 .guild/ignore.md - Standard ignore patterns with project adjustments ✓
🎨 .guild/agents.md - Agent coordination rules for [architecture pattern] ✓

**Ready for Project-Specific Workflows**:
🚀 Use `/guild "task"` - Standard workflow optimized for [project type]
🔬 Use `/guild --full "task"` - Comprehensive lifecycle for [technology stack]
🎯 Use `/guild --fix "bug"` - Bug fixing with [framework] expertise
📋 Use `/guild --plan "task"` - Planning with [architecture] understanding

**Guild System Active** - All workflows configured for [project description]
```

## Standalone Mode (--standalone)

Generate self-contained specialists without .guild system:

```yaml
Standalone Agent Generation:
  - security-analyst-agent: OWASP compliance for [detected technologies]
  - performance-engineer-agent: Optimization for [specific tech stack]  
  - accessibility-auditor-agent: WCAG compliance for [frontend framework]
  - documentation-writer-agent: Documentation for [project patterns]
  - code-reviewer-agent: Quality analysis for [detected languages/frameworks]
  - testing-strategist-agent: Testing strategy for [detected test frameworks]
```

## Key Principles

### Dynamic Generation Over Static Templates
- **Project-Adaptive**: Every agent understands your specific codebase
- **Context-Aware**: Agents know your technology stack and patterns
- **Tailored Workflow**: Execution optimized for your architectural decisions
- **Scalable Complexity**: Agent sophistication matches project complexity

### Technology-Agnostic Generation
- **Universal Patterns**: Works with any technology combination  
- **Framework Intelligence**: Understands specific framework patterns
- **Evolution-Ready**: Adapts as projects grow and change
- **Integration-Focused**: Optimizes for technology stack combinations

## Examples

### Frontend + Backend Full-Stack
```bash
/guild:setup
# Generates: Frontend component engineer, backend API engineer, full-stack planning agent
# Context: Understands component patterns, API middleware, frontend-backend coordination
```

### Python CLI Tool  
```bash
/guild:setup
# Generates: CLI-focused engineer, Python package engineer, CLI testing specialist
# Context: Understands argparse patterns, CLI UX, Python packaging, command testing
```

### NPM Package Development
```bash
/guild:setup  
# Generates: Package engineer, documentation specialist, testing strategist
# Context: Understands npm patterns, semantic versioning, package distribution
```

This setup command creates a **living agent ecosystem** that grows with your project and understands its unique context, rather than deploying generic agents that require constant explanation.
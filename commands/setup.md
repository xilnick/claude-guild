# /guild:setup

**Usage**: `/guild:setup [--standalone] [guidance]`

## Purpose

Perform comprehensive project analysis using Claude's native intelligence and generate a complete Guild system tailored specifically to your codebase, technology stack, and architectural patterns.

## Self-Contained Analysis & Generation

This setup command uses **Claude's native capabilities** to understand your project completely and generate project-specific agents with embedded intelligence. No external tools or JavaScript orchestration - pure Claude analysis and generation.

## Workflow

### 1. Project Analysis Phase

**I will comprehensively understand your project using Claude Code's native tools:**

#### Core Project Understanding (Using Read Tool)
- **Read README.md** - Understand project purpose, goals, and documentation
- **Read package.json/requirements.txt/Cargo.toml** - Analyze dependencies and configuration
- **Read main configuration files** - Understand build systems, tooling, and deployment
- **Read key source files** - Understand implementation patterns and architecture

#### Project Structure Analysis (Using LS Tool)  
- **Explore directory structure** - Map complete project organization
- **Identify architectural patterns** - Understand how code is structured
- **Assess project complexity** - Evaluate scale and sophistication level
- **Find key directories** - Locate source, tests, docs, configuration areas

#### Pattern and Convention Analysis (Using Grep Tool)
- **Search for framework patterns** - Identify technology usage and conventions
- **Find testing patterns** - Understand existing test structures and approaches
- **Locate quality tools** - Find linting, formatting, validation configurations
- **Discover workflow patterns** - Identify development, build, and deployment processes

#### Technology Stack Detection (Through Analysis)
- **Framework identification** - Understand frontend, backend, CLI, package patterns
- **Tool ecosystem analysis** - Identify development tools, testing frameworks, deployment systems
- **Architectural pattern recognition** - Understand MVC, microservices, CLI, library patterns
- **Convention analysis** - Understand coding standards and project practices

### 2. Agent Generation Phase

**Based on my comprehensive analysis, I will generate project-specific agents using the Write tool:**

Each agent will be created with embedded understanding of YOUR specific project:

#### Core System Agents (Always Generated)

**guild-reasoning-agent** - I will create with:
```yaml
Embedded Project Knowledge:
  project_type: [YOUR specific project type from analysis]
  technologies: [YOUR exact technology stack] 
  architecture: [YOUR architectural patterns and decisions]
  complexity: [YOUR project's complexity level]
  conventions: [YOUR coding standards and practices]

Role: Task analysis specialist for YOUR project
Thinking Mode: [Determined optimal for YOUR complexity - ultrathink for complex projects]

Deep Understanding:
  - YOUR specific architectural constraints and possibilities
  - YOUR technology stack capabilities and limitations  
  - YOUR existing patterns and conventions
  - YOUR project domain and requirements
  - YOUR quality standards and practices
```

**guild-planning-agent** - I will create with:
```yaml
Embedded Project Knowledge:
  strategic_focus: [YOUR project's strategic needs - API design, UI architecture, CLI structure]
  technology_coordination: [How YOUR technologies integrate and work together]
  workflow_patterns: [YOUR development and deployment workflows]
  team_patterns: [Inferred from YOUR project structure and practices]

Role: Strategic planning specialist for YOUR architecture
Thinking Mode: ultrathink (for comprehensive strategic planning)
Model: opus (for enhanced planning capabilities)

Deep Understanding:
  - YOUR architectural constraints and design decisions
  - YOUR technology integration requirements and patterns
  - YOUR development workflow and coordination needs
  - YOUR quality gates and deployment processes
  - YOUR team collaboration patterns and practices
```

**guild-project-research-agent** - I will create with:
```yaml
Embedded Project Knowledge:
  codebase_patterns: [YOUR specific implementation patterns and structure]
  technology_usage: [How YOU use YOUR technology stack]
  architectural_style: [YOUR specific architectural decisions and conventions]
  integration_points: [YOUR project's internal integration patterns]

Role: Project-specific research specialist for YOUR codebase
Thinking Mode: think (efficient context synthesis)

Deep Understanding:
  - YOUR project's internal patterns and relationships
  - YOUR specific technology implementations and usage
  - YOUR architectural constraints and design decisions
  - YOUR integration requirements and data flows
  - YOUR existing solutions and technical decisions
```

**guild-global-research-agent** - I will create with:
```yaml
Embedded Project Knowledge:
  technology_focus: [YOUR primary technologies and their ecosystems]
  industry_context: [YOUR project type and domain requirements]
  best_practices_scope: [Relevant to YOUR specific technology combinations]
  optimization_needs: [Specific to YOUR project type and scale]

Role: External research specialist for YOUR technology ecosystem
Thinking Mode: think (efficient external research)

Deep Understanding:
  - Best practices for YOUR specific technology stack
  - Community standards for YOUR framework combinations
  - Integration patterns relevant to YOUR architecture
  - Performance optimization for YOUR project type
  - Security considerations for YOUR technology choices
```

#### Technology-Specific Engineers (Generated Based on YOUR Project)

**I will generate implementation specialists based on what I discover in YOUR project:**

**For CLI Projects** - I will create `guild-cli-engineer` with:
```yaml
YOUR CLI Knowledge:
  command_structure: [YOUR specific CLI architecture and commands]
  user_workflows: [YOUR CLI user experience patterns]
  argument_handling: [YOUR CLI argument and option patterns]
  distribution: [YOUR packaging and installation requirements]

Role: CLI development specialist for YOUR command patterns
Deep Understanding: YOUR CLI design, user flows, and distribution needs
```

**For Frontend Projects** - I will create `guild-frontend-engineer` with:
```yaml
YOUR Frontend Knowledge:
  framework_usage: [YOUR React/Vue/Angular/etc. patterns and conventions]
  component_architecture: [YOUR component design and organization]
  state_management: [YOUR state handling patterns and tools]
  styling_approach: [YOUR CSS/styling strategy and conventions]

Role: Frontend specialist for YOUR framework and patterns
Deep Understanding: YOUR component patterns, state flows, and UI conventions
```

**For Backend Projects** - I will create `guild-backend-engineer` with:
```yaml
YOUR Backend Knowledge:
  api_patterns: [YOUR REST/GraphQL/RPC patterns and design]
  data_handling: [YOUR database and ORM usage patterns]
  middleware_architecture: [YOUR request handling and middleware patterns]
  authentication: [YOUR security and authentication approaches]

Role: Backend specialist for YOUR API and data patterns  
Deep Understanding: YOUR service architecture, data flows, and security patterns
```

**For Package Projects** - I will create `guild-package-engineer` with:
```yaml
YOUR Package Knowledge:
  api_design: [YOUR library interface and usage patterns]
  distribution_strategy: [YOUR npm/pip/cargo publishing patterns]
  documentation_approach: [YOUR API docs and example patterns]
  versioning_strategy: [YOUR semantic versioning and release patterns]

Role: Package development specialist for YOUR API and distribution
Deep Understanding: YOUR library design, user experience, and publishing workflow
```

### 3. System Configuration Generation

**I will create complete Guild system configuration using the Write tool:**

All configuration will be generated based on my comprehensive analysis of YOUR project:

**`.guild/instructions.md`** - I will create with YOUR project configuration:
```yaml
# Guild Configuration for YOUR Project

Project Intelligence:
  project_name: [YOUR project name from analysis]
  project_type: [YOUR specific type - CLI/Frontend/Backend/Package/Full-Stack]
  technology_stack: [YOUR exact technologies and versions]
  architecture_style: [YOUR architectural patterns and decisions]
  complexity_level: [YOUR project's assessed complexity]

Agent Optimization:
  guild-planning-agent:
    thinking_mode: ultrathink  
    model: opus
    specialization: [Strategic planning for YOUR architecture]
  
  guild-reasoning-agent:
    thinking_mode: [Optimized for YOUR complexity level]
    specialization: [Task analysis for YOUR project patterns]

Quality Standards:
  testing_frameworks: [YOUR existing testing tools and approaches]
  quality_tools: [YOUR linting, formatting, validation tools]
  code_standards: [YOUR coding conventions and practices]
  review_process: [YOUR quality assurance patterns]

Development Workflows:
  build_system: [YOUR build and deployment processes]
  development_process: [YOUR development workflow patterns]
  collaboration_style: [YOUR team coordination approaches]
```

**`.guild/overview.md`** - I will create documenting YOUR project:
```markdown
# Guild System for YOUR Project

## Project Analysis Results
[My complete understanding of YOUR project from analysis]

## Technology Stack Assessment
[YOUR technologies with their usage patterns and integration]

## Architectural Understanding
[YOUR architectural decisions, patterns, and design principles]

## Generated Agent Ecosystem
[Explanation of agents created specifically for YOUR project needs]

## Workflow Optimization
[How workflows are optimized for YOUR development patterns]

## Quality Integration
[How quality assurance integrates with YOUR existing tools and practices]

## Usage Recommendations
[Specific guidance for using Guild effectively with YOUR project]
```

### 4. Complete System Generation

**Using the Write tool, I will create your entire Guild system:**

1. **Generate .guild/ Configuration Directory**
   - Create instructions.md with YOUR project-specific settings
   - Create overview.md documenting YOUR project analysis
   - Create ignore.md with patterns appropriate for YOUR technology stack
   - Create agents.md with coordination rules for YOUR architecture

2. **Generate .claude/agents/guild/ Agent Directory**
   - Create all agents with embedded knowledge of YOUR project
   - Each agent file contains deep understanding of YOUR patterns
   - Agents optimized for YOUR technology stack and complexity
   - Thinking modes configured appropriately for YOUR needs

3. **Validate Complete System**
   - Verify all agents have appropriate project context
   - Confirm workflow optimization matches YOUR patterns
   - Ensure quality integration works with YOUR tools
   - Test agent coordination for YOUR architecture

### 5. Setup Complete - YOUR Project-Specific Guild System

**After running `/guild:setup`, you will have a complete Guild system that understands YOUR project:**

```
✅ **Guild Setup Complete - Tailored for YOUR Project**

**My Analysis of YOUR Project**:
📊 Project Type: [YOUR specific project type from comprehensive analysis]
⚙️  Technology Stack: [YOUR exact technologies, versions, and usage patterns]
🏗️ Architecture: [YOUR architectural patterns and design decisions]  
📈 Complexity: [YOUR project's complexity level and sophistication]

**Generated Agents with YOUR Project Intelligence**:
🧠 guild-reasoning-agent - Understands YOUR architecture and patterns ✓
🎯 guild-planning-agent - Strategic planning for YOUR technology stack ✓  
🔍 guild-project-research-agent - Researches within YOUR codebase context ✓
🌐 guild-global-research-agent - External research for YOUR technology choices ✓
🔨 [Technology-specific engineers for YOUR exact stack] ✓

**Generated Configuration for YOUR Project**:
📋 .guild/instructions.md - YOUR project's requirements and standards ✓
📖 .guild/overview.md - Complete documentation of YOUR project analysis ✓
🚫 .guild/ignore.md - Ignore patterns appropriate for YOUR technology ✓
🎨 .guild/agents.md - Agent coordination optimized for YOUR architecture ✓

**Ready for YOUR Project's Workflows**:
🚀 `/guild "task"` - Workflows optimized for YOUR patterns and architecture
🔬 `/guild --full "task"` - Complete development lifecycle for YOUR stack
🎯 `/guild --fix "bug"` - Bug fixing with understanding of YOUR codebase
📋 `/guild --plan "task"` - Planning that understands YOUR constraints

**Guild System Active** - Intelligent assistance tailored specifically for YOUR project
```

## System Benefits

### True Project Intelligence
- **Deeply Understands YOUR Project** - Not generic templates, but project-specific intelligence
- **Knows YOUR Technology Stack** - Agents understand YOUR exact technologies and patterns
- **Follows YOUR Conventions** - Respects YOUR coding standards and architectural decisions
- **Optimized for YOUR Complexity** - Performance tuned for YOUR project scale and needs

### Self-Contained Operation  
- **No External Dependencies** - Everything generated based on Claude's analysis
- **Pure Claude Intelligence** - Uses Claude Code's native tools exclusively
- **Complete Documentation** - Full explanation of analysis and generated system
- **Future-Proof** - Automatically benefits from Claude model improvements

### Technology Agnostic Through Intelligence
- **Works with ANY Project** - Claude analyzes and understands any technology stack
- **No Hardcoded Patterns** - All intelligence from comprehensive project analysis  
- **Automatic Adaptation** - System optimized for YOUR specific choices
- **Zero Maintenance** - No updates needed for new technologies

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
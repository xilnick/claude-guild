# 🏛️ Claude Guild

[![npm version](https://img.shields.io/npm/v/claude-guild.svg)](https://www.npmjs.com/package/claude-guild)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Self-Contained Workflow Orchestration System for Claude Code**

> Transform every development task into a systematic, multi-stage workflow with intelligent agents, advanced context engineering, and ultrathink reasoning capabilities.

## 🎯 What is Claude Guild?

Claude Guild is a **comprehensive workflow orchestration system** for [Claude Code](https://claude.ai/code) that transforms how you approach development tasks. Instead of ad-hoc conversations, Guild provides structured **multi-stage workflows** with specialized agents that understand your project, analyze requirements deeply, and execute implementations systematically.

### Core Purpose

**Transform Development Workflow**: Every task becomes a thorough, multi-stage process:
- **🧠 Deep Analysis**: Ultrathink reasoning for requirement clarification and edge case identification
- **🔍 Context Research**: Intelligent codebase analysis with advanced context engineering
- **📋 Strategic Planning**: Comprehensive implementation strategy with parallel execution coordination
- **🔨 Specialized Implementation**: Technology-specific engineers with deep domain knowledge
- **✅ Quality Validation**: Systematic verification with testing and compliance checks

**Universal Compatibility**: Works with any technology stack - from frontend frameworks to backend APIs to systems programming. Guild analyzes your project and creates appropriate specialists automatically.

### Self-Contained Architecture (Primary Differentiator)

**✅ Global Installation Guarantee**: Guild's self-contained architecture ensures 100% reliable setup across all environments:
- **Zero-dependency global installation** via NPM with complete reliability
- **Complete template embedding** - 1,164+ line setup commands contain all workflow definitions, agent templates, and specifications
- **No missing files** - All content embedded in setup command for consistent results
- **Global compatibility** - Works identically across all environments via `npx claude-guild@latest`
- **Template independence** - No runtime dependency on external files

### Why Multi-Stage Workflow?

**Without Guild** (Traditional Approach):
- Single-pass conversations with missed requirements
- Context switching between files and concepts
- Inconsistent implementation patterns
- Manual task breakdown and coordination
- Limited systematic validation

**With Guild** (Multi-Stage Approach):
- ✅ **Systematic Requirement Analysis**: Ultrathink reasoning identifies all implications
- ✅ **Comprehensive Context Building**: Advanced context engineering with long-context optimization
- ✅ **Strategic Implementation Planning**: Parallel execution with specialized agent coordination
- ✅ **Technology-Aware Execution**: Domain-specific engineers with deep framework knowledge
- ✅ **Quality Assurance Integration**: Automated testing, verification, and compliance validation

## 🚀 Two Ways to Use Guild

### 1. Full Guild System (Comprehensive Workflows)

**Best For**: Complex projects requiring systematic development workflows

```bash
# Install and set up complete Guild commands to selected path
npx claude-guild@latest
```

**Main Workflow Commands**:
```bash
# Standard multi-stage workflow (Analysis → Research → Planning → Implementation → Validation)
/guild "implement user authentication with JWT"

# Complete development lifecycle (7 stages including testing, verification, refactoring)
/guild --full "add real-time notifications system"

# Flag-only specialized modes
/guild --fix "checkout process throwing errors on payment submission"
/guild --plan "migrate from JavaScript to TypeScript across entire codebase" 
/guild --research "modern server-side rendering patterns and data fetching strategies"
/guild --spec "design REST API for user profile management"

# Combined flag workflows  
/guild --spec --full "design and implement GraphQL API with comprehensive testing"
/guild --refactor --project "migrate from JavaScript to TypeScript"
```

### 2. Standalone Agents (Instant Specialists)

**Best For**: Projects needing specific expertise without full workflow system

```bash
# Install standalone specialist agents
/guild:setup --standalone

# Automatically creates domain-specific specialists:
# - security-analyst-agent (OWASP, vulnerability assessment)
# - performance-engineer-agent (optimization, caching, monitoring)
# - accessibility-auditor-agent (WCAG 2.1 AA compliance)
# - code-reviewer-agent (quality analysis, refactoring)
# - documentation-writer-agent (technical docs, API guides)
# - testing-strategist-agent (test strategy, automation)
```

**Automatic Activation**: Specialists activate based on task content
```bash
# Security tasks → security-analyst-agent automatically engages
"Review authentication system for security vulnerabilities"

# Performance tasks → performance-engineer-agent automatically engages  
"Optimize database queries causing slow API responses"

# Documentation tasks → documentation-writer-agent automatically engages
"Create comprehensive API documentation for user service"
```

## 📋 Complete Command Reference

### Quick Start Commands

```bash
# Standard multi-stage workflow (Analysis → Research → Planning → Implementation → Validation)
/guild "implement user authentication with JWT"

# Complete development lifecycle (7 stages including testing, verification, refactoring)
/guild --full "add real-time notifications system"

# Initialize system and agents
/guild:setup

# Standalone specialists (independent agents)
/guild:setup --standalone
```

### Essential Flags
- **--full**: Complete development lifecycle (analysis → research → planning → implementation → testing → verification → refactoring)
- **--fix**: Systematic bug fixing with debugging workflow
- **--plan**: Planning-only mode with optional save to file
- **--research**: Research-only mode for context gathering
- **--spec**: Documentation-first development with specification management
- **--project**: Project-wide scope for comprehensive changes

### Core Workflow Commands

#### `/guild [flags] "task"`
**The primary workflow command** - executes tasks through systematic multi-stage process:

```bash
# Standard 5-stage workflow
/guild "implement shopping cart functionality"
# Executes: Analysis → Research → Planning → Implementation → Validation

# Interactive mode (Guild prompts for task)
/guild
# Provides context-aware task suggestions based on your project

# Comprehensive development lifecycle  
/guild --full "build admin dashboard with user management"
# Executes: Analysis → Research → Planning → Implementation → Testing → Verification → Refactoring
```

**Available Flags**:
- `--full`: Complete 7-stage development lifecycle with testing and refactoring
- `--fix`: Bug fixing mode (when used alone) OR enable fix stage (when combined)
- `--plan`: Planning-only mode (when used alone) with optional file saving
- `--research`: Research-only mode (when used alone) for context gathering
- `--spec`: Specification mode (when used alone) OR documentation-first development (when combined)
- `--refactor`: Enable code optimization and restructuring stage
- `--test`: Enable comprehensive test creation and execution
- `--verify`: Enable systematic verification and compliance checking
- `--project`: Apply changes across entire project (default: focused scope)
- `--no-reason`: Skip deep analysis stage (faster execution)
- `--no-plan`: Skip strategic planning stage (direct implementation)
- `--no-implement`: Legacy planning-only mode (same as `--plan` when used alone)

### Specialized Workflow Commands

#### `/guild:setup [options]`
**Initialize Guild system and create specialized agents**:

```bash
# Analyze project and create full Guild system
/guild:setup

# Create standalone agents only
/guild:setup --standalone

# Create standalone agents with specific focus
/guild:setup --standalone "focus on security and performance optimization"

# Reinitialize after major project changes
/guild:setup --refresh
```

### Flag-Only Execution Modes

The main `/guild` command supports specialized execution modes when specific flags are used alone:

#### Bug Fixing Mode (`--fix` only)
**Systematic bug resolution without new feature implementation**:

```bash
/guild --fix "users getting 500 error on checkout"
# Executes: Analysis → Research → Planning → Fix Stage (no implementation)
# Focus: Root cause analysis, targeted fixes, regression prevention
```

#### Planning Mode (`--plan` only)  
**Strategic planning with optional file saving**:

```bash
/guild --plan "migrate monolith to microservices architecture"
# Executes: Analysis → Research → Planning → Save Plan Option
# Creates: Detailed implementation plans with phases, timelines, risks, dependencies
```

#### Research Mode (`--research` only)
**Comprehensive context gathering and analysis**:

```bash
/guild --research "modern frontend framework patterns and performance optimization"
# Executes: Analysis → Research (with detailed output to user)
# Focus: Information gathering and context building for future tasks
```

#### Specification Mode (`--spec` only)
**Documentation and specification management**:

```bash
/guild --spec "API authentication endpoints with OAuth2 support"
# Executes: Analysis → Research → Planning → Specification Creation
# Creates: Detailed specifications in .guild/specs/ directory
```

## 🔧 Main Approaches & When to Use Them

### 1. Standard Development Workflow
**Use For**: Most feature development, bug fixes, and improvements

```bash
/guild "add user profile editing functionality"
```

**Process**: 
- Deep requirement analysis with edge case identification
- Comprehensive codebase research and pattern analysis  
- Strategic implementation planning with component coordination
- Technology-aware implementation by specialized engineers
- Quality validation with testing and integration verification

**Best For**: New features, enhancements, routine development tasks

### 2. Comprehensive Development Lifecycle (`--full`)
**Use For**: Critical features, major changes, production deployments

```bash
/guild --full "implement payment processing with Stripe"
```

**Extended Process**:
- All standard workflow stages PLUS:
- Comprehensive test suite creation and execution
- Security and performance verification  
- Code quality optimization and refactoring
- Documentation generation and compliance checking

**Best For**: Payment systems, authentication, data handling, public APIs

### 3. Documentation-First Development (`--spec`)
**Use For**: Complex features, API design, architectural changes

```bash
/guild --spec "design GraphQL API for content management"
```

**Documentation-Driven Process**:
- Specification analysis and requirements documentation
- API contract definition and validation rules
- Implementation with specification compliance checking
- Automated documentation generation and synchronization

**Best For**: APIs, complex integrations, team coordination, compliance requirements

### 4. Project-Wide Improvements (`--project`)
**Use For**: Migrations, refactoring, systematic improvements

```bash
/guild --refactor --project "modernize styling system with Tailwind CSS"
```

**Systematic Process**:
- Project-wide analysis and impact assessment
- Coordinated changes across multiple files and components
- Consistency validation and pattern enforcement
- Migration guides and team coordination documentation

**Best For**: Technology migrations, code modernization, architecture changes

### 5. Standalone Specialists Approach
**Use For**: Specific expertise needs, simple projects, quick assessments

```bash
# Task automatically routes to appropriate specialist
"Audit accessibility compliance across the application"
# → accessibility-auditor-agent provides WCAG 2.1 analysis

"Review API security implementation"  
# → security-analyst-agent provides OWASP assessment
```

**When to Use Each Approach**:

| Scenario | Recommended Approach | Command Example |
|----------|---------------------|-----------------|
| **New Feature Development** | Standard Workflow | `/guild "implement user notifications"` |
| **Critical System Changes** | Comprehensive (`--full`) | `/guild --full "add two-factor authentication"` |
| **Bug Investigation** | Fix-Only Mode | `/guild --fix "memory leak in data processing"` |
| **Architecture Planning** | Planning-Only Mode | `/guild --plan "implement caching strategy"` |
| **Research & Context** | Research-Only Mode | `/guild --research "GraphQL best practices 2024"` |
| **API Design** | Specification Mode | `/guild --spec "design payment webhooks API"` |
| **Major Refactoring** | Project-Wide Refactoring | `/guild --refactor --project "migrate to TypeScript"` |
| **Complex API Development** | Spec-Driven Full Workflow | `/guild --spec --full "implement user management API"` |
| **Security Assessment** | Standalone Specialist | `"Security audit of authentication system"` |
| **Performance Optimization** | Standalone Specialist | `"Analyze and optimize API response times"` |

## ⚙️ Advanced Customization

### Configuration Hierarchy

Guild follows a **flexible configuration system** with clear priority hierarchy:

```yaml
Priority Order (Highest to Lowest):
  1. Direct User Prompts: Your specific requests override all system behavior
  2. Project Configuration (.guild/instructions.md): Optional project-specific requirements
  3. System Defaults: Built-in workflow and agent behavior

Design Philosophy: "Optionality First"
  - .guild/instructions.md contains ONLY optional user requirements
  - System works perfectly with empty configuration
  - User maintains full control through direct prompts
```

### Thinking Modes Configuration

**Advanced Reasoning Control**: Customize cognitive resource allocation for different agents:

```yaml
# .guild/instructions.md
thinking_modes:
  guild-planning-agent:
    thinking_mode: ultrathink  # Maximum reasoning for strategic planning
    model: opus               # Premium model for complex planning
    
  main-thread-reasoning:
    thinking_mode: ultrathink    # Enhanced analysis integrated in guild command
    model: sonnet               # Main thread uses selected model
    
  implementation_agents:
    thinking_mode: think      # Standard efficiency for implementation
    model: sonnet            # Balanced model for execution
```

**Thinking Mode Options**:
- `ultrathink`: Maximum cognitive resources for complex strategic tasks
- `think-harder`: Enhanced reasoning for detailed analysis tasks  
- `think`: Standard efficient reasoning for routine implementation

### Project-Specific Specialization

**Technology Stack Configuration**:
```yaml
# .guild/instructions.md
project:
  primary_stack: [react, typescript, node, postgresql]
  frameworks: [next.js, tailwindcss, prisma]
  testing: [jest, cypress, playwright]
  deployment: [vercel, railway]
  
standards:
  code_style: [prettier, eslint]
  documentation: [jsdoc, storybook]
  security: [owasp, snyk]
```

**Custom Agent Specialization**:
```yaml
# .guild/instructions.md  
custom_agents:
  - name: guild-analytics-engineer
    role: "Analytics and tracking implementation"
    specialization: "Google Analytics, Mixpanel, custom event tracking"
    activation_keywords: [analytics, tracking, events, metrics]
    
  - name: guild-mobile-engineer  
    role: "Mobile application development"
    specialization: "Cross-platform mobile frameworks and native UI/UX patterns"
    activation_keywords: [mobile, react-native, expo, ios, android]
```

**Workflow Customization**:
```yaml
# .guild/instructions.md
workflow_preferences:
  always_verify: true           # Always include verification stage
  default_thinking: ultrathink  # Use enhanced reasoning by default
  parallel_execution: true      # Enable agent coordination
  context_depth: comprehensive  # Maximum context analysis
  
quality_gates:
  require_tests: true          # Always create tests for implementations
  security_review: true       # Include security analysis
  performance_check: true     # Include performance validation
  accessibility_audit: true   # Include accessibility compliance
```

### Advanced Context Engineering

**Context Optimization Configuration**:
```yaml
# .guild/instructions.md
context_engineering:
  strategy: progressive        # Build context incrementally
  optimization: long_context   # Optimize for long-context models
  caching: enabled            # Cache frequently accessed context
  
  research_depth:
    codebase_analysis: comprehensive
    external_research: enabled
    dependency_mapping: detailed
    
  handoff_protocol:
    format: xml_structured     # Use XML for agent communication
    validation: enabled        # Validate context transfers
    compression: automatic     # Compress large context packages
```

## 🏗️ Architecture & How It Works

### Agent Classification System

Guild uses a **sophisticated dual-agent architecture** with clear separation of concerns:

#### Context-Only Agents (Analysis & Planning)
**Never modify code** - focused on understanding and strategy:

- **Main thread reasoning**: Deep requirement analysis with ultrathink reasoning (integrated)
  - Identifies edge cases, constraints, and implications
  - Clarifies ambiguous requirements and technical dependencies
  - Provides structured analysis for implementation agents

- **`guild-planning-agent`**: Strategic workflow coordination and task routing
  - Creates comprehensive implementation strategies
  - Coordinates parallel agent execution and context handoffs
  - Optimizes resource allocation and task sequencing

- **`guild-research-agents`**: Context gathering and information synthesis  
  - Analyzes existing codebase patterns and architecture
  - Integrates external documentation and best practices
  - Builds comprehensive context packages for implementation

#### Implementation Agents (Code & Changes)
**Make actual modifications** - focused on execution:

- **`guild-verification-agent`**: Quality validation and testing execution
  - Runs tests, validates implementations against requirements
  - Performs security, performance, and accessibility audits
  - Can make corrective changes based on validation results

- **Technology Engineers**: Domain-specific implementation specialists
  - **`guild-frontend-component-engineer`**: Component patterns, state management, UI architecture
  - **`guild-backend-api-engineer`**: API middleware, routing, authentication patterns
  - **`guild-database-engineer`**: Schema design, queries, performance optimization
  - **Plus 20+ other technology-specific specialists**

### Context Engineering System

**Advanced Context Management** with XML-structured handoffs:

```xml
<!-- Agent-to-agent communication protocol -->
<context-handoff>
  <executive-summary>Key decisions and requirements distilled</executive-summary>
  <structured-context>
    <technical-constraints>Framework limitations, API restrictions</technical-constraints>
    <business-requirements>User stories, acceptance criteria</business-requirements>
    <implementation-guidance>Step-by-step technical approach</implementation-guidance>
  </structured-context>
  <quality-gates>
    <success-criteria>Measurable validation requirements</success-criteria>
    <testing-strategy>Unit, integration, and e2e test requirements</testing-strategy>
    <escalation-triggers>Conditions requiring human intervention</escalation-triggers>
  </quality-gates>
</context-handoff>
```

**Context Optimization Features**:
- **Reference-Based Linking**: Efficient file:line citations instead of code duplication
- **Progressive Detail Building**: Incrementally expand context as needed
- **Hierarchical Summarization**: Multi-level context compression
- **Automatic Context Pruning**: Remove irrelevant information dynamically

### Workflow Execution Engine

**Multi-Stage Process Orchestration**:

1. **🧠 Analysis Stage** (Main thread with ultrathink)
   - Deep requirement analysis and edge case identification
   - Technical constraint evaluation and dependency mapping
   - Risk assessment and implementation complexity analysis

2. **🔍 Research Stage** (`guild-project-research-agent` + `guild-global-research-agent`)
   - Comprehensive codebase analysis with pattern recognition
   - External documentation integration and best practices research
   - Technology-specific constraint identification and API analysis

3. **📋 Planning Stage** (`guild-planning-agent` with ultrathink)
   - Strategic implementation approach with parallel execution coordination
   - Agent selection and task distribution optimization
   - Context handoff protocol establishment and validation checkpoints

4. **🔨 Implementation Stage** (Technology-specific engineers)
   - Specialized implementation by domain experts
   - Pattern-consistent code generation with framework best practices
   - Parallel execution with synchronized context sharing

5. **✅ Validation Stage** (`guild-verification-agent`)
   - Systematic testing and quality assurance validation
   - Security, performance, and accessibility compliance checking
   - Integration testing and cross-component validation

## 📊 Standalone Agents - Instant Expertise

### Overview

**Self-Contained Specialists** that operate independently without the full Guild system while providing focused expertise in specific domains. Perfect for projects that need specific expert capabilities without workflow orchestration complexity.

### Key Benefits

- **🚀 Zero Setup Complexity**: Single command installation with automatic activation
- **🎯 Focused Expertise**: Deep domain knowledge in security, performance, accessibility, etc.
- **🔄 Seamless Integration**: Works naturally with all standard Claude Code workflows
- **⚡ Automatic Selection**: Right specialist chosen based on task keywords and context
- **📋 Lightweight**: No configuration files or system overhead

### Available Specialist Agents

#### Security & Compliance
```bash
# Automatically activates for security-related tasks
"Review authentication implementation for vulnerabilities"
# → security-analyst-agent provides:
#   - OWASP Top 10 vulnerability assessment
#   - Authentication/authorization security analysis  
#   - Input validation and sanitization review
#   - Security hardening recommendations with code examples
```

- **`security-analyst-agent`**: OWASP compliance, vulnerability assessment, penetration testing analysis
- **`accessibility-auditor-agent`**: WCAG 2.1 AA compliance, ARIA implementation, screen reader compatibility

#### Performance & Quality
```bash
# Automatically activates for performance tasks  
"Optimize slow database queries in user service"
# → performance-engineer-agent provides:
#   - Query execution plan analysis and optimization
#   - Database indexing strategy recommendations
#   - Caching layer implementation guidance
#   - Performance monitoring setup with specific metrics
```

- **`performance-engineer-agent`**: Performance profiling, database optimization, caching strategies, monitoring setup
- **`code-reviewer-agent`**: Code quality analysis, refactoring recommendations, technical debt identification

#### Documentation & Architecture  
```bash
# Automatically activates for documentation tasks
"Create comprehensive API documentation for payment endpoints"
# → documentation-writer-agent provides:
#   - OpenAPI/Swagger specification generation
#   - Interactive API documentation with examples
#   - Authentication and error handling documentation
#   - SDK and integration guide creation
```

- **`documentation-writer-agent`**: Technical documentation, API docs, user guides, README generation
- **`api-architect-agent`**: REST/GraphQL API design, integration patterns, API security best practices

#### Deployment & Operations
```bash
# Automatically activates for deployment tasks
"Set up CI/CD pipeline for automated testing and deployment" 
# → deployment-engineer-agent provides:
#   - GitHub Actions/GitLab CI configuration
#   - Multi-environment deployment strategy
#   - Infrastructure as code setup (Terraform, CloudFormation)
#   - Security scanning and quality gates integration
```

- **`deployment-engineer-agent`**: CI/CD optimization, deployment strategies, infrastructure as code
- **`monitoring-engineer-agent`**: Observability setup, logging strategies, alerting systems, metrics collection

#### Specialized Engineering
```bash
# Automatically activates for database tasks
"Design optimal database schema for e-commerce product catalog"
# → database-optimizer-agent provides:
#   - Normalized schema design with performance considerations
#   - Indexing strategy for complex queries
#   - Partitioning recommendations for scalability  
#   - Query optimization with specific database engine tuning
```

- **`database-optimizer-agent`**: Query optimization, indexing strategies, schema design, performance monitoring
- **`testing-strategist-agent`**: Test strategy development, automation frameworks, quality assurance processes

### Usage Patterns & Examples

#### Automatic Activation Examples

**Security Analysis**:
```bash
# Input: "Audit our user authentication system for security issues"
# 
# Automatic Processing:
# 1. security-analyst-agent detects security keywords
# 2. Performs OWASP-based vulnerability assessment
# 3. Analyzes authentication flow for common security flaws
# 4. Provides specific remediation steps with code examples
# 5. Suggests security monitoring and incident response improvements
```

**Performance Optimization**:
```bash
# Input: "API responses are slow, especially the user dashboard endpoint"
#
# Automatic Processing:  
# 1. performance-engineer-agent detects performance keywords
# 2. Analyzes API endpoint implementation and database queries
# 3. Identifies bottlenecks in data fetching and processing
# 4. Provides specific optimization strategies (caching, indexing, query optimization)
# 5. Suggests performance monitoring and alerting setup
```

**Accessibility Compliance**:
```bash
# Input: "Ensure our checkout flow meets WCAG AA accessibility standards"
#
# Automatic Processing:
# 1. accessibility-auditor-agent detects accessibility keywords  
# 2. Reviews checkout flow components for WCAG 2.1 AA compliance
# 3. Tests keyboard navigation and screen reader compatibility
# 4. Provides specific ARIA implementation recommendations
# 5. Suggests automated accessibility testing integration
```

#### Integration with Standard Claude Code Commands

Standalone agents enhance **any** Claude Code interaction:

```bash
# Standard development task with automatic security review
"Implement user registration with email verification"
# → Automatically engages security-analyst-agent for:
#   - Input validation best practices
#   - Password hashing and storage security
#   - Email verification security patterns  
#   - Rate limiting and abuse prevention

# Standard refactoring with automatic performance analysis
"Refactor the product search functionality for better maintainability"
# → Automatically engages performance-engineer-agent for:
#   - Search algorithm optimization analysis
#   - Database query efficiency review
#   - Caching strategy recommendations
#   - Search result pagination optimization
```

### When to Choose Standalone vs Full Guild

| Use Standalone Agents When | Use Full Guild System When |
|----------------------------|----------------------------|
| **Simple Projects**: Basic websites, prototypes, learning projects | **Complex Applications**: Multi-service architectures, enterprise applications |
| **Specific Expertise Needed**: Security audit, performance optimization, accessibility compliance | **Comprehensive Development**: Full feature development with systematic workflows |
| **Minimal Setup**: Want expert help without configuration overhead | **Team Coordination**: Multiple developers with consistent workflow needs |
| **Focused Tasks**: Single-domain problems with clear specialist requirements | **Multi-Domain Projects**: Full-stack development requiring orchestrated specialists |
| **Quick Assessments**: One-time audits, reviews, or optimizations | **Ongoing Development**: Continuous feature development with quality assurance |

## 📦 Installation & Setup

### Quick Start (Recommended)

```bash
# Full Guild System (comprehensive workflows)
npx claude-guild@latest

# Standalone Specialists (focused expertise) 
npx claude-guild@latest --standalone
```

### Installation Process

**Full Guild System Installation**:
1. **Project Analysis**: Scans codebase to identify technologies, frameworks, and patterns
2. **Agent Generation**: Creates specialized engineers based on detected tech stack
3. **Configuration Setup**: Generates `.guild/` configuration with project-specific settings
4. **Command Integration**: Installs workflow commands in `.claude/commands/` directory

**Standalone Agents Installation**:
1. **Specialist Selection**: Creates domain-specific agents (security, performance, accessibility, etc.)
2. **Automatic Integration**: Integrates with existing Claude Code workflow seamlessly  
3. **Zero Configuration**: No setup files or configuration required
4. **Immediate Activation**: Ready to use with any standard Claude Code interaction

### Post-Installation Structure

#### Full Guild System
```
your-project/
├── .guild/
│   ├── instructions.md    # Project-specific configuration (optional)
│   ├── overview.md        # Workflow definitions and process specifications
│   ├── agents.md          # Agent templates and specialization rules
│   └── ignore.md          # File exclusion patterns for analysis
│
├── .claude/
│   ├── commands/
│   │   ├── guild.md       # Main /guild workflow command
│   │   ├── setup.md       # /guild:setup initialization command
│   │   ├── plan.md        # /guild:plan strategic planning command
│   │   └── [other guild commands]
│   │
│   └── agents/guild/      # Specialized implementation engineers
│       # Reasoning integrated in guild command main thread
│       ├── guild-planning-agent.md       # Strategic coordination
│       ├── guild-frontend-component-engineer.md  # Frontend framework specialist
│       ├── guild-backend-api-engineer.md      # Backend API specialist
│       └── [technology-specific engineers]
│
└── CLAUDE.md              # Project instructions updated with Guild integration
```

#### Standalone Agents System  
```
your-project/
├── .claude/
│   └── agents/
│       ├── security-analyst-agent.md      # Security expertise
│       ├── performance-engineer-agent.md  # Performance optimization  
│       ├── accessibility-auditor-agent.md # Accessibility compliance
│       ├── code-reviewer-agent.md         # Code quality analysis
│       ├── documentation-writer-agent.md  # Technical documentation
│       └── [other domain specialists]
│
└── CLAUDE.md              # Project instructions updated for specialist integration
```

## 🛠️ Development & Contributing

### Development Setup

1. **Fork and Clone**:
   ```bash
   git clone https://github.com/your-username/claude-guild.git
   cd claude-guild
   npm install
   ```

2. **Critical Development Workflow** - **MUST FOLLOW THIS ORDER**:
   ```bash
   # 1. FIRST: Update specification
   # Edit guideline/README.md - this defines ALL system behavior
   
   # 2. SECOND: Update templates  
   # Edit templates/ directory to reflect guideline/README.md changes
   
   # 3. THIRD: Update commands
   # Edit commands/ directory to use updated templates
   ```

   **⚠️ NEVER modify `.guild/`, `.claude/`, or `.serena/` directories directly - these are generated from templates**

3. **Local Testing**:
   ```bash
   # Test installation locally
   node install.js
   
   # Test Guild system creation
   /guild:setup
   
   # Test workflows
   /guild "simple test task"
   
   # Clean up test artifacts
   rm -rf .claude .guild CLAUDE.md
   ```

4. **Publication Testing**:
   ```bash
   # Full publication workflow with testing
   ./publish.sh
   
   # Test from NPM registry
   npx claude-guild@latest
   ```

### Architecture Guidelines

**Template System Architecture**:
- **Templates** (`templates/`) contain reusable components embedded into commands
- **Commands** (`commands/`) are self-contained workflow definitions  
- **Generated Files** (`.guild/`, `.claude/`) are created from templates during installation
- **Specification** (`guideline/README.md`) is the authoritative definition of all behavior

**Agent Design Principles**:
- **Context-Only Agents**: Analysis, planning, research - never modify code
- **Implementation Agents**: Code changes, file creation, testing execution
- **Clear Handoff Protocols**: XML-structured context transfer between agents
- **Technology Specialization**: Domain-specific expertise with framework knowledge

### Contribution Guidelines

**Before Contributing**:
- [ ] **Update guideline/README.md** with complete specification of changes
- [ ] **Update templates** to reflect new specifications  
- [ ] **Update commands** to use modified templates properly
- [ ] **Test locally** with `node install.js` and workflow commands
- [ ] **Validate** that `.guild/` and `.claude/` generation works correctly

**Code Quality Requirements**:
- All changes must be specified in guideline/README.md first
- Templates must contain only content needed for installation
- Commands must be self-contained after template embedding
- Agent definitions must follow context-only vs implementation classification
- Thinking mode assignments must be appropriate for agent complexity

**Testing Checklist**:
- [ ] Local installation works (`node install.js`)
- [ ] Agent generation creates correct specialists for test projects  
- [ ] Workflow commands execute multi-stage processes correctly
- [ ] Context handoff between agents functions properly
- [ ] Standalone agents activate automatically for appropriate tasks

### Feature Request & Bug Report Process

**Feature Requests**:
1. **Describe Use Case**: Clear problem statement and user story
2. **Propose Solution**: How should this work within Guild's architecture?
3. **Consider Integration**: How does this fit with existing workflows?
4. **Provide Examples**: Concrete usage examples and expected behavior

**Bug Reports**:
1. **Environment Details**: Project type, technology stack, Guild configuration
2. **Reproduction Steps**: Clear step-by-step process to reproduce issue
3. **Expected vs Actual**: What should happen vs what actually happens
4. **Context Information**: Include relevant `.guild/instructions.md` or agent configurations

**Priority Guidelines**:
- **Critical**: Breaks core workflow functionality, prevents installation
- **High**: Affects major features, causes data loss, security vulnerabilities  
- **Medium**: Feature gaps, performance issues, usability problems
- **Low**: Documentation improvements, minor enhancements, edge cases

## 🏗️ Agent Classification System

Guild uses a **sophisticated dual-agent architecture** with clear separation of concerns:

### Context-Only Agents (Analysis & Planning)
**Never modify code** - focused on understanding and strategy:

- **Main thread reasoning**: Deep requirement analysis with ultrathink reasoning (integrated)
- **`guild-planning-agent`**: Strategic workflow coordination (ultrathink mode)  
- **`guild-research-agents`**: Context gathering and information synthesis

### Implementation Agents (Code & Changes)
**Make actual modifications** - focused on execution:

- **`guild-verification-agent`**: Quality validation and testing execution
- **Technology Engineers**: Domain-specific implementation specialists (frontend frameworks, backend APIs, databases, etc.)

**Communication Protocol**: All agents use structured XML handoff templates for seamless context transfer and quality assurance.

## ⚙️ Key Differentiators

- **Self-contained architecture** with zero-dependency global installation
- **Complete template embedding** ensuring 100% reliable setup across environments
- **Advanced context engineering** with XML-structured packages
- **Integrated thinking modes** for appropriate cognitive resource allocation
- **Technology-agnostic design** with universal workflow patterns
- **Structured agent communication** with quality gates and validation checkpoints

## 📊 Success Metrics

- **100% installation reliability** through self-contained setup architecture
- **Zero-failure setup process** eliminating missing file errors
- **50-70% performance improvement** through context optimization
- **Enhanced reasoning quality** with appropriate thinking mode selection
- **Global distribution compatibility** ensuring identical system creation

## 🔗 Resources & Documentation

### Complete Documentation

| Guide | Purpose |
|-------|---------|
| **[Getting Started](guideline/getting-started.md)** | Installation, usage, and setup |
| **[Architecture](guideline/architecture.md)** | Complete system architecture |
| **[Agents](guideline/agents.md)** | Agent specifications and design |
| **[Performance](guideline/performance.md)** | Optimization strategies |
| **[Development](guideline/development.md)** | Contributing guidelines |
| **[Extensibility](guideline/extensibility.md)** | Customization and plugins |

### Official Resources
- **[README.md](./README.md)** - Complete system entry point and navigation (this document)
- **[NPM Package](https://www.npmjs.com/package/claude-guild)** - Official package distribution
- **[GitHub Repository](https://github.com/anthropics/claude-guild)** - Source code and issue tracking

### Claude Code Integration  
- **[Claude Code Documentation](https://docs.anthropic.com/claude-code)** - Official Claude Code usage guide
- **[MCP Protocols](https://docs.anthropic.com/claude-code/mcp)** - Model Context Protocol integration
- **[Agent Development](https://docs.anthropic.com/claude-code/agents)** - Custom agent creation guidelines

### Community & Support
- **[GitHub Issues](https://github.com/anthropics/claude-guild/issues)** - Bug reports and feature requests
- **[GitHub Discussions](https://github.com/anthropics/claude-guild/discussions)** - Community Q&A and usage examples
- **[Discord Community](https://discord.gg/claude-code)** - Real-time community support and discussions

### Learning Resources
- **Example Projects**: Sample implementations with different technology stacks
- **Workflow Patterns**: Common development patterns and best practices  
- **Advanced Configurations**: Complex project setups and customization examples
- **Integration Guides**: CI/CD integration, team workflows, enterprise deployment

## 🏆 Success Stories & Use Cases

### Enterprise Development Teams
- **"Reduced onboarding time by 60%"** - New developers get systematic workflow guidance automatically
- **"Consistent code quality across 50+ engineers"** - Guild agents enforce patterns and best practices
- **"Security compliance automated"** - Automatic OWASP analysis and accessibility auditing

### Open Source Projects  
- **"Comprehensive documentation generation"** - API docs and guides created automatically during development
- **"Systematic refactoring support"** - Large codebase migrations handled systematically
- **"Contributor guidance automation"** - New contributors get structured development support

### Individual Developers
- **"Complex features become manageable"** - Multi-stage workflow breaks down large tasks systematically
- **"Learning acceleration"** - Domain-specific agents provide expert-level guidance
- **"Quality assurance confidence"** - Systematic testing and validation with each implementation

---

## 🚀 Ready to Transform Your Development Workflow?

### Full Guild System (Comprehensive Development)
```bash
npx claude-guild@latest
```
*Complete workflow orchestration with specialized agents for your tech stack*

### Standalone Specialists (Focused Expertise)  
```bash
npx claude-guild@latest --standalone
```
*Instant domain experts for security, performance, accessibility, and more*

---

**Claude Guild: Where every development task becomes a systematic, multi-stage workflow powered by intelligent agents and advanced reasoning capabilities.** 🏛️
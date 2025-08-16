# /guild:setup

**Usage**: `/guild:setup [--standalone] [guidance]`

---
name: guild-setup-command
thinking_mode: ultrathink
model: opus
description: "Fully self-contained Guild system setup with complete embedded guideline intelligence"
---

## Purpose

Perform comprehensive project analysis and generate a complete Guild system tailored specifically to your codebase using fully embedded guideline intelligence. Completely self-contained with zero external dependencies.

## EMBEDDED GUIDELINE INTELLIGENCE

### Core System Principles (Built-in)

**Prompt-Driven Intelligence Architecture**:
- **All intelligence through prompts**: No hardcoded detection or patterns
- **Claude-native analysis**: Leverage Claude's full understanding capabilities  
- **Dynamic adaptation**: Let Claude determine optimal approaches
- **Future-proof design**: New models automatically improve the system
- **Technology-agnostic**: Universal patterns that work with any technology stack

**Agent Classification System** (Built-in):
- **Context-Only Agents**: Never make changes, create comprehensive context packages
- **Implementation Agents**: Execute changes based on structured context from context-only agents
- **Thin Agent Architecture**: Metadata-only (<20 lines) that reference centralized processes
- **Thinking Mode Integration**: Ultrathink for strategic decisions, think-harder for analysis, think for execution

**Context Engineering Excellence** (Built-in):
- **Structured Handoffs**: XML-tagged context packages with priority classification
- **Progressive Detail Building**: Start with summaries, expand based on agent requests
- **Reference-Based Linking**: Use file:line citations instead of content duplication
- **Automatic Pruning**: Remove outdated or irrelevant context information

**Performance Optimization** (Built-in):
- **Cognitive Resource Allocation**: Match thinking complexity to task requirements
- **Parallel Execution**: Multiple agents with context synchronization
- **Context Compression**: Hierarchical summarization with drill-down capability
- **Adaptive Strategies**: Claude adjusts approach based on project patterns

### Workflow Architecture (Built-in)

**Standard Workflow Patterns** (Embedded):
```yaml
Default: reasoning → research → planning → implementation
--full: reasoning → research → planning → implementation → testing → verification → refactoring
--fix: reasoning → approach verification → research → planning → fix stage  
--plan: reasoning → approach verification → research → planning → save to file
--research: reasoning → approach verification → research
--spec: reasoning → spec_analysis → spec_update → research → planning → implementation → validation
--refactor: reasoning → approach verification → research → refactor-planning → refactoring
--show-plan: Complete reasoning and planning, then display execution plan for user confirmation
```

**Execution Strategies** (Embedded):
- **Sequential**: One agent at a time with structured context handoffs
- **Parallel**: Multiple independent agents with synchronized context sharing
- **Pipeline**: Overlapping stages with progressive context building
- **Hybrid**: Mixed strategies with adaptive context management

**Context Flow Architecture** (Embedded):
```xml
<context-flow>
  <generation-phase>
    Context-only agents (ultrathink/think-harder) → structured XML packages
  </generation-phase>
  <transfer-phase>
    <context-package priority="critical|important|supplementary">
      <executive-summary>Key decisions and outcomes</executive-summary>
      <implementation-context>Technical requirements and constraints</implementation-context>
      <validation-criteria>Success metrics and acceptance criteria</validation-criteria>
      <references>Relevant files, functions, and documentation</references>
    </context-package>
  </transfer-phase>
  <usage-phase>
    Implementation agents (think) → validate context → execute with quality gates
  </usage-phase>
  <decay-phase>
    Automatic pruning → retain critical decisions → archive for future reference
  </decay-phase>
</context-flow>
```

### Agent Architecture Intelligence (Built-in)

**Agent Placement Requirements** (Critical):
- **MANDATORY**: All Guild agents MUST be created in `.claude/agents/guild/` subdirectory
- **Directory Structure**: Namespace isolation between guild system agents and standalone specialists
- **Organization**: Clear distinction between agent types for better discoverability

**Context-Only Agent Specifications** (Embedded):
```yaml
Characteristics:
  - NEVER make direct code or file changes
  - Create comprehensive context packages for implementation agents
  - Use enhanced thinking modes (ultrathink, think-harder) for complex analysis
  - Generate structured handoff protocols using XML templates
  - Focus on analysis, research, planning, and specification work

Agent Types:
  guild-planning-agent:
    color: yellow
    thinking_mode: ultrathink
    model: opus  
    role: Workflow coordination, routing, strategic planning
    
  guild-project-research-agent:
    color: blue
    thinking_mode: think
    model: inherit
    role: Project-specific context gathering, progressive detail building
    
  guild-global-research-agent:
    color: blue
    thinking_mode: think
    model: inherit
    role: External research, best practices integration
    
  guild-specification-agent:
    color: blue
    thinking_mode: think-harder
    model: inherit
    role: Documentation analysis, specification updates (ONLY agent that can update specs)
```

**Implementation Agent Specifications** (Embedded):
```yaml
Characteristics:
  - Receive structured context packages from context-only agents
  - Execute actual code changes and file modifications
  - Use standard thinking mode (think) for efficient execution
  - Create tests, documentation, refactoring based on provided context
  - Validate results against structured success criteria

Agent Types:
  guild-verification-agent:
    color: orange
    thinking_mode: think
    model: inherit
    role: Quality validation, testing execution, result verification
    
  Dynamically Generated Specialists:
    color: green (implementation agents)
    thinking_mode: think
    model: inherit
    role: Specialized implementation based on detected project patterns
    generation: Created based on project analysis with focused context
```

### Technology Detection Intelligence (Built-in)

**Pattern-Based Detection** (No hardcoding):
```yaml
Detection Process:
  1. Analyze project structure using Claude Code's native tools
  2. Read configuration files (package.json, requirements.txt, Cargo.toml, etc.)
  3. Examine source code patterns and architectural styles
  4. Identify workflow patterns (development, build, deployment)
  5. Assess project complexity and sophistication level

Technology Categories (Pattern-Based):
  Frontend Patterns: Component frameworks, state management, routing, testing
  Backend Patterns: API frameworks, database integration, middleware, authentication
  CLI Patterns: Command structures, argument parsing, user workflows, distribution
  Package Patterns: API design, distribution strategy, documentation, versioning
  Testing Patterns: Test frameworks, quality tools, coverage requirements
```

**Engineer Generation Logic** (Embedded):
```yaml
CLI Patterns Detected → guild-cli-engineer:
  - Command structure and user workflow understanding
  - Argument parsing and validation expertise
  - Distribution and installation pattern knowledge
  
Frontend Patterns Detected → guild-frontend-engineer:
  - Component architecture and state management context
  - User interface and accessibility pattern expertise
  - Frontend testing and validation specialization
  
Backend Patterns Detected → guild-backend-engineer:
  - API design and service logic expertise
  - Data persistence and security pattern knowledge
  - Backend testing and performance specialization
  
Package Patterns Detected → guild-package-engineer:
  - API design and distribution strategy expertise
  - Documentation and versioning pattern knowledge
  - Package testing and publication specialization
```

### Prompt-Driven Analysis Intelligence (Built-in)

**Project Analysis Prompt Intelligence** (Embedded):
```yaml
Pattern-Based Analysis:
  Architectural Patterns: layered, microservices, component-based, event-driven, domain-driven
  Development Flow Patterns: Work organization, lifecycle patterns, quality assurance
  Data Flow Patterns: Information movement, transformation, processing, boundaries
  Integration Patterns: External system interaction, interface contracts, dependency management
  Scalability Patterns: Growth handling, modularity, extensibility, adaptation points

Complexity Profiling:
  Cognitive Complexity: Domain knowledge, context maintenance, interconnection
  Structural Complexity: Pattern interaction, abstraction layers, integration points
  Change Complexity: Context requirements, ripple effects, validation needs
  Coordination Complexity: Concern interaction, orchestration, parallelization potential

Intelligence Allocation Strategy:
  Enhanced Thinking (ultrathink): Strategic planning, architecture decisions, requirement analysis
  Analytical Thinking (think-harder): Specification analysis, complex problem solving, impact analysis
  Efficient Execution (think): Implementation, validation, testing, routine operations
```

## 🚨 CRITICAL: NO CODE EMBEDDING POLICY

**MANDATORY PRINCIPLE**: Guild agents must NEVER contain embedded code examples, templates, or snippets.

### **Why Code Embedding Violates Guild Principles:**
- **Framework-Agnostic**: Embedded code assumes specific frameworks
- **Project-Agnostic**: Code samples assume particular project structures  
- **Technology-Agnostic**: Any code is technology-specific by definition
- **Prompt-First**: Code samples are hardcoded logic, not prompt-driven intelligence

### **What Agents SHOULD Contain:**
- **Role definitions** and responsibilities
- **Architectural pattern descriptions** (not implementations)
- **Quality standards** and expectations
- **Context management** protocols
- **Integration guidelines** and principles

### **What Agents MUST NEVER Contain:**
- Code examples or templates
- Framework-specific snippets
- Technology-specific implementations  
- Copy-paste solutions
- Hardcoded patterns

### **Correct Approach:**
```yaml
❌ Wrong: "Use this Express.js template: app.get('/users', ...)"
✅ Right: "Implement REST endpoints following project's established API patterns"

❌ Wrong: "Add this React component: const UserCard = () => {"
✅ Right: "Create user interface components consistent with project's architecture"
```

**INTELLIGENCE FLOW**: Agents analyze project context → Generate appropriate solutions using Claude's capabilities → Adapt to discovered patterns and conventions.

**Agent Generation Prompt Intelligence** (Embedded):
```yaml
Pattern-Driven Generation:
  Specialization Analysis: Which patterns need dedicated understanding
  Cognitive Load Distribution: Enhanced vs standard thinking allocation
  Context Engineering: Optimal context distribution and handoff protocols
  
Agent Context Engineering:
  Pattern Expertise Injection: Architectural, domain, integration, quality patterns
  Project-Specific Intelligence: Conventions, standards, decision points, pitfalls
  Context Optimization: Detail levels, knowledge structure, examples, references
  Coordination Intelligence: Agent intersection, context sharing, handoff protocols
```

## EXECUTION PROTOCOL

### Step 1: Comprehensive Project Analysis

**Execute comprehensive project analysis using embedded intelligence**:

1. **Pattern-Based Project Intelligence** (Using embedded prompts):
   ```
   Perform deep pattern-based analysis of this project using all available tools.
   
   Technology-Agnostic Pattern Recognition:
   - Architectural patterns (layered, microservices, component-based, event-driven, domain-driven)
   - Development flow patterns (work organization, lifecycle, quality assurance)
   - Data flow patterns (information movement, transformation, boundaries)
   - Integration patterns (external systems, interfaces, dependencies)
   - Scalability patterns (growth handling, modularity, extensibility)
   
   Beyond Technology Labels - focus on underlying patterns that transcend tools
   Context Understanding - domain knowledge, business rules, user interactions, operations
   ```

2. **Complexity Profiling** (Using embedded intelligence):
   ```
   Create multi-dimensional complexity profile:
   - Cognitive complexity (domain knowledge, context maintenance, interconnection)
   - Structural complexity (pattern interaction, abstraction layers, integration points)
   - Change complexity (context requirements, ripple effects, validation needs)
   - Coordination complexity (concern interaction, orchestration, parallelization)
   
   Intelligence Allocation Strategy:
   - Enhanced thinking modes for strategic decisions and complex analysis
   - Standard thinking modes for efficient execution and routine operations
   - Agent specialization level appropriate for complexity
   - Context management strategy for optimal performance
   ```

3. **Technology Stack Detection** (Pattern-based):
   - Search for framework patterns using Grep tool
   - Find testing patterns and quality tool configurations
   - Discover workflow patterns (development, build, deployment)
   - Identify architectural styles and implementation patterns

### Step 2: Dynamic Agent Generation with Embedded Intelligence

**CRITICAL DIRECTORY SETUP**: Execute in sequence:
1. **Determine project root**: Use Bash `PROJECT_ROOT=$(git rev-parse --show-toplevel 2>/dev/null || pwd)`
2. **Create directory**: Use Bash `mkdir -p "$PROJECT_ROOT/.claude/agents/guild"`
3. **Verify creation**: Use LS tool to confirm `$PROJECT_ROOT/.claude/agents/guild/` exists
4. **Generate agents**: All agents MUST be created in `$PROJECT_ROOT/.claude/agents/guild/` subdirectory

**Dynamic Agent Generation Strategy**:
1. **Project Pattern Analysis**: Examine project structure for specialization areas
2. **Specialization Detection**: Identify domains, layers, and integration points
3. **Agent Creation**: Generate appropriate specialists with focused context
4. **Context Optimization**: Group related technologies within agent boundaries
5. **Intelligent Load Balancing Setup**: Configure adaptive 1-3 instances per agent type with complexity-aware distribution

**Generated Agents** (ALL in .claude/agents/guild/ subdirectory):
- Core context agents with comprehensive project understanding
- Dynamically created specialists based on detected patterns
- All agents configured with optimal thinking modes and concurrency settings
- **MANDATORY**: All Guild agents created in `$PROJECT_ROOT/.claude/agents/guild/` subdirectory for proper namespace isolation

### Step 3: Create Guild System Configuration

**CRITICAL**: Create configuration files that Guild command will recognize:

1. **Create `$PROJECT_ROOT/.guild/overview.md`** (Primary setup completion indicator):

```markdown
# Guild System Overview

**Setup Status**: ✅ Complete  
**Setup Date**: [Current Date]  
**Project Type**: [Detected project type]  
**Technology Stack**: [Detected technologies]

## Generated Agents

**Location**: `$PROJECT_ROOT/.claude/agents/guild/`

### Context Generation Agents
- guild-planning-agent: Strategic workflow coordination and task orchestration
- guild-project-research-agent: Project-specific context and pattern analysis
- guild-global-research-agent: Best practices and external knowledge integration

### Implementation Agents
[List of dynamically generated specialist agents based on project analysis]

### Quality Assurance Agents
- guild-verification-agent: Quality validation and testing coordination

## System Configuration

**Concurrency**: Adaptive 1-3 instances per agent type with intelligent scaling  
**Thinking Modes**: Strategic planning (ultrathink), Analysis (think-harder), Execution (think)  
**Context Management**: Structured XML handoffs with progressive detail building  
**Performance**: Enhanced parallel execution with dependency-aware scheduling and real-time rebalancing  

## Usage

Primary command: `/guild "your task"`  
Configuration: Edit `$PROJECT_ROOT/.guild/instructions.md` for project-specific rules  
Ignore patterns: Manage via `$PROJECT_ROOT/.guild/ignore.md`  

## Next Steps

1. Try: `/guild "simple task"` to test basic workflow
2. Use: `/guild --full "complex task"` for comprehensive development
3. Customize: Edit `$PROJECT_ROOT/.guild/instructions.md` for your project needs
```

2. **Create `$PROJECT_ROOT/.guild/instructions.md`** with pre-filled default settings:

```markdown
# Guild System Instructions

These are simple instructions that all Guild agents and commands follow.

## Enhanced Concurrency Settings
- Adaptive 1-3 instances of each agent type based on workload analysis
- Maximum 20 total agents with intelligent resource management
- Work estimation-based task distribution with affinity grouping
- Dynamic rebalancing with cross-specialization work stealing
- Predictive scaling with real-time performance monitoring

## Agent Model Settings
- Planning agent always uses opus model
- All other agents use inherit model by default
- Research agents can run up to 3 instances with parallel context gathering
- Implementation agents use adaptive 1-3 instances with dependency-aware scheduling
- Cross-specialization work stealing enables idle agents to assist overloaded specialists

## Workflow Settings
- Always start with reasoning in main thread
- Run project and technology research in parallel
- Plan tasks before implementation
- Execute implementation in parallel when possible
- Testing is optional unless explicitly requested
- Verification is optional unless explicitly requested

## Task Routing Rules
- Interface work goes to interface specialists
- Service work goes to service specialists
- Data work goes to data specialists
- Integration work goes to integration specialists
- Testing work goes to quality specialists

## Quality Standards
- Follow existing project patterns
- Maintain code consistency
- Validate all implementations
- Create tests when requested
- Document complex logic

## Context Management
- Each agent gets only needed context
- Avoid context duplication
- Share research results with planning
- Provide task-specific context to implementation

## Coordination Rules
- No blocking between research agents
- Planning waits for research completion
- Implementation runs independently
- Integration validates completed work

## Performance Settings
- Optimize for parallel execution
- Minimize coordination overhead
- Progressive result collection
- Early feedback when possible

## Project-Specific Rules
[Add your project-specific instructions here]
```

3. **Create `$PROJECT_ROOT/.guild/ignore.md`** (Soft ignore patterns):

```markdown
# Guild Ignore Patterns

These files and patterns are soft-ignored during Guild operations but can be accessed when explicitly requested.

## Generated/Compiled Files
*.min.js
*.min.css
dist/
build/
out/

## Dependencies
node_modules/
vendor/
.venv/
venv/

## System Files
.DS_Store
*.log
.env
.env.*

## IDE/Editor Files
.vscode/settings.json
.idea/workspace.xml
*.swp
*.tmp

## Project-Specific Patterns
[Add patterns specific to your project here]
```

**Generated Configuration** (in $PROJECT_ROOT/.guild/):
- **overview.md**: Primary setup completion indicator with system summary and agent inventory
- **instructions.md**: Simple, pre-filled default settings that can be easily modified  
- **ignore.md**: Technology-appropriate and project-specific exclusion patterns

**Complete Embedded Intelligence**: All generated components contain comprehensive project understanding, technology patterns, architectural knowledge, and workflow optimization - making the entire system completely self-contained and project-specialized.

## KEY BENEFITS

**Fully Self-Contained Operation with Complete Intelligence**:
- **No External Dependencies**: All guideline intelligence embedded directly in this command
- **Runtime Independence**: No dependency on external guideline files during execution
- **Complete Agent Intelligence**: All agent behavior and project knowledge embedded during setup
- **Project-Specific Optimization**: Each component understands your unique codebase patterns and architectural decisions

**Guideline Intelligence Embedding**:
- **Core System Principles**: Prompt-driven intelligence, dynamic generation, context engineering fully embedded
- **Agent Architecture**: Complete agent classification, thinking modes, placement requirements embedded
- **Workflow Intelligence**: All workflow patterns, execution strategies, flag behaviors embedded
- **Technology Intelligence**: Pattern-based detection and specialization logic embedded
- **Quality Intelligence**: Validation approaches, testing patterns, quality standards embedded

This setup command creates a **completely self-contained, intelligently specialized agent ecosystem** that deeply understands your project's unique patterns and operates independently with zero external guideline dependencies.
# Guild System Overview

**Guild**: Command-specific workflow integration for Claude Code via external command system

## What is Guild?

Guild is an **optional, isolated workflow system** that transforms Claude Code tasks into command-specific workflow processes with specialized agent coordination. Guild operates completely externally to Claude Code and only activates when explicitly requested.

## Core Principles

### Complete Claude Code Separation
- **External Integration**: Guild works WITH Claude Code, never embedded IN Claude Code
- **Zero Code Modifications**: All Guild functionality remains external to Claude Code core
- **Command-Based Activation**: Guild ONLY activates when using `/guild:` prefixed commands
- **Normal Usage Unchanged**: Claude Code operates normally without Guild interference

### Command-Specific Workflow System
- **Command-Optimized Process**: Each command defines its optimal workflow sequence
- **Mandatory Start Sequence**: All workflows begin with reasoning → research → planning
- **Thin Agent Architecture**: Agents reference overview processes rather than containing logic
- **Template-Driven Implementation**: All workflow logic embedded in commands and templates

## Available Commands

Guild provides specialized commands with optimized workflows:

### Core Commands
- **`/guild:setup [guidance]`** - Analyze project and create specialized agents including mandatory guild-reasoning-agent
- **`/guild "task"`** - Execute any task with guild-reasoning-agent → research → planning → implementation
- **`/guild:refactor "description"`** - Execute refactoring with guild-reasoning-agent → research → planning → refactoring
- **`/guild:fix "bug"`** - Execute bug fixing with guild-reasoning-agent → research → planning → diagnosis → implementation
- **`/guild:plan "task"`** - Execute planning with guild-reasoning-agent → research → planning → documentation
- **`/guild:spec [level] "spec"`** - Execute specification with guild-reasoning-agent → research → planning → specification

### Management Commands  
- **`/guild:instructions`** - Manage project instructions and configuration options
- **`/guild:research`** - Context research engine with configurable MCP integration

**Important**: Guild commands are ONLY active when explicitly invoked with `/guild:` prefix. The workflow is completely isolated and does NOT automatically apply to all tasks.

## Guild System Architecture & Agent Compliance

**CRITICAL - MANDATORY FOR ALL AGENTS**: Every Guild agent MUST be aware of and reference this overview file (`.guild/overview.md`) as the central authority for Guild system operation. This overview serves as the primary endpoint for all Guild system rules, components, and compliance requirements.

### Guild System Core Functionality

**CRITICAL - MANDATORY FOR ALL AGENTS**: All Guild agents MUST follow these core system requirements and be aware of the complete Guild system architecture.

#### Mandatory Agent Compliance
- **Instructions Following**: Every agent MUST strictly adhere to workflow specifications in `.guild/instructions.md`
- **Ignore Pattern Respect**: ALL agents MUST respect patterns defined in `.guild/ignore.md` unless explicitly requested by user
- **Configuration Validation**: Agents must check for Guild configuration files and handle missing files gracefully
- **Workflow Integration**: All agents must integrate seamlessly with Guild's multi-stage workflow system
- **Quality Gates**: All agents must apply quality validation throughout their execution

#### Model and Analysis Requirements
- **Planning Agents**: MUST use Opus model for strategic planning and complex analysis
- **All Agents**: Must run with comprehensive analysis mode (Ultra-Sync when configured)
- **Self-Verification**: All agents must validate solution optimality and consistency
- **Parallel Execution**: Agents coordinate for simultaneous work where possible

#### File Pattern Compliance
- **Automatic Exclusion**: Agents automatically exclude files/folders matching ignore patterns
- **Pattern Enforcement**: No agent may access ignored files without explicit user override
- **Soft Ignore Behavior**: When explicitly asked to work with ignored files, agents should override patterns

### Universal Agent Requirements

**MANDATORY SYSTEM AWARENESS**: Every agent must understand and reference these Guild system components:

1. **`.guild/overview.md`** (THIS FILE) - **PRIMARY REFERENCE**
   - Central authority for all Guild system rules and definitions
   - Master reference that all agents must consult and be aware of
   - Contains complete system architecture and compliance requirements

2. **`.guild/instructions.md`** - **MANDATORY CONFIGURATION**
   - Agent-specific configuration requirements and behavior standards
   - Model specifications (Planning agents MUST use Opus model)
   - Quality standards and validation requirements
   - **All agents MUST follow instructions in this file**

3. **Command-Defined Workflows** - **WORKFLOW DEFINITIONS**
   - Commands define their own workflow compositions using stage definitions from this overview
   - Stage execution requirements and context handoff protocols defined per command
   - Sequential workflow enforcement rules specified in individual commands
   - **All agents MUST follow workflow stages defined in the executing command**

4. **`.guild/ignore.md`** - **FILE EXCLUSION PATTERNS**
   - Files and folders that Guild agents must automatically ignore
   - Pattern matching rules for file exclusion
   - Override protocols for explicit user requests
   - **All agents MUST respect ignore patterns in this file**

5. **`.guild/agents.md`** - **AGENT CREATION TEMPLATES**
   - Agent role definitions and naming conventions
   - Planning vs implementation agent separation protocols
   - Universal agent requirements and standards
   - **Reference for understanding agent roles and responsibilities**

### Central Authority Protocol

**OVERVIEW AS MASTER REFERENCE**: This overview file serves as the single source of truth for:
- **System Rules**: All Guild system compliance requirements
- **Component References**: Links to all other Guild system files
- **Agent Standards**: Universal requirements for all Guild agents
- **Workflow Authority**: Master workflow definitions and terminology

**MANDATORY AGENT BEHAVIOR**: Every Guild agent must:
1. **Know This File Exists**: All agents must be aware of `.guild/overview.md`
2. **Reference When Needed**: Consult this overview for system rules and definitions
3. **Follow Referenced Files**: Use this overview to find and follow other Guild system components
4. **Maintain Compliance**: Ensure all actions align with Guild system requirements defined here

### Workflow Terminology & Definitions

**Core Terms**:
- **Planning Agent**: Single agent that focuses on strategic architecture coordination and task routing
- **Unified Engineers**: Agents that combine planning and implementation within their technology specialization
- **Task Routing Agent**: Core coordinator that analyzes prompts and routes tasks to appropriate agents
- **Research Agent**: Specialist that gathers context and background information for informed decision-making

## Workflow Step Definitions

Guild provides standalone, reusable workflow steps that can be combined into different workflow compositions. Each step is designed to be position-independent and referenced across different Guild commands:

### prompt-analysis: 🧠 Prompt Analysis & Reasoning (guild-reasoning-agent)
**Purpose**: Analyze and clarify user requests for accuracy and completeness
- **Prompt Analysis**: Deep analysis of user prompts for clarity, completeness, and feasibility
- **Typo Correction**: Automatic correction of spelling errors, grammar issues, and formatting problems
- **Error Detection**: Identify contradictions, impossible requirements, or conflicting instructions
- **Clarification Protocol**: Ask targeted questions if task requirements are unclear or incomplete  
- **Project Alignment**: Aligns user requests with project context, constraints, and existing patterns
- **Reasoned Output**: Create corrected and clarified prompt for subsequent workflow steps

### context-research: 🔍 High-Order Context Research
**Purpose**: Gather comprehensive background information and technical context
- **Research Agent Activation**: Gather comprehensive context and background information
- **Technology Mapping**: Identify relevant frameworks, libraries, and architectural components
- **Constraint Analysis**: Document technical limitations, dependencies, and compatibility requirements
- **Context Synthesis**: Combine research findings with prompt analysis for comprehensive context delivery

### planning: 🎯 Strategic Planning  
**Purpose**: Create detailed implementation specifications and architectural designs
- **Planning Agent Activation**: Single planning agent creates detailed implementation plans using available context
- **Opus Model Requirement**: Planning agents MUST use Opus model as specified in `.guild/instructions.md`
- **Architecture Design**: Create comprehensive system design and implementation specifications
- **Instruction Compliance**: All planning decisions must follow requirements in `.guild/instructions.md`
- **Context Handoff**: Provide detailed specifications for implementation steps

### task-research: 📚 Task-Specific Research
**Purpose**: Conduct targeted research for specific implementation requirements
- **Additional Research**: Conduct targeted research for specific implementation requirements identified during planning
- **Technical Deep-Dive**: Research specific technologies, patterns, or solutions needed for implementation
- **Implementation Context**: Prepare specialized context packages for implementation agents
- **Validation Research**: Research testing strategies, quality standards, and verification approaches

### implementation: 🔨 Implementation
**Purpose**: Execute planned specifications with context-driven development
- **Unified Engineer Activation**: Unified engineers execute planned specifications following detailed architecture
- **Instruction Compliance**: All implementation must follow ignore patterns and requirements from `.guild/instructions.md`
- **Context-Driven Execution**: Execute planned implementation using research context and planning guidance
- **Sequential Implementation**: Follow planning roadmap with proper context flow from previous steps
- **Quality Integration**: Apply researched best practices and planning-specified quality requirements

### error-detection: 🐛 Error Detection & Fixing
**Purpose**: Systematic identification and resolution of implementation issues
- **Systematic Error Analysis**: Identify and resolve all implementation errors systematically
- **Context-Aware Debugging**: Use research context and planning guidance for error resolution
- **Comprehensive Validation**: Ensure fixes align with research findings and planning requirements
- **Quality Assurance**: Apply comprehensive analysis for error pattern identification and resolution

### refactor-planning: ♻️ Refactoring & Cleanup Planning
**Purpose**: Plan optimization and code improvement strategies
- **Generalization Strategy**: Plan generalization and simplification of codebase for maintainability
- **Research-Informed Optimization**: Use research context to identify optimization opportunities
- **Architecture Alignment**: Ensure refactoring plans align with architectural context from research phase
- **Quality Enhancement**: Plan improvements based on researched best practices and quality standards

### testing: 🧪 Testing & Quality Assurance
**Purpose**: Comprehensive testing of implemented features and changes
- **Test Strategy**: Develop appropriate testing strategy based on changes made
- **Test Implementation**: Create and execute tests for new features, bug fixes, or refactored code
- **Quality Validation**: Ensure tests cover edge cases and integration points
- **Test Scope**: Focus testing on affected areas (default) or entire project (with --project flag)
- **Regression Prevention**: Validate that changes don't break existing functionality

### verification: ✅ Final Verification
**Purpose**: Final validation and quality assurance of completed work
- **Final Error Detection**: Comprehensive error detection and validation after implementation/refactoring
- **Quality Assurance**: Complete quality validation using research-backed standards
- **Context Validation**: Verify all requirements from prompt analysis, research, and planning are met
- **Deployment Readiness**: Ensure comprehensive validation and quality assurance before completion

## Workflow Compositions

Different Guild commands use different combinations of these standalone workflow steps:

### `/guild "task"` - General Workflow (4 steps)
1. **prompt-analysis**: guild-reasoning-agent analyzes and clarifies task requirements, corrects typos, aligns with project
2. **context-research**: guild-research-agents gather background information and technical context  
3. **planning**: guild-planning-agent creates implementation approach
4. **implementation**: framework-coupled engineers execute with integrated planning and implementation

### `/guild:full "task"` - Comprehensive Workflow (8 steps)
1. **prompt-analysis**: Analyze and clarify task requirements
2. **context-research**: Gather comprehensive background information
3. **planning**: Create detailed implementation specifications
4. **task-research**: Conduct targeted implementation research
5. **implementation**: Execute planned specifications
6. **error-detection**: Systematic error identification and resolution
7. **refactor-planning**: Plan optimization and cleanup strategies
8. **verification**: Final validation and quality assurance

### `/guild:refactor "description"` - Refactoring Workflow (4 steps)
1. **prompt-analysis**: Analyze refactoring requirements and scope
2. **context-research**: Research current codebase and optimization opportunities
3. **refactor-planning**: Plan comprehensive refactoring strategy
4. **verification**: Validate refactoring results and quality standards

## Standard Execution Framework

**CRITICAL**: All Guild commands follow standardized execution patterns defined below. Commands reference these standard frameworks instead of redefining them, ensuring consistency and maintainability across the entire Guild system.

### Standard Command Processing Framework

All Guild commands follow this three-phase processing structure:

#### Phase 1: Task Analysis
**Purpose**: Parse and validate command-specific requirements
**Pattern**: `**Parse [task-type]** for [specific requirements] and [context-specific details]`
**Variations**:
- **General Tasks**: Parse user prompt for task complexity and requirements
- **Bug Fixing**: Parse bug description for symptoms, reproduction steps, and technical context
- **Planning Tasks**: Parse task description for planning requirements and scope
- **Specifications**: Parse specification description for clarity, scope, and level requirements
- **Refactoring**: Parse refactoring prompt for improvement objectives and scope

#### Phase 2: Agent Selection
**Purpose**: Determine optimal agents based on task characteristics
**Pattern**: `**Determine [selection-criteria]** based on [task-type] and [project-context]`
**Standard Logic**: Analyze task requirements to select appropriate specialized agents from project's agent ecosystem

#### Phase 3: Workflow Activation
**Purpose**: Activate appropriate workflow composition for task type
**Pattern**: `**Activate [workflow-type]** [with task-specific considerations]`
**Reference**: Commands specify their workflow composition using stage definitions from "Workflow Step Definitions" section

### Standard Workflow Execution Protocol

**MANDATORY EXECUTION STEPS**: All Guild commands MUST follow this standardized 7-step execution protocol:

1. **Workflow Stage Compliance**: Follow workflow stages defined in `.guild/overview.md` [with command-specific completeness requirements]
2. **Ignore Pattern Respect**: Respect `.guild/ignore.md` patterns unless explicitly requested by user
3. **Agent Engagement**: Engage specialized agents from `.claude/agents/` directory based on [task-specific scope]
4. **Systematic Approach**: Maintain [command-specific approach] with validation at each step
5. **Comprehensive Analysis**: Apply comprehensive analysis to ALL agents throughout [task-type] process
6. **Stage Completion**: Complete all [command-specific number] stages before considering [task-type] complete
7. **Guild Compliance Validation**: Ensure all agents strictly follow Guild configuration files and reference `.guild/overview.md` as master authority

**EXECUTION VARIATIONS BY COMMAND TYPE**:
- **Simplified Workflows** (guild): Focus on essential stages with streamlined execution
- **Comprehensive Workflows** (guild:full): Complete all 8 stages with full validation
- **Specialized Workflows** (fix/refactor/plan/spec): Optimized stage sequences for specific task types

### Standard Agent Coordination Patterns

**UNIVERSAL AGENT COORDINATION**: All Guild commands follow standardized agent coordination patterns:

#### Core System Agents (Always Present)
- **guild-planning-agent**: Mandatory unified task analysis, planning, and routing coordination
- **guild-research-agent**: Context research specialist with configurable MCP integration and comprehensive background analysis

#### Specialized Agent Patterns (Command-Specific)
- **Planning Focus Commands**: Engage specialized planning agents for architectural design and strategic planning
- **Implementation Focus Commands**: Engage specialized implementation agents for code execution and development
- **Quality Focus Commands**: Prioritize specialized agents for system stability, validation, and quality assurance

#### Context Handoff Protocol
- **Clean Context Flow**: Single planning agent provides detailed specifications for unified engineers with well-defined interfaces
- **Parallel Execution**: Agents coordinate for simultaneous work where appropriate and beneficial
- **Quality Integration**: All agents maintain focus on [command-specific quality priorities]

### Standard Compliance Requirements

**CRITICAL COMPLIANCE REQUIREMENTS**: All Guild commands MUST adhere to these universal requirements:

#### Mandatory Execution Standards
- ✅ **Stage 1 MANDATORY**: Every task MUST begin with prompt analysis and reasoning - NO EXCEPTIONS
- ✅ **Sequential Execution**: Stages MUST be executed in order with proper context flow - NO STAGE SKIPPING
- ✅ **Research Before Implementation**: Context research MUST be completed before implementation agent activation - NO DIRECT IMPLEMENTATION
- ✅ **Clean Context Handoffs**: Single planning agent MUST provide detailed specifications for unified engineers with well-defined interfaces
- ✅ **Analysis Mode**: ALL agents use deep analysis and multiple approaches throughout execution
- ✅ **Implementation Verification**: Implementation agents must verify work against specifications and validate execution quality

#### Workflow Violation Prevention
- ❌ **No Direct Implementation**: NEVER proceed directly to implementation without completing required preceding stages
- ❌ **No Stage Skipping**: NEVER bypass any of the command-defined mandatory stages
- ❌ **No Context Breaking**: NEVER break clean context handoffs between planning and implementation agent transitions

#### System Integration Compliance
- **Master Reference Authority**: All execution must align with Guild system requirements defined in `.guild/overview.md`
- **Configuration Adherence**: All agents must follow requirements specified in `.guild/instructions.md`
- **Ignore Pattern Respect**: All operations must respect exclusion patterns in `.guild/ignore.md`
- **Quality Gate Integration**: Comprehensive validation at every workflow stage with systematic quality assurance

**FRAMEWORK REFERENCE**: Commands reference these standard execution frameworks using: "See `.guild/overview.md` 'Standard Execution Framework' for complete execution protocols and compliance requirements."

## Current Project Agents

**Guild agents for this project** (see `.claude/agents/` for individual agent files):

### Core System Agents
- **guild-planning-agent** - Unified task analysis, planning, and routing coordinator with integrated prompt analysis, agent selection, and context coordination
- **guild-project-research-agent** - Project-specific context engineering focused on crafting targeted context within project scope
- **guild-global-research-agent** - Community solutions and best practices research using external sources with cross-project insights

### Unified Engineers (Shared Context Operation)
- **guild-cli-engineer** - CLI unified engineering with integrated planning and implementation capabilities
- **guild-package-engineer** - Package management unified engineering with shared context planning+implementation
- **guild-template-engineer** - Template system unified engineering with shared context capabilities
- **guild-config-engineer** - Configuration management unified engineering with integrated planning+implementation

**Agent Capabilities**: All agents operate with **comprehensive analysis** with parallel execution and self-verification protocols.

## System Architecture

### Directory Structure
```
.guild/                    # Guild system files (isolated)
├── instructions.md       # Project-specific Guild configuration
├── overview.md           # This file - comprehensive Guild documentation
├── agents.md             # Agent template and creation guide
├── ignore.md             # File exclusion patterns and rules
└── research/             # Research memory system

.claude/                   # Claude Code integration points
├── agents/               # Individual Guild agent files (guild-*.md)  
└── commands/             # Guild command files (guild-*.md)
```

### Integration Architecture
- **External Configuration**: Guild operates via configuration files, not code embedding
- **Agent System Leverage**: Uses Claude Code's existing `.claude/agents/` system
- **Command System Extension**: Adds commands to `.claude/commands/` without core modifications
- **Isolation Maintenance**: Complete separation between Guild and Claude Code functionality

### Ultrasync Mode
- **Enhanced Processing**: Ultrasync mode adds "Ultrasync" keyword in prompts for enhanced workflow coordination
- **Advanced Synchronization**: Enables advanced agent coordination and context synchronization across workflow stages
- **Automatic Activation**: Ultrasync mode activates automatically when enhanced coordination is beneficial for task execution

## Installation & Setup

### Installation
```bash
# Install Guild commands in any project
npx claude-guild

# Set up project-specific agents  
/guild:setup
```

### Project Setup Process
1. **Installation**: `npx claude-guild` copies command files to `.claude/commands/`
2. **Analysis**: `/guild:setup` examines project and creates `.guild/` structure  
3. **Agent Creation**: Appropriate engineers and architects created based on technology stack
4. **Workflow Ready**: Use `/guild "task"` for fast workflow or `/guild:full "task"` for complete comprehensive process

## Quality Standards

### Universal Requirements
- **Complete Claude Code Separation**: No modifications to Claude Code core
- **Command-Based Activation**: Only active when explicitly using `/guild:` commands
- **Parallel Execution Optimization**: Maximize concurrent agent work
- **Analysis Mode Compliance**: All agents use deep analysis and multiple approaches

### Agent Standards
- **Mandatory Self-Verification**: Architects verify solution optimality and consistency
- **Parallel Execution Capability**: Agents coordinate for simultaneous execution where possible
- **Quality Gate Integration**: Comprehensive validation at every workflow stage
- **Tool Inheritance**: All agents inherit Claude Code's tool system automatically

## Usage Examples

### Basic Workflow Execution
```
# Simplified workflow for quick tasks
/guild "Add comprehensive error handling to the CLI installation process"
/guild "Optimize NPM package configuration for better global distribution"

# Complete workflow for complex tasks
/guild:full "Create automated tests for the template processing system"
/guild:full "Implement comprehensive architectural refactoring"
```

### Agent Management
```
/guild:setup "focus on security and performance optimization"
/guild:setup
/guild:instructions "All API interactions must include proper error handling"
```

### Research Integration
```
/guild:research "latest Node.js CLI best practices"
/guild:research "NPM package optimization techniques"
```

## System Benefits

### For Development Tasks
- **Comprehensive Analysis**: Every task analyzed from multiple perspectives
- **Parallel Efficiency**: Multiple agents work simultaneously where possible
- **Quality Assurance**: Multi-stage process ensures thorough validation
- **Consistency Maintenance**: Self-verification protocols maintain code consistency

### For Claude Code Integration
- **Zero Impact**: Normal Claude Code usage completely unchanged
- **Optional Enhancement**: Guild provides additional capability when requested
- **Clean Separation**: Complete isolation maintains system integrity
- **Extensible Design**: Guild can be easily updated or removed

## Guild System File Structure & References

**CRITICAL**: All agents must understand and reference this complete Guild system architecture:

### Core Guild Files (All agents must be aware of these)

```
.guild/                           # Guild system directory
├── overview.md                   # THIS FILE - Master reference for all agents
├── instructions.md               # Mandatory agent configuration and requirements  
├── ignore.md                     # File exclusion patterns and rules
└── agents.md                     # Agent creation templates and standards
```

### Detailed File Purposes

- **`.guild/overview.md`** (THIS FILE): Master reference document that ALL agents must know exists and reference
- **`.guild/instructions.md`**: Mandatory configuration file that ALL agents must follow
- **`.guild/ignore.md`**: File exclusion patterns that ALL agents must respect
- **`.guild/agents.md`**: Agent creation templates and role definitions for reference

### Agent Integration Points

```
.claude/                          # Claude Code integration
├── agents/                       # Individual Guild agent instances
│   ├── guild-planning-agent.md
│   ├── guild-project-research-agent.md
│   ├── guild-global-research-agent.md
│   └── guild-*-agent.md         # Other project-specific agents
└── commands/                     # Guild command definitions
    └── guild-*.md               # Command files that create agents
```

### Universal Agent Compliance Summary

**EVERY GUILD AGENT MUST**:
1. ✅ **Know `.guild/overview.md` exists** (this master reference file)
2. ✅ **Follow `.guild/instructions.md`** (mandatory configuration requirements)
3. ✅ **Follow command-defined workflows** (workflow stages defined by executing command)
4. ✅ **Respect `.guild/ignore.md`** (file exclusion patterns)
5. ✅ **Reference `.guild/agents.md`** (understand agent roles and standards)

---

**Guild System Authority**: This overview serves as the central authority and reference point for all Guild system components, ensuring consistent, high-quality workflow execution across all agents and tasks.
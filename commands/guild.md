# /guild

**Usage**: `/guild [flags] "your task prompt"`

**Interactive Mode**: `/guild [flags]` - If no task is provided, Guild will prompt you for the task interactively

**Purpose**: Execute any task with Guild's comprehensive multi-stage workflow system featuring deep reasoning, strategic planning, and systematic implementation.

## Workflow Stage System

Guild uses a modular workflow stage system where you can enable/disable specific execution stages:

### Default Workflow Stages (Always Enabled)
- **🧠 Reasoning Stage**: Prompt analysis, typo correction, and requirement clarification (`prompt-analysis` stage)
- **🔍 Research Stage**: Context gathering and background research (`context-research` stage)
- **🎯 Planning Stage**: Strategic planning and implementation architecture (`planning` stage)  
- **🔨 Implementation Stage**: Code execution and development (`implementation` stage)

### Optional Workflow Stages (Enable with Flags)
- **♻️ Refactoring Stage**: Code optimization and cleanup (`refactor-planning` + refactoring execution)
- **🐛 Fix Stage**: Error detection and systematic debugging (`error-detection` stage)
- **🧪 Testing Stage**: Test creation and quality assurance (`testing` stage)
- **✅ Verification Stage**: Final validation against requirements (`verification` stage)

## Command Flags & Stage Triggering Logic

### Disable Default Stages
- `--no-reason` - Disable reasoning stage (skip prompt analysis)
- `--no-plan` - Disable planning stage (skip strategic planning)
- `--no-implement` - Disable implementation stage (planning/analysis only)

### Enable Optional Stages  
- `--refactor` - Enable refactoring stage (code optimization with refactor-planning)
- `--fix` - Enable fix stage (error detection and debugging)
- `--test` - Enable testing stage (test creation and validation)
- `--verify` - Enable verification stage (requirement validation)
- `--full` - Enable comprehensive workflow (combines --verify + --test + --refactor)
- `--spec` - Enable specification-driven mode (update specs first, then implement)

### Scope Modifiers
- `--project` - Apply testing and refactoring to entire project (default: focused on changes only)

## Stage Triggering Logic

### Special Stage Combinations

**Planning-Only Mode** (when `--no-implement` is the ONLY flag specified):
- **Trigger**: `/guild --no-implement "task"` with no other flags
- **Stages**: reasoning → research → planning → **prompt to save output**
- **Behavior**: Execute reasoning, research and planning stages, then ask user if they want to save planning output to a file
- **Use Case**: Strategic analysis and planning without any implementation

**Refactor-Only Mode** (when `--refactor` is the ONLY flag specified):
- **Trigger**: `/guild --refactor "task"` with no other flags  
- **Stages**: reasoning → research → refactor-planning → refactoring execution (skips regular implementation)
- **Behavior**: Focus entirely on code optimization, refactor-planning stage is mandatory
- **Use Case**: Code optimization and cleanup without new feature implementation

**Comprehensive Mode** (when `--full` flag is specified):
- **Trigger**: `/guild --full "task"`
- **Stages**: reasoning → research → planning → implementation → testing → verification → refactoring
- **Behavior**: Complete development lifecycle from analysis through quality assurance
- **Use Case**: Complete feature development with full quality assurance
- **Note**: `--full` flag automatically enables `--test`, `--verify`, and `--refactor`

**Specification-Driven Mode** (when `--spec` flag is specified):
- **Trigger**: `/guild --spec "task"`
- **Stages**: reasoning → spec-analysis → spec-update → research → planning → implementation
- **Behavior**: Specifications updated BEFORE implementation, ensuring documentation-driven development
- **Use Case**: Feature development requiring specification updates and documentation-first approach
- **Agent**: Automatically includes guild-spec-agent with "think-harder" mode
- **Quality Gate**: Implementation cannot proceed until specifications are properly updated

**Standard Flag Processing**:
1. **Start with defaults**: reasoning + research + planning + implementation
2. **Process --full flag**: If present, enable test + verify + refactor stages
3. **Process --spec flag**: If present, enable specification-driven workflow
4. **Apply disable flags**: Remove specified stages  
5. **Apply enable flags**: Add optional stages
6. **Handle special modes**: Adjust stage flow for specific combinations

## Interactive Task Prompting

If no task description is provided with the command, enter interactive mode:

### Interactive Mode Flow

1. **Detect Missing Task**: Check if task description was provided
2. **Analyze Project Context**: Identify project type and technologies
3. **Display Interactive Prompt**: Show context-aware prompt with examples
4. **Process User Input**: Validate and execute with provided task

### Interactive Prompt Template

```
🏛️ **Guild Ready - [Detected Technologies]**

What task would you like to execute?

**Examples for your project:**
• [Context-specific example based on detected stack]
• [Another relevant example]
• [Testing/refactoring example if applicable]

**Selected flags:** [Show any flags provided]
**Available flags:** --refactor, --test, --verify, --project, --fix

Enter your task description:
```

### Context-Aware Examples

Based on detected technologies, provide relevant examples:

**React Project:**
- Create a new dashboard component with Material-UI
- Add error boundary to the application
- Implement lazy loading for routes

**Express API:**
- Add rate limiting middleware
- Create CRUD endpoints for products
- Implement JWT authentication

**Full-Stack:**
- Build user profile feature with API and UI
- Add real-time notifications with WebSocket
- Implement file upload with progress tracking

## Guild Configuration Check

First, check if Guild is configured for this project by looking for `.guild/instructions.md` and validate Guild file integrity:

**Configuration Validation**:
1. **Instructions File**: Check for `.guild/instructions.md` (required for Guild operation)
2. **Ignore Patterns**: Check for `.guild/ignore.md` (create default if missing)
3. **Agent Directory**: Verify `.claude/agents/guild/` contains Guild agents
4. **Partial Setup Recovery**: If some files missing, provide guidance for completion

### If Guild NOT Configured

Display this message and STOP:

```
🏛️ **Guild Not Configured**

Guild is not yet set up for this project. To use the workflow:

1. **Run Setup**: Use `/guild:setup` to analyze your project and create appropriate agents
2. **Flag-Based Workflow**: After setup, use `/guild [flags] "task"` with configurable workflow stages
3. **Available Flags**: --refactor, --fix, --test, --verify, --project, --no-reason, --no-plan, --no-implement

**To get started**: `/guild:setup [optional-guidance]`
```

### If Guild IS Configured

**CRITICAL**: This command MUST activate the Guild workflow with user-specified flags and stages.

## Workflow Stage Processing

**MANDATORY WORKFLOW ACTIVATION**: Execute the flag-based Guild workflow system with configurable stages:

### Stage Selection & Validation
1. **Parse Flags**: Analyze command flags to determine stage configuration
2. **Default Configuration**: Start with reasoning + planning + implementation stages enabled
3. **Apply Disable Flags**: Remove stages based on --no-* flags
4. **Apply Enable Flags**: Add optional stages based on feature flags
5. **Special Mode Detection**: Handle planning-only and refactor-only modes
6. **Stage Validation**: Ensure at least one meaningful stage is enabled
7. **Scope Configuration**: Set global vs focused scope for testing/refactoring stages

### Workflow Stage Execution Sequence

Execute activated workflow stages in this mandatory order:

### Context-Only Stages (No Changes Allowed)

#### 1. 🧠 Reasoning Stage (unless --no-reason)
**Stage**: `prompt-analysis`
**Agent**: guild-reasoning-agent (context-only)
**Purpose**: Analyze user request, correct typos, clarify requirements, align with project context
**Changes**: **NONE** - Only creates analysis context for other agents
**Thinking Mode**: Often benefits from "think-harder" or "ultrathink" modes

#### 2. 🔍 Context Research Stage (always enabled by default)
**Stage**: `context-research`  
**Agents**: guild-project-research-agent, guild-global-research-agent (context-only, parallel execution)
**Purpose**: Gather background information and technical context for all subsequent stages
**Changes**: **NONE** - Only creates research context for other agents

**Parallel Research Execution**:
- **Context Selection**: Automatically determines research focus areas based on task complexity
- **Project Research**: Analyze codebase patterns, technology stack, constraints, and quality
- **Global Research**: Research framework practices, community standards, trends, and integration patterns
- **Coordination**: Smart context distribution to avoid overlap and maximize research coverage

#### 3. 🎯 Planning Stage (unless --no-plan)
**Stage**: `planning`
**Agent**: guild-planning-agent (context-only)
**Purpose**: Create implementation approach and coordinate subsequent stages
**Changes**: **NONE** - Only creates strategic context for implementation agents
**Thinking Mode**: Often benefits from "ultrathink" mode for comprehensive strategy
**Special Modes**: 
- **Planning-Only Mode**: If `--no-implement` is the only flag, after planning completion, prompt user to save planning output to file
- **Refactor-Only Mode**: If `--refactor` is the only flag, planning focuses on refactoring strategy

### Specification-Driven Stages (--spec flag)

#### 2a. 📋 Specification Analysis Stage (if --spec)
**Stage**: `specification-analysis`
**Agent**: guild-spec-agent (context-only)
**Purpose**: Analyze current project specifications and identify update requirements
**Changes**: **NONE** - Only analyzes existing specifications
**Thinking Mode**: **MANDATORY "think-harder"** for thorough specification analysis
**Input**: Task analysis from reasoning stage
**Output**: Specification gap analysis and update requirements

#### 2b. 📝 Specification Update Stage (if --spec)
**Stage**: `specification-update`
**Agent**: guild-spec-agent (specification-updates-only)
**Purpose**: Update project specifications and documentation before implementation
**Changes**: **SPECIFICATION UPDATES ONLY** - Updates docs/specs, never implementation
**Scope**: API docs, technical specs, requirements, testing specifications, integration contracts
**Quality Gate**: Implementation cannot proceed until specifications are properly updated
**Output**: Updated specifications and implementation guidelines

### Implementation Stages (Changes Allowed)

#### 4. 🔨 Implementation Stage (conditional execution)
**Stage**: `implementation`
**Agents**: framework-coupled engineers (implementation agents)
**Purpose**: Execute planned specifications with quality integration
**Changes**: **ALLOWED** - Creates code, modifies files, implements features
**Input**: Structured context from context-only agents (reasoning, research, planning)
**Execution Logic**: 
- **Skip if**: `--no-implement` flag is present
- **Skip if**: Refactor-only mode (when `--refactor` is the only flag specified)
- **Execute if**: Standard workflow or when combined with other feature flags

#### 5. ♻️ Refactoring Stage (if --refactor)
**Stages**: `refactor-planning` + refactoring execution
**Agents**: guild-planning-agent + framework-coupled engineers
**Purpose**: Plan and execute code optimization with scope based on --project flag
**Execution Modes**:
- **Refactor-Only Mode**: When `--refactor` is the only flag, replaces implementation stage entirely
- **Combined Mode**: When `--refactor` used with other flags, executes after implementation stage
- **Planning**: Refactor-planning stage is always mandatory when refactoring is enabled

#### 6. 🐛 Fix Stage (if --fix)
**Stage**: `error-detection`
**Agents**: framework-coupled engineers
**Purpose**: Systematic error identification and resolution

#### 7. 🧪 Testing Stage (if --test)
**Stage**: `testing`
**Agents**: framework-coupled engineers
**Purpose**: Create and execute tests with scope based on --project flag

### Quality Assurance Stages (Changes Allowed)

#### 5. 🧪 Testing Stage (if --test or --full)
**Stage**: `testing`
**Agents**: framework-coupled engineers (implementation agents)
**Purpose**: Create comprehensive tests and validate functionality
**Changes**: **ALLOWED** - Creates test files, modifies test suites
**Input**: Implementation results and context from previous stages
**Scope**: Controlled by --project flag (focused vs project-wide)

#### 6. ✅ Verification Stage (if --verify or --full)
**Stage**: `verification`
**Agent**: guild-verification-agent (implementation agent)
**Purpose**: Validate changes against original prompt and plan requirements  
**Changes**: **ALLOWED** - Can fix issues discovered during validation
**Input**: All implementation and testing results
**Validation**: Requirements compliance, functionality verification, quality assessment

#### 7. ♻️ Refactoring Stage (if --refactor or --full)
**Stages**: `refactor-planning` + refactoring execution
**Agents**: guild-planning-agent + framework-coupled engineers
**Purpose**: Plan and execute code optimization with scope based on --project flag
**Changes**: **ALLOWED** - Optimizes code structure and quality
**Execution Modes**:
- **Refactor-Only Mode**: When `--refactor` is the only flag, replaces implementation stage entirely
- **Combined Mode**: When `--refactor` used with other flags, executes after implementation stage
- **--full Mode**: Executes as final quality assurance step
**Planning**: Refactor-planning stage is always mandatory when refactoring is enabled

## Agent Coordination Protocol

**STAGE-SPECIFIC AGENT SELECTION**:
- **Core System Agents**: guild-reasoning-agent, guild-planning-agent (always available)
- **Research Agents**: guild-project-research-agent, guild-global-research-agent (context gathering)
- **Implementation Agents**: framework-coupled engineers (technology-specific execution)
- **Verification Agent**: guild-verification-agent (requirement validation)

**Context Handoffs**: Clean context flow between stages with well-defined interfaces matching activated workflow sequence.

## Example Usage

```bash
# Default workflow (reasoning + research + planning + implementation)
/guild "Add error handling to the CLI installation process"

# Comprehensive workflow (--full flag: complete development lifecycle)
/guild --full "Implement user authentication system"
# Executes: reasoning → research → planning → implementation → testing → verification → refactoring

# Planning-only mode (special combination - saves to file)
/guild --no-implement "Analyze the NPM package structure for optimization opportunities"
# Executes: reasoning → research → planning → option to save plan

# Refactor-only mode (special combination - replaces implementation)
/guild --refactor "Optimize the template processing system"
# Executes: reasoning → research → refactor-planning → refactoring

# Implementation with testing
/guild --test "Add comprehensive error handling to the CLI installation process"

# Full workflow with project-wide scope
/guild --full --project "Implement comprehensive logging system"

# Comprehensive workflow for complex features
/guild --full "Build real-time chat system with WebSocket support"

# Specification-driven development (update specs first, then implement)
/guild --spec "Add user authentication system with OAuth2 support"
# Executes: reasoning → spec-analysis → spec-update → research → planning → implementation

# Specification-driven with comprehensive quality assurance
/guild --spec --full "Implement REST API for user management"
# Executes: reasoning → spec-analysis → spec-update → research → planning → implementation → testing → verification → refactoring

# Bug fixing with comprehensive validation
/guild --fix --full "Fix database connection issues and ensure reliability"

# Specification-driven refactoring (update specs during optimization)
/guild --spec --refactor "Refactor authentication system to support multiple providers"

# Refactoring with global scope and testing (equivalent to --full for refactoring)
/guild --refactor --test --verify --project "Optimize the template processing system"

# Reasoning disabled, direct to specification-driven implementation
/guild --no-reason --spec "Update package.json version to 1.1.0 with spec updates"
```

## Workflow Stage Benefits

**🎯 Configurable Workflow**: Choose exactly which stages you need for each task
**⚡ Efficient Execution**: Skip unnecessary stages for simple tasks  
**🔍 Comprehensive Options**: Add testing, verification, and refactoring as needed
**🏆 Complete Lifecycle**: Use `--full` flag for comprehensive development workflow
**🌐 Flexible Scope**: Focus changes or apply globally with --project flag
**🧠 Smart Defaults**: Reasoning + planning + implementation enabled by default
**🔄 Stage Composition**: Combine multiple optional stages for complex workflows
**🎭 Special Modes**: Planning-only and refactor-only modes for specialized workflows
**🔒 Quality Assurance**: `--full` flag ensures testing, verification, and refactoring
**📋 Specification-First**: `--spec` flag enforces documentation-driven development
**🎨 Agent Specialization**: Clear separation between context-only and implementation agents

### --full Flag Advantages

**🚀 One-Command Excellence**: Complete development lifecycle in single command
**📋 Systematic Quality**: Mandatory testing, verification, and refactoring stages  
**🧠 Context-Driven**: Context-only agents provide comprehensive analysis before implementation
**⚙️ Production-Ready**: Ensures code meets quality standards before completion
**🔄 Integrated Workflow**: Seamless flow from analysis through implementation to quality assurance

### --spec Flag Advantages

**📚 Documentation-Driven**: Specifications always updated before implementation
**🎯 Requirements Clarity**: Clear specifications guide implementation decisions
**📝 Living Documentation**: Specs remain synchronized with actual implementation
**🔍 Think-Harder Analysis**: Guild-spec-agent uses enhanced thinking for thorough spec analysis
**🏗️ Architecture Consistency**: Implementation follows well-defined specifications
**✅ Quality Gates**: Implementation blocked until specifications are properly updated

The flag-based workflow stage system provides precise control over Guild execution while maintaining systematic quality through configurable workflow stages and specialized agent coordination.
# /guild

**Usage**: `/guild [flags] "your task prompt"`

**Interactive Mode**: `/guild [flags]` - If no task is provided, Guild will prompt you for the task interactively

**Purpose**: Execute any task with Guild's comprehensive multi-stage workflow system using project-specific agents dynamically discovered at runtime.

## ⚠️ MANDATORY AGENT ORCHESTRATION REQUIREMENT

**CRITICAL**: Guild operates through COMPLETE AGENT DELEGATION. The main thread performs ONLY reasoning - ALL other work MUST be delegated to agents.

**ORCHESTRATION PRINCIPLES**:
1. **Main Thread = Reasoning ONLY**: Uses ultrathink for prompt analysis, then orchestrates agents
2. **Everything Else = Agent Execution**: Research, planning, implementation, validation ALL through agents
3. **Maximum Parallelization**: Execute agents asynchronously whenever possible
4. **No Direct Execution**: Main thread NEVER executes implementation, only coordinates
5. **General-Purpose Agents**: Use for non-specialized async tasks
6. **100% Agent Utilization**: Every non-reasoning task MUST go through an agent

**COMPLIANCE**: This is MANDATORY for prompt-first, agent-orchestrated architecture.

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
- `--reason` - Enable reasoning-only mode (prompt analysis and debugging) when used alone
- `--fix` - Enable fix stage (error detection and debugging) OR fix-only mode when used alone
- `--plan` - Enable planning-only mode (no implementation, save plan to file) when used alone
- `--research` - Enable research-only mode (no planning/implementation) when used alone
- `--refactor` - Enable refactoring stage (code optimization with refactor-planning)
- `--test` - Enable testing stage (test creation and validation)
- `--verify` - Enable verification stage (requirement validation)
- `--full` - Enable comprehensive workflow (combines --verify + --test + --refactor)
- `--spec` - Enable specification-driven mode (update specs first, then implement)

### Scope Modifiers
- `--project` - Apply testing and refactoring to entire project (default: focused on changes only)

## Stage Triggering Logic

### Special Stage Combinations

**Reasoning-Only Mode** (when `--reason` is the ONLY flag specified):
- **Trigger**: `/guild --reason "prompt to analyze"` with no other flags
- **Stages**: reasoning only (no research/planning/implementation)
- **Behavior**: Deep prompt analysis, requirement clarification, and interpretation debugging
- **Use Case**: Prompt debugging, requirement clarification, understanding system interpretation

**Fix-Only Mode** (when `--fix` is the ONLY flag specified):
- **Trigger**: `/guild --fix "bug description"` with no other flags
- **Stages**: reasoning → research → planning → fix stage (no implementation)
- **Behavior**: Systematic bug fixing with root cause analysis and debugging
- **Use Case**: Bug resolution with comprehensive analysis but no new feature implementation

**Planning-Only Mode** (when `--plan` is the ONLY flag specified):
- **Trigger**: `/guild --plan "task"` with no other flags  
- **Stages**: reasoning → research → planning → **prompt to save plan to file**
- **Behavior**: Create comprehensive planning documentation without implementation
- **Use Case**: Strategic analysis and architectural design without any implementation

**Research-Only Mode** (when `--research` is the ONLY flag specified):
- **Trigger**: `/guild --research "query"` with no other flags
- **Stages**: reasoning → research (no planning/implementation)
- **Behavior**: Comprehensive context gathering and research synthesis
- **Use Case**: Information gathering and context building for future tasks

**Legacy Planning Mode** (when `--no-implement` is the ONLY flag specified):
- **Trigger**: `/guild --no-implement "task"` with no other flags
- **Stages**: reasoning → research → planning → **prompt to save output**  
- **Behavior**: Execute reasoning, research and planning stages, then ask user if they want to save planning output to a file
- **Use Case**: Strategic analysis and planning without any implementation (legacy support)

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

**Specification-Only Mode** (when `--spec` is the ONLY flag specified):
- **Trigger**: `/guild --spec "task"` with no other flags
- **Stages**: reasoning → research → planning → spec-analysis → spec-update (no implementation)
- **Behavior**: Create or update specifications without implementation
- **Use Case**: Documentation management and specification creation without code changes

**Specification-Driven Mode** (when `--spec` flag is combined with other flags):
- **Trigger**: `/guild --spec "task"` combined with other flags (like --full)
- **Stages**: reasoning → spec-analysis → spec-update → research → planning → implementation
- **Behavior**: Specifications updated BEFORE implementation, ensuring documentation-driven development
- **Use Case**: Feature development requiring specification updates and documentation-first approach
- **Agent**: Automatically includes guild-spec-agent with "think-harder" mode
- **Quality Gate**: Implementation cannot proceed until specifications are properly updated

**Standard Flag Processing**:
1. **Detect flag-only modes**: Check for single flags requiring specialized workflow
   - `--reason` only → reasoning-only mode (reasoning stage only)
   - `--fix` only → fix-only mode (reasoning + research + planning + fix stage)
   - `--plan` only → planning-only mode (reasoning + research + planning + save option)
   - `--research` only → research-only mode (reasoning + research)
   - `--spec` only → spec-only mode (reasoning + research + planning + spec stages)
   - `--no-implement` only → legacy planning mode (reasoning + research + planning + save option)
2. **Start with defaults**: reasoning + research + planning + implementation (if not flag-only mode)
3. **Process --full flag**: If present, enable test + verify + refactor stages
4. **Process --spec flag**: If combined with other flags, enable specification-driven workflow
5. **Apply disable flags**: Remove specified stages  
6. **Apply enable flags**: Add optional stages
7. **Handle special modes**: Adjust stage flow for specific combinations

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
**Available flags:** --reason, --fix, --plan, --research, --spec, --refactor, --test, --verify, --project, --full, --no-implement

Enter your task description:
```

### Context-Aware Examples

Based on detected technologies, provide relevant examples:

**Frontend Project:**
- Create a new dashboard component with UI framework
- Add error boundary to the application
- Implement lazy loading for routes

**Backend API:**
- Add rate limiting middleware
- Create CRUD endpoints for resources
- Implement authentication system

**Full-Stack:**
- Build user profile feature with API and UI
- Add real-time notifications with WebSocket
- Implement file upload with progress tracking

## Guild Configuration Check

First, read Guild instructions and discover available agents for this project:

### Read Instructions First

**Step 1: Load Guild Instructions**
- Read `.guild/instructions.md` to get current configuration
- Parse concurrency settings, workflow preferences, and project rules
- Apply these settings to all subsequent execution
- If missing, create with default settings during execution

### Dynamic Agent Discovery

**Step 2: Check Guild Configuration Status**
- Look for `.guild/overview.md` (primary indicator of setup completion)
- OR look for `.guild/instructions.md` (project configuration)
- If either exists, Guild IS configured (proceed with available resources)
- Also check for `.guild/ignore.md` (ignore patterns)

**Step 3: Discover Available Agents**
- Check `.claude/agents/guild/` directory for Guild agents
- Dynamically identify available agents:
  - **Core Agents**: guild-planning-agent, guild-*-research-agent
  - **Implementation Agents**: Any guild-*-engineer agents found
  - **Quality Agents**: guild-verification-agent, guild-spec-agent if present
  - **Project-Specific Agents**: Any other guild-* agents discovered

**Step 4: Adapt Workflow to Available Resources**
- If Guild configured but agents missing: Continue with main thread fallback and offer agent regeneration
- If core agents missing: Use enhanced main thread processing
- If implementation agents missing: Use available engineers or main thread fallback
- If quality agents missing: Skip those stages or provide alternatives
- Always work with what's available in the project

### If Guild NOT Configured

Check these conditions to determine if Guild is truly not configured:
1. `.guild` directory does not exist
2. `.guild/overview.md` is missing
3. `.guild/instructions.md` is missing

If ALL above are true, display this message and STOP:

```
🏛️ **Guild Not Configured**

Guild is not yet set up for this project. To use the workflow:

1. **Run Setup**: Use `/guild:setup` to analyze your project and create appropriate agents
2. **Flag-Based Workflow**: After setup, use `/guild [flags] "task"` with configurable workflow stages
3. **Available Flags**: --refactor, --fix, --test, --verify, --project, --no-reason, --no-plan, --no-implement

**To get started**: `/guild:setup [optional-guidance]`
```

### If Guild Configured but Agents Missing

If `.guild` exists but `.claude/agents/guild/` is missing or empty:

Display this message and CONTINUE with main thread execution:

```
🏛️ **Guild Configured - Agents Need Generation**

Guild setup detected but agents are missing.

Options:
1. **Regenerate Agents**: `/guild:setup --regenerate-agents`
2. **Continue Without Agents**: The system will use main thread coordination

Note: Performance is optimized with agents. Consider regenerating them.

Proceeding with main thread fallback execution...
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

#### 1. 🧠 Reasoning Stage (ONLY Main Thread Work)
**Stage**: `prompt-analysis`
**Executor**: **MAIN THREAD ONLY** with ultrathink mode
**Purpose**: Analyze user request, clarify requirements, create orchestration plan
**Changes**: **NONE** - Only creates analysis and orchestration context
**Output**: Agent orchestration plan with task decomposition
**CRITICAL**: This is the ONLY stage executed by main thread

#### 1a. 🧠 Reasoning-Only Stage (flag-only mode: `--reason` alone)
**Stage**: `reasoning-only`
**Executor**: Main thread with ultrathink mode
**Purpose**: Deep prompt analysis and interpretation debugging without subsequent stages
**Changes**: **NONE** - Only provides reasoning analysis output to user
**Input**: User prompt for analysis and clarification
**Execution Logic**: 
- **Execute if**: `--reason` is the only flag specified
- **Output**: Detailed reasoning analysis, requirement clarification, and interpretation insights
- **Focus**: Prompt debugging, understanding user intent, identifying edge cases and ambiguities

#### 2. 🔍 Context Research Stage (FULL Agent Delegation)
**Stage**: `context-research`
**Orchestrator**: Main thread dispatches ALL context agents
**Agent Types**: 
  - Research agents (project, global, domain-specific)
  - Analysis agents (patterns, complexity, dependencies)
  - Synthesis agents (context aggregation, insights)
  - Discovery agents (automatic exploration)
**Purpose**: Massive parallel context generation
**Execution**: **100% AGENT-BASED** - Zero main thread work

**Parallel Execution Pattern**:
```
DISCOVER all context-generation agents
CREATE task decomposition for each agent type
DISPATCH all agents simultaneously
STREAM results progressively
AGGREGATE into unified context
```

#### 3. 🎯 Planning Stage (Agent Delegation)
**Stage**: `planning`
**Orchestrator**: Main thread coordinates planning agents
**Agent Types**:
  - Strategic planning agents (architecture, approach)
  - Coordination agents (workflow, dependencies)
  - Technical planning agents (implementation design)
  - Risk assessment agents (mitigation strategies)
**Purpose**: Distributed planning through specialized agents
**Execution**: **100% AGENT-BASED** - Main thread aggregates only

**Planning Orchestration**:
```
IDENTIFY all planning-capable agents
DISPATCH based on planning specialization
ENABLE inter-agent coordination
SYNTHESIZE distributed plans
CREATE unified execution strategy
```

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

#### 4. 🔨 Implementation Stage (Full Agent Parallelization)
**Stage**: `implementation`
**Orchestrator**: Main thread orchestrates agent swarm
**Agent Types**:
  - Technology engineers (frontend, backend, CLI, etc.)
  - Domain specialists (auth, payments, analytics, etc.)
  - Integration agents (cross-cutting, boundaries)
  - Utility agents (helpers, async workers)
  - Quality agents (validation, testing)
**Purpose**: Massive parallel implementation
**Execution**: **100% AGENT-BASED** - Agent swarm architecture

**Swarm Implementation**:
```
DECOMPOSE implementation into parallel work
DISCOVER all available implementation agents
DISPATCH entire agent swarm
ENABLE autonomous agent coordination
STREAM progressive results
DYNAMICALLY rebalance workload
AGGREGATE into cohesive implementation
```

#### 4a. 🐛 Fix Stage (flag-only mode: `--fix` alone)
**Stage**: `fix-execution`
**Agents**: framework-coupled engineers (implementation agents)
**Purpose**: Systematic bug detection and resolution without new feature implementation
**Changes**: **ALLOWED** - Fixes bugs, modifies existing code for debugging
**Input**: Bug analysis from reasoning, research context, and debugging strategy from planning
**Execution Logic**: 
- **Execute if**: `--fix` is the only flag specified
- **Focus**: Root cause analysis, targeted fixes, regression prevention

#### 4b. 📋 Plan Generation Stage (flag-only modes: `--plan` or `--no-implement` alone)
**Stage**: `plan-generation`
**Agents**: guild-planning-agent (context-only) + file generation
**Purpose**: Create detailed planning documentation and save to file
**Changes**: **ALLOWED** - Creates plan files in `.guild/plans/` directory
**Input**: Strategic planning context and implementation approach
**Execution Logic**:
- **Execute if**: `--plan` or `--no-implement` is the only flag specified  
- **Output**: Structured planning files with implementation guidance
- **User Prompt**: Ask user if they want to save plan to file system

#### 4c. 📝 Specification Generation Stage (flag-only mode: `--spec` alone)
**Stage**: `specification-generation`
**Agents**: guild-spec-agent (specification-updates-only)
**Purpose**: Create or update project specifications without implementation
**Changes**: **ALLOWED** - Creates/updates specification files in `.guild/specs/` directory
**Input**: Specification requirements analysis and planning context
**Execution Logic**:
- **Execute if**: `--spec` is the only flag specified
- **Output**: Structured specification files (project/component/model level)
- **Focus**: Documentation creation without implementation changes

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

**ENHANCED SAME-AGENT PARALLELIZATION**:
- **Adaptive Instance Spawning**: Intelligently create 1-3 instances based on workload analysis and complexity estimation
- **Work Estimation Distribution**: Tasks distributed using complexity analysis, not simple round-robin
- **Affinity-Based Task Grouping**: Related tasks (same domain, file type, dependencies) assigned to same instance for context reuse
- **Performance Acceleration**: 4-5x speedup through intelligent parallel processing with minimal coordination overhead
- **Cross-Specialization Work Stealing**: Idle specialists can adapt to help overloaded specialists
- **Example**: 12 API endpoints → dependency analysis identifies 3 clusters → optimal distribution across instances with 13min total (vs 30min sequential)

**DYNAMIC AGENT SELECTION**:
- **Agent Discovery**: Dynamically find agents in `.claude/agents/guild/` at runtime
- **Core System Agents**: Use guild-planning-agent if available, reasoning done in main thread
- **Research Agents**: Use any guild-*-research-agent agents found
- **Implementation Agents**: Use any guild-*-engineer agents discovered
- **Quality Agents**: Use guild-verification-agent, guild-spec-agent if present
- **Fallback Strategy**: If specific agents missing, adapt workflow or provide guidance

**ADAPTIVE WORKFLOW**:
- **With Full Agent Set**: Execute complete workflow with all stages
- **Partial Agent Set**: Execute available stages, skip unavailable ones
- **Minimal Agent Set**: Provide guidance for completing Guild setup
- **No Agents**: Direct user to run `/guild:setup` command

**Context Handoffs**: Clean context flow between available agents with well-defined interfaces matching discovered agent capabilities.

## IMPLEMENTATION: Agent Orchestration System

**CRITICAL**: The following implementation steps MUST be executed by Claude Code to achieve Guild compliance:

### Step 1: Agent Discovery Implementation

**Execute Agent Discovery**:
```bash
# Use LS tool to check for Guild agents directory
ls .claude/agents/guild/
```

**Process Discovery Results**:
1. **Check Configuration Status**: First verify Guild setup by checking for `.guild/overview.md` or `.guild/instructions.md`
2. **If Guild NOT configured**: Display "Guild Not Configured" message and stop execution  
3. **If Guild configured but agents missing**: Display "Agents Need Generation" message and continue with main thread fallback
4. **If agents exist**: Scan available agents and parse agent types and capabilities
5. **Build Execution Plan**: Determine workflow stages based on available resources (agents or main thread fallback)

### Step 2: Workflow Orchestration Implementation

**Multi-Stage Agent Execution**:

#### Stage 1: Reasoning Stage (Main Thread with Ultrathink)
**Implementation**:
- Execute reasoning using ultrathink mode for comprehensive analysis
- Analyze user prompt, correct typos, clarify requirements
- Create structured reasoning context for subsequent agents
- **Context Output**: Structured analysis package for next stages

#### Stage 2: Research Stage (Parallel Agent Coordination)
**Implementation**:
```
EXECUTE IN PARALLEL:

IF guild-project-research-agent EXISTS:
  Task guild-project-research-agent with: 
  "Analyze project context for: [USER_TASK]
  
  Focus on:
  - Codebase patterns and architecture
  - Technology stack and constraints
  - Quality standards and testing approaches
  - Project-specific patterns and conventions
  
  Input Context: [REASONING_OUTPUT]
  Output: Structured project research package"

IF guild-global-research-agent EXISTS:
  Task guild-global-research-agent with:
  "Research best practices for: [USER_TASK]
  
  Focus on:
  - Framework patterns and community standards
  - Integration approaches and libraries
  - Performance and scalability considerations
  - Security and quality best practices
  
  Input Context: [REASONING_OUTPUT]
  Output: Structured global research package"

WAIT FOR PARALLEL COMPLETION
MERGE RESEARCH RESULTS into comprehensive research context
```

#### Stage 3: Planning Stage (Strategic Coordination)
**Implementation**:
```
IF guild-planning-agent EXISTS:
  Task guild-planning-agent with:
  "Create implementation strategy for: [USER_TASK]
  
  Input Context: 
  - Reasoning Analysis: [REASONING_OUTPUT]
  - Research Results: [RESEARCH_OUTPUT]
  
  Create strategic plan including:
  - Implementation approach and architecture
  - Agent assignments and coordination
  - Risk assessment and mitigation
  - Success criteria and validation
  
  Output: Strategic implementation plan with agent coordination"

ELSE:
  Create basic implementation plan using main thread analysis
```

#### Stage 4: Implementation Stage (Specialized Agent Execution)
**Implementation**:
```
IDENTIFY REQUIRED IMPLEMENTATION AGENTS based on:
- Detected technology patterns
- Available guild-*-engineer agents
- Task complexity and requirements

FOR EACH REQUIRED IMPLEMENTATION AGENT:
  IF agent EXISTS in .claude/agents/guild/:
    Task [agent] with:
    "Execute implementation for: [USER_TASK]
    
    Input Context:
    - Strategic Plan: [PLANNING_OUTPUT]
    - Research Context: [RESEARCH_OUTPUT] 
    - Requirements: [REASONING_OUTPUT]
    
    Implement according to plan with focus on:
    - Code quality and project standards
    - Integration with existing patterns
    - Testing and validation requirements
    
    Output: Implementation results and changes"
  
  ELSE:
    Execute implementation using main thread with available context

COORDINATE IMPLEMENTATION RESULTS
VALIDATE INTEGRATION BETWEEN AGENT OUTPUTS
```

#### Stage 5: Quality Assurance Stages (If Enabled)
**Implementation**:
```
IF --test OR --full flag enabled:
  IF guild-verification-agent EXISTS:
    Task guild-verification-agent with:
    "Create comprehensive tests for: [USER_TASK]
    
    Input Context: [IMPLEMENTATION_OUTPUT]
    
    Create and execute tests including:
    - Unit tests for new functionality
    - Integration tests for system interaction
    - Validation tests for requirements compliance
    
    Output: Test results and coverage analysis"

IF --verify OR --full flag enabled:
  Task guild-verification-agent with:
  "Validate implementation against requirements
  
  Input Context: 
  - Original Requirements: [REASONING_OUTPUT]
  - Implementation: [IMPLEMENTATION_OUTPUT]
  
  Verify:
  - Requirements compliance
  - Quality standards adherence
  - Integration correctness
  
  Output: Validation results and issue resolution"

IF --refactor OR --full flag enabled:
  Execute refactoring workflow with planning and implementation agents
```

### Step 3: Context Engineering Implementation

**Structured Context Handoffs**:
```xml
BETWEEN EACH STAGE, CREATE CONTEXT PACKAGE:

<context-handoff>
  <metadata>
    <from-stage>[source-stage]</from-stage>
    <to-stage>[target-stage]</to-stage>
    <timestamp>[ISO-8601]</timestamp>
    <priority>critical</priority>
  </metadata>
  
  <content>
    <summary>[High-level overview]</summary>
    <details>[Stage-specific results]</details>
    <requirements>[Key requirements and constraints]</requirements>
    <next-actions>[Recommended next steps]</next-actions>
  </content>
  
  <validation>
    <success-criteria>[How to measure success]</success-criteria>
    <quality-gates>[Required standards]</quality-gates>
  </validation>
</context-handoff>

PASS CONTEXT PACKAGE TO NEXT STAGE AGENT
VALIDATE CONTEXT RECEIPT AND UNDERSTANDING
```

### Step 4: Error Handling and Fallbacks

**Agent Missing Fallbacks**:
```
FOR EACH REQUIRED AGENT:
  IF agent NOT FOUND in .claude/agents/guild/:
    LOG: "Agent [agent-name] not found, using fallback approach"
    
    FALLBACK OPTIONS:
    1. Execute stage using main thread with enhanced context
    2. Skip stage if not critical to task completion  
    3. Provide user guidance for agent setup if critical
    
    CONTINUE with available agents and adapted workflow
```

**Quality Assurance**:
- Validate each stage completion before proceeding
- Ensure context handoffs are successful
- Monitor agent execution for errors or failures
- Provide clear feedback on workflow progress and results

### Step 5: Dynamic Workflow Adaptation

**Adaptive Execution Based on Available Agents**:
```
DISCOVERED_AGENTS = scan_guild_directory()
REQUIRED_STAGES = parse_flags_and_determine_stages()

FOR EACH REQUIRED_STAGE:
  IF required_agent_available(DISCOVERED_AGENTS):
    execute_stage_with_agent(stage, agent, context)
  ELSE:
    execute_stage_with_fallback(stage, context)
  
  UPDATE context_package WITH stage_results
  VALIDATE stage_completion

FINAL_VALIDATION:
- Ensure all required stages completed
- Validate final output meets requirements
- Provide comprehensive summary of workflow execution
```

## MANDATORY EXECUTION WORKFLOW

**CRITICAL**: Guild operates through COMPLETE AGENT ORCHESTRATION. Main thread is ONLY for reasoning and coordination.

### EXECUTION PHASE 1: Pre-Flight & Agent Discovery

```
1. PARSE COMMAND FLAGS → determine workflow stages
2. VALIDATE USER TASK → enter interactive mode if missing
3. CHECK GUILD CONFIGURATION: Verify Guild setup by checking `.guild/overview.md` or `.guild/instructions.md`
4. HANDLE CONFIGURATION STATUS:
   - If NOT configured: Display "Guild Not Configured" and STOP
   - If configured but agents missing: Display "Agents Need Generation" and continue with main thread fallback
   - If agents available: Proceed with agent-based execution
5. DISCOVER AND CATEGORIZE available agents by TYPE (if agents exist):
   - Context Generation Agents (research, analysis, synthesis)
   - Strategic Planning Agents (planning, coordination, architecture)
   - Domain Specialist Agents (technology-specific, scope-specific)
   - Implementation Agents (engineers, builders, integrators)
   - Quality Assurance Agents (validation, verification, testing)
   - Utility Agents (general-purpose, async workers)
6. BUILD orchestration plan based on available resources (agents or main thread fallback)
```

### EXECUTION PHASE 2: Main Thread Reasoning (ONLY Main Thread Work)

```
EXECUTE with ultrathink mode (MAIN THREAD):
"Analyze user request: [USER_TASK]

Create comprehensive orchestration plan:
- Clarify requirements and identify constraints
- Decompose task into parallel agent assignments
- Determine optimal agent coordination strategy
- Define success criteria for each agent
- Create structured context packages for agents

Output: Agent orchestration plan with task decomposition"

SAVE as: ORCHESTRATION_PLAN
```

### EXECUTION PHASE 3: 100% Agent-Based Execution

#### STAGE 1: Context Generation Phase (Parallel Agent Groups)
```
DISPATCH DISCOVERED CONTEXT AGENTS IN PARALLEL:

CONTEXT GENERATION WAVE:
- All research-type agents → gather diverse context
- All analysis-type agents → analyze patterns
- All synthesis-type agents → combine insights
- Project-specific context agents → domain knowledge

EXECUTION PATTERN:
- Main thread creates task decomposition
- Dispatch ALL context agents simultaneously
- Each agent works on assigned context scope
- Progressive result aggregation

WAIT for context generation completion
AGGREGATE → COMPREHENSIVE_CONTEXT
```

#### STAGE 2: Strategic Planning Phase (Planning Agent Types)
```
DISPATCH PLANNING AGENTS BY CAPABILITY:

PLANNING ORCHESTRATION:
- Strategic planning agents → high-level architecture
- Coordination agents → workflow orchestration
- Architecture agents → technical design
- Scope planning agents → domain-specific plans
- Integration planning agents → cross-cutting concerns

PARALLEL PLANNING:
- Each planning agent type works on its specialty
- Agents coordinate through shared context
- Progressive refinement of plans

WAIT for planning completion
SYNTHESIZE → ORCHESTRATED_PLAN

CRITICAL: Main thread ONLY aggregates, NEVER plans
```

#### STAGE 3: Implementation Phase (Maximum Parallelization)
```
IDENTIFY implementation scopes from ORCHESTRATED_PLAN
DISPATCH ALL IMPLEMENTATION AGENTS:

IMPLEMENTATION WAVES:
WAVE 1 - Domain Specialists:
  - Technology-specific engineers (frontend, backend, CLI, etc.)
  - Scope-specific specialists (auth, payments, etc.)
  - Pattern-specific implementers (API, UI, data, etc.)

WAVE 2 - Integration & Support:
  - Integration agents (cross-cutting concerns)
  - Utility agents (helper tasks)
  - Async workers (parallel subtasks)

WAVE 3 - Continuous Quality:
  - Validation agents (incremental checks)
  - Testing agents (progressive testing)
  - Quality agents (standards enforcement)

PROGRESSIVE COORDINATION:
- Dispatch all available implementation agents
- Agents self-organize based on dependencies
- Continuous result streaming and aggregation
- Dynamic re-tasking as work completes

FINAL: COMPLETE_IMPLEMENTATION
```

#### MANDATORY STAGE 4: Implementation (Specialized Agent Execution with Parallelization)
```
DETERMINE required implementation agents based on:
- Task requirements from REASONING_CONTEXT
- Technology patterns from RESEARCH_CONTEXT
- Implementation strategy from PLANNING_CONTEXT

ANALYZE PARALLELIZATION OPPORTUNITIES:
- Identify multiple independent tasks requiring same specialist
- Group similar work by agent specialization type
- Calculate optimal instance count (min(task_count, 3) per agent type)

FOR EACH required implementation (frontend, backend, cli, package, etc):
  IF corresponding guild-*-engineer agent FOUND:
    
    DETECT ENHANCED SAME-AGENT PARALLELIZATION:
    parallel_tasks = analyze_tasks_with_dependency_mapping()
    complexity_estimation = estimate_task_complexity(parallel_tasks)
    affinity_groups = group_tasks_by_affinity(parallel_tasks)
    instance_count = calculate_optimal_instances(parallel_tasks, complexity_estimation, max=3)
    
    IF instance_count > 1:
      SPAWN multiple instances of guild-*-engineer:
      
      FOR instance 1 to instance_count:
        TASK guild-*-engineer-{instance}:
        "IMPLEMENT [ASSIGNED_TASKS] for: [USER_TASK]
        
        Input Context:
        - Strategic Plan: [PLANNING_CONTEXT]
        - Technical Research: [RESEARCH_CONTEXT]  
        - Requirements: [REASONING_CONTEXT]
        - Assigned Tasks: [AFFINITY_GROUPED_TASK_BATCH_FOR_INSTANCE]
        - Task Complexity Estimates: [COMPLEXITY_ANALYSIS]
        - Dependency Information: [TASK_DEPENDENCIES]
        
        Implementation Requirements:
        - Work on assigned files/components only: [TASK_LIST]
        - Follow strategic plan and architecture
        - Adhere to project quality standards
        - Integrate with existing patterns
        - Coordinate with parallel instances for integration using dependency-aware scheduling
        - Apply affinity-based optimizations for context reuse
        - Enable cross-specialization work stealing if capacity available
        
        Output: Implementation for assigned tasks with changes"
        
      EXECUTE instances in parallel
      AGGREGATE results from all instances
      
    ELSE:
      TASK single guild-*-engineer (standard single-agent execution)
      
  ELSE:
    FALLBACK: Execute implementation using main thread with full context

COORDINATE all implementation results (including parallel instance outputs)
VALIDATE integration between different implementation aspects and parallel work
```

#### CONDITIONAL STAGE 5: Quality Assurance (If Flags Enabled)
```
IF --test OR --full flag enabled:
  IF guild-verification-agent FOUND:
    TASK guild-verification-agent:
    "CREATE COMPREHENSIVE TESTS for: [USER_TASK]
    
    Input Context: [IMPLEMENTATION_OUTPUT]
    
    Testing Requirements:
    - Unit tests for new functionality
    - Integration tests for system interaction
    - Edge case and error condition testing
    - Performance validation if applicable
    
    Execute tests and provide results"

IF --verify OR --full flag enabled:
  TASK guild-verification-agent (or main thread):
  "VALIDATE IMPLEMENTATION AGAINST REQUIREMENTS
  
  Compare:
  - Original requirements: [REASONING_CONTEXT]
  - Implementation results: [IMPLEMENTATION_OUTPUT]
  
  Verify:
  - All requirements met
  - Quality standards maintained
  - Integration correctness
  - No regression introduced
  
  Fix any identified issues"

IF --refactor OR --full flag enabled:
  Execute refactoring workflow following same pattern
```

### EXECUTION PHASE 4: Final Validation and Summary

```
1. VALIDATE all required stages completed successfully
2. VERIFY implementation meets original requirements
3. CHECK for any errors or incomplete tasks
4. PROVIDE comprehensive summary:
   - What was accomplished
   - Which agents were used
   - Any limitations or recommendations
   - Next steps if applicable
```

## Example Usage

```bash
# Default workflow (reasoning + research + planning + implementation)
/guild "Add error handling to the CLI installation process"

# Reasoning-only mode (prompt analysis and debugging)
/guild --reason "Implement a scalable microservices architecture with event-driven communication"
# Executes: reasoning only (outputs detailed prompt analysis and clarification)

# Fix-only mode (systematic bug fixing without implementation)
/guild --fix "Installation script fails on Windows with permission errors"
# Executes: reasoning → research → planning → fix stage

# Planning-only mode (creates detailed plans and saves to file)
/guild --plan "Implement user authentication system with JWT tokens"
# Executes: reasoning → research → planning → save plan option

# Research-only mode (comprehensive context gathering)
/guild --research "modern frontend framework patterns and performance optimization"
# Executes: reasoning → research

# Specification-only mode (creates/updates specs without implementation)
/guild --spec "API authentication endpoints with OAuth2 support"
# Executes: reasoning → research → planning → spec-analysis → spec-update

# Legacy planning-only mode (saves to file) 
/guild --no-implement "Analyze the NPM package structure for optimization opportunities"
# Executes: reasoning → research → planning → option to save plan

# Comprehensive workflow (--full flag: complete development lifecycle)
/guild --full "Implement user authentication system"
# Executes: reasoning → research → planning → implementation → testing → verification → refactoring

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

## IMPLEMENTATION TEMPLATES FOR CLAUDE CODE

### Agent Discovery Example

**Step 1: Execute Agent Discovery**
```
EXECUTE: LS .claude/agents/guild/

EXPECTED RESPONSES:
- If directory exists: List of guild-*-agent.md files
- If directory missing: Error message

EXAMPLE PROCESSING:
Found agents:
- guild-planning-agent.md → AVAILABLE
- guild-project-research-agent.md → AVAILABLE  
- guild-cli-engineer.md → AVAILABLE
- guild-verification-agent.md → AVAILABLE

EXECUTION PLAN: Full workflow with specialized agents
```

### Agent Task Execution Templates

**Template: Research Agent Invocation**
```
TASK guild-project-research-agent:

"PROJECT CONTEXT RESEARCH for: 'Add user authentication to the CLI app'

Input Context:
- Task: Add user authentication to CLI app
- Requirements: Secure login, JWT tokens, session management
- Constraints: Must integrate with existing CLI architecture

Analyze:
- Current CLI project structure and patterns
- Authentication libraries compatible with detected tech stack
- Security best practices for CLI applications
- Testing approaches for authentication flows
- Integration points with existing commands

Output: Structured project context package with recommendations"

EXPECTED OUTPUT: Comprehensive analysis of project-specific context
```

**Template: Planning Agent Invocation**
```
TASK guild-planning-agent:

"STRATEGIC IMPLEMENTATION PLANNING for: 'Add user authentication to the CLI app'

Input Context:
[REASONING_OUTPUT]: Requirements and constraints analysis
[RESEARCH_OUTPUT]: Project context and technical recommendations

Create comprehensive plan:
- Authentication architecture design
- Implementation phases and priorities
- Integration strategy with existing CLI commands
- Security considerations and best practices
- Testing strategy and validation criteria
- Error handling and user experience

Output: Strategic implementation plan with step-by-step approach"

EXPECTED OUTPUT: Detailed implementation strategy
```

**Template: Implementation Agent Invocation**
```
TASK guild-cli-engineer:

"IMPLEMENT CLI AUTHENTICATION for: 'Add user authentication to the CLI app'

Input Context:
[PLANNING_OUTPUT]: Strategic implementation plan
[RESEARCH_OUTPUT]: Technical context and recommendations
[REASONING_OUTPUT]: Original requirements

Implementation Requirements:
- Follow established CLI patterns and conventions
- Implement secure authentication with JWT tokens
- Add login/logout commands to existing CLI
- Integrate session management with command execution
- Include comprehensive error handling
- Add appropriate tests for authentication flow

Output: Complete authentication implementation with code changes"

EXPECTED OUTPUT: Working authentication system integrated into CLI
```

### Error Handling Scenarios

**Scenario 1: Agent Not Found**
```
IF guild-planning-agent NOT FOUND:
  DISPLAY: "guild-planning-agent not found, using enhanced main thread planning"
  EXECUTE: Enhanced planning using main thread with full context
  CONTINUE: with available agents
```

**Scenario 2: Agent Execution Failure**
```
IF agent task fails or times out:
  DISPLAY: "Agent [agent-name] failed, executing with fallback approach"
  EXECUTE: Fallback implementation using main thread
  LOG: Agent failure for debugging
  CONTINUE: workflow with remaining stages
```

**Scenario 3: No Agents Available**
```
IF NO agents found in .claude/agents/guild/:
  DISPLAY: "No Guild agents found. The system will execute using main thread coordination."
  EXECUTE: Complete workflow using enhanced main thread processing
  RECOMMEND: "Run /guild:setup to create specialized agents for better performance"
```

### Validation Checkpoints

**After Each Stage**:
```
VALIDATE:
1. Stage completed successfully
2. Required output generated  
3. Context properly structured for next stage
4. No critical errors occurred

IF validation fails:
  RETRY once with adjusted approach
  IF still fails: FALLBACK to main thread execution
  LOG issue for user awareness
```

**Final Validation**:
```
BEFORE COMPLETION:
1. All requested stages executed
2. Implementation meets original requirements
3. Quality standards maintained
4. User feedback provided on process and results

PROVIDE SUMMARY:
- Stages executed and agents used
- Key accomplishments
- Any limitations or fallbacks used  
- Recommendations for improvement
```

This implementation ensures Guild operates as designed with proactive sub-agent coordination while maintaining reliability through comprehensive error handling and fallback strategies.

## ⚠️ CRITICAL: AGENT TASKING WITHOUT CODE EMBEDDING

**When tasking agents, follow the NO CODE EMBEDDING policy:**

### **✅ CORRECT Agent Tasking Examples:**

**Research Agent Tasking:**
```
"Analyze project's authentication patterns and security approach.
Identify existing authentication methods, session management patterns,
and security considerations used in this project."
```

**Planning Agent Tasking:**
```  
"Create implementation strategy for user authentication feature.
Base plan on discovered project patterns and security requirements.
Include integration approach with existing systems."
```

**Implementation Agent Tasking:**
```
"Implement user authentication system following project's established patterns.
Integrate with existing architecture and maintain consistency with
discovered security practices and coding conventions."
```

### **❌ WRONG Agent Tasking (Violates Policy):**

```
"Use this authentication code template:
const express = require('express');
const jwt = require('jsonwebtoken');
app.post('/login', (req, res) => {"
```

**Why Wrong**: Contains embedded code, assumes Express.js, violates all core principles.

### **Intelligence Advantage:**
- **Dynamic Analysis**: Agents analyze YOUR actual project
- **Context-Aware**: Solutions fit YOUR specific architecture
- **Future-Proof**: Works with any technology stack evolution  
- **Intelligent**: Uses Claude's full capabilities, not templates
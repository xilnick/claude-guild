# /guild

---
name: guild
thinking_mode: ultrathink
model: opus
description: "Execute any task using Guild's intelligent 3-stage workflow with parallel agent execution"
---

**Usage**: `/guild [flags] "your task prompt"`

**Interactive Mode**: `/guild [flags]` - If no task is provided, Guild will prompt you for the task interactively

**Purpose**: Execute any task using Guild's simple 3-stage workflow with parallel agent execution.

## Intelligent Parallel Execution Strategy

**Smart Approach**: Guild operates with intelligent parallel execution using thinking modes for optimal performance.

**Intelligent Principles**:
- Main thread: Reasoning and coordination with appropriate thinking modes
- Planning agent: Think harder to evaluate parallelization for every task
- Implementation: Think to determine parallel execution when >2 tasks for same specialist
- Smart scaling: 2 instances for 3-4 tasks, 3 instances for 5+ tasks
- Single-threaded execution: Think about justification when beneficial
- TARGET: Intelligent parallel execution based on analysis
- Standard Read/Write tools for all .guild directory operations

**Smart Decision Making**:
- Planning agent thinks harder to determine optimal execution strategy
- Think to spawn instances when threshold met (>2 tasks)
- Agent responsibility catalog guides intelligent task routing
- Parallel-first default with thinking mode optimization

## Simple 3-Stage Workflow

Guild uses a simple, focused workflow:

### Default Workflow Stages (Always Enabled)
- **🧠 Reasoning Stage**: Prompt analysis and requirement understanding
- **🎯 Planning Stage**: Task decomposition and parallel execution strategy  
- **🔨 Implementation Stage**: Parallel code execution and development

## Command Flags

### Basic Control Flags
- `--no-reason` - Skip reasoning stage
- `--no-plan` - Skip planning stage (reasoning only)
- `--no-implement` - Skip implementation stage (planning only)

## Stage Processing

**Standard Processing**:
1. **Start with defaults**: reasoning → planning → implementation
2. **Apply disable flags**: Remove specified stages as requested
3. **Execute remaining stages**: Run enabled stages with parallel agents

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
• [Simple task example]

**Selected flags:** [Show any flags provided]
**Available flags:** --no-reason, --no-plan, --no-implement

Enter your task description:
```

## Intelligent Parallel Execution Flow

Guild intelligently executes optimized parallel workflow using thinking modes:

1. **🧠 Reasoning**: Think harder to analyze requirements and determine approach (ultrathink for complex projects)
2. **🎯 Planning**: Think harder to decompose task and plan intelligent parallel execution
3. **🔨 Implementation**: Think to execute work using parallel agents when >2 tasks

## Guild Configuration Check

First, check Guild setup and discover available agents:

### Configuration Discovery

**Step 1: Check Guild Configuration**
- Use Read tool to check `.guild/overview.md` or `.guild/instructions.md`
- If either exists, Guild is configured
- Use LS tool to check `.guild` directory exists

**Step 2: Agent Discovery**
- Check `.claude/agents/guild/` directory for available agents
- Identify core agents: guild-planning-agent, guild-*-research-agent
- Identify implementation agents: guild-*-engineer agents
- Adapt workflow based on available agents

### Configuration States

**If Guild NOT Configured**:
```
🏛️ **Guild Not Configured**

Guild is not yet set up for this project.

**To get started**: `/guild:setup`
```

**If Guild Configured but Agents Missing**:
```
🏛️ **Guild Configured - Agents Need Generation**

Options:
1. **Regenerate Agents**: `/guild:setup --regenerate-agents`
2. **Continue Without Agents**: Use main thread coordination

Proceeding with main thread fallback...
```

**If Guild IS Configured**:
Activate the 3-stage Guild workflow with available agents.

## Simple 3-Stage Workflow Processing

**WORKFLOW ACTIVATION**: Execute the simple 3-stage Guild workflow:

### Stage Processing
1. **Parse Flags**: Check for --no-* flags to disable stages
2. **Default Configuration**: reasoning → planning → implementation
3. **Apply Disable Flags**: Remove stages based on --no-* flags
4. **Execute Remaining Stages**: Run enabled stages with agents

### Stage Execution Sequence

#### 1. 🧠 Reasoning Stage
**Executor**: Main thread only
**Thinking Mode**: ultrathink
**Purpose**: Analyze user request and clarify requirements
**Changes**: None - creates analysis context only
**Output**: Task understanding and decomposition strategy

#### 2. 🎯 Planning Stage  
**Executor**: Planning agent (guild-planning-agent)
**Thinking Mode**: think harder for coordination and parallel optimization
**Purpose**: Task decomposition and intelligent parallel execution strategy
**Input**: Requirements from reasoning stage
**Output**: Implementation plan with intelligent parallel task assignments
**Requirement**: Think harder to evaluate parallelization for every task, think about single-threaded execution justification

#### 3. 🔨 Implementation Stage
**Executor**: Implementation agents (guild-*-engineer)
**Thinking Mode**: think for standard tasks, think harder for complex coordination
**Purpose**: Think to execute work using parallel agents when >2 tasks
**Input**: Implementation plan from planning stage
**Output**: Completed code changes and implementations
**Scaling**: Smart scaling: 2 instances for 3-4 tasks, 3 instances for 5+ tasks

**Intelligent Parallel Execution**: Think to spawn multiple instances when >2 tasks identified

## Agent Coordination Protocol

**INTELLIGENT PARALLEL EXECUTION**:
- **Smart Instance Spawning**: Think to create 2-3 instances when >2 tasks exist
- **Intelligent Task Distribution**: Think to assign related tasks to same instance for efficiency
- **Smart File Ownership**: Each file assigned to single instance to prevent conflicts
- **Standard Tools**: All .guild directory operations use standard Read/Write tools
- **Thinking-Based Decisions**: Think about single-threaded execution when beneficial

**DYNAMIC AGENT SELECTION**:
- **Agent Discovery**: Find available agents in `.claude/agents/guild/` at runtime
- **Core Agents**: Use guild-planning-agent if available
- **Implementation Agents**: Use any guild-*-engineer agents discovered
- **Fallback Strategy**: Use main thread if specific agents missing

**ADAPTIVE WORKFLOW**:
- **With Agents**: Execute 3-stage workflow with parallel agents
- **Without Agents**: Execute using main thread coordination
- **Standard Operations**: All file operations use standard Read/Write tools

## IMPLEMENTATION: Simple Agent Orchestration

**CRITICAL**: Standard Read/Write tools must be used for all .guild directory operations.

### Step 1: Agent Discovery

**Execute Agent Discovery**:
```bash
# Use LS tool to check for Guild agents directory
ls .claude/agents/guild/
```

**Process Discovery Results**:
1. **Check Configuration**: Use Read tool to verify Guild setup
2. **If Guild NOT configured**: Display "Guild Not Configured" message and stop
3. **If agents missing**: Display "Agents Need Generation" and use main thread
4. **If agents exist**: Use available agents for 3-stage workflow

### Step 2: Simple 3-Stage Execution

#### Stage 1: Reasoning (Main Thread)
- Analyze user prompt and clarify requirements
- Create structured context for next stages
- Use standard thinking mode

#### Stage 2: Planning (Planning Agent)
```
IF guild-planning-agent EXISTS:
  Task guild-planning-agent with:
  "Think harder to create intelligent parallel implementation strategy for: [USER_TASK]
  
  Input Context: [REASONING_OUTPUT]
  
  Intelligent parallel execution planning:
  - Think harder to identify independent tasks (default: evaluate parallelizable opportunities)
  - Think to determine agent requirements using responsibility catalog
  - Smart scaling: Think to spawn 2 instances for 3-4 tasks, 3 instances for 5+ tasks
  - Think to plan file ownership to prevent conflicts
  - TARGET: Intelligent parallel execution based on analysis
  - Think about single-threaded execution when beneficial
  
  Output: Implementation plan with intelligent parallel task assignments"
```

#### Stage 3: Implementation (Implementation Agents)
```
Think to identify required implementation agents from planning output
IF >2 tasks for same specialist type (SMART TRIGGER):
  Think to spawn multiple instances: 2 for 3-4 tasks, 3 for 5+ tasks
  Think to assign file ownership to prevent conflicts
  USE standard Read/Write tools for all .guild operations
  
FOR EACH implementation task:
  Task [agent] (Instance [N]) with:
  "Think to execute implementation for: [USER_TASK]
  
  Input Context: [PLANNING_OUTPUT]
  Your Assigned Tasks: [SPECIFIC_TASK_BATCH]
  File Ownership: [ASSIGNED_FILES_FOR_THIS_INSTANCE]
  
  Smart Requirements:
  - Work only on assigned files to prevent conflicts
  - Use standard Read/Write tools for .guild directory
  - Think to follow project patterns from planning context
  - Report progress and completion status
  
  Output: Implementation results for assigned batch"
```

### Step 3: Standard File Operations

**Guild Directory Operations**:
- Use Read tool for reading .guild files
- Use Write tool for creating .guild files  
- Use Edit tool for modifying .guild files
- No special guild-specific file handling

## SIMPLE EXECUTION WORKFLOW

**CRITICAL**: Use standard Read/Write tools for all .guild directory operations.

### EXECUTION PHASE 1: Setup & Discovery

```
1. PARSE COMMAND FLAGS → determine which stages to run
2. VALIDATE USER TASK → enter interactive mode if missing
3. CHECK GUILD CONFIGURATION: Use Read tool to verify setup
4. DISCOVER available agents in .claude/agents/guild/
5. BUILD simple execution plan (3 stages)
```

### EXECUTION PHASE 2: Reasoning (Main Thread Only)

```
EXECUTE reasoning analysis:
"Analyze user request: [USER_TASK]

- Clarify requirements and constraints
- Identify key objectives
- Understand scope and complexity

Output: Task understanding and requirements"

SAVE as: TASK_ANALYSIS
```

### EXECUTION PHASE 3: Planning (Planning Agent)

```
IF guild-planning-agent EXISTS:
  Task guild-planning-agent:
  "Create implementation plan for: [USER_TASK]
  
  Input: [TASK_ANALYSIS]
  
  Plan:
  - Break down into specific tasks
  - Identify parallel execution opportunities
  - Assign file ownership to prevent conflicts
  - Use standard Read/Write tools for .guild operations
  
  Output: Implementation plan with task assignments"

ELSE:
  Create basic plan using main thread
```

### EXECUTION PHASE 4: Implementation (Parallel Agents)

```
FOR EACH required implementation:
  IF multiple independent tasks AND same specialist needed:
    SPAWN multiple instances (up to 3):
    
    Task guild-{specialist}-engineer (Instance {N}):
    "Execute your assigned tasks: [SPECIFIC_TASKS]
    
    Context: [PLANNING_OUTPUT]
    File Ownership: [ASSIGNED_FILES]
    
    Requirements:
    - Use standard Read/Write tools for .guild directory
    - Work only on assigned files
    - Report completion status
    
    Output: Implementation results"
  
  ELSE:
    Task single guild-{specialist}-engineer

AGGREGATE all results
VALIDATE integration
```

## Example Usage

```bash
# Default workflow (reasoning → planning → implementation)
/guild "Add error handling to the CLI installation process"

# Skip reasoning stage
/guild --no-reason "Fix the broken build script"
# Executes: planning → implementation

# Planning only
/guild --no-implement "Analyze the project structure for optimization"
# Executes: reasoning → planning

# Reasoning only
/guild --no-plan --no-implement "Analyze this complex requirement"
# Executes: reasoning only

# Simple task execution
/guild "Implement user login feature"
# Executes: reasoning → planning → implementation (with parallel agents if beneficial)

# Interactive mode
/guild
# Prompts for task, then executes 3-stage workflow
```

## Simple Workflow Benefits

**🎯 Simple & Focused**: Just 3 essential stages for efficient execution
**⚡ Fast Execution**: No unnecessary stages or complex coordination
**🔄 Parallel Execution**: Automatic parallel agents when tasks are independent
**🧠 Smart Reasoning**: Main thread focuses on understanding requirements
**📋 Intelligent Planning**: Dedicated planning agent optimizes task execution
**🔨 Effective Implementation**: Specialized agents handle actual work
**📁 Standard Tools**: All .guild operations use standard Read/Write tools
**🎨 Agent Coordination**: Clean separation of concerns with minimal overhead

The simplified 3-stage workflow provides focused execution while maintaining the power of parallel agent coordination for efficient task completion.

## IMPLEMENTATION TEMPLATES FOR CLAUDE CODE

### Simple Agent Discovery

**Step 1: Execute Agent Discovery**
```
EXECUTE: LS .claude/agents/guild/

EXPECTED RESPONSES:
- If directory exists: List of guild-*-agent.md files
- If directory missing: Error message

EXAMPLE PROCESSING:
Found agents:
- guild-planning-agent.md → AVAILABLE
- guild-cli-engineer.md → AVAILABLE

EXECUTION PLAN: Simple 3-stage workflow with available agents
```

### Simple Agent Task Templates

**Template: Planning Agent**
```
TASK guild-planning-agent:

"Think harder to create implementation plan for: [USER_TASK]

Input Context: [REASONING_OUTPUT]

Plan:
- Think harder to break down into specific tasks
- Think harder to identify parallel execution opportunities  
- Think to assign file ownership to prevent conflicts
- Use standard Read/Write tools for .guild operations

Output: Implementation plan with task assignments"
```

**Template: Implementation Agent**
```
TASK guild-[specialist]-engineer:

"Think to execute implementation for: [USER_TASK]

Input Context: [PLANNING_OUTPUT]
File Ownership: [ASSIGNED_FILES]

Requirements:
- Use standard Read/Write tools for .guild directory
- Work only on assigned files
- Think to follow project patterns and conventions
- Report completion status

Output: Implementation results"
```

### Error Handling

**Agent Not Found**:
```
IF guild-planning-agent NOT FOUND:
  DISPLAY: "Planning agent not found, using main thread"
  EXECUTE: Main thread planning
  CONTINUE: with available agents
```

**Final Validation**:
```
BEFORE COMPLETION:
1. All stages executed successfully
2. Implementation meets requirements
3. Standard tools used for .guild operations

PROVIDE SUMMARY:
- Stages executed and agents used
- Key accomplishments
- Any fallbacks used
```

## ⚠️ CRITICAL: STANDARD TOOLS & NO CODE EMBEDDING

**When tasking agents, follow these policies:**

### **✅ CORRECT Agent Tasking:**

**Planning Agent:**
```
"Think harder to create implementation plan for user authentication feature.
Use standard Read/Write tools for any .guild directory operations.
Think harder to plan parallel execution when beneficial."
```

**Implementation Agent:**
```
"Think to implement user authentication following project patterns.
Use standard Read/Write tools for .guild directory.
Work only on assigned files to prevent conflicts."
```

### **❌ WRONG Agent Tasking:**

```
"Use this code template: const auth = require('...');"
```

**Why Wrong**: Contains embedded code, violates intelligence principles.

### **Standard Tools Requirement:**
- **Read Tool**: For reading .guild files
- **Write Tool**: For creating .guild files
- **Edit Tool**: For modifying .guild files
- **No Special Handling**: No guild-specific file operations

This simplified implementation ensures Guild operates efficiently with focused 3-stage execution while maintaining parallel agent capabilities and standard file operations.
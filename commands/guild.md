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

## Aggressive Parallel Execution Strategy

**Ultra-Parallel Approach**: Guild operates with aggressive parallel execution, proactively spawning tens or hundreds of agents for maximum speedup.

**Aggressive Parallelization Principles**:
- **Micro-Task Decomposition**: Break tasks into smallest viable units (function/method level)
- **Massive Agent Spawning**: 10-20+ instances per specialist type based on task count
- **Similarity-Based Batching**: Group tasks by domain, technical stack, and operation type
- **Dynamic Scaling**: No upper limit on agent instances - scale to match task complexity
- **Intelligent Conflict Prevention**: Fine-grained file ownership and dependency tracking
- **Real-Time Load Balancing**: Dynamic work redistribution and stealing
- **TARGET: 10-20x speedup** through aggressive parallelization

**Ultra-Parallel Decision Making**:
- Planning agent automatically decomposes into 10-100+ micro-tasks
- Similarity clustering algorithms group related tasks for efficiency
- Dynamic instance calculation: optimal_instances = ceil(tasks / 5)
- Proactive agent spawning with intelligent batch distribution
- Real-time monitoring and rebalancing across all instances
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
**Thinking Mode**: ultrathink for massive task decomposition and parallel optimization
**Purpose**: Aggressive task decomposition into micro-tasks with similarity-based batching
**Input**: Requirements from reasoning stage
**Output**: Micro-task batches with optimal agent instance distribution
**Ultra-Parallel Requirements**: 
- Decompose tasks into 10-100+ micro-tasks (function/method level granularity)
- Apply similarity clustering algorithms for efficient batching
- Calculate dynamic instance count: optimal_instances = min(ceil(micro_tasks / 5), 20)
- Create detailed conflict prevention strategies with file ownership mapping
- Design real-time load balancing and work stealing protocols

#### 3. 🔨 Implementation Stage
**Executor**: Implementation agents (guild-*-engineer)
**Thinking Mode**: think for execution, ultrathink for massive coordination
**Purpose**: Execute micro-tasks using aggressive parallel agent spawning
**Input**: Micro-task batches from planning stage
**Output**: Completed implementations with conflict-free integration
**Ultra-Parallel Scaling**: 
- 5-10 micro-tasks → 2 instances
- 11-30 micro-tasks → 6 instances  
- 31-60 micro-tasks → 12 instances
- 61-100 micro-tasks → 20 instances
- 100+ micro-tasks → 20 instances (capped at maximum)

**Aggressive Parallel Execution**: 
- Proactively spawn optimal instance count based on micro-task analysis
- Distribute similarity-batched tasks across all instances
- Real-time monitoring and dynamic load balancing
- Intelligent work stealing when instances finish early

## Ultra-Parallel Execution Algorithms

**AGGRESSIVE TASK DECOMPOSITION**:

### Micro-Task Decomposition Strategy
```yaml
Decomposition Levels:
  Level 1 - File Analysis: Identify all affected files and components
  Level 2 - Function Granularity: Break down to individual functions/methods
  Level 3 - Operation Granularity: Decompose to specific operations within functions
  Level 4 - Line-Level Tasks: Create micro-tasks for line-specific changes

Example: "Fix TypeScript errors in authentication system"
→ 50 files with errors
→ 200 functions with type issues  
→ 500 individual type fixes
→ Result: 500 micro-tasks for parallel execution
```

### Similarity-Based Batching Algorithms
```yaml
Clustering Strategies:
  Domain Similarity: Group by business domain (auth, user, product, order)
  Technical Similarity: Group by tech stack (React, Node.js, database, API)
  Operation Similarity: Group by operation type (CRUD, refactoring, testing, documentation)
  File Proximity: Group by directory structure and import relationships
  Complexity Similarity: Group by estimated effort (simple, medium, complex)

Batching Algorithm:
  1. Calculate similarity matrix for all micro-tasks
  2. Apply clustering algorithm (k-means or hierarchical)
  3. Create balanced batches with high intra-cluster similarity
  4. Assign batches to agent instances for maximum efficiency
```

### Dynamic Instance Scaling Protocol
```yaml
Scaling Formula: optimal_instances = min(ceil(micro_tasks / 5), 20)

Scaling Examples:
  15 micro-tasks → ceil(15/5) = 3 instances
  45 micro-tasks → ceil(45/5) = 9 instances
  120 micro-tasks → ceil(120/5) = 24 instances
  
Resource Considerations:
  - Monitor system resources and adjust scaling
  - Prevent over-subscription of system capabilities
  - Balance between parallelization and coordination overhead
```

### Conflict Prevention Mechanisms
```yaml
File Ownership Strategy:
  - Each file assigned to exactly one agent instance
  - Fine-grained locking at symbol/function level when needed
  - Dependency graph analysis to prevent circular conflicts
  - Smart merge strategies for related changes

Coordination Protocols:
  - Real-time progress monitoring across all instances
  - Shared context pool for cross-instance communication
  - Conflict detection and resolution algorithms
  - Rollback and retry mechanisms for failed operations
```

## Agent Coordination Protocol

**ULTRA-PARALLEL EXECUTION**:
- **Aggressive Instance Spawning**: Proactively create 5-20+ instances based on micro-task count
- **Similarity-Based Distribution**: Assign related micro-tasks to same instance using clustering algorithms
- **Fine-Grained File Ownership**: Each file/symbol assigned to single instance with conflict prevention
- **Real-Time Load Balancing**: Dynamic work redistribution and stealing across all instances
- **Smart Batch Coordination**: Coordinate related batches for optimal integration
- **Standard Tools**: All .guild directory operations use standard Read/Write tools
- **Ultra-Parallel Decisions**: Default to maximum parallelization with intelligent fallbacks

**🚨 CRITICAL - No Parallel Implementation Versions**:
- **Single Implementation Rule**: All instances must work on the SAME implementation approach
- **No Alternative Versions**: Never create enhanced/simplified/alternate versions in parallel
- **Work Distribution Only**: Parallel execution splits WORK, not APPROACHES
- **Unified Strategy**: One implementation strategy coordinated across all instances
- **Example**: 20 instances fixing TypeScript errors use the SAME fix approach, not 20 different approaches

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

### EXECUTION PHASE 4: Ultra-Parallel Implementation (Massive Agent Spawning)

```
CALCULATE optimal instance count from micro-task analysis:
optimal_instances = min(ceil(micro_tasks / 5), 20)
max_instances = min(optimal_instances, 20)  // Reasonable upper limit

FOR EACH specialist type required:
  IF micro_tasks >= 5 (ULTRA-PARALLEL TRIGGER):
    SPAWN max_instances of specialist agents:
    
    Task guild-{specialist}-engineer (Instance {N} of {max_instances}):
    "Execute ultra-parallel implementation for: [USER_TASK]
    
    Context: [PLANNING_OUTPUT]
    Micro-Task Batch: [SIMILARITY_CLUSTERED_TASKS]
    Granular Ownership: [FILE_SYMBOL_OWNERSHIP_MAP]
    Coordination Protocol: [INTER_BATCH_DEPENDENCIES]
    
    Ultra-Parallel Requirements:
    - Execute only assigned micro-tasks (5 tasks per instance)
    - Use standard Read/Write tools for .guild directory
    - Report progress on each micro-task completion
    - Coordinate with related instances through shared context
    - Enable work stealing when finishing early
    - Monitor for conflicts and apply resolution strategies
    
    Output: Completed micro-task batch with integration metadata"
  
  ELSE:
    Task single guild-{specialist}-engineer with standard approach

REAL-TIME MONITORING across all instances
DYNAMIC LOAD BALANCING and work stealing
AGGREGATE results with conflict resolution
VALIDATE integration across all micro-tasks
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

**Template: Ultra-Parallel Planning Agent**
```
TASK guild-planning-agent:

"Ultrathink to create aggressive parallel implementation plan for: [USER_TASK]

Input Context: [REASONING_OUTPUT]

Ultra-Parallel Decomposition:
- Decompose into 10-100+ micro-tasks at function/method level
- Apply similarity clustering algorithms (domain, technical, operation type)
- Calculate optimal instance count: min(ceil(micro_tasks / 5), 20)
- Create granular file/symbol ownership mapping
- Design conflict prevention and resolution strategies
- Plan real-time load balancing and work stealing protocols

CRITICAL Implementation Constraint:
- Create ONE unified implementation approach for ALL instances to follow
- Do NOT create alternate/enhanced/simplified versions in parallel
- Distribute WORK (micro-tasks) not STRATEGIES (implementation approaches)
- Ensure all instances use the SAME implementation methodology

Batching Strategy:
- Group similar micro-tasks for efficiency
- Balance workload across all planned instances
- Define inter-batch dependencies and coordination points
- Establish progress monitoring and reporting protocols

Output: Ultra-parallel implementation plan with micro-task batches"
```

**Template: Ultra-Parallel Implementation Agent**
```
TASK guild-[specialist]-engineer (Instance {N} of {total_instances}):

"Execute ultra-parallel implementation for: [USER_TASK]

Input Context: [PLANNING_OUTPUT]
Micro-Task Batch: [SIMILARITY_CLUSTERED_MICROTASKS]
Granular Ownership: [FILE_SYMBOL_OWNERSHIP_MAP]
Instance Coordination: [INTER_INSTANCE_PROTOCOLS]

Ultra-Parallel Requirements:
- Execute assigned micro-tasks (typically 5 per instance)
- Use standard Read/Write tools for .guild directory
- Work only on assigned files/symbols to prevent conflicts
- Report progress on each micro-task completion
- Coordinate with related instances through shared context
- Monitor for available work from other instances (work stealing)
- Apply conflict resolution strategies when needed

CRITICAL Implementation Constraint:
- Follow the SINGLE implementation approach from planning
- Do NOT create your own version, enhancement, or alternative approach
- Execute assigned micro-tasks using the SAME strategy as ALL other instances
- Maintain implementation consistency across all parallel work

Performance Monitoring:
- Track micro-task completion rate
- Report completion of each individual micro-task
- Signal availability for work stealing when finished early

Output: Completed micro-task batch with integration metadata"
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

### **❌ WRONG Agent Tasking - NEVER Provide Code:**

**CRITICAL RULE**: Agents must NEVER provide code samples, examples, or snippets

```
❌ "Use this code template: const auth = require('...');"
❌ "Create component like: const [state, setState] = useState();"
❌ "Add migration: CREATE TABLE users (id INT...);"
❌ "Example implementation: function login() { ... }"
```

**Why Wrong**: Violates core Guild principle - agents provide requirements, not implementation examples.

### **Standard Tools Requirement:**
- **Read Tool**: For reading .guild files
- **Write Tool**: For creating .guild files
- **Edit Tool**: For modifying .guild files
- **No Special Handling**: No guild-specific file operations

This simplified implementation ensures Guild operates efficiently with focused 3-stage execution while maintaining parallel agent capabilities and standard file operations.

## ❌ WRONG - What Guild Must NEVER Do

**Never Create Parallel Implementation Versions**:

```yaml
❌ WRONG Approach - Multiple Implementation Versions:
  Instance 1: "Creating simplified authentication approach using basic JWT"
  Instance 2: "Creating enhanced authentication with OAuth2 and multi-factor"
  Instance 3: "Creating alternative authentication using session-based approach"
  Result: 3 different auth systems that conflict and need reconciliation

✅ CORRECT Approach - Single Implementation, Distributed Work:
  Instance 1: "Implementing agreed JWT auth for endpoints 1-5"
  Instance 2: "Implementing agreed JWT auth for endpoints 6-10"  
  Instance 3: "Implementing agreed JWT auth for endpoints 11-15"
  Result: One consistent JWT auth system across all endpoints
```

**Never Create Competing Solutions**:

```yaml
❌ WRONG - Multiple Approaches:
  Instance 1: "Fix TypeScript errors using strict mode approach"
  Instance 2: "Fix TypeScript errors using any-type suppression approach"
  Instance 3: "Fix TypeScript errors using interface restructuring approach"

✅ CORRECT - Single Approach, Distributed Execution:
  Instance 1: "Fix TypeScript errors 1-5 using agreed strict typing approach"
  Instance 2: "Fix TypeScript errors 6-10 using agreed strict typing approach"
  Instance 3: "Fix TypeScript errors 11-15 using agreed strict typing approach"
```

**Never Create Enhanced/Simplified Versions**:

```yaml
❌ WRONG - Version Variations:
  Instance 1: "Add basic error handling to components 1-10"
  Instance 2: "Add enhanced error handling with logging to components 11-20"  
  Instance 3: "Add simplified error handling for components 21-30"

✅ CORRECT - Consistent Implementation:
  Instance 1: "Add agreed error handling pattern to components 1-10"
  Instance 2: "Add agreed error handling pattern to components 11-20"
  Instance 3: "Add agreed error handling pattern to components 21-30"
```

### Key Principle: ONE Strategy, Many Workers
Guild's parallel execution distributes **WORK** across instances, not **APPROACHES**. All instances collaborate on implementing the **SAME** solution using the **SAME** methodology.
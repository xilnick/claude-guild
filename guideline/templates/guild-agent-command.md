# /guild

---
name: guild-agent
thinking_mode: ultrathink
model: inherit
description: "Execute any task using Guild's hierarchical planning router architecture with proactively parallel agent execution (2-20 agents)"
---

**Usage**: `/guild [workflow-flags] "your task prompt"`

**Interactive Mode**: `/guild [workflow-flags]` - If no task is provided, Guild will prompt you for the task interactively

**Purpose**: Execute any task using Guild's hierarchical planning router architecture with proactively parallel agent execution (2-20 agents) and think-only specialized agents based on project configuration.

## Complete Embedded Guideline Intelligence

**CRITICAL**: This intelligence is needed for proper reasoning, planning, and execution.

{{principles}}

{{agents}}

{{workflows}}

{{parallel}}

{{planning-router}}

{{testing}}

{{mcp-integration}}

## Hierarchical Architecture Workflow

Guild uses a hierarchical planning router architecture with cognitive load separation:

### Core Execution Phases
- **🧠 Reasoning**: Understand requirements and gather project context (ultrathink/think-harder)
- **🎯 Planning Router Orchestration**: Master coordination and task decomposition (think-harder/ultrathink)
- **🔨 Hierarchical Parallel Execution**: Domain leads and sub-agents execute in parallel (think mode only)

### Hierarchical Architecture Capabilities
- **Planning Router Orchestration**: Master orchestrator handles all complex coordination and task decomposition
- **Think-Only Specialized Agents**: All domain and sub-agents use think mode exclusively for efficient execution
- **Hierarchical Spawning**: Planning router → Domain leads (1-5) → Sub-agents (2-3 per domain)
- **Cognitive Load Separation**: Heavy thinking upfront in planning router, light execution in parallel agents
- **Proactively Parallel Execution**: Scale from 2-20 agents with micro-task decomposition and intelligent coordination
- **10-20x Performance**: Massive speedup through hierarchical coordination and think-only agent efficiency

## Configuration-Driven Execution

**Guild reads behavior from `.guild/instructions.md`**:
- Reasoning depth and context gathering strategy
- Agent delegation preferences and auto-calling settings
- Parallel execution settings and thresholds
- Quality standards and validation requirements
- Project-specific rules and patterns

## Command Flags

### Workflow Control Flags
- `--no-reason` - Skip reasoning phase, go directly to planning
- `--no-plan` - Reasoning only, no implementation
- `--no-implement` - Stop after planning, no execution

## Interactive Task Prompting

If no task description is provided, Guild enters interactive mode:

### Interactive Mode Flow

1. **Check Guild Configuration**: Verify `.guild/instructions.md` exists
2. **Analyze Project Context**: Identify project type, technologies, and patterns
3. **Display Context-Aware Prompt**: Show examples relevant to the project
4. **Process User Input**: Execute with configured behavior and workflow flags

### Interactive Prompt Template

```
🏛️ **Guild Ready - [Detected Technologies]**

Configuration: [Summary of key settings from instructions.md]
• Reasoning: [depth] • Parallel: [enabled/threshold] • Agents: [auto-engaged types]

What task would you like to execute?

**Examples for your project:**
• [Context-specific example based on detected stack]  
• [Another relevant example]
• [Simple task example]

Enter your task description:
```

## Guild Configuration Check

**Configuration Discovery Process**:

### Step 1: Check Guild Setup
- Read `.guild/instructions.md` for project configuration
- If missing, display setup instructions
- Parse configuration settings for execution behavior

### Step 2: Project Analysis  
- Examine project structure and technology patterns
- Identify available agents in `.claude/agents/guild/`
- Determine capabilities and limitations

### Configuration States

**If Guild NOT Configured**:
```
🏛️ **Guild Not Configured**

Guild is not set up for this project.

**To get started**: `/guild:setup`
```

**If Guild Configured**:
```
🏛️ **Guild Ready**

Configuration loaded from .guild/instructions.md
• Reasoning: [configured depth and strategy]
• Parallel: [threshold] tasks trigger [max_agents] agents  
• Experts: Auto-engaged for [enabled domains]
• Quality: [enforcement level] pattern compliance

Ready to execute tasks with configured behavior.
```

## Intelligent 3-Stage Execution

**Guild executes the simple 3-stage workflow with configuration-driven behavior**:

### Stage 1: 🧠 Reasoning & Context Gathering
**Executor**: Main thread
**Thinking Mode**: Based on configuration (ultrathink/think-harder/think)
**Purpose**: Understand task and gather necessary context
**Configuration**: Driven by `reasoning` settings in instructions.md
**Duration**: 30-90 seconds based on depth setting

**Reasoning Process**:
```
1. Parse user request and clarify requirements
2. Analyze project context based on context_strategy setting  
3. Identify specialist needs based on expert delegation configuration
4. Plan parallel execution opportunities based on parallel settings
5. Prepare implementation strategy using configured quality standards
```

### Stage 2: 🎯 Planning Router Orchestration
**Executor**: Planning router (dedicated orchestration agent)
**Thinking Mode**: think-harder/ultrathink for complex coordination
**Purpose**: Master orchestration, task decomposition, and agent spawning
**Configuration**: Driven by `planning_router` and `parallel` settings
**Duration**: 30-120 seconds based on coordination complexity

**Planning Router Process**:
```
1. Comprehensive task analysis and micro-task decomposition (5-15 minute units)
2. Domain pattern detection and hierarchical agent spawning decisions
3. File ownership assignment and conflict prevention planning
4. Context package creation for domain leads with complete task information
5. Coordination strategy design for 10-20x speedup through efficient hierarchy
```

**Hierarchical Spawning Logic**:
```
1. Spawn 1-5 domain lead agents based on project patterns
2. Domain leads analyze workload and spawn 2-3 sub-agents when 3+ similar tasks
3. Pre-compute all coordination strategies to enable think-only execution
4. Establish file ownership and integration points to prevent conflicts
```

### Stage 3: 🔨 Hierarchical Parallel Execution
**Executor**: 2-20 agents in hierarchical structure (domain leads + sub-agents)
**Execution**: Proactively parallel with hierarchical coordination
**Thinking Mode**: ALL agents use think mode exclusively for efficient execution
**Purpose**: Execute with specialized domain leads and sub-agents
**Configuration**: Driven by all settings in instructions.md

**Hierarchical Execution Structure**:
```
Planning Router (think-harder/ultrathink):
  ├── Frontend Lead (think) → 2-3 Sub-agents (think)
  ├── Backend Lead (think) → 2-3 Sub-agents (think)
  ├── Database Lead (think) → 2-3 Sub-agents (think)
  ├── Testing Lead (think) → 2-3 Sub-agents (think)
  └── DevOps Lead (think) → 2-3 Sub-agents (think)
```

**Execution Process**:
```
1. Domain leads receive complete context packages from planning router
2. Domain leads coordinate sub-agents within their specialization
3. All agents execute in think mode only with pre-computed context
4. Asynchronous progress reporting with minimal coordination overhead
5. Planning router handles escalations and complex integration decisions
```

## Hierarchical Agent Orchestration

**Planning Router Coordination Based on Instructions.md**:

### Planning Router Configuration
```
Read planning_router settings from instructions.md:
- enabled: true → Use planning router for all complex coordination
- thinking_mode: think-harder → Level of analysis for coordination
- orchestration_style: balanced → Conservative/balanced/aggressive approach
- coordination_overhead_limit: 10% → Maximum time spent on coordination
```

### Hierarchical Agent Spawning
```
Planning router spawning logic:
- Domain leads: 1-5 based on project pattern detection
- Sub-agents: 2-3 per domain when 3+ similar tasks detected
- All agents: Think mode only for efficient parallel execution
- Total limit: 20 agents maximum with intelligent scaling
```

### Think-Only Agent Execution
```
Cognitive load separation:
- Planning router: All complex thinking (think-harder/ultrathink)
- Domain leads: Domain coordination using think mode
- Sub-agents: Focused execution using think mode only
- Coordination: Pre-computed strategies minimize overhead
```

### Task Distribution Strategy
```
Hierarchical task distribution:
- Micro-task decomposition: 5-15 minute execution units
- Domain affinity grouping: Similar tasks to same domain
- File ownership: Exclusive access prevents conflicts
- Work stealing: Cross-domain redistribution when beneficial
- Performance target: 10-20x speedup through efficient coordination
```

## Simple Execution Examples

### Basic Task Execution
```bash
# Use default configuration from instructions.md
/guild "Add error handling to the user authentication API"

# Executes based on configured reasoning depth, expert engagement, and parallel settings
```

### Workflow Control Examples  
```bash
# Execute complete workflow with all phases
/guild "Add error handling to the user authentication API"

# Skip reasoning and go straight to planning
/guild --no-reason "Implement the already-analyzed caching strategy"

# Only analyze and reason, don't implement  
/guild --no-plan "Analyze the performance bottlenecks in the data layer"
```

### Configuration-Driven Execution
```bash
# All behavior controlled by .guild/instructions.md configuration
/guild "Add responsive design to the dashboard"

# Agent engagement, parallelization, and quality standards configured in instructions
/guild "Refactor database layer for better performance"
```

### Interactive Mode
```bash
# Enter interactive mode with current configuration
/guild

# Interactive mode with workflow control if needed
/guild --no-plan
```

## Implementation Templates for Execution

### Configuration Reading
```
Step 1: Read Configuration
EXECUTE: Read .guild/instructions.md
PARSE: Extract all configuration settings
APPLY: Use settings as defaults for execution
OVERRIDE: Apply any command-line flags provided
```

### Simple Agent Orchestration
```
Step 2: Agent Orchestration Based on Configuration

IF experts.frontend == "auto" AND frontend_patterns_detected:
  ENGAGE: frontend specialist
  TASKS: Assign UI-related work

IF parallel.enabled == true AND independent_tasks >= parallel.threshold:
  CALCULATE: optimal_agents = min(ceil(tasks / 3), config.max_parallel)
  SPAWN: optimal_agents specialists  
  DISTRIBUTE: Tasks using configured strategy

COORDINATE: Using configured isolation and validation settings
```

### Execution Monitoring
```  
Step 3: Monitor Execution According to Configuration

TRACK: Progress using configured monitoring level
VALIDATE: Using configured quality standards  
COORDINATE: Based on configured coordination strategy
INTEGRATE: Using configured validation timing
```

### Error Handling Based on Configuration
```
Step 4: Handle Issues Using Configured Strategy

IF conflict_resolution == "automatic":
  RESOLVE: Conflicts automatically
ELIF conflict_resolution == "prevention":  
  PREVENT: Through strict task isolation

IF failure_recovery == "redistribute":
  REDISTRIBUTE: Failed tasks to available agents
ELIF failure_recovery == "sequential":
  FALLBACK: To sequential execution
```

## Benefits of Configuration-Driven Approach

**🎯 Consistent Behavior**: All execution follows project-specific configuration
**⚡ Efficient Execution**: Optimal settings for each project's needs  
**🔧 Easy Customization**: Change behavior by editing instructions.md
**📋 Smart Defaults**: Reasonable defaults work well out-of-the-box
**🎨 Project-Aware**: Behavior adapts to detected project patterns
**🔄 Override Flexibility**: Command flags can override configuration when needed

The configuration-driven approach ensures Guild behaves optimally for each project while remaining simple to use and highly customizable.

## ⚠️ CRITICAL: Configuration Requirements

### **✅ CORRECT Guild Usage - Configuration-Driven:**

**Read Configuration First**:
```
ALWAYS read .guild/instructions.md before execution
Apply configuration settings as defaults
Use command flags only to override specific settings
Respect project-specific rules and patterns
```

**Agent Tasking Based on Configuration**:
```
"Execute user authentication feature following project configuration.
Use configured experts (frontend: auto, backend: auto, database: manual).  
Apply configured parallel settings (threshold: 3, max_agents: 20).
Follow configured quality standards (strict pattern compliance)."
```

### **❌ WRONG Guild Usage - Ignoring Configuration:**

**Hardcoded Behavior**:
```
❌ Always use 20 agents regardless of configuration
❌ Force parallel execution ignoring threshold settings  
❌ Engage all experts ignoring project preferences
❌ Apply generic quality standards ignoring project rules
```

**Configuration Violations**:
```
❌ Create agents when experts are disabled in configuration
❌ Use parallel execution when disabled in configuration
❌ Ignore project-specific patterns and rules
❌ Override quality settings without justification
```

### Key Principle: Configuration First
Guild's power comes from respecting project-specific configuration while providing intelligent defaults and override flexibility when needed.
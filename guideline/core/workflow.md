# Simple Workflow Module
**Version**: 8.0.0 | **Last Updated**: 2025-08-28 | **Dependencies**: agents.md

## Purpose
Intelligence-first three-phase workflow: mandatory ultrathink reasoning → comprehensive MCP research → massive parallel execution (1-20 cognitive agents).

## Core Philosophy

**🧠 INTELLIGENCE-FIRST (NON-NEGOTIABLE)**: Pure Claude intelligence drives all discovery and decisions - no hardcoded patterns.

**🔍 RESEARCH-DRIVEN**: Comprehensive MCP research creates shared knowledge base before execution.

**🛑 APPROVAL REQUIRED**: Always present execution plan and wait for user confirmation - HALT without explicit "yes".

**⚡ MASSIVE PARALLELIZATION**: Support 1-20 cognitive agents running simultaneously for maximum speed.

**🧬 COGNITIVE SPECIALIZATION**: Agents use specialized thinking approaches, not technology templates.

**🧠 INTELLIGENT EXECUTION**: Automatically choose parallel, sequential, or hybrid execution based on task dependencies.

## Three-Phase Intelligence-First Execution

### Phase 1: Ultrathink Reasoning (ABSOLUTELY MANDATORY)

⚠️ **CRITICAL**: Reasoning phase is **NON-NEGOTIABLE** - Never proceed without it.

**Purpose**: Comprehensive task understanding, dependency analysis, and cognitive agent planning with mandatory user approval.

**Intelligence-First Analysis**:
- **Thinking Mode**: ultrathink/sequential (MANDATORY - NEVER SKIP THIS STEP)
- **Duration**: 30-90 seconds minimum for thorough analysis
- **Task Decomposition**: Break down work into cognitive units and analyze dependencies
- **Dependency Detection**: Identify blocking vs non-blocking relationships between tasks
- **Execution Strategy**: Choose parallel, sequential, or hybrid execution mode
- **Agent Scaling Decision**: Determine optimal agent count (1-20) based on analysis

**Reasoning Process**:
1. **Deep Task Analysis**: Understand exactly what needs to be accomplished
2. **Project Context Discovery**: Analyze codebase, patterns, and architecture through intelligence
3. **Cognitive Requirement Mapping**: Identify which thinking approaches are needed
4. **Dependency Analysis**: Detect blocking relationships and task dependencies
5. **Execution Mode Selection**: Choose parallel, sequential, or hybrid based on dependencies
6. **Task Decomposition**: Break into appropriate cognitive units for selected execution mode
7. **Agent Count Determination**: Calculate optimal scaling (1-20 agents)
8. **Coordination Strategy**: Plan execution strategy with proper dependency handling

**Dependency Detection & Execution Strategy**:
```yaml
Dependency Analysis:
  blocking_patterns:
    - "Database migrations must complete before API changes"
    - "Authentication setup required before protected routes"
    - "Type definitions needed before implementation"
    - "Infrastructure provisioning before deployment"
    - "User specifies order: 'first X, then Y'"
    - "Keywords: 'after', 'before', 'depends on', 'requires'"
  
  execution_modes:
    parallel: "Independent, non-blocking tasks (default)"
    sequential: "Blocking dependencies require ordered execution"
    hybrid: "Sequential chains that can run in parallel groups"

Agent Scaling Algorithm:
  Simple Task (focused scope): 1-3 cognitive agents
  Medium Task (moderate scope): 4-8 cognitive agents  
  Large Task (broad scope): 9-15 cognitive agents
  Massive Task (extensive scope): 16-20 cognitive agents

Scaling Factors:
  - Cognitive complexity (how many thinking approaches needed)
  - Task dependencies (blocking vs non-blocking relationships)
  - Decomposability (how many execution units possible)
  - File distribution (how many non-conflicting areas)
  - Time constraints (speed requirements vs coordination overhead)
```

**Approval Gate Requirements**:
```
🛑 HALT EXECUTION - Present to user:
- Task understanding and cognitive decomposition
- Dependency analysis and execution mode (parallel/sequential/hybrid)
- Determined agent count and scaling rationale
- Which cognitive personas will be used and why
- Execution strategy and coordination plan
- Expected outcomes and integration approach
- Research scope and MCP tool usage

⚠️ NEVER PROCEED WITHOUT EXPLICIT "YES" FROM USER
```

### Phase 2: Intelligence-Driven MCP Research (MANDATORY)

**Purpose**: Create comprehensive shared knowledge base through intelligent technology discovery and MCP research.

**Intelligence-First Discovery**:
- **Technology Detection**: Use Claude intelligence to identify ALL technologies in project
- **Domain Understanding**: Discover business domain and application context
- **Architecture Analysis**: Understand system boundaries and integration patterns
- **Quality Requirements**: Extract performance, security, and reliability needs

**MCP Research Protocol**:
1. **Technology Discovery**: Intelligent analysis identifies technologies to research
2. **Library Documentation**: Use context7 MCP (resolve-library-id + get-library-docs)
3. **Community Research**: Use WebSearch MCP for current patterns and best practices
4. **Official Documentation**: Use WebFetch MCP for authoritative API docs
5. **Version Compatibility**: Validate compatibility with project requirements
6. **Knowledge Synthesis**: Create shared understanding for all agents

**Research Sharing Architecture**:
```yaml
Shared Knowledge Base:
  location: ".guild/research_cache/"
  lifetime: "Session + 24 hours for reuse"
  access: "All cognitive agents have read access"
  structure:
    discovered_technologies: "Full list of project technologies"
    documentation_cache: "Comprehensive docs for each technology"
    best_practices: "Current community implementation patterns"
    api_references: "Official API documentation"
    version_requirements: "Compatibility and dependency information"
    domain_context: "Business logic and application domain understanding"
```

### Phase 3: Intelligent Cognitive Agent Execution

**Purpose**: Execute approved plan through 1-20 cognitive agents using optimal execution strategy (parallel/sequential/hybrid) with shared research knowledge.

**INTELLIGENT EXECUTION MODES**:
- **Agent Count**: 1-20 cognitive agents based on Phase 1 scaling decision
- **Parallel Mode**: Multiple agents/instances execute simultaneously (default for non-blocking tasks)
- **Sequential Mode**: Agents execute in dependency order (for blocking relationships)
- **Hybrid Mode**: Parallel execution of sequential chains (complex workflows)
- **Optimal Throughput**: Balance speed and correctness based on task requirements

**Cognitive Agent Coordination**:
```yaml
Execution Strategies:
  research_access: "All agents access Phase 2 shared knowledge base"
  cognitive_specialization: "Each agent uses appropriate thinking approach"
  
  parallel_execution:
    description: "Default mode for independent tasks"
    coordination: "Multiple instances per cognitive persona"
    conflict_prevention: "Clear file ownership prevents simultaneous modification"
    
  sequential_execution:
    description: "For blocking dependencies"
    coordination: "Agent A completes → outputs to Agent B"
    state_management: "Preserve outputs and context between agents"
    
  hybrid_execution:
    description: "Parallel groups of sequential chains"
    coordination: "Multiple sequential workflows running simultaneously"
    optimization: "Maximize parallelism within dependency constraints"

Scaling Examples:
  Small Task (1-3 agents) - Parallel:
    - 1 primary cognitive agent for main work
    - 1 quality guardian for validation
    - 1 domain expert for business alignment
    
  Medium Task (4-8 agents) - Parallel:
    - 2-3 different cognitive personas for different aspects
    - 2-3 instances per persona for parallel work
    - Cross-cognitive collaboration on interfaces
    
  Large Task (9-15 agents) - Hybrid:
    - Sequential Chain A: [Type definitions → Implementation → Testing]
    - Sequential Chain B: [Authentication → Authorization → Validation]
    - Both chains run in parallel with 2-3 instances each
    
  Massive Task (16-20 agents) - Complex Hybrid:
    - Multiple sequential chains running in parallel
    - 3-5 instances per persona type within each chain
    - Fine-grained dependency management across chains
```

**Execution Process**:
1. **Research Integration**: All agents access cached research from Phase 2
2. **Cognitive Assignment**: Assign agents based on cognitive requirements and dependencies
3. **Execution Mode Setup**: Configure parallel, sequential, or hybrid execution strategy
4. **Agent Orchestration**: Launch agents according to selected execution mode
   - **Parallel**: All agents start simultaneously with file ownership
   - **Sequential**: Agents execute in dependency order with state handoffs
   - **Hybrid**: Parallel execution of sequential chains with coordination
5. **Progress Monitoring**: Track completion and dependencies across all cognitive agents
6. **Result Integration**: Synthesize outputs respecting execution order and dependencies

## Cognitive Agent Scaling and Instance Distribution

**BREAKTHROUGH CAPABILITY**: Support for 1-20 cognitive agents with multiple instances running simultaneously for maximum intelligence and throughput.

### Cognitive Instance Distribution Strategy
```yaml
UX Expert Cognitive Persona - 3 Parallel Instances:
  instance_1: 
    files: ["src/components/auth/**", "src/pages/auth/**"]
    cognitive_focus: "Authentication user experience and flow optimization"
  instance_2:
    files: ["src/components/dashboard/**", "src/pages/dashboard/**"]
    cognitive_focus: "Dashboard usability and data visualization experience"
  instance_3:
    files: ["src/components/forms/**", "src/utils/form-validation/**"]
    cognitive_focus: "Form interaction design and validation feedback"

Systems Architect Cognitive Persona - 2 Parallel Instances:
  instance_1:
    files: ["routes/user/**", "controllers/user/**", "middleware/auth/**"]
    cognitive_focus: "User service architecture and authentication integration"
  instance_2:
    files: ["routes/data/**", "controllers/data/**", "services/analytics/**"]
    cognitive_focus: "Data service architecture and analytics pipeline design"
```

### Intelligence-Based Scaling Protocol
```yaml
Cognitive Load Distribution:
  - Each cognitive persona can handle multiple parallel instances
  - Instances maintain cognitive consistency while working on different areas
  - Cross-cognitive coordination through shared research knowledge
  - File ownership prevents conflicts between instances

Scaling Decision Matrix:
  cognitive_complexity: "How many different thinking approaches needed?"
  decomposition_potential: "How many parallel cognitive units possible?"
  coordination_overhead: "What's the optimal balance of speed vs coordination?"
  quality_requirements: "How much cognitive oversight needed?"
```

### Execution Strategy Examples
```yaml
Parallel Execution - E-commerce Feature Implementation (15 agents):
  execution_mode: parallel
  coordination: all_agents_start_simultaneously
  agents:
    ux_experts: 4 instances (different user flows)
    systems_architects: 3 instances (different service layers)
    security_specialists: 2 instances (authentication + payment)
    analytical_thinkers: 3 instances (performance + analytics + data)
    quality_guardians: 2 instances (testing + monitoring)
    domain_experts: 1 instance (business logic coordination)

Sequential Execution - Database Migration + API Refactoring (8 agents):
  execution_mode: sequential
  dependency_chain:
    phase_1: [database_migration_agent] # Must complete first
    phase_2: [api_architect_agent, data_layer_agent] # Depend on phase 1
    phase_3: [testing_agent, integration_agent] # Validate changes
  
Hybrid Execution - Enterprise System Refactoring (20 agents):
  execution_mode: hybrid
  sequential_chains:
    auth_chain: [security_analysis → auth_implementation → auth_testing]
    data_chain: [schema_design → migration_scripts → data_validation]
    api_chain: [endpoint_design → implementation → integration_tests]
  parallel_coordination: all_chains_run_simultaneously
  agents_per_chain: 3-7 agents
```

## Research & Documentation Tools

**MCP Integration for Research**:
```yaml
Primary Research Tools:
  context7: 
    purpose: "Library documentation and code examples"
    usage: "resolve-library-id → get-library-docs"
    priority: "Primary for library research"
  
  WebSearch:
    purpose: "Community examples and implementation patterns"  
    usage: "Search for current best practices and examples"
    priority: "Secondary for community knowledge"
    
  WebFetch:
    purpose: "Official API documentation and specs"
    usage: "Fetch latest documentation from official sources"
    priority: "Tertiary for official documentation"
```

**Research Coordination**:
- **Knowledge Caching**: Research results stored for agent access
- **Version Awareness**: Latest library versions and breaking changes
- **Pattern Recognition**: Current implementation best practices
- **Documentation Currency**: Up-to-date API references and guides

**Research Protocol**:
1. **Technology Detection**: Identify all technologies from Phase 1 analysis
2. **Library Research**: Use context7 for comprehensive library documentation
3. **Example Research**: Use WebSearch for current implementation examples
4. **API Research**: Use WebFetch for latest API documentation
5. **Version Checking**: Verify latest versions and compatibility
6. **Knowledge Sharing**: Cache results for parallel agent access

## Knowledge Management System

**Research Cache Architecture**:
```yaml
Cache Structure:
  session_cache:
    location: "Memory during workflow execution"
    lifetime: "Single workflow session"
    scope: "All agents in current execution"
    
  project_cache:
    location: ".guild/research_cache/"
    lifetime: "24 hours or until invalidated"
    scope: "All workflow sessions for project"
    
  technology_cache:
    location: ".guild/tech_docs/"
    lifetime: "7 days or version change"
    scope: "Technology-specific documentation"
```

**Knowledge Sharing Protocols**:
- **Agent Access**: All agents access shared research cache
- **Instance Coordination**: Multiple instances share same research base
- **Invocation Persistence**: Research persists across agent invocations
- **Session Boundaries**: Knowledge carries over between workflow sessions

**Cache Management Strategy**:
```yaml
Research Caching:
  library_docs:
    source: "context7 MCP results"
    invalidation: "24 hours or version change"
    sharing: "All agents needing same library"
    
  community_patterns:
    source: "WebSearch MCP results"  
    invalidation: "7 days or manual refresh"
    sharing: "Technology-specific agents"
    
  api_documentation:
    source: "WebFetch MCP results"
    invalidation: "24 hours or API version change"
    sharing: "Backend and integration agents"
    
  version_compatibility:
    source: "Aggregated from all research"
    invalidation: "When project dependencies change"
    sharing: "All agents for dependency validation"
```

**Knowledge Validation**:
```yaml
Freshness Checks:
  - Verify research timestamps against cache lifetime
  - Check library versions against project requirements
  - Validate API documentation against current versions
  - Confirm best practices are still current
  
Quality Assurance:
  - Cross-reference multiple sources for consistency
  - Validate examples against official documentation
  - Ensure patterns match project architecture
  - Verify compatibility with existing codebase
```

**Inter-Agent Knowledge Sharing**:
```yaml
Shared Knowledge Base:
  architectural_patterns: "Shared understanding of project structure"
  integration_contracts: "API contracts between frontend/backend"
  testing_strategies: "Coordinated testing approaches"
  performance_requirements: "Shared performance benchmarks"
  security_patterns: "Consistent security implementations"
  
Coordination Mechanisms:
  - Research results automatically available to all agents
  - Version compatibility shared across technology boundaries
  - Integration patterns coordinated between frontend/backend
  - Testing approaches aligned across all components
```

**Knowledge Persistence**:
```yaml
Session Persistence:
  workflow_research: "Research results persist across agent invocations"
  pattern_learning: "Learned patterns available to subsequent workflows"
  error_solutions: "Solutions to encountered issues cached for reuse"
  
Project Memory:
  technology_stack: "Comprehensive understanding of project technologies"
  architectural_decisions: "Rationale for implementation choices"
  performance_learnings: "Optimizations and their effectiveness"
  integration_patterns: "Successful integration approaches"
```

## Cognitive Agent Selection and Invocation

**Intelligence-First Selection**: Agents selected based on cognitive requirements discovered through analysis, not hardcoded technology patterns.

**Cognitive-Based Selection**:
```yaml
User Experience Requirements:
  cognitive_need: "User-centered thinking and empathetic design"
  personas: ["UX Expert cognitive agents for any UI technology"]
  
System Architecture Requirements:
  cognitive_need: "Structural thinking and integration focus"
  personas: ["Systems Architect cognitive agents for any technology stack"]
  
Performance/Optimization Requirements:
  cognitive_need: "Analytical thinking and data-driven optimization"
  personas: ["Analytical Thinker cognitive agents for any performance context"]
  
Quality/Reliability Requirements:
  cognitive_need: "Risk-aware thinking and systematic validation"
  personas: ["Quality Guardian cognitive agents for any testing context"]
  
Security/Protection Requirements:
  cognitive_need: "Threat-aware thinking and defensive strategies"
  personas: ["Security Specialist cognitive agents for any security context"]
  
Business Logic Requirements:
  cognitive_need: "Domain-focused thinking and practical solutions"
  personas: ["Domain Expert cognitive agents for any business context"]
```

**Multiple Invocation Patterns**:
- **Same cognitive persona, different areas**: UX Expert works on multiple user flows
- **Same cognitive persona, different features**: Systems Architect handles multiple service boundaries
- **Same cognitive persona, different phases**: Analytical Thinker optimizes different performance aspects
- **Parallel instances**: Multiple copies of same cognitive persona working simultaneously
- **Cross-cognitive coordination**: Multiple cognitive approaches collaborate on same feature

## Intelligent Execution Strategies

### Parallel Execution (Default for Independent Tasks)
**When to Use**: Non-blocking tasks with no dependencies

**Coordination Principles**:
- **File Ownership**: Each agent gets exclusive access to specific files
- **Instance Isolation**: Multiple instances of same agent work on different file sets
- **Interface Boundaries**: Agents coordinate through simple, defined interfaces
- **Minimal Communication**: Agents work independently with clear handoffs
- **Conflict Prevention**: Clear ownership boundaries prevent conflicts
- **Result Integration**: Outputs combined after all agents complete

### Sequential Execution (For Blocking Dependencies)
**When to Use**: Tasks with blocking dependencies where output of Agent A is required by Agent B

**Coordination Principles**:
- **Dependency Chain**: Agent A completes → outputs passed to Agent B → Agent B executes
- **State Preservation**: Context and outputs maintained between sequential agents
- **Clear Handoffs**: Explicit data transfer between dependent agents
- **Progress Tracking**: Monitor completion of each step in the sequence
- **Error Handling**: Failure in early stage stops dependent agents

### Hybrid Execution (Parallel Groups of Sequential Chains)
**When to Use**: Complex workflows with multiple independent sequential chains

**Coordination Principles**:
- **Chain Identification**: Group related sequential tasks into chains
- **Parallel Chains**: Multiple sequential chains execute simultaneously
- **Instance Distribution**: Multiple agents can work within each chain
- **Cross-Chain Independence**: Chains don't block each other
- **Optimized Throughput**: Maximum parallelism within dependency constraints

**Multiple Invocation Coordination**:
- Same agent can be called multiple times in sequence or parallel based on execution mode
- Different invocations work on different files/components or sequential stages
- Execution mode determines coordination: parallel instances vs sequential handoffs
- Clear separation prevents conflicts between invocations
- Results integrated according to execution strategy (parallel merge vs sequential pipeline)

## Approval Gate Implementation

**🛑 MANDATORY APPROVAL FLOW (NEVER BYPASS)**:
```
1. Complete ultrathink/sequential reasoning (MANDATORY)
2. Present comprehensive execution plan:
   - Task understanding
   - Agent assignments  
   - Instance distribution
   - Work distribution
   - Expected outcomes
3. HALT and wait for user response
4. Only proceed if user explicitly says "yes"
5. Ask clarifying questions if needed
6. Revise plan based on feedback
7. Get final approval before execution
```

**Plan Presentation Format**:
```
## Execution Plan

**Task Understanding:**
[Clear summary of what will be accomplished]

**Agent Assignments:**
- Agent X (2 instances): Will work on [specific files/components]
- Agent Y (1 instance): Will handle [specific responsibilities]  
- Agent Z (3 instances): Will focus on [specific areas]

**Instance Distribution:**
[How multiple instances are distributed across different file sets]

**Work Distribution:**
[How tasks are divided to prevent conflicts]

**Expected Outcomes:**
[What will be delivered]

🛑 **CRITICAL**: Proceed with this plan? (Must answer "yes" to continue)
```

## Configuration-Driven Behavior

**Intelligence-First Workflow Settings**:
```yaml
reasoning:
  mandatory: true                    # Never skip reasoning phase
  min_duration: 30                   # Minimum reasoning time in seconds
  thinking_mode: ultrathink          # Always use comprehensive reasoning
  approval_required: true            # Always require user approval
  cognitive_analysis: true           # Analyze cognitive requirements
  dependency_analysis: true          # Analyze task dependencies for execution strategy
  scaling_analysis: true             # Determine optimal agent count

research:
  enabled: true                      # Enable comprehensive MCP research phase
  intelligence_discovery: true       # Use Claude intelligence to discover technologies
  primary_tool: context7             # Primary research tool for libraries
  secondary_tool: WebSearch          # Secondary for community examples
  tertiary_tool: WebFetch            # Tertiary for official docs
  cache_results: true                # Cache research for all agents
  shared_knowledge: true             # Create shared knowledge base
  version_checking: true             # Check for latest versions
  max_research_time: 300             # Maximum research time in seconds

execution:
  intelligent_strategy: true         # Automatically choose optimal execution strategy
  execution_modes:                   # Supported execution patterns
    parallel: true                   # Default for independent tasks
    sequential: true                 # For blocking dependencies
    hybrid: true                     # Parallel groups of sequential chains
  max_agents: 20                     # Maximum cognitive agents (1-20 scaling)
  cognitive_specialization: true     # Use cognitive personas not technology templates
  multiple_invocations: true         # Allow multiple calls to same cognitive persona
  parallel_instances: true           # Enable multiple instances of same cognitive persona
  max_instances_per_persona: 5       # Maximum instances per cognitive persona
  dependency_management: true        # Handle blocking relationships intelligently
  conflict_prevention: strict        # Strict file ownership prevents conflicts
  research_integration: true         # All agents use shared research knowledge
  intelligence_coordination: true    # Coordinate through intelligent analysis
```

## Success Criteria

- ✅ **Intelligence-First**: Pure Claude intelligence drives all discovery and decisions
- ✅ **Mandatory Reasoning**: Every execution starts with comprehensive ultrathink analysis
- ✅ **Cognitive Specialization**: Agents use appropriate thinking approaches, not technology templates
- ✅ **Research Integration**: Comprehensive MCP research creates shared knowledge base
- ✅ **User Approval**: No execution without explicit user confirmation
- ✅ **Massive Parallelization**: Support for 1-20 cognitive agents running simultaneously
- ✅ **Intelligent Execution**: Automatically choose parallel, sequential, or hybrid execution based on dependencies
- ✅ **Multiple Instances**: Same cognitive persona can run multiple instances simultaneously
- ✅ **Multiple Invocations**: Cognitive personas can be called multiple times for different areas
- ✅ **Quality Integration**: All cognitive approaches combine into coherent, high-quality solution

## Integration Points

### Module Dependencies
- agents.md (agent specialization patterns for selection and invocation)

### Module Consumers
- Workflow command template (implements this execution pattern)
- Setup command (creates agents that will be invoked by this workflow)
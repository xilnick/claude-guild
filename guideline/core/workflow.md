# Natural Workflow Orchestration

## Purpose
Enable Claude to naturally analyze, decompose, and execute tasks using native intelligence with autonomous execution and iterative verification.

## Core Workflow (AUTONOMOUS ITERATION)

<workflow>
  <analyze_and_execute>
    AUTONOMOUS: Analyze and execute with intelligent understanding
    - Use chain of thought to understand request thoroughly
    - Apply systematic decomposition and analysis
    - Proceed with intelligent autonomous execution
    - Report understanding and approach in execution
  </analyze_and_execute>
  
  <decompose>
    MANDATORY: Identify parallel opportunities FIRST, then dependencies:
    - REQUIRED: What can run simultaneously?
    - Technical dependencies (blocks parallelization)  
    - Logical boundaries (enables parallelization)
    - PROACTIVE: Assume parallelization until proven otherwise
  </decompose>
  
  <execute>
    DEFAULT: Launch independent tasks simultaneously
    - Create specialists in parallel batches (see agents.md)
    - Sequential execution ONLY when dependencies prevent parallelization
    - Include verification requirements (see verification.md)
    - MANDATORY: Batch tool calls for maximum efficiency
  </execute>
  
  <verify_and_iterate>
    AUTONOMOUS: Check and iterate with intelligent gap resolution
    - Apply comprehensive verification (see verification.md)
    - Detect implementation gaps autonomously
    - Fix issues found proactively
    - Report verification results and improvements
    - Continue until technical excellence achieved
  </verify_and_iterate>
</workflow>

## Intelligent Analysis (AUTONOMOUS)

<intelligent_analysis>
  Demonstrate understanding through execution approach:
  "I'll [interpretation approach] by:
   - [Component 1 with parallel execution]
   - [Component 2 with intelligent coordination]
   - Success will be achieved through: [autonomous criteria]
   
   Proceeding with systematic parallel execution."
</intelligent_analysis>

## Unified Decomposition & Execution (MANDATORY)

<unified_parallel_framework>
  **DECOMPOSITION → PARALLEL EXECUTION PIPELINE:**
  0. **AGENT DISCOVERY FIRST**: Execute proactive discovery and assignment BEFORE decomposition
  1. Parse request into atomic work units WITH available agent capabilities consideration
  2. Identify parallelizable components (default: EVERYTHING) and match to assigned agents
  3. Group into parallel batches using assigned agents, sequence by proven dependencies only
  4. Apply parallel patterns: Files→Assigned agents + parallel creation, Layers→Assigned + simultaneous development, Features→Assigned + concurrent implementation
  5. Launch remaining specialists in batches (see agents.md), coordinate integration between assigned and new
  
  **EXECUTION PRINCIPLE:** Maximum parallelization through systematic decomposition and intelligent specialist routing
</unified_parallel_framework>

## Proactive Agent Discovery & Assignment (MANDATORY FIRST STEP)

<intelligence_routing>
  **CONSOLIDATED INTELLIGENCE ROUTING:** `@guideline/core/subagent-invocation.md`
  
  **PROACTIVE ASSIGNMENT SEQUENCE (WORKFLOW RESPONSIBILITY):**
  
  **MANDATORY PRE-EXECUTION WORKFLOW:**
  1. **DISCOVER FIRST**: Execute comprehensive agent inventory BEFORE any task planning or execution
     - Systematic scanning of all available persistent agents
     - Capability assessment and metadata extraction from existing specialists
     - NO task assignment until discovery is complete
  
  2. **SCORE & SELECT BEST**: Apply systematic scoring to identify OPTIMAL available agents
     - Score 85-100: **IMMEDIATE ASSIGNMENT** to high-performing persistent agents
     - Score 70-84: **DIRECT ASSIGNMENT** with context adaptation guidance
     - Score 55-69: **HYBRID ASSIGNMENT** combining persistent + dynamic approach
     - Score 40-54: **SELECTIVE CREATION** with persistent consultation
     - Score <40: **CREATE ONLY** when no suitable agents exist
  
  3. **ASSIGN PROACTIVELY**: Workflow actively assigns tasks to BEST AVAILABLE agents
     - **PRIORITIZE REUSE**: Always prefer existing high-scoring agents over creation
     - **IMMEDIATE DEPLOYMENT**: Assign tasks without hesitation to optimal agents
     - **DOCUMENT DECISIONS**: Report which agents selected and scoring rationale
     - **OPTIMIZE WORKLOAD**: Balance assignments across available agent capabilities
  
  **WORKFLOW ASSIGNMENT RESPONSIBILITIES:**
  - **WORKFLOW OWNS DISCOVERY**: Must scan for available agents before any execution planning
  - **WORKFLOW SELECTS OPTIMALLY**: Proactively chooses BEST available agents based on systematic scoring
  - **WORKFLOW PRIORITIZES REUSE**: Existing agents preferred over creation unless score <40
  - **WORKFLOW REPORTS ASSIGNMENTS**: Shows which agents assigned to which tasks with rationale
  
  **ENHANCED AUTOMATIC ANALYSIS & ROUTING SEQUENCE:**
  1. **PERSISTENT AGENT DISCOVERY**: Execute systematic discovery protocol from subagent-invocation.md
     - Comprehensive agent inventory with metadata extraction
     - Capability assessment using scoring system (0-100 scale)
     - Context adaptation analysis and parallel execution compatibility
  
  2. **INTELLIGENT AGENT SELECTION**: Apply consolidated selection decision matrix
     - Score 85-100: Direct persistent utilization with established patterns
     - Score 70-84: Context-adapted persistent with enhancement guidance
     - Score 55-69: Hybrid approach combining persistent + dynamic specialists
     - Score 40-54: Dynamic preferred with optional persistent consultation
     - Score <40: Pure dynamic creation for maximum flexibility
  
  3. **HYBRID COORDINATION ARCHITECTURE**: Design optimal agent mix
     - Persistent agents leverage established expertise and coordination protocols
     - Dynamic agents handle novel requirements with creative problem-solving
     - Integration specialists manage mixed agent type workflows
     - Coordination patterns optimize both expertise and flexibility
  
  **ROUTING DECISION INTEGRATION:**
  Claude's native intelligence analyzes task requirements and applies consolidated patterns:
  - **Domain Expertise Needs**: Reference discovery protocol for persistent agent availability
  - **Novel Requirements**: Apply dynamic creation templates from consolidated intelligence
  - **Complex Coordination**: Use hybrid coordination patterns for mixed agent workflows
  - **Parallel Opportunities**: Leverage coordination architecture for simultaneous execution
  
  **DEFAULT ROUTING STRATEGY:**
  ALWAYS execute discovery protocol first, ASSIGN to best available agents immediately, create new agents ONLY as last resort when no suitable agents exist (score <40)
</intelligence_routing>

## Integrated Analysis Framework

<analysis>
  **AUTONOMOUS ANALYSIS SEQUENCE:**
  1. **INTELLIGENT UNDERSTANDING**: Analyze and understand through systematic decomposition
  2. **INTELLIGENT ROUTING & DECOMPOSITION**: Apply routing + decomposition simultaneously
  3. **PARALLEL SPECIALIST CREATION**: Route to specialists, batch for parallel execution (see agents.md)
  4. **COORDINATION & VERIFICATION**: Define integration points, verification strategy (see verification.md)
  
  **PRINCIPLE:** Native intelligence drives optimal parallel architecture through autonomous systematic analysis
</analysis>

## Dependency Management & Coordination

<dependencies>
  **DEPENDENCY CHALLENGE:** Prove necessity for each potential dependency - technical necessity, cannot be mocked/stubbed, no workaround exists. DEFAULT: Dependencies don't exist until proven.
  
  **TRUE BLOCKERS:** Core schema for dependent operations, authentication mechanism, base API contracts
  
  **PARALLEL PATTERNS:** Independent files→Automatic simultaneous creation, Technology layers→Parallel development, Feature domains→Concurrent implementation, Documentation/Testing/Configuration→Parallel with implementation
  
  **COORDINATION REQUIREMENTS:** Define interface contracts, integration checkpoints, shared agreements, communication protocols (see agents.md), merge sequences
</dependencies>

## Verification Integration

<verification>
  **CONSOLIDATED VERIFICATION INTELLIGENCE:** `@guideline/core/verification.md`
  
  **SYSTEMATIC VERIFICATION REQUIREMENTS:**
  AUTONOMOUS after execution: Apply comprehensive verification methodology from verification.md, including parallel gap detection and integration testing. Fix issues through parallel remediation, re-verify autonomously with results reporting.
  
  **AGENT-SPECIFIC VERIFICATION INTEGRATION:**
  - **Persistent Agents**: Leverage embedded verification patterns while adapting to current context
  - **Dynamic Agents**: Apply comprehensive verification using systematic approaches from verification.md
  - **Hybrid Coordination**: Verify integration coherence across mixed agent type workflows
  - **Integration Specialists**: Coordinate verification across all agent types and integration points
  
  **MANDATORY NO AUTO-PERSIST REQUIREMENT:** `@guideline/core/verification.md`
  - **VERIFICATION IN-MEMORY ONLY**: All verification analysis and gap detection performed in memory
  - **NO AUTOMATIC REPORTS**: Verification results presented in conversation, never auto-saved to files
  - **USER CONTROLS PERSISTENCE**: Only create verification reports/files when explicitly requested
  - **CLEAN VERIFICATION**: Verification processes run without creating unwanted filesystem artifacts
  
  **QUALITY INTEGRATION STANDARDS:**
  Reference consolidated intelligence for verification across agent types using systematic parallel verification methodology, cross-agent gap detection, and integration point validation from verification.md
</verification>

## Specialist Creation Integration

<specialist_integration>
  **CONSOLIDATED SPECIALIST CREATION INTELLIGENCE:**
  
  **PRIMARY INTELLIGENCE SOURCES:**
  - `@guideline/core/subagent-invocation.md`: Agent discovery, scoring, selection, and coordination patterns
  - `@guideline/core/agents.md`: Enhanced specialist creation methodology and proactive frameworks
  - `@guideline/core/verification.md`: Quality integration and systematic verification processes
  
  **SYSTEMATIC SPECIALIST ASSIGNMENT & CREATION TRIGGERS:**
  0. **PROACTIVE DISCOVERY FIRST**: Execute comprehensive agent discovery and assignment BEFORE analyzing creation triggers
     - Discover ALL available agents before considering any new specialist creation
     - ASSIGN tasks to best available agents immediately (scores 85-100)
     - Only proceed to creation triggers for tasks that cannot be assigned to existing agents
  
  1. **DISCOVERY-DRIVEN TRIGGERS**: Execute persistent agent discovery before creating any specialists
     - Domain expertise requirements → Check persistent agent availability via discovery protocol
     - Novel requirement handling → Apply scoring system to determine optimal agent strategy  
     - Coordination complexity → Use hybrid coordination templates for mixed agent workflows
  
  2. **INTELLIGENT SELECTION TRIGGERS**: Apply consolidated selection decision matrix
     - High-match persistent (85-100) → Domain specialists with established patterns
     - Medium-match persistent (70-84) → Context-adapted specialists with enhancement
     - Hybrid coordination (55-69) → Mixed persistent + dynamic specialist teams
     - Dynamic creation (40-54 or <40) → Pure dynamic specialists with creative problem-solving
  
  3. **PARALLEL COORDINATION TRIGGERS**: Reference coordination architecture patterns
     - Independent work streams → Parallel specialist deployment using coordination templates
     - Integration requirements → Mixed agent coordination with integration specialists
     - Quality assurance → Verification specialists using systematic verification from verification.md
  
  **ENHANCED CREATION PROCESS INTEGRATION:**
  1. **DISCOVERY PHASE**: Apply discovery protocol from subagent-invocation.md
  2. **SCORING PHASE**: Use systematic scoring system for optimal agent selection
  3. **TEMPLATE PHASE**: Apply appropriate context adaptation templates based on scores
  4. **COORDINATION PHASE**: Implement coordination patterns for selected agent mix
  5. **VERIFICATION PHASE**: Integrate quality assurance using verification.md standards
  
  **ARCHITECTURE PRINCIPLE**: 
  Trust consolidated intelligence for optimal specialist architecture design, enable organic collaboration through established patterns, allow evolution based on findings through systematic frameworks
</specialist_integration>

## Execution Framework

<execution_framework>
  **INTEGRATED APPROACH WITH PROACTIVE ASSIGNMENT:**
  
  **Phase 0: DISCOVERY & ASSIGNMENT (MANDATORY FIRST)**
  - Execute comprehensive agent discovery protocol BEFORE any task analysis
  - Score all available agents using systematic scoring system (0-100)
  - ASSIGN tasks to BEST available agents immediately (scores 85-100)
  - Use context-adapted agents for medium scores (70-84)
  - Apply hybrid approaches when beneficial (55-69)
  - Create new agents ONLY when no suitable agents exist (score <40)
  
  **Phase 1: Intelligence routing for remaining tasks**
  - Domain complexity analysis for unassigned components
  - Expertise needs assessment for gaps in available agents
  - Parallel opportunities identification across assigned and new work
  - Coordination challenges planning between assigned agents and new specialists
  - Verification requirements integration across all agents
  
  **Phase 2: Intelligent breakdown and coordination**
  - Intelligent breakdown into atomic units with agent assignments
  - Dependency challenge with assigned agent capabilities consideration
  - Parallel identification leveraging both assigned and new specialists
  - Specialist matching using discovery results and creation for gaps only
  - Coordination design integrating assigned agents with new specialists
  
  **PRINCIPLE:** Discovery and assignment FIRST, then systematic framework guides optimal execution with native intelligence optimization
</execution_framework>

## Task Tool Implementation Standards

<task_tool_standards>
  **UNIFIED DESCRIPTION STANDARD (4 sentences MANDATORY):** `@guideline/core/subagent-invocation.md`
  1. **Specialized Purpose**: Primary function and unique capabilities with Tool Use Implementation compliance
  2. **Intelligent Coordination**: When to use vs other agents, coordination through adaptive reasoning and creative problem-solving
  3. **Context Boundaries**: Important limitations, structured JSON error handling, domain boundaries
  4. **Expected Outcomes**: Deliverables through context-aware decision making and integration with parallel specialists
  
  **SYSTEMATIC CREATION TRIGGERS:**
  - Domain expertise analysis → Domain specialist (see agents.md)
  - Parallel work identification → Work stream specialist
  - Complex coordination detected → Integration specialist
  - Deep analysis required → Research specialist
  - Quality assurance needs → Verification specialist (see verification.md)
  
  **INTEGRATION PRINCIPLE:** Systematic triggers ensure comprehensive coverage, native intelligence optimizes execution
</task_tool_standards>

## Parallel Execution Strategy (MANDATORY DEFAULT)

<parallel_execution>
  **MAXIMUM PARALLELIZATION:**
  Pre-execution: Apply decomposition, identify parallel batches, challenge dependencies, plan specialists (see agents.md), design coordination, prepare batch execution. DEFAULT: Maximum parallelization until proven impossible.
  
  **EXECUTION:** Launch independent specialists simultaneously, batch tool calls, coordinate integration, process results together. Sequential ONLY for proven dependencies.
</parallel_execution>

## Error Handling Framework

<error_handling>
  **Structured Error Response:**
  ```json
  {
    "type": "workflow_error",
    "message": "Clear description of what failed",
    "details": "Context and debugging information",
    "suggestions": "Potential solutions or workarounds"
  }
  ```
  
  **Recovery Strategies:**
  - **Immediate Retry**: Transient failures, network timeouts, resource conflicts
  - **Modified Approach**: Adjust parameters, reduce scope, try alternative method
  - **Escalation**: Create fix specialist (see agents.md), request user guidance, document blocker
  
  **Error Prevention:**
  - Validate inputs before execution
  - Check preconditions
  - Test integration points early
  - Include fallback approaches
</error_handling>

## Best Practices

<best_practices>
  **PROACTIVE AGENT ASSIGNMENT STANDARDS:**
  - **ALWAYS DISCOVER FIRST**: Execute agent discovery protocol BEFORE any task execution or planning
  - **ASSIGN TO BEST AVAILABLE**: Proactively assign tasks to highest-scoring available agents (85-100)
  - **PRIORITIZE REUSE**: Use existing agents over creation unless score <40 indicates no suitable match  
  - **DOCUMENT ASSIGNMENTS**: Report which agents selected, their scores, and assignment rationale
  - **OPTIMIZE UTILIZATION**: Balance workload across available agent capabilities for maximum efficiency
  - **CREATE AS LAST RESORT**: Only create new agents when discovery shows no suitable alternatives exist
  
  **AUTONOMOUS STANDARDS:**
  - Apply systematic decomposition to EVERY task with intelligent understanding
  - Default to maximum parallelization, justify sequential execution
  - Use 4-5 sentence specialist descriptions (see agents.md)
  - Include verification requirements (see verification.md)
  - Batch ALL tool calls for optimal performance
  - Execute with autonomous intelligence while reporting approach
  
  **PARALLEL-FIRST EXECUTION:**
  - Maximum parallelization unless blocked by proven dependencies
  - Launch simultaneous specialists as standard procedure (both assigned and newly created)
  - Challenge assumed dependencies, minimize sequential work
  - Define integration procedures between assigned agents and new specialists upfront
  - Plan error recovery across all parallel streams including mixed agent types
  - Coordinate between existing assigned agents and newly created specialists seamlessly
</best_practices>
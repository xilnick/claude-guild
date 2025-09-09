# Natural Workflow Orchestration

## Purpose
Enable Claude to naturally analyze, decompose, and execute tasks using native intelligence with autonomous execution and iterative verification.

## Core Workflow (AUTONOMOUS ITERATION)

<workflow>
  <analyze>
    AUTONOMOUS: Understand request through chain of thought analysis
    - Apply systematic decomposition and intelligent understanding
    - Report approach and proceed with autonomous execution
  </analyze>
  
  <decompose>
    MANDATORY: Identify parallel opportunities FIRST
    - What can run simultaneously? (Default: everything)
    - What requires coordination? (Minimize dependencies)
    - Assume parallelization until proven otherwise
  </decompose>
  
  <execute>
    DEFAULT: Launch independent tasks simultaneously
    - Create specialists in parallel batches (see agents.md)
    - Sequential ONLY when dependencies block parallelization
    - Batch tool calls for maximum efficiency
  </execute>
  
  <verify>
    AUTONOMOUS: Check and iterate with gap resolution
    - Apply comprehensive verification (see verification.md) 
    - Fix issues proactively and continue until excellence achieved
  </verify>
</workflow>

## Intelligent Analysis (AUTONOMOUS)

<intelligent_analysis>
  Demonstrate understanding through execution approach:
  "I'll [approach] by: [parallel components]. Proceeding with systematic execution."
</intelligent_analysis>

## Decomposition & Execution (PARALLEL-FIRST)

<parallel_framework>
  **EXECUTION PIPELINE:**
  0. **DISCOVER AGENTS**: Check available specialists BEFORE planning
  1. **DECOMPOSE**: Break into parallel units, assign to best agents
  2. **EXECUTE**: Launch specialists simultaneously, coordinate integration
  
  **PRINCIPLE:** Maximum parallelization through intelligent specialist routing
</parallel_framework>

## Proactive Agent Discovery & Assignment (MANDATORY FIRST STEP)

<intelligence_routing>
  **REFERENCE:** `@guideline/core/subagent-invocation.md` for detailed patterns
  
  **DISCOVERY & ASSIGNMENT SEQUENCE:**
  1. **DISCOVER**: Scan available agents before task planning
  2. **SCORE**: Rate agents 0-100 for task compatibility  
  3. **ASSIGN**: Use best available agents (85-100 immediate, 70-84 adapted, <40 create new)
  
  **ASSIGNMENT PRIORITIES:**
  - Prioritize reuse over creation
  - Assign to optimal agents without hesitation  
  - Document selection rationale
  - Balance workload across agents
  
  **DEFAULT STRATEGY:**
  Discover first → Assign to best → Create only as last resort
</intelligence_routing>

## Analysis Framework

<analysis>
  **AUTONOMOUS SEQUENCE:**
  1. Understanding through systematic decomposition
  2. Routing & decomposition simultaneously  
  3. Parallel specialist creation (see agents.md)
  4. Coordination & verification (see verification.md)
</analysis>

## Dependency Management

<dependencies>
  **CHALLENGE DEPENDENCIES:** Prove necessity - can it be mocked/stubbed? DEFAULT: No dependencies until proven.
  
  **TRUE BLOCKERS:** Core schema, authentication, base contracts
  
  **PARALLEL PATTERNS:** Files→Simultaneous, Layers→Parallel, Features→Concurrent, Docs/Tests→With implementation
</dependencies>

## Verification Integration

<verification>
  **REFERENCE:** `@guideline/core/verification.md` for complete methodology
  
  **REQUIREMENTS:**
  - Apply comprehensive verification after execution
  - Fix issues through parallel remediation
  - NO automatic report creation - verification stays in-memory
  - User controls all file persistence
  
  **AGENT VERIFICATION:**
  - Persistent: Use embedded patterns
  - Dynamic: Apply systematic approaches
  - Integration: Coordinate across all agents
</verification>

## Specialist Creation Integration

<specialist_integration>
  **INTELLIGENCE SOURCES:**
  - `@guideline/core/subagent-invocation.md`: Discovery & coordination patterns
  - `@guideline/core/agents.md`: Creation methodology  
  - `@guideline/core/verification.md`: Quality integration
  
  **CREATION PROCESS:**
  1. **DISCOVER**: Check available agents first
  2. **SCORE**: Apply selection system (85-100 reuse, <40 create)  
  3. **CREATE**: Launch specialists for gaps only
  4. **COORDINATE**: Enable organic collaboration
  5. **VERIFY**: Integrate quality assurance
</specialist_integration>

## Execution Framework

<execution_framework>
  **EXECUTION PHASES:**
  
  **Phase 0: DISCOVER & ASSIGN (MANDATORY)**
  - Execute discovery protocol BEFORE task analysis  
  - Score agents (0-100), assign to best available
  - Create new agents ONLY when no suitable match (<40)
  
  **Phase 1: ANALYZE & PLAN**
  - Assess remaining complexity and parallel opportunities
  - Plan coordination between assigned and new specialists
  
  **Phase 2: EXECUTE & COORDINATE**
  - Launch specialists with coordination design
  - Integrate assigned agents with new specialists
</execution_framework>

## Task Tool Standards

<task_tool_standards>
  **DESCRIPTION REQUIREMENT:** 4 sentences mandatory (see `subagent-invocation.md`)
  1. Specialized purpose and capabilities  
  2. When to use vs other agents
  3. Important limitations and boundaries
  4. Expected outcomes and deliverables
  
  **CREATION TRIGGERS:** Domain expertise → Domain specialist, Parallel work → Work stream specialist, Coordination → Integration specialist, Analysis → Research specialist, QA → Verification specialist
</task_tool_standards>

## Parallel Execution (MANDATORY DEFAULT)

<parallel_execution>
  **PRE-EXECUTION:** Decompose → Challenge dependencies → Plan specialists → Design coordination
  
  **EXECUTION:** Launch simultaneously, batch tool calls, coordinate integration. Sequential ONLY for proven dependencies.
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

## Intelligence Usage Reporting

<intelligence_usage_reporting>
  **REFERENCES:** `@guideline/core/intelligence-metrics.md` + `@guideline/core/intelligence-tracker.md`
  
  **WORKFLOW REPORTING REQUIREMENTS:**
  - [track-discovery] Agent discovery results and effectiveness
  - [track-assignments] Assignment decisions with rationale  
  - [track-utilization] Intelligence pattern usage and success
  - [track-optimization] Performance improvements achieved
  - [track-feedback] Insights for framework evolution
</intelligence_usage_reporting>

## Best Practices

<best_practices>
  **AGENT ASSIGNMENT:**
  - Discover first, assign to best available (85-100), create only as last resort (<40)
  - Document selections and optimize workload balance
  
  **EXECUTION:**
  - Default to maximum parallelization, justify sequential execution
  - Use 4-5 sentence specialist descriptions (see agents.md)
  - Batch all tool calls for optimal performance
  
  **COORDINATION:**
  - Challenge assumed dependencies, define integration upfront
  - Plan error recovery across all parallel streams
</best_practices>
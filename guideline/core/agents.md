# Intelligent Agent Management

## Purpose
Use Claude's native intelligence to determine when to create dynamic specialists or use persistent agents, with MANDATORY verification requirements.

## Proactive Specialist Creation Approach (Aggressively Parallel)

<proactive_approach>
  <aggressive_specialist_creation>
    **MANDATORY PROACTIVE ANALYSIS:**
    - FIRST: How many specialists can I create simultaneously?
    - PRIORITY: What parallel batches of specialists are possible?
    - DEFAULT: Create multiple specialists unless coordination prevents it
    - STANDARD: Batch specialist creation for maximum efficiency
    - ASSUMPTION: More specialists = better parallelization until proven otherwise
  </aggressive_specialist_creation>
  
  <specialist_decision_matrix>
    **DECISION FRAMEWORK:**
    ```xml
    <specialist_creation_decision>
      For each task component, ask:
      1. Can this be done by a specialist independently?
      2. Can multiple specialists work on different aspects simultaneously?
      3. What coordination is needed between specialists?
      4. Should I create persistent or dynamic specialists?
      5. How will specialists be batched for parallel execution?
      
      DEFAULT: Create specialist for each independent work unit
    </specialist_creation_decision>
    ```
  </specialist_decision_matrix>
  
  <batch_creation_patterns>
    **STANDARD BATCHING APPROACHES:**
    ```xml
    <batching_templates>
      Pattern 1: Layer-Based Specialist Batching
      - Frontend specialist + Backend specialist + Database specialist (simultaneous)
      
      Pattern 2: Feature-Based Specialist Batching
      - Feature-A specialist + Feature-B specialist + Feature-C specialist (simultaneous)
      
      Pattern 3: Domain-Based Specialist Batching
      - Auth specialist + Data specialist + UI specialist + Test specialist (simultaneous)
      
      RULE: Default to maximum parallel specialist creation
    </batching_templates>
    ```
  </batch_creation_patterns>
</proactive_approach>

## Dynamic Specialist Creation (Proactively Aggressive)

<dynamic_creation>
  <when_to_use>
    **AGGRESSIVE CREATION CRITERIA:**
    - ANY independent work unit (default approach)
    - Task-specific requirements needing specialized focus
    - Parallel execution opportunities identified
    - No coordination blocker with other specialists
    - Maximum flexibility and parallel execution desired
    - STANDARD: Create specialist for each parallelizable component
  </when_to_use>
  
  <parallel_creation_strategy>
    **SYSTEMATIC SPECIALIST IDENTIFICATION:**
    ```xml
    <specialist_identification_process>
      1. DECOMPOSE task into smallest independent units
      2. IDENTIFY each unit that can have its own specialist
      3. GROUP specialists into parallel execution batches
      4. PLAN coordination between specialist batches
      5. CREATE all specialists in batches simultaneously
      6. COORDINATE integration points explicitly
    </specialist_identification_process>
    ```
  </parallel_creation_strategy>
  
  <how_to_create>
    Use Task tool directly:
    ```
    subagent_type: "general-purpose"
    description: **3-4 sentences minimum** explaining:
      * What the specialist will do and primary purpose
      * When this specialist should be used vs others
      * Important limitations or constraints
      * Expected outcomes and deliverables
    prompt: Detailed context including:
      - Role and expertise
      - Project context
      - Specific requirements
      - Success criteria
      - MANDATORY: Verification requirements
      - MANDATORY: Gap detection instructions
      - MANDATORY: Reporting format
    ```
  </how_to_create>
  
  <verification_requirements>
    Every specialist prompt MUST include:
    - Clear success criteria
    - Gap detection requirements
    - Integration check instructions
    - Reporting format for findings
    - Iteration instructions if gaps found
  </verification_requirements>
  
  <benefits>
    - No setup required
    - Perfectly tailored to task
    - Maximum flexibility
    - Immediate availability
    - Built-in verification
  </benefits>
</dynamic_creation>

## Persistent Agent Usage

<persistent_agents>
  <when_valuable>
    - Frequently repeated tasks
    - Specialized domain knowledge
    - Team consistency needs
    - Complex project patterns
    - Standardized verification processes
  </when_valuable>
  
  <creation>
    Use /agents command to create
    Include verification capabilities
    Store in project for reuse
    Document for team awareness
  </creation>
  
  <usage>
    ```
    subagent_type: "[agent-name]"
    description: Specific task
    prompt: Task details including:
      - MANDATORY: Verification requirements
      - MANDATORY: Gap detection scope
      - MANDATORY: Success criteria
    ```
  </usage>
</persistent_agents>

## Proactive Specialist Decision Framework

<proactive_guidelines>
  <systematic_analysis>
    **MANDATORY PARALLEL-FIRST ANALYSIS:**
    For each task component:
    1. DECOMPOSITION: What independent work units exist?
    2. PARALLELIZATION: How many specialists can work simultaneously?
    3. BATCHING: How should specialists be grouped for parallel creation?
    4. COORDINATION: What explicit coordination is needed between specialists?
    5. SPECIALIST TYPE: Dynamic (flexible) or persistent (standardized)?
    6. VERIFICATION: How will parallel verification be handled?
    7. INTEGRATION: What are the merge and handoff requirements?
  </systematic_analysis>
  
  <aggressive_decision_matrix>
    **PROACTIVE SPECIALIST CREATION DECISION:**
    ```xml
    <decision_matrix>
      ALWAYS CREATE SPECIALISTS WHEN:
      ✓ Independent work units identified (AUTOMATIC specialist creation)
      ✓ Parallel execution possible (MANDATORY multiple specialists)
      ✓ Different expertise domains needed (AUTOMATIC domain specialists)
      ✓ Separate technology layers involved (AUTOMATIC layer specialists)
      ✓ Multiple features or components (AUTOMATIC feature specialists)
      
      USE PERSISTENT AGENTS WHEN:
      ✓ Standardized processes with existing agents
      ✓ Team consistency requirements
      ✓ Recurring patterns with proven agent templates
      ✓ Complex domain knowledge already captured
      
      DEFAULT RULE: Create dynamic specialists aggressively, use persistent strategically
    </decision_matrix>
    ```
  </aggressive_decision_matrix>
  
  <parallel_execution_coordination>
    **SYSTEMATIC PARALLEL COORDINATION:**
    ```xml
    <coordination_protocol>
      1. CREATE specialists in parallel batches
      2. DEFINE integration contracts upfront
      3. ESTABLISH explicit handoff procedures
      4. PLAN merge and integration checkpoints
      5. DESIGN conflict resolution mechanisms
      6. COORDINATE verification across all specialists
      7. SYNCHRONIZE final integration and delivery
    </coordination_protocol>
    ```
  </parallel_execution_coordination>
</proactive_guidelines>

## Verification Integration

<verification_integration>
  All agents (dynamic or persistent) MUST:
  - Check their work for completeness
  - Report gaps found
  - Suggest fixes for issues
  - Verify integration points
  - Confirm success criteria met
</verification_integration>

## Error Handling Framework

<error_handling>
  **All specialists must handle errors gracefully:**
  ```json
  {
    "type": "specialist_error",
    "message": "Clear description of what failed",
    "details": "Context and debugging information",
    "suggestions": "Recommended fixes or alternative approaches"
  }
  ```
  - Provide actionable error messages with recovery strategies
  - Include suggestions for resolution and alternative approaches
  - Allow retry with modified parameters when appropriate
  - Implement fallback approaches for critical failures
  - Report errors clearly to enable iteration and improvement
</error_handling>

## Aggressive Parallel Specialist Coordination

<aggressive_parallel_execution>
  **Claude 4 Maximum Parallelization for Specialists:**
  
  **MANDATORY PARALLEL SPECIALIST MANAGEMENT:**
  ```xml
  <parallel_specialist_framework>
    STANDARD OPERATING PROCEDURE:
    1. IDENTIFY all parallelizable work units in task
    2. CREATE specialists for each independent unit simultaneously
    3. BATCH specialist creation and deployment for maximum efficiency
    4. COORDINATE integration contracts explicitly between all specialists
    5. DESIGN specialists to work together without coordination blocking
    6. ENABLE maximum concurrent execution of all non-dependent specialist tasks
    7. SYNCHRONIZE results and integration across all parallel specialists
  </parallel_specialist_framework>
  ```
  
  **SPECIALIST BATCHING STRATEGIES:**
  ```xml
  <specialist_batching_strategies>
    Strategy 1: Simultaneous Creation
    - Launch all independent specialists in single batch
    - Coordinate integration points explicitly upfront
    - Process all results together for integrated delivery
    
    Strategy 2: Coordinated Waves
    - Wave 1: Core specialists (parallel foundation work)
    - Wave 2: Integration specialists (parallel integration work)
    - Wave 3: Verification specialists (parallel validation work)
    
    DEFAULT: Use simultaneous creation unless coordination requires waves
  </specialist_batching_strategies>
  ```
  
  **COORDINATION ARCHITECTURE:**
  ```xml
  <specialist_coordination_architecture>
    PROACTIVE COORDINATION DESIGN:
    1. Define interfaces between all parallel specialists upfront
    2. Establish communication protocols for specialist interaction
    3. Create integration checkpoints with explicit success criteria
    4. Design conflict resolution procedures for specialist coordination
    5. Plan verification approach across all parallel specialist work
    6. Coordinate final delivery and integration across specialists
  </specialist_coordination_architecture>
  ```
</aggressive_parallel_execution>

## Enhanced Best Practices (Proactively Aggressive)

<enhanced_practices>
  **PROACTIVE SPECIALIST CREATION:**
  - DEFAULT to aggressive specialist creation for maximum parallelization
  - MANDATORY: Apply specialist decision matrix to EVERY task component
  - SYSTEMATIC: Use decomposition methodology to identify ALL specialist opportunities
  - BATCHING: Group specialist creation for parallel execution efficiency
  - COORDINATION: Design integration architecture upfront for all parallel specialists
  
  **AGGRESSIVE DECISION OPTIMIZATION:**
  - SPEED PRIORITY: Don't overthink specialist type decisions - create and coordinate
  - FLEXIBILITY BIAS: Prefer dynamic specialists for maximum parallel execution flexibility
  - CONSISTENCY WHEN NEEDED: Use persistent specialists for standardized parallel processes
  - SYSTEMATIC APPROACH: Apply decision framework consistently across all task components
  
  **MANDATORY SPECIALIST REQUIREMENTS:**
  - ALWAYS provide comprehensive context and coordination requirements to ALL specialists
  - ALWAYS include verification requirements and gap detection capabilities in ALL specialist prompts
  - ALWAYS design integration and handoff procedures between parallel specialists
  - ALWAYS include coordination protocols for specialist interaction and conflict resolution
  
  **PROACTIVE COORDINATION EXCELLENCE:**
  - SYSTEMATIC: Apply coordination architecture across all parallel specialist creation
  - INTELLIGENT: Trust Claude's natural intelligence for specialist routing and coordination decisions
  - FLEXIBLE: Avoid rigid templates that constrain parallel execution opportunities
  - COMPREHENSIVE: Ensure gap detection and remediation capabilities across ALL specialists
  - STANDARD: Follow Tool Use Implementation standards consistently across all specialist interactions
  
  **PARALLEL EXECUTION OPTIMIZATION:**
  - BATCHING: Create specialists in parallel batches for maximum efficiency
  - COORDINATION: Design explicit coordination protocols between all parallel specialists
  - INTEGRATION: Plan integration checkpoints and handoff procedures upfront
  - VERIFICATION: Include parallel verification capabilities across all specialist creation
  - REMEDIATION: Build parallel remediation and gap correction into all specialist coordination
</enhanced_practices>

## Examples

<examples>
  <dynamic_with_verification>
    Task: "Add authentication to API"
    Decision: Create dynamic backend specialist
    Prompt includes:
    - Authentication requirements
    - Success criteria (login/logout working)
    - Gap detection (edge cases, security)
    - Integration verification
  </dynamic_with_verification>
  
  <persistent_with_verification>
    Task: "Review code quality"
    Decision: Use existing code-reviewer agent
    Additional prompt:
    - Specific areas to review
    - Quality criteria
    - Gap detection focus
    - Report format
  </persistent_with_verification>
  
  <hybrid_example>
    Task: "Refactor and test authentication"
    Decision: Dynamic refactoring + persistent test agent
    Both include:
    - Verification requirements
    - Gap detection scope
    - Integration checks
  </hybrid_example>
</examples>
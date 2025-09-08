# Natural Workflow Orchestration

## Purpose
Enable Claude to naturally analyze, decompose, and execute tasks using native intelligence with MANDATORY understanding confirmation and iterative verification.

## Core Workflow (MANDATORY ITERATION)

<workflow>
  <understand_and_confirm>
    MANDATORY: Confirm understanding before ANY execution
    - Use chain of thought to understand request
    - Present interpretation to user
    - Get explicit approval
    - Never proceed without confirmation
  </understand_and_confirm>
  
  <decompose>
    MANDATORY: Identify parallel opportunities FIRST, then dependencies:
    - REQUIRED: What can run simultaneously?
    - Technical dependencies (blocks parallelization)  
    - Logical boundaries (enables parallelization)
    - PROACTIVE: Assume parallelization until proven otherwise
  </decompose>
  
  <execute>
    DEFAULT: Launch independent tasks simultaneously
    - Create specialists in parallel batches by default
    - Sequential execution ONLY when dependencies prevent parallelization
    - Include verification requirements in prompts
    - MANDATORY: Batch tool calls for maximum efficiency
  </execute>
  
  <verify_and_iterate>
    MANDATORY: Check and iterate until satisfied
    - Verify all success criteria
    - Detect implementation gaps
    - Fix issues found
    - Get user confirmation
    - Continue until fully satisfied
  </verify_and_iterate>
</workflow>

## Understanding Confirmation (MANDATORY)

<understanding>
  Always present understanding for approval:
  "I understand you want me to [interpretation].
   This involves:
   - [Component 1]
   - [Component 2]
   - Success means: [criteria]
   Is this correct?"
   
  Wait for user confirmation before proceeding.
</understanding>

## Systematic Decomposition Methodology (MANDATORY)

<systematic_decomposition>
  **STEP 1: Decomposition Decision Tree**
  ```xml
  <decomposition_process>
    1. Parse request into atomic work units
    2. Identify smallest parallelizable components
    3. Map dependencies between components
    4. Group independent components into parallel batches
    5. Sequence batches by dependency chains
    6. Default assumption: EVERYTHING parallelizes until proven otherwise
  </decomposition_process>
  ```
  
  **STEP 2: Parallel Opportunity Identification Templates**
  ```xml
  <parallel_templates>
    ALWAYS CHECK THESE PATTERNS:
    ✓ File operations → Independent files = AUTOMATIC parallel creation
    ✓ Layer separation → Frontend/Backend/Database = SIMULTANEOUS development
    ✓ Feature modules → Separate features = CONCURRENT implementation
    ✓ Documentation → PARALLEL with all implementation work
    ✓ Testing → SIMULTANEOUS with development
    ✓ Configuration → CONCURRENT with code creation
    ✓ Validation → PARALLEL verification of independent components
  </parallel_templates>
  ```
  
  **STEP 3: Decomposition Examples**
  ```xml
  <decomposition_examples>
    Example: "Build user authentication system"
    BREAKDOWN:
    - Parallel Batch 1: [Database schema, API endpoints, Frontend components]
    - Parallel Batch 2: [Tests, Documentation, Configuration] (depends on Batch 1)
    - Parallel Batch 3: [Integration verification, Security validation] (depends on Batch 2)
    
    JUSTIFICATION: Each batch has no internal dependencies but depends on previous batch
  </decomposition_examples>
  ```
</systematic_decomposition>

## Task Analysis (Enhanced Parallel-First)

<analysis>
  For each request, MANDATORY systematic decomposition:
  1. Have I confirmed understanding with user?
  2. DECOMPOSITION: Break into smallest parallelizable units
  3. PARALLEL MAPPING: Identify ALL simultaneous execution opportunities
  4. DEPENDENCY CHALLENGE: Prove dependencies exist, don't assume them
  5. BATCH IDENTIFICATION: Group independent work into parallel execution batches
  6. SPECIALIST PLANNING: Plan proactive specialist creation for each batch
  7. VERIFICATION STRATEGY: Design parallel verification approach
  8. INTEGRATION COORDINATION: Define explicit handoff and merge points
  9. MANDATORY DEFAULT: Assume maximum parallelization, justify any sequential execution
</analysis>

## Systematic Dependency Management

<dependencies>
  <dependency_analysis_framework>
    **MANDATORY DEPENDENCY CHALLENGE PROCESS:**
    ```xml
    <dependency_validation>
      For each potential dependency, PROVE:
      1. Technical necessity (not convenience)
      2. Cannot be mocked/stubbed for parallel development
      3. No workaround exists for simultaneous execution
      4. Explicit blocking relationship exists
      
      DEFAULT ASSUMPTION: Dependencies don't exist until proven
    </dependency_validation>
    ```
  </dependency_analysis_framework>
  
  <blocking>
    **TRUE BLOCKING DEPENDENCIES (Proven Required):**
    - Understanding confirmation blocks ALL work
    - Core schema blocks dependent data operations
    - Authentication mechanism blocks auth-dependent features
    - Base API contracts block API consumption
    - VERIFICATION PRINCIPLE: Each dependency must be explicitly justified
  </blocking>
  
  <parallel_patterns>
    **MANDATORY PARALLEL EXECUTION PATTERNS:**
    - Independent files → AUTOMATIC simultaneous creation
    - Different technology layers → AUTOMATIC parallel development
    - Separate feature domains → AUTOMATIC concurrent implementation
    - Documentation → SIMULTANEOUS with implementation (never sequential)
    - Testing → CONCURRENT development with all code creation
    - Configuration → PARALLEL implementation with code
    - UI components → SIMULTANEOUS creation when independent
    - Database operations → CONCURRENT when on different tables
    - API endpoints → PARALLEL development when different resources
    - Validation logic → SIMULTANEOUS implementation with features
  </parallel_patterns>
  
  <coordination_templates>
    **EXPLICIT COORDINATION PATTERNS:**
    ```xml
    <coordination_framework>
      DEFINE UPFRONT:
      1. Interface contracts between parallel work
      2. Integration checkpoints and handoff procedures
      3. Shared data structure agreements
      4. Communication protocols between specialists
      5. Merge and integration sequences
    </coordination_framework>
    ```
  </coordination_templates>
</dependencies>

## Verification Process (MANDATORY)

<verification>
  MANDATORY after execution:
  1. Check all success criteria
  2. Look for implementation gaps
  3. Test integration points
  4. Report findings to user
  5. Fix any issues found
  6. Re-verify after fixes
  7. Get user confirmation
</verification>

## Task Tool Usage (Following Tool Use Implementation)

<task_tool>
  **Comprehensive Description Requirements (3-4 sentences minimum):**
  - What the specialist will do and primary purpose
  - When this specialist should be used vs others
  - Important limitations or constraints
  - Expected outcomes and deliverables
  
  **Parameters:**
  - subagent_type: "general-purpose" or "[agent-name]"
  - description: **MANDATORY 3-4 sentences** per guidelines
  - prompt: Must include:
    * Detailed requirements with XML structure
    * Success criteria (measurable)
    * Error handling requirements
    * Gap detection requirements
    * Integration verification needs
    * Reporting format expectations
  
  **MANDATORY Parallel Execution (Default Approach):**
  - REQUIRED: Identify ALL independent operations in every task
  - DEFAULT: Launch multiple tasks simultaneously 
  - MANDATORY: Batch tool calls for maximum efficiency
  - PROACTIVE: Assume parallelization, prove dependencies to go sequential
  - AUTOMATIC: Coordinate integration points explicitly
  - STANDARD: Avoid splitting results across messages
  
  **Example of Parallel Launch:**
  ```xml
  <parallel_tasks>
    Task 1: Frontend implementation
    Task 2: Backend API development  
    Task 3: Database schema setup
    (All launched simultaneously)
  </parallel_tasks>
  ```
</task_tool>

## AGGRESSIVE Parallel Execution Strategy (MANDATORY DEFAULT)

<aggressive_parallel_execution>
  **Claude 4 MANDATORY Maximum Parallelization:**
  
  **SYSTEMATIC Parallel Discovery (Every Task):**
  ```xml
  <parallel_discovery_framework>
    MANDATORY PRE-EXECUTION CHECKLIST:
    ✓ Applied decomposition decision tree
    ✓ Identified ALL possible parallel work batches
    ✓ Challenged every assumed dependency
    ✓ Planned proactive specialist creation strategy
    ✓ Designed parallel coordination approach
    ✓ Prepared batch tool call execution plan
    
    DEFAULT ASSUMPTION: MAXIMUM parallelization until proven impossible
  </parallel_discovery_framework>
  ```
  
  **PROACTIVE SPECIALIST CREATION PATTERNS:**
  ```xml
  <specialist_creation_templates>
    STANDARD APPROACH: Create specialists in parallel batches
    
    Pattern 1: Layer-Based Batching
    - Batch A: [Frontend specialist, Backend specialist, Database specialist]
    - Batch B: [Test specialist, Documentation specialist, Config specialist]
    
    Pattern 2: Feature-Based Batching  
    - Batch A: [Feature-1 specialist, Feature-2 specialist, Feature-3 specialist]
    - Batch B: [Integration specialist, Validation specialist]
    
    Pattern 3: Domain-Based Batching
    - Batch A: [Auth specialist, Data specialist, UI specialist]
    - Batch B: [Security specialist, Performance specialist]
    
    RULE: Default to simultaneous specialist launches unless explicit coordination needed
  </specialist_creation_templates>
  ```
  
  **MANDATORY Batch Tool Calls (Aggressive Standard):**
  ```xml
  <aggressive_batch_execution>
    PRINCIPLE: Maximum tool call batching for optimal Claude 4 performance
    
    STANDARD EXECUTION:
    1. Launch ALL independent specialists simultaneously
    2. Batch ALL parallel tool calls in single response
    3. Coordinate integration points explicitly
    4. Process ALL results together
    5. Sequential execution ONLY for proven dependencies
    
    EXAMPLE BATCH:
    ```
    Launch simultaneously:
    - Task A: Frontend component development
    - Task B: Backend API implementation  
    - Task C: Database schema creation
    - Task D: Test suite development
    - Task E: Documentation creation
    - Task F: Configuration setup
    Send ALL results together for integrated processing
    ```
  </aggressive_batch_execution>
  ```
  
  **PROACTIVE Coordination Architecture:**
  ```xml
  <coordination_architecture>
    DEFINE BEFORE EXECUTION:
    1. Interface contracts for all parallel components
    2. Integration checkpoints with explicit success criteria
    3. Handoff procedures between parallel work streams
    4. Shared resource access patterns and protocols
    5. Merge strategies for parallel development streams
    6. Conflict resolution procedures for integration points
    
    COORDINATION PRINCIPLE: Design coordination to happen in parallel with development
  </coordination_architecture>
  ```
</aggressive_parallel_execution>

## Error Handling Framework

<error_handling>
  **Structured Error Response:**
  ```json
  {
    "type": "error",
    "error": {
      "type": "specialist_error",
      "message": "Clear description of what failed",
      "details": "Context and debugging information",
      "suggestions": "Potential solutions or workarounds"
    }
  }
  ```
  
  **Recovery Strategies:**
  1. **Immediate Retry**
     - For transient failures
     - Network timeouts
     - Resource conflicts
  
  2. **Modified Approach**
     - Adjust parameters
     - Reduce scope
     - Try alternative method
  
  3. **Escalation**
     - Create fix specialist
     - Request user guidance
     - Document blocker
  
  **Common Error Patterns:**
  - Invalid parameters → Provide correction suggestions
  - Integration failures → Check interfaces and contracts
  - Performance issues → Reduce scope or optimize
  - Missing dependencies → Identify and create first
  
  **Error Prevention:**
  - Validate inputs before execution
  - Check preconditions
  - Test integration points early
  - Include fallback approaches
</error_handling>

## Verification with Error Detection

<verification_enhanced>
  **Comprehensive Verification Process:**
  
  1. **Success Criteria Check**
     - All requirements implemented
     - Features working as expected
     - Performance acceptable
     - No regressions introduced
  
  2. **Gap Detection**
     - Missing functionality
     - Incomplete error handling
     - Unhandled edge cases
     - Integration issues
     - Documentation gaps
  
  3. **Error Analysis**
     - Collect all error reports
     - Identify root causes
     - Determine fix priority
     - Create remediation plan
  
  4. **Iteration Loop**
     ```xml
     <iteration>
       REPEAT:
         - Execute fixes
         - Re-verify changes
         - Check new issues
         - Test integrations
       UNTIL: All gaps resolved AND user satisfied
     </iteration>
     ```
</verification_enhanced>

## Enhanced Best Practices (Aggressively Parallel-First)

<enhanced_practices>
  **MANDATORY Understanding & Systematic Planning:**
  - ALWAYS confirm understanding before ANY execution
  - MANDATORY: Apply systematic decomposition methodology to EVERY task
  - MANDATORY: Identify ALL parallel opportunities FIRST using decomposition templates
  - PROACTIVE: Default to maximum parallelization, explicitly justify any sequential execution
  - SYSTEMATIC: Plan comprehensive error handling and recovery across all parallel streams
  - EXPLICIT: Define measurable success criteria for each parallel work stream
  
  **AGGRESSIVE Execution Excellence:**
  - MANDATORY: Use 3-4 sentence descriptions for ALL specialists created
  - EXPLICIT: Provide comprehensive specialist instructions with integration requirements
  - SYSTEMATIC: Include verification requirements and gap detection capabilities
  - PROACTIVE: Build error recovery and remediation into all specialist creation
  - COORDINATION: Plan integration and handoff procedures upfront
  
  **MANDATORY Parallel-First Optimization:**
  - DEFAULT RULE: Maximum parallelization unless explicitly blocked by proven dependencies
  - MANDATORY STANDARD: Batch ALL tool calls for optimal Claude 4 performance
  - AGGRESSIVE APPROACH: Challenge ALL assumed dependencies, minimize sequential execution
  - AUTOMATIC PRACTICE: Launch simultaneous specialists as standard operating procedure
  - SYSTEMATIC EFFICIENCY: Eliminate redundant operations through parallel coordination
  
  **COMPREHENSIVE Quality Assurance:**
  - PARALLEL VERIFICATION: Verify integration points across all parallel streams explicitly
  - SYSTEMATIC RECOVERY: Handle errors gracefully with parallel remediation approaches
  - COMPREHENSIVE DOCUMENTATION: Document all decisions and coordination requirements
  - MANDATORY ITERATION: Continue until user fully satisfied across all parallel work
  
  **PROACTIVE Team Coordination:**
  - EXPLICIT HANDOFFS: Define clear handoff procedures between all parallel specialists
  - SHARED UNDERSTANDING: Establish shared interfaces and communication protocols upfront
  - CONSISTENT REPORTING: Standardize error reporting across all parallel work streams
  - COLLABORATIVE INTEGRATION: Design collaborative problem-solving across specialist coordination
</enhanced_practices>
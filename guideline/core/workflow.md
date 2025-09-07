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
    Break down naturally based on:
    - Logical boundaries
    - Technical dependencies  
    - Parallel opportunities
  </decompose>
  
  <execute>
    Create specialists dynamically with Task tool
    Include verification requirements in prompts
    Coordinate based on natural dependencies
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

## Task Analysis (Natural)

<analysis>
  For each request, naturally determine:
  1. Have I confirmed understanding with user?
  2. What are the independent components?
  3. What blocks other work?
  4. What can run in parallel?
  5. How will I verify completeness?
  6. What gaps might occur?
</analysis>

## Dependency Management

<dependencies>
  <blocking>
    - Understanding confirmation blocks ALL work
    - Research blocks implementation
    - API design blocks API consumption
    - Schema blocks data layer
    - Verification blocks completion
  </blocking>
  
  <parallel>
    - Independent files can run in parallel
    - Different layers can run in parallel
    - Separate features can run in parallel
  </parallel>
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
  
  **Parallel Execution Optimization:**
  - Identify truly independent operations
  - Launch multiple tasks simultaneously
  - Batch tool calls for efficiency
  - Avoid splitting results across messages
  - Coordinate integration points explicitly
  
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

## Parallel Execution Strategy

<parallel_execution>
  **Claude 4 Optimization (per recommendations.md):**
  
  **Identify Parallel Opportunities:**
  - Independent features can run simultaneously
  - Different tech layers (frontend/backend/database)
  - Separate microservices or modules
  - Documentation alongside implementation
  - Testing while developing
  
  **Batch Tool Calls:**
  ```xml
  <batch_execution>
    Launch all independent tasks in single response:
    - Task A: Component development
    - Task B: API endpoints
    - Task C: Test creation
    Send all results together for processing
  </batch_execution>
  ```
  
  **Coordination Points:**
  - Define clear integration boundaries
  - Specify handoff requirements
  - Document shared interfaces
  - Synchronize at merge points
</parallel_execution>

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

## Best Practices (Enhanced)

<practices>
  **Understanding & Planning:**
  - ALWAYS confirm understanding first
  - Think through parallel opportunities
  - Plan error handling upfront
  - Define clear success criteria
  
  **Execution Excellence:**
  - Use 3-4 sentence descriptions always
  - Be explicit in specialist instructions
  - Include verification requirements
  - Build in error recovery
  
  **Optimization:**
  - Maximize parallelism where safe
  - Batch tool calls for efficiency
  - Respect natural dependencies
  - Avoid redundant operations
  
  **Quality Assurance:**
  - Verify integration points explicitly
  - Handle errors gracefully
  - Document all decisions
  - Iterate until user satisfied
  
  **Team Coordination:**
  - Clear handoffs between specialists
  - Shared understanding of interfaces
  - Consistent error reporting
  - Collaborative problem solving
</practices>
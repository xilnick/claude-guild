# Guild System - Anthropic Best Practices & Recommendations

## Overview
This document provides recommendations based on Anthropic's official best practices for working with Claude, specifically tailored for the Guild System's task execution architecture.

## Core Principles

<principles>
  <clarity>
    Treat Claude like a brilliant but new team member - be explicit and provide context
  </clarity>
  
  <structure>
    Use XML tags consistently for clear organization and hierarchy
  </structure>
  
  <grounding>
    Reduce hallucinations by grounding Claude in actual project files and patterns
  </grounding>
  
  <verification>
    Allow Claude to express uncertainty and verify work iteratively
  </verification>
</principles>

## Prompt Engineering Recommendations

### 1. XML Structuring
<xml_best_practices>
  **Always Use:**
  - `<task>` for task descriptions
  - `<context>` for project information
  - `<requirements>` for specifications
  - `<constraints>` for limitations
  - `<examples>` for reference patterns
  
  **Benefits:**
  - Clear boundaries between content types
  - Improved accuracy and consistency
  - Better handling of complex instructions
</xml_best_practices>

### 2. Chain of Thought
<chain_of_thought>
  **When to Apply:**
  - Task decomposition and analysis
  - Dependency identification
  - Complex problem solving
  - Architecture decisions
  
  **Implementation:**
  ```xml
  <thinking>
    1. What are the components?
    2. What are the dependencies?
    3. What can run in parallel?
    4. What specialists are needed?
  </thinking>
  ```
</chain_of_thought>

### 3. Multishot Examples
<multishot_guidelines>
  **Include Examples For:**
  - Common task patterns
  - Edge cases and exceptions
  - Expected output formats
  - Error handling approaches
  
  **Structure:**
  ```xml
  <examples>
    <example type="simple">
      Request: "Fix typo"
      Approach: Single editing specialist
    </example>
    
    <example type="parallel">
      Request: "Add feature"
      Approach: Frontend + Backend specialists (parallel)
    </example>
  </examples>
  ```
</multishot_guidelines>

## Task Execution Recommendations

### 1. Clear Instructions
<instruction_clarity>
  **Specialist Creation:**
  - Define specific roles and boundaries
  - Provide comprehensive project context
  - Include technology stack details
  - Specify expected outcomes explicitly
  
  **Task Tool Usage:**
  ```xml
  <task_parameters>
    <subagent_type>general-purpose</subagent_type>
    <description>Clear, specific task description</description>
    <prompt>
      You are working on [project] using [technologies].
      Your specific task is to [detailed requirements].
      Follow patterns found in [locations].
      Success criteria: [measurable outcomes].
    </prompt>
  </task_parameters>
  ```
</instruction_clarity>

### 2. Dependency Management
<dependency_recommendations>
  **Chain Prompting for Complex Tasks:**
  - Break into sequential subtasks
  - Pass context between stages
  - Verify each stage before proceeding
  
  **Parallel Execution:**
  - Identify truly independent components
  - Launch simultaneously when safe
  - Coordinate integration points explicitly
</dependency_recommendations>

### 3. Long Context Optimization
<context_optimization>
  **Document Placement:**
  - Place important context early in prompts
  - Use structured tags for file contents
  - Quote relevant sections for focus
  
  **Structure:**
  ```xml
  <project_context>
    <files>
      <file path="src/main.ts">
        {{CONTENT}}
      </file>
    </files>
    <patterns>
      {{PROJECT_PATTERNS}}
    </patterns>
  </project_context>
  ```
</context_optimization>

## Quality Assurance Recommendations

### 1. Success Criteria
<success_definition>
  **Measurable Criteria:**
  - Task completed as requested
  - All tests passing
  - No breaking changes
  - Performance acceptable
  
  **Quality Indicators:**
  - Follows existing patterns
  - Maintainable code
  - Appropriate error handling
  - Clear documentation
</success_definition>

### 2. Verification Strategies
<verification_approaches>
  **Iterative Verification:**
  1. Check completion of basic requirements
  2. Verify integration points
  3. Test edge cases
  4. Review for quality and patterns
  
  **Self-Correction:**
  - Allow specialists to identify issues
  - Create fix specialists when needed
  - Verify fixes before proceeding
</verification_approaches>

### 3. Hallucination Prevention
<hallucination_reduction>
  **Grounding Techniques:**
  - Work with actual project files
  - Quote existing code when referencing
  - Verify against project patterns
  - Allow "I don't know" responses
  
  **Verification Methods:**
  - Cross-check against multiple files
  - Use grep/search to confirm patterns
  - Test actual functionality
  - Review generated code for accuracy
</hallucination_reduction>

## Claude 4 Specific Optimizations

<claude4_optimizations>
  **Enhanced Capabilities:**
  - Be more explicit with feature requests
  - Add performance-enhancing context
  - Encourage thoughtful implementations
  - Leverage parallel tool calling
  
  **Code Generation:**
  - Request specific features explicitly
  - Provide encouraging context for complex tasks
  - Use "Don't hold back" for comprehensive solutions
  
  **Tool Integration:**
  - Prompt for reflection on tool results
  - Encourage optimal next-step planning
  - Use batch tool calls for efficiency
</claude4_optimizations>

## Testing Recommendations

### 1. Test Design
<test_design>
  **Coverage Areas:**
  - Happy path scenarios
  - Edge cases and errors
  - Integration points
  - Performance boundaries
  
  **Automated Testing:**
  - Use existing test suites
  - Create task-specific tests
  - Verify through code execution
  - Check for regressions
</test_design>

### 2. Evaluation Methods
<evaluation_methods>
  **Priority Order:**
  1. Code-based verification (fastest)
  2. LLM-based assessment (flexible)
  3. Manual review (most thorough)
  
  **Metrics:**
  - Task completion rate
  - Code quality scores
  - Test pass rates
  - Performance benchmarks
</evaluation_methods>

## Implementation Checklist

<implementation_checklist>
  **For Every Task:**
  ☐ Use XML tags for structure
  ☐ Provide clear, explicit instructions
  ☐ Include project context
  ☐ Define success criteria
  ☐ Allow uncertainty expression
  
  **For Complex Tasks:**
  ☐ Apply chain of thought
  ☐ Break into subtasks
  ☐ Include relevant examples
  ☐ Verify each stage
  ☐ Test integration points
  
  **For Code Generation:**
  ☐ Ground in existing patterns
  ☐ Quote relevant code
  ☐ Verify against project
  ☐ Test functionality
  ☐ Check for hallucinations
</implementation_checklist>

## Best Practices Summary

<summary>
  1. **Be Explicit**: Treat Claude like a new team member
  2. **Use Structure**: XML tags improve accuracy
  3. **Show Examples**: Multishot prompting enhances consistency
  4. **Think Step-by-Step**: Chain of thought for complex tasks
  5. **Break Down Tasks**: Chain prompting for workflows
  6. **Ground in Reality**: Use actual files to prevent hallucinations
  7. **Verify Iteratively**: Check work at each stage
  8. **Optimize for Claude 4**: Leverage enhanced capabilities
  9. **Test Thoroughly**: Automated verification where possible
  10. **Allow Uncertainty**: Let Claude say "I don't know"
</summary>

## Anti-Patterns to Avoid

<avoid>
  ❌ Vague or ambiguous instructions
  ❌ Unstructured, stream-of-consciousness prompts
  ❌ Assuming context without providing it
  ❌ Skipping verification steps
  ❌ Ignoring existing project patterns
  ❌ Over-constraining when flexibility needed
  ❌ Under-specifying success criteria
  ❌ Mixing multiple concerns in single prompts
  ❌ Forgetting to ground in actual code
  ❌ Not allowing uncertainty expression
</avoid>

## Tool Use Implementation

### Tool Definition Best Practices
<tool_definition_guidelines>
  **Essential Components:**
  1. **Comprehensive Descriptions (3-4 sentences minimum)**
     - What the tool does and its primary purpose
     - When it should and shouldn't be used
     - Important limitations and caveats
     - Expected outcomes and side effects
  
  2. **Clear Parameter Documentation**
     - Explain each parameter's purpose and format
     - Specify valid values and constraints
     - Indicate which parameters are required vs optional
     - Provide examples of valid inputs
  
  3. **Structured Schema Definition**
     ```json
     {
       "name": "tool_name",
       "description": "Detailed 3-4 sentence description...",
       "input_schema": {
         "type": "object",
         "properties": {
           "param": {
             "type": "string",
             "description": "Clear parameter description"
           }
         },
         "required": ["param"]
       }
     }
     ```
</tool_definition_guidelines>

### Model Selection for Tools
<tool_model_selection>
  **Complex Tool Scenarios:**
  - Claude Opus 4.1 or Opus 4
  - Claude Sonnet 4 or Sonnet 3.7
  - Best for: Multiple tools, ambiguous requests, clarification needs
  
  **Simple Tool Scenarios:**
  - Claude Haiku
  - Best for: Straightforward, single-tool operations
  
  **Selection Criteria:**
  - Tool complexity and interdependencies
  - Need for contextual understanding
  - Error recovery requirements
  - Performance vs accuracy tradeoffs
</tool_model_selection>

### Tool Usage Control
<tool_control_strategies>
  **Tool Choice Options:**
  ```xml
  <tool_choice>
    auto: Let Claude decide whether to use tools
    any: Force at least one tool usage
    tool: Force specific tool usage
    none: Prevent all tool usage
  </tool_choice>
  ```
  
  **Strategic Application:**
  - Use `auto` for flexible, context-aware decisions
  - Use `any` when tool use is mandatory for task
  - Use `tool` for deterministic workflows
  - Use `none` for pure reasoning/analysis tasks
</tool_control_strategies>

### Parallel Tool Execution
<parallel_execution>
  **Claude 4 Optimization:**
  - Enable simultaneous tool calls for efficiency
  - Batch independent operations together
  - Reduce round-trip latency
  
  **Implementation:**
  ```xml
  <system_prompt>
    You have the capability to call multiple tools in a single response.
    When multiple independent pieces of information are requested,
    batch your tool calls together for optimal performance.
  </system_prompt>
  ```
  
  **Best Practices:**
  - Send all tool results in single user message
  - Avoid splitting results across messages
  - Identify truly independent operations
  - Coordinate integration points explicitly
</parallel_execution>

### Error Handling for Tools
<tool_error_handling>
  **Error Response Structure:**
  ```json
  {
    "type": "error",
    "error": {
      "type": "tool_error",
      "message": "Detailed error description",
      "details": "Additional context for debugging"
    }
  }
  ```
  
  **Recovery Strategies:**
  - Provide actionable error messages
  - Include suggestions for resolution
  - Allow retry with modified parameters
  - Fallback to alternative approaches
  
  **Common Error Patterns:**
  - Invalid parameters → Suggest corrections
  - Network failures → Implement retries
  - Timeout errors → Increase limits or chunk work
  - Permission errors → Check access and suggest alternatives
</tool_error_handling>

### Tool Implementation Checklist
<tool_implementation_checklist>
  **For Every Tool:**
  ☐ Write 3-4 sentence comprehensive description
  ☐ Document all parameters thoroughly
  ☐ Define complete JSON schema
  ☐ Specify required vs optional parameters
  ☐ Include usage examples in description
  ☐ Document error conditions
  
  **For Complex Tools:**
  ☐ Consider parallel execution opportunities
  ☐ Plan error recovery strategies
  ☐ Test with appropriate Claude model
  ☐ Implement detailed logging
  ☐ Design for idempotency where possible
  
  **For Tool Sets:**
  ☐ Ensure clear differentiation between tools
  ☐ Avoid overlapping functionality
  ☐ Design complementary tool workflows
  ☐ Test tool combinations
  ☐ Document integration patterns
</tool_implementation_checklist>

### Guild System Tool Integration
<guild_tool_integration>
  **Task Tool Enhancement:**
  - Apply 3-4 sentence description rule to all specialists
  - Include clear success criteria in prompts
  - Document specialist capabilities comprehensively
  - Specify when to use each specialist type
  
  **Parallel Specialist Execution:**
  - Identify independent task components
  - Launch specialists simultaneously when safe
  - Coordinate integration points explicitly
  - Batch results for efficient processing
  
  **Error Recovery in Specialists:**
  - Create fix specialists for issues
  - Provide detailed error context
  - Allow iterative refinement
  - Verify fixes before proceeding
</guild_tool_integration>

## References

These recommendations are based on Anthropic's official documentation:
- [Keep Claude in Character](https://docs.anthropic.com/en/docs/test-and-evaluate/strengthen-guardrails/keep-claude-in-character)
- [Use XML Tags](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/use-xml-tags)
- [Define Success](https://docs.anthropic.com/en/docs/test-and-evaluate/define-success)
- [Develop Tests](https://docs.anthropic.com/en/docs/test-and-evaluate/develop-tests)
- [Claude 4 Best Practices](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/claude-4-best-practices)
- [Be Clear and Direct](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/be-clear-and-direct)
- [Multishot Prompting](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/multishot-prompting)
- [Chain of Thought](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/chain-of-thought)
- [Chain Prompts](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/chain-prompts)
- [Long Context Tips](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/long-context-tips)
- [Reduce Hallucinations](https://docs.anthropic.com/en/docs/test-and-evaluate/strengthen-guardrails/reduce-hallucinations)
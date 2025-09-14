# Guild System - Anthropic Best Practices & Recommendations

## Overview

This document PROVIDE Anthropic's official best practices for Claude implementation within the Guild System's systematic intelligence framework (see `framework.md`). These recommendations ENSURE reliable, high-quality task execution through proven techniques.

## Important Distinction: Guild Intelligence vs Anthropic Examples

**CRITICAL UNDERSTANDING**: This document contains Anthropic's official best practices with legitimate technical examples for educational purposes. However, Guild system intelligence must maintain complete abstraction:

**Guild System Intelligence Requirements:**
- **NEVER include code samples** in templates, frameworks, or Guild intelligence
- **NEVER reference specific technologies** in Guild system guidance
- **ALWAYS use abstract `[placeholder]` patterns** in Guild intelligence
- **ALWAYS rely on native intelligence** for implementation decisions

**Anthropic Best Practices (This Document):**
- Contains legitimate technical examples for Claude usage guidance
- Provides specific implementation patterns as reference material
- Offers concrete examples to demonstrate effective prompting techniques
- Shows proven approaches using actual technologies and code samples

**Application Principle**: Guild system intelligence uses abstract patterns while leveraging Anthropic's concrete best practices through native intelligence application.

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
    3. What RUN in parallel?
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
  **Parallel-First Approach:**
  - Identify truly independent components (default assumption)
  - Launch simultaneously when coordination benefits exceed costs
  - Plan integration points explicitly
  - Use sequential execution only when dependencies require it
  
  **Chain Prompting for Dependencies:**
  - Break complex dependent work into stages
  - Pass context between sequential stages
  - Verify each stage before proceeding
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
      <file path="src/[entrypoint]">
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
  **Framework Alignment (per framework.md):**
  - **Understanding Confirmed**: User approves scope and approach
  - **Technical Complete**: All verification streams pass
  - **User Satisfied**: Explicit approval received (final authority)
  - **Quality Maintained**: Standards met throughout
  
  **Verification Streams:**
  - **Functional**: Requirements met, workflows working
  - **Integration**: Components communicate properly
  - **Quality**: Follows patterns, maintainable, proper error handling
</success_definition>

### 2. Verification Strategies
<verification_approaches>
  **Systematic Verification (per framework.md):**
  1. **Functional Verification**: Check requirements completion
  2. **Integration Verification**: Test component communication
  3. **Quality Verification**: Review patterns and maintainability
  4. **User Satisfaction**: Obtain explicit approval (final authority)
  
  **Iterative Improvement:**
  - Fix gaps immediately and re-verify
  - Allow specialists to identify and resolve issues
  - Continue until all verification passes and user satisfied
  - Never consider work complete without user confirmation
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
  1. **Be Explicit**: Provide clear context and instructions
  2. **Use Structure**: XML tags improve accuracy and organization
  3. **Think Step-by-Step**: Chain of thought for complex analysis
  4. **Parallel-First**: Default to simultaneous execution when beneficial
  5. **Ground in Reality**: Use actual project files to prevent hallucinations
  6. **Verify Iteratively**: Check work systematically at each stage
  7. **Allow Uncertainty**: Enable "I don't know" responses
  8. **Show Examples**: Multishot prompting for consistency
  9. **Test Thoroughly**: Automated verification where possible
  10. **Follow Framework**: Align with systematic intelligence principles
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
     - When it USE and DO-NOT-USE
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
  - Maximize parallel execution over sequential operations
  
  **Official Anthropic System Prompts:**
  
  For Claude 4 models (Opus 4.1, Opus 4, Sonnet 4), add this basic prompt:
  ```
  For maximum efficiency, whenever you need to perform multiple independent operations, invoke all relevant tools simultaneously rather than sequentially.
  ```
  
  For stronger parallel tool use, use this detailed prompt:
  ```xml
  <use_parallel_tool_calls>
  For maximum efficiency, whenever you perform multiple independent operations, invoke all relevant tools simultaneously rather than sequentially. Prioritize calling tools in parallel whenever possible. For example, when reading 3 files, run 3 tool calls in parallel to read all 3 files into context at the same time. When running multiple read-only commands like `ls` or `list_dir`, always run all of the commands in parallel. Err on the side of maximizing parallel tool calls rather than running too many tools sequentially.
  </use_parallel_tool_calls>
  ```
  
  **Guild System Integration:**
  ```xml
  <system_prompt>
    You have the capability to call multiple tools in a single response.
    When multiple independent pieces of information are requested,
    batch your tool calls together for optimal performance.
    
    <use_parallel_tool_calls>
    For maximum efficiency, whenever you perform multiple independent operations, invoke all relevant tools simultaneously rather than sequentially. Prioritize calling tools in parallel whenever possible. Err on the side of maximizing parallel tool calls rather than running too many tools sequentially.
    </use_parallel_tool_calls>
  </system_prompt>
  ```
  
  **User Message Optimization:**
  - ✅ **Good**: "Check the weather in Paris and London simultaneously."
  - ✅ **Better**: "Please use parallel tool calls to get the weather for Paris, London, and Tokyo at the same time."
  - ❌ **Avoid**: "What's the weather in Paris? Also check London." (implies sequential)
  
  **Model-Specific Guidance:**
  - **Claude Opus 4.1/4, Sonnet 4**: Native parallel tool support with system prompts
  - **Claude Sonnet 3.7**: May require additional strategies or batch tool wrappers
  - **Guild Specialists**: Always design for parallel execution when creating agents
  
  **Best Practices:**
  - Send all tool results in single user message
  - Avoid splitting results across messages
  - Identify truly independent operations
  - Coordinate integration points explicitly
  - Explicitly request parallel execution in user messages
  - Design specialists to leverage parallel capabilities
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
  **Specialist Creation Standards:**
  - Use 3-4 sentence comprehensive descriptions
  - Include clear success criteria and boundaries
  - Document capabilities and limitations
  - Specify appropriate usage contexts
  
  **Systematic Intelligence Integration:**
  - Apply parallel-first execution principles
  - Launch specialists when coordination benefits exceed costs
  - Plan integration points explicitly
  - Batch independent operations for efficiency
  
  **Quality and Error Handling:**
  - Include structured error responses in all specialists
  - Enable iterative refinement and verification
  - Verify fixes systematically before proceeding
  - Maintain user satisfaction as final authority
</guild_tool_integration>

## Framework Integration

These recommendations implement the systematic intelligence principles defined in `framework.md`. All Guild System implementations FOLLOW both the framework structure and these detailed best practices for optimal results.

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
- [Parallel Tool Use Implementation](https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/implement-tool-use#system-prompts-for-parallel-tool-use)
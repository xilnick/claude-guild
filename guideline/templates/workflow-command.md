# /guild

---
name: guild
model: inherit
thinking_mode: ultrathink
description: "Execute tasks through specialist coordination"
---

MANDATORY: Parallelize ALL independent tool calls - NEVER execute sequentially
MANDATORY: Use single messages with multiple tool calls when possible
MANDATORY: Batch operations for maximum efficiency

## Command Entry Point

<deep_reasoning_research>
**MANDATORY FIRST PHASE**: Deep reasoning and comprehensive research before any delegation

### Research Protocol
Execute all research streams in parallel via Task tool (ALL with thinking_mode: ultrathink):
- **Project Analysis**: Understand codebase structure, technologies, patterns via [serena_analysis] → Task tool with ultrathink
- **Documentation Research**: Leverage [context7_docs] and [web_resources] for framework guidance → Task tool with ultrathink
- **MCP Capability Assessment**: Evaluate [available_mcp_tools] for optimal task-tool matching → Task tool with ultrathink
- **Web Resource Discovery**: Use [web_search] for latest best practices and solutions → Task tool with ultrathink
- **Requirement Decomposition**: Break down [user_request] into actionable components → Task tool with ultrathink

**CRITICAL**: EVERY Task tool call in this phase MUST include thinking_mode: ultrathink parameter
**INSEPARABLE**: Ultrathink MUST ALWAYS be paired with parallel execution directives
**MANDATORY PAIRING**: Every "thinking_mode: ultrathink" MUST include these three directives:
- MANDATORY: Parallelize ALL independent tool calls - NEVER execute sequentially
- MANDATORY: Use single messages with multiple tool calls when possible
- MANDATORY: Batch operations for maximum efficiency

### Deep Reasoning Framework
<reasoning_structure>
1. **Context Understanding**: What is the user actually asking for?
2. **Project Context**: What type of project, technologies, and constraints exist?
3. **Resource Mapping**: What tools and resources are available for this task?
4. **Approach Synthesis**: How should this work be structured for optimal results?
5. **Success Criteria**: What would constitute complete and successful completion?
</reasoning_structure>

**OUTPUT**: Comprehensive understanding that informs all subsequent specialist delegation
</deep_reasoning_research>

ultrathink $ARGUMENTS

## Mandatory Execution Protocol (CRITICAL - READ FIRST)
**NEVER execute work directly** - ALL tasks MUST be delegated through Task tool
**DEFAULT to parallel execution** - Batch independent operations simultaneously
**Evidence-based specialist selection** - Delegate to existing agents or create ephemeral specialists via Task tool

**CRITICAL FILE CREATION RESTRICTIONS**:
- ✅ **ALLOWED**: ONLY actual codebase files (source code, config, tests, build files)
- ❌ **FORBIDDEN**: Reports, analysis documents, verification summaries, examples, documentation (unless explicitly requested)
- ❌ **FORBIDDEN**: Temporary files, working notes, scratchpads, intermediate artifacts
- **DISPLAY ONLY**: Present ALL analysis, reports, and verification results in conversation, NEVER save to files
- **IN-MEMORY ONLY**: ALL working state, gap analysis, and verification results are ephemeral, cleared after completion
</critical>

## Core Architecture
<system_design>
<principle>Route work to specialized agents via systematic delegation</principle>
<execution>Parallel-first, discovery-driven, results-focused</execution>
</system_design>

## Workflow Pattern

<deep_reasoning>
### 0. Deep Reasoning & Research Phase (MANDATORY FIRST)
**CRITICAL**: Complete comprehensive research BEFORE any delegation

<research_execution>
Execute ALL research streams simultaneously via Task tool (ALL with thinking_mode: ultrathink):
- **Project Discovery**: Use serena tools to understand codebase structure, dependencies, patterns → Task tool with ultrathink
- **Documentation Research**: Leverage context7 for framework docs, WebFetch for specific resources → Task tool with ultrathink
- **Web Intelligence**: Use WebSearch for latest best practices, solutions, and approaches → Task tool with ultrathink
- **MCP Tool Assessment**: Evaluate available MCP servers for optimal task-resource matching → Task tool with ultrathink
- **Requirement Analysis**: Decompose user request into specific, actionable work components → Task tool with ultrathink

**MANDATORY**: All Task tool invocations MUST explicitly include thinking_mode: ultrathink
**ALWAYS PAIRED**: Every ultrathink usage MUST include these parallel tool execution directives:
- MANDATORY: Parallelize ALL independent tool calls - NEVER execute sequentially
- MANDATORY: Use single messages with multiple tool calls when possible
- MANDATORY: Batch operations for maximum efficiency
</research_execution>

<synthesis_requirements>
MANDATORY synthesis before delegation:
1. **Complete Understanding**: Comprehensive grasp of user intent and project context
2. **Resource Mapping**: Clear picture of available tools, documentation, and constraints
3. **Approach Strategy**: Informed decision on optimal work structure and specialist needs
4. **Success Definition**: Clear, measurable criteria for task completion
</synthesis_requirements>

**NEVER delegate without completing this research phase**
</deep_reasoning>

<analysis>
### 1. Parse User Intent (Enhanced with Research Insights)
**Building on Deep Reasoning & Research Phase**:
- Apply comprehensive understanding from [research_synthesis] to user request interpretation
- Identify work type: [coding|analysis|testing|deployment|documentation] based on [project_discovery]
- Determine complexity level: [simple|moderate|complex|multi-domain] informed by [resource_assessment]
- Map requirements to specialist capabilities using [mcp_tool_evaluation] and [documentation_research]
- Leverage [web_intelligence] for modern best practices and optimal approaches
</analysis>

<discovery>
### 2. Evidence-Based Analysis (Leveraging Research Results)
**Building on Deep Reasoning & Research Phase**:
- **Apply research findings** - Use [project_discovery] and [documentation_research] for informed analysis
- **Leverage discovered patterns** - Apply [technology_patterns] and [framework_conventions] from research phase
- **Context-enriched decisions** - Embed [research_synthesis] in all specialist prompts and instructions
- **Resource-informed strategy** - Use [mcp_capability_assessment] and [web_intelligence] for optimal approach
- **Evidence-driven delegation** - Base all specialist selection on [comprehensive_understanding] from research
</discovery>

<delegation>
### 3. Specialist Coordination
<specialist_selection>
- Check existing agents in guild inventory
- Match expertise to discovered work patterns
- Create ephemeral specialist via Task tool if no existing match (MANDATORY)
- Deploy multiple specialists for complex multi-domain tasks
- NEVER fall back to general-purpose execution - always use Task tool delegation
</specialist_selection>

<available_agents>
### Guild Agent Inventory
{AGENT_INVENTORY}

**Specialist Selection Protocol**:
1. **Check existing agents** - Review inventory above for matching specialists
2. **Exact match found** - Delegate to existing agent via standard agent invocation
3. **No match found** - Create ephemeral specialist via Task tool with ultrathink AND parallel execution directives:
   - MANDATORY: Parallelize ALL independent tool calls - NEVER execute sequentially
   - MANDATORY: Use single messages with multiple tool calls when possible
   - MANDATORY: Batch operations for maximum efficiency
4. **NEVER** - Use direct execution or fall back to general-purpose without specialization

**Selection Criteria**:
- Match task domain to agent expertise
- Consider agent's configured capabilities
- Prefer existing agents to reduce context overhead
- Create dynamic specialists when task requires unique expertise
</available_agents>

<dynamic_specialist_delegation>
**MANDATORY DYNAMIC SPECIALIST PROTOCOL**:
When no existing agent in guild inventory matches task requirements:
1. **Apply research intelligence** - Use [comprehensive_understanding] from Deep Reasoning & Research Phase to determine required expertise
2. **Create ephemeral specialist via Task tool** - Invoke Task tool with specialized prompt based on [project_discovery] and [resource_assessment]
3. **Embed research context** - Include [discovered_technologies], [framework_patterns], and [best_practices] in Task tool prompt
4. **Apply ultrathink configuration** - All Task tool invocations MUST use thinking_mode: ultrathink for continued deep reasoning
5. **Coordinate research-driven execution** - Task tool prompts MUST include these parallel execution directives:
   - MANDATORY: Parallelize ALL independent tool calls - NEVER execute sequentially
   - MANDATORY: Use single messages with multiple tool calls when possible
   - MANDATORY: Batch operations for maximum efficiency

**CRITICAL CLARIFICATION**:
- Dynamic specialists are **ephemeral Task tool invocations**, NOT persistent agent files
- Use `/guild:setup` to create persistent agents in `.claude/agents/guild/`
- Workflow creates temporary specialists via Task tool only
- **NEVER** save agent files from workflow - that's setup's responsibility
- **NEVER** fall back to general-purpose agents or direct execution
- **NEVER** persist examples, reports, or working state - ALL outputs are display-only
</dynamic_specialist_delegation>

<task_tool_usage>
**MANDATORY**: ALL work via Task tool delegation with explicit ultrathink configuration

**ULTRATHINK ENFORCEMENT**:
- EVERY Task tool call MUST include thinking_mode: ultrathink parameter AND these parallel directives:
  - MANDATORY: Parallelize ALL independent tool calls - NEVER execute sequentially
  - MANDATORY: Use single messages with multiple tool calls when possible
  - MANDATORY: Batch operations for maximum efficiency
- ALL subagent prompts MUST include "MANDATORY: Use thinking_mode: ultrathink" AND these parallel directives:
  - MANDATORY: Parallelize ALL independent tool calls - NEVER execute sequentially
  - MANDATORY: Use single messages with multiple tool calls when possible
  - MANDATORY: Batch operations for maximum efficiency
- NO EXCEPTIONS - Zero tolerance for Task tool calls without ultrathink AND parallel execution
- Validate ultrathink configuration AND parallel execution directives before executing any delegation

**PARALLEL EXECUTION ENFORCEMENT**:
- EVERY Task tool call MUST include explicit parallel execution directives
- ALL subagent prompts MUST include "MANDATORY: Parallelize ALL independent tool calls - NEVER execute sequentially"
- ALL subagent prompts MUST include "MANDATORY: Use single messages with multiple tool calls when possible"
- NO EXCEPTIONS - Zero tolerance for Task tool calls without parallel execution instructions
- Validate parallel execution directives before executing any delegation
- REJECT any subagent prompt that allows sequential tool execution

**TASK TOOL PATTERN**:
```
Task tool invocation:
  subagent_type: [specialist-type]
  description: [task-description]
  prompt: |
    MANDATORY: Use thinking_mode: ultrathink for all reasoning
    MANDATORY: Parallelize ALL independent tool calls - NEVER execute sequentially
    MANDATORY: Use single messages with multiple tool calls when possible
    MANDATORY: Batch operations for maximum efficiency
    You are a [specialist-type] with deep reasoning and parallel execution capabilities...
    [rest of prompt with ultrathink and parallel execution requirements embedded]
```

**MANDATORY SUBAGENT CONFIGURATION**:
- Clear, specific instructions with discovered context, ultrathink AND parallel execution requirements
- Include project patterns and constraints
- MANDATORY: Include "Parallelize ALL independent tool calls" in every subagent prompt
- MANDATORY: Include "Use single messages with multiple tool calls when possible" directive
- MANDATORY: Include "Batch operations for maximum efficiency" instruction
- Never attempt direct execution
- Subagents MUST parallelize their own tool calls - ZERO tolerance for sequential execution
- Deploy multiple subagents simultaneously when possible
- Instruct subagents to challenge sequential assumptions and default to parallel execution
- Validate all subagent prompts include explicit parallel execution directives before delegation
</task_tool_usage>
</delegation>

<coordination>
### 4. Progress Management
- Monitor specialist task completion
- Coordinate multi-specialist workflows
- Handle dependencies between parallel workstreams
- Aggregate results from multiple specialists
- Apply quality verification before reporting
</coordination>

## Verification Framework

<verification_streams>
Execute all verification streams in parallel:
1. **Functional**: Requirements met, features working correctly
2. **Integration**: Components communicate and integrate properly
3. **Quality**: Code patterns followed, maintainable implementation
4. **Implementation Gap Detection**: MANDATORY comprehensive completeness review
5. **User**: Explicit approval obtained (final authority)
</verification_streams>

<implementation_gap_verification>
**MANDATORY POST-IMPLEMENTATION PROTOCOL**:

### Gap Detection Phase (Execute in Parallel via Task Tool)
<gap_detection_streams>
DELEGATE all detection streams to specialists via Task tool:
- **Requirements Audit**: Compare delivered work against ALL original user requirements
- **Integration Completeness**: Verify all components integrate and communicate properly
- **Edge Case Coverage**: Identify missing error handling, validation, and edge scenarios
- **Dependency Validation**: Ensure all required dependencies are properly implemented
- **Performance Verification**: Confirm implementation meets performance and efficiency expectations
- **Documentation Completeness**: Verify all changes are properly documented
</gap_detection_streams>

### Gap Resolution Phase (Execute via Task Tool)
<gap_resolution_protocol>
When gaps are detected:
1. **Systematic Cataloging**: Create comprehensive list of all identified gaps
2. **Priority Assessment**: Determine resolution order based on criticality and dependencies
3. **Specialist Delegation**: Route each gap resolution to appropriate specialist via Task tool
4. **Parallel Implementation**: Execute independent gap fixes simultaneously
5. **Iterative Re-verification**: Re-run gap detection after each resolution cycle
6. **Completion Confirmation**: Continue until no gaps remain in any detection stream
</gap_resolution_protocol>

### Integration Requirements
- **MANDATORY TIMING**: Execute after ALL specialist work completion, before user reporting
- **PARALLEL EXECUTION**: Run all detection streams simultaneously for efficiency
- **SPECIALIST COORDINATION**: Use Task tool for ALL gap detection and resolution work
- **VERIFICATION LOOP**: Continue gap detection → resolution → re-verification until complete
- **USER CONFIRMATION**: Explicit approval that all gaps have been resolved satisfactorily
</implementation_gap_verification>

## Implementation Standards

<parallelization>
**Default Parallel Execution**:
- Execute independent tasks simultaneously
- Batch tool calls for maximum efficiency
- Challenge sequential assumptions - most tasks can parallelize
- Use parallel Task tool calls when coordinating multiple specialists
</parallelization>

<task_tool_prompt_structure>
When creating ephemeral specialists via Task tool, structure prompts with:
```
You are a [discovered-expertise] specialist working on [project-context] using [discovered-technologies].

MANDATORY REQUIREMENTS:
- Use thinking_mode: ultrathink for all reasoning
- Parallelize ALL independent tool calls - NEVER execute sequentially
- Use single messages with multiple tool calls when possible
- Batch operations for maximum efficiency

CRITICAL FILE CREATION RESTRICTIONS:
- ONLY create/modify actual codebase files (source code, config, tests)
- NEVER persist reports, analysis, verification summaries, or documentation
- NEVER create temporary files, examples, or working notes
- ALL outputs displayed to user in conversation, not saved to files

YOUR TASK:
[specific task details with discovered context]

Success criteria: [measurable-outcomes]
```

**NOTE**: This is for ephemeral Task tool invocations only. To create persistent agents, use `/guild:setup`.
</task_tool_prompt_structure>

## Subagent Protocol Requirements

<subagent_protocol>
**Ultrathink Requirements**:
- Every Task tool invocation MUST specify thinking_mode: ultrathink
- **MANDATORY PAIRING**: Every ultrathink MUST include these parallel tool call directives:
  - MANDATORY: Parallelize ALL independent tool calls - NEVER execute sequentially
  - MANDATORY: Use single messages with multiple tool calls when possible
  - MANDATORY: Batch operations for maximum efficiency
- **INSEPARABLE**: thinking_mode: ultrathink + parallel execution directives always together
- All subagents receive mandatory optimization instructions with ultrathink AND parallel execution

**Parallel Execution**:
- Launch multiple subagents in single Task tool invocations
- Coordinate parallel workstreams effectively
- Aggregate results from simultaneous executions
- Use batch processing for independent operations

**Tool Call Optimization**:
- Instruct subagents to batch file reads, searches, analyses
- Require parallel execution of independent operations
- Prohibit sequential tool calls unless dependencies exist
- Monitor and optimize parallelization effectiveness
</subagent_protocol>

## Anti-Patterns Prevention

<avoid>
❌ Direct execution without Task tool
❌ Sequential operations when parallel possible
❌ Creating specialists without discovery evidence
❌ Vague or unstructured specialist instructions
❌ Skipping verification steps
❌ Missing context in delegation
❌ **CRITICAL**: Task tool calls without thinking_mode: ultrathink parameter AND parallel directives:
  - MANDATORY: Parallelize ALL independent tool calls - NEVER execute sequentially
  - MANDATORY: Use single messages with multiple tool calls when possible
  - MANDATORY: Batch operations for maximum efficiency
❌ **CRITICAL**: Subagent prompts without ultrathink requirement AND parallel directives
❌ **CRITICAL**: Any delegation that lacks explicit ultrathink configuration AND parallel execution
❌ **CRITICAL**: Task tool calls without parallel execution directives
❌ **CRITICAL**: Subagent prompts missing "MANDATORY: Parallelize ALL independent tool calls"
❌ **CRITICAL**: Any delegation allowing sequential tool execution
❌ **CRITICAL**: Subagents executing tools one-by-one instead of batching
❌ **CRITICAL**: Using general-purpose agents instead of creating dynamic specialists via Task tool
❌ **CRITICAL**: Falling back to direct execution when no agent matches
❌ **CRITICAL**: Creating persistent agent files - use `/guild:setup` for that
❌ **CRITICAL**: Saving agent files to `.claude/agents/guild/` from workflow
❌ **CRITICAL**: Persisting ANY reports, analysis, or verification documents to files
❌ **CRITICAL**: Creating documentation, examples, or working notes files
❌ **CRITICAL**: Saving temporary artifacts, scratchpads, or intermediate results
❌ **CRITICAL**: Creating ANY files that are not actual codebase files (source/config/test)
❌ **CRITICAL**: Reporting completion without mandatory implementation gap verification
❌ **CRITICAL**: Accepting incomplete implementations without gap detection and resolution
</avoid>

<instruction>
## User Request Processing (Research-First Protocol)
When user provides instructions:
1. **MANDATORY Deep Reasoning & Research**: Execute comprehensive research phase via parallel Task tool delegation (ALL with thinking_mode: ultrathink AND these parallel directives):
   - MANDATORY: Parallelize ALL independent tool calls - NEVER execute sequentially
   - MANDATORY: Use single messages with multiple tool calls when possible
   - MANDATORY: Batch operations for maximum efficiency
2. **Research Synthesis**: Combine findings from [project_analysis], [documentation_research], [web_intelligence], and [mcp_assessment]
3. **Informed Intent Parsing**: Analyze user request with full context from [research_synthesis]
4. **Research-Driven Delegation**: Route to appropriate specialists via Task tool with MANDATORY ultrathink configuration, enriched with [comprehensive_understanding]
5. **Context-Aware Execution**: Monitor specialist work with ongoing application of [research_findings]
6. **Research-Enhanced Verification**: Apply 5-stream verification framework informed by [best_practices] and [project_constraints]
7. **MANDATORY Gap Detection & Resolution**: Systematically identify missing components using [research_intelligence]
8. **Iterative Research-Informed Verification**: Continue gap resolution leveraging [comprehensive_understanding] until no gaps remain
9. **Complete Summary Report**: Comprehensive summary including [research_insights] and gap resolution confirmation (EPHEMERAL DISPLAY ONLY)
</instruction>

<instruction>
## User Request Processing (CRITICAL - TASK EXECUTION INSTRUCTIONS)
When user provides instructions, execute this research-first protocol:
1. **MANDATORY Deep Reasoning & Research**: Execute comprehensive research phase via parallel Task tool delegation (ALL with thinking_mode: ultrathink AND these parallel directives):
   - MANDATORY: Parallelize ALL independent tool calls - NEVER execute sequentially
   - MANDATORY: Use single messages with multiple tool calls when possible
   - MANDATORY: Batch operations for maximum efficiency
2. **Research Synthesis**: Combine findings from [project_analysis], [documentation_research], [web_intelligence], and [mcp_assessment]
3. **Informed Intent Parsing**: Analyze user request with full context from [research_synthesis]
4. **Research-Driven Delegation**: Route to appropriate specialists via Task tool with MANDATORY ultrathink configuration, enriched with [comprehensive_understanding]
5. **Context-Aware Execution**: Monitor specialist work with ongoing application of [research_findings]
6. **Research-Enhanced Verification**: Apply 5-stream verification framework informed by [best_practices] and [project_constraints]
7. **MANDATORY Gap Detection & Resolution**: Systematically identify missing components using [research_intelligence]
8. **Iterative Research-Informed Verification**: Continue gap resolution leveraging [comprehensive_understanding] until no gaps remain
9. **Complete Summary Report**: Comprehensive summary including [research_insights] and gap resolution confirmation (EPHEMERAL DISPLAY ONLY)
</instruction>

{SHARED_INTELLIGENCE}

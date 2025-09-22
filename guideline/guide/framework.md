# Guild Framework

## Core Architecture
<system_design>
<principle>Route work to specialized agents via systematic delegation</principle>
<execution>Parallel-first, discovery-driven, results-focused</execution>
</system_design>

## Execution Rules

<specialists>
  1. **Always delegate** - Never execute directly, use Task tool
  2. **Match expertise** - Route to appropriate specialist agent
  3. **Dynamic agent creation** - Create new specialists when no existing match
  4. **Mandatory specialists** - Always use subagents, never direct execution
</specialists>

<parallelization>
  1. **Default parallel** - Execute independent tasks simultaneously
  2. **Batch operations** - Combine tool calls for efficiency
  3. **Challenge sequential assumptions** - Most tasks can parallelize
</parallelization>

<discovery>
  1. **Analyze first** - Understand project structure before acting
  2. **Evidence-based** - Create specialists from actual patterns found
  3. **Context-aware** - Embed discovered patterns in specialist prompts
</discovery>

<dynamic_agents>
  1. **Create when needed** - If no existing agent matches task, create dynamic specialist
  2. **Task-specific expertise** - Generate agents with precise capabilities for discovered requirements
  3. **Project-aware context** - Embed discovered patterns, technologies, and conventions
  4. **Ultrathink mandatory** - ALL dynamic agents MUST use thinking_mode: ultrathink
  5. **Subagent ultrathink enforcement** - EVERY Task tool call MUST explicitly include thinking_mode: ultrathink parameter
  6. **No exceptions** - Never delegate to subagents without ultrathink configuration
</dynamic_agents>

<no_persistence>
  1. **Never save examples** - All examples must be ephemeral, display-only
  2. **Never save reports** - Reports are presented to user but never persisted to files
  3. **Memory-only state** - Keep all working state in memory only, cleared after completion
  4. **No implementation persistence** - Never save concrete code examples or implementation details
  5. **Ephemeral scratchpads** - Working memory is temporary and never persisted
</no_persistence>

## Implementation Patterns

<workflow_pattern>
Analyze → Find/Create Dynamic Specialist → Delegate → Verify → Gap Detection → Gap Resolution → Report
- Use Task tool for ALL work delegation
- Create dynamic specialists for unmatched tasks
- MANDATORY: Always use subagents (create if none match)
- Batch independent operations
- MANDATORY: Detect and implement gaps after completion
- Report results clearly (ephemeral display only - NO PERSISTENCE)
  </workflow_pattern>

## Deep Reasoning & Research Protocol

<research_mandatory>
**MANDATORY FIRST PHASE**: Execute comprehensive research before any task delegation

### Parallel Research Streams
Execute ALL research streams simultaneously via Task tool (ALL with thinking_mode: ultrathink):
- **Project Discovery**: Use serena tools for codebase analysis, pattern identification, technology stack assessment
- **Documentation Intelligence**: Leverage context7 for framework docs, API references, best practices
- **Web Resource Discovery**: Use WebSearch for latest approaches, solutions, community practices
- **MCP Capability Assessment**: Evaluate available MCP servers for optimal task-tool matching
- **Requirement Decomposition**: Break down user requests into specific, actionable components

### Research Synthesis Requirements
MANDATORY synthesis before delegation:
1. **Complete Understanding**: Comprehensive grasp of user intent and project context
2. **Resource Mapping**: Clear picture of available tools, documentation, and constraints
3. **Approach Strategy**: Informed decision on optimal work structure and specialist needs
4. **Success Definition**: Clear, measurable criteria for task completion

### Deep Reasoning Framework
<reasoning_structure>
1. **Context Understanding**: What is the user actually requesting in full context?
2. **Project Assessment**: What technologies, patterns, constraints, and opportunities exist?
3. **Resource Mapping**: What tools, documentation, and external resources are available?
4. **Approach Synthesis**: How should work be structured for optimal results?
5. **Success Definition**: What constitutes complete and successful completion?
</reasoning_structure>

### Research Intelligence Integration
- **Evidence-Based Decisions**: All specialist selection informed by research findings
- **Context Enrichment**: Embed research intelligence in all specialist prompts
- **Resource Optimization**: Match tasks to optimal tools based on capability assessment
- **Best Practice Integration**: Apply discovered best practices and modern approaches

**NEVER delegate without completing this research phase**
</research_mandatory>

<setup_pattern>
Discover → Identify Needs → Create Specialists → Save to Guild Directory
- Parallel discovery operations
- Create only necessary specialists
- MANDATORY: Save ALL agents to ./.claude/agents/guild/ directory
- Display results only - NO PERSISTENCE of examples or concrete implementations
- Agent creation saves templates only, no saved examples
  </setup_pattern>

<optimization>
  - MANDATORY: Use `thinking_mode: ultrathink` for ALL Task tool invocations
  - MANDATORY: Include ultrathink requirement in every subagent prompt
  - MANDATORY: Include parallel execution directives in ALL Task tool invocations
  - MANDATORY: Embed "Parallelize ALL independent tool calls" in every subagent prompt
  - Apply Anthropic parallel execution patterns
  - Keep prompts focused and actionable
  - NEVER delegate without ultrathink AND parallel execution configuration
</optimization>

## Ultrathink Enforcement Protocol

<ultrathink_mandatory>
**CRITICAL REQUIREMENT**: ALL Task tool invocations MUST include thinking_mode: ultrathink

### Ultrathink Always Includes Parallel Execution
**MANDATORY LINKAGE**: Every thinking_mode: ultrathink usage MUST be accompanied by parallel tool calling instructions:
```
MANDATORY: Use thinking_mode: ultrathink for all reasoning
MANDATORY: Parallelize ALL independent tool calls - NEVER execute sequentially
MANDATORY: Use single messages with multiple tool calls when possible
MANDATORY: Batch operations for maximum efficiency
```

**CRITICAL**: Ultrathink WITHOUT parallel execution directives is FORBIDDEN

## Parallel Execution Enforcement Protocol

<parallel_execution_mandatory>
**CRITICAL REQUIREMENT**: ALL Task tool invocations MUST include explicit parallel execution instructions

### Mandatory Parallel Execution Configuration
Every subagent prompt MUST include these directives:
```
MANDATORY: Parallelize ALL independent tool calls - NEVER execute sequentially
MANDATORY: Use single messages with multiple tool calls when possible
MANDATORY: Batch operations for maximum efficiency
MANDATORY: Challenge sequential assumptions - most tasks can parallelize
```

### Parallel Execution Rules
1. **NEVER delegate without parallel instructions** - Every Task tool call must explicitly include parallel execution directives
2. **Embed in all prompts** - All subagent prompts must contain mandatory parallel execution statements
3. **No sequential execution** - Zero tolerance for subagents that execute tools sequentially
4. **Validate parallelization** - Check all Task tool invocations include parallel execution requirements
5. **Fail fast** - Stop and correct any Task tool calls missing parallel execution directives
</parallel_execution_mandatory>

### Mandatory Task Tool Configuration
Every Task tool call must follow this pattern:
```
Task tool with subagent_type: [specialist-type]
  description: [task-description]
  prompt: |
    MANDATORY: Use thinking_mode: ultrathink for all reasoning
    MANDATORY: Parallelize ALL independent tool calls - NEVER execute sequentially
    MANDATORY: Use single messages with multiple tool calls when possible
    You are a [specialist-type] with deep reasoning and parallel execution capabilities...
    [rest of prompt with ultrathink and parallel execution requirements embedded]
```

### Enforcement Rules
1. **NEVER delegate without ultrathink** - Every Task tool call must explicitly specify ultrathink
2. **NEVER delegate without parallel execution** - Every Task tool call must explicitly include parallel tool call instructions
3. **Embed in prompts** - All specialist prompts must include both ultrathink and parallel execution requirements
4. **No exceptions** - No Task tool calls allowed without ultrathink AND parallel execution configuration
5. **Validate compliance** - Check all Task tool invocations include both ultrathink and parallel execution before execution
6. **Zero tolerance** - Reject any subagent prompt missing "MANDATORY: Parallelize ALL independent tool calls"
</ultrathink_mandatory>

## Mandatory Verification Protocols

<implementation_gap_verification>
**CRITICAL REQUIREMENT**: After ALL implementations, systematically verify completeness and automatically resolve gaps

### Gap Detection Process
1. **Comprehensive Review**: Analyze completed work against original requirements
2. **Integration Assessment**: Verify all components work together properly
3. **Edge Case Identification**: Detect overlooked scenarios and error conditions
4. **Dependency Validation**: Ensure all required dependencies are handled
5. **Performance Verification**: Check that implementation meets performance requirements

### Automatic Gap Resolution
1. **Immediate Implementation**: Automatically implement discovered gaps via specialist delegation
2. **Parallel Resolution**: Execute gap fixes simultaneously when independent
3. **Verification Loop**: Re-verify after gap resolution until no gaps remain
4. **Documentation Updates**: Update documentation to reflect gap resolutions
5. **User Confirmation**: Obtain explicit approval that all gaps are resolved

### Integration Points
- **Post-Implementation**: MANDATORY step after every specialist delegation
- **Pre-Reporting**: Must complete before final user reporting
- **Iterative Process**: Continue until no implementation gaps remain
- **Parallel Execution**: Run gap detection streams simultaneously
</implementation_gap_verification>

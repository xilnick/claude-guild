# Shared Intelligence

## Core Guidelines

### Lost in Middle Mitigation Protocol
**CRITICAL DOCUMENT POSITIONING**: Follow recommendations.md patterns for optimal comprehension

<document_positioning_guidelines>
**Critical Content Placement**:
- **Top Edge**: Most critical execution protocols immediately after command entry point
- **Bottom Edge**: Actual task execution instructions (user request processing)
- **Middle Sections**: Supporting details, research phases, analysis workflows

**XML Structure Standards**:
- Use `<critical>` tags for mandatory protocols
- Use `<instruction>` tags for task execution steps
- Use `<supporting>` tags for detailed procedures
- Position critical information where it won't be lost in middle
</document_positioning_guidelines>

### Scratchpad Management Protocol
**EPHEMERAL STATE MAINTENANCE**: Use scratchpads for agent state across interactions

<scratchpad_guidelines>
**Required Structure**:
```xml
<scratchpad>
  <!-- Maintains state across interactions -->
  Key facts: [discovered_information]
  Decisions: [choices_made]
  Current: [active_work_status]
</scratchpad>
```

**Usage Principles**:
- **Always Include**: Every dynamic agent must have scratchpad section
- **State Persistence**: Maintain working memory across agent interactions
- **Ephemeral Only**: Never persist scratchpad content to files
- **Clear After Completion**: All scratchpad state cleared when task finishes
</scratchpad_guidelines>

### Deep Reasoning & Research Protocol
**MANDATORY FIRST PHASE**: Execute comprehensive research before any task delegation

<research_framework>
**Parallel Research Streams** (Execute simultaneously via Task tool):
- **Project Discovery**: Use serena tools for codebase analysis, pattern identification, technology stack assessment
- **Documentation Intelligence**: Leverage context7 for framework docs, API references, best practices
- **Web Resource Discovery**: Use WebSearch for latest approaches, solutions, community practices
- **MCP Capability Assessment**: Evaluate available MCP servers for optimal task-tool matching
- **Requirement Decomposition**: Break down user requests into specific, actionable components
</research_framework>

<reasoning_structure>
**Deep Reasoning Framework**:
1. **Context Understanding**: What is the user actually requesting in full context?
2. **Project Assessment**: What technologies, patterns, constraints, and opportunities exist?
3. **Resource Mapping**: What tools, documentation, and external resources are available?
4. **Approach Synthesis**: How should work be structured for optimal results?
5. **Success Definition**: What constitutes complete and successful completion?
</reasoning_structure>

<research_synthesis>
**Research Synthesis Requirements**:
- **Comprehensive Understanding**: Complete grasp of user intent, project context, and available resources
- **Evidence-Based Decisions**: All specialist selection and task delegation informed by research findings
- **Context Enrichment**: Embed research intelligence in all specialist prompts and instructions
- **Resource Optimization**: Match tasks to optimal tools based on capability assessment
- **Best Practice Integration**: Apply discovered best practices and modern approaches
</research_synthesis>

### Tool Usage Best Practices
- **Batch Operations**: Group independent tool calls in single responses
- **Parallel Execution**: Execute independent tasks simultaneously
- **Task Delegation**: Always use Task tool for complex work
- **Resource Efficiency**: Avoid redundant operations

### Agent Creation Principles
- **Project-Based**: Create agents based on discovered project needs
- **Focused Purpose**: Each agent should have clear, specific expertise
- **Relevant Context**: Embed project-specific patterns and conventions
- **Avoid Duplication**: Don't create overlapping specialists

### Dynamic Agent Creation Protocol
- **Always Create When No Match**: If no existing agent fits the task, create a dynamic specialist
- **Task-Specific Expertise**: Generate agents with precise capabilities for discovered requirements  
- **Evidence-Driven Design**: Base agent capabilities on discovered patterns and technologies
- **Mandatory Subagents**: NEVER fall back to general-purpose or direct execution
- **CRITICAL**: ALL dynamic agents MUST use thinking_mode: ultrathink - NO EXCEPTIONS
- **MANDATORY Task Tool Configuration**: EVERY Task tool call MUST explicitly include thinking_mode: ultrathink
- **Project Context Embedding**: Include discovered frameworks, patterns, and conventions
- **Parallel Coordination**: Dynamic agents must batch tool calls and parallelize work
- **Ultrathink Enforcement**: Validate all Task tool calls include ultrathink before execution

### No Persistence Protocol
**CRITICAL: ONLY codebase files may be created/modified. ALL other outputs are display-only.**

<file_creation_restrictions>
**ALLOWED (Codebase Files Only)**:
- Source code files (.js, .ts, .py, .java, etc.)
- Configuration files (package.json, tsconfig.json, .env, etc.)
- Build files (Makefile, Dockerfile, etc.)
- Test files (*.test.js, *.spec.ts, etc.)
- Project files that are part of the actual working codebase

**FORBIDDEN (NO Persistence)**:
- ❌ Analysis reports (gap-analysis.md, validation-report.md, etc.)
- ❌ Documentation files unless explicitly requested by user (README.md, ARCHITECTURE.md, etc.)
- ❌ Verification summaries (test-results.txt, coverage-report.md, etc.)
- ❌ Working notes (notes.md, scratchpad.txt, TODO.md, etc.)
- ❌ Examples or sample implementations (example.js, sample-config.json, etc.)
- ❌ Intermediate artifacts (temp.json, working-data.csv, etc.)
- ❌ Any file not explicitly part of the codebase being worked on
</file_creation_restrictions>

<persistence_enforcement>
**Mandatory Rules**:
1. **NEVER persist reports** - ALL analysis, validation, and verification reports MUST be displayed to user only
2. **NEVER persist documentation** - Unless explicitly requested, no .md files or documentation artifacts
3. **NEVER persist examples** - All examples and demonstrations are display-only, never saved
4. **NEVER persist working state** - Scratchpads, notes, and intermediate results remain in-memory only
5. **NEVER persist analysis** - Gap analysis, requirements, verification results are ephemeral
6. **ALWAYS clear after completion** - All temporary state cleared when task finishes
7. **ONLY create codebase files** - The ONLY exception is actual code/config files needed for the project
8. **Display to user instead** - Present ALL analysis and reports in conversation, not in files
</persistence_enforcement>

### Guild Directory Protocol (Setup Command Only)
**CRITICAL**: This protocol applies ONLY to `/guild:setup` command for persistent agent file creation

**Setup Command Requirements**:
- **Mandatory Save Location**: ALL persistent agent files MUST be saved to ./.claude/agents/guild/ directory
- **No Alternative Paths**: Never save agents to any other directory or location
- **Guild Subdirectory Only**: Always use the guild subdirectory for organization
- **Directory Verification**: Confirm agents are saved to correct guild directory
- **Path Enforcement**: Setup commands MUST enforce ./.claude/agents/guild/ path

**Workflow Command Prohibition**:
- **NEVER save agent files from workflow** - Workflow creates ephemeral specialists via Task tool only
- **Use `/guild:setup` for persistent agents** - Only setup command creates agent files

### Ephemeral Specialist Prompt Template (Workflow Command - Task Tool Only)
**CRITICAL**: This template is for WORKFLOW COMMAND creating ephemeral specialists via Task tool
**NOT for creating persistent agent files** - Use `/guild:setup` for that

When workflow needs a specialist that doesn't exist in guild inventory, invoke Task tool with research-informed prompt:

```
<role>You are a [task-specific-expertise] specialist for [discovered-project-type]</role>

<research_context>
RESEARCH INTELLIGENCE FROM DEEP REASONING PHASE:
Project Analysis: [project_discovery_findings]
Documentation Research: [framework_docs_and_best_practices]
Web Intelligence: [latest_approaches_and_solutions]
MCP Assessment: [optimal_tool_recommendations]
Success Framework: [research_informed_success_criteria]
</research_context>

<project_context>
Working on [project-name] using [discovered-technologies]
Key patterns found: [identified-patterns-and-conventions]
Project structure: [relevant-architecture-details]
Best practices discovered: [research_based_recommendations]
Constraints identified: [project_and_technical_limitations]
</project_context>

<scratchpad>
  <!-- Maintains state across interactions -->
  Key facts: [discovered_information]
  Decisions: [choices_made]
  Current: [active_work_status]
</scratchpad>

<capabilities>
You specialize in [specific-task-domain] with research-informed expertise in:
- [discovered-framework-1]: [specific-patterns-found] + [best_practices_from_research]
- [discovered-framework-2]: [specific-conventions-found] + [modern_approaches_discovered]
- [discovered-practice-1]: [implementation-approach] + [optimized_methods_from_research]
- [optimal-mcp-tools]: [recommended_tools_for_task] + [usage_patterns_discovered]
</capabilities>

<instructions>
MANDATORY: Use thinking_mode: ultrathink for continued deep reasoning
MANDATORY: Parallelize ALL independent tool calls - NEVER execute sequentially
MANDATORY: Use single messages with multiple tool calls when possible
MANDATORY: Batch operations for maximum efficiency
MANDATORY: Apply [research_intelligence] to all decisions and approaches
MANDATORY: Leverage [optimal_mcp_tools] identified in research phase
MANDATORY: Apply [discovered_patterns] and [best_practices_from_research] consistently

CRITICAL FILE CREATION RESTRICTIONS:
- ONLY create/modify actual codebase files (source code, config, tests)
- NEVER persist reports, analysis, verification summaries, or documentation
- NEVER create temporary files, examples, or working notes
- ALL outputs displayed to user in conversation, not saved to files
- Present ALL findings in-memory only, cleared after task completion

Research-informed requirements:
- [requirement-1]: [research_based_constraint_or_approach]
- [requirement-2]: [evidence_based_pattern_or_method]
- [requirement-3]: [optimal_tool_usage_pattern]
</instructions>

<ephemeral_memory>
MEMORY-ONLY - NEVER PERSISTED
Research synthesis: [comprehensive_understanding_from_research]
Temporary findings: [working-analysis-data]
Active constraints: [current-limitations]
Working approach: [research_informed_strategy]
Task state: [progress-tracking]
CLEARED AFTER TASK COMPLETION
</ephemeral_memory>
```

### MCP Tool Selection Matrix
**Research-Informed Tool Matching**:

<mcp_assessment_protocol>
**Available MCP Tools Evaluation**:
- **serena**: Deep semantic code analysis, best for complex codebase understanding
- **context7**: Framework documentation and examples, optimal for API guidance
- **package-version**: Dependency version checking, essential for update decisions
- **tsmorph**: TypeScript/JavaScript refactoring, mandatory for TS/JS projects
- **playwright**: Browser automation, required for web testing and interaction
- **sequential-thinking**: Complex problem solving, ideal for multi-step analysis
</mcp_assessment_protocol>

<tool_selection_criteria>
**Matching Tasks to Optimal Tools**:
- **Code Analysis Tasks**: serena → context7 → sequential-thinking
- **Refactoring JS/TS**: tsmorph → package-version → context7
- **Dependency Management**: package-version → context7 → serena
- **Web Development**: playwright → context7 → package-version
- **Complex Problem Solving**: sequential-thinking → serena → context7
- **Framework Integration**: context7 → package-version → serena
</tool_selection_criteria>

### Codebase Exploration Protocol
**COMPLEX DISCOVERY TASKS**: Use Task tool for deep codebase investigation

<exploration_pattern>
**When to Use Exploration Delegation**:
- Multi-file pattern analysis requiring iterative investigation
- Complex architecture comprehension in large codebases
- Open-ended research with uncertain scope
- Cross-cutting concern identification across many files
- Legacy code analysis requiring multiple discovery rounds
- Pattern mining in large codebases

**Exploration Task Pattern**:
Task tool with:
  subagent_type: general-purpose
  description: "Deep codebase exploration for [specific-goal]"
  prompt: |
    MANDATORY: Use thinking_mode: ultrathink for all reasoning
    MANDATORY: Parallelize ALL independent tool calls - NEVER execute sequentially
    MANDATORY: Use single messages with multiple tool calls when possible
    MANDATORY: Batch operations for maximum efficiency

    You are conducting deep codebase exploration for [specific-goal]

    <exploration_strategy>
    Execute ALL discovery operations in PARALLEL:
    - Glob for relevant file patterns (*.tsx, *.config.js, etc.)
    - Grep for key patterns and identifiers across codebase
    - Read architectural documentation (CLAUDE.md, README, docs/)
    - Analyze directory structure and organization
    </exploration_strategy>

    <investigation_requirements>
    [Specific discovery goals and success criteria]
    </investigation_requirements>

    CRITICAL FILE CREATION RESTRICTIONS:
    - NEVER create any files - exploration is analysis only
    - Present ALL findings in your response
    - All outputs are display-only, never persisted
</exploration_pattern>

**Integration with Research Phase:**
- Use exploration delegation during Deep Reasoning & Research Phase for complex discovery
- Parallelize exploration with other research streams
- Synthesize exploration findings with documentation and web intelligence
- Embed exploration discoveries in subsequent specialist prompts

### 7-Parallel-Task Feature Implementation Pattern
**FEATURE DEVELOPMENT ACCELERATION**: Use 7-parallel-task method for 5x speed improvement

<seven_parallel_streams>
When implementing new features, delegate these 7 streams simultaneously via Task tool:

1. **Component Creation** - Core component implementation
2. **Styles** - CSS/styling implementation
3. **Tests** - Unit and integration test coverage
4. **Types** - TypeScript interfaces and type definitions
5. **Hooks/Utilities** - Reusable logic and helpers
6. **Integration** - Routing, imports, wiring
7. **Config/Documentation** - Configuration updates and documentation

**Execution Pattern**:
- Launch all 7 tasks in parallel (single message with 7 Task tool calls when appropriate)
- Each task is independent and non-blocking
- Aggregate results and verify integration
- Result: 5x faster than sequential implementation

**Example Task Structure**:
Task tool (up to 7 parallel invocations for independent streams):
  subagent_type: general-purpose
  description: [stream-specific-task]
  prompt: |
    MANDATORY: Use thinking_mode: ultrathink for all reasoning
    MANDATORY: Parallelize ALL independent tool calls - NEVER execute sequentially
    MANDATORY: Use single messages with multiple tool calls when possible

    You are implementing [specific-stream] for [feature-name]

    <stream_requirements>
    [Specific requirements for this parallel stream]
    </stream_requirements>

    <integration_context>
    This is one of 7 parallel streams. Ensure compatibility with:
    [Other parallel streams and their interfaces]
    </integration_context>

**Applicability**:
- Best for medium-to-large feature implementations
- Requires clear separation of concerns
- Most effective when streams have minimal dependencies
- May need integration phase after parallel completion
</seven_parallel_streams>

### Plan-Then-Execute Protocol
**QUALITY ASSURANCE**: Always plan before implementation

<plan_review_workflow>
**Standard Workflow**:
1. **Deep Reasoning & Research** - Comprehensive parallel research phase (MANDATORY first)
2. **Plan Creation** - Detailed implementation plan with ultrathink
3. **Human Checkpoint** - Present plan and PAUSE for user approval
4. **Execution** - Proceed only after explicit approval
5. **Verification** - Implementation gap detection and resolution
6. **Human Approval** - Final sign-off before completion

**Critical Rules**:
- NEVER proceed to execution without presenting plan and receiving approval
- ALWAYS pause after plan creation to allow review and refinement
- ACCEPT user feedback and iterate on plan before implementation
- QUESTION assumptions and validate understanding before coding

**Rationale**:
Active collaboration produces superior results to autonomous execution. Claude Code performs best when users are hands-on involved, push back on AI plans, stop it from going down wrong paths, question the code, and test extensively.

**Plan Presentation Format**:
```
## Implementation Plan

### Discovered Context
[Research findings from Deep Reasoning & Research Phase]

### Proposed Approach
[High-level strategy and architectural decisions]

### Detailed Steps
1. [Specific step with files, changes, rationale]
2. [...]

### Parallelization Strategy
[Which steps can run concurrently]

### Risks and Mitigations
[Potential issues and how to address them]

### Success Criteria
[Measurable outcomes that define completion]

**PAUSING for your approval before proceeding to implementation.**
```

**When to Skip**:
- User explicitly requests immediate execution ("just do it", "go ahead")
- Trivial changes (typo fixes, simple refactors)
- User has already provided detailed implementation plan

**When MANDATORY**:
- Complex features or architectural changes
- Unclear requirements or multiple possible approaches
- High-risk modifications (production code, critical systems)
- First time working on a new codebase or domain
</plan_review_workflow>

### Discovery Protocols (Research-Enhanced)
- **Multi-Dimensional Analysis**: Examine structure, dependencies, patterns, configuration via [mcp_tools]
- **Evidence-Based**: Base decisions on actual project characteristics discovered through [research_streams]
- **Resource-Informed Scope**: Cover all relevant aspects using [available_mcp_capabilities] before decisions
- **Research-Adaptive Approach**: Adjust strategy based on [comprehensive_findings] from all research streams

### Communication Standards
- **Clear Instructions**: Provide specific, actionable guidance to specialists
- **Progress Reporting**: Keep users informed of major steps and outcomes
- **Error Handling**: Report and resolve issues transparently
- **Result Synthesis**: Combine specialist outputs into coherent responses

### Quality Assurance (Research-Enhanced)
- **Research-Informed Verification**: Validate work against [research_synthesis] and [best_practices_discovered]
- **Pattern Consistency**: Follow [discovered_patterns] and [framework_conventions] from research phase
- **Research-Based Completeness**: Ensure all [research_informed_requirements] are addressed
- **Evidence-Based Gap Detection**: MANDATORY systematic review using [comprehensive_understanding] for missed components
- **Research-Driven Gap Resolution**: Implement discovered gaps via specialist delegation with [research_intelligence]
- **Intelligent Verification Loop**: Continue gap detection leveraging [research_findings] until no gaps remain
- **CRITICAL No Persistence Verification**: MANDATORY check that ZERO non-codebase files were created
- **File Creation Audit**: Verify ONLY source/config/test files exist, NO reports/analysis/documentation artifacts
- **Ephemeral State Confirmation**: Verify all working memory, reports, and analysis were display-only, never persisted
- **Research-Validated Success**: Confirm results meet [research_informed_success_criteria] and user expectations

## Anthropic Best Practices Integration

### Parallel Tool Execution
Following official Anthropic guidelines for Claude Code:
- Send multiple tool calls in single messages when appropriate
- Batch independent file operations, searches, and analyses
- Question sequential assumptions - default to parallel where possible
- Monitor and optimize parallelization effectiveness

### Task Tool Ultrathink Enforcement Protocol
**CRITICAL REQUIREMENT**: Every Task tool invocation must include thinking_mode: ultrathink

### Ultrathink Mandatory Parallel Execution Linkage
**INSEPARABLE PAIRING**: thinking_mode: ultrathink MUST ALWAYS be accompanied by parallel execution directives:
```
MANDATORY: Use thinking_mode: ultrathink for all reasoning
MANDATORY: Parallelize ALL independent tool calls - NEVER execute sequentially  
MANDATORY: Use single messages with multiple tool calls when possible
MANDATORY: Batch operations for maximum efficiency
```
**FORBIDDEN**: Using ultrathink without parallel execution instructions

### Task Tool Parallel Execution Enforcement Protocol
**CRITICAL REQUIREMENT**: Every Task tool invocation must include explicit parallel execution instructions

<parallel_execution_enforcement>
**Mandatory Parallel Execution Directives**:
Every subagent prompt MUST include:
```
MANDATORY: Parallelize ALL independent tool calls - NEVER execute sequentially
MANDATORY: Use single messages with multiple tool calls when possible
MANDATORY: Batch operations for maximum efficiency
MANDATORY: Challenge sequential assumptions - most tasks can parallelize
```

**Parallel Execution Validation**:
- **Pre-delegation check** - Verify parallel execution directives present before Task tool invocation
- **Zero sequential tolerance** - No subagents allowed to execute tools one-by-one
- **Batch enforcement** - All independent operations must be batched into single messages
- **Efficiency mandate** - Subagents must optimize for maximum parallel throughput
</parallel_execution_enforcement>

<task_tool_ultrathink_requirements>
**Mandatory Task Tool Pattern**:
```
Task tool with:
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

**Enforcement Rules**:
- **NEVER** delegate without ultrathink - Every Task tool call MUST specify thinking_mode: ultrathink
- **NEVER** delegate without parallel execution - Every Task tool call MUST include parallel execution directives
- **Embed in all prompts** - All specialist prompts MUST include ultrathink AND parallel execution requirements
- **No exceptions allowed** - Zero tolerance for Task tool calls without ultrathink AND parallel execution
- **Validate before execution** - Check ultrathink AND parallel execution configuration before any delegation
- **Fail fast** - Stop and correct any Task tool calls missing ultrathink OR parallel execution directives
- **Mandatory parallel statements** - Every subagent prompt MUST contain "MANDATORY: Parallelize ALL independent tool calls"
</task_tool_ultrathink_requirements>

### Thinking Mode Usage
- **MANDATORY**: Use `thinking_mode: ultrathink` for ALL Task tool invocations 
- **INSEPARABLE**: Every ultrathink usage MUST include parallel execution directives
- **ALWAYS PAIRED**: "MANDATORY: Parallelize ALL independent tool calls" must accompany ultrathink
- Apply systematic thinking to multi-step problems with parallel tool execution
- Break down complex decisions into manageable components executed in parallel
- Document reasoning process for transparency
- **CRITICAL**: Never delegate without ultrathink AND parallel execution configuration

### Task Tool Best Practices
- **MANDATORY**: EVERY Task tool call MUST include thinking_mode: ultrathink parameter
- Provide detailed, specific prompts to specialists with ultrathink requirement
- Include necessary context and constraints
- Specify expected output format and quality
- Use appropriate subagent types for different task categories
- **CRITICAL**: Never delegate without explicit ultrathink configuration

## Framework Compliance

This shared intelligence ensures all Guild commands follow the core framework principles:
1. **Use Specialists** - Route work through appropriate agents
2. **Ephemeral Specialists (Workflow)** - Create temporary specialists via Task tool when no match exists
3. **Persistent Agents (Setup)** - Create permanent agent files in `.claude/agents/guild/` via setup command
4. **Work in Parallel** - Execute independent tasks simultaneously
5. **Discover First** - Analyze before deciding
6. **Verify Completeness** - MANDATORY implementation gap detection and resolution
7. **No Persistence** - Never save examples, reports, or working state to files
8. **Guild Directory (Setup Only)** - Setup command saves persistent agents to ./.claude/agents/guild/
9. **Keep It Simple** - Clear, direct, effective instructions

## Implementation Gap Resolution Protocol

<gap_resolution_intelligence>
**MANDATORY AFTER EVERY IMPLEMENTATION**:

### Detection Streams (Execute in Parallel)
1. **Requirements Completeness**: Compare implementation against original user requirements
2. **Integration Verification**: Ensure all components integrate properly
3. **Edge Case Coverage**: Identify missing error handling and edge cases
4. **Dependency Completeness**: Verify all required dependencies are implemented
5. **Performance Adequacy**: Confirm implementation meets performance expectations

### Resolution Process
1. **Gap Identification**: Systematically catalog all discovered gaps
2. **Priority Assessment**: Determine resolution order based on criticality
3. **Specialist Delegation**: Route gap resolution to appropriate specialists via Task tool
4. **Parallel Implementation**: Execute independent gap fixes simultaneously
5. **Re-verification**: Validate gap resolution and detect any new gaps introduced
6. **Iteration**: Continue until comprehensive review finds no remaining gaps

### Integration Requirements
- **Post-Specialist-Work**: MANDATORY step after specialist completes any work
- **Pre-User-Reporting**: Must complete before reporting results to user
- **Parallel Execution**: Run all detection streams simultaneously for efficiency
- **Specialist Coordination**: Use Task tool for all gap resolution work
- **Documentation**: Update all relevant documentation to reflect gap resolutions
</gap_resolution_intelligence>
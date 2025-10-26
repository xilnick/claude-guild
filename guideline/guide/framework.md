# Guild Framework

## Core Philosophy

**Discovery Over Prescription**: Guild provides resources and guidance, not rigid execution protocols. Trust Claude Code's native capabilities for orchestration, tool selection, and parallel execution.

**Skills as Patterns**: Skills define WHAT and WHEN (patterns, contexts, conventions), not HOW (execution steps). Claude Code determines optimal execution based on context.

**Advisory Guidance**: Commands present available resources and provide strategic advice, allowing Claude Code to leverage its strengths in task decomposition and tool orchestration.

## MANDATORY: Execution Architecture

<mandatory_execution_architecture>
**CRITICAL REQUIREMENTS**: Guild commands enforce specific execution patterns for optimal performance, context efficiency, and reasoning quality.

### 1. MANDATORY: Subagent Delegation (Context Reduction)

**ALWAYS use Task tool to reduce context usage**:
- ✅ Multi-step research → Task tool delegation
- ✅ Complex implementation → Task tool delegation
- ✅ Verification phases → Task tool delegation
- ❌ NEVER use direct tools for multi-step work
- ❌ NEVER keep multi-step work in main context

**Why Mandatory Subagent Delegation**:
1. **Context Efficiency**: Keeps main context clean and focused
2. **Scalability**: Distributes work across multiple agent contexts
3. **Isolation**: Each subagent works in isolated context
4. **Performance**: Better parallelization and resource utilization

**When Direct Tools Are Acceptable**:
- Single file read/write operations
- Simple grep/glob queries
- Trivial edits (formatting, typos)
- Operations where Task overhead exceeds benefit

### 2. MANDATORY: Parallel Execution (Performance + Context)

**ALWAYS spawn parallel Task tool invocations in ONE message**:
- ✅ Research/discovery → ALL tasks in ONE message
- ✅ Implementation workstreams → ALL tasks in ONE message
- ✅ Verification phases → ALL tasks in ONE message
- ❌ NEVER sequential Task invocations across messages
- ❌ NEVER wait between spawning independent tasks

**Why Mandatory Parallel Execution**:
1. **Performance**: 3-10x speedup vs sequential execution
2. **Context Distribution**: Parallel agents work in separate contexts simultaneously
3. **Scalability**: Independent workstreams don't block each other
4. **Best Practice**: Aligns with official Anthropic recommendations

### 3. MANDATORY: Ultra-Deep Reasoning (ULTRATHINK Keyword)

**ALWAYS include ULTRATHINK keyword at start of Task prompts**:
- ✅ Main workflow and setup commands use ultrathink
- ✅ ALL spawned subagents start prompt with "ULTRATHINK:"
- ✅ Complex reasoning and planning tasks
- ✅ Research and analysis phases
- ❌ NEVER spawn Task without ULTRATHINK keyword in prompt
- ❌ NEVER use default thinking mode

**Why Mandatory ULTRATHINK**:
1. **Reasoning Quality**: Enables deep, thorough reasoning
2. **Better Decisions**: Improves planning and problem-solving
3. **Error Reduction**: Catches issues through comprehensive analysis
4. **Consistency**: All agents reason at the same depth

**ULTRATHINK Keyword Pattern**:
```javascript
Task({
  prompt: "ULTRATHINK: Your detailed task description...",
  subagent_type: "Explore",
  description: "Task description"
})
```

**Keyword Placement**: Start EVERY Task prompt with "ULTRATHINK: " to activate deep reasoning mode for the spawned agent.

### 4. MANDATORY: Fresh Context Maintenance

**ALWAYS maintain relevant, up-to-date context**:
- ✅ Use Context7 for library documentation (latest versions)
- ✅ Use WebSearch for current best practices
- ✅ Use WebFetch for fresh documentation
- ✅ Research before implementation
- ❌ NEVER rely on stale knowledge cutoff data
- ❌ NEVER skip research for "known" technologies

**Why Mandatory Fresh Context**:
1. **Precision**: Latest documentation = accurate implementations
2. **Best Practices**: Current patterns and recommendations
3. **Version Alignment**: Match project's actual library versions
4. **Quality**: Avoid deprecated or outdated approaches

### Complete Mandatory Pattern

**CORRECT (ALL requirements enforced)**:
```javascript
// Spawn ALL tasks in ONE message, ALL with ULTRATHINK keyword
Task({
  prompt: "ULTRATHINK: Research React latest documentation.
          Use Context7: mcp__context7__resolve-library-id 'react'
          Then: mcp__context7__get-library-docs with topics
          Report: Current best practices and patterns",
  subagent_type: "general-purpose",
  description: "React documentation research"
})
Task({
  prompt: "ULTRATHINK: Analyze codebase for React usage patterns.
          Use Glob and Grep to find components
          Report: Current project patterns",
  subagent_type: "Explore",
  description: "Codebase analysis"
})
Task({
  prompt: "ULTRATHINK: Search for React best practices 2025.
          Use WebSearch for latest patterns
          Report: Current community recommendations",
  subagent_type: "general-purpose",
  description: "Best practices research"
})
```

**INCORRECT (violations)**:
```javascript
// ❌ Sequential tasks across messages
Message 1: Task({ prompt: "Research..." })
Message 2: Task({ prompt: "More research..." })

// ❌ Missing ULTRATHINK keyword in prompt
Task({ prompt: "Research...", subagent_type: "Explore" })
// MUST start with "ULTRATHINK: "

// ❌ Using direct tools for multi-step work
Read package.json
Grep for patterns
Read multiple files
// Should use Task tool instead

// ❌ Relying on stale knowledge instead of fresh research
// "I know React hooks..." - NO! Research fresh docs via Context7
```

### Enforcement Rules

**Workflow Command (`/guild`) MUST**:
1. Use Task tool for ALL multi-step research/implementation
2. Spawn ALL parallel tasks in ONE message
3. Start EVERY Task prompt with "ULTRATHINK: "
4. Use Context7/WebSearch for fresh documentation
5. Wait for ALL parallel tasks before proceeding

**Setup Command (`/guild:setup`) MUST**:
1. Use Task tool for ALL discovery and analysis
2. Spawn ALL parallel tasks in ONE message
3. Start EVERY Task prompt with "ULTRATHINK: "
4. Fetch fresh library documentation via Context7
5. Wait for ALL parallel tasks before proceeding

### What This Means

**NOT ADVISORY - THESE ARE MANDATORY**:
- Task tool delegation for multi-step work (context efficiency)
- Parallel execution in single message (performance)
- ULTRATHINK keyword in all Task prompts (reasoning quality)
- Fresh context via research tools (precision)
- This is core architectural requirement, not recommendation

</mandatory_execution_architecture>

## Core Architecture
<system_design>
<principle>Provide discoverable skills and specialized agents as resources for intelligent selection</principle>
<execution>Advisory guidance, metadata-rich discovery, context-aware selection, trust native capabilities</execution>
</system_design>

## Skill System Architecture

<skill_design>
**Skills are lightweight, metadata-rich pattern definitions following official Claude Code skills format with progressive loading architecture.**

### Official Skills Format Requirements
Guild skills MUST follow official Claude Code format:
1. **File Structure**: `SKILL.md` per skill (official format)
2. **YAML Frontmatter**: Required metadata for Claude Code discovery
3. **Progressive Loading**: 3-tier architecture (metadata → instructions → resources)
4. **Gerund Naming**: Use verb+ing form ("Working with React", not "React Integration")
5. **Conciseness**: Keep SKILL.md under 500 lines, split large content into referenced files

### Progressive Loading Architecture (Official Pattern)
**Level 1 - Metadata (Always Loaded, ~100 tokens)**:
- YAML frontmatter with `name` and `description` (required)
- Optional: `model`, `tools`, `category`, `applicability`
- Enables skill discovery without loading full instructions

**Level 2 - Instructions (Triggered, ~5k tokens)**:
- Main SKILL.md content loaded when skill is relevant
- Pattern descriptions, conventions, anti-patterns
- Related resources and usage guidance

**Level 3 - Resources (On-Demand, unlimited tokens)**:
- Additional files: `REFERENCE.md`, `EXAMPLES.md`, `DOCS.md`
- Library documentation (fetched via Context7)
- Tech stack references (fetched via WebSearch)
- Scripts and utilities (executed, not loaded into context)

### Skill Characteristics
1. **Metadata-Rich**: Skills include structured frontmatter with:
   - Official Claude Code fields: `name`, `description`, `model`, `tools`
   - Guild enhancements: `category`, `applicability`, `related_skills`, `related_agents`
   - Tech stack markers: Technologies, frameworks, libraries

2. **Pattern Definitions**: Skills describe WHAT and WHEN, not HOW:
   - Project-specific patterns and conventions
   - Context for application
   - Common pitfalls and anti-patterns
   - Related resources and documentation

3. **Discoverable**: Rich metadata enables context-aware selection:
   - Claude Code evaluates applicability based on current task
   - Progressive loading optimizes context usage
   - Technology and file pattern matching

4. **Non-Prescriptive**: Skills provide knowledge, not execution protocols:
   - No step-by-step instructions (use workflows/checklists instead)
   - No mandatory tool usage patterns
   - No rigid execution sequences
   - Trust Claude Code to determine optimal approach

5. **Tech Stack Integration**: Skills specialize for libraries and frameworks:
   - Library-specific patterns and conventions
   - Documentation references (Context7, WebSearch, WebFetch)
   - Framework best practices
   - Version-specific guidance

### Skill vs Agent Distinction
- **Skills**: Reusable pattern knowledge, lightweight, metadata-rich, advisory, tech-stack-aware
- **Agents**: Specialized domain expertise, complex coordination, orchestration capabilities, skill-aware
- **Selection**: Use skills for pattern matching and tech stack guidance, agents for complex multi-step coordination
</skill_design>

## Resource Selection Model

<selection_model>
**Guild workflow presents available resources and trusts Claude Code to select optimally.**

### Selection Protocol
1. **Review Context**: Understand user request and project state
2. **Evaluate Skills**: Check skill metadata for pattern matches
3. **Consider Agents**: Assess specialist agents for complex coordination needs
4. **Make Decision**: Select appropriate resources based on context
5. **Execute**: Leverage selected resources with native Claude Code capabilities

### Trust Claude Code
- **Native Orchestration**: Claude Code excels at task decomposition and coordination
- **Parallel Execution**: Built-in understanding of parallel tool invocation
- **Tool Selection**: Strong native capability for intelligent tool selection
- **Adaptive Execution**: Can adjust approach based on feedback and results

### Advisory Guidance
- Present available resources clearly with guidance on selection
- Provide selection criteria and confidence scoring as recommendations
- Offer strategic recommendations for resource usage
- Avoid prescriptive execution mandates - trust Claude Code
</selection_model>

## Resource Usage Guidelines

<resource_availability>
**Available Resources**:
1. **Skills**: Lightweight pattern definitions in `.claude/skills/guild/`
2. **Agents**: Specialized domain experts in `.claude/agents/guild/`
3. **Native Capabilities**: Claude Code's built-in orchestration, parallelization, and tool selection
4. **Task Tool**: For complex delegation when needed

**Selection Guidance** (Advisory Recommendations):
- Review available skills for pattern matches
- Consider specialist agents for complex coordination
- Leverage native Claude Code capabilities for orchestration
- Use Task tool for complex multi-step delegation when beneficial
- Trust your judgment on optimal resource selection

All guidance is advisory - adapt based on context and requirements.
</resource_availability>

<delegation_guidance>
**When to Consider Delegation**:
1. **Complex Multi-Step Coordination**: Task requires orchestration of multiple independent workstreams
2. **Specialized Domain Expertise**: Existing agent has deep knowledge of required domain
3. **Pattern Match**: Skill provides relevant project-specific conventions
4. **Parallel Execution**: Multiple independent sub-tasks benefit from concurrent execution

**When to Execute Directly**:
1. **Simple Operations**: Straightforward file edits, searches, or reads
2. **Strong Context**: You have all necessary information already
3. **Quick Tasks**: Overhead of delegation exceeds task complexity
4. **Native Strength**: Task plays to Claude Code's built-in capabilities
</delegation_guidance>

<orchestration_guidance>
**Leverage Native Capabilities**:
1. **Parallel Execution**: Claude Code excels at parallel tool invocation
2. **Tool Selection**: Strong native understanding of available tool capabilities
3. **Context Management**: Built-in ability to track and coordinate complex workflows
4. **Adaptive Planning**: Can adjust approach based on results and feedback

**Trust Your Judgment**:
- No rigid execution mandates
- Select resources based on context and task requirements
- Balance delegation overhead against task complexity
- Use skills and agents as helpful resources, not constraints
</orchestration_guidance>

<specialist_types>
**Persistent vs Ephemeral Specialists**:
1. **Persistent Agents** (created by `/guild:setup`):
   - Saved to `.claude/agents/guild/`
   - Reusable across sessions
   - Project-specific domain expertise
   - Created based on discovered patterns

2. **Ephemeral Specialists** (created by workflow when needed):
   - Temporary Task tool invocations
   - Task-specific expertise
   - Not saved to filesystem
   - Used when no existing resource matches
</specialist_types>

<no_persistence>
  1. **NEVER persist reports** - Analysis, validation, and verification reports MUST be displayed to user only, NEVER saved to files
  2. **NEVER persist non-code artifacts** - Documentation, examples, summaries, and working state are FORBIDDEN from file persistence
  3. **ONLY create codebase files** - The ONLY files that can be created/modified are actual code, configuration, or project files that are part of the codebase
  4. **NO analysis files** - Gap analysis, requirements documentation, verification results MUST remain in-memory only
  5. **NO temporary garbage** - No temporary files, working notes, scratch files, or intermediate artifacts
  6. **Memory-only state** - Keep ALL working state, reports, and analysis in memory only, cleared after completion
  7. **Ephemeral scratchpads** - All working memory is temporary and NEVER persisted to filesystem
  8. **Display-only outputs** - Present results to user in conversation only, NEVER write to files unless explicitly part of codebase
</no_persistence>

## Implementation Patterns

<workflow_pattern>
**Workflow Pattern**: Context Review → Resource Selection → Execution → Verification → Report

### Phase Guidance
1. **Context Review**:
   - Understand user request and project state
   - Review available skills and agents
   - Assess task complexity and requirements

2. **Resource Selection**:
   - Check skills for pattern matches (lightweight, quick reference)
   - Consider agents for complex coordination
   - Evaluate whether delegation benefits the task
   - Trust Claude Code native capabilities

3. **Execution**:
   - Leverage selected resources effectively
   - Apply parallel execution for independent operations
   - Use appropriate tools based on task needs
   - Adapt approach based on results

4. **Verification**:
   - Validate functional requirements met
   - Check integration and quality
   - Identify any gaps or missing components
   - Obtain user approval

5. **Report**:
   - Present results clearly
   - Display analysis and verification (never persist)
   - Provide actionable feedback
   - Confirm completion criteria met

**Key Principles**:
- No mandatory delegation rules
- Resource selection based on context
- Trust native orchestration capabilities
- Skills and agents as helpful references
- Display-only reporting (never persist non-code artifacts)
</workflow_pattern>

## Deep Reasoning & Research Protocol

<research_mandatory>
**MANDATORY FIRST PHASE**: Execute comprehensive research before any task delegation

### Parallel Research Streams
Execute ALL research streams simultaneously via Task tool (ALL with thinking_mode: ultrathink):
- **Project Discovery**: Codebase analysis, pattern identification, technology stack assessment
- **Documentation Intelligence**: Framework docs, API references, best practices research
- **Web Resource Discovery**: Use WebSearch for latest approaches, solutions, community practices
- **Tool Capability Assessment**: Evaluate available tools for optimal task-tool matching
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
**Setup Pattern**: Discovery → Tech Stack Analysis → Skill Creation → Documentation Integration → Agent Creation → Guidance

### Phase Guidance
1. **Discovery**:
   - Parallel project analysis (Glob, Grep, Read)
   - Identify technologies, frameworks, libraries (package.json, requirements.txt, go.mod, etc.)
   - Detect repeatable patterns and workflows
   - Map architectural approaches
   - Scan for existing skills to avoid duplication

2. **Tech Stack Analysis**:
   - Extract technology stack from package managers
   - Identify major frameworks and libraries in use
   - Detect version requirements and constraints
   - Map library-specific patterns and conventions
   - Plan library-specific skills (e.g., "Working with React", "Working with Express")

3. **Skill Creation**:
   - Create SKILL.md files following official Claude Code format
   - Use gerund naming: "Working with [Library]", "Processing [Data Type]"
   - Add YAML frontmatter with required fields (name, description)
   - Keep main SKILL.md under 500 lines
   - Structure for progressive loading (metadata → instructions → resources)
   - **Tech Stack Skills**: Create library/framework-specific skills
   - **Pattern Skills**: Create project convention skills
   - Save to `.claude/skills/guild/[category]/SKILL.md`

4. **Documentation Integration**:
   - For tech stack skills, create DOCS.md with library documentation references
   - Use Context7 to fetch library documentation: `resolve-library-id` → `get-library-docs`
   - Use WebSearch for latest best practices and patterns
   - Store documentation references in Level 3 resources (on-demand loading)
   - Include API references, usage examples, migration guides
   - Keep documentation links up-to-date and version-aware

5. **Agent Creation**:
   - Create specialists for domain expertise
   - Reference relevant skills (both tech stack and pattern skills)
   - Embed project context and discovered conventions
   - Configure skill-aware agents that load skills on-demand
   - Save to `.claude/agents/guild/`

6. **Guidance**:
   - Display created resources (skills + agents)
   - Explain when to use each skill/agent
   - Show tech stack coverage (which libraries have skills)
   - Provide selection criteria and composition patterns
   - Offer usage recommendations (display only, never persist)

**Key Principles**:
- Follow official Claude Code SKILL.md format
- Use progressive loading (3-tier architecture)
- Create library/framework-specific skills with documentation integration
- Skills represent project patterns (WHAT/WHEN, not HOW)
- Agents provide domain expertise and coordination
- No hardcoded skill sets - discover from project
- Advisory guidance, not prescriptive mandates
- Only persist skill and agent files
</setup_pattern>

<optimization_guidance>
**Optimization Recommendations**:
- Consider `thinking_mode: ultrathink` for complex reasoning tasks
- Apply parallel execution for independent operations
- Batch tool calls for efficiency
- Keep delegation prompts focused and actionable
- Trust native Claude Code optimization capabilities

**When Using Task Tool**:
- Provide clear context and objectives
- Include relevant project patterns and conventions
- Specify success criteria
- Consider ultrathink for deep reasoning needs
- Encourage parallel execution when beneficial
</optimization_guidance>

## Verification Guidance

<verification_approach>
**Recommended Verification Practices**:

### Completeness Review
- Analyze work against original requirements
- Verify all components integrate properly
- Consider edge cases and error conditions
- Validate dependencies are handled
- Check performance meets expectations

### Gap Detection and Resolution
When reviewing completed work:
1. **Systematic Review**: Compare deliverables to requirements
2. **Identify Gaps**: Note missing components or incomplete implementations
3. **Prioritize**: Assess criticality and dependencies
4. **Resolve**: Address identified gaps appropriately
5. **Re-verify**: Confirm gaps are resolved satisfactorily
6. **User Confirmation**: Obtain approval that work is complete

### Quality Standards
- Functional correctness
- Proper integration
- Code quality and maintainability
- Performance and efficiency
- User approval (final authority)

**Adaptive Approach**: Apply verification depth appropriate to task complexity and risk.
</verification_approach>

# Guild Framework

## Core Philosophy

**Core Requirements + Conditional Excellence**: Guild framework defines mandatory core requirements that apply to all workflows, plus conditional operational patterns applied based on task complexity, risk level, and domain requirements.

**Skills as Patterns**: Skills define project-specific patterns and conventions (WHAT and WHEN), which Guild commands apply intelligently based on context.

## MANDATORY: Core Requirements

<mandatory_execution_architecture>
**CORE REQUIREMENTS**: Guild commands enforce mandatory execution requirements for optimal performance, context efficiency, and reasoning quality.

### The Five Core Requirements

1. **Subagent Delegation (Context Reduction)**
   - Use Task tool for ALL multi-step work
   - Keeps main context clean and focused
   - Enables scalability and isolation

2. **Parallel Execution (Performance + Context)**
   - Spawn ALL independent tasks in ONE message
   - 3-10x speedup vs sequential execution
   - Aligns with Anthropic best practices

3. **Ultra-Deep Reasoning (ULTRATHINK Keyword)**
   - Start EVERY Task prompt with "ULTRATHINK: "
   - Enables deep, thorough reasoning
   - Ensures consistent reasoning depth

4. **Fresh Context Maintenance**
   - Use Context7/WebSearch for current documentation
   - Research before implementation
   - Avoid stale knowledge cutoff data

5. **Final Validation Protocol**
   - Validate before marking tasks complete
   - Prevents false positives and incomplete implementations
   - Ensures quality assurance

### Application

- **Workflow Command**: MUST apply ALL 5 core requirements
- **Setup Command**: MUST apply 4 core requirements (skip Final Validation - setup is discovery-only)

### Implementation Details

For detailed implementation patterns, code examples, and anti-patterns, see `guideline/core/shared-intelligence.md` section: "CRITICAL: Mandatory Execution Architecture"

The shared intelligence document provides:
- Detailed code examples for each requirement
- Common violations and how to avoid them
- Complete mandatory pattern demonstrations
- Integration with operational excellence protocols

</mandatory_execution_architecture>

## CONDITIONAL: Operational Excellence Patterns

<operational_excellence>
**CONDITIONAL PATTERNS**: Apply these patterns based on task complexity, risk level, and domain requirements. Not all patterns are needed for all tasks - use intelligent judgment to select appropriate patterns.

### Pattern Selection Criteria

**Task Complexity Assessment**:
- **Simple** (<5 min, <5 files, single domain): Apply core 5 requirements only
- **Standard** (5-30 min, 5-20 files, moderate complexity): Apply core + 2-3 conditional patterns
- **Complex** (30+ min, 20+ files, multi-domain): Apply core + most conditional patterns

**Domain Risk Assessment**:
- **Low Risk** (read-only, info gathering, documentation): Minimal conditional patterns
- **Medium Risk** (code changes, configuration updates): Apply safety-oriented patterns
- **High Risk** (database, security, production, destructive): Apply all safety patterns

### 6. CONDITIONAL: Robust Error Recovery

**Apply intelligent error recovery based on task complexity**:
- ✅ Parse errors → identify and fix → retry intelligently
- ✅ Import/dependency errors → install → verify → retry
- ✅ Path errors → verify existence → correct → retry
- ✅ Permission errors → request user approval or find alternative
- ✅ Timeout errors → use run_in_background for long operations
- ✅ Escalate unrecoverable errors with clear diagnosis

**When to Apply**:
- Standard/Complex tasks with potential for recoverable errors
- Implementation phases where errors are likely
- Operations with known failure modes

**Trust Claude's Judgment**:
Claude understands error recovery patterns naturally. Instead of prescribing exact retry logic, provide general guidance:

```javascript
Task({
  prompt: "ULTRATHINK: Implement [feature].

          Apply robust error recovery:
          - Syntax/import errors: fix and retry (max 3 attempts)
          - Path errors: verify and correct path
          - Permissions: request user approval
          - Timeouts: use run_in_background for long operations

          Escalate unrecoverable errors with clear diagnosis.",
  subagent_type: "general-purpose",
  description: "Feature implementation"
})
```

**Why Conditional**:
- Simple tasks (typo fixes, quick reads) don't need elaborate recovery
- Complex tasks benefit from explicit recovery guidance
- Claude can handle standard error recovery without micromanagement

### 7. CONDITIONAL: Risk-Aware Task Categorization

**Apply category-specific safety protocols for risky operations**:
- ✅ Classify tasks by domain (ML/AI, Security, Database, Infrastructure, Data Processing, Web Development)
- ✅ Apply appropriate safety checks based on risk level
- ✅ Verify preconditions before destructive operations
- ✅ Request user approval for high-risk changes

**When to Apply**:
- **High-Risk Tasks**: Database changes, production deployments, security modifications
- **Destructive Operations**: Data deletion, schema changes, irreversible actions
- **Sensitive Domains**: Security, authentication, data processing

**Why Conditional**:
- Simple tasks (read-only, documentation) don't need elaborate risk assessment
- Complex/risky tasks benefit from domain-specific safety protocols
- Claude can identify obvious risks without formal categorization

**Category-Specific Safety Examples**:

- **ML/AI**: Test on small dataset before full training, verify GPU/resources available
- **Security**: Backup before config changes, test in non-production, rotate credentials
- **Database**: Backup before schema changes, test migrations on copy, verify rollback
- **Infrastructure**: Request user approval for production, implement rollback plan
- **Data Processing**: Backup source data, test on sample, verify data integrity
- **Web Development**: Test endpoints, verify error handling, check security headers

### 8. CONDITIONAL: Iterative Research

**Use multi-round research for research-intensive tasks**:
- Round 1: Task-specific, low-frequency search terms
- Round 2: Deep link analysis if needed
- Round 3: Alternative approaches if gaps remain
- Continue iterating until sufficient information gathered

**When to Apply**:
- **Research-Heavy Tasks**: Unfamiliar technologies, complex integrations, edge cases
- **Limited Initial Results**: First search doesn't yield actionable information
- **Critical Decisions**: Architecture choices, library selection, approach validation

**Why Conditional**:
- Simple tasks with known solutions don't need multi-round research
- Complex research benefits from iterative deepening
- Claude can assess when research is sufficient vs needs continuation

**Research Strategy**:
- Use specific, low-frequency search terms (exact errors, version-specific queries)
- Prioritize GitHub (code examples), StackOverflow (solutions), official docs
- If initial results insufficient, analyze top links deeply
- If gaps remain, try alternative terminology and community resources
- Continue until confident understanding achieved

### 9. CONDITIONAL: Environment Observation

**Perform environment reconnaissance for complex/multi-tech projects**:
- Detect installed packages and versions
- Map project structure and configuration files
- Identify runtime environment capabilities
- Check resource availability (disk, memory, CPU)
- Assess containerization status

**When to Apply**:
- **Multi-Tech Projects**: Multiple languages/frameworks (Node.js + Python + Go)
- **Unknown Environments**: First time working with project
- **Resource-Intensive Operations**: ML training, large builds, data processing
- **Container/Cloud Deployments**: Docker, Kubernetes, cloud platforms

**Why Conditional**:
- Simple single-language projects don't need elaborate environment scanning
- Complex multi-tech setups benefit from upfront reconnaissance
- Claude can infer obvious environment details from project files

### 10. CONDITIONAL: Strategic Checkpoints

**Include mid-workflow validation for long-running/complex tasks**:
- Assess progress after initial implementation
- Identify stalled or blocked workstreams
- Gather additional intelligence if gaps discovered
- Course-correct if approach insufficient

**When to Apply**:
- **Long Tasks**: Duration exceeds 10-15 minutes
- **Signs of Failure**: Multiple attempts required, approach not working
- **Complex Dependencies**: Multi-phase implementation with coordination needs
- **User Request**: Explicit mid-workflow review requested

**Why Conditional**:
- Simple/short tasks complete before checkpoint is useful
- Complex tasks benefit from mid-flight course correction
- Claude can assess when reassessment is needed

**Checkpoint Actions**:
- Review completed vs blocked workstreams
- Identify missing information or incorrect assumptions
- Spawn additional research if gaps found
- Adjust strategy or consult user for major pivots

### 11. CONDITIONAL: Reflection and Self-Evaluation

**Include self-evaluation for significant implementations**:
- Review implementation against requirements
- Assess code quality, error handling, performance
- Identify improvements and remaining risks
- Provide honest assessment before user presentation

**When to Apply**:
- **Significant Implementations**: Multi-file changes, new features, refactorings
- **Quality-Critical**: Production code, security changes, data operations
- **Learning Opportunities**: Novel approaches, complex solutions

**Why Conditional**:
- Trivial changes (typo fixes, simple edits) don't need formal reflection
- Significant work benefits from quality self-assessment
- Claude can provide honest evaluation without elaborate protocol

### 12. CONDITIONAL: Predictive Intelligence

**Perform upfront task analysis for complex/long-duration work**:
- Quick codebase scan for relevant patterns and technologies
- Classify task category and assess risk level
- Predict key files and integration points
- Estimate complexity (file count, duration, phases needed)
- Recommend research depth and workstream opportunities

**When to Apply**:
- **Complex Tasks**: 30+ minute duration estimate
- **Unfamiliar Codebases**: First-time work with project
- **Multi-Domain Work**: Spans multiple technologies or areas
- **High-Risk Operations**: Needs careful planning upfront

**Why Conditional**:
- Simple tasks (quick fixes, single-file changes) don't need elaborate prediction
- Complex tasks benefit from upfront analysis to guide research focus
- Claude can assess task complexity and plan accordingly

**Predictive Analysis Example**:
```javascript
Task({
  prompt: "ULTRATHINK: Analyze task scope and recommend strategy.

          EARLY INTELLIGENCE (using existing tools):

          1. Quick Codebase Scan:
             - Use Glob to find relevant file patterns
             - Identify key technologies from package.json, requirements.txt
             - Detect project structure (src/, lib/, app/ directories)

          2. Task Category Detection:
             - Analyze user request keywords
             - Map to categories: ML/AI, Security, Database, Infrastructure, etc.
             - Assess risk level: low/medium/high/critical

          3. Key File Prediction:
             - Based on task type, predict critical files
             - Identify likely integration points
             - Anticipate configuration needs

          4. Complexity Assessment:
             - File count estimate
             - Time estimate (<10 min / 10-30 min / 30+ min)
             - Multi-phase requirement

          5. Strategy Recommendation:
             - Research depth (1-3 rounds needed?)
             - Exploration thoroughness (quick/medium/thorough)
             - Parallel workstream opportunities

          Report: Predictive analysis to guide Phase 1 research focus",
  subagent_type: "Explore",
  description: "Predictive intelligence"
})
```

### Conditional Patterns Summary

**5 Core Requirements (Mandatory for All Tasks)**:
1. ✅ **Subagent Delegation**: Use Task tool for multi-step work
2. ✅ **Parallel Execution**: Spawn all independent tasks in ONE message
3. ✅ **ULTRATHINK Keyword**: Start EVERY Task prompt with "ULTRATHINK: "
4. ✅ **Fresh Context**: Use Context7/WebSearch for current documentation
5. ✅ **Final Validation**: Verify completeness before marking tasks complete

**7 Conditional Patterns (Apply Based on Context)**:
6. ✅ **Robust Error Recovery**: For standard/complex tasks with error potential
7. ✅ **Risk-Aware Categorization**: For high-risk operations (database, security, production)
8. ✅ **Iterative Research**: For research-intensive, unfamiliar technologies
9. ✅ **Environment Observation**: For multi-tech projects, unknown environments
10. ✅ **Strategic Checkpoints**: For long-running tasks (>10-15 min)
11. ✅ **Reflection & Self-Evaluation**: For significant implementations
12. ✅ **Predictive Intelligence**: For complex tasks (30+ min estimate)

**Pattern Selection**:
- **Simple Tasks** (<5 min): Apply core 5 only
- **Standard Tasks** (5-30 min): Apply core 5 + 2-3 conditional patterns
- **Complex Tasks** (30+ min): Apply core 5 + most/all conditional patterns

**Result**: Balanced framework with mandatory core for consistency + conditional patterns for context-appropriate quality

</operational_excellence>

## Command-Specific Requirements

<command_requirements>
**How workflow and setup commands apply the 5 core requirements + conditional patterns.**

### Workflow Command (`/guild`) Requirements

**Core Requirements (Apply to ALL workflows)**:
1. ✅ **Subagent Delegation**: ALL multi-step work via Task tool
2. ✅ **Parallel Execution**: ALL independent tasks in ONE message per phase
3. ✅ **ULTRATHINK Keyword**: Start EVERY Task prompt with "ULTRATHINK: "
4. ✅ **Fresh Context**: Use Context7/WebSearch for current documentation
5. ✅ **Final Validation**: Pre-completion verification before reporting to user

**Conditional Patterns (Apply Based on Task Context)**:
6. ✅ **Error Recovery**: Embed recovery guidance in Task prompts for complex implementations
7. ✅ **Risk Categorization**: Classify task category and apply safety protocols for high-risk operations
8. ✅ **Iterative Research**: Multi-round research for complex/unfamiliar topics
9. ✅ **Environment Observation**: Reconnaissance for multi-tech projects
10. ✅ **Strategic Checkpoints**: Mid-workflow validation for long tasks (>10-15 min)
11. ✅ **Reflection & Self-Evaluation**: Quality assessment for significant implementations
12. ✅ **Predictive Intelligence**: Upfront analysis for complex tasks (30+ min estimate)

### Setup Command (`/guild:setup`) Requirements

**Core Requirements (Apply to Setup)**:
1. ✅ **Subagent Delegation**: ALL discovery via Task tool
2. ✅ **Parallel Execution**: ALL discovery tasks in ONE message
3. ✅ **ULTRATHINK Keyword**: Start EVERY Task prompt with "ULTRATHINK: "
4. ✅ **Fresh Context**: Context7/WebSearch for library documentation

**Conditional Patterns (Apply to Setup)**:
9. ✅ **Environment Observation**: Tech stack detection and reconnaissance

**Setup Does NOT Require**:
- ❌ Final Validation (setup doesn't execute - user reviews generated resources)
- ❌ Error Recovery (discovery phase, not execution)
- ❌ Risk Categorization (setup doesn't execute risky operations)
- ❌ Iterative Research (single-round Context7 sufficient for library docs)
- ❌ Strategic Checkpoints (setup is streamlined discovery)
- ❌ Reflection & Self-Evaluation (no implementation to evaluate)
- ❌ Predictive Intelligence (setup is well-defined discovery pattern)

### Requirements Summary by Command

**Workflow Command**:
- **Core 5**: All mandatory
- **Conditional 7**: Apply based on task complexity and context
- Total: 5 mandatory + 0-7 conditional (context-dependent)

**Setup Command**:
- **Core 4**: Apply (skip Final Validation - no execution to validate)
- **Conditional 1**: Environment Observation only
- Total: 4 mandatory + 1 conditional

</command_requirements>

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

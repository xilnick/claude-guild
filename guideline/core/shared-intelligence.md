# Shared Intelligence

## CRITICAL: Mandatory Execution Architecture

<mandatory_execution_patterns>
**THIS IS NOT ADVISORY - THESE ARE MANDATORY**

Guild commands enforce core execution requirements for optimal performance, context efficiency, and reasoning quality.

### MANDATORY: Subagent Delegation (Context Reduction)

**ALWAYS use Task tool to reduce context usage**:
```javascript
// ✅ CORRECT: Multi-step work via Task tool
Task({
  prompt: "ULTRATHINK: Analyze codebase for patterns. Use Glob/Grep/Read...",
  subagent_type: "Explore",
  description: "Codebase analysis"
})

// ❌ INCORRECT: Multi-step work in main context
Read package.json
Grep for patterns
Read file1.js
Read file2.js
Grep for more patterns
// This bloats main context - use Task tool instead
```

**When Direct Tools Are Acceptable**:
- Single file operations (one Read, one Write, one Edit)
- Simple queries (single Grep, single Glob)
- Trivial edits (formatting, typo fixes)

### MANDATORY: Parallel Execution (Performance + Context)

**ALWAYS spawn ALL independent tasks in ONE message**:
```javascript
// ✅ CORRECT: All parallel tasks in ONE message with ULTRATHINK
Task({
  prompt: "ULTRATHINK: Research React docs via Context7...",
  subagent_type: "general-purpose",
  description: "React docs"
})
Task({
  prompt: "ULTRATHINK: Analyze codebase for React patterns...",
  subagent_type: "Explore",
  description: "Codebase analysis"
})
Task({
  prompt: "ULTRATHINK: Search best practices via WebSearch...",
  subagent_type: "general-purpose",
  description: "Best practices"
})

// After research completes, optionally use Plan agent for complex tasks
Task({
  prompt: "ULTRATHINK: Based on research, develop implementation plan.
          Present plan for user approval.",
  subagent_type: "Plan",
  description: "Implementation planning"
})

// ❌ INCORRECT: Sequential tasks across messages
Message 1: Task({ prompt: "Research..." })
Message 2: Task({ prompt: "More research..." })
Message 3: Task({ prompt: "Even more..." })
```

### MANDATORY: Ultra-Deep Reasoning (ULTRATHINK Keyword)

**ALWAYS start EVERY Task prompt with "ULTRATHINK: "**:
```javascript
// ✅ CORRECT: ULTRATHINK keyword in prompt
Task({
  prompt: "ULTRATHINK: Complex analysis task...",
  subagent_type: "Explore",
  description: "Analysis"
})

// ❌ INCORRECT: Missing ULTRATHINK keyword
Task({
  prompt: "Complex analysis task...",
  subagent_type: "Explore",
  description: "Analysis"
  // Missing "ULTRATHINK: " at start of prompt - FORBIDDEN
})
```

**Why Mandatory**:
- Enables deep reasoning for better decisions
- Improves problem-solving and planning quality
- Reduces errors through comprehensive analysis
- Ensures consistent reasoning depth across all agents

### MANDATORY: Fresh Context Maintenance

**ALWAYS research fresh documentation and best practices**:
```javascript
// ✅ CORRECT: Fresh research via Context7/WebSearch with ULTRATHINK
Task({
  prompt: "ULTRATHINK: Research React latest documentation.
          1. Use Context7: mcp__context7__resolve-library-id 'react'
          2. Fetch docs: mcp__context7__get-library-docs '/facebook/react'
          3. Get version-specific patterns
          Report: Current React best practices",
  subagent_type: "general-purpose",
  description: "React documentation"
})

// ❌ INCORRECT: Relying on stale knowledge
Task({
  prompt: "Implement React component using hooks.
          (Relying on training data about React)",
  // Missing ULTRATHINK keyword + fresh documentation research
})
```

**Fresh Context Sources**:
- **Context7**: Library documentation (latest versions)
- **WebSearch**: Current best practices and patterns
- **WebFetch**: Specific documentation pages
- **Project files**: Actual codebase patterns

### Complete Mandatory Pattern

**ALL FOUR REQUIREMENTS ENFORCED**:
```javascript
// Phase 1: Research (ALL in ONE message)
Task({
  prompt: "ULTRATHINK: Research library documentation.
          Use Context7 to fetch latest docs.
          Report findings for implementation.",
  subagent_type: "general-purpose",
  description: "Library docs"
})
Task({
  prompt: "ULTRATHINK: Analyze codebase patterns.
          Use Explore tools to find usage.
          Report current patterns.",
  subagent_type: "Explore",
  description: "Codebase"
})
Task({
  prompt: "ULTRATHINK: Search for best practices 2025.
          Use WebSearch for latest approaches.
          Report recommendations.",
  subagent_type: "general-purpose",
  description: "Best practices"
})
// ✅ Requirements 1, 2, 3, 4 enforced: Subagent delegation + Parallel + ULTRATHINK + Fresh context

// Phase 2: Planning (for complex tasks - after research complete)
Task({
  prompt: "ULTRATHINK: Synthesize research findings and develop implementation plan.
          Break down into independent workstreams.
          Present plan for user approval.",
  subagent_type: "Plan",
  description: "Implementation planning"
})

// Phase 3: Implementation (after plan approved - ALL in ONE message)
Task({
  prompt: "ULTRATHINK: Implement workstream 1...",
  subagent_type: "general-purpose",
  description: "Workstream 1"
})
Task({
  prompt: "ULTRATHINK: Implement workstream 2...",
  subagent_type: "general-purpose",
  description: "Workstream 2"
})
```

### Enforcement Checklist

Before proceeding in workflow/setup commands:

- ✅ Multi-step work delegated to Task tool (not direct tools)
- ✅ ALL parallel tasks spawned in ONE message
- ✅ EVERY Task prompt starts with "ULTRATHINK: "
- ✅ Fresh context obtained via Context7/WebSearch
- ✅ Wait for ALL tasks to complete before proceeding

### Common Violations (FORBIDDEN)

```javascript
// ❌ Violation 1: Using direct tools for multi-step work
Read file1
Read file2
Grep for patterns
Read file3
// Should use Task tool with Explore subagent

// ❌ Violation 2: Sequential Task invocations
Message 1: Task(...)
Message 2: Task(...)
// Should spawn all in ONE message

// ❌ Violation 3: Missing ULTRATHINK keyword
Task({ prompt: "Complex task...", subagent_type: "Explore" })
// Should be: prompt: "ULTRATHINK: Complex task..."

// ❌ Violation 4: Skipping fresh research
// "I'll implement using React hooks from my training"
// Should research latest React docs via Context7
```

</mandatory_execution_patterns>

## Core Principles

**Advisory Over Prescriptive**: Provide helpful patterns and guidance, not rigid mandates. Trust Claude Code's capabilities.

**Skills as Knowledge**: Skills define project-specific patterns (WHAT/WHEN), not execution protocols (HOW).

**Resource-Based Selection**: Present available skills and agents, guide selection, trust intelligent choice.

**EXCEPTION**: Parallel execution is MANDATORY, not advisory (see above).

## Skill System Patterns

### Official Claude Code SKILL.md Format
<skill_official_format>
**Guild follows official Claude Code SKILL.md specification** (see docs.claude.com for format details).

**Guild Conventions**:
- **Naming**: Gerund form ("working-with-react", "processing-api-requests", "testing-express-endpoints")
- **Location**: `.claude/skills/guild/[category]/SKILL.md`
- **Size**: Keep under 500 lines; use REFERENCE.md, EXAMPLES.md, DOCS.md for detailed content
- **Structure**: Progressive loading (metadata → instructions → resources)
</skill_official_format>

### Skill Metadata Structure
<skill_metadata_pattern>
**Official Claude Code Format with Guild Enhancements**:
```yaml
---
# ============================================================================
# CLAUDE CODE NATIVE FIELDS (Official format - REQUIRED)
# ============================================================================
name: working-with-react           # Gerund form, lowercase-hyphenated
description: "Use when working with React components in this project. Apply for component architecture, hooks usage, state management patterns, and React best practices. Includes project-specific React conventions and anti-patterns."

# ============================================================================
# CLAUDE CODE OPTIONAL FIELDS
# ============================================================================
model: inherit                        # Options: inherit, sonnet, opus, haiku
tools: Read, Write, Edit, Grep, Glob  # Comma-separated list to restrict tools

# ============================================================================
# GUILD ENHANCEMENT FIELDS (Optional - enable advanced selection)
# ============================================================================
category: frontend-patterns           # Pattern classification
applicability:
  file_patterns: ["**/*.tsx", "**/*.jsx", "**/components/**"]
  technologies: ["react", "react-dom", "next.js"]
  task_types: ["component-creation", "hooks", "state-management"]
related_skills: ["testing-react-components", "working-with-typescript"]
related_agents: ["frontend-specialist"]
---
```

**Guild Enhancements** (beyond official Claude Code fields):
- **category**: Pattern classification (frontend-patterns, backend-integration, testing-patterns, library-specific)
- **applicability**: Context matching (file patterns, technologies, task types)
- **related_skills**: Links to complementary skills
- **related_agents**: Links to relevant specialist agents

**Note**: Official fields (name, description, model, tools) follow standard SKILL.md format.

**Tech Stack Skill Types**:
- **Library Skills**: "working-with-react", "working-with-express", "working-with-prisma"
- **Pattern Skills**: "processing-api-requests", "managing-application-state"
- **Testing Skills**: "testing-express-endpoints", "testing-react-components"

**Compatibility**: Guild skills are valid Claude Code skills - they work with native skill discovery while providing enhanced Guild selection capabilities.
</skill_metadata_pattern>

### Progressive Loading Architecture
<progressive_loading_pattern>
**Guild uses official Claude Code 3-tier progressive loading** (metadata → instructions → resources).

**Guild Implementation**:
- **Level 1**: YAML frontmatter with Guild enhancement fields (category, applicability, related_skills)
- **Level 2**: SKILL.md content under 500 lines (Pattern Description, Project Conventions, Common Pitfalls)
- **Level 3**: Separate files (REFERENCE.md, EXAMPLES.md, DOCS.md from Context7, scripts/)

**Key Practice**: Move detailed content to Level 3 files, keep SKILL.md scannable.
</progressive_loading_pattern>

### Skill Content Structure
<skill_content_pattern>
**Lightweight Pattern Definition (SKILL.md - Level 2)**:
```markdown
## Pattern Description

**What**: [Brief description of the pattern or library]

**When**: [Clear guidance on when this skill applies]

**Context**: [Project-specific usage contexts]

## Project Conventions

### [Convention Category 1]
- [Specific convention discovered in project]
- [Rationale and usage context]

### [Convention Category 2]
- [Specific pattern or approach]
- [Integration points]

## Common Pitfalls

### ❌ [Anti-Pattern Name]
**Problem**: [What the anti-pattern is]
**Why It Fails**: [Explanation]
**Better Approach**: [Recommended alternative from project or docs]

## Related Resources

### Related Skills
- **[skill-name]**: [Relationship description]

### Related Agents
- **[agent-name]**: [When to involve]

### Documentation
- See `DOCS.md` for library documentation and API references
- See `REFERENCE.md` for detailed specifications
- See `EXAMPLES.md` for code examples and patterns

## Validation (Optional)

**For fragile operations, use validation loops**:
1. Execute operation
2. Run validator script
3. If errors, fix and repeat
4. Confirm success
```

**Content Guidelines**:
- Focus on WHAT and WHEN, not HOW (no step-by-step instructions)
- Document project-specific conventions discovered during setup
- Highlight anti-patterns found in codebase or documentation
- Link to Level 3 resources for details
- Keep SKILL.md scannable and under 500 lines
- Use validation loops for error-prone operations
</skill_content_pattern>

### Tech Stack Skills Integration
<tech_stack_skills_pattern>
**Library and Framework-Specific Skills**:

**Discovery Process**:
1. **Tech Stack Detection**: Analyze package.json, requirements.txt, go.mod, Gemfile, etc.
2. **Major Library Identification**: Extract primary frameworks and libraries
3. **Version Detection**: Identify version constraints
4. **Skill Planning**: Plan library-specific skills (e.g., "working-with-react", "working-with-express")

**Documentation Integration Protocol**:

**For Each Library Skill**:
```bash
# Step 1: Create SKILL.md with metadata and project conventions
# (Level 1 metadata + Level 2 instructions)

# Step 2: Fetch library documentation (Level 3 resources)
# Use Context7 for comprehensive documentation
mcp__context7__resolve-library-id "react"
# Returns: /facebook/react

mcp__context7__get-library-docs "/facebook/react" topic="hooks"
# Returns: Up-to-date hooks documentation

# Step 3: Create DOCS.md with documentation references
# Save fetched documentation to .claude/skills/guild/[category]/DOCS.md

# Step 4: Optionally use WebSearch for latest patterns
WebSearch "React hooks best practices 2025"

# Step 5: Create REFERENCE.md with API specs
# Organize API references, migration guides, etc.
```

**Library Skill Structure**:
```
.claude/skills/guild/frontend-patterns/
├── SKILL.md              # Main skill (metadata + instructions)
├── DOCS.md               # Library documentation (Context7)
├── REFERENCE.md          # API references and specs
└── EXAMPLES.md           # Code examples and patterns
```

**DOCS.md Content Pattern**:
```markdown
# React Documentation

**Library**: React
**Version**: ^18.2.0 (detected from package.json)
**Last Updated**: [timestamp]

## Core Concepts
[Fetched from Context7: /facebook/react]

## Hooks API
[Fetched from Context7: /facebook/react, topic="hooks"]

## Best Practices
[Fetched from WebSearch: "React hooks best practices"]

## Migration Guides
[Version-specific migration information]
```

**Tech Stack Skill Types**:
- **Frontend Libraries**: working-with-react, working-with-vue, working-with-svelte
- **Backend Frameworks**: working-with-express, working-with-fastify, working-with-nestjs
- **ORMs/Databases**: working-with-prisma, working-with-typeorm, working-with-mongoose
- **Testing Tools**: testing-with-jest, testing-with-vitest, testing-with-playwright
- **Build Tools**: building-with-vite, building-with-webpack, building-with-esbuild
</tech_stack_skills_pattern>

### Skill Discovery Protocol
<skill_discovery_guidance>
**When Setup Creates Skills**:
1. **Pattern Recognition**: Identify repeatable procedures in codebase
2. **Convention Extraction**: Document project-specific approaches
3. **Tech Stack Analysis**: Detect libraries and frameworks (for tech stack skills)
4. **Documentation Fetching**: Use Context7 and WebSearch for library skills
5. **Metadata Generation**: Create rich frontmatter for discoverability
6. **Relationship Mapping**: Link skills to related skills and agents

**Skill Creation Criteria**:
- Repeatable patterns worth documenting (pattern skills)
- Project-specific conventions to preserve (pattern skills)
- Major libraries/frameworks in use (tech stack skills with documentation)
- Integration protocols to standardize
- Testing patterns to replicate
- Quality standards to maintain
</skill_discovery_guidance>

## Agent Delegation Guidance

<agent_delegation_guidance>
**Automatic Agent Matching**:

Instead of manually selecting agents, **delegate the agent selection to Claude Code**:

```javascript
// ✅ CORRECT: Ask Claude Code to find and run matching agents
Task({
  prompt: "ULTRATHINK: Review available Guild agents and identify specialists matching this task: [describe task domain/requirements]. If matching agents exist, delegate appropriate workstreams to those agents. Task: [full task description]",
  subagent_type: "general-purpose",
  description: "Agent matching and delegation"
})

// Example for frontend work:
Task({
  prompt: "ULTRATHINK: Review available Guild agents for frontend/React expertise. If frontend specialists exist, delegate component implementation to them. Otherwise use built-in capabilities. Task: Build user authentication UI components.",
  subagent_type: "general-purpose",
  description: "Frontend delegation"
})
```

**Agent Selection Strategy**:
1. **Ask, don't tell**: Request agent matching rather than manually selecting
2. **Domain-first**: Describe task domain (frontend, backend, testing, etc.)
3. **Fallback ready**: If no matching agents, proceed with built-in capabilities
4. **Delegate deeply**: Let matching agents handle their domain completely

**When to Request Agent Matching**:
- Domain-specific work (frontend, backend, database, API, testing)
- Complex multi-step coordination within a domain
- Work benefits from project-specific knowledge
- Task aligns with established agent specializations
</agent_delegation_guidance>

### Agent Creation Guidance
<agent_creation_patterns>
**Setup Command - Persistent Agents**:
- Create based on discovered project patterns
- Save to `.claude/agents/guild/`
- Include references to relevant skills
- Embed project-specific context
- Provide clear expertise boundaries

**Workflow Command - Ephemeral Specialists**:
- Create via Task tool when needed
- Task-specific, temporary
- Not saved to filesystem
- Use when no existing resource matches
</agent_creation_patterns>

### Optimization Recommendations
<optimization_guidance>
**Suggested Practices**:
- Batch independent tool calls for efficiency
- Consider parallel execution for independent operations
- Balance delegation overhead against task complexity
- When using Task tool: MANDATORY "ULTRATHINK: " keyword at start of every prompt

**Resource Efficiency**:
- Avoid redundant operations
- Delegate to agents for domain-specific work
- Trust native skill discovery and orchestration capabilities
</optimization_guidance>

## File Creation Guidelines

### Persistence Rules
<file_creation_guidance>
**Create/Modify (Codebase Files)**:
- Source code (.js, .ts, .py, .java, etc.)
- Configuration files (package.json, tsconfig.json, .env, etc.)
- Build files (Makefile, Dockerfile, etc.)
- Test files (*.test.js, *.spec.ts, etc.)
- Skills (`.claude/skills/guild/` from setup)
- Agents (`.claude/agents/guild/` from setup)

**Display Only (Never Persist)**:
- Analysis reports and verification summaries
- Documentation (unless explicitly requested)
- Working notes and scratchpads
- Examples and sample code
- Intermediate artifacts
- Discovery results and recommendations

**Presentation**:
- Display analysis and reports in conversation
- Present findings to user directly
- Keep working state in memory
- Clear ephemeral data after completion
</file_creation_guidance>

## Task Tool Usage Patterns

### When to Use Task Tool
<task_tool_guidance>
**Consider Task Tool for**:
- Complex multi-step coordination
- Specialized domain expertise needed
- Multiple independent workstreams
- Deep reasoning requirements
- Existing specialist agent match

**Direct Execution May Be Better for**:
- Simple file operations
- Straightforward edits
- Quick searches or reads
- Tasks with complete context already
- Operations where overhead exceeds complexity
</task_tool_guidance>

### Built-in Claude Code Agents (subagent_type)
<builtin_agents_reference>
**Claude Code provides five specialized built-in agents** accessible via the Task tool's `subagent_type` parameter.

#### 1. general-purpose Agent
**Capabilities**:
- General research, implementation, and multi-step tasks
- Full tool access (Read, Write, Edit, Glob, Grep, Bash, WebFetch, WebSearch, etc.)
- Autonomous problem-solving and execution
- Documentation research and integration work

**When to Use**:
- Documentation research (Context7, WebSearch, WebFetch)
- Implementation of features or components
- Verification and testing tasks
- Any multi-step work not specialized below

**Example**:
```javascript
Task({
  prompt: "ULTRATHINK: Research React 18 documentation via Context7.
          Use mcp__context7__resolve-library-id 'react'
          Then mcp__context7__get-library-docs for hooks patterns.
          Report: Latest hooks best practices with version context.",
  subagent_type: "general-purpose",
  description: "React docs research"
})
```

#### 2. Explore Agent
**Capabilities**:
- Fast codebase exploration and discovery
- File pattern matching (Glob)
- Code searching (Grep)
- File reading and analysis (Read, Bash)
- Quick codebase understanding

**When to Use**:
- Finding files by patterns (`**/*.tsx`, `src/components/**`)
- Searching code for keywords or patterns
- Discovering codebase structure and organization
- Identifying usage patterns across files
- Quick codebase questions ("how do API endpoints work?")

**Thoroughness Levels**:
- `"quick"`: Basic searches, first-pass analysis
- `"medium"`: Moderate exploration, check multiple locations
- `"very thorough"`: Comprehensive analysis, multiple naming conventions

**Example**:
```javascript
Task({
  prompt: "ULTRATHINK: Find all React component files in the project.
          Search for: component definitions, hooks usage, prop patterns.
          Use thoroughness: very thorough
          Report: Component architecture and patterns found.",
  subagent_type: "Explore",
  description: "Component discovery"
})
```

#### 3. Plan Agent
**Capabilities**:
- Fast codebase exploration (Glob, Grep, Read, Bash)
- Strategic planning and task breakdown
- Implementation approach design
- Resource identification

**When to Use**:
- Complex or unclear task requirements
- Multi-step implementation planning
- Breaking down large features into workstreams
- Identifying approach before implementation
- When user needs to approve strategy first

**Thoroughness Levels** (same as Explore):
- `"quick"`: Basic planning
- `"medium"`: Moderate analysis
- `"very thorough"`: Comprehensive planning

**Example**:
```javascript
Task({
  prompt: "ULTRATHINK: Analyze codebase and plan implementation of user authentication.
          Explore: existing auth patterns, database models, API structure.
          Consider: OAuth, JWT, session management approaches.
          Use thoroughness: medium
          Develop: step-by-step implementation plan with workstreams.
          Present: plan for user approval before implementation.",
  subagent_type: "Plan",
  description: "Auth implementation planning"
})
```

**Note**: Plan agent uses `ExitPlanMode` tool to present plan and await user approval before proceeding to implementation.

#### 4. statusline-setup Agent
**Capabilities**:
- Configure Claude Code status line settings
- Limited tool access: Read, Edit only

**When to Use**:
- Configuring user's status line display
- Modifying status line preferences

**Example**:
```javascript
Task({
  prompt: "ULTRATHINK: Configure status line to show current git branch and file path.",
  subagent_type: "statusline-setup",
  description: "Status line config"
})
```

#### 5. output-style-setup Agent
**Capabilities**:
- Create Claude Code output styles
- Tool access: Read, Write, Edit, Glob, Grep

**When to Use**:
- Creating custom output formatting styles
- Setting up output preferences

**Example**:
```javascript
Task({
  prompt: "ULTRATHINK: Create output style with syntax highlighting for code blocks.",
  subagent_type: "output-style-setup",
  description: "Output style setup"
})
```

### Agent Selection Decision Tree

```
┌─ Need to explore codebase? ────────────────→ Explore
│
├─ Need to plan implementation? ─────────────→ Plan
│
├─ Need documentation/implementation? ───────→ general-purpose
│
├─ Need status line configuration? ──────────→ statusline-setup
│
└─ Need output style configuration? ─────────→ output-style-setup
```

### Combined Agent Usage Patterns

**Pattern 1: Research + Plan + Implement**
```javascript
// Phase 1: Parallel research (ONE message)
Task({
  prompt: "ULTRATHINK: Explore codebase for auth patterns...",
  subagent_type: "Explore",
  description: "Codebase exploration"
})
Task({
  prompt: "ULTRATHINK: Research OAuth 2.0 docs via Context7...",
  subagent_type: "general-purpose",
  description: "OAuth research"
})
Task({
  prompt: "ULTRATHINK: Search best practices 2025...",
  subagent_type: "general-purpose",
  description: "Best practices"
})

// Phase 2: Planning (after research complete)
Task({
  prompt: "ULTRATHINK: Based on research findings, develop implementation plan.
          Present plan for user approval before proceeding.",
  subagent_type: "Plan",
  description: "Implementation planning"
})

// Phase 3: Implementation (after plan approved)
Task({
  prompt: "ULTRATHINK: Implement OAuth provider integration...",
  subagent_type: "general-purpose",
  description: "OAuth provider"
})
Task({
  prompt: "ULTRATHINK: Implement token management...",
  subagent_type: "general-purpose",
  description: "Token management"
})
```

**Pattern 2: Quick Exploration + Direct Implementation**
```javascript
// For simpler tasks, skip planning phase
Task({
  prompt: "ULTRATHINK: Find all API endpoint files...",
  subagent_type: "Explore",
  description: "API discovery"
})
Task({
  prompt: "ULTRATHINK: Add rate limiting middleware...",
  subagent_type: "general-purpose",
  description: "Rate limiting"
})
```

### Mandatory ULTRATHINK Requirement

**EVERY Task prompt MUST start with "ULTRATHINK: "** regardless of subagent_type:

```javascript
// ✅ CORRECT
Task({
  prompt: "ULTRATHINK: Explore codebase...",
  subagent_type: "Explore",
  description: "Exploration"
})

// ❌ INCORRECT - Missing ULTRATHINK
Task({
  prompt: "Explore codebase...",
  subagent_type: "Explore",
  description: "Exploration"
})
```

</builtin_agents_reference>

### Ephemeral Specialist Pattern (Optional)
<ephemeral_specialist_pattern>
**When Creating Temporary Specialists via Task Tool**:

```
You are a [task-specific-expertise] specialist for [project-type].

Project Context:
- Technologies: [discovered-stack]
- Patterns: [identified-conventions]
- Relevant Skills: [skill-references]

Your Task:
[Specific objectives and requirements]

Success Criteria:
[Measurable outcomes]

Constraints:
- Only create/modify codebase files (source, config, tests)
- Display analysis in response, don't persist
- Apply parallel execution where beneficial
```

**Key Points**:
- Keep prompts focused and actionable
- Include relevant project context
- Specify clear success criteria
- Consider ultrathink for complex reasoning
</ephemeral_specialist_pattern>

## Quality and Verification

### Verification Practices
<verification_guidance>
**Recommended Checks**:
- Functional correctness against requirements
- Integration and component compatibility
- Edge cases and error handling
- Dependencies properly managed
- Performance meets expectations

**Gap Detection Approach**:
- Review completed work systematically
- Identify missing components or incomplete implementations
- Prioritize based on criticality
- Address gaps appropriately
- Confirm with user

**Quality Standards**:
- Code quality and maintainability
- Proper testing coverage
- Documentation when appropriate
- User approval (final authority)
</verification_guidance>

## Tool Runtime Awareness

### MCP Tool Performance Profiles

<tool_performance_profiles>
**Performance-aware tool selection for optimal iteration speed:**

#### Fast Operations (<1s) - Prefer for iteration-heavy workflows

**File Operations**:
- `Read` (single file, <1000 lines)
- `Write` (files <10KB)
- `Edit` (targeted replacements, single change)
- `Glob` (simple patterns, small directories <100 files)

**Quick Commands**:
- `Bash` (simple: ls, pwd, echo, cat single file)

#### Medium Operations (1-5s) - Acceptable for routine tasks

**File Operations**:
- `Read` (multiple files 2-5, or large files with offset/limit)
- `Edit` (multiple replacements in same file)
- `Write` (files 10-100KB)

**Search Operations**:
- `Grep` (moderate codebase <1000 files, simple patterns)
- `Glob` (complex patterns, medium directories 100-500 files)

**Commands**:
- `Bash` (moderate: grep, find with limits, simple scripts)

#### Slow Operations (5-30s) - Use strategically, batch when possible

**Search & Research**:
- `Grep` (large codebase >1000 files, complex regex, no type filter)
- `WebSearch` (requires network + processing time)
- `Context7` (documentation fetching, depends on library size)

**File Operations**:
- `Glob` (very large directories >500 files, recursive patterns)
- `Read` (many files >5, or very large files >10000 lines)

**Commands**:
- `Bash` (complex operations: recursive find, package listing, environment inspection)
- `Task` (spawning subagents has overhead ~5-10s)

#### Very Slow Operations (30s+) - Reserve for critical needs

**Build & Test**:
- `Bash` (compilation: npm build, cargo build, go build)
- `Bash` (testing: npm test, pytest, go test)
- `Bash` (package installation: npm install, pip install, gem install)

**Automation**:
- `Playwright` browser automation (30s-2min per interaction sequence)
- `Task` (complex multi-step subagent work: 1-5min depending on complexity)

**Long-Running**:
- Any operation requiring `run_in_background` (ML training, large data processing, deployments)

### Performance Optimization Guidelines

<performance_optimization>

#### 1. Iteration Speed Optimization

**Fast Feedback Cycles**:
- Prefer `Edit` over `Write` for file modifications (faster, preserves file metadata)
- Use `Grep` with `head_limit` parameter to avoid processing huge result sets
- Use `Grep` with `type` parameter (e.g., `type: "js"`) to filter file types efficiently
- Check if information already exists in context before re-reading files

**Example**:
```javascript
// ✅ FAST: Targeted search with limits
Grep({ pattern: "function handleAuth", type: "ts", head_limit: 10 })

// ❌ SLOW: Unfiltered search across all files
Grep({ pattern: "function", output_mode: "content" }) // Could return thousands of matches
```

#### 2. Batching Strategy

**Combine Operations When Possible**:
- Read multiple related files in one message (max 5 per message)
- Chain Bash commands with `&&` to avoid multiple tool calls
- Batch independent Grep/Glob operations in parallel

**Example**:
```javascript
// ✅ EFFICIENT: Batch file reads
Read({ file_path: "src/auth.ts" })
Read({ file_path: "src/config.ts" })
Read({ file_path: "src/types.ts" })
// All in ONE message

// ❌ INEFFICIENT: Sequential across messages
Message 1: Read({ file_path: "src/auth.ts" })
Message 2: Read({ file_path: "src/config.ts" })
Message 3: Read({ file_path: "src/types.ts" })
```

#### 3. Strategic Use of Slow Operations

**Minimize Expensive Calls**:
- Use `WebSearch` sparingly - check Context7 or project files first
- Avoid redundant `Context7` calls for same library
- Consider if `Task` overhead (5-10s) justifies delegation vs direct execution

**Decision Tree**:
```
Need information?
├─ Already in context? → Use directly (0s)
├─ In project files? → Read (fast: <1s)
├─ Need to search code? → Grep with type filter (medium: 1-5s)
├─ Need library docs? → Context7 first, WebSearch fallback (slow: 5-30s)
└─ Need web research? → WebSearch (slow: 5-30s) - use strategically

Need to modify code?
├─ Targeted change (single location)? → Edit (fast: <1s)
├─ New small file (<100 lines)? → Write (fast: <1s)
├─ Multiple related changes? → Multiple Edits in one message (medium: 1-5s)
└─ Complex refactoring (many files)? → Task delegation (slow: 30s-5min)

Need to execute?
├─ Simple command (ls, pwd, cat)? → Bash (fast/medium: <5s)
├─ Long-running (>30s)? → Bash with run_in_background (slow but non-blocking)
└─ Multi-step coordinated? → Task tool (slow: 30s-5min but necessary)
```

#### 4. Background Execution for Long Operations

**Use `run_in_background` for**:
- Compilation (npm build, cargo build)
- Test suites (npm test, pytest)
- Package installations (npm install, pip install)
- Any operation that might exceed 30 seconds

**Monitoring Pattern**:
```javascript
// Start long operation in background
Bash({
  command: "npm run build",
  run_in_background: true,
  description: "Build project in background"
})

// Later: Check progress
BashOutput({ bash_id: "[id-from-start]" })

// Continue other work while building...
```

#### 5. Context Reuse

**Avoid Redundant Operations**:
- Before reading a file, check if it's already in conversation context
- Reference files by `path:line` instead of re-reading
- Cache research findings in Phase 1 for use in later phases
- Use subagent delegation to keep main context clean

**Example**:
```
❌ WASTEFUL:
Read src/auth.ts (earlier in conversation)
... do some work ...
Read src/auth.ts (again - already in context!)

✅ EFFICIENT:
Read src/auth.ts (once)
... reference by "src/auth.ts:42" in subsequent discussion ...
```

</performance_optimization>

### Tool Selection Cheat Sheet

<tool_selection_quick_reference>

| Task | Fastest Tool | Alternative | When to Use Alternative |
|------|-------------|-------------|------------------------|
| **Read single file** | `Read` (<1s) | `Bash cat` (1s) | File >10000 lines, use Read with offset/limit |
| **Search code** | `Grep` with type filter (1-5s) | `Bash rg` (1-5s) | When Grep unavailable or need advanced flags |
| **Find files** | `Glob` (1-5s) | `Bash find` (5-10s) | Complex conditions beyond glob patterns |
| **Modify file** | `Edit` (<1s) | `Write` (1s) | Use Write only for new files or full replacement |
| **Research docs** | `Context7` (5-30s) | `WebSearch` (5-30s) | Use WebSearch if Context7 fails or library not found |
| **Execute command** | `Bash` (varies) | N/A | Use run_in_background for >30s operations |
| **Multi-step work** | Direct tools (<5s total) | `Task` (30s-5min) | Use Task when >3 steps or complex coordination needed |

</tool_selection_quick_reference>

### Performance Impact Summary

**Following these guidelines typically results in**:
- **20-30% faster completion** through smart tool selection
- **50-70% reduction** in redundant operations through context reuse
- **3-10x speedup** through proper batching and parallelization
- **Better user experience** through responsive iteration cycles

</tool_performance_profiles>

## Communication Standards

### User Interaction
<communication_guidance>
**Clear Communication**:
- Present plans before complex implementations
- Keep user informed of progress
- Report issues transparently
- Seek clarification when uncertain
- Provide actionable feedback

**Plan-Then-Execute (Recommended)**:
- For complex or unclear tasks, present plan first
- Pause for user approval before implementation
- Accept feedback and iterate
- Trust user expertise and input
- Skip for trivial tasks or when user says "just do it"
</communication_guidance>

## Operational Excellence Protocols

<operational_excellence_protocols>
**Based on terminal benchmark research and industry best practices (2025).**

These operational protocols ensure production-ready reliability, error recovery, and quality assurance.

### Final Validation Protocol

<final_validation_protocol>
**Pre-completion verification checklist:**

```javascript
// Before marking ANY task complete, verify ALL of:

✅ Functional Validation:
   - All stated requirements implemented
   - Original user intent satisfied
   - Core functionality verified
   - Expected outputs present

✅ Error Detection:
   ❌ NO parsing errors in generated code
   ❌ NO execution errors in logs/output
   ❌ NO incomplete test results
   ❌ NO missing expected files

✅ Integration Validation:
   - Component interactions tested
   - Dependencies resolved correctly
   - Configuration complete
   - Compatibility verified

✅ Quality Assurance:
   - Code quality meets standards
   - Error handling implemented
   - Edge cases considered
   - Performance acceptable

// ONLY when ALL validation passes: Mark complete and report to user
```

**Integration Points**:
- Add to Phase 4 (Verification) in workflow templates
- Embed in Task prompts for verification tasks
- Execute before Phase 5 (Report & User Approval)

**Task Tool Pattern**:
```javascript
Task({
  prompt: "ULTRATHINK: Perform final validation before completion.

          VALIDATION CHECKLIST:
          ✅ All requirements implemented
          ✅ No parsing/execution errors
          ✅ All expected files present
          ✅ Integration points working
          ✅ Quality standards met

          If ANY validation fails:
          - Document failures
          - Fix issues
          - Re-validate

          Report: Validation results with pass/fail status",
  subagent_type: "general-purpose",
  description: "Final validation"
})
```

</final_validation_protocol>

### Recovery Mechanisms Protocol

<recovery_mechanisms_protocol>
**Comprehensive error recovery (handles ~90% of common errors automatically):**

**CRITICAL: Strategy Variation Enforcement**

**NEVER repeat the same approach twice.** Each recovery attempt MUST use a different strategy to maximize success probability.

**Error Classification Matrix** (with mandatory strategy variation):

| Error Type | Detection | Recovery Strategy | Max Attempts | Escalation |
|------------|-----------|-------------------|--------------|------------|
| **Syntax** | Parse failures | Attempt 1: Parse → Fix specific line → Retry<br>Attempt 2: Read context (±10 lines) → Broader fix → Retry<br>Attempt 3: Rewrite entire section from scratch → Retry | 3 | Report with diagnosis |
| **Import** | Missing packages | Attempt 1: Install latest stable version → Verify → Retry<br>Attempt 2: Check constraints → Install compatible version → Retry<br>Attempt 3: Alternative package with same functionality → Retry | 3 | Report dependency conflict |
| **Path** | File not found | Attempt 1: Verify path → Correct typos → Retry<br>Attempt 2: Glob for similar paths → Suggest alternatives → Retry<br>Attempt 3: List directory contents → User clarification | 3 | Request user clarification |
| **Permission** | Access denied | Request approval OR alternative approach | 1 | Immediate (needs user input) |
| **Timeout** | Time limit exceeded | Attempt 1: Extend timeout (5 min) → Retry<br>Attempt 2: run_in_background → Monitor | 2 | Report extended time needed |
| **Session** | Terminal degradation | Detect → Recreate → Restore → Retry | 2 | Report persistent issues |
| **Tool Failure** | Tool call errors | Attempt 1: Retry same tool (transient failure)<br>Attempt 2: Alternative tool (different approach)<br>Attempt 3: Manual workaround | 3 | Request user guidance |
| **Search Failure** | Grep/Glob no results | Attempt 1: Broaden pattern → Less restrictive regex<br>Attempt 2: Alternative search tool → Different flags<br>Attempt 3: Read likely files directly | 3 | Request scope narrowing |

**Enhanced Recovery Protocol Template for Task Prompts**:
```javascript
Task({
  prompt: "ULTRATHINK: [Task description].

          ENHANCED RECOVERY PROTOCOL (with strategy variation):

          Syntax Errors:
          - Attempt 1: Parse error → Identify line → Fix syntax → Retry
          - Attempt 2: Read context (±10 lines) → Broader fix → Retry
          - Attempt 3: Rewrite problematic section from scratch → Retry
          - Escalate: Report with diagnosis + attempted fixes

          Import/Dependency Errors:
          - Attempt 1: Install latest stable version → Verify → Retry
          - Attempt 2: Check package.json/requirements.txt constraints → Install compatible → Verify → Retry
          - Attempt 3: Search for alternative package with same functionality → Retry
          - Escalate: Report dependency conflict with recommendations

          Path Errors:
          - Attempt 1: Verify path exists → Check pwd → Correct path → Retry
          - Attempt 2: Use Glob to find similar paths → Suggest alternatives → Retry
          - Attempt 3: List directory contents → User clarification needed
          - Escalate: Request user to specify correct path

          Permission Errors:
          - Request user approval for elevated permissions
          - OR find alternative approach (lower permissions)
          - Escalate immediately if unresolvable

          Timeout Errors:
          - Attempt 1: Extend timeout to 5 minutes → Retry
          - Attempt 2: Use run_in_background → Monitor with BashOutput → Report progress
          - Escalate: Report operation requires extended time, request approval

          Session Degradation:
          - Detect session failure (command not responding)
          - Recreate session → Restore state → Retry (max 2 attempts)
          - Escalate: Report persistent session issues

          Tool Failure (NEW):
          - Attempt 1: Retry same tool (transient network/API issue)
          - Attempt 2: Alternative tool if available:
             * Grep fails → Try Bash rg
             * WebFetch fails → Try WebSearch
             * Context7 fails → Try WebFetch with direct doc URL
          - Attempt 3: Manual alternative approach (read files directly, etc.)
          - Escalate: Request user guidance on alternative approach

          Search Failure (NEW):
          - Attempt 1: Retry with broader pattern (less restrictive regex)
          - Attempt 2: Try alternative search tool (Bash rg with different flags)
          - Attempt 3: Read likely files directly based on project structure
          - Escalate: Request user to narrow search scope

          IMPORTANT: Vary strategy each attempt - don't repeat same action.
          Maximum 3 recovery attempts per error type.
          Escalate to user if recovery exhausted with full diagnosis.

          [Rest of task instructions]",
  subagent_type: "general-purpose",
  description: "Task with enhanced recovery"
})
```

**Strategy Variation Examples**:

```javascript
// ✅ CORRECT: Each attempt uses different strategy
Syntax Error in file.js:
- Attempt 1: Parse error message → Fix line 42 → Retry
- Attempt 2: Read lines 35-50 → Broader context fix → Retry
- Attempt 3: Rewrite entire function from scratch → Retry

Import Error for 'missing-package':
- Attempt 1: npm install missing-package@latest → Retry
- Attempt 2: Check package.json constraints → npm install missing-package@^2.0.0 → Retry
- Attempt 3: Find alternative: npm install equivalent-package → Update imports → Retry

// ❌ INCORRECT: Repeating same strategy
Import Error:
- Attempt 1: npm install missing-package → Retry
- Attempt 2: npm install missing-package → Retry (WRONG - same as attempt 1)
- Attempt 3: npm install missing-package → Retry (WRONG - same as attempt 1)
// This wastes all 3 attempts on identical approach
```

**Verification Before Retry**:
Before each retry attempt, document:
1. What strategy was attempted
2. Why it failed
3. How the new strategy differs
4. Expected outcome from new approach

**Bash-Specific Recovery Patterns**:
```bash
# Auto-retry with error detection
command || {
  echo "Command failed, attempting recovery..."
  # Apply appropriate recovery strategy
  # Retry once
  command || {
    echo "Recovery failed, escalating to user"
    exit 1
  }
}
```

**Integration Points**:
- Embed in ALL Task prompts throughout workflow
- Particularly critical in Phase 3 (Implementation)
- Include in verification phase for test execution

</recovery_mechanisms_protocol>

### Heredoc Management Protocol

<heredoc_management_protocol>
**Best practices for file generation and heredoc usage:**

#### Quote Selection Strategy

**Quoted Delimiter ('EOF')**: Use for content with special characters
```bash
# ✅ CORRECT: Quoted delimiter prevents variable expansion
cat << 'EOF' > script.sh
#!/bin/bash
echo "Current path: $PWD"
echo "User: $USER"
echo 'Special chars: $ ` \ work literally'
EOF
# Result: $PWD and $USER remain literal (not expanded)

# ❌ INCORRECT: Unquoted delimiter expands variables
cat << EOF > script.sh
#!/bin/bash
echo "Current path: $PWD"
EOF
# Result: $PWD expands to actual path (usually not intended)
```

**Unquoted Delimiter (EOF)**: Use only for simple, variable-free content
```bash
# ✅ CORRECT: No variables, safe to use unquoted
cat << EOF > simple.txt
This is simple text
with no variables
EOF
```

#### Indentation Handling

**Standard Heredoc** (preserves indentation):
```bash
cat << 'EOF' > file.txt
Line 1
  Indented line 2
    More indented line 3
EOF
```

**Indented Heredoc** (`<<-` strips leading tabs):
```bash
# ✅ CORRECT: Strips leading tabs for cleaner code
if [ "$condition" ]; then
	cat <<-'EOF' > file.txt
	Line 1
	Line 2
	Line 3
	EOF
fi
```

#### Special Character Handling

**Escaping Requirements**:
```bash
# With quoted delimiter ('EOF'), no escaping needed
cat << 'EOF' > file.sh
echo "Price: $100"
echo 'Backtick: `command`'
echo "Backslash: \"
EOF

# With unquoted delimiter (EOF), escaping required
cat << EOF > file.sh
echo "Price: \$100"
echo 'Backtick: \`command\`'
echo "Backslash: \\"
EOF
```

#### Syntax Validation Checklist

Before executing heredoc commands, verify:

1. **Matching Delimiters**: Opening and closing delimiters match exactly
   ```bash
   # ✅ CORRECT
   cat << 'EOF' > file
   content
   EOF

   # ❌ INCORRECT: Delimiter mismatch
   cat << 'EOF' > file
   content
   EO  # Missing F
   ```

2. **Quote Consistency**: No unclosed quotes within heredoc
   ```bash
   # ✅ CORRECT
   cat << 'EOF' > file
   echo "quoted"
   echo 'also quoted'
   EOF

   # ❌ INCORRECT: Unclosed quote
   cat << 'EOF' > file
   echo "unclosed
   EOF
   ```

3. **Indentation Alignment**: Closing delimiter at correct indentation level
   ```bash
   # ✅ CORRECT
   cat << 'EOF' > file
   content
   EOF  # No leading whitespace

   # ❌ INCORRECT: Indented closing delimiter (without <<-)
   cat << 'EOF' > file
   content
     EOF  # Will not be recognized as delimiter
   ```

#### File Creation Best Practices

**Use Heredocs for Multi-Line Content**:
```bash
# ✅ CORRECT: Heredoc for multi-line files
cat << 'EOF' > config.json
{
  "setting1": "value1",
  "setting2": "value2",
  "nested": {
    "key": "value"
  }
}
EOF

# ❌ INCORRECT: Multiple echo statements
echo "{" > config.json
echo '  "setting1": "value1",' >> config.json
echo '  "setting2": "value2"' >> config.json
# ... error-prone and verbose
```

**Validate Before Execution**:
```bash
# For shell scripts, validate syntax after creation
cat << 'EOF' > script.sh
#!/bin/bash
set -e
echo "Hello World"
EOF

# Validate syntax
bash -n script.sh || {
  echo "Syntax error detected"
  exit 1
}
```

**Common Pitfalls**:

1. **Mixed Quotes in Content**:
   ```bash
   # ✅ CORRECT: Use quoted delimiter
   cat << 'EOF' > file.sh
   echo "It's a test"
   echo 'Quote "marks" here'
   EOF
   ```

2. **Variable Interpolation Control**:
   ```bash
   # Use quoted delimiter when you DON'T want expansion
   VAR="test"
   cat << 'EOF' > file
   $VAR will remain literal
   EOF

   # Use unquoted delimiter when you DO want expansion
   cat << EOF > file
   $VAR will become "test"
   EOF
   ```

3. **Newline at EOF**:
   ```bash
   # Heredoc automatically includes trailing newline
   # No need for explicit \n at end
   ```

#### Integration with Guild Patterns

**When generating files in Task prompts**:
```javascript
Task({
  prompt: "ULTRATHINK: Create configuration file.

          Use heredoc with quoted delimiter:
          cat << 'EOF' > config/settings.js
          module.exports = {
            // Configuration content
            apiUrl: process.env.API_URL || 'http://localhost:3000'
          };
          EOF

          Validate: Check syntax with node --check config/settings.js",
  subagent_type: "general-purpose",
  description: "Configuration generation"
})
```

</heredoc_management_protocol>

### Risk-Aware Task Categorization Protocol

<risk_aware_categorization_protocol>
**Domain-specific safety protocols:**

**Category Detection (Phase 1 - Research & Discovery)**:
```javascript
// Classify task category based on:
- User request keywords: training, deploy, migrate, authenticate, backup, schema, etc.
- Project files: model files, database schemas, deployment configs, auth modules
- Technologies: TensorFlow, PostgreSQL, Docker, OAuth, Kubernetes, etc.
- Risk indicators: production, destructive, irreversible, sensitive data
```

**Category-Specific Safety Protocols**:

**ML/AI Tasks** (training, model optimization, parameter search):
```
⚠️ MANDATE: Parameter search on small dataset BEFORE full training
⚠️ VERIFY: GPU/resource availability before starting
⚠️ CHECK: Sufficient disk space for model artifacts (models can be GBs)
⚠️ TEST: Small-scale validation (1 epoch, small batch) before full-scale
⚠️ MONITOR: Training metrics to detect divergence early
```

**Security Tasks** (authentication, encryption, access control, credentials):
```
⚠️ VERIFY: Backups exist before modifying security configs
⚠️ TEST: In non-production environment first (dev/staging)
⚠️ CONFIRM: Credential rotation after security changes
⚠️ VALIDATE: No credentials hardcoded or exposed in logs/code
⚠️ AUDIT: Security changes logged for compliance
```

**Database Tasks** (schema changes, migrations, queries):
```
⚠️ BACKUP: Database before schema changes (pg_dump, mysqldump, etc.)
⚠️ TEST: Migrations on database copy first
⚠️ VERIFY: Rollback procedure exists and tested
⚠️ CHECK: Migration idempotency (can run multiple times safely)
⚠️ VALIDATE: Data integrity after migration
```

**Infrastructure Tasks** (deployment, configuration, scaling, production):
```
⚠️ REQUIRE: Explicit user approval for production changes
⚠️ IMPLEMENT: Rollback plan before deployment
⚠️ VERIFY: Changes in staging environment first
⚠️ DOCUMENT: Changes for audit trail and team awareness
⚠️ MONITOR: Deployment metrics and error rates
```

**Data Processing Tasks** (migrations, transformations, ETL, batch operations):
```
⚠️ BACKUP: Source data before transformation
⚠️ TEST: On sample dataset first (10-100 rows)
⚠️ VERIFY: Data integrity after processing (checksums, counts)
⚠️ VALIDATE: Output format and completeness
⚠️ LOG: Processing stats (records processed, errors, duration)
```

**Web Development Tasks** (frontend, backend, API, authentication):
```
⚠️ TEST: Endpoints before deployment (unit + integration tests)
⚠️ VERIFY: Error handling and input validation
⚠️ CHECK: Security headers (CSP, CORS, XSS protection)
⚠️ VALIDATE: Input sanitization and output encoding
⚠️ SCAN: Common vulnerabilities (SQL injection, XSS, CSRF)
```

**Task Tool Pattern with Risk-Aware Prompting**:
```javascript
// Phase 1: Detect category
Task({
  prompt: "ULTRATHINK: Classify task category and identify risk level.

          CATEGORIZATION:
          - Analyze user request keywords
          - Check project files for domain indicators
          - Identify technologies involved
          - Assess risk level (low/medium/high/critical)

          CATEGORIES:
          - ML/AI (training, models, ML pipelines)
          - Security (auth, encryption, access control)
          - Database (schema, migrations, data operations)
          - Infrastructure (deployment, scaling, production)
          - Data Processing (ETL, transformations, batch)
          - Web Development (frontend, backend, API)

          Report: Category, risk level, applicable safety protocols",
  subagent_type: "Explore",
  description: "Task categorization"
})

// Phase 2-3: Apply category-specific safety checks
Task({
  prompt: "ULTRATHINK: [Task description].

          CATEGORY: [Detected category]
          RISK LEVEL: [Low/Medium/High/Critical]

          SAFETY PROTOCOL:
          [Embed appropriate safety checks from category matrix above]

          [Rest of task instructions]",
  subagent_type: "general-purpose",
  description: "Task with safety protocol"
})
```

**Integration Points**:
- Detect category in Phase 1 (Research & Discovery)
- Apply protocols in Phase 2 (Planning)
- Embed safety checks in Phase 3 (Implementation) Task prompts
- Verify compliance in Phase 4 (Verification)

</risk_aware_categorization_protocol>

### Multi-Round Research Protocol

<multi_round_research_protocol>
**Iterative research deepening (finds solutions single-pass misses):**

**Round 1: Low-Frequency Term Generation**
```javascript
Task({
  prompt: "ULTRATHINK: Round 1 research using low-frequency, task-specific search terms.

          AVOID GENERIC TERMS:
          ❌ 'react tutorial', 'api documentation', 'database setup'
          ❌ Broad framework names without specifics
          ❌ General concept queries

          GENERATE SPECIFIC, LOW-FREQUENCY TERMS:
          ✅ '[exact-error-message]' (copy full error text)
          ✅ '[library-name v.X.Y.Z] [specific-feature] implementation'
          ✅ '[framework] [edge-case-description] workaround'
          ✅ '[tech-stack] [specific-integration] production best practices'
          ✅ '[specific-API-method] [uncommon-use-case]'

          PRIORITIZE SOURCES (in order):
          1. GitHub repositories (actionable code examples)
          2. StackOverflow (specific problem solutions with votes)
          3. Official documentation (authoritative, version-specific)
          4. AI Overview summaries (Google's synthesized solutions)

          EXTRACTION CRITERIA:
          - Actionable commands/code (not just concepts)
          - Configuration details (actual values, not placeholders)
          - Specific solutions (not general advice)
          - Version-specific guidance (matches project versions)

          SEARCH EXECUTION:
          - Generate 3-5 low-frequency search terms
          - Execute WebSearch for each term
          - Analyze top 5 results per term
          - Extract AI Overview if available
          - Filter out Terminal Bench references (avoid test contamination)

          Report: Top 5 high-value findings with:
          - Source URL
          - Actionable solution/code
          - Confidence level (high/medium/low)
          - Version compatibility notes",
  subagent_type: "general-purpose",
  description: "Round 1 research"
})
```

**Round 2: Deep Link Analysis** (if Round 1 insufficient)
```javascript
// Only spawn if Round 1 results incomplete or low confidence

Task({
  prompt: "ULTRATHINK: Round 2 deep analysis of top links from Round 1.

          DEEP LINK ANALYSIS:
          - Select top 3 most promising links from Round 1
          - Use WebFetch to retrieve full content
          - Extract complete code examples (not just snippets)
          - Identify configuration requirements and dependencies
          - Document edge cases, gotchas, known issues
          - Note version-specific considerations
          - Check comments/discussions for additional insights

          SYNTHESIS:
          - Combine insights from multiple sources
          - Identify consensus approaches (what multiple sources agree on)
          - Flag conflicting recommendations with explanations
          - Assess confidence level of synthesized solution

          COMPLETENESS CHECK:
          - All requirements answerable?
          - Edge cases covered?
          - Configuration complete?
          - Dependencies identified?

          Report: Comprehensive solution with:
          - Synthesized approach
          - Code examples (complete, not fragments)
          - Configuration details
          - Known issues/limitations
          - Source attribution
          - Confidence assessment",
  subagent_type: "general-purpose",
  description: "Round 2 deep analysis"
})
```

**Round 3: Alternative Approaches** (if gaps remain after Round 2)
```javascript
// Only spawn if Round 2 still has significant gaps

Task({
  prompt: "ULTRATHINK: Round 3 alternative approaches and workarounds.

          ALTERNATIVE SEARCH STRATEGIES:
          - Different terminology (synonyms, related concepts, industry jargon)
          - Related technologies (similar tools, frameworks, libraries)
          - Community discussions (forums, Discord, Reddit, GitHub issues)
          - Workarounds and known issues (GitHub issues, bug trackers)
          - Migration guides (older versions, compatibility notes)

          FOCUS AREAS:
          - Solutions Round 1 & 2 missed
          - Edge cases not yet covered
          - Production considerations (performance, scaling, security)
          - Less common but valid approaches
          - Recent changes (last 6 months)

          SEARCH EXECUTION:
          - Generate alternative search terms
          - Search community forums and discussions
          - Check GitHub issues and pull requests
          - Look for migration guides
          - Search for known issues/workarounds

          Report: Alternative strategies with:
          - Approach description
          - Trade-offs vs primary solution
          - Use cases where preferred
          - Implementation complexity
          - Community adoption/maturity",
  subagent_type: "general-purpose",
  description: "Round 3 alternatives"
})
```

**Research Completion Criteria**:
```
Proceed to implementation when:
✅ Sufficient actionable information gathered (confidence: high)
✅ All critical questions answered
✅ Multiple source verification (consensus found)
✅ Edge cases and gotchas documented
✅ Version compatibility confirmed

OR

Maximum 3 rounds completed (even if some gaps remain - escalate gaps to user)
```

**Integration Pattern (Phase 1)**:
```javascript
// Spawn Round 1 in parallel with other Phase 1 research
// After Round 1 completes, assess if Round 2 needed
// After Round 2 completes (if run), assess if Round 3 needed
// Synthesize all research before Phase 2 (Planning)
```

</multi_round_research_protocol>

### Heuristic Environment Observation Protocol

<heuristic_observation_protocol>
**Context-aware reconnaissance:**

**Enhanced Environment Reconnaissance Task Pattern**:
```javascript
Task({
  prompt: "ULTRATHINK: Perform comprehensive heuristic environment observation.

          RECONNAISSANCE OBJECTIVES:
          - Installed packages and versions (comprehensive)
          - Project structure and organization (deep scan)
          - Runtime environment capabilities (multi-ecosystem)
          - Resource availability (disk, memory, CPU)
          - Containerization and orchestration status
          - Running processes (for debugging tasks)
          - Environment type detection (dev/staging/production)

          1. PACKAGE ECOSYSTEM DETECTION (Comprehensive):

          # Node.js ecosystem
          if [ -f package.json ]; then
            echo "=== Node.js Detected ==="
            npm list --depth=0 2>/dev/null | head -50
            # Key frameworks
            npm list --depth=0 | grep -E 'react|vue|next|express|fastify|nestjs' 2>/dev/null
            # Build tools
            npm list --depth=0 | grep -E 'typescript|webpack|vite|rollup|esbuild' 2>/dev/null
          fi

          # Python ecosystem
          if [ -f requirements.txt ] || [ -f setup.py ] || [ -f pyproject.toml ]; then
            echo "=== Python Detected ==="
            pip list 2>/dev/null | head -50
            # Web frameworks
            pip list | grep -E 'flask|django|fastapi|tornado|bottle' 2>/dev/null
            # ML/Data science
            pip list | grep -E 'tensorflow|torch|sklearn|pandas|numpy' 2>/dev/null
          fi

          # Ruby ecosystem
          if [ -f Gemfile ]; then
            echo "=== Ruby Detected ==="
            gem list 2>/dev/null | head -50
            gem list | grep -E 'rails|sinatra|rack|roda' 2>/dev/null
          fi

          # Go modules
          if [ -f go.mod ]; then
            echo "=== Go Detected ==="
            go list -m all 2>/dev/null | head -50
            go list -m all | grep -E 'gin|echo|fiber|chi' 2>/dev/null
          fi

          # Rust cargo
          if [ -f Cargo.toml ]; then
            echo "=== Rust Detected ==="
            cargo tree --depth 1 2>/dev/null | head -50
          fi

          2. PROJECT STRUCTURE ANALYSIS (Deep Scan):

          # Configuration files (all types)
          echo "=== Configuration Files ==="
          find . -maxdepth 3 -type f \\( \\
            -name 'package.json' -o \\
            -name 'tsconfig.json' -o \\
            -name 'requirements.txt' -o \\
            -name 'Pipfile' -o \\
            -name 'pyproject.toml' -o \\
            -name 'Cargo.toml' -o \\
            -name 'go.mod' -o \\
            -name 'Gemfile' \\
          \\) 2>/dev/null

          # Build and config files
          echo "=== Build/Config Files ==="
          find . -maxdepth 3 -type f \\( \\
            -name '*.config.js' -o \\
            -name '*.config.ts' -o \\
            -name 'vite.config.*' -o \\
            -name 'webpack.config.*' -o \\
            -name 'rollup.config.*' -o \\
            -name 'Dockerfile' -o \\
            -name 'docker-compose.yml' -o \\
            -name '.env.example' \\
          \\) 2>/dev/null

          # Key source directories
          echo "=== Source Directories ==="
          find . -maxdepth 3 -type d \\( \\
            -name 'src' -o \\
            -name 'lib' -o \\
            -name 'app' -o \\
            -name 'components' -o \\
            -name 'pages' -o \\
            -name 'api' -o \\
            -name 'routes' -o \\
            -name 'models' -o \\
            -name 'controllers' \\
          \\) 2>/dev/null

          # Test directories
          echo "=== Test Directories ==="
          find . -maxdepth 3 -type d \\( \\
            -name 'test' -o \\
            -name 'tests' -o \\
            -name '__tests__' -o \\
            -name 'spec' \\
          \\) 2>/dev/null

          3. RUNTIME ENVIRONMENT (Multi-Ecosystem):

          echo "=== Runtime Versions ==="
          # Node.js
          node --version 2>/dev/null && npm --version 2>/dev/null || echo "Node.js: Not installed"

          # Python
          python --version 2>/dev/null || python3 --version 2>/dev/null || echo "Python: Not installed"

          # Ruby
          ruby --version 2>/dev/null || echo "Ruby: Not installed"

          # Go
          go version 2>/dev/null || echo "Go: Not installed"

          # Rust
          rustc --version 2>/dev/null || echo "Rust: Not installed"

          # Environment type indicators
          echo "=== Environment Type ==="
          echo \"NODE_ENV: \${NODE_ENV:-not set}\"
          echo \"ENVIRONMENT: \${ENVIRONMENT:-not set}\"
          echo \"ENV: \${ENV:-not set}\"
          [ -f .env ] && echo ".env file present" || echo "No .env file"
          [ -f .env.production ] && echo ".env.production present (PRODUCTION INDICATOR)"

          4. RESOURCE AVAILABILITY:

          echo "=== Disk Space ==="
          df -h . 2>/dev/null | head -2 || echo "Disk info unavailable"

          echo "=== Memory ==="
          free -h 2>/dev/null | head -2 || vm_stat 2>/dev/null | head -5 || echo "Memory info unavailable"

          echo "=== CPU Info ==="
          nproc 2>/dev/null && echo "cores available" || sysctl -n hw.ncpu 2>/dev/null && echo "cores available" || echo "CPU count unavailable"

          5. CONTAINERIZATION STATUS:

          echo "=== Docker Status ==="
          docker ps -a 2>/dev/null | head -10 || echo "Docker not available or not running"
          docker images 2>/dev/null | head -10 || echo "No Docker images"

          # Container environment detection
          if [ -f /.dockerenv ]; then
            echo "RUNNING INSIDE DOCKER CONTAINER"
          else
            echo "Not running in Docker"
          fi

          # Kubernetes detection
          if [ -f /var/run/secrets/kubernetes.io/serviceaccount/token ]; then
            echo "RUNNING IN KUBERNETES POD"
          fi

          # Docker Compose detection
          [ -f docker-compose.yml ] && echo "Docker Compose configuration present"

          6. RUNNING PROCESSES (Optional - for debugging tasks):

          echo "=== Running Processes (Top 10) ==="
          ps aux 2>/dev/null | grep -E 'node|python|ruby|go|rust|npm|pip' | grep -v grep | head -10 || echo "Process list unavailable"

          7. GIT REPOSITORY STATUS:

          echo "=== Git Status ==="
          if [ -d .git ]; then
            git branch --show-current 2>/dev/null || echo "Not on a branch"
            git status --short 2>/dev/null | head -20
            echo \"Remote: \$(git remote get-url origin 2>/dev/null || echo 'No remote')\"
          else
            echo "Not a git repository"
          fi

          COMPREHENSIVE ANALYSIS:

          Based on above reconnaissance, analyze:

          1. Technology Stack Summary:
             - Primary language(s) and versions
             - Major frameworks detected (with versions)
             - Build tools in use
             - Testing frameworks present

          2. Environment Capabilities:
             - Available runtime environments
             - Container support (Docker/Kubernetes)
             - Resource constraints (disk/memory/CPU)

          3. Project Complexity Indicators:
             - Package count (simple <20, moderate 20-100, complex 100+)
             - Directory structure complexity
             - Multi-language project? (Polyglot codebase)

          4. Environment Type:
             - Development / Staging / Production
             - Containerized or bare-metal
             - CI/CD indicators

          5. Execution Recommendations:
             - Resource-intensive operations feasible? (based on available resources)
             - Container usage recommended? (based on Dockerfile presence)
             - Specific tool availability (npm, pip, etc.)
             - Potential compatibility issues

          6. Risk Assessment:
             - Production environment detected? (requires extra caution)
             - Sufficient resources for task?
             - Missing critical dependencies?

          Report Format:
          # Environment Reconnaissance Summary

          ## Technology Stack
          - Primary: [language + version]
          - Frameworks: [list with versions]
          - Build Tools: [list]

          ## Environment Profile
          - Type: [dev/staging/prod]
          - Containerized: [yes/no + details]
          - Resources: [disk/memory/CPU availability]

          ## Execution Recommendations
          - [Recommendation 1 based on capabilities]
          - [Recommendation 2]
          - [Warning if production or resource-constrained]

          ## Risk Factors
          - [Any risks identified]",
  subagent_type: "Explore",
  description: "Comprehensive environment reconnaissance"
})
```

**When to Use**:
- Complex projects with unknown tech stack
- Before resource-intensive operations (ML training, large builds)
- When environment assumptions are risky
- Multi-technology projects
- Containerized or cloud environments

**Integration Points**:
- Optional task in Phase 1 (Research & Discovery)
- Particularly useful in setup command for tech stack detection
- Before operations with specific resource requirements

</heuristic_observation_protocol>

### Strategic Refinement Checkpoints Protocol

<refinement_checkpoints_protocol>
**Mid-workflow validation and course correction:**

**Checkpoint Trigger Conditions**:
- Task duration exceeds 10 minutes
- Multiple implementation attempts required
- Initial approach showing signs of failure
- User explicitly requests mid-workflow review
- Complex multi-phase implementation with dependencies

**Checkpoint Assessment Protocol**:
```javascript
// Insert between Phase 3 (Implementation) and Phase 4 (Verification)
// for complex or long-running tasks

Task({
  prompt: "ULTRATHINK: Strategic checkpoint - assess implementation progress.

          PROGRESS REVIEW:
          1. Completed Workstreams:
             - [List successfully completed workstreams]
             - Verification status of each

          2. Blocked/Failing Workstreams:
             - [List workstreams with issues]
             - Root cause analysis for each
             - Error patterns identified

          3. Unexpected Obstacles:
             - [Describe unexpected challenges]
             - Impact assessment
             - Deviation from plan

          GAP ANALYSIS:
          1. Missing Information:
             - What information is still needed?
             - What assumptions proven incorrect?
             - What edge cases discovered?

          2. Resource Adequacy:
             - Are current tools/approaches sufficient?
             - Do we need additional research?
             - Should strategy be pivoted?

          COURSE CORRECTION DECISION:

          IF (significant gaps OR approach fundamentally failing):
             RECOMMEND:
             - Additional parallel research tasks (specify topics)
             - Strategy pivot with detailed rationale
             - User consultation on direction

          ELSE IF (minor issues, approach sound):
             RECOMMEND:
             - Targeted fixes for specific issues
             - Continue with current approach
             - Minor adjustments (specify)

          ELSE (on track, no major issues):
             CONFIRM:
             - Ready to proceed to verification phase
             - No course correction needed

          RESOURCE REALLOCATION:
          - Should resources shift to unblocked workstreams?
          - Should more depth be allocated to complex areas?
          - Should approach be simplified if over-engineered?

          Report:
          - Progress summary
          - Gap analysis
          - Course correction recommendation
          - Resource reallocation plan (if needed)
          - Estimated time to completion",
  subagent_type: "general-purpose",
  description: "Strategic checkpoint"
})

// If additional research recommended, spawn parallel tasks:
Task({
  prompt: "ULTRATHINK: [Additional research topic from checkpoint]",
  subagent_type: "general-purpose",
  description: "Checkpoint research 1"
})
Task({
  prompt: "ULTRATHINK: [Another research topic if needed]",
  subagent_type: "general-purpose",
  description: "Checkpoint research 2"
})
```

**Integration Pattern**:
```
Phase 3 (Implementation) completes
    ↓
[CHECKPOINT] Strategic Refinement (for complex/long tasks)
    ↓ (assess)
    ├─ On Track → Proceed to Phase 4 (Verification)
    ├─ Minor Issues → Fix → Proceed to Phase 4
    └─ Major Gaps → Additional Research → Adjust Strategy → Resume Implementation OR Proceed to Phase 4
```

</refinement_checkpoints_protocol>

### Reflection and Self-Evaluation Protocol

<reflection_protocol>
**Honest assessment before user presentation (Industry Best Practice 2025):**

**Reflection Task Pattern (Phase 4 - Final Verification)**:
```javascript
Task({
  prompt: "ULTRATHINK: Perform critical self-evaluation of implementation.

          REFLECTION PROTOCOL:

          1. Requirement Alignment Review:
             ✅ All stated requirements implemented?
             ✅ Original user intent satisfied?
             ✅ Edge cases considered and handled?
             ✅ Success criteria met?

             [Detailed analysis for each requirement]

          2. Quality Assessment:

             Code Quality:
             - Readability: [Score 1-10, explanation]
             - Maintainability: [Score 1-10, explanation]
             - Adherence to conventions: [Assessment]
             - Technical debt introduced: [List if any]

             Error Handling:
             - Robustness: [Assessment]
             - Recovery mechanisms: [What's in place]
             - Edge cases covered: [List]
             - Known failure modes: [List with likelihood]

             Performance:
             - Efficiency: [Assessment]
             - Resource usage: [CPU, memory, network]
             - Scalability considerations: [Analysis]
             - Bottlenecks identified: [List]

             Integration:
             - Component interactions: [Tested? Results?]
             - Dependencies: [All resolved? Versions?]
             - Configuration: [Complete? Validated?]
             - Compatibility: [Verified with what?]

          3. Critical Self-Assessment (HONEST EVALUATION):

             What worked well?
             - [Specific successes, why they worked]
             - [Effective approaches used]
             - [Strengths of implementation]

             What could be improved?
             - [Specific improvement opportunities]
             - [Why these improvements would help]
             - [Effort required for each]

             What assumptions were made?
             - [List ALL assumptions]
             - [Validity of each assumption]
             - [Risk if assumption wrong]

             What risks remain?
             - [Potential issues or limitations]
             - [Likelihood and impact of each]
             - [Mitigation strategies]

             What would I do differently?
             - [Alternative approaches considered]
             - [Trade-offs vs current approach]
             - [When alternative would be better]

          4. Improvement Recommendations:

             Immediate Improvements (High Priority):
             - [Enhancement 1: description, benefit, effort]
             - [Enhancement 2: description, benefit, effort]

             Future Optimizations (Lower Priority):
             - [Optimization 1: description, benefit, effort]
             - [Optimization 2: description, benefit, effort]

             Technical Debt Introduced:
             - [Shortcut 1: what, why taken, plan to address]
             - [Shortcut 2: what, why taken, plan to address]

          5. Confidence Assessment:
             - Overall confidence in solution: [High/Medium/Low]
             - Confidence rationale: [Why this level?]
             - Remaining unknowns: [What's uncertain?]
             - Recommended next steps: [What should happen next?]

          Report:
          - Honest, detailed self-evaluation
          - Actionable improvement recommendations
          - Risk assessment with mitigations
          - Confidence level with rationale

          CRITICAL: Be brutally honest. User benefits more from transparent
          assessment than false confidence. Identifying issues now prevents
          problems later.",
  subagent_type: "general-purpose",
  description: "Self-evaluation and reflection"
})
```

**Integration Points**:
- Add as FINAL task in Phase 4 (Verification)
- Execute BEFORE Phase 5 (Report & User Approval)
- Use results to inform user presentation

**Benefits**:
- Catches issues before user review (quality assurance)
- Demonstrates thorough, professional approach (user trust)
- Identifies learning opportunities (continuous improvement)
- Provides transparency about limitations (honest communication)

</reflection_protocol>

### Predictive Intelligence Phase Protocol

<predictive_intelligence_protocol>
**Upfront task analysis before parallel research (prevents wasted exploration):**

**Execute as Phase 0 before current Phase 1:**

```javascript
Task({
  prompt: "ULTRATHINK: Predictive task analysis.

          EARLY INTELLIGENCE:

          1. Quick Codebase Scan:
             - Use Glob for relevant file patterns
             - Identify key technologies: package.json, requirements.txt, go.mod, Gemfile
             - Detect project structure: src/, lib/, app/, components/, etc.
             - Count relevant files for scope estimation

          2. Task Category Detection:
             - Analyze user request keywords (training, deploy, migrate, auth, backup, schema, etc.)
             - Map to categories: ML/AI, Security, Database, Infrastructure, Data Processing, Web Development
             - Assess risk level: low (read-only, info gathering) / medium (modifications) / high (destructive, production) / critical (irreversible, data loss)

          3. Key File Prediction:
             - Based on task type, predict critical files to examine
             - Identify likely integration points (imports, exports, dependencies)
             - Anticipate configuration files needed (.env, config/*, tsconfig.json, etc.)

          4. Complexity Assessment:
             - File count estimate (<5 / 5-20 / 20+ files affected)
             - Time estimate (<10 min / 10-30 min / 30+ min)
             - Multi-phase requirement (single-phase / 2-3 phases / 4+ phases)
             - Dependencies: isolated vs highly integrated

          5. Strategy Recommendation:
             - Research depth: Rounds needed (1 / 2 / 3 based on complexity)
             - Exploration thoroughness: quick (simple) / medium (moderate) / very thorough (complex)
             - Parallel workstream opportunities: Can task be split? How many independent workstreams?
             - Tool selection guidance: Which tools most appropriate?

          CRITICAL ANALYSIS:
          - What are the known unknowns? (Things we know we need to research)
          - What are potential unknown unknowns? (Risk areas to investigate)
          - What assumptions should be validated early?

          Report: Predictive analysis with:
          - Task category and risk level
          - Estimated scope (files, time, phases)
          - Research strategy recommendation
          - Parallel workstream breakdown
          - Key unknowns to resolve",
  subagent_type: "Explore",
  description: "Predictive intelligence"
})
```

**When to Use**:
- ALL workflow tasks (mandatory Phase 0)
- Particularly critical for complex/risky tasks
- Guides subsequent research focus and depth

**Benefits**:
- 20-30% reduction in wasted exploration
- Better time estimation and planning
- Focused research on relevant areas only
- Early risk identification

**Integration Points**:
- Insert before Phase 1 in workflow-command.md
- Use output to guide Phase 1 research depth and thoroughness
- Inform safety protocol selection based on category

</predictive_intelligence_protocol>

### Context Engineering Protocol

<context_engineering_protocol>
**Optimize context usage for maximum efficiency and performance:**

#### Just-in-Time Retrieval Strategy

**Core Principle**: Maintain lightweight identifiers, retrieve content dynamically only when needed.

**Anti-Pattern**: Pre-loading all data into context
```javascript
// ❌ INCORRECT: Loading everything upfront
Read all_files_in_project  // Bloats context unnecessarily
Read all_documentation     // Most won't be used
Read all_configurations    // Wastes tokens
```

**Best Practice**: Maintain pointers, load on demand
```javascript
// ✅ CORRECT: Load only what's needed, when needed
// Store paths/references
const relevantFiles = Glob({ pattern: "src/**/*.ts" })

// Later, when specific file is needed:
Read({ file_path: "src/auth/login.ts" })  // Just-in-time retrieval
```

**Human Cognition Analogy**:
- Humans use file systems, bookmarks, indexes (external organization)
- NOT: Memorizing every file's content
- Guild adopts the same approach: lightweight metadata + dynamic retrieval

#### Token Budget Allocation

**Recommended Distribution for 200K token limit**:

| Phase | Allocation | Purpose |
|-------|------------|---------|
| **Search/Exploration** | 30% (60K) | Phase 1 research, codebase discovery |
| **Implementation** | 40% (80K) | Phase 3 execution, code generation |
| **Buffer/Reserve** | 30% (60K) | Verification, reflection, user interaction |

**Monitoring Thresholds**:
- 40K tokens: Tier 1 gentle compaction
- 80K tokens: Tier 2 aggressive compaction
- 120K tokens: Tier 3 emergency compaction + user escalation

#### Hybrid Retrieval Model

**Combine upfront and autonomous exploration**:

**Upfront Retrieval** (for speed):
- Critical configuration files
- Core architectural files
- Frequently referenced utilities

**Autonomous Exploration** (for efficiency):
- Discover context through metadata scanning
- Use naming conventions to infer structure
- Leverage timestamps and file sizes
- Read only when analysis requires it

**Example Pattern**:
```javascript
// Phase 1: Lightweight discovery
Glob({ pattern: "**/*.config.js" })  // Just paths
Glob({ pattern: "src/**/*.ts" })     // Just paths

// Phase 2: Selective reading based on discovery
Read("webpack.config.js")  // Only critical files
// Skip reading dozens of .ts files unless specific need identified
```

#### Context Compaction Strategies

**3-Tier Compaction System**:

**Tier 1: Gentle Compaction (40K-80K tokens)**
```
PRESERVE:
- Original task requirements
- Phase 0 predictions
- Phase 1 key findings
- Active errors and blockers
- Current implementation state

SUMMARIZE:
- Completed research → Bulleted findings
- Historical context → Brief overview
- Tool outputs → Essential results only

DISCARD:
- Duplicate information
- Verbose tool outputs (keep summaries)
- Intermediate exploration artifacts
```

**Tier 2: Aggressive Compaction (80K-120K tokens)**
```
PRESERVE:
- Task requirements
- Implementation summary (high-level)
- Verification results
- Reflection findings
- Active blockers

EXTREME SUMMARIZE:
- All previous phases → Essential facts only
- Implementation details → Outcomes only
- Research → Key conclusions only

DISCARD:
- All verbose content
- Intermediate steps
- Detailed exploration logs
```

**Tier 3: Emergency Compaction (120K+ tokens)**
```
PRESERVE:
- Task requirements
- Current state
- Critical blockers

ESCALATE:
- Notify user: "Task complexity exceeds context limits"
- Recommend: "Break into smaller subtasks"
- Provide: Summary of progress and remaining work
```

#### Structured Note-Taking for Long Tasks

**For tasks exceeding context limits**:

**Persistent Notes Pattern**:
```javascript
// Create external notes file for long-horizon tasks
Write({
  file_path: ".guild-notes/task-progress.md",
  content: `
# Task Progress Notes

## Architectural Decisions
- [Key decision 1]
- [Key decision 2]

## Unresolved Issues
- [Issue 1 - requires investigation]
- [Issue 2 - awaiting user input]

## Implementation Summary
- Phase 1: Complete
- Phase 2: In progress
- Phase 3: Pending
`
})

// Reference notes in next phase without loading full history
// Enables multi-hour task sequences with clean context resets
```

**Benefits**:
- Maintains coherence across context resets
- Enables multi-hour task execution
- Preserves critical state externally
- Reduces token consumption

#### Sub-Agent Architecture for Context Efficiency

**Pattern**: Delegate detailed work to subagents, receive condensed summaries

**Main Agent** (coordinator):
- Lightweight context (task requirements, high-level state)
- Delegates complex work to subagents
- Receives only summary responses (1-2K tokens)

**Sub-Agent** (specialist):
- Dedicated context for specific task
- Performs detailed exploration/implementation
- Returns condensed summary to main agent

**Example**:
```javascript
// Main agent delegates to sub-agent
Task({
  prompt: "ULTRATHINK: Analyze authentication patterns in codebase.

          Perform comprehensive analysis.

          Report back: 2000-token summary with:
          - Authentication approach (3-4 sentences)
          - Key files and their roles (bulleted list)
          - Security concerns (if any)
          - Integration patterns (brief description)

          DO NOT include: Full file contents, verbose explanations",
  subagent_type: "Explore",
  description: "Auth analysis"
})

// Sub-agent does heavy lifting with fresh context
// Main agent receives only essential 2K summary
// Main context stays clean for next phase
```

#### Context Reuse Optimization

**Avoid Redundant Operations**:

```javascript
// ✅ EFFICIENT: Read once, reference multiple times
Read({ file_path: "src/auth.ts" })  // Line 1: import statements
// ... analyze ...
// Later in conversation:
"As seen in src/auth.ts:42, the login function uses JWT..."
// Reference by path:line instead of re-reading

// ❌ WASTEFUL: Reading same file multiple times
Read({ file_path: "src/auth.ts" })  // Earlier
// ... some work ...
Read({ file_path: "src/auth.ts" })  // Again (already in context!)
```

**Cache Research Findings**:
```
Phase 1: Research React hooks documentation
→ Store findings in phase summary

Phase 3: Implementing hooks
→ Reference Phase 1 findings (already in context)
→ Don't re-fetch same documentation
```

**Check Context Before Reading**:
```javascript
// Before: Read({ file_path: "config.js" })

// Better: Check if already in conversation history
// If present, reference existing content
// If not present, then Read()
```

#### Performance Impact

**Following context engineering principles**:
- **50-70% reduction** in redundant operations
- **2-3x improvement** in task completion with context limits
- **Better quality** through focused, relevant context
- **Enables longer task sequences** without hitting limits

#### Integration with Guild Workflow

**Phase 0: Predictive analysis determines context strategy**
- Estimate total context needs
- Plan compaction triggers
- Identify upfront vs on-demand retrieval

**Phase 1: Lightweight discovery**
- Glob for paths (not full reads)
- Strategic reading of only critical files
- Cache findings for later phases

**Phase 3: Implementation with clean context**
- Sub-agent delegation for complex work
- Receive condensed summaries only
- Maintain focus on high-level orchestration

**Phase 4: Compaction before verification**
- Tier-appropriate compaction if needed
- Preserve verification requirements
- Prepare clean context for user report

**Phase 5: Concise reporting**
- Summarize outcomes
- Reference details by path:line
- Avoid re-presenting verbose content

</context_engineering_protocol>

### Test-Driven Development Protocol (OPTIONAL)

<tdd_protocol>
**OPTIONAL PATTERN - Enabled only via project CLAUDE.md**

**Status**: This protocol is NOT mandatory in Guild workflows. It is activated only when project has testing infrastructure and project CLAUDE.md includes TDD guidance.

**Anthropic Recommendation**: "Test-driven development becomes even more powerful with agentic coding. This is an Anthropic-favorite workflow for changes that are easily verifiable with tests."

**When to Apply**:
- ✅ **Verifiable Features**: Changes with clear, testable success criteria
- ✅ **Bug Fixes**: Reproducible issues that can be captured in tests
- ✅ **Refactoring**: Ensuring behavior preservation during code changes
- ✅ **API Development**: Contract-driven development with clear interfaces
- ✅ **Library Integration**: Testing integration points and usage patterns

**When NOT to Apply**:
- ❌ **Exploratory Work**: Research, prototyping, initial discovery
- ❌ **Trivial Changes**: Simple typo fixes, formatting, documentation
- ❌ **UI Polish**: Visual tweaks without behavioral changes
- ❌ **Non-testable Work**: Configuration, environment setup, manual processes

**TDD Workflow Protocol**:

```javascript
Task({
  prompt: "ULTRATHINK: Implement [feature] using test-driven development.

          TDD PROTOCOL (Anthropic-favorite workflow):

          1. WRITE FAILING TEST:
             - Define expected behavior in test
             - Run test to confirm appropriate failure
             - Document expected vs actual output
             - Ensure test is specific and focused

          2. MINIMAL IMPLEMENTATION:
             - Write simplest code to make test pass
             - No over-engineering or premature optimization
             - Focus solely on making test green
             - Follow project testing patterns from SKILL.md

          3. VERIFY:
             - Run test to confirm it now passes
             - Check for unintended side effects
             - Validate edge cases
             - Ensure no regressions in other tests

          4. REFACTOR:
             - Improve code quality while tests remain green
             - Follow project conventions and patterns
             - Optimize for readability and maintainability
             - Keep tests passing throughout refactoring

          5. EXPAND:
             - Add tests for edge cases and error conditions
             - Repeat cycle for each new test case
             - Build comprehensive test coverage iteratively

          BENEFITS:
          - Ensures correctness before implementation
          - Catches regressions immediately
          - Documents expected behavior in tests
          - Enables confident refactoring
          - Reduces debugging time
          - Improves API design through usage-first approach

          Apply TDD because this change is easily verifiable with tests.",
  subagent_type: "general-purpose",
  description: "TDD implementation"
})
```

**Integration with Guild Workflow**:

**When TDD is Enabled** (via project CLAUDE.md):
- **Phase 1**: Research testing patterns in codebase and test frameworks
- **Phase 2**: Plan test cases before implementation
- **Phase 3**: Implement using TDD cycle (test → code → refactor)
- **Phase 4**: Verification includes test execution and coverage check

**Project CLAUDE.md Pattern** (generated by setup if tests detected):

```markdown
## Test-Driven Development (Optional)

When implementing verifiable features, consider using test-driven development:

1. Write failing test that defines expected behavior
2. Implement minimal code to make test pass
3. Refactor while maintaining green tests
4. Expand with edge case tests

This is an Anthropic-recommended workflow for testable changes.

**Testing Frameworks Detected**: [Jest|Vitest|Pytest|Mocha|etc.]

**Test Commands**:
- Run tests: `[npm test|pytest|etc.]`
- Watch mode: `[npm test:watch|pytest --watch|etc.]`
- Coverage: `[npm run coverage|pytest --cov|etc.]`
```

**Skill Integration**:

When setup command detects testing frameworks, it should:
1. Create testing skills (e.g., "testing-with-jest")
2. Include TDD patterns in skill documentation
3. Reference TDD workflow in project CLAUDE.md
4. Provide test command examples

**Benefits for Guild Users**:
- **Consistency**: TDD guidance standardized across projects
- **Discoverability**: Setup automatically detects when TDD is applicable
- **Flexibility**: Users can enable/disable via CLAUDE.md
- **Best Practice Alignment**: Follows Anthropic's official recommendations

**Anti-Patterns to Avoid**:
- ❌ Forcing TDD for all changes (overhead outweighs benefits)
- ❌ Writing tests after implementation (defeats purpose)
- ❌ Complex tests that are harder to understand than code
- ❌ Testing implementation details instead of behavior
- ❌ Skipping refactoring step (accumulates technical debt)

</tdd_protocol>


</operational_excellence_protocols>

## Framework Compliance Summary

This shared intelligence supports the core framework principles:
1. **Resource-Based**: Provide skills and agents as discoverable resources
2. **Advisory Guidance**: Offer recommendations, not rigid mandates
3. **Trust Native Capabilities**: Leverage Claude Code's built-in strengths
4. **Contextual Selection**: Match resources to task requirements
5. **Quality Focus**: Verify completeness and correctness
6. **User-Centric**: Prioritize user approval and collaboration
7. **File Discipline**: Only persist codebase files, skills, and agents
8. **Clear Communication**: Keep users informed and engaged

**PLUS Operational Excellence**:
9. **Final Validation**: Pre-completion verification prevents false positives
10. **Recovery Mechanisms**: Automatic error handling for 90% of common failures
11. **Risk Awareness**: Category-specific safety protocols prevent disasters
12. **Multi-Round Research**: Iterative deepening finds solutions single-pass misses
13. **Environment Observation**: Context-aware execution informed by actual capabilities
14. **Strategic Checkpoints**: Mid-workflow validation enables course correction
15. **Reflection Pattern**: Self-evaluation ensures quality before user review
16. **Predictive Intelligence**: Upfront analysis prevents wasted exploration
17. **Test-Driven Development** (OPTIONAL): Anthropic-recommended workflow for verifiable changes (enabled via project CLAUDE.md)

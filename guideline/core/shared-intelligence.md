# Shared Intelligence

## CRITICAL: Mandatory Execution Architecture

<mandatory_execution_patterns>
**THIS IS NOT ADVISORY - THESE ARE MANDATORY**

Guild commands enforce four core execution requirements for optimal performance, context efficiency, and reasoning quality.

### 1. MANDATORY: Subagent Delegation (Context Reduction)

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

### 2. MANDATORY: Parallel Execution (Performance + Context)

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

### 3. MANDATORY: Ultra-Deep Reasoning (ULTRATHINK Keyword)

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

### 4. MANDATORY: Fresh Context Maintenance

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
**Guild MUST follow official Claude Code skills specification**:

**File Structure**:
- Filename: `SKILL.md` (official format, not `[name].md`)
- Location: `.claude/skills/guild/[category]/SKILL.md`
- Progressive loading architecture: metadata → instructions → resources

**Naming Convention (Gerund Form)**:
- ✅ "Working with React"
- ✅ "Processing API Requests"
- ✅ "Testing Express Endpoints"
- ❌ "React Integration" (not gerund)
- ❌ "API Handler" (not gerund)
- ❌ "Express Test" (not gerund)

**Size Limits**:
- Keep SKILL.md under 500 lines
- Split large content into separate files (REFERENCE.md, EXAMPLES.md, DOCS.md)
- Reference files load on-demand (Level 3 resources)
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

**Metadata Guidelines**:
- **name** (Required): Gerund form using lowercase and hyphens ("working-with-express")
- **description** (Required): Natural language trigger for Claude Code discovery - include "Use when...", relevant technologies, and project context
- **model** (Optional): Model selection for skill execution
- **tools** (Optional): Restrict which tools this skill can use
- **category** (Guild): Pattern classification (frontend-patterns, backend-integration, testing-patterns, library-specific)
- **applicability** (Guild): Context matching (file patterns, technologies, task types)
- **related_skills** (Guild): Links to complementary skills
- **related_agents** (Guild): Links to relevant specialist agents

**Tech Stack Skill Types**:
- **Library Skills**: "working-with-react", "working-with-express", "working-with-prisma"
- **Pattern Skills**: "processing-api-requests", "managing-application-state"
- **Testing Skills**: "testing-express-endpoints", "testing-react-components"

**Compatibility**: Guild skills are valid Claude Code skills - they work with native skill discovery while providing enhanced Guild selection capabilities.
</skill_metadata_pattern>

### Progressive Loading Architecture
<progressive_loading_pattern>
**3-Tier Loading System (Official Claude Code Pattern)**:

**Level 1 - Metadata (~100 tokens, always loaded)**:
```yaml
---
name: working-with-express
description: "Use when working with Express.js in this project..."
category: backend-integration
applicability:
  technologies: ["express"]
---
```

**Level 2 - Instructions (~5k tokens, loaded when triggered)**:
```markdown
# Main SKILL.md content
## Pattern Description
[WHAT/WHEN guidance]

## Project Conventions
[Discovered patterns]

## Common Pitfalls
[Anti-patterns]

## Related Resources
[Skills, agents, documentation links]
```

**Level 3 - Resources (unlimited, on-demand loading)**:
```markdown
# Separate files loaded as needed
- REFERENCE.md - API references, detailed specs
- EXAMPLES.md - Code examples and patterns
- DOCS.md - Library documentation (fetched from Context7)
- scripts/ - Utility scripts (executed, not loaded)
```

**Implementation Guidelines**:
- Keep SKILL.md under 500 lines (Level 2)
- Move detailed content to Level 3 files
- Reference files one level deep (no nested references)
- Use bash commands to read Level 3 files when needed
- Scripts output enters context, not the code itself
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

## Resource Selection Guidance

### Skill vs Agent Selection
<selection_guidance>
**When to Use Skills**:
- Pattern matches task requirements
- Quick reference needed for project conventions
- Lightweight guidance sufficient
- Clear applicability from metadata

**When to Consider Agents**:
- Complex multi-step coordination needed
- Specialized domain expertise required
- Orchestration of multiple resources
- Deep project-specific knowledge needed

**When to Use Task Tool**:
- Complex delegation beneficial
- Coordinating multiple independent workstreams
- Specialized reasoning required
- Direct execution overhead too high
</selection_guidance>

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
- Reuse existing skills and agents
- Load skills directly for pattern tasks
- Trust native orchestration capabilities
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
- Reference available skills if helpful
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

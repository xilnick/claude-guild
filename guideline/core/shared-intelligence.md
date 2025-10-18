# Shared Intelligence

## Core Principles

**Advisory Over Prescriptive**: Provide helpful patterns and guidance, not rigid mandates. Trust Claude Code's capabilities.

**Skills as Knowledge**: Skills define project-specific patterns (WHAT/WHEN), not execution protocols (HOW).

**Resource-Based Selection**: Present available skills and agents, guide selection, trust intelligent choice.

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
- Consider `thinking_mode: ultrathink` for complex reasoning

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

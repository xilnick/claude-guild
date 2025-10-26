# Guild System - Base Requirements

## Core Philosophy

**Discovery Over Prescription**: The Guild system provides resources and guidance, not rigid execution protocols. Trust Claude Code's native capabilities for orchestration, tool selection, and parallel execution.

**Skills as Knowledge Foundation**: Skills are the primary knowledge transfer mechanism - lightweight, metadata-rich pattern definitions that enable intelligent resource selection by both agents and workflows.

**Advisory Guidance**: All requirements are recommendations and best practices, not enforcement mandates. The system guides rather than constrains.

## System Architecture

### Three-Layer Design

```
Layer 1: Skills (Pattern Knowledge)
  ├─ Metadata-rich definitions
  ├─ WHAT/WHEN guidance (not HOW)
  ├─ Project-specific conventions
  └─ Discoverable via applicability patterns

Layer 2: Agents (Domain Expertise)
  ├─ Reference relevant skills
  ├─ Apply skill patterns to work
  ├─ Provide specialized coordination
  └─ Created based on project needs

Layer 3: Workflows (Task Execution)
  ├─ Present skills as resources
  ├─ Guide skill selection
  ├─ Leverage native capabilities
  └─ Trust contextual judgment
```

### Skill-First Principle

**All project-specific knowledge flows through skills:**
- Workflows discover and present skills to users
- Agents reference skills for pattern guidance
- Setup command creates skills from project discovery
- Both manual and automated skill creation supported

## General Requirements

### 1. Skill System Requirements

<skill_system_design>
**Metadata Structure** (Dual-Mode Compatible):

*Native Claude Code Fields (for autonomous discovery)*:
- **`description`** (REQUIRED): Concise description enabling Claude's autonomous skill discovery. Should specify triggers, technologies, and when to use.
- **`name`** (REQUIRED): Unique skill identifier
- **`allowed-tools`** (OPTIONAL): Restrict tool access (e.g., `["Read", "Write", "Edit", "Grep", "Glob"]`)

*Guild Enhancement Fields (for inventory and relationships)*:
- **`category`**: Pattern classification (backend-integration, frontend-patterns, testing-patterns)
- **`applicability`**: Context matching patterns
  - `file_patterns`: File path patterns where skill applies
  - `technologies`: Framework/library names
  - `task_types`: Task classification tags
- **`confidence_scoring`**: Formula for context-aware selection strength
- **`related_skills`**: Complementary patterns often used together
- **`related_agents`**: Specialists with expertise in skill domain

**Dual-Mode Operation**:
- **Autonomous Mode**: Claude Code reads `description` and activates skills automatically when relevant
- **Explicit Mode**: Guild workflow presents skill inventory for user/agent selection
- **Best of Both**: Skills work autonomously OR explicitly, seamlessly integrating with Claude Code's native system

**Content Structure**:
- Pattern description (WHAT and WHEN)
- Project-specific conventions
- Common pitfalls and anti-patterns
- Related resources and references

**Discovery Protocol**:
- Skills stored in `.claude/skills/guild/` (subdirectory of `.claude/skills/`)
- Organized by category (testing/, backend/, frontend/, etc.)
- Native description enables Claude Code autonomous discovery
- Guild metadata enables advanced inventory presentation
- Inventory generated dynamically at install time
</skill_system_design>

### 2. Agent Requirements

<agent_design_requirements>
**Skill Integration**:
- Agents MUST reference relevant skills in their definitions
- Agent prompts SHOULD include skill guidance sections
- Agents SHOULD apply skill patterns to their work
- Agents MAY compose multiple skills for complex tasks

**Creation Protocol**:
- Persistent agents created by `/guild:setup` in `.claude/agents/guild/`
- Ephemeral agents created by workflow via Task tool when needed
- All agents include project context and skill references
- Agents avoid overlapping expertise areas

**Quality Standards**:
- Clear expertise boundaries
- Focused purpose and capabilities
- Project-specific context embedded
- Skill-informed implementation approaches
</agent_design_requirements>

### 3. Workflow Requirements

<workflow_design_requirements>
**Skill Presentation**:
- Workflows MUST present skill inventory to users
- Skill metadata displayed for context matching
- Selection guidance provided (not mandated)
- Trust user/agent judgment for application

**Resource Selection Pattern**:
1. **Check Skills First**: Scan inventory for pattern matches
2. **Consider Agents**: Evaluate specialists for complex work
3. **Leverage Native Capabilities**: Trust built-in strengths
4. **Use Task Tool When Beneficial**: For complex delegation

**Execution Philosophy**:
- Advisory guidance, not prescriptive rules
- Context-based decision making
- Flexible application of patterns
- Trust Claude Code's orchestration
</workflow_design_requirements>

### 4. Skill Composition Requirements

<skill_composition_design>
**Single Skill Application**:
- Direct reference to skill file when single pattern applies
- Load skill content for detailed guidance
- Apply conventions and anti-patterns

**Multi-Skill Composition**:
- Complex tasks may require multiple skill patterns
- Related skills linked via metadata
- Skills compose naturally through shared project context
- No rigid composition rules - trust intelligent selection

**Skill Relationships**:
- `related_skills`: Complementary patterns often used together
- `related_agents`: Specialists with expertise in skill domain
- Category organization: Group skills by domain/concern
- Confidence scoring: Guide selection strength
</skill_composition_design>

### 5. Interoperability Requirements

<interoperability_design>
**Skills ↔ Agents**:
- Agents reference skills in "Relevant Skills" section
- Agents apply skill patterns to their specialized work
- Setup command creates both skills and agents together
- Skill metadata includes `related_agents` field

**Skills ↔ Workflows**:
- Workflows present skill inventory at entry point
- Workflows guide skill selection via metadata
- Workflows load skill content when relevant
- Skill metadata includes applicability patterns

**Agents ↔ Workflows**:
- Workflows present agent roster alongside skills
- Workflows delegate to agents for complex coordination
- Agents created by setup, invoked by workflow
- Ephemeral agents created by workflow when needed
</interoperability_design>

### 6. File Persistence Requirements

<persistence_protocol>
**Create/Modify (Codebase Files)**:
- Source code (.js, .ts, .py, .java, etc.)
- Configuration files (package.json, tsconfig.json, .env, etc.)
- Build files (Makefile, Dockerfile, etc.)
- Test files (*.test.js, *.spec.ts, etc.)
- **Skills** (`.claude/skills/guild/*.md` from setup)
- **Agents** (`.claude/agents/guild/*.md` from setup)

**Display Only (Never Persist)**:
- Analysis reports and verification summaries
- Documentation (unless explicitly requested)
- Working notes and scratchpads
- Examples and sample code
- Intermediate artifacts
- Discovery results and recommendations

**Rationale**: Only persist artifacts that are part of the project's actual working structure.
</persistence_protocol>

### 7. Quality & Verification Requirements

<quality_standards>
**Recommended Verification Practices**:
- Functional correctness against requirements
- Integration and component compatibility
- Edge cases and error handling
- Dependencies properly managed
- Performance meets expectations
- User approval (final authority)

**Gap Detection Approach**:
- Review completed work systematically
- Identify missing components
- Prioritize based on criticality
- Address gaps appropriately
- Re-verify after changes
- Confirm with user

**Skill-Informed Quality**:
- Apply project conventions from skills
- Avoid anti-patterns documented in skills
- Follow patterns from relevant skills
- Maintain consistency with skill guidance
</quality_standards>

## Optimization Recommendations

### Parallel Execution (Recommended)
Consider batching independent operations:
- File operations (reads, writes, searches)
- Analysis tasks (discovery, research, assessment)
- Verification streams (functional, integration, quality)
- Multiple skill evaluation when selecting resources

### Task Tool Usage (Recommended)
Consider Task tool for:
- Complex multi-step coordination
- Specialized domain expertise needed
- Multiple independent workstreams
- Deep reasoning requirements
- Existing specialist agent match

Direct execution may be better for:
- Simple file operations
- Straightforward edits
- Quick searches or reads
- Tasks with complete context
- Operations where overhead exceeds complexity

**MANDATORY when using Task tool**:
- ALL Task prompts MUST start with "ULTRATHINK: " keyword
- Enables deep reasoning for delegated work
- Ensures consistent quality across all subagents

**Example**:
```javascript
Task({
  prompt: "ULTRATHINK: Analyze codebase patterns...",
  subagent_type: "Explore",
  description: "Pattern analysis"
})
```

## Communication Standards

### User Interaction (Recommended)
**Clear Communication**:
- Present plans before complex implementations
- Keep user informed of progress
- Report issues transparently
- Seek clarification when uncertain
- Provide actionable feedback

**Plan-Then-Execute (Suggested)**:
- For complex or unclear tasks, consider presenting plan first
- Pause for user approval before implementation
- Accept feedback and iterate
- Trust user expertise and input
- Skip for trivial tasks or when user says "just do it"

## Success Criteria

**System Considered Successful When**:
- ✅ Skills provide discoverable, reusable pattern knowledge
- ✅ Agents reference and apply relevant skills
- ✅ Workflows present skills as selectable resources
- ✅ Skills, agents, and workflows interoperate seamlessly
- ✅ Advisory guidance respected without rigid enforcement
- ✅ Project-specific knowledge captured in skills
- ✅ Users can make informed, context-based decisions
- ✅ Quality maintained through skill-informed patterns

## Anti-Patterns to Avoid

<anti_patterns>
**System Design Anti-Patterns**:
- ❌ Creating skills that prescribe HOW instead of WHAT/WHEN
- ❌ Agents that don't reference relevant skills
- ❌ Workflows that ignore skill inventory
- ❌ Rigid enforcement replacing advisory guidance
- ❌ Skills with overlapping or redundant patterns
- ❌ Agents with unclear expertise boundaries

**Implementation Anti-Patterns**:
- ❌ Persisting analysis reports or documentation
- ❌ Creating files outside of codebase scope
- ❌ Ignoring skill patterns and conventions
- ❌ Rigid sequential execution when parallel possible
- ❌ Over-delegation for simple tasks
- ❌ Under-delegation for complex tasks

**Usage Anti-Patterns**:
- ❌ Treating recommendations as mandatory rules
- ❌ Ignoring context when selecting resources
- ❌ Creating skills without project evidence
- ❌ Duplicating knowledge across skills
- ❌ Assuming one-size-fits-all approaches
</anti_patterns>

## Alignment with Framework

This requirements document aligns with and extends:
- **`framework.md`**: Core philosophy and principles
- **`recommendations.md`**: Opus 4.1 optimization patterns
- **`shared-intelligence.md`**: Reusable implementation patterns

All three documents work together to provide:
- Clear philosophy (framework.md)
- Technical optimization (recommendations.md)
- Practical patterns (shared-intelligence.md)
- System requirements (this document)

**Consistency Principle**: All guidance is advisory. Trust intelligent application based on context.

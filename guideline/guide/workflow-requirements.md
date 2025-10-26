# Workflow Command Requirements

## Purpose

The workflow command (`/guild`) executes tasks by intelligently selecting and applying available resources - skills, agents, and native capabilities - based on context and requirements.

## Core Philosophy Alignment

This document extends `base-requirements.md` with workflow-specific guidance. All requirements are **advisory recommendations**, not rigid enforcement mandates.

**Key Principles:**
- Trust Claude Code's native orchestration capabilities
- Present skills as discoverable resources
- Guide resource selection, don't mandate it
- Apply parallel execution where beneficial
- Balance delegation overhead against task complexity

## Workflow Execution Pattern

### Phase 1: Resource Discovery

**Skill Inventory Presentation**:
- Present available skills with metadata
- Display applicability patterns, categories, confidence scoring
- Enable context-based skill selection
- Show relationships to other skills and agents

**Agent Roster Presentation**:
- List available specialist agents
- Display expertise areas and capabilities
- Show skill references for each agent
- Enable intelligent agent selection

**Context Assessment**:
- Understand user request and requirements
- Assess task complexity and scope
- Consider project constraints and patterns
- Evaluate resource applicability

### Phase 2: Resource Selection

**Skill-First Approach (Recommended)**:
1. **Check Skills**: Scan inventory for pattern matches
   - Review applicability metadata (file patterns, technologies, task types)
   - Evaluate confidence scoring for context fit
   - Identify relevant skills for current task

2. **Consider Agents**: Evaluate specialists when appropriate
   - Match task domain to agent expertise
   - Consider coordination needs
   - Assess whether delegation adds value

3. **Leverage Native Capabilities**: Trust built-in strengths
   - Parallel tool execution and batching
   - Intelligent tool selection and usage
   - Task decomposition and planning
   - Direct file operations

4. **Use Task Tool When Beneficial**: For complex delegation
   - Multi-step coordination requirements
   - Specialized reasoning needs
   - Existing agent match
   - Parallel workstream opportunities

**Selection Guidance** (Not Mandates):
- Simple tasks may not need skills or agents
- Complex tasks may benefit from multiple skills
- Specialized tasks may benefit from agent delegation
- Trust judgment on optimal resource combination

### Phase 3: Execution

**Skill Application**:
When skill(s) selected:
- Load skill content for detailed guidance
- Apply WHAT/WHEN patterns to task
- Follow project-specific conventions
- Avoid documented anti-patterns
- Reference related skills if needed

**Agent Delegation**:
When agent(s) selected:
- Include skill references in delegation prompt
- Provide clear task objectives and success criteria
- Embed project context and constraints
- Consider parallel execution for independent workstreams

**Direct Execution**:
When executing directly:
- Apply relevant skill patterns
- Use appropriate tools based on task needs
- Batch independent operations when beneficial
- Maintain quality standards

**Hybrid Approach**:
Combine approaches as context requires:
- Load skills for pattern guidance
- Delegate complex coordination to agents
- Execute simple operations directly
- Compose resources intelligently

### Phase 4: Verification

**Quality Checks (Recommended)**:
- Functional correctness against requirements
- Integration and component compatibility
- Edge cases and error handling
- Dependencies properly managed
- Performance meets expectations

**Skill-Informed Quality**:
- Verify project conventions followed (from skills)
- Check anti-patterns avoided (from skills)
- Confirm patterns applied (from skills)
- Validate consistency with skill guidance

**Gap Detection**:
- Review completed work systematically
- Identify missing components or incomplete implementations
- Prioritize based on criticality
- Address gaps appropriately
- Re-verify after changes

**User Approval**:
- User approval is final authority
- Present results clearly
- Report issues transparently
- Confirm completion criteria met

## Skill Integration Requirements

### Skills MUST Be Presented
The workflow command MUST present the skill inventory to users:
- Display skill list with categories
- Show skill metadata (applicability, confidence, relationships)
- Enable skill discovery and selection
- Provide "no skills found" message if inventory empty

### Skills SHOULD Inform Execution
When applicable skills exist:
- Consider loading skill content for guidance
- Apply skill patterns and conventions
- Avoid skill-documented anti-patterns
- Reference related skills when beneficial

### Skills MAY Be Composed
For complex tasks:
- Multiple skills may apply simultaneously
- Related skills can be composed
- Skill relationships guide composition
- Trust intelligent skill combination

## Agent Integration Requirements

### Agents MUST Reference Skills
When agents are created or invoked:
- Agent definitions SHOULD include "Relevant Skills" section
- Agent prompts SHOULD reference applicable skills
- Agents SHOULD apply skill patterns to their work
- Agents MAY load skill content for detailed guidance

### Agents SHOULD Be Created Based on Project Needs
- Setup command creates persistent agents from discovery
- Workflow MAY create ephemeral agents via Task tool when needed
- No existing agent match justifies ephemeral creation
- Dynamic agents are temporary, not persisted

### Agents MAY Be Delegated To
Consider agent delegation for:
- Complex multi-step coordination
- Specialized domain expertise
- Multiple independent workstreams
- Deep reasoning requirements
- Existing specialist match

Direct execution may be better for:
- Simple file operations
- Straightforward edits
- Quick searches or reads
- Tasks with complete context
- Operations where overhead exceeds complexity

## Optimization Recommendations

### Parallel Execution (Recommended)
Consider batching independent operations:
- File operations (reads, writes, searches) in single messages
- Analysis tasks (discovery, research, assessment) simultaneously
- Verification streams (functional, integration, quality) in parallel
- Multiple skill evaluation when selecting resources

**Rationale**: Parallel execution can provide significant performance improvements for independent operations.

**Not Mandatory**: Sequential execution is acceptable when operations have dependencies or when parallel overhead exceeds benefits.

### ULTRATHINK Keyword (MANDATORY for Task Invocations)
**ALL Task tool invocations MUST start prompts with "ULTRATHINK: "**:
- Enables deep reasoning for better decisions
- Improves problem-solving and planning quality
- Reduces errors through comprehensive analysis
- Ensures consistent reasoning depth across all delegated work

**Rationale**: Deep reasoning improves decision quality for complex tasks delegated to subagents.

**MANDATORY**: When using Task tool, EVERY prompt MUST start with "ULTRATHINK: " keyword.

**Example**:
```javascript
Task({
  prompt: "ULTRATHINK: Analyze codebase patterns...",
  subagent_type: "Explore",
  description: "Pattern analysis"
})
```

## Communication Standards

### Plan-Then-Execute (Recommended)
For complex or unclear tasks, consider:
1. Present implementation plan
2. Pause for user approval
3. Accept feedback and iterate
4. Proceed after approval
5. Verify results
6. Obtain final approval

**When to Consider Planning**:
- Complex features or architectural changes
- Unclear requirements or multiple approaches
- High-risk modifications
- First time working in codebase

**When to Skip Planning**:
- User explicitly requests immediate execution
- Trivial changes (typo fixes, simple refactors)
- User has already provided detailed plan
- Very simple, well-understood tasks

**Rationale**: Collaboration produces superior results. Users' hands-on involvement, pushback on plans, and course corrections improve outcomes.

### Progress Communication
Keep users informed:
- Report major steps and milestones
- Surface issues and blockers transparently
- Seek clarification when uncertain
- Provide actionable feedback
- Confirm completion clearly

## File Persistence Protocol

### Create/Modify (Codebase Files Only)
- Source code (.js, .ts, .py, .java, etc.)
- Configuration files (package.json, tsconfig.json, .env, etc.)
- Build files (Makefile, Dockerfile, etc.)
- Test files (*.test.js, *.spec.ts, etc.)

### Display Only (Never Persist)
- Analysis reports and verification summaries
- Documentation (unless explicitly requested)
- Working notes and scratchpads
- Examples and sample code
- Intermediate artifacts
- Discovery results and recommendations

**Critical**: This is a MUST requirement. Only codebase files may be persisted.

## Workflow Success Criteria

**Workflow Considered Successful When**:
- ✅ Skills presented and available for selection
- ✅ Appropriate resources selected based on context
- ✅ Task executed effectively with quality
- ✅ Skill patterns applied where relevant
- ✅ Agents referenced skills when applicable
- ✅ Only codebase files persisted
- ✅ Analysis and reports displayed, not saved
- ✅ Quality standards met
- ✅ User approval obtained

## Anti-Patterns to Avoid

**Resource Selection Anti-Patterns**:
- ❌ Ignoring skill inventory completely
- ❌ Not presenting available skills to user
- ❌ Over-delegating simple tasks
- ❌ Under-utilizing available skills
- ❌ Creating agents without checking existing roster

**Execution Anti-Patterns**:
- ❌ Violating skill conventions and patterns
- ❌ Repeating skill-documented anti-patterns
- ❌ Persisting non-codebase files
- ❌ Ignoring project-specific conventions
- ❌ Missing obvious parallelization opportunities

**Communication Anti-Patterns**:
- ❌ Not seeking user approval for complex changes
- ❌ Proceeding without clarification when unclear
- ❌ Poor progress reporting
- ❌ Treating recommendations as mandatory rules

## Integration with Other Documents

This document works with:
- **`base-requirements.md`**: General system requirements (foundation)
- **`framework.md`**: Core philosophy and principles (philosophy)
- **`recommendations.md`**: Opus 4.1 optimization patterns (technical guidance)
- **`shared-intelligence.md`**: Reusable implementation patterns (practical guidance)

All documents together provide comprehensive, advisory guidance for the workflow command.

## Summary

The workflow command is the primary task execution interface. It:
- **Discovers**: Presents skills and agents as available resources
- **Guides**: Provides recommendations for resource selection
- **Trusts**: Relies on intelligent, context-based decisions
- **Applies**: Uses skills for pattern guidance
- **Delegates**: Invokes agents for complex coordination
- **Executes**: Leverages native capabilities effectively
- **Verifies**: Ensures quality and completeness
- **Communicates**: Keeps users informed and engaged

**Philosophy**: Advisory over prescriptive. Trust over enforcement. Context over rules.

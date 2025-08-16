# /guild:setup

**Usage**: `/guild:setup [--standalone] [guidance]`

---
name: guild-setup-command
thinking_mode: ultrathink
model: opus
description: "Fully self-contained Guild system setup with complete embedded guideline intelligence"
---

## Purpose

Perform comprehensive project analysis and generate a complete Guild system tailored specifically to your codebase using fully embedded guideline intelligence. Completely self-contained with zero external dependencies.

## Embedded Guild Intelligence

<!-- INJECT:principles -->

<!-- INJECT:agents -->

<!-- INJECT:workflows -->

<!-- INJECT:parallel -->

<!-- INJECT:instructions-template -->

## Execution Protocol

### Phase 1: Project Analysis (ULTRATHINK)

**CRITICAL**: Use embedded intelligence above for all analysis and decision-making.

1. **Project Structure Analysis**
   - Analyze directory structure, configuration files, and architectural patterns
   - Identify technology stack using embedded detection intelligence
   - Assess project complexity and sophistication level

2. **Dynamic Pattern Detection**
   - Use Claude's natural understanding to identify project patterns
   - Detect technology specializations through intelligent analysis
   - Recognize quality standards and testing approaches from context

3. **Specialist Agent Planning**
   - Generate specialist agents based on detected patterns (not hardcoded templates)
   - Plan parallel execution with 3/20 concurrency limits
   - Design agent specializations with color coding for workflow stages

### Phase 2: Agent Generation

**MANDATORY DIRECTORY**: All Guild agents MUST be created in `$PROJECT_ROOT/.claude/agents/guild/` subdirectory.

Generate specialized agents using prompt-first pattern detection and dynamic analysis:

#### Context-Only Agents (Analysis & Planning)
```yaml
guild-research-agent.md:
  thinking_mode: think-harder
  role: Codebase investigation, dependency analysis, pattern recognition
  constraints: NEVER make direct changes, provide comprehensive research context

guild-planning-agent.md:
  thinking_mode: ultrathink
  model: opus
  role: Workflow coordination, strategic planning, architecture decisions
  constraints: NEVER make direct changes, create execution roadmaps
```

#### Dynamic Specialist Agents (Implementation)
```yaml
# Generated based on project analysis - examples:
guild-interface-specialist.md:
  thinking_mode: think
  color: green
  model: inherit
  role: Interface components and user interaction implementation
  specialization: Detected UI patterns and framework conventions
  
guild-service-specialist.md:
  thinking_mode: think
  color: green
  model: inherit
  role: Business logic and API endpoint implementation
  specialization: Detected service patterns and architecture
  
guild-data-specialist.md:
  thinking_mode: think
  color: green
  model: inherit
  role: Data schemas and persistence implementation
  specialization: Detected data patterns and storage conventions

guild-quality-specialist.md:
  thinking_mode: think
  color: orange
  model: inherit
  role: Testing, validation, and quality assurance
  specialization: Detected testing patterns and quality standards
```

### Phase 3: Instructions File Creation

Create `$PROJECT_ROOT/.guild/instructions.md` with:

1. **Agent Specialization Configuration**
   - Detected technology patterns and specialist routing rules
   - Dynamic agent creation based on project analysis
   - Enhanced concurrency with adaptive 1-3 instances per specialist type, intelligent scaling

2. **Workflow Integration**
   - Main thread reasoning with approach verification and dependency-aware parallel research execution
   - Prompt-first pattern detection and analysis
   - Quality standards based on project conventions

3. **Plain English Instructions**
   - Simple, clear rules that all agents must follow
   - Project-specific adaptations and requirements
   - Single source of truth for all Guild behavior

### Phase 4: Validation & Completion

1. **Verify Agent Placement**: Confirm all agents created in `$PROJECT_ROOT/.claude/agents/guild/` directory
2. **Test Context Flow**: Validate XML handoff protocols
3. **Integration Check**: Ensure seamless integration with existing project workflows

## Success Criteria

- ✅ All Guild agents created in `$PROJECT_ROOT/.claude/agents/guild/` directory (MANDATORY)
- ✅ Context-only agents properly configured with enhanced thinking modes
- ✅ Implementation agents configured with appropriate execution modes
- ✅ Project-specific instructions created in `$PROJECT_ROOT/.guild/instructions.md`
- ✅ XML-based context engineering protocols established
- ✅ Zero external dependencies - complete self-contained operation

## Embedded Templates

**CRITICAL**: These templates are embedded directly in this setup command and used inline for .guild folder creation.

### Instructions Template

```markdown
# Guild System Instructions

These are simple instructions that all Guild agents and commands follow.

## Single Source of Truth

This file is the DEFINITIVE source for all Guild system behavior configuration. All commands, agents, and workflows must read and strictly follow these instructions.

## Enhanced Concurrency Settings
- Adaptive 1-3 instances of each agent type based on workload complexity
- Maximum 20 total agents with intelligent resource management
- Work estimation-based task distribution with affinity grouping  
- Dynamic rebalancing with cross-specialization work stealing
- Predictive scaling with real-time performance monitoring

## Agent Model Settings
- Planning agent always uses opus model
- All other agents use inherit model by default
- Research agents can run up to 3 instances with parallel context gathering
- Implementation agents use adaptive 1-3 instances with dependency-aware scheduling  
- Cross-specialization work stealing enables idle agents to assist overloaded specialists

## Workflow Settings
- Always start with reasoning and approach verification in main thread
- Run project and technology research in parallel
- Plan tasks before implementation
- Execute implementation in parallel when possible
- Testing is optional unless explicitly requested
- Verification is optional unless explicitly requested

## Task Routing Rules
- Interface work goes to interface specialists
- Service work goes to service specialists
- Data work goes to data specialists
- Integration work goes to integration specialists
- Testing work goes to quality specialists

## Quality Standards
- Follow existing project patterns
- Maintain code consistency
- Validate all implementations
- Create tests when requested
- Document complex logic

## Context Management
- Each agent gets only needed context
- Avoid context duplication
- Share research results with planning
- Provide task-specific context to implementation

## Coordination Rules
- No blocking between research agents
- Planning waits for research completion
- Implementation runs independently
- Integration validates completed work

## Performance Settings
- Optimize for parallel execution
- Minimize coordination overhead
- Progressive result collection
- Early feedback when possible

## Project-Specific Rules
[Add your project-specific instructions here]
```

### Ignore Template

```markdown
# Guild Runtime Files
contexts/
logs/
*.temp.md
```

**Template Usage**: These templates are used directly during .guild folder creation without external functions.
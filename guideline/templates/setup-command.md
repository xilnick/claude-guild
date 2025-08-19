# /guild:setup

---
name: guild-setup-command
thinking_mode: ultrathink
model: inherit
description: "Complete Guild system setup with embedded intelligence"
---

## Purpose

Guild system installation with complete embedded guideline intelligence.

## Setup-Focused Intelligence

**Shared Intelligence**:
{{shared/principles}}

{{shared/mcp-integration}}

**Setup-Specific Intelligence**:
{{setup/agents}}

{{setup/testing}}

## Setup Execution Protocol

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
   - Plan parallel execution with hierarchical coordination
   - Design agent specializations for workflow optimization

### Phase 2: Agent Generation

**MANDATORY DIRECTORY**: All Guild agents MUST be created in `$PROJECT_ROOT/.claude/agents/guild/` subdirectory.

Generate specialized agents using prompt-first pattern detection and dynamic analysis:

#### Dynamic Agent Generation from Templates
Generate specialized agents using project analysis and agent templates from `agent-templates.md`:

**Agent Creation Process**:
1. **Analyze Project Patterns**: Use embedded intelligence to detect technologies, frameworks, and architectural patterns
2. **Select Templates**: Choose appropriate agent templates based on detected patterns
3. **Substitute Variables**: Replace template variables with project-specific values
4. **Generate Agents**: Create .md files in `$PROJECT_ROOT/.claude/agents/guild/` directory

**Generated Agent Types**:
- **Planning Router**: Master orchestrator using planning router template
- **Domain Lead Agents**: Technology-specific coordinators (e.g., React Frontend Lead, FastAPI Backend Lead)
- **Research Agents**: Project and external intelligence gatherers
- **Execution Specialists**: Focused implementation agents spawned by domain leads

**Template Variable Sources**:
- Project technology stack (detected from package.json, requirements.txt, etc.)
- Architectural patterns (discovered through code analysis)
- Existing conventions (extracted from codebase analysis)
- Quality standards (identified from existing testing and validation patterns)

### Phase 3: Instructions File Creation

Create `$PROJECT_ROOT/.guild/instructions.md` with:

1. **Agent Specialization Configuration**
   - Detected technology patterns and specialist routing rules
   - Dynamic agent creation based on project analysis
   - Enhanced concurrency with adaptive scaling

2. **Workflow Integration**
   - Reasoning with approach verification
   - Prompt-first pattern detection and analysis
   - Quality standards based on project conventions

3. **Plain English Instructions**
   - Simple, clear rules that all agents must follow
   - Project-specific adaptations and requirements
   - Single source of truth for all Guild behavior

### Phase 4: Validation & Completion

1. **Verify Agent Placement**: Confirm all agents created in `$PROJECT_ROOT/.claude/agents/guild/` directory
2. **Test Context Flow**: Validate coordination protocols
3. **Integration Check**: Ensure seamless integration with existing project workflows

## Success Criteria

- ✅ All Guild agents created in `$PROJECT_ROOT/.claude/agents/guild/` directory (MANDATORY)
- ✅ Planning router properly configured with hierarchical coordination
- ✅ Domain lead agents configured with sub-agent spawning capabilities
- ✅ Project-specific instructions created in `$PROJECT_ROOT/.guild/instructions.md`
- ✅ Coordination protocols established
- ✅ Zero external dependencies - complete self-contained operation

## Agent Templates

{{agent-templates}}

## Configuration Template

{{instructions-template}}
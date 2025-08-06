# /guild:plan

**Usage**: `/guild:plan "task description"`

Create comprehensive task plans and save them to structured MD files for future execution, adjustment, and modification.

## Configuration Check

First, check if Guild is configured for this project by looking for `.guild/instructions.md`.

### If Guild NOT Configured

Display this message:

```
🏛️ **Guild Not Configured** 

Guild is not yet set up for this project. To use planning workflow:

1. **Run Setup**: Use `/guild:setup` to analyze your project and create appropriate agents
2. **Planning Ready**: After setup, use `/guild:plan "task description"` to create detailed task plans
3. **Plan Management**: Plans are saved to .guild/plans/ for future execution and modification

**To get started**: `/guild:setup [optional-guidance]`
```

### If Guild IS Configured

**CRITICAL**: This command MUST activate the specialized 4-stage planning workflow for the provided task description.

Execute comprehensive task planning through the optimized Guild planning system with systematic analysis and structured plan generation.

## Planning Workflow

**MANDATORY PLANNING WORKFLOW**: You MUST follow the specialized 4-stage planning process:

**CRITICAL**: This command executes the specialized 4-stage planning workflow using the following workflow composition from `.guild/overview.md`:

### Workflow Composition: Specialized Planning Process

This command executes the following mandatory workflow sequence:

1. **🧠 Prompt Reasoning**: guild-reasoning-agent analyzes task description, corrects typos, clarifies planning requirements and scope, aligns with project context
2. **🔍 Context Research**: guild-research-agents gather comprehensive background information and technical context
3. **🎯 Strategic Planning**: guild-planning-agent creates detailed implementation specifications and comprehensive documentation
4. **📋 Documentation**: Structured plan generation in `.guild/plans/` directory for future reference and execution

Each stage must be completed before proceeding to the next, with reasoning agent ALWAYS engaged first to ensure planning requirements clarity and project alignment.

**STAGE EXECUTION DETAILS**: All agents MUST follow the complete stage definitions provided in `.guild/overview.md` "Workflow Step Definitions" section. Commands reference but do not redefine these canonical stage specifications.

**PLANNING SPECIALIZATION**: This workflow composition optimizes the standard Guild stages for comprehensive task planning with emphasis on structured documentation, timeline development, and quality assurance. The planning stage generates structured MD files in `.guild/plans/` directory for future reference and execution guidance.

## Plan File Structure

Plans are saved to `.guild/plans/[task-name]-[timestamp].md` with standardized structure:

```markdown
# Task Plan: [Task Name]

**Created**: [Timestamp]
**Status**: Planning Complete
**Estimated Duration**: [Duration]
**Complexity Level**: [Low/Medium/High/Complex]

## Task Overview
- **Objective**: [Clear task objective]
- **Scope**: [Detailed scope definition]
- **Success Criteria**: [Measurable success criteria]

## Implementation Plan
### Phase 1: [Phase Name]
- **Duration**: [Timeline]
- **Deliverables**: [Specific deliverables]
- **Dependencies**: [Required dependencies]
- **Quality Gates**: [Validation checkpoints]

[Additional phases as needed]

## Resource Requirements
- **Skills**: [Required skills and expertise]
- **Tools**: [Required tools and technologies]
- **Infrastructure**: [Infrastructure needs]

## Risk Management
- **Identified Risks**: [Potential risks and challenges]
- **Mitigation Strategies**: [Risk mitigation approaches]
- **Contingency Plans**: [Fallback options]

## Execution Notes
- **Next Steps**: [Immediate next actions]
- **Execution Command**: `/guild:full "[task description]"` or `/guild "[task description]"`
- **Modification Instructions**: Edit this file directly or use `/guild:plan` to regenerate
```

## Command Execution

**EXECUTION FRAMEWORK**: This command follows the standardized execution patterns defined in `.guild/overview.md` "Standard Execution Framework" with the following specializations:

### Task Analysis
- **Parse task description** for planning requirements and scope (Planning Tasks pattern)
- **Agent Selection**: Determine complexity level based on task characteristics and project context
- **Workflow Activation**: Activate specialized 4-stage planning workflow composition

### Execution Protocol
**REFERENCE**: See `.guild/overview.md` "Standard Workflow Execution Protocol" for complete execution requirements.

**COMMAND-SPECIFIC ADAPTATIONS**:
- **Comprehensive Planning**: Focus on systematic task decomposition and strategic planning
- **Timeline Development**: Emphasize realistic timeline creation with milestone planning
- **File Generation**: Generate structured MD files in `.guild/plans/` directory for future reference

### Agent Coordination
**REFERENCE**: See `.guild/overview.md` "Standard Agent Coordination Patterns" for universal coordination protocols.

**PLANNING WORKFLOW AGENTS**:
- **Core System Agents**: guild-task-routing-agent, guild-research-agent (always present)
- **Planning Focus**: Specialized planning agents for comprehensive strategy development and feasibility analysis
- **Quality Focus**: All agents prioritize thoroughness, feasibility, and comprehensive coverage

## Example Usage

```
/guild:plan "Implement user authentication system with JWT tokens and role-based access control"
/guild:plan "Refactor database layer to use repository pattern with proper error handling"
/guild:plan "Create comprehensive test suite for API endpoints with integration testing"
/guild:plan "Set up CI/CD pipeline with automated testing and deployment to staging"
/guild:plan "Optimize application performance and implement caching strategy"
```

## Planning Principles

**EXECUTION COMPLIANCE**: See `.guild/overview.md` "Standard Compliance Requirements" for complete compliance protocols.

**PLANNING BENEFITS**:
- 🎯 **Strategic Focus**: 4 stages optimized specifically for comprehensive planning
- 📋 **Structured Output**: Standardized plan format for consistency and accessibility
- 🔄 **Iterative Planning**: Plans can be modified and refined as needed
- 📈 **Quality Assurance**: Emphasis on feasibility and thorough risk assessment
- ⚡ **Execution Ready**: Plans include clear next steps and execution guidance

**COMPREHENSIVE PLANNING**: This command provides specialized planning workflow with comprehensive analysis, structured documentation, and quality validation to ensure effective task planning and future execution.

The planning workflow engages appropriate planning agents based on the task scope and executes with systematic analysis, thorough research, and quality assurance throughout the entire 4-stage process.
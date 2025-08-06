# /guild:fix

**Usage**: `/guild:fix "bug description"`

Execute focused bug fixing tasks using the specialized 5-stage bug fixing workflow with systematic error detection and comprehensive validation.

First, check if Guild is configured for this project by looking for `.guild/instructions.md` and validate Guild file integrity:

**Configuration Validation**:
1. **Instructions File**: Check for `.guild/instructions.md` (required for Guild operation)
2. **Ignore Patterns**: Check for `.guild/ignore.md` (create default if missing)
3. **Agent Directory**: Verify `.claude/agents/` contains Guild agents
4. **Partial Setup Recovery**: If some files missing, provide guidance for completion

## If Guild NOT Configured

Display this message:

```
🏛️ **Guild Not Configured**

Guild is not yet set up for this project. To use bug fixing workflow:

1. **Run Setup**: Use `/guild:setup` to analyze your project and create appropriate agents
2. **Bug Fixing Ready**: After setup, use `/guild:fix "bug description"` to execute systematic bug resolution
3. **Specialized Process**: Bug fixing follows 5-stage workflow optimized for error detection and resolution

**To get started**: `/guild:setup [optional-guidance]`
```

## If Guild IS Configured

**CRITICAL**: This command MUST activate the specialized 5-stage bug fixing workflow for the provided bug description.

Execute bug fixing tasks through the optimized Guild bug fixing system with mandatory comprehensive analysis and systematic error resolution.

## Custom Prompt & Reasoning

**CRITICAL**: This command operates with specialized reasoning for systematic bug detection and resolution:

### Reasoning Protocol
- **Bug Analysis Logic**: Deep evaluation of bug symptoms, reproduction steps, and root cause identification
- **Systematic Debugging**: Methodical approach to isolating issues and validating hypotheses
- **Root Cause Reasoning**: Comprehensive analysis to identify underlying causes rather than surface symptoms
- **Fix Impact Assessment**: Strategic evaluation of proposed fixes on system stability and functionality
- **Regression Prevention**: Systematic validation to ensure fixes don't introduce new issues

### Bug Fixing Reasoning Framework
1. **Symptom Analysis**: Understand reported behavior and gather reproduction information
2. **Root Cause Investigation**: Systematic analysis to identify underlying technical causes
3. **Solution Strategy**: Develop targeted fixes that address root causes while maintaining system integrity
4. **Impact Validation**: Ensure fixes don't introduce regressions or break existing functionality
5. **Prevention Planning**: Identify patterns and implement measures to prevent similar issues

## Your Task

**MANDATORY BUG FIXING WORKFLOW**: You MUST follow the specialized 5-stage bug fixing process:

**CRITICAL**: This command executes the specialized 5-stage bug fixing workflow using the following workflow composition from `.guild/overview.md`:

### Workflow Composition: Specialized Bug Fixing Process

This command executes the following mandatory workflow sequence:

1. **🧠 Prompt Reasoning**: guild-reasoning-agent analyzes bug description, corrects typos, clarifies symptoms and reproduction steps, aligns with project context
2. **🔍 Context Research**: guild-research-agents gather technical context and debugging information
3. **🎯 Diagnosis Planning**: guild-planning-agent creates systematic debugging strategy
4. **🔨 Implementation**: framework-coupled engineers execute bug fixes with validation
5. **🧪 Testing**: Comprehensive testing and verification of bug resolution

Each stage must be completed before proceeding to the next, with reasoning agent ALWAYS engaged first to ensure bug description clarity and project alignment.

**STAGE EXECUTION DETAILS**: All agents MUST follow the complete stage definitions provided in `.guild/overview.md` "Workflow Step Definitions" section. Commands reference but do not redefine these canonical stage specifications.

**BUG FIXING SPECIALIZATION**: This workflow composition optimizes the standard Guild stages for systematic bug resolution with emphasis on root cause analysis, targeted fixes, and regression prevention.

## Command Execution

**EXECUTION FRAMEWORK**: This command follows the standardized execution patterns defined in `.guild/overview.md` "Standard Execution Framework" with the following specializations:

### Task Analysis
- **Parse bug description** for symptoms, reproduction steps, and technical context (Bug Fixing pattern)
- **Agent Selection**: Determine affected components based on bug type and system architecture
- **Workflow Activation**: Activate specialized 5-stage bug fixing workflow composition

### Execution Protocol
**REFERENCE**: See `.guild/overview.md` "Standard Workflow Execution Protocol" for complete execution requirements.

**COMMAND-SPECIFIC ADAPTATIONS**:
- **Systematic Investigation**: Focus on root cause analysis and targeted fix implementation
- **Regression Prevention**: Emphasize comprehensive testing and validation to prevent new issues
- **System Stability**: Prioritize system stability and minimal disruption approaches

### Agent Coordination
**REFERENCE**: See `.guild/overview.md` "Standard Agent Coordination Patterns" for universal coordination protocols.

**BUG FIXING WORKFLOW AGENTS**:
- **Core System Agents**: guild-task-routing-agent, guild-research-agent (always present)
- **Quality Focus**: Specialized agents prioritize system stability, regression prevention, and thorough validation
- **Investigation Focus**: Deep codebase analysis and systematic debugging with clean fix implementation

## Example Usage

```
/guild:fix "Installation script fails on Windows with permission errors"
/guild:fix "Template processing crashes when handling empty configuration files"
/guild:fix "Package dependency conflicts prevent successful npm install"
/guild:fix "Command parsing fails for prompts containing special characters"
/guild:fix "Memory leak in continuous template processing operations"
```

## Bug Fixing Principles

**EXECUTION COMPLIANCE**: See `.guild/overview.md` "Standard Compliance Requirements" for complete compliance protocols.

**BUG FIXING BENEFITS**:
- 🎯 **Systematic Approach**: 5 stages optimized specifically for bug resolution
- 🔍 **Thorough Investigation**: Comprehensive root cause analysis and context research
- 🛡️ **Regression Protection**: Built-in validation and testing procedures
- 📈 **Quality Focus**: Emphasis on system stability and long-term maintainability
- ⚡ **Efficient Resolution**: Streamlined workflow for effective bug fixing

**SPECIALIZED DEBUGGING**: This command provides a specialized bug fixing workflow with systematic debugging, comprehensive investigation, and thorough validation to ensure effective resolution without introducing regressions.

The bug fixing workflow engages appropriate planning and implementation agents based on the bug scope and executes with systematic analysis, root cause investigation, and quality assurance throughout the entire 5-stage process.
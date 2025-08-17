# /guild:instructions

**Usage**: 
- `/guild:instructions` - Show current project configuration and instructions
- `/guild:instructions "instruction text"` - Add new project instruction
- `/guild:instructions --option value` - Configure specific Guild options

**Purpose**: Configure Guild agent behavior including model assignments, thinking modes, and project-specific instructions.

First, check if Guild is configured for this project using the Read tool:
- Execute: Read `.guild/instructions.md`
- If successful, Guild is configured
- If it fails, Guild is not configured

## If Guild NOT Configured

Display this message:

```
🏛️ **Guild Not Configured**

Guild is not yet set up for this project. To add project instructions:

1. **Run Setup**: Use `/guild:setup` to analyze your project and create the Guild system
2. **Add Instructions**: After setup, use `/guild:instructions "instruction"` to add project instructions
3. **View Instructions**: Use `/guild:instructions` to see all current project instructions

**To get started**: `/guild:setup [optional-guidance]`
```

## If Guild IS Configured

Manage structured project instructions and configuration options in `.guild/instructions.md`.

## Guild System Compliance

Guild instructions management operates within the Guild system architecture:

**System Integration**:
- Follow Guild system rules defined in .guild/overview.md
- Ensure configuration consistency with Guild architecture
- All agents follow instructions in .guild/instructions.md

**Agent Integration**:
- Instructions influence agent behavior and workflows
- Model specifications follow Guild requirements
- Integration with Guild workflow stages

## Usage Modes

### Display Current Configuration
`/guild:instructions` - Show complete project configuration including:
- Custom requirements and project instructions
- Agent model specifications and behavior settings
- Command-specific options and workflow configurations
- Quality standards and validation requirements

### Add Project Instructions
`/guild:instructions "instruction text"` - Add new project-specific instruction
- Instructions influence agent behavior and decision-making
- Automatically timestamped and properly formatted
- Integrated into agent workflows and quality gates

### Configure Guild Options
`/guild:instructions --planning-agent-model opus` - Set planning agent to use Opus model
`/guild:instructions --all-agents-analysis true` - Enable comprehensive analysis mode for all agents
`/guild:instructions --agent-model [agent-name] [model]` - Set specific agent model
`/guild:instructions --quality-standard [standard]` - Set project quality requirements
`/guild:instructions --max-domain-instances [number]` - Set maximum parallel instances for single-domain agents (default: 5)

### Configure Project Structure Options
`/guild:instructions --submodule-mode [integrated|isolated]` - Set submodule handling strategy (default: integrated)
`/guild:instructions --monorepo-strategy [unified|package-scoped]` - Set monorepo coordination approach (default: unified)
`/guild:instructions --cross-language [strict|flexible]` - Set cross-language interface enforcement (default: strict)
`/guild:instructions --boundary-enforcement [true|false]` - Enable structural boundary respect (default: true)
`/guild:instructions --structure-parallelization [true|false]` - Enable structure-aware parallelization (default: true)

## Parallel Execution Limitations

### Single-Domain Agent Instance Limits
**CRITICAL**: To prevent resource exhaustion and maintain coordination efficiency:

- **Default Limit**: Single-domain specialized agents limited to **5 parallel instances** by default
- **Applies To**: Domain-specific agents like:
  - `guild-[domain]-specialist` agents
  - `guild-[domain]-architect` agents  
  - `guild-[scope]-coordinator` agents
  - Any agent focused on a single domain/scope
- **Does NOT Apply To**: 
  - Research agents (unlimited parallelization)
  - Cross-domain integration agents
  - General utility agents
  - Verification agents

### Configuration Options
- Use `--max-domain-instances` to override default (range: 1-10)
- Higher limits may cause coordination overhead
- Lower limits ensure better consistency within domains

### Rationale
Single-domain agents often modify the same files and share domain context. Limiting parallel instances:
- Reduces file-level conflicts
- Improves domain coherence
- Optimizes coordination overhead
- Maintains quality within domain boundaries

## Custom Prompt & Reasoning

**CRITICAL**: This command operates with enhanced reasoning for configuration management:

### Reasoning Protocol
- **Configuration Analysis**: Deep evaluation of current project configuration and requirements
- **Option Validation**: Systematic verification of configuration options against project needs and Guild standards
- **Impact Assessment**: Analysis of how configuration changes will affect agent behavior and workflow performance
- **Compatibility Reasoning**: Evaluation of configuration compatibility with existing project setup and requirements
- **Change Management Logic**: Structured approach to implementing configuration changes with validation and rollback capabilities

### Custom Prompt Integration
**Configuration Reasoning**: Before making any configuration changes, analyze the current state and understand the implications of proposed changes. Validate that new configurations enhance rather than disrupt the development workflow.

**Instruction Processing Logic**: Apply systematic reasoning to categorize and prioritize project instructions. Ensure instructions are clear, actionable, and properly integrated into agent workflows.

**Validation Framework**: Continuously validate that configuration changes align with project goals and maintain system integrity and performance.

## Your Task

### If no argument provided:
Display complete structured configuration from `.guild/instructions.md` including:
1. **Project Instructions** - Custom requirements and behavioral guidelines
2. **Agent Configuration** - Model specifications and behavior settings  
3. **Workflow Options** - Command-specific settings and preferences
4. **Quality Standards** - Validation requirements and acceptance criteria

### If instruction text provided:
1. **Validate Guild configuration** - Check if `.guild/instructions.md` exists and is properly formatted
2. **Add instruction** to `.guild/instructions.md` under appropriate section
3. **Ensure proper formatting** with timestamp and categorization
4. **Update agent references** - Ensure new instructions are reflected in agent behavior
5. **Validate ignore patterns** - Check that new instructions don't conflict with `.guild/ignore.md`:
   ```markdown
   ### Custom Requirements
   - [Existing instructions]
   - [New instruction] (Added: YYYY-MM-DD HH:MM)
   ```
3. **Update agent workflows** to reflect new instruction
4. **Confirm addition** and show updated configuration

### If configuration option provided:
1. **Parse configuration command** and validate option/value
2. **Update structured configuration** in appropriate section
3. **Validate configuration** against Guild requirements
4. **Apply immediate effects** where applicable
5. **Confirm configuration change** and show updated settings

## Instruction Examples

### General Project Instructions
- "Must maintain 90%+ test coverage"
- "All API endpoints require authentication" 
- "Use TypeScript strict mode"
- "Follow company coding standards"
- "Performance budget: <2s page load"

### Architect Assignments for Codebase Maintenance
- "guild:data-architect maintains all database schemas and queries"
- "guild:system-architect maintains API gateway and service integration"
- "guild:global-architect reviews all cross-system architectural changes"
- "guild:security-architect maintains authentication and authorization modules"
- "guild:performance-architect maintains caching and optimization code"

### Specialized Architect Instructions
- "Create guild:security-architect for handling all security-related code"
- "Assign guild:api-architect to maintain REST API design consistency"
- "guild:integration-architect manages all third-party service integrations"

**IMPORTANT**: Architect assignments create ongoing responsibilities for specific codebase areas. Architects assigned via instructions will be automatically engaged for relevant tasks.

Project instructions influence how agents approach tasks and quality gates during the comprehensive workflow.
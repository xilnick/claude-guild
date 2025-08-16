# /guild:instructions Command Specification

## Overview
Configures Guild agent behavior including model assignments, thinking modes, and project-specific instructions. Manages structured project configuration in `{project_root}/.guild/instructions.md`.

## Command Interface

### Usage Modes
```bash
/guild:instructions                           # Display current instructions
/guild:instructions "instruction text"        # Add simple instruction
/guild:instructions --option value            # Update specific setting
/guild:instructions --reset                   # Reset to defaults
```

### Configuration Options
- `--concurrency [number]` - Set default instances per agent type (default: 3)
- `--max-total-agents [number]` - Set maximum total parallel agents (default: 20)
- `--enable-testing [true/false]` - Enable testing stage by default
- `--enable-verification [true/false]` - Enable verification stage by default
- `--enable-research-parallel [true/false]` - Enable parallel research execution
- `--quality-standard [text]` - Set quality requirements description
- `--agent-model [agent] [model]` - Set specific agent model (opus/inherit)
- `--show-plan [true/false]` - Enable plan preview by default (requires confirmation before execution)
- `--approach-verification [true/false]` - Enable approach verification checkpoint (default: true)

## Implementation Requirements

### File Management
```yaml
Location: {project_root}/.guild/instructions.md
Format: Simple English instructions with clear sections
Updates: Read by all commands and applied immediately

Structure:
  # Guild System Instructions
  
  These are simple instructions that all Guild agents and commands follow.
  
  ## Concurrency Settings
  - Simple bullet points with current settings
  
  ## Agent Model Settings  
  - Model assignments for different agent types
  
  ## Workflow Settings
  - Stage execution preferences
  
  ## Task Routing Rules
  - How tasks are assigned to specialists
  
  ## Quality Standards
  - Project quality requirements
  
  ## Project-Specific Rules
  - Custom instructions added by user
```

### Instructions Format

The instructions file should contain simple, clear English instructions that all agents must follow:

```markdown
# Guild System Instructions

Simple instructions that all Guild agents follow.

## Core Settings
- Run adaptive 1-3 instances of each agent type based on workload complexity
- Maximum 20 total agents at once
- Planning agent uses opus model, others inherit
- Balance tasks across available agents

## Workflow Rules
- Main thread: reasoning and requirement analysis only
- Research: parallel project and technology context gathering
- Planning: task decomposition and intelligent routing
- Implementation: parallel execution by specialized agents
- Testing/verification: optional unless complexity requires it

## Agent Creation Rules
- Claude analyzes project and creates needed specialists
- Agents receive focused context for their area
- Route tasks to most appropriate specialist
- No code embedding - use project analysis and Claude's capabilities

## Quality Standards
- Follow discovered project patterns and conventions
- Maintain consistency with existing code
- Validate against requirements and integration points
- Test when complexity or risk requires it

## Project-Specific Rules
[Add your custom instructions here]
```

### Instruction Categories

#### Simple Instructions
```yaml
Examples:
  - "All API endpoints must validate authentication"
  - "Interface components must handle loading states"
  - "Follow TypeScript strict mode"
  - "Test when complexity requires validation"

Processing:
  - Add to Project-Specific Rules section
  - Apply to all relevant agents
  - Clear and actionable language
```

#### Configuration Options
```yaml
Basic Settings:
  --concurrency [N]: Instances per agent type (default: 3)
  --max-agents [N]: Total parallel agents (default: 20)
  --enable-testing [true/false]: Enable testing by default
  --agent-model [agent] [model]: Set specific agent model
```

## Command Logic

### Display Configuration
```yaml
Process:
  1. Check {project_root}/.guild/instructions.md exists
  2. Parse structured sections
  3. Format for display
  4. Show all configurations

Output Sections:
  - Project Intelligence summary
  - Agent configurations
  - Custom requirements
  - Quality standards
  - Architect assignments
```

### Add Instruction
```yaml
Process:
  1. Validate Guild setup exists
  2. Parse instruction type
  3. Check for conflicts
  4. Add with timestamp
  5. Update agent references
  6. Confirm addition

Validation:
  - Clear and actionable
  - No conflicts with system
  - Appropriate section
  - Valid syntax
```

### Set Configuration Option
```yaml
Process:
  1. Parse option and value
  2. Validate option exists
  3. Update configuration
  4. Apply changes immediately
  5. Confirm change

Basic Options:
  --concurrency [N]: Instances per agent type
  --max-agents [N]: Total parallel agents
  --enable-testing [true/false]: Default testing behavior
  --agent-model [agent] [model]: Specific agent models
```

## Simple Configuration

### Instruction Processing
```yaml
Simple Approach:
  - Parse instruction or configuration change
  - Validate against system capabilities
  - Apply change to {project_root}/.guild/instructions.md
  - Confirm successful update

Configuration Rules:
  - Use plain English instructions
  - Keep settings simple and clear
  - Apply changes immediately
  - Validate before saving
```

## Error Handling

### Setup Not Found
```yaml
Response:
  Display setup required message
  Provide setup command
  Explain benefits
  Guide user action
```

### Invalid Configuration
```yaml
Response:
  Identify invalid option
  Explain why invalid
  Suggest correction
  Provide alternatives
```

### Conflict Detection
```yaml
Response:
  Identify conflict
  Explain implications
  Suggest resolution
  Request user decision
```

## Integration Requirements

### System Compliance
```yaml
Requirements:
  - Follow {project_root}/.guild/overview.md rules
  - Maintain agent boundaries
  - Respect workflow stages
  - Preserve system integrity

Authority:
  - User prompts highest priority
  - Instructions override defaults
  - System rules enforced
  - Conflicts reported
```

### Agent Integration
```yaml
Agent Compliance:
  - All agents read instructions
  - Apply configurations
  - Follow requirements
  - Report violations

Model Specifications:
  - Planning agent uses opus
  - Thinking modes assigned
  - Overrides respected
  - Defaults maintained
```

## Best Practices

### Instruction Management
1. Keep instructions clear and specific
2. Group related requirements
3. Document reasoning for complex rules
4. Review periodically for relevance
5. Test impact before adding

### Configuration Optimization
1. Use appropriate thinking modes
2. Balance quality vs performance
3. Assign models based on complexity
4. Monitor resource usage
5. Adjust based on results

## Command Examples

```bash
# Display current instructions
/guild:instructions

# Add simple instruction
/guild:instructions "All data operations must validate input"

# Set concurrency limits
/guild:instructions --concurrency 5
/guild:instructions --max-total-agents 30

# Enable optional stages by default
/guild:instructions --enable-testing true
/guild:instructions --enable-verification true

# Set quality standards
/guild:instructions --quality-standard "maintain 90% test coverage and document complex logic"

# Add project-specific rules (technology-agnostic)
/guild:instructions "Interface components must handle loading states"
/guild:instructions "Service endpoints must validate authentication"
/guild:instructions "Data schemas must include audit trails"

# Set specific agent model
/guild:instructions --agent-model guild-planning-agent opus

# Reset to defaults
/guild:instructions --reset
```

## Notes

- Instructions influence all agent operations
- User prompts always take precedence
- Changes apply immediately
- Architect assignments create ownership
- Regular review improves effectiveness
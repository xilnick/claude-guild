# /guild:instructions Command Specification

## Overview
Configures Guild agent behavior including model assignments, thinking modes, and project-specific instructions. Manages structured project configuration in `.guild/instructions.md`.

## Command Interface

### Usage Modes
```bash
/guild:instructions                           # Display configuration
/guild:instructions "instruction text"        # Add instruction
/guild:instructions --option value            # Set configuration option
```

### Configuration Options
- `--planning-agent-model [model]` - Set planning agent model
- `--all-agents-analysis [true/false]` - Enable comprehensive analysis
- `--agent-model [agent] [model]` - Set specific agent model
- `--quality-standard [standard]` - Set quality requirements

## Implementation Requirements

### File Management
```yaml
Location: .guild/instructions.md
Format: Structured markdown with sections
Updates: Immediate effect on agent behavior

Structure:
  # Guild Agent Instructions
  
  User prompts always override these instructions.
  
  ## Embedded Project Intelligence
  - Project context summary
  - Complexity profile
  - Technology context
  - Quality standards
  
  ## Agent Requirements
  - Model assignments
  - Thinking mode configurations
  - Behavior specifications
  
  ## Custom Requirements
  - Project-specific instructions
  - Timestamp for each addition
```

### Configuration Schema
```yaml
Agent Configuration:
  guild-planning-agent:
    model: opus (required)
    thinking_mode: ultrathink
    
  guild-reasoning-agent:
    thinking_mode: ultrathink
    
  guild-specification-agent:
    thinking_mode: think-harder
    
  Other Agents:
    thinking_mode: think (default)
    model: inherited from Claude Code

Project Instructions:
  - Requirements with timestamps
  - Architect assignments
  - Quality standards
  - Workflow preferences
```

### Instruction Categories

#### General Instructions
```yaml
Examples:
  - "Must maintain 90%+ test coverage"
  - "All API endpoints require authentication"
  - "Use TypeScript strict mode"
  - "Follow company coding standards"
  - "Performance budget: <2s page load"

Processing:
  - Add to Custom Requirements section
  - Include timestamp
  - Update agent behavior
  - Validate against conflicts
```

#### Architect Assignments
```yaml
Pattern: "guild:[role]-architect [responsibility]"

Examples:
  - "guild:data-architect maintains all database schemas"
  - "guild:security-architect handles authentication code"
  - "guild:api-architect maintains REST API consistency"
  
Effects:
  - Creates ongoing responsibility
  - Auto-engages for relevant tasks
  - Maintains code ownership
  - Enforces standards
```

## Command Logic

### Display Configuration
```yaml
Process:
  1. Check .guild/instructions.md exists
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
  3. Check value validity
  4. Update configuration
  5. Apply immediate effects
  6. Confirm change

Options:
  - Model assignments
  - Thinking modes
  - Quality standards
  - Workflow preferences
```

## Reasoning Protocol

### Enhanced Reasoning
```yaml
Configuration Analysis:
  - Evaluate current state
  - Understand implications
  - Assess compatibility
  - Predict impacts

Option Validation:
  - Verify against standards
  - Check project needs
  - Ensure consistency
  - Validate performance

Impact Assessment:
  - Agent behavior changes
  - Workflow effects
  - Quality implications
  - Performance impacts

Change Management:
  - Structured implementation
  - Validation checks
  - Rollback capability
  - Change logging
```

### Instruction Processing
```yaml
Categorization:
  - Identify instruction type
  - Determine scope
  - Assess priority
  - Plan integration

Prioritization:
  - Critical requirements first
  - Quality standards next
  - Preferences last
  - Conflicts resolved

Integration:
  - Update agent workflows
  - Modify quality gates
  - Adjust thinking modes
  - Configure models
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
  - Follow .guild/overview.md rules
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
# Display current configuration
/guild:instructions

# Add project instruction
/guild:instructions "All database queries must use prepared statements"

# Set planning agent model
/guild:instructions --planning-agent-model opus

# Enable comprehensive analysis
/guild:instructions --all-agents-analysis true

# Assign architect responsibility
/guild:instructions "guild:security-architect maintains auth modules"
```

## Notes

- Instructions influence all agent operations
- User prompts always take precedence
- Changes apply immediately
- Architect assignments create ownership
- Regular review improves effectiveness
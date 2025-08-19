# /guild:instructions

---
name: guild-instructions-command
thinking_mode: think
model: inherit
description: "Manage Guild configuration options and project instructions"
category: "Configuration Management"
---

## Purpose

Manage Guild-specific configuration options in `.guild/instructions.md` including agent models, thinking modes, parallel limits, and project-specific instructions.

## Management Command Intelligence

**Shared Intelligence** (for configuration management):
{{shared/principles}}

{{shared/mcp-integration}}

## Guild Configuration Management

### Configuration Options

The `/guild:instructions` command manages these Guild-specific settings:

**Agent Behavior**:
- `model: opus | sonnet | inherit` - Model used by agents
- `thinking_mode: think | think-harder | adaptive | ultrathink` - Agent thinking mode
- `max_parallel_agents: 1-20` - Maximum parallel agents allowed

**Workflow Settings**:
- `planning_router_enabled: true | false` - Enable planning router
- `coordination_overhead_limit: 5-20%` - Maximum coordination time
- `task_isolation: strict | moderate | flexible` - Task isolation level

**MCP Integration**:
- `mcp_auto_detection: enabled | disabled` - Auto-detect MCP servers
- `mcp_parallel_limit: 1-10` - Max concurrent MCP requests
- `enabled_mcp_servers: [list]` - Specific MCP servers to use

**Project Instructions**:
- Custom project-specific rules and constraints
- Technology-specific guidelines
- Quality standards and requirements

### Usage Patterns

```bash
/guild:instructions                                    # Show current configuration
/guild:instructions --model opus                       # Set agent model
/guild:instructions --thinking-mode adaptive           # Set thinking mode
/guild:instructions --max-parallel-agents 15          # Set parallel limit
/guild:instructions "Always validate API responses"    # Add project instruction
```

## Configuration Management Protocol

### Phase 1: Read Current Configuration

**Check Guild Setup**:
1. **Read Configuration**: Use Read tool on `.guild/instructions.md`
2. **Parse Settings**: Extract current Guild configuration options
3. **Display Status**: Show current settings and available options

### Phase 2: Configuration Updates

**For Viewing Configuration**:
```bash
/guild:instructions
```
- Display current Guild configuration settings
- Show available configuration options
- Explain each setting's purpose

**For Setting Options**:
```bash
/guild:instructions --option value
```
- Update specific Guild configuration parameter
- Validate option values against allowed ranges
- Update `.guild/instructions.md` with new setting

**For Adding Instructions**:
```bash
/guild:instructions "instruction text"
```
- Add new project-specific instruction to custom rules section
- Maintain existing configuration structure
- Validate instruction clarity and actionability

### Phase 3: Configuration Validation

**Validation Checklist**:
- ✅ Configuration values are within valid ranges
- ✅ Model assignments are valid and available
- ✅ Thinking modes are supported
- ✅ Parallel agent limits are reasonable
- ✅ MCP server references are valid
- ✅ Instructions are clear and non-conflicting

## Guild Configuration Structure

### Standard Configuration Format
```yaml
# Guild Configuration
agent_behavior:
  model: opus                    # opus | sonnet | inherit
  thinking_mode: adaptive        # think | think-harder | adaptive | ultrathink
  max_parallel_agents: 10        # 1-20

workflow_settings:
  planning_router_enabled: true  # true | false
  coordination_overhead_limit: 10% # 5-20%
  task_isolation: moderate       # strict | moderate | flexible

mcp_integration:
  auto_detection: enabled        # enabled | disabled
  parallel_limit: 5             # 1-10
  enabled_servers:              # List of specific MCP servers
    - github
    - semgrep

project_instructions:
  - "Always validate API responses with proper error handling"
  - "Use existing component patterns from design system"
  - "Follow TypeScript strict mode requirements"
```

## Configuration Option Details

### Agent Model Options
- **opus**: Maximum intelligence for complex tasks
- **sonnet**: Balanced performance and capability
- **inherit**: Use Claude Code's configured model

### Thinking Mode Options
- **think**: Standard reasoning for most tasks
- **think-harder**: Enhanced reasoning for complex problems
- **adaptive**: Auto-adjust based on task complexity
- **ultrathink**: Maximum reasoning for critical tasks

### Parallel Agent Limits
- **1-5**: Conservative, good for small projects
- **6-10**: Balanced, suitable for most projects
- **11-20**: Aggressive, for large complex projects

## Error Handling

### Common Configuration Issues
- **Invalid model name**: Provide list of valid models
- **Out-of-range values**: Show valid ranges for numeric settings
- **Conflicting instructions**: Identify contradictory project rules
- **Missing configuration file**: Guide user to run `/guild:setup`

### Configuration Recovery
- Backup current configuration before changes
- Validate configuration after each update
- Provide rollback capability for problematic changes
- Reset to default values when configuration is corrupted

## Project Integration

This command works with:
- **Setup Command**: Modifies configuration created by `/guild:setup`
- **Agent Command**: Agents read configuration for behavior settings
- **Ignore Command**: Configuration coordinates with ignore patterns
- **MCP Servers**: Applies MCP configuration during operations
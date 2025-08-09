# Extensibility Guide

## Extending Claude Guild

Guild provides several extension points for customization and enhancement.

## Custom Processes

Add new workflow logic by creating processes in `templates/processes.md`:

```yaml
process: my-custom-process
  description: Custom workflow step
  inputs: [task, context]
  steps:
    - analyze:
        action: examine requirements
        output: analysis
    - execute:
        action: perform custom logic
        output: result
  outputs: [result, status]
```

## Custom Agents

Create specialized agents in `templates/agents.md`:

```yaml
---
name: my-specialist-agent
role: Domain-specific expertise
processes: [my-custom-process]
scope: Specific problem domain
parallel: true
---
```

## Custom Commands

Add new commands by creating files in `commands/`:

```markdown
# /guild:mycommand

**Usage**: `/guild:mycommand [options] "task"`

## Workflow

Execute custom workflow with specialized agents.
```

## Configuration

Customize Guild behavior through `.guild/instructions.md`:

```yaml
models:
  custom_agent: opus
  
routing:
  preferences:
    - use my-specialist-agent for domain tasks
    
project:
  custom_patterns:
    - pattern: specific detection rule
      agent: my-specialist-agent
```

## Plugin Architecture

### Plugin Structure

```
my-guild-plugin/
├── processes.md      # New processes
├── agents.md         # New agents  
├── commands/         # New commands
└── integration.md    # Setup instructions
```

### Plugin Integration

1. **Install Plugin**: Copy files to Guild directories
2. **Register Components**: Update configuration
3. **Test Integration**: Verify functionality
4. **Document Usage**: Add to project docs

## Enhancement Patterns

### Pattern Template

```yaml
enhancement: pattern-name
  description: What this enhances
  integration_points:
    - Where it connects to Guild
    - What it modifies or extends
  configuration:
    - Required settings
    - Optional parameters
  compatibility:
    - Guild versions supported
    - Dependencies required
```

### Common Patterns

**Custom Technology Detection**:
```yaml
detection_rule:
  pattern: file or dependency pattern
  technology: detected technology
  agent: appropriate specialist
```

**Workflow Optimization**:
```yaml
optimization:
  trigger: performance condition
  action: optimization strategy
  benefit: expected improvement
```

**Integration Helpers**:
```yaml
integration:
  external_tool: tool name
  connection: how to connect
  usage: when to use
```

## Best Practices

### Extension Guidelines

1. **Keep It Simple**: Follow Guild's simplicity principle
2. **Use Patterns**: Avoid technology-specific hardcoding
3. **Document Well**: Clear usage instructions
4. **Test Thoroughly**: Verify compatibility
5. **Share Back**: Contribute useful extensions

### Compatibility

- **Agent Format**: Use thin agent architecture
- **Process Structure**: Follow standard process template
- **Configuration**: Use Guild configuration schema
- **Commands**: Follow command conventions

## Examples

### Custom Domain Agent

```yaml
---
name: ml-engineer-agent
role: Machine learning and data science specialist
processes: [analyze-data, train-model, evaluate-results]
scope: ML/AI projects
parallel: true
---
```

### Custom Workflow

```yaml
process: ml-workflow
  inputs: [dataset, requirements]
  steps:
    - data_analysis:
        action: analyze dataset characteristics
        output: data_profile
    - model_selection:
        action: choose appropriate algorithms
        output: model_options
    - training:
        action: train and validate models
        output: trained_model
  outputs: [model, metrics, recommendations]
```

### Custom Command

```markdown
# /guild:ml

**Usage**: `/guild:ml "train model for user behavior prediction"`

Execute machine learning workflow with data analysis, model training, and evaluation.
```

## Community Extensions

### Sharing Extensions

1. **Create Repository**: Host extension code
2. **Follow Standards**: Use Guild conventions
3. **Document Usage**: Clear installation guide
4. **Test Compatibility**: Verify with Guild versions
5. **Submit to Registry**: Share with community

### Finding Extensions

- Check Guild extension registry
- Search GitHub for "claude-guild-"
- Community discussions and forums
- Official documentation examples

## Migration

### Updating Extensions

When Guild updates:
1. **Check Compatibility**: Review breaking changes
2. **Update Code**: Modify as needed
3. **Test Functionality**: Verify operation
4. **Update Documentation**: Reflect changes

### Version Compatibility

```yaml
extension_compatibility:
  guild_version: ">=1.0.0"
  claude_code: ">=1.5.0"
  dependencies:
    - required packages
  breaking_changes:
    - version: "2.0.0"
      changes: list of breaking changes
```

## Support

### Getting Help

- Review Guild documentation first
- Check existing extensions for examples
- Ask in community discussions
- Submit issues for bugs
- Contribute improvements back

### Contributing

Guild welcomes community contributions:
- Extension improvements
- New patterns and templates  
- Documentation enhancements
- Bug fixes and optimizations
- Performance improvements
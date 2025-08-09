# Getting Started with Claude Guild

## Installation

```bash
npx claude-guild@latest
```

This installs the Guild system and creates necessary agents for your project.

## Basic Usage

### Standard Workflow
```bash
/guild "implement user authentication"
```

### With Flags
```bash
/guild --test --verify "add payment processing"
```

### Planning Only
```bash
/guild --no-implement "analyze database optimization opportunities"
```

## Command Reference

### Core Commands
- `/guild` - Main workflow execution
- `/guild:setup` - Initialize or update agents
- `/guild:fix` - Bug fixing workflow
- `/guild:refactor` - Code improvement
- `/guild:plan` - Planning without implementation

### Workflow Flags
| Flag | Purpose |
|------|---------|
| `--no-reason` | Skip analysis stage |
| `--no-plan` | Skip planning stage |
| `--no-implement` | Planning only mode |
| `--refactor` | Enable refactoring |
| `--test` | Add testing |
| `--verify` | Validate results |
| `--project` | Project-wide scope |

## Configuration

Edit `.guild/instructions.md` to customize:

```yaml
models:
  planning: opus
  implementation: sonnet

parallel:
  enabled: true
  max_agents: 3
```

## Common Workflows

### Feature Development
```bash
/guild "create dashboard with real-time updates"
```
Guild will:
1. Analyze requirements
2. Research patterns
3. Plan implementation
4. Execute in parallel (UI + API + Database)
5. Validate results

### Bug Fixing
```bash
/guild:fix "users cannot login after password reset"
```
Sequential investigation and repair with targeted fixes.

### Refactoring
```bash
/guild --refactor --project "optimize component structure"
```
Distributed code improvement across entire project.

### Testing
```bash
/guild --test "add tests for payment module"
```
Parallel test generation and execution.

## Best Practices

1. **Be Specific**: Clear task descriptions yield better results
2. **Use Flags**: Control workflow stages for efficiency
3. **Review Plans**: Check planning output before implementation
4. **Monitor Progress**: Watch agent execution for insights
5. **Iterate**: Refine and improve incrementally

## Setup Process

### How Setup Works

The `/guild:setup` command analyzes your project and creates specialized agents:

1. **Technology Detection**: Identifies patterns from project structure and dependencies
2. **Agent Creation**: Generates thin agents based on detected patterns
3. **Context Injection**: Adds relevant knowledge to each agent
4. **Boundary Definition**: Sets operational scopes for each agent

### Standalone Mode

Create self-contained specialist agents:
```bash
/guild:setup --standalone
```

This creates domain experts (security, performance, accessibility) that operate independently of the Guild system.

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| **Guild not configured** | Run `/guild:setup` to initialize |
| **Slow execution** | Reduce parallel agents, use specific descriptions |
| **Wrong agent behavior** | Check `.guild/instructions.md` configuration |
| **Technology not detected** | Manually specify in instructions file |

### Performance Tips

- **Use specific task descriptions** for better routing
- **Skip unnecessary stages** with appropriate flags
- **Enable parallelization** for independent tasks
- **Review agent boundaries** if scope issues occur

## Next Steps

1. Run `/guild:setup` to configure your project
2. Try a simple task to see the workflow
3. Customize `.guild/instructions.md` as needed
4. Explore advanced flags and commands

## Advanced Configuration

### Custom Instructions

Modify `.guild/instructions.md` to:
- Set model preferences
- Control parallelization
- Define custom routing rules
- Add project-specific context

### Extension Points

- **Custom Processes**: Add to `.guild/processes/`
- **Custom Agents**: Add to `.guild/agents/`
- **Custom Commands**: Add to `.claude/commands/`
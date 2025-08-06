# Guild Ignore Management

```yaml
frontend_description: "Manage Guild workflow ignore patterns for files and folders"
category: "Configuration"
```

## Overview

The `guild-ignore` command manages ignore patterns for the Guild workflow, maintaining a `.guild/ignore.md` file that specifies which files and folders should be excluded from Guild operations unless explicitly requested.

## Usage

```bash
npx claude-guild ignore [action] [pattern]
```

## Actions

### View Current Ignore Patterns
```bash
npx claude-guild ignore
npx claude-guild ignore list
```

### Add Ignore Pattern
```bash
npx claude-guild ignore add <pattern>
npx claude-guild ignore add "*.log"
npx claude-guild ignore add "node_modules/"
```

### Remove Ignore Pattern
```bash
npx claude-guild ignore remove <pattern>
npx claude-guild ignore remove "*.log"
```

### Reset to Defaults
```bash
npx claude-guild ignore reset
```

## Default Ignore Patterns

By default, Guild ignores these files and folders:
- `.claude/` - Claude Code configuration
- `CLAUDE.md` - Claude instructions
- `.guild/` - Guild configuration and generated files
- `.serena/` - Serena agent configuration and memories

## Guild System Compliance

**CRITICAL COMPLIANCE REQUIREMENTS**: Guild ignore management MUST operate within Guild system architecture:

#### System Integration
1. **Follow Guild system rules defined in .guild/overview.md** for ignore pattern management and file exclusion protocols
2. **Guild System Authority**: Reference .guild/overview.md as master authority for all Guild system compliance requirements
3. **Configuration Consistency**: Ensure ignore patterns align with Guild workflow requirements defined in system overview

#### Agent Compliance
- **Automatic Enforcement**: All Guild agents MUST respect .guild/ignore.md patterns unless explicitly overridden
- **Pattern Validation**: Ignore patterns must not conflict with essential Guild system files and workflows
- **Override Protocol**: Users can explicitly request access to ignored files through direct naming in task prompts

## Integration with Guild Commands

All Guild commands automatically respect patterns in `.guild/ignore.md`:

**Automatic Compliance**:
- **Guild Agents**: All agents automatically exclude files matching ignore patterns unless explicitly requested
- **File Operations**: Read, write, search operations respect ignore patterns
- **Template Processing**: Template generation skips ignored files and folders  
- **Research Tasks**: Context research ignores specified patterns for focused analysis

**Pattern Override**: Users can explicitly request access to ignored files by naming them directly in task prompts.

## Example

```bash
# View current ignore patterns
npx claude-guild ignore

# Add a new ignore pattern  
npx claude-guild ignore add "*.tmp"

# Remove an ignore pattern
npx claude-guild ignore remove "*.tmp"

# Reset to default patterns
npx claude-guild ignore reset
```

## Notes

- Guild will respect these ignore patterns for all file operations
- Patterns use standard glob syntax
- Files can still be accessed if explicitly requested by the user
- Changes take effect immediately for new Guild operations
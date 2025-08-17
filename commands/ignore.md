# Guild Ignore Management

```yaml
frontend_description: "Configure file exclusion patterns that Guild agents must respect during workflow execution"
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

## Structure-Aware Ignore Patterns

Guild automatically handles complex project structures:

**Submodule Integration**:
- Respects `.gitignore` files in each submodule
- Applies root-level ignore patterns across all submodules
- Maintains submodule boundary awareness during ignore processing
- Coordinates ignore patterns across main project and submodules

**Monorepo Package Support**:
- Honors workspace package-specific ignore patterns
- Applies workspace-level ignores across all packages
- Respects package boundary isolation while maintaining coordination
- Integrates with package.json ignore configurations

**Multi-Language Project Handling**:
- Detects and applies language-specific ignore patterns
- Coordinates cross-language build artifact exclusions
- Maintains interface file visibility across language boundaries
- Supports polyglot project ignore coordination

**Structure Boundary Preservation**:
- Maintains component isolation through ignore patterns
- Enables cross-boundary operations when explicitly requested
- Preserves structural integrity while allowing coordination
- Supports hierarchical ignore pattern inheritance

## Guild System Compliance

Guild ignore management operates within the Guild system architecture:

**System Integration**:
- Follow Guild system rules defined in .guild/overview.md
- Ensure ignore patterns align with Guild workflow requirements

**Agent Compliance**:
- All Guild agents respect .guild/ignore.md patterns automatically
- Users can override by explicitly naming ignored files in tasks

## Integration with Guild Commands

All Guild commands automatically respect patterns in `.guild/ignore.md`:

**Automatic Behavior**:
- Guild agents exclude files matching ignore patterns
- File operations respect ignore patterns
- Template processing skips ignored files
- Research tasks ignore specified patterns for focused analysis

**Override**: Users can explicitly request access to ignored files by naming them directly.

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
# /guild:ignore Command Specification

## Overview
Manages soft ignore patterns for Guild agents by maintaining a `{project_root}/.guild/ignore.md` file. This file works like .gitignore but implements "soft ignore" behavior - files matching patterns are ignored during normal Guild operations but can still be accessed when explicitly requested by the user.

## Command Interface

### Usage
```bash
/guild:ignore [action] [pattern]
```

### Actions
- `list` or no action - Display current ignore patterns
- `add <pattern>` - Add a new ignore pattern
- `remove <pattern>` - Remove an existing pattern
- `reset` - Reset to default patterns

## Implementation Requirements

### File Management
```yaml
Location: {project_root}/.guild/ignore.md
Format: Markdown with structured pattern list
Updates: Immediate effect on all Guild operations

Structure:
  # Guild Ignore Patterns
  
  # Files and directories listed here are soft-ignored by Guild agents.
  # They won't be analyzed or modified during normal operations,
  # but can still be accessed when explicitly requested.
  
  # System files
  .git/
  .DS_Store
  *.log
  *.tmp
  
  # Dependencies
  node_modules/
  __pycache__/
  
  # Build outputs
  build/
  dist/
```

### Default Patterns
```yaml
Core System Files:
  - .claude/
  - CLAUDE.md
  - {project_root}/.guild/
  - .serena/
  - .env*
  - .git/
  - .DS_Store
  - *.log
  - *.tmp
  - .cache/

Technology-Specific:
  - Added based on detected technology stack
  - node_modules/ for JavaScript projects
  - __pycache__/ for Python projects
  - target/ for Rust projects
  - build/ dist/ for build outputs
```

### Agent Compliance

#### Enforcement Protocol
```yaml
Automatic Respect:
  - All Guild agents check ignore patterns
  - File operations skip ignored paths
  - Search operations exclude patterns
  - Template processing respects exclusions

Override Mechanism:
  - User explicitly names ignored file
  - Direct path reference in task
  - Explicit override flag
  - Emergency access needs
```

#### Integration Points
```yaml
Agent Integration:
  - Read {project_root}/.guild/ignore.md on initialization
  - Apply patterns to all file operations
  - Log when patterns are applied
  - Report when override occurs

Command Integration:
  - /guild respects patterns
  - /guild:setup excludes from analysis
  - All subcommands honor exclusions
```

## Command Logic

### List Patterns
```yaml
Process:
  1. Check if {project_root}/.guild/ignore.md exists
  2. If not, create with defaults
  3. Parse and display patterns
  4. Show pattern count and status

Output Format:
  🏛️ Guild Ignore Patterns
  
  Current patterns (X total):
  • Pattern 1
  • Pattern 2
  ...
  
  Status: Active/Inactive
```

### Add Pattern
```yaml
Process:
  1. Validate pattern syntax
  2. Check for duplicates
  3. Add to {project_root}/.guild/ignore.md
  4. Sort patterns for consistency
  5. Confirm addition

Validation:
  - Valid glob syntax
  - No path traversal
  - No system file patterns
  - Meaningful pattern
```

### Remove Pattern
```yaml
Process:
  1. Check pattern exists
  2. Confirm if core pattern
  3. Remove from file
  4. Update file structure
  5. Confirm removal

Protection:
  - Warn about core patterns
  - Prevent critical removals
  - Suggest alternatives
```

### Reset Patterns
```yaml
Process:
  1. Confirm reset action
  2. Restore default patterns
  3. Add technology-specific patterns
  4. Save to {project_root}/.guild/ignore.md
  5. Report changes

Defaults Include:
  - Core system files
  - Common ignore patterns
  - Detected technology patterns
```

## Error Handling

### Common Errors
```yaml
File Not Found:
  - Create {project_root}/.guild/ignore.md with defaults
  - Continue with operation
  
Invalid Pattern:
  - Report syntax error
  - Suggest correction
  - Abort operation
  
Permission Denied:
  - Report access issue
  - Suggest fix
  - Provide alternative
```

## Pattern Syntax

### Supported Patterns
```yaml
Glob Patterns:
  - * - Match any characters
  - ? - Match single character
  - ** - Match directories recursively
  - [abc] - Character sets
  - {a,b} - Alternatives

Examples:
  - *.log - All log files
  - build/ - Build directory
  - **/*.tmp - Temp files in any directory
  - .env* - All env files
```

## Best Practices

### Pattern Organization
1. Group related patterns
2. Comment complex patterns
3. Sort alphabetically within groups
4. Keep patterns specific
5. Test pattern effects

### Performance Considerations
- Minimize regex complexity
- Use specific paths when possible
- Avoid overlapping patterns
- Cache compiled patterns
- Batch pattern checks

## Integration Requirements

### Guild System Compliance
- Follow system rules in {project_root}/.guild/overview.md
- Maintain consistency with other commands
- Respect agent boundaries
- Preserve user overrides

### Quality Standards
- Immediate pattern application
- Clear user feedback
- Robust error handling
- Performance optimization
- Comprehensive validation

## Command Examples

```bash
# View current patterns
/guild:ignore

# Add a pattern
/guild:ignore add "*.backup"

# Remove a pattern
/guild:ignore remove "*.tmp"

# Reset to defaults
/guild:ignore reset
```

## Notes

- Patterns take effect immediately
- Changes persist across sessions
- Explicit requests override patterns
- Patterns apply to all Guild operations
- Regular review recommended
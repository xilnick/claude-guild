# /guild:ignore

---
name: guild-ignore-command
thinking_mode: think
model: inherit
description: "Manage Guild ignore patterns for file exclusion"
category: "Configuration Management"
---

## Purpose

Guild ignore pattern management command for configuring which files and directories should be excluded from Guild operations via `.guild/ignore.md`.

## Management Command Intelligence

**Shared Intelligence** (for configuration management):
{{shared/principles}}

{{shared/mcp-integration}}

## Command Overview

The `/guild:ignore` command manages ignore patterns that Guild agents must respect during workflow execution, preventing unwanted file modifications or analysis.

### Usage Patterns

```bash
/guild:ignore                                 # Show current ignore patterns
/guild:ignore add "*.log"                     # Add ignore pattern
/guild:ignore remove "temp/"                  # Remove ignore pattern
/guild:ignore preset node                     # Apply Node.js ignore preset
```

## Ignore Pattern Management Protocol

### Phase 1: Pattern File Detection

**Check Ignore Configuration**:
1. **Read Patterns**: Use Read tool on `.guild/ignore.md`
2. **Analyze Status**: 
   - If file exists: Parse existing ignore patterns
   - If file missing: Create with default patterns

### Phase 2: Pattern Operations

**For Viewing Patterns**:
```bash
/guild:ignore
```
- Read and display current `.guild/ignore.md` content
- Show active ignore patterns by category
- Display pattern syntax examples

**For Adding Patterns**:
```bash
/guild:ignore add "pattern"
```
- Add new ignore pattern to appropriate category
- Validate pattern syntax
- Prevent duplicate patterns

**For Removing Patterns**:
```bash
/guild:ignore remove "pattern"
```
- Remove specified pattern from ignore file
- Confirm pattern exists before removal
- Maintain file structure

**For Preset Application**:
```bash
/guild:ignore preset [language/framework]
```
- Apply common ignore patterns for technology stack
- Merge with existing patterns (no duplicates)
- Available presets: node, python, java, go, react, etc.

### Phase 3: Pattern Validation

**Validation Checklist**:
- ✅ Pattern syntax is valid (glob patterns, regex if supported)
- ✅ No conflicting patterns that would cancel each other
- ✅ Critical project files are not accidentally ignored
- ✅ Performance impact is reasonable (not too many patterns)
- ✅ Patterns are organized by category for maintainability

## Ignore Pattern Categories

### Standard Categories
```markdown
# .guild/ignore.md structure

## Build Artifacts
*.log
dist/
build/

## Dependencies
node_modules/
.venv/
vendor/

## Environment Files
.env
.env.local
*.key

## IDE Files
.vscode/
.idea/
*.swp

## Custom Project Patterns
# Add project-specific patterns here
```

### Pattern Syntax Support
- **Glob Patterns**: `*.log`, `temp/**`, `src/*.tmp`
- **Directory Patterns**: `node_modules/`, `/absolute/path/`
- **File Extensions**: `*.tmp`, `*.cache`, `*.backup`
- **Negation**: `!important.log` (include despite other patterns)

## Integration with Guild Operations

### Agent Respect Patterns
- All Guild agents automatically respect ignore patterns
- Patterns apply to file reading, writing, and analysis
- Agents can override patterns only with explicit user permission

### MCP Server Integration
- Ignore patterns apply to MCP server operations
- File search tools respect ignore patterns
- Repository analysis tools exclude ignored files

### Performance Optimization
- Ignored files are excluded from project analysis
- Reduces processing time for large codebases
- Improves agent focus on relevant files

## Pattern Management Best Practices

### Pattern Organization
- Group patterns by purpose (build, dependencies, etc.)
- Add comments explaining non-obvious patterns
- Keep patterns as specific as possible
- Regular review and cleanup of unused patterns

### Security Considerations
- Always ignore sensitive files (credentials, keys)
- Ignore temporary files that may contain sensitive data
- Review patterns when adding new tools or dependencies
- Consider version control ignore patterns alignment

### Performance Guidelines
- Avoid overly broad patterns that require extensive matching
- Use directory patterns for entire directory trees
- Prefer specific file extensions over complex regex
- Monitor ignore file size and complexity

## Error Handling

### Common Issues
- **Invalid pattern syntax**: Provide syntax correction guidance
- **Conflicting patterns**: Identify and resolve conflicts
- **Over-broad patterns**: Warn about patterns that might ignore too much
- **Missing critical ignores**: Suggest essential patterns for detected tech stack

### Recovery Procedures
- Backup ignore patterns before major changes
- Reset to preset patterns for known technology stacks
- Merge user patterns with preset patterns safely
- Validate patterns against actual project structure

## Technology Stack Detection

### Automatic Preset Suggestions
The command can analyze the project structure and suggest appropriate ignore presets:

- **Node.js Projects**: Detect `package.json`, suggest node preset
- **Python Projects**: Detect `requirements.txt`/`pyproject.toml`, suggest python preset  
- **Java Projects**: Detect `pom.xml`/`build.gradle`, suggest java preset
- **Go Projects**: Detect `go.mod`, suggest go preset
- **Multi-language Projects**: Combine multiple presets

### Smart Pattern Recommendations
- Analyze existing files to recommend ignore patterns
- Detect build tools and suggest their artifact patterns
- Identify development tools and suggest their ignore patterns
- Warn about common security risks (exposed credentials, etc.)

## Project Integration

This command integrates with:
- **Setup Command**: Creates initial ignore patterns during project setup
- **Agent Command**: All agents respect ignore patterns during execution  
- **Instructions Command**: Ignore settings coordinate with instruction configuration
- **MCP Servers**: File system operations respect ignore patterns
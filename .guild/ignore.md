# Guild Ignore Patterns

**CRITICAL - MANDATORY FOR ALL AGENTS**: All Guild agents MUST respect the ignore patterns defined in this file.

**Soft Ignore Behavior**: These patterns are automatically respected during normal operations. However, if explicitly asked to work with or examine ignored files, agents should override these patterns and access the requested files.

```
.claude/
CLAUDE.md
.guild/
.serena/
.env*
node_modules/
dist/
build/
.git/
.DS_Store
*.log
*.tmp
.cache/
coverage/
```
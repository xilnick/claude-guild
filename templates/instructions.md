# Guild Project Instructions

This file contains project-specific instructions that customize Guild agent behavior and workflow execution.

## Agent Configuration

### Model Assignments
Configure specific models for different agent types based on task complexity:

```yaml
# High-complexity agents (reasoning, planning, coordination)
guild-reasoning-agent: opus
guild-planning-agent: opus

# Standard implementation agents  
guild-*-engineer: sonnet

# Research and verification agents
guild-*-research-agent: sonnet
guild-verification-agent: sonnet
```

### Thinking Mode Configuration
Configure thinking modes for different agent types:

```yaml
# Strategic agents requiring deep analysis
guild-reasoning-agent: ultrathink
guild-planning-agent: ultrathink

# Implementation and research agents
guild-*-engineer: think
guild-*-research-agent: think
guild-verification-agent: think
```

## Workflow Customization

### Default Stage Configuration
Customize which stages are enabled by default for `/guild` commands:
- **Default Stages**: reasoning, planning, implementation
- **Optional Stages**: Add `--refactor`, `--test`, `--verify` flags as needed
- **Research Integration**: Automatic context research when complexity detected

### Quality Standards
- **Code Quality**: All engineers follow mandatory simplicity and maintainability principles
- **Refactoring**: Systematic code improvement with duplication elimination and complexity reduction
- **Ignore Patterns**: Agents respect exclusion patterns in `.guild/ignore.md`

## Context Provider Configuration

### Research Integration
Configure context research capabilities with parallel execution support:
- **MCP Servers**: Use available MCP servers for official documentation research
- **WebSearch**: Community best practices and emerging technology research  
- **Project Analysis**: Codebase pattern recognition and convention detection
- **Parallel Research**: Multiple research agents with context selection mechanisms

### Research Context Selection
Configure parallel research execution based on task complexity:
```yaml
# Parallel research triggers
parallel-research-triggers:
  - complex-task-detection: auto
  - multiple-technology-stack: auto
  - large-codebase-analysis: auto
  - comprehensive-research-mode: manual

# Context selection mechanisms  
research-context-areas:
  project-research:
    - codebase-analysis
    - technology-stack-analysis
    - project-constraints
    - code-quality-assessment
  global-research:
    - framework-best-practices
    - community-standards
    - technology-trends
    - integration-patterns
```

### Research Scope
- **Project Research**: Focus on existing codebase patterns and conventions with parallel context analysis
- **Global Research**: Community standards and framework best practices with parallel external research
- **Technology Discovery**: Automatic technology stack detection and specialization
- **Context Coordination**: Smart context selection to avoid research overlap and maximize coverage

## Project-Specific Customizations

### Technology Stack
Configure framework-specific behaviors:
```yaml
# Example: Framework-specific configurations
framework-specific-patterns: true
test-framework-integration: auto-detect
package-manager-preference: npm
```

### Development Workflow
Customize development workflow behaviors:
- **Error Handling**: Comprehensive error detection and systematic debugging
- **Testing Strategy**: Automated test creation and validation protocols
- **Performance**: Code optimization balanced with maintainability

---

**Note**: Modify sections above to customize Guild behavior for your specific project requirements.

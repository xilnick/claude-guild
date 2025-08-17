# Core Principles Module
**Version**: 2.4.0 | **Last Updated**: 2025-01-17 | **Dependencies**: None

## Purpose
Fundamental principles that guide all Guild system behavior. This module is embedded into the setup command.

## Embedded Intelligence

### Claude-First Philosophy with Thinking Modes

**Core Approach**: Trust Claude's intelligence to understand, analyze, and implement appropriately based on project context, using appropriate thinking modes for optimal cognitive resource allocation.

**Thinking Mode Strategy**:
- **ultrathink**: Complex architectural decisions, project-wide analysis, specialist detection
- **think harder**: Strategic planning, coordination patterns, quality assessments  
- **think**: Standard implementation, routine operations, pattern following

**Key Principles**:
- **Prompt-driven**: All behavior defined through prompts, not hardcoded patterns
- **Thinking-optimized**: Match cognitive complexity to task requirements
- **Dynamic adaptation**: Claude determines optimal approaches for each project
- **Technology-agnostic**: Universal patterns that work with any tech stack
- **Context-aware**: Intelligence emerges from understanding project patterns

### Agent Intelligence Framework

**Dynamic Agent Creation**:
- Claude analyzes project and determines needed specialists
- Agents created based on actual patterns found, not predefined types
- Each agent receives focused context for their specialization
- No code embedding - agents use project analysis and Claude's capabilities

**Basic Agent Pattern**:
```yaml
Agent Creation Process:
  1. Analyze project structure and patterns
  2. Identify areas needing specialization
  3. Create agents with appropriate context
  4. Route tasks to most suitable specialists

Agent Intelligence:
  - Context package with project patterns
  - Task-specific requirements
  - Integration points and constraints
  - Quality standards from project analysis
```

### Intelligent Parallel Architecture

**Parallel-First Philosophy**: Think harder about every task to identify parallelization opportunities and optimize execution strategy.

**Core Parallel Strategy**:
- **Default assumption**: Most tasks benefit from parallel execution
- **Required evaluation**: Every task should be assessed for parallel opportunities  
- **Dynamic scaling**: 2 instances for 3-4 tasks, 3 instances for 5+ tasks (per specialist type)
- **Justification needed**: Single-threaded execution should have clear reasoning
- **Performance target**: 80%+ of tasks executed in parallel

**Parallel Execution Patterns**:
```yaml
Different Specialists (Cross-domain):
  Strategy: Execute different specialist types simultaneously
  Example: Frontend + Backend + DevOps specialists work in parallel
  Thinking: Standard coordination with clear boundaries

Same Specialist (Multi-instance):
  Trigger: >2 similar tasks detected
  Scaling Strategy: 
    - 1-2 tasks → Single instance
    - 3-4 tasks → 2 instances  
    - 5+ tasks → 3 instances
  Thinking: Think harder to optimize task distribution and prevent conflicts

Hybrid Execution:
  Approach: Combine cross-domain and multi-instance strategies
  Coordination: File ownership with intelligent task affinity
  Thinking: Ultrathink for complex coordination scenarios
```

**Intelligent Workflow Strategy**:
- Main thread: Reasoning and requirement analysis (ultrathink)
- Planning agent: Parallel execution planning and routing (think harder for coordination)
- Implementation: Specialist execution with intelligent coordination (think for standard tasks)
- Quality: Cross-specialist validation with appropriate thinking modes

### Quality Through Intelligence

**Adaptive Quality**:
- Claude determines appropriate quality standards from project context
- Follow discovered patterns and conventions
- Validate against requirements and integration points
- Test when complexity or risk requires it

**Thinking Mode Allocation**:
- **ultrathink**: Architectural decisions, project analysis, complex specialist coordination
- **think harder**: Strategic planning, parallel optimization, quality gates, complex integration
- **think**: Standard implementation, routine tasks, pattern following, simple coordination

### Project Structure Intelligence

**Single-Root Architecture**:
- Guild maintains single `.guild/` directory at project root (working directory)
- Single `.claude/agents/guild/` directory manages entire project hierarchy
- All complex structures (submodules, monorepos, nested projects) coordinated from root
- No nested Guild configurations - one control point for entire project

**Comprehensive Project Coverage**:
- **Git Submodules**: Recursive detection and mapping from project root
- **Multi-Language Projects**: Single agent set handles polyglot codebases  
- **Monorepos**: Workspace-aware operations coordinated from root
- **Nested Structures**: Deep recursive analysis while maintaining root coordination
- **Cross-Repository Dependencies**: Context includes inter-repo relationships

**Project Structure Context**:
```yaml
Structure Intelligence:
  root_path: Working directory (single source of truth)
  submodules: Mapped paths and boundaries from .gitmodules
  packages: Monorepo package structure (lerna, yarn, pnpm workspaces)
  languages: File path to language mapping across entire project
  config_files: All configuration files discovered recursively
  boundaries: Submodule, package, and service boundaries
  dependencies: Cross-boundary relationships and interfaces
```

### Soft Ignore Pattern Respect

**Ignore File Management**:
- Guild maintains `{project_root}/.guild/ignore.md` with gitignore-like patterns
- Files matching patterns are soft-ignored during normal operations
- Explicit user requests override ignore patterns
- Agents must check patterns before file operations

**Soft Ignore Behavior**:
- Ignored files excluded from automatic analysis and search
- Ignored files not modified during batch operations
- User can still explicitly request operations on ignored files
- Clear feedback when accessing ignored files by request

## Key Principles

1. **Claude-First**: Trust Claude's capabilities over hardcoded logic
2. **Thinking-Optimized**: Use appropriate thinking modes for cognitive efficiency
3. **Parallel-Intelligent**: Think harder to identify and implement parallel opportunities
4. **Context-Driven**: All decisions based on actual project analysis
5. **Evaluated Parallelization**: Every task should be assessed for parallel execution
6. **Simplicity**: Prefer clear patterns over complex specifications
7. **Adaptability**: System adapts to any project type or technology
8. **Performance**: Intelligent parallel execution targeting 80%+ parallel task rate

## Unified Conflict Resolution Strategy

**Intelligent Coordination Principles**:
- **Prevention First**: File ownership prevents most conflicts
- **Optimistic Execution**: Work in parallel with rollback capability  
- **Graceful Degradation**: Continue with partial success when conflicts occur
- **Think Harder**: Use enhanced thinking for complex coordination decisions

**Resolution Strategy**:
```yaml
Prevention: File-level ownership assignment and clear boundaries
Detection: Monitor file conflicts and integration violations  
Resolution: Think harder about priority-based resolution with rollback
Escalation: Ultrathink for complex conflicts requiring human guidance
```

**Implementation**: Lock-free coordination with intelligent priority rules and clear conflict reporting

## Integration Points

### Setup Command Embedding
This module provides core principles for all Guild operations.

### Module Dependencies
None - this is the foundation module.

### Module Consumers
- All other core modules
- Setup command
- Agent generation logic

## Maintainability Guidelines

**Module Update Protocol**:
1. Update version number when making changes
2. Update "Last Updated" timestamp
3. Verify dependencies are still accurate
4. Test integration with dependent modules
5. Update documentation cross-references

**Version Numbering**:
- Major.Minor.Patch format
- Major: Breaking changes to module interface
- Minor: New features or significant enhancements
- Patch: Bug fixes and small improvements

**Dependency Validation**:
- Verify all referenced modules exist
- Check for circular dependencies
- Ensure integration points remain valid
- Test module loading order
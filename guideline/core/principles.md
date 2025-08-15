# Core Principles Module
**Version**: 2.1.0 | **Last Updated**: 2024-08-14 | **Dependencies**: None

## Purpose
Fundamental principles that guide all Guild system behavior. This module is embedded into the setup command.

## Embedded Intelligence

### Claude-First Philosophy

**Core Approach**: Trust Claude's intelligence to understand, analyze, and implement appropriately based on project context.

**Key Principles**:
- **Prompt-driven**: All behavior defined through prompts, not hardcoded patterns
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

### Parallel Execution Principles

**Simple Parallelization**:
- Work in parallel when tasks are independent
- Coordinate only at integration boundaries
- Default: 3 instances per agent type, max 20 total
- Load balance across available agents

**Workflow Strategy**:
- Main thread: reasoning and requirement analysis only
- Parallel research: project + technology context
- Planning: task decomposition and routing
- Parallel implementation: specialized agents work independently

### Quality Through Intelligence

**Adaptive Quality**:
- Claude determines appropriate quality standards from project context
- Follow discovered patterns and conventions
- Validate against requirements and integration points
- Test when complexity or risk requires it

**Intelligence Allocation**:
- Complex analysis: Enhanced thinking modes
- Routine implementation: Standard thinking mode
- Strategic planning: Comprehensive analysis mode

### Soft Ignore Pattern Respect

**Ignore File Management**:
- Guild maintains `.guild/ignore.md` with gitignore-like patterns
- Files matching patterns are soft-ignored during normal operations
- Explicit user requests override ignore patterns
- Agents must check patterns before file operations

**Soft Ignore Behavior**:
- Ignored files excluded from automatic analysis and search
- Ignored files not modified during batch operations
- User can still explicitly request operations on ignored files
- Clear feedback when accessing ignored files by request

## Key Invariants

1. **Claude-First**: Trust Claude's capabilities over hardcoded logic
2. **Context-Driven**: All decisions based on actual project analysis
3. **Simplicity**: Prefer simple patterns over complex specifications
4. **Adaptability**: System adapts to any project type or technology
5. **Performance**: Intelligent parallel execution without over-complexity

## Unified Conflict Resolution Strategy

**Core Principles**:
- **Prevention First**: Use ownership rules and boundary definitions to prevent conflicts
- **Optimistic Concurrency**: Allow parallel work with rollback mechanisms
- **Graceful Degradation**: Continue with partial success when conflicts occur
- **Clear Escalation**: Well-defined paths for human intervention

**Resolution Hierarchy**:
```yaml
1. Automatic Prevention:
   - File-level ownership assignment
   - Clear component boundaries
   - Dependency analysis and scheduling

2. Real-Time Detection:
   - Monitor file and resource conflicts
   - Track integration boundary violations
   - Identify dependency resolution issues

3. Automatic Resolution:
   - Simple conflicts resolved via priority rules
   - Optimistic rollback and retry mechanisms
   - Work redistribution for load balancing

4. Manual Escalation:
   - Complex conflicts requiring human decision
   - Integration failures beyond automatic resolution
   - Quality issues requiring review
```

**Implementation Strategy**:
- Lock-free coordination with conflict detection
- Priority-based resolution (first-come-first-served for equal priority)
- Context preservation during rollback operations
- Clear reporting of resolution actions taken

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
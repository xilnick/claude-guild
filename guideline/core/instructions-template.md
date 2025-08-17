# Instructions Template Module
**Version**: 2.3.0 | **Last Updated**: 2025-01-16 | **Dependencies**: principles.md, agents.md, workflows.md, parallel.md

## Purpose
Simple instructions template for Guild system configuration. This module is embedded into the setup command.

## Embedded Intelligence

### Default Instructions Template

**Location**: `{project_root}/.guild/instructions.md`

```markdown
# Guild System Instructions

Simple instructions that all Guild agents follow.

## Core Settings
- Run up to 3 instances of each agent type in parallel
- Maximum 20 total agents at once
- Planning agent uses opus model, others inherit
- Balance tasks across available agents

## Parallel Execution Settings

**Instance Spawning Rules**:
- Trigger parallel execution when 3+ independent tasks need same specialist
- Calculate optimal instances: min(ceil(task_count / 3), 3)
- Prefer affinity-based task distribution over round-robin
- Enable cross-specialization work stealing for idle agents

**Task Distribution Strategies**:
- Domain Affinity (Preferred): Group by business domain (user, product, order)
- Technical Affinity: Group by file type (.tsx, .service.ts, .test.ts)
- Complexity Balancing: Distribute work based on estimated complexity
- Round-Robin Fallback: Even distribution when no clear patterns

**Coordination Protocols**:
- File-level ownership prevents conflicts during parallel execution
- Asynchronous progress reporting with streaming updates
- Integration validation at completion boundaries
- Work stealing protocols for dynamic load balancing

**Performance Targets**:
- 3x speedup for tasks with 9+ similar operations
- 2x speedup for tasks with 6-8 similar operations
- >85% agent utilization through intelligent load balancing
- <5% coordination overhead for parallel execution

**Example Parallel Scenarios**:
- "Add authentication to 12 API endpoints" → 3 backend instances, domain-grouped
- "Convert 15 components to TypeScript" → 3 frontend instances, complexity-balanced
- "Create tests for 20 utility functions" → 3 instances, technical-affinity grouped

## Project Structure Settings
- Submodule handling: recursive analysis from root with boundary respect
- Monorepo coordination: package-aware operations with workspace integrity
- Multi-language support: cross-language interfaces with consistency validation
- Boundary enforcement: respect structural isolation while enabling coordination
- Structure context: all agents receive comprehensive project structure information

## Workflow Rules
- Main thread: reasoning and requirement analysis only
- Research: parallel project and technology context gathering with structure awareness
- Planning: task decomposition and intelligent routing with boundary consideration
- Implementation: parallel execution by specialized agents respecting structure boundaries
- Testing/verification: optional unless complexity requires it

## Agent Creation Rules
- Claude analyzes project structure and creates needed specialists
- Agents receive focused context including project structure information
- Route tasks to most appropriate specialist with structure awareness
- No code embedding - use project analysis and Claude's capabilities
- Structure specialists created based on detected project patterns

## Quality Standards
- Follow discovered project patterns and conventions across all project components
- Maintain consistency with existing code within structural boundaries
- Validate against requirements and integration points including cross-boundary interfaces
- Test when complexity or risk requires it, including structure integration testing
- Preserve structural integrity while enabling necessary cross-boundary coordination

## Structure Coordination Rules
- Single .guild/ directory coordinates entire project hierarchy
- Respect submodule boundaries while enabling necessary cross-submodule operations
- Honor package/workspace isolation in monorepos with coordinated dependency management
- Maintain cross-language interface consistency and compatibility
- Apply structure-aware parallelization for optimal performance

## Project-Specific Rules
[Add your custom instructions here]
```

### Configuration Options

**Basic Settings**:
```yaml
Concurrency:
  --concurrency [N]: Instances per agent type (default: 3)
  --max-agents [N]: Total parallel agents (default: 20)

Structure:
  --submodule-mode [integrated|isolated]: Submodule handling strategy (default: integrated)
  --monorepo-strategy [unified|package-scoped]: Monorepo coordination (default: unified)
  --cross-language [strict|flexible]: Interface enforcement level (default: strict)
  --boundary-enforcement [true|false]: Structural boundary respect (default: true)

Quality:
  --enable-testing [true/false]: Enable testing by default
  --enable-verification [true/false]: Enable verification by default

Models:
  --agent-model [agent] [model]: Set specific agent model
```

**Parallel Execution Configuration**:
```yaml
Distribution Strategy:
  --distribution-strategy [affinity|complexity|round-robin]: Task distribution method (default: affinity)
  --affinity-mode [domain|technical|dependency]: Affinity grouping type (default: domain)
  --work-stealing [true|false]: Enable cross-specialization work stealing (default: true)
  --complexity-estimation [true|false]: Use complexity-based distribution (default: true)

Instance Management:
  --spawn-threshold [N]: Minimum tasks to trigger parallel execution (default: 3)
  --max-instances-per-type [N]: Maximum instances per specialist type (default: 3)
  --rebalancing [true|false]: Enable dynamic load rebalancing (default: true)
  --early-finish-redistribution [true|false]: Redistribute work from fast instances (default: true)

Performance Monitoring:
  --track-performance [true|false]: Enable performance metrics collection (default: true)
  --report-speedup [true|false]: Report achieved speedup vs sequential (default: true)
  --log-coordination [true|false]: Log coordination overhead and efficiency (default: false)
  --optimize-based-on-history [true|false]: Use historical data for optimization (default: true)

Coordination Behavior:
  --coordination-strategy [minimal|conservative|aggressive]: Coordination level (default: minimal)
  --conflict-prevention [file-ownership|optimistic-locking]: Conflict prevention method (default: file-ownership)
  --progress-reporting [async|sync|disabled]: Progress reporting mode (default: async)
  --integration-validation [boundary|completion|continuous]: Validation timing (default: boundary)
```

**Example Configurations**:
```bash
# Basic parallel execution settings
/guild:instructions --concurrency 5 --max-agents 15

# Affinity-based distribution with work stealing
/guild:instructions --distribution-strategy affinity --affinity-mode domain --work-stealing true

# Performance-optimized configuration
/guild:instructions --complexity-estimation true --rebalancing true --track-performance true

# Conservative coordination for complex projects
/guild:instructions --coordination-strategy conservative --integration-validation continuous

# High-performance configuration for large codebases
/guild:instructions --max-instances-per-type 3 --spawn-threshold 2 --early-finish-redistribution true

# Enable detailed performance monitoring
/guild:instructions --report-speedup true --log-coordination true --optimize-based-on-history true

# Structure-aware parallel execution
/guild:instructions --submodule-mode integrated --boundary-enforcement true

# Custom project rules with parallel optimization
/guild:instructions "All API endpoints must validate authentication" --concurrency 4 --affinity-mode technical
```

**Generated Instructions Template Enhancement**:
```markdown
# Project-Specific Parallel Execution Rules

## Detected Parallelization Opportunities
[Based on project analysis, list specific patterns that benefit from parallel execution]

## Specialist-Specific Instance Limits
- guild-frontend-engineer: Up to [N] instances for UI component work
- guild-backend-engineer: Up to [N] instances for API/service development  
- guild-cli-engineer: Up to [N] instances for command-line functionality
- guild-quality-specialist: Up to [N] instances for testing and validation

## Project-Specific Affinity Rules
- Domain grouping: [user|auth|profile] → Instance 1, [product|catalog|search] → Instance 2, etc.
- Technical grouping: [components/*.tsx] → Instance 1, [services/*.ts] → Instance 2, etc.
- Complexity grouping: [complex refactoring] → Instance 1, [simple updates] → distributed evenly

## Performance Optimization Settings
- Expected speedup targets: [X]x for batch operations, [Y]x for similar-pattern work
- Coordination overhead target: <[N]% of total execution time
- Agent utilization target: >[N]% across all parallel instances
- Work stealing threshold: Redistribute when [N]% capacity difference detected

## Integration and Quality Rules
- Parallel work validation: Validate integration at [boundaries|completion|continuous]
- Quality standards: Apply [same|specialized] quality checks across all instances
- Error handling: [continue-with-partial|retry-failed-work|sequential-fallback]
- Progress reporting: [detailed|summary|minimal] progress updates during parallel execution
```

## Integration Points

### Setup Command
Creates `{project_root}/.guild/instructions.md` with defaults and parallel execution intelligence.

### Module Dependencies
- principles.md (core philosophy and project structure)
- agents.md (agent framework)
- workflows.md (workflow patterns)
- parallel.md (parallelization strategies)

### Module Consumers
- Setup command (creates {project_root}/.guild/instructions.md)
- Guild command (reads project configuration)
- All agents (follow project-specific rules)
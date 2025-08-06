# Claude Guild Architecture

## System Architecture Overview

Claude Guild implements a **four-layer architecture** that cleanly separates concerns while enabling powerful workflow orchestration.

```
┌─────────────────────────────────────────────────┐
│            Execution Layer (Commands)           │
│  - Workflow orchestration                       │
│  - Flag processing                              │
│  - Stage sequencing                             │
└─────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────┐
│          Logic Layer (Processes)                │
│  - Workflow definitions                         │
│  - Process steps                                │
│  - Error handling                               │
└─────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────┐
│         Metadata Layer (Agents)                 │
│  - Thin agent definitions                       │
│  - Role specifications                          │
│  - Process references                           │
└─────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────┐
│      Configuration Layer (Instructions)         │
│  - User customization                           │
│  - Model assignments                            │
│  - Project settings                             │
└─────────────────────────────────────────────────┘
```

## Template-Based Implementation

### Template Inlining Process

```yaml
Installation Flow:
  1. NPM Package Installation:
     - User runs: npx claude-guild
     - System copies templates to project
     
  2. Template Processing:
     - Read template files
     - Inline content into commands
     - Create .guild structure
     
  3. Command Registration:
     - Copy commands to .claude/commands/
     - Commands contain inlined templates
     - No external dependencies
```

### Template Structure

```javascript
// Template inlining during installation
const templates = {
  processes: fs.readFileSync('templates/processes.md'),
  routing: fs.readFileSync('templates/routing.md'),
  agents: fs.readFileSync('templates/agents.md'),
  instructions: fs.readFileSync('templates/instructions.md')
};

// Inline into setup command
const setupCommand = `
## Embedded Templates
${templates.processes}
${templates.routing}
${templates.agents}
`;
```

### Why Template Inlining?

1. **Self-Contained Commands**: Commands work without external dependencies
2. **Version Consistency**: Templates frozen at installation time
3. **Performance**: No runtime file reading needed
4. **Reliability**: No missing file errors

## Thin Agent Architecture

### Agent Composition

```yaml
Agent Definition (Metadata Only):
  ---
  name: unique-identifier
  role: primary-function
  processes: [process-refs]
  context: specialization
  parallel: true/false
  ---

Process Definition (Logic):
  process: process-name
    inputs: [required-data]
    steps: [execution-steps]
    outputs: [produced-data]

Runtime Binding:
  - Agent references process
  - Process contains logic
  - Execution combines both
```

### Agent Lifecycle

```mermaid
graph LR
    A[Template] --> B[Setup Analysis]
    B --> C[Context Injection]
    C --> D[Agent Creation]
    D --> E[Process Binding]
    E --> F[Ready for Execution]
```

## Process Architecture

### Process Types

```yaml
Core Processes:
  Analysis:
    - analyze-task
    - correct-typos
    - assess-complexity
    
  Research:
    - research-project-context
    - research-best-practices
    - aggregate-findings
    
  Planning:
    - create-execution-plan
    - route-to-agents
    - define-coordination
    
  Implementation:
    - implement-solution
    - refactor-code
    - validate-changes
    
  Validation:
    - validate-implementation
    - run-tests
    - verify-requirements
```

### Process Execution Model

```yaml
Sequential Execution:
  - One process at a time
  - Clear dependencies
  - Predictable flow
  Example: reasoning → planning → implementation

Parallel Execution:
  - Multiple processes simultaneously
  - Independent contexts
  - Result aggregation
  Example: frontend || backend || database

Pipeline Execution:
  - Overlapping stages
  - Continuous flow
  - Early starts
  Example: research → (planning + early implementation)
```

## Routing Architecture

### Routing Components

```yaml
Task Classifier:
  Input: task description
  Analysis:
    - Technology detection
    - Complexity assessment
    - Scope determination
  Output: task classification

Route Selector:
  Input: task classification
  Matching:
    - Technology → agents
    - Complexity → strategy
    - Scope → parallelization
  Output: agent assignments

Execution Planner:
  Input: agent assignments
  Planning:
    - Sequencing
    - Grouping
    - Coordination
  Output: execution plan
```

### Routing Decision Tree

```
Task Description
    ↓
[Classify Task]
    ↓
┌─────────────────┐
│  Simple Task?   │──Yes──→ [Single Agent]
└─────────────────┘
    ↓ No
┌─────────────────┐
│  Medium Task?   │──Yes──→ [Coordinated Team]
└─────────────────┘
    ↓ No
┌─────────────────┐
│  Complex Task?  │──Yes──→ [Parallel Groups]
└─────────────────┘
```

## Parallel Execution Architecture

### Coordination Mechanisms

```yaml
Context Isolation:
  Purpose: Prevent conflicts
  Implementation:
    - Separate working contexts
    - File access boundaries
    - Independent state
    
Synchronization Points:
  Purpose: Coordinate progress
  Implementation:
    - Milestone checkpoints
    - Result aggregation
    - Phase transitions
    
Conflict Resolution:
  Purpose: Handle overlaps
  Implementation:
    - Lock mechanisms
    - Sequential fallback
    - Merge strategies
```

### Parallel Strategies

```yaml
Strategy 1 - Independent Scopes:
  When: Clear boundaries exist
  How:
    - Assign exclusive scopes
    - No shared resources
    - Parallel execution
  Example: Frontend || Backend

Strategy 2 - Pipeline Parallel:
  When: Stages can overlap
  How:
    - Start next stage early
    - Continuous processing
    - Buffer results
  Example: Research → Planning (starts early)

Strategy 3 - Divide and Conquer:
  When: Task is decomposable
  How:
    - Break into subtasks
    - Distribute to agents
    - Merge results
  Example: Large refactoring
```

## Command Architecture

### Command Structure

```yaml
Command Components:
  Metadata:
    - Usage description
    - Available flags
    - Examples
    
  Workflow Definition:
    - Stage sequence
    - Flag processing
    - Agent coordination
    
  Embedded Templates:
    - Process definitions
    - Routing rules
    - Agent templates
    
  Execution Logic:
    - Stage orchestration
    - Error handling
    - Result presentation
```

### Flag Processing

```javascript
// Flag processing logic
function processFlags(flags) {
  const stages = {
    reasoning: !flags.includes('--no-reason'),
    planning: !flags.includes('--no-plan'),
    implementation: !flags.includes('--no-implement'),
    refactoring: flags.includes('--refactor'),
    testing: flags.includes('--test'),
    verification: flags.includes('--verify')
  };
  
  // Special combinations
  if (flags.length === 1 && flags[0] === '--no-implement') {
    stages.saveplan = true;
  }
  
  return stages;
}
```

## Configuration Architecture

### Configuration Hierarchy

```yaml
Default Configuration:
  Location: templates/instructions.md
  Purpose: Sensible defaults
  Scope: All projects

Project Configuration:
  Location: .guild/instructions.md
  Purpose: Project customization
  Scope: Current project
  Overrides: Defaults

Runtime Configuration:
  Location: Command flags
  Purpose: Task-specific settings
  Scope: Current execution
  Overrides: Project config
```

### Configuration Schema

```yaml
instructions.md:
  models:
    type: object
    properties:
      reasoning: enum[opus, sonnet, haiku]
      planning: enum[opus, sonnet, haiku]
      implementation: enum[opus, sonnet, haiku]
      
  parallel:
    type: object
    properties:
      enabled: boolean
      max_agents: integer
      strategies: array
      
  routing:
    type: object
    properties:
      rules: array
      preferences: object
      overrides: object
```

## Integration Points

### Claude Code Integration

```yaml
Directory Structure:
  .claude/
    commands/       # Guild commands
    agents/         # All agents
      guild/        # Guild agents subset
      
Communication:
  - Commands invoke agents
  - Agents execute processes
  - Processes return results
  - Commands coordinate flow
```

### MCP Server Integration

```yaml
Optional Enhancement:
  Detection:
    - Check for MCP servers
    - Identify capabilities
    
  Integration:
    - Research augmentation
    - Documentation access
    - API exploration
    
  Fallback:
    - Works without MCP
    - Uses web search
    - Project analysis only
```

## Performance Architecture

### Optimization Strategies

```yaml
Agent Caching:
  - Cache created agents
  - Reuse across commands
  - Lazy loading

Process Preloading:
  - Load common processes
  - Keep in memory
  - Fast execution

Parallel Efficiency:
  - Optimal grouping
  - Resource management
  - Load balancing
```

### Scalability Design

```yaml
Horizontal Scaling:
  - Add more agents
  - Extend processes
  - New technologies

Vertical Scaling:
  - Deeper processes
  - Complex workflows
  - Advanced routing

Modular Growth:
  - Plugin system
  - Custom processes
  - Extended commands
```

## Security Architecture

### Isolation Boundaries

```yaml
Agent Isolation:
  - Scoped file access
  - Limited permissions
  - Audit trails

Process Validation:
  - Input sanitization
  - Output validation
  - Error boundaries

Configuration Security:
  - No secrets in config
  - Safe defaults
  - Validation rules
```

## Error Handling Architecture

### Error Propagation

```yaml
Process Level:
  - Try-catch blocks
  - Error returns
  - Fallback logic

Agent Level:
  - Process failures
  - Retry mechanisms
  - Degradation

Command Level:
  - Workflow failures
  - User feedback
  - Recovery options
```

### Recovery Strategies

```yaml
Automatic Recovery:
  - Retry with backoff
  - Fallback agents
  - Sequential fallback

Manual Recovery:
  - User intervention
  - Configuration fix
  - Command retry
```

## Extensibility Architecture

### Extension Points

```yaml
Custom Processes:
  Location: .guild/processes.md
  Format: Standard process definition
  Usage: Reference in agents

Custom Agents:
  Location: .guild/agents/
  Format: Thin agent template
  Usage: Include in routing

Custom Commands:
  Location: .claude/commands/
  Format: Command template
  Usage: Direct invocation
```

## Architecture Principles

1. **Separation of Concerns**: Clear boundaries between layers
2. **Single Responsibility**: Each component has one job
3. **Open/Closed**: Extensible without modification
4. **Dependency Inversion**: Depend on abstractions
5. **Interface Segregation**: Minimal, focused interfaces

## Architecture Decisions

### Decision 1: Thin Agents
**Problem**: Agent complexity and maintenance
**Solution**: Separate metadata from logic
**Rationale**: Easier to maintain and extend

### Decision 2: Template Inlining
**Problem**: Runtime dependencies
**Solution**: Inline templates during installation
**Rationale**: Self-contained, reliable commands

### Decision 3: Process References
**Problem**: Logic duplication
**Solution**: Centralized process definitions
**Rationale**: Single source of truth

### Decision 4: Parallel Coordination
**Problem**: Execution efficiency
**Solution**: Multiple parallel strategies
**Rationale**: Optimal performance for different scenarios

This architecture provides a solid foundation for building a scalable, maintainable, and efficient workflow orchestration system.
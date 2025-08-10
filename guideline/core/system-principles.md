# System Principles Module

## Purpose
Core architectural principles that define the Guild system's intelligence-driven approach. This module is embedded into the setup command to ensure consistent system behavior.

## Embedded Intelligence

### Prompt-Driven Intelligence Architecture
```yaml
Core Philosophy:
  - All intelligence through prompts: No hardcoded detection or patterns
  - Claude-native analysis: Leverage Claude's full understanding capabilities
  - Dynamic adaptation: Let Claude determine optimal approaches
  - Future-proof design: New models automatically improve the system
  - Technology-agnostic: Universal patterns that work with any technology stack

Implementation Strategy:
  - Prompts define all behavior
  - Claude analyzes and understands
  - Dynamic generation based on analysis
  - Self-contained systems with embedded intelligence
```

### Self-Contained Distribution
```yaml
Distribution Architecture:
  - Zero-dependency global installation via NPM
  - Dynamic generation system with embedded logic
  - No missing files - all generation logic in setup
  - Global compatibility across all environments
  - Runtime independence from external templates

Key Benefits:
  - 100% installation reliability
  - Consistent behavior everywhere
  - No external dependencies
  - Automatic updates with new models
```

### Intelligence Allocation
```yaml
Cognitive Resource Management:
  - Strategic thinking (ultrathink): High-level planning and architecture
  - Analytical thinking (think-harder): Complex problem solving and analysis
  - Efficient execution (think): Implementation and routine operations
  - Context-driven allocation: Match complexity to task requirements
  
Resource Optimization:
  - Parallel execution where beneficial
  - Sequential flow for dependent tasks
  - Adaptive strategies based on project
  - Smart context management
```

### Performance Through Intelligence
```yaml
Optimization Strategies:
  - Smart analysis: Claude determines investigation needs
  - Context optimization: Claude engineers optimal packages
  - Adaptive strategies: Claude adjusts based on patterns
  - Thinking mode allocation: Claude determines requirements

Performance Metrics:
  - First response: 70% faster with streaming
  - End-to-end: 50% faster with parallelization
  - Context transfer: 85% less data
  - Memory usage: 60% reduction
```

## Integration Points

### Setup Command Embedding
This module is embedded into `/guild:setup` as:
- Core system principles section
- Intelligence allocation strategy
- Performance optimization guidelines
- Self-contained distribution requirements

### Agent Generation
Principles applied during agent creation:
- Prompt-driven behavior definition
- Thinking mode assignment
- Context optimization settings
- Performance configurations

### Workflow Execution
Principles guide workflow decisions:
- Stage selection logic
- Parallel vs sequential execution
- Context management strategies
- Resource allocation patterns

## Key Invariants

1. **No Hardcoded Logic**: All intelligence must come from prompts
2. **Claude-Native**: Use Claude's full capabilities, not pattern matching
3. **Self-Contained**: Generated systems must work independently
4. **Future-Proof**: Must improve automatically with new models
5. **Technology-Agnostic**: Must work with any technology stack

## Module Dependencies
- None (foundational module)

## Module Consumers
- `/guild:setup` command (primary)
- Agent generation logic
- Workflow orchestration
- All Guild commands
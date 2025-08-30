# Agent Specialization Module  

## Core Philosophy

**INTELLIGENCE-FIRST**: Claude discovers project through analysis, not templates.

**COGNITIVE THINKING**: Agents defined by HOW they think, not WHAT technologies.

**PARALLEL-READY**: All agents support parallel execution and multiple instances.

## Four Core Cognitive Personas

### Systems Architect
```yaml
Thinking: Structural, integration-focused, big-picture
Approach: Design scalable systems and integration patterns
Focus: Architecture, APIs, service boundaries, scalability
```

### Analytical Thinker
```yaml
Thinking: Data-driven, optimization-focused, performance-aware
Approach: Analyze metrics, optimize algorithms, improve efficiency
Focus: Performance, data flow, algorithms, bottlenecks
```

### Quality Guardian
```yaml
Thinking: Risk-aware, systematic, thorough
Approach: Ensure reliability through testing and validation
Focus: Testing, error handling, edge cases, monitoring
```

### Domain Expert
```yaml
Thinking: Business-focused, context-aware, practical
Approach: Translate business needs to technical solutions
Focus: Business logic, requirements, workflows, compliance
```

## Agent Creation Process

### Intelligence Discovery
1. **Analyze Project**: Understand purpose and architecture
2. **Discover Stack**: Identify technologies through analysis
3. **Map Requirements**: Match needs to cognitive personas
4. **Create Agents**: Generate specialized agents

### Agent Template

```markdown
---
name: [persona]-[domain]-specialist
description: "[Persona] for [discovered domain]"
model: sonnet
thinking_mode: think
---

## Role
[One-line role description based on cognitive persona]

## Approach
[How this persona thinks and solves problems - 2-3 lines]

## Responsibilities
- [Specific responsibility 1]
- [Specific responsibility 2]  
- [Specific responsibility 3]

## Parallel Execution
- Supports multiple instances on different work units
- Clear ownership boundaries prevent conflicts
- Coordinates through main thread only
```

## Parallel Execution Patterns

### Multiple Instances
```yaml
Same Persona - Different Work:
  architect-api-1: Works on user service
  architect-api-2: Works on payment service
  architect-api-3: Works on notification service
  
All instances:
  - Run simultaneously
  - Own exclusive domains
  - Share cognitive approach
```

### Cross-Persona Collaboration
```yaml
Different Perspectives - Same Feature:
  architect: Designs system structure
  analytical: Optimizes performance
  quality: Ensures reliability
  domain: Validates requirements
  
All agents:
  - Work in parallel
  - Different focus areas
  - Complementary outputs
```

## Intelligence-Based Scaling

### Task-Based Agent Count
```yaml
Simple Task (1-2 agents):
  - Primary persona for main work
  - Optional quality validation

Medium Task (3-6 agents):
  - Multiple personas for different aspects
  - Parallel instances where beneficial

Complex Task (7-10 agents):
  - Full persona coverage
  - Multiple instances per persona
  - Fine-grained work distribution
```

### Work Distribution
- Each agent gets DISTINCT work unit
- No overlapping responsibilities
- Clear file/module ownership
- Parallel execution always

## Project Examples

### Example: Web Application
```yaml
Discovery: Frontend, API, Database, Auth
Generated Agents:
  - architect-frontend: UI structure and components
  - architect-backend: API design and services
  - analytical-database: Query optimization
  - quality-testing: Comprehensive validation
```

### Example: Data Pipeline
```yaml
Discovery: Ingestion, Processing, ML, API
Generated Agents:
  - analytical-data: Data processing optimization
  - analytical-ml: Model performance
  - architect-pipeline: System integration
  - quality-validation: Pipeline reliability
```

## Success Criteria

✅ **Simple Personas**: 4 clear cognitive types  
✅ **Parallel-Ready**: All agents support parallel execution
✅ **Intelligence-Driven**: Discovery through analysis
✅ **Clear Templates**: Simple, focused agent format
✅ **Optimal Scaling**: 1-10 agents based on task needs

## Integration

- **Used by**: setup-command.md (creates agents)
- **Referenced by**: workflow-command.md (invokes agents)
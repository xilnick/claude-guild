# Guild Agent Specifications

## Overview

Guild agents are **thin metadata definitions** that reference centralized processes. They provide specialized capabilities through clean separation of concerns and instruction-based configuration.

## Agent Architecture

### Thin Agent Design

All Guild agents follow a minimal metadata format:

```yaml
---
name: guild-[identifier]-engineer
role: primary-function
processes: [process-references]
scope: operational-boundary
parallel: true/false
---
```

**Key Principles**:
- **Metadata Only**: Agents contain no logic, only references (<10 lines)
- **Process References**: All logic lives in centralized processes
- **Clear Boundaries**: Well-defined operational scopes
- **Parallel Support**: Explicit parallelization capability

### Model Configuration

Models are assigned through `.guild/instructions.md`, not in agent definitions:

```yaml
# In .guild/instructions.md
models:
  reasoning: opus
  planning: sonnet
  implementation: haiku
```

## Agent Types

### Core System Agents

| Agent | Role | Process References |
|-------|------|-------------------|
| **guild-reasoning-agent** | Task analysis and clarification | analyze-task, assess-complexity |
| **guild-planning-agent** | Workflow coordination and routing | create-plan, route-agents |
| **guild-research-agent** | Context gathering and synthesis | research-context, aggregate-findings |
| **guild-verification-agent** | Quality assurance and validation | run-tests, verify-requirements |

### Technology Engineers

Engineers are created based on detected technology patterns:

| Pattern | Engineer | Scope |
|---------|----------|-------|
| **Frontend Framework** | guild-[framework]-engineer | UI + State + Routing + Testing |
| **Backend Framework** | guild-[framework]-engineer | API + Middleware + Database + Testing |
| **Build Tools** | guild-build-engineer | Bundling + Optimization + Dev Server |
| **Infrastructure** | guild-infra-engineer | Deployment + Monitoring + Scaling |

### Standalone Specialists

Self-contained agents for specific domains:

```yaml
---
name: security-analyst-agent
role: Security vulnerability assessment
approach: OWASP methodology
scope: Authentication, authorization, input validation
self_contained: true
---
```

## Technology Coupling

### Coupling Principle

Technologies that are **naturally coupled in workflows** share the same engineer:

**Correct Coupling**:
```yaml
guild-react-engineer:
  - React components
  - Redux/Zustand state
  - React Router
  - React Testing Library
  - React documentation
```

**Incorrect Separation**:
```yaml
# WRONG - Artificial boundaries
guild-react-ui-engineer
guild-redux-engineer
guild-react-router-engineer
```

### Coupling Detection

Engineers are created based on natural technology relationships:

1. **Framework Ecosystems**: Core framework + official extensions
2. **Build Ecosystems**: Build tool + plugins + configuration
3. **Testing Ecosystems**: Test runner + utilities + coverage
4. **Deployment Ecosystems**: Platform + services + monitoring

## Context Management

### Context Flow

```yaml
Flow Pattern:
  Research → Planning → Implementation → Verification
       ↓         ↓            ↓              ↓
   Findings  Assignment   Execution      Quality

Transfer Protocol:
  - Executive summary (always)
  - Key points (important)
  - Full details (critical only)
  - References (as needed)
```

### Context Optimization

Agents use intelligent context management:
- **Relevance Scoring**: Keep only needed information
- **Progressive Disclosure**: Start minimal, add as needed
- **Shared Cache**: Reuse common context across agents
- **Context Decay**: Remove outdated information

## Coordination Patterns

### Sequential Coordination
```yaml
Pattern: Step-by-step execution
When: Dependencies exist
Example: Reasoning → Planning → Implementation
```

### Parallel Coordination
```yaml
Pattern: Simultaneous execution
When: Independent scopes
Example: Frontend || Backend || Database
```

### Pipeline Coordination
```yaml
Pattern: Overlapping stages
When: Early starts possible
Example: Research → Planning (early) → Implementation
```

## Custom Agent Creation

### Through Instructions

Define custom agents in `.guild/instructions.md`:

```markdown
Create a specialized security engineer that focuses on:
- OWASP Top 10 vulnerabilities
- Authentication best practices
- Input validation
- Security headers
```

### Through Templates

Add custom agent templates in `.guild/agents/`:

```yaml
---
name: guild-custom-engineer
role: Specialized function
processes: [custom-processes]
scope: Domain boundaries
parallel: true
---
```

## Agent Communication

### Simple Interfaces

Agents communicate through clean, well-defined interfaces:

1. **Input Contract**: What the agent expects
2. **Process Execution**: Referenced processes run
3. **Output Contract**: What the agent provides
4. **Context Transfer**: Relevant information passed forward

### Error Handling

```yaml
Error Strategies:
  process_failure: Retry with backoff
  context_overflow: Compress and filter
  timeout: Graceful degradation
  conflict: Sequential fallback
```

## Performance Optimization

### Agent-Level Optimizations

- **Lazy Loading**: Load agents only when needed
- **Process Caching**: Reuse process definitions
- **Context Filtering**: Pass only relevant data
- **Parallel Execution**: Run independent agents concurrently

### System-Level Optimizations

- **Agent Pooling**: Reuse agent instances
- **Batch Processing**: Group similar operations
- **Predictive Loading**: Pre-warm likely agents
- **Resource Management**: Balance load across agents

## Best Practices

1. **Keep Agents Thin**: Metadata only, no logic
2. **Centralize Processes**: All logic in process definitions
3. **Respect Coupling**: Don't artificially separate coupled technologies
4. **Optimize Context**: Filter and compress aggressively
5. **Enable Parallelism**: Design for concurrent execution

## Summary

Guild agents achieve power through simplicity:
- **Thin metadata** definitions reference centralized processes
- **Natural coupling** respects technology relationships
- **Smart context** management prevents explosion
- **Flexible coordination** enables optimal execution
- **Clean interfaces** ensure reliable communication
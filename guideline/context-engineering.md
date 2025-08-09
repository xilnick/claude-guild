# Context Engineering

Advanced context management for long-context optimization and agent-to-agent communication in Claude Guild.

## Overview

Context engineering is the systematic approach to managing, optimizing, and transferring information between workflow stages and agents. The Guild system implements advanced context management techniques based on Anthropic's prompt engineering best practices.

## Long Context Management Principles

### Core Optimization Strategies

**1. Structured Context Packaging**
```xml
<context-package priority="critical|important|supplementary">
  <executive-summary>Key decisions and outcomes</executive-summary>
  <implementation-context>Technical requirements and constraints</implementation-context>
  <validation-criteria>Success metrics and acceptance criteria</validation-criteria>
  <references>Relevant files, functions, and documentation</references>
</context-package>
```

**2. Context Compression Techniques**
- **Filter by Relevance**: Include only task-relevant information
- **Hierarchical Summarization**: Executive summary → detailed context on-demand  
- **Reference-Based Context**: Point to specific code locations rather than copying
- **Progressive Context Building**: Add detail as needed through workflow stages

### Context Lifecycle Management

```yaml
Generation Phase:
  - Structured analysis with XML tags
  - Relevance scoring (1-10 scale)
  - Priority classification (critical/important/supplementary)
  
Transfer Phase:
  - Compressed executive summaries
  - On-demand detail expansion
  - Clear handoff protocols between agents
  
Usage Phase:  
  - Context validation before usage
  - Structured reasoning with thinking blocks
  - Success criteria verification
  
Decay Phase:
  - Automatic context pruning after workflow completion
  - Retention of critical decisions and outcomes only
```

### Long Context Optimization Techniques

1. **Context Chunking**: Break large contexts into manageable sections with clear boundaries
2. **Reference Architecture**: Use file:line-number references instead of code duplication
3. **Structured Handoffs**: XML-tagged context transfer between workflow stages
4. **Progressive Detail**: Start with summaries, add detail as needed
5. **Context Validation**: Verify context relevance before processing
6. **Memory Management**: Automatic pruning of outdated or irrelevant context

## Context Engineering Best Practices

### Implementation Guidelines

**1. Be Explicit and Precise**
- Treat each agent like "a brilliant but very new employee with amnesia"
- Provide comprehensive context including purpose, audience, workflow, and success criteria
- Use numbered sequential steps for complex procedures

**2. Use Structural Elements**
- XML tags for clear section boundaries: `<instructions>`, `<context>`, `<criteria>`
- Hierarchical nesting for complex information structures
- Consistent tag naming across all context packages

**3. Apply Chain-of-Thought Reasoning**  
- Include explicit thinking steps for complex analysis
- Use `<thinking>` and `<answer>` separation for structured reasoning
- Guide agents through step-by-step problem decomposition

**4. Provide Clear Success Criteria**
- Define explicit completion criteria for each stage
- Include validation checkpoints and quality gates
- Specify measurable outcomes and deliverables

## Context Transfer Protocols

### Agent-to-Agent Communication

**Structured Context Handoff Template**:

```xml
<context-handoff>
  <metadata>
    <from-agent>Source agent identifier</from-agent>
    <to-agent>Target agent identifier</to-agent>
    <handoff-type>analysis|planning|implementation|validation</handoff-type>
    <priority>critical|important|supplementary</priority>
  </metadata>
  
  <executive-summary>
    Key decisions, constraints, and requirements in 2-3 sentences
  </executive-summary>
  
  <structured-context>
    <requirements>Validated and clarified requirements</requirements>
    <technical-constraints>System limitations and dependencies</technical-constraints>
    <business-constraints>Timeline, resource, and policy limitations</business-constraints>
    <approach-recommendation>Suggested implementation strategy</approach-recommendation>
  </structured-context>
  
  <implementation-package>
    <specific-instructions>Step-by-step implementation guidance</specific-instructions>
    <success-criteria>Measurable completion and quality criteria</success-criteria>
    <validation-requirements>Testing and verification specifications</validation-requirements>
    <references>File paths, API documentation, and related resources</references>
  </implementation-package>
  
  <quality-gates>
    <completion-criteria>What constitutes successful completion</completion-criteria>
    <validation-steps>How to verify correctness</validation-steps>
    <escalation-triggers>When to request clarification or assistance</escalation-triggers>
  </quality-gates>
</context-handoff>
```

### Context Transfer Optimization

**1. Priority-Based Transfer**
- Critical: Essential for task completion
- Important: Significantly improves implementation quality
- Supplementary: Additional context for optimization

**2. Progressive Detail Revelation**
- Start with executive summaries
- Expand detail on-demand based on agent requests
- Maintain reference-based linking to avoid duplication

**3. Validation Checkpoints**
- Context completeness verification
- Relevance scoring and filtering
- Handoff acknowledgment and clarification requests

**4. Context Compression**
- Hierarchical summarization with drill-down capability
- Reference-based context (file:line citations)
- Automatic pruning of outdated or irrelevant information

## Advanced Context Engineering Patterns

### Multishot Context Examples

**Feature Development Context Package**:
```xml
<context-handoff type="feature-development">
  <executive-summary>
    Implementing user authentication with JWT tokens, OAuth integration, 
    and role-based access control. Requires database schema updates and API endpoint creation.
  </executive-summary>
  
  <structured-context>
    <requirements>
      - JWT-based authentication with refresh tokens
      - OAuth integration (Google, GitHub)  
      - Role-based access control (admin, user, guest)
      - Database schema migration for user roles
    </requirements>
    
    <technical-constraints>
      - Must integrate with existing backend API
      - Database with existing user table
      - In-memory cache for session management
      - TypeScript throughout
    </technical-constraints>
    
    <implementation-strategy>
      1. Database schema migration for roles
      2. JWT service implementation
      3. OAuth provider integration  
      4. Middleware for role-based access
      5. API endpoints for auth operations
    </implementation-strategy>
  </structured-context>
  
  <validation-criteria>
    - All tests pass with >95% coverage
    - Security audit passes (no hardcoded secrets)
    - Integration tests with OAuth providers
    - Role-based access control validation
  </validation-criteria>
</context-handoff>
```

**Bug Fix Context Package**:
```xml
<context-handoff type="bug-fix">
  <executive-summary>
    Memory leak in WebSocket connections causing server crashes after 6 hours.
    Root cause: event listeners not properly cleaned up on disconnect.
  </executive-summary>
  
  <structured-context>
    <problem-analysis>
      - Memory usage grows by ~50MB per hour
      - Crash occurs when heap limit exceeded
      - 400+ orphaned event listeners accumulate
    </problem-analysis>
    
    <root-cause>
      WebSocket disconnect handlers not removing all event listeners,
      particularly custom message handlers in src/websocket/handlers.ts:145-167
    </root-cause>
    
    <solution-approach>
      1. Add proper cleanup in disconnect handler
      2. Implement connection tracking with automatic cleanup
      3. Add memory monitoring and alerting
      4. Create integration tests for connection lifecycle
    </solution-approach>
  </structured-context>
  
  <validation-criteria>
    - Memory usage remains stable over 12-hour test
    - All event listeners properly cleaned up on disconnect
    - Integration tests pass with 100+ concurrent connections
    - No regression in existing WebSocket functionality
  </validation-criteria>
</context-handoff>
```

## Context Lifecycle Optimization

### Advanced Context Management

```yaml
Generation Phase:
  - Structured analysis using XML-tagged templates
  - Relevance scoring with 1-10 priority scale
  - Context compression using hierarchical summarization
  - Reference-based linking to avoid content duplication
  
Transfer Phase:
  - Executive summary generation for rapid comprehension
  - Progressive detail revelation based on agent needs
  - Structured handoff protocols with validation checkpoints
  - Context acknowledgment and clarification mechanisms
  
Usage Phase:  
  - Context validation before processing to ensure relevance
  - Structured reasoning with explicit thinking blocks
  - Success criteria verification with measurable outcomes
  - Quality gate enforcement with clear completion criteria
  
Decay Phase:
  - Automatic context pruning after successful workflow completion
  - Retention of critical decisions and architectural outcomes
  - Context archiving for future reference and pattern learning
  - Memory optimization with intelligent context compression
```

## Performance Optimization

### Context-Specific Optimizations

```yaml
Optimization Techniques:
  Reference-Based Linking: Avoid content duplication through file:line citations
  Progressive Detail: Start with summaries, expand based on agent requests
  Relevance Filtering: Automatic context pruning based on task requirements
  Structured Handoffs: XML-tagged packages with validation checkpoints

Context Caching Strategies:
  Multi-Level Hierarchy: Executive → detailed → full context
  Intelligent Expiration: Based on task completion and relevance decay
  Shared Context Pools: Reuse common context across similar tasks
  Predictive Pre-loading: Anticipate context needs based on workflow patterns
```

### Adaptive Context Management

Dynamic context optimization based on:
- **Task Complexity**: More context for complex tasks, minimal for simple ones
- **Agent Requirements**: Context-only vs implementation agents have different needs
- **System Load**: Compress more aggressively under high load
- **Historical Patterns**: Learn optimal context sizes for different task types

## Configuration

### Context Engineering Configuration

```yaml
context_engineering:
  compression_enabled: true
  max_context_size: 50000
  reference_linking: enabled
  progressive_detail: enabled
  
  priority_weights:
    critical: 1.0
    important: 0.7
    supplementary: 0.3
    
  transfer_protocols:
    validation_checkpoints: enabled
    acknowledgment_required: true
    compression_threshold: 10000
    
  optimization:
    adaptive_sizing: enabled
    predictive_loading: enabled
    context_pooling: enabled
```

This context engineering framework enables Guild agents to work with complex, long-context scenarios while maintaining efficiency and clarity through structured, progressive context management.
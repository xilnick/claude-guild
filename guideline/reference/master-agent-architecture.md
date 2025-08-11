# Master Agent Architecture Reference

## Overview

This is the comprehensive reference for Guild agent architecture, classification systems, and design patterns. Core sections are extracted for embedding into the setup command.

## Table of Contents

1. [Agent Classification System](#agent-classification-system)
2. [Agent Design Patterns](#agent-design-patterns)
3. [Thinking Mode Integration](#thinking-mode-integration)
4. [Agent Generation Strategy](#agent-generation-strategy)
5. [Best Practices](#best-practices)

## Agent Classification System

The Guild system uses a sophisticated agent classification model based on capabilities and responsibilities.

<!-- CORE-START -->
## Agent Classification System

### Context-Only Agents (Non-Changing)

**Characteristics**:
- NEVER make direct code or file changes
- Create comprehensive context packages for implementation agents
- Use enhanced thinking modes for complex analysis
- Generate structured handoff protocols
- Focus on analysis, research, planning, and specification work

**Core Agent Types**:
```yaml
guild-planning-agent:
  thinking_mode: ultrathink
  model: opus
  role: Workflow coordination, routing, strategic planning
  output: Implementation plans with resource allocation
  
guild-project-research-agent:
  thinking_mode: think
  role: Project-specific context gathering
  output: Hierarchical context packages with references
  
guild-global-research-agent:
  thinking_mode: think
  role: External research and best practices
  output: Technology patterns and integration guidance
  
guild-specification-agent:
  thinking_mode: think-harder
  role: Documentation analysis and updates
  output: Updated specifications with validation criteria
```

### Implementation Agents (Changing)

**Characteristics**:
- Receive structured context from context-only agents
- Execute actual code changes and file modifications
- Use standard thinking mode for efficient execution
- Create tests, documentation, and refactoring
- Validate results against success criteria

**Core Agent Types**:
```yaml
guild-verification-agent:
  thinking_mode: think
  role: Quality validation and testing execution
  capabilities: Modify code, create tests, fix issues
  
Technology Engineers:
  thinking_mode: think
  role: Domain-specific implementation
  generation: Dynamic based on detected patterns
  examples:
    - guild-frontend-engineer
    - guild-backend-engineer
    - guild-cli-engineer
    - guild-package-engineer
```
<!-- CORE-END -->

## Agent Design Patterns

### Thin Agent Architecture

Agents are lightweight entities with metadata and references to centralized processes.

<!-- CORE-START -->
## Agent Placement Architecture

### Directory Structure Requirements

**CRITICAL REQUIREMENT**:
All Guild agents MUST be created in: `.claude/agents/guild/`

**Rationale**:
- Namespace isolation from other systems
- Clear organization and discoverability
- Prevents conflicts with standalone agents
- Maintains system boundaries

**Standard Structure**:
```
.claude/agents/guild/
  ├── guild-planning-agent.md
  ├── guild-project-research-agent.md
  ├── guild-global-research-agent.md
  ├── guild-specification-agent.md
  ├── guild-verification-agent.md
  └── [technology-engineers].md

.claude/agents/
  ├── security-analyst-agent.md
  ├── performance-engineer-agent.md
  └── [other-specialists].md
```
<!-- CORE-END -->

### Agent Template Structure

Each agent follows a consistent template for predictability and maintainability.

<!-- CORE-START -->
## Thin Agent Design

### Agent Template Structure

```yaml
---
name: agent-identifier
role: primary-function
processes: [process-references]
scope: operational-boundary
parallel: true/false
thinking_mode: think|think-harder|ultrathink
context_optimization: enabled
---

## Role Description
{Clear role following "new employee with amnesia" principle}

## Enhanced Thinking Mode
**{thinking_mode}** - {Reasoning requirements and guidance}

## Context Management
- Input: {Expected context structure}
- Output: {Generated context format}
- Optimization: {Compression strategies}
```

### Design Principles

**Key Principles**:
- Intelligence Through Prompts: All behavior from prompts
- Project-Specific: Each agent understands YOUR project
- Dynamic Generation: Created based on analysis
- Automatic Optimization: Claude determines configurations
- Future-Proof: Better models generate better agents
<!-- CORE-END -->

## Thinking Mode Integration

### Strategic Mode Assignment

The system assigns thinking modes based on task complexity and cognitive requirements.

<!-- CORE-START -->
## Thinking Mode Integration

### Mode Assignment Strategy

**Strategic Agents (ultrathink)**:
- guild-planning-agent: Strategic workflow coordination
- Main thread: Reasoning and requirement analysis (using ultrathink mode)

**Analytical Agents (think-harder)**:
- guild-specification-agent: Thorough specification analysis

**Synthesis Agents (think)**:
- Research agents: Efficient context synthesis
- Implementation agents: Focused execution

**Assignment Logic**:
- Match complexity to cognitive requirements
- Reserve ultrathink for critical decisions
- Use standard think for parallel execution
- Adjust based on context complexity

### Chain-of-Thought Implementation

```xml
<ultrathink-workflow>
  <comprehensive-analysis>
    Break down requirements and dependencies
    Evaluate resources and constraints
    Determine optimal execution strategy
  </comprehensive-analysis>
  
  <strategic-planning>
    Consider multiple approaches
    Select optimal agents
    Identify and mitigate risks
  </strategic-planning>
  
  <context-preparation>
    Create comprehensive packages
    Define success metrics
    Establish coordination protocols
  </context-preparation>
</ultrathink-workflow>
```
<!-- CORE-END -->

## Agent Generation Strategy

### Dynamic Generation Lifecycle

Agents are generated dynamically based on project analysis results.

<!-- CORE-START -->
## Dynamic Agent Generation

### Generation Lifecycle

1. **Project Analysis**:
   - Scan project structure
   - Identify technology patterns
   - Assess complexity profile

2. **Pattern Recognition**:
   - Architectural patterns
   - Development workflows
   - Quality standards

3. **Intelligence Synthesis**:
   - Embed project knowledge
   - Configure thinking modes
   - Set optimization parameters

4. **Agent Creation**:
   - Generate with embedded intelligence
   - Place in correct directory
   - Configure handoff protocols

### Technology-Specific Generation

**Pattern Detection → Agent Generation**:

```yaml
CLI Patterns → guild-cli-engineer:
  - Command structure understanding
  - User workflow expertise
  - Distribution knowledge
  
Frontend Patterns → guild-frontend-engineer:
  - Component architecture expertise
  - State management understanding
  - UI/UX pattern knowledge
  
Backend Patterns → guild-backend-engineer:
  - API design expertise
  - Service architecture knowledge
  - Data persistence understanding
  
Package Patterns → guild-package-engineer:
  - API design expertise
  - Distribution strategy knowledge
  - Documentation standards
```
<!-- CORE-END -->

### Intelligence Embedding Process

Each agent receives comprehensive project intelligence during generation.

**Embedded Knowledge Types**:
1. **Architectural Patterns**: How the project is structured
2. **Technology Context**: Frameworks, libraries, tools
3. **Domain Knowledge**: Business logic and workflows
4. **Quality Standards**: Testing, documentation, style
5. **Development Patterns**: Workflows and practices

## Best Practices

### Agent Development Guidelines

1. **Single Responsibility**: Each agent has one clear purpose
2. **Clear Interfaces**: Well-defined inputs and outputs
3. **Project Intelligence**: Embed relevant project knowledge
4. **Appropriate Thinking**: Match cognitive resources to needs
5. **Testability**: Agents should be verifiable

### Common Pitfalls

1. **Over-Engineering**: Keep agents simple and focused
2. **Hardcoding**: Avoid technology-specific hardcoding
3. **Context Bloat**: Minimize context transfer size
4. **Wrong Placement**: Always use correct directory structure
5. **Missing Intelligence**: Ensure project knowledge embedded

## Integration Patterns

### Agent Coordination

Agents work together through structured handoffs and coordination protocols.

**Coordination Mechanisms**:
- XML-based context packages
- Priority-based routing
- Validation checkpoints
- Error recovery protocols

### Workflow Integration

Agents integrate seamlessly with workflow stages:
- Context-only agents in analysis stages
- Implementation agents in execution stages
- Verification agents in quality stages

## Evolution and Maintenance

### Agent Updates

When updating agents:
1. Preserve project intelligence
2. Maintain interface compatibility
3. Test coordination protocols
4. Validate thinking modes
5. Document changes

### Version Management

- Semantic versioning for breaking changes
- Backward compatibility when possible
- Migration guides for updates
- Deprecation warnings

## Key Invariants

<!-- CORE-START -->
## Key Invariants

1. **Placement Requirement**: All Guild agents in `.claude/agents/guild/`
2. **Classification Boundary**: Context-only agents NEVER make changes
3. **Thinking Mode Discipline**: Strategic = ultrathink, Execution = think
4. **Dynamic Generation**: Agents created based on project analysis
5. **Embedded Intelligence**: All agents contain project knowledge
<!-- CORE-END -->

## Troubleshooting

### Common Issues

1. **Agent Not Found**: Check directory placement
2. **Context Transfer Failure**: Validate XML format
3. **Thinking Mode Issues**: Verify assignment logic
4. **Generation Failures**: Check project analysis
5. **Coordination Problems**: Review handoff protocols

### Debug Strategies

- Enable verbose agent logging
- Inspect context packages
- Validate agent metadata
- Monitor thinking mode usage
- Check placement requirements
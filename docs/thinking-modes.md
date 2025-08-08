# Thinking Mode Integration

Enhanced reasoning systems and chain-of-thought integration for Claude Guild agents.

## Overview

Thinking modes provide agents with enhanced reasoning capabilities tailored to their specific roles and cognitive requirements. The Guild system integrates thinking modes based on task complexity and agent specialization.

## Thinking Mode Classification

### Standard Thinking (think)
```yaml
Purpose: Efficient execution for routine tasks
Usage: Implementation agents, validation tasks
Characteristics: Direct reasoning, focused analysis
Cognitive Load: Low to medium
Optimization: Speed and efficiency
```

### Enhanced Thinking (think-harder)
```yaml
Purpose: Multi-stage analysis with assumption challenging
Usage: Specification analysis, complex problem solving
Characteristics: Question assumptions, explore alternatives
Cognitive Load: Medium to high
Optimization: Thoroughness and accuracy
```

### Strategic Thinking (ultrathink)
```yaml
Purpose: Maximum strategic depth with comprehensive evaluation
Usage: System architecture, complex planning, requirement analysis
Characteristics: Holistic analysis, long-term implications, edge cases
Cognitive Load: High
Optimization: Comprehensive analysis and strategic insight
```

## Integration Patterns

### Agent Definition Template

```yaml
---
name: agent-identifier
role: primary-function
processes: [process-references]
scope: operational-boundary
thinking_mode: think|think-harder|ultrathink
---

## Enhanced Thinking Mode
**{thinking_mode}** - {specific reasoning requirements}
```

### Usage Guidelines by Agent Type

**Context-Only Agents** (Often require enhanced thinking modes):
- **Reasoning agents**: "think-harder" or "ultrathink" for requirement analysis
- **Planning agents**: "ultrathink" for comprehensive strategy development  
- **Specification agents**: "think-harder" for thorough specification analysis
- **Research agents**: "think" for efficient synthesis unless complex analysis needed

**Implementation Agents** (Typically use standard thinking for efficiency):
- **Implementation engineers**: "think" for focused execution
- **Verification agents**: "think" for systematic validation
- **Testing agents**: "think" for structured test creation

## Chain-of-Thought Implementation

### Structured Reasoning Framework

```xml
<reasoning-framework>
  <analysis>
    <task-understanding>Break down requirements and constraints</task-understanding>
    <context-assessment>Evaluate available information and gaps</context-assessment>
    <complexity-classification>Determine approach and resource needs</complexity-classification>
  </analysis>
  
  <planning>
    <approach-selection>Choose optimal strategy based on analysis</approach-selection>
    <resource-allocation>Identify required agents and processes</resource-allocation>
    <risk-assessment>Identify potential issues and mitigation strategies</risk-assessment>
  </planning>
  
  <execution>
    <step-by-step-breakdown>Detailed implementation steps</step-by-step-breakdown>
    <validation-checkpoints>Quality gates and success criteria</validation-checkpoints>
    <outcome-verification>Results validation against requirements</outcome-verification>
  </execution>
</reasoning-framework>
```

### Thinking Mode Application Patterns

**Ultrathink Pattern** (Strategic/Planning Agents):
```xml
<ultrathink-process>
  <comprehensive-analysis>
    <requirement-decomposition>Break down all requirements and dependencies</requirement-decomposition>
    <stakeholder-analysis>Consider all affected parties and systems</stakeholder-analysis>
    <long-term-implications>Evaluate future impact and scalability</long-term-implications>
    <edge-case-identification>Identify potential failure modes and edge cases</edge-case-identification>
  </comprehensive-analysis>
  
  <strategic-planning>
    <approach-evaluation>Consider multiple implementation strategies</approach-evaluation>
    <resource-optimization>Plan optimal resource allocation and timeline</resource-optimization>
    <risk-mitigation>Develop contingency plans and risk mitigation strategies</risk-mitigation>
    <success-metrics>Define measurable outcomes and validation criteria</success-metrics>
  </strategic-planning>
  
  <synthesis>
    <decision-rationale>Document reasoning behind strategic decisions</decision-rationale>
    <implementation-guidance>Provide clear direction for implementation teams</implementation-guidance>
    <quality-assurance>Establish quality gates and validation requirements</quality-assurance>
  </synthesis>
</ultrathink-process>
```

**Think-Harder Pattern** (Analysis/Specification Agents):
```xml
<think-harder-process>
  <deep-analysis>
    <assumption-challenging>Question existing assumptions and constraints</assumption-challenging>
    <alternative-exploration>Explore multiple approaches and solutions</alternative-exploration>
    <impact-assessment>Evaluate consequences of different decisions</impact-assessment>
  </deep-analysis>
  
  <validation>
    <requirement-verification>Ensure all requirements are properly addressed</requirement-verification>
    <consistency-checking>Verify consistency across specifications</consistency-checking>
    <completeness-assessment>Identify gaps and missing elements</completeness-assessment>
  </validation>
  
  <refinement>
    <specification-optimization>Refine specifications for clarity and completeness</specification-optimization>
    <implementation-guidance>Provide detailed guidance for implementers</implementation-guidance>
    <quality-criteria>Define success metrics and validation requirements</quality-criteria>
  </refinement>
</think-harder-process>
```

**Think Pattern** (Implementation/Execution Agents):
```xml
<think-process>
  <focused-analysis>
    <task-breakdown>Decompose task into concrete steps</task-breakdown>
    <resource-identification>Identify required tools and dependencies</resource-identification>
    <approach-selection>Choose most efficient implementation approach</approach-selection>
  </focused-analysis>
  
  <execution-planning>
    <step-sequencing>Order implementation steps logically</step-sequencing>
    <validation-integration>Include testing and validation in execution</validation-integration>
    <error-handling>Plan for common failure scenarios</error-handling>
  </execution-planning>
  
  <quality-assurance>
    <implementation-verification>Verify code quality and functionality</implementation-verification>
    <requirement-compliance>Ensure implementation meets specifications</requirement-compliance>
    <documentation-completion>Document implementation and decisions</documentation-completion>
  </quality-assurance>
</think-process>
```

## Thinking Mode Assignment by Agent Role

### Guild Core Agents

**guild-reasoning-agent**:
- **Thinking Mode**: ultrathink
- **Rationale**: Comprehensive requirement analysis requires strategic depth
- **Application**: Complex requirement decomposition, stakeholder analysis, constraint identification

**guild-planning-agent**:
- **Thinking Mode**: ultrathink  
- **Rationale**: Strategic planning requires comprehensive evaluation of approaches
- **Application**: Resource allocation, timeline planning, risk assessment, approach selection

**guild-specification-agent**:
- **Thinking Mode**: think-harder
- **Rationale**: Specification analysis requires thorough evaluation and assumption challenging
- **Application**: Documentation analysis, specification updates, consistency verification

**guild-project-research-agent / guild-global-research-agent**:
- **Thinking Mode**: think
- **Rationale**: Research synthesis benefits from efficient information processing
- **Application**: Information gathering, context synthesis, reference compilation

**guild-verification-agent**:
- **Thinking Mode**: think
- **Rationale**: Systematic validation requires focused, structured approach
- **Application**: Test execution, quality validation, compliance verification

**guild-implementation-engineers**:
- **Thinking Mode**: think
- **Rationale**: Implementation requires focused execution with clear objectives
- **Application**: Code development, feature implementation, bug fixes

### Standalone Specialist Agents

**security-analyst-agent**:
- **Thinking Mode**: think-harder
- **Rationale**: Security analysis requires thorough evaluation of threat models and vulnerabilities

**performance-engineer-agent**:
- **Thinking Mode**: think-harder
- **Rationale**: Performance optimization requires deep analysis of system behavior and bottlenecks

**accessibility-auditor-agent**:
- **Thinking Mode**: think
- **Rationale**: Accessibility compliance follows established standards and systematic checking

**documentation-writer-agent**:
- **Thinking Mode**: think
- **Rationale**: Documentation creation benefits from structured, clear communication approach

**api-architect-agent**:
- **Thinking Mode**: think-harder
- **Rationale**: API design requires careful consideration of long-term implications and patterns

## Configuration

### Thinking Mode Configuration

```yaml
thinking_modes:
  default_reasoning: ultrathink
  default_planning: ultrathink
  default_specification: think-harder
  default_research: think
  default_implementation: think
  default_verification: think
  
agent_overrides:
  guild-reasoning-agent: ultrathink
  guild-planning-agent: ultrathink
  guild-specification-agent: think-harder
  security-analyst-agent: think-harder
  performance-engineer-agent: think-harder
  api-architect-agent: think-harder
  
context_triggers:
  high_complexity: upgrade_to_think_harder
  strategic_decisions: upgrade_to_ultrathink
  routine_tasks: standard_think
```

### Integration with Context Engineering

Thinking modes work in conjunction with context engineering:

1. **Context Generation**: Enhanced thinking modes produce more structured context packages
2. **Context Transfer**: Thinking mode outputs include reasoning traces for downstream agents
3. **Context Validation**: Higher thinking modes include more comprehensive validation criteria
4. **Context Optimization**: Different thinking modes optimize for different context characteristics

## Performance Considerations

### Thinking Mode Trade-offs

```yaml
Standard Thinking (think):
  Advantages: Fast execution, efficient resource usage, clear focus
  Disadvantages: May miss edge cases, limited creative problem solving
  Best For: Well-defined tasks, routine operations, implementation work

Enhanced Thinking (think-harder):
  Advantages: Thorough analysis, assumption challenging, alternative exploration
  Disadvantages: Slower execution, higher resource usage
  Best For: Complex analysis, specification work, problem diagnosis

Strategic Thinking (ultrathink):
  Advantages: Comprehensive evaluation, long-term planning, risk assessment
  Disadvantages: Highest resource usage, longest execution time
  Best For: System architecture, strategic planning, requirement analysis
```

### Optimization Guidelines

1. **Use appropriate thinking modes**: Don't over-engineer simple tasks with ultrathink
2. **Context handoffs**: Higher thinking modes should produce structured context for efficient downstream processing  
3. **Parallel execution**: Use standard thinking modes for parallel tasks to optimize resource usage
4. **Strategic placement**: Reserve enhanced thinking for critical decision points in workflows

This thinking mode framework enables optimal cognitive resource allocation across the Guild system while maintaining quality and efficiency.
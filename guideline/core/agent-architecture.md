# Agent Architecture Module

## Purpose
Defines agent classification system, thinking mode integration, and placement requirements. This module is embedded into the setup command for dynamic agent generation.

## Agent Classification System

### Context-Only Agents (Non-Changing)
```yaml
Characteristics:
  - NEVER make direct code or file changes
  - Create comprehensive context packages for implementation agents
  - Use enhanced thinking modes for complex analysis
  - Generate structured handoff protocols
  - Focus on analysis, research, planning, and specification work

Core Agent Types:
  guild-reasoning-agent:
    thinking_mode: ultrathink
    role: Task analysis, clarification, requirement understanding
    output: Validated requirements with constraint analysis
    
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
```yaml
Characteristics:
  - Receive structured context from context-only agents
  - Execute actual code changes and file modifications
  - Use standard thinking mode for efficient execution
  - Create tests, documentation, and refactoring
  - Validate results against success criteria

Core Agent Types:
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

## Agent Placement Architecture

### Directory Structure Requirements
```yaml
CRITICAL REQUIREMENT:
  All Guild agents MUST be created in: .claude/agents/guild/
  
Rationale:
  - Namespace isolation from other systems
  - Clear organization and discoverability
  - Prevents conflicts with standalone agents
  - Maintains system boundaries

Standard Structure:
  .claude/agents/guild/
    ├── guild-reasoning-agent.md
    ├── guild-planning-agent.md
    ├── guild-project-research-agent.md
    ├── guild-global-research-agent.md
    ├── guild-specification-agent.md
    ├── guild-verification-agent.md
    └── [technology-engineers].md

Standalone Agents:
  .claude/agents/
    ├── security-analyst-agent.md
    ├── performance-engineer-agent.md
    └── [other-specialists].md
```

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
```yaml
Key Principles:
  - Intelligence Through Prompts: All behavior from prompts
  - Project-Specific: Each agent understands YOUR project
  - Dynamic Generation: Created based on analysis
  - Automatic Optimization: Claude determines configurations
  - Future-Proof: Better models generate better agents
```

## Thinking Mode Integration

### Mode Assignment Strategy
```yaml
Strategic Agents (ultrathink):
  - guild-reasoning-agent: Comprehensive requirement analysis
  - guild-planning-agent: Strategic workflow coordination

Analytical Agents (think-harder):
  - guild-specification-agent: Thorough specification analysis

Synthesis Agents (think):
  - Research agents: Efficient context synthesis
  - Implementation agents: Focused execution

Assignment Logic:
  - Match complexity to cognitive requirements
  - Reserve ultrathink for critical decisions
  - Use standard think for parallel execution
  - Adjust based on context complexity
```

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

## Dynamic Agent Generation

### Generation Lifecycle
```yaml
1. Project Analysis:
   - Scan project structure
   - Identify technology patterns
   - Assess complexity profile

2. Pattern Recognition:
   - Architectural patterns
   - Development workflows
   - Quality standards

3. Intelligence Synthesis:
   - Embed project knowledge
   - Configure thinking modes
   - Set optimization parameters

4. Agent Creation:
   - Generate with embedded intelligence
   - Place in correct directory
   - Configure handoff protocols
```

### Technology-Specific Generation
```yaml
Pattern Detection → Agent Generation:
  
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

## Integration Points

### Setup Command Embedding
This module provides:
- Agent classification system
- Placement requirements
- Generation templates
- Thinking mode assignments

### Runtime Discovery
Agents are discovered dynamically:
- Command checks .claude/agents/guild/
- Adapts workflow to available agents
- Falls back gracefully if agents missing

### Workflow Integration
Agents integrate with workflows:
- Context-only agents in early stages
- Implementation agents in execution
- Quality agents in validation

## Key Invariants

1. **Placement Requirement**: All Guild agents in .claude/agents/guild/
2. **Classification Boundary**: Context-only agents NEVER make changes
3. **Thinking Mode Discipline**: Strategic = ultrathink, Execution = think
4. **Dynamic Generation**: Agents created based on project analysis
5. **Embedded Intelligence**: All agents contain project knowledge

## Module Dependencies
- system-principles.md (thinking modes)
- context-engineering.md (handoff protocols)

## Module Consumers
- `/guild:setup` command (primary)
- `/guild` command (runtime discovery)
- Agent generation logic
- Workflow orchestration
# Agent Architecture Module

## Purpose
Core agent architecture that defines the Guild system's intelligence. This module is embedded into the setup command.

## Embedded Intelligence

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

### Scope-Specialized Agents

**Characteristics**:
- Deep domain expertise in specific project areas
- Maintain context for their scope throughout workflow
- Understand inter-scope boundaries and contracts
- Can coordinate with other scope agents
- Generated dynamically based on scope discovery

**Scope Agent Categories**:
```yaml
Boundary Agents:
  role: Manage inter-scope communication and integration
  thinking_mode: think-harder
  capabilities:
    - Validate inter-scope contracts
    - Detect integration conflicts
    - Coordinate cross-scope changes
    - Manage shared resources
  focus: Integration points, data contracts, API boundaries
  
Domain Expert Agents:
  role: Scope-specific implementation and analysis
  thinking_mode: think
  capabilities:
    - Deep domain knowledge
    - Scope-specific patterns
    - Business logic understanding
    - Domain best practices
  focus: Domain logic, patterns, standards
  examples:
    - guild-payments-domain-agent
    - guild-auth-domain-agent
    - guild-analytics-domain-agent
    - guild-infrastructure-agent
  
Scope Coordinator Agents:
  role: Orchestrate work within a specific scope
  thinking_mode: ultrathink
  capabilities:
    - Scope-level planning
    - Dependency management
    - Resource allocation
    - Progress tracking
  focus: Scope planning, dependencies, coordination
```

### Scope Agent Placement

**Directory Structure for Scope Agents**:
```
.claude/agents/guild/
  ├── core/
  │   ├── guild-planning-agent.md
  │   ├── guild-project-research-agent.md
  │   └── guild-verification-agent.md
  ├── technology/
  │   ├── guild-frontend-engineer.md
  │   ├── guild-backend-engineer.md
  │   └── guild-cli-engineer.md
  └── scopes/
      ├── guild-payments-domain-agent.md
      ├── guild-auth-domain-agent.md
      ├── guild-analytics-domain-agent.md
      ├── guild-ecommerce-domain-agent.md
      └── guild-[scope]-agent.md
```

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

### Scope-Specific Generation

**Scope Detection → Domain Agent Generation**:

```yaml
Payment Processing Scope → guild-payments-domain-agent:
  detection_patterns:
    - payment/, transactions/, billing/ directories
    - Payment gateway integrations
    - Transaction processing logic
  embedded_intelligence:
    - PCI compliance requirements
    - Idempotency patterns
    - Financial calculations
    - Payment provider APIs
    
User Management Scope → guild-auth-domain-agent:
  detection_patterns:
    - auth/, users/, identity/ directories
    - Authentication middleware
    - Session management code
  embedded_intelligence:
    - Security best practices
    - OAuth/JWT patterns
    - GDPR compliance
    - Session strategies
    
Analytics Scope → guild-analytics-domain-agent:
  detection_patterns:
    - analytics/, metrics/, reporting/ directories
    - Data pipeline code
    - ETL processes
  embedded_intelligence:
    - Data aggregation patterns
    - Performance optimization
    - Visualization best practices
    - Real-time vs batch processing
    
E-commerce Scope → guild-ecommerce-domain-agent:
  detection_patterns:
    - cart/, checkout/, inventory/ directories
    - Order processing logic
    - Product catalog structures
  embedded_intelligence:
    - Cart state management
    - Checkout workflows
    - Inventory tracking
    - Pricing strategies
```

### Parallel Execution Configuration

**Agent Parallel Execution Capabilities**:

```yaml
Parallel Execution Settings:
  Scope Agents:
    parallel: true
    max_parallel: number_of_scopes
    coordination: boundary_agents
    conflict_resolution: automatic
    
  Research Agents:
    parallel: true
    max_parallel: unlimited
    coordination: none_required
    merge_strategy: intelligent_aggregation
    
  Implementation Agents:
    parallel: true_within_scope
    max_parallel: 2_per_scope
    coordination: scope_coordinator
    conflict_resolution: scope_level
    
  Boundary Agents:
    parallel: false
    execution: sequential_at_boundaries
    coordination: central_planning
    validation: strict
```

## Key Invariants

1. **Placement Requirement**: All Guild agents in `.claude/agents/guild/`
2. **Classification Boundary**: Context-only agents NEVER make changes
3. **Thinking Mode Discipline**: Strategic = ultrathink, Execution = think
4. **Dynamic Generation**: Agents created based on project analysis
5. **Embedded Intelligence**: All agents contain project knowledge

## Integration Points

### Setup Command Embedding
This module is embedded into `/guild:setup` command during installation.

### Module Dependencies
- Extracted from: master-agent-architecture.md

### Module Consumers
- `/guild:setup` command (primary)
- Agent generation logic
- Workflow orchestration
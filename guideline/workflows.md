# Workflow Orchestration

Prompt-driven workflow orchestration powered by Claude's intelligence.

## Overview

Guild workflows are orchestrated through prompts that leverage Claude's full understanding capabilities. Instead of hardcoded patterns, Claude analyzes each task and determines the optimal workflow based on project context and requirements.

## Prompt-Driven Workflow Stages

### Claude-Orchestrated Execution

```yaml
Workflow Orchestration Process:
  1. Task Analysis (via prompt):
     - Claude analyzes task using task_analysis prompt
     - Determines requirements, impacts, approach
     - Identifies needed agents and context
     
  2. Workflow Strategy (via prompt):
     - Claude creates strategy using workflow_strategy prompt
     - Determines optimal stage sequence
     - Assigns appropriate thinking modes
     
  3. Dynamic Execution:
     - Claude orchestrates agents based on analysis
     - Adapts workflow to project and task needs
     - Optimizes for efficiency and quality
```

### Specification-Driven Workflow (--spec flag)

```yaml
Documentation-First Pattern:
  1. Analysis: Understand task requirements (context-only, ultrathink)
  2. Spec Analysis: Analyze current specifications (context-only, think-harder)
  3. Spec Update: Update relevant specifications (spec changes only, think-harder)
  4. Research: Gather implementation context (context-only)
  5. Planning: Create implementation strategy (context-only, ultrathink)
  6. Implementation: Execute based on updated specs (changes allowed, think)
  7. Validation: Verify against updated specifications (changes allowed, think)
```

## Stage Characteristics

### Context-Only Stages

**Capabilities**:
- Create comprehensive context packages using structured XML templates
- Update specifications and documentation (spec agent only)
- Apply enhanced thinking modes for complex analysis
- Generate structured handoff protocols for implementation agents
- No direct code implementation changes
- Focus on analysis, research, planning, and specification maintenance

**Context Output Structure**:
```xml
<stage-output>
  <executive-summary>High-level findings and decisions</executive-summary>
  <detailed-context>
    <requirements>Validated task requirements</requirements>
    <constraints>Technical and business constraints</constraints>
    <approach>Recommended implementation strategy</approach>
  </detailed-context>
  <handoff-package>
    <implementation-instructions>Specific steps for implementers</implementation-instructions>
    <validation-criteria>Success metrics and testing requirements</validation-criteria>
    <references>Relevant files, APIs, and documentation</references>
  </handoff-package>
</stage-output>
```

### Implementation Stages

**Capabilities**:
- Receive structured context packages from context-only agents
- Execute actual code changes and file modifications using standard thinking mode
- Create tests, documentation, and refactoring based on provided context
- Validate results against structured success criteria
- Report outcomes using standardized feedback templates

**Implementation Input Processing**:
```xml
<implementation-input>
  <context-validation>Verify completeness and relevance of provided context</context-validation>
  <approach-confirmation>Confirm implementation strategy with context-only agents if unclear</approach-confirmation>
  <execution-planning>Break down implementation into atomic, testable steps</execution-planning>
  <quality-gates>Define checkpoints for progress validation</quality-gates>
</implementation-input>
```

## Advanced Workflow Patterns

### --full Flag Execution Pattern

**Comprehensive Development Lifecycle with Context Engineering**:
```yaml
--full Flag Stages:
  1. Analysis: Reasoning agent (context-only, ultrathink) → comprehensive requirement analysis
  2. Research: Research agents (context-only, think) → progressive context building
  3. Planning: Planning agent (context-only, ultrathink) → strategic implementation plan
  4. Implementation: Implementation agents (changes, think) → structured code execution
  5. Testing: Test creation and validation (changes, think) → quality assurance
  6. Verification: Quality validation (changes, think) → requirement verification
  7. Refactoring: Code optimization (changes, think) → technical debt reduction

Execution Order: Context Engineering → Implementation → Quality Assurance
Context Flow: Structured handoffs with XML-tagged packages at each stage
```

### --spec Flag Specification-Driven Pattern

**Documentation-First Development with Enhanced Context Management**:
```yaml
--spec Flag Execution Pattern:
  1. Analysis: Reasoning agent (context-only, ultrathink) → requirement understanding
  2. Spec Analysis: Spec agent analyzes current specs (context-only, think-harder) → gap analysis
  3. Spec Update: Spec agent updates specifications (spec changes only, think-harder) → documentation update
  4. Research: Research agents gather context (context-only, think) → implementation context
  5. Planning: Planning agent creates strategy (context-only, ultrathink) → comprehensive plan
  6. Implementation: Implementation agents execute (changes, think) → specification-driven development

Key Principles:
  - Specifications updated BEFORE implementation with think-harder mode
  - Documentation-driven development enforced through workflow structure
  - Enhanced context transfer between specification and implementation phases
  - Automatic specification-implementation synchronization validation
```

**Specification Update Scope**:
- API documentation and interfaces with structured templates
- Technical specifications and requirements with validation criteria
- Architecture decisions and design docs with impact analysis
- User stories and acceptance criteria with measurable outcomes
- Testing specifications and contracts with coverage requirements

## Dual-Phase Research

**Strategic Phase (30%)**: Quick overview before planning with structured context generation
**Tactical Phase (70%)**: Targeted investigation after planning with detailed implementation context

This prevents unnecessary context gathering and improves efficiency through progressive context building.

### Research Phase Details

**Strategic Research**:
```yaml
Purpose: High-level understanding for planning decisions
Scope: Architecture patterns, technology stack, constraints
Output: Context summary for planning agent
Duration: 30% of total research time
Focus: Breadth over depth
```

**Tactical Research**:
```yaml
Purpose: Detailed implementation context
Scope: Specific APIs, patterns, implementation examples
Output: Detailed context for implementation agents
Duration: 70% of total research time
Focus: Depth and implementation-specific details
```

## Command System Architecture

### Command Architecture

**Global Commands (Cross-Project Interface)**:
- **`/guild:setup [guidance]`** - Analyze project and create specialized agents
- **`/guild:ignore [add|remove|list] [pattern]`** - Manage ignore patterns across all projects  
- **`/guild:instructions [edit|view|reset]`** - Manage project instructions and configuration

**Project-Specific Command (Generated by Setup)**:
- **`/guild [flags] "task"`** - Execute any task with project-specific workflow and embedded intelligence

### Workflow Flags and Compositions

**Default Workflow**: `reasoning → research → planning → implementation`

**Specialized Workflows**:
- **`--fix`**: Bug fixing workflow (reasoning → research → planning → fix stage)
- **`--plan`**: Planning-only workflow (reasoning → research → planning → save to file)
- **`--research`**: Research-only workflow (reasoning → research)
- **`--spec`**: Specification workflow (reasoning → research → planning → spec creation)
- **`--refactor`**: Refactoring workflow (reasoning → research → refactor-planning → refactoring)
- **`--full`**: Comprehensive workflow (reasoning → research → planning → implementation → testing → verification → refactoring)

**Scope Modifiers**:
- **`--project`** - Apply changes project-wide with comprehensive impact analysis

### Command Processing Architecture

**Structured Command Processing**:
```xml
<command-processing>
  <task-analysis>
    <requirement-extraction>Parse explicit and implicit requirements</requirement-extraction>
    <complexity-assessment>Determine resource and agent requirements</complexity-assessment>
    <flag-interpretation>Apply workflow modifications based on flags</flag-interpretation>
  </task-analysis>
  
  <workflow-orchestration>
    <stage-selection>Choose appropriate workflow stages</stage-selection>
    <agent-assignment>Route to optimal agents based on capabilities</agent-assignment>
    <context-preparation>Generate initial context packages</context-preparation>
  </workflow-orchestration>
</command-processing>
```

## Execution Strategies

### Strategy Types

1. **Sequential**: One agent at a time with structured context handoffs
2. **Parallel**: Multiple independent agents with synchronized context sharing
3. **Pipeline**: Overlapping stages with progressive context building
4. **Hybrid**: Mixed strategies with adaptive context management
5. **Comprehensive**: Full workflow execution with complete context lifecycle
6. **Specification-Driven**: Docs-first development with specification-implementation synchronization

### Task Classification with Context Assessment

```yaml
Complexity Assessment:
  Simple: Single agent, linear execution, standard thinking mode
  Medium: Multiple agents, coordination needed, enhanced thinking for planning
  Complex: Many agents, parallel execution, ultrathink for strategic decisions

Routing Factors:
  - Task complexity and cognitive requirements
  - Required capabilities and thinking modes
  - Context size and management requirements
  - Resource availability and optimization needs
  - Parallelization potential and coordination complexity
```

## Common Workflow Patterns

### Simple Task Pattern
```yaml
Characteristics:
  - Direct routing to single specialist
  - Minimal context package
  - Standard thinking mode for efficient execution
  
Stages:
  1. Brief analysis (context-only, think)
  2. Direct implementation (changes, think)
  3. Quick validation (changes, think)
  
Example: "Add a comment to the calculateTotal function"
```

### Feature Development Pattern
```yaml
Characteristics:
  - Parallel UI/API/DB work with synchronized context sharing
  - Comprehensive context packages
  - Mixed thinking modes (ultrathink for planning, think for implementation)
  
Stages:
  1. Requirement analysis (context-only, ultrathink)
  2. Architecture planning (context-only, ultrathink)
  3. Parallel implementation (changes, think)
  4. Integration testing (changes, think)
  5. Verification (changes, think)
  
Example: "Implement user authentication with JWT and OAuth"
```

### Bug Fix Pattern
```yaml
Characteristics:
  - Sequential investigation and repair
  - Progressive context building
  - Think-harder for root cause analysis, think for implementation
  
Stages:
  1. Problem analysis (context-only, think-harder)
  2. Root cause investigation (context-only, think-harder)
  3. Solution planning (context-only, ultrathink)
  4. Implementation (changes, think)
  5. Regression testing (changes, think)
  
Example: "Fix memory leak in WebSocket connections"
```

### Refactoring Pattern
```yaml
Characteristics:
  - Distributed code improvement
  - Comprehensive context analysis
  - Think-harder for impact analysis, think for execution
  
Stages:
  1. Code analysis (context-only, think-harder)
  2. Impact assessment (context-only, think-harder)
  3. Refactoring strategy (context-only, ultrathink)
  4. Incremental implementation (changes, think)
  5. Testing and validation (changes, think)
  
Example: "Refactor authentication module for better maintainability"
```

### Testing Pattern
```yaml
Characteristics:
  - Parallel test generation and execution
  - Validation context focus
  - Think for systematic test creation and validation
  
Stages:
  1. Test requirement analysis (context-only, think)
  2. Test strategy planning (context-only, think-harder)
  3. Test implementation (changes, think)
  4. Test execution and validation (changes, think)
  
Example: "Create comprehensive tests for the payment processing module"
```

## Workflow Configuration

### Stage Configuration

```yaml
workflow_stages:
  analysis:
    required: true
    agent_type: context-only
    thinking_mode: ultrathink
    output: structured_context
    
  research:
    required: true
    agent_type: context-only
    phases: [strategic, tactical]
    thinking_mode: think
    output: research_context
    
  planning:
    required: true
    agent_type: context-only
    thinking_mode: ultrathink
    output: implementation_plan
    
  implementation:
    required: true
    agent_type: implementation
    thinking_mode: think
    input: structured_context
    output: implementation_results
```

### Flag Behavior Configuration

```yaml
flag_behaviors:
  full_workflow:
    enabled_stages: [analysis, research, planning, implementation, testing, verification, refactoring]
    execution_order: sequential_with_parallel_optimization
    context_flow: enhanced
    
  spec_driven:
    enabled_stages: [analysis, spec_analysis, spec_update, research, planning, implementation, validation]
    execution_order: documentation_first
    context_flow: specification_synchronized
    
  planning_only:
    enabled_stages: [analysis, research, planning]
    execution_order: context_only
    context_flow: planning_focused
```

This workflow system provides flexible, structured execution patterns that adapt to task complexity while maintaining consistent quality and context management throughout the development lifecycle.
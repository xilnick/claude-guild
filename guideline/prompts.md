# Guild Prompt Library

## Core Philosophy

**All intelligence through prompts, not code**. This library defines how Claude analyzes, understands, and generates Guild systems.

## Project Analysis Prompts

### Pattern-Based Project Intelligence
```yaml
prompt: project_pattern_analysis
content: |
  Perform deep pattern-based analysis of this project using all available tools.
  
  **Technology-Agnostic Pattern Recognition**:
  
  1. **Architectural Patterns**:
     - What fundamental architectural styles are used? (layered, microservices, component-based, event-driven, domain-driven)
     - How does the project organize responsibilities and boundaries?
     - What communication patterns exist between components?
  
  2. **Development Flow Patterns**:
     - How is work broken down and organized?
     - What development lifecycle patterns are evident?
     - What quality assurance and validation patterns exist?
  
  3. **Data Flow Patterns**:
     - How does information move through the system?
     - What transformation and processing patterns are used?
     - Where are the critical data boundaries?
  
  4. **Integration Patterns**:
     - How does the project interact with external systems?
     - What interface and contract patterns are used?
     - How are dependencies managed and abstracted?
  
  5. **Scalability Patterns**:
     - How does the project handle growth and change?
     - What modularity and extensibility patterns are evident?
     - Where are the flexibility and adaptation points?
  
  **Beyond Technology Labels**:
  - Ignore framework names, focus on underlying patterns
  - Identify organizational principles that transcend specific tools
  - Recognize patterns that would apply regardless of technology choices
  - Understand the "shape" of the project's complexity
  
  **Context Understanding**:
  - What domain knowledge is embedded in the codebase?
  - What business rules and constraints are evident?
  - What user interaction patterns exist?
  - What operational patterns are required?
  
  Generate a rich pattern profile that enables creating agents specialized for this project's unique characteristics, not its technology stack.
```

### Project Complexity Profiling
```yaml
prompt: project_complexity_profiling
content: |
  Based on pattern analysis: ${pattern_analysis}
  
  Create a multi-dimensional complexity profile:
  
  1. **Cognitive Complexity**:
     - How much domain knowledge is required?
     - What level of context must be maintained?
     - How interconnected are the various concerns?
  
  2. **Structural Complexity**:
     - How many distinct patterns interact?
     - What is the depth of abstraction layers?
     - How many integration points exist?
  
  3. **Change Complexity**:
     - How much context is needed to make safe changes?
     - What ripple effects do modifications typically have?
     - How much validation is required for changes?
  
  4. **Coordination Complexity**:
     - How many different concerns must work together?
     - What level of orchestration is needed?
     - How much parallel work is possible?
  
  **Intelligence Allocation Strategy**:
  - Which tasks require enhanced thinking modes (ultrathink, think-harder)?
  - Where can standard thinking modes be effectively used?
  - What level of agent specialization serves this complexity level?
  - How should context be managed to optimize performance?
  
  Output a complexity profile that guides optimal resource allocation.
```

### Complexity Assessment
```yaml
prompt: complexity_assessment
content: |
  Based on the project analysis: ${project_analysis}
  
  Assess the project's complexity across dimensions:
  
  1. **Scale**: Lines of code, number of modules, team size indicators
  2. **Technical Complexity**: Architectural patterns, integration points, dependencies
  3. **Domain Complexity**: Business logic complexity, regulatory requirements
  4. **Operational Complexity**: Deployment patterns, infrastructure requirements
  5. **Maintenance Complexity**: Technical debt indicators, documentation quality
  
  Determine:
  - Appropriate thinking modes for different tasks
  - Level of agent specialization needed
  - Workflow orchestration requirements
  - Context management strategies
  
  Output a complexity profile to guide system configuration.
```

## Agent Generation Prompts

### Pattern-Driven Agent Generation
```yaml
prompt: generate_pattern_agents
content: |
  Based on pattern analysis: ${pattern_analysis}
  And complexity profile: ${complexity_profile}
  
  **Generate agents specialized for THIS project's unique patterns**:
  
  **Analysis: What specialization patterns does this project need?**
  
  1. **Pattern Specialization Requirements**:
     - Which architectural patterns need dedicated understanding?
     - What domain-specific knowledge requires specialized agents?
     - Which integration patterns need coordinated handling?
     - What complexity areas benefit from specialized attention?
  
  2. **Cognitive Load Distribution**:
     - Which concerns require enhanced thinking capabilities?
     - What tasks can be efficiently handled with standard thinking?
     - Where does parallel execution provide optimal benefits?
     - How should context be distributed across agents?
  
  **Agent Generation Strategy**:
  
  1. **Context-Only Agents** (Analysis & Planning):
     - Generate agents that understand the project's specific patterns
     - Each agent should have deep knowledge of relevant architectural and domain patterns
     - Configure appropriate thinking modes based on cognitive complexity
  
  2. **Implementation Agents** (Execution):
     - Generate agents specialized for the project's specific implementation patterns
     - Focus on pattern-based understanding rather than technology labels
     - Include deep context about the project's conventions and constraints
  
  **For each generated agent, provide**:
  - **Role Definition**: What specific pattern-based responsibility
  - **Pattern Context**: Deep understanding of relevant project patterns
  - **Thinking Configuration**: Optimal thinking mode for this agent's complexity
  - **Coordination Protocol**: How this agent works with others
  - **Quality Standards**: What this agent optimizes for
  
  **Generate agent definitions that are uniquely tuned to this project's patterns and complexity, not generic templates.**
```

### Agent Context Engineering
```yaml
prompt: engineer_agent_context
content: |
  For this specific agent role: ${agent_role}
  In this project context: ${project_patterns}
  With this complexity profile: ${complexity_profile}
  
  **Engineer deep, project-specific agent context**:
  
  1. **Pattern Expertise Injection**:
     - What architectural patterns must this agent deeply understand?
     - Which domain patterns are critical for this agent's success?
     - What integration patterns affect this agent's work?
     - Which quality patterns should this agent enforce?
  
  2. **Project-Specific Intelligence**:
     - What conventions and standards are unique to this project?
     - Which codebase patterns should this agent recognize and follow?
     - What are the critical decision points and trade-offs?
     - Where are the common pitfalls and how to avoid them?
  
  3. **Context Optimization**:
     - What level of detail optimizes this agent's effectiveness?
     - How should project knowledge be structured for optimal access?
     - What examples and patterns aid understanding?
     - What references and citations provide continued learning?
  
  4. **Coordination Intelligence**:
     - How does this agent's work intersect with other agents?
     - What context should be shared vs. kept specialized?
     - What handoff protocols optimize workflow efficiency?
     - How should this agent communicate its work and decisions?
  
  **Generate rich, contextual agent intelligence that enables pattern-based reasoning and project-specific optimization.**
```

### Agent Context Injection
```yaml
prompt: agent_context_[role]
content: |
  You are a ${role} agent for this project:
  
  Project Context:
  ${project_profile}
  
  Your specialized knowledge includes:
  - Architecture: ${architecture_patterns}
  - Technologies: ${technology_stack}
  - Conventions: ${coding_standards}
  - Workflows: ${development_practices}
  
  Your responsibilities:
  ${agent_responsibilities}
  
  When analyzing tasks:
  1. Consider the project's specific patterns and conventions
  2. Use the existing architecture and technology choices
  3. Follow established development workflows
  4. Maintain consistency with the codebase
  
  Your thinking mode: ${thinking_mode}
  Your interaction style: ${interaction_pattern}
```

## Workflow Orchestration Prompts

### Intelligence-Driven Task Analysis
```yaml
prompt: analyze_task_intelligence
content: |
  Given this task: ${user_task}
  In this pattern context: ${project_patterns}
  With complexity profile: ${complexity_profile}
  And available agent capabilities: ${agent_roster}
  
  **Perform deep, pattern-aware task analysis**:
  
  1. **Intent Understanding**:
     - What is the core requirement beyond the surface request?
     - What implicit expectations arise from the project's patterns?
     - What domain knowledge is required for success?
     - How does this align with the project's architectural patterns?
  
  2. **Pattern Impact Analysis**:
     - Which architectural patterns will be affected or leveraged?
     - What domain patterns are relevant to this task?
     - Which integration patterns create constraints or opportunities?
     - How do the project's scalability patterns influence the approach?
  
  3. **Complexity Assessment**:
     - What level of cognitive complexity does this task require?
     - Where are the coordination complexity challenges?
     - What change complexity considerations apply?
     - How much context needs to be maintained?
  
  4. **Agent Strategy Design**:
     - Which agents are optimally suited for different aspects?
     - What thinking modes should be allocated to each agent?
     - How should work be parallelized for efficiency?
     - What context handoff protocols optimize the workflow?
  
  5. **Success Criteria Definition**:
     - What pattern compliance validates success?
     - What quality gates align with project standards?
     - How should validation be distributed across agents?
     - What documentation or tests align with project patterns?
  
  **Output a rich task analysis that enables intelligent workflow orchestration based on project-specific patterns and optimal agent allocation.**
```

### Dynamic Workflow Strategy Generation
```yaml
prompt: generate_workflow_strategy
content: |
  Based on task analysis: ${task_analysis}
  With agent capabilities: ${agent_capabilities}  
  And project patterns: ${project_patterns}
  
  **Generate optimal workflow strategy for THIS specific task and project**:
  
  1. **Workflow Architecture**:
     - What workflow composition optimizes for this task type?
     - How should stages be sequenced for optimal context flow?
     - Where can parallel execution provide benefits without conflicts?
     - What are the critical synchronization points?
  
  2. **Agent Orchestration**:
     - Which agents should lead each workflow stage?
     - How should context be distributed and aggregated?
     - What thinking modes optimize each stage?
     - Where should enhanced thinking be allocated for maximum impact?
  
  3. **Context Engineering Strategy**:
     - What context accumulation strategy optimizes workflow efficiency?
     - How should project patterns be referenced throughout?
     - What level of detail should be maintained at each stage?
     - Where can context be compressed without losing critical information?
  
  4. **Quality Integration**:
     - How should validation be distributed across workflow stages?
     - What quality patterns should be enforced at each stage?
     - Where are the critical quality gates for this task type?
     - How should testing and verification be integrated?
  
  5. **Adaptive Execution**:
     - What are the decision points that might change the workflow?
     - How should the workflow adapt to unexpected discoveries?
     - What fallback strategies apply if agents encounter issues?
     - How should the workflow learn and optimize during execution?
  
  **Generate an executable workflow strategy that maximizes effectiveness for this specific task within this project's unique patterns.**
```

### Workflow Strategy
```yaml
prompt: create_workflow_strategy
content: |
  Based on task analysis: ${task_analysis}
  With available agents: ${agent_roster}
  
  Design an optimal workflow strategy:
  
  1. **Research Phase**:
     - What information needs to be gathered?
     - Which parts of the codebase need analysis?
     - What external references are relevant?
  
  2. **Planning Phase**:
     - How should the work be broken down?
     - What is the optimal execution sequence?
     - How should agents coordinate?
  
  3. **Implementation Phase**:
     - What are the concrete implementation steps?
     - How should changes be validated?
     - What are the rollback points?
  
  4. **Verification Phase**:
     - What tests validate the implementation?
     - How is quality assured?
     - What documentation is needed?
  
  Create an executable workflow with clear handoffs and success criteria.
```

### Context Engineering
```yaml
prompt: engineer_context
content: |
  For this workflow stage: ${stage}
  With accumulated context: ${previous_context}
  And stage requirements: ${stage_requirements}
  
  Engineer optimal context package:
  
  1. **Context Synthesis**:
     - What information is critical for this stage?
     - What can be summarized or referenced?
     - What details must be preserved?
  
  2. **Context Structure**:
     - Organize information hierarchically
     - Use XML tags for clear sections
     - Include references with file:line format
  
  3. **Context Optimization**:
     - Remove redundant information
     - Compress verbose sections
     - Maintain traceability
  
  4. **Handoff Preparation**:
     - What does the next stage need?
     - What format is most useful?
     - What validation is required?
  
  Output an optimized context package for efficient stage execution.
```

## Quality Assurance Prompts

### Implementation Validation
```yaml
prompt: validate_implementation
content: |
  For this implementation: ${implementation_details}
  Against requirements: ${original_requirements}
  In project context: ${project_context}
  
  Perform comprehensive validation:
  
  1. **Functional Validation**:
     - Does it meet all requirements?
     - Are edge cases handled?
     - Is the behavior correct?
  
  2. **Quality Validation**:
     - Does it follow project patterns?
     - Is the code maintainable?
     - Are best practices followed?
  
  3. **Integration Validation**:
     - Does it integrate smoothly?
     - Are interfaces consistent?
     - Are dependencies managed?
  
  4. **Performance Validation**:
     - Are there performance implications?
     - Is resource usage appropriate?
     - Are there scalability concerns?
  
  Provide validation report with specific issues and recommendations.
```

### Test Generation
```yaml
prompt: generate_tests
content: |
  For this implementation: ${implementation}
  With validation criteria: ${validation_criteria}
  Using test framework: ${detected_test_framework}
  
  Generate comprehensive tests:
  
  1. **Unit Tests**:
     - Test individual functions/methods
     - Cover edge cases and error conditions
     - Ensure proper isolation
  
  2. **Integration Tests**:
     - Test component interactions
     - Validate data flow
     - Check system boundaries
  
  3. **Test Quality**:
     - Follow project's test patterns
     - Use appropriate assertions
     - Include clear test descriptions
  
  Generate tests that match the project's testing philosophy and tools.
```

## System Generation Prompts

### Configuration Generation
```yaml
prompt: generate_configuration
content: |
  Based on project analysis: ${project_profile}
  And complexity assessment: ${complexity_assessment}
  
  Generate optimal Guild configuration:
  
  1. **Performance Settings**:
     - Parallelization strategies
     - Context size limits
     - Thinking mode assignments
  
  2. **Workflow Configuration**:
     - Default workflow stages
     - Quality gates
     - Validation criteria
  
  3. **Agent Configuration**:
     - Agent roster and specializations
     - Communication patterns
     - Coordination strategies
  
  Generate configuration that maximizes effectiveness for this specific project.
```

### Instructions Generation
```yaml
prompt: generate_instructions
content: |
  For this project: ${project_profile}
  With this Guild configuration: ${guild_configuration}
  
  Generate project-specific instructions:
  
  1. **Project Overview**:
     - Key architectural decisions
     - Important conventions
     - Critical dependencies
  
  2. **Workflow Guidance**:
     - Recommended approaches for common tasks
     - Project-specific considerations
     - Quality standards
  
  3. **Agent Guidance**:
     - How agents should approach this project
     - Key patterns to follow
     - Common pitfalls to avoid
  
  Create instructions that help Guild work effectively with this specific codebase.
```

## Meta-Prompts (Self-Improvement)

### Prompt Optimization
```yaml
prompt: optimize_prompts
content: |
  Based on execution history: ${execution_logs}
  And effectiveness metrics: ${performance_metrics}
  
  Analyze and improve prompts:
  
  1. **Effectiveness Analysis**:
     - Which prompts produce best results?
     - Where do prompts fail or struggle?
     - What patterns lead to success?
  
  2. **Optimization Opportunities**:
     - How can prompts be more specific?
     - What context improves results?
     - What instructions are missing?
  
  3. **Model Adaptation**:
     - How can prompts leverage new model capabilities?
     - What techniques improve reasoning?
     - How to better utilize available tools?
  
  Suggest prompt improvements that enhance system effectiveness.
```

## Usage Principles

### Prompt Invocation
1. **Always provide rich context** - More context enables better analysis
2. **Trust Claude's intelligence** - Don't prescribe specific approaches
3. **Iterate based on results** - Refine prompts based on outcomes
4. **Leverage full capabilities** - Use all available tools and reasoning

### Future-Proofing
1. **Model-agnostic structure** - Prompts work with any Claude version
2. **Capability detection** - Adapt to available model features
3. **Progressive enhancement** - Better models automatically improve results
4. **No hardcoded assumptions** - Let Claude determine optimal approaches

### Context Management
1. **Hierarchical structure** - Organize context in levels of detail
2. **Reference-based linking** - Use file:line citations
3. **XML structuring** - Clear section boundaries
4. **Progressive detail** - Start with summaries, expand as needed

## Integration with Guild System

These prompts form the intelligence layer of Guild:
- **Commands** invoke prompts for orchestration
- **Agents** are generated using these prompts
- **Workflows** execute through prompt-driven analysis
- **Quality** is assured through validation prompts

The entire Guild system becomes a conductor for Claude's intelligence, with these prompts as the score.
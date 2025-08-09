# Guild Prompt Library

## Core Philosophy

**All intelligence through prompts, not code**. This library defines how Claude analyzes, understands, and generates Guild systems.

## Project Analysis Prompts

### Initial Project Understanding
```yaml
prompt: project_analysis
content: |
  Analyze this project comprehensively using all available tools.
  
  Understand:
  1. **Purpose**: What does this project do? What problem does it solve?
  2. **Architecture**: How is the project structured? What patterns does it follow?
  3. **Technologies**: What languages, frameworks, and tools are used?
  4. **Complexity**: How complex is the codebase? What are the main challenges?
  5. **Workflows**: What development patterns and practices are evident?
  6. **Quality Standards**: What testing, linting, and quality tools are present?
  
  Use your full capabilities to:
  - Read key files (README, package.json, requirements.txt, etc.)
  - Analyze directory structure
  - Understand code patterns
  - Identify architectural decisions
  
  Provide a comprehensive project profile that will guide agent generation.
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

### Dynamic Agent Creation
```yaml
prompt: generate_agents
content: |
  Based on this project profile: ${project_profile}
  And complexity assessment: ${complexity_assessment}
  
  Design a specialized agent system:
  
  1. **Strategic Agents** (Context-Only):
     - What reasoning capabilities are needed for this project?
     - What planning approaches fit the architecture?
     - What research patterns match the technology stack?
  
  2. **Implementation Agents**:
     - What technical specialists are required?
     - How should they understand the project's patterns?
     - What quality standards should they enforce?
  
  For each agent, define:
  - Specific role and responsibilities
  - Project-specific context and knowledge
  - Appropriate thinking mode
  - Interaction patterns with other agents
  
  Generate agent definitions that deeply understand this specific project.
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

### Task Analysis
```yaml
prompt: analyze_task
content: |
  Given this task: ${user_task}
  In this project context: ${project_context}
  
  Perform comprehensive task analysis:
  
  1. **Understanding**:
     - What is the core requirement?
     - What are the implicit expectations?
     - What constitutes success?
  
  2. **Impact Analysis**:
     - Which parts of the codebase will be affected?
     - What are the dependencies and interactions?
     - What are the potential risks?
  
  3. **Approach Design**:
     - What is the optimal implementation strategy?
     - Which agents should be involved and in what sequence?
     - What context needs to be gathered?
  
  4. **Quality Criteria**:
     - What tests are needed?
     - What documentation should be updated?
     - What review criteria apply?
  
  Output a structured task analysis for workflow execution.
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
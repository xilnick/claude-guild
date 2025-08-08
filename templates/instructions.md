# Guild Project Instructions

This file contains project-specific instructions that customize Guild agent behavior and workflow execution.

## Agent Configuration

### Agent Model and Thinking Mode Configuration

Configure specific agents that need non-default models or thinking modes.
Agents not listed here will use the inherited model from Claude Code.

```yaml
agents:
  # Context-Only Agents (often benefit from enhanced thinking)
  guild-reasoning-agent:
    thinking_mode: think-harder  # Multi-stage analysis with assumption challenging
    # Inherits model unless specified: model: opus
    
  guild-planning-agent:
    model: opus              # Strategic planning often needs maximum capability
    thinking_mode: ultrathink  # Maximum strategic depth
    
  guild-spec-agent:
    thinking_mode: think-harder  # Thorough specification analysis (MANDATORY)
    # Critical for specification-driven development workflow
    
  guild-project-research-agent:
    thinking_mode: think     # Standard analytical research (default)
    
  guild-global-research-agent:  
    thinking_mode: think     # Standard analytical research (default)
    
  # Implementation Agents (usually standard thinking for efficiency)
  guild-verification-agent:
    thinking_mode: think     # Standard analytical verification (default)
    
  # Framework engineers inherit defaults unless complex domain requires enhancement
  # guild-cli-engineer: (uses inherited defaults)
  # guild-package-engineer: (uses inherited defaults)
  # guild-*-engineer: (uses inherited defaults)
```

**Configuration Guidelines**:
- **Context-Only Agents**: Often benefit from enhanced thinking modes
- **Implementation Agents**: Usually use standard thinking for efficient execution  
- **Model Override**: Only specify when you need more capability than inherited
- **Thinking Modes**: Configure based on agent complexity needs

### Thinking Mode Definitions

**think-harder**: Enhanced reasoning with multiple analysis passes
- Deep intent analysis beyond surface requests
- Assumption enumeration and challenging  
- Alternative approach generation (minimum 3)
- Risk assessment and mitigation planning
- Success criteria definition
- **Best For**: Reasoning agents handling complex or ambiguous requirements

**ultrathink**: Maximum strategic analysis
- Comprehensive multi-perspective evaluation
- Long-term implications analysis
- Complex dependency mapping
- Strategic architecture consideration
- Comprehensive risk/benefit analysis
- **Best For**: Planning agents creating comprehensive strategies

**think**: Standard analytical thinking
- Direct problem analysis
- Solution implementation focus
- Efficient execution path
- Practical decision making
- **Best For**: Research agents and implementation agents

### Thinking Mode Selection Guidelines

```yaml
Agent Type Recommendations:
  Context-Only Agents:
    guild-reasoning-agent: "think-harder" (complex analysis needs)
    guild-planning-agent: "ultrathink" (strategic depth required)
    guild-research-agents: "think" (efficient information gathering)
    
  Implementation Agents:
    guild-verification-agent: "think" (focused validation)
    guild-engineers: "think" (efficient implementation)
    
Special Considerations:
  Complex Projects: May benefit from enhanced modes across more agents
  Simple Tasks: Standard "think" mode usually sufficient
  High-Stakes Work: Consider "ultrathink" for critical planning phases
```

## Workflow Customization

### Default Stage Configuration
Customize which stages are enabled by default for `/guild` commands:
- **Default Stages**: reasoning, planning, implementation
- **Optional Stages**: Add `--refactor`, `--test`, `--verify` flags as needed  
- **Comprehensive Workflow**: Use `--full` flag for complete workflow (verify + test + refactor)
- **Research Integration**: Automatic context research when complexity detected

### --full Flag Configuration

The `--full` flag triggers comprehensive workflow execution:
```yaml
--full Flag Behavior:
  Enabled Stages:
    - reasoning (context-only)
    - research (context-only) 
    - planning (context-only)
    - implementation (changes)
    - testing (changes)
    - verification (changes) 
    - refactoring (changes)
    
  Execution Order:
    1. Context Creation: reasoning → research → planning
    2. Implementation: code changes and feature development
    3. Quality Assurance: testing → verification → refactoring
    
  Agent Coordination:
    - Context-only agents provide structured context
    - Implementation agents receive and act on context
    - Quality agents validate and improve results
```

### Stage Execution Patterns
```yaml
Standard Workflow (/guild "task"):
  - reasoning → planning → implementation
  
Enhanced Workflow (/guild --full "task"):  
  - reasoning → research → planning → implementation → testing → verification → refactoring
  
Specification-Driven Workflow (/guild --spec "task"):
  - reasoning → spec-analysis → spec-update → research → planning → implementation
  
Planning Only (/guild --no-implement "task"):
  - reasoning → planning (with save-to-file option)
  
Refactor Only (/guild --refactor "task"):
  - reasoning → refactor-planning → refactoring
```

### --spec Flag Configuration

The `--spec` flag enables specification-driven development:
```yaml
--spec Flag Behavior:
  Agent Activation: guild-spec-agent automatically included
  Thinking Mode: guild-spec-agent uses "think-harder" (MANDATORY)
  
  Workflow Sequence:
    1. Reasoning: Analyze task requirements
    2. Spec Analysis: guild-spec-agent analyzes current specifications
    3. Spec Update: guild-spec-agent updates relevant specifications
    4. Research: Gather implementation context
    5. Planning: Create implementation strategy based on updated specs
    6. Implementation: Execute changes following updated specifications
    
  Documentation Scope:
    - API documentation and interface definitions
    - Technical specifications and architecture docs
    - Requirements and user stories
    - Testing specifications and acceptance criteria
    - Integration contracts and data formats
    
  Quality Enforcement:
    - Specifications ALWAYS updated before implementation
    - Documentation remains synchronized with changes
    - Implementation guided by comprehensive specifications
```

### Quality Standards
- **Code Quality**: All engineers follow mandatory simplicity and maintainability principles
- **Refactoring**: Systematic code improvement with duplication elimination and complexity reduction
- **Ignore Patterns**: Agents respect exclusion patterns in `.guild/ignore.md`

## Context Provider Configuration

### Research Integration
Configure context research capabilities with parallel execution support:
- **MCP Servers**: Use available MCP servers for official documentation research
- **WebSearch**: Community best practices and emerging technology research  
- **Project Analysis**: Codebase pattern recognition and convention detection
- **Parallel Research**: Multiple research agents with context selection mechanisms

### Research Context Selection
Configure parallel research execution based on task complexity:
```yaml
# Parallel research triggers
parallel-research-triggers:
  - complex-task-detection: auto
  - multiple-technology-stack: auto
  - large-codebase-analysis: auto
  - comprehensive-research-mode: manual

# Context selection mechanisms  
research-context-areas:
  project-research:
    - codebase-analysis
    - technology-stack-analysis
    - project-constraints
    - code-quality-assessment
  global-research:
    - framework-best-practices
    - community-standards
    - technology-trends
    - integration-patterns
```

### Research Scope
- **Project Research**: Focus on existing codebase patterns and conventions with parallel context analysis
- **Global Research**: Community standards and framework best practices with parallel external research
- **Technology Discovery**: Automatic technology stack detection and specialization
- **Context Coordination**: Smart context selection to avoid research overlap and maximize coverage

## Project-Specific Customizations

### Technology Stack
Configure framework-specific behaviors:
```yaml
# Example: Framework-specific configurations
framework-specific-patterns: true
test-framework-integration: auto-detect
package-manager-preference: npm
```

### Development Workflow
Customize development workflow behaviors:
- **Error Handling**: Comprehensive error detection and systematic debugging
- **Testing Strategy**: Automated test creation and validation protocols
- **Performance**: Code optimization balanced with maintainability

---

**Note**: Modify sections above to customize Guild behavior for your specific project requirements.

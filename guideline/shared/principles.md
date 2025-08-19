# Core Principles Module
**Version**: 5.0.0 | **Last Updated**: 2025-01-18 | **Dependencies**: None

## Purpose
Fundamental principles that guide all Guild system behavior with hierarchical agent coordination and think-only specialized agents. This module is embedded into the setup command.

## Embedded Intelligence

### Planning Router with Think-Only Agents Philosophy

**Core Approach**: Planning router handles all complex analysis using think-harder/ultrathink while specialized agents use think mode only for efficient parallel execution.

**Hierarchical Thinking Strategy**:
- **Planning Router**: ultrathink/think-harder for complex coordination and task decomposition
- **Domain Lead Agents**: think mode for domain-specific coordination and sub-agent management
- **Execution Specialists**: think mode only for focused implementation with pre-computed context

**Key Principles**:
- **Cognitive Load Separation**: Heavy thinking upfront, light execution in parallel
- **Hierarchical Coordination**: Planning router → domain leads → sub-agents
- **Think-Only Execution**: All specialized agents use think mode exclusively
- **Planning Router Orchestration**: Single point for complex decision-making
- **Context Pre-Computation**: All complex analysis done before agent spawning

### Reasoning-First Confirmation Framework

**MAIN THREAD REASONING EXCLUSIVITY**: The main thread has exclusive responsibility for analyzing user prompts, identifying logical issues, and obtaining explicit user confirmation before any planning or implementation begins.

**MANDATORY CONFIRMATION PROTOCOL**:
```yaml
reasoning_phase_responsibilities:
  prompt_analysis: Parse user requirements for completeness and consistency
  logical_issue_identification: Detect contradictions, ambiguities, or missing information
  feasibility_assessment: Analyze technical feasibility within project context
  assumption_validation: Identify and validate any assumptions required to proceed
  
confirmation_requirements:
  explicit_understanding_presentation: Present clear interpretation of requirements
  logical_issue_disclosure: Highlight any contradictions or ambiguities found
  assumption_acknowledgment: State any assumptions made during analysis
  user_validation_request: Ask explicit confirmation before proceeding
  
post_confirmation_handoff:
  planning_agent_invocation: Call planning agent only after user confirms understanding
  validated_context_transfer: Pass confirmed understanding to planning agent
  no_planning_without_confirmation: Never proceed to planning without explicit user approval
```

**SEPARATION OF CONCERNS**: Main thread reasons about "what" needs to be done, planning agent focuses exclusively on "how" to implement the confirmed understanding.

### Hierarchical Agent Intelligence Framework

**Planning Router Orchestration**:
- Planning router analyzes project and decomposes tasks using complex thinking
- Spawns domain lead agents based on project patterns and requirements
- Pre-computes all coordination strategies and context packages
- Handles all complex decision-making to enable think-only execution

**Hierarchical Agent Creation**:
```yaml
Planning Router Process (think-harder/ultrathink):
  1. Comprehensive task analysis and decomposition
  2. Domain pattern detection and agent requirement analysis
  3. File ownership assignment and conflict prevention planning
  4. Context package creation for domain leads

Domain Lead Process (think mode):
  1. Receive complete context from planning router
  2. Analyze workload within specialization domain
  3. Spawn sub-agents when 3+ similar tasks detected
  4. Distribute tasks and monitor progress

Sub-Agent Process (think mode):
  1. Execute assigned tasks with provided context
  2. Follow established patterns and conventions
  3. Report progress asynchronously
  4. Escalate complex issues to domain lead
```

**Think-Only Agent Design**:
- All agents except planning router use think mode exclusively
- Complex coordination pre-computed by planning router
- Simple, efficient execution with minimal cognitive overhead
- Clear boundaries and responsibilities prevent conflicts

### Hierarchical Parallel Architecture

**Proactively Parallel Philosophy**: Planning router decomposes tasks into micro-tasks enabling 10-20x speedup through intelligent hierarchical coordination.

**Hierarchical Parallel Strategy**:
- **Planning Router Orchestration**: Complex task decomposition using think-harder/ultrathink
- **Domain Lead Coordination**: Think mode for domain-specific agent management
- **Sub-Agent Execution**: Think mode only for efficient parallel execution
- **Performance Target**: 10-20x speedup through intelligent hierarchical coordination

**Hierarchical Execution Patterns**:
```yaml
Planning Router (think-harder/ultrathink):
  Strategy: Master orchestration and task decomposition
  Responsibilities: Agent spawning, conflict prevention, integration planning
  Spawning: 1-5 domain leads based on project patterns

Domain Leads (think mode):
  Strategy: Domain-specific coordination and sub-agent management
  Spawning Triggers: 3+ similar tasks → spawn 2-3 sub-agents
  Coordination: File ownership, progress monitoring, quality assurance

Sub-Agents (think mode):
  Strategy: Focused execution with pre-computed context
  Responsibilities: Implement specific tasks, report progress
  Coordination: Minimal overhead through domain leads
```

**Hierarchical Workflow Strategy**:
- Main thread: Initial reasoning and context gathering (ultrathink)
- Planning router: Task decomposition and agent orchestration (think-harder/ultrathink)
- Domain leads: Domain coordination and sub-agent management (think)
- Sub-agents: Efficient parallel execution (think only)

### Quality Through Intelligence

**Adaptive Quality**:
- Claude determines appropriate quality standards from project context
- Follow discovered patterns and conventions
- Validate against requirements and integration points
- Test when complexity or risk requires it

**Hierarchical Thinking Mode Allocation**:
- **ultrathink**: Planning router for massive coordination (10+ agents), complex architecture
- **think-harder**: Planning router for moderate coordination (3-8 agents), strategic planning
- **think**: ALL specialized agents (domain leads and sub-agents) use think mode exclusively

### Project Structure Intelligence

**Single-Root Architecture**:
- Guild maintains single `.guild/` directory at project root (working directory)
- Single `.claude/agents/guild/` directory manages entire project hierarchy
- All complex structures (submodules, monorepos, nested projects) coordinated from root
- No nested Guild configurations - one control point for entire project

**Comprehensive Project Coverage**:
- **Git Submodules**: Recursive detection and mapping from project root
- **Multi-Language Projects**: Single agent set handles polyglot codebases  
- **Monorepos**: Workspace-aware operations coordinated from root
- **Nested Structures**: Deep recursive analysis while maintaining root coordination
- **Cross-Repository Dependencies**: Context includes inter-repo relationships

**Project Structure Context**:
```yaml
Structure Intelligence:
  root_path: Working directory (single source of truth)
  submodules: Mapped paths and boundaries from .gitmodules
  packages: Monorepo package structure (lerna, yarn, pnpm workspaces)
  languages: File path to language mapping across entire project
  config_files: All configuration files discovered recursively
  boundaries: Submodule, package, and service boundaries
  dependencies: Cross-boundary relationships and interfaces
```

### Soft Ignore Pattern Respect

**Ignore File Management**:
- Guild maintains `{project_root}/.guild/ignore.md` with gitignore-like patterns
- Files matching patterns are soft-ignored during normal operations
- Explicit user requests override ignore patterns
- Agents must check patterns before file operations

**Soft Ignore Behavior**:
- Ignored files excluded from automatic analysis and search
- Ignored files not modified during batch operations
- User can still explicitly request operations on ignored files
- Clear feedback when accessing ignored files by request

## Key Principles

1. **Planning Router Orchestration**: Single point for complex decision-making and coordination
2. **Think-Only Specialized Agents**: All agents except planning router use think mode exclusively
3. **Hierarchical Coordination**: Planning router → domain leads → sub-agents architecture
4. **Cognitive Load Separation**: Heavy thinking upfront, light execution in parallel
5. **Context Pre-Computation**: All complex analysis done before agent spawning
6. **Proactively Parallel Execution**: Target 10-20x speedup through intelligent task decomposition
7. **Reasoning-First Confirmation**: Main thread exclusively handles user prompt reasoning and logical issue identification, requiring explicit user confirmation before invoking planning agent
8. **Dynamic Composition**: Agents are composed based on actual project analysis rather than hardcoded templates
9. **Adaptability**: System adapts to any project type or technology through intelligent analysis
10. **Performance**: Efficient parallel execution with minimal coordination overhead
11. **Comprehensive Verification**: All Guild components must be systematically verified for installation, behavior, and compliance

### Comprehensive Verification Framework

**VERIFICATION AS CORE PRINCIPLE**: All Guild system components must undergo systematic verification to ensure installation correctness, behavioral compliance, and architectural integrity.

**MULTI-TIER VERIFICATION ARCHITECTURE**:
```yaml
tier_1_installation_verification:
  file_structure_validation: Verify all required files and directories are created
  template_composition_verification: Validate template substitution and module embedding
  command_routing_validation: Ensure proper command naming and execution paths
  cross_platform_compatibility: Test installation across different environments
  error_condition_handling: Verify graceful failure and recovery mechanisms

tier_2_behavior_verification:
  command_execution_correctness: Validate each command functions as specified
  thinking_mode_compliance: Ensure proper thinking modes are used per guidelines
  guideline_adherence_validation: Verify commands follow core principles
  error_handling_robustness: Test error scenarios and recovery mechanisms
  integration_capabilities_testing: Validate MCP server and tool integration

tier_3_workflow_verification:
  end_to_end_guild_flow_testing: Full reasoning → planning → execution validation
  multi_agent_coordination_verification: Test hierarchical agent spawning and coordination
  real_world_scenario_validation: Test against actual project scenarios
  performance_and_scalability_testing: Validate speed and resource efficiency
  quality_and_consistency_measurement: Ensure consistent, high-quality outputs

tier_4_compliance_verification:
  architecture_principle_compliance: Verify adherence to core Guild principles
  security_and_safety_validation: Ensure safe operation across environments
  documentation_and_usability_testing: Validate user experience and clarity
  long_term_maintainability_assessment: Ensure sustainable system evolution
  continuous_verification_monitoring: Ongoing validation of system health
```

**VERIFICATION INTEGRATION REQUIREMENTS**:
- **Installation Verification**: Every installation must pass comprehensive verification
- **Pre-Execution Verification**: Commands must be verified before user execution
- **Continuous Verification**: Ongoing monitoring and validation of system behavior
- **Quality Gates**: Verification checkpoints at critical system transitions
- **Automated Verification**: Systematic automated testing and validation frameworks

**VERIFICATION SUCCESS CRITERIA**:
```yaml
installation_success_criteria:
  file_structure_completeness: 100% required files present and correctly placed
  template_composition_accuracy: 100% module embedding without placeholder residue
  command_functionality: 100% commands execute without errors
  cross_platform_compatibility: 95%+ success rate across target environments

behavior_success_criteria:
  guideline_compliance: 95%+ adherence to core principles and architecture
  thinking_mode_correctness: 100% proper thinking mode usage per specifications
  error_handling_robustness: 100% graceful handling of expected error conditions
  integration_functionality: 100% successful integration with available tools

workflow_success_criteria:
  end_to_end_functionality: 95%+ successful completion of full Guild workflows
  coordination_effectiveness: 90%+ successful multi-agent coordination scenarios
  performance_targets: Achieve specified speedup targets (2-20x) for parallel execution
  quality_consistency: <15% variance in output quality across similar tasks
```

## Unified Conflict Resolution Strategy

**Hierarchical Coordination Principles**:
- **Planning Router Prevention**: Pre-compute file ownership and conflict prevention
- **Domain Lead Management**: Coordinate sub-agents within domain boundaries
- **Think-Only Execution**: Simple execution agents avoid complex coordination decisions
- **Escalation Protocol**: Complex issues escalate through hierarchy to planning router

**Resolution Strategy**:
```yaml
Prevention: File-level ownership assignment and clear boundaries
Detection: Monitor file conflicts and integration violations  
Resolution: Think harder about priority-based resolution with rollback
Escalation: Ultrathink for complex conflicts requiring human guidance
```

**Implementation**: Lock-free coordination with intelligent priority rules and clear conflict reporting

## Integration Points

### Setup Command Embedding
This module provides core principles for all Guild operations.

### Module Dependencies
None - this is the foundation module.

### Module Consumers
- All other core modules
- Setup command
- Agent generation logic

## Maintainability Guidelines

**Module Update Protocol**:
1. Update version number when making changes
2. Update "Last Updated" timestamp
3. Verify dependencies are still accurate
4. Test integration with dependent modules
5. Update documentation cross-references

**Version Numbering**:
- Major.Minor.Patch format
- Major: Breaking changes to module interface
- Minor: New features or significant enhancements
- Patch: Bug fixes and small improvements

**Dependency Validation**:
- Verify all referenced modules exist
- Check for circular dependencies
- Ensure integration points remain valid
- Test module loading order
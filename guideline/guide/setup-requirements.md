# Setup Command Requirements

## Command Purpose
The `/guild:setup` command analyzes project structure and creates specialized agents based on discovered project needs through systematic discovery and intelligent agent generation.

## Core Requirements

### 1. **Project Discovery Mandatory**
- **MUST** analyze project structure through parallel file system scanning
- **MUST** identify technology stack through simultaneous configuration detection
- **MUST** map dependencies through parallel architecture discovery
- **MUST** assess domain boundaries through pattern analysis

### 2. **Agent Generation Mandatory**
- **MUST** create domain-specialist agents based on discovered project needs
- **MUST** follow 4-sentence description standards for all generated agents
- **MUST** embed parallel tool execution capabilities in all created agents
- **MUST** organize agents through category directory structure
- **NEVER** execute created agents during setup process

#### **Agent File Persistence Requirements**
- **MUST** write agent files as persistent `.md` files to filesystem using Write or MultiEdit tools
- **MUST** store agents at exact path: `./.claude/agents/guild/[category]/[agent-name].md`
- **MUST** include proper YAML frontmatter in each agent file with: name, model: inherit, 4-sentence description
- **MUST** create at least one agent per discovered domain category
- **MUST** verify files exist and are readable after creation using Read tool
- **NEVER** rely solely on Task tool for agent creation (temporary agents only)
- **MUST** write complete agent content including specialist prompt with embedded project context

### 3. **Architectural Boundaries**
- **SETUP = AGENT FACTORY**: Creates agents with embedded parallel capabilities
- **NEVER EXECUTES AGENTS**: Setup creates, workflow executes
- **CREATION-ONLY BOUNDARY**: No runtime operations or agent coordination
- **FLAT HIERARCHY ENFORCEMENT**: No subagent creation allowed

### 4. **Tool Coordination Requirements**
- **PARALLEL-FIRST EXECUTION**: Execute file scanning, configuration detection, and dependency analysis simultaneously
- **BATCH OPERATIONS**: Group project structure analysis, technology discovery, and tool inventory compilation
- **CHALLENGE SEQUENTIAL ASSUMPTIONS**: Verify all dependencies through systematic parallelization assessment
- **OPTIMIZE DISCOVERY PERFORMANCE**: Use resource coordination and batching intelligence

### 5. **Intelligence Requirements**
- **PROJECT DISCOVERY INTELLIGENCE**: Systematic analysis through parallel discovery patterns
- **AGENT GENERATION INTELLIGENCE**: Specialist creation through template compliance frameworks
- **SETUP-SPECIFIC TOOL COORDINATION**: Discovery optimization through parallel execution mandate
- **SETUP-SPECIFIC CHAIN-OF-THOUGHT**: Analytical decomposition with discovery transparency
- **SETUP VERIFICATION**: Systematic assessment and readiness validation

### 6. **Success Criteria**
- **Project Discovery Complete**: Technology stack, architecture patterns, and domain boundaries comprehensively analyzed
- **Agent Generation Complete**: All discovered domains have corresponding specialist agents with framework compliance
- **System Integration Ready**: Agent coordination patterns established and workflow readiness verified
- **Agent Files Created**: Physical `.md` files exist in agent directories with proper YAML frontmatter and complete specialist content
- **File Verification Complete**: All created agent files readable, properly formatted, and contain embedded project context
- **Persistence Confirmed**: Agent files remain accessible after setup command completion for workflow execution
- **Quality Standards Met**: Template compliance, anti-recursion constraints, and parallel execution standards validated

### 7. **Framework Compliance**
- **TB001 Compliance**: Simultaneous tool operations through parallel coordination protocols
- **AM001 Compliance**: Specialist assignment protocols through capability assessment frameworks
- **PE001 Compliance**: Parallel-first execution through atomic unit decomposition
- **RP001 Compliance**: Comprehensive discovery through parallel exploration frameworks
- **AR001 Compliance**: Flat hierarchy maintenance through prevention mechanisms
- **OB001 Compliance**: Operation batching through strategic grouping and resource optimization

## Command-Specific Behaviors

### User Request Processing
When $ARGUMENTS is provided, treat it as ADDITIONAL specialist requests to supplement standard discovery:
- ALWAYS perform comprehensive project discovery and create domain specialists
- Process $ARGUMENTS as supplementary specialist requests to create IN ADDITION to discovered specialists
- Apply intelligent reasoning to integrate user-requested specialists with discovered domain specialists
- NEVER allow $ARGUMENTS to replace or skip the baseline discovery and agent generation process

### Baseline Agent Generation Guarantee
- **MINIMUM COVERAGE**: Setup MUST create at least one specialist per discovered domain category
- **DISCOVERY-FIRST**: Project analysis and domain identification is MANDATORY regardless of $ARGUMENTS
- **SUPPLEMENTARY ARGUMENTS**: User requests via $ARGUMENTS are ALWAYS additive, never replacement
- **COMPREHENSIVE BASELINE**: Standard specialists for framework, intelligence, templates, generation, validation, and integration domains

### Setup Execution Flow
1. **ANALYZE** project through parallel discovery patterns (MANDATORY baseline)
2. **IDENTIFY** domains through systematic assessment protocols (MANDATORY baseline)
3. **CREATE** baseline specialist agents for all discovered domains through template compliance validation
4. **CREATE** additional specialist agents based on $ARGUMENTS if provided (supplementary)
5. **ORGANIZE** agent structure through logical categorization (baseline + supplementary)
6. **VERIFY** creation completeness through coverage assessment (baseline + supplementary)

### Excellence Targets
- **Discovery Excellence**: Comprehensive coverage through parallel analysis and systematic assessment
- **Generation Excellence**: Agent quality through 4-sentence standards and framework dimensional compliance
- **Coordination Excellence**: Integration readiness through specialist coordination patterns and workflow preparation
- **Performance Excellence**: Setup efficiency through parallel execution and optimization measurement

## Modification Guidelines

When modifying setup command template or intelligence:
1. **MUST** maintain all core requirements listed above
2. **MUST** preserve architectural boundaries (creation-only)
3. **MUST** ensure framework dimensional compliance (TB001-OB001)
4. **MUST** validate against setup-specific success criteria
5. **MUST** test parallel execution capabilities
6. **MUST** verify agent generation compliance standards

Any modification that violates these requirements is **FORBIDDEN**.
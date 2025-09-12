# /guild:setup

---
name: guild-setup  
model: inherit
thinking_mode: ultrathink
description: "Analyze [project-type] and create specialized agents based on discovered needs"
---

## Purpose
Initialize Guild system by analyzing project structure and creating specialized agents based on discovered project needs through systematic discovery and intelligent agent generation.

## User Request Processing

When $ARGUMENTS is provided, treat it as the user's specific request that guides this setup:
- Process $ARGUMENTS as primary task instructions that modify setup approach
- Adapt setup workflow based on user intent and requirements  
- Apply intelligent reasoning to determine optimal specialist needs for the request
- Allow $ARGUMENTS to override default behaviors when user intent is clear

## Mandatory Intelligence Compliance

**TEMPLATE REQUIREMENT**: This template enforces mandatory intelligence standards:

- **Zero Code Samples**: Template must never generate or include any code implementations, syntax examples, or executable snippets
- **Complete Technology Abstraction**: Template uses only abstract `[technology-stack]`, `[framework]`, `[language]` placeholder patterns
- **Template-First Patterns**: All guidance uses abstract `[placeholder]` patterns exclusively without specific implementations  
- **Agent Anti-Recursion**: Template ensures agents never create or invoke additional agents - flat hierarchy enforced
- **Native Intelligence Reliance**: Template trusts autonomous intelligence to determine optimal project-specific implementations
- **Creative Solution Preservation**: Template structure enables intelligent adaptation without constraining implementation choices

## Systematic Analysis & Preparation Process

**Project Analysis for Agent Preparation:**
Comprehensive project analysis to determine optimal agent specifications through systematic discovery:

### Initial Project Discovery

**Preparation-Focused Analysis:**
Reference: `@config:AG001` (Agent Creation Pattern), `@config:AM001` (Agent-Mandatory Architecture), `@config:PE001` (Parallel-First Execution Engine), `@config:RP001` (Research Pattern)

<thinking>
1. What are the [project-components] and [technology-stack] characteristics?
2. What [domain-boundaries] and [specialist-requirements] exist?
3. What [discovery-operations] can run in parallel for maximum efficiency?
4. What [agent-categories] and [coordination-patterns] are needed?
5. How do [complexity-areas] map to [specialist-capabilities]?
</thinking>

- Execute systematic discovery for comprehensive project understanding
- Parallel analysis of project technologies and frameworks
- Map project structure through coordinated exploration
- Assess [complexity-areas] requiring specialized assistance
- Document findings for intelligent agent creation specifications with [dimensional-compliance]

**Runtime [Tool-Discovery]:**
Reference: `@config:TB001` (Tool Parallelization Mandate), `@config:OB001` (Operation Batching Optimization)
- Dynamic scanning of available [development-tools] and capabilities
- [Tool-capability] assessment for parallel execution optimization
- [Tool-inventory] compilation with [capability-profiling]
- [Tool-aware] parallelization and batching strategy preparation

**Discovery [Coordination]:**
Reference: `@config:EX001` (Execution Pattern), `@config:PE001` (Parallel-First Execution Engine), `@config:TB001` (Tool Parallelization Mandate), `@config:AR001` (Agent Recursion Prevention)
- Parallel execution of [project-configuration] and [dependency-analysis]
- Simultaneous [tool-capability] scanning and [inventory-assessment]
- Simultaneous [codebase-structure] scanning
- Coordinated [testing-framework] and [build-tool] identification
- Parallel [architectural-pattern] mapping with [tool-aware] optimization and anti-recursion constraints

## Comprehensive Project Discovery

**Initialization Analysis:**
Reference: `@config:RP001` (Research Pattern), `@config:TB001` (Tool Parallelization Mandate), `@config:AM001` (Agent-Mandatory Architecture), `@config:OB001` (Operation Batching Optimization)

Gather information through systematic exploration to prepare agent specifications:
- **[Technology-Stack] Analysis**: Comprehensive [framework] and [dependency] discovery
- **[Project-Structure] Mapping**: [Architectural] organization analysis
- **[Domain] Boundaries**: Identify natural specialist focus areas
- **Complexity Assessment**: Determine areas requiring specialized agent assistance
- **Performance Profiling**: Categorize [project-components] by complexity requirements
- **[Tool-Capability] Profiling**: Assess available [tools] for optimal parallelization, batching, and performance optimization
- **Agent-Mandatory Assessment**: Identify areas requiring mandatory specialist delegation
- **Parallel-First Analysis**: Map natural parallel execution opportunities and dependencies

## Specialist Creation Standards

**4-Sentence Description Format:**
Reference: `@config:AG001` (Agent Creation Pattern), `@config:AM001` (Agent-Mandatory Architecture), `@config:AR001` (Agent Recursion Prevention)
1. **Purpose**: What the specialist does, core capabilities, and systematic integration with mandatory agent delegation
2. **Coordination**: How it works with others using established patterns and when to use within parallel-first execution
3. **Boundaries**: Important limitations, recovery patterns, error handling, and anti-recursion constraints
4. **Outcomes**: Expected results, integration patterns, excellence targets, and [dimensional-compliance]

## Organization Structure

**Categorized Agent Organization:**
Agents are automatically organized into specialized directories under `.claude/agents/guild/`:

```
[project-path]/.claude/agents/guild/
├── [domain-1]/         # [Domain description and responsibilities]
│   └── [specialist].md
├── [domain-2]/         # [Domain description and responsibilities]
│   └── [specialist].md
├── [domain-3]/         # [Domain description and responsibilities]
│   └── [specialist].md
└── [domain-n]/         # [Domain description and responsibilities]
    └── [specialist].md
```

**Categories determined by:**
- [Project-technologies] and [architecture] discovered
- Natural [domain-boundaries] identified in analysis
- [Workflow-patterns] and complexity areas
- [Framework] sub-agent best practices
- Standardized organization for consistent specialist management

## Specialist Template

**Located in categorized directories:** `.claude/agents/guild/[category]/specialist.md`

```markdown
---
name: [domain-name]-specialist
model: inherit  
thinking_mode: ultrathink
description: "[4-sentence description following framework standards with systematic integration]"
---

## Purpose
[Specialized role and domain expertise with systematic coordination]

## Capabilities
**Core Skills**: [Domain-specific abilities and expertise areas]
**Integration**: [How it coordinates with other specialists using established patterns]
**Quality Standards**: [Error handling, recovery patterns, and verification approach]
**Performance**: [Excellence targets and coordination strategies]

## MANDATORY CONSTRAINTS
**CRITICAL REQUIREMENT**: This agent must never create or invoke additional agents.
- **Anti-Recursion**: Absolute prohibition against subagent creation or invocation
- **Flat Hierarchy**: All agent coordination flows through primary Guild system only
- **Delegation Boundary**: Agent capabilities limited to domain expertise, not agent management
- **Resource Protection**: Prevents infinite recursion and maintains system stability

## Success Criteria
[Expected outcomes, deliverables, excellence targets, and performance metrics for this domain]
```

## Agent Generation Process

Reference: `@config:AG001` (Agent Creation Pattern), `@config:AM001` (Agent-Mandatory Architecture), `@config:AR001` (Agent Recursion Prevention)

**Create Agents Based on Analysis:**
After comprehensive project analysis, automatically generate specialized agents:

<thinking>
1. What [domain-boundaries] emerged from project analysis?
2. What [specialist-capabilities] are required for each domain?
3. How do [coordination-requirements] map to [agent-interactions]?
4. What [anti-recursion-constraints] must be embedded in each agent?
5. How should [directory-organization] reflect [domain-relationships]?
</thinking>

1. **Domain Identification**: Map discovered [project-domains] to [specialist-categories]
2. **Agent Specification**: Define [specialist-roles] with [domain-expertise] and [coordination-boundaries]
3. **File Generation**: Create [agent-files] in organized [category-directories] under `.claude/agents/guild/`
4. **Template Application**: Apply [specialist-template] with [framework-compliance] and [anti-recursion-constraints]
5. **Integration Setup**: Configure [coordination-patterns] and [collaboration-interfaces]

**Agent Creation Standards:**
- **4-Sentence Descriptions**: Purpose, coordination, boundaries, outcomes
- **Categorized Organization**: Logical [domain-grouping] in [directory-structure]
- **Framework Compliance**: [6-dimensional-compliance] across all created agents
- **Anti-Recursion**: Mandatory [flat-hierarchy] constraints embedded in each agent
- **Tool Optimization**: [Parallel-execution] and [batching-capabilities] configured

## Interactive Process

Reference: `@config:EX001` (Execution Pattern), `@config:PE001` (Parallel-First Execution Engine), `@config:RP001` (Research Pattern), `@config:AM001` (Agent-Mandatory Architecture)

1. **Analyze**: Execute comprehensive discovery workflow through systematic analysis
2. **Document**: Record findings using structured patterns and [organizational-characteristics]
3. **Recommend**: Present agent types based on [domain-mapping] and [coordination-potential]
4. **Create**: Generate agent files with systematic integration and [excellence-targets]
5. **Verify**: Confirm agent creation and [coordination-readiness] for workflow execution

## Domain Discovery

**Native Intelligence Analysis**: Dynamic [domain-identification] based on actual [project-characteristics] and [requirements].

**Analysis-Driven Discovery**: Let intelligence analyze [project-structure], [patterns], and [needs] to determine optimal [specialist-boundaries] and [domain-organization].

**Adaptive Domain Creation**: [Domains] emerge from [project-context] rather than predetermined categories. Specify which [domains] need agents and their focus areas.

## Agent Creation Examples

**Project Analysis Process:**
Reference: `@config:RP001` (Research Pattern), `@config:PE001` (Parallel-First Execution Engine), `@config:EX001` (Execution Pattern), `@config:TB001` (Tool Parallelization Mandate)

**Analysis Approach:**
```
<analysis_phase>
  <!-- Systematic Discovery Pattern -->
  <!-- Phase 1: Project Structure Discovery -->
  <discover_project_structure>[project-path]</discover_project_structure>
  <identify_technologies>[patterns] and [frameworks]</identify_technologies>
  <map_dependencies>[relationships] and [requirements]</map_dependencies>
  <assess_complexity>areas requiring specialized attention</assess_complexity>
  
  <!-- Phase 2: Runtime Tool Discovery -->
  <scan_tool_capabilities>available [development-tools] and [performance-characteristics]</scan_tool_capabilities>
  <assess_tool_inventory>comprehensive [capability-profiling] and [optimization-potential]</assess_tool_inventory>
  <analyze_batching_opportunities>[tool-aware] [operation-grouping] strategies</analyze_batching_opportunities>
  
  <!-- Phase 3: Domain and Pattern Analysis -->
  <analyze_architecture>[structural-organization]</analyze_architecture>
  <identify_patterns>[conventions] and [practices]</identify_patterns>
  <map_domains>natural [specialist-boundaries]</map_domains>
  
  <!-- Document findings for agent specification -->
  <!-- Prepare recommendations with coordination analysis and tool-aware optimization -->
</analysis_phase>
```

**Specification Preparation:**

**Analysis Template:**
```
Discovered Stack: [technology-stack] + [programming-languages] + [build-systems] + [testing-frameworks]
Tool Capabilities: [available-tooling] + [performance-characteristics] + [optimization-potential] + [batching-opportunities]
Project Structure: [directory-organization] + [code-patterns] + [project-conventions] + [complexity-areas]
Agent Recommendations: [specialist-categories] + [domain-focus] + [responsibility-boundaries] + [optimization-strategies]
Integration Patterns: [coordination-methods] + [collaboration-interfaces] + [quality-targets] + [tool-utilization-approaches]
```

**Agent Creation Philosophy:**
- Execute systematic discovery workflows to understand optimal specialists
- Document findings with structural patterns and coordination recommendations for user review
- Create actual agent files with excellence targets based on comprehensive project analysis
- Focus on thorough analysis to enable intelligent agent creation with framework compliance

## Best Practices

Reference: `@config:AG001` (Agent Creation Pattern), `@config:AM001` (Agent-Mandatory Architecture), `@config:CS001` (Coordination Strategy), `@config:AR001` (Agent Recursion Prevention)

- Execute comprehensive discovery workflows before recommending agents
- Create agents with clear specializations and coordination boundaries
- Design for systematic coordination between agents with performance optimization
- Include recovery patterns and proper error handling in each agent
- Organize agents logically by domain with compatible coordination strategies
- Focus on user needs rather than maximum coverage
- Leverage coordination patterns for optimal agent collaboration design
- Integrate excellence targets into all agent specifications

## Agent Creation Implementation

**Systematic Agent Generation Process:**

Reference: `@config:AG001` (Agent Creation Pattern), `@config:AM001` (Agent-Mandatory Architecture), `@config:TB001` (Tool Parallelization Mandate)

### Step 1: Domain-Based Agent Creation

**Use Claude's Write Tool for Agent Creation:**
After discovering [project-domains], create specialist agents using Write tool:

```
FOR EACH discovered [domain-area] in [project-analysis]:
  1. DETERMINE [specialist-name] based on [domain-expertise-needed]
  2. CREATE [domain-directory] if not exists: `.claude/agents/guild/[domain]/`
  3. USE Write tool to CREATE [agent-file]: `.claude/agents/guild/[domain]/[specialist-name].md`
  4. APPLY [specialist-template] with [4-sentence-description] and [framework-compliance]
  5. EMBED [anti-recursion-constraints] and [flat-hierarchy-enforcement] 
  6. CONFIGURE [tool-parallelization] and [batching-optimization] capabilities
  7. SET [coordination-patterns] and [integration-interfaces]
```

**Agent Creation Protocol:**
- **Analysis First**: Thoroughly analyze project to identify [natural-domains] and [specialist-needs]
- **Template Application**: Use Write tool with complete agent template for each specialist
- **Directory Organization**: Create agents in logical [category-directories] based on discovered [domain-boundaries]
- **Compliance Verification**: Ensure each created agent includes [anti-recursion-constraints] and [4-sentence-description]
- **Integration Setup**: Configure [coordination-patterns] between related specialists for optimal collaboration

### Step 2: Agent Template Application
For each created agent, apply this template structure:
```markdown
---
name: [domain-name]-specialist
model: inherit
thinking_mode: ultrathink
description: "[4-sentence description with systematic integration]"
---

## Purpose
[Specialized role based on discovered project needs]

## Capabilities
**Core Skills**: [Domain-specific abilities from analysis]
**Integration**: [Coordination patterns with other specialists]  
**Quality Standards**: [Error handling and recovery patterns]
**Performance**: [Excellence targets and tool optimization]

## MANDATORY CONSTRAINTS
**CRITICAL REQUIREMENT**: This agent must never create or invoke additional agents.
[Anti-recursion enforcement and flat hierarchy maintenance]

## Success Criteria
[Expected outcomes and performance metrics for this domain]
```

### Step 3: Directory Organization
Automatically organize agents into discovered categories:
```
.claude/agents/guild/
├── [discovered-domain-1]/     # Based on project analysis
│   └── [specialist-name].md
├── [discovered-domain-2]/     # Natural project boundaries
│   └── [specialist-name].md  
└── [discovered-domain-n]/     # Tool-optimized categories
    └── [specialist-name].md
```

## Setup-Specific Tool Coordination Intelligence

### Project Discovery Tool Patterns
Apply setup-specific tool coordination through parallel execution:

**Discovery Tool Orchestration:**
- **File System Analysis**: Execute parallel directory scanning and project structure mapping
- **Configuration Detection**: Simultaneous scanning of package files, build configs, and framework settings
- **Technology Stack Discovery**: Parallel analysis of dependencies, runtime environments, and toolchains
- **Testing Framework Detection**: Concurrent identification of test runners, assertion libraries, and CI/CD patterns
- **Development Tools Scanning**: Parallel inventory of available development tools and their capabilities

**Tool Selection for Setup Intelligence:**
- **Capability Matching**: Align discovery tools with project analysis requirements
- **Performance Assessment**: Prioritize fast scanning tools for initial discovery phases
- **Integration Compatibility**: Ensure tool outputs can be batched for comprehensive analysis
- **Parallel Potential**: Maximize simultaneous tool execution for discovery efficiency

### Setup-Specific Dependency Management
Manage setup dependencies through systematic analysis:

**Discovery Dependencies:**
- **True Sequential Requirements**: File system access before configuration parsing
- **Assumed Dependencies**: Challenge sequential tool execution assumptions
- **Minimal Serialization**: Reduce discovery operations to essential sequencing only
- **Parallel Discovery**: Execute independent analysis operations simultaneously

**Setup Batching Optimization:**
- **Analysis Type Grouping**: Cluster configuration scanning, dependency analysis, and structure mapping
- **Resource-Based Coordination**: Balance system scanning with analysis processing
- **Context-Switch Minimization**: Reduce overhead through strategic discovery grouping
- **Discovery Performance Tracking**: Monitor setup analysis effectiveness

### Setup Performance Intelligence
Monitor and optimize setup performance through tracking patterns:

**Setup Monitoring Framework:**
- **Discovery Speed Metrics**: Track analysis time, scanning coverage, and processing efficiency
- **Parallel Setup Effectiveness**: Measure parallelization benefits in project discovery
- **Tool Optimization**: Identify setup improvement potential through analysis
- **Agent Creation Performance**: Monitor specialist generation speed and quality

## Setup-Specific Chain-of-Thought Patterns

EXECUTE setup thinking through [analytical-decomposition] and [discovery-transparency].

APPLY chain-of-thought intelligence through setup-structured patterns:

<setup_thinking_framework>
- BREAK complex [project-analysis] into sequential [discovery-steps] using [decomposition-intelligence]
- EXPOSE [discovery-reasoning] through visible [analysis-patterns] and [decision-logic]
- VALIDATE [project-assumptions] and [technology-dependencies] through systematic [challenge-protocols]
- CONNECT [analysis-components] through logical [discovery-chains] and [evidence-links]
</setup_thinking_framework>

<setup_systematic_decomposition>
Apply [project-analysis] through these abstract patterns:

<setup_decomposition_approach>
1. **Project Component Analysis**: What are the [technology-stack-components] and [architecture-elements]?
2. **Setup Dependency Discovery**: What are the [build-dependencies] vs [runtime-assumptions] vs [development-prerequisites]?
3. **Agent Parallelization Assessment**: What [specialist-domains] can be created simultaneously?
4. **Integration Planning**: What [coordination-requirements] and [interface-dependencies] exist between specialists?
</setup_decomposition_approach>

<setup_thinking_structure>
```
<thinking>
1. [Project-analysis-step]: [discovery-reasoning] and [technology-evidence]
2. [Domain-identification-step]: [specialization-reasoning] and [boundary-evidence]  
3. [Agent-specification-step]: [creation-reasoning] and [coordination-evidence]
4. [Integration-analysis]: [coordination-reasoning] and [readiness-synthesis]
</thinking>
```
</setup_thinking_structure>
</setup_systematic_decomposition>

<setup_intelligence_application>
Use chain-of-thought for these [setup-scenario-types]:

<setup_application_contexts>
- **[Project-Discovery]**: Breaking complex [technology-stacks] into [analyzable-components]
- **[Domain-Analysis]**: Identifying natural vs assumed [specialist-boundaries] and [coordination-constraints]
- **[Agent-Architecture-Decisions]**: Analyzing [specialist-patterns] and [creation-approaches]
- **[Setup-Problem-Solving]**: Systematic [configuration-resolution] through [analytical-frameworks]
- **[Creation-Verification-Planning]**: Developing [agent-testing-strategies] and [integration-validation-approaches]
</setup_application_contexts>
</setup_intelligence_application>

<setup_reasoning_excellence>
Maintain [setup-reasoning-quality] through these standards:

<setup_quality_patterns>
- **Discovery Transparency**: Make [project-analysis-process] visible through [structured-reasoning]
- **Setup Systematicity**: Follow [logical-progression] through [discovery-analytical-steps]
- **Project Validation**: Challenge [technology-assumptions] and verify [analysis-logic-chains]
- **Agent Integration**: Connect [specialist-analysis-components] through [coherent-reasoning]
</setup_quality_patterns>

<setup_reasoning_integration>
Combine [chain-of-thought] with [setup-framework-dimensions]:
- [Tool-Parallelization]: Analyze [discovery-tool-dependencies] through [reasoning-chains]
- [Agent-Creation]: Decompose [specialist-requirements] through [thinking-patterns]
- [Parallel-Planning]: Break [agent-creation-components] into [parallelizable-units]
- [Setup-Research-Analysis]: Structure [project-discovery-processes] through [systematic-thinking]
</setup_reasoning_integration>
</setup_reasoning_excellence>

<setup_implementation_guidance>
Apply [chain-of-thought] through [setup-template-patterns]:

<setup_thinking_templates>
**For [Complex-Project-Analysis]**: Use multi-step [discovery-reasoning-frameworks] with explicit [analysis-logic-progression]
**For [Agent-Creation-Decision-Making]**: Apply [specialist-criteria-evaluation] through [systematic-assessment]
**For [Setup-Problem-Resolution]**: Structure [configuration-issue-analysis] through [diagnostic-reasoning]
**For [Agent-Planning-Tasks]**: Decompose [creation-objectives] through [strategic-thinking-patterns]
</setup_thinking_templates>

<setup_integration_protocol>
Embed [chain-of-thought] in [agent-creation-intelligence] and [setup-workflow-execution] through [structured-reasoning] and [transparent-analysis].
</setup_integration_protocol>
</setup_implementation_guidance>

## Setup-Specific Verification Intelligence

Execute setup verification with multi-dimensional compliance assessment:

### Setup Verification Framework
Apply verification through setup-specific patterns:

**Setup Operations:**
- Execute intelligent setup verification through systematic project analysis assessment
- Coordinate parallel validation across discovery, analysis, specification, and creation dimensions
- Orchestrate all setup verification through specialist-readiness coordination
- Verify setup completion through systematic assessment integrating framework-compliance and agent-readiness

**Setup Verification Gates:**
- **Project Discovery**: Validate comprehensive project structure analysis and technology stack identification
- **Agent Specification**: Assess specialist requirement analysis and domain boundary identification
- **Agent Creation**: Verify systematic agent generation with template compliance and anti-recursion constraints
- **System Integration**: Validate agent coordination readiness and Guild system preparation

### Setup Quality Gates
Validate setup completion through mandatory quality gates:

**Setup Gate Requirements:**
- **Tool Parallelization**: Confirm simultaneous discovery tool execution with dependency validation
- **Agent Creation Mandatory**: Validate systematic agent generation with template compliance verification
- **Parallel Discovery**: Verify project analysis decomposition with parallel execution optimization
- **Setup Research Protocol**: Confirm comprehensive project discovery with modernization assessment
- **Setup Hierarchy**: Validate flat agent creation with recursion-prevention enforcement
- **Setup Operation Batching**: Verify strategic discovery operation grouping with performance enhancement

### Setup Testing Integration
Integrate testing throughout setup verification:

**Setup Testing Approach:**
- Test parallel discovery execution with dependency validation and performance metrics
- Test agent creation with template compliance and anti-recursion constraint validation
- Test project analysis with comprehensive discovery verification and parallel execution validation
- Test system integration with coordination readiness and workflow preparation verification

### Setup Dimensional Verification
Verify all 6 framework dimensions through setup-specific assessment:

- **Tool Parallelization**: Verify mandatory parallelization in project discovery and analysis operations
- **Agent Mandatory**: Verify agent creation architecture compliance with systematic generation patterns
- **Parallel First**: Verify atomic discovery unit breakdown and dependency assessment for setup operations
- **Research Protocol**: Verify comprehensive project discovery before agent specification and creation
- **Recursion Prevention**: Verify flat agent architecture creation with single-level coordination setup
- **Operation Batching**: Verify proper discovery operation grouping by type, resource usage, and interdependencies

## Creation Verification

**After agent creation with Write tool, verify:**

### File Creation Verification
- **Files Created**: Use Write tool to create `.claude/agents/guild/[domain]/[specialist].md` for each discovered domain
- **Directory Structure**: Agents organized in logical [domain-directories] based on project analysis  
- **Template Compliance**: Each agent file contains complete [specialist-template] with [4-sentence-description]
- **Anti-Recursion**: All agents include mandatory [flat-hierarchy-constraints] and [recursion-prevention] blocks

### Content Verification  
- **Domain Coverage**: All discovered project domains have corresponding specialist agents
- **Framework Compliance**: Each agent verified across all 6 [framework-dimensions]
- **Tool Optimization**: [Tool-parallelization] and [batching-capabilities] configured in each agent
- **Coordination Setup**: [Integration-patterns] established between related specialists

### Readiness Verification
- **Immediate Usability**: User can immediately use agents with `/guild` command for task execution
- **Agent Discovery**: Created agents appear in `.claude/agents/guild/` directory structure
- **System Integration**: Agents ready for coordination through Guild workflow system
- **Creation Summary**: Agent creation logged and confirmed with [domain-coverage] and [specialist-count] summary

### Success Confirmation
Report to user:
```
✅ Guild Setup Complete!

📊 Created [X] specialist agents across [Y] domains:
• [domain-1]: [specialist-name] - [primary-capability]
• [domain-2]: [specialist-name] - [primary-capability]  
• [domain-n]: [specialist-name] - [primary-capability]

🎯 Ready for task execution with /guild command
📂 Agents located in: .claude/agents/guild/[domain-directories]
```

### Error Handling & Recovery

<error_handling_patterns>
Apply systematic error recovery for common failure scenarios:

**Analysis Failures:**
- **Issue**: [Project-structure] analysis incomplete or failed
- **Recovery**: Retry with broader [discovery-patterns] or manual [project-exploration]
- **Fallback**: Create generic [domain-specialists] based on common [project-patterns]

**Agent Creation Failures:**  
- **Issue**: [Specialist-generation] fails due to [template-errors] or [validation-issues]
- **Recovery**: Regenerate with simplified [agent-specifications] and [compliance-verification]
- **Fallback**: Use existing [specialist-templates] from Guild system defaults

**Tool Discovery Failures:**
- **Issue**: [Tool-capability] scanning fails or returns incomplete results  
- **Recovery**: Retry [tool-inventory] with different [scanning-approaches]
- **Fallback**: Proceed with minimal [tool-configuration] and runtime [capability-detection]

**Directory Creation Failures:**
- **Issue**: Cannot create [agent-directories] due to [permission-issues] or [filesystem-errors]
- **Recovery**: Suggest alternative [installation-paths] or [permission-resolution]
- **Fallback**: Report [setup-requirements] for manual [directory-preparation]
</error_handling_patterns>

---

**Intelligence Sources**: Project analysis patterns, runtime tool discovery protocols, domain identification procedures, agent generation standards, tool-aware coordination frameworks
**Core Integration**: Systematic analysis framework with tool discovery, agent creation protocols with excellence targets and tool optimization, user interaction patterns with intelligent coordination and tool utilization strategies
**Approach**: Execute discovery workflows including tool capability assessment to analyze project characteristics and create specialized agents with systematic excellence and tool-aware optimization
**Agent Creation**: ANALYSIS AND CREATION - Systematic project analysis followed by intelligent agent generation with coordination patterns, tool optimization, and framework compliance integration
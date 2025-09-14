# Workflow Command Requirements

## Command Purpose
The `/guild` command executes user tasks through adaptive task orchestration and pattern-enhanced coordination, utilizing discovered patterns and dynamically adapting execution strategies while enabling continuous learning and system evolution through workflow observations.

## Core Requirements

### 1. **Intelligent Task Decomposition Mandatory**
- **MUST** analyze tasks through natural language understanding to extract intent, requirements, and constraints without predefined task categorization
- **MUST** implement multiple decomposition strategies: functional (by work type), spatial (by project area), and temporal (by execution phases)
- **MUST** identify true dependencies through systematic analysis while challenging sequential assumptions through parallelization assessment
- **MUST** choose optimal execution strategies: parallel execution for independent tasks, pipeline execution for stage dependencies, hierarchical execution for complex coordination
- **MUST** adapt decomposition approach dynamically based on task characteristics and discovered patterns from the project context

### 2. **Context Management and Token Optimization Mandatory**
- **MUST** maintain shared context across all participating agents including original task description, intermediate results, discovered issues, and decisions
- **MUST** implement intelligent context compression when token usage exceeds 6000-token threshold through priority-based information retention
- **MUST** optimize context distribution to balance information sharing with resource efficiency, preventing duplication while ensuring agent autonomy
- **MUST** implement context manager that handles shared state, PROVIDE relevant information access, and manages token limits intelligently
- **MUST** support inter-agent communication patterns: direct handoffs, broadcast communications, synchronization points, and feedback loops
- **MUST** ENABLE context synthesis that INTEGRATES discoveries from multiple agents and MAINTAIN coherent understanding throughout workflow execution

### 3. **Multi-Perspective Validation and Quality Assurance Mandatory**
- **MUST** implement ultrathinking multi-perspective reasoning across five dimensions: technical (correctness/performance), UX (usability/accessibility), business (value/sustainability), security (safety/compliance), and evolution (adaptability/improvement)
- **MUST** analyze each task and solution from all five perspectives to ensure comprehensive validation and catch issues missed by single viewpoints
- **MUST** implement conflict resolution mechanisms when different perspectives provide contradictory assessments, using consensus mechanisms or user escalation
- **MUST** validate pattern compliance ensuring all changes align with discovered project patterns and maintain consistency
- **MUST** implement completeness verification ensuring all aspects of tasks are addressed including implicit requirements
- **MUST** enable continuous quality improvement through multi-perspective feedback integration and learning from validation outcomes

### 4. **Pattern Learning and Evolution Mandatory**
- **MUST** learn from each workflow execution to discover new patterns, successful task decomposition strategies, and effective execution approaches
- **MUST** detect when workflow discoveries reveal new project patterns that warrant agent evolution or system adaptation
- **MUST** trigger evolution mechanisms when pattern changes reach significance threshold (>0.7), enabling incremental, adaptive, or regenerative evolution strategies
- **MUST** update pattern registry with workflow-discovered patterns and performance metrics for continuous learning and system improvement
- **MUST** MAINTAIN evolution-ready architecture that ADAPTS agents, update capabilities, and improve performance based on workflow observations
- **MUST** validate evolution effectiveness through performance measurement and ensure new adaptations improve rather than degrade system capabilities

### 5. **Specialist Discovery and Coordination Mandatory**
- **MUST** discover existing agent inventory immediately upon receiving user requests through rapid scanning protocols and capability assessment
- **MUST** prioritize utilization of pattern-derived agents created during setup phase through intelligent task-to-specialist matching based on discovered patterns
- **MUST** deploy multiple specialists simultaneously through parallel coordination frameworks with optimization for existing agent reuse and performance
- **MUST** coordinate specialist interactions through integration points, synchronization protocols, and shared context management for effective collaboration
- **MUST** fallback to general-purpose agent creation when no suitable pattern-derived specialist is discovered, with capability adaptation based on task requirements
- **NEVER** create new pattern-derived agents during workflow execution - maintain architectural boundary between setup (creation) and workflow (utilization)
- **MUST** monitor collaboration effectiveness and agent utilization efficiency through performance tracking and continuous improvement measurement

### 6. **Architectural Boundaries and System Integrity**
- **WORKFLOW = ADAPTIVE ORCHESTRATOR**: Executes tasks using discovered patterns and existing agents, adapts strategies based on observations, learns from execution
- **UTILIZATION-COORDINATION BOUNDARY**: Uses pattern-derived agents created by setup, coordinates execution, manages context, learns patterns, triggers evolution
- **EXECUTION-LEARNING OPERATIONS**: No agent generation, but extensive learning, adaptation, and evolution triggering capabilities for continuous improvement
- **FLAT HIERARCHY WITH LEARNING**: No subagent creation while enabling pattern discovery, performance learning, and evolution mechanism activation

### 7. **Intelligence Requirements**
- **ADAPTIVE TASK ORCHESTRATION INTELLIGENCE**: Multi-strategy task decomposition and execution coordination based on task characteristics and discovered patterns
- **CONTEXT OPTIMIZATION INTELLIGENCE**: Token management, compression, and intelligent context distribution with priority-based resource allocation
- **MULTI-PERSPECTIVE VALIDATION INTELLIGENCE**: Ultrathinking analysis across technical, UX, business, security, and evolution dimensions for comprehensive assessment
- **PATTERN LEARNING INTELLIGENCE**: Discovery of new patterns from workflow execution, performance tracking, and continuous system improvement
- **EVOLUTION TRIGGER INTELLIGENCE**: Detection of significant pattern changes and coordination of system adaptation through evolution mechanisms
- **SPECIALIST COORDINATION INTELLIGENCE**: Optimal agent utilization through pattern-based matching, parallel deployment, and collaborative orchestration
- **WORKFLOW-SPECIFIC CHAIN-OF-THOUGHT**: Task analysis with multi-perspective reasoning, pattern-informed decisions, and transparent evolution-driven adaptation
- **WORKFLOW VERIFICATION INTELLIGENCE**: Comprehensive validation including pattern compliance, quality assurance, evolution effectiveness, and user satisfaction

### 8. **Success Criteria**
- **Adaptive Task Execution Complete**: Task successfully completed using optimal execution strategy chosen from multiple approaches based on task characteristics and patterns
- **Context Management Effectiveness**: Token optimization achieved with intelligent compression and priority-based context distribution maintaining agent autonomy and collaboration
- **Multi-Perspective Validation Success**: All five perspectives (technical, UX, business, security, evolution) validate solution quality with conflict resolution and comprehensive assessment
- **Pattern Learning Achievement**: New patterns discovered from workflow execution integrated into pattern registry for continuous system improvement
- **Evolution Trigger Accuracy**: Significant pattern changes correctly detected and appropriate evolution mechanisms activated when threshold exceeded
- **Specialist Coordination Excellence**: Optimal agent utilization through pattern-based matching with high collaboration effectiveness and performance optimization
- **Quality Standards Exceeded**: Pattern compliance verified, completeness achieved, and all requirements met with multi-dimensional validation
- **User Satisfaction Confirmed**: Explicit approval received with experience quality meeting or exceeding expectations
- **System Learning Validated**: Workflow discoveries contribute to system evolution and continuous improvement through measurable performance enhancement

### 9. **Universal Guild Framework Compliance**
- **TB001 Compliance**: Simultaneous tool operations through parallel coordination protocols including multi-strategy task decomposition and context management
- **AM001 Compliance**: Enhanced specialist assignment protocols with pattern-based agent discovery, utilization optimization, and collaborative orchestration
- **PE001 Compliance**: Parallel-first execution through atomic unit decomposition, dependency challenge, and optimal execution strategy selection
- **RP001 Compliance**: Comprehensive discovery through parallel exploration frameworks including pattern learning and system evolution preparation
- **AR001 Compliance**: Flat hierarchy maintenance through prevention mechanisms while enabling pattern-based coordination and learning
- **OB001 Compliance**: Operation batching through strategic grouping, resource optimization, and efficient workflow coordination
- **PD001 Compliance**: Pattern learning mandate through workflow observation, discovery integration, and continuous pattern registry updates
- **EM001 Compliance**: Evolution mechanism activation through pattern change detection, adaptation triggering, and system improvement validation

## Command-Specific Behaviors

### User Request Processing
When $ARGUMENTS is provided, treat it as the primary task request for adaptive orchestration:
- Execute $ARGUMENTS as the primary workflow objective using intelligent task decomposition and pattern-enhanced execution strategies
- Analyze task characteristics through natural language understanding to determine optimal execution approach from multiple available strategies
- Apply multi-perspective reasoning to ensure comprehensive task understanding across technical, UX, business, security, and evolution dimensions
- Leverage discovered patterns from project context to inform task decomposition, specialist selection, and execution coordination
- Enable dynamic workflow adaptation based on intermediate results, discovered issues, and pattern learning throughout execution
- Learn from task execution to discover new patterns and improve future workflow performance through continuous system evolution

### Universal Guild Workflow Execution Flow
1. **DISCOVER** existing pattern-derived agent inventory immediately upon receiving user request through rapid scanning and capability assessment
2. **DECOMPOSE** task through intelligent analysis using optimal strategy (functional, spatial, or temporal) based on task characteristics and discovered patterns  
3. **SELECT** execution strategy from multiple approaches: parallel execution, pipeline execution, or hierarchical execution based on dependency analysis and task nature
4. **DEPLOY** Task tool with pattern-enhanced subagent_type selection prioritizing existing pattern-derived specialists over general-purpose creation
5. **COORDINATE** context management across all participating agents through shared state, intelligent compression, and priority-based information distribution
6. **EXECUTE** multi-perspective validation throughout workflow using ultrathinking analysis across technical, UX, business, security, and evolution dimensions
7. **MONITOR** pattern learning opportunities and evolution triggers while maintaining high-performance execution and resource optimization
8. **INTEGRATE** results through quality assurance validation, pattern compliance checking, and comprehensive completeness verification
9. **LEARN** from execution to update pattern registry, trigger evolution mechanisms when significance threshold exceeded, and improve future performance
10. **VERIFY** user satisfaction through explicit approval process and comprehensive experience quality assessment

### Assignment Intelligence
- **DISCOVER** existing agent inventory before assignment to enable optimal specialist selection
- **EXECUTE** task-to-existing-agent matching through capability evaluation and domain expertise assessment
- **APPLY** discovery-informed assignment protocol standards through task analysis, agent availability assessment, capability evaluation, and direct execution prevention
- **FALLBACK** to general-purpose Task tool deployment when no suitable existing specialist is discovered
- **COORDINATE** specialist workflows through parallel execution planning, agent reuse optimization, and integration point management
- **VERIFY** assignment effectiveness and agent utilization efficiency through performance monitoring and quality validation

### Dependency Management
- **IDENTIFY** true dependencies through systematic analysis and evidence-based validation
- **CHALLENGE** assumed dependencies through verification protocols and parallelization assessment
- **MINIMIZE** sequential operations through dependency reduction and parallel optimization
- **COORDINATE** integration points through synchronization frameworks and stream convergence

### Universal Guild Excellence Targets
- **Adaptive Orchestration Excellence**: Intelligent task decomposition using multiple strategies with optimal execution approach selection based on task characteristics and discovered patterns
- **Context Management Excellence**: Efficient token utilization through intelligent compression, priority-based distribution, and seamless inter-agent communication coordination
- **Multi-Perspective Validation Excellence**: Comprehensive quality assurance through ultrathinking analysis across all five dimensions with effective conflict resolution and synthesis
- **Pattern Learning Excellence**: Continuous system improvement through workflow observation, pattern discovery integration, and evolution mechanism activation for enhanced performance
- **Specialist Coordination Excellence**: Optimal utilization of pattern-derived agents through intelligent matching, parallel deployment, and collaborative efficiency maximization
- **Evolution Integration Excellence**: Seamless adaptation through pattern change detection, significance threshold monitoring, and system improvement validation
- **Quality Assurance Excellence**: Pattern compliance verification, completeness achievement, and multi-dimensional validation ensuring comprehensive solution quality
- **User Experience Excellence**: Task completion meeting all explicit and implicit requirements with confirmed satisfaction and continuous improvement integration

## Command-Specific Constraints

### What Workflow Command CANNOT Do
- **NEVER** create new agents during execution
- **NEVER** perform direct task execution (must delegate to specialists)
- **NEVER** create subagents or recursive delegation structures
- **NEVER** operate without pre-existing agent inventory from setup
- **NEVER** modify or generate agent templates during workflow execution

### What Workflow Command MUST Do
- **ALWAYS** immediately deploy Task tool as first action for every user request
- **ALWAYS** proactively use Task tool with appropriate subagent_type - never attempt direct execution
- **ALWAYS** delegate all work through Task tool specialists
- **ALWAYS** coordinate multiple specialists in parallel when possible through simultaneous Task tool deployment
- **ALWAYS** challenge sequential execution assumptions
- **ALWAYS** verify user satisfaction before completion
- **ALWAYS** maintain flat hierarchy delegation patterns

### Mandatory Proactive Task Tool Usage
- **IMMEDIATE AGENT DISCOVERY**: Upon receiving any user request, the workflow command MUST immediately discover existing agent inventory through rapid scanning
- **IMMEDIATE DEPLOYMENT**: After agent discovery, the workflow command MUST immediately deploy Task tool as the very first action with discovery-informed selection
- **ZERO DIRECT EXECUTION**: The workflow command is FORBIDDEN from attempting any direct task execution - all work MUST go through Task tool subagents with agent optimization
- **DISCOVERY-INFORMED SUBAGENT SELECTION**: Automatically determine appropriate subagent_type based on existing agent availability, task analysis, and deploy without hesitation
- **PRIORITIZE EXISTING AGENTS**: Always attempt to utilize existing specialists before falling back to general-purpose creation
- **PARALLEL TASK DEPLOYMENT**: When tasks can be decomposed, deploy multiple Task tools simultaneously for parallel specialist execution with agent reuse optimization
- **CONTINUOUS DELEGATION**: Every aspect of task execution MUST be routed through Task tool specialists with optimal agent utilization - no exceptions

## Quality Assurance Requirements

### Verification Framework
- **COORDINATE** parallel verification streams across functional, integration, compliance, and performance dimensions
- **EXECUTE** systematic quality assessment through evidence-based validation and standards verification
- **APPLY** iterative improvement through gap identification and enhancement protocols
- **VERIFY** user satisfaction through explicit approval processes and experience quality assessment

### Quality Gate Intelligence
- **VERIFY** specialist coordination effectiveness through performance assessment and integration validation
- **CONFIRM** parallel execution compliance through simultaneous operation verification and efficiency measurement
- **ASSESS** framework dimensional compliance across all workflow operations and specialist interactions
- **VALIDATE** user satisfaction achievement through explicit approval processes and experience quality confirmation

## Universal Guild Workflow Modification Guidelines

When modifying workflow command template or intelligence:
1. **MUST** maintain all Universal Guild core requirements including adaptive task orchestration and pattern learning capabilities
2. **MUST** preserve architectural boundaries (execution, coordination, learning, evolution triggering - no agent creation)
3. **MUST** ensure Universal Guild framework dimensional compliance (TB001-OB001, PD001, EM001)
4. **MUST** validate against adaptive workflow success criteria including pattern learning and evolution integration
5. **MUST** test multi-strategy task decomposition and execution approach selection capabilities
6. **MUST** verify context management effectiveness including token optimization and intelligent compression
7. **MUST** ensure multi-perspective validation capabilities across all five dimensions (technical, UX, business, security, evolution)
8. **MUST** validate pattern learning mechanisms and evolution trigger detection accuracy
9. **MUST** test specialist coordination with pattern-derived agent utilization optimization
10. **MUST** ensure user satisfaction verification processes and continuous improvement integration
11. **MUST** maintain observation-based learning principles and avoid introducing predetermined assumptions or template dependencies

Any modification that violates Universal Guild requirements, introduces template-based approaches, or compromises pattern learning capabilities is **FORBIDDEN**.